// App pages added in the November 2026 keyword pass. Apps are third-party
// products: describe setup factually, hedge availability and pricing, never
// claim an app contains channels. `app` feeds the SoftwareApplication schema.
import { site, plans } from '../site.mjs';
import { L, ol, stand } from './util.mjs';

const thirdParty = `Die genannten Apps sind Angebote Dritter und enthalten selbst keine Sender. Verfügbarkeit, Menüs und Preise der App-Anbieter können sich ändern (Stand: ${stand}).`;
const bonusPlan = plans.find((p) => p.bonus);
const xtream = (extra = '') => ol([
  'Öffnen Sie die App und wählen Sie „Playlist hinzufügen“ bzw. „Add playlist“.',
  'Wählen Sie <strong>Xtream Codes</strong> (teils „Xtream API“ oder „XC“).',
  `Tragen Sie einen Namen (z. B. „${site.name}“), <strong>Server-URL</strong>, <strong>Benutzername</strong> und <strong>Passwort</strong> aus unserer E-Mail ein.`,
  `Speichern Sie. Die App lädt Senderliste, Programmführer${extra ? ` ${extra}` : ''} – beim ersten Mal kann das einige Minuten dauern.`,
]);

export default [

  {
    path: '/ibo-player/',
    hub: 'apps',
    name: 'IBO Player',
    teaser: 'IBO Player und IBO Player Pro per MAC-Adresse einrichten – im Jahrespaket inklusive.',
    icon: 'play',
    app: { name: 'IBO Player', os: 'Tizen, webOS, Android, Android TV, Fire OS, iOS, tvOS, Windows' },
    title: `IBO Player & IBO Player Pro einrichten | ${site.name}`,
    description: 'IBO Player und IBO Player Pro einrichten: MAC-Adresse und Device Key finden, Playlist hinzufügen, Aktivierung – im Jahrespaket von IPTV Genuss inklusive.',
    kicker: 'IPTV-Apps',
    h1: 'IBO Player und IBO Player Pro – Einrichtung per MAC-Adresse',
    lead: `Der IBO Player ist eine IPTV-App, die besonders auf Smart-TVs von Samsung und LG beliebt ist, aber auch auf Android, Fire TV und Apple-Geräten läuft. Eingerichtet wird er über die MAC-Adresse Ihres Geräts.${bonusPlan ? ` Im ${bonusPlan.label === '1 Jahr' ? 'Jahrespaket' : `Paket „${bonusPlan.label}“`} von ${site.name} ist das ${bonusPlan.bonusName}-Abo kostenlos inklusive.` : ''}`,
    facts: [['Geräte', 'Samsung (Tizen), LG (webOS), Android, Android TV, Fire TV, iPhone, iPad, Apple TV, Windows u. a.'], ['Anmeldung', 'MAC-Adresse und Device Key, Playlist als M3U oder Xtream Codes'], ['Kosten', 'Testphase, danach Aktivierung beim App-Anbieter'], ['Bei IPTV Genuss', bonusPlan ? `${bonusPlan.bonusName} im Paket „${bonusPlan.label}“ inklusive` : 'Kompatibel']],
    sections: [
      { id: 'prinzip', h: 'So funktioniert der IBO Player', html: `
<p>Anders als bei ${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')} tippen Sie Ihre Zugangsdaten nicht auf dem Fernseher ein. Die App zeigt beim Start zwei Angaben an: die <strong>MAC-Adresse</strong> und den <strong>Device Key</strong>. Mit diesen beiden Werten hinterlegen Sie Ihre Playlist auf der Website des App-Anbieters; die App lädt sie danach automatisch. Das spart mühsames Tippen mit der Fernbedienung.</p>
<p><strong>IBO Player</strong> und <strong>IBO Player Pro</strong> sind zwei eigenständige Apps mit ähnlichem Prinzip, die jeweils eigene Aktivierungen haben. Achten Sie darauf, welche App Sie installieren.</p>` },
      { id: 'installieren', h: 'IBO Player installieren', html: `
<ul>
  <li><strong>Samsung (Tizen) und LG (webOS):</strong> Im App-Store des Fernsehers nach „IBO Player“ suchen – siehe ${L('/iptv-samsung-tv/', 'Samsung TV')} und ${L('/iptv-lg-tv/', 'LG TV')}.</li>
  <li><strong>Android, Android TV, Google TV:</strong> über den Google Play Store, sofern dort gelistet.</li>
  <li><strong>Fire TV Stick:</strong> über den Amazon Appstore oder die Website des Anbieters – siehe ${L('/iptv-downloader/', 'Downloader-App')}.</li>
  <li><strong>iPhone, iPad, Apple TV:</strong> über den App Store, sofern verfügbar – siehe ${L('/iptv-apple-tv/', 'IPTV auf Apple-Geräten')}.</li>
</ul>` },
      { id: 'einrichten', h: 'IBO Player einrichten: Schritt für Schritt', html: ol([
        'Starten Sie den IBO Player auf dem Fernseher. Notieren Sie <strong>MAC-Adresse</strong> und <strong>Device Key</strong>, die auf dem Startbildschirm angezeigt werden.',
        'Öffnen Sie am Handy oder Computer die offizielle Website des App-Anbieters und wählen Sie dort die Playlist-Verwaltung bzw. den Login für Geräte.',
        'Geben Sie MAC-Adresse und Device Key ein.',
        `Fügen Sie eine Playlist hinzu: entweder den <strong>M3U-Link</strong> oder die <strong>Xtream-Codes-Daten</strong> (Server-URL, Benutzername, Passwort) aus unserer E-Mail. Als Namen können Sie „${site.name}“ verwenden.`,
        'Starten Sie die App auf dem Fernseher neu. Die Playlist erscheint und lädt Live-TV, Filme und Serien.',
      ]) + `<p>Die Unterschiede zwischen M3U und Xtream Codes erklären ${L('/m3u-playlist/', 'M3U-Playlist')} und ${L('/xtream-codes/', 'Xtream Codes')}.</p>` },
      { id: 'jahrespaket', h: 'IBO Player Pro im Jahrespaket von IPTV Genuss', html: `
<p>Nach einer Testphase verlangt der App-Anbieter eine Aktivierungsgebühr pro Gerät. ${bonusPlan ? `Beim Paket „${bonusPlan.label}“ ist das ${bonusPlan.bonusName}-Abo kostenlos inklusive – zusätzlich zu allen Leistungen des Pakets. Im kostenlosen Test und im Monatspaket ist dieser Bonus nicht enthalten.` : ''} Halten Sie bei der Bestellung MAC-Adresse und Device Key aus der App bereit; die Einzelheiten zur Aktivierung stimmen wir mit Ihnen ab. Alle Pakete finden Sie bei den ${L('/#preise', 'Preisen')}.</p>` },
      { id: 'fehler', h: 'IBO Player: häufige Fragen bei der Einrichtung', html: `
<ul>
  <li><strong>Playlist erscheint nicht:</strong> App vollständig schließen und neu starten; MAC-Adresse auf Tippfehler prüfen (Ziffer 0 und Buchstabe O verwechselt?).</li>
  <li><strong>„Playlist inactive“ oder „expired“:</strong> Entweder ist die Testphase der App abgelaufen oder Ihr IPTV-Paket. Prüfen Sie beides.</li>
  <li><strong>Ruckeln:</strong> Fernseher per LAN-Kabel verbinden – mehr unter ${L('/iptv-probleme/', 'IPTV-Probleme beheben')}.</li>
</ul>
<p class="muted">${thirdParty}</p>` },
    ],
    faq: [
      ['Was ist der IBO Player?', 'Eine IPTV-App für Smart-TVs, Android, Fire TV und Apple-Geräte, die per MAC-Adresse und Device Key eingerichtet wird. Sender enthält sie nicht.'],
      ['Ist der IBO Player kostenlos?', 'Nach einer Testphase verlangt der App-Anbieter eine Aktivierungsgebühr. Beim Jahrespaket von IPTV Genuss ist das IBO-Player-Pro-Abo kostenlos inklusive.'],
      ['Was ist der Unterschied zwischen IBO Player und IBO Player Pro?', 'Es sind zwei eigenständige Apps mit ähnlicher Bedienung und jeweils eigener Aktivierung. Installieren Sie die App, für die Ihre Aktivierung gilt.'],
      ['Wo finde ich MAC-Adresse und Device Key?', 'Beide Werte zeigt die App direkt nach dem Start auf dem Bildschirm an, meist auch unter Einstellungen oder „Info“.'],
      ['Kann ich den IBO Player auf mehreren Fernsehern nutzen?', 'Ja, die Aktivierung gilt aber pro Gerät (pro MAC-Adresse). Wie viele Geräte gleichzeitig schauen dürfen, regelt Ihr IPTV-Paket.'],
    ],
    related: ['/iptv-apps/', '/iptv-samsung-tv/', '/iptv-lg-tv/', '/flix-iptv/', '/#preise', '/m3u-playlist/'],
    keywords: ['iptv ibo'],
  },

  {
    path: '/iptvx/',
    hub: 'apps',
    name: 'IPTVX',
    teaser: 'IPTVX auf iPhone, iPad, Apple TV und Mac einrichten.',
    icon: 'play',
    app: { name: 'IPTVX', os: 'iOS, iPadOS, tvOS, macOS' },
    title: `IPTVX: IPTV-Player für Apple TV & iPhone | ${site.name}`,
    description: 'IPTVX einrichten: der IPTV-Player für Apple TV, iPhone, iPad und Mac. Login per Xtream Codes oder M3U, Programmführer, Kosten und Alternativen für Android.',
    kicker: 'IPTV-Apps',
    h1: 'IPTVX – IPTV-Player für Apple TV, iPhone und Mac',
    lead: 'IPTVX ist ein IPTV-Player, der vor allem für Apple-Geräte entwickelt wurde: Apple TV, iPhone, iPad und Mac. Die App fällt durch eine aufgeräumte Oberfläche im Apple-Stil auf und unterstützt Xtream Codes und M3U. Sender enthält sie nicht – die kommen von Ihrem IPTV-Anbieter.',
    facts: [['Geräte', 'Apple TV, iPhone, iPad, Mac'], ['Anmeldung', 'Xtream Codes, M3U, EPG-Adresse (XMLTV)'], ['Kosten', 'Download kostenlos, Vollversion per In-App-Kauf']],
    sections: [
      { id: 'installieren', h: 'IPTVX installieren', html: `
<p>Suchen Sie im <strong>App Store</strong> auf Apple TV, iPhone, iPad oder Mac nach „IPTVX“. Eine Anleitung für Apple-Geräte allgemein finden Sie unter ${L('/iptv-apple-tv/', 'IPTV auf Apple TV und iPhone')}.</p>
<p><strong>IPTVX auf Android:</strong> IPTVX ist in erster Linie für Apple-Plattformen bekannt. Ob es eine Version für Ihr Android-Gerät gibt, sehen Sie im Google Play Store. Bewährte Alternativen auf Android und Fire TV sind ${L('/tivimate/', 'TiviMate')} und ${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')}.</p>` },
      { id: 'einrichten', h: 'IPTVX mit Xtream Codes einrichten', html: xtream('sowie Filme und Serien') + `<p>Mit M3U fügen Sie stattdessen den Playlist-Link und – falls nötig – die EPG-Adresse ein. Mehr unter ${L('/m3u-playlist/', 'M3U-Playlist')}.</p>` },
      { id: 'tipps', h: 'Tipps für IPTVX auf dem Apple TV', html: `
<ul>
  <li>Legen Sie Favoriten an, damit die App direkt mit Ihren wichtigsten Sendern startet – siehe ${L('/iptv-senderliste/', 'Senderliste und EPG')}.</li>
  <li>Verbinden Sie das Apple TV per LAN-Kabel, wenn das Bild ruckelt.</li>
  <li>Für Ultra HD brauchen Sie ein Apple TV 4K – mehr unter ${L('/iptv-4k/', 'IPTV in 4K')}.</li>
</ul>
<p class="muted">${thirdParty}</p>` },
    ],
    faq: [
      ['Gibt es IPTVX für Android?', 'IPTVX ist vor allem für Apple-Geräte entwickelt. Ob eine Android-Version verfügbar ist, sehen Sie im Google Play Store; bewährte Alternativen sind TiviMate und IPTV Smarters Pro.'],
      ['Ist IPTVX kostenlos?', 'Der Download ist kostenlos, der volle Funktionsumfang wird per In-App-Kauf freigeschaltet. Die aktuellen Preise nennt der App Store.'],
      ['Funktioniert IPTVX mit IPTV Genuss?', 'Ja. IPTVX unterstützt Xtream Codes und M3U – beides erhalten Sie mit Ihren Zugangsdaten.'],
      ['Welche App ist besser für Apple TV: IPTVX oder Smarters?', 'Beide funktionieren. IPTVX wirkt moderner, IPTV Smarters Pro ist kostenlos in der Grundversion. Probieren Sie beide im kostenlosen Test aus.'],
    ],
    related: ['/iptv-apple-tv/', '/iptv-apps/', '/iptv-smarters-pro/', '/gse-smart-iptv/', '/xtream-codes/', '/iptv-testen/'],
    keywords: ['iptvx', 'iptvx android', 'iptvx apple tv'],
  },

  {
    path: '/implayer/',
    hub: 'apps',
    name: 'iMPlayer',
    teaser: 'iMPlayer auf Android TV, Fire TV und Smart-TVs einrichten.',
    icon: 'play',
    app: { name: 'iMPlayer', os: 'Android, Android TV, Fire OS, iOS, tvOS' },
    title: `iMPlayer: IPTV-Player einrichten | ${site.name}`,
    description: 'iMPlayer einrichten: Download für Android TV, Fire TV Stick und Apple-Geräte, Login per Xtream Codes oder M3U, Premium-Funktionen und Tipps zur Bedienung.',
    kicker: 'IPTV-Apps',
    h1: 'iMPlayer – IPTV-Player einrichten',
    lead: 'iMPlayer ist ein moderner IPTV-Player mit Oberfläche im Streaming-Stil: große Cover für Filme und Serien, übersichtliches Live-TV und Programmführer. Die App unterstützt Xtream Codes und M3U und läuft vor allem auf Android-basierten Geräten.',
    facts: [['Geräte', 'Android, Android TV, Google TV, Fire TV; je nach Store auch weitere Plattformen'], ['Anmeldung', 'Xtream Codes, M3U'], ['Kosten', 'Testphase, danach Premium per Abo oder Einmalkauf']],
    sections: [
      { id: 'installieren', h: 'iMPlayer installieren', html: `
<ul>
  <li><strong>Android TV, Google TV, Android-Smartphone:</strong> im Google Play Store nach „iMPlayer“ suchen.</li>
  <li><strong>Fire TV Stick:</strong> über den Amazon Appstore, sonst über die Website des Entwicklers – siehe ${L('/iptv-downloader/', 'Downloader-App')}.</li>
  <li><strong>Weitere Geräte:</strong> Ob es eine Version für Apple-Geräte oder Ihren Smart-TV gibt, sehen Sie im jeweiligen App-Store.</li>
</ul>` },
      { id: 'einrichten', h: 'iMPlayer mit Xtream Codes einrichten', html: xtream('sowie Filme und Serien mit Covern') },
      { id: 'premium', h: 'iMPlayer Premium', html: `
<p>Nach einer Testphase schaltet der Entwickler den vollen Funktionsumfang gegen Gebühr frei – als Abo oder Einmalkauf. Kaufen Sie Premium nur in der App oder auf der offiziellen Website, nicht über Dritte. Kostenlose Alternativen sind ${L('/xciptv/', 'XCIPTV')} und ${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')}.</p>
<p class="muted">${thirdParty}</p>` },
    ],
    faq: [
      ['Ist iMPlayer kostenlos?', 'Es gibt eine Testphase. Danach wird der volle Funktionsumfang kostenpflichtig freigeschaltet; aktuelle Preise nennt der Entwickler in der App.'],
      ['Funktioniert iMPlayer auf dem Fire TV Stick?', 'Ja, auf Fire-TV-Geräten mit Fire OS. Geräte mit Vega OS unterstützen keine Android-Apps.'],
      ['Unterstützt iMPlayer Filme und Serien?', 'Ja. Mit dem Xtream-Codes-Login zeigt iMPlayer Filme und Serien in eigenen Bereichen mit Covern an.'],
    ],
    related: ['/iptv-apps/', '/iptv-fire-tv-stick/', '/iptv-android/', '/tivimate/', '/iptv-vod/', '/xtream-codes/'],
    keywords: ['implayer'],
  },

  {
    path: '/gse-smart-iptv/',
    hub: 'apps',
    name: 'GSE Smart IPTV',
    teaser: 'GSE Smart IPTV auf iPhone, iPad, Apple TV und Android einrichten.',
    icon: 'play',
    app: { name: 'GSE Smart IPTV', os: 'iOS, iPadOS, tvOS, Android' },
    title: `GSE Smart IPTV einrichten: Anleitung | ${site.name}`,
    description: 'GSE Smart IPTV einrichten: Xtream Codes oder M3U hinzufügen, EPG-Adresse eintragen und Chromecast nutzen – auf iPhone, iPad, Apple TV und Android.',
    kicker: 'IPTV-Apps',
    h1: 'GSE Smart IPTV – Einrichtung auf iPhone, Apple TV und Android',
    lead: 'GSE Smart IPTV ist einer der ältesten IPTV-Player für Apple-Geräte und auch für Android erhältlich. Die App unterstützt M3U-Playlists, Xtream Codes und separate EPG-Quellen und kann Streams an einen Chromecast senden.',
    facts: [['Geräte', 'iPhone, iPad, Apple TV, Android'], ['Anmeldung', 'Xtream Codes (Xtream API), M3U, EPG (XMLTV)'], ['Besonderheit', 'Wiedergabe auf Chromecast möglich'], ['Kosten', 'Je nach Plattform kostenlos mit In-App-Käufen bzw. kostenpflichtige Pro-Version']],
    sections: [
      { id: 'einrichten', h: 'GSE Smart IPTV mit Xtream Codes einrichten', html: ol([
        'Öffnen Sie GSE Smart IPTV und tippen Sie auf das Menü (drei Striche).',
        'Wählen Sie <strong>„Xtream Codes API“</strong> und tippen Sie auf das Plus-Symbol.',
        `Tragen Sie einen Namen (z. B. „${site.name}“), <strong>Server-URL</strong>, <strong>Benutzername</strong> und <strong>Passwort</strong> ein.`,
        'Speichern Sie und tippen Sie auf den neuen Eintrag, um Senderliste und Programmführer zu laden.',
      ]) + `<p>Für M3U wählen Sie im Menü „Remote Playlists“ und fügen den Link hinzu; die EPG-Adresse tragen Sie unter „EPG Sources“ ein.</p>` },
      { id: 'chromecast', h: 'GSE Smart IPTV und Chromecast', html: `
<p>Tippen Sie während der Wiedergabe auf das Cast-Symbol, um den Stream an einen Chromecast oder Fernseher mit Chromecast-Funktion zu senden. Das klappt nicht mit jedem Stream-Format gleich gut. Alles zum Thema unter ${L('/iptv-chromecast/', 'IPTV auf Chromecast und Google TV')}.</p>` },
      { id: 'alternativen', h: 'Alternativen', html: `
<p>Auf Apple-Geräten sind ${L('/iptvx/', 'IPTVX')} und ${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')} beliebte Alternativen, auf Android TV und Fire TV ${L('/tivimate/', 'TiviMate')}. Alle Apps im ${L('/iptv-apps/', 'Vergleich')}.</p>
<p class="muted">${thirdParty}</p>` },
    ],
    faq: [
      ['Ist GSE Smart IPTV kostenlos?', 'Das hängt von der Plattform ab: Teils ist die App kostenlos mit In-App-Käufen, teils gibt es eine kostenpflichtige Pro-Version. Sender enthält sie in keinem Fall.'],
      ['Kann GSE Smart IPTV auf den Fernseher streamen?', 'Ja, über Chromecast oder AirPlay, sofern Ihr Fernseher bzw. Stick das unterstützt.'],
      ['Funktioniert GSE Smart IPTV mit Xtream Codes?', 'Ja, über den Menüpunkt „Xtream Codes API“.'],
    ],
    related: ['/iptv-apple-tv/', '/iptvx/', '/iptv-chromecast/', '/iptv-apps/', '/m3u-playlist/', '/xtream-codes/'],
    keywords: ['gseiptv'],
  },

  {
    path: '/duplecast/',
    hub: 'apps',
    name: 'Duplecast',
    teaser: 'Duplecast per Geräte-ID einrichten – auf Smart-TV, Android und Fire TV.',
    icon: 'play',
    app: { name: 'Duplecast', os: 'Tizen, webOS, Android TV, Fire OS, tvOS' },
    title: `Duplecast IPTV-Player einrichten | ${site.name}`,
    description: 'Duplecast einrichten: Geräte-ID finden, Playlist über die Website des Anbieters hinzufügen, unterstützte Geräte und Aktivierung des IPTV-Players erklärt.',
    kicker: 'IPTV-Apps',
    h1: 'Duplecast – IPTV-Player einrichten',
    lead: 'Duplecast ist ein IPTV-Player für Smart-TVs und Streaming-Geräte. Wie beim IBO Player oder Flix IPTV tragen Sie Ihre Playlist nicht am Fernseher ein, sondern bequem am Handy oder Computer – verknüpft über eine Kennung, die die App anzeigt.',
    facts: [['Geräte', 'Je nach Store: Smart-TVs, Android TV, Fire TV, Apple TV'], ['Anmeldung', 'Geräte-ID bzw. MAC-Adresse, Playlist als M3U oder Xtream Codes'], ['Kosten', 'Testphase, danach Aktivierung beim App-Anbieter']],
    sections: [
      { id: 'einrichten', h: 'Duplecast einrichten', html: ol([
        'Installieren Sie Duplecast aus dem App-Store Ihres Geräts und starten Sie die App.',
        'Notieren Sie die Kennung (Geräte-ID bzw. MAC-Adresse), die auf dem Bildschirm erscheint.',
        'Öffnen Sie am Handy oder Computer die offizielle Website des App-Anbieters und melden Sie das Gerät mit dieser Kennung an.',
        'Fügen Sie Ihren M3U-Link oder Ihre Xtream-Codes-Daten aus unserer E-Mail als Playlist hinzu.',
        'Starten Sie die App neu – die Playlist wird geladen.',
      ]) },
      { id: 'vergleich', h: 'Duplecast oder IBO Player?', html: `
<p>Beide arbeiten nach demselben Prinzip. Kunden des Jahrespakets erhalten das ${L('/ibo-player/', 'IBO Player Pro')}-Abo kostenlos dazu – das spart die Aktivierungsgebühr einer zweiten App. Weitere Apps mit Einrichtung per MAC-Adresse sind ${L('/flix-iptv/', 'Flix IPTV')}, ${L('/set-iptv/', 'Set IPTV')} und ${L('/smart-iptv/', 'Smart IPTV')}.</p>
<p class="muted">${thirdParty}</p>` },
    ],
    faq: [
      ['Ist Duplecast kostenlos?', 'Nach einer Testphase verlangt der App-Anbieter eine Aktivierung. Die aktuellen Bedingungen stehen auf seiner Website.'],
      ['Funktioniert Duplecast mit IPTV Genuss?', 'Ja. Sie hinterlegen den M3U-Link oder die Xtream-Codes-Daten, die Sie von uns erhalten.'],
      ['Welche App empfehlen Sie für Samsung und LG?', 'Für Kunden des Jahrespakets den IBO Player Pro, weil das Abo dort inklusive ist. Ansonsten Flix IPTV, Set IPTV oder SS IPTV.'],
    ],
    related: ['/ibo-player/', '/flix-iptv/', '/iptv-samsung-tv/', '/iptv-lg-tv/', '/iptv-apps/', '/m3u-playlist/'],
    keywords: ['duplecast', 'duplecast iptv'],
  },

  {
    path: '/ott-navigator/',
    hub: 'apps',
    name: 'OTT Navigator',
    teaser: 'OTT Navigator auf Android TV und Fire TV einrichten, Premium erklärt.',
    icon: 'play',
    app: { name: 'OTT Navigator', os: 'Android, Android TV, Fire OS' },
    title: `OTT Navigator: IPTV-Player einrichten | ${site.name}`,
    description: 'OTT Navigator einrichten: Installation auf Android TV und Fire TV, Login per Xtream Codes, M3U oder Portal, Programmführer und was OTT Navigator Premium bietet.',
    kicker: 'IPTV-Apps',
    h1: 'OTT Navigator – IPTV-Player für Android TV und Fire TV',
    lead: 'OTT Navigator ist ein sehr flexibler IPTV-Player für Android-Geräte. Er unterstützt Xtream Codes, M3U-Playlists und Portal-Zugänge und lässt sich bis ins Detail anpassen – ideal für alle, die gern selbst einstellen.',
    facts: [['Geräte', 'Android-Smartphone, Android TV, Google TV, Fire TV (Fire OS)'], ['Anmeldung', 'Xtream Codes, M3U, Portal (Stalker)'], ['Kosten', 'Grundversion kostenlos, Premium mit Zusatzfunktionen']],
    sections: [
      { id: 'installieren', h: 'OTT Navigator installieren', html: `
<p>Auf Android-Geräten finden Sie „OTT Navigator IPTV“ im Google Play Store. Auf dem Fire TV Stick installieren Sie die App über den Appstore oder – falls dort nicht gelistet – von der Website des Entwicklers, siehe ${L('/iptv-downloader/', 'Downloader-App')}.</p>` },
      { id: 'einrichten', h: 'OTT Navigator einrichten', html: ol([
        'Starten Sie die App; beim ersten Start fragt sie nach einem Anbieter.',
        'Wählen Sie <strong>„Xtream Codes“</strong> (oder „Playlist“ für M3U).',
        'Tragen Sie Server-URL, Benutzername und Passwort aus unserer E-Mail ein.',
        'Bestätigen Sie. Senderliste, Programmführer und – je nach Zugang – Filme und Serien werden geladen.',
      ]) },
      { id: 'premium', h: 'OTT Navigator Premium', html: `
<p>Die Grundversion ist kostenlos. Premium schaltet zusätzliche Funktionen frei, etwa mehrere Anbieter-Profile, erweiterte Oberflächen-Optionen und Komfortfunktionen beim Programmführer. Welche Funktionen genau dazugehören und was Premium kostet, nennt der Entwickler in der App. Eine Alternative mit sehr übersichtlichem Programmführer ist ${L('/tivimate/', 'TiviMate')}.</p>
<p class="muted">${thirdParty}</p>` },
    ],
    faq: [
      ['Ist OTT Navigator kostenlos?', 'Die Grundversion ist kostenlos. OTT Navigator Premium schaltet zusätzliche Funktionen frei.'],
      ['Läuft OTT Navigator auf Samsung oder LG?', 'Nein, OTT Navigator ist eine Android-App. Für Samsung und LG eignen sich Apps wie IBO Player oder SS IPTV.'],
      ['Unterstützt OTT Navigator Portal-Zugänge wie die MAG-Box?', 'Ja, neben Xtream Codes und M3U auch Portal-Zugänge (Stalker).'],
    ],
    related: ['/iptv-apps/', '/tivimate/', '/iptv-android/', '/iptv-fire-tv-stick/', '/stbemu/', '/xtream-codes/'],
    keywords: ['ott navigator premium'],
  },

  {
    path: '/perfect-player/',
    hub: 'apps',
    name: 'Perfect Player',
    teaser: 'Perfect Player mit M3U-Playlist und EPG auf Android und Windows.',
    icon: 'play',
    app: { name: 'Perfect Player IPTV', os: 'Android, Android TV, Windows' },
    title: `Perfect Player IPTV einrichten: M3U & EPG | ${site.name}`,
    description: 'Perfect Player IPTV einrichten: M3U-Playlist und EPG-Adresse eintragen, Bedienung im Receiver-Stil auf Android TV und Windows sowie Tipps bei Problemen.',
    kicker: 'IPTV-Apps',
    h1: 'Perfect Player IPTV – Einrichtung mit M3U und EPG',
    lead: 'Perfect Player ist ein schlanker IPTV-Player im Stil eines klassischen Receivers. Er läuft auf Android, Android TV und Windows und arbeitet mit einer M3U-Playlist und einer separaten Adresse für den Programmführer.',
    facts: [['Geräte', 'Android, Android TV, Fire TV (Fire OS), Windows'], ['Anmeldung', 'M3U-Playlist und EPG-Adresse (XMLTV)'], ['Kosten', 'Kostenlos, Zusatzfunktionen je nach Version kostenpflichtig']],
    sections: [
      { id: 'einrichten', h: 'Perfect Player einrichten', html: ol([
        'Öffnen Sie Perfect Player und gehen Sie zu <strong>Einstellungen › Allgemein</strong>.',
        'Tragen Sie unter <strong>„Playlist“</strong> Ihren M3U-Link ein.',
        'Tragen Sie unter <strong>„EPG“</strong> die Adresse des Programmführers ein (XMLTV-Link aus unserer E-Mail).',
        'Kehren Sie zur Senderliste zurück und warten Sie, bis Sender und Programm geladen sind.',
      ]) + `<p>Wie eine M3U-Liste aufgebaut ist, erklärt ${L('/m3u-playlist/', 'M3U-Playlist')}.</p>` },
      { id: 'fuer-wen', h: 'Für wen eignet sich Perfect Player?', html: `
<p>Für alle, die einen schnellen, schlichten Player mit Senderliste und Programmführer suchen – auch auf älteren Geräten. Für Filme und Serien mit Covern sind Apps mit Xtream-Codes-Login wie ${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')} oder ${L('/tivimate/', 'TiviMate')} komfortabler. Am Windows-PC sind auch ${L('/vlc-iptv/', 'VLC')} und ${L('/kodi-iptv/', 'Kodi')} gute Alternativen.</p>
<p class="muted">${thirdParty}</p>` },
    ],
    faq: [
      ['Ist Perfect Player kostenlos?', 'Ja, in der Grundversion. Einzelne Zusatzfunktionen können je nach Version kostenpflichtig sein.'],
      ['Warum zeigt Perfect Player keinen Programmführer?', 'Die EPG-Adresse muss separat unter Einstellungen › Allgemein › EPG eingetragen werden. Prüfen Sie außerdem Datum und Zeitzone des Geräts.'],
      ['Unterstützt Perfect Player Xtream Codes?', 'Perfect Player arbeitet in erster Linie mit M3U-Playlists. Kunden von IPTV Genuss erhalten neben Xtream-Daten auch einen M3U-Link.'],
    ],
    related: ['/m3u-playlist/', '/iptv-apps/', '/iptv-pc/', '/vlc-iptv/', '/iptv-android/', '/iptv-senderliste/'],
    keywords: ['perfect iptv'],
  },

  {
    path: '/plex-jellyfin-iptv/',
    hub: 'apps',
    name: 'Plex & Jellyfin',
    teaser: 'IPTV in Plex oder Jellyfin einbinden – Live-TV, EPG und Aufnahmen.',
    icon: 'play',
    title: `IPTV mit Plex und Jellyfin einbinden | ${site.name}`,
    description: 'IPTV in Plex und Jellyfin einbinden: M3U-Tuner und EPG in Jellyfin, Live-TV und DVR in Plex per Tuner-Proxy – mit Vor- und Nachteilen für Ihren Heimserver.',
    kicker: 'IPTV-Apps',
    h1: 'IPTV mit Plex und Jellyfin: Live-TV im eigenen Medienserver',
    lead: 'Wer einen Heimserver mit Plex oder Jellyfin betreibt, kann IPTV dort einbinden: Live-TV, Programmführer und Aufnahmen landen dann in derselben Oberfläche wie Ihre eigenen Filme – auf allen Geräten im Haushalt. Jellyfin unterstützt M3U-Playlists direkt, Plex braucht einen Zwischenschritt.',
    facts: [['Jellyfin', 'Open Source, kostenlos, M3U-Tuner und XMLTV-Programmführer direkt eingebaut'], ['Plex', 'Live-TV & DVR erfordern Plex Pass und einen (emulierten) Tuner'], ['Voraussetzung', 'Eigener Server, NAS oder PC im Dauerbetrieb']],
    sections: [
      { id: 'jellyfin', h: 'IPTV in Jellyfin einrichten', html: ol([
        'Öffnen Sie das Jellyfin-Dashboard und wählen Sie <strong>Live-TV</strong>.',
        'Fügen Sie unter „Tuner-Geräte“ einen Tuner vom Typ <strong>M3U-Tuner</strong> hinzu und tragen Sie Ihren M3U-Link ein.',
        'Fügen Sie unter „TV-Programmdaten-Anbieter“ einen <strong>XMLTV</strong>-Eintrag mit der EPG-Adresse hinzu.',
        'Ordnen Sie bei Bedarf Sender und Programmführer einander zu und speichern Sie. Live-TV erscheint danach in allen Jellyfin-Apps.',
      ]) + `<p>Aufnahmen speichert Jellyfin auf dem Server. Begrenzen Sie die Zahl gleichzeitiger Streams in den Tuner-Einstellungen auf die Geräteanzahl Ihres IPTV-Pakets.</p>` },
      { id: 'plex', h: 'IPTV in Plex einbinden', html: `
<p>Plex erwartet für Live-TV einen Netzwerk-Tuner (wie HDHomeRun) und kann M3U-Listen nicht direkt einlesen. Die übliche Lösung ist ein <strong>Tuner-Proxy</strong> wie Threadfin oder xTeVe: Er liest Ihre M3U-Liste und die EPG-Daten und gibt sich gegenüber Plex als Tuner aus. Live-TV &amp; DVR setzen bei Plex außerdem einen Plex Pass voraus.</p>
${ol([
  'Tuner-Proxy auf dem Server installieren und M3U-Link sowie EPG-Adresse eintragen.',
  'Gewünschte Sender im Proxy auswählen und Programmführer zuordnen.',
  'In Plex unter Einstellungen › Live-TV &amp; DVR ein Gerät hinzufügen und den Proxy auswählen.',
  'Programmführer-Quelle (XMLTV) auswählen und Sender bestätigen.',
])}` },
      { id: 'abwaegen', h: 'Lohnt sich das?', html: `
<ul>
  <li><strong>Vorteile:</strong> eine Oberfläche für alles, zentrale Aufnahmen, Zugriff aus allen Räumen.</li>
  <li><strong>Nachteile:</strong> Server muss laufen, Einrichtung dauert, Umschalten ist oft langsamer als in einer IPTV-App.</li>
</ul>
<p>Für die meisten Haushalte ist eine IPTV-App wie ${L('/tivimate/', 'TiviMate')} oder ${L('/kodi-iptv/', 'Kodi')} einfacher. Wer ohnehin einen Medienserver betreibt, bekommt mit Jellyfin eine elegante Komplettlösung. Mehr zu Aufnahmen unter ${L('/iptv-vod/', 'IPTV-VOD und DVR')}.</p>
<p class="muted">${thirdParty}</p>` },
    ],
    faq: [
      ['Kann Plex IPTV direkt abspielen?', 'Nicht direkt. Plex braucht für Live-TV einen Tuner; IPTV wird über einen Tuner-Proxy wie Threadfin oder xTeVe eingebunden. Außerdem ist ein Plex Pass nötig.'],
      ['Unterstützt Jellyfin M3U-Playlists?', 'Ja. Jellyfin hat einen eingebauten M3U-Tuner und liest den Programmführer im XMLTV-Format.'],
      ['Kann ich mit Jellyfin IPTV aufnehmen?', 'Ja, Jellyfin kann Live-TV aufnehmen und auf dem Server speichern – für den privaten Gebrauch.'],
      ['Zählt der Server als Gerät?', 'Jeder gleichzeitig laufende Stream zählt. Begrenzen Sie die Tuner-Anzahl auf die Geräteanzahl Ihres Pakets.'],
    ],
    related: ['/kodi-iptv/', '/iptv-vod/', '/m3u-playlist/', '/iptv-server/', '/iptv-pc/', '/iptv-apps/'],
    keywords: ['plex iptv', 'jellyfin iptv'],
  },
];
