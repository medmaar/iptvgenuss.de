// SEO audit (November 2026), guide and hub pages: deeper sections where the
// page was thin, the primary keyword in visible copy, outbound authority
// sources, and titles/descriptions inside 50–60 / 120–155 characters.
import { site, plans, devicePrices, euro } from '../site.mjs';
import { L } from './util.mjs';
import { S } from './sources.mjs';

const updated = '2026-11-25';
const max = Math.max(...Object.keys(devicePrices).map(Number));
const month = plans.find((p) => !p.trial && p.months === 1);
const year = plans.find((p) => !p.trial && p.months === 12);
const wiki = (slug, label) => [`Wikipedia: ${label}`, `https://de.wikipedia.org/wiki/${slug}`];

export default {
  '/iptv-probleme/': {
    updated,
    description: 'IPTV funktioniert nicht? Ruckeln, keine Senderliste oder Login-Fehler: die schnellsten Lösungen Schritt für Schritt, plus Tipps zu WLAN und EPG.',
    sections: [{ id: 'ursachen', before: 'sofort', h: 'IPTV funktioniert nicht: die drei häufigsten Ursachen', html: `<p>Wenn IPTV nicht funktioniert, liegt das in den allermeisten Fällen an einer von drei Stellen – und fast nie an allen gleichzeitig. Wer sie der Reihe nach prüft, findet den Fehler meist in wenigen Minuten:</p>
<ol class="guide-steps"><li><strong>Die Verbindung:</strong> Ruckelt das Bild, bleibt es stehen oder lädt es endlos, ist fast immer die Internetverbindung im Haus der Engpass – oft das WLAN zwischen Router und Fernseher, nicht der Anschluss selbst.</li>
<li><strong>Die Zugangsdaten:</strong> Meldet die App „Login fehlgeschlagen“ oder zeigt keine Sender, stimmen meist Server-URL, Benutzername oder Passwort nicht exakt – ein fehlendes „http://“ oder ein Leerzeichen genügt.</li>
<li><strong>Die App:</strong> Startet die App gar nicht, stürzt ab oder zeigt einen veralteten Programmführer, helfen Cache leeren, ein Update oder ein Neustart des Geräts.</li></ol>
<p>Die folgenden Abschnitte führen Sie durch jede dieser Ursachen. Funktioniert IPTV danach immer noch nicht, schreiben Sie uns mit Gerät, App und Fehlermeldung – wir helfen persönlich und auf Deutsch.</p>` }],
    faq: [['Warum funktioniert IPTV plötzlich nicht mehr, obwohl gestern alles lief?', 'Häufig hat sich die App aktualisiert, der Router wurde neu gestartet oder das Paket ist abgelaufen. Starten Sie Router und Gerät neu, leeren Sie den Cache der App und prüfen Sie die Laufzeit in unserer E-Mail.']],
    sources: [S.bsi],
  },
  '/iptv-4k/': {
    updated,
    sections: [{ id: 'kette', before: 'tipps', h: 'Die 4K-Kette: Jedes Glied muss passen', html: `<p>Ein 4K-Bild kommt nur an, wenn jedes Glied der Kette Ultra HD unterstützt. Fehlt eines, sehen Sie automatisch HD – ohne Fehlermeldung. Prüfen Sie deshalb der Reihe nach:</p>
<ol class="guide-steps"><li><strong>Der Inhalt:</strong> Nicht jeder Sender und nicht jeder Film wird in 4K ausgestrahlt. In vielen Apps erkennen Sie 4K-Inhalte an einer eigenen Kategorie oder am Hinweis „UHD“.</li>
<li><strong>Die Leitung:</strong> Rund 25 Mbit/s pro 4K-Stream, stabil auch am Abend.</li>
<li><strong>Das Wiedergabegerät:</strong> Stick, Box oder Fernseher-App müssen 4K und den Codec H.265/HEVC beherrschen, etwa der ${L('/iptv-fire-tv-stick-4k-max/', 'Fire TV Stick 4K Max')} oder das ${L('/iptv-apple-tv-4k/', 'Apple TV 4K')}.</li>
<li><strong>Das HDMI-Kabel und der Eingang:</strong> Ein HDMI-Eingang mit 4K-HDR-Unterstützung, im Fernseher gegebenenfalls als „erweitertes Format“ freigeschaltet.</li>
<li><strong>Der Fernseher:</strong> Ein 4K-Bildschirm – bei kleinen Fernsehern unter 43 Zoll ist der Unterschied zu Full HD aus normalem Sitzabstand allerdings gering.</li></ol>` }],
  },
  '/iptv-vod/': {
    updated,
    title: `IPTV-VOD: Filme, Serien & Catch-Up auf Abruf | ${site.name}`,
    sections: [{ id: 'unterschied', before: 'catchup', h: 'VOD, Catch-Up und Aufnahme: der Unterschied auf einen Blick', html: `<div class="table-wrap" role="region" aria-labelledby="vod-vergleich" tabindex="0"><table class="table"><caption id="vod-vergleich">Drei Wege, Inhalte zeitversetzt zu sehen</caption><thead><tr><th scope="col">Funktion</th><th scope="col">Was es ist</th><th scope="col">Wo Sie es finden</th></tr></thead><tbody>
<tr><th scope="row">VOD</th><td>Filme und Serien, die jederzeit abrufbar sind</td><td>Bereiche „Filme“ und „Serien“ der App</td></tr>
<tr><th scope="row">Catch-Up</th><td>Bereits gelaufene Sendungen der letzten Tage, sofern der Sender es anbietet</td><td>Im Programmführer, oft mit Uhr-Symbol</td></tr>
<tr><th scope="row">Aufnahme (DVR)</th><td>Eine Sendung, die Ihr Gerät selbst speichert</td><td>In Apps mit Aufnahmefunktion, z. B. TiviMate oder IPTV Extreme</td></tr></tbody></table></div>
<p>Für den Alltag heißt das: Filme und Serien suchen Sie im VOD-Bereich, eine verpasste Sendung von gestern finden Sie per Catch-Up im ${L('/iptv-senderliste/', 'Programmführer')}, und was Sie dauerhaft behalten möchten, nehmen Sie auf. Welche dieser Funktionen eine App unterstützt, steht bei jeder App im ${L('/iptv-apps/', 'App-Vergleich')}.</p>` }],
    sources: [S.epg],
  },
  '/xtream-codes/': {
    updated,
    sections: [{ id: 'beispiel', before: 'apps', h: 'Beispiel: So sehen Xtream-Zugangsdaten aus', html: `<p>Viele Fehler beim Login entstehen, weil die drei Angaben vertauscht oder unvollständig eingetragen werden. So sind sie aufgebaut (Beispielwerte, nicht Ihre echten Daten):</p>
<div class="table-wrap" role="region" aria-labelledby="xtream-beispiel" tabindex="0"><table class="table"><caption id="xtream-beispiel">Aufbau der Xtream-Codes-Anmeldung</caption><tbody>
<tr><th scope="row">Server-URL</th><td><code>http://server.beispiel.de:8080</code> – mit „http://“ und Port, ohne Schrägstrich am Ende</td></tr>
<tr><th scope="row">Benutzername</th><td><code>max_muster</code> – Groß- und Kleinschreibung beachten</td></tr>
<tr><th scope="row">Passwort</th><td><code>a1b2c3d4</code> – ohne Leerzeichen davor oder dahinter</td></tr></tbody></table></div>
<p>Kopieren Sie die Daten nach Möglichkeit aus unserer E-Mail, statt sie abzutippen. Auf dem Fernseher hilft es, die Werte zuerst in einer Notiz auf dem Handy zu öffnen und dann Zeichen für Zeichen zu vergleichen. Der Port hinter dem Doppelpunkt gehört immer zur Server-URL – fehlt er, findet die App den Server nicht.</p>` }],
    sources: [S.iptv],
  },
  '/iptv-reseller/': {
    updated,
    description: 'IPTV-Reseller erklärt: wie Reseller-Panels und Credits funktionieren, welche Pflichten in Deutschland gelten und woran Sie einen Weiterverkäufer erkennen.',
    sections: [{ id: 'kundensicht', before: 'fragen', h: 'Worauf Kunden bei jedem IPTV-Anbieter achten sollten', html: `<p>Ob ein Angebot von einem Reseller oder direkt vom Betreiber kommt, ist für Sie als Kunde weniger wichtig als die Frage, wie seriös es ist. Diese Punkte können Sie bei jedem Anbieter prüfen:</p>
<ul><li><strong>Impressum und Erreichbarkeit:</strong> Gibt es eine nachvollziehbare Kontaktadresse und antwortet jemand auf Fragen?</li>
<li><strong>Klare Preise:</strong> Steht vorab fest, was Sie zahlen und wie lange der Zugang läuft? Verlängert sich das Abo automatisch?</li>
<li><strong>Test vor dem Kauf:</strong> Können Sie das Angebot auf Ihrem Gerät ausprobieren, bevor Sie zahlen?</li>
<li><strong>Zahlungswege:</strong> Seien Sie vorsichtig bei Anbietern, die ausschließlich anonyme Zahlungswege akzeptieren.</li></ul>
<p>Bei ${site.name} zahlen Sie einmal für die gewählte Laufzeit, ohne automatische Verlängerung, und können vorher kostenlos testen. Unsere Checkliste für die Anbieterwahl finden Sie unter ${L('/iptv-anbieter/', 'IPTV-Anbieter wählen')}.</p>` }],
  },
  '/iptv-senderliste/': {
    updated,
    sections: [{ id: 'familie', before: 'catchup', h: 'Senderliste für die ganze Familie einrichten', html: `<p>Eine große Senderliste ist nur dann ein Gewinn, wenn jeder im Haushalt schnell sein Programm findet. Drei Schritte machen die Liste familientauglich:</p>
<ol class="guide-steps"><li><strong>Favoritengruppen anlegen:</strong> Erstellen Sie in Ihrer App eigene Gruppen wie „Nachrichten“, „Kinder“ oder „Sport“ und legen Sie dort die meistgenutzten Sender ab.</li>
<li><strong>Unbenutzte Kategorien ausblenden:</strong> Fast alle Apps erlauben es, Kategorien zu verstecken. Die Liste wird kürzer und der Programmführer lädt schneller.</li>
<li><strong>Kindersicherung setzen:</strong> Schützen Sie Kategorien, die Kinder nicht sehen sollen, mit einer PIN – in ${L('/tivimate/', 'TiviMate')}, ${L('/xciptv/', 'XCIPTV')} und vielen anderen Apps ist das eingebaut.</li></ol>
<p>Die Einstellungen gelten pro Gerät. Wer mehrere Fernseher nutzt, richtet die Favoriten auf jedem Gerät ein; manche Apps bieten dafür eine Sicherungsfunktion.</p>` }],
  },
  '/plex-jellyfin-iptv/': {
    updated,
    sections: [{ id: 'alternative', h: 'Einfacher geht es oft ohne Medienserver', html: `<p>Ein eigener Medienserver ist ein spannendes Projekt für Technikbegeisterte, die Filme, Musik und Live-TV an einem Ort bündeln möchten. Für die meisten Haushalte ist er aber nicht nötig: Eine IPTV-App auf jedem Fernseher erledigt dasselbe ohne laufenden Server, ohne Wartung und ohne zusätzlichen Stromverbrauch.</p>
<p>Ein Server lohnt sich vor allem, wenn Sie ohnehin Plex oder Jellyfin für Ihre eigene Mediensammlung nutzen und Live-TV dort integrieren möchten. Denken Sie daran, dass jeder Stream, den der Server an ein Gerät weitergibt, als gleichzeitige Verbindung zählt. Bei ${site.name} wählen Sie Pakete für 1 bis ${max} Geräte.</p>` }],
    sources: [S.m3u],
  },
  '/kodi-iptv/': {
    updated,
    sections: [{ id: 'oberflaeche', before: 'probleme', h: 'Kodi als Fernseh-Oberfläche: Tipps für den Alltag', html: `<p>Kodi kann mehr als Filme abspielen: Mit dem PVR IPTV Simple Client wird es zu einer vollwertigen Fernseh-Oberfläche mit Senderliste und Programmführer. Damit das im Alltag angenehm ist, helfen einige Einstellungen.</p>
<ul><li><strong>Startbildschirm:</strong> Stellen Sie unter <em>Einstellungen › Oberfläche › Skin › Startfenster</em> den Bereich „TV“ ein. Dann startet Kodi direkt in Ihre Senderliste.</li>
<li><strong>Letzten Sender merken:</strong> Unter <em>PVR & Live-TV › Wiedergabe</em> lässt sich einstellen, dass Kodi beim Start den zuletzt gesehenen Sender öffnet.</li>
<li><strong>Fernbedienung:</strong> Auf Android-TV-Boxen und dem Fire TV Stick funktioniert die mitgelieferte Fernbedienung; am PC hilft eine Media-Fernbedienung oder die offizielle Kodi-Fernbedienungs-App.</li>
<li><strong>Updates:</strong> Halten Sie Kodi und das Add-on aktuell und installieren Sie nur Add-ons aus dem offiziellen Repository.</li></ul>` }],
  },
  '/iptv-downloader/': {
    updated,
    sections: [{ id: 'sicher-installieren', before: 'probleme', h: 'Sicher installieren: drei Regeln für die Downloader-App', html: `<p>Die Downloader-App ist ein Werkzeug, kein Risiko an sich. Entscheidend ist, was Sie damit herunterladen. Diese drei Regeln schützen Ihr Gerät:</p>
<ol class="guide-steps"><li><strong>Nur offizielle Quellen:</strong> Laden Sie IPTV-Apps nur von der offiziellen Website des Entwicklers. Kurzcodes aus Foren und Videos können auf veränderte Versionen verweisen.</li>
<li><strong>Unbekannte Quellen gezielt erlauben:</strong> Erlauben Sie die Installation aus unbekannten Quellen nur für Downloader und nicht für alle Apps. Nach der Installation können Sie die Freigabe wieder entziehen.</li>
<li><strong>Aufräumen:</strong> Löschen Sie die heruntergeladene Installationsdatei nach der Installation. Downloader fragt danach automatisch; das spart Speicher auf dem Stick.</li></ol>
<p>Wenn eine App im Amazon Appstore oder Google Play Store verfügbar ist, installieren Sie sie von dort. Dann erhalten Sie Updates automatisch.</p>` }],
    sources: [S.playProtect, S.bsi],
  },
  '/m3u-playlist/': {
    updated,
    description: 'Was ist eine M3U-Playlist? So ist eine IPTV-Liste aufgebaut, so nutzen Sie M3U und M3U8 in VLC, Kodi und TV-Apps – und darum sind Gratis-Listen riskant.',
    sections: [{ id: 'link-oder-datei', before: 'gratis', h: 'M3U-Link oder M3U-Datei: was ist besser?', html: `<p>Eine M3U-Playlist gibt es in zwei Formen: als <strong>Link</strong>, den die App bei jedem Start abruft, und als <strong>Datei</strong>, die Sie herunterladen und in die App laden. Für IPTV empfehlen wir fast immer den Link.</p>
<ul><li><strong>Der Link</strong> bleibt aktuell: Ändert sich die Senderliste, lädt die App beim nächsten Start automatisch die neue Version.</li>
<li><strong>Die Datei</strong> ist eine Momentaufnahme: Neue oder geänderte Sender fehlen, bis Sie die Datei erneut herunterladen und einspielen.</li></ul>
<p>Eine Datei ist nur dann sinnvoll, wenn eine App ausschließlich lokale Dateien akzeptiert oder Sie die Liste selbst bearbeiten möchten. Behandeln Sie Link und Datei wie ein Passwort: Beide enthalten Ihre Zugangsdaten und gehören nicht in Foren oder Chats.</p>` }],
    sources: [S.hls],
  },
  '/iptv-12-monate/': {
    updated,
    sections: [{ id: 'rechnung', before: 'bestellen', h: 'Rechenbeispiel: Monatspaket oder 12 Monate?', html: `<p>${month && year ? `Wer ein ganzes Jahr lang Monatspakete kauft, zahlt 12 × ${euro(month.price)} = ${euro(month.price * 12)}. Das Jahrespaket kostet ${euro(year.price)} – Sie sparen also ${euro(month.price * 12 - year.price)} im Jahr, bei identischen Leistungen.` : 'Das Jahrespaket ist im Vergleich zu zwölf Monatspaketen deutlich günstiger, bei identischen Leistungen.'} Für mehrere Geräte gelten die Preise aus der Tabelle bei den ${L('/#preise', 'Paketen')}.</p>
<p>Das Jahrespaket lohnt sich, wenn Sie IPTV nach dem ${L('/iptv-testen/', 'kostenlosen Test')} regelmäßig nutzen möchten. Wer nur für einen bestimmten Zeitraum schauen will – etwa während eines Turniers oder im Urlaub – ist mit dem Monatspaket flexibler. In beiden Fällen gilt: Sie zahlen einmal, und es gibt keine automatische Verlängerung.</p>` }],
    sources: [S.vz],
  },
  '/iptv-streamingdienste/': {
    updated,
    description: 'IPTV oder Netflix, HBO Max, Discovery+ und Pluto TV? Was Streamingdienste von IPTV unterscheidet und wie Sie beides auf einem Gerät nutzen.',
    sources: [S.vod, S.streaming],
  },
  '/iptv-samsung-tv/': {
    updated,
    sections: [{ id: 'modelljahr', before: 'tipps', h: 'Samsung-Modelljahr herausfinden und App-Auswahl prüfen', html: `<p>Welche IPTV-Apps im Samsung-Store erscheinen, hängt vom Modelljahr und der Tizen-Version Ihres Fernsehers ab. Das Modelljahr erkennen Sie an der Modellbezeichnung auf dem Typenschild oder unter <em>Einstellungen › Support › Über dieses TV-Gerät</em>. Bei vielen Modellen verrät ein Buchstabe in der Bezeichnung das Jahr.</p>
<p>Ältere Fernseher erhalten irgendwann keine App-Updates mehr; Player verschwinden dann aus dem Store oder lassen sich nicht mehr installieren. In diesem Fall ist ein ${L('/iptv-fire-tv-stick/', 'Fire TV Stick')} am HDMI-Anschluss die zuverlässigste Lösung. Bei aktuellen Modellen finden Sie dagegen Player wie den ${L('/ibo-player/', 'IBO Player')} oder ${L('/iptv-smarters-pro-samsung-tv/', 'IPTV Smarters Pro für Samsung')} direkt im Store.</p>` }],
  },
  '/iptv-regionen/': {
    updated,
    title: `IPTV in Ihrer Region: Städte & Bundesländer | ${site.name}`,
    sections: [{ id: 'vor-ort', before: 'ueberall', h: 'Was die Ortsseiten Ihnen zeigen', html: `<p>Jede Seite zu einer Stadt oder Region beantwortet die Fragen, die vor Ort wirklich zählen: Welche Anschlussarten sind verbreitet? Gibt es regionale Netzbetreiber neben den bundesweiten Anbietern? Wo ist das WLAN eher das Problem als die Leitung – etwa in Altbauten mit dicken Wänden oder in Häusern mit mehreren Etagen? Und welche Nachbarorte und Regionen haben eigene Hinweise?</p>
<p>Die Angaben zu Netzbetreibern sind Beispiele ohne Gewähr. Welche Geschwindigkeit an Ihrer Adresse möglich ist, zeigt der Breitbandatlas des Bundes; wie schnell Ihr Anschluss tatsächlich ist, misst die Breitbandmessung der Bundesnetzagentur. Am verlässlichsten ist der ${L('/iptv-testen/', 'kostenlose Test')} auf Ihrem eigenen Gerät zu Ihrer üblichen Fernsehzeit.</p>` }],
  },
  '/beste-iptv-player/': {
    updated,
    sections: [{ id: 'fazit', h: 'Fazit: der beste IPTV-Player 2026 für jeden Haushalt', html: `<p>Den einen besten IPTV-Player für alle gibt es nicht – aber für jede Situation einen klaren Favoriten. Unser Fazit für 2026:</p>
<ul><li><strong>Bester IPTV-Player für den Fernseher mit Android TV oder Fire TV:</strong> ${L('/tivimate/', 'TiviMate')}, wegen des klassischen Programmführers und der Bedienung per Fernbedienung.</li>
<li><strong>Bester kostenloser IPTV-Player:</strong> ${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')} oder ${L('/xciptv/', 'XCIPTV')} – beide mit Live-TV, Filmen und Serien.</li>
<li><strong>Bester IPTV-Player für Samsung und LG:</strong> der ${L('/ibo-player/', 'IBO Player')}, im Jahrespaket von ${site.name} in der Pro-Version inklusive.</li>
<li><strong>Bester IPTV-Player für Apple-Geräte:</strong> ${L('/iptvx/', 'IPTVX')} am Apple TV, ${L('/smarters-player-lite/', 'Smarters Player Lite')} als kostenlose Alternative.</li>
<li><strong>Bester IPTV-Player für den PC:</strong> ${L('/vlc-iptv/', 'VLC')} für den schnellen Start, ${L('/iptvnator/', 'IPTVnator')} für mehr Komfort.</li></ul>
<p>Probieren Sie Ihren Favoriten mit dem ${L('/iptv-testen/', 'kostenlosen Test')} aus – die Zugangsdaten funktionieren in allen genannten Playern.</p>` }],
  },
  '/iptv-reddit-forum/': {
    updated,
    sections: [{ id: 'zusammenfassung', h: 'IPTV auf Reddit und im Forum: unser Fazit', html: `<p>Reddit-Threads und IPTV-Foren sind wertvoll, wenn es um Technik geht: Welche App läuft auf welchem Gerät, wie richte ich den Programmführer ein, warum ruckelt das Bild? Hier helfen erfahrene Nutzer oft schneller als jede Anleitung. Für die Frage nach dem besten Anbieter taugen Reddit und Forum dagegen wenig, weil Empfehlungen schwer überprüfbar sind und Anbieternamen in vielen Communities bewusst nicht genannt werden.</p>
<p>Nutzen Sie Reddit und Foren deshalb als Werkzeugkasten für die Einrichtung – und prüfen Sie Anbieter selbst: mit einem kostenlosen Test, klaren Preisen und einem Support, der antwortet. Unsere Kriterien finden Sie unter ${L('/iptv-anbieter/', 'IPTV-Anbieter wählen')}.</p>` }],
    sources: [S.vz],
  },
  '/iptv-enigma2/': {
    updated,
    description: 'IPTV auf Enigma2-Receivern wie VU+, Dreambox oder Gigablue: M3U-Playlist als Senderliste einbinden, hilfreiche Plugins und wann sich das lohnt.',
  },
  '/iptv-bundesliga/': {
    updated,
    description: 'Bundesliga und Champions League per IPTV: wer die Rechte in Deutschland hat, welche Technik Sie brauchen und wie Fußball ruckelfrei auf den TV kommt.',
    sources: [wiki('Fußball-Bundesliga', 'Fußball-Bundesliga'), S.breitband],
  },
  '/iptv-sport/': { sources: [S.breitband, S.uhd] },
  '/iptv-anbieter-liste/': { sources: [S.vz, S.urheber] },
  '/iptv-im-browser/': { sources: [S.hls, S.m3u] },
  '/iptv-player-android/': { sources: [S.androidtv, S.playProtect] },
  '/weitere-iptv-player/': { sources: [S.m3u, S.mac] },
  '/smart-iptv-playlist-hochladen/': { sources: [['Smart IPTV (Website des App-Anbieters)', 'https://siptv.app/'], S.mac] },
  '/ibo-player-alternativen/': {
    description: 'IBOXX, IBOSS, IBOSOL, IBO STB, King 4K, Virginia, Family Player, Hot Player und Bay IPTV: Einrichtung per MAC-Adresse und worauf Sie achten sollten.',
    sources: [S.mac, S.tizen, S.webos],
  },
  '/tivimate-alternativen/': { sources: [S.androidtv, S.epg] },
  '/tivimate-fire-tv-stick/': { sources: [S.fire, S.epg] },
  '/tivimate-premium/': { sources: [S.androidtv, S.epg] },
  '/iptv-smarters-pro-android/': { sources: [S.androidtv, S.playProtect] },
  '/iptv-smarters-pro-fire-tv-stick/': { sources: [S.fire, S.playProtect] },
  '/iptv-smarters-pro-iphone-apple-tv/': { sources: [S.appletv] },
  '/iptv-smarters-pro-lg-tv/': { sources: [S.webos, S.mac] },
  '/iptv-smarters-pro-pc/': { sources: [S.m3u, S.vlc] },
  '/iptv-smarters-pro-samsung-tv/': { sources: [S.tizen, S.mac] },
  '/iptv-smarters-pro/': { description: 'IPTV Smarters Pro einrichten: Download für Android, iPhone, Apple TV, Windows und Mac, Login per Xtream Codes oder M3U, Einstellungen und Fehlerhilfe.' },
  '/iptv-apps/': { description: 'Die besten IPTV-Apps im Überblick: Smarters Pro, TiviMate, Smart IPTV, SS IPTV, Flix IPTV, XCIPTV, Kodi und VLC – welcher Player zu Ihrem Gerät passt.' },
  '/iptv-server/': { description: 'Was ist ein IPTV-Server? Server-URL, Port und Portal-Adresse erklärt, wie Sie die Erreichbarkeit prüfen und warum Online-IPTV-Checker riskant sind.' },
  '/m3u8/': { description: 'M3U8 einfach erklärt: Unterschied zwischen M3U8-Senderliste und HLS-Stream, Aufbau mit Beispielen, Öffnen in VLC und Apps und typische Umlaut-Fehler.' },
  '/flix-iptv/': { description: 'Flix IPTV einrichten: Playlist per MAC-Adresse hochladen, die App auf Samsung, LG, Android und Fire TV nutzen und nach der Testphase aktivieren.' },
  '/android-tv-box-iptv/': { description: 'IPTV auf der Android-TV-Box einrichten: zertifizierte Box oder No-Name-Gerät, Play-Protect-Check, passende Apps, Anleitung und Hilfe bei Fehlern.' },
};
