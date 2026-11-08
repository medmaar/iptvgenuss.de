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

// Homepage packages and inclusions supplied by the owner.
// A free test has no advertised duration and uses one simultaneous device.
export const plans = [
  { id: 'kostenlos-testen', label: 'Kostenloser Test', trial: true, months: 0, devices: 1, price: 0, priceNote: 'Alle Leistungen kennenlernen', footer: 'Erst testen, dann entscheiden.', cta: 'Kostenlos testen', enquiry: 'Kostenloser Test' },
  { id: '1-monat', label: '1 Monat', months: 1, devices: 1, price: 9, priceNote: 'einmalig für einen Monat', footer: 'Keine automatische Verlängerung', cta: 'Monatspaket anfragen' },
  { id: '12-monate', label: '1 Jahr', months: 12, devices: 1, price: 49, priceNote: 'einmalig für 12 Monate', footer: 'Keine automatische Verlängerung', cta: 'Jahrespaket anfragen', featured: true, badge: 'Jahrespaket + IBO Player Pro', bonus: 'IBO Player Abo kostenlos inklusive', bonusName: 'IBO Player Pro' },
];

// Previously supplied monthly/yearly totals for 1–5 simultaneous devices.
// Trial access remains free for one device; paid package selection is independent.
export const devicePrices = {
  1: { '1-monat': 9, '12-monate': 49 },
  2: { '1-monat': 18, '12-monate': 89 },
  3: { '1-monat': 27, '12-monate': 135 },
  4: { '1-monat': 36, '12-monate': 180 },
  5: { '1-monat': 45, '12-monate': 225 },
};

export const included = [
  '50.000+ Live-Kanäle',
  '120.000+ Filme & Serien (VOD)',
  '4K Ultra HD Qualität',
  'Bundesliga · Sky · DAZN',
  'PPV Events inklusive',
  'EPG & Catch-Up TV',
  'Alle Geräte',
  '24/7 Deutscher Support',
];

export const offer = {
  summary: '50.000+ Live-Kanäle und 120.000+ Filme & Serien (VOD), 4K Ultra HD, Bundesliga, Sky und DAZN, PPV Events, EPG & Catch-Up TV, alle Geräte und 24/7 deutscher Support.',
  channels: ['Bundesliga', 'Sky', 'DAZN'],
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

// Homepage copy uses the current offer and feature counts supplied by the owner.
export const homeContent = {
  title: 'Fernsehen mit Genuss.',
  lead: '50.000+ Live-Kanäle, 120.000+ Filme & Serien und Fernsehen in 4K Ultra HD – auf all Ihren Geräten. Entdecken Sie Ihre Lieblingsprogramme mit IPTV Genuss.',
  billing: 'Einmal zahlen. Keine automatische Verlängerung.',
  maxDevices: 5,
  pricingIntro: 'Kostenlos testen, einen Monat genießen oder ein Jahr mit IBO Player Pro wählen.',
  pricingDetail: 'Alle Angebote enthalten dieselben Leistungen – das Jahrespaket bietet einen zusätzlichen Bonus.',
  features: [
    { icon: 'tv', title: '50.000+ Live-Kanäle', text: 'Deutsches und internationales Live-TV. Finden Sie Ihr Lieblingsprogramm und entdecken Sie jeden Tag Neues.', color: 'orange' },
    { icon: 'play', title: '120.000+ Filme & Serien', text: 'Ihre VOD-Mediathek für den Filmabend oder die nächste Serienfolge – schauen Sie, wann es Ihnen passt.', color: 'coral' },
    { icon: 'screen', title: '4K Ultra HD Qualität', text: 'Fernsehen in hoher Auflösung. Genießen Sie 4K-Inhalte mit einem geeigneten Gerät und Internetanschluss.', color: 'aqua' },
    { icon: 'sport', title: 'Bundesliga · Sky · DAZN', text: 'Fußball, Sport und Unterhaltung in Ihrem Paket. Erleben Sie Ihre Lieblingsübertragungen live.', color: 'green' },
    { icon: 'event', title: 'PPV Events inklusive', text: 'Große Events sind in Ihrem Zugang enthalten. Seien Sie bei den nächsten Live-Momenten dabei.', color: 'purple' },
    { icon: 'calendar', title: 'EPG & Catch-Up TV', text: 'Mit dem Programmführer den Überblick behalten und verfügbare Sendungen nachträglich ansehen.', color: 'gold' },
    { icon: 'devices', title: 'Alle Geräte', text: 'Smart-TV, TV-Stick, Smartphone, Tablet oder Computer – Ihr Zugang passt auf Ihre Lieblingsbildschirme.', color: 'aqua' },
    { icon: 'chat', title: '24/7 Deutscher Support', text: 'Persönliche Hilfe auf Deutsch, rund um die Uhr. Wir unterstützen Sie bei der Einrichtung und bei Fragen.', color: 'green' },
  ],
  devicesLead: 'Alle Geräte, ein Zugang: Smart-TV, Smartphone, Tablet und Computer. Nutzen Sie einfach die Bildschirme, die Sie bereits besitzen.',
  supportNote: 'EPG & Catch-Up TV begleiten Ihr Programm. Unser deutscher Support hilft Ihnen 24/7 bei der Einrichtung und bei Fragen.',
  annualBonusTitle: 'Ein Jahr IPTV. IBO Player Pro inklusive.',
  annualBonusText: 'Nur im Jahrespaket: Sie erhalten das IBO Player Abo kostenlos dazu – zusätzlich zu allen enthaltenen Leistungen.',
  steps: [
    ['Test oder Paket wählen', 'Starten Sie mit einem kostenlosen Test oder wählen Sie einen Monat beziehungsweise ein Jahr. Bei den bezahlten Paketen entscheiden Sie, auf wie vielen Geräten Sie gleichzeitig schauen.'],
    ['Zugang einrichten', 'Sie erhalten Ihre Zugangsdaten und eine verständliche Anleitung für Ihre IPTV-App.'],
    ['Zurücklehnen & genießen', 'App öffnen, Zugangsdaten eingeben und Ihr Programm entdecken. Bei Fragen helfen wir Ihnen weiter.'],
  ],
  devices: ['Smart-TV', 'Fire TV & TV-Stick', 'Android & iPhone', 'Tablet & iPad', 'PC & Mac', 'Android-Box & MAG'],
  apps: 'Kompatibel mit gängigen IPTV-Apps wie IPTV Smarters, TiviMate, IBO Player und VLC. Die passende App hängt von Ihrem Gerät ab.',
  faqs: [
    ['Was ist in den Paketen enthalten?', 'Alle drei Angebote enthalten 50.000+ Live-Kanäle, 120.000+ Filme & Serien (VOD), 4K Ultra HD Qualität, Bundesliga, Sky und DAZN, PPV Events, EPG & Catch-Up TV, die Unterstützung aller Geräte und 24/7 deutschen Support.'],
    ['Bei welchem Paket ist IBO Player inklusive?', 'Das IBO Player Abo erhalten Sie ausschließlich beim Jahrespaket kostenlos dazu. Dieser IBO Player Pro Bonus ist nicht im kostenlosen Test oder im Monatspaket enthalten.'],
    ['Was ist IPTV?', 'IPTV bedeutet Fernsehen über das Internet. Statt Satellitenschüssel oder Kabelanschluss benötigen Sie eine Internetverbindung, ein kompatibles Gerät und eine passende IPTV-App.'],
    ['Welche Internetgeschwindigkeit brauche ich?', 'Als Richtwert empfehlen wir mindestens 10 Mbit/s für HD und 25 Mbit/s für 4K pro gleichzeitig genutztem Gerät. Die verfügbare Bildqualität hängt auch vom Inhalt und Ihrem Gerät ab.'],
    ['Gibt es eine automatische Verlängerung?', 'Nein. Sie zahlen einmalig für die gewählte Laufzeit. Ihr Paket verlängert sich nicht automatisch.'],
    ['Was bedeutet die Anzahl der Geräte?', 'Die Geräteanzahl gibt an, auf wie vielen Geräten Sie gleichzeitig schauen können. Wählen Sie bei den Paketen zwischen einem und fünf gleichzeitig genutzten Geräten. Bei drei Geräten können zum Beispiel drei Personen zur selben Zeit unterschiedliche Programme ansehen.'],
    ['Wie erhalte ich meine Zugangsdaten?', 'Nach Abstimmung Ihrer Bestellung erhalten Sie Ihre Zugangsdaten und Informationen zur Einrichtung.'],
    ['Helfen Sie bei der Einrichtung?', 'Ja. Wir helfen Ihnen bei der Auswahl einer passenden App und erklären Ihnen die Einrichtung Schritt für Schritt.'],
  ],
};

// Historical reviews supplied in Reviews german.txt. The owner confirmed their
// genuine origin from the former platforms and authorized publication in chat.
// Platform labels and ratings follow the supplied file; no independent verification claim.
export const customerReviewGroups = [
  {
    "id": "trustpilot",
    "title": "Trustpilot",
    "style": "Kundenbewertungen",
    "reviews": [
      {
        "name": "Peter F.",
        "country": "Deutschland",
        "title": "Endlich ein stabiler Dienst",
        "text": "Nach mehreren anderen Anbietern war der Unterschied bei IPTV Genuss sofort spürbar. Die Einrichtung war unkompliziert, die Sender laden schnell und auch am Abend bleibt die Verbindung stabil. Besonders positiv fand ich den Support, weil meine Fragen verständlich und ohne unnötige Standardantworten beantwortet wurden.",
        "rating": 5
      },
      {
        "name": "Thomas M.",
        "country": "Deutschland",
        "title": "Sehr guter Support",
        "text": "Was mir bei IPTVGenuss besonders gefällt, ist der Kundenservice. Ich hatte am Anfang ein Problem mit meiner App und bekam schnell Hilfe. Danach lief alles problemlos. Die Streams sind stabil und die Bedienung ist deutlich angenehmer als bei meinem vorherigen Anbieter.",
        "rating": 5
      },
      {
        "name": "Michael S.",
        "country": "Deutschland",
        "title": "Läuft auch am Wochenende stabil",
        "text": "Bei meinem alten Anbieter waren Wochenenden immer problematisch. Mit Iptv Genuss hatte ich dieses Problem bisher nicht. Fußball, Serien und Filme laufen auch zu Stoßzeiten sauber. Für mich war der Wechsel definitiv die richtige Entscheidung.",
        "rating": 5
      },
      {
        "name": "Andreas K.",
        "country": "Deutschland",
        "title": "Schnelle Aktivierung",
        "text": "Die Aktivierung bei IPTV Genuss ging sehr schnell. Danach konnte ich direkt mit der Einrichtung beginnen. Als ich nicht wusste, welche App ich nutzen sollte, hat mir der Support eine passende Empfehlung gegeben und mir bei den Einstellungen geholfen.",
        "rating": 5
      },
      {
        "name": "Stefan B.",
        "country": "Deutschland",
        "title": "Deutlich besser als vorher",
        "text": "Ich habe vorher zwei andere Dienste ausprobiert und hatte ständig Probleme mit Verbindungsabbrüchen. IPTVGenuss läuft bei mir deutlich stabiler. Auch der Senderwechsel geht schnell und die Bildqualität bleibt konstant.",
        "rating": 5
      },
      {
        "name": "Markus H.",
        "country": "Deutschland",
        "title": "Genau das, was ich gesucht habe",
        "text": "Iptv Genuss macht bisher einen sehr guten Eindruck. Die Einrichtung war einfach, die Auswahl ist übersichtlich und der Support reagiert schnell. Besonders beim Live-Sport merke ich einen deutlichen Unterschied zu meinem alten Anbieter.",
        "rating": 5
      },
      {
        "name": "Christian W.",
        "country": "Deutschland",
        "title": "Freundlicher und kompetenter Support",
        "text": "Ich hatte mehrere Fragen zu meinem Smart-TV und IPTV Genuss hat mir alles Schritt für Schritt erklärt. Keine hektischen Antworten und kein Verweis darauf, dass das Problem angeblich an meinem Internet liegt. So sollte Kundenservice sein.",
        "rating": 5
      },
      {
        "name": "Daniel R.",
        "country": "Deutschland",
        "title": "Gute Qualität ohne Stress",
        "text": "IPTVGenuss läuft bei mir inzwischen auf mehreren Geräten und bisher bin ich sehr zufrieden. Die Streams starten schnell und die Qualität bleibt stabil. Auch bei längeren Filmabenden hatte ich bisher keine größeren Probleme.",
        "rating": 5
      },
      {
        "name": "Martin L.",
        "country": "Deutschland",
        "title": "Der Wechsel hat sich gelohnt",
        "text": "Ich war zuerst skeptisch, weil ich mit IPTV-Diensten schon schlechte Erfahrungen gemacht hatte. Iptv Genuss hat mich bisher positiv überrascht. Alles wirkt ordentlich organisiert und der Support ist erreichbar, wenn man tatsächlich Hilfe benötigt.",
        "rating": 5
      },
      {
        "name": "Alexander G.",
        "country": "Deutschland",
        "title": "Sehr zuverlässig",
        "text": "IPTV Genuss läuft bei mir seit der Aktivierung sehr zuverlässig. Besonders abends hatte mein früherer Anbieter immer Probleme. Hier bleiben die Sender stabil und die Ladezeiten sind kurz.",
        "rating": 5
      },
      {
        "name": "Johannes T.",
        "country": "Deutschland",
        "title": "Sport läuft endlich flüssig",
        "text": "Ich nutze IPTVGenuss hauptsächlich für Fußball und andere Sportübertragungen. Genau dort hatte ich mit meinem alten Anbieter die meisten Probleme. Hier läuft es bisher wesentlich flüssiger und der Unterschied ist deutlich.",
        "rating": 5
      },
      {
        "name": "Sebastian P.",
        "country": "Deutschland",
        "title": "Einfach einzurichten",
        "text": "Die Einrichtung von Iptv Genuss war einfacher als erwartet. Ich hatte vorher keine Erfahrung mit der App und trotzdem lief nach kurzer Zeit alles. Der Support hat mir die wichtigsten Einstellungen verständlich erklärt.",
        "rating": 5
      },
      {
        "name": "Matthias N.",
        "country": "Deutschland",
        "title": "Sehr zufrieden mit dem Gesamtpaket",
        "text": "IPTV Genuss bietet für mich eine gute Kombination aus stabilen Streams, schneller Aktivierung und erreichbarem Support. Genau das hatte mir bei meinen vorherigen Anbietern gefehlt.",
        "rating": 5
      },
      {
        "name": "Tobias E.",
        "country": "Deutschland",
        "title": "Auch zu Stoßzeiten stabil",
        "text": "Ich habe IPTVGenuss bewusst am Wochenende und während großer Spiele getestet. Bisher blieb alles stabil. Bei meinem alten Anbieter war genau das immer der Moment, in dem die Probleme angefangen haben.",
        "rating": 5
      },
      {
        "name": "Florian V.",
        "country": "Deutschland",
        "title": "Kundenservice macht den Unterschied",
        "text": "Bei Iptv Genuss merkt man vor allem beim Support einen Unterschied. Meine Nachricht wurde schnell beantwortet und mein Problem direkt gelöst. Danach funktionierte alles wieder wie gewohnt.",
        "rating": 5
      },
      {
        "name": "Patrick C.",
        "country": "Deutschland",
        "title": "Gute Bildqualität",
        "text": "Mit IPTV Genuss bin ich bisher sehr zufrieden. Das Bild ist scharf, die Sender starten schnell und auch VOD läuft bei mir ohne lange Wartezeiten. Insgesamt deutlich angenehmer als mein vorheriger Dienst.",
        "rating": 5
      },
      {
        "name": "Dominik A.",
        "country": "Deutschland",
        "title": "Professioneller Eindruck",
        "text": "IPTVGenuss wirkt auf mich insgesamt deutlich professioneller als viele andere Anbieter, die ich ausprobiert habe. Die Aktivierung ging schnell und auch nach der Zahlung war der Support weiterhin erreichbar.",
        "rating": 5
      },
      {
        "name": "Benjamin D.",
        "country": "Deutschland",
        "title": "Funktioniert auf meinem Smart-TV sehr gut",
        "text": "Ich nutze Iptv Genuss hauptsächlich auf meinem Smart-TV. Nach der Einrichtung läuft alles sehr angenehm. Die Sender wechseln schnell und auch längere Streams bleiben stabil.",
        "rating": 5
      },
      {
        "name": "Felix J.",
        "country": "Deutschland",
        "title": "Gute Erfahrung bisher",
        "text": "Seit meinem Wechsel zu IPTV Genuss hatte ich keine größeren Schwierigkeiten. Wenn ich eine Frage hatte, bekam ich schnell eine Antwort. Die Qualität ist konstant und die Bedienung unkompliziert.",
        "rating": 5
      },
      {
        "name": "Lukas O.",
        "country": "Deutschland",
        "title": "Würde ich wieder wählen",
        "text": "Nach mehreren enttäuschenden Erfahrungen mit anderen Diensten bin ich mit IPTVGenuss bisher sehr zufrieden. Stabilität, Bildqualität und Support passen für mich. Genau deshalb würde ich den Dienst wieder wählen.",
        "rating": 5
      }
    ]
  },
  {
    "id": "whatsapp",
    "title": "WhatsApp",
    "style": "Kundennachrichten",
    "reviews": [
      {
        "name": "Karl F.",
        "country": "Deutschland",
        "title": "",
        "text": "IPTV Genuss läuft jetzt super 👍 Danke nochmal für die schnelle Hilfe bei der Einrichtung."
      },
      {
        "name": "Heinrich M.",
        "country": "Deutschland",
        "title": "",
        "text": "Alles eingerichtet mit IPTVGenuss. Fußball läuft gerade ohne Probleme 👌"
      },
      {
        "name": "Werner S.",
        "country": "Deutschland",
        "title": "",
        "text": "Iptv Genuss funktioniert jetzt perfekt. Danke für die schnelle Antwort vorhin."
      },
      {
        "name": "Manfred K.",
        "country": "Deutschland",
        "title": "",
        "text": "IPTV Genuss läuft richtig gut. Viel stabiler als mein alter Anbieter."
      },
      {
        "name": "Joachim B.",
        "country": "Deutschland",
        "title": "",
        "text": "IPTVGenuss getestet 👍 Sender laden schnell und Qualität passt."
      },
      {
        "name": "Gerhard H.",
        "country": "Deutschland",
        "title": "",
        "text": "Danke für eure Hilfe. Iptv Genuss läuft jetzt auf meinem Smart-TV."
      },
      {
        "name": "Sven W.",
        "country": "Deutschland",
        "title": "",
        "text": "IPTV Genuss läuft heute Abend ohne Probleme. Bin zufrieden 👍"
      },
      {
        "name": "Oliver R.",
        "country": "Deutschland",
        "title": "",
        "text": "Alles gut mit IPTVGenuss. Danke für den schnellen Support."
      },
      {
        "name": "Marco L.",
        "country": "Deutschland",
        "title": "",
        "text": "Iptv Genuss gerade beim Fußball getestet. Läuft sauber 👌"
      },
      {
        "name": "Torsten T.",
        "country": "Deutschland",
        "title": "",
        "text": "IPTV Genuss ist eingerichtet. War einfacher als gedacht 😄"
      },
      {
        "name": "Dennis G.",
        "country": "Deutschland",
        "title": "",
        "text": "IPTVGenuss läuft bei mir stabil. Danke nochmal!"
      },
      {
        "name": "Nils P.",
        "country": "Deutschland",
        "title": "",
        "text": "Mit Iptv Genuss funktioniert jetzt alles. Sehr guter Support 👍"
      },
      {
        "name": "Tim N.",
        "country": "Deutschland",
        "title": "",
        "text": "IPTV Genuss läuft ohne Probleme. Bildqualität ist echt gut."
      },
      {
        "name": "Kevin E.",
        "country": "Deutschland",
        "title": "",
        "text": "IPTVGenuss funktioniert bei mir super. Auch abends kein Stress."
      },
      {
        "name": "Christopher V.",
        "country": "Deutschland",
        "title": "",
        "text": "Iptv Genuss läuft jetzt. Danke fürs schnelle Helfen 🙏"
      },
      {
        "name": "Robert C.",
        "country": "Deutschland",
        "title": "",
        "text": "IPTV Genuss gerade getestet. Alles flüssig und schnell."
      },
      {
        "name": "David A.",
        "country": "Deutschland",
        "title": "",
        "text": "IPTVGenuss läuft super auf meinem Fernseher 👍"
      },
      {
        "name": "Erik D.",
        "country": "Deutschland",
        "title": "",
        "text": "Mit Iptv Genuss bisher keine Probleme. Bin zufrieden."
      },
      {
        "name": "Bastian J.",
        "country": "Deutschland",
        "title": "",
        "text": "IPTV Genuss läuft richtig stabil. Danke für die Unterstützung."
      },
      {
        "name": "Christoph O.",
        "country": "Deutschland",
        "title": "",
        "text": "IPTVGenuss funktioniert einwandfrei. Support war auch sehr schnell 👍"
      }
    ]
  },
  {
    "id": "google",
    "title": "Google",
    "style": "Kundenbewertungen",
    "reviews": [
      {
        "name": "Jan F.",
        "country": "Deutschland",
        "title": "",
        "text": "IPTV Genuss läuft bei mir sehr stabil. Einrichtung ging schnell und der Support hat meine Frage direkt beantwortet. Bisher eine sehr gute Erfahrung.",
        "rating": 5
      },
      {
        "name": "Maximilian M.",
        "country": "Deutschland",
        "title": "",
        "text": "IPTVGenuss ist deutlich stabiler als mein letzter Anbieter. Besonders bei Fußball merke ich den Unterschied. Alles läuft flüssig und die Bildqualität ist gut.",
        "rating": 5
      },
      {
        "name": "Niklas S.",
        "country": "Deutschland",
        "title": "",
        "text": "Schnelle Aktivierung und einfache Einrichtung. Iptv Genuss funktioniert auf meinem Fernseher problemlos. Support war freundlich und hilfreich.",
        "rating": 5
      },
      {
        "name": "Simon K.",
        "country": "Deutschland",
        "title": "",
        "text": "Bisher sehr zufrieden mit IPTV Genuss. Sender laden schnell und auch am Abend bleibt die Verbindung stabil.",
        "rating": 5
      },
      {
        "name": "Philipp B.",
        "country": "Deutschland",
        "title": "",
        "text": "IPTVGenuss wurde mir empfohlen und ich bereue den Wechsel nicht. Viel weniger Probleme als vorher und deutlich besserer Support.",
        "rating": 5
      },
      {
        "name": "Julian H.",
        "country": "Deutschland",
        "title": "",
        "text": "Iptv Genuss läuft seit der Aktivierung ohne größere Probleme. Ich hatte eine Frage zur App und bekam sofort eine verständliche Antwort.",
        "rating": 5
      },
      {
        "name": "Fabian W.",
        "country": "Deutschland",
        "title": "",
        "text": "Gute Bildqualität und schnelle Senderwechsel. IPTV Genuss macht bisher einen sehr zuverlässigen Eindruck.",
        "rating": 5
      },
      {
        "name": "Moritz R.",
        "country": "Deutschland",
        "title": "",
        "text": "Der Support von IPTVGenuss war bei meiner Einrichtung wirklich hilfreich. Alles funktioniert jetzt problemlos.",
        "rating": 5
      },
      {
        "name": "Leon L.",
        "country": "Deutschland",
        "title": "",
        "text": "Nutze Iptv Genuss hauptsächlich für Sport und Filme. Beides funktioniert bei mir sehr gut. Bin zufrieden.",
        "rating": 5
      },
      {
        "name": "Jonas G.",
        "country": "Deutschland",
        "title": "",
        "text": "IPTV Genuss läuft bei mir auch am Wochenende stabil. Genau damit hatte mein vorheriger Dienst immer Schwierigkeiten.",
        "rating": 5
      },
      {
        "name": "Klaus T.",
        "country": "Deutschland",
        "title": "",
        "text": "Sehr unkomplizierte Aktivierung bei IPTVGenuss. Nach wenigen Minuten konnte ich alles einrichten und direkt testen.",
        "rating": 5
      },
      {
        "name": "Wolfgang P.",
        "country": "Deutschland",
        "title": "",
        "text": "Iptv Genuss funktioniert auf meinem Smart-TV sehr gut. Gute Qualität und bisher keine größeren Ausfälle.",
        "rating": 5
      },
      {
        "name": "Jürgen N.",
        "country": "Deutschland",
        "title": "",
        "text": "Der Kundenservice von IPTV Genuss antwortet schnell und versucht wirklich zu helfen. Das gefällt mir besonders.",
        "rating": 5
      },
      {
        "name": "Rainer E.",
        "country": "Deutschland",
        "title": "",
        "text": "IPTVGenuss läuft stabil und die Bedienung ist einfach. Für mich bisher deutlich besser als mein vorheriger Anbieter.",
        "rating": 5
      },
      {
        "name": "Frank V.",
        "country": "Deutschland",
        "title": "",
        "text": "Gute Erfahrung mit Iptv Genuss. Aktivierung schnell, Streams stabil und Support gut erreichbar.",
        "rating": 5
      },
      {
        "name": "Bernd C.",
        "country": "Deutschland",
        "title": "",
        "text": "IPTV Genuss macht genau das, was ich erwartet habe. Gute Qualität und keine komplizierte Einrichtung.",
        "rating": 5
      },
      {
        "name": "Hans A.",
        "country": "Deutschland",
        "title": "",
        "text": "Nutze IPTVGenuss seit einiger Zeit und bin zufrieden. Vor allem die Stabilität bei Live-Sport ist für mich wichtig.",
        "rating": 5
      },
      {
        "name": "Dieter D.",
        "country": "Deutschland",
        "title": "",
        "text": "Iptv Genuss läuft sauber und schnell. Support hat mir bei einer kleinen Einstellung innerhalb weniger Minuten geholfen.",
        "rating": 5
      },
      {
        "name": "Uwe J.",
        "country": "Deutschland",
        "title": "",
        "text": "IPTV Genuss ist bisher einer der besseren Dienste, die ich ausprobiert habe. Stabil und unkompliziert.",
        "rating": 5
      },
      {
        "name": "Helmut O.",
        "country": "Deutschland",
        "title": "",
        "text": "IPTVGenuss funktioniert bei mir zuverlässig. Gute Streams, schnelle Aktivierung und freundlicher Support.",
        "rating": 5
      }
    ]
  }
];
