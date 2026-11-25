// Registry of all topic pages (keyword clusters) plus card data for the
// existing core pages, so any page can render link cards by path.
import guides from './guides.mjs';
import apps from './apps.mjs';
import devices from './devices.mjs';
import guidesMore from './guides-more.mjs';
import appsMore from './apps-more.mjs';
import devicesMore from './devices-more.mjs';
import extend from './extend.mjs';
import deepen from './deepen.mjs';
import local from './local.mjs';
import models from './models.mjs';
import devicesTv from './devices-tv.mjs';
import devicesStream from './devices-stream.mjs';
import appsPlayers from './apps-players.mjs';
import appsClusters from './apps-clusters.mjs';
import appsSmarters from './apps-smarters.mjs';
import appsTivimate from './apps-tivimate.mjs';
import guidesGaps from './guides-gaps.mjs';
import guidesBrands from './guides-brands.mjs';
import links from './links.mjs';

// Merge extra sections, FAQs, keywords, sources and schema from the extension
// maps (extend.mjs, deepen.mjs) into a page. `sections` are inserted before the
// section named in `before` (or appended), everything else is appended.
const extensions = [extend, deepen, models, links];
const withExtras = (t) => {
  let page = t;
  for (const ext of extensions) {
    const x = ext[t.path];
    if (!x) continue;
    const sections = [...page.sections];
    for (const s of x.sections || []) {
      const i = s.before ? sections.findIndex((o) => o.id === s.before) : -1;
      sections.splice(i < 0 ? sections.length : i, 0, s);
    }
    const drop = new Set(x.keywords?.remove || []);
    const keywords = [...(page.keywords || []).filter((k) => !drop.has(k)), ...(x.keywords?.add || [])];
    page = {
      ...page,
      sections,
      faq: [...page.faq, ...(x.faq || [])],
      keywords,
      schema: [...(page.schema || []), ...(x.schema || [])],
      sources: [...(page.sources || []), ...(x.sources || [])],
      related: [...(x.relatedFirst || []), ...page.related, ...(x.related || [])],
      ...(x.children && { children: x.children }),
      ...(x.app && { app: x.app }),
      ...(x.title && { title: x.title }),
      ...(x.description && { description: x.description }),
      ...(x.h1 && { h1: x.h1 }),
      ...(x.teaser && { teaser: x.teaser }),
      ...(x.updated && { updated: x.updated }),
    };
  }
  return page;
};

export const topics = [...guides, ...guidesMore, ...apps, ...appsMore, ...appsPlayers, ...appsClusters, ...appsSmarters, ...appsTivimate, ...guidesGaps, ...guidesBrands, ...devices, ...devicesMore, ...devicesTv, ...devicesStream, ...local].map(withExtras);

for (const ext of extensions) {
  for (const path of Object.keys(ext)) {
    if (!topics.some((t) => t.path === path)) throw new Error(`Extension for unknown page ${path}`);
  }
}

// Every FAQ question and every section id may appear only once per page.
for (const t of topics) {
  const seen = new Set();
  for (const [q] of t.faq) {
    const k = q.toLowerCase().replace(/[^a-z0-9äöüß]+/g, ' ').trim();
    if (seen.has(k)) throw new Error(`${t.path}: duplicate FAQ question "${q}"`);
    seen.add(k);
  }
  const ids = t.sections.map((x) => x.id);
  if (new Set(ids).size !== ids.length) throw new Error(`${t.path}: duplicate section id`);
}

// Hubs: breadcrumb parent and the page that lists all children.
export const hubs = {
  apps: { label: 'IPTV-Apps', path: '/iptv-apps/' },
  geraete: { label: 'IPTV-Geräte', path: '/iptv-geraete/' },
  ratgeber: { label: 'Ratgeber', path: '/ratgeber/' },
  regionen: { label: 'IPTV in Ihrer Region', path: '/iptv-regionen/' },
  // App pillars with their own device guides (breadcrumb: Apps › App › Gerät).
  smarters: { label: 'IPTV Smarters Pro', path: '/iptv-smarters-pro/', parent: 'apps' },
  tivimate: { label: 'TiviMate', path: '/tivimate/', parent: 'apps' },
  siptv: { label: 'Smart IPTV', path: '/smart-iptv/', parent: 'apps' },
};
// Breadcrumb trail of a hub, outermost first.
export const hubTrail = (key) => {
  const out = [];
  for (let h = hubs[key]; h; h = hubs[h.parent]) out.unshift([h.label, h.path]);
  return out;
};

const core = [
  { path: '/#preise', name: 'Preise und Pakete', teaser: 'Kostenloser Test, 1 Monat oder 1 Jahr – für 1 bis 5 Geräte.', icon: 'euro' },
  { path: '/#kontakt', name: 'Kostenlos testen', teaser: 'Testzugang anfragen und auf dem eigenen Gerät ausprobieren.', icon: 'play' },
  { path: '/#faq', name: 'Häufige Fragen', teaser: 'Die wichtigsten Antworten rund um IPTV Genuss.', icon: 'info' },
  { path: '/ratgeber/', name: 'IPTV-Ratgeber', teaser: 'Alle Ratgeber, Apps und Geräte auf einen Blick.', icon: 'book' },
];

export const cards = new Map([...core, ...topics].map((t) => [t.path, t]));
export const cardsFor = (paths) => paths.map((p) => cards.get(p)).filter(Boolean);
export const childrenOf = (hub) => topics.filter((t) => t.hub === hub);
