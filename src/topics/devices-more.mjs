// Device pages added in the November 2026 keyword pass: installing apps with
// Downloader on Fire TV, and Chromecast / Google TV Streamer. Hedge
// third-party availability; never recommend unofficial app sources or codes.
import { site } from '../site.mjs';
import { L, ol, stand } from './util.mjs';

const note = `Apps und Geräte sind Angebote Dritter. Menüs, Verfügbarkeit und Preise können sich ändern (Stand: ${stand}).`;

export default [

  {
    path: '/iptv-downloader/',
    hub: 'geraete',
    name: 'Downloader-App',
    teaser: 'IPTV-Apps auf Fire TV und Android TV sicher installieren.',
    icon: 'stick',
    app: { name: 'Downloader', os: 'Fire OS, Android TV' },
    title: `Downloader-App: IPTV-Apps auf Fire TV laden | ${site.name}`,
    description: 'Mit der Downloader-App IPTV-Apps wie Smarters oder TiviMate auf Fire TV Stick und Android TV installieren – sicher, Schritt für Schritt, ohne fremde Codes.',
    kicker: 'Geräte',
    h1: 'Downloader-App: IPTV-Apps auf Fire TV und Android TV installieren',
    lead: 'Nicht jede IPTV-App steht im Amazon Appstore. Mit der kostenlosen App <strong>„Downloader“</strong> laden Sie eine App direkt von der Website ihres Entwicklers auf den Fire TV Stick oder ein Android-TV-Gerät. Das ist erlaubt und schnell erledigt – wenn Sie dabei auf die Quelle achten.',
    facts: [['Geräte', 'Fire TV mit Fire OS, Android TV, Google TV'], ['Nicht möglich auf', 'Fire-TV-Geräten mit Vega OS, Samsung, LG, Apple TV'], ['Kosten', 'Kostenlos'], ['Wichtig', 'Nur Dateien von der offiziellen Website des App-Entwicklers laden']],
    sections: [
      { id: 'vorbereiten', h: 'Fire TV Stick vorbereiten', html: ol([
        'Suchen Sie im Amazon Appstore nach <strong>„Downloader“</strong> und installieren Sie die App.',
        'Öffnen Sie <em>Einstellungen › Mein Fire TV › Info</em> und klicken Sie siebenmal auf den Gerätenamen, bis die <em>Entwickleroptionen</em> freigeschaltet sind.',
        'Gehen Sie zu <em>Einstellungen › Mein Fire TV › Entwickleroptionen › Apps unbekannter Herkunft installieren</em> und erlauben Sie es nur für „Downloader“.',
      ]) + `<p>Auf <strong>Android TV und Google TV</strong> heißt die Einstellung meist <em>Einstellungen › Apps › Sicherheit › Unbekannte Quellen</em>. Die Downloader-App finden Sie dort im Google Play Store.</p>` },
      { id: 'installieren', h: 'IPTV-App mit Downloader installieren', html: ol([
        'Öffnen Sie Downloader und erlauben Sie den Zugriff auf Dateien, wenn danach gefragt wird.',
        'Geben Sie in das Adressfeld die <strong>Download-Adresse von der offiziellen Website des App-Entwicklers</strong> ein und klicken Sie auf „Go“.',
        'Bestätigen Sie nach dem Download „Installieren“.',
        'Löschen Sie anschließend die Installationsdatei, um Speicher zu sparen – Downloader fragt danach.',
        'Öffnen Sie die neue App und melden Sie sich mit Ihren Zugangsdaten an.',
      ]) + `<p>Anleitungen für die einzelnen Apps: ${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')}, ${L('/tivimate/', 'TiviMate')}, ${L('/smart-iptv/', 'Smart IPTV')}, ${L('/xciptv/', 'XCIPTV')} und ${L('/ott-navigator/', 'OTT Navigator')}.</p>` },
      { id: 'sicherheit', h: 'Downloader-Codes aus Foren: Vorsicht', html: `
<p>In Foren und Videos kursieren kurze Downloader-Codes, die angeblich zu „IPTV Smarters“, „Smart IPTV“ oder anderen Apps führen. Hinter solchen Codes kann jede beliebige Datei stecken – auch veränderte App-Versionen mit Schadsoftware oder vorinstallierten, rechtswidrigen Inhalten. Nutzen Sie deshalb nur Adressen von der offiziellen Website des jeweiligen Entwicklers. Wenn Sie unsicher sind, ${L('/#kontakt', 'fragen Sie uns')} – wir nennen Ihnen eine passende App für Ihr Gerät.</p>` },
      { id: 'vega', h: 'Wenn Downloader nicht funktioniert', html: `
<ul>
  <li><strong>Vega OS:</strong> Neuere Fire-TV-Geräte mit Vega OS unterstützen keine Android-Apps; dort lassen sich keine Apps über Downloader installieren. Mehr unter ${L('/iptv-fire-tv-stick/', 'IPTV auf dem Fire TV Stick')}.</li>
  <li><strong>„App nicht installiert“:</strong> Meist ist die Datei unvollständig oder nicht für Ihr Gerät gebaut. Laden Sie sie erneut von der Entwickler-Website.</li>
  <li><strong>Speicher voll:</strong> Löschen Sie ungenutzte Apps und alte Installationsdateien.</li>
</ul>
<p class="muted">${note}</p>` },
    ],
    faq: [
      ['Ist die Downloader-App legal?', 'Ja. Downloader ist eine normale App aus dem Amazon Appstore bzw. Google Play Store. Entscheidend ist, was Sie damit herunterladen – laden Sie Apps nur von offiziellen Entwickler-Websites.'],
      ['Brauche ich Downloader für IPTV?', 'Nur, wenn Ihre gewünschte IPTV-App nicht im Appstore Ihres Geräts verfügbar ist. Viele Apps lassen sich direkt aus dem Store installieren.'],
      ['Gibt es einen Downloader-Code für IPTV Smarters?', 'Wir empfehlen keine Codes aus Foren. Geben Sie die Download-Adresse von der offiziellen Website des Entwicklers ein.'],
      ['Funktioniert Downloader auf dem Fire TV Stick 4K Select?', 'Geräte mit Vega OS unterstützen keine Android-Apps und damit auch keine Installation über Downloader.'],
    ],
    related: ['/iptv-fire-tv-stick/', '/iptv-android/', '/iptv-smarters-pro/', '/tivimate/', '/iptv-apps/', '/iptv-stick/'],
    keywords: ['iptv downloader', 'iptv smarters downloader', 'smart iptv downloader'],
  },

  {
    path: '/iptv-chromecast/',
    hub: 'geraete',
    name: 'Chromecast & Google TV Streamer',
    teaser: 'Streamen per Cast oder App direkt auf Chromecast mit Google TV.',
    icon: 'stick',
    title: `IPTV auf Chromecast & Google TV Streamer | ${site.name}`,
    description: 'IPTV auf Chromecast: Casten vom Handy oder eigene App auf Chromecast mit Google TV und Google TV Streamer – mit passenden Apps und Anleitung.',
    kicker: 'Geräte',
    h1: 'IPTV auf Chromecast und Google TV Streamer',
    lead: 'Beim Chromecast kommt es auf das Modell an: Ältere Chromecasts ohne Fernbedienung können Streams nur vom Handy <strong>empfangen</strong> („Casten“). Chromecast mit Google TV und der Google TV Streamer sind dagegen vollwertige Android-TV-Geräte – dort installieren Sie eine IPTV-App direkt.',
    facts: [['Chromecast (ohne Google TV)', 'Nur Casten vom Handy, Tablet oder Computer'], ['Chromecast mit Google TV', 'Eigene Apps aus dem Play Store, z. B. TiviMate, Smarters'], ['Google TV Streamer', 'Wie Chromecast mit Google TV, mit LAN-Anschluss'], ['Anmeldung', 'Xtream Codes oder M3U']],
    sections: [
      { id: 'modelle', h: 'Welches Modell haben Sie?', html: `
<div class="table-wrap" role="region" aria-labelledby="cc-tab" tabindex="0"><table class="table">
<caption id="cc-tab">Chromecast-Modelle und IPTV (Stand: ${stand})</caption>
<thead><tr><th scope="col">Modell</th><th scope="col">Erkennbar an</th><th scope="col">IPTV-Weg</th></tr></thead>
<tbody>
<tr><th scope="row">Chromecast (klassisch)</th><td>Keine Fernbedienung</td><td>Casten aus einer App auf dem Handy</td></tr>
<tr><th scope="row">Chromecast mit Google TV</th><td>Fernbedienung, Google-TV-Startbildschirm</td><td>IPTV-App direkt installieren</td></tr>
<tr><th scope="row">Google TV Streamer</th><td>Flache Box, LAN-Anschluss</td><td>IPTV-App direkt installieren</td></tr>
</tbody></table></div>
<p>Google hat den Verkauf der Chromecast-Modelle eingestellt; Nachfolger ist der Google TV Streamer. Vorhandene Geräte funktionieren weiterhin.</p>` },
      { id: 'google-tv', h: 'Chromecast mit Google TV: App installieren', html: ol([
        'Öffnen Sie auf dem Startbildschirm die Suche und geben Sie den Namen der App ein, zum Beispiel „TiviMate“ oder „IPTV Smarters“.',
        'Installieren Sie die App aus dem Google Play Store.',
        `Melden Sie sich per <strong>Xtream Codes</strong> mit Server-URL, Benutzername und Passwort aus unserer E-Mail an (als Namen z. B. „${site.name}“).`,
        'Warten Sie, bis Senderliste und Programmführer geladen sind.',
      ]) + `<p>Empfehlenswert sind ${L('/tivimate/', 'TiviMate')}, ${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')} und ${L('/xciptv/', 'XCIPTV')}. Ist eine App nicht im Store, hilft die ${L('/iptv-downloader/', 'Downloader-App')}. Ausführlich: ${L('/iptv-android/', 'IPTV auf Android und Google TV')}.</p>` },
      { id: 'casten', h: 'Klassischer Chromecast: IPTV vom Handy casten', html: `
<p>Auf einem Chromecast ohne Google TV läuft keine eigene App. Sie starten die Wiedergabe auf dem Smartphone und tippen auf das <strong>Cast-Symbol</strong>; der Chromecast holt sich den Stream dann selbst. Das klappt mit IPTV-Apps, die Chromecast unterstützen, etwa ${L('/gse-smart-iptv/', 'GSE Smart IPTV')} oder VLC für Android.</p>
<ul>
  <li><strong>Nicht jede App kann casten:</strong> TiviMate und viele andere TV-Apps bieten kein Cast-Symbol.</li>
  <li><strong>Nicht jedes Format:</strong> Manche Streams lassen sich nicht oder nur ohne Ton casten.</li>
  <li><strong>Bequemer:</strong> Ein ${L('/iptv-stick/', 'Streaming-Stick')} mit eigener App ist meist stabiler als Casten.</li>
</ul>` },
      { id: 'tipps', h: 'Tipps für ein stabiles Bild', html: `
<p>Der Google TV Streamer hat einen LAN-Anschluss – nutzen Sie ihn. Für Chromecast mit Google TV gibt es einen Netzteil-Adapter mit Ethernet. Für 4K brauchen Sie die 4K-Variante des Chromecast mit Google TV oder den Google TV Streamer, siehe ${L('/iptv-4k/', 'IPTV in 4K')}.</p>
<p class="muted">${note}</p>` },
    ],
    faq: [
      ['Kann ich IPTV auf den Chromecast streamen?', 'Ja. Beim klassischen Chromecast casten Sie aus einer App, die Chromecast unterstützt. Auf Chromecast mit Google TV installieren Sie eine IPTV-App direkt.'],
      ['Funktioniert TiviMate auf dem Chromecast?', 'Auf Chromecast mit Google TV und dem Google TV Streamer ja. Auf dem klassischen Chromecast ohne Fernbedienung nicht, und TiviMate kann auch nicht vom Handy casten.'],
      ['Kann IPTV Smarters auf Chromecast casten?', 'Das hängt von Version und Plattform ab. Zuverlässiger ist es, die App direkt auf einem Chromecast mit Google TV zu installieren.'],
      ['Welcher Nachfolger ersetzt den Chromecast?', 'Der Google TV Streamer. Er läuft mit Google TV, unterstützt dieselben IPTV-Apps und hat einen LAN-Anschluss.'],
    ],
    related: ['/iptv-android/', '/tivimate/', '/iptv-smarters-pro/', '/gse-smart-iptv/', '/iptv-stick/', '/iptv-smart-tv/'],
    keywords: ['iptv chromecast', 'iptv smarters chromecast', 'tivimate chromecast'],
  },
];
