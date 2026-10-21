// Shared content: devices with their setup steps, and the FAQ.
// Keep it factual: no channel brands, counts or uptime figures.
import { site, offer } from './site.mjs';

// The login steps every Xtream-Codes app shares.
const xtream = [
  'Starten Sie die App und wählen Sie die Anmeldung per <strong>Xtream Codes API</strong> (manchmal „Xtream Login“ genannt).',
  'Tragen Sie einen beliebigen Namen für die Playlist sowie <strong>Benutzername</strong>, <strong>Passwort</strong> und <strong>Server-URL</strong> aus unserer E-Mail ein. Achten Sie auf Groß- und Kleinschreibung.',
  'Bestätigen Sie mit „Hinzufügen“ bzw. „Login“. Beim ersten Start lädt die App Senderliste und Programmführer – das kann einige Minuten dauern.',
];

export const devices = [
  {
    slug: 'fire-tv',
    name: 'Amazon Fire TV & Fire TV Stick',
    short: 'Fire TV Stick',
    icon: 'stick',
    app: 'Amazon Appstore',
    login: 'Xtream Codes oder M3U',
    steps: [
      'Suchen Sie auf dem Fire TV über die Lupe nach einer IPTV-App, die Xtream-Codes-Logins unterstützt, und installieren Sie sie. Welche Apps im Amazon Appstore verfügbar sind, ändert sich gelegentlich – wir nennen Ihnen gern eine passende.',
      ...xtream,
    ],
  },
  {
    slug: 'smart-tv',
    name: 'Samsung & LG Smart TV',
    short: 'Smart TV',
    icon: 'tv',
    app: 'Samsung Smart Hub / LG Content Store',
    login: 'App-abhängig (oft per Geräte-ID)',
    steps: [
      'Öffnen Sie den App-Store Ihres Fernsehers (Samsung: <em>Apps</em> im Smart Hub, LG: <em>LG Content Store</em>) und installieren Sie eine IPTV-App.',
      'Viele Fernseher-Apps zeigen beim ersten Start eine <strong>Geräte-ID</strong> oder <strong>MAC-Adresse</strong>. Damit tragen Sie die Zugangsdaten auf der Website des App-Anbieters ein – nicht direkt am Fernseher.',
      'Unterstützt die App eine direkte Anmeldung, geben Sie Benutzername, Passwort und Server-URL aus unserer E-Mail ein.',
      'Starten Sie die App neu. Senderliste und Programmführer werden geladen.',
    ],
  },
  {
    slug: 'android',
    name: 'Android TV, Google TV & Android-Smartphone',
    short: 'Android',
    icon: 'phone',
    app: 'Google Play Store',
    login: 'Xtream Codes oder M3U',
    steps: [
      'Öffnen Sie den <strong>Google Play Store</strong> und installieren Sie eine IPTV-App, die Xtream-Codes-Logins unterstützt.',
      ...xtream,
    ],
  },
  {
    slug: 'apple',
    name: 'iPhone, iPad & Apple TV',
    short: 'iPhone & Apple TV',
    icon: 'tablet',
    app: 'App Store',
    login: 'Xtream Codes oder M3U',
    steps: [
      'Öffnen Sie den <strong>App Store</strong> und installieren Sie eine IPTV-App, die Xtream-Codes-Logins oder M3U-Playlists unterstützt.',
      ...xtream,
    ],
  },
  {
    slug: 'computer',
    name: 'Windows & Mac',
    short: 'Computer',
    icon: 'laptop',
    app: 'z. B. VLC media player',
    login: 'M3U-Link',
    steps: [
      'Installieren Sie den kostenlosen <strong>VLC media player</strong> von videolan.org.',
      'Windows: Menü <em>Medien › Netzwerkstream öffnen …</em> · Mac: Menü <em>Ablage › Netzwerk öffnen …</em>',
      'Fügen Sie den <strong>M3U-Link</strong> aus unserer E-Mail ein und klicken Sie auf „Wiedergabe“ bzw. „Öffnen“.',
      'Die Sender erscheinen in der Wiedergabeliste (Strg + L bzw. ⌘ + L).',
    ],
  },
  {
    slug: 'mag',
    name: 'MAG-Box & Formuler',
    short: 'MAG & Formuler',
    icon: 'box',
    app: 'integriertes Portal / MyTVOnline',
    login: 'Portal-URL + MAC-Adresse',
    steps: [
      'Fragen Sie uns vorab, ob für Ihre Box ein Portal-Zugang möglich ist, und schicken Sie uns die <strong>MAC-Adresse</strong> (Aufkleber auf der Unterseite).',
      'MAG: <em>Einstellungen › Systemeinstellungen › Server › Portale</em> öffnen und die Portal-URL aus unserer E-Mail eintragen. Formuler: in <em>MyTVOnline</em> ein neues Portal hinzufügen.',
      'Speichern und die Box neu starten. Das Portal lädt automatisch.',
    ],
  },
];

export const faqs = () => [
  ['Was ist IPTV?', 'IPTV steht für <em>Internet Protocol Television</em>: Fernsehen, das über Ihre Internetverbindung statt über Kabel, Satellit oder Antenne kommt. Sie schauen über eine App auf Smart-TV, Streaming-Stick, Smartphone oder Computer. Mehr dazu in unserem Ratgeber <a href="/was-ist-iptv/">Was ist IPTV?</a>'],
  ['Brauche ich einen Kabel- oder Satellitenanschluss?', 'Nein. Sie benötigen nur einen Internetanschluss und ein geeignetes Gerät mit einer IPTV-App. Eine Satellitenschüssel, ein Kabelanschluss oder ein Receiver sind nicht nötig.'],
  ['Welche Internetgeschwindigkeit brauche ich?', 'Als Richtwert empfehlen wir pro gleichzeitig laufendem Stream rund 10 Mbit/s für HD und rund 25 Mbit/s für Ultra HD. Am stabilsten läuft IPTV per LAN-Kabel oder mit gutem WLAN-Empfang.'],
  ['Auf welchen Geräten funktioniert das?', 'Auf Amazon Fire TV und Fire TV Stick, Samsung- und LG-Smart-TVs, Android TV und Google TV, Android-Smartphones, iPhone, iPad und Apple TV sowie auf Windows- und Mac-Computern. Eine Übersicht finden Sie unter <a href="/iptv-geraete/">Unterstützte Geräte</a>.'],
  ['Welche App soll ich verwenden?', 'Sie können jede App nutzen, die Xtream-Codes-Logins oder M3U-Playlists unterstützt. In unseren <a href="/anleitungen/">Anleitungen</a> zeigen wir die Einrichtung Schritt für Schritt – und helfen gern persönlich.'],
  ['Wie erhalte ich meine Zugangsdaten?', 'Nach Ihrer Bestellung senden wir Ihnen Benutzername, Passwort und Server-URL per E-Mail. Damit melden Sie sich in Ihrer IPTV-App an.'],
  ['Kann ich auf mehreren Geräten gleichzeitig schauen?', 'Das hängt vom Paket ab: Bei jedem Paket steht, auf wie vielen Geräten gleichzeitig geschaut werden kann. Installieren dürfen Sie die App auf beliebig vielen eigenen Geräten.'],
  ...(offer.summary ? [['Welche Programme sind enthalten?', offer.summary]] : []),
  ...(site.trial ? [['Kann ich vorher testen?', 'Ja. Fordern Sie einen <a href="/kostenlos-testen/">kostenlosen Test</a> an und probieren Sie die Einrichtung auf Ihrem eigenen Gerät aus, bevor Sie sich entscheiden.']] : []),
  ['Was kann ich tun, wenn das Bild ruckelt?', 'Verbinden Sie das Gerät nach Möglichkeit per LAN-Kabel, starten Sie Router und Gerät neu und leeren Sie den Cache der App. Hilft das nicht, schreiben Sie uns – wir schauen uns das gemeinsam mit Ihnen an.'],
  ['Wie funktionieren Widerruf und Vertragsende?', 'Alle Einzelheiten finden Sie in unseren <a href="/agb/">AGB</a> und in der <a href="/widerruf/">Widerrufsbelehrung</a>.'],
];

export const faqSchema = (list) => ({
  '@type': 'FAQPage',
  mainEntity: list.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a.replace(/<[^>]+>/g, '') } })),
});
