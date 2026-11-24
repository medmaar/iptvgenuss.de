// Registry of all topic pages (keyword clusters) plus card data for the
// existing core pages, so any page can render link cards by path.
import guides from './guides.mjs';
import apps from './apps.mjs';
import devices from './devices.mjs';

export const topics = [...guides, ...apps, ...devices];

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
