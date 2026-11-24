// Model-level sections for existing device and app pages (city/device/app
// pass): MAG models, Formuler models and MYTVOnline 3, Dreambox and Vu+
// receivers, SmartOne Pro, Windows players, plus links from the existing hub
// pages to the new brand, model and local pages. Setup per model family is
// identical, so models are covered as sections instead of separate pages.
import { L } from './util.mjs';

const tvBrands = [['/iptv-sony-bravia/', 'Sony Bravia'], ['/iptv-philips-tv/', 'Philips'], ['/iptv-hisense-tv/', 'Hisense'], ['/iptv-tcl-tv/', 'TCL'], ['/iptv-panasonic-tv/', 'Panasonic'], ['/iptv-grundig-tv/', 'Grundig'], ['/iptv-toshiba-tv/', 'Toshiba'], ['/iptv-sharp-tv/', 'Sharp'], ['/iptv-xiaomi-tv/', 'Xiaomi'], ['/iptv-metz-tv/', 'Metz'], ['/iptv-loewe-tv/', 'Loewe'], ['/iptv-medion-tv/', 'Medion'], ['/iptv-telefunken-tv/', 'Telefunken']];
const links = (list) => list.map(([h, t]) => L(h, t)).join(', ');

const mag = (id, name, html) => ({ id, before: 'fehler', h: `${name}: IPTV einrichten und Besonderheiten`, html });
const formuler = (id, name, html) => ({ id, before: 'apps', h: `${name} für IPTV`, html });

export default {
  '/mag-box/': {
    sections: [
      mag('mag-250', 'MAG 250', '<p>Die MAG 250 ist einer der ältesten noch verbreiteten Infomir-Receiver. Sie spielt HD ab, unterstützt aber kein H.265/HEVC; Sender, die nur in HEVC angeboten werden, laufen darauf nicht. Für den Einstieg oder als Zweitgerät funktioniert sie weiterhin mit Portal-URL und MAC-Adresse. Software-Updates gibt es für dieses Modell kaum noch – für neue Anschaffungen empfehlen wir ein aktuelleres Gerät.</p>'),
      mag('mag-254', 'MAG 254', '<p>Die MAG 254 ist der Nachfolger der 250 mit schnellerem Prozessor und flüssigerer Oberfläche, ebenfalls in HD und ohne HEVC. Die Einrichtung ist identisch: <em>Einstellungen › Systemeinstellungen › Server › Portale</em>, Portal-URL eintragen, neu starten. Die MAC-Adresse steht auf dem Aufkleber an der Unterseite.</p>'),
      mag('mag-256', 'MAG 256', '<p>Die MAG 256 entspricht technisch weitgehend der 254, bietet aber einen Gigabit-LAN-Anschluss und – in der Variante MAG 256w1 – integriertes WLAN. Für IPTV empfehlen wir trotzdem das LAN-Kabel. HEVC wird nicht unterstützt.</p>'),
      mag('mag-322', 'MAG 322', '<p>Mit der MAG 322 brachte Infomir H.265/HEVC in die günstige Klasse. Damit laufen auch Sender, die effizient in HEVC kodiert sind, bei weniger Bandbreite. Die Auflösung bleibt Full HD. Die Variante MAG 322w1 hat WLAN eingebaut.</p>'),
      mag('mag-324', 'MAG 324', '<p>Die MAG 324 ist eine Weiterentwicklung der 322 mit HEVC-Unterstützung und Full HD; je nach Variante (zum Beispiel MAG 324w2) mit eingebautem WLAN. Für IPTV in HD ist sie eine solide Wahl, wenn Sie kein 4K brauchen.</p>'),
      mag('mag-420', 'MAG 420', '<p>Die MAG 420 ist ein 4K-Receiver mit HEVC-Unterstützung und HDR. Für IPTV in Ultra HD brauchen Sie zusätzlich rund 25 Mbit/s pro Stream und einen 4K-Fernseher. Varianten mit „w“ im Namen haben WLAN; für 4K empfehlen wir dennoch LAN.</p>'),
      mag('mag-524', 'MAG 524', '<p>Die MAG 524 gehört zur aktuellen 4K-Generation von Infomir mit HEVC, HDR und schnellerem Prozessor; die Variante MAG 524w3 bringt WLAN mit. Sie ist unter den MAG-Boxen die beste Wahl für 4K-IPTV. Einrichtung wie bei allen MAG-Modellen über Portal-URL und MAC-Adresse.</p>'),
    ],
    faq: [
      ['Welche MAG-Box unterstützt HEVC?', 'Ab der MAG-322-Generation. Ältere Modelle wie MAG 250, 254 und 256 unterstützen kein HEVC.'],
      ['Welche MAG-Box kann 4K?', 'Modelle der 4xx- und 5xx-Reihe, etwa MAG 420 und MAG 524.'],
    ],
    keywords: { add: ['iptv mag 250', 'iptv mag 254', 'iptv mag 256', 'iptv mag 322', 'iptv mag 324', 'iptv mag 420', 'iptv mag 524', 'mag 324', 'mag 324 einrichten', 'mag 524 einrichten', 'mag 254 einrichten'] },
    related: ['/iptv-tvip/', '/smart-stb/'],
  },
  '/formuler/': {
    sections: [
      formuler('formuler-z7-plus', 'Formuler Z7+', '<p>Die Z7+ ist ein älteres Formuler-Modell mit 4K-Unterstützung und Android. Auf ihr läuft eine ältere Generation von MyTVOnline. Für IPTV per Portal oder Xtream Codes funktioniert sie weiterhin; neuere Apps setzen aber teils ein aktuelleres Android voraus.</p>'),
      formuler('formuler-z8', 'Formuler Z8', '<p>Die Z8 brachte mehr Leistung und eine überarbeitete Oberfläche. Sie nutzt MyTVOnline 2 und unterstützt 4K mit HEVC. Für IPTV per Portal-URL oder – je nach MyTVOnline-Version – Xtream Codes ist sie gut geeignet.</p>'),
      formuler('formuler-z10-pro', 'Formuler Z10 Pro', '<p>Die Z10 Pro (und die Z10 Pro Max mit mehr Speicher) nutzen Android mit Formuler-Oberfläche und MyTVOnline 2. Sie spielen 4K mit HDR ab und haben Gigabit-LAN. Für die meisten IPTV-Nutzer ist die Z10-Reihe eine sehr gute Wahl.</p>'),
      formuler('formuler-z11-pro', 'Formuler Z11 Pro', '<p>Die Z11 Pro gehört zur neuesten Formuler-Generation mit aktuellerem Android und <strong>MYTVOnline 3</strong>. Sie bietet 4K, HDR und eine schnellere Oberfläche. MYTVOnline 3 unterstützt Portale und Xtream Codes.</p>'),
      formuler('formuler-z11-pro-max', 'Formuler Z11 Pro Max', '<p>Die Z11 Pro Max ist das Spitzenmodell der Z11-Reihe mit mehr Arbeitsspeicher und Speicherplatz. Für große Senderlisten, Aufnahmen und viele Apps ist sie die komfortabelste Formuler-Box. Sie läuft ebenfalls mit MYTVOnline 3.</p>'),
      formuler('formuler-gtv', 'Formuler GTV', '<p>Die Formuler GTV setzt auf Google TV statt auf die klassische Formuler-Oberfläche. Damit steht der Google Play Store mit Apps wie ' + L('/tivimate/', 'TiviMate') + ' oder ' + L('/iptv-smarters-pro/', 'IPTV Smarters Pro') + ' offen; MyTVOnline ist je nach Version zusätzlich verfügbar.</p>'),
      { id: 'mytvonline-3', before: 'apps', h: 'MYTVOnline 3 einrichten', html: '<p>MYTVOnline 3 ist die aktuelle Version der Formuler-App auf neueren Modellen wie der Z11-Reihe. So richten Sie sie ein:</p><ol class="guide-steps"><li>Öffnen Sie MYTVOnline 3 und wählen Sie „Portal hinzufügen“ bzw. „Add Portal“.</li><li>Wählen Sie den Typ: <strong>Portal</strong> (Portal-URL + MAC-Adresse der Box) oder <strong>Xtream Codes</strong> (Server-URL, Benutzername, Passwort).</li><li>Tragen Sie die Daten aus unserer E-Mail ein und vergeben Sie einen Namen.</li><li>Speichern Sie; die App lädt Senderliste und Programmführer.</li></ol><p>Beim Portal-Login teilen Sie uns vorher die MAC-Adresse der Box mit; sie steht auf dem Gehäuse und unter <em>Einstellungen › Info</em>.</p>' },
    ],
    faq: [
      ['Was ist MYTVOnline 3?', 'Die aktuelle Version der IPTV-App auf neueren Formuler-Boxen wie der Z11-Reihe. Sie unterstützt Portale und Xtream Codes.'],
      ['Welches Formuler-Modell lohnt sich heute am meisten?', 'Für die meisten die Z10 Pro oder Z11 Pro; die Z11 Pro Max bietet mehr Speicher für große Senderlisten.'],
    ],
    keywords: { add: ['formuler z10 pro', 'formuler z11 pro', 'formuler z11 pro max', 'formuler gtv', 'mytvonline 3', 'mytvonline', 'mytvonline 3 einrichten', 'iptv formuler z11'] },
  },
  '/iptv-enigma2/': {
    sections: [
      { id: 'dreambox', before: 'lohnt', h: 'Dreambox DM920 und Dreambox One Ultra HD', html: '<p>Die <strong>Dreambox DM920</strong> ist ein 4K-Receiver mit Enigma2-Image (Dreambox OS bzw. alternative Images, je nach Einrichtung). IPTV richten Sie per Plugin oder über eine Bouquet-Datei mit Ihrem M3U-Link ein. Die <strong>Dreambox One Ultra HD</strong> ist eine kompakte 4K-Box mit eigenem, Linux-basiertem System; je nach Image stehen IPTV-Plugins zur Verfügung. Prüfen Sie im Plugin-Browser Ihres Images, welche IPTV-Plugins angeboten werden.</p>' },
      { id: 'vuplus', before: 'lohnt', h: 'Vu+ Zero 4K, Uno 4K SE und Duo 4K SE', html: '<p>Die Vu+-Receiver sind in der Enigma2-Szene weit verbreitet. Die <strong>Vu+ Zero 4K</strong> ist das kompakte Einstiegsmodell mit einem Tuner; die <strong>Uno 4K SE</strong> bietet einen wechselbaren Tuner-Steckplatz und Gigabit-LAN; die <strong>Duo 4K SE</strong> ist das Spitzenmodell mit zwei Tuner-Steckplätzen. Für IPTV spielt der Tuner keine Rolle – wichtig sind LAN-Anschluss, Rechenleistung und ein aktuelles Image mit IPTV-Plugin. Alle drei unterstützen 4K mit HEVC.</p>' },
    ],
    faq: [
      ['Kann ich IPTV auf einer Vu+ Zero 4K nutzen?', 'Ja, mit einem Enigma2-Image und einem IPTV-Plugin oder einer Bouquet-Datei mit Ihrem M3U-Link.'],
      ['Funktioniert IPTV auf der Dreambox DM920?', 'Ja. Je nach Image per Plugin oder Bouquet-Datei mit M3U-Link.'],
    ],
    keywords: { add: ['dreambox iptv', 'dreambox dm920 iptv', 'dreambox one iptv', 'vu+ iptv', 'vu plus iptv', 'vu+ zero 4k iptv', 'vu+ uno 4k se iptv', 'vu+ duo 4k se iptv'] },
    related: ['/iptv-tvip/'],
  },
  '/set-iptv/': {
    faq: [['Was ist SmartOne Pro?', 'SmartOne Pro ist eine weitere App aus dem SmartOne-Umfeld mit ähnlichem Prinzip: Einrichtung per MAC-Adresse, Playlist über die Website des Anbieters. Prüfen Sie im Store, welche Variante Sie installieren, denn Aktivierungen gelten jeweils nur für eine App.']],
    keywords: { add: ['smartone pro', 'smart one pro', 'smartone iptv einrichten', 'smartone iptv aktivieren'] },
  },
  '/iptv-pc/': {
    sections: [{ id: 'windows-player', before: 'browser', h: 'Weitere IPTV-Player für Windows', html: `<p>Neben VLC und Kodi gibt es für Windows spezialisierte Player: ${L('/myiptv-player/', 'MyIPTV Player')} aus dem Microsoft Store ist kostenlos und schnell eingerichtet, ${L('/progtv/', 'ProgTV')} bietet Aufnahmen und Timeshift, und ${L('/iptvnator/', 'IPTVnator')} ist Open Source und läuft zusätzlich auf Mac und Linux. Mac-Nutzer finden eine eigene Anleitung unter ${L('/iptv-macbook/', 'IPTV auf dem MacBook')}.</p>` }],
    keywords: { remove: ['iptv macbook', 'iptv mac'], add: ['iptv windows', 'iptv windows pc', 'iptv windows 11', 'iptv player windows'] },
    related: ['/iptv-macbook/', '/myiptv-player/', '/iptvnator/'],
  },
  '/iptv-apple-tv/': {
    sections: [{ id: 'apple-mehr', h: 'Ausführliche Anleitungen für jedes Apple-Gerät', html: `<p>Details zu den einzelnen Geräten: ${L('/iptv-apple-tv-4k/', 'Apple TV 4K und Apple TV HD')}, ${L('/iptv-iphone-ipad/', 'iPhone und iPad')} und ${L('/iptv-macbook/', 'MacBook und Mac')}. Passende Apps: ${L('/iptvx/', 'IPTVX')}, ${L('/uhf-iptv/', 'UHF')}, ${L('/snappier-iptv/', 'Snappier')}, ${L('/iplaytv/', 'iPlayTV')} und ${L('/smarters-player-lite/', 'Smarters Player Lite')}.</p>` }],
    keywords: { remove: ['iptv ipad', 'iptv iphone'] },
    related: ['/iptv-apple-tv-4k/', '/iptv-iphone-ipad/'],
  },
  '/iptv-box/': {
    sections: [{ id: 'boxen-einzeln', before: 'empfehlung', h: 'Anleitungen für einzelne Boxen', html: `<p>Für viele verbreitete Boxen haben wir eigene Anleitungen: ${L('/iptv-nvidia-shield/', 'NVIDIA Shield TV und Pro')}, ${L('/iptv-fire-tv-cube/', 'Fire TV Cube')}, ${L('/iptv-xiaomi-tv-box/', 'Xiaomi Mi Box S und TV Box S')}, ${L('/iptv-nokia-streaming-box/', 'Nokia Streaming Box 8000 und 8010')}, ${L('/iptv-strong-leap-s3/', 'Strong LEAP-S3')}, ${L('/iptv-thomson-streaming-box/', 'Thomson Streaming Box 240G')}, ${L('/iptv-tvip/', 'TVIP S-Box v.605')}, ${L('/mag-box/', 'MAG-Boxen')} und ${L('/formuler/', 'Formuler')}.</p>` }],
    keywords: { remove: ['iptv nvidia shield', 'tvip s box', 'tvip 605', 'tvip s box 605', 'tvip s box v 605'] },
    related: ['/iptv-nvidia-shield/', '/iptv-tvip/'],
  },
  '/iptv-smart-tv/': {
    sections: [{ id: 'marken', before: 'einrichten', h: 'Anleitungen nach Fernseher-Marke', html: `<p>Für jede große Marke gibt es eine eigene Anleitung mit den Systemen der jeweiligen Modellreihen: ${L('/iptv-samsung-tv/', 'Samsung')}, ${L('/iptv-lg-tv/', 'LG')}, ${links(tvBrands)}.</p>` }],
    related: ['/iptv-sony-bravia/', '/iptv-hisense-tv/', '/iptv-philips-tv/'],
  },
  '/iptv-fire-tv-stick/': {
    sections: [{ id: 'fire-modelle', before: 'apps', h: 'Anleitungen für jedes Fire-TV-Modell', html: `<p>Die Modelle unterscheiden sich bei Auflösung, Speicher und WLAN: ${L('/iptv-fire-tv-stick-lite/', 'Fire TV Stick Lite')}, ${L('/iptv-fire-tv-stick-hd/', 'Fire TV Stick HD')}, ${L('/iptv-fire-tv-stick-4k/', 'Fire TV Stick 4K')}, ${L('/iptv-fire-tv-stick-4k-max/', 'Fire TV Stick 4K Max')} und ${L('/iptv-fire-tv-cube/', 'Fire TV Cube')}.</p>` }],
    related: ['/iptv-fire-tv-stick-4k-max/', '/iptv-fire-tv-cube/'],
  },
  '/kodi-iptv/': {
    related: ['/pvr-iptv-simple-client/'],
  },
  '/iptv-deutschland/': {
    sections: [{ id: 'regional', h: 'IPTV in Ihrer Stadt und Region', html: `<p>Welche Anschlüsse und regionalen Netzbetreiber es bei Ihnen gibt, zeigen unsere Seiten für ${L('/iptv-regionen/', 'Städte, Bundesländer und Regionen')} – etwa ${L('/iptv-berlin/', 'Berlin')}, ${L('/iptv-hamburg/', 'Hamburg')}, ${L('/iptv-muenchen/', 'München')}, ${L('/iptv-koeln/', 'Köln')}, ${L('/iptv-nordrhein-westfalen/', 'NRW')} oder ${L('/iptv-bayern/', 'Bayern')}.</p>` }],
    related: ['/iptv-regionen/'],
  },
  '/iptv-stick/': {
    related: ['/iptv-fire-tv-stick-4k-max/', '/iptv-xiaomi-tv-box/', '/iptv-roku/'],
  },
  '/ibo-player/': {
    related: ['/ibo-player-alternativen/', '/bob-player/'],
  },
};
