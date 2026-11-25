// IPTV Smarters Pro by device (November 2026 keyword-gap pass).
// Each page answers one device-specific search cluster ("iptv smarters pro
// fire tv stick", "... samsung tv", "... windows download" etc.) with steps,
// settings and fixes for that platform only. The pillar /iptv-smarters-pro/
// lists all of them (hub 'smarters'). Third-party app facts are hedged.
import { site, plans, devicePrices } from '../site.mjs';
import { L, ol, stand } from './util.mjs';

const updated = '2026-11-25';
const maxDevices = Math.max(...Object.keys(devicePrices).map(Number));
const bonus = plans.find((p) => p.bonus);
const note = `IPTV Smarters Pro ist eine App des Entwicklers WHMCS Smarters und enthält selbst keine Sender. Wir stehen in keiner Verbindung zum Entwickler. Verfügbarkeit, Menünamen und Preise der App können sich ändern (Stand: ${stand}).`;
const app = (os) => ({ name: 'IPTV Smarters Pro', os });
const howTo = (path, name, list) => ({
  '@type': 'HowTo',
  '@id': `${site.url}${path}#anleitung`,
  name,
  inLanguage: site.lang,
  step: list.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, text: s.replace(/<[^>]+>/g, '') })),
});
const fixes = (list) => `<ul>${list.map(([p, f]) => `<li><strong>${p}:</strong> ${f}</li>`).join('')}</ul>`;
const login = [
  'Starten Sie IPTV Smarters Pro und bestätigen Sie die Nutzungsbedingungen.',
  'Wählen Sie <strong>„Login with Xtream Codes API“</strong>.',
  `Tragen Sie bei „Any Name“ einen Namen ein, zum Beispiel „${site.name}“.`,
  'Geben Sie <strong>Benutzername</strong>, <strong>Passwort</strong> und die <strong>Server-URL</strong> (mit <code>http://</code> und Port) aus unserer E-Mail ein.',
  'Tippen Sie auf <strong>„Add User“</strong> und warten Sie, bis Live-TV, Filme, Serien und Programmführer geladen sind.',
];
const support = `Hängt es an den Zugangsdaten oder am Programmführer, hilft Ihnen unser deutscher Support${site.email ? ` unter <a href="mailto:${site.email}">${site.email}</a>` : ''} – auch während des ${L('/iptv-testen/', 'kostenlosen Tests')}.`;

export default [
  // ── Fire TV Stick ───────────────────────────────────────────────────
  {
    path: '/iptv-smarters-pro-fire-tv-stick/',
    hub: 'smarters',
    published: updated,
    updated,
    name: 'Smarters Pro auf dem Fire TV Stick',
    teaser: 'IPTV Smarters Pro auf dem Firestick installieren, einloggen und Ruckler beheben.',
    icon: 'stick',
    title: `IPTV Smarters Pro Fire TV Stick: Installation | ${site.name}`,
    description: 'IPTV Smarters Pro auf dem Fire TV Stick installieren: Appstore oder Downloader, Login per Xtream Codes, beste Einstellungen und Lösungen bei Fehlern.',
    kicker: 'IPTV Smarters Pro',
    h1: 'IPTV Smarters Pro auf dem Fire TV Stick installieren und einrichten',
    lead: `IPTV Smarters Pro auf dem Fire TV Stick ist ein einfacher Einstieg in IPTV: Der Stick kostet wenig, steckt unsichtbar hinter dem Fernseher, und die App ist in wenigen Minuten eingerichtet. Diese Anleitung zeigt, wie Sie die App auf den Firestick bringen – über den Amazon Appstore oder, falls sie dort fehlt, sicher mit der Downloader-App –, wie Sie sich anmelden und was Sie tun, wenn es hakt.`,
    facts: [
      ['Geeignete Geräte', 'Fire TV Stick HD, Lite, 4K, 4K Max, Fire TV Cube (Fire OS)'],
      ['Nicht geeignet', 'Fire-TV-Geräte mit Vega OS – sie führen keine Android-Apps aus'],
      ['Installation', 'Amazon Appstore, sonst Downloader-App mit der Adresse des Entwicklers'],
      ['Anmeldung', 'Xtream Codes API oder M3U-Link'],
      ['Dauer', 'rund 10 Minuten inklusive erstem Laden der Senderliste'],
    ],
    app: app('Fire OS'),
    schema: [howTo('/iptv-smarters-pro-fire-tv-stick/', 'IPTV Smarters Pro auf dem Fire TV Stick installieren', [
      'Im Amazon Appstore nach IPTV Smarters Pro suchen.',
      'Falls nicht gelistet: Downloader-App installieren.',
      'Entwickleroptionen freischalten und Downloader Apps unbekannter Herkunft erlauben.',
      'Download-Adresse von der offiziellen Website des Entwicklers in Downloader eingeben und installieren.',
      'App starten und mit Xtream Codes anmelden.',
    ])],
    sections: [
      { id: 'modell', h: 'Welcher Fire TV Stick eignet sich für IPTV Smarters Pro?', html: `
<p>Entscheidend ist nicht das Alter des Sticks, sondern das Betriebssystem. Alle Fire-TV-Geräte mit <strong>Fire OS</strong> – also Fire TV Stick HD, Lite, 4K, 4K Max und der Fire TV Cube – basieren auf Android und können IPTV Smarters Pro ausführen. Amazon bringt inzwischen aber auch Geräte mit dem eigenen Betriebssystem <strong>Vega OS</strong> heraus. Darauf laufen keine Android-Apps und damit auch kein IPTV Smarters Pro. Welches System Ihr Stick nutzt, sehen Sie unter <em>Einstellungen › Mein Fire TV › Info</em>.</p>
<p>Für flüssiges Live-TV empfehlen wir den Fire TV Stick 4K oder 4K Max: Sie haben mehr Arbeitsspeicher, unterstützen schnelleres WLAN und dekodieren 4K-Streams zuverlässiger. Der Lite reicht für HD. Details zu den Modellen finden Sie unter ${L('/iptv-fire-tv-stick/', 'IPTV auf dem Fire TV Stick')} und ${L('/iptv-fire-tv-stick-4k-max/', 'Fire TV Stick 4K Max')}.</p>` },
      { id: 'appstore', h: 'Weg 1: IPTV Smarters Pro aus dem Amazon Appstore', html: `
<p>Probieren Sie immer zuerst den offiziellen Weg. Ob IPTV Smarters Pro im Appstore steht, hängt vom Land und vom Zeitpunkt ab – die Listung wechselt.</p>
${ol([
  'Drücken Sie auf der Fernbedienung die <strong>Home-Taste</strong> und wählen Sie die <strong>Lupe</strong> (Suchen).',
  'Tippen Sie „IPTV Smarters“ ein und achten Sie in den Ergebnissen auf den Entwickler <strong>WHMCS Smarters</strong>.',
  'Wählen Sie <strong>„Herunterladen“</strong> bzw. <strong>„Laden“</strong>. Die App erscheint danach unter <em>Apps</em>.',
])}
<p>Finden Sie die App nicht oder nur Apps mit ähnlichem Namen von anderen Entwicklern, nehmen Sie Weg 2.</p>` },
      { id: 'downloader', h: 'Weg 2: IPTV Smarters Pro mit der Downloader-App installieren', html: `
<p>Die kostenlose <strong>Downloader</strong>-App steht im Amazon Appstore und lädt Installationsdateien direkt auf den Stick. Damit das klappt, muss Fire OS die Installation aus dieser Quelle erlauben:</p>
${ol([
  'Installieren Sie <strong>Downloader</strong> über die Suche im Appstore.',
  'Öffnen Sie <em>Einstellungen › Mein Fire TV</em>. Fehlt dort der Punkt <strong>Entwickleroptionen</strong>, gehen Sie auf <em>Info</em> und drücken Sie siebenmal auf den Namen Ihres Fire TV – dann erscheint das Menü.',
  'Unter <em>Entwickleroptionen › Apps unbekannter Herkunft installieren</em> schalten Sie <strong>Downloader</strong> auf „Ein“.',
  'Öffnen Sie Downloader und geben Sie die Download-Adresse ein, die der Entwickler <strong>auf seiner offiziellen Website</strong> für Android bzw. Fire TV angibt.',
  'Bestätigen Sie die Installation und wählen Sie danach „Delete“, um die Installationsdatei zu löschen und Speicher zu sparen.',
])}
<p><strong>Wichtig:</strong> Verwenden Sie keine Kurzcodes oder Download-Links aus Videos, Foren oder Chats. Manipulierte Installationsdateien sind das größte Sicherheitsrisiko auf dem Firestick. Ausführlich erklärt: ${L('/iptv-downloader/', 'Downloader-App sicher nutzen')}.</p>` },
      { id: 'login', h: 'Anmelden mit Xtream Codes', html: `${ol(login)}<p>Mit der Fernbedienung tippen Sie am schnellsten über die Bildschirmtastatur. Noch bequemer: die kostenlose Fire-TV-App auf dem Smartphone, deren Tastatur Text direkt an den Stick sendet. Wer lieber eine Playlist-Adresse nutzt, wählt „Load Your Playlist or File/URL“ – die Unterschiede erklärt ${L('/xtream-codes/', 'Xtream Codes vs. M3U')}.</p>` },
      { id: 'einstellungen', h: 'Die besten Einstellungen für den Firestick', html: `
<ul>
  <li><strong>Player:</strong> Unter <em>Settings › Player Selection</em> den internen Player lassen. Ruckelt ein Sender, testweise einen externen Player wie VLC wählen.</li>
  <li><strong>Programmführer:</strong> Unter <em>Settings › EPG</em> das Aktualisieren beim Start aktivieren; bei sehr großen Senderlisten lieber manuell einmal am Tag.</li>
  <li><strong>Bildwiederholrate:</strong> In den Fire-TV-Einstellungen unter <em>Display & Sounds › Anzeige</em> die Anpassung an die Originalbildrate einschalten (Bezeichnung je nach Fire-OS-Version). Sportübertragungen laufen dann gleichmäßiger.</li>
  <li><strong>Speicher:</strong> Der Firestick hat nur wenige Gigabyte frei. Unter <em>Einstellungen › Anwendungen › Installierte Anwendungen verwalten</em> regelmäßig den Cache von IPTV Smarters Pro leeren und ungenutzte Apps löschen.</li>
</ul>` },
      { id: 'probleme', h: 'IPTV Smarters Pro auf dem Firestick funktioniert nicht?', html: `${fixes([
  ['„App nicht installiert“', 'meist zu wenig Speicher oder Downloader ist nicht als Quelle erlaubt. Cache anderer Apps leeren, Berechtigung unter Entwickleroptionen prüfen.'],
  ['App nicht im Appstore', 'normal – die Listung wechselt. Installieren Sie über Weg 2 oder nutzen Sie eine Alternative wie TiviMate oder XCIPTV.'],
  ['Bild stockt bei Live-TV', 'Stick per USB-Netzteil statt am TV-USB-Port betreiben, WLAN auf 5 GHz umstellen oder einen Ethernet-Adapter nutzen.'],
  ['„Invalid credentials“ oder Login hängt', 'Server-URL vollständig mit <code>http://</code> und Port eintragen, Groß- und Kleinschreibung beim Passwort prüfen.'],
  ['Programmführer leer', 'EPG unter Settings manuell aktualisieren und unter <em>Einstellungen › Einstellungen › Datum und Uhrzeit</em> die Zeitzone prüfen.'],
])}<p>${support} Weitere Lösungen unter ${L('/iptv-probleme/', 'IPTV-Probleme beheben')}.</p><p class="muted">${note}</p>` },
      { id: 'alternativen', h: 'Alternativen auf dem Fire TV Stick', html: `<p>Wer einen Programmführer im Stil eines klassischen Receivers möchte, nimmt ${L('/tivimate-fire-tv-stick/', 'TiviMate auf dem Fire TV Stick')}. Kostenlos und schlank ist ${L('/xciptv/', 'XCIPTV')}. Im ${bonus ? 'Jahrespaket' : 'Paket'} von ${site.name} ist außerdem ${bonus ? `${L('/ibo-player/', bonus.bonusName)} inklusive` : `der ${L('/ibo-player/', 'IBO Player')} nutzbar`}. Alle Optionen für Android im Vergleich: ${L('/iptv-player-android/', 'die besten IPTV-Player für Android')}.</p>` },
    ],
    faq: [
      ['Ist IPTV Smarters Pro auf dem Fire TV Stick kostenlos?', 'Die App selbst ist in der Grundversion kostenlos. Für Sender und Filme benötigen Sie einen IPTV-Zugang, zum Beispiel ein Paket von IPTV Genuss.'],
      ['Warum finde ich IPTV Smarters Pro nicht im Amazon Appstore?', 'Die Listung wechselt je nach Land und Zeitpunkt. Dann installieren Sie die App mit der Downloader-App von der offiziellen Website des Entwicklers.'],
      ['Läuft IPTV Smarters Pro auf jedem Fire TV Stick?', 'Auf allen Geräten mit Fire OS ja. Fire-TV-Geräte mit Vega OS unterstützen keine Android-Apps.'],
      ['Ist die Installation über Downloader sicher?', 'Ja, wenn Sie die Datei ausschließlich von der offiziellen Website des Entwicklers laden. Meiden Sie Codes und Links aus Videos oder Foren.'],
      ['Wie viele Fire TV Sticks kann ich gleichzeitig nutzen?', `Das regelt Ihr IPTV-Paket. Bei ${site.name} wählen Sie 1 bis ${maxDevices} gleichzeitig genutzte Geräte.`],
    ],
    related: ['/iptv-smarters-pro/', '/iptv-fire-tv-stick/', '/iptv-downloader/', '/tivimate-fire-tv-stick/', '/iptv-smarters-pro-android/', '/iptv-testen/'],
    keywords: ['iptv smarters pro fire tv stick', 'iptv smarters pro firestick', 'iptv smarters pro fire stick', 'iptv smarters fire stick', 'iptv smarters firestick', 'iptv smarters on firestick', 'smarters pro firestick'],
  },

  // ── Samsung TV ──────────────────────────────────────────────────────
  {
    path: '/iptv-smarters-pro-samsung-tv/',
    hub: 'smarters',
    published: updated,
    updated,
    name: 'Smarters Pro auf Samsung TV',
    teaser: 'IPTV Smarters Pro auf Samsung-Fernsehern (Tizen): Store, Alternativen, Stick-Lösung.',
    icon: 'tv',
    title: `IPTV Smarters Pro auf Samsung TV (Tizen) | ${site.name}`,
    description: 'IPTV Smarters Pro auf dem Samsung TV: so prüfen Sie den Tizen-Store, richten die App ein und welche Alternativen laufen, wenn sie fehlt. Mit Fehlerhilfe.',
    kicker: 'IPTV Smarters Pro',
    h1: 'IPTV Smarters Pro auf dem Samsung TV: Installation und Alternativen',
    lead: 'Wer IPTV Smarters Pro auf dem Samsung TV nutzen möchte, stößt oft auf dieselbe Frage: Warum finde ich die App nicht? Samsung-Fernseher laufen mit dem Betriebssystem Tizen, und welche IPTV-Apps im Samsung-Store stehen, hängt von Modelljahr und Land ab. Hier sehen Sie, wie Sie das schnell prüfen, wie die Einrichtung abläuft und welche drei Wege sicher zum Ziel führen.',
    facts: [
      ['Betriebssystem', 'Tizen (Samsung Smart Hub)'],
      ['Verfügbarkeit', 'Wechselnd, je nach Modelljahr und Land'],
      ['Wenn die App fehlt', 'IBO Player, SS IPTV, Flix IPTV oder ein Streaming-Stick am HDMI'],
      ['Anmeldung', 'Xtream Codes API oder M3U-Link'],
    ],
    app: app('Tizen'),
    schema: [howTo('/iptv-smarters-pro-samsung-tv/', 'IPTV Smarters Pro auf dem Samsung TV einrichten', [
      'Smart Hub öffnen und unter Apps nach IPTV Smarters suchen.',
      'App installieren und starten.',
      'Login with Xtream Codes API wählen.',
      'Benutzername, Passwort und Server-URL eingeben.',
      'Add User wählen und Senderliste laden lassen.',
    ])],
    sections: [
      { id: 'pruefen', h: 'Gibt es IPTV Smarters Pro für Samsung-Fernseher?', html: `
<p>Kurz: manchmal. Der Entwickler hat IPTV Smarters Pro zeitweise im Samsung-Store angeboten, die Listung ist aber nicht auf allen Modellen und in allen Ländern dauerhaft vorhanden. So prüfen Sie es in einer Minute:</p>
${ol([
  'Drücken Sie die <strong>Home-Taste</strong> und öffnen Sie <strong>Apps</strong>.',
  'Wählen Sie oben rechts die <strong>Lupe</strong> und suchen Sie „IPTV Smarters“.',
  'Erscheint die App mit dem Entwickler WHMCS Smarters, installieren Sie sie. Erscheinen nur ähnlich benannte Apps anderer Anbieter, nutzen Sie lieber eine der Alternativen unten.',
])}
<p>Tipp: Das Store-Angebot richtet sich nach dem eingestellten Land. Ist Ihr Fernseher auf ein anderes Land eingestellt (etwa nach einem Import), sehen Sie andere Apps als in Deutschland.</p>` },
      { id: 'einrichten', h: 'IPTV Smarters Pro auf dem Samsung TV einrichten', html: `${ol(login)}<p>Die Eingabe mit der Samsung-Fernbedienung ist mühsam. Schneller geht es mit einer USB-Tastatur am Fernseher oder über die SmartThings-App auf dem Smartphone, die eine Tastatur für den Fernseher bereitstellt.</p>` },
      { id: 'alternativen', h: 'Wenn die App fehlt: drei sichere Wege', html: `
<p><strong>1. Eine Tizen-App mit Playlist per Website.</strong> Apps wie ${L('/ibo-player/', 'IBO Player')}, ${L('/ss-iptv/', 'SS IPTV')}, ${L('/flix-iptv/', 'Flix IPTV')} oder ${L('/set-iptv/', 'Set IPTV')} laufen auf vielen Samsung-Modellen. Sie zeigen eine MAC-Adresse oder einen Code an; die Playlist hinterlegen Sie bequem am Handy auf der Website des App-Anbieters.${bonus ? ` Der ${bonus.bonusName} ist im Jahrespaket von ${site.name} bereits inklusive.` : ''}</p>
<p><strong>2. Ein Streaming-Stick am HDMI-Anschluss.</strong> Ein ${L('/iptv-smarters-pro-fire-tv-stick/', 'Fire TV Stick mit IPTV Smarters Pro')} oder ein Gerät mit Google TV bringt die volle Smarters-Oberfläche auf jeden Samsung-Fernseher – auch auf ältere Modelle ohne passende App.</p>
<p><strong>3. Bildschirm spiegeln.</strong> Viele neuere Samsung-Modelle unterstützen AirPlay. Damit lässt sich ${L('/iptv-smarters-pro-iphone-apple-tv/', 'IPTV Smarters vom iPhone')} auf den Fernseher übertragen. Für den Alltag ist das weniger bequem als eine App direkt auf dem Fernseher.</p>
<p>Welche Apps auf welchem Samsung-Modell laufen, zeigt unsere Übersicht ${L('/iptv-samsung-tv/', 'IPTV auf dem Samsung TV')}.</p>` },
      { id: 'netzwerk', h: 'Samsung-Fernseher: Netzwerk richtig einstellen', html: `
<p>Viele Samsung-Fernseher haben einen LAN-Anschluss mit 100 Mbit/s. Das klingt wenig, reicht aber locker: Für ${L('/iptv-4k/', '4K-IPTV')} sind rund 25 Mbit/s nötig. Ein Kabel ist fast immer stabiler als WLAN, weil es Aussetzer durch Nachbarnetze vermeidet. Nutzen Sie WLAN, verbinden Sie den Fernseher mit dem 5-GHz-Netz Ihres Routers. Den Verbindungsstatus prüfen Sie unter <em>Einstellungen › Allgemein › Netzwerk › Netzwerkstatus</em>.</p>` },
      { id: 'probleme', h: 'Häufige Fehler auf dem Samsung TV', html: `${fixes([
  ['App startet nicht mehr', 'Fernseher vollständig vom Strom trennen (30 Sekunden), danach App neu starten. Hilft das nicht, die App löschen und neu installieren.'],
  ['App ist nach einem Update verschwunden', 'Samsung entfernt gelegentlich Apps aus dem Store. Bereits installierte Apps laufen oft weiter; sonst einen der drei Wege oben wählen.'],
  ['Kein Ton bei manchen Sendern', 'In den Toneinstellungen des Fernsehers das Audioformat für digitale Ausgabe auf „Auto“ bzw. PCM stellen.'],
  ['Senderliste lädt sehr lange', 'Beim ersten Start normal. Dauert es mehrmals über fünf Minuten, Netzwerk per Kabel testen und Router neu starten.'],
])}<p>${support}</p><p class="muted">${note}</p>` },
    ],
    faq: [
      ['Warum finde ich IPTV Smarters Pro nicht im Samsung-Store?', 'Die Listung hängt von Modelljahr und Land ab und wechselt. Alternativen sind IBO Player, SS IPTV oder ein Fire TV Stick mit IPTV Smarters Pro.'],
      ['Welche App ist die beste Alternative auf dem Samsung TV?', `Für die meisten Nutzer der IBO Player: Einrichtung per MAC-Adresse, übersichtliche Oberfläche${bonus ? ` – und im Jahrespaket von ${site.name} inklusive` : ''}.`],
      ['Kann ich IPTV Smarters Pro auf dem Samsung TV per USB installieren?', 'Tizen erlaubt keine einfache Installation fremder Apps per USB wie Android. Nutzen Sie den Store, eine Alternative oder einen Streaming-Stick.'],
      ['Läuft IPTV Smarters Pro auf älteren Samsung-Fernsehern?', 'Auf älteren Modellen meist nicht. Dort ist ein Streaming-Stick am HDMI-Anschluss die zuverlässigste Lösung.'],
    ],
    related: ['/iptv-smarters-pro/', '/iptv-samsung-tv/', '/ibo-player/', '/iptv-smarters-pro-fire-tv-stick/', '/iptv-smarters-pro-lg-tv/', '/iptv-smart-tv/'],
    keywords: ['iptv smarters pro samsung tv', 'iptv smarters samsung tv', 'iptv smarters samsung', 'iptv smarters pro samsung'],
  },

  // ── LG TV ───────────────────────────────────────────────────────────
  {
    path: '/iptv-smarters-pro-lg-tv/',
    hub: 'smarters',
    published: updated,
    updated,
    name: 'Smarters Pro auf LG TV',
    teaser: 'IPTV Smarters Pro auf LG-Fernsehern mit webOS: Store prüfen, einrichten, Alternativen.',
    icon: 'tv',
    title: `IPTV Smarters Pro auf LG TV (webOS) einrichten | ${site.name}`,
    description: 'IPTV Smarters Pro auf dem LG TV: Verfügbarkeit im LG Content Store prüfen, App einrichten, Quick Start+ und Land beachten und Alternativen nutzen.',
    kicker: 'IPTV Smarters Pro',
    h1: 'IPTV Smarters Pro auf dem LG TV mit webOS einrichten',
    lead: 'IPTV Smarters Pro auf dem LG TV funktioniert, wenn die App im Store Ihres Fernsehers gelistet ist. LG-Fernseher nutzen das Betriebssystem webOS; den App-Store finden Sie je nach Version als „LG Content Store“ oder einfach als „Apps“. Diese Anleitung zeigt die Einrichtung, zwei LG-typische Stolperfallen und die besten Alternativen.',
    facts: [
      ['Betriebssystem', 'webOS (LG Content Store bzw. „Apps“)'],
      ['Verfügbarkeit', 'Wechselnd, je nach webOS-Version und Land'],
      ['Wenn die App fehlt', 'IBO Player, Smart IPTV, SS IPTV oder ein Streaming-Stick'],
      ['Anmeldung', 'Xtream Codes API oder M3U-Link'],
    ],
    app: app('webOS'),
    schema: [howTo('/iptv-smarters-pro-lg-tv/', 'IPTV Smarters Pro auf dem LG TV einrichten', [
      'Im LG Content Store nach IPTV Smarters suchen.',
      'App installieren und starten.',
      'Login with Xtream Codes API wählen.',
      'Benutzername, Passwort und Server-URL eingeben.',
      'Add User wählen und Senderliste laden lassen.',
    ])],
    sections: [
      { id: 'store', h: 'IPTV Smarters Pro im LG Content Store finden', html: `
${ol([
  'Drücken Sie die <strong>Home-Taste</strong> (Haus-Symbol) auf der Magic Remote.',
  'Öffnen Sie <strong>Apps</strong> bzw. <strong>LG Content Store</strong>.',
  'Wählen Sie die Suche und geben Sie „IPTV Smarters“ ein.',
  'Ist die App des Entwicklers WHMCS Smarters gelistet, wählen Sie <strong>Installieren</strong>.',
])}
<p>Mit der Magic Remote zeigen Sie wie mit einer Maus auf die Bildschirmtastatur – das macht die Eingabe der Zugangsdaten deutlich bequemer als bei vielen anderen Marken.</p>` },
      { id: 'einrichten', h: 'Einrichten mit Xtream Codes', html: `${ol(login)}<p>Alternativ funktioniert die Anmeldung per M3U-Link. Den Unterschied erklärt ${L('/xtream-codes/', 'Xtream Codes vs. M3U')}.</p>` },
      { id: 'lg-tipps', h: 'Zwei LG-Einstellungen, die oft Probleme machen', html: `
<p><strong>Quick Start+:</strong> Mit dieser Funktion schaltet der Fernseher schneller ein, weil er nicht ganz herunterfährt. Apps behalten dabei aber ihren alten Zustand – nach einem Senderupdate oder bei Verbindungsproblemen hilft dann kein Neustart der App. Schalten Sie Quick Start+ unter <em>Einstellungen › Allgemein › Gerät</em> (je nach webOS-Version auch unter <em>Allgemein › System</em>) testweise aus.</p>
<p><strong>LG-Services-Land:</strong> Welche Apps der Store zeigt, richtet sich nach dem Land, das unter <em>Allgemein › System › Ort</em> als „LG Services-Land“ eingestellt ist. Steht hier nicht Deutschland, sehen Sie ein anderes App-Angebot.</p>` },
      { id: 'alternativen', h: 'Alternativen, wenn Smarters fehlt', html: `
<p>Auf LG-Fernsehern laufen mehrere bewährte IPTV-Apps, die ihre Playlist über die Website des App-Anbieters erhalten: ${L('/ibo-player/', 'IBO Player')}${bonus ? ' (im Jahrespaket inklusive)' : ''}, ${L('/smart-iptv/', 'Smart IPTV')}, ${L('/ss-iptv/', 'SS IPTV')} und ${L('/net-iptv/', 'Net IPTV')}. Wer die volle Smarters-Oberfläche möchte, steckt einen ${L('/iptv-smarters-pro-fire-tv-stick/', 'Fire TV Stick mit IPTV Smarters Pro')} an den HDMI-Anschluss. Eine Übersicht aller LG-Apps finden Sie unter ${L('/iptv-lg-tv/', 'IPTV auf dem LG TV')}.</p>` },
      { id: 'probleme', h: 'Häufige Fehler auf LG-Fernsehern', html: `${fixes([
  ['App lädt nach dem Einschalten nicht mehr', 'Quick Start+ ausschalten oder den Fernseher einmal vom Strom trennen.'],
  ['App nicht im Store', 'LG-Services-Land prüfen; ist es korrekt, eine der Alternativen nutzen.'],
  ['Bild bleibt kurz schwarz beim Umschalten', 'bei LG-Fernsehern normal, solange es nur ein bis zwei Sekunden dauert. Länger: Netzwerk per Kabel testen.'],
  ['Programmführer zeigt falsche Uhrzeit', 'unter <em>Allgemein › System › Zeit & Timer</em> die automatische Zeit aktivieren.'],
])}<p>${support}</p><p class="muted">${note}</p>` },
    ],
    faq: [
      ['Gibt es IPTV Smarters Pro für LG-Fernseher?', 'Zeitweise ja, im LG Content Store. Die Listung hängt von webOS-Version und Land ab. Prüfen Sie den Store; sonst nutzen Sie IBO Player oder Smart IPTV.'],
      ['Was ist Quick Start+ und warum sollte ich es ausschalten?', 'Quick Start+ lässt den Fernseher nicht ganz herunterfahren. Apps behalten dadurch alte Zustände; bei Problemen hilft das Ausschalten.'],
      ['Welche IPTV-App ist auf LG am einfachsten?', 'Apps mit Playlist per Website wie IBO Player oder Smart IPTV: Sie tragen die Zugangsdaten am Handy ein statt mit der Fernbedienung.'],
      ['Läuft IPTV Smarters Pro auf alten LG-Fernsehern mit NetCast?', 'Nein. Ältere LG-Modelle mit NetCast unterstützen moderne IPTV-Apps kaum. Ein Streaming-Stick am HDMI ist dort die beste Lösung.'],
    ],
    related: ['/iptv-smarters-pro/', '/iptv-lg-tv/', '/ibo-player/', '/smart-iptv/', '/iptv-smarters-pro-samsung-tv/', '/iptv-smart-tv/'],
    keywords: ['iptv smarters pro lg', 'iptv smarters lg tv', 'iptv smarters lg', 'iptv smarters pro lg tv'],
  },

  // ── Windows & Mac ───────────────────────────────────────────────────
  {
    path: '/iptv-smarters-pro-pc/',
    hub: 'smarters',
    published: updated,
    updated,
    name: 'Smarters Pro für Windows & Mac',
    teaser: 'IPTV Smarters Pro für Windows herunterladen, auf dem Mac installieren und einrichten.',
    icon: 'laptop',
    title: `IPTV Smarters Pro für Windows & Mac: Download | ${site.name}`,
    description: 'IPTV Smarters Pro für Windows herunterladen und auf PC, Laptop und Mac installieren: sichere Quelle, SmartScreen und Gatekeeper, Login und Fehlerhilfe.',
    kicker: 'IPTV Smarters Pro',
    h1: 'IPTV Smarters Pro für Windows und Mac: Download und Einrichtung',
    lead: 'Den IPTV Smarters Pro Windows Download gibt es nicht im Microsoft Store, sondern auf der offiziellen Website des Entwicklers – ebenso eine Version für den Mac. Hier erfahren Sie, wie Sie die richtige Datei finden, warum Windows oder macOS beim ersten Start warnen, wie Sie sich anmelden und welche Alternativen am Computer oft sogar besser laufen.',
    facts: [
      ['Windows', 'Installationsdatei von der offiziellen Website des Entwicklers'],
      ['Mac / MacBook', 'Offizielle Website bzw. App Store, je nach Version'],
      ['Anmeldung', 'Xtream Codes API oder M3U-Link'],
      ['Alternativen', 'VLC, MyIPTV Player, IPTVnator, Kodi'],
    ],
    app: app('Windows, macOS'),
    schema: [howTo('/iptv-smarters-pro-pc/', 'IPTV Smarters Pro unter Windows installieren', [
      'Offizielle Website des Entwicklers öffnen und die Windows-Version herunterladen.',
      'Installationsdatei starten und die Installation bestätigen.',
      'App öffnen und Login with Xtream Codes API wählen.',
      'Benutzername, Passwort und Server-URL eingeben.',
      'Add User wählen und Senderliste laden lassen.',
    ])],
    sections: [
      { id: 'download', h: 'IPTV Smarters Pro für Windows herunterladen', html: `
${ol([
  'Öffnen Sie die <strong>offizielle Website von IPTV Smarters</strong> (Entwickler WHMCS Smarters) und wählen Sie den Download-Bereich.',
  'Laden Sie die Version für <strong>Windows</strong> herunter. Achten Sie darauf, dass die Datei wirklich von dieser Website stammt – nicht von einem Download-Portal.',
  'Starten Sie die Datei. Zeigt Windows „Der Computer wurde durch Windows geschützt“ (SmartScreen), wählen Sie <em>Weitere Informationen › Trotzdem ausführen</em> – aber nur, wenn Sie die Datei selbst von der offiziellen Website geladen haben.',
  'Folgen Sie dem Installationsassistenten. Fragt die Windows-Firewall nach Netzwerkzugriff, erlauben Sie ihn für private Netzwerke.',
])}
<p>Seien Sie bei Suchergebnissen vorsichtig: Unter „IPTV Smarters Pro Windows Download“ tauchen viele Seiten auf, die veraltete oder veränderte Dateien anbieten. Ein Virenscan ersetzt nicht die richtige Quelle.</p>` },
      { id: 'mac', h: 'IPTV Smarters Pro auf dem Mac und MacBook', html: `
<p>Für macOS bietet der Entwickler je nach Zeitpunkt eine Version auf seiner Website oder eine Variante im Mac App Store an (teils als „Smarters Player Lite“, siehe ${L('/smarters-player-lite/', 'Smarters Player Lite')}). Aus dem App Store installiert sich die App wie gewohnt. Bei einer heruntergeladenen Datei ziehen Sie die App in den Ordner <em>Programme</em>. Meldet macOS beim ersten Öffnen, dass die App nicht überprüft werden kann, öffnen Sie <em>Systemeinstellungen › Datenschutz & Sicherheit</em> und wählen Sie dort <strong>„Dennoch öffnen“</strong>. Auf MacBooks mit Apple-Chip laufen auch viele iPad-Apps – mehr dazu unter ${L('/iptv-macbook/', 'IPTV auf dem MacBook')}.</p>` },
      { id: 'login', h: 'Anmelden und loslegen', html: `${ol(login)}<p>Am Computer kopieren Sie die Zugangsdaten am einfachsten direkt aus unserer E-Mail – so vermeiden Sie Tippfehler bei Server-URL und Passwort.</p>` },
      { id: 'tipps', h: 'Tipps für IPTV am PC und Laptop', html: `
<ul>
  <li><strong>Vollbild:</strong> Doppelklick auf das Bild schaltet in den Vollbildmodus, Esc beendet ihn.</li>
  <li><strong>Zweiter Monitor:</strong> Ziehen Sie das Fenster auf den zweiten Bildschirm oder den per HDMI angeschlossenen Fernseher und starten Sie dort den Vollbildmodus.</li>
  <li><strong>Energiesparen:</strong> Laptops drosseln im Akkubetrieb oft die Grafikleistung. Für 4K-Streams das Netzteil anschließen.</li>
  <li><strong>Netzwerk:</strong> Ein LAN-Kabel ist stabiler als WLAN, besonders bei Live-Sport.</li>
</ul>` },
      { id: 'probleme', h: 'IPTV Smarters Pro am PC funktioniert nicht?', html: `${fixes([
  ['Schwarzes Bild, Ton läuft', 'Grafiktreiber aktualisieren und in der App den Player wechseln (Settings › Player Selection).'],
  ['Kein Ton bei einzelnen Sendern', 'Manche Sender nutzen Dolby-Ton. Testen Sie denselben Sender in VLC; spielt VLC ihn mit Ton, liegt es am Player der App.'],
  ['App startet nicht nach Windows-Update', 'App deinstallieren, die aktuelle Version von der offiziellen Website laden und neu installieren.'],
  ['Login schlägt fehl', 'Server-URL mit <code>http://</code> und Port kopieren, Leerzeichen am Ende entfernen.'],
])}<p>${support}</p><p class="muted">${note}</p>` },
      { id: 'alternativen', h: 'Alternativen am Computer', html: `<p>Am PC gibt es Player, die schlanker sind und keine Installation aus fremden Quellen brauchen: ${L('/vlc-iptv/', 'VLC')} spielt M3U-Listen direkt ab, ${L('/myiptv-player/', 'MyIPTV Player')} kommt aus dem Microsoft Store, ${L('/iptvnator/', 'IPTVnator')} ist Open Source für Windows, macOS und Linux, und ${L('/kodi-iptv/', 'Kodi')} bietet ein komplettes Mediacenter. Alle Möglichkeiten zeigt ${L('/iptv-pc/', 'IPTV am PC und Mac')}. Warum ein Webbrowser allein meist nicht reicht, erklärt ${L('/iptv-im-browser/', 'IPTV im Browser')}.</p>` },
    ],
    faq: [
      ['Wo kann ich IPTV Smarters Pro für Windows sicher herunterladen?', 'Nur auf der offiziellen Website des Entwicklers WHMCS Smarters. Download-Portale bieten oft veraltete oder veränderte Dateien an.'],
      ['Gibt es IPTV Smarters Pro im Microsoft Store?', 'Nach unserem Stand nicht. Aus dem Microsoft Store können Sie stattdessen zum Beispiel MyIPTV Player installieren.'],
      ['Warum warnt Windows beim Installieren?', 'SmartScreen warnt bei Programmen, die selten heruntergeladen werden. Stammt die Datei von der offiziellen Website, können Sie über „Weitere Informationen“ fortfahren.'],
      ['Läuft IPTV Smarters Pro auf dem MacBook?', 'Ja, über die Version des Entwicklers bzw. den App Store. Alternativ eignen sich IPTVX oder VLC.'],
      ['Zählt der PC als eigenes Gerät in meinem Paket?', `Ja. Jedes gleichzeitig genutzte Gerät zählt. Bei ${site.name} wählen Sie 1 bis ${maxDevices} Geräte.`],
    ],
    related: ['/iptv-smarters-pro/', '/iptv-pc/', '/iptv-macbook/', '/vlc-iptv/', '/myiptv-player/', '/iptv-im-browser/'],
    keywords: ['iptv smarters pro windows download', 'iptv smarters pro pc', 'smarters pro pc', 'iptv smarters pro mac', 'iptv smarters pro macbook', 'iptv smarters mac', 'iptv smarters pro windows'],
  },

  // ── iPhone, iPad, Apple TV ──────────────────────────────────────────
  {
    path: '/iptv-smarters-pro-iphone-apple-tv/',
    hub: 'smarters',
    published: updated,
    updated,
    name: 'Smarters Pro auf iPhone & Apple TV',
    teaser: 'IPTV Smarters auf iPhone, iPad und Apple TV: App Store, Smarters Player Lite, AirPlay.',
    icon: 'phone',
    title: `IPTV Smarters Pro auf iPhone & Apple TV | ${site.name}`,
    description: 'IPTV Smarters Pro auf iPhone, iPad und Apple TV: App im App Store finden, Smarters Player Lite einrichten, per AirPlay streamen, Bildrate anpassen.',
    kicker: 'IPTV Smarters Pro',
    h1: 'IPTV Smarters Pro auf iPhone, iPad und Apple TV',
    lead: 'Auf Apple-Geräten heißt IPTV Smarters Pro im App Store teils „Smarters Player Lite“ – Funktionen und Anmeldung sind weitgehend gleich. Hier lesen Sie, wie Sie die App auf iPhone, iPad und Apple TV installieren, die Zugangsdaten bequem mit dem iPhone eingeben, per AirPlay auf den Fernseher streamen und die Apple-TV-Einstellungen für ruckelfreies Live-TV setzen.',
    facts: [
      ['Geräte', 'iPhone, iPad, Apple TV HD und 4K'],
      ['Name im App Store', 'IPTV Smarters Pro bzw. „Smarters Player Lite“'],
      ['Anmeldung', 'Xtream Codes API oder M3U-Link'],
      ['Alternativen', 'IPTVX, UHF, iPlayTV, GSE Smart IPTV'],
    ],
    app: app('iOS, iPadOS, tvOS'),
    schema: [howTo('/iptv-smarters-pro-iphone-apple-tv/', 'IPTV Smarters auf dem Apple TV einrichten', [
      'App Store auf dem Apple TV öffnen und nach Smarters suchen.',
      'App laden und öffnen.',
      'Login with Xtream Codes API wählen.',
      'Zugangsdaten über die iPhone-Tastatur eingeben.',
      'Add User wählen und Senderliste laden lassen.',
    ])],
    sections: [
      { id: 'iphone', h: 'IPTV Smarters auf iPhone und iPad installieren', html: `
${ol([
  'Öffnen Sie den <strong>App Store</strong> und suchen Sie „Smarters“.',
  'Wählen Sie die App des Entwicklers WHMCS Smarters – je nach Zeitpunkt als „IPTV Smarters Pro“ oder „Smarters Player Lite“ – und tippen Sie auf <strong>Laden</strong>.',
  ...login.slice(1),
])}
<p>Auf dem iPad nutzt die App den größeren Bildschirm für eine geteilte Ansicht aus Senderliste und Programmführer. Bild-in-Bild funktioniert, sobald Sie während der Wiedergabe zum Home-Bildschirm wischen – sofern die App-Version es unterstützt.</p>` },
      { id: 'apple-tv', h: 'IPTV Smarters auf dem Apple TV', html: `
<p>Das Apple TV hat einen eigenen App Store. Öffnen Sie ihn auf dem Fernseher, suchen Sie „Smarters“ und laden Sie die App. Die Eingabe der Zugangsdaten mit der Siri Remote ist mühsam – dafür gibt es einen Trick: Sobald ein Eingabefeld aktiv ist, zeigt Ihr iPhone eine Mitteilung „Apple TV-Tastatur“. Tippen Sie darauf und schreiben Sie bequem auf dem iPhone. Noch einfacher: Server-URL, Benutzername und Passwort aus unserer E-Mail kopieren und auf dem iPhone einfügen.</p>
<p>Für das Apple TV 4K gibt es mit ${L('/iptvx/', 'IPTVX')} und ${L('/uhf-iptv/', 'UHF')} zwei Apps, die sich besonders gut in tvOS einfügen. Eine Übersicht aller Apple-Apps: ${L('/iptv-apple-tv/', 'IPTV auf Apple TV, iPhone und iPad')} und ${L('/iptv-apple-tv-4k/', 'Apple TV 4K')}.</p>` },
      { id: 'airplay', h: 'Vom iPhone auf den Fernseher: AirPlay', html: `
<p>Sie haben kein Apple TV? Viele neuere Fernseher von Samsung, LG, Sony und anderen Marken unterstützen AirPlay. Starten Sie einen Sender in der App, tippen Sie auf das AirPlay-Symbol bzw. öffnen Sie das Kontrollzentrum › <em>Bildschirmsynchronisierung</em> und wählen Sie den Fernseher. iPhone und Fernseher müssen im selben WLAN sein. Für den Dauerbetrieb ist eine App direkt auf dem Fernseher oder ein Apple TV bequemer, weil das iPhone während der Übertragung aktiv bleiben muss.</p>` },
      { id: 'einstellungen', h: 'Apple TV: Bildrate und Dynamikbereich anpassen', html: `
<p>Ein häufiger Grund für „ruckelndes“ Live-TV auf dem Apple TV ist gar kein Netzwerkproblem, sondern eine falsche Bildwiederholrate. Öffnen Sie <em>Einstellungen › Video und Audio › Inhalt anpassen</em> und aktivieren Sie <strong>Bildrate</strong> und <strong>Dynamikbereich</strong>. Das Apple TV schaltet dann für jeden Sender auf die passende Bildrate um – besonders bei Fußball und anderen Sportübertragungen sichtbar flüssiger.</p>` },
      { id: 'probleme', h: 'Häufige Fehler auf Apple-Geräten', html: `${fixes([
  ['App nicht im App Store zu finden', 'nach „Smarters Player Lite“ suchen; Apple-ID-Land muss Deutschland sein.'],
  ['„Unable to connect“', 'Server-URL vollständig mit <code>http://</code> und Port eintragen und auf Tippfehler prüfen – am sichersten per Kopieren und Einfügen aus unserer E-Mail.'],
  ['AirPlay bricht ab', 'iPhone nicht sperren, Energiesparmodus ausschalten und beide Geräte ins 5-GHz-WLAN bringen.'],
  ['Programmführer fehlt', 'in der App unter Settings den EPG neu laden; Zeitzone unter iOS-Einstellungen › Allgemein › Datum & Uhrzeit prüfen.'],
])}<p>${support}</p><p class="muted">${note}</p>` },
    ],
    faq: [
      ['Gibt es IPTV Smarters Pro im App Store?', 'Ja, je nach Zeitpunkt als „IPTV Smarters Pro“ oder „Smarters Player Lite“ des Entwicklers WHMCS Smarters.'],
      ['Was ist der Unterschied zwischen Smarters Pro und Smarters Player Lite?', 'Player Lite ist die Variante für Apple-Geräte. Anmeldung und Grundfunktionen sind gleich; einzelne Zusatzfunktionen können abweichen.'],
      ['Wie gebe ich auf dem Apple TV die Zugangsdaten bequem ein?', 'Über die Apple-TV-Tastatur-Mitteilung auf dem iPhone. Dort können Sie die Daten aus unserer E-Mail einfügen.'],
      ['Kann ich vom iPhone auf einen Samsung- oder LG-Fernseher streamen?', 'Ja, wenn der Fernseher AirPlay unterstützt und beide Geräte im selben WLAN sind.'],
    ],
    related: ['/iptv-smarters-pro/', '/iptv-apple-tv/', '/smarters-player-lite/', '/iptvx/', '/iptv-iphone-ipad/', '/iptv-apple-tv-4k/'],
    keywords: ['iptv smarters pro iphone', 'iptv smarters iphone', 'iptv smarters pro apple tv', 'iptv smarters apple tv', 'iptv smarters ipad'],
  },

  // ── Android & Android TV ────────────────────────────────────────────
  {
    path: '/iptv-smarters-pro-android/',
    hub: 'smarters',
    published: updated,
    updated,
    name: 'Smarters Pro auf Android & Android TV',
    teaser: 'IPTV Smarters Pro aus Google Play auf Handy, Tablet, Android TV und Google TV.',
    icon: 'phone',
    title: `IPTV Smarters Pro Android & Android TV | ${site.name}`,
    description: 'IPTV Smarters Pro auf Android: aus Google Play auf Handy, Tablet, Android TV und Google TV installieren, Xtream-Login, Einstellungen und Hilfe bei Fehlern.',
    kicker: 'IPTV Smarters Pro',
    h1: 'IPTV Smarters Pro auf Android, Android TV und Google TV',
    lead: 'Auf Android ist IPTV Smarters Pro am einfachsten zu bekommen: Die App steht im Google Play Store und läuft auf Smartphones, Tablets, Fernsehern mit Android TV oder Google TV sowie auf Streaming-Boxen. Diese Anleitung zeigt die Installation auf Handy und Fernseher, die besten Einstellungen und was Sie bei typischen Fehlern tun.',
    facts: [
      ['Geräte', 'Android-Smartphone, Tablet, Android TV, Google TV, TV-Boxen'],
      ['Quelle', 'Google Play Store (Entwickler WHMCS Smarters)'],
      ['Anmeldung', 'Xtream Codes API oder M3U-Link'],
      ['Fernseher mit Android TV', 'u. a. Sony, Philips, TCL, Hisense (je nach Modell)'],
    ],
    app: app('Android, Android TV, Google TV'),
    schema: [howTo('/iptv-smarters-pro-android/', 'IPTV Smarters Pro auf Android installieren', [
      'Google Play Store öffnen und nach IPTV Smarters Pro suchen.',
      'App des Entwicklers WHMCS Smarters installieren.',
      'App öffnen und Login with Xtream Codes API wählen.',
      'Benutzername, Passwort und Server-URL eingeben.',
      'Add User wählen und Senderliste laden lassen.',
    ])],
    sections: [
      { id: 'handy', h: 'Auf dem Android-Smartphone und Tablet', html: `
${ol([
  'Öffnen Sie den <strong>Google Play Store</strong> und suchen Sie „IPTV Smarters Pro“.',
  'Prüfen Sie unter dem App-Namen den Entwickler <strong>WHMCS Smarters</strong> und tippen Sie auf <strong>Installieren</strong>.',
  ...login,
])}
<p>Unterwegs gilt: Live-TV in HD verbraucht grob 1,5 bis 3 GB pro Stunde. Im Mobilfunknetz lohnt es sich, in der App eine niedrigere Qualität zu wählen, sofern der Sender mehrere Varianten anbietet.</p>` },
      { id: 'android-tv', h: 'Auf Android TV und Google TV', html: `
<p>Auf Fernsehern und Boxen mit Android TV oder Google TV installieren Sie die App direkt am Fernseher: Öffnen Sie den Play Store (bei Google TV über <em>Apps</em> oder die Suche), suchen Sie „IPTV Smarters Pro“ und installieren Sie sie. Alternativ wählen Sie im Play Store am Computer oder Handy „Auf mehreren Geräten installieren“ und tippen Ihren Fernseher an – die App landet dann automatisch dort.</p>
<p>Die TV-Oberfläche ist für die Fernbedienung gebaut: Kategorien links, Sender rechts, Programmführer über die Menütaste. Geräte mit Google TV sind zum Beispiel ${L('/iptv-chromecast/', 'Chromecast mit Google TV und der Google TV Streamer')}; Fernseher mit Android TV bauen unter anderem ${L('/iptv-sony-bravia/', 'Sony')}, ${L('/iptv-philips-tv/', 'Philips')} und ${L('/iptv-tcl-tv/', 'TCL')}.</p>` },
      { id: 'einstellungen', h: 'Empfohlene Einstellungen', html: `
<ul>
  <li><strong>Player:</strong> Bei Rucklern unter <em>Settings › Player Selection</em> zwischen internem Player und einem externen Player wie VLC oder MX Player wechseln.</li>
  <li><strong>Hardware-Dekodierung:</strong> Auf schwachen Boxen bringt der Hardware-Decoder flüssigeres Bild; auf manchen Geräten hilft umgekehrt der Software-Decoder gegen Bildfehler.</li>
  <li><strong>Programmführer:</strong> automatische Aktualisierung aktivieren, 24-Stunden-Format wählen.</li>
  <li><strong>Kindersicherung:</strong> Kategorien unter <em>Parental Control</em> mit PIN sperren – praktisch auf Familien-Tablets.</li>
</ul>` },
      { id: 'probleme', h: 'IPTV Smarters Pro auf Android funktioniert nicht?', html: `${fixes([
  ['„Ihr Gerät ist mit dieser Version nicht kompatibel“', 'Das Gerät erfüllt die Mindestanforderungen nicht. Nutzen Sie eine schlankere App wie XCIPTV oder Perfect Player.'],
  ['App stürzt nach dem Start ab', 'unter Einstellungen › Apps › IPTV Smarters Pro › Speicher den Cache leeren; hilft das nicht, auch die Daten löschen und neu anmelden.'],
  ['Play Protect warnt', 'Das passiert bei Apps aus fremden Quellen. Installieren Sie IPTV Smarters Pro nur aus Google Play – dann gibt es diese Warnung nicht.'],
  ['Bild ruckelt auf der TV-Box', 'Player wechseln, Box per LAN verbinden und Hintergrund-Apps schließen.'],
])}<p>${support}</p><p class="muted">${note}</p>` },
      { id: 'alternativen', h: 'Alternativen für Android', html: `<p>Auf dem Fernseher mögen viele den Programmführer von ${L('/tivimate/', 'TiviMate')}; kostenlos und schnell ist ${L('/xciptv/', 'XCIPTV')}, sehr anpassbar ist ${L('/ott-navigator/', 'OTT Navigator')}. Alle Player im direkten Vergleich: ${L('/iptv-player-android/', 'die besten IPTV-Player für Android')}. Allgemeines zu Android-Geräten: ${L('/iptv-android/', 'IPTV auf Android')}.</p>` },
    ],
    faq: [
      ['Ist IPTV Smarters Pro im Google Play Store?', 'Ja, vom Entwickler WHMCS Smarters. Installieren Sie die App nur von dort oder von der offiziellen Website.'],
      ['Läuft IPTV Smarters Pro auf Android TV und Google TV?', 'Ja, mit einer eigenen Oberfläche für die Fernbedienung. Sie installieren die App über den Play Store am Fernseher.'],
      ['Kann ich dieselben Zugangsdaten auf Handy und Fernseher nutzen?', `Ja. Wie viele Geräte gleichzeitig schauen dürfen, regelt Ihr Paket – bei ${site.name} 1 bis ${maxDevices}.`],
      ['Welche Android-Version brauche ich?', 'Die aktuelle Mindestversion nennt der Play Store. Sehr alte Geräte erhalten die App teils nicht mehr; dann helfen schlankere Player.'],
    ],
    related: ['/iptv-smarters-pro/', '/iptv-android/', '/iptv-player-android/', '/iptv-android-smartphone/', '/iptv-smarters-pro-fire-tv-stick/', '/xciptv/'],
    keywords: ['iptv smarters pro android', 'iptv smarters android', 'iptv smarters pro android tv', 'iptv smarters pro google play', 'smarters pro android'],
  },
];
