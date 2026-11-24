// Third content pass (SEO audit, November 2026): deeper sections for pages
// that were thin, troubleshooting tables, outbound sources and FAQs. Merged
// into the page data by index.mjs exactly like extend.mjs.
// Rules: facts only, prices from site.mjs, no channel or brand claims,
// hedge third-party apps; `sources` are neutral reference links (Wikipedia,
// Bundesnetzagentur, official project sites of open-source software).
import { site, plans } from '../site.mjs';
import { L, ol, stand } from './util.mjs';

const wiki = (slug, label) => [label, `https://de.wikipedia.org/wiki/${slug}`];
const src = {
  iptv: wiki('Internet_Protocol_Television', 'Wikipedia: Internet Protocol Television'),
  streaming: wiki('Streaming-Media', 'Wikipedia: Streaming-Media'),
  breitband: ['Bundesnetzagentur: Breitbandmessung (offizieller Speedtest)', 'https://breitbandmessung.de/'],
  bnetza: ['Bundesnetzagentur', 'https://www.bundesnetzagentur.de/'],
  uhd: wiki('Ultra_High_Definition_Television', 'Wikipedia: Ultra High Definition Television'),
  hevc: wiki('High_Efficiency_Video_Coding', 'Wikipedia: High Efficiency Video Coding (H.265/HEVC)'),
  m3u: wiki('M3U', 'Wikipedia: M3U-Dateiformat'),
  epg: wiki('Elektronischer_Programmführer', 'Wikipedia: Elektronischer Programmführer (EPG)'),
  vod: wiki('Video-on-Demand', 'Wikipedia: Video-on-Demand'),
  urheber: wiki('Urheberrecht_(Deutschland)', 'Wikipedia: Urheberrecht (Deutschland)'),
  fire: wiki('Amazon_Fire_TV', 'Wikipedia: Amazon Fire TV'),
  chromecast: wiki('Chromecast', 'Wikipedia: Chromecast'),
  androidtv: wiki('Android_TV', 'Wikipedia: Android TV'),
  appletv: wiki('Apple_TV', 'Wikipedia: Apple TV'),
  tizen: wiki('Tizen', 'Wikipedia: Tizen (Samsung)'),
  webos: wiki('WebOS', 'Wikipedia: webOS (LG)'),
  enigma2: wiki('Enigma2', 'Wikipedia: Enigma2'),
  stb: wiki('Set-Top-Box', 'Wikipedia: Set-Top-Box'),
  mac: wiki('MAC-Adresse', 'Wikipedia: MAC-Adresse'),
  port: wiki('Port_(Protokoll)', 'Wikipedia: Port (Protokoll)'),
  vlc: ['VideoLAN: VLC media player (offizielle Website)', 'https://www.videolan.org/vlc/'],
  kodi: ['Kodi (offizielle Website)', 'https://kodi.tv/'],
  kodiPvr: ['Kodi-Wiki: PVR IPTV Simple Client', 'https://kodi.wiki/view/Add-on:PVR_IPTV_Simple_Client'],
  plex: ['Plex (offizielle Website)', 'https://www.plex.tv/'],
  jellyfin: ['Jellyfin-Dokumentation', 'https://jellyfin.org/docs/'],
  siptv: ['Smart IPTV (Website des App-Anbieters)', 'https://siptv.app/'],
  ssiptv: ['SS IPTV (Website des App-Anbieters)', 'https://ss-iptv.com/'],
};

const month = plans.find((p) => p.months === 1);
const year = plans.find((p) => p.months === 12);
const fromPrice = month ? `${month.price} €` : '';

// Small table helper: rows are [problem, fix].
const fixTable = (id, caption, rows, head = ['Problem', 'Lösung']) => `
<div class="table-wrap" role="region" aria-labelledby="${id}" tabindex="0"><table class="table">
<caption id="${id}">${caption}</caption>
<thead><tr><th scope="col">${head[0]}</th><th scope="col">${head[1]}</th></tr></thead>
<tbody>${rows.map(([a, b]) => `<tr><th scope="row">${a}</th><td>${b}</td></tr>`).join('')}</tbody></table></div>`;

// Closing paragraph that ties a setup guide to the free test, written per page.
const tryIt = (what) => `<p>${what} Fordern Sie dafür einen ${L('/iptv-testen/', 'kostenlosen IPTV-Test')} an: Sie erhalten Zugangsdaten für ein Gerät und eine Anleitung für Ihre App. Passt alles, wählen Sie bei den ${L('/#preise', 'Preisen')} ein Paket${fromPrice ? ` ab ${fromPrice}` : ''} – einmal bezahlt, ohne automatische Verlängerung.</p>`;

export default {

  // ── Wissen und Kauf ───────────────────────────────────────────────────

  '/was-ist-iptv/': {
    sections: [
      { id: 'vorteile-nachteile', h: 'Vor- und Nachteile von IPTV auf einen Blick', html: `
<p>IPTV ersetzt Satellitenschüssel und Kabelanschluss durch eine App. Das bringt viel Flexibilität, setzt aber eine stabile Internetleitung voraus.</p>
${fixTable('iptv-pro-contra', 'IPTV im Vergleich zu Satellit und Kabel', [
  ['Empfang', 'Überall, wo es Internet gibt – auch in Mietwohnungen ohne Schüssel oder Kabelanschluss.'],
  ['Geräte', 'Smart-TV, Streaming-Stick, Smartphone, Tablet und Computer; siehe ' + L('/iptv-geraete/', 'IPTV-Geräte') + '.'],
  ['Komfort', 'Programmführer, Filme und Serien auf Abruf (' + L('/iptv-vod/', 'VOD') + ') und je nach App Catch-Up.'],
  ['Voraussetzung', 'Eine stabile Leitung: rund 10 Mbit/s für HD, 25 Mbit/s für ' + L('/iptv-4k/', '4K') + ' pro Gerät.'],
  ['Schwachstelle', 'WLAN und Router: Ruckler haben meist hier ihre Ursache – Lösungen unter ' + L('/iptv-probleme/', 'IPTV-Probleme beheben') + '.'],
], ['Merkmal', 'IPTV über das Internet'])}
<p>Wie IPTV in Deutschland rechtlich und technisch einzuordnen ist, erklärt ${L('/iptv-deutschland/', 'IPTV in Deutschland')}. Worauf Sie bei der Wahl eines Anbieters achten sollten, lesen Sie unter ${L('/iptv-anbieter/', 'IPTV-Anbieter vergleichen')}.</p>` },
    ],
    sources: [src.iptv, src.streaming, src.breitband],
  },

  '/iptv-kaufen/': {
    related: ['/was-ist-iptv/', '/iptv-deutschland/'],
    sources: [src.breitband],
  },

  '/iptv-anbieter/': {
    related: ['/was-ist-iptv/'],
    sources: [src.urheber, src.iptv],
  },

  '/iptv-deutschland/': {
    related: ['/was-ist-iptv/', '/iptv-enigma2/'],
    sources: [src.iptv, src.breitband, src.bnetza],
  },

  '/iptv-4k/': {
    sources: [src.uhd, src.hevc, src.breitband],
  },

  '/iptv-probleme/': {
    sources: [src.breitband],
  },

  '/m3u-playlist/': {
    sources: [src.m3u, src.epg],
  },

  '/iptv-testen/': {
    related: ['/was-ist-iptv/'],
    sources: [src.breitband],
  },

  '/iptv-senderliste/': {
    related: ['/perfect-player/', '/gse-smart-iptv/'],
    sources: [src.epg],
  },

  '/iptv-vod/': {
    related: ['/plex-jellyfin-iptv/', '/implayer/'],
    sources: [src.vod],
  },

  '/iptv-server/': {
    related: ['/plex-jellyfin-iptv/'],
    sources: [src.port],
  },

  '/xtream-codes/': {
    sections: [
      { id: 'umwandeln', h: 'Xtream Codes oder M3U: welche Anmeldung für welche App?', html: `
<p>Mit Ihrem Zugang bei ${site.name} erhalten Sie beide Varianten. Welche Sie nutzen, hängt nur von der App ab:</p>
${fixTable('xtream-m3u-apps', 'Anmeldeart nach App-Typ', [
  ['Apps mit Login-Maske', 'Xtream Codes – zum Beispiel ' + L('/iptv-smarters-pro/', 'IPTV Smarters Pro') + ', ' + L('/tivimate/', 'TiviMate') + ', ' + L('/xciptv/', 'XCIPTV') + ', ' + L('/ott-navigator/', 'OTT Navigator') + ' oder ' + L('/implayer/', 'iMPlayer') + '.'],
  ['Fernseher-Apps mit MAC-Adresse', 'Meist M3U-Link, teils auch Xtream – etwa ' + L('/ibo-player/', 'IBO Player') + ', ' + L('/duplecast/', 'Duplecast') + ' oder ' + L('/smart-iptv/', 'Smart IPTV') + '.'],
  ['Einfache Player', 'M3U-Link plus EPG-Adresse – etwa ' + L('/vlc-iptv/', 'VLC') + ', ' + L('/perfect-player/', 'Perfect Player') + ' oder ' + L('/kodi-iptv/', 'Kodi') + '.'],
  ['Boxen mit Portal', 'Portal-URL und MAC-Adresse statt Xtream – siehe ' + L('/mag-box/', 'MAG-Box') + ' und ' + L('/stbemu/', 'STBEmu') + '.'],
], ['App-Typ', 'Empfohlene Anmeldung'])}
<p>Technisch sind Xtream-Daten und M3U-Link zwei Wege zum selben Zugang: Der M3U-Link enthält Server-URL, Benutzername und Passwort bereits als Parameter. Was die einzelnen Bestandteile bedeuten, erklärt ${L('/iptv-server/', 'IPTV-Server: Server-URL und Port')}.</p>` },
      { id: 'sicherheit', h: 'Zugangsdaten sicher aufbewahren', html: `
<ul>
  <li><strong>Nicht öffentlich teilen:</strong> Wer Ihre Xtream-Daten kennt, kann Ihren Zugang nutzen und belegt dann Ihre gleichzeitigen Geräte.</li>
  <li><strong>Nur in Apps aus offiziellen Stores eintragen:</strong> Apps aus unbekannten Quellen können Zugangsdaten mitlesen.</li>
  <li><strong>Bei Verdacht melden:</strong> Erscheint „Max connections reached“, obwohl niemand anderes schaut, schreiben Sie uns an ${site.email} – wir prüfen den Zugang.</li>
</ul>` },
    ],
    faq: [
      ['Kann ich Xtream Codes und M3U gleichzeitig nutzen?', 'Ja, beides ist derselbe Zugang. Jede laufende Wiedergabe zählt aber als ein Gerät – entscheidend ist die Geräteanzahl Ihres Pakets.'],
    ],
    sources: [src.port, src.m3u],
  },

  // ── Apps ──────────────────────────────────────────────────────────────

  '/iptv-smarters-pro/': {
    related: ['/iptvx/'],
    sources: [src.androidtv, src.appletv],
    app: { name: 'IPTV Smarters Pro', os: 'Android, Android TV, Fire OS, iOS, iPadOS, tvOS, Windows, macOS' },
  },

  '/tivimate/': {
    app: { name: 'TiviMate', os: 'Android TV, Google TV, Fire OS' },
    sources: [src.androidtv, src.fire],
  },

  '/smart-iptv/': {
    app: { name: 'Smart IPTV (SIPTV)', os: 'webOS, Tizen, Android TV, Fire OS' },
    sources: [src.siptv, src.mac],
  },

  '/ss-iptv/': {
    app: { name: 'SS IPTV (Simple Smart IPTV)', os: 'webOS, Tizen, Android' },
    sections: [
      { id: 'epg', h: 'Programmführer (EPG) in SS IPTV einrichten', html: `
<p>Ob SS IPTV zu Ihren Sendern ein Programm anzeigt, hängt davon ab, ob die Playlist eine EPG-Adresse mitbringt. Fehlt der Programmführer, gehen Sie so vor:</p>
${ol([
  'Prüfen Sie, ob Sie die vollständige M3U-Adresse aus unserer E-Mail verwendet haben – manche Links enthalten die EPG-Angabe bereits.',
  'Öffnen Sie in SS IPTV die Einstellungen und suchen Sie den Bereich für den Programmführer bzw. EPG.',
  'Tragen Sie dort die EPG-Adresse (XMLTV-Link) aus unserer E-Mail ein, sofern die App ein Feld dafür anbietet.',
  'Starten Sie die App neu. Die Programmdaten werden beim ersten Laden aufgebaut, das kann einige Minuten dauern.',
])}
<p>Wie Programmführer und Senderliste zusammenspielen, lesen Sie unter ${L('/iptv-senderliste/', 'IPTV-Senderliste und EPG')}.</p>` },
      { id: 'fehler-ss', h: 'SS IPTV: typische Fehler und Lösungen', html: fixTable('ss-fehler', 'Fehlerbilder in SS IPTV', [
        ['Playlist-Kachel fehlt', 'Unter „Externe Playlists“ prüfen, ob der Eintrag gespeichert wurde, und die App neu starten.'],
        ['Code wird nicht angenommen', 'Der Verbindungscode gilt nur kurze Zeit. Einen neuen Code abrufen und sofort eingeben.'],
        ['Sender laden nicht', 'Link auf Tippfehler prüfen und testen, ob Ihr Paket noch aktiv ist – mehr unter ' + L('/iptv-probleme/', 'IPTV-Probleme beheben') + '.'],
        ['Bild ruckelt', 'Fernseher per LAN-Kabel verbinden; im WLAN das 5-GHz-Band nutzen.'],
      ]) + tryIt('Am einfachsten prüfen Sie SS IPTV mit echten Zugangsdaten auf Ihrem eigenen Fernseher.') },
    ],
    sources: [src.ssiptv, src.m3u],
  },

  '/flix-iptv/': {
    app: { name: 'Flix IPTV', os: 'Tizen, webOS, Android, Fire OS' },
    sections: [
      { id: 'einstellungen', h: 'Empfohlene Einstellungen in Flix IPTV', html: `
<ul>
  <li><strong>Sprache:</strong> In den Einstellungen lässt sich die Oberfläche meist auf Deutsch umstellen.</li>
  <li><strong>Player:</strong> Bietet die App mehrere Player-Varianten an, wechseln Sie bei Rucklern oder schwarzem Bild testweise den Player.</li>
  <li><strong>Favoriten und Gruppen:</strong> Blenden Sie nicht benötigte Kategorien aus – das macht die Senderliste übersichtlich und beschleunigt das Laden. Tipps dazu unter ${L('/iptv-senderliste/', 'Senderliste und EPG')}.</li>
  <li><strong>Jugendschutz:</strong> Wenn die App eine PIN für Kategorien anbietet, richten Sie sie direkt bei der Einrichtung ein.</li>
</ul>` },
      { id: 'fehler-flix', h: 'Flix IPTV: häufige Probleme', html: fixTable('flix-fehler', 'Fehlerbilder in Flix IPTV', [
        ['Playlist erscheint nicht', 'MAC-Adresse auf der Upload-Seite exakt so eintragen, wie die App sie anzeigt, und die Playlist in der App neu laden.'],
        ['„Expired“ nach einigen Tagen', 'Die Testphase der App ist abgelaufen – das ist unabhängig von Ihrem IPTV-Paket. Aktivierung beim App-Anbieter oder eine kostenlose App wie ' + L('/ss-iptv/', 'SS IPTV') + ' nutzen.'],
        ['Neuer Fernseher', 'Die Aktivierung gilt pro Gerät. Auf dem neuen Gerät erscheint eine neue MAC-Adresse, für die Sie die Playlist erneut hinterlegen.'],
        ['Kein Programmführer', 'EPG-Adresse ergänzen oder die Xtream-Daten statt des M3U-Links verwenden.'],
      ]) + tryIt('Nutzen Sie die Testphase von Flix IPTV und unseren Test gleichzeitig: So sehen Sie vor der Aktivierung, ob App und Leitung zusammenpassen.') },
    ],
    faq: [
      ['Muss ich Flix IPTV auf jedem Fernseher aktivieren?', 'Ja. Die Aktivierung des App-Anbieters gilt pro Gerät bzw. MAC-Adresse. Ihr IPTV-Paket regelt davon unabhängig, wie viele Geräte gleichzeitig schauen.'],
    ],
    sources: [src.mac],
  },

  '/set-iptv/': {
    app: { name: 'Set IPTV', os: 'Tizen, webOS, Android' },
    sections: [
      { id: 'unterschiede', h: 'Set IPTV und Smart One IPTV im direkten Vergleich', html: fixTable('set-vergleich', 'Set IPTV und Smart One IPTV (Stand: ' + stand + ', ohne Gewähr)', [
        ['Prinzip', 'Beide: Playlist-Upload per MAC-Adresse auf der Website des App-Anbieters.'],
        ['Geräte', 'Beide vor allem für Samsung- und LG-Fernseher, je nach Store auch Android.'],
        ['Kosten', 'Beide: Testphase, danach Aktivierung beim jeweiligen App-Anbieter. Die Gebühren nennt der Anbieter.'],
        ['Unterschied', 'Getrennte Apps mit eigener Oberfläche und eigener Aktivierung – eine Aktivierung gilt nicht für die andere App.'],
        ['Unsere Empfehlung', 'Im Jahrespaket den ' + L('/ibo-player/', 'IBO Player Pro') + ' nutzen, weil das App-Abo dort inklusive ist.'],
      ], ['Merkmal', 'Set IPTV / Smart One IPTV'])
      + `<p>Ein Wechsel ist jederzeit möglich: Ihre Zugangsdaten bei ${site.name} funktionieren in jeder App, die M3U oder Xtream Codes unterstützt. Weitere Fernseher-Apps nach demselben Prinzip sind ${L('/duplecast/', 'Duplecast')} und ${L('/flix-iptv/', 'Flix IPTV')}.</p>` },
      { id: 'fehler-set', h: 'Set IPTV: Fehler schnell beheben', html: `
<ul>
  <li><strong>Upload-Seite lehnt die MAC-Adresse ab:</strong> Doppelpunkte mit eingeben und auf verwechselte Zeichen achten (0 und O, 1 und I).</li>
  <li><strong>Playlist lädt endlos:</strong> Fernseher einmal komplett vom Strom trennen, damit die App wirklich neu startet.</li>
  <li><strong>Nur Live-TV, keine Filme:</strong> Manche Fernseher-Apps zeigen Filme und Serien nur mit Xtream-Daten vollständig an – siehe ${L('/xtream-codes/', 'Xtream Codes')}.</li>
</ul>
${tryIt('Testen Sie Set IPTV oder Smart One IPTV während der Testphase der App mit echten Zugangsdaten.')}` },
    ],
    sources: [src.mac, src.tizen, src.webos],
  },

  '/xciptv/': {
    app: { name: 'XCIPTV Player', os: 'Android, Android TV, Fire OS' },
    sections: [
      { id: 'fehler-xc', h: 'XCIPTV: häufige Fehlermeldungen', html: fixTable('xc-fehler', 'Fehlermeldungen in XCIPTV', [
        ['„Invalid login“', 'Benutzername und Passwort auf Groß- und Kleinschreibung prüfen; Server-URL mit http:// und Port eintragen.'],
        ['„Account expired“', 'Die Laufzeit des Zugangs ist vorbei. Ein neues Paket wählen Sie bei den ' + L('/#preise', 'Preisen') + '.'],
        ['Sender laden, Filme nicht', 'Inhalte in der App neu laden (Aktualisieren) und den Cache der App leeren.'],
        ['Programmführer leer', 'EPG in den Einstellungen manuell aktualisieren und die Zeitzone prüfen.'],
      ], ['Meldung', 'Lösung']) + `<p>Bleibt ein Fehler bestehen, hilft die Übersicht unter ${L('/iptv-probleme/', 'IPTV-Probleme beheben')} weiter – oder Sie schreiben uns direkt.</p>` },
      { id: 'vergleich-xc', h: 'XCIPTV, TiviMate oder OTT Navigator?', html: `
<p>Alle drei laufen auf Android TV und Fire TV und unterstützen den Xtream-Login. <strong>XCIPTV</strong> ist kostenlos und schnell eingerichtet. ${L('/tivimate/', 'TiviMate')} bietet den komfortabelsten Programmführer, die wichtigsten Komfortfunktionen gibt es aber nur mit Premium. ${L('/ott-navigator/', 'OTT Navigator')} lässt sich am stärksten anpassen und unterstützt zusätzlich Portal-Zugänge. Für Einsteiger ist XCIPTV ein guter Start; wer viel Live-TV schaut, probiert anschließend TiviMate.</p>
${tryIt('Installieren Sie XCIPTV und melden Sie sich mit unseren Test-Zugangsdaten an.')}` },
    ],
    sources: [src.androidtv, src.fire],
  },

  '/stbemu/': {
    app: { name: 'STBEmu', os: 'Android, Android TV, Fire OS' },
    sections: [
      { id: 'profil', h: 'STBEmu-Profil richtig konfigurieren', html: `
<p>Die meisten Probleme mit STBEmu entstehen durch ein unvollständiges Profil. Prüfen Sie nach der Einrichtung diese Punkte:</p>
${fixTable('stbemu-profil', 'Wichtige Einstellungen im STBEmu-Profil', [
  ['Portal-URL', 'Vollständig mit http:// und – falls angegeben – Port und abschließendem Pfad übernehmen.'],
  ['MAC-Adresse', 'Die angezeigte Adresse unverändert an uns senden. Ändern Sie sie danach nicht mehr, sonst ist die Freischaltung ungültig.'],
  ['Bildschirmauflösung', 'Unter STB-Konfiguration eine zur Box passende Auflösung wählen, wenn die Oberfläche zu klein oder abgeschnitten wirkt.'],
  ['Mehrere Profile', 'Für jeden Portal-Zugang ein eigenes Profil anlegen, statt ein vorhandenes zu überschreiben.'],
], ['Einstellung', 'Worauf achten'])}` },
      { id: 'fehler-stbemu', h: 'STBEmu: typische Fehler', html: `
<ul>
  <li><strong>„Authorization failed“:</strong> Die MAC-Adresse ist noch nicht freigeschaltet oder wurde nach der Freischaltung geändert.</li>
  <li><strong>Schwarzer Bildschirm nach dem Start:</strong> Profil öffnen und prüfen, ob die Portal-URL gespeichert ist; App neu starten.</li>
  <li><strong>Fernbedienung reagiert falsch:</strong> In den Tasten-Einstellungen von STBEmu die Belegung anpassen – auf dem Fire TV fehlen manche Tasten einer MAG-Fernbedienung.</li>
</ul>
<p>Haben Sie keinen Portal-Zugang, ist der Xtream-Login in ${L('/xciptv/', 'XCIPTV')} oder ${L('/ott-navigator/', 'OTT Navigator')} der einfachere Weg auf Android.</p>` },
    ],
    sources: [src.stb, src.mac],
  },

  '/kodi-iptv/': {
    app: { name: 'Kodi', os: 'Windows, macOS, Linux, Android, Android TV, Fire OS' },
    sources: [src.kodi, src.kodiPvr],
  },

  '/vlc-iptv/': {
    app: { name: 'VLC media player', os: 'Windows, macOS, Linux, Android, iOS, iPadOS' },
    sections: [
      { id: 'xtream-vlc', h: 'Xtream-Zugangsdaten in VLC verwenden', html: `
<p>VLC kennt keine Xtream-Login-Maske. Sie können Ihren Zugang trotzdem nutzen, denn ein M3U-Link enthält die Xtream-Daten bereits. Verwenden Sie einfach den M3U-Link aus unserer E-Mail. Wie ein solcher Link aufgebaut ist, zeigt ${L('/m3u-playlist/', 'M3U-Playlist')}; die Bedeutung von Server-URL und Port erklärt ${L('/iptv-server/', 'IPTV-Server')}.</p>
<p>Tipp für den Alltag: Speichern Sie die geladene Wiedergabeliste als Datei auf dem Desktop. Ein Doppelklick startet VLC dann direkt mit Ihrer Senderliste. Aktualisiert sich die Senderliste, laden Sie den Link einfach neu.</p>` },
      { id: 'fehler-vlc', h: 'VLC: Fehlermeldungen und Lösungen', html: fixTable('vlc-fehler', 'Fehlerbilder bei IPTV in VLC', [
        ['„Ihre Eingabe kann nicht geöffnet werden“', 'Link vollständig kopiert? Ist Ihr Paket noch aktiv? Den Link testweise in einem anderen Player öffnen.'],
        ['Ton, aber kein Bild', 'VLC aktualisieren und unter Einstellungen › Eingang/Codecs die Hardware-Dekodierung umschalten.'],
        ['Stream bricht nach Sekunden ab', 'Netzwerk-Cache erhöhen (z. B. 3000 ms) und per LAN-Kabel statt WLAN verbinden.'],
        ['Senderliste sehr lang', 'Gewünschte Sender in eine eigene Wiedergabeliste ziehen und diese speichern.'],
      ], ['Meldung', 'Lösung']) + tryIt('VLC eignet sich gut, um einen Testzugang schnell am Computer oder Handy auszuprobieren.') },
    ],
    faq: [
      ['Kann ich mit VLC aufnehmen?', 'VLC hat eine einfache Aufnahmefunktion für laufende Streams. Beachten Sie, dass Aufnahmen nur für den privaten Gebrauch bestimmt sind.'],
    ],
    sources: [src.vlc, src.m3u],
  },

  '/ibo-player/': {
    sources: [src.mac],
  },

  '/iptvx/': {
    sections: [
      { id: 'einstellungen-iptvx', h: 'IPTVX optimal einstellen', html: fixTable('iptvx-einst', 'Empfohlene Einstellungen in IPTVX', [
        ['Programmführer', 'Bei Xtream-Login lädt IPTVX den EPG meist automatisch. Fehlt er, die EPG-Adresse (XMLTV) aus unserer E-Mail manuell hinterlegen.'],
        ['Kategorien', 'Nicht benötigte Gruppen ausblenden – das verkürzt Ladezeiten auf dem Apple TV spürbar.'],
        ['Synchronisation', 'Wenn die App eine iCloud-Synchronisation anbietet, übernehmen iPhone und Apple TV Favoriten und Playlists gegenseitig.'],
        ['Bildformat', 'Auf dem Apple TV „Bildwiederholrate anpassen“ in den tvOS-Einstellungen aktivieren, damit Sport flüssiger läuft.'],
      ], ['Bereich', 'Empfehlung'])
      + `<p>Bei Rucklern liegt die Ursache meist im WLAN. Ein Apple TV mit LAN-Anschluss ist dann die stabilste Lösung – mehr unter ${L('/iptv-probleme/', 'IPTV-Probleme beheben')}.</p>` },
      { id: 'iptvx-oder', h: 'IPTVX, GSE Smart IPTV oder IPTV Smarters?', html: `
<p>Auf Apple-Geräten haben Sie die Wahl zwischen mehreren Playern. <strong>IPTVX</strong> setzt auf eine moderne Oberfläche im tvOS-Stil und eignet sich besonders für das Apple TV im Wohnzimmer. ${L('/gse-smart-iptv/', 'GSE Smart IPTV')} ist älter, bietet aber viele Einstellungen und kann an einen Chromecast senden. ${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')} ist in der Grundversion kostenlos und auf fast allen Plattformen verfügbar – praktisch, wenn Sie Apple- und Android-Geräte mischen.</p>
${tryIt('Installieren Sie IPTVX auf Ihrem Apple TV oder iPhone und melden Sie sich mit unseren Test-Zugangsdaten an.')}` },
    ],
    sources: [src.appletv],
  },

  '/implayer/': {
    sections: [
      { id: 'oberflaeche', h: 'Was iMPlayer von anderen Playern unterscheidet', html: `
<p>iMPlayer richtet sich an alle, die eine Oberfläche wie bei großen Streamingdiensten mögen. Filme und Serien erscheinen mit großen Covern, Beschreibungen und – je nach Zugang – Staffel- und Episodenlisten. Live-TV und Programmführer sind in eigenen Bereichen untergebracht. Wer hauptsächlich Filme und Serien schaut, findet sich hier schneller zurecht als in klassischen Senderlisten. Mehr zu Inhalten auf Abruf lesen Sie unter ${L('/iptv-vod/', 'IPTV-VOD: Filme und Serien')}.</p>
${fixTable('implayer-einst', 'Empfohlene Einstellungen in iMPlayer', [
  ['Profile', 'Wenn mehrere Personen die App nutzen, getrennte Profile anlegen – so bleiben Favoriten und „Weiterschauen“ getrennt.'],
  ['Kindersicherung', 'Erwachsenen-Kategorien per PIN sperren, sofern die App das anbietet.'],
  ['Player', 'Bei Rucklern oder fehlendem Ton den internen Player wechseln.'],
  ['Aktualisierung', 'Nach Änderungen an der Senderliste die Playlist in der App neu laden.'],
], ['Bereich', 'Empfehlung'])}` },
      { id: 'fehler-implayer', h: 'iMPlayer: häufige Probleme', html: `
<ul>
  <li><strong>Anmeldung schlägt fehl:</strong> Server-URL mit http:// und Port eintragen, Benutzername und Passwort exakt übernehmen – siehe ${L('/xtream-codes/', 'Xtream Codes')}.</li>
  <li><strong>Cover fehlen:</strong> Die Bilder lädt die App nach; bei langsamer Leitung dauert das beim ersten Öffnen etwas.</li>
  <li><strong>Premium-Funktionen gesperrt:</strong> Die Testphase der App ist abgelaufen. Das betrifft nur die App, nicht Ihren IPTV-Zugang.</li>
</ul>
${tryIt('Ob iMPlayer zu Ihnen passt, sehen Sie am besten mit echten Inhalten.')}` },
    ],
    faq: [
      ['Läuft iMPlayer auch auf Samsung- oder LG-Fernsehern?', 'Das hängt vom aktuellen Angebot im jeweiligen App-Store ab. Für Samsung und LG sind Apps mit MAC-Adresse wie der IBO Player verbreitet; alternativ nutzen Sie einen Streaming-Stick.'],
    ],
    sources: [src.androidtv, src.fire],
  },

  '/gse-smart-iptv/': {
    sections: [
      { id: 'epg-gse', h: 'Programmführer und Favoriten in GSE Smart IPTV', html: `
<p>GSE Smart IPTV trennt Playlists und Programmführer. Bei der Anmeldung per Xtream Codes wird der EPG meist automatisch geladen. Nutzen Sie einen M3U-Link, tragen Sie die EPG-Adresse separat ein:</p>
${ol([
  'Öffnen Sie das Menü und wählen Sie „EPG Sources“ bzw. Programmquellen.',
  'Tippen Sie auf das Plus-Symbol und fügen Sie die XMLTV-Adresse aus unserer E-Mail ein.',
  'Laden Sie die Quelle einmal manuell, damit die App die Programmdaten zuordnet.',
  'Markieren Sie häufig genutzte Sender als Favoriten – sie erscheinen dann in einer eigenen Liste.',
])}
<p>Hintergründe zu Programmführer und Sortierung finden Sie unter ${L('/iptv-senderliste/', 'Senderliste und EPG')}.</p>` },
      { id: 'fehler-gse', h: 'GSE Smart IPTV: Probleme lösen', html: fixTable('gse-fehler', 'Fehlerbilder in GSE Smart IPTV', [
        ['Playlist lädt nicht', 'Bei M3U prüfen, ob der Link vollständig ist; bei Xtream Server-URL mit Port eintragen.'],
        ['Kein Bild beim Casten', 'Nicht jedes Stream-Format lässt sich an jeden Chromecast senden. Stattdessen eine App direkt auf dem Fernseher nutzen – siehe ' + L('/iptv-chromecast/', 'Chromecast und Google TV') + '.'],
        ['Programm verschoben', 'In den EPG-Einstellungen die Zeitverschiebung bzw. Zeitzone anpassen.'],
        ['Werbung in der App', 'Die kostenlose Version kann Werbung zeigen; eine werbefreie Version bietet der App-Anbieter im Store an.'],
      ]) + tryIt('Mit einem kostenlosen Test sehen Sie, wie GSE Smart IPTV auf Ihrem iPhone, iPad oder Android-Gerät läuft.') },
    ],
    sources: [src.appletv, src.epg],
  },

  '/duplecast/': {
    sections: [
      { id: 'geraete-duplecast', h: 'Auf welchen Geräten lohnt sich Duplecast?', html: `
<p>Duplecast spielt seine Stärken auf Fernsehern aus, auf denen das Eintippen langer Adressen mühsam ist – also vor allem auf Smart-TVs von ${L('/iptv-samsung-tv/', 'Samsung')} und ${L('/iptv-lg-tv/', 'LG')}. Weil die Playlist zentral auf der Website des App-Anbieters liegt, können Sie sie dort ändern, ohne den Fernseher anzufassen. Ob Duplecast für Ihr Modell im Store verfügbar ist, sehen Sie direkt im App-Store des Fernsehers.</p>
<p>Auf ${L('/iptv-fire-tv-stick/', 'Fire TV')} und ${L('/iptv-android/', 'Android TV')} ist der Vorteil kleiner: Dort lassen sich Xtream-Daten mit einer Login-Maske ohnehin bequem eingeben, etwa in ${L('/tivimate/', 'TiviMate')} oder ${L('/xciptv/', 'XCIPTV')}.</p>` },
      { id: 'fehler-duplecast', h: 'Duplecast: häufige Probleme und Lösungen', html: fixTable('duplecast-fehler', 'Fehlerbilder in Duplecast', [
        ['Playlist erscheint nicht', 'Kennung auf der Website exakt übernehmen und die App danach vollständig schließen und neu starten.'],
        ['„Device not activated“', 'Die Testphase der App ist abgelaufen oder die Aktivierung fehlt. Das betrifft nur die App, nicht Ihren IPTV-Zugang.'],
        ['Filme und Serien fehlen', 'Statt des M3U-Links die Xtream-Daten hinterlegen, wenn die App das anbietet.'],
        ['Ruckeln am Abend', 'Fernseher per LAN-Kabel anschließen – weitere Tipps unter ' + L('/iptv-probleme/', 'IPTV-Probleme beheben') + '.'],
      ]) + tryIt('Prüfen Sie Duplecast während der App-Testphase mit unseren Test-Zugangsdaten, bevor Sie eine Aktivierung bezahlen.') },
    ],
    faq: [
      ['Kann ich meine Playlist in Duplecast später ändern?', 'Ja. Sie ändern sie auf der Website des App-Anbieters; nach einem Neustart der App ist die neue Playlist auf dem Fernseher.'],
    ],
    sources: [src.mac, src.tizen, src.webos],
  },

  '/ott-navigator/': {
    sections: [
      { id: 'einstellungen-ott', h: 'OTT Navigator: empfohlene Einstellungen', html: fixTable('ott-einst', 'Sinnvolle Einstellungen in OTT Navigator', [
        ['Oberfläche', 'Unter „Erscheinungsbild“ eine Ansicht mit großer Schrift wählen, wenn Sie vom Sofa aus bedienen.'],
        ['Programmführer', 'Automatische Aktualisierung beim Start aktivieren; bei vielen Sendern genügt ein Abruf pro Tag.'],
        ['Player', 'Zwischen internem und externem Player wechseln, wenn einzelne Sender nicht starten.'],
        ['Puffer', 'Bei schwankendem WLAN einen größeren Puffer einstellen – das Umschalten dauert dann etwas länger, das Bild bleibt stabiler.'],
        ['Kategorien', 'Nicht benötigte Gruppen ausblenden, damit die Liste übersichtlich bleibt.'],
      ], ['Bereich', 'Empfehlung']) },
      { id: 'portal-ott', h: 'Portal-Zugang oder Xtream Codes?', html: `
<p>OTT Navigator kann zusätzlich zu Xtream Codes und M3U auch Portal-Zugänge öffnen, wie sie die ${L('/mag-box/', 'MAG-Box')} oder ${L('/stbemu/', 'STBEmu')} nutzen. Für die meisten Kunden ist der Xtream-Login der einfachste Weg, weil keine MAC-Adresse freigeschaltet werden muss. Einen Portal-Zugang stimmen wir bei Bedarf individuell mit Ihnen ab.</p>
<ul>
  <li><strong>Kein Bild, aber Senderliste:</strong> Player wechseln oder die App aktualisieren.</li>
  <li><strong>„Provider error“:</strong> Server-URL mit Port prüfen, siehe ${L('/xtream-codes/', 'Xtream Codes')}.</li>
  <li><strong>Doppelte Sender:</strong> Nur einen Anbieter-Eintrag pro Zugang anlegen.</li>
</ul>
${tryIt('OTT Navigator lässt sich in wenigen Minuten mit Test-Zugangsdaten einrichten.')}` },
    ],
    faq: [
      ['Kann ich in OTT Navigator mehrere Zugänge hinterlegen?', 'Ja, die App kann mehrere Anbieter-Einträge verwalten; je nach Version ist das eine Premium-Funktion. Pro Zugang genügt ein Eintrag.'],
    ],
    sources: [src.androidtv, src.fire],
  },

  '/perfect-player/': {
    sections: [
      { id: 'einstellungen-pp', h: 'Perfect Player: wichtige Einstellungen', html: fixTable('pp-einst', 'Empfohlene Einstellungen in Perfect Player', [
        ['Playlist-Aktualisierung', 'Automatische Aktualisierung beim Start einschalten, damit neue Sender erscheinen.'],
        ['EPG-Zeitverschiebung', 'Stimmt das Programm um eine Stunde nicht, in den EPG-Einstellungen die Zeitverschiebung anpassen.'],
        ['Decoder', 'Zwischen Hardware- und Software-Decoder wechseln, wenn das Bild stockt oder schwarz bleibt.'],
        ['Senderlogos', 'Logos werden aus der Playlist gelesen; fehlen sie, ändert das nichts an der Wiedergabe.'],
      ], ['Bereich', 'Empfehlung'])
      + `<p>Perfect Player liest Playlists im ${L('/m3u-playlist/', 'M3U-Format')} und Programmdaten im XMLTV-Format. Beides finden Sie in unserer E-Mail mit den Zugangsdaten.</p>` },
      { id: 'grenzen-pp', h: 'Grenzen von Perfect Player', html: `
<p>Perfect Player ist auf Live-TV ausgelegt. Filme und Serien aus dem VOD-Bereich erscheinen – wenn überhaupt – als lange Listen ohne Cover. Wer viel auf Abruf schaut, nutzt besser ${L('/implayer/', 'iMPlayer')}, ${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')} oder ${L('/tivimate/', 'TiviMate')}. Unter Windows ist Perfect Player eine schlanke Alternative zu ${L('/kodi-iptv/', 'Kodi')}; einen Überblick gibt ${L('/iptv-pc/', 'IPTV am PC und Mac')}.</p>
${tryIt('Perfect Player eignet sich gut, um einen Testzugang schnell mit Senderliste und Programmführer zu prüfen.')}` },
    ],
    faq: [
      ['Gibt es Perfect Player für Windows?', 'Ja, neben Android und Android TV gibt es eine Windows-Version. Die Einrichtung mit M3U-Link und EPG-Adresse ist dieselbe.'],
    ],
    sources: [src.m3u, src.epg],
  },

  '/plex-jellyfin-iptv/': {
    sections: [
      { id: 'voraussetzungen', h: 'Voraussetzungen für IPTV im Medienserver', html: fixTable('server-vor', 'Was Sie für IPTV in Plex oder Jellyfin brauchen', [
        ['Server', 'Ein dauerhaft laufender Rechner oder ein NAS, auf dem Plex Media Server oder Jellyfin installiert ist.'],
        ['Zugang', 'Ihr M3U-Link und die EPG-Adresse (XMLTV) aus unserer E-Mail.'],
        ['Leitung', 'Pro gleichzeitig laufendem Sender die übliche Bandbreite – rund 10 Mbit/s für HD.'],
        ['Transcoding', 'Muss der Server Streams umwandeln, braucht er deutlich mehr Rechenleistung. Direktwiedergabe schont den Server.'],
        ['Plex', 'Zusätzlich einen Tuner-Proxy und einen Plex Pass für Live-TV & DVR.'],
      ], ['Baustein', 'Hinweis']) },
      { id: 'geraete-server', h: 'Gleichzeitige Streams und Geräteanzahl', html: `
<p>Jeder Sender, den der Server gerade abruft, zählt als ein Gerät Ihres IPTV-Pakets – unabhängig davon, wie viele Personen im Haushalt zuschauen. Laufen eine Aufnahme und eine Live-Wiedergabe gleichzeitig, sind das zwei Streams. Wählen Sie die Geräteanzahl deshalb passend zu Ihrer Nutzung; bei ${site.name} sind ein bis fünf gleichzeitige Geräte möglich (siehe ${L('/#preise', 'Preise')}).</p>
<p>Ohne Medienserver geht es einfacher: ${L('/kodi-iptv/', 'Kodi')} bringt Live-TV mit Programmführer direkt auf den Fernseher, und ${L('/tivimate/', 'TiviMate')} bietet auf Android TV Aufnahmen und Catch-Up. Mehr zu Aufnahmen erklärt ${L('/iptv-vod/', 'IPTV-VOD und Catch-Up')}.</p>` },
    ],
    sources: [src.jellyfin, src.plex],
  },

  '/iptv-apps/': {
    sources: [src.m3u, src.epg],
  },

  // ── Geräte ────────────────────────────────────────────────────────────

  '/iptv-geraete/': {
    related: ['/was-ist-iptv/'],
    sources: [src.stb, src.fire, src.androidtv],
  },

  '/iptv-fire-tv-stick/': {
    related: ['/implayer/', '/ott-navigator/'],
    sources: [src.fire],
  },

  '/iptv-samsung-tv/': {
    related: ['/duplecast/'],
    sources: [src.tizen, src.mac],
  },

  '/iptv-chromecast/': {
    related: ['/gse-smart-iptv/'],
    sources: [src.chromecast, src.androidtv],
  },

  '/iptv-android/': {
    related: ['/implayer/', '/ott-navigator/', '/perfect-player/'],
    sources: [src.androidtv],
  },

  '/iptv-box/': {
    related: ['/iptv-enigma2/'],
    sources: [src.stb, src.androidtv],
  },

  '/iptv-downloader/': {
    sources: [src.fire],
  },

  '/iptv-lg-tv/': {
    sections: [
      { id: 'modelle-lg', h: 'Welche LG-Fernseher eignen sich für IPTV?', html: `
<p>Entscheidend ist die webOS-Version: Je neuer, desto größer ist die Auswahl im LG Content Store. Die Version finden Sie meist unter <strong>Einstellungen › Allgemein › Über dieses Fernsehgerät</strong> oder einem ähnlich benannten Punkt.</p>
${fixTable('lg-modelle', 'IPTV auf LG nach Gerätealter (Stand: ' + stand + ', ohne Gewähr)', [
  ['Aktuelle Modelle (webOS 6 und neuer)', 'Große Auswahl: ' + L('/ibo-player/', 'IBO Player') + ', ' + L('/smart-iptv/', 'Smart IPTV') + ', ' + L('/ss-iptv/', 'SS IPTV') + ', ' + L('/duplecast/', 'Duplecast') + ' und weitere.'],
  ['Ältere Smart-TVs (webOS 3 bis 5)', 'Meist noch SS IPTV und Smart IPTV verfügbar; neuere Apps fehlen teilweise.'],
  ['Sehr alte Geräte (NetCast)', 'Kaum IPTV-Apps. Ein ' + L('/iptv-stick/', 'Streaming-Stick') + ' am HDMI-Anschluss ist die bessere Lösung.'],
], ['Gerät', 'IPTV-Apps'])}` },
      { id: 'fehler-lg', h: 'Häufige Probleme auf LG-Fernsehern', html: fixTable('lg-fehler', 'Fehlerbilder auf LG webOS', [
        ['App startet nach dem Einschalten nicht', '„Quick Start+“ deaktivieren, damit der Fernseher beim Einschalten vollständig neu startet.'],
        ['App nicht im Store', 'Ländereinstellung des Fernsehers prüfen; manche Apps sind nur in bestimmten Regionen gelistet.'],
        ['Ton versetzt', 'In der App den Player wechseln oder unter Ton-Einstellungen die Ausgabe auf „TV-Lautsprecher“ testen.'],
        ['Bild stockt', 'LAN-Kabel statt WLAN nutzen und im Router prüfen, ob andere Geräte die Leitung auslasten.'],
      ]) + tryIt('Testen Sie Ihre Wunsch-App direkt auf Ihrem LG-Fernseher.') },
    ],
    sources: [src.webos, src.mac],
  },

  '/iptv-apple-tv/': {
    sections: [
      { id: 'modelle-apple', h: 'Welches Apple TV eignet sich für IPTV?', html: fixTable('apple-modelle', 'Apple TV für IPTV (Stand: ' + stand + ', ohne Gewähr)', [
        ['Apple TV 4K (alle Generationen)', 'Beste Wahl: aktuelles tvOS, HEVC für ' + L('/iptv-4k/', '4K-Streams') + ', große App-Auswahl. Das Modell mit Ethernet-Anschluss ist für IPTV besonders stabil.'],
        ['Apple TV HD', 'Funktioniert mit vielen Apps in Full HD; für 4K ungeeignet.'],
        ['Ältere Apple-TV-Modelle', 'Kein App Store für IPTV-Apps – für IPTV nicht geeignet.'],
        ['iPhone und iPad', 'Aktuelle iOS-/iPadOS-Versionen unterstützen alle gängigen Player; Ausgabe auf den Fernseher per AirPlay.'],
      ], ['Gerät', 'Eignung'])
      + `<p>Die passenden Apps im Detail: ${L('/iptvx/', 'IPTVX')} für eine moderne tvOS-Oberfläche, ${L('/gse-smart-iptv/', 'GSE Smart IPTV')} mit vielen Einstellungen und ${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')} als kostenlose Grundversion.</p>` },
      { id: 'tipps-apple', h: 'Tipps für flüssiges IPTV auf dem Apple TV', html: `
<ul>
  <li><strong>Bildwiederholrate anpassen:</strong> In den tvOS-Einstellungen unter Video und Audio „Dynamikbereich anpassen“ und „Bildwiederholrate anpassen“ aktivieren – Sport und Filme laufen dann ruckelfreier.</li>
  <li><strong>Netzwerk:</strong> Wenn möglich per Ethernet verbinden; im WLAN das 5-GHz-Band nutzen.</li>
  <li><strong>Hintergrund-Apps:</strong> Nach dem Wechsel zwischen vielen Apps hilft ein Neustart des Apple TV gegen Ruckler.</li>
</ul>
${tryIt('Prüfen Sie mit einem Testzugang, welche App Ihnen auf Apple TV, iPhone oder iPad am besten gefällt.')}` },
    ],
    sources: [src.appletv, src.hevc],
  },

  '/iptv-pc/': {
    sections: [
      { id: 'laptop-tv', h: 'IPTV vom Laptop auf den Fernseher bringen', html: `
<p>Der Computer eignet sich gut als Zweitbildschirm – oder als Zuspieler für den Fernseher:</p>
${fixTable('pc-tv', 'Wege vom Computer auf den Fernseher', [
  ['HDMI-Kabel', 'Am zuverlässigsten: Laptop per HDMI anschließen, Bild spiegeln oder erweitern und den Player im Vollbild starten.'],
  ['Chromecast / Google Cast', 'Aus dem Chrome-Browser lassen sich nur Browser-Tabs übertragen; für IPTV ist eine App direkt auf dem Fernseher stabiler – siehe ' + L('/iptv-chromecast/', 'Chromecast') + '.'],
  ['AirPlay (Mac)', 'Den Bildschirm des Mac auf ein Apple TV oder einen AirPlay-fähigen Fernseher spiegeln.'],
  ['Kodi als Mediacenter', 'Ein kleiner PC mit ' + L('/kodi-iptv/', 'Kodi') + ' am Fernseher ersetzt eine IPTV-Box – mit Programmführer und Fernbedienung.'],
], ['Weg', 'So funktioniert es'])}` },
      { id: 'fehler-pc', h: 'IPTV am PC: typische Probleme', html: `
<ul>
  <li><strong>Stream startet nicht:</strong> Antivirenprogramm oder Firewall blockiert den Player – VLC bzw. Kodi in der Firewall zulassen.</li>
  <li><strong>Bild ruckelt im WLAN:</strong> LAN-Kabel nutzen oder in den Energieoptionen von Windows den Höchstleistungsmodus wählen.</li>
  <li><strong>Kein Programmführer:</strong> VLC zeigt keinen EPG. Nutzen Sie ${L('/kodi-iptv/', 'Kodi')}, ${L('/perfect-player/', 'Perfect Player')} oder die Desktop-Version von ${L('/iptv-smarters-pro/', 'IPTV Smarters')}.</li>
</ul>
${tryIt('Am Computer ist ein Testzugang in wenigen Minuten eingerichtet.')}` },
    ],
    sources: [src.vlc, src.kodi],
  },

  '/iptv-stick/': {
    sections: [
      { id: 'einrichten-stick', h: 'IPTV-Stick einrichten: so geht es in fünf Schritten', html: ol([
        'Stecken Sie den Stick in einen HDMI-Anschluss des Fernsehers und versorgen Sie ihn über das mitgelieferte Netzteil mit Strom – nicht über den USB-Anschluss des Fernsehers.',
        'Verbinden Sie den Stick mit dem WLAN (am besten 5 GHz) oder per LAN-Adapter mit dem Router.',
        `Installieren Sie eine IPTV-App: auf dem ${L('/iptv-fire-tv-stick/', 'Fire TV Stick')} aus dem Amazon Appstore oder per ${L('/iptv-downloader/', 'Downloader-App')}, auf ${L('/iptv-android/', 'Google TV')} aus dem Play Store.`,
        `Melden Sie sich mit Ihren Zugangsdaten an – per ${L('/xtream-codes/', 'Xtream Codes')} oder M3U-Link.`,
        'Legen Sie Favoriten an und lassen Sie den Programmführer einmal vollständig laden.',
      ]) + `<p>Welche App zu Ihrem Stick passt, zeigt der ${L('/iptv-apps/', 'IPTV-App-Vergleich')}.</p>` },
      { id: 'fehler-stick', h: 'Wenn der Stick ruckelt oder hängt', html: fixTable('stick-fehler', 'Typische Probleme mit Streaming-Sticks', [
        ['Ruckeln trotz schneller Leitung', 'Stick per HDMI-Verlängerung aus dem Funkschatten hinter dem Fernseher holen oder einen LAN-Adapter nutzen.'],
        ['Stick wird heiß und langsam', 'Ungenutzte Apps deinstallieren, den Cache der IPTV-App leeren und den Stick gelegentlich neu starten.'],
        ['Speicher voll', 'Große Programmführer belegen Platz. Nur benötigte Kategorien laden und alte Apps entfernen.'],
        ['Bild flackert', 'Originalnetzteil verwenden – der USB-Anschluss des Fernsehers liefert oft zu wenig Strom.'],
      ]) + tryIt('Mit einem kostenlosen Test sehen Sie, ob Ihr Stick und Ihre Leitung für IPTV ausreichen.') },
    ],
    sources: [src.fire, src.chromecast, src.urheber],
  },

  '/mag-box/': {
    sections: [
      { id: 'portal-tipps', h: 'MAG-Box im Alltag: Bedienung und Pflege', html: `
<ul>
  <li><strong>Software aktuell halten:</strong> Unter Einstellungen › Software-Update prüfen, ob eine neue Firmware des Herstellers bereitsteht. Updates verbessern Stabilität und Kompatibilität.</li>
  <li><strong>Zeitzone einstellen:</strong> Unter Systemeinstellungen die richtige Zeitzone (Berlin) wählen – sonst ist der Programmführer verschoben.</li>
  <li><strong>Favoriten:</strong> Im Portal die wichtigsten Sender als Favoriten markieren; die Liste bleibt auch nach einem Neustart erhalten.</li>
  <li><strong>Mehrere Portale:</strong> Unter „Portal 2“ lässt sich ein zweiter Zugang hinterlegen, etwa für ein weiteres Paket.</li>
</ul>
<p>Die Unterschiede zwischen Portal-Zugang, ${L('/xtream-codes/', 'Xtream Codes')} und ${L('/m3u-playlist/', 'M3U')} erklärt unser ${L('/iptv-apps/', 'App-Vergleich')}. Wer eine App-basierte Lösung bevorzugt, findet sie unter ${L('/iptv-box/', 'IPTV-Box')} und ${L('/formuler/', 'Formuler')}.</p>
${tryIt('Für einen Test auf der MAG-Box senden Sie uns die MAC-Adresse Ihrer Box mit – wir stimmen den Portal-Zugang mit Ihnen ab.')}` },
    ],
    sources: [src.stb, src.mac, src.hevc],
  },

  '/formuler/': {
    sections: [
      { id: 'mytvonline-tipps', h: 'MyTVOnline optimal einstellen', html: fixTable('mytv-einst', 'Empfohlene Einstellungen in MyTVOnline', [
        ['Programmführer', 'EPG beim Start laden lassen und die Zeitzone in den Box-Einstellungen prüfen.'],
        ['Senderliste', 'Gruppen ausblenden, die Sie nicht brauchen – das beschleunigt Navigation und Umschalten.'],
        ['Catch-Up', 'Sender mit Catch-Up zeigen ein Symbol im Programmführer; vergangene Sendungen starten direkt aus dem EPG.'],
        ['Aufnahmen', 'Mit angeschlossenem USB-Speicher bietet MyTVOnline je nach Version Aufnahmen an – nur für den privaten Gebrauch.'],
        ['Firmware', 'Updates über das Einstellungsmenü der Box einspielen, damit MyTVOnline aktuell bleibt.'],
      ], ['Bereich', 'Empfehlung'])
      + `<p>Mehr zu Programmführer und Catch-Up lesen Sie unter ${L('/iptv-senderliste/', 'Senderliste und EPG')} und ${L('/iptv-vod/', 'VOD und Catch-Up')}.</p>` },
      { id: 'fehler-formuler', h: 'Formuler: häufige Probleme', html: `
<ul>
  <li><strong>Portal lädt nicht:</strong> MAC-Adresse noch nicht freigeschaltet oder Portal-URL unvollständig – genau wie bei der ${L('/mag-box/', 'MAG-Box')}.</li>
  <li><strong>Bild stockt:</strong> Box per LAN-Kabel verbinden und prüfen, ob gleichzeitig große Downloads laufen.</li>
  <li><strong>App fehlt:</strong> Nicht jede Android-App ist auf jeder Formuler verfügbar. Alternativ ${L('/tivimate/', 'TiviMate')} oder ${L('/xciptv/', 'XCIPTV')} prüfen.</li>
</ul>
${tryIt('Für einen Test auf der Formuler-Box nennen Sie uns bei der Anfrage Ihr Modell.')}` },
    ],
    sources: [src.stb, src.androidtv],
  },

  '/iptv-enigma2/': {
    sections: [
      { id: 'tipps-enigma2', h: 'Tipps für IPTV auf Enigma2', html: fixTable('e2-tipps', 'Worauf Sie bei IPTV auf Enigma2 achten sollten', [
        ['Image aktuell halten', 'Aktuelle Images bringen Fehlerbehebungen und neue Plugin-Versionen mit. Vor einem Update die Einstellungen sichern.'],
        ['Player-Dienst', 'Je nach Image und Plugin stehen verschiedene Abspiel-Dienste zur Wahl. Startet ein Sender nicht, einen anderen Dienst ausprobieren.'],
        ['Programmführer', 'IPTV-Plugins laden EPG-Daten aus der XMLTV-Adresse. Die Zuordnung zu den Sendern dauert beim ersten Mal etwas.'],
        ['Netzwerk', 'Receiver per LAN-Kabel anschließen; viele Geräte haben kein oder nur langsames WLAN.'],
        ['Speicher', 'Bouquets mit sehr vielen Sendern belasten ältere Receiver. Nur benötigte Kategorien importieren.'],
      ], ['Thema', 'Empfehlung'])
      + `<p>Für den Einstieg ohne Receiver-Kenntnisse ist ein ${L('/iptv-stick/', 'Streaming-Stick')} oder eine ${L('/mag-box/', 'MAG-Box')} einfacher. Wer zusätzlich zum Satellitenempfang IPTV nutzen möchte, ist mit Enigma2 aber gut bedient – mehr zum Hintergrund unter ${L('/iptv-deutschland/', 'IPTV in Deutschland')}.</p>
${tryIt('Prüfen Sie mit einem Testzugang, ob Ihr Receiver und Ihr Plugin mit der Playlist zurechtkommen.')}` },
    ],
    sources: [src.enigma2, src.m3u],
  },

  '/iptv-smart-tv/': {
    sources: [src.tizen, src.webos, src.androidtv],
  },
};
