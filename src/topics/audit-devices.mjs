// SEO audit (November 2026), device pages: a unique practice section per
// device (picture/sound settings, buying advice, household tips), extra FAQ,
// outbound sources and corrected titles/descriptions. Facts about hardware
// are hedged by model year, because ranges change.
import { site, devicePrices } from '../site.mjs';
import { L } from './util.mjs';
import { S } from './sources.mjs';

const max = Math.max(...Object.keys(devicePrices).map(Number));
const updated = '2026-11-25';
const praxis = (h, html, before = 'probleme') => ({ id: 'praxis', h, html, before });
const trial = `Ob Ihr Gerät und Ihre Leitung zusammenpassen, prüfen Sie am sichersten mit dem ${L('/iptv-testen/', 'kostenlosen Test')}, bevor Sie ein ${L('/#preise', 'Paket')} wählen.`;

export default {
  '/iptv-geraete/': {
    updated,
    sections: [{ id: 'haushalt', h: 'Welches IPTV-Gerät passt zu Ihrem Haushalt?', before: 'einrichtung', html: `<p>Die Frage nach dem „besten“ Gerät lässt sich nur mit Blick auf Ihren Alltag beantworten. Drei typische Situationen helfen bei der Entscheidung:</p>
<ul><li><strong>Ein Fernseher, wenig Technikerfahrung:</strong> Prüfen Sie zuerst, ob Ihr Fernseher eine passende App hat. Ist das nicht der Fall, ist ein ${L('/iptv-fire-tv-stick/', 'Fire TV Stick')} die einfachste Lösung: einstecken, App installieren, Zugangsdaten eintragen.</li>
<li><strong>Familie mit mehreren Bildschirmen:</strong> Fernseher im Wohnzimmer, Tablet in der Küche, Handy unterwegs. Hier zählt, dass alle Geräte dieselbe App nutzen können und Ihr Paket genügend gleichzeitige Geräte umfasst – bei ${site.name} sind es 1 bis ${max}.</li>
<li><strong>Anspruchsvolle Nutzer:</strong> Wer viel Sport in 4K schaut oder aufnehmen möchte, ist mit einer leistungsstarken ${L('/iptv-box/', 'IPTV-Box')} wie der ${L('/iptv-nvidia-shield/', 'NVIDIA Shield')} oder dem ${L('/iptv-fire-tv-cube/', 'Fire TV Cube')} am besten bedient – beide lassen sich per LAN-Kabel anschließen.</li></ul>
<p>Unabhängig vom Gerät gilt: Eine kabelgebundene Verbindung zum Router ist der wirksamste Schutz gegen Ruckler. Wo das nicht geht, hilft ein Mesh-WLAN oder ein Powerline-Adapter. ${trial}</p>` }],
    faq: [['Kann ich IPTV auf einem alten Fernseher ohne Smart-TV nutzen?', 'Ja. Jeder Fernseher mit HDMI-Anschluss wird mit einem Streaming-Stick oder einer IPTV-Box IPTV-fähig. Das Gerät bringt die App mit, der Fernseher zeigt nur das Bild.']],
  },
  '/iptv-android/': {
    updated,
    sections: [{ id: 'praxis', h: 'Android im Alltag: Handy, Tablet und Fernseher verbinden', before: 'boxen', html: `<p>Android ist das flexibelste System für IPTV, weil es auf so vielen Geräten läuft: auf Smartphones und Tablets, auf Fernsehern von Sony, Philips oder TCL mit Google TV, auf Streaming-Sticks und auf TV-Boxen. Der Vorteil für Sie: Eine App wie ${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')} oder ${L('/televizo/', 'Televizo')} funktioniert auf all diesen Geräten ähnlich, und Sie müssen sich nur einmal einarbeiten.</p>
<p>Ein paar Unterschiede sollten Sie kennen. Auf dem <strong>Handy</strong> zählt das Datenvolumen: Stellen Sie unterwegs eine niedrigere Qualität ein. Auf dem <strong>Fernseher</strong> zählt die Bedienung mit der Fernbedienung: Apps wie ${L('/tivimate/', 'TiviMate')} sind dafür gebaut. Und auf günstigen <strong>Android-Boxen</strong> zählt die Sicherheit: Prüfen Sie, ob Google Play Protect aktiv ist, und installieren Sie Apps nur aus dem Play Store oder von der offiziellen Website des Entwicklers.</p>
<p>Wer zwischen den Geräten wechselt, braucht keine separaten Zugänge, solange die Zahl der gleichzeitig genutzten Geräte zu Ihrem Paket passt. ${trial}</p>` }],
    faq: [['Ist Google TV dasselbe wie Android TV?', 'Google TV ist die neuere Oberfläche auf Basis von Android TV. Für IPTV ist das gleich: Beide nutzen den Google Play Store mit denselben Apps.']],
    sources: [S.playProtect],
  },
  '/iptv-samsung-tv/': {
    updated,
    description: 'IPTV auf dem Samsung Smart TV: welche Apps es für Tizen gibt, wie Sie die Playlist per MAC-Adresse einrichten und wann ein Fire TV Stick besser passt.',
  },
  '/iptv-lg-tv/': {
    updated,
    description: 'IPTV auf dem LG Smart TV mit webOS: passende Apps aus dem LG Content Store, Einrichtung per MAC-Adresse oder Playlist-Link und Tipps gegen Ruckeln.',
  },
  '/iptv-smart-tv/': {
    updated,
    sections: [{ id: 'kaufberatung', h: 'Neuen Fernseher kaufen? Darauf achten Sie für IPTV', before: 'einrichten', html: `<p>Wenn Sie ohnehin einen neuen Fernseher planen, lohnt ein Blick auf das Betriebssystem. Für IPTV ist es wichtiger als die Bildschirmgröße, weil es bestimmt, welche Apps Sie direkt am Fernseher installieren können.</p>
<ul><li><strong>Google TV oder Android TV</strong> (z. B. viele Modelle von ${L('/iptv-sony-bravia/', 'Sony')}, ${L('/iptv-philips-tv/', 'Philips')} und ${L('/iptv-tcl-tv/', 'TCL')}): größte App-Auswahl, kein Zusatzgerät nötig.</li>
<li><strong>Fire TV integriert</strong> (z. B. einzelne Modelle von ${L('/iptv-grundig-tv/', 'Grundig')}, ${L('/iptv-telefunken-tv/', 'Telefunken')} oder ${L('/iptv-panasonic-tv/', 'Panasonic')}): dieselben Apps wie auf dem Fire TV Stick.</li>
<li><strong>Tizen und webOS</strong> (${L('/iptv-samsung-tv/', 'Samsung')}, ${L('/iptv-lg-tv/', 'LG')}): gute Fernseher, aber eine kleinere Auswahl an IPTV-Playern, meist mit Einrichtung per MAC-Adresse.</li>
<li><strong>VIDAA und andere Systeme</strong> (${L('/iptv-hisense-tv/', 'Hisense')}, teils Toshiba): hier ist ein Stick meist die einfachste Lösung.</li></ul>
<p>Achten Sie außerdem auf einen LAN-Anschluss und auf HEVC-Unterstützung, wenn Sie Inhalte in ${L('/iptv-4k/', '4K')} schauen möchten. Beides bieten heute fast alle Mittel- und Oberklassemodelle.</p>` }],
  },
  '/iptv-pc/': {
    updated,
    sections: [{ id: 'praxis', h: 'IPTV am Computer: Tipps für Laptop, Desktop und Mini-PC', before: 'browser', html: `<p>Am Computer haben Sie die größte Auswahl an Playern: vom kostenlosen ${L('/vlc-iptv/', 'VLC')} über ${L('/myiptv-player/', 'MyIPTV Player')} aus dem Microsoft Store bis zu ${L('/iptvnator/', 'IPTVnator')} für Windows, macOS und Linux. Damit das Bild auch bei langen Abenden stabil bleibt, helfen ein paar Grundregeln.</p>
<ul><li><strong>Energiesparen anpassen:</strong> Stellen Sie ein, dass der Laptop während der Wiedergabe nicht in den Ruhezustand wechselt, und schließen Sie ihn bei langen Sendungen an das Netzteil an.</li>
<li><strong>LAN statt WLAN:</strong> Viele Desktop-PCs haben einen Netzwerkanschluss; für Laptops ohne Buchse gibt es günstige USB-Ethernet-Adapter.</li>
<li><strong>Mini-PC am Fernseher:</strong> Ein kleiner Windows- oder Linux-PC per HDMI am Fernseher ist eine leistungsfähige Alternative zur IPTV-Box – mit ${L('/kodi-iptv/', 'Kodi')} sogar mit Fernbedienung.</li>
<li><strong>Firewall-Abfrage bestätigen:</strong> Fragt Windows beim ersten Start nach dem Netzwerkzugriff, erlauben Sie ihn für private Netzwerke, sonst bleibt die Senderliste leer.</li></ul>` }],
    sources: [S.m3u],
  },
  '/iptv-stick/': {
    updated,
    description: 'Welcher IPTV-Stick ist der richtige? Fire TV Stick, Google-TV-Geräte und Android-Sticks im Vergleich – nach App-Auswahl, 4K, Speicher und Bedienung.',
    sections: [{ id: 'praxis', h: 'IPTV-Stick im Alltag: Strom, Hitze und Fernbedienung', before: 'einrichten', html: `<p>Ein Streaming-Stick ist schnell eingesteckt, doch drei Details entscheiden darüber, ob er im Alltag zuverlässig läuft. Erstens die <strong>Stromversorgung</strong>: Nutzen Sie das mitgelieferte Netzteil statt des USB-Anschlusses am Fernseher. Viele USB-Buchsen liefern zu wenig Strom, und der Stick startet dann bei jedem Einschalten neu oder hängt.</p>
<p>Zweitens die <strong>Wärme</strong>: Sticks sitzen direkt hinter dem Fernseher, wo es warm wird. Eine kurze HDMI-Verlängerung, die meist beiliegt, bringt den Stick aus dem Hitzestau und verbessert oft auch den WLAN-Empfang. Drittens die <strong>Fernbedienung</strong>: Aktivieren Sie am Fernseher HDMI-CEC, dann schaltet der Stick den Fernseher mit ein und Sie brauchen nur noch eine Fernbedienung.</p>
<p>Für ${L('/iptv-4k/', '4K')} und flüssige Programmführer empfehlen wir ein aktuelles Modell wie den ${L('/iptv-fire-tv-stick-4k-max/', 'Fire TV Stick 4K Max')}. Für einen Zweitfernseher in HD reicht ein günstiger Stick. ${trial}</p>` }],
  },
  '/iptv-box/': {
    updated,
    sections: [{ id: 'kaufen', h: 'IPTV-Box kaufen: Checkliste vor der Bestellung', before: 'empfehlung', html: `<p>Wer eine IPTV-Box kaufen möchte, findet im Handel Geräte von wenigen Dutzend bis mehreren hundert Euro. Der Preis allein sagt wenig über die Eignung für IPTV. Prüfen Sie vor der Bestellung diese Punkte:</p>
<ol class="guide-steps"><li><strong>Betriebssystem:</strong> Eine Box mit zertifiziertem Android TV oder Google TV erhält Updates und hat Zugriff auf den Play Store. Bei Boxen mit „Android“ ohne Zertifizierung fehlen oft Sicherheitsupdates.</li>
<li><strong>LAN-Anschluss:</strong> Für ein stabiles Bild ist ein Ethernet-Anschluss Gold wert. Viele Sticks haben keinen; Boxen meistens schon.</li>
<li><strong>Speicher und Arbeitsspeicher:</strong> Mindestens 2 GB RAM und 8 GB Speicher sind sinnvoll, damit Programmführer und Apps flüssig laufen.</li>
<li><strong>4K und HEVC:</strong> Für Ultra HD braucht die Box Unterstützung für H.265/HEVC und einen HDMI-2.0-Ausgang.</li>
<li><strong>Keine „vorinstallierten Sender“:</strong> Boxen, die mit fertig eingerichteten Senderpaketen beworben werden, sind rechtlich problematisch und oft unsicher. Kaufen Sie die Box ohne Inhalte und richten Sie Ihren Zugang selbst ein.</li></ol>
<p>Tests einzelner Boxen finden Sie unter ${L('/beste-iptv-box/', 'Beste IPTV-Box')}; für die meisten Haushalte genügt aber auch ein ${L('/iptv-stick/', 'Streaming-Stick')}.</p>` }],
    sources: [S.hevc, S.urheber],
  },
  '/iptv-fire-tv-stick-hd/': {
    updated,
    title: `IPTV auf Fire TV Stick HD: Apps & Anleitung | ${site.name}`,
    description: 'IPTV auf dem Fire TV Stick HD einrichten: Unterschiede zu Lite und 4K, die besten Apps, Installation per Appstore oder Downloader und Hilfe bei Rucklern.',
    sections: [praxis('Fire TV Stick HD als Zweitgerät: Schlafzimmer, Küche, Ferienwohnung', `<p>Der Fire TV Stick HD ist die naheliegende Wahl für Fernseher, die ohnehin kein 4K darstellen: den kleinen Fernseher im Schlafzimmer, das Gerät in der Küche oder den Fernseher in der Ferienwohnung. Auf einem Full-HD-Bildschirm sehen Sie keinen Unterschied zu einem 4K-Stick, zahlen aber weniger.</p>
<p>Gegenüber dem Lite hat der HD eine Fernbedienung mit Tasten für Lautstärke und Ein/Aus des Fernsehers. Das ist im Alltag bequemer, weil Sie nur eine Fernbedienung brauchen. Für die Ferienwohnung gilt: Nehmen Sie den Stick einfach mit, verbinden Sie ihn mit dem WLAN vor Ort und melden Sie sich mit Ihren gewohnten Zugangsdaten an.</p>
<p>Achten Sie bei mehreren Fernsehern darauf, dass Ihr Paket genug gleichzeitige Geräte umfasst – bei ${site.name} 1 bis ${max}. ${trial}</p>`)],
    faq: [['Kann ich den Fire TV Stick HD im Urlaub nutzen?', 'Ja. Stecken Sie ihn an einen Fernseher mit HDMI-Anschluss, verbinden Sie ihn mit dem WLAN vor Ort und melden Sie sich wie gewohnt an.']],
    sources: [S.fire],
  },
  '/iptv-fire-tv-stick-lite/': {
    updated,
    sections: [praxis('Fire TV Stick Lite: die Fernbedienung und andere Alltagsfragen', `<p>Der Fire TV Stick Lite ist der günstigste Einstieg in IPTV mit Fire TV. Der wichtigste Unterschied im Alltag betrifft die <strong>Fernbedienung</strong>: Sie hat keine Tasten für die Lautstärke und das Einschalten des Fernsehers. Aktivieren Sie deshalb am Fernseher HDMI-CEC; dann schaltet der Stick den Fernseher beim Start mit ein. Für die Lautstärke nutzen Sie weiterhin die Fernbedienung des Fernsehers.</p>
<p>Weil der Lite auf Full HD ausgelegt ist, passt er gut zu Fernsehern bis etwa 43 Zoll. An einem großen 4K-Fernseher wirkt das Bild weniger scharf als mit einem 4K-Stick. Bei der App-Auswahl gibt es dagegen kaum Einschränkungen: ${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')}, ${L('/tivimate/', 'TiviMate')} und ${L('/xciptv/', 'XCIPTV')} laufen auch auf dem Lite.</p>
<p>Halten Sie den Speicher frei: Deinstallieren Sie ungenutzte Apps und leeren Sie gelegentlich den Cache der IPTV-App.</p>`)],
    faq: [['Kann ich die Lautstärke mit der Lite-Fernbedienung regeln?', 'Nein, die Fernbedienung des Lite hat keine Lautstärketasten. Nutzen Sie dafür die Fernbedienung des Fernsehers oder wählen Sie den Fire TV Stick HD.']],
    sources: [S.fire],
  },
  '/iptv-fire-tv-stick-4k/': {
    updated,
    sections: [praxis('4K-Bild richtig einstellen: Auflösung, HDR und Bildrate', `<p>Damit der Fire TV Stick 4K sein Potenzial zeigt, muss er an einem HDMI-Anschluss stecken, der 4K mit HDR unterstützt. Bei vielen Fernsehern ist das nicht jeder Anschluss: Schauen Sie ins Handbuch, welcher HDMI-Eingang „4K HDR“ oder „HDMI 2.0“ bietet, und aktivieren Sie in den Fernseher-Einstellungen gegebenenfalls das erweiterte HDMI-Signal (oft „HDMI UHD Color“ oder „Enhanced Format“ genannt).</p>
<p>Im Stick selbst finden Sie unter <em>Einstellungen › Display und Töne › Display</em> die Auflösung und die Option „Bildwiederholrate anpassen“. Mit dieser Option passt der Stick die Bildrate an den laufenden Inhalt an – das verhindert ein leichtes Ruckeln bei Kameraschwenks, wie es im Sport häufig auffällt.</p>
<p>Planen Sie für ${L('/iptv-4k/', '4K')} rund 25 Mbit/s pro Stream ein. Ob Ihr Anschluss das zuverlässig schafft, zeigt die Breitbandmessung der Bundesnetzagentur.</p>`)],
    sources: [S.fire, S.uhd, S.breitband],
  },
  '/iptv-fire-tv-stick-4k-max/': {
    updated,
    title: `IPTV Fire TV Stick 4K Max: Einrichten & Apps | ${site.name}`,
    sections: [praxis('Fire TV Stick 4K Max: Tipps für das beste Ergebnis', `<p>Der Fire TV Stick 4K Max ist das leistungsstärkste Modell unter den Fire-TV-Sticks und eignet sich besonders für Apps mit aufwendigem Programmführer wie ${L('/tivimate/', 'TiviMate')}. Damit die Leistung ankommt, lohnen sich drei Einstellungen.</p>
<ul><li><strong>WLAN-Band wählen:</strong> Verbinden Sie den Stick mit dem 5-GHz- oder – falls Ihr Router es unterstützt – dem 6-GHz-Netz. Ein neuer Router ist dafür aber keine Pflicht; auch im 5-GHz-Netz läuft der Stick sehr gut.</li>
<li><strong>Ethernet-Adapter:</strong> Wenn der Router weit entfernt steht, ist ein Ethernet-Adapter für Fire TV die stabilste Lösung.</li>
<li><strong>Bildwiederholrate anpassen:</strong> Unter <em>Einstellungen › Display und Töne</em> aktivieren, damit Sport und Filme ohne Mikroruckler laufen.</li></ul>
<p>Mit dem größeren Speicher des 4K Max können Sie mehrere IPTV-Apps parallel installieren und vergleichen. ${trial}</p>`)],
    sources: [S.fire, S.uhd],
  },
  '/iptv-fire-tv-cube/': {
    updated,
    sections: [praxis('Fire TV Cube im Wohnzimmer: LAN, Sprachsteuerung und Receiver', `<p>Der Fire TV Cube ist kein Stick, sondern eine kleine Box. Für IPTV bringt das zwei Vorteile: Er hat einen eingebauten <strong>LAN-Anschluss</strong> und mehr Leistung für flüssige Programmführer. Schließen Sie ihn deshalb, wenn möglich, per Netzwerkkabel an den Router an – das ist die zuverlässigste Verbindung für Sport und 4K.</p>
<p>Über den HDMI-Eingang des aktuellen Cube-Modells lässt sich zusätzlich ein vorhandener Receiver anschließen. So schalten Sie mit einer Fernbedienung zwischen Kabel- oder Satellitenempfang und Ihrer IPTV-App um. Die eingebaute Sprachsteuerung öffnet Apps auf Zuruf; das Umschalten zwischen IPTV-Sendern übernimmt aber weiterhin die App.</p>
<p>Stellen Sie den Cube nicht in einen geschlossenen Schrank: Er braucht etwas Luft, und das Mikrofon für die Sprachsteuerung funktioniert frei stehend besser.</p>`)],
    sources: [S.fire],
  },
  '/iptv-nvidia-shield/': {
    updated,
    sections: [praxis('NVIDIA Shield für Anspruchsvolle: Aufnahmen, Upscaling und Kodi', `<p>Die NVIDIA Shield gilt seit Jahren als eine der leistungsstärksten Android-TV-Boxen. Für IPTV sind drei Eigenschaften interessant: Sie hat einen LAN-Anschluss, sie skaliert HD-Bilder auf 4K-Fernsehern hoch (die KI-Hochskalierung lässt sich in den Bildeinstellungen einschalten) und sie bietet genug Leistung für Kodi mit dem ${L('/pvr-iptv-simple-client/', 'PVR IPTV Simple Client')}.</p>
<p>Wer aufnehmen möchte, profitiert bei der Shield TV Pro von den USB-Anschlüssen: Eine externe Festplatte nimmt Aufnahmen aus Apps wie ${L('/iptv-extreme/', 'IPTV Extreme')} oder TiviMate auf. Bei der kleineren Shield TV (Zylinderform) nutzen Sie stattdessen eine microSD-Karte.</p>
<p>Weil die Shield schon lange auf dem Markt ist, lohnt vor dem Kauf eines gebrauchten Geräts ein Blick auf den Software-Stand: Installieren Sie alle verfügbaren Updates, bevor Sie IPTV einrichten.</p>`)],
    sources: [S.androidtv],
  },
  '/iptv-xiaomi-tv-box/': {
    updated,
    sections: [praxis('Xiaomi TV Box im Alltag: Speicher, Netzwerk und Updates', `<p>Die Xiaomi-Boxen und -Sticks sind günstige Geräte mit zertifiziertem Android TV oder Google TV. Damit haben Sie Zugriff auf den Play Store und erhalten Sicherheitsupdates – ein klarer Vorteil gegenüber No-Name-Boxen. Ihr Engpass ist der Speicher: Installieren Sie nur die Apps, die Sie wirklich nutzen, und leeren Sie den Cache der IPTV-App, wenn sie langsamer wird.</p>
<p>Die Boxen haben in der Regel keinen LAN-Anschluss. Stellen Sie deshalb sicher, dass das 5-GHz-WLAN gut empfangen wird, oder nutzen Sie einen USB-Ethernet-Adapter, der mit Android TV kompatibel ist. Nach dem Einrichten lohnt ein Blick in <em>Einstellungen › Geräteeinstellungen › Info › Systemupdate</em>.</p>
<p>Für ${L('/iptv-4k/', '4K')} eignen sich die Modelle, die ausdrücklich 4K und HDR unterstützen. ${trial}</p>`)],
    sources: [S.androidtv, S.playProtect],
  },
  '/iptv-nokia-streaming-box/': {
    updated,
    description: 'IPTV auf der Nokia Streaming Box 8000 und 8010: Unterschiede der Modelle, LAN-Anschluss, die besten Apps und eine Anleitung Schritt für Schritt.',
    sections: [praxis('Nokia Streaming Box: Anschlüsse sinnvoll nutzen', `<p>Die Nokia Streaming Boxen bringen mehr Anschlüsse mit als die meisten Sticks: einen LAN-Anschluss und USB-Buchsen. Nutzen Sie den LAN-Anschluss für ein stabiles IPTV-Bild, und schließen Sie bei Bedarf einen USB-Speicher an, wenn Ihre IPTV-App Aufnahmen unterstützt.</p>
<p>Weil die Boxen mit Android TV laufen, stehen Ihnen die gängigen Apps aus dem Play Store offen. Für die Bedienung mit der mitgelieferten Fernbedienung eignen sich ${L('/tivimate/', 'TiviMate')} und ${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')} besonders gut. Achten Sie nach der Einrichtung auf Systemupdates des Herstellers.</p>
<p>Wer bisher einen Kabel- oder Satellitenreceiver nutzt, kann die Box an einen zweiten HDMI-Eingang des Fernsehers anschließen und per „Source“-Taste zwischen beiden wechseln.</p>`)],
    sources: [S.androidtv],
  },
  '/iptv-strong-leap-s3/': {
    updated,
    description: 'IPTV auf der Strong LEAP-S3 einrichten: was die Android-TV-Box kann, Varianten wie S3+ und S3 Pro, passende Apps und eine Anleitung Schritt für Schritt.',
    sections: [praxis('Strong LEAP-S3 im Alltag: Tipps für ein flüssiges Bild', `<p>Die Strong LEAP-S3 ist eine kompakte Box mit Android TV und gehört zu den günstigeren zertifizierten Geräten. Damit läuft sie mit den gängigen IPTV-Apps aus dem Play Store, hat aber weniger Leistungsreserven als teure Boxen. Ein schlanker Player wie ${L('/xciptv/', 'XCIPTV')} oder ${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')} läuft darauf meist flüssiger als Apps mit sehr aufwendiger Oberfläche.</p>
<p>Begrenzen Sie im Programmführer die Anzahl der Tage, die geladen werden, und blenden Sie Kategorien aus, die Sie nicht nutzen. Wenn Ihre Variante einen LAN-Anschluss hat, verwenden Sie ihn. Ansonsten sollte die Box möglichst freie Sicht zum Router oder zu einem WLAN-Verstärker haben.</p>
<p>Starten Sie die Box gelegentlich komplett neu, indem Sie den Netzstecker kurz ziehen. Das schafft Arbeitsspeicher frei und behebt viele kleine Hänger.</p>`)],
    sources: [S.androidtv, S.stb],
  },
  '/iptv-thomson-streaming-box/': {
    updated,
    sections: [praxis('Thomson Streaming Box: für wen sie sich eignet', `<p>Die Thomson Streaming Box ist ein kleines Android-TV-Gerät, das sich vor allem für Einsteiger und Zweitfernseher eignet. Sie bringt den Google Play Store auf Fernseher, die selbst keine IPTV-Apps anbieten, und lässt sich mit der mitgelieferten Fernbedienung einfach bedienen.</p>
<p>Für die Einrichtung brauchen Sie ein Google-Konto. Legen Sie es, wenn Sie noch keines haben, vorher am Computer an – das geht schneller als mit der Fernbedienung. Danach installieren Sie eine IPTV-App wie ${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')} und melden sich per Xtream Codes an.</p>
<p>Halten Sie die Box aktuell und deinstallieren Sie vorinstallierte Apps, die Sie nicht nutzen. So bleibt genug Speicher für Programmführer und Updates. ${trial}</p>`)],
    sources: [S.androidtv],
  },
  '/iptv-tvip/': {
    updated,
    title: `IPTV auf TVIP S-Box v.605: Portal & Apps | ${site.name}`,
    sections: [praxis('TVIP v.605 im Alltag: Modus wählen und dabei bleiben', `<p>Die TVIP S-Box v.605 kann je nach Firmware im Linux-Modus mit Portal-Oberfläche oder im Android-Modus mit Apps betrieben werden. Für den Alltag empfehlen wir, sich für einen Modus zu entscheiden: Wer die Bedienung einer ${L('/mag-box/', 'MAG-Box')} kennt, bleibt im Linux-Modus mit Portal; wer Apps wie ${L('/tivimate/', 'TiviMate')} nutzen möchte, wechselt zu Android.</p>
<p>Im Portal-Modus wird der Zugang über die MAC-Adresse der Box freigeschaltet. Notieren Sie diese Adresse, sie steht auf dem Aufkleber an der Unterseite und im Menü. Im Android-Modus melden Sie sich dagegen wie gewohnt per Xtream Codes an.</p>
<p>Die Box hat einen LAN-Anschluss – nutzen Sie ihn. Gerade im Portal-Modus läuft die Box per Kabel deutlich stabiler als per WLAN.</p>`)],
    sources: [S.stb, S.mac],
  },
  '/iptv-macbook/': {
    updated,
    sections: [praxis('IPTV am Mac: Akku, Bildschirm und externe Displays', `<p>Auf dem MacBook ist IPTV schnell eingerichtet, doch einige Mac-Einstellungen machen das Fernsehen angenehmer. Schließen Sie das MacBook bei langen Abenden an das Netzteil an, damit macOS die Leistung nicht drosselt. Unter <em>Systemeinstellungen › Sperrbildschirm</em> verhindern Sie, dass der Bildschirm während einer Sendung ausgeht.</p>
<p>Wer am großen Bildschirm schauen möchte, schließt den Mac per HDMI oder USB-C an den Fernseher an oder nutzt AirPlay zu einem Apple TV. Apps wie ${L('/snappier-iptv/', 'Snappier')} oder ${L('/uhf-iptv/', 'UHF')} laufen auf Macs mit Apple-Chip; ${L('/iptvnator/', 'IPTVnator')} und ${L('/vlc-iptv/', 'VLC')} funktionieren auf allen aktuellen Macs.</p>
<p>Laden Sie Programme nur aus dem Mac App Store oder von der offiziellen Website des Entwicklers. macOS warnt bei unbekannten Entwicklern – diese Warnung sollten Sie ernst nehmen.</p>`)],
    sources: [S.appletv, S.vlc],
  },
  '/iptv-android-smartphone/': {
    updated,
    description: 'IPTV auf Android-Smartphone und Tablet: die besten Apps aus dem Play Store, Einrichtung per Xtream Codes, Streaming zum Fernseher und Datenverbrauch.',
    sections: [praxis('Unterwegs fernsehen: Datenvolumen, Akku und Bildqualität', `<p>Auf dem Android-Handy ist IPTV vor allem unterwegs praktisch: in der Bahn, in der Mittagspause oder im Urlaub. Drei Dinge sollten Sie dabei im Blick behalten. Das <strong>Datenvolumen</strong>: Ein HD-Stream verbraucht pro Stunde mehrere Gigabyte. Stellen Sie in der App eine niedrigere Qualität ein oder laden Sie, wo es die App erlaubt, vorher im WLAN.</p>
<p>Der <strong>Akku</strong>: Videowiedergabe kostet Energie. Reduzieren Sie die Bildschirmhelligkeit und schließen Sie andere Apps. Und die <strong>Bildqualität</strong>: Auf einem kleinen Display ist der Unterschied zwischen HD und niedriger Qualität kaum zu sehen, auf dem Tablet dagegen schon.</p>
<p>Zu Hause können Sie das Bild vom Handy per Chromecast auf den Fernseher bringen. Dauerhaft bequemer ist aber eine App direkt auf dem Fernseher oder einem ${L('/iptv-stick/', 'Stick')} – dann bleibt das Handy frei.</p>`)],
    sources: [S.androidtv, S.playProtect],
  },
  '/iptv-iphone-ipad/': {
    updated,
    description: 'IPTV auf iPhone und iPad einrichten: die besten Apps aus dem App Store, Anmeldung per Xtream Codes, AirPlay zum Fernseher und mobiler Datenverbrauch.',
    sections: [praxis('iPhone und iPad: Tipps für AirPlay, Bild-in-Bild und Datenverbrauch', `<p>Viele IPTV-Apps für iOS unterstützen <strong>Bild-in-Bild</strong>: Sie schauen weiter, während Sie eine Nachricht beantworten oder im Browser nachschlagen. Aktivieren Sie die Funktion unter <em>Einstellungen › Allgemein › Bild-in-Bild</em>, falls sie ausgeschaltet ist.</p>
<p>Per <strong>AirPlay</strong> schicken Sie das Bild an ein Apple TV oder einen AirPlay-fähigen Fernseher. Für einen einzelnen Abend ist das praktisch; für den Dauerbetrieb empfehlen wir eine App direkt auf dem ${L('/iptv-apple-tv-4k/', 'Apple TV')}, weil das iPhone sonst die ganze Zeit mitarbeiten muss.</p>
<p>Unterwegs im Mobilfunknetz begrenzen Sie die Qualität, damit Ihr Datenvolumen reicht. Unter <em>Einstellungen › Mobilfunk</em> sehen Sie, wie viel Datenvolumen jede App verbraucht hat.</p>`)],
    sources: [S.appletv, S.hls],
  },
  '/iptv-apple-tv-4k/': {
    updated,
    description: 'IPTV auf Apple TV 4K und Apple TV HD: die besten tvOS-Apps wie IPTVX und iPlayTV, Einrichtung per Xtream Codes und die richtigen 4K-Einstellungen.',
    sections: [praxis('Apple TV richtig einstellen: Format, Bildrate und Netzwerk', `<p>Das Apple TV 4K liefert ein sehr gutes IPTV-Bild, wenn zwei Einstellungen stimmen. Unter <em>Einstellungen › Video und Audio</em> aktivieren Sie „Dynamikbereich anpassen“ und „Bildwiederholrate anpassen“. Dann gibt das Apple TV Inhalte in ihrem ursprünglichen Format aus, statt alles auf 4K HDR hochzurechnen – Sport und Nachrichten wirken dadurch natürlicher und ruckeln nicht.</p>
<p>Beim Netzwerk gilt: Das Apple TV 4K mit Ethernet-Anschluss sollte per Kabel mit dem Router verbunden werden. Die Variante ohne Ethernet braucht ein starkes WLAN-Signal; stellen Sie sie möglichst nicht hinter den Fernseher, sondern frei auf.</p>
<p>Beim älteren Apple TV HD laufen die meisten Apps weiterhin, allerdings nur in Full HD. Wer einen 4K-Fernseher hat und häufig ${L('/iptv-4k/', 'Ultra HD')} schaut, profitiert vom Wechsel auf ein 4K-Modell.</p>`)],
    sources: [S.appletv, S.uhd],
  },
  '/iptv-chromecast/': {
    updated,
    sections: [praxis('Chromecast im Alltag: Casten oder App auf dem Gerät?', `<p>Beim klassischen Chromecast ohne Fernbedienung ist das Smartphone die Steuerzentrale: Sie wählen den Sender in der App und tippen auf das Cast-Symbol. Das funktioniert, verlangt aber, dass Handy und Chromecast im selben WLAN sind und das Handy während der Sendung erreichbar bleibt.</p>
<p>Beim Chromecast mit Google TV und dem Google TV Streamer installieren Sie die IPTV-App dagegen direkt auf dem Gerät. Das ist für den Alltag deutlich bequemer: Sie schalten mit der Fernbedienung um, und das Handy bleibt frei. Wer noch einen alten Chromecast besitzt, kann ihn gut für gelegentliches Casten nutzen; für das tägliche Fernsehen lohnt ein Gerät mit Google TV.</p>
<p>Für ein stabiles Bild beim Casten sollten Handy und Chromecast im 5-GHz-WLAN sein und der Router nicht zu weit entfernt stehen.</p>`)],
  },
  '/iptv-roku/': {
    updated,
    title: `IPTV auf Roku: Apps, Umwege & bessere Geräte | ${site.name}`,
    sections: [praxis('Roku behalten oder wechseln? Eine ehrliche Einschätzung', `<p>Roku-Geräte sind für Streamingdienste mit eigenen Apps gut geeignet, für IPTV mit Xtream Codes oder M3U-Playlist aber nur eingeschränkt. Im Roku-Kanalangebot gibt es kaum IPTV-Player, und das Nachinstallieren eigener Apps ist nicht vorgesehen. Umwege wie das Spiegeln des Handy-Bildschirms funktionieren, sind im Alltag aber umständlich und kosten Bildqualität.</p>
<p>Unsere ehrliche Empfehlung: Nutzen Sie Ihr Roku-Gerät weiter für Streamingdienste und ergänzen Sie für IPTV einen günstigen ${L('/iptv-fire-tv-stick/', 'Fire TV Stick')} oder ein Gerät mit Google TV. Beide stecken Sie an einen freien HDMI-Anschluss und wechseln per „Source“-Taste. So haben Sie das Beste aus beiden Welten, ohne auf Bequemlichkeit zu verzichten.</p>
<p>Wenn Sie einen Fernseher mit integriertem Roku-System besitzen, gilt dasselbe: Ein Stick am HDMI-Anschluss bringt die volle Auswahl an IPTV-Apps.</p>`)],
    sources: [S.fire, S.androidtv],
  },
  '/iptv-loewe-tv/': {
    updated,
    title: `IPTV auf Loewe TV: Apps, Stick & Anleitung | ${site.name}`,
    description: 'IPTV auf dem Loewe Smart TV: warum das Loewe-System kaum IPTV-Apps bietet, welche Zusatzgeräte sich eignen und wie Sie IPTV in wenigen Schritten starten.',
    sections: [praxis('Loewe-Fernseher und Zusatzgerät: so bleibt die Bedienung elegant', `<p>Loewe-Fernseher stehen für hochwertiges Design und gute Bildqualität. Viele Besitzer möchten deshalb keine zusätzliche Fernbedienung und keinen sichtbaren Kabelsalat. Beides lässt sich vermeiden: Ein Streaming-Stick verschwindet hinter dem Gerät, und über HDMI-CEC (bei Loewe meist als „Digital Link“ oder CEC-Funktion bezeichnet) steuern Sie ihn mit der Loewe-Fernbedienung.</p>
<p>Wer Wert auf ein besonders stabiles Bild legt, wählt statt eines Sticks eine kleine Box mit LAN-Anschluss, etwa den ${L('/iptv-fire-tv-cube/', 'Fire TV Cube')} oder die ${L('/iptv-nvidia-shield/', 'NVIDIA Shield')}. Sie lassen sich unauffällig im TV-Möbel unterbringen.</p>
<p>Wählen Sie für das Zusatzgerät einen HDMI-Eingang mit 4K-HDR-Unterstützung und stellen Sie im Loewe-Bildmenü einen natürlichen Bildmodus ein. So kommt die Bildqualität des Fernsehers auch bei IPTV zur Geltung.</p>`)],
    sources: [S.fire, S.stb],
  },
  '/iptv-medion-tv/': {
    updated,
    sections: [praxis('Medion-Fernseher: günstig einsteigen, clever ergänzen', `<p>Medion-Fernseher werden häufig im Discounter oder online gekauft und sind oft als Zweitgerät im Kinder-, Schlaf- oder Gästezimmer im Einsatz. Je nach Modell laufen sie mit Android TV, Google TV, einer Fire-TV-Edition oder einem einfacheren System. Mit Android TV oder Fire TV installieren Sie die IPTV-App direkt am Fernseher.</p>
<p>Für Modelle ohne passende Apps ist ein günstiger Stick die beste Ergänzung. Für einen Fernseher in Full HD genügt dabei der ${L('/iptv-fire-tv-stick-lite/', 'Fire TV Stick Lite')} oder der ${L('/iptv-fire-tv-stick-hd/', 'Fire TV Stick HD')}. Wer Kinder im Haushalt hat, aktiviert in der IPTV-App eine Kindersicherung mit PIN, sofern die App sie anbietet.</p>
<p>Denken Sie bei einem Zweitfernseher an die Zahl der gleichzeitigen Geräte in Ihrem Paket: Bei ${site.name} wählen Sie 1 bis ${max}.</p>`)],
    sources: [S.androidtv, S.fire],
  },
  '/iptv-metz-tv/': {
    updated,
    title: `IPTV auf Metz TV: Apps, Google TV & Anleitung | ${site.name}`,
    sections: [praxis('Metz-Fernseher: Systemversion prüfen und Bild optimieren', `<p>Bei Metz hängt die App-Auswahl stark vom Modelljahr ab. Neuere Modelle setzen auf Android TV oder Google TV, ältere Geräte nutzen ein eigenes System mit wenigen Apps. Prüfen Sie im Einstellungsmenü unter „Info“ oder „Geräteinformationen“, welche Software Ihr Fernseher hat.</p>
<p>Mit Google TV oder Android TV richten Sie IPTV direkt ein, zum Beispiel mit ${L('/tivimate/', 'TiviMate')} oder ${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')}. Für ältere Geräte ist ein Stick die einfachste Lösung. In beiden Fällen sorgt ein LAN-Kabel für das stabilste Bild.</p>
<p>Metz-Fernseher werden oft für ihr natürliches Bild geschätzt. Nutzen Sie für IPTV einen Bildmodus wie „Film“ oder „Natürlich“ und schalten Sie starke Bewegungsglättung aus, wenn Sport unnatürlich wirkt.</p>`)],
    sources: [S.androidtv],
  },
  '/iptv-sharp-tv/': {
    updated,
    title: `IPTV auf Sharp TV: Apps, Google TV & Anleitung | ${site.name}`,
    description: 'IPTV auf dem Sharp Smart TV: welche Systeme Sharp nutzt, passende Apps für Android TV und Google TV und eine Anleitung zum Einrichten Schritt für Schritt.',
    sections: [praxis('Sharp-Fernseher im Alltag: kleine Modelle, große Wirkung', `<p>Sharp ist in Deutschland vor allem mit kompakten und günstigen Fernsehern vertreten, die gern in Küche, Schlafzimmer oder Wohnmobil stehen. Viele dieser Modelle laufen mit Android TV oder Google TV und unterstützen damit die gängigen IPTV-Apps aus dem Play Store.</p>
<p>Für kleine Bildschirme reicht HD-Qualität völlig aus. Stellen Sie in der App, wenn möglich, eine passende Qualität ein; das entlastet die Leitung und sorgt für schnelleres Umschalten. Im Wohnmobil oder Ferienhaus mit mobilem Internet ist das besonders hilfreich.</p>
<p>Hat Ihr Sharp-Modell ein anderes System ohne IPTV-Apps, bringt ein ${L('/iptv-stick/', 'Streaming-Stick')} die volle Auswahl auf den Bildschirm. ${trial}</p>`)],
    sources: [S.androidtv],
  },
  '/iptv-xiaomi-tv/': {
    updated,
    sections: [praxis('Xiaomi-Fernseher: Speicher und Werbung im Griff', `<p>Xiaomi-Fernseher bieten mit Google TV oder Android TV viel Ausstattung für wenig Geld. Für IPTV ist das ideal, denn Sie installieren Apps wie ${L('/tivimate/', 'TiviMate')} oder ${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')} direkt aus dem Play Store.</p>
<p>Zwei Punkte sollten Sie im Blick behalten: Der interne Speicher ist bei günstigen Modellen begrenzt, also deinstallieren Sie vorinstallierte Apps, die Sie nicht nutzen. Und unter Google TV lässt sich in den Einstellungen der „Nur Apps“-Modus aktivieren, der Empfehlungen und Werbung auf dem Startbildschirm reduziert – der Fernseher startet dann schneller in Ihre IPTV-App.</p>
<p>Wie bei allen Fernsehern gilt: Ein LAN-Kabel ist die beste Verbindung, wenn der Router in der Nähe steht.</p>`)],
    sources: [S.androidtv],
  },
  '/iptv-tcl-tv/': {
    updated,
    title: `IPTV auf TCL TV: Google TV Apps & Anleitung | ${site.name}`,
    sections: [praxis('TCL mit Google TV: Einstellungen für IPTV', `<p>Die meisten aktuellen TCL-Fernseher laufen mit Google TV. Nach dem Einrichten mit einem Google-Konto installieren Sie Ihre IPTV-App direkt aus dem Play Store. Damit der Fernseher beim Einschalten sofort Ihre App anzeigt, können Sie sie auf dem Startbildschirm an die erste Stelle der Favoriten verschieben.</p>
<p>Für Sport lohnt ein Blick in die Bildeinstellungen: Die Bewegungsglättung (bei TCL oft „MEMC“) kann schnelle Szenen flüssiger machen, erzeugt aber manchmal Artefakte. Probieren Sie eine niedrige Stufe aus. Für ${L('/iptv-4k/', '4K')} verbinden Sie den Fernseher per LAN-Kabel und planen rund 25 Mbit/s pro Stream ein.</p>
<p>Günstige TCL-Modelle haben wenig Speicher – deinstallieren Sie ungenutzte Apps und leeren Sie gelegentlich den Cache der IPTV-App.</p>`)],
    sources: [S.androidtv, S.uhd],
  },
  '/iptv-grundig-tv/': {
    updated,
    sections: [praxis('Grundig-Fernseher: Fire TV Edition oder Google TV?', `<p>Grundig bietet in Deutschland sowohl Fernseher mit integriertem Fire TV als auch Modelle mit Google TV an. Für IPTV sind beide gut geeignet, die Wege unterscheiden sich aber: Bei der <strong>Fire TV Edition</strong> installieren Sie Apps aus dem Amazon Appstore oder per Downloader, genau wie beim ${L('/iptv-fire-tv-stick/', 'Fire TV Stick')}. Bei <strong>Google TV</strong> nutzen Sie den Play Store.</p>
<p>Ältere Grundig-Modelle mit einfachem Smart-TV-System haben meist keine IPTV-Player. Hier ist ein Stick am HDMI-Anschluss die beste Lösung. Aktivieren Sie in den Grundig-Einstellungen HDMI-CEC, dann steuern Sie den Stick mit der Fernbedienung des Fernsehers.</p>
<p>Unabhängig vom System gilt: LAN-Kabel vor WLAN, und regelmäßig Software-Updates des Fernsehers installieren.</p>`)],
    sources: [S.fire, S.androidtv],
  },
  '/iptv-telefunken-tv/': {
    updated,
    sections: [praxis('Telefunken-Fernseher: Systeme erkennen und richtig einrichten', `<p>Telefunken-Fernseher gibt es in Deutschland mit integriertem Fire TV, mit Android TV und in einfacheren Varianten ohne App-Store für IPTV. Am Startbildschirm erkennen Sie das System schnell: Erscheint die Fire-TV-Oberfläche mit Amazon-Menü, gilt die Fire-TV-Anleitung; sehen Sie Google-Apps und den Play Store, gilt die Android-Anleitung.</p>
<p>Telefunken-Modelle sind oft preiswerte Zweitgeräte. Für ein Kinderzimmer oder Gästezimmer genügt HD-Qualität; aktivieren Sie in der IPTV-App die Kindersicherung, falls Kinder den Fernseher nutzen. Für den Hauptfernseher im Wohnzimmer empfiehlt sich dagegen eine stabile LAN-Verbindung.</p>
<p>Hat Ihr Modell keine passende App, ist ein ${L('/iptv-fire-tv-stick/', 'Fire TV Stick')} die einfachste Ergänzung. ${trial}</p>`)],
    sources: [S.fire, S.androidtv],
  },
  '/iptv-toshiba-tv/': {
    updated,
    sections: [praxis('Toshiba-Fernseher: so finden Sie den richtigen Weg', `<p>Bei Toshiba-Fernsehern in Deutschland gibt es je nach Baujahr drei Systeme: Fire TV Edition, Android TV oder Google TV und VIDAA. Für IPTV bedeutet das: Mit Fire TV oder Android/Google TV installieren Sie die App direkt am Fernseher, bei VIDAA ist ein Stick meist die bessere Lösung.</p>
<p>Ein Tipp für VIDAA-Modelle: Selbst wenn im VIDAA-Store gerade ein IPTV-Player angeboten wird, kann er später wieder verschwinden. Mit einem Stick sind Sie unabhängig davon und erhalten regelmäßige App-Updates.</p>
<p>Bei allen Toshiba-Modellen lohnt die Aktivierung von HDMI-CEC, damit Fernseher und Stick gemeinsam an- und ausgehen.</p>`)],
    sources: [S.fire, S.androidtv],
  },
  '/iptv-hisense-tv/': {
    updated,
    sections: [praxis('Hisense im Alltag: VIDAA behalten, IPTV ergänzen', `<p>VIDAA ist schnell, übersichtlich und bringt die großen Streamingdienste mit. Für IPTV mit Xtream Codes ist die Auswahl aber klein. Viele Hisense-Besitzer kombinieren deshalb beides: Streamingdienste über VIDAA, IPTV über einen Stick am HDMI-Anschluss.</p>
<p>Damit das bequem bleibt, legen Sie den HDMI-Eingang des Sticks auf dem VIDAA-Startbildschirm als Favorit ab. Mit aktiviertem CEC startet der Stick automatisch, wenn Sie den Eingang wählen. Für ${L('/iptv-4k/', '4K')} nutzen Sie einen 4K-fähigen Stick wie den ${L('/iptv-fire-tv-stick-4k/', 'Fire TV Stick 4K')} und einen HDMI-Eingang mit 4K-HDR-Unterstützung.</p>
<p>Hisense-Modelle mit Google TV benötigen keinen Stick: Dort installieren Sie die IPTV-App direkt aus dem Play Store.</p>`)],
    sources: [S.androidtv, S.fire],
  },
  '/iptv-panasonic-tv/': {
    updated,
    description: 'IPTV auf dem Panasonic Smart TV: was bei my Home Screen und Modellen mit integriertem Fire TV gilt, passende Apps und eine Anleitung Schritt für Schritt.',
    sections: [praxis('Panasonic: Bildqualität erhalten, IPTV ergänzen', `<p>Panasonic-Fernseher sind für ihre Bildqualität bekannt. Neuere Modelle mit integriertem Fire TV bringen IPTV-Apps direkt mit; Modelle mit my Home Screen bieten dagegen keine gängigen IPTV-Player. Für diese Geräte ist ein Stick am HDMI-Anschluss die Lösung.</p>
<p>Damit der Stick die Bildqualität nicht schmälert, wählen Sie einen HDMI-Eingang mit 4K-HDR-Unterstützung und aktivieren in den Panasonic-Einstellungen den erweiterten HDMI-Modus. Im Stick selbst stellen Sie die Bildwiederholrate auf „anpassen“, damit Filme und Sport in ihrer ursprünglichen Bildrate laufen.</p>
<p>Wer bei Panasonic auf einen gepflegten Ton Wert legt, verbindet den Stick über den Fernseher mit der Soundbar (HDMI ARC/eARC). Die Tonausgabe der IPTV-App wird dann automatisch weitergeleitet.</p>`)],
    sources: [S.fire, S.uhd],
  },
  '/iptv-philips-tv/': {
    updated,
    sections: [praxis('Philips mit Ambilight: IPTV und Lichteffekte kombinieren', `<p>Philips-Fernseher mit Google TV oder Android TV gehören zu den einfachsten Geräten für IPTV, weil die gängigen Apps direkt im Play Store stehen. Ambilight funktioniert dabei auch mit IPTV-Apps, denn es reagiert auf das Bild, nicht auf die Quelle. Wer die Lichteffekte bei Nachrichten als störend empfindet, wählt einen dezenten Ambilight-Modus.</p>
<p>Bei Modellen mit Titan OS oder Saphi ist ein Stick die einfachste Lösung. Auch dann bleibt Ambilight aktiv, solange der Stick am HDMI-Eingang des Fernsehers steckt.</p>
<p>Für ein ruhiges Bild verbinden Sie den Fernseher oder den Stick per LAN-Kabel und schalten in den Bildeinstellungen starke Rauschunterdrückung aus, die bei Streams manchmal Details verwischt.</p>`)],
    sources: [S.androidtv],
  },
  '/iptv-sony-bravia/': {
    updated,
    sections: [praxis('Sony Bravia: Bildmodus und Ton für IPTV', `<p>Auf Sony-Bravia-Fernsehern mit Google TV laufen IPTV-Apps direkt. Für ein natürliches Bild wählen Sie den Bildmodus „Standard“ oder „Kino“; der Modus „Lebhaft“ ist für helle Läden gedacht und übertreibt Farben. Bei Sport kann die Einstellung „Motionflow“ schnelle Bewegungen glätten – probieren Sie eine niedrige Stufe aus.</p>
<p>Wenn bei einzelnen Sendern der Ton fehlt, liegt das oft an der Tonausgabe: Stellen Sie in der IPTV-App den Audio-Decoder auf „Software“ oder ändern Sie in den Sony-Toneinstellungen die digitale Audioausgabe. Mit einer Soundbar an HDMI eARC wird der Ton der App automatisch weitergeleitet.</p>
<p>Für ${L('/iptv-4k/', '4K')} empfehlen wir eine LAN-Verbindung und rund 25 Mbit/s pro Stream.</p>`)],
    sources: [S.androidtv, S.uhd],
  },
};
