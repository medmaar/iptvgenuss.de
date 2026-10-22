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
  themeColor: '#306f85',
  ogImage: '/brand/og.png',

  // false: every page is noindex, robots.txt blocks crawlers and a preview
  // banner lists what is still missing. Set to true only for the launch.
  live: false,

  // Contact. whatsapp: international number, digits only (e.g. '4915112345678').
  email: 'kontakt@iptvgenuss.de',
  whatsapp: '', // The supplied 49 0000000 is a placeholder; email is active.

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
  { id: '1-monat', label: '1 Monat', months: 1, devices: 1, price: 9 },
  { id: '3-monate', label: '3 Monate', months: 3, devices: 1, price: 29 },
  { id: '6-monate', label: '6 Monate', months: 6, devices: 1, price: 39 },
  { id: '12-monate', label: '12 Monate', months: 12, devices: 1, price: 49, featured: true },
];

// Full price matrix supplied by the owner; column order matches plans above.
export const devicePrices = {
  1: [9, 29, 39, 49],
  2: [18, 50, 69, 89],
  3: [27, 75, 105, 135],
  4: [36, 99, 140, 180],
  5: [45, 120, 175, 225],
};

// What every package includes. Only list what the service really provides.
export const included = [
  'Live-TV, Filme & Serien auf Abruf',
  'HD, Full HD & bis zu 4K UHD',
  'EPG & Catch-Up, je nach Programm',
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
  ['#unterhaltung', 'Unterhaltung'],
  ['#geraete', 'Geräte'],
  ['#preise', 'Preise'],
  ['#faq', 'FAQ'],
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

// Homepage offer details adapted from the owner-supplied IPTVkanal reference.
// No source-site contact details, testimonials or unverified catalogue counts.
export const homeContent = {
  title: 'Fernsehen mit Genuss.',
  lead: 'Ihr Fernsehen. Ihre Freiheit. Live-TV, Filme und Serien auf Ihren Lieblingsgeräten – zu Hause und unterwegs. Wählen Sie Ihre Laufzeit und genießen Sie Unterhaltung, die in Ihren Alltag passt.',
  billing: 'Einmal zahlen. Keine automatische Verlängerung.',
  maxDevices: 5,
  features: [
    { icon: 'tv', title: 'Live-TV', text: 'Deutsches und internationales Fernsehen. Entdecken Sie Ihr Programm und finden Sie Ihre nächsten Lieblingsmomente.', color: 'orange' },
    { icon: 'play', title: 'Filme & Serien', text: 'Ein Filmabend oder noch eine Folge? Unterhaltung auf Abruf, wann es Ihnen passt.', color: 'coral' },
    { icon: 'screen', title: 'Bis zu 4K UHD', text: 'HD, Full HD und Ultra HD – abhängig vom Inhalt, Ihrem Gerät und Ihrer Internetverbindung.', color: 'aqua' },
    { icon: 'calendar', title: 'EPG & Catch-Up', text: 'Mit dem Programmführer den Überblick behalten und verfügbare Sendungen später ansehen.', color: 'green' },
    { icon: 'devices', title: 'Ihre Geräte', text: 'Smart-TV, TV-Stick, Smartphone, Tablet oder Computer. Nutzen Sie die Geräte, die Sie bereits besitzen.', color: 'purple' },
    { icon: 'chat', title: 'Persönliche Hilfe', text: 'Von der passenden App bis zum ersten Start: Wir helfen Ihnen Schritt für Schritt bei der Einrichtung.', color: 'gold' },
  ],
  steps: [
    ['Paket wählen', 'Wählen Sie die Laufzeit, die zu Ihnen passt. Entscheiden Sie, ob Sie auf einem oder bis zu fünf Geräten gleichzeitig schauen möchten.'],
    ['Zugang einrichten', 'Sie erhalten Ihre Zugangsdaten und eine verständliche Anleitung für Ihre IPTV-App.'],
    ['Zurücklehnen & genießen', 'App öffnen, Zugangsdaten eingeben und Ihr Programm entdecken. Bei Fragen helfen wir Ihnen weiter.'],
  ],
  devices: ['Smart-TV', 'Fire TV & TV-Stick', 'Android & iPhone', 'Tablet & iPad', 'PC & Mac', 'Android-Box & MAG'],
  apps: 'Kompatibel mit gängigen IPTV-Apps wie IPTV Smarters, TiviMate, IBO Player und VLC. Die passende App hängt von Ihrem Gerät ab.',
  faqs: [
    ['Was ist IPTV?', 'IPTV bedeutet Fernsehen über das Internet. Statt Satellitenschüssel oder Kabelanschluss benötigen Sie eine Internetverbindung, ein kompatibles Gerät und eine passende IPTV-App.'],
    ['Welche Internetgeschwindigkeit brauche ich?', 'Als Richtwert empfehlen wir mindestens 10 Mbit/s für HD und 25 Mbit/s für 4K pro gleichzeitig genutztem Gerät. Die verfügbare Bildqualität hängt auch vom Inhalt und Ihrem Gerät ab.'],
    ['Gibt es eine automatische Verlängerung?', 'Nein. Sie zahlen einmalig für die gewählte Laufzeit. Ihr Paket verlängert sich nicht automatisch.'],
    ['Was bedeutet die Anzahl der Geräte?', 'Die Geräteanzahl gibt an, auf wie vielen Geräten Sie gleichzeitig schauen können. Wählen Sie bei den Paketen zwischen einem und fünf gleichzeitig genutzten Geräten. Bei drei Geräten können zum Beispiel drei Personen zur selben Zeit unterschiedliche Programme ansehen.'],
    ['Wie erhalte ich meine Zugangsdaten?', 'Nach Abstimmung Ihrer Bestellung erhalten Sie Ihre Zugangsdaten und Informationen zur Einrichtung.'],
    ['Helfen Sie bei der Einrichtung?', 'Ja. Wir helfen Ihnen bei der Auswahl einer passenden App und erklären Ihnen die Einrichtung Schritt für Schritt.'],
  ],
};
