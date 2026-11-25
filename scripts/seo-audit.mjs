// SEO audit over the built site (dist/). Run after `node build.mjs`:
//   node scripts/seo-audit.mjs            → summary + per-page issues
//   node scripts/seo-audit.mjs --json     → machine-readable report
// Checks head tags, headings, keyword placement, depth, links, schema,
// CTAs/trust signals and near-duplicate content across all pages.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = 'dist';
const SITE = 'https://iptvgenuss.de';
const files = [];
const walk = (d) => { for (const f of readdirSync(d)) { const p = join(d, f); if (statSync(p).isDirectory()) walk(p); else if (f.endsWith('.html')) files.push(p); } };
walk(root);

const sitemap = readFileSync(join(root, 'sitemap.xml'), 'utf8');
const sitemapUrls = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
const redirects = readFileSync(join(root, '_redirects'), 'utf8').split('\n').filter((l) => l.trim() && !l.startsWith('#')).map((l) => l.trim().split(/\s+/));

const strip = (h) => h.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ').trim();
const decode = (s) => s && s.replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const meta = (doc, attr, name) => decode((doc.match(new RegExp(`<meta ${attr}="${name}" content="([^"]*)"`)) || [])[1]);
const words = (s) => s.toLowerCase().match(/[a-zäöüß0-9]+/g) || [];
const norm = (s) => s.toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss');

const pages = [];
for (const f of files) {
  const doc = readFileSync(f, 'utf8');
  const path = '/' + f.slice(root.length + 1).replace(/index\.html$/, '');
  const issues = [];
  const add = (sev, msg) => issues.push([sev, msg]);
  const title = decode((doc.match(/<title>([^<]*)<\/title>/) || [])[1]);
  const desc = meta(doc, 'name', 'description');
  const canonical = (doc.match(/<link rel="canonical" href="([^"]*)"/) || [])[1];
  const robots = meta(doc, 'name', 'robots') || '';
  const noindex = robots.includes('noindex');

  if (!title) add('error', 'missing <title>');
  else if (title.length < 50 || title.length > 60) add('warn', `title ${title.length} chars: "${title}"`);
  if (!desc) add('error', 'missing meta description');
  else if (desc.length < 120 || desc.length > 155) add('warn', `description ${desc.length} chars`);
  if (canonical !== SITE + path) add('error', `canonical ${canonical} ≠ ${SITE + path}`);
  if (!doc.includes('hreflang="x-default"')) add('error', 'missing hreflang x-default');
  if (!/hreflang="de(-DE)?"/.test(doc)) add('error', 'missing hreflang de');
  for (const p of ['og:title', 'og:description', 'og:url', 'og:image', 'og:type', 'og:locale', 'og:site_name', 'og:image:alt']) if (!meta(doc, 'property', p)) add('error', `missing ${p}`);
  if (meta(doc, 'property', 'og:url') && meta(doc, 'property', 'og:url') !== canonical) add('error', 'og:url ≠ canonical');
  for (const p of ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image', 'twitter:image:alt']) if (!meta(doc, 'name', p)) add('error', `missing ${p}`);
  if (!noindex && !sitemapUrls.has(SITE + path)) add('error', 'not in sitemap.xml');

  // Render-blocking: scripts in <head> without defer/async; stylesheets other than one.
  const head = doc.split('</head>')[0];
  for (const [, attrs] of head.matchAll(/<script(?![^>]*application\/(?:ld\+)?json)([^>]*)>/g)) if (!/\b(defer|async)\b/.test(attrs) && /src=/.test(attrs)) add('error', `render-blocking script ${attrs.trim()}`);
  const sheets = (head.match(/<link rel="stylesheet"/g) || []).length;
  if (sheets > 1) add('warn', `${sheets} stylesheets in <head>`);
  for (const [img] of doc.matchAll(/<img\b[^>]*>/g)) if (!/width=/.test(img) || !/height=/.test(img)) add('warn', `img without dimensions ${img.slice(0, 80)}`);

  // Headings.
  const main = (doc.match(/<main[^>]*>([\s\S]*)<\/main>/) || [, doc])[1];
  const h1s = [...doc.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => strip(m[1]));
  if (h1s.length !== 1) add('error', `${h1s.length} <h1>`);
  const levels = [...main.matchAll(/<h([1-6])[\s>]/g)].map((m) => +m[1]);
  for (let i = 1; i < levels.length; i++) if (levels[i] > levels[i - 1] + 1) { add('warn', `heading jump h${levels[i - 1]}→h${levels[i]}`); break; }

  // Primary keyword = title part before the first separator.
  const primary = (title || '').split(/\s[|–:-]\s|:\s/)[0].trim();
  const text = strip(main);
  const w = words(text);
  const first100 = norm(w.slice(0, 130).join(' '));
  const kw = norm(primary).match(/[a-z0-9]+/g) || [];
  const core = kw.filter((k) => k.length > 2 && !['und', 'mit', 'fuer', 'die', 'der', 'das', 'ihr', 'ihre', 'auf', 'den', 'von', 'alle'].includes(k));
  const missingCore = core.filter((k) => !first100.includes(k));
  if (core.length && missingCore.length > Math.floor(core.length / 2)) add('warn', `primary keyword "${primary}" not in first 100 words (missing: ${missingCore.join(', ')})`);
  if (h1s[0] && core.length && core.filter((k) => !norm(h1s[0]).includes(k)).length > Math.floor(core.length / 2)) add('warn', `H1 "${h1s[0]}" does not carry "${primary}"`);
  const countKw = core.length ? Math.min(...core.map((k) => (norm(text).match(new RegExp(k, 'g')) || []).length)) : 0;
  const density = w.length ? (countKw / w.length) * 100 : 0;
  if (core.length && density < 0.3) add('warn', `keyword density ${density.toFixed(2)}% for "${primary}"`);
  if (w.length < 600) add('warn', `only ${w.length} words in <main>`);

  // Links.
  const links = [...main.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map((m) => m[1]);
  const internal = links.filter((h) => h.startsWith('/') && !h.startsWith('//'));
  const external = links.filter((h) => /^https?:/.test(h) && !h.startsWith(SITE));
  if (new Set(internal.map((h) => h.split('#')[0])).size < 5) add('warn', `only ${internal.length} internal links in <main>`);
  if (!external.length && path !== '/') add('warn', 'no outbound authority link');
  for (const h of external) { const tag = main.match(new RegExp(`<a\\b[^>]*href="${h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*>`))[0]; if (!/rel="[^"]*noopener/.test(tag)) add('warn', `external link without rel=noopener ${h}`); }
  for (const h of internal) {
    const t = h.split('#')[0].split('?')[0];
    if (!t) continue;
    if (redirects.some(([from]) => from === t)) add('error', `internal link to redirected URL ${t}`);
    else if (!existsSync(join(root, t.endsWith('/') ? t + 'index.html' : t))) add('error', `dead internal link ${h}`);
  }

  // Schema.
  const blocks = [...doc.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  let graph = [];
  for (const b of blocks) { try { const j = JSON.parse(b); graph.push(...(j['@graph'] || [j])); } catch (e) { add('error', `invalid JSON-LD: ${e.message}`); } }
  const types = graph.flatMap((g) => [].concat(g['@type']));
  for (const t of ['WebPage', 'Organization', 'WebSite']) if (!types.includes(t) && !(t === 'WebPage' && types.some((x) => /Page$/.test(x)))) add('error', `schema: missing ${t}`);
  if (path !== '/' && !types.includes('BreadcrumbList')) add('error', 'schema: missing BreadcrumbList');
  const faq = graph.find((g) => g['@type'] === 'FAQPage');
  if (!faq) add('error', 'schema: missing FAQPage');
  else {
    const qs = faq.mainEntity || [];
    if (qs.length < 3) add('error', `FAQPage has ${qs.length} questions`);
    const vis = norm(strip(doc));
    for (const q of qs) {
      if (!q.name || !q.acceptedAnswer?.text) add('error', 'FAQ question without name/answer');
      else if (!vis.includes(norm(q.name).replace(/\s+/g, ' ').slice(0, 40))) add('error', `FAQ not visible: "${q.name}"`);
    }
  }
  for (const g of graph) {
    if (g['@type'] === 'BreadcrumbList') for (const it of g.itemListElement || []) if (!it.item || !it.name) add('error', 'breadcrumb item incomplete');
    if (['Article', 'BlogPosting'].includes(g['@type'])) for (const k of ['headline', 'author', 'publisher', 'datePublished', 'dateModified', 'image']) if (!g[k]) add('error', `Article missing ${k}`);
    if (g['@type'] === 'Product' && !g.offers) add('error', 'Product without offers');
    if (g['@type'] === 'Offer' && (!g.price && g.price !== 0 || !g.priceCurrency)) add('error', 'Offer missing price/priceCurrency');
  }

  // CTA and trust.
  const lower = text.toLowerCase();
  if (!/kostenlos testen/.test(lower)) add('error', 'CTA "Kostenlos testen" missing');
  if (!/(preise|pakete) ansehen/.test(lower)) add('error', 'CTA "Preise/Pakete ansehen" missing');
  if (!/automatische verlängerung/.test(lower)) add('warn', 'trust: no-auto-renewal not mentioned');
  if (!/support/.test(lower)) add('warn', 'trust: support not mentioned');
  if (!/(zahlung|bezahl|einmal)/.test(lower)) add('warn', 'trust: payment info absent');

  // Unique body copy only (article, without editorial/sources boxes) for duplicate checks.
  const art = (main.match(/<div class="article">([\s\S]*?)<\/div><\/section>/) || [, main])[1].replace(/<aside[\s\S]*?<\/aside>/g, '').replace(/<nav[\s\S]*?<\/nav>/g, '');
  pages.push({ path, title, desc, h1: h1s[0], words: w.length, primary, density, issues, text, body: strip(art) });
}

// Duplicate titles / descriptions / H1s.
for (const key of ['title', 'desc', 'h1']) {
  const by = new Map();
  for (const p of pages) if (p[key]) by.set(p[key], [...(by.get(p[key]) || []), p.path]);
  for (const [v, ps] of by) if (ps.length > 1) for (const p of ps) pages.find((x) => x.path === p).issues.push(['error', `duplicate ${key} with ${ps.filter((x) => x !== p).join(', ')}`]);
}

// Near-duplicate main content: Jaccard over 5-word shingles.
const shingles = (t) => { const w = words(t); const s = new Set(); for (let i = 0; i + 5 <= w.length; i++) s.add(w.slice(i, i + 5).join(' ')); return s; };
const sh = pages.map((p) => shingles(p.body));
const dupes = [];
for (let i = 0; i < pages.length; i++) for (let j = i + 1; j < pages.length; j++) {
  const a = sh[i], b = sh[j]; let inter = 0;
  const [s, l] = a.size < b.size ? [a, b] : [b, a];
  for (const x of s) if (l.has(x)) inter++;
  const jac = inter / (a.size + b.size - inter);
  if (jac > 0.35) { if (process.argv.includes("--dupes")) console.log((jac*100).toFixed(0), pages[i].path, pages[j].path); dupes.push([pages[i].path, pages[j].path, jac]); pages[i].issues.push(['warn', `near-duplicate (${(jac * 100).toFixed(0)}%) of ${pages[j].path}`]); pages[j].issues.push(['warn', `near-duplicate (${(jac * 100).toFixed(0)}%) of ${pages[i].path}`]); }
}

// Sitemap entries pointing to non-existent pages; redirects whose target is missing.
for (const u of sitemapUrls) { const p = u.replace(SITE, ''); if (!pages.some((x) => x.path === p)) console.log(`sitemap: ${u} has no page`); }
for (const [from, to] of redirects) {
  const t = (to || '').split('#')[0];
  if (t && t.startsWith('/') && !existsSync(join(root, t.endsWith('/') ? t + 'index.html' : t))) console.log(`_redirects: ${from} → ${to} target missing`);
  if (pages.some((p) => p.path === from)) console.log(`_redirects: ${from} shadows a live page`);
  if (redirects.some(([f]) => f === t && t !== from)) console.log(`_redirects: chain ${from} → ${to} → …`);
}
// Each live page path without trailing slash should resolve (Cloudflare adds it automatically) — informational only.

if (process.argv.includes('--json')) { console.log(JSON.stringify(pages.map(({ text, ...p }) => p), null, 1)); process.exit(0); }
const tally = new Map();
for (const p of pages) for (const [sev, m] of p.issues) { const k = `${sev}: ${m.replace(/".*"|\d+(\.\d+)?%?|\/[\w\-/#.]+/g, '…')}`; tally.set(k, (tally.get(k) || 0) + 1); }
console.log(`Audited ${pages.length} pages. Issue types:`);
for (const [k, n] of [...tally].sort((a, b) => b[1] - a[1])) console.log(`${String(n).padStart(4)}  ${k}`);
if (process.argv.includes('-v')) for (const p of pages) if (p.issues.length) { console.log(`\n${p.path} (${p.words} words)`); for (const [s, m] of p.issues) console.log(`  ${s}: ${m}`); }
const errs = pages.reduce((n, p) => n + p.issues.filter(([s]) => s === 'error').length, 0);
console.log(`\n${errs} errors, ${pages.reduce((n, p) => n + p.issues.length, 0) - errs} warnings`);
