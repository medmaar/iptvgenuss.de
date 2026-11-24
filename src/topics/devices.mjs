// Device cluster: one page per device family, children of /iptv-geraete/.
// Device-specific setup, apps and fixes; hedge third-party availability.
import { site } from '../site.mjs';
import { L, ol, stand } from './util.mjs';

const xtreamSteps = [
  'Starten Sie die App und wählen Sie die Anmeldung per <strong>Xtream Codes</strong>.',
  `Tragen Sie einen Namen (z. B. „${site.name}“), <strong>Benutzername</strong>, <strong>Passwort</strong> und <strong>Server-URL</strong> aus unserer E-Mail ein.`,
  'Bestätigen Sie. Beim ersten Start lädt die App Senderliste und Programmführer – das kann einige Minuten dauern.',
];
const note = `Apps und Geräte sind Angebote Dritter. Menüs, Verfügbarkeit und Preise können sich ändern (Stand: ${stand}).`;

export default [

  {
    path: '/iptv-geraete/',
    hub: null,
    children: 'geraete',
    name: 'IPTV-Geräte',
    teaser: 'Welches Gerät passt? Smart-TV, Stick, Box, Handy und PC im Überblick.',
    icon: 'tv',
    title: `IPTV-Geräte: Welche Geräte eignen sich? | ${site.name}`,
    description: 'Welche Geräte eignen sich für IPTV? Fire TV Stick, Smart-TV, Android, Apple TV, PC, IPTV-Box und MAG im Vergleich – mit passender App und Anleitung.',
    kicker: 'Geräte',
    h1: 'IPTV-Geräte: Welches Gerät eignet sich?',
    lead: 'IPTV läuft auf fast jedem Gerät, auf dem sich eine passende App installieren lässt: Smart-TV, Fire TV Stick, Android-Box, Smartphone, Tablet und Computer. Hier sehen Sie, welche App auf welchem Gerät am besten funktioniert.',
    sections: [
      { id: 'uebersicht', h: 'Geräte und passende Apps im Überblick', html: `
<div class="table-wrap" role="region" aria-labelledby="geraete-tab" tabindex="0"><table class="table">
<caption id="geraete-tab">IPTV-Geräte im Vergleich (Stand: ${stand})</caption>
<thead><tr><th scope="col">Gerät</th><th scope="col">Typische Apps</th><th scope="col">Anmeldung</th></tr></thead>
<tbody>
<tr><th scope="row">${L('/iptv-fire-tv-stick/', 'Fire TV Stick')}</th><td>TiviMate, IPTV Smarters Pro, XCIPTV</td><td>Xtream Codes, M3U</td></tr>
<tr><th scope="row">${L('/iptv-samsung-tv/', 'Samsung TV')}</th><td>Flix IPTV, Set IPTV, IBO Player</td><td>MAC-Adresse + M3U</td></tr>
<tr><th scope="row">${L('/iptv-lg-tv/', 'LG TV')}</th><td>Smart IPTV, SS IPTV, Flix IPTV</td><td>MAC-Adresse + M3U</td></tr>
<tr><th scope="row">${L('/iptv-android/', 'Android & Google TV')}</th><td>TiviMate, Smarters, XCIPTV</td><td>Xtream Codes, M3U</td></tr>
<tr><th scope="row">${L('/iptv-apple-tv/', 'iPhone, iPad, Apple TV')}</th><td>IPTV Smarters Pro, IPTVX</td><td>Xtream Codes, M3U</td></tr>
<tr><th scope="row">${L('/iptv-pc/', 'Windows & Mac')}</th><td>VLC, Kodi, Smarters</td><td>M3U, Xtream Codes</td></tr>
<tr><th scope="row">${L('/mag-box/', 'MAG-Box')} / ${L('/formuler/', 'Formuler')}</th><td>Portal, MyTVOnline</td><td>Portal-URL + MAC</td></tr>
</tbody></table></div>` },
      { id: 'auswahl', h: 'Worauf es bei der Wahl des Geräts ankommt', html: `
<p><strong>Streaming-Sticks und Android-Boxen</strong> bieten die größte App-Auswahl und passen an jeden Fernseher mit HDMI. Wer einen älteren Fernseher hat, ist mit einem ${L('/iptv-stick/', 'IPTV-Stick')} meist am besten bedient.</p>
<p><strong>Smart-TVs</strong> kommen ohne Zusatzgerät aus; die App-Auswahl hängt aber vom Betriebssystem ab – siehe ${L('/iptv-smart-tv/', 'IPTV auf dem Smart-TV')}.</p>
<p><strong>Smartphones, Tablets und Computer</strong> eignen sich für unterwegs oder als Zweitbildschirm. Bei ${site.name} wählen Sie zwischen 1 und 5 gleichzeitig genutzten Geräten.</p>
<p>Für ein ruckelfreies Bild ist die <strong>Verbindung</strong> oft wichtiger als das Gerät: Ein LAN-Kabel macht häufig den größten Unterschied – mehr unter ${L('/iptv-probleme/', 'IPTV-Probleme beheben')}.</p>` },
      { id: 'einrichtung', h: 'Einrichtung in drei Schritten', html: ol([
        `Passende App für Ihr Gerät installieren – siehe ${L('/iptv-apps/', 'IPTV-Apps')}.`,
        'Mit den Zugangsdaten aus unserer E-Mail anmelden (Xtream Codes, M3U-Link oder MAC-Adresse).',
        'Senderliste und Programmführer laden lassen – fertig.',
      ]) },
    ],
    faq: [
      ['Welches Gerät ist das beste für IPTV?', 'Für die meisten ein Fire TV Stick mit Fire OS oder ein Gerät mit Google TV, weil dort die meisten IPTV-Apps verfügbar sind.'],
      ['Brauche ich eine IPTV-Box?', 'Nein. Smart-TV, Stick, Smartphone oder Computer genügen. Wann sich eine Box lohnt, lesen Sie unter <a href="/iptv-box/">IPTV-Box und Receiver</a>.'],
      ['Funktioniert IPTV auf meinem Samsung- oder LG-Fernseher?', 'In den meisten Fällen ja, über Apps aus dem Store des Fernsehers. Details unter <a href="/iptv-samsung-tv/">Samsung TV</a> und <a href="/iptv-lg-tv/">LG TV</a>.'],
      ['Auf wie vielen Geräten kann ich gleichzeitig schauen?', 'Bei den bezahlten Paketen wählen Sie zwischen 1 und 5 gleichzeitig genutzten Geräten. Installieren dürfen Sie die App auf beliebig vielen eigenen Geräten.'],
    ],
    related: ['/iptv-apps/', '/iptv-stick/', '/iptv-box/', '/iptv-4k/', '/#preise', '/#kontakt'],
    keywords: ['iptv receiver test', 'iptv fernseher'],
  },
  {
    path: '/iptv-fire-tv-stick/',
    hub: 'geraete',
    name: 'Fire TV Stick',
    teaser: 'Beste Apps, Installation per Appstore oder Downloader, Vega OS beachten.',
    icon: 'stick',
    title: `IPTV auf dem Fire TV Stick: Apps & Anleitung | ${site.name}`,
    description: 'IPTV auf dem Fire TV Stick einrichten: die besten Apps, Installation per Appstore oder Downloader, Hinweise zu Vega OS und Tipps gegen Ruckeln.',
    kicker: 'Geräte',
    h1: 'IPTV auf dem Fire TV Stick – Apps und Anleitung',
    lead: 'Der Amazon Fire TV Stick ist das beliebteste Gerät für IPTV: günstig, an jeden Fernseher mit HDMI anschließbar und mit großer App-Auswahl. Sie installieren eine IPTV-App, melden sich mit Ihren Zugangsdaten an und schauen los. Wichtig ist nur, welches Betriebssystem Ihr Stick hat.',
    facts: [['Empfohlene Apps', 'TiviMate, IPTV Smarters Pro, XCIPTV, Kodi'], ['Anmeldung', 'Xtream Codes oder M3U'], ['4K', 'Mit Fire TV Stick 4K / 4K Max'], ['Achtung', 'Modelle mit Vega OS unterstützen keine Android-Apps']],
    sections: [
      { id: 'modelle', h: 'Welcher Fire TV Stick eignet sich für IPTV?', html: `
<p>Fire-TV-Geräte mit <strong>Fire OS</strong> (basiert auf Android) unterstützen alle gängigen IPTV-Apps. Amazon hat zuletzt Geräte mit dem neuen Betriebssystem <strong>Vega OS</strong> eingeführt, etwa den Fire TV Stick 4K Select. Darauf laufen nur Apps aus Amazons eigenem Store, Android-Apps lassen sich nicht installieren. Prüfen Sie vor dem Kauf, welches System das Modell nutzt – im Zweifel <a href="/#kontakt">fragen Sie uns</a>.</p>
<p>Für Ultra HD brauchen Sie ein Modell mit „4K“ im Namen; mehr dazu unter ${L('/iptv-4k/', 'IPTV in 4K')}.</p>` },
      { id: 'apps', h: 'Die besten IPTV-Apps für den Fire TV Stick', html: `
<ul>
  <li>${L('/tivimate/', 'TiviMate')}: klassischer Programmführer, ideal für die Fernbedienung; Premium kostenpflichtig.</li>
  <li>${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')}: bekannt, einfach, kostenlos in der Grundversion.</li>
  <li>${L('/xciptv/', 'XCIPTV')}: kostenlos und schlank.</li>
  <li>${L('/kodi-iptv/', 'Kodi')}: für Bastler mit eigener Mediathek.</li>
</ul>
<p>Alle Apps im Vergleich: ${L('/iptv-apps/', 'IPTV-Apps')}.</p>` },
      { id: 'installieren', h: 'IPTV-App auf dem Fire TV Stick installieren', html: `
<p><strong>Weg 1 – Amazon Appstore:</strong> Suchen Sie über die Lupe nach der App. Ist sie verfügbar, installieren Sie sie direkt.</p>
<p><strong>Weg 2 – Downloader (nur Fire OS):</strong> Manche Apps stehen nicht im Appstore. Dann gehen Sie so vor:</p>
${ol([
  'Installieren Sie die App <strong>„Downloader“</strong> aus dem Amazon Appstore.',
  'Öffnen Sie <em>Einstellungen › Mein Fire TV › Info</em> und klicken Sie siebenmal auf den Gerätenamen. Damit erscheinen die <em>Entwickleroptionen</em>.',
  'Unter <em>Entwickleroptionen › Apps unbekannter Herkunft installieren</em> erlauben Sie es für Downloader.',
  'Geben Sie in Downloader die Download-Adresse von der <strong>offiziellen Website des App-Entwicklers</strong> ein und installieren Sie die App.',
])}
<p>Laden Sie Apps nie von unbekannten Seiten oder über Kurzcodes aus Foren – dort kursieren manipulierte Versionen. Ausführlich: ${L('/iptv-downloader/', 'Downloader-App Schritt für Schritt')}.</p>` },
      { id: 'einrichten', h: 'Anmelden und loslegen', html: ol(xtreamSteps) },
      { id: 'ruckeln', h: 'Fire TV Stick ruckelt? Fünf Tipps', html: `
<ul>
  <li>Nutzen Sie einen <strong>Ethernet-Adapter</strong> statt WLAN – das hilft am meisten.</li>
  <li>Leeren Sie den App-Cache: <em>Einstellungen › Anwendungen › Installierte Anwendungen verwalten</em>.</li>
  <li>Deinstallieren Sie ungenutzte Apps, um Speicher freizugeben.</li>
  <li>Schließen Sie den Stick per HDMI-Verlängerung an, wenn er hinter dem Fernseher schlechten Empfang hat.</li>
  <li>Starten Sie den Stick gelegentlich neu (Home-Taste lange drücken › Einstellungen › Neu starten).</li>
</ul>
<p>Mehr unter ${L('/iptv-probleme/', 'IPTV-Probleme beheben')}.</p>
<p class="muted">${note}</p>` },
    ],
    faq: [
      ['Welche IPTV-App ist die beste für den Fire TV Stick?', 'Sehr beliebt ist TiviMate wegen des Programmführers. Kostenlos und einfach sind IPTV Smarters Pro und XCIPTV.'],
      ['Ist IPTV auf dem Fire TV Stick legal?', 'Die Apps und der Stick sind legal. Entscheidend ist, dass Ihr IPTV-Anbieter die Rechte an den Programmen hat.'],
      ['Funktioniert IPTV auf dem Fire TV Stick 4K Select?', 'Geräte mit Vega OS unterstützen keine Android-Apps. Gängige IPTV-Apps wie TiviMate lassen sich dort nicht installieren.'],
      ['Was ist die Downloader-App?', 'Eine App aus dem Amazon Appstore, mit der Sie Dateien aus dem Internet laden und Apps von der Website des Entwicklers installieren können. Sie funktioniert nur auf Geräten mit Fire OS.'],
      ['Brauche ich Amazon Prime für IPTV?', 'Nein. Für IPTV brauchen Sie nur ein Amazon-Konto, um Apps zu installieren, und Ihre IPTV-Zugangsdaten.'],
    ],
    related: ['/tivimate/', '/iptv-smarters-pro/', '/iptv-downloader/', '/xciptv/', '/iptv-stick/', '/iptv-4k/'],
    keywords: ['fire tv iptv', 'fire tv stick iptv', 'iptv fire stick', 'iptv fire tv', 'iptv firestick', 'iptv for firestick', 'amazon fire stick iptv', 'iptv amazon', 'iptv amazon stick', 'iptv box amazon', 'firestick ly73pr'],
  },

  {
    path: '/iptv-samsung-tv/',
    hub: 'geraete',
    name: 'Samsung TV',
    teaser: 'IPTV-Apps für Tizen-Fernseher und der Weg über den Stick.',
    icon: 'tv',
    title: `IPTV auf dem Samsung Smart TV: Apps & Anleitung | ${site.name}`,
    description: 'IPTV auf dem Samsung Smart TV: welche Apps es für Tizen gibt, wie Sie die Playlist per MAC-Adresse einrichten und wann ein Fire TV Stick die bessere Lösung ist.',
    kicker: 'Geräte',
    h1: 'IPTV auf dem Samsung Smart TV einrichten',
    lead: 'Samsung-Fernseher nutzen das Betriebssystem Tizen. IPTV-Apps finden Sie unter „Apps“ im Smart Hub – meist Apps wie Flix IPTV, Set IPTV oder IBO Player, die über eine MAC-Adresse eingerichtet werden. Ist keine passende App verfügbar, ist ein Streaming-Stick am HDMI-Anschluss die einfachste Lösung.',
    facts: [['Betriebssystem', 'Tizen'], ['App-Quelle', 'Smart Hub › Apps'], ['Typische Apps', 'Flix IPTV, Set IPTV, Smart One IPTV, IBO Player, je nach Modell SS IPTV'], ['Anmeldung', 'Meist M3U per MAC-Adresse']],
    sections: [
      { id: 'apps', h: 'IPTV-Apps für Samsung-Fernseher', html: `
<p>Welche Apps im Samsung-Store erscheinen, hängt von Modell, Baujahr und Region ab. ${L('/smart-iptv/', 'Smart IPTV')} ist auf vielen neueren Geräten nicht mehr gelistet. Bewährt haben sich:</p>
<ul>
  <li>${L('/flix-iptv/', 'Flix IPTV')} – moderne Oberfläche, Aktivierung nach Testphase.</li>
  <li>${L('/set-iptv/', 'Set IPTV und Smart One IPTV')} – schlank, Einrichtung per MAC-Adresse.</li>
  <li>${L('/ss-iptv/', 'SS IPTV')} – kostenlos, sofern für Ihr Modell verfügbar.</li>
</ul>` },
      { id: 'einrichten', h: 'So richten Sie IPTV auf dem Samsung TV ein', html: ol([
        'Drücken Sie die Home-Taste und öffnen Sie <strong>Apps</strong>.',
        'Suchen Sie die gewünschte IPTV-App über die Lupe und installieren Sie sie.',
        'Starten Sie die App und notieren Sie die angezeigte <strong>MAC-Adresse</strong> (bei manchen Apps zusätzlich einen Geräteschlüssel).',
        'Laden Sie auf der Website des App-Anbieters Ihren <strong>M3U-Link</strong> für diese MAC-Adresse hoch.',
        'Starten Sie die App neu. Senderliste und Programmführer erscheinen.',
      ]) },
      { id: 'stick', h: 'Die Alternative: Stick am HDMI-Anschluss', html: `
<p>Ältere Samsung-Modelle (vor 2017) oder Geräte ohne passende App rüsten Sie mit einem ${L('/iptv-fire-tv-stick/', 'Fire TV Stick')} oder einem ${L('/iptv-stick/', 'anderen Streaming-Stick')} nach. Dort stehen Apps wie ${L('/tivimate/', 'TiviMate')} und ${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')} zur Verfügung, die sich mit Xtream-Codes-Daten einrichten lassen – ganz ohne MAC-Adresse.</p>` },
      { id: 'tipps', h: 'Tipps für Samsung-Fernseher', html: `
<ul>
  <li>Halten Sie die Fernseher-Software aktuell (<em>Einstellungen › Unterstützung › Software-Update</em>).</li>
  <li>Verbinden Sie den Fernseher per LAN-Kabel, wenn das Bild ruckelt.</li>
  <li>Schalten Sie „Instant On“ aus, wenn eine App nach dem Einschalten hängt – der Fernseher startet dann komplett neu.</li>
</ul>
<p class="muted">${note}</p>` },
    ],
    faq: [
      ['Welche IPTV-App gibt es für Samsung Smart TV?', 'Je nach Modell zum Beispiel Flix IPTV, Set IPTV, Smart One IPTV, IBO Player oder SS IPTV. Die Auswahl im Samsung-Store ändert sich gelegentlich.'],
      ['Gibt es IPTV Smarters Pro für Samsung?', 'Die Verfügbarkeit im Samsung-Store wechselt. Über einen Fire TV Stick am HDMI-Anschluss können Sie Smarters jederzeit nutzen.'],
      ['Warum finde ich Smart IPTV nicht im Samsung-Store?', 'Smart IPTV ist auf vielen neueren Samsung-Fernsehern nicht mehr gelistet. Nutzen Sie eine der Alternativen oder einen Streaming-Stick.'],
      ['Funktioniert IPTV auf älteren Samsung-Fernsehern?', 'Ältere Modelle bieten oft keine passenden Apps mehr. Ein Streaming-Stick am HDMI-Anschluss ist dann die einfachste Lösung.'],
    ],
    related: ['/ibo-player/', '/iptv-lg-tv/', '/iptv-smart-tv/', '/flix-iptv/', '/set-iptv/', '/iptv-fire-tv-stick/'],
    keywords: ['iptv samsung', 'iptv samsung tv', 'iptv for samsung tv', 'iptv samsung smart tv', 'iptv samsung tizen', 'iptv tizen'],
  },

  {
    path: '/iptv-lg-tv/',
    hub: 'geraete',
    name: 'LG TV',
    teaser: 'IPTV auf webOS: Apps aus dem LG Content Store einrichten.',
    icon: 'tv',
    title: `IPTV auf dem LG Smart TV (webOS) einrichten | ${site.name}`,
    description: 'IPTV auf dem LG Smart TV mit webOS: passende Apps aus dem LG Content Store, Einrichtung per MAC-Adresse oder Playlist-Link und Tipps für ein ruckelfreies Bild.',
    kicker: 'Geräte',
    h1: 'IPTV auf dem LG Smart TV (webOS)',
    lead: 'LG-Fernseher mit webOS bieten im LG Content Store eine gute Auswahl an IPTV-Apps, darunter Smart IPTV, SS IPTV, Flix IPTV und Set IPTV. Die Einrichtung läuft meist über eine MAC-Adresse oder einen Playlist-Link – ein Zusatzgerät brauchen Sie in der Regel nicht.',
    facts: [['Betriebssystem', 'webOS'], ['App-Quelle', 'LG Content Store (Apps)'], ['Typische Apps', 'Smart IPTV, SS IPTV, Flix IPTV, Set IPTV, IBO Player'], ['Anmeldung', 'M3U per MAC-Adresse oder Link']],
    sections: [
      { id: 'apps', h: 'Die passenden IPTV-Apps für LG webOS', html: `
<ul>
  <li>${L('/smart-iptv/', 'Smart IPTV')}: Klassiker auf LG, Playlist-Upload per MAC-Adresse, einmalige Aktivierung.</li>
  <li>${L('/ss-iptv/', 'SS IPTV')}: kostenlos, Playlist per Link oder Code.</li>
  <li>${L('/flix-iptv/', 'Flix IPTV')} und ${L('/set-iptv/', 'Set IPTV')}: moderne Alternativen mit Testphase.</li>
</ul>` },
      { id: 'einrichten', h: 'IPTV auf dem LG TV einrichten', html: ol([
        'Drücken Sie die Home-Taste und öffnen Sie <strong>Apps</strong> (LG Content Store).',
        'Suchen und installieren Sie die gewünschte IPTV-App.',
        'Starten Sie die App und notieren Sie die <strong>MAC-Adresse</strong> – oder wählen Sie, falls angeboten, die Eingabe eines Playlist-Links.',
        'Hinterlegen Sie auf der Website des App-Anbieters Ihren <strong>M3U-Link</strong> für diese MAC-Adresse.',
        'App neu starten – fertig.',
      ]) },
      { id: 'tipps', h: 'Tipps für LG-Fernseher', html: `
<ul>
  <li>Bei Rucklern: LAN-Kabel nutzen und unter <em>Allgemein › Geräte › TV-Verwaltung</em> nicht benötigte Apps schließen.</li>
  <li>Bei älteren webOS-Versionen fehlen manche Apps. Dann hilft ein ${L('/iptv-fire-tv-stick/', 'Fire TV Stick')} mit ${L('/tivimate/', 'TiviMate')}.</li>
  <li>„Quick Start+“ ausschalten, wenn eine App nach dem Einschalten nicht lädt.</li>
</ul>
<p>Andere Marken finden Sie unter ${L('/iptv-smart-tv/', 'IPTV auf dem Smart-TV')}.</p>
<p class="muted">${note}</p>` },
    ],
    faq: [
      ['Welche IPTV-App ist die beste für LG?', 'Smart IPTV ist auf LG weit verbreitet. Kostenlos ist SS IPTV, modern sind Flix IPTV und Set IPTV.'],
      ['Gibt es TiviMate für LG-Fernseher?', 'Nein. TiviMate läuft nur auf Android-basierten Geräten. Mit einem Fire TV Stick am HDMI-Anschluss können Sie es trotzdem nutzen.'],
      ['Wo finde ich die MAC-Adresse für die IPTV-App?', 'Die App zeigt sie beim Start an. Sie kann von der MAC-Adresse in den Netzwerkeinstellungen abweichen.'],
      ['Brauche ich für IPTV auf dem LG TV eine Box?', 'In der Regel nicht. Nur bei älteren Modellen ohne passende App lohnt sich ein Streaming-Stick.'],
    ],
    related: ['/ibo-player/', '/iptv-samsung-tv/', '/iptv-smart-tv/', '/smart-iptv/', '/ss-iptv/', '/iptv-fire-tv-stick/'],
    keywords: ['iptv lg', 'iptv lg tv', 'iptv lg smart', 'iptv lg webos', 'iptv for lg webos'],
  },

  {
    path: '/iptv-smart-tv/',
    hub: 'geraete',
    name: 'Smart-TV (alle Marken)',
    teaser: 'Sony, Philips, Hisense, Panasonic, TCL & Co.: welches System, welche App.',
    icon: 'tv',
    title: `IPTV auf dem Smart-TV: Sony, Philips, Hisense & Co. | ${site.name}`,
    description: 'IPTV auf dem Smart-TV: Welche Apps es für Google TV, VIDAA, webOS und Tizen gibt – mit Hinweisen zu Sony, Philips, Hisense, Panasonic, TCL und Roku.',
    kicker: 'Geräte',
    h1: 'IPTV auf dem Smart-TV – welche App für welche Marke?',
    lead: 'Ob IPTV auf Ihrem Smart-TV direkt läuft, hängt vom Betriebssystem ab, nicht von der Marke. Fernseher mit Google TV oder Android TV haben die größte App-Auswahl, bei Tizen (Samsung), webOS (LG) und VIDAA (Hisense) ist sie kleiner. Fehlt eine passende App, hilft ein Streaming-Stick.',
    sections: [
      { id: 'systeme', h: 'Smart-TV-Betriebssysteme und IPTV', html: `
<div class="table-wrap" role="region" aria-labelledby="tv-tab" tabindex="0"><table class="table">
<caption id="tv-tab">Betriebssysteme und IPTV-Apps (Stand: ${stand})</caption>
<thead><tr><th scope="col">System</th><th scope="col">Typische Marken</th><th scope="col">IPTV-Apps</th></tr></thead>
<tbody>
<tr><th scope="row">Google TV / Android TV</th><td>Sony, Philips (viele Modelle), TCL, Xiaomi</td><td>Große Auswahl: ${L('/tivimate/', 'TiviMate')}, ${L('/iptv-smarters-pro/', 'Smarters')}, ${L('/xciptv/', 'XCIPTV')}</td></tr>
<tr><th scope="row">Tizen</th><td>Samsung</td><td>MAC-basierte Apps, siehe ${L('/iptv-samsung-tv/', 'Samsung TV')}</td></tr>
<tr><th scope="row">webOS</th><td>LG</td><td>Smart IPTV, SS IPTV u. a., siehe ${L('/iptv-lg-tv/', 'LG TV')}</td></tr>
<tr><th scope="row">VIDAA</th><td>Hisense, einige Toshiba</td><td>Kleine Auswahl, oft MAC-basierte Apps</td></tr>
<tr><th scope="row">Fire TV integriert</th><td>Einige Panasonic-, Toshiba- und Grundig-Modelle</td><td>Wie ${L('/iptv-fire-tv-stick/', 'Fire TV Stick')}</td></tr>
<tr><th scope="row">Roku</th><td>Roku-Geräte</td><td>Sehr eingeschränkt</td></tr>
</tbody></table></div>
<p>Das System Ihres Fernsehers finden Sie in den Einstellungen unter „Info“ oder „Über dieses Gerät“.</p>` },
      { id: 'google-tv', h: 'Sony, Philips, TCL: IPTV auf Google TV', html: `
<p>Hier gehen Sie vor wie auf jedem Android-Gerät: App aus dem Google Play Store installieren und per Xtream Codes anmelden. Die Schritte zeigt ${L('/iptv-android/', 'IPTV auf Android und Google TV')}. Einige Philips-Modelle nutzen andere Systeme (z. B. Titan OS); dort ist die App-Auswahl kleiner.</p>` },
      { id: 'vidaa', h: 'Hisense VIDAA, Panasonic und Roku', html: `
<p><strong>Hisense (VIDAA):</strong> Im App-Store erscheinen nur wenige IPTV-Apps; die Einrichtung läuft dann meist per MAC-Adresse wie bei ${L('/flix-iptv/', 'Flix IPTV')}. <strong>Panasonic:</strong> Neuere Modelle mit integriertem Fire TV verhalten sich wie ein Fire TV Stick, ältere mit „my Home Screen“ bieten kaum IPTV-Apps. <strong>Roku:</strong> Der Roku-Store enthält kaum Player für Xtream oder M3U.</p>
<p>In allen drei Fällen ist ein ${L('/iptv-stick/', 'IPTV-Stick')} am HDMI-Anschluss meist die zuverlässigste Lösung.</p>` },
      { id: 'einrichten', h: 'Allgemeine Anleitung', html: ol([
        'Betriebssystem des Fernsehers ermitteln (Einstellungen › Info).',
        `Passende App wählen – siehe ${L('/iptv-apps/', 'IPTV-Apps im Vergleich')}.`,
        'App installieren und mit Xtream-Codes-Daten oder per MAC-Adresse und M3U-Link einrichten.',
        'Fernseher nach Möglichkeit per LAN-Kabel verbinden.',
      ]) + `<p class="muted">${note}</p>` },
    ],
    faq: [
      ['Funktioniert IPTV auf jedem Smart-TV?', 'Auf den meisten, sofern es für das Betriebssystem eine passende App gibt. Sonst hilft ein Streaming-Stick am HDMI-Anschluss.'],
      ['Welche Smart-TVs eignen sich am besten für IPTV?', 'Fernseher mit Google TV oder Android TV, etwa von Sony, TCL oder vielen Philips-Modellen, bieten die größte App-Auswahl.'],
      ['Gibt es IPTV-Apps für Roku?', 'Im Roku-Store gibt es kaum Player für Xtream Codes oder M3U. Ein anderer Streaming-Stick ist die bessere Wahl.'],
      ['Wie finde ich heraus, welches System mein Fernseher hat?', 'In den Einstellungen unter „Info“ oder „Über dieses Gerät“. Auch die Bedienungsanleitung nennt das Betriebssystem.'],
    ],
    related: ['/iptv-samsung-tv/', '/iptv-lg-tv/', '/iptv-android/', '/iptv-chromecast/', '/iptv-stick/', '/iptv-apps/'],
    keywords: ['iptv smart tv', 'ip tv smart tv', 'smart tv ip tv', 'iptv hisense', 'iptv hisense vidaa', 'iptv philips', 'iptv sony', 'iptv sony bravia', 'iptv panasonic', 'iptv toshiba', 'iptv roku', 'iptv roku tv', 'iptv on roku tv', 'iptv google tv'],
  },

  {
    path: '/iptv-android/',
    hub: 'geraete',
    name: 'Android & Google TV',
    teaser: 'Smartphone, Tablet, Android TV und Google TV einrichten – plus Chromecast.',
    icon: 'phone',
    title: `IPTV auf Android, Android TV & Google TV | ${site.name}`,
    description: 'IPTV auf Android einrichten: die besten Apps für Smartphone, Tablet, Android TV und Google TV, Anleitung per Xtream Codes und Tipps zu Chromecast.',
    kicker: 'Geräte',
    h1: 'IPTV auf Android, Android TV und Google TV',
    lead: 'Android bietet die größte Auswahl an IPTV-Apps – auf Smartphone und Tablet ebenso wie auf Android-TV- und Google-TV-Geräten. Sie installieren einen IPTV-Player aus dem Google Play Store, melden sich per Xtream Codes an und schauen auf dem Handy oder direkt am Fernseher.',
    facts: [['App-Quelle', 'Google Play Store'], ['Für den Fernseher', 'TiviMate, IPTV Smarters Pro, XCIPTV, Kodi'], ['Für Smartphone/Tablet', 'IPTV Smarters Pro, XCIPTV, VLC'], ['Anmeldung', 'Xtream Codes oder M3U']],
    sections: [
      { id: 'apps', h: 'Die besten IPTV-Apps für Android', html: `
<ul>
  <li><strong>Android TV / Google TV:</strong> ${L('/tivimate/', 'TiviMate')} (für TV-Geräte optimiert), ${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')}, ${L('/xciptv/', 'XCIPTV')}.</li>
  <li><strong>Smartphone und Tablet:</strong> ${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')}, ${L('/xciptv/', 'XCIPTV')}, ${L('/vlc-iptv/', 'VLC')}.</li>
  <li><strong>Portal-Zugang:</strong> ${L('/stbemu/', 'STBEmu')}.</li>
</ul>` },
      { id: 'einrichten', h: 'IPTV auf Android einrichten', html: ol([
        'Öffnen Sie den <strong>Google Play Store</strong> und installieren Sie eine IPTV-App, die Xtream Codes unterstützt.',
        ...xtreamSteps,
      ]) },
      { id: 'chromecast', h: 'IPTV per Chromecast auf den Fernseher', html: `
<p>Geräte wie Chromecast mit Google TV oder der Google TV Streamer haben ein vollwertiges Google TV – dort installieren Sie die App direkt, statt vom Handy zu streamen. Ältere Chromecast-Modelle ohne eigene Oberfläche empfangen nur Streams, die eine App per „Cast“ sendet; das unterstützen nicht alle IPTV-Apps und es ist meist weniger stabil. Details unter ${L('/iptv-chromecast/', 'IPTV auf Chromecast und Google TV Streamer')}.</p>` },
      { id: 'boxen', h: 'Android-TV-Boxen', html: `
<p>Wer mehr Leistung als ein Stick möchte, greift zu einer Android-TV-Box. Worauf es dabei ankommt, lesen Sie unter ${L('/iptv-box/', 'IPTV-Box kaufen')}. Für unterwegs: Rechnen Sie im Mobilfunknetz mit rund 2 bis 4 GB Datenvolumen pro Stunde in HD.</p>
<p class="muted">${note}</p>` },
    ],
    faq: [
      ['Welche IPTV-App ist die beste für Android?', 'Auf Fernsehgeräten mit Android TV ist TiviMate sehr beliebt, auf dem Smartphone IPTV Smarters Pro oder XCIPTV.'],
      ['Kann ich IPTV vom Handy auf den Fernseher streamen?', 'Ja, sofern die App „Cast“ unterstützt. Stabiler ist es, die App direkt auf einem Google-TV-Gerät am Fernseher zu installieren.'],
      ['Läuft TiviMate auf dem Android-Handy?', 'TiviMate ist für Fernsehgeräte gedacht. Auf dem Handy dient die Companion-App nur zur Verwaltung von Premium.'],
      ['Verbraucht IPTV viel mobiles Datenvolumen?', 'Ja, in HD etwa 2 bis 4 GB pro Stunde. Schauen Sie unterwegs möglichst im WLAN.'],
    ],
    related: ['/tivimate/', '/iptv-smarters-pro/', '/iptv-chromecast/', '/iptv-box/', '/ott-navigator/', '/iptv-smart-tv/'],
    keywords: ['iptv android', 'iptv tv box android', 'iptv chromecast', 'iptv smarters pro android tv', 'tivimate android tv'],
  },

  {
    path: '/iptv-apple-tv/',
    hub: 'geraete',
    name: 'iPhone, iPad & Apple TV',
    teaser: 'IPTV-Apps aus dem App Store für iPhone, iPad und Apple TV 4K.',
    icon: 'tablet',
    title: `IPTV auf Apple TV, iPhone & iPad einrichten | ${site.name}`,
    description: 'IPTV auf Apple TV, iPhone und iPad: passende Apps aus dem App Store, Einrichtung per Xtream Codes oder M3U und Tipps für Apple TV 4K und AirPlay.',
    kicker: 'Geräte',
    h1: 'IPTV auf Apple TV, iPhone und iPad',
    lead: 'Auf Apple-Geräten installieren Sie IPTV-Apps aus dem App Store, zum Beispiel IPTV Smarters Pro (teils als „Smarters Player Lite“), GSE Smart IPTV oder IPTVX. Sie melden sich per Xtream Codes oder M3U an. Das Apple TV 4K spielt dank HEVC-Unterstützung auch Ultra-HD-Streams ab.',
    facts: [['App-Quelle', 'App Store'], ['Typische Apps', 'IPTV Smarters Pro / Smarters Player Lite, GSE Smart IPTV, IPTVX, VLC'], ['Nicht verfügbar', 'TiviMate'], ['Anmeldung', 'Xtream Codes oder M3U']],
    sections: [
      { id: 'einrichten', h: 'IPTV auf Apple TV und iPhone einrichten', html: ol([
        'Öffnen Sie den <strong>App Store</strong> und installieren Sie eine IPTV-App mit Xtream-Codes- oder M3U-Unterstützung.',
        ...xtreamSteps,
      ]) },
      { id: 'apps', h: 'Welche App für welches Apple-Gerät?', html: `
<ul>
  <li><strong>Apple TV:</strong> Apps mit tvOS-Version und Programmführer, etwa ${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')} oder IPTVX.</li>
  <li><strong>iPhone und iPad:</strong> zusätzlich ${L('/vlc-iptv/', 'VLC')} für den schnellen Test eines M3U-Links.</li>
  <li><strong>Mac:</strong> siehe ${L('/iptv-pc/', 'IPTV am PC und Mac')}.</li>
</ul>
<p>${L('/tivimate/', 'TiviMate')} gibt es für Apple-Geräte nicht. Den Gesamtüberblick bietet ${L('/iptv-apps/', 'IPTV-Apps im Vergleich')}.</p>` },
      { id: 'airplay', h: 'AirPlay und Apple TV 4K', html: `
<p>Viele Apps auf dem iPhone unterstützen AirPlay. Stabiler ist es aber, die App direkt auf dem Apple TV zu nutzen. Für 4K-Streams brauchen Sie ein Apple TV 4K und eine Leitung mit rund 25 Mbit/s – Details unter ${L('/iptv-4k/', 'IPTV in 4K')}.</p>
<p class="muted">${note}</p>` },
    ],
    faq: [
      ['Welche IPTV-App gibt es für Apple TV?', 'Zum Beispiel IPTV Smarters Pro bzw. Smarters Player Lite, IPTVX oder GSE Smart IPTV. Wichtig ist Unterstützung für Xtream Codes oder M3U.'],
      ['Gibt es TiviMate für Apple TV?', 'Nein. TiviMate läuft nur auf Android-basierten Geräten.'],
      ['Kann ich IPTV vom iPhone auf den Fernseher bringen?', 'Ja, per AirPlay, sofern die App es unterstützt. Am stabilsten läuft die App direkt auf einem Apple TV.'],
      ['Sind die IPTV-Apps im App Store kostenlos?', 'Manche sind kostenlos, andere verlangen einen Kauf oder ein Abo beim App-Anbieter. Sender enthalten sie nicht.'],
    ],
    related: ['/iptv-smarters-pro/', '/iptvx/', '/gse-smart-iptv/', '/iptv-pc/', '/iptv-4k/', '/iptv-apps/'],
    keywords: ['iptv apple tv', 'iptv ipad', 'iptv iphone'],
  },

  {
    path: '/iptv-pc/',
    hub: 'geraete',
    name: 'Windows & Mac',
    teaser: 'IPTV am PC, Laptop und Mac: VLC, Kodi, Smarters und MyIPTV Player.',
    icon: 'laptop',
    title: `IPTV am PC und Mac: Die besten Player | ${site.name}`,
    description: 'IPTV am PC, Laptop und Mac schauen: die besten IPTV-Player für Windows und macOS wie VLC, Kodi, IPTV Smarters und MyIPTV Player – mit Anleitung und Tipps.',
    kicker: 'Geräte',
    h1: 'IPTV am PC und Mac schauen',
    lead: 'Am Computer schauen Sie IPTV am schnellsten mit dem kostenlosen VLC media player: M3U-Link öffnen, fertig. Wer einen Programmführer möchte, nutzt Kodi, die Desktop-Version von IPTV Smarters oder unter Windows den MyIPTV Player aus dem Microsoft Store.',
    sections: [
      { id: 'player', h: 'Die besten IPTV-Player für Windows und Mac', html: `
<div class="table-wrap" role="region" aria-labelledby="pc-tab" tabindex="0"><table class="table">
<caption id="pc-tab">IPTV-Player für Computer (Stand: ${stand})</caption>
<thead><tr><th scope="col">Player</th><th scope="col">System</th><th scope="col">Programmführer</th><th scope="col">Anmeldung</th></tr></thead>
<tbody>
<tr><th scope="row">${L('/vlc-iptv/', 'VLC')}</th><td>Windows, Mac, Linux</td><td>Nein</td><td>M3U</td></tr>
<tr><th scope="row">${L('/kodi-iptv/', 'Kodi')}</th><td>Windows, Mac, Linux</td><td>Ja</td><td>M3U + EPG</td></tr>
<tr><th scope="row">${L('/iptv-smarters-pro/', 'IPTV Smarters')}</th><td>Windows, Mac</td><td>Ja</td><td>Xtream Codes, M3U</td></tr>
<tr><th scope="row">MyIPTV Player</th><td>Windows (Microsoft Store)</td><td>Ja</td><td>M3U + EPG</td></tr>
</tbody></table></div>` },
      { id: 'vlc', h: 'Schnellstart mit VLC', html: ol([
        'VLC von videolan.org installieren.',
        'Windows: <em>Medien › Netzwerkstream öffnen</em>; Mac: <em>Ablage › Netzwerk öffnen</em>.',
        'M3U-Link einfügen und abspielen; Senderliste über die Wiedergabeliste öffnen.',
      ]) + `<p>Ausführlich unter ${L('/vlc-iptv/', 'IPTV mit VLC')}.</p>` },
      { id: 'browser', h: 'IPTV im Browser?', html: `
<p>Reine Web-Player im Browser sind praktisch, aber oft eingeschränkt: Viele Streams lassen sich aus technischen Gründen nicht direkt im Browser abspielen. Ein installierter Player wie VLC ist zuverlässiger. Wenn Sie den Laptop per HDMI an den Fernseher anschließen, haben Sie ihn als großen Bildschirm.</p>
<p class="muted">${note}</p>` },
    ],
    faq: [
      ['Wie kann ich IPTV am PC schauen?', 'Am einfachsten mit VLC: M3U-Link über „Netzwerkstream öffnen“ abspielen. Mit Programmführer eignen sich Kodi oder IPTV Smarters.'],
      ['Gibt es IPTV Smarters Pro für Windows?', 'Ja, der Entwickler bietet eine Windows- und eine Mac-Version auf seiner Website an.'],
      ['Gibt es TiviMate für den PC?', 'Nein, TiviMate ist nur für Android-basierte TV-Geräte verfügbar.'],
      ['Kann ich IPTV auf dem MacBook schauen?', 'Ja, mit VLC, Kodi oder der Mac-Version von IPTV Smarters.'],
    ],
    related: ['/vlc-iptv/', '/kodi-iptv/', '/iptv-smarters-pro/', '/perfect-player/', '/m3u-playlist/', '/iptv-apps/'],
    keywords: ['iptv pc', 'iptv laptop', 'iptv macbook', 'iptv player win', 'iptv mac'],
  },

  {
    path: '/iptv-stick/',
    hub: 'geraete',
    name: 'IPTV-Stick',
    teaser: 'Fire TV Stick, Google TV, Android-Sticks: welcher Stick sich für IPTV eignet.',
    icon: 'stick',
    title: `IPTV-Stick: Welcher Streaming-Stick eignet sich? | ${site.name}`,
    description: 'Welcher IPTV-Stick ist der richtige? Fire TV Stick, Google-TV-Geräte und Android-Sticks im Vergleich – mit Kriterien zu App-Auswahl, 4K, Speicher und Bedienung.',
    kicker: 'Geräte',
    h1: 'IPTV-Stick: Welcher Streaming-Stick eignet sich?',
    lead: 'Ein „IPTV-Stick“ ist ein gewöhnlicher Streaming-Stick, auf dem Sie eine IPTV-App installieren. Am besten eignen sich Sticks mit großer App-Auswahl: Fire TV Sticks mit Fire OS und Geräte mit Google TV. Sender sind auf keinem Stick vorinstalliert – die kommen von Ihrem IPTV-Anbieter.',
    sections: [
      { id: 'vergleich', h: 'Streaming-Sticks für IPTV im Vergleich', html: `
<div class="table-wrap" role="region" aria-labelledby="stick-tab" tabindex="0"><table class="table">
<caption id="stick-tab">Streaming-Sticks für IPTV (Stand: ${stand}, ohne Gewähr)</caption>
<thead><tr><th scope="col">Gerät</th><th scope="col">System</th><th scope="col">IPTV-Apps</th><th scope="col">Hinweis</th></tr></thead>
<tbody>
<tr><th scope="row">${L('/iptv-fire-tv-stick/', 'Fire TV Stick (Fire OS)')}</th><td>Fire OS</td><td>Große Auswahl</td><td>Beliebteste Wahl</td></tr>
<tr><th scope="row">Fire TV mit Vega OS</th><td>Vega OS</td><td>Keine Android-Apps</td><td>Für IPTV-Apps ungeeignet</td></tr>
<tr><th scope="row">Google-TV-Geräte</th><td>Google TV</td><td>Große Auswahl (Play Store)</td><td>Siehe ${L('/iptv-android/', 'Android & Google TV')}</td></tr>
<tr><th scope="row">Android-TV-Sticks</th><td>Android TV</td><td>Große Auswahl</td><td>Auf Google-Zertifizierung achten</td></tr>
<tr><th scope="row">Roku-Sticks</th><td>Roku OS</td><td>Sehr eingeschränkt</td><td>Für IPTV kaum geeignet</td></tr>
</tbody></table></div>` },
      { id: 'kriterien', h: 'Worauf Sie beim Kauf achten sollten', html: `
<ul>
  <li><strong>Betriebssystem:</strong> Fire OS, Google TV oder Android TV – damit laufen ${L('/tivimate/', 'TiviMate')} und ${L('/iptv-smarters-pro/', 'Smarters')}.</li>
  <li><strong>4K und HEVC:</strong> Nur nötig, wenn Ihr Fernseher 4K kann – siehe ${L('/iptv-4k/', 'IPTV in 4K')}.</li>
  <li><strong>Speicher:</strong> Mindestens 8 GB, damit Apps und Programmführer Platz haben.</li>
  <li><strong>Netzwerk:</strong> WLAN mit 5 GHz oder ein LAN-Adapter.</li>
</ul>` },
      { id: 'warnung', h: 'Vorsicht bei „IPTV-Sticks mit Sendern“', html: `
<p>Auf Marktplätzen werden Sticks und Boxen angeboten, die mit vorinstallierten Sendern oder Pay-TV-Inhalten werben. Der Europäische Gerichtshof hat 2017 entschieden, dass schon der Verkauf solcher vorkonfigurierter Geräte das Urheberrecht verletzen kann. Kaufen Sie einen normalen Stick und wählen Sie Ihren Anbieter selbst – mehr dazu unter ${L('/iptv-anbieter/', 'IPTV-Anbieter wählen')}.</p>
<p>Lieber eine Box statt eines Sticks? Siehe ${L('/iptv-box/', 'IPTV-Box')}.</p>
<p class="muted">${note}</p>` },
    ],
    faq: [
      ['Was ist ein IPTV-Stick?', 'Ein normaler Streaming-Stick wie der Fire TV Stick, auf dem Sie eine IPTV-App installieren. Die Sender kommen von Ihrem IPTV-Anbieter.'],
      ['Welcher Stick ist der beste für IPTV?', 'Ein Fire TV Stick mit Fire OS oder ein Gerät mit Google TV. Beide bieten eine große Auswahl an IPTV-Apps.'],
      ['Sind Sticks mit vorinstallierten Sendern legal?', 'In der Regel nicht. Nach einem Urteil des Europäischen Gerichtshofs kann schon der Verkauf solcher vorkonfigurierter Geräte rechtswidrig sein.'],
      ['Brauche ich einen 4K-Stick?', 'Nur wenn Ihr Fernseher 4K darstellt und Sie Ultra-HD-Streams schauen möchten.'],
    ],
    related: ['/iptv-fire-tv-stick/', '/iptv-android/', '/iptv-box/', '/iptv-4k/', '/iptv-smart-tv/', '/iptv-geraete/'],
    keywords: ['iptv stick', 'ip tv stick', 'iptv tv stick', 'iptv sticks'],
  },

  {
    path: '/iptv-box/',
    hub: 'geraete',
    name: 'IPTV-Box & Receiver',
    teaser: 'Android-TV-Box, MAG, Formuler oder Enigma2: welche Box zu Ihnen passt.',
    icon: 'box',
    title: `IPTV-Box kaufen: Receiver und Boxen im Vergleich | ${site.name}`,
    description: 'IPTV-Box und IPTV-Receiver im Vergleich: Android-TV-Boxen, MAG, Formuler und Enigma2 – Vor- und Nachteile und worauf Sie beim Kauf achten sollten.',
    kicker: 'Geräte',
    h1: 'IPTV-Box und IPTV-Receiver im Vergleich',
    lead: 'Eine IPTV-Box ist ein Zusatzgerät am Fernseher, auf dem eine IPTV-App oder ein Portal läuft. Die beste IPTV-Box für die meisten ist eine Android-TV-Box mit Google-Zertifizierung: große App-Auswahl, schnelle Updates. MAG- und Formuler-Boxen eignen sich für Portal-Zugänge, Enigma2-Receiver für Satelliten-Fans.',
    sections: [
      { id: 'typen', h: 'Welche IPTV-Boxen gibt es?', html: `
<div class="table-wrap" role="region" aria-labelledby="box-tab" tabindex="0"><table class="table">
<caption id="box-tab">IPTV-Boxen im Vergleich</caption>
<thead><tr><th scope="col">Box-Typ</th><th scope="col">Beispiele</th><th scope="col">Stärken</th><th scope="col">Schwächen</th></tr></thead>
<tbody>
<tr><th scope="row">Android-TV-Box</th><td>Nvidia Shield TV, Homatics, Ugoos</td><td>Größte App-Auswahl, TiviMate</td><td>Günstige No-Name-Boxen oft ohne Updates</td></tr>
<tr><th scope="row">${L('/mag-box/', 'MAG-Box')}</th><td>Infomir MAG-Serie</td><td>Einfache Portal-Oberfläche</td><td>Kaum zusätzliche Apps</td></tr>
<tr><th scope="row">${L('/formuler/', 'Formuler')}</th><td>Z8, Z10, Z11</td><td>Portal und Apps auf Android-Basis</td><td>Eigene App-Plattform</td></tr>
<tr><th scope="row">${L('/iptv-enigma2/', 'Enigma2-Receiver')}</th><td>Gigablue, VU+, Dreambox</td><td>Satellit und IPTV in einem Gerät</td><td>Einrichtung anspruchsvoll</td></tr>
<tr><th scope="row">Apple TV / Google TV Streamer</th><td>Apple TV 4K</td><td>Sehr flüssig, lange Updates</td><td>Höherer Preis</td></tr>
</tbody></table></div>` },
      { id: 'kaufkriterien', h: 'Worauf Sie beim Kauf einer IPTV-Box achten sollten', html: `
<ul>
  <li><strong>Google-Zertifizierung</strong> bei Android-Boxen: Play Store, Sicherheitsupdates, Netflix &amp; Co. in voller Qualität.</li>
  <li><strong>HEVC/H.265 und 4K</strong>, wenn Ihr Fernseher Ultra HD kann – siehe ${L('/iptv-4k/', 'IPTV in 4K')}.</li>
  <li><strong>LAN-Anschluss</strong> für stabiles Bild; WLAN mit 5 GHz als Minimum.</li>
  <li><strong>Mindestens 2 GB Arbeitsspeicher</strong> für flüssige Programmführer.</li>
  <li><strong>Keine vorinstallierten Sender:</strong> Boxen, die mit Pay-TV-Inhalten werben, sind in der Regel rechtswidrig (EuGH, C-527/15).</li>
</ul>` },
      { id: 'empfehlung', h: 'Box oder Stick?', html: `
<p>Für die meisten Haushalte genügt ein ${L('/iptv-stick/', 'IPTV-Stick')} wie der ${L('/iptv-fire-tv-stick/', 'Fire TV Stick')}. Eine Box lohnt sich, wenn Sie viele Sender mit großem Programmführer nutzen, aufnehmen möchten, LAN brauchen oder bereits an eine MAG-Oberfläche gewöhnt sind. Die passende App für Android-Boxen ist meist ${L('/tivimate/', 'TiviMate')}.</p>
<p class="muted">${note}</p>` },
    ],
    faq: [
      ['Welche IPTV-Box ist die beste?', 'Für die meisten eine Google-zertifizierte Android-TV-Box, weil sie die größte App-Auswahl hat. Für Portal-Zugänge eignen sich MAG- oder Formuler-Boxen.'],
      ['Was ist der Unterschied zwischen IPTV-Box und IPTV-Receiver?', 'Meist nichts – beide Begriffe meinen ein Zusatzgerät am Fernseher, auf dem IPTV läuft. Enigma2-Receiver können zusätzlich Satellit empfangen.'],
      ['Brauche ich für IPTV eine Box?', 'Nein. Smart-TVs, Sticks, Smartphones und Computer reichen aus. Eine Box lohnt sich vor allem für mehr Leistung und LAN.'],
      ['Sind günstige Android-Boxen aus Online-Marktplätzen empfehlenswert?', 'Oft nicht: Viele erhalten keine Updates, und manche werden mit rechtswidrig vorinstallierten Inhalten verkauft.'],
    ],
    related: ['/mag-box/', '/formuler/', '/iptv-enigma2/', '/iptv-stick/', '/iptv-android/', '/iptv-4k/'],
    keywords: ['iptv box', 'ip tv box', 'iptv receiver', 'ip tv receiver', 'iptv for receiver', 'beste iptv box', 'iptv box kaufen', 'iptv box test', 'iptv box price', 'iptv set top box', 'set top box iptv', 'iptv box android', 'box android iptv', 'box iptv android', 'iptv nvidia shield', 'homatics box q', 'ugoos am7', 'tvip s box', 'tvip 605', 'tvip s box 605', 'tvip s box v 605', 'iptv receiver test'],
  },

  {
    path: '/mag-box/',
    hub: 'geraete',
    name: 'MAG-Box',
    teaser: 'Portal einrichten auf MAG 322, 424, 524 & Co. – plus Modellübersicht.',
    icon: 'box',
    title: `MAG-Box: IPTV-Portal einrichten (MAG 322, 424, 524) | ${site.name}`,
    description: 'MAG-Box für IPTV: So richten Sie das Portal auf MAG 322, 424, 524 und älteren Modellen ein, was die Modelle unterscheidet und worauf Sie beim Kauf achten.',
    kicker: 'Geräte',
    h1: 'MAG-Box – IPTV-Portal einrichten',
    lead: 'MAG-Boxen des Herstellers Infomir sind klassische IPTV-Set-Top-Boxen. Sie spielen IPTV über ein Portal ab: Sie tragen eine Portal-URL ein, und Ihr Anbieter schaltet die MAC-Adresse der Box frei. Die Bedienung ist einfach – ideal, wenn Sie Fernsehen wie mit einem klassischen Receiver möchten.',
    facts: [['Hersteller', 'Infomir'], ['Anmeldung', 'Portal-URL + MAC-Adresse'], ['MAC-Adresse', 'Aufkleber auf der Unterseite'], ['Alternative ohne Box', 'STBEmu auf Android']],
    sections: [
      { id: 'einrichten', h: 'MAG-Box einrichten in fünf Schritten', html: ol([
        `Schicken Sie uns vorab die <strong>MAC-Adresse</strong> Ihrer Box (Aufkleber auf der Unterseite, Format <code>00:1A:79:…</code>) und fragen Sie, ob für Ihr Paket ein Portal-Zugang möglich ist.`,
        'Schließen Sie die Box per HDMI an den Fernseher und am besten per LAN-Kabel an den Router an.',
        'Öffnen Sie <em>Einstellungen › Systemeinstellungen › Server › Portale</em>.',
        'Tragen Sie bei „Portal 1“ einen Namen und die <strong>Portal-URL</strong> aus unserer E-Mail ein und speichern Sie.',
        'Starten Sie die Box neu. Das Portal lädt automatisch.',
      ]) },
      { id: 'modelle', h: 'MAG-Modelle im Überblick', html: `
<p>Ältere Modelle wie <strong>MAG 250, 254 und 256</strong> sind technisch in die Jahre gekommen und unterstützen kein H.265/HEVC. Mit der Generation um die <strong>MAG 322</strong> kam HEVC hinzu. Für 4K sind Modelle der <strong>4xx- und 5xx-Reihe</strong> gedacht, etwa MAG 424 oder MAG 524. Prüfen Sie vor dem Kauf das Datenblatt des Herstellers, besonders bei gebrauchten Boxen.</p>` },
      { id: 'fehler', h: 'Häufige Fehler', html: `
<ul>
  <li><strong>„Portal not found“ oder „Authorization failed“:</strong> MAC-Adresse noch nicht freigeschaltet oder Portal-URL unvollständig.</li>
  <li><strong>Endlosschleife beim Laden:</strong> Box vom Strom trennen, 30 Sekunden warten, neu starten.</li>
  <li><strong>Ruckeln:</strong> LAN-Kabel statt WLAN; mehr unter ${L('/iptv-probleme/', 'IPTV-Probleme beheben')}.</li>
</ul>` },
      { id: 'alternativen', h: 'Alternativen zur MAG-Box', html: `
<p>Dieselbe Portal-Oberfläche bekommen Sie mit ${L('/stbemu/', 'STBEmu')} auf jedem Android-Gerät. Wer zusätzlich Apps möchte, schaut sich ${L('/formuler/', 'Formuler-Boxen')} oder eine Android-TV-Box an – siehe ${L('/iptv-box/', 'IPTV-Boxen im Vergleich')}.</p>
<p class="muted">${note}</p>` },
    ],
    faq: [
      ['Wo finde ich die MAC-Adresse meiner MAG-Box?', 'Auf dem Aufkleber an der Unterseite der Box und in den Systemeinstellungen unter Geräteinformationen.'],
      ['Welche MAG-Box soll ich kaufen?', 'Für Full HD mit HEVC genügt die Generation um die MAG 322, für 4K Modelle der 4xx- oder 5xx-Reihe. Ältere Modelle wie MAG 254 sind nicht mehr zu empfehlen.'],
      ['Kann ich auf der MAG-Box Apps installieren?', 'Kaum. MAG-Boxen sind auf das Portal ausgelegt. Für Apps eignen sich Formuler- oder Android-TV-Boxen besser.'],
      ['Geht IPTV auf der MAG-Box auch mit Xtream Codes?', 'Nein, MAG-Boxen arbeiten mit Portal-URL und MAC-Adresse.'],
    ],
    related: ['/stbemu/', '/formuler/', '/iptv-box/', '/iptv-enigma2/', '/iptv-geraete/', '/iptv-probleme/'],
    keywords: ['mag box', 'mag iptv', 'mag iptv boxes', 'mag tv box', 'mag box 322', 'mag 250', 'mag 254', 'mag 256', 'mag 322', 'mag 410', 'mag 420', 'mag 424', 'mag 524', 'infomir mag', 'infomir mag 254', 'infomir mag 322'],
  },

  {
    path: '/formuler/',
    hub: 'geraete',
    name: 'Formuler',
    teaser: 'Formuler Z8, Z10 & Z11: IPTV mit MyTVOnline einrichten.',
    icon: 'box',
    title: `Formuler IPTV-Box: Einrichtung mit MyTVOnline | ${site.name}`,
    description: 'Formuler-Box für IPTV: Modelle wie Z8, Z10 Pro und Z11 im Überblick, Einrichtung mit MyTVOnline per Portal oder Xtream Codes, Tipps für ältere Boxen.',
    kicker: 'Geräte',
    h1: 'Formuler-Box – IPTV mit MyTVOnline einrichten',
    lead: 'Formuler-Boxen sind Android-basierte IPTV-Boxen mit der hauseigenen App MyTVOnline. Damit spielen Sie IPTV per Portal (MAC-Adresse) oder – je nach Version – per Xtream Codes ab. Zusätzlich lassen sich weitere Android-Apps installieren.',
    facts: [['Basis', 'Android mit Formuler-Oberfläche'], ['IPTV-App', 'MyTVOnline (Version je nach Modell)'], ['Anmeldung', 'Portal + MAC, je nach Version auch Xtream Codes'], ['Aktuelle Modelle', 'u. a. Z11 Pro Max, Z10 Pro Max, Z10 Pro, Z8 Pro, Z Alpha']],
    sections: [
      { id: 'einrichten', h: 'Formuler mit MyTVOnline einrichten', html: ol([
        'Schließen Sie die Box per HDMI und LAN-Kabel an und führen Sie die Ersteinrichtung durch.',
        'Starten Sie <strong>MyTVOnline</strong> und wählen Sie „Portal hinzufügen“ bzw. „Add Portal“.',
        'Tragen Sie einen Namen und die <strong>Portal-URL</strong> ein. Die MAC-Adresse der Box (Einstellungen › Info) schicken Sie uns vorab zur Freischaltung.',
        'Bietet Ihre MyTVOnline-Version eine Xtream-Codes-Anmeldung, können Sie stattdessen Benutzername, Passwort und Server-URL eintragen.',
        'Speichern und Portal öffnen – Sender und Programmführer werden geladen.',
      ]) },
      { id: 'modelle', h: 'Formuler-Modelle für IPTV', html: `
<p>Die aktuellen Modelle der Z10- und Z11-Reihe unterstützen 4K und HEVC und haben genug Leistung für große Programmführer. Die <strong>Z8</strong> und <strong>Z8 Pro</strong> sind solide Full-HD-Alternativen, die <strong>Z Nano</strong> ein kompaktes Einstiegsgerät. Ältere Boxen wie <strong>Z7, Z7+</strong> oder <strong>Z+</strong> laufen mit veralteten Android-Versionen und erhalten keine aktuellen App-Versionen mehr.</p>` },
      { id: 'apps', h: 'Weitere Apps auf der Formuler', html: `
<p>Neben MyTVOnline lassen sich je nach Modell weitere Android-Apps installieren, etwa ${L('/tivimate/', 'TiviMate')} oder ${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')}. Formuler-Boxen sind nicht durchgehend Google-zertifiziert; die App-Quelle ist deshalb je nach Modell unterschiedlich. Vergleich mit anderen Boxen: ${L('/iptv-box/', 'IPTV-Box')}.</p>
<p class="muted">${note}</p>` },
    ],
    faq: [
      ['Was ist MyTVOnline?', 'Die IPTV-App von Formuler. Sie spielt Portal-Zugänge und je nach Version auch Xtream-Codes-Zugänge ab.'],
      ['Welche Formuler-Box ist die beste für IPTV?', 'Für 4K die Modelle der Z10- oder Z11-Reihe, für Full HD die Z8 oder Z8 Pro.'],
      ['Kann ich TiviMate auf der Formuler installieren?', 'Je nach Modell ja. Die App-Quelle unterscheidet sich, weil nicht alle Formuler-Boxen Google-zertifiziert sind.'],
      ['Lohnt sich eine alte Formuler Z7 noch?', 'Eher nicht. Ältere Boxen laufen mit veralteten Android-Versionen und erhalten keine aktuellen Apps mehr.'],
    ],
    related: ['/mag-box/', '/iptv-box/', '/stbemu/', '/tivimate/', '/iptv-4k/', '/iptv-enigma2/'],
    keywords: ['formuler tv box', 'formuler iptv box', 'formuler z nano', 'formuler z neo', 'formuler z+', 'formuler z10 pro 4k', 'formuler z10 pro max 4k', 'formuler z7', 'formuler z7+', 'formuler z8', 'formuler z8 pro'],
  },

  {
    path: '/iptv-enigma2/',
    hub: 'geraete',
    name: 'Enigma2-Receiver',
    teaser: 'IPTV auf VU+, Dreambox und Gigablue: Satellit und IPTV kombiniert.',
    icon: 'remote',
    title: `IPTV auf Enigma2-Receivern einrichten | ${site.name}`,
    description: 'IPTV auf Enigma2-Receivern wie VU+, Dreambox oder Gigablue: wie Sie eine M3U-Playlist als Senderliste einbinden, welche Plugins helfen und wann sich das lohnt.',
    kicker: 'Geräte',
    h1: 'IPTV auf Enigma2-Receivern',
    lead: 'Enigma2 ist ein Linux-Betriebssystem für Satelliten- und Kabelreceiver, etwa von VU+, Dreambox oder Gigablue. Viele dieser Receiver können zusätzlich IPTV: Sie binden Ihre M3U-Playlist als eigene Senderliste (Bouquet) ein und schalten wie gewohnt mit der Fernbedienung zwischen Satellit und IPTV um.',
    facts: [['Geräte', 'Linux-Receiver mit Enigma2-Image, z. B. VU+, Dreambox, Gigablue'], ['Anmeldung', 'M3U-Link oder Xtream-Daten über Plugin'], ['Schwierigkeit', 'Fortgeschritten']],
    sections: [
      { id: 'wege', h: 'Zwei Wege, IPTV auf Enigma2 einzurichten', html: `
<p><strong>Plugin:</strong> Für die gängigen Images gibt es IPTV-Plugins im Plugin-Feed, die eine M3U-Playlist oder Xtream-Daten einlesen und daraus Bouquets mit Programmführer erzeugen. Welche Plugins verfügbar sind, hängt von Image und Version ab.</p>
<p><strong>Manuell:</strong> Erfahrene Nutzer wandeln die M3U-Liste in eine Bouquet-Datei um und kopieren sie per FTP in das Verzeichnis <code>/etc/enigma2/</code>. Das ist fehleranfällig und muss bei jeder Änderung der Liste wiederholt werden.</p>` },
      { id: 'einrichten', h: 'Einrichtung per Plugin (allgemein)', html: ol([
        'Öffnen Sie im Menü den <strong>Plugin-Browser</strong> und laden Sie die Liste der verfügbaren Plugins.',
        'Installieren Sie ein IPTV-Plugin, das M3U oder Xtream Codes unterstützt.',
        'Tragen Sie im Plugin Ihren <strong>M3U-Link</strong> oder <strong>Benutzername, Passwort und Server-URL</strong> ein.',
        'Lassen Sie das Plugin die Bouquets erstellen und starten Sie die Oberfläche (GUI) neu.',
        'Die IPTV-Sender erscheinen als eigene Senderliste neben Ihren Satelliten-Sendern.',
      ]) },
      { id: 'lohnt', h: 'Für wen lohnt sich das?', html: `
<p>Für alle, die ohnehin einen Enigma2-Receiver nutzen und nur ein Gerät mit einer Fernbedienung möchten. Wer neu einsteigt, ist mit einem ${L('/iptv-stick/', 'Stick')} oder einer ${L('/iptv-box/', 'Android-TV-Box')} deutlich schneller am Ziel. Hintergründe zur Playlist: ${L('/m3u-playlist/', 'M3U-Playlist')} und ${L('/xtream-codes/', 'Xtream Codes')}.</p>
<p class="muted">${note}</p>` },
    ],
    faq: [
      ['Können Enigma2-Receiver IPTV abspielen?', 'Ja, die meisten. Sie binden dazu eine M3U-Playlist als Bouquet ein, meist mithilfe eines Plugins.'],
      ['Brauche ich für IPTV auf Enigma2 eine Satellitenschüssel?', 'Nein. IPTV kommt über das Netzwerk. Die Schüssel brauchen Sie nur für den Satellitenempfang.'],
      ['Welches Plugin brauche ich?', 'Das hängt von Image und Version ab. Suchen Sie im Plugin-Browser nach IPTV-Plugins mit M3U- oder Xtream-Unterstützung.'],
      ['Ist SAT>IP dasselbe wie IPTV?', 'Nein. SAT>IP verteilt ein Satellitensignal im Heimnetz, IPTV kommt über das Internet.'],
    ],
    related: ['/iptv-box/', '/mag-box/', '/formuler/', '/m3u-playlist/', '/xtream-codes/', '/iptv-deutschland/'],
    keywords: ['iptv enigma2', 'gigablue iptv', 'edision ping', 'dreamlink t2', 'dreamlink t3'],
  },
];
