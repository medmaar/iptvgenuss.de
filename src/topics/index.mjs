// Registry of all topic pages (keyword clusters) plus card data for the
// existing core pages, so any page can render link cards by path.
import guides from './guides.mjs';
import apps from './apps.mjs';
import devices from './devices.mjs';
import guidesMore from './guides-more.mjs';
import appsMore from './apps-more.mjs';
import devicesMore from './devices-more.mjs';
import extend from './extend.mjs';

// Merge the extra sections, FAQs and keywords from extend.mjs into a page.
const withExtras = (t) => {
  const x = extend[t.path];
  if (!x) return t;
  const sections = [...t.sections];
  for (const s of x.sections || []) {
    const i = s.before ? sections.findIndex((o) => o.id === s.before) : -1;
    sections.splice(i < 0 ? sections.length : i, 0, s);
  }
  const drop = new Set(x.keywords?.remove || []);
  const keywords = [...(t.keywords || []).filter((k) => !drop.has(k)), ...(x.keywords?.add || [])];
  return { ...t, sections, faq: [...t.faq, ...(x.faq || [])], keywords, schema: [...(t.schema || []), ...(x.schema || [])] };
};

export const topics = [...guides, ...guidesMore, ...apps, ...appsMore, ...devices, ...devicesMore].map(withExtras);

for (const path of Object.keys(extend)) {
  if (!topics.some((t) => t.path === path)) throw new Error(`extend.mjs: unknown page ${path}`);
}

// Hubs: breadcrumb parent and the page that lists all children.
export const hubs = {
  apps: { label: 'IPTV-Apps', path: '/iptv-apps/' },
  geraete: { label: 'IPTV-Geräte', path: '/iptv-geraete/' },
  ratgeber: { label: 'Ratgeber', path: '/ratgeber/' },
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
