// TiviMate and Smart IPTV deep pages (November 2026 keyword-gap pass):
// TiviMate on the Fire TV Stick, TiviMate Premium, TiviMate alternatives for
// devices it does not support, and the Smart IPTV "My List" playlist upload.
// Prices of third-party apps are never stated; they change and are the app
// makers' to publish.
import { site, plans, devicePrices } from '../site.mjs';
import { L, ol, stand } from './util.mjs';

const updated = '2026-11-25';
const maxDevices = Math.max(...Object.keys(devicePrices).map(Number));
const bonus = plans.find((p) => p.bonus);
const tmNote = `TiviMate ist eine App eines unabhängigen Entwicklers und enthält selbst keine Sender. Wir stehen in keiner Verbindung zum Entwickler; TiviMate Premium ist nicht Teil unserer Pakete. Funktionen, Menünamen und Preise können sich ändern (Stand: ${stand}).`;
const howTo = (path, name, list) => ({
  '@type': 'HowTo',
  '@id': `${site.url}${path}#anleitung`,
  name,
  inLanguage: site.lang,
  step: list.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, text: s.replace(/<[^>]+>/g, '') })),
});
const fixes = (list) => `<ul>${list.map(([p, f]) => `<li><strong>${p}:</strong> ${f}</li>`).join('')}</ul>`;
const support = `Bei Fragen zu Zugangsdaten, Senderliste oder Programmführer hilft Ihnen unser deutscher Support${site.email ? ` unter <a href="mailto:${site.email}">${site.email}</a>` : ''}.`;

export default [
  // ── TiviMate on the Fire TV Stick ───────────────────────────────────
  {
    path: '/tivimate-fire-tv-stick/',
    hub: 'tivimate',
    published: updated,
    updated,
    name: 'TiviMate auf dem Fire TV Stick',
    teaser: 'TiviMate auf dem Firestick installieren, Playlist hinzufügen und optimal einstellen.',
    icon: 'stick',
    title: `TiviMate auf dem Fire TV Stick installieren | ${site.name}`,
    description: 'TiviMate auf dem Fire TV Stick: Installation per Appstore oder Downloader, Playlist per Xtream Codes, beste Einstellungen und Hilfe bei Fehlern.',
    kicker: 'TiviMate',
    h1: 'TiviMate auf dem Fire TV Stick: Installation und beste Einstellungen',
    lead: 'TiviMate auf dem Fire TV Stick verwandelt den kleinen Stick in einen Receiver mit klassischem Programmführer: Senderliste links, Zeitraster rechts, Umschalten mit den Pfeiltasten. Diese Anleitung zeigt, wie Sie TiviMate auf den Firestick bringen, Ihre Playlist hinzufügen und die Einstellungen setzen, mit denen Live-TV am flüssigsten läuft.',
    facts: [
      ['Geeignet', 'Fire TV Stick HD, Lite, 4K, 4K Max, Fire TV Cube (Fire OS)'],
      ['Nicht geeignet', 'Fire-TV-Geräte mit Vega OS'],
      ['Installation', 'Amazon Appstore, sonst Downloader-App'],
      ['Anmeldung', 'Xtream Codes oder M3U-Link'],
      ['Premium', 'optional, über die Companion-App'],
    ],
    app: { name: 'TiviMate', os: 'Fire OS' },
    schema: [howTo('/tivimate-fire-tv-stick/', 'TiviMate auf dem Fire TV Stick einrichten', [
      'TiviMate im Amazon Appstore suchen oder mit der Downloader-App von der offiziellen Website installieren.',
      'TiviMate starten und Playlist hinzufügen wählen.',
      'Xtream Codes wählen und Server, Benutzername und Passwort eingeben.',
      'Playlist benennen und auf Fertig tippen.',
      'Warten, bis Sender und Programmführer geladen sind.',
    ])],
    sections: [
      { id: 'installieren', h: 'TiviMate auf den Firestick bringen', html: `
<p><strong>Zuerst der Appstore:</strong> Drücken Sie die Home-Taste, wählen Sie die Lupe und suchen Sie „TiviMate“. Ist die App gelistet, installieren Sie sie direkt. Die Listung wechselt allerdings je nach Land und Zeitpunkt.</p>
<p><strong>Sonst die Downloader-App:</strong></p>
${ol([
  'Installieren Sie <strong>Downloader</strong> aus dem Amazon Appstore.',
  'Schalten Sie unter <em>Einstellungen › Mein Fire TV › Entwickleroptionen</em> die Installation unbekannter Apps für Downloader frei. Fehlen die Entwickleroptionen, drücken Sie unter <em>Info</em> siebenmal auf den Gerätenamen.',
  'Geben Sie in Downloader die Download-Adresse ein, die der TiviMate-Entwickler <strong>auf seiner offiziellen Website</strong> nennt, und installieren Sie die App.',
  'Löschen Sie danach die Installationsdatei, um Speicher zu sparen.',
])}
<p>Bitte keine „vorkonfigurierten“ TiviMate-Versionen oder Codes aus Videos verwenden – sie sind nicht offiziell und können Schadsoftware enthalten. Mehr unter ${L('/iptv-downloader/', 'Downloader-App sicher nutzen')}.</p>` },
      { id: 'playlist', h: 'Playlist hinzufügen', html: `${ol([
  'Starten Sie TiviMate und wählen Sie <strong>„Playlist hinzufügen“</strong>.',
  'Wählen Sie <strong>„Xtream Codes“</strong>.',
  'Tragen Sie <strong>Server-Adresse</strong>, <strong>Benutzername</strong> und <strong>Passwort</strong> aus unserer E-Mail ein und wählen Sie „Weiter“.',
  `Geben Sie der Playlist einen Namen, zum Beispiel „${site.name}“, und wählen Sie „Fertig“.`,
  'Nach dem ersten Laden erscheint der Programmführer. Mit „OK“ starten Sie einen Sender, mit der Menütaste öffnen Sie die Optionen.',
])}<p>Mit einem M3U-Link wählen Sie in Schritt 2 „M3U-Playlist“ und tragen den Programmführer später unter <em>Einstellungen › EPG</em> ein. Was besser passt, erklärt ${L('/xtream-codes/', 'Xtream Codes vs. M3U')}.</p>` },
      { id: 'einstellungen', h: 'Die besten TiviMate-Einstellungen für den Firestick', html: `
<ul>
  <li><strong>Automatische Bildrate (AFR):</strong> In TiviMate unter <em>Einstellungen › Wiedergabe</em> die Anpassung der Bildwiederholrate aktivieren. Der Fernseher schaltet dann auf die Bildrate des Senders – sichtbar ruhiger bei Sport.</li>
  <li><strong>Puffer:</strong> Bei kurzen Aussetzern die Puffergröße unter <em>Wiedergabe</em> erhöhen. Ein größerer Puffer verzögert das Umschalten minimal, glättet aber Schwankungen im Netz.</li>
  <li><strong>Programmführer-Update:</strong> Unter <em>Einstellungen › EPG</em> ein tägliches Update einstellen statt bei jedem Start.</li>
  <li><strong>Start mit TiviMate:</strong> Wer den Stick nur für Fernsehen nutzt, lässt TiviMate unter <em>Einstellungen › Allgemein</em> beim Einschalten automatisch starten (Premium-Funktion).</li>
  <li><strong>Speicher:</strong> Unter <em>Einstellungen › Anwendungen › Installierte Anwendungen verwalten</em> ungenutzte Apps löschen – TiviMate braucht für Programmführer und Logos Platz.</li>
</ul>` },
      { id: 'premium', h: 'Lohnt sich Premium auf dem Fire TV Stick?', html: `<p>Für den Einstieg reicht die kostenlose Version: Sie sehen Live-TV mit Programmführer. Wer Favoriten sortieren, mehrere Playlists nutzen, aufnehmen oder Catch-up verwenden möchte, braucht Premium. Was genau dazugehört und wie die Freischaltung über die Companion-App funktioniert, lesen Sie unter ${L('/tivimate-premium/', 'TiviMate Premium')}.</p>` },
      { id: 'probleme', h: 'TiviMate auf dem Firestick: häufige Fehler', html: `${fixes([
  ['TiviMate nicht im Appstore', 'normal, die Listung wechselt. Installation über Downloader mit der Adresse von der offiziellen Website.'],
  ['„Playlist konnte nicht geladen werden“', 'Server-Adresse mit <code>http://</code> und Port prüfen, Leerzeichen entfernen, Stick neu starten.'],
  ['Programmführer leer oder verschoben', 'EPG unter Einstellungen › EPG aktualisieren; Zeitzone des Fire TV prüfen.'],
  ['Bild friert ein', 'Puffer erhöhen, WLAN auf 5 GHz oder Ethernet-Adapter nutzen, Stick an ein eigenes Netzteil statt an den USB-Port des Fernsehers.'],
  ['App schließt sich nach dem Standby', 'Fire TV öffnet nach dem Aufwachen den Startbildschirm. TiviMate erneut starten oder mit Premium den automatischen Start aktivieren.'],
])}<p>${support} Weitere Tipps: ${L('/iptv-probleme/', 'IPTV-Probleme beheben')}.</p><p class="muted">${tmNote}</p>` },
    ],
    faq: [
      ['Ist TiviMate auf dem Fire TV Stick kostenlos?', 'Die Basisversion ist kostenlos. Komfortfunktionen wie Favoriten, mehrere Playlists und Aufnahmen gibt es mit TiviMate Premium.'],
      ['Welcher Fire TV Stick ist für TiviMate am besten?', 'Der Fire TV Stick 4K oder 4K Max: mehr Leistung und schnelleres WLAN. Fire-TV-Geräte mit Vega OS unterstützen TiviMate nicht.'],
      ['Warum finde ich TiviMate nicht im Amazon Appstore?', 'Die Listung wechselt. Installieren Sie TiviMate dann mit der Downloader-App von der offiziellen Website des Entwicklers.'],
      ['TiviMate oder IPTV Smarters Pro auf dem Firestick?', 'TiviMate bietet den klassischeren Programmführer, IPTV Smarters Pro den leichteren Einstieg und eine kostenlose Mediathek-Ansicht. Testen Sie beide kostenlos.'],
      ['Kann ich TiviMate auf mehreren Sticks nutzen?', `Ja. Wie viele Geräte gleichzeitig schauen dürfen, regelt Ihr IPTV-Paket – bei ${site.name} 1 bis ${maxDevices}.`],
    ],
    related: ['/tivimate/', '/tivimate-premium/', '/iptv-fire-tv-stick/', '/iptv-smarters-pro-fire-tv-stick/', '/iptv-downloader/', '/iptv-testen/'],
    keywords: ['tivimate fire tv', 'tivimate fire tv stick', 'firestick tivimate', 'tivimate firestick', 'tivimate for firestick', 'tivimate on firestick'],
  },

  // ── TiviMate Premium ────────────────────────────────────────────────
  {
    path: '/tivimate-premium/',
    hub: 'tivimate',
    published: updated,
    updated,
    name: 'TiviMate Premium',
    teaser: 'Was TiviMate Premium freischaltet, wie Sie es über die Companion-App kaufen und aktivieren.',
    icon: 'key',
    title: `TiviMate Premium: Funktionen, Kauf & Account | ${site.name}`,
    description: 'TiviMate Premium erklärt: welche Funktionen es freischaltet, wie Sie es per Companion-App kaufen und aktivieren und warum Fremd-Accounts riskant sind.',
    kicker: 'TiviMate',
    h1: 'TiviMate Premium: Funktionen, Kauf und Aktivierung',
    lead: 'TiviMate Premium ist die kostenpflichtige Erweiterung des TiviMate-Players. Sie schaltet Komfortfunktionen wie Favoriten, mehrere Playlists, Aufnahmen und Catch-up frei. Hier erfahren Sie, was Premium bringt, wie Kauf und Aktivierung über die TiviMate Companion-App funktionieren, wie viele Geräte ein Account abdeckt und warum Sie „TiviMate Premium Accounts“ von Dritten meiden sollten.',
    facts: [
      ['Was es ist', 'Kostenpflichtige Freischaltung der App TiviMate'],
      ['Gekauft über', 'TiviMate Companion-App (Android-Smartphone)'],
      ['Modelle', 'Abo oder Einmalkauf, aktuelle Preise beim Entwickler'],
      ['Enthält Sender?', 'Nein – Sender kommen von Ihrem IPTV-Anbieter'],
      ['Geräte pro Account', 'mehrere; die Höchstzahl nennt der Entwickler'],
    ],
    app: { name: 'TiviMate', os: 'Android TV, Google TV, Fire OS' },
    schema: [howTo('/tivimate-premium/', 'TiviMate Premium aktivieren', [
      'TiviMate Companion auf einem Android-Smartphone installieren.',
      'In der Companion-App ein Konto anlegen.',
      'Premium in der Companion-App kaufen.',
      'In TiviMate auf dem Fernseher unter Premium mit demselben Konto anmelden.',
      'TiviMate neu starten; Premium-Funktionen sind freigeschaltet.',
    ])],
    sections: [
      { id: 'funktionen', h: 'Was TiviMate Premium freischaltet', html: `
<p>Die kostenlose Version zeigt Live-TV mit Programmführer aus einer Playlist. Premium ergänzt nach Angaben des Entwicklers unter anderem:</p>
<div class="table-wrap" role="region" aria-labelledby="tm-premium-tab" tabindex="0"><table class="table">
<caption id="tm-premium-tab">TiviMate kostenlos und Premium (Stand: ${stand}, ohne Gewähr)</caption>
<thead><tr><th scope="col">Funktion</th><th scope="col">Kostenlos</th><th scope="col">Premium</th></tr></thead>
<tbody>
<tr><th scope="row">Live-TV mit Programmführer</th><td>Ja</td><td>Ja</td></tr>
<tr><th scope="row">Mehrere Playlists</th><td>Nein</td><td>Ja</td></tr>
<tr><th scope="row">Favoriten verwalten, eigene Senderreihenfolge</th><td>Eingeschränkt</td><td>Ja</td></tr>
<tr><th scope="row">Aufnahmen (intern oder USB)</th><td>Nein</td><td>Ja</td></tr>
<tr><th scope="row">Catch-up, sofern vom IPTV-Anbieter unterstützt</th><td>Nein</td><td>Ja</td></tr>
<tr><th scope="row">Automatisches EPG-Update, Start beim Einschalten</th><td>Nein</td><td>Ja</td></tr>
</tbody></table></div>
<p>Für Catch-up muss zusätzlich Ihr IPTV-Zugang die Funktion unterstützen. Bei ${site.name} gehört EPG & Catch-Up TV zum Angebot; Details unter ${L('/iptv-vod/', 'Filme, Serien und Catch-up')}.</p>` },
      { id: 'kaufen', h: 'TiviMate Premium kaufen und aktivieren', html: `${ol([
  'Installieren Sie die App <strong>„TiviMate Companion“</strong> aus dem Google Play Store auf einem Android-Smartphone.',
  'Legen Sie in der Companion-App ein Konto an (E-Mail und Passwort).',
  'Wählen Sie das gewünschte Premium-Modell – Abo oder Einmalkauf – und bezahlen Sie über Google Play.',
  'Öffnen Sie TiviMate auf dem Fernseher oder Fire TV Stick, gehen Sie zu <em>Einstellungen › Premium</em> bzw. „Premium-Konto“ und melden Sie sich mit demselben Konto an.',
  'Starten Sie TiviMate neu. Die Premium-Funktionen sind jetzt aktiv.',
])}<p>Sie haben nur ein iPhone? Die Companion-App ist für Android gedacht. Welche Kaufwege der Entwickler aktuell zusätzlich anbietet, zeigt TiviMate unter „Premium“ an.</p>` },
      { id: 'kosten', h: 'Was kostet TiviMate Premium?', html: `
<p>Der Entwickler bietet Premium als <strong>Jahresabo</strong> und als <strong>Einmalkauf</strong> an. Die Preise hat er in der Vergangenheit angepasst, deshalb nennen wir hier bewusst keine Zahlen: Den aktuellen Preis sehen Sie in der Companion-App vor dem Kauf. Wichtig für Ihre Kalkulation:</p>
<ul>
  <li>Der Premium-Preis geht an den App-Entwickler. Er ist <strong>kein IPTV-Abo</strong> und enthält keine Sender.</li>
  <li>Ihr IPTV-Zugang ist eine separate Leistung – bei ${site.name} einmalig bezahlt, ohne automatische Verlängerung (${L('/#preise', 'Preise ansehen')}).</li>
  <li>Sie brauchen Premium nicht, um IPTV zu schauen. Viele Nutzer starten mit der kostenlosen Version oder mit einer kostenlosen App wie ${L('/xciptv/', 'XCIPTV')}.</li>
</ul>${bonus ? `<p>Im Jahrespaket von ${site.name} ist statt TiviMate Premium der <strong>${bonus.bonusName}</strong> inklusive – eine Alternative, die auch auf Samsung- und LG-Fernsehern läuft (${L('/ibo-player/', 'IBO Player')}).</p>` : ''}` },
      { id: 'account', h: 'TiviMate-Account: Geräte und Sicherheit', html: `
<p>Ein TiviMate-Premium-Account lässt sich auf mehreren Geräten im Haushalt nutzen; die aktuelle Höchstzahl nennt der Entwickler. Den Überblick über angemeldete Geräte haben Sie in der Companion-App, wo Sie Geräte auch wieder abmelden können.</p>
<p><strong>Finger weg von „TiviMate Premium Accounts“ von Dritten.</strong> Auf Marktplätzen und in Chats werden günstige oder „lebenslange“ Premium-Zugänge angeboten. Solche Accounts sind nicht offiziell, werden häufig gesperrt, und Sie geben Fremden Zugriff auf Ihre Geräteliste. Gleiches gilt für modifizierte „TiviMate Pro“-Installationsdateien: Eine eigene Pro-App gibt es nicht – „TiviMate Pro“ meint umgangssprachlich Premium.</p>` },
      { id: 'probleme', h: 'Premium wird nicht erkannt?', html: `${fixes([
  ['Premium nach dem Kauf nicht aktiv', 'In TiviMate ab- und mit genau demselben Konto wieder anmelden, danach App neu starten.'],
  ['„Zu viele Geräte“', 'In der Companion-App alte Geräte abmelden, etwa einen ersetzten Fire TV Stick.'],
  ['Abo verlängert sich ungewollt', 'Abos von Google Play kündigen Sie unter Play Store › Profil › Zahlungen und Abos. Unsere IPTV-Pakete verlängern sich dagegen nie automatisch.'],
])}<p>${support}</p><p class="muted">${tmNote}</p>` },
    ],
    faq: [
      ['Was kostet TiviMate Premium?', 'Der Entwickler bietet ein Jahresabo und einen Einmalkauf an. Den aktuellen Preis sehen Sie in der TiviMate Companion-App vor dem Kauf.'],
      ['Brauche ich TiviMate Premium, um IPTV zu schauen?', 'Nein. Die kostenlose Version zeigt Live-TV mit Programmführer. Premium bringt Komfortfunktionen wie Favoriten, Aufnahmen und mehrere Playlists.'],
      ['Ist TiviMate Premium in IPTV Genuss enthalten?', `Nein. TiviMate Premium kaufen Sie beim App-Entwickler.${bonus ? ` Im Jahrespaket von ${site.name} ist stattdessen ${bonus.bonusName} inklusive.` : ''}`],
      ['Gibt es TiviMate Pro?', 'Nein, keine eigene App. „TiviMate Pro“ ist die umgangssprachliche Bezeichnung für TiviMate Premium.'],
      ['Sind günstige TiviMate Premium Accounts von Dritten sicher?', 'Nein. Sie sind nicht offiziell, werden oft gesperrt und geben Fremden Zugriff auf Ihr Konto. Kaufen Sie nur über die Companion-App.'],
    ],
    related: ['/tivimate/', '/tivimate-fire-tv-stick/', '/tivimate-alternativen/', '/ibo-player/', '/iptv-vod/', '/iptv-apps/'],
    keywords: ['tivimate premium', 'tivi mate premium', 'tivimate premium account', 'tivimate premium cost', 'tivimate premium price', 'tivimate premium subscription', 'tivimate account', 'tivimate kosten', 'tivimate pro', 'tivimate price', 'tivimate subscription', 'tivimate com', 'tivimate website'],
  },

  // ── TiviMate alternatives (devices without TiviMate) ────────────────
  {
    path: '/tivimate-alternativen/',
    hub: 'tivimate',
    published: updated,
    updated,
    name: 'TiviMate-Alternativen',
    teaser: 'TiviMate für Samsung, LG, Apple TV, iPhone, PC und Mac? Die passenden Alternativen.',
    icon: 'play',
    title: `TiviMate-Alternativen: Samsung, Apple TV, PC | ${site.name}`,
    description: 'TiviMate gibt es nicht für Samsung, LG, Apple TV, iPhone, PC und Mac. Welche Apps dort einen ähnlichen Programmführer bieten und wie Sie umsteigen.',
    kicker: 'TiviMate',
    h1: 'TiviMate auf Samsung, Apple TV oder PC? Die besten Alternativen',
    lead: 'TiviMate läuft nur auf Android-basierten Fernsehgeräten. Wer nach „TiviMate Samsung TV“, „TiviMate Apple TV“ oder „TiviMate PC“ sucht, findet deshalb keine offizielle Version – wohl aber Apps mit ähnlichem Programmführer. Diese Seite zeigt für jedes Gerät die beste Alternative, worin sie sich von TiviMate unterscheidet und wie Sie Ihre Zugangsdaten übernehmen.',
    facts: [
      ['TiviMate läuft auf', 'Fire TV (Fire OS), Android TV, Google TV, Android-TV-Boxen'],
      ['TiviMate läuft nicht auf', 'Samsung (Tizen), LG (webOS), Apple TV, iPhone, iPad, Windows, Mac'],
      ['Umzug der Zugangsdaten', 'Xtream Codes bzw. M3U-Link einfach in der neuen App eintragen'],
    ],
    schema: [{ '@type': 'ItemList', name: 'TiviMate-Alternativen nach Gerät', itemListElement: [['IBO Player', 'Tizen, webOS'], ['IPTVX', 'tvOS, iOS, macOS'], ['UHF', 'tvOS, iOS'], ['IPTVnator', 'Windows, macOS, Linux'], ['Kodi', 'Windows, macOS']].map(([n, os], i) => ({ '@type': 'ListItem', position: i + 1, item: { '@type': 'SoftwareApplication', name: n, applicationCategory: 'MultimediaApplication', operatingSystem: os } })) }],
    sections: [
      { id: 'uebersicht', h: 'Die beste TiviMate-Alternative für jedes Gerät', html: `
<div class="table-wrap" role="region" aria-labelledby="tm-alt-tab" tabindex="0"><table class="table">
<caption id="tm-alt-tab">TiviMate-Alternativen nach Gerät (Stand: ${stand}, ohne Gewähr)</caption>
<thead><tr><th scope="col">Gerät</th><th scope="col">Empfehlung</th><th scope="col">Warum</th></tr></thead>
<tbody>
<tr><th scope="row">Samsung TV (Tizen)</th><td>${L('/ibo-player/', 'IBO Player')}</td><td>Programmführer-Ansicht, Playlist per Website${bonus ? ', im Jahrespaket inklusive' : ''}</td></tr>
<tr><th scope="row">LG TV (webOS)</th><td>${L('/ibo-player/', 'IBO Player')}, ${L('/smart-iptv/', 'Smart IPTV')}</td><td>laufen nativ, Einrichtung per MAC-Adresse</td></tr>
<tr><th scope="row">Apple TV</th><td>${L('/iptvx/', 'IPTVX')}, ${L('/uhf-iptv/', 'UHF')}</td><td>moderne tvOS-Oberfläche mit EPG-Raster</td></tr>
<tr><th scope="row">iPhone, iPad</th><td>${L('/iptvx/', 'IPTVX')}, ${L('/iptv-smarters-pro-iphone-apple-tv/', 'Smarters Player Lite')}</td><td>Sync mit Apple TV bzw. einfacher Einstieg</td></tr>
<tr><th scope="row">Windows-PC</th><td>${L('/iptvnator/', 'IPTVnator')}, ${L('/kodi-iptv/', 'Kodi')}</td><td>EPG-Ansicht, kostenlos</td></tr>
<tr><th scope="row">Mac</th><td>${L('/iptvx/', 'IPTVX')}, ${L('/iptvnator/', 'IPTVnator')}</td><td>native Mac-Apps</td></tr>
</tbody></table></div>` },
      { id: 'samsung-lg', h: 'TiviMate auf Samsung und LG: was stattdessen?', html: `
<p>Samsung- und LG-Fernseher nutzen eigene Betriebssysteme (Tizen und webOS), auf denen keine Android-Apps laufen. Die Suche nach „TiviMate Samsung TV“ endet deshalb oft bei Installationsanleitungen, die nicht funktionieren oder fremde Dateien verlangen. Zwei saubere Wege:</p>
<ul>
  <li><strong>App direkt auf dem Fernseher:</strong> Der ${L('/ibo-player/', 'IBO Player')} kommt dem TiviMate-Gefühl mit seiner Programmführer-Ansicht am nächsten. Weitere Optionen nach Marke: ${L('/iptv-samsung-tv/', 'Samsung TV')} und ${L('/iptv-lg-tv/', 'LG TV')}.</li>
  <li><strong>Echtes TiviMate per Stick:</strong> Ein ${L('/tivimate-fire-tv-stick/', 'Fire TV Stick mit TiviMate')} oder ein Gerät mit Google TV am HDMI-Anschluss bringt TiviMate auf jeden Fernseher. Die Samsung- oder LG-Fernbedienung steuert den Stick dank HDMI-CEC meist mit.</li>
</ul>` },
      { id: 'apple', h: 'TiviMate auf Apple TV und iPhone?', html: `
<p>Für tvOS und iOS gibt es TiviMate nicht. Die TiviMate Companion-App dient nur der Premium-Verwaltung und ist für Android gedacht – sie spielt selbst kein Fernsehen ab. Die stärksten Alternativen auf dem Apple TV sind ${L('/iptvx/', 'IPTVX')} mit Programmführer im Apple-Stil und ${L('/uhf-iptv/', 'UHF')}; beide synchronisieren je nach Version Favoriten zwischen Apple TV, iPhone und iPad. Mehr: ${L('/iptv-apple-tv/', 'IPTV auf Apple TV')}.</p>` },
      { id: 'pc', h: 'TiviMate für PC und Mac?', html: `
<p>Auch eine Windows- oder Mac-Version gibt es nicht. Anleitungen, die TiviMate über einen Android-Emulator auf den PC bringen, funktionieren zwar teilweise, sind aber umständlich und ressourcenhungrig. Besser: ${L('/iptvnator/', 'IPTVnator')} (Open Source, mit EPG-Ansicht) oder ${L('/kodi-iptv/', 'Kodi')} mit dem PVR IPTV Simple Client, der ein TV-Raster wie bei einem Receiver anzeigt. Für den schnellen Test reicht ${L('/vlc-iptv/', 'VLC')}. Alle Optionen: ${L('/iptv-pc/', 'IPTV am PC')}.</p>` },
      { id: 'umzug', h: 'Von TiviMate umsteigen: so übernehmen Sie Ihre Daten', html: `${ol([
  'Halten Sie Ihre Zugangsdaten bereit: Server-Adresse, Benutzername und Passwort (Xtream Codes) oder den M3U-Link aus unserer E-Mail.',
  'Installieren Sie die Alternative aus dem offiziellen Store Ihres Geräts.',
  'Tragen Sie die Daten in der neuen App ein bzw. hinterlegen Sie die Playlist auf der Website des App-Anbieters.',
  'Favoriten lassen sich zwischen verschiedenen Apps nicht übertragen – legen Sie sie in der neuen App neu an.',
])}<p>Mit einem Paket von ${site.name} können Sie TiviMate auf dem Stick und eine Alternative auf dem Fernseher parallel nutzen – je nach Paket auf 1 bis ${maxDevices} Geräten gleichzeitig.</p><p class="muted">${tmNote}</p>` },
    ],
    faq: [
      ['Gibt es TiviMate für Samsung-Fernseher?', 'Nein. TiviMate läuft nur auf Android-basierten Geräten. Auf Samsung eignet sich der IBO Player, oder Sie nutzen TiviMate auf einem Fire TV Stick am HDMI-Anschluss.'],
      ['Gibt es TiviMate für Apple TV oder iPhone?', 'Nein. Gute Alternativen auf Apple-Geräten sind IPTVX und UHF.'],
      ['Kann ich TiviMate auf dem PC nutzen?', 'Offiziell nicht. Statt eines Android-Emulators empfehlen wir IPTVnator oder Kodi.'],
      ['Wofür ist die TiviMate Companion-App auf dem iPhone?', 'Die Companion-App dient der Premium-Verwaltung und ist für Android gedacht. Fernsehen können Sie damit nicht.'],
    ],
    related: ['/tivimate/', '/tivimate-premium/', '/ibo-player/', '/iptvx/', '/iptvnator/', '/iptv-apps/'],
    keywords: ['tivimate samsung tv', 'tivimate apple tv', 'tivimate pc', 'tivimate for pc', 'tivimate mac', 'tivimate companion iphone', 'tivimate alternative'],
  },

  // ── Smart IPTV: My List ─────────────────────────────────────────────
  {
    path: '/smart-iptv-playlist-hochladen/',
    hub: 'siptv',
    published: updated,
    updated,
    name: 'My SIPTV: Playlist hochladen',
    teaser: 'Smart IPTV „My List“: M3U-Playlist per MAC-Adresse hochladen, ändern und löschen.',
    icon: 'tv',
    title: `My SIPTV: Smart IPTV Playlist hochladen | ${site.name}`,
    description: 'My SIPTV erklärt: So laden Sie Ihre M3U-Playlist in Smart IPTV per MAC-Adresse hoch, aktualisieren oder löschen sie und beheben typische Upload-Fehler.',
    kicker: 'Smart IPTV',
    h1: 'My SIPTV: Playlist in Smart IPTV hochladen, ändern und löschen',
    lead: 'Bei Smart IPTV (SIPTV) tippen Sie die Senderliste nicht am Fernseher ein. Sie laden sie über die Seite „My List“ des App-Anbieters hoch – verknüpft mit der MAC-Adresse Ihres Fernsehers. Wer nach „My SIPTV“ oder „SIPTV My List“ sucht, findet hier den kompletten Ablauf: Upload per Link oder Datei, Programmführer, Aktualisieren, Löschen und die häufigsten Fehlermeldungen.',
    facts: [
      ['Seite des Anbieters', 'siptv.app/mylist'],
      ['Benötigt', 'MAC-Adresse aus der App, M3U-Link oder M3U-Datei'],
      ['Gilt für', 'Smart IPTV auf LG, Samsung (ältere Modelle), Android TV, Fire TV'],
      ['Nach dem Upload', 'App am Fernseher neu starten'],
    ],
    app: { name: 'Smart IPTV (SIPTV)', os: 'webOS, Tizen, Android TV, Fire OS' },
    schema: [howTo('/smart-iptv-playlist-hochladen/', 'Playlist in Smart IPTV hochladen', [
      'Smart IPTV am Fernseher starten und MAC-Adresse notieren.',
      'siptv.app/mylist am Handy oder Computer öffnen.',
      'MAC-Adresse und M3U-Link eintragen.',
      'Option zum regelmäßigen Neuladen wählen und Captcha bestätigen.',
      'Senden und die App am Fernseher neu starten.',
    ])],
    sections: [
      { id: 'mac', h: 'Schritt 1: MAC-Adresse in Smart IPTV finden', html: `
<p>Starten Sie Smart IPTV auf dem Fernseher. Die MAC-Adresse steht direkt auf dem Startbildschirm, im Format <code>00:aa:bb:cc:dd:ee</code>. Wichtig: Es ist die MAC-Adresse, die <strong>die App</strong> anzeigt – nicht die aus den Netzwerkeinstellungen des Fernsehers. Bei manchen Geräten unterscheiden sie sich, etwa wenn der Fernseher per WLAN statt per Kabel verbunden ist. Fotografieren Sie die Anzeige mit dem Handy, dann vertippen Sie sich nicht.</p>` },
      { id: 'hochladen', h: 'Schritt 2: Playlist auf siptv.app/mylist hochladen', html: `${ol([
  'Öffnen Sie am Smartphone oder Computer die Seite <strong>siptv.app/mylist</strong>.',
  'Tragen Sie die <strong>MAC-Adresse</strong> aus der App ein.',
  'Wählen Sie, ob Sie einen <strong>Link</strong> (URL) oder eine <strong>Datei</strong> hochladen. Für IPTV-Zugänge nehmen Sie den Link: Fügen Sie Ihren <strong>M3U-Link</strong> aus unserer E-Mail ein.',
  'Aktivieren Sie die Option, mit der die App den Link <strong>online speichert bzw. regelmäßig neu lädt</strong> (die Bezeichnung variiert je nach Version der Seite). Dann übernimmt die App Senderänderungen automatisch.',
  'Aktivieren Sie, falls angeboten, die automatische Programmführer-Erkennung (EPG).',
  'Bestätigen Sie das Captcha und klicken Sie auf <strong>„Send“</strong>.',
  'Starten Sie Smart IPTV am Fernseher neu – oder nutzen Sie in der App die Funktion zum Neuladen. Die Senderliste erscheint.',
])}<p>Den M3U-Link finden Sie in der Bestätigungs-E-Mail Ihres Pakets oder ${L('/iptv-testen/', 'Tests')}. Wie ein solcher Link aufgebaut ist, erklärt ${L('/m3u-playlist/', 'M3U-Playlist')}.</p>` },
      { id: 'link-oder-datei', h: 'Link oder Datei: was ist besser?', html: `
<p><strong>Link (URL):</strong> Die App lädt die Liste direkt beim IPTV-Anbieter. Neue oder umbenannte Sender erscheinen automatisch, wenn die Online-Option aktiv ist. Für fast alle Nutzer die richtige Wahl.</p>
<p><strong>Datei (.m3u):</strong> Sie laden eine fest gespeicherte Liste hoch. Ändert der Anbieter etwas, müssen Sie die Datei neu hochladen. Sinnvoll nur, wenn Sie die Liste selbst bearbeitet haben, etwa um Kategorien zu entfernen.</p>` },
      { id: 'aendern', h: 'Playlist ändern, ersetzen oder löschen', html: `
<ul>
  <li><strong>Ersetzen:</strong> Laden Sie für dieselbe MAC-Adresse einfach einen neuen Link hoch. Die neue Liste überschreibt die alte.</li>
  <li><strong>Löschen:</strong> Auf derselben Seite gibt es einen Bereich zum Entfernen der Playlist für Ihre MAC-Adresse. Löschen Sie alte Listen, bevor Sie zu einem anderen Anbieter wechseln.</li>
  <li><strong>Mehrere Fernseher:</strong> Jeder Fernseher hat eine eigene MAC-Adresse und braucht einen eigenen Upload – und nach der Testphase eine eigene Aktivierung beim App-Anbieter. Wie die Aktivierung funktioniert, steht unter ${L('/smart-iptv/', 'Smart IPTV einrichten')}.</li>
</ul>` },
      { id: 'fehler', h: 'Typische Fehler beim SIPTV-Upload', html: `${fixes([
  ['„MAC address not found“ oder unbekannt', 'Die App muss mindestens einmal gestartet worden sein und Internet haben. Danach die MAC-Adresse erneut genau abtippen.'],
  ['Upload erfolgreich, aber keine Sender', 'App vollständig neu starten. Hilft das nicht, Link im Browser testen: Startet ein Download, ist der Link in Ordnung.'],
  ['„Invalid playlist“', 'Der Link ist unvollständig. Kopieren Sie ihn komplett aus der E-Mail, ohne Leerzeichen am Ende.'],
  ['Sender veraltet', 'Die Online-Option war nicht aktiv. Link erneut mit dieser Option hochladen.'],
  ['Kein Programmführer', 'EPG-Erkennung beim Upload aktivieren oder die EPG-Adresse aus unserer E-Mail eintragen, falls die Seite ein Feld dafür anbietet.'],
])}<p>${support} Allgemeine Hilfe: ${L('/iptv-probleme/', 'IPTV-Probleme beheben')}.</p><p class="muted">Smart IPTV ist eine App eines Drittanbieters und enthält selbst keine Sender. Aufbau und Optionen der Seite „My List“ können sich ändern (Stand: ${stand}).</p>` },
    ],
    faq: [
      ['Was ist My SIPTV?', 'So nennen viele die Seite „My List“ von Smart IPTV (siptv.app/mylist). Dort laden Sie Ihre Playlist hoch und verknüpfen sie mit der MAC-Adresse der App.'],
      ['Wo finde ich die MAC-Adresse für Smart IPTV?', 'Direkt auf dem Startbildschirm der App am Fernseher, nicht in den Netzwerkeinstellungen.'],
      ['Muss ich die Playlist nach jeder Senderänderung neu hochladen?', 'Nein, wenn Sie einen Link hochladen und die Option zum Online-Speichern bzw. Neuladen aktivieren.'],
      ['Kann ich mehrere Playlists hochladen?', 'Pro MAC-Adresse ersetzt ein neuer Upload in der Regel die alte Liste. Für mehrere Listen bieten andere Apps wie IBO Player Playlist-Verwaltung.'],
      ['Ist der Upload kostenlos?', 'Ja. Kostenpflichtig ist nach der Testphase die einmalige Aktivierung der App beim App-Anbieter, nicht der Upload.'],
    ],
    related: ['/smart-iptv/', '/m3u-playlist/', '/iptv-lg-tv/', '/iptv-samsung-tv/', '/ibo-player/', '/ss-iptv/'],
    keywords: ['my sip tv', 'my siptv', 'siptv my list', 'smart iptv my list', 'siptv list', 'smart iptv list', 'smart iptv m3u', 'siptv mylist', 'smart iptv playlist hochladen'],
  },
];
