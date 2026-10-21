// Everything a non-developer is likely to change lives in this file:
// business details, contact, prices, tracking IDs and the launch switch.
//
// Fields left empty ('' or null) are listed in the preview banner and by
// `npm run build`, so nothing half-finished goes live unnoticed.

export const site = {
  name: 'IPTV Genuss',
  url: 'https://iptvgenuss.de',
  lang: 'de-DE',
  locale: 'de_DE',
  themeColor: '#0b0d12',
  ogImage: '/brand/og.png',

  // false: every page is noindex, robots.txt blocks crawlers and a preview
  // banner lists what is still missing. Set to true only for the launch.
  live: false,

  // Contact. whatsapp: international number, digits only (e.g. '4915112345678').
  email: '',
  whatsapp: '',

  // Impressum (§ 5 DDG). Required before launch.
  company: {
    name: '',        // Firma bzw. Vor- und Nachname
    legalForm: '',   // z. B. 'Einzelunternehmen', 'GmbH'
    representative: '', // Vertretungsberechtigte Person (bei GmbH: Geschäftsführer)
    street: '',
    postcode: '',
    city: '',
    country: 'Deutschland',
    phone: '',
    register: '',    // z. B. 'Amtsgericht Berlin, HRB 12345' (falls eingetragen)
    vatId: '',       // USt-IdNr. (falls vorhanden)
  },

  // Free trial on offer? If false, the trial page and all trial buttons disappear.
  trial: true,

  // Analytics load only after the visitor accepts in the cookie banner.
  // Leave empty for none (then no banner is shown at all).
  ga4: '',
  metaPixel: '',
  googleSiteVerification: '',
};

// Packages. price: in euros, null = not decided yet (shown as "Preis folgt").
// devices: number of screens that can watch at the same time.
export const plans = [
  { id: '1-monat', label: '1 Monat', months: 1, devices: 1, price: null },
  { id: '6-monate', label: '6 Monate', months: 6, devices: 1, price: null, featured: true },
  { id: '12-monate', label: '12 Monate', months: 12, devices: 1, price: null },
];

// What every package includes. Only list what the service really provides.
export const included = [
  'Zugangsdaten per E-Mail',
  'Kompatibel mit gängigen IPTV-Apps',
  'Elektronischer Programmführer (EPG), sofern vom Sender bereitgestellt',
  'Persönliche Hilfe bei der Einrichtung',
];

// The licensed offer: which channels/content the business has the rights to
// distribute. Empty until confirmed in writing; pages then show a neutral text.
export const offer = {
  summary: '',
  channels: [],
};

// Navigation (header and mobile menu).
export const nav = [
  ['/', 'Start'],
  ['/preise/', 'Preise'],
  ['/anleitungen/', 'Anleitungen'],
  ['/faq/', 'FAQ'],
  ['/kontakt/', 'Kontakt'],
];

export const waHref = (text = '') =>
  site.whatsapp ? `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}` : '';

export const euro = (n) =>
  n == null ? null : new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: Number.isInteger(n) ? 0 : 2 }).format(n);

// Everything the preview banner and the build report as missing.
export function missing() {
  const out = [];
  if (!site.email) out.push('E-Mail-Adresse');
  if (!site.whatsapp) out.push('WhatsApp-Nummer');
  const c = site.company;
  if (!c.name || !c.street || !c.postcode || !c.city) out.push('Impressum (Name und Anschrift)');
  if (plans.some((p) => p.price == null)) out.push('Preise');
  if (!offer.summary) out.push('Beschreibung des lizenzierten Angebots');
  out.push('Rechtstexte prüfen lassen (AGB, Widerruf, Datenschutz)');
  return out;
}
