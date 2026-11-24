// Two cluster pages for lesser-known players. For these apps we could not
// verify enough independent facts (developer, platforms, features) for a
// page each, so they are grouped: one section per app with what is publicly
// visible, the shared setup method and a clear safety note.
import { site } from '../site.mjs';
import { L, ol, stand } from './util.mjs';

const thirdParty = `Die genannten Apps sind Angebote Dritter und enthalten selbst keine Sender. Wir stehen in keiner Verbindung zu den App-Anbietern. Verfügbarkeit, Namen und Preise ändern sich häufig (Stand: ${stand}).`;
const softwareList = (name, apps) => ({ '@type': 'ItemList', name, itemListElement: apps.map(([n, os], i) => ({ '@type': 'ListItem', position: i + 1, item: { '@type': 'SoftwareApplication', name: n, applicationCategory: 'MultimediaApplication', operatingSystem: os } })) });
const appSection = (id, name, html) => ({ id, h: `${name}: was Sie wissen sollten`, html });
const macSetup = ol([
  'App aus dem offiziellen Store Ihres Fernsehers oder Geräts installieren und starten.',
  'Die angezeigte <strong>MAC-Adresse</strong> bzw. <strong>Geräte-ID</strong> und gegebenenfalls den <strong>Device Key</strong> notieren.',
  'Auf der <strong>offiziellen Website des App-Anbieters</strong> mit diesen Werten anmelden.',
  `Den M3U-Link oder die Xtream-Codes-Daten aus unserer E-Mail als Playlist hinzufügen (Name z. B. „${site.name}“).`,
  'App auf dem Fernseher neu starten.',
]);
const check = `<ul><li><strong>Entwickler prüfen:</strong> Im Store steht unter dem App-Namen der Anbieter. Viele Apps tragen ähnliche Namen.</li><li><strong>Nur offizielle Quellen:</strong> Keine Installationsdateien oder Downloader-Codes aus Foren, Videos oder Chats.</li><li><strong>Keine Sender in der App:</strong> Seriöse Player enthalten keine Senderlisten. Werben eine App oder ein Verkäufer mit vorinstallierten Sendern, ist Vorsicht geboten.</li><li><strong>Aktivierung nur beim App-Anbieter:</strong> Bezahlen Sie Aktivierungen ausschließlich über die offizielle Website der App.</li></ul>`;

const iboApps = [['IBOXX Player', 'Smart-TV, Android'], ['IBOSS Player', 'Smart-TV, Android'], ['IBOSOL', 'Smart-TV, Android'], ['IBO STB', 'Smart-TV, Android'], ['King 4K Player', 'Smart-TV, Android'], ['Virginia Player', 'iOS, Smart-TV'], ['Family Player', 'Smart-TV, Android'], ['MAC Player', 'Smart-TV, Android'], ['Hot Player', 'Smart-TV, Android'], ['Bay IPTV', 'Smart-TV, Android']];
const moreApps = [['Room IPTV', 'Android, Smart-TV'], ['Nanomid Player', 'iOS, Smart-TV'], ['Smart IPTV Xtream Player', 'Android, iOS'], ['IPTV Stream Player', 'Android, iOS'], ['LillyPlayer', 'iOS, Windows'], ['Flex IPTV', 'iOS, tvOS'], ['Purple IPTV Player', 'Android, iOS']];

export default [
  {
    path: '/ibo-player-alternativen/',
    hub: 'apps',
    name: 'IBO-Player-Alternativen',
    teaser: 'IBOXX, IBOSS, IBOSOL, IBO STB, King 4K, Virginia, Family, MAC Player, Hot Player und Bay IPTV.',
    icon: 'play',
    title: `IBO-Player-Alternativen: IBOXX, IBOSS & Co. | ${site.name}`,
    description: 'IBOXX, IBOSS, IBOSOL, IBO STB, King 4K, Virginia, Family Player, MAC Player, Hot Player und Bay IPTV: Einrichtung per MAC-Adresse und worauf Sie achten sollten.',
    kicker: 'IPTV-Apps',
    h1: 'IBO-Player-Alternativen: IBOXX, IBOSS, IBOSOL, Hot Player und Co.',
    lead: `Neben dem bekannten ${L('/ibo-player/', 'IBO Player')} gibt es zahlreiche Smart-TV-Player mit ähnlichem Namen und gleichem Prinzip: Die App zeigt eine MAC-Adresse, die Playlist hinterlegen Sie auf einer Website. Hier finden Sie die bekanntesten im Überblick – mit der Einrichtung, die für alle gilt, und Hinweisen, woran Sie seriöse Apps erkennen.`,
    facts: [['Prinzip', 'MAC-Adresse bzw. Geräte-ID + Device Key, Playlist per Website'], ['Typische Geräte', 'Samsung (Tizen), LG (webOS), Android TV, Fire TV'], ['Kosten', 'Meist Testphase, danach Aktivierung beim App-Anbieter'], ['Unsere Empfehlung', `IBO Player Pro – im Jahrespaket von ${site.name} inklusive`]],
    schema: [softwareList('IBO-Player-Alternativen', iboApps)],
    sections: [
      { id: 'prinzip', h: 'Ein Prinzip, viele Namen', html: `<p>Viele dieser Apps ähneln sich stark in Aufbau und Bedienung. Manche stammen von denselben Entwicklern, andere sind Nachbauten. Für Sie als Nutzer zählt: Funktioniert die App zuverlässig auf Ihrem Gerät, ist sie im offiziellen Store gelistet, und erfolgt die Aktivierung über eine nachvollziehbare Website? Für einzelne der folgenden Apps konnten wir keine ausreichenden unabhängigen Angaben zu Entwickler und Funktionen prüfen; dort beschränken wir uns auf das, was allgemein gilt.</p><p>So richten Sie jede dieser Apps ein:</p>${macSetup}` },
      appSection('iboxx', 'IBOXX Player', '<p>IBOXX Player gehört zu den IBO-ähnlichen Playern für Smart-TVs. Die Einrichtung läuft über MAC-Adresse und Device Key; die Playlist hinterlegen Sie auf der Website des Anbieters. Prüfen Sie im Store Ihres Fernsehers, ob die App dort gelistet ist, und notieren Sie die angezeigten Werte genau.</p>'),
      appSection('iboss', 'IBOSS Player', '<p>IBOSS Player arbeitet nach demselben Muster. Achten Sie darauf, die Aktivierung für genau die App zu kaufen, die Sie installiert haben – IBOSS, IBOXX und IBO Player sind trotz ähnlicher Namen verschiedene Apps mit eigener Aktivierung.</p>'),
      appSection('ibosol', 'IBOSOL', '<p>IBOSOL tritt nach öffentlich verfügbaren Informationen eher als Anbieter mehrerer Player-Apps mit gemeinsamer Aktivierungs-Plattform auf als mit einer einzelnen App. Welche App Sie konkret nutzen, sehen Sie im Store; die Playlist hinterlegen Sie über die zugehörige Website.</p>'),
      appSection('ibo-stb', 'IBO STB', '<p>IBO STB ist eine IBO-ähnliche App, die je nach Version eine Oberfläche im Stil einer Set-Top-Box bietet. Die Einrichtung erfolgt ebenfalls per MAC-Adresse. Wer eine echte Portal-Oberfläche wie bei einer MAG-Box sucht, findet mit ' + L('/smart-stb/', 'Smart STB') + ' oder ' + L('/stbemu/', 'STBEmu') + ' etablierte Alternativen.</p>'),
      appSection('king-4k', 'King 4K Player', '<p>Unter dem Namen „King 4K Player“ und ähnlichen Bezeichnungen sind mehrere Apps im Umlauf. Eine eindeutige, offizielle Quelle konnten wir nicht bestätigen. Installieren Sie eine solche App nur, wenn sie im offiziellen Store Ihres Geräts gelistet ist, und prüfen Sie den Entwickler.</p>'),
      appSection('virginia', 'Virginia Player', '<p>Virginia Player ist unter anderem im App Store gelistet und wird je nach Gerät per MAC-Adresse bzw. Geräte-ID eingerichtet. Die Playlist tragen Sie auf der Website des Anbieters ein.</p>'),
      appSection('family-player', 'Family Player', '<p>Family Player ist ein weiterer MAC-basierter Player. Der Name ist allgemein und wird von mehreren Apps genutzt – prüfen Sie im Store den Entwickler und folgen Sie der Anleitung auf dessen offizieller Website.</p>'),
      appSection('mac-player', 'MAC Player', '<p>„MAC Player“ beschreibt eher das Prinzip als eine einzelne App: Es gibt mehrere Player mit diesem oder ähnlichem Namen. Entscheidend ist, dass die App aus dem offiziellen Store stammt und Sie die Playlist nur auf der Website des jeweiligen Anbieters hinterlegen.</p>'),
      appSection('hot-player', 'Hot Player', '<p>Hot Player wird für Smart-TVs und Android angeboten und ebenfalls per MAC-Adresse eingerichtet. Nach der Testphase verlangt der Anbieter eine Aktivierung. Verwechseln Sie Hot Player nicht mit IPTV-Anbietern, die ähnliche Namen nutzen – der Player selbst enthält keine Sender.</p>'),
      appSection('bay-iptv', 'Bay IPTV', '<p>Bay IPTV gehört zu den kleineren Smart-TV-Playern nach dem MAC-Prinzip. Unabhängige Angaben zu Entwickler und Funktionen sind kaum verfügbar; nutzen Sie die App nur, wenn sie im offiziellen Store gelistet ist.</p>'),
      { id: 'pruefen', h: 'Woran Sie eine seriöse Player-App erkennen', html: `${check}<p>Bei ${site.name} ist im Jahrespaket das <strong>IBO Player Pro</strong>-Abo inklusive – damit sparen Sie sich die Suche nach Alternativen. Details unter ${L('/ibo-player/', 'IBO Player')} und bei den ${L('/#preise', 'Paketen')}.</p><p class="muted">${thirdParty}</p>` },
    ],
    faq: [
      ['Sind IBOXX, IBOSS und IBO Player dieselbe App?', 'Nein. Es sind unterschiedliche Apps mit ähnlichem Prinzip und jeweils eigener Aktivierung.'],
      ['Wie richte ich eine IBO-ähnliche App ein?', 'App starten, MAC-Adresse und Device Key notieren, auf der Website des Anbieters anmelden und die Playlist hinzufügen.'],
      ['Welche dieser Apps empfehlen Sie?', 'Wir empfehlen den IBO Player bzw. IBO Player Pro, der im Jahrespaket von IPTV Genuss inklusive ist.'],
      ['Enthalten diese Apps Sender?', 'Nein. Seriöse Player enthalten keine Sender; die Inhalte kommen von Ihrem IPTV-Anbieter.'],
    ],
    related: ['/ibo-player/', '/bob-player/', '/net-iptv/', '/duplexplay/', '/iptv-samsung-tv/', '/iptv-lg-tv/'],
    keywords: ['iboxx player', 'iboss player', 'ibosol player', 'ibosol', 'ibo stb', 'king 4k player', 'virginia player', 'family player iptv', 'mac player iptv', 'hot player', 'hot player iptv', 'bay iptv', 'ibo player alternative'],
  },
  {
    path: '/weitere-iptv-player/',
    hub: 'apps',
    name: 'Weitere IPTV-Player',
    teaser: 'Room IPTV, Nanomid, Smart IPTV Xtream Player, IPTV Stream Player, LillyPlayer, Flex IPTV, Purple.',
    icon: 'play',
    title: `Weitere IPTV-Player: Room IPTV, Flex & Co. | ${site.name}`,
    description: 'Room IPTV, Nanomid, Smart IPTV Xtream Player, IPTV Stream Player, LillyPlayer, Flex IPTV und Purple IPTV Player: was sie können und wie Sie sie einrichten.',
    kicker: 'IPTV-Apps',
    h1: 'Weitere IPTV-Player: Room IPTV, Nanomid, Flex IPTV und Co.',
    lead: 'In den App-Stores gibt es Hunderte IPTV-Player, viele mit sehr ähnlichen Namen. Hier stellen wir weitere häufig gesuchte Apps vor, erklären die Einrichtung per Xtream Codes oder M3U und zeigen, worauf Sie bei der Auswahl achten sollten.',
    facts: [['Anmeldung', 'Je nach App Xtream Codes, M3U oder Geräte-ID'], ['Bezugsquelle', 'Nur offizielle App-Stores oder Entwickler-Websites'], ['Kosten', 'Unterschiedlich: kostenlos, mit Werbung, Abo oder Aktivierung']],
    schema: [softwareList('Weitere IPTV-Player', moreApps)],
    sections: [
      { id: 'einrichten-allgemein', h: 'So richten Sie diese Player ein', html: `<p>Fast alle Player unterstützen mindestens einen der beiden Standards. Mit Xtream Codes:</p>${ol(['„Playlist hinzufügen“ öffnen und <strong>Xtream Codes</strong> wählen.', 'Server-URL, Benutzername und Passwort aus unserer E-Mail eintragen.', 'Speichern und Senderliste sowie Programmführer laden lassen.'])}<p>Mit M3U fügen Sie stattdessen den ${L('/m3u-playlist/', 'M3U-Link')} ein. Zeigt die App eine Geräte-ID oder MAC-Adresse, hinterlegen Sie die Playlist auf der Website des Anbieters.</p>` },
      appSection('room-iptv', 'Room IPTV', '<p>Room IPTV ist ein Player, der unter anderem für Android angeboten wird und Playlists per M3U bzw. Xtream Codes lädt. Der Anbieter beschreibt auf seiner Website die unterstützten Geräte und die Installation. Richten Sie die App wie oben beschrieben ein.</p>'),
      appSection('nanomid', 'Nanomid Player', '<p>Nanomid Player ist im App Store gelistet. Unter dem Namen Nanomid treten im Netz auch Angebote auf, die nichts mit der App zu tun haben – achten Sie darauf, dass Sie nur die App selbst installieren und Ihre Zugangsdaten von Ihrem eigenen IPTV-Anbieter nutzen.</p>'),
      appSection('smart-iptv-xtream', 'Smart IPTV Xtream Player', '<p>„Smart IPTV Xtream Player“ ist ein Sammelname, unter dem mehrere Apps verschiedener Entwickler in den Stores stehen. Mit dem bekannten ' + L('/smart-iptv/', 'Smart IPTV (SIPTV)') + ' haben sie meist nichts zu tun. Prüfen Sie den Entwickler und wählen Sie eine App mit Xtream-Codes-Login.</p>'),
      appSection('iptv-stream-player', 'IPTV Stream Player', '<p>Auch „IPTV Stream Player“ ist ein allgemeiner Name, den mehrere Apps tragen. Funktional handelt es sich um einfache Player für M3U und Xtream Codes. Wenn Sie eine bewährte Alternative suchen, sind ' + L('/iptv-smarters-pro/', 'IPTV Smarters Pro') + ' oder ' + L('/xciptv/', 'XCIPTV') + ' eine sichere Wahl.</p>'),
      appSection('lillyplayer', 'LillyPlayer', '<p>LillyPlayer ist ein Videoplayer, der unter anderem im App Store und im Microsoft Store angeboten wird. Er ist eher ein allgemeiner Medienplayer als ein spezialisierter IPTV-Player; für Senderlisten mit Programmführer eignen sich ' + L('/vlc-iptv/', 'VLC') + ' oder echte IPTV-Apps besser.</p>'),
      appSection('flex-iptv', 'Flex IPTV', '<p>Flex IPTV ist im App Store für Apple-Geräte gelistet und spielt Playlists ab. Wer auf iPhone, iPad oder Apple TV einen vollwertigen Player mit Programmführer sucht, sollte auch ' + L('/iptvx/', 'IPTVX') + ', ' + L('/uhf-iptv/', 'UHF') + ' oder ' + L('/iplaytv/', 'iPlayTV') + ' vergleichen.</p>'),
      appSection('purple', 'Purple IPTV Player', '<p>Unter „Purple“ finden sich in den Stores mehrere IPTV-Player, etwa Varianten für Mobilgeräte und eine Lite-Version. Sie unterstützen in der Regel M3U und Xtream Codes. Prüfen Sie den Entwickler und ob die App Ihr Gerät unterstützt.</p>'),
      { id: 'auswahl', h: 'Woran Sie einen guten IPTV-Player erkennen', html: `${check}<p>Wenn Sie unsicher sind, nehmen Sie eine der etablierten Apps aus unserer Übersicht ${L('/iptv-apps/', 'IPTV-Apps')} – oder schreiben Sie uns, welches Gerät Sie haben. Wir empfehlen Ihnen die passende App.</p><p class="muted">${thirdParty}</p>` },
    ],
    faq: [
      ['Ist „Smart IPTV Xtream Player“ dasselbe wie Smart IPTV?', 'Meist nicht. Unter diesem Namen stehen verschiedene Apps anderer Entwickler in den Stores.'],
      ['Welcher Player ist der beste?', 'Das hängt vom Gerät ab. Bewährt sind TiviMate und Smarters auf Android, IPTVX und UHF auf Apple sowie IBO Player auf Smart-TVs.'],
      ['Wie erkenne ich eine unseriöse IPTV-App?', 'Wenn sie mit vorinstallierten Sendern wirbt, nicht im offiziellen Store steht oder nur über Links aus Foren erhältlich ist.'],
    ],
    related: ['/iptv-apps/', '/iptv-smarters-pro/', '/iptvx/', '/ibo-player-alternativen/', '/m3u-playlist/', '/xtream-codes/'],
    keywords: ['room iptv', 'nanomid player', 'nanomid', 'smart iptv xtream player', 'iptv stream player', 'lillyplayer', 'lilly player', 'flex iptv', 'purple iptv player', 'purple player'],
  },
];
