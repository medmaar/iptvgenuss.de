// Builds the static site into dist/. No dependencies: `node build.mjs`.
// Fails on broken internal links, duplicate paths or a missing <h1>;
// warns about title/description lengths and missing business details.
import { cp, mkdir, readFile, rm, writeFile, access } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { page } from './src/layout.mjs';
import { site, missing } from './src/site.mjs';
import home from './src/pages/home.mjs';

const out = 'dist';
await rm(out, { recursive: true, force: true });
await cp('public', out, { recursive: true });

// Minify the stylesheet: drop comments and collapse whitespace.
const css = await readFile('public/css/site.css', 'utf8');
await writeFile(join(out, 'css/site.css'), css
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/\s+/g, ' ')
  .replace(/\s*([{};,>])\s*/g, '$1')
  .replace(/;}/g, '}')
  .trim() + '\n');

// Cache-busting version from the asset contents.
const hash = createHash('sha1');
for (const f of ['public/css/home.css', 'public/js/home.js', 'public/brand/genuss-iptv.svg', 'public/favicon.svg']) hash.update(await readFile(f));
const version = hash.digest('hex').slice(0, 10);

const pages = [home()];
const fileFor = (p) => (p.endsWith('.html') ? join(out, p) : join(out, p, 'index.html'));
const warnings = [];
const errors = [];

const seen = new Set();
const html = new Map();
for (const p of pages) {
  if (seen.has(p.path)) errors.push(`Duplicate page path ${p.path}`);
  seen.add(p.path);
  const doc = page(p).replaceAll('__V__', version);
  if ((doc.match(/<h1[\s>]/g) || []).length !== 1) errors.push(`${p.path}: needs exactly one <h1>`);
  if (!p.noindex) {
    if (p.title.length > 65) warnings.push(`${p.path}: title is ${p.title.length} chars (aim for ≤ 65)`);
    if (p.description.length < 110 || p.description.length > 160) warnings.push(`${p.path}: description is ${p.description.length} chars (aim for 110–160)`);
  }
  for (const [, json] of doc.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(json);
  html.set(p.path, doc);
  const file = fileFor(p.path);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, doc);
}

// Every internal link and asset must exist; every #anchor must exist on its page.
const exists = (f) => access(f).then(() => true, () => false);
for (const [path, doc] of html) {
  for (const [, raw] of doc.matchAll(/(?:href|src)="(\/[^"]*|#[^"]*)"/g)) {
    const [target, anchor] = (raw.startsWith('#') ? path + raw : raw).replace(/\?[^#]*/, '').split('#');
    if (!(await exists(target.endsWith('/') ? join(out, target, 'index.html') : join(out, target)))) errors.push(`${path}: broken link ${raw}`);
    if (anchor && html.has(target) && !html.get(target).includes(`id="${anchor}"`)) errors.push(`${path}: missing anchor ${raw}`);
  }
}

const indexable = pages.filter((p) => !p.noindex);
await writeFile(join(out, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable.map((p) => `  <url><loc>${site.url}${p.path}</loc></url>`).join('\n')}
</urlset>
`);
await writeFile(join(out, 'robots.txt'), site.live
  ? `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`
  : 'User-agent: *\nDisallow: /\n');

for (const w of warnings) console.warn(`warn: ${w}`);
if (!site.live) console.log(`Preview build (site.live = false). Still missing: ${missing().join('; ')}`);
if (errors.length) {
  for (const e of errors) console.error(`error: ${e}`);
  process.exit(1);
}
console.log(`Built ${pages.length} ${pages.length === 1 ? 'page' : 'pages'} into ${out}/ (assets v=${version})`);
