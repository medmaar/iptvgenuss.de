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

// User-supplied examples, explicitly not genuine or verified customer reviews.
export const reviewExamples = [
  {
    "id": "trustpilot",
    "title": "Bewertungen",
    "style": "Trustpilot-Stil",
    "reviews": [
      {
        "name": "Beispielkunde 01",
        "country": "Deutschland",
        "title": "Endlich ein stabiler Dienst",
        "text": "Nach mehreren anderen Anbietern war der Unterschied bei IPTV Genuss sofort spürbar. Die Einrichtung war unkompliziert, die Sender laden schnell und auch am Abend bleibt die Verbindung stabil. Besonders positiv fand ich den Support, weil meine Fragen verständlich und ohne unnötige Standardantworten beantwortet wurden."
      },
      {
        "name": "Beispielkunde 02",
        "country": "Deutschland",
        "title": "Sehr guter Support",
        "text": "Was mir bei IPTVGenuss besonders gefällt, ist der Kundenservice. Ich hatte am Anfang ein Problem mit meiner App und bekam schnell Hilfe. Danach lief alles problemlos. Die Streams sind stabil und die Bedienung ist deutlich angenehmer als bei meinem vorherigen Anbieter."
      },
      {
        "name": "Beispielkunde 03",
        "country": "Deutschland",
        "title": "Läuft auch am Wochenende stabil",
        "text": "Bei meinem alten Anbieter waren Wochenenden immer problematisch. Mit Iptv Genuss hatte ich dieses Problem bisher nicht. Fußball, Serien und Filme laufen auch zu Stoßzeiten sauber. Für mich war der Wechsel definitiv die richtige Entscheidung."
      },
      {
        "name": "Beispielkunde 04",
        "country": "Deutschland",
        "title": "Schnelle Aktivierung",
        "text": "Die Aktivierung bei IPTV Genuss ging sehr schnell. Danach konnte ich direkt mit der Einrichtung beginnen. Als ich nicht wusste, welche App ich nutzen sollte, hat mir der Support eine passende Empfehlung gegeben und mir bei den Einstellungen geholfen."
      },
      {
        "name": "Beispielkunde 05",
        "country": "Deutschland",
        "title": "Deutlich besser als vorher",
        "text": "Ich habe vorher zwei andere Dienste ausprobiert und hatte ständig Probleme mit Verbindungsabbrüchen. IPTVGenuss läuft bei mir deutlich stabiler. Auch der Senderwechsel geht schnell und die Bildqualität bleibt konstant."
      },
      {
        "name": "Beispielkunde 06",
        "country": "Deutschland",
        "title": "Genau das, was ich gesucht habe",
        "text": "Iptv Genuss macht bisher einen sehr guten Eindruck. Die Einrichtung war einfach, die Auswahl ist übersichtlich und der Support reagiert schnell. Besonders beim Live-Sport merke ich einen deutlichen Unterschied zu meinem alten Anbieter."
      },
      {
        "name": "Beispielkunde 07",
        "country": "Deutschland",
        "title": "Freundlicher und kompetenter Support",
        "text": "Ich hatte mehrere Fragen zu meinem Smart-TV und IPTV Genuss hat mir alles Schritt für Schritt erklärt. Keine hektischen Antworten und kein Verweis darauf, dass das Problem angeblich an meinem Internet liegt. So sollte Kundenservice sein."
      },
      {
        "name": "Beispielkunde 08",
        "country": "Deutschland",
        "title": "Gute Qualität ohne Stress",
        "text": "IPTVGenuss läuft bei mir inzwischen auf mehreren Geräten und bisher bin ich sehr zufrieden. Die Streams starten schnell und die Qualität bleibt stabil. Auch bei längeren Filmabenden hatte ich bisher keine größeren Probleme."
      },
      {
        "name": "Beispielkunde 09",
        "country": "Deutschland",
        "title": "Der Wechsel hat sich gelohnt",
        "text": "Ich war zuerst skeptisch, weil ich mit IPTV-Diensten schon schlechte Erfahrungen gemacht hatte. Iptv Genuss hat mich bisher positiv überrascht. Alles wirkt ordentlich organisiert und der Support ist erreichbar, wenn man tatsächlich Hilfe benötigt."
      },
      {
        "name": "Beispielkunde 10",
        "country": "Deutschland",
        "title": "Sehr zuverlässig",
        "text": "IPTV Genuss läuft bei mir seit der Aktivierung sehr zuverlässig. Besonders abends hatte mein früherer Anbieter immer Probleme. Hier bleiben die Sender stabil und die Ladezeiten sind kurz."
      },
      {
        "name": "Beispielkunde 11",
        "country": "Deutschland",
        "title": "Sport läuft endlich flüssig",
        "text": "Ich nutze IPTVGenuss hauptsächlich für Fußball und andere Sportübertragungen. Genau dort hatte ich mit meinem alten Anbieter die meisten Probleme. Hier läuft es bisher wesentlich flüssiger und der Unterschied ist deutlich."
      },
      {
        "name": "Beispielkunde 12",
        "country": "Deutschland",
        "title": "Einfach einzurichten",
        "text": "Die Einrichtung von Iptv Genuss war einfacher als erwartet. Ich hatte vorher keine Erfahrung mit der App und trotzdem lief nach kurzer Zeit alles. Der Support hat mir die wichtigsten Einstellungen verständlich erklärt."
      },
      {
        "name": "Beispielkunde 13",
        "country": "Deutschland",
        "title": "Sehr zufrieden mit dem Gesamtpaket",
        "text": "IPTV Genuss bietet für mich eine gute Kombination aus stabilen Streams, schneller Aktivierung und erreichbarem Support. Genau das hatte mir bei meinen vorherigen Anbietern gefehlt."
      },
      {
        "name": "Beispielkunde 14",
        "country": "Deutschland",
        "title": "Auch zu Stoßzeiten stabil",
        "text": "Ich habe IPTVGenuss bewusst am Wochenende und während großer Spiele getestet. Bisher blieb alles stabil. Bei meinem alten Anbieter war genau das immer der Moment, in dem die Probleme angefangen haben."
      },
      {
        "name": "Beispielkunde 15",
        "country": "Deutschland",
        "title": "Kundenservice macht den Unterschied",
        "text": "Bei Iptv Genuss merkt man vor allem beim Support einen Unterschied. Meine Nachricht wurde schnell beantwortet und mein Problem direkt gelöst. Danach funktionierte alles wieder wie gewohnt."
      },
      {
        "name": "Beispielkunde 16",
        "country": "Deutschland",
        "title": "Gute Bildqualität",
        "text": "Mit IPTV Genuss bin ich bisher sehr zufrieden. Das Bild ist scharf, die Sender starten schnell und auch VOD läuft bei mir ohne lange Wartezeiten. Insgesamt deutlich angenehmer als mein vorheriger Dienst."
      },
      {
        "name": "Beispielkunde 17",
        "country": "Deutschland",
        "title": "Professioneller Eindruck",
        "text": "IPTVGenuss wirkt auf mich insgesamt deutlich professioneller als viele andere Anbieter, die ich ausprobiert habe. Die Aktivierung ging schnell und auch nach der Zahlung war der Support weiterhin erreichbar."
      },
      {
        "name": "Beispielkunde 18",
        "country": "Deutschland",
        "title": "Funktioniert auf meinem Smart-TV sehr gut",
        "text": "Ich nutze Iptv Genuss hauptsächlich auf meinem Smart-TV. Nach der Einrichtung läuft alles sehr angenehm. Die Sender wechseln schnell und auch längere Streams bleiben stabil."
      },
      {
        "name": "Beispielkunde 19",
        "country": "Deutschland",
        "title": "Gute Erfahrung bisher",
        "text": "Seit meinem Wechsel zu IPTV Genuss hatte ich keine größeren Schwierigkeiten. Wenn ich eine Frage hatte, bekam ich schnell eine Antwort. Die Qualität ist konstant und die Bedienung unkompliziert."
      },
      {
        "name": "Beispielkunde 20",
        "country": "Deutschland",
        "title": "Würde ich wieder wählen",
        "text": "Nach mehreren enttäuschenden Erfahrungen mit anderen Diensten bin ich mit IPTVGenuss bisher sehr zufrieden. Stabilität, Bildqualität und Support passen für mich. Genau deshalb würde ich den Dienst wieder wählen."
      }
    ]
  },
  {
    "id": "whatsapp",
    "title": "Nachrichten",
    "style": "WhatsApp-Stil",
    "reviews": [
      {
        "name": "Beispielkunde 41",
        "country": "Deutschland",
        "title": "",
        "text": "IPTV Genuss läuft jetzt super 👍 Danke nochmal für die schnelle Hilfe bei der Einrichtung."
      },
      {
        "name": "Beispielkunde 42",
        "country": "Deutschland",
        "title": "",
        "text": "Alles eingerichtet mit IPTVGenuss. Fußball läuft gerade ohne Probleme 👌"
      },
      {
        "name": "Beispielkunde 43",
        "country": "Deutschland",
        "title": "",
        "text": "Iptv Genuss funktioniert jetzt perfekt. Danke für die schnelle Antwort vorhin."
      },
      {
        "name": "Beispielkunde 44",
        "country": "Deutschland",
        "title": "",
        "text": "IPTV Genuss läuft richtig gut. Viel stabiler als mein alter Anbieter."
      },
      {
        "name": "Beispielkunde 45",
        "country": "Deutschland",
        "title": "",
        "text": "IPTVGenuss getestet 👍 Sender laden schnell und Qualität passt."
      },
      {
        "name": "Beispielkunde 46",
        "country": "Deutschland",
        "title": "",
        "text": "Danke für eure Hilfe. Iptv Genuss läuft jetzt auf meinem Smart-TV."
      },
      {
        "name": "Beispielkunde 47",
        "country": "Deutschland",
        "title": "",
        "text": "IPTV Genuss läuft heute Abend ohne Probleme. Bin zufrieden 👍"
      },
      {
        "name": "Beispielkunde 48",
        "country": "Deutschland",
        "title": "",
        "text": "Alles gut mit IPTVGenuss. Danke für den schnellen Support."
      },
      {
        "name": "Beispielkunde 49",
        "country": "Deutschland",
        "title": "",
        "text": "Iptv Genuss gerade beim Fußball getestet. Läuft sauber 👌"
      },
      {
        "name": "Beispielkunde 50",
        "country": "Deutschland",
        "title": "",
        "text": "IPTV Genuss ist eingerichtet. War einfacher als gedacht 😄"
      },
      {
        "name": "Beispielkunde 51",
        "country": "Deutschland",
        "title": "",
        "text": "IPTVGenuss läuft bei mir stabil. Danke nochmal!"
      },
      {
        "name": "Beispielkunde 52",
        "country": "Deutschland",
        "title": "",
        "text": "Mit Iptv Genuss funktioniert jetzt alles. Sehr guter Support 👍"
      },
      {
        "name": "Beispielkunde 53",
        "country": "Deutschland",
        "title": "",
        "text": "IPTV Genuss läuft ohne Probleme. Bildqualität ist echt gut."
      },
      {
        "name": "Beispielkunde 54",
        "country": "Deutschland",
        "title": "",
        "text": "IPTVGenuss funktioniert bei mir super. Auch abends kein Stress."
      },
      {
        "name": "Beispielkunde 55",
        "country": "Deutschland",
        "title": "",
        "text": "Iptv Genuss läuft jetzt. Danke fürs schnelle Helfen 🙏"
      },
      {
        "name": "Beispielkunde 56",
        "country": "Deutschland",
        "title": "",
        "text": "IPTV Genuss gerade getestet. Alles flüssig und schnell."
      },
      {
        "name": "Beispielkunde 57",
        "country": "Deutschland",
        "title": "",
        "text": "IPTVGenuss läuft super auf meinem Fernseher 👍"
      },
      {
        "name": "Beispielkunde 58",
        "country": "Deutschland",
        "title": "",
        "text": "Mit Iptv Genuss bisher keine Probleme. Bin zufrieden."
      },
      {
        "name": "Beispielkunde 59",
        "country": "Deutschland",
        "title": "",
        "text": "IPTV Genuss läuft richtig stabil. Danke für die Unterstützung."
      },
      {
        "name": "Beispielkunde 60",
        "country": "Deutschland",
        "title": "",
        "text": "IPTVGenuss funktioniert einwandfrei. Support war auch sehr schnell 👍"
      }
    ]
  },
  {
    "id": "google",
    "title": "Kurzbewertungen",
    "style": "Google-Stil",
    "reviews": [
      {
        "name": "Beispielkunde 21",
        "country": "Deutschland",
        "title": "",
        "text": "IPTV Genuss läuft bei mir sehr stabil. Einrichtung ging schnell und der Support hat meine Frage direkt beantwortet. Bisher eine sehr gute Erfahrung."
      },
      {
        "name": "Beispielkunde 22",
        "country": "Deutschland",
        "title": "",
        "text": "IPTVGenuss ist deutlich stabiler als mein letzter Anbieter. Besonders bei Fußball merke ich den Unterschied. Alles läuft flüssig und die Bildqualität ist gut."
      },
      {
        "name": "Beispielkunde 23",
        "country": "Deutschland",
        "title": "",
        "text": "Schnelle Aktivierung und einfache Einrichtung. Iptv Genuss funktioniert auf meinem Fernseher problemlos. Support war freundlich und hilfreich."
      },
      {
        "name": "Beispielkunde 24",
        "country": "Deutschland",
        "title": "",
        "text": "Bisher sehr zufrieden mit IPTV Genuss. Sender laden schnell und auch am Abend bleibt die Verbindung stabil."
      },
      {
        "name": "Beispielkunde 25",
        "country": "Deutschland",
        "title": "",
        "text": "IPTVGenuss wurde mir empfohlen und ich bereue den Wechsel nicht. Viel weniger Probleme als vorher und deutlich besserer Support."
      },
      {
        "name": "Beispielkunde 26",
        "country": "Deutschland",
        "title": "",
        "text": "Iptv Genuss läuft seit der Aktivierung ohne größere Probleme. Ich hatte eine Frage zur App und bekam sofort eine verständliche Antwort."
      },
      {
        "name": "Beispielkunde 27",
        "country": "Deutschland",
        "title": "",
        "text": "Gute Bildqualität und schnelle Senderwechsel. IPTV Genuss macht bisher einen sehr zuverlässigen Eindruck."
      },
      {
        "name": "Beispielkunde 28",
        "country": "Deutschland",
        "title": "",
        "text": "Der Support von IPTVGenuss war bei meiner Einrichtung wirklich hilfreich. Alles funktioniert jetzt problemlos."
      },
      {
        "name": "Beispielkunde 29",
        "country": "Deutschland",
        "title": "",
        "text": "Nutze Iptv Genuss hauptsächlich für Sport und Filme. Beides funktioniert bei mir sehr gut. Bin zufrieden."
      },
      {
        "name": "Beispielkunde 30",
        "country": "Deutschland",
        "title": "",
        "text": "IPTV Genuss läuft bei mir auch am Wochenende stabil. Genau damit hatte mein vorheriger Dienst immer Schwierigkeiten."
      },
      {
        "name": "Beispielkunde 31",
        "country": "Deutschland",
        "title": "",
        "text": "Sehr unkomplizierte Aktivierung bei IPTVGenuss. Nach wenigen Minuten konnte ich alles einrichten und direkt testen."
      },
      {
        "name": "Beispielkunde 32",
        "country": "Deutschland",
        "title": "",
        "text": "Iptv Genuss funktioniert auf meinem Smart-TV sehr gut. Gute Qualität und bisher keine größeren Ausfälle."
      },
      {
        "name": "Beispielkunde 33",
        "country": "Deutschland",
        "title": "",
        "text": "Der Kundenservice von IPTV Genuss antwortet schnell und versucht wirklich zu helfen. Das gefällt mir besonders."
      },
      {
        "name": "Beispielkunde 34",
        "country": "Deutschland",
        "title": "",
        "text": "IPTVGenuss läuft stabil und die Bedienung ist einfach. Für mich bisher deutlich besser als mein vorheriger Anbieter."
      },
      {
        "name": "Beispielkunde 35",
        "country": "Deutschland",
        "title": "",
        "text": "Gute Erfahrung mit Iptv Genuss. Aktivierung schnell, Streams stabil und Support gut erreichbar."
      },
      {
        "name": "Beispielkunde 36",
        "country": "Deutschland",
        "title": "",
        "text": "IPTV Genuss macht genau das, was ich erwartet habe. Gute Qualität und keine komplizierte Einrichtung."
      },
      {
        "name": "Beispielkunde 37",
        "country": "Deutschland",
        "title": "",
        "text": "Nutze IPTVGenuss seit einiger Zeit und bin zufrieden. Vor allem die Stabilität bei Live-Sport ist für mich wichtig."
      },
      {
        "name": "Beispielkunde 38",
        "country": "Deutschland",
        "title": "",
        "text": "Iptv Genuss läuft sauber und schnell. Support hat mir bei einer kleinen Einstellung innerhalb weniger Minuten geholfen."
      },
      {
        "name": "Beispielkunde 39",
        "country": "Deutschland",
        "title": "",
        "text": "IPTV Genuss ist bisher einer der besseren Dienste, die ich ausprobiert habe. Stabil und unkompliziert."
      },
      {
        "name": "Beispielkunde 40",
        "country": "Deutschland",
        "title": "",
        "text": "IPTVGenuss funktioniert bei mir zuverlässig. Gute Streams, schnelle Aktivierung und freundlicher Support."
      }
    ]
  }
];
