// SEO audit (November 2026), app pages: unique practice sections, extra FAQ,
// outbound sources and corrected titles/descriptions for thin app guides.
// Merged into the pages by index.mjs (same shape as extend.mjs/deepen.mjs).
import { site, devicePrices } from '../site.mjs';
import { L } from './util.mjs';
import { S } from './sources.mjs';

const max = Math.max(...Object.keys(devicePrices).map(Number));
const updated = '2026-11-25';
const praxis = (h, html, before = 'alternativen') => ({ id: 'praxis', h, html, before });
const devicesFaq = (app) => [`Kann ich ${app} auf mehreren Geräten gleichzeitig nutzen?`, `Ja, wenn Ihr Paket genügend gleichzeitige Geräte umfasst. Bei ${site.name} wählen Sie 1 bis ${max} Geräte; jedes Gerät meldet sich mit denselben Zugangsdaten an.`];

export default {
  '/snappier-iptv/': {
    updated,
    description: 'Snappier IPTV einrichten: die schnelle IPTV-App für iPhone, iPad, Apple TV und Mac mit Xtream Codes oder M3U verbinden, plus Tipps bei Fehlern.',
    sections: [praxis('Snappier im Apple-Alltag: iPhone, iPad, Apple TV und Mac', `<p>Snappier ist für Haushalte gedacht, die überwiegend Apple-Geräte nutzen. Der Vorteil: Sie lernen eine Oberfläche kennen und finden sich auf dem iPhone in der Bahn genauso zurecht wie abends am Apple TV. Auf dem <strong>Apple TV 4K</strong> läuft die App nativ unter tvOS; das ist stabiler als ein Bild, das Sie per AirPlay vom iPhone auf den Fernseher schicken, weil das Telefon dann nicht als Zwischenstation dient.</p>
<p>Für ein ruhiges Bild am Fernseher verbinden Sie das Apple TV möglichst per LAN-Kabel; das Apple TV 4K mit Ethernet-Anschluss ist dafür die beste Wahl. Auf dem iPhone lohnt sich im Mobilfunk eine niedrigere Qualitätsstufe, damit das Datenvolumen reicht. Am Mac ist Snappier praktisch, wenn Sie nebenbei arbeiten: Das Fenster lässt sich verkleinern, während Nachrichten oder Sport laufen.</p>
<p>Ob Snappier oder eine Alternative besser zu Ihnen passt, testen Sie am einfachsten selbst: Mit dem ${L('/iptv-testen/', 'kostenlosen Test')} probieren Sie die App mit Ihren eigenen Zugangsdaten aus, bevor Sie ein Paket wählen.</p>`)],
    faq: [devicesFaq('Snappier'), ['Brauche ich für Snappier ein Apple-Konto?', 'Ja, zum Herunterladen aus dem App Store benötigen Sie eine Apple-ID. Die Zugangsdaten für IPTV erhalten Sie getrennt davon per E-Mail von uns.']],
    sources: [S.appletv, S.m3u],
  },
  '/progtv/': {
    updated,
    title: `ProgTV einrichten: IPTV-Player für Windows | ${site.name}`,
    description: 'ProgTV einrichten: den IPTV-Player für Windows mit M3U-Playlist und Programmführer verbinden, Aufnahmen nutzen und typische Fehler schnell beheben.',
    sections: [praxis('ProgTV am PC: Tipps für Laptop, Zweitbildschirm und Fernseher', `<p>ProgTV spielt seine Stärken auf dem Windows-PC aus: Programmführer, Senderliste und Bild lassen sich auf einem großen Monitor gleichzeitig darstellen, und Aufnahmen landen direkt auf der Festplatte. Damit eignet sich die App für Nutzer, die am Schreibtisch fernsehen oder einen Mini-PC am Fernseher betreiben.</p>
<p>Ein paar Einstellungen in Windows machen den Unterschied: Stellen Sie den Energiesparmodus so ein, dass der Laptop während der Wiedergabe nicht in den Ruhezustand wechselt. Erlauben Sie ProgTV beim ersten Start den Netzwerkzugriff, wenn die Windows-Firewall danach fragt – sonst bleibt die Senderliste leer. Und wer den PC per HDMI an den Fernseher anschließt, wählt in den Anzeigeeinstellungen „Nur zweiter Bildschirm“, damit die Wiedergabe flüssig in voller Auflösung läuft.</p>
<p>Für Aufnahmen gilt: Planen Sie pro Stunde in HD mehrere Gigabyte Speicher ein und prüfen Sie vor längeren Aufnahmen den freien Platz. Wenn Ihnen ProgTV zu technisch ist, sind ${L('/myiptv-player/', 'MyIPTV Player')} oder ${L('/vlc-iptv/', 'VLC')} einfachere Alternativen für Windows.</p>`)],
    faq: [['Brauche ich für ProgTV einen leistungsstarken PC?', 'Nein. Für HD genügt ein aktueller Laptop oder Mini-PC. Wichtiger als die Rechenleistung ist eine stabile Internetverbindung, am besten per LAN-Kabel.']],
    sources: [S.m3u, S.epg],
  },
  '/iptvnator/': {
    updated,
    title: `IPTVnator einrichten: Windows, Mac & Linux | ${site.name}`,
    description: 'IPTVnator einrichten: den kostenlosen Open-Source-Player für Windows, macOS und Linux mit M3U oder Xtream Codes verbinden – Anleitung und Tipps.',
    sections: [praxis('IPTVnator als Open-Source-Player: Vorteile und Grenzen', `<p>IPTVnator ist ein quelloffener IPTV-Player: Der Programmcode ist öffentlich auf GitHub einsehbar, und neue Versionen erscheinen dort als Download für Windows, macOS und Linux. Für viele Nutzer ist das ein Vertrauensargument, weil keine Werbung eingeblendet wird und nachvollziehbar ist, was die App tut. Laden Sie IPTVnator deshalb nur von der offiziellen Projektseite herunter und nicht von Spiegelseiten.</p>
<p>Im Alltag punktet IPTVnator mit einer übersichtlichen Senderliste, einem Programmführer und Favoriten. Weil die App auf dem Computer läuft, ist sie besonders praktisch für Linux-Nutzer, für die es nur wenige komfortable IPTV-Player gibt. Grenzen gibt es bei Komfortfunktionen, die TV-Apps wie ${L('/tivimate/', 'TiviMate')} bieten, etwa Aufnahmen oder eine Bedienung per Fernbedienung.</p>
<p>Unser Tipp: Hinterlegen Sie Ihren Zugang per ${L('/xtream-codes/', 'Xtream Codes')}, dann lädt IPTVnator auch Filme und Serien. Klappt das nicht, nutzen Sie den ${L('/m3u-playlist/', 'M3U-Link')} aus unserer E-Mail.</p>`)],
    faq: [['Ist IPTVnator sicher?', 'Die App ist quelloffen und ohne Werbung. Laden Sie sie nur von der offiziellen Projektseite herunter und halten Sie sie aktuell.'], devicesFaq('IPTVnator')],
    sources: [['IPTVnator auf GitHub (Projektseite)', 'https://github.com/4gray/iptvnator'], S.m3u],
  },
  '/myiptv-player/': {
    updated,
    description: 'MyIPTV Player einrichten: den kostenlosen IPTV-Player aus dem Microsoft Store mit M3U-Playlist und EPG verbinden, Sender sortieren und Fehler beheben.',
    sections: [praxis('MyIPTV Player unter Windows: so holen Sie mehr heraus', `<p>MyIPTV Player wird über den Microsoft Store installiert und erhält Updates automatisch mit Windows. Das macht ihn zur unkomplizierten Wahl für Nutzer, die keine Programme aus unbekannten Quellen installieren möchten. Die App arbeitet mit einem <strong>M3U-Link</strong> und einem EPG-Link; beides finden Sie in unserer Zugangs-E-Mail.</p>
<p>Nach dem ersten Laden lohnt es sich, Favoriten anzulegen: Bei großen Senderlisten finden Sie Ihre Programme so mit einem Klick. Wenn der Programmführer leer bleibt, prüfen Sie, ob der EPG-Link in den Einstellungen eingetragen ist, und laden Sie ihn manuell neu. Wer den PC im Wohnzimmer per HDMI am Fernseher nutzt, steuert MyIPTV Player bequem mit einer kabellosen Maus oder einer Media-Fernbedienung für Windows.</p>
<p>Wenn Sie zusätzlich Filme und Serien in übersichtlichen Kategorien möchten, sind ${L('/iptvnator/', 'IPTVnator')} oder ${L('/iptv-smarters-pro-pc/', 'IPTV Smarters Pro für Windows')} eine Ergänzung.</p>`)],
    faq: [['Wo finde ich MyIPTV Player?', 'Im Microsoft Store unter Windows 10 und Windows 11. Suchen Sie nach „MyIPTV Player“ und installieren Sie die App von dort.']],
    sources: [S.m3u, S.epg],
  },
  '/iplaytv/': {
    updated,
    title: `iPlayTV einrichten: Apple TV, iPhone & iPad | ${site.name}`,
    sections: [praxis('iPlayTV auf dem Apple TV: für wen sich die Kauf-App lohnt', `<p>iPlayTV ist eine kostenpflichtige App, die vor allem am <strong>Apple TV</strong> überzeugt: Der Programmführer ist im TV-Raster aufgebaut, und die Siri Remote reicht für die Bedienung völlig aus. Wer vom klassischen Fernsehen kommt, findet sich deshalb schnell zurecht. Auf iPhone und iPad ist die App ebenfalls nutzbar, ihr Schwerpunkt liegt aber auf dem großen Bildschirm.</p>
<p>Bevor Sie Geld für eine App ausgeben, prüfen Sie zuerst, ob Ihr Zugang stabil läuft: Mit dem ${L('/iptv-testen/', 'kostenlosen Test')} von ${site.name} können Sie das in einer kostenlosen App wie ${L('/iptvx/', 'IPTVX')} oder ${L('/smarters-player-lite/', 'Smarters Player Lite')} tun und erst danach entscheiden, ob Ihnen iPlayTV den Aufpreis wert ist.</p>
<p>Für das beste Bild verbinden Sie das Apple TV per LAN-Kabel und stellen in den tvOS-Einstellungen das Format auf die Auflösung Ihres Fernsehers ein. Die Einstellung „Bildwiederholrate anpassen“ sorgt dafür, dass Sport und Filme ohne Ruckeln laufen.</p>`)],
    faq: [['Funktioniert iPlayTV mit Xtream Codes?', 'Ja. Sie können Ihren Zugang per Xtream Codes oder als M3U-Link hinzufügen. Beide Daten finden Sie in unserer E-Mail.']],
    sources: [S.appletv, S.epg],
  },
  '/televizo/': {
    updated,
    title: `Televizo einrichten: IPTV-Player für Android | ${site.name}`,
    description: 'Televizo einrichten: den IPTV-Player für Android und Android TV mit M3U oder Xtream Codes verbinden, EPG laden, Premium nutzen und Fehler beheben.',
    sections: [praxis('Televizo für Handy und Fernseher: eine App für alle Bildschirme', `<p>Televizo eignet sich für Haushalte, die IPTV sowohl auf dem Android-Smartphone als auch auf einem Fernseher mit ${L('/iptv-android/', 'Android TV oder Google TV')} nutzen. Die Oberfläche passt sich dem Gerät an: Auf dem Handy bedienen Sie die App per Touch, am Fernseher mit den Pfeiltasten der Fernbedienung. Wer bei der Familie zu Besuch ist, schaut auf dem Tablet weiter, ohne sich umgewöhnen zu müssen.</p>
<p>Besonders hilfreich ist das Anlegen von Favoritengruppen, etwa „Nachrichten“, „Sport“ oder „Kinder“. Damit finden auch weniger technikaffine Familienmitglieder schnell ihr Programm. Auf dem Fire TV Stick sollten Sie nach der Installation die Hintergrund-Apps schließen, damit Televizo genügend Arbeitsspeicher hat.</p>
<p>Die Premium-Version lohnt sich, wenn Sie zusätzliche Komfortfunktionen nutzen möchten. Für den Einstieg reicht die kostenlose Version, um zu prüfen, ob Bedienung und Bildqualität passen.</p>`)],
    faq: [devicesFaq('Televizo')],
    sources: [S.androidtv, S.fire],
  },
  '/uhf-iptv/': {
    updated,
    description: 'UHF IPTV-App einrichten: den Player für iPhone, iPad, Apple TV und Mac mit Xtream Codes oder M3U verbinden, Geräte synchronisieren und Fehler beheben.',
    sections: [praxis('UHF im Alltag: Favoriten und Fortschritt auf allen Apple-Geräten', `<p>UHF richtet sich an Apple-Nutzer, die zwischen iPhone, iPad, Apple TV und Mac wechseln. Die App ist modern gestaltet und legt Wert auf eine übersichtliche Darstellung von Live-TV, Filmen und Serien. Gerade bei großen Mediatheken hilft das, schnell zum Ziel zu kommen.</p>
<p>Planen Sie für den Start ein paar Minuten ein: Beim ersten Laden liest UHF Senderliste, Programmführer und Mediathek ein. Danach öffnet sich die App deutlich schneller. Legen Sie Favoriten an und blenden Sie Kategorien aus, die Sie nicht nutzen – das macht die Navigation mit der Siri Remote am Apple TV angenehmer.</p>
<p>Wenn Sie UHF auf mehreren Geräten gleichzeitig verwenden, achten Sie darauf, dass Ihr Paket die passende Anzahl gleichzeitiger Geräte umfasst. Bei ${site.name} wählen Sie zwischen 1 und ${max} Geräten. Alternativen für Apple-Geräte finden Sie unter ${L('/iptv-apple-tv/', 'IPTV auf Apple TV, iPhone und iPad')}.</p>`)],
    faq: [['Warum lädt UHF beim ersten Start so lange?', 'Die App liest beim ersten Mal Senderliste, Programmführer und Mediathek vollständig ein. Danach startet sie schneller. Eine LAN-Verbindung beschleunigt das Laden.']],
    sources: [S.appletv, S.epg],
  },
  '/sparkle-tv/': {
    updated,
    sections: [praxis('Sparkle TV am Fernseher: Bedienung wie beim klassischen Fernsehen', `<p>Sparkle TV ist für Menschen gemacht, die IPTV wie gewohntes Fernsehen bedienen möchten: Programm mit den Pfeiltasten wechseln, mit „OK“ den Programmführer öffnen, mit der Zurück-Taste zum letzten Sender springen. Das macht die App auch für ältere Familienmitglieder zugänglich, die mit Menüs auf dem Smartphone wenig anfangen können.</p>
<p>Am besten läuft Sparkle TV auf Geräten mit ausreichend Arbeitsspeicher, etwa dem ${L('/iptv-fire-tv-stick-4k-max/', 'Fire TV Stick 4K Max')}, der ${L('/iptv-nvidia-shield/', 'NVIDIA Shield')} oder Fernsehern mit Google TV. Auf älteren Sticks hilft es, die Anzahl der EPG-Tage zu reduzieren, damit der Programmführer schneller lädt.</p>
<p>Ein praktischer Tipp für Familien: Legen Sie eine eigene Favoritenliste an, in der nur die wichtigsten Sender stehen. So ist die App auch nach einem Neustart sofort übersichtlich.</p>`)],
    faq: [['Kann ich Sparkle TV mit der normalen Fernbedienung steuern?', 'Ja. Die App ist für die Bedienung mit Fernbedienung gebaut; Pfeiltasten, OK und Zurück genügen für alle wichtigen Funktionen.']],
    sources: [S.androidtv, S.epg],
  },
  '/duplexplay/': {
    updated,
    sections: [praxis('DuplexPlay im Alltag: Playlist verwalten ohne Tippen am Fernseher', `<p>Der größte Vorteil von DuplexPlay: Sie tippen die langen Zugangsdaten nicht mit der Fernbedienung ein, sondern hinterlegen Ihre Playlist bequem am Computer oder Smartphone auf der Website des App-Anbieters. Der Fernseher lädt die Liste anschließend automatisch über seine Geräte-ID. Das spart Zeit und vermeidet Tippfehler, die bei Xtream-Daten schnell passieren.</p>
<p>Notieren Sie Geräte-ID und Device Key am besten mit einem Foto vom Bildschirm. Beides brauchen Sie wieder, wenn Sie die Playlist ändern oder nach einem Zurücksetzen des Fernsehers neu laden. Nach jeder Änderung auf der Website starten Sie die App neu, damit sie die aktuelle Liste abruft.</p>
<p>DuplexPlay ist eine Lösung vor allem für ${L('/iptv-samsung-tv/', 'Samsung-')} und ${L('/iptv-lg-tv/', 'LG-Fernseher')}. Wer einen Fernseher mit Google TV besitzt, kann alternativ Apps wie ${L('/tivimate/', 'TiviMate')} direkt aus dem Play Store nutzen.</p>`)],
    faq: [['Muss ich DuplexPlay nach der Testphase bezahlen?', 'Ja, nach der Testphase verlangt der App-Anbieter eine Aktivierungsgebühr. Sie zahlen sie direkt an den App-Anbieter, nicht an uns.']],
    sources: [S.mac, S.tizen, S.webos],
  },
  '/mx-player-iptv/': {
    updated,
    description: 'MX Player für IPTV: Streams abspielen, als externen Player in IPTV-Apps einrichten, Decoder wählen und typische Fehler auf Android schnell beheben.',
    sections: [praxis('Wann sich MX Player als externer Player lohnt', `<p>MX Player ist kein vollwertiger IPTV-Player mit Senderliste und Programmführer, sondern ein leistungsfähiger Videoplayer. Seine Stärke liegt in den Decodern: Viele IPTV-Apps auf Android erlauben es, einen <strong>externen Player</strong> auszuwählen. Läuft ein Sender in der eingebauten Wiedergabe ruckelig oder ohne Ton, kann MX Player das Problem oft lösen, weil er Video und Audio anders verarbeitet.</p>
<p>In der Praxis wählen Sie in Apps wie ${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')} oder ${L('/xciptv/', 'XCIPTV')} unter „Player-Einstellungen“ den MX Player aus. Danach öffnet sich jeder Stream in MX Player, während Sie die Senderliste weiter in der IPTV-App verwalten. Probieren Sie in MX Player zwischen Hardware-Decoder (HW, HW+) und Software-Decoder (SW) aus, falls Bild oder Ton haken.</p>
<p>Für den Fernseher empfehlen wir eher eine App mit eigenem Programmführer. MX Player ist vor allem auf dem Android-Smartphone und Tablet eine sinnvolle Ergänzung.</p>`)],
    faq: [['Welcher Decoder ist in MX Player der richtige?', 'Starten Sie mit HW+. Wenn Bild oder Ton haken, wechseln Sie auf SW. Der Software-Decoder belastet das Gerät stärker, löst aber viele Formatprobleme.']],
    sources: [S.hls, S.m3u],
  },
  '/smart-stb/': {
    updated,
    title: `Smart STB einrichten: Portal-URL & MAC-Adresse | ${site.name}`,
    description: 'Smart STB einrichten: die App, die eine MAG-Box auf Samsung- und LG-Fernsehern nachbildet – Portal-URL, MAC-Adresse, Aktivierung und häufige Fehler.',
    h1: 'Smart STB einrichten: Portal-URL und MAC-Adresse',
    sections: [praxis('Smart STB oder echte MAG-Box: was ist besser?', `<p>Smart STB spart Ihnen die Anschaffung einer ${L('/mag-box/', 'MAG-Box')}: Die App holt die gewohnte Portal-Oberfläche direkt auf den Smart-TV. Wer früher eine MAG-Box genutzt hat, findet sich sofort zurecht. Allerdings hängt die Leistung von Ihrem Fernseher ab: Ältere Smart-TVs reagieren langsamer als eine eigenständige Box, und Updates des Fernsehers können die App beeinflussen.</p>
<p>Wichtig für die Einrichtung: Die MAC-Adresse, die Smart STB anzeigt, ist nicht zwingend die Hardware-Adresse Ihres Fernsehers, sondern die Adresse, mit der sich die App beim Portal meldet. Teilen Sie uns genau diese Adresse mit, damit wir den Portal-Zugang freischalten können. Ändert sich die Adresse nach einer Neuinstallation, muss die Freischaltung angepasst werden.</p>
<p>Wenn Ihnen die Portal-Lösung zu umständlich ist, sind Apps mit ${L('/xtream-codes/', 'Xtream Codes')} oder MAC-Upload wie der ${L('/ibo-player/', 'IBO Player')} eine einfachere Alternative für Samsung und LG.</p>`)],
    faq: [['Welche MAC-Adresse muss ich für Smart STB angeben?', 'Die Adresse, die Smart STB beim Start anzeigt. Sie wird für die Freischaltung des Portals verwendet und kann sich von der Hardware-Adresse des Fernsehers unterscheiden.']],
    sources: [S.stb, S.mac, S.tizen],
  },
  '/net-iptv/': {
    updated,
    title: `Net IPTV einrichten: MAC-Adresse & Playlist | ${site.name}`,
    h1: 'Net IPTV einrichten: Anleitung per MAC-Adresse und Playlist',
    sections: [praxis('Net IPTV im Alltag: Playlist ändern, Gerät wechseln', `<p>Weil Net IPTV über die MAC-Adresse arbeitet, ist die Playlist an den Fernseher gebunden, nicht an ein Konto. Das hat Vor- und Nachteile: Sie richten den Zugang einmal am Computer ein und müssen am Fernseher nichts tippen. Wechseln Sie aber den Fernseher, braucht das neue Gerät eine eigene Aktivierung beim App-Anbieter und einen neuen Eintrag auf der Website.</p>
<p>Wenn Sie die Playlist ändern möchten, etwa nach einem Wechsel von Test- auf Jahrespaket, laden Sie die neue Liste auf der Website des App-Anbieters hoch und starten Net IPTV anschließend neu. Bleibt die alte Liste sichtbar, löschen Sie sie zuerst auf der Website und laden dann die neue hoch.</p>
<p>Notieren Sie die MAC-Adresse an einem sicheren Ort. Sie brauchen sie nicht nur für die Einrichtung, sondern auch, wenn Sie uns wegen eines Problems schreiben – so können wir schneller helfen.</p>`)],
    faq: [['Was passiert mit Net IPTV, wenn ich einen neuen Fernseher kaufe?', 'Der neue Fernseher hat eine andere MAC-Adresse. Sie aktivieren die App dort neu und laden Ihre Playlist auf der Website erneut hoch.']],
    sources: [S.mac, S.tizen, S.webos],
  },
  '/maxplayer/': {
    updated,
    title: `MaxPlayer einrichten: Samsung TV & Android | ${site.name}`,
    sections: [praxis('MaxPlayer auf dem Samsung-Fernseher: Tipps für den Alltag', `<p>MaxPlayer ist vor allem auf Samsung-Fernsehern mit Tizen verbreitet, weil es dort nur wenige IPTV-Player gibt. Die App läuft direkt auf dem Fernseher, Sie brauchen also keinen zusätzlichen Stick. Wie bei anderen Smart-TV-Playern gilt: Die Leistung hängt vom Fernseher ab. Neuere Samsung-Modelle laden Senderliste und Programmführer deutlich schneller als Geräte, die schon einige Jahre alt sind.</p>
<p>Für ein stabiles Bild verbinden Sie den Fernseher per LAN-Kabel mit dem Router. Viele Samsung-Fernseher haben einen Netzwerkanschluss auf der Rückseite, der im Alltag oft ungenutzt bleibt. Schalten Sie außerdem in den Fernseher-Einstellungen die Funktion für den schnellen Start aus, wenn die App nach dem Einschalten nicht richtig lädt.</p>
<p>Wenn MaxPlayer auf Ihrem Modell nicht angeboten wird, finden Sie unter ${L('/iptv-samsung-tv/', 'IPTV auf dem Samsung Smart TV')} weitere Apps und die Lösung mit einem ${L('/iptv-fire-tv-stick/', 'Fire TV Stick')}.</p>`)],
    faq: [devicesFaq('MaxPlayer')],
    sources: [S.tizen, S.m3u],
  },
  '/pvr-iptv-simple-client/': {
    updated,
    description: 'PVR IPTV Simple Client in Kodi einrichten: Add-on aktivieren, M3U-Link und EPG eintragen, Sender sortieren und typische Fehler beheben.',
    sections: [praxis('Simple Client im Alltag: Kodi als Fernseh-Zentrale', `<p>Mit dem PVR IPTV Simple Client wird ${L('/kodi-iptv/', 'Kodi')} zu einer vollwertigen Fernseh-Oberfläche: Die Sender erscheinen im Bereich „TV“, der Programmführer füllt sich mit den Sendungen, und Sie schalten mit der Fernbedienung um. Das funktioniert auf dem PC, auf einem Raspberry Pi, auf Android-TV-Boxen und auf dem Fire TV Stick.</p>
<p>Ein wichtiger Unterschied zu reinen IPTV-Apps: Der Simple Client lädt die Playlist beim Start von Kodi. Ändern Sie Ihre Zugangsdaten, zum Beispiel nach dem Wechsel vom Test zum Paket, tragen Sie den neuen M3U-Link in den Einstellungen des Add-ons ein und starten Kodi anschließend neu. Bleiben alte Sender stehen, hilft unter „PVR & Live-TV“ die Funktion zum Zurücksetzen der Daten.</p>
<p>Verwenden Sie in Kodi nur Add-ons aus dem offiziellen Kodi-Repository. Der Simple Client gehört dazu und wird vom Kodi-Team gepflegt; inoffizielle Add-ons aus Foren sind ein Sicherheitsrisiko.</p>`)],
    faq: [['Warum zeigt der Simple Client nach einer Änderung noch alte Sender?', 'Kodi speichert die Senderdaten zwischen. Tragen Sie den neuen Link ein, starten Sie Kodi neu und setzen Sie bei Bedarf unter „PVR & Live-TV“ die Daten zurück.']],
    sources: [S.kodiSimple, S.kodi, S.epg],
  },
  '/iptv-pro-sofronov/': {
    updated,
    description: 'IPTV und IPTV Pro von Alexander Sofronov einrichten: M3U-Playlist hinzufügen, Programmführer laden, Unterschiede der Pro-Version und Tipps für Android.',
    sections: [praxis('Für wen sich die App von Alexander Sofronov eignet', `<p>Die IPTV-App von Alexander Sofronov gehört zu den ältesten IPTV-Playern im Google Play Store und ist bewusst schlicht gehalten. Sie richtet sich an Nutzer, die eine M3U-Playlist einfach abspielen möchten, ohne sich durch viele Menüs zu klicken. Auf Smartphones und Tablets funktioniert das sehr gut; auf dem Fernseher wirkt die Oberfläche dagegen eher wie eine Liste als wie ein Programmführer.</p>
<p>Ein Vorteil der App: Sie können einen externen Videoplayer wie ${L('/mx-player-iptv/', 'MX Player')} oder ${L('/vlc-iptv/', 'VLC')} einstellen. Läuft ein Sender im eingebauten Player nicht rund, öffnen Sie ihn so in einem anderen Player. Die kostenpflichtige Pro-Version entfernt die Werbung und schaltet Zusatzfunktionen frei.</p>
<p>Wer IPTV hauptsächlich am Fernseher schaut, ist mit ${L('/tivimate/', 'TiviMate')} oder ${L('/ott-navigator/', 'OTT Navigator')} meist besser bedient.</p>`)],
    faq: [['Kann ich in der App einen anderen Videoplayer nutzen?', 'Ja. In den Einstellungen lässt sich ein externer Player wie MX Player oder VLC auswählen. Das hilft, wenn ein Sender im eingebauten Player hakt.']],
    sources: [S.m3u, S.androidtv],
  },
  '/vu-iptv-player/': {
    updated,
    description: 'VU IPTV Player einrichten: die App für iPhone, iPad und Android mit Xtream Codes oder M3U verbinden, Unterschiede zu VU Player Pro und Hilfe bei Fehlern.',
    sections: [praxis('VU IPTV Player im Alltag: worauf Sie achten sollten', `<p>Der Name sorgt oft für Verwirrung: Der VU IPTV Player ist eine App für Smartphones und Tablets und hat nichts mit den Vu+-Satellitenreceivern zu tun, die mit ${L('/iptv-enigma2/', 'Enigma2')} arbeiten. Wer einen solchen Receiver besitzt, richtet IPTV dort über eine Senderliste ein, nicht über diese App.</p>
<p>Auf dem iPhone oder Android-Handy ist der VU IPTV Player eine einfache Möglichkeit, unterwegs fernzusehen. Achten Sie im Mobilfunknetz auf Ihr Datenvolumen: Ein HD-Stream verbraucht pro Stunde schnell mehrere Gigabyte. Stellen Sie deshalb unterwegs eine niedrigere Qualität ein und nutzen Sie zu Hause WLAN.</p>
<p>Laden Sie die App nur aus dem offiziellen App Store oder Google Play Store. Versionen von Drittseiten können veraltet oder manipuliert sein.</p>`)],
    faq: [['Wie viel Datenvolumen braucht der VU IPTV Player?', 'Das hängt von der Qualität ab. Ein HD-Stream kann pro Stunde mehrere Gigabyte verbrauchen. Unterwegs empfiehlt sich eine niedrigere Qualitätsstufe.']],
    sources: [S.m3u, S.hls],
  },
  '/bob-player/': {
    updated,
    title: `Bob Player einrichten: MAC-Adresse & Playlist | ${site.name}`,
    sections: [praxis('Bob Player im Alltag: Playlist pflegen und Gerät wechseln', `<p>Bob Player und Bob Pro arbeiten wie viele Smart-TV-Player mit der MAC-Adresse und einem Device Key. Die Playlist hinterlegen Sie auf der Website des App-Anbieters, der Fernseher lädt sie dann automatisch. Das ist besonders bequem auf ${L('/iptv-samsung-tv/', 'Samsung-')} und ${L('/iptv-lg-tv/', 'LG-Fernsehern')}, wo das Tippen langer Zugangsdaten mit der Fernbedienung mühsam ist.</p>
<p>Fotografieren Sie MAC-Adresse und Device Key nach dem ersten Start der App. Sie brauchen beide Angaben, wenn Sie die Playlist später ändern, etwa beim Wechsel vom kostenlosen Test zum Paket. Nach jeder Änderung auf der Website starten Sie die App neu.</p>
<p>Die Aktivierung von Bob Player oder Bob Pro bezahlen Sie direkt beim App-Anbieter. ${site.name} liefert nur die Zugangsdaten für die Sender; die App selbst ist ein Produkt eines anderen Unternehmens.</p>`)],
    faq: [['Muss ich Bob Player bei jedem Fernseher neu aktivieren?', 'Ja. Die Aktivierung ist an die MAC-Adresse des Geräts gebunden. Ein neuer Fernseher braucht eine eigene Aktivierung beim App-Anbieter.']],
    sources: [S.mac, S.tizen, S.webos],
  },
  '/iptv-extreme/': {
    updated,
    description: 'IPTV Extreme und IPTV Extreme Pro einrichten: Playlist hinzufügen, EPG laden, Aufnahmen nutzen und die Unterschiede der Pro-Version für Android TV.',
    sections: [praxis('IPTV Extreme für Fortgeschrittene: Aufnahmen und Player-Engines', `<p>IPTV Extreme ist die richtige Wahl, wenn Sie gern selbst einstellen. Die App bietet mehrere Player-Engines: Läuft ein Sender in der einen ruckelig, schalten Sie auf eine andere um. Außerdem können Sie Sendungen auf den Gerätespeicher oder einen USB-Stick aufnehmen, sofern Ihr Android-Gerät genug freien Platz hat.</p>
<p>Für Aufnahmen auf dem Fernseher empfiehlt sich eine Android-TV-Box mit USB-Anschluss, etwa die ${L('/iptv-nvidia-shield/', 'NVIDIA Shield')}. Auf Sticks mit wenig Speicher ist der Platz schnell voll. Planen Sie für eine Stunde HD-Aufnahme mehrere Gigabyte ein.</p>
<p>Wer weniger Einstellungen möchte und vor allem am Fernseher schaut, kommt mit ${L('/tivimate/', 'TiviMate')} oder ${L('/sparkle-tv/', 'Sparkle TV')} schneller ans Ziel.</p>`)],
    faq: [['Wohin speichert IPTV Extreme Aufnahmen?', 'Auf den internen Speicher oder einen angeschlossenen USB-Speicher. Den Speicherort legen Sie in den Einstellungen der App fest.']],
    sources: [S.androidtv, S.epg],
  },
  '/smarters-player-lite/': {
    updated,
    description: 'Smarters Player Lite einrichten: die Smarters-App für iPhone, iPad und Apple TV, Anmeldung per Xtream Codes oder M3U, Einstellungen und Fehlerhilfe.',
    sections: [praxis('Smarters Player Lite auf iPhone und Apple TV im Vergleich', `<p>Smarters Player Lite ist die Smarters-App für Apple-Geräte. Wer ${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')} von Android oder vom Fire TV Stick kennt, findet sich sofort zurecht: Live-TV, Filme und Serien liegen in getrennten Bereichen, die Anmeldung erfolgt per Xtream Codes.</p>
<p>Auf dem <strong>iPhone</strong> ist die App praktisch für unterwegs und für den schnellen Blick auf Nachrichten. Auf dem <strong>Apple TV</strong> ist sie die einfache Lösung für das Wohnzimmer, wenn Sie keine Kauf-App wie ${L('/iplaytv/', 'iPlayTV')} möchten. Mit dem iPad lässt sich die App auch gut in der Küche oder im Garten nutzen.</p>
<p>Tipp: Melden Sie sich auf allen Geräten mit denselben Zugangsdaten an, achten Sie aber auf die Anzahl gleichzeitiger Geräte in Ihrem Paket. Bei ${site.name} wählen Sie 1 bis ${max} Geräte.</p>`)],
    faq: [devicesFaq('Smarters Player Lite')],
    sources: [S.appletv, S.m3u],
  },
  '/perfect-player/': {
    updated,
    sections: [praxis('Perfect Player einrichten wie ein Profi: Senderlogos und EPG-Zuordnung', `<p>Perfect Player ist schlank und schnell, verlangt aber etwas Sorgfalt bei der Einrichtung. Damit Programmführer und Senderlogos richtig erscheinen, muss jeder Sender in der Playlist einem Eintrag im EPG zugeordnet sein. Bei unseren Zugangsdaten geschieht das automatisch, wenn Sie den EPG-Link aus der E-Mail unter „Einstellungen“ › „Allgemein“ eintragen.</p>
<p>Fehlt bei einzelnen Sendern das Programm, aktualisieren Sie zuerst das EPG manuell. Hilft das nicht, löschen Sie den Cache der App und laden die Playlist neu. Perfect Player ist ideal für ältere Android-TV-Boxen, weil die App wenig Arbeitsspeicher braucht.</p>
<p>Wenn Sie Filme und Serien bequem durchsuchen möchten, ist eine App mit Xtream-Unterstützung wie ${L('/tivimate/', 'TiviMate')} oder ${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')} die bessere Ergänzung.</p>`)],
    faq: [['Läuft Perfect Player auf älteren Android-Boxen?', 'Ja. Die App braucht wenig Arbeitsspeicher und eignet sich deshalb gut für ältere Android-TV-Boxen und Sticks.']],
  },
  '/stbemu/': {
    updated,
    sections: [praxis('STBEmu im Alltag: Profil sichern und Fehler vermeiden', `<p>STBEmu speichert Ihre Einstellungen in einem <strong>Profil</strong>. Notieren Sie nach der Einrichtung Portal-URL und MAC-Adresse, die in diesem Profil hinterlegt sind. Nach einem App-Update oder einem Zurücksetzen des Geräts können Sie das Profil damit in wenigen Minuten wiederherstellen.</p>
<p>Ein häufiger Fehler ist eine abweichende MAC-Adresse: Die Adresse im Profil muss genau der Adresse entsprechen, die für Ihr Portal freigeschaltet wurde. Ändern Sie diese Adresse nicht eigenmächtig, sondern schreiben Sie uns, wenn Sie das Gerät wechseln. Auf dem Fire TV Stick sollten Sie außerdem die Bildschirmauflösung im Profil an Ihren Fernseher anpassen, damit die Oberfläche scharf erscheint.</p>
<p>STBEmu ist ideal für alle, die die Bedienung einer ${L('/mag-box/', 'MAG-Box')} gewohnt sind. Wer neu einsteigt, kommt mit Xtream-Apps oft schneller zurecht.</p>`)],
    faq: [['Was mache ich, wenn STBEmu nach einem Update das Portal nicht mehr findet?', 'Prüfen Sie im Profil Portal-URL und MAC-Adresse. Stimmen beide mit unserer E-Mail überein, starten Sie die App neu. Bleibt der Fehler, schreiben Sie uns.']],
  },
  '/ott-navigator/': {
    updated,
    description: 'OTT Navigator einrichten: Installation auf Android TV und Fire TV, Login per Xtream Codes, M3U oder Portal, Programmführer und was Premium bietet.',
    sections: [praxis('OTT Navigator für Fortgeschrittene: Ansichten, Catch-Up und Profile', `<p>OTT Navigator bietet mehr Einstellungen als die meisten IPTV-Apps. Sie können zwischen verschiedenen Ansichten des Programmführers wählen, Sender in eigenen Gruppen sortieren und mehrere Zugänge parallel verwalten. Für Familien praktisch: Mit Profilen erhält jedes Familienmitglied seine eigenen Favoriten.</p>
<p>Unterstützt Ihr Zugang <strong>Catch-Up</strong>, zeigt OTT Navigator vergangene Sendungen direkt im Programmführer an. Sie wählen eine Sendung aus und starten sie, als würden Sie eine Aufnahme ansehen. Wie Catch-Up funktioniert, erklären wir unter ${L('/iptv-vod/', 'IPTV-VOD und Catch-Up')}.</p>
<p>Die Vielzahl an Optionen hat eine Kehrseite: Für Einsteiger ist die App anfangs unübersichtlich. Beginnen Sie mit den Standardeinstellungen und ändern Sie nur das, was Sie wirklich brauchen.</p>`)],
    faq: [['Unterstützt OTT Navigator Catch-Up?', 'Ja, wenn Ihr Zugang Catch-Up für den jeweiligen Sender bereitstellt. Vergangene Sendungen erscheinen dann direkt im Programmführer.']],
  },
  '/duplecast/': {
    updated,
    title: `Duplecast einrichten: Geräte-ID & Playlist | ${site.name}`,
    sections: [praxis('Duplecast im Alltag: mehrere Playlists und Fernseher', `<p>Duplecast verwaltet Playlists über eine Website: Sie melden den Fernseher mit seiner Geräte-ID an und fügen die Playlist am Computer hinzu. Das ist hilfreich, wenn mehrere Fernseher im Haushalt dieselbe App nutzen. Jeder Fernseher hat seine eigene Geräte-ID, die Playlist tragen Sie für jedes Gerät einzeln ein.</p>
<p>Achten Sie darauf, dass die Anzahl der gleichzeitig genutzten Fernseher zu Ihrem Paket passt. Bei ${site.name} wählen Sie 1 bis ${max} Geräte. Läuft auf zwei Fernsehern gleichzeitig ein Programm, obwohl Ihr Paket nur eines umfasst, bricht einer der Streams ab.</p>
<p>Wie bei allen Smart-TV-Playern hilft eine LAN-Verbindung am meisten gegen Ruckler. Wenn Duplecast auf Ihrem Modell nicht verfügbar ist, finden Sie unter ${L('/ibo-player-alternativen/', 'IBO-Player-Alternativen')} weitere Apps, die nach dem gleichen Prinzip funktionieren.</p>`)],
  },
  '/gse-smart-iptv/': {
    updated,
    sections: [praxis('GSE Smart IPTV für Apple-Nutzer: Tipps für den Alltag', `<p>GSE Smart IPTV gehört zu den bekanntesten IPTV-Playern auf iPhone und iPad und bietet viele Einstellungen: eigene EPG-Quellen, Sortierung, Kindersicherung und Streaming per AirPlay oder Chromecast. Diese Vielfalt macht die App mächtig, aber auch etwas technischer als neuere Apps wie ${L('/iptvx/', 'IPTVX')}.</p>
<p>Für den Alltag empfehlen wir: Legen Sie Ihren Zugang per Xtream Codes an, damit Live-TV, Filme und Serien getrennt erscheinen. Aktivieren Sie die Kindersicherung mit einer PIN, wenn Kinder das Gerät mitbenutzen. Und wenn Sie vom iPhone auf den Fernseher streamen möchten, prüfen Sie, ob Ihr Fernseher AirPlay unterstützt oder ein Chromecast angeschlossen ist.</p>
<p>Am Apple TV ist eine native App mit Programmführer meist komfortabler als das Streamen vom Handy.</p>`)],
    faq: [['Hat GSE Smart IPTV eine Kindersicherung?', 'Ja. Sie können Kategorien oder Sender mit einer PIN schützen. Die Einstellung finden Sie im Bereich für die Kindersicherung der App.']],
  },
  '/vlc-iptv/': {
    updated,
    title: `IPTV mit VLC: M3U-Playlist öffnen & abspielen | ${site.name}`,
    description: 'IPTV mit VLC schauen: So öffnen Sie Ihren M3U-Link im kostenlosen VLC media player unter Windows, Mac, Android und iOS – mit Tipps gegen Ruckeln.',
    sections: [praxis('VLC als Werkzeug: Playlist prüfen und Streams testen', `<p>VLC ist nicht nur ein Player, sondern auch ein gutes Prüfwerkzeug. Wenn ein Sender in Ihrer IPTV-App nicht startet, öffnen Sie denselben Stream in VLC. Läuft er dort, liegt das Problem an der App oder ihren Einstellungen; läuft er auch in VLC nicht, liegt es eher an der Verbindung. Diese einfache Gegenprobe spart Zeit bei der ${L('/iptv-probleme/', 'Fehlersuche')}.</p>
<p>Unter „Werkzeuge“ › „Medieninformationen“ zeigt VLC außerdem Auflösung, Codec und Datenrate eines Streams an. So sehen Sie, ob ein Sender in HD oder 4K kommt und ob Ihr Gerät das Format (etwa H.265/HEVC) unterstützt.</p>
<p>Für das tägliche Fernsehen mit Programmführer ist eine IPTV-App komfortabler. Als zuverlässiger Zweit-Player gehört VLC aber auf jeden Computer.</p>`)],
    faq: [['Wie sehe ich in VLC, in welcher Qualität ein Sender läuft?', 'Öffnen Sie während der Wiedergabe „Werkzeuge“ › „Medieninformationen“ › „Codec“. Dort stehen Auflösung, Codec und Bildrate.']],
    sources: [S.hevc],
  },
  '/xciptv/': {
    updated,
    sections: [praxis('XCIPTV im Familienalltag: Kindersicherung und Profile', `<p>XCIPTV ist kostenlos und deckt die wichtigsten Funktionen ab: Live-TV mit Programmführer, Filme, Serien und Catch-Up, sofern Ihr Zugang es anbietet. Für Familien praktisch ist die Kindersicherung: Kategorien lassen sich mit einer PIN sperren, sodass Kinder nur die freigegebenen Bereiche sehen.</p>
<p>Auf dem Fire TV Stick lohnt sich nach der Einrichtung ein Blick in die Player-Einstellungen. Stellen Sie dort den Decoder um, wenn einzelne Sender ruckeln oder ohne Ton laufen. Viele Probleme lassen sich so lösen, ohne die App zu wechseln.</p>
<p>Weil XCIPTV kostenlos ist, eignet sich die App gut für den ${L('/iptv-testen/', 'kostenlosen Test')}: Sie prüfen Bild und Bedienung, ohne Geld für eine App auszugeben.</p>`)],
  },
  '/implayer/': {
    updated,
    title: `iMPlayer einrichten: Fire TV, Android & Apple | ${site.name}`,
    sections: [praxis('iMPlayer am Fernseher: Bedienung, Profile und Leistung', `<p>iMPlayer setzt auf eine moderne, bildreiche Oberfläche mit großen Kacheln für Filme und Serien. Das sieht auf dem Fernseher gut aus, verlangt aber etwas mehr Leistung vom Gerät. Auf dem ${L('/iptv-fire-tv-stick-4k-max/', 'Fire TV Stick 4K Max')} oder Fernsehern mit Google TV läuft die App flüssig; auf älteren Sticks kann das Laden der Mediathek dauern.</p>
<p>Nutzen Sie die Profile, wenn mehrere Personen im Haushalt schauen: Favoriten und zuletzt gesehene Inhalte bleiben dann getrennt. Für Live-TV empfehlen wir, nur die Kategorien anzuzeigen, die Sie wirklich nutzen, damit die Senderliste übersichtlich bleibt.</p>
<p>Die Premium-Funktionen von iMPlayer bezahlen Sie beim App-Anbieter. Für den Einstieg reicht die kostenlose Version, um die Bedienung mit Ihrem Zugang zu testen.</p>`)],
  },
  '/kodi-iptv/': {
    updated,
    description: 'IPTV in Kodi einrichten: Live-TV mit dem Add-on PVR IPTV Simple Client, M3U-Link und Programmführer eintragen – plus IPTV in Jellyfin und Plex.',
  },
};
