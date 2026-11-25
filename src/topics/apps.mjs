// App cluster: hub plus one page per IPTV player. Apps are third-party
// products; describe setup factually, hedge availability and pricing, and
// never claim they contain channels.
import { site } from '../site.mjs';
import { L, ol, stand } from './util.mjs';

const thirdParty = `Die genannten Apps sind Angebote Dritter und enthalten selbst keine Sender. Verfügbarkeit, Menüs und Preise der App-Anbieter können sich ändern (Stand: ${stand}).`;

export default [
  {
    path: '/iptv-apps/',
    hub: null,
    children: 'apps',
    name: 'IPTV-Apps',
    teaser: 'Welcher IPTV-Player passt zu welchem Gerät? Alle Apps im Überblick.',
    icon: 'play',
    title: `IPTV-Apps: Der beste IPTV-Player für Ihr Gerät | ${site.name}`,
    description: 'Die besten IPTV-Apps im Überblick: Smarters Pro, TiviMate, Smart IPTV, SS IPTV, Flix IPTV, XCIPTV, Kodi und VLC – welcher IPTV-Player zu welchem Gerät passt.',
    kicker: 'IPTV-Apps',
    h1: 'IPTV-Apps: Welcher IPTV-Player passt zu Ihrem Gerät?',
    lead: 'Eine IPTV-App ist ein Player: Sie meldet sich mit Ihren Zugangsdaten an und zeigt Senderliste und Programmführer. Die beste IPTV-App hängt vor allem vom Gerät ab – auf dem Fire TV Stick sind andere Apps verfügbar als auf einem Samsung-Fernseher oder dem iPhone.',
    sections: [
      { id: 'vergleich', h: 'Die wichtigsten IPTV-Apps im Vergleich', html: `
<div class="table-wrap" role="region" aria-labelledby="apps-tab" tabindex="0"><table class="table">
<caption id="apps-tab">IPTV-Player im Vergleich (Stand: ${stand}, ohne Gewähr)</caption>
<thead><tr><th scope="col">App</th><th scope="col">Geräte</th><th scope="col">Anmeldung</th><th scope="col">Kosten der App</th></tr></thead>
<tbody>
<tr><th scope="row">${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')}</th><td>Android, iPhone, iPad, Apple TV, Windows, Mac</td><td>Xtream Codes, M3U</td><td>Grundversion kostenlos</td></tr>
<tr><th scope="row">${L('/tivimate/', 'TiviMate')}</th><td>Android TV, Google TV, Fire TV</td><td>Xtream Codes, M3U</td><td>Basis kostenlos, Premium kostenpflichtig</td></tr>
<tr><th scope="row">${L('/smart-iptv/', 'Smart IPTV')}</th><td>Samsung, LG, Android TV, Fire TV</td><td>M3U per MAC-Adresse</td><td>Einmalige Aktivierung nach Testphase</td></tr>
<tr><th scope="row">${L('/ss-iptv/', 'SS IPTV')}</th><td>Samsung, LG, Android</td><td>M3U (Link oder Code)</td><td>Kostenlos</td></tr>
<tr><th scope="row">${L('/flix-iptv/', 'Flix IPTV')}</th><td>Samsung, LG, Android, Fire TV, Apple</td><td>M3U/Xtream per MAC-Adresse</td><td>Aktivierung nach Testphase</td></tr>
<tr><th scope="row">${L('/set-iptv/', 'Set IPTV / Smart One')}</th><td>Samsung, LG, Android</td><td>M3U per MAC-Adresse</td><td>Aktivierung nach Testphase</td></tr>
<tr><th scope="row">${L('/xciptv/', 'XCIPTV')}</th><td>Android, Fire TV</td><td>Xtream Codes, M3U</td><td>Kostenlos</td></tr>
<tr><th scope="row">${L('/stbemu/', 'STBEmu')}</th><td>Android, Android TV</td><td>Portal-URL + MAC</td><td>Basis kostenlos, Pro kostenpflichtig</td></tr>
<tr><th scope="row">${L('/kodi-iptv/', 'Kodi')}</th><td>Android, Fire TV, Windows, Mac, Linux</td><td>M3U + EPG-Adresse</td><td>Kostenlos (Open Source)</td></tr>
<tr><th scope="row">${L('/vlc-iptv/', 'VLC')}</th><td>Windows, Mac, Linux, Android, iOS</td><td>M3U</td><td>Kostenlos (Open Source)</td></tr>
</tbody></table></div>
<p class="muted">${thirdParty}</p>` },
      { id: 'empfehlung', h: 'Bester IPTV-Player für jedes Gerät', html: `
<ul>
  <li><strong>Fire TV Stick, Android TV, Google TV:</strong> ${L('/tivimate/', 'TiviMate')} für die komfortabelste TV-Oberfläche; kostenlos und auf Deutsch nutzbar sind ${L('/xciptv/', 'XCIPTV')} oder ${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')}. Siehe ${L('/iptv-fire-tv-stick/', 'IPTV auf dem Fire TV Stick')} und ${L('/iptv-player-android/', 'die besten IPTV-Player für Android')}.</li>
  <li><strong>Samsung- und LG-Fernseher:</strong> ${L('/smart-iptv/', 'Smart IPTV')}, ${L('/ss-iptv/', 'SS IPTV')}, ${L('/flix-iptv/', 'Flix IPTV')} oder ${L('/set-iptv/', 'Set IPTV')}. Siehe ${L('/iptv-samsung-tv/', 'Samsung TV')} und ${L('/iptv-lg-tv/', 'LG TV')}.</li>
  <li><strong>iPhone, iPad, Apple TV:</strong> ${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')} oder andere Xtream-fähige Apps aus dem App Store. Siehe ${L('/iptv-apple-tv/', 'IPTV auf Apple-Geräten')}.</li>
  <li><strong>Windows und Mac:</strong> ${L('/vlc-iptv/', 'VLC')}, ${L('/kodi-iptv/', 'Kodi')} oder ${L('/iptv-smarters-pro-pc/', 'Smarters für Windows und Mac')}. Siehe ${L('/iptv-pc/', 'IPTV am PC')} und – falls Sie ohne Installation schauen möchten – ${L('/iptv-im-browser/', 'IPTV im Browser')}.</li>
  <li><strong>Portal-Zugang wie bei der MAG-Box:</strong> ${L('/stbemu/', 'STBEmu')} auf Android.</li>
</ul>
<p>Kriterien, Vergleichstabelle und eine Entscheidungshilfe in drei Fragen: ${L('/beste-iptv-player/', 'Bester IPTV-Player 2026')}.</p>` },
      { id: 'weitere', h: 'Weitere IPTV-Apps', html: `
<p>Neben den Apps oben gibt es viele weitere Player, die nach demselben Prinzip arbeiten – etwa ${L('/ibo-player/', 'IBO Player')} für Fernseher mit Aktivierung per MAC-Adresse, ${L('/implayer/', 'iMPlayer')} und ${L('/ott-navigator/', 'OTT Navigator')} für Android-Geräte, ${L('/gse-smart-iptv/', 'GSE Smart IPTV')} und ${L('/iptvx/', 'IPTVX')} vor allem für Apple-Geräte sowie <strong>MyIPTV Player</strong> für Windows. Entscheidend ist, dass die App <strong>Xtream Codes</strong> oder <strong>M3U</strong> unterstützt – dann funktioniert sie auch mit ${site.name}. Die Anmeldearten erklären wir unter ${L('/xtream-codes/', 'Xtream Codes')} und ${L('/m3u-playlist/', 'M3U-Playlist')}.</p>` },
      { id: 'ibo-player', h: 'IBO Player Pro im Jahrespaket', html: `
<p>Der ${L('/ibo-player/', 'IBO Player')} ist eine IPTV-App für Smart-TVs, Android und weitere Geräte, die per MAC-Adresse eingerichtet wird. Beim Jahrespaket von ${site.name} ist das IBO Player Abo (IBO Player Pro) kostenlos inklusive – Sie sparen sich damit die Aktivierungsgebühr des App-Anbieters. Alle Pakete finden Sie bei den ${L('/#preise', 'Preisen')}.</p>` },
      { id: 'sicherheit', h: 'Apps sicher installieren', html: `
<p>Installieren Sie IPTV-Apps nach Möglichkeit aus dem offiziellen App-Store Ihres Geräts oder von der Website des Entwicklers. Vorsicht bei „Premium-Versionen“ von Download-Seiten Dritter: Sie können Schadsoftware enthalten. Beachten Sie außerdem: Keine seriöse App liefert von sich aus Sender mit – Inhalte kommen immer von Ihrem IPTV-Anbieter.</p>` },
    ],
    faq: [
      ['Welche ist die beste IPTV-App?', 'Das hängt vom Gerät ab. Auf Fire TV und Android TV ist TiviMate sehr beliebt, auf Samsung und LG Smart IPTV oder SS IPTV, auf Apple-Geräten IPTV Smarters Pro. Wichtig ist, dass die App Xtream Codes oder M3U unterstützt.'],
      ['Gibt es einen kostenlosen IPTV-Player auf Deutsch?', 'Ja. VLC, Kodi, SS IPTV und XCIPTV sind kostenlos, IPTV Smarters Pro in der Grundversion ebenfalls. Viele davon bieten eine deutsche Oberfläche.'],
      ['Enthält eine IPTV-App schon Sender?', 'Nein. Eine IPTV-App ist nur der Player. Die Sender kommen von Ihrem IPTV-Anbieter, mit dessen Zugangsdaten Sie sich in der App anmelden.'],
      ['Kann ich mehrere IPTV-Apps parallel nutzen?', 'Ja, Sie können Ihre Zugangsdaten in mehreren Apps eintragen. Wie viele Geräte gleichzeitig schauen dürfen, steht bei Ihrem Paket.'],
      ['Welche App empfiehlt IPTV Genuss?', 'Das richtet sich nach Ihrem Gerät. Nennen Sie uns Ihr Gerät, dann empfehlen wir Ihnen eine passende App und schicken die Anleitung mit.'],
    ],
    related: ['/iptv-geraete/', '/ibo-player/', '/xtream-codes/', '/m3u-playlist/', '/iptv-testen/', '/#kontakt'],
    keywords: ['iptvapp', 'app iptv', 'ip tv app', 'iptv app', 'beste iptv app', 'bester iptv player', 'best iptv player', 'best player iptv', 'beste iptv player android', 'iptv player android', 'application iptv android', 'bester iptv player für fire tv stick kostenlos deutsch', 'smart player tv', 'ip tv smart player', 'iptv streamplayer', 'iptvpro', 'pro iptv', 'implayer', 'iptv ibo', 'gseiptv', 'ott navigator premium', 'iptvx', 'iptvx android', 'iptvx apple tv', 'perfect iptv', 'duplecast', 'duplecast iptv', 'iptv downloader', 'iptv web', 'iptv browser', 'iptv web browser', 'iptv programa', 'iptv dvr', 'iptv vod', 'iptv series'],
  },

  {
    path: '/iptv-smarters-pro/',
    hub: 'apps',
    name: 'IPTV Smarters Pro',
    teaser: 'Download, Login per Xtream Codes und Lösungen für typische Fehler.',
    icon: 'play',
    title: `IPTV Smarters Pro: Download & Einrichtung | ${site.name}`,
    description: 'IPTV Smarters Pro einrichten: Download für Android, iPhone, Apple TV, Windows und Mac, Login per Xtream Codes oder M3U, Einstellungen und Hilfe bei Fehlern.',
    kicker: 'IPTV-Apps',
    h1: 'IPTV Smarters Pro – Download, Einrichtung und Hilfe',
    lead: 'IPTV Smarters Pro ist einer der bekanntesten IPTV-Player. Die App läuft auf Android, iPhone, iPad, Apple TV, Windows und Mac und unterstützt die Anmeldung per Xtream Codes und M3U. Sender enthält sie nicht – die kommen von Ihrem IPTV-Anbieter.',
    facts: [['Entwickler', 'WHMCS Smarters'], ['Geräte', 'Android, Android TV, iPhone, iPad, Apple TV, Windows, Mac'], ['Anmeldung', 'Xtream Codes API, M3U-Link'], ['Kosten', 'Grundversion kostenlos, je nach Plattform Zusatzfunktionen kostenpflichtig']],
    sections: [
      { id: 'download', h: 'IPTV Smarters Pro herunterladen', html: `
<ul>
  <li><strong>Android-Smartphone und Android TV:</strong> im Google Play Store nach „IPTV Smarters Pro“ suchen.</li>
  <li><strong>iPhone, iPad, Apple TV:</strong> im App Store; dort heißt die App teils „Smarters Player Lite“.</li>
  <li><strong>Windows und Mac:</strong> Download über die offizielle Website des Entwicklers.</li>
  <li><strong>Fire TV Stick:</strong> nicht immer im Amazon Appstore verfügbar. Wie Sie dann vorgehen, zeigt ${L('/iptv-fire-tv-stick/', 'IPTV auf dem Fire TV Stick')}.</li>
  <li><strong>Samsung und LG:</strong> Die Verfügbarkeit in den TV-App-Stores wechselt. Alternativen: ${L('/iptv-samsung-tv/', 'Samsung TV')}, ${L('/iptv-lg-tv/', 'LG TV')}.</li>
</ul>` },
      { id: 'einrichten', h: 'IPTV Smarters Pro einrichten (Xtream Codes)', html: ol([
        'Öffnen Sie die App und akzeptieren Sie die Nutzungsbedingungen.',
        'Wählen Sie <strong>„Login with Xtream Codes API“</strong>.',
        `Tragen Sie einen beliebigen Namen ein (z. B. „${site.name}“), dazu <strong>Benutzername</strong>, <strong>Passwort</strong> und <strong>Server-URL</strong> aus unserer E-Mail.`,
        'Tippen Sie auf „Add User“. Die App lädt Live-TV, Kategorien und den Programmführer – beim ersten Mal kann das einige Minuten dauern.',
        'Öffnen Sie „Live TV“ und wählen Sie eine Kategorie.',
      ]) + `<p>Alternativ wählen Sie „Load Your Playlist or File/URL“ und fügen den M3U-Link ein. Unterschiede erklärt ${L('/xtream-codes/', 'Xtream Codes vs. M3U')}.</p>` },
      { id: 'einstellungen', h: 'Empfohlene Einstellungen', html: `
<ul>
  <li><strong>Player:</strong> Unter „Settings › Player Selection“ den internen Player nutzen; bei Rucklern testweise auf einen externen Player wie VLC wechseln.</li>
  <li><strong>Programmführer:</strong> Unter „Settings › EPG“ das automatische Aktualisieren aktivieren.</li>
  <li><strong>Zeitformat:</strong> 24-Stunden-Anzeige wählen, damit der Programmführer stimmt.</li>
  <li><strong>Kindersicherung:</strong> Kategorien lassen sich unter „Parental Control“ mit PIN sperren.</li>
</ul>` },
      { id: 'fehler', h: 'IPTV Smarters Pro funktioniert nicht? Häufige Fehler', html: `
<ul>
  <li><strong>„Invalid credentials“:</strong> Server-URL mit <code>http://</code> und Port eintragen, Groß- und Kleinschreibung prüfen.</li>
  <li><strong>Kein Programmführer:</strong> Unter „Settings › EPG“ manuell aktualisieren, Zeitzone des Geräts prüfen.</li>
  <li><strong>Ruckeln:</strong> Player wechseln, Cache leeren, LAN-Kabel nutzen – mehr unter ${L('/iptv-probleme/', 'IPTV-Probleme beheben')}.</li>
</ul>` },
      { id: 'alternativen', h: 'Alternativen zu IPTV Smarters Pro', html: `
<p>Auf Fire TV und Android TV bietet ${L('/tivimate/', 'TiviMate')} eine klassischere TV-Oberfläche, ${L('/xciptv/', 'XCIPTV')} ist eine kostenlose Alternative. Alle Optionen im ${L('/iptv-apps/', 'IPTV-App-Vergleich')}.</p>
<p><strong>Schritt-für-Schritt-Anleitungen nach Gerät:</strong> ${L('/iptv-smarters-pro-fire-tv-stick/', 'IPTV Smarters Pro auf dem Fire TV Stick')}, ${L('/iptv-smarters-pro-samsung-tv/', 'auf dem Samsung TV')}, ${L('/iptv-smarters-pro-lg-tv/', 'auf dem LG TV')}, ${L('/iptv-smarters-pro-pc/', 'für Windows und Mac')}, ${L('/iptv-smarters-pro-iphone-apple-tv/', 'auf iPhone und Apple TV')} sowie ${L('/iptv-smarters-pro-android/', 'auf Android und Android TV')}.</p>
<p class="muted">${thirdParty}</p>` },
    ],
    faq: [
      ['Ist IPTV Smarters Pro kostenlos?', 'Die Grundversion ist kostenlos. Je nach Plattform bietet der Entwickler kostenpflichtige Zusatzfunktionen an. Sender sind in keiner Version enthalten.'],
      ['Gibt es IPTV Smarters Pro für Samsung-Fernseher?', 'Die Verfügbarkeit in den App-Stores von Samsung und LG wechselt. Alternativen sind Smart IPTV, SS IPTV oder ein Fire TV Stick mit Smarters.'],
      ['Was ist der Unterschied zwischen IPTV Smarters Pro und Smarters Lite?', '„Smarters Player Lite“ ist die schlankere Variante, unter der die App teils im Apple App Store angeboten wird. Die Anmeldung funktioniert gleich.'],
      ['Kann ich IPTV Smarters Pro unter Windows nutzen?', 'Ja. Der Entwickler bietet Versionen für Windows und Mac auf seiner Website an.'],
      ['Wo bekomme ich ein Abo für IPTV Smarters Pro?', 'Die App selbst ist nur ein Player. Die Zugangsdaten bekommen Sie bei einem IPTV-Anbieter – zum Beispiel bei uns unter <a href="/iptv-kaufen/">IPTV kaufen</a>.'],
    ],
    related: ['/iptv-apps/', '/tivimate/', '/xciptv/', '/iptv-fire-tv-stick/', '/iptv-downloader/', '/iptv-apple-tv/', '/iptv-pc/'],
    keywords: ['iptv smarters pro', 'ip tv smarters pro', 'iptv smarters', 'smarters iptv', 'smarters iptv pro', 'smarters pro', 'smarterspro', 'smarters pro iptv', 'ip tv smarters', 'ip tv smarter pro', 'ip smarter pro', 'iptv smarter pro', 'ip tv smart pro', 'iptv smart pro', 'smarters tv', 'smarters tv pro', 'tv smarters', 'tv smarters pro', 'iptv smarters lite', 'smarters iptv lite', 'smarters lite', 'iptv smarters pro android', 'iptv smarters pro fire tv stick', 'iptv smarters pro premium', 'iptv smarters pro samsung tv', 'iptv smarters downloader', 'iptv smarters pro windows download', 'iptv smarters android', 'iptv smarters apple tv', 'iptv smarters chromecast', 'iptv smarters com', 'iptv smarters fire stick', 'iptv smarters firestick', 'iptv smarters free', 'iptv smarters iphone', 'iptv smarters lg', 'iptv smarters lg tv', 'iptv smarters mac', 'iptv smarters on firestick', 'iptv smarters online', 'iptv smarters premium', 'iptv smarters pro android tv', 'iptv smarters pro apple tv', 'iptv smarters pro fire stick', 'iptv smarters pro firestick', 'iptv smarters pro google play', 'iptv smarters pro iphone', 'iptv smarters pro lg', 'iptv smarters pro live', 'iptv smarters pro mac', 'iptv smarters pro macbook', 'iptv smarters pro pc', 'iptv smarters pro price', 'iptv smarters pro roku', 'iptv smarters pro subscription', 'iptv smarters reddit', 'iptv smarters samsung', 'iptv smarters samsung tv', 'iptv smarters subscription', 'iptv smarters web', 'smarters pro firestick', 'smarters pro pc'],
  },

  {
    path: '/tivimate/',
    hub: 'apps',
    name: 'TiviMate',
    teaser: 'TiviMate auf Fire TV und Android TV einrichten, Premium und Companion erklärt.',
    icon: 'play',
    title: `TiviMate: Einrichtung, Premium & Fire TV Stick | ${site.name}`,
    description: 'TiviMate einrichten: Installation auf Fire TV Stick und Android TV, Login per Xtream Codes oder M3U, TiviMate Premium und unterstützte Geräte erklärt.',
    kicker: 'IPTV-Apps',
    h1: 'TiviMate – Einrichtung, Premium und Fire TV Stick',
    lead: 'TiviMate ist ein IPTV-Player für Android-basierte Fernsehgeräte: Fire TV Stick, Android TV, Google TV und Boxen wie die Nvidia Shield. Bekannt ist TiviMate für seinen übersichtlichen Programmführer im Stil klassischer Receiver. Die Basisversion ist kostenlos, viele Komfortfunktionen gibt es mit TiviMate Premium.',
    facts: [['Geräte', 'Fire TV, Android TV, Google TV, Android-TV-Boxen'], ['Nicht verfügbar für', 'Samsung/LG-Fernseher (Tizen/webOS), iPhone, iPad, Apple TV, Windows, Mac'], ['Anmeldung', 'Xtream Codes, M3U-Link'], ['Kosten', 'Basis kostenlos, Premium als Abo oder Einmalkauf']],
    sections: [
      { id: 'installieren', h: 'TiviMate installieren', html: `
<p>Auf <strong>Android TV und Google TV</strong> finden Sie „TiviMate IPTV Player“ im Google Play Store. Auf dem <strong>Fire TV Stick</strong> ist TiviMate nicht immer im Amazon Appstore gelistet; wie Sie TiviMate dann installieren, zeigt ${L('/tivimate-fire-tv-stick/', 'TiviMate auf dem Fire TV Stick')}. Wichtig: Fire-TV-Geräte mit dem neuen Betriebssystem Vega OS unterstützen keine Android-Apps – dort läuft TiviMate nicht.</p>` },
      { id: 'einrichten', h: 'TiviMate einrichten mit Xtream Codes', html: ol([
        'Starten Sie TiviMate und wählen Sie <strong>„Playlist hinzufügen“</strong>.',
        'Wählen Sie <strong>„Xtream Codes“</strong>.',
        'Geben Sie <strong>Server-Adresse</strong>, <strong>Benutzername</strong> und <strong>Passwort</strong> aus unserer E-Mail ein und bestätigen Sie mit „Weiter“.',
        `Vergeben Sie einen Namen für die Playlist (z. B. „${site.name}“) und tippen Sie auf „Fertig“.`,
        'TiviMate lädt Sender und Programmführer. Danach erscheint die Senderliste mit EPG-Raster.',
      ]) + `<p>Mit M3U wählen Sie in Schritt 2 „M3U-Playlist“ und fügen den Link ein; den Programmführer tragen Sie dann unter Einstellungen › EPG ein. Mehr unter ${L('/m3u-playlist/', 'M3U-Playlist')}.</p>` },
      { id: 'premium', h: 'TiviMate Premium: Was es kostet und bietet', html: `
<p>Premium schaltet unter anderem mehrere Playlists, Favoriten-Verwaltung, Aufnahmen, Catch-up (falls vom Anbieter unterstützt), eigene Senderreihenfolge und automatische Programmführer-Updates frei. Gekauft wird Premium über die App <strong>„TiviMate Companion“</strong> auf einem Android-Smartphone; danach melden Sie sich mit demselben Konto in TiviMate auf dem Fernseher an. Ein Premium-Konto lässt sich auf mehreren Geräten nutzen.</p>
<p>Die aktuellen Preise für Abo und Einmalkauf nennt der Entwickler in der Companion-App. Kaufen Sie Premium nur dort – „TiviMate Premium Accounts“ von Dritten sind nicht offiziell und werden oft gesperrt. Alles zu Funktionen, Kauf und Konto: ${L('/tivimate-premium/', 'TiviMate Premium')}.</p>` },
      { id: 'geraete', h: 'TiviMate auf Apple TV, Samsung oder PC?', html: `
<p>TiviMate gibt es nur für Android-basierte TV-Geräte. Auf ${L('/iptv-apple-tv/', 'Apple TV und iPhone')} nutzen Sie stattdessen zum Beispiel IPTV Smarters Pro, auf ${L('/iptv-samsung-tv/', 'Samsung-Fernsehern')} Smart IPTV oder SS IPTV, am ${L('/iptv-pc/', 'PC')} VLC oder Kodi. Die TiviMate Companion-App ist für Android-Smartphones gedacht. Die beste Alternative für jedes Gerät zeigt ${L('/tivimate-alternativen/', 'TiviMate-Alternativen')}.</p>
<p class="muted">${thirdParty}</p>` },
    ],
    faq: [
      ['Ist TiviMate kostenlos?', 'Die Basisversion ist kostenlos. Funktionen wie mehrere Playlists, Aufnahmen und Favoriten gibt es mit TiviMate Premium, das über die Companion-App gekauft wird.'],
      ['Funktioniert TiviMate auf dem Fire TV Stick?', 'Ja, auf Fire-TV-Geräten mit Fire OS. Geräte mit dem neuen Vega OS unterstützen keine Android-Apps und damit auch kein TiviMate.'],
      ['Gibt es TiviMate für Samsung-Fernseher oder Apple TV?', 'Nein. TiviMate läuft nur auf Android-basierten TV-Geräten. Alternativen finden Sie in unserem IPTV-App-Vergleich.'],
      ['Wie viele Geräte kann ich mit TiviMate Premium nutzen?', 'Ein Premium-Konto lässt sich auf mehreren Geräten nutzen; die aktuelle Höchstzahl nennt der Entwickler in der Companion-App. Wie viele Geräte gleichzeitig IPTV schauen dürfen, regelt Ihr IPTV-Paket.'],
      ['Kann ich mit TiviMate aufnehmen?', 'Ja, mit TiviMate Premium – auf den internen Speicher oder einen angeschlossenen USB-Datenträger.'],
    ],
    related: ['/iptv-apps/', '/iptv-fire-tv-stick/', '/iptv-android/', '/iptv-chromecast/', '/iptv-smarters-pro/', '/iptv-vod/'],
    keywords: ['tivimate', 'tivi mate', 'tivimate premium', 'tivi mate premium', 'tivimate account', 'tivimate apple tv', 'tivimate com', 'tivimate fire tv', 'tivimate fire tv stick', 'tivimate iptv', 'tivimate kosten', 'tivimate pro', 'tivimate samsung tv', 'firestick tivimate', 'tivimate android tv', 'tivimate chromecast', 'tivimate companion iphone', 'tivimate firestick', 'tivimate for firestick', 'tivimate for pc', 'tivimate m3u', 'tivimate mac', 'tivimate on firestick', 'tivimate pc', 'tivimate premium account', 'tivimate premium cost', 'tivimate premium price', 'tivimate premium subscription', 'tivimate price', 'tivimate reddit', 'tivimate subscription', 'tivimate website'],
  },

  {
    path: '/smart-iptv/',
    hub: 'apps',
    name: 'Smart IPTV',
    teaser: 'Smart IPTV (SIPTV) auf Samsung und LG: MAC-Adresse, Playlist-Upload, Aktivierung.',
    icon: 'tv',
    title: `Smart IPTV (SIPTV) auf Samsung & LG einrichten | ${site.name}`,
    description: 'Smart IPTV einrichten: M3U-Playlist per MAC-Adresse hochladen, App nach der Testphase aktivieren und Smart IPTV auf Samsung, LG und Android nutzen.',
    kicker: 'IPTV-Apps',
    h1: 'Smart IPTV (SIPTV) einrichten – Samsung, LG und Android',
    lead: 'Smart IPTV, kurz SIPTV, ist eine der bekanntesten IPTV-Apps für Smart-TVs. Die Besonderheit: Sie tippen die Playlist nicht am Fernseher ein, sondern laden sie über die Website des App-Anbieters hoch – verknüpft mit der MAC-Adresse Ihres Fernsehers.',
    facts: [['Geräte', 'LG (webOS), Samsung (Tizen, je nach Modell), Android TV, Fire TV'], ['Anmeldung', 'M3U-Link, Upload per MAC-Adresse'], ['Kosten', 'Testphase, danach einmalige Aktivierung pro Gerät'], ['Website des Anbieters', 'siptv.app']],
    sections: [
      { id: 'einrichten', h: 'Smart IPTV einrichten in fünf Schritten', html: ol([
        'Installieren Sie „Smart IPTV“ aus dem App-Store Ihres Fernsehers und starten Sie die App.',
        'Notieren Sie die angezeigte <strong>MAC-Adresse</strong> (Format <code>00:aa:bb:cc:dd:ee</code>).',
        'Öffnen Sie am Handy oder Computer die Seite <strong>siptv.app/mylist</strong>.',
        'Tragen Sie die MAC-Adresse und Ihren <strong>M3U-Link</strong> aus unserer E-Mail ein und klicken Sie auf „Send“.',
        'Starten Sie die App am Fernseher neu. Die Senderliste wird geladen.',
      ]) },
      { id: 'aktivierung', h: 'Testphase und Aktivierung', html: `
<p>Smart IPTV lässt sich zunächst kostenlos testen. Danach verlangt der App-Anbieter eine einmalige Aktivierungsgebühr pro Fernseher, die direkt über seine Website bezahlt wird. Diese Gebühr geht an den App-Anbieter und ist nicht Teil Ihres IPTV-Pakets. Den aktuellen Betrag nennt der Anbieter auf siptv.app.</p>` },
      { id: 'samsung', h: 'Smart IPTV auf Samsung-Fernsehern', html: `
<p>Auf vielen neueren Samsung-Fernsehern ist Smart IPTV nicht mehr im Store zu finden. Dann bieten sich ${L('/ss-iptv/', 'SS IPTV')}, ${L('/flix-iptv/', 'Flix IPTV')} oder ${L('/set-iptv/', 'Set IPTV')} an – oder ein ${L('/iptv-fire-tv-stick/', 'Fire TV Stick')} am HDMI-Anschluss. Alle Wege zeigt ${L('/iptv-samsung-tv/', 'IPTV auf dem Samsung TV')}.</p>` },
      { id: 'fehler', h: 'Typische Fehler', html: `
<ul>
  <li><strong>„No playlist“ nach dem Upload:</strong> MAC-Adresse prüfen (Null und Buchstabe O verwechselt?) und App neu starten.</li>
  <li><strong>Sender laden nicht:</strong> Prüfen Sie, ob der M3U-Link vollständig kopiert wurde.</li>
  <li><strong>Kein Programmführer:</strong> Smart IPTV nutzt die EPG-Angaben aus der Playlist; laden Sie die Liste ggf. erneut hoch.</li>
</ul>
<p class="muted">${thirdParty}</p>` },
    ],
    faq: [
      ['Was kostet Smart IPTV?', 'Nach der Testphase verlangt der App-Anbieter eine einmalige Aktivierung pro Gerät. Den aktuellen Betrag nennt er auf siptv.app. Die Gebühr ist nicht Teil Ihres IPTV-Pakets.'],
      ['Wo finde ich die MAC-Adresse für Smart IPTV?', 'Die App zeigt sie beim Start auf dem Bildschirm an. Sie ist nicht identisch mit der MAC-Adresse in den Netzwerkeinstellungen des Fernsehers.'],
      ['Ist Smart IPTV dasselbe wie SS IPTV?', 'Nein. SS IPTV (Simple Smart IPTV) ist eine eigene, kostenlose App mit anderer Einrichtung.'],
      ['Funktioniert Smart IPTV auf dem Fire TV Stick?', 'Der Anbieter bietet eine Android-Version an. Auf Fire TV sind TiviMate oder IPTV Smarters Pro aber meist die bequemere Wahl.'],
    ],
    related: ['/iptv-samsung-tv/', '/iptv-lg-tv/', '/ss-iptv/', '/flix-iptv/', '/set-iptv/', '/m3u-playlist/'],
    keywords: ['smart iptv', 'smart ip tv', 'ip tv smart', 'siptv', 'sip tv', 'my sip tv', 'my siptv', 'siptv list', 'siptv my list', 'siptv samsung', 'smart iptv downloader', 'smart iptv herunterladen', 'smart iptv kaufen', 'smart iptv list', 'smart iptv m3u', 'smart iptv my list', 'smart iptv pro', 'smart iptv samsung', 'smart iptv android', 'smart iptv android tv', 'smart iptv com', 'smart iptv fire stick', 'smart iptv firestick', 'smart iptv hisense vidaa', 'smart iptv kosten', 'smart iptv lg', 'smart iptv mac', 'smart iptv philips', 'smart iptv premium', 'smart iptv samsung fernseher', 'smart iptv sony', 'smart iptv test', 'smart iptv tizen', 'ip smart iptv', 'iptv for smart', 'app smart iptv'],
  },

  {
    path: '/ss-iptv/',
    hub: 'apps',
    name: 'SS IPTV',
    teaser: 'Kostenlose TV-App: Playlist per Link oder Verbindungscode hinzufügen.',
    icon: 'tv',
    title: `SS IPTV: Playlist hinzufügen auf Samsung & LG | ${site.name}`,
    description: 'SS IPTV (Simple Smart IPTV) einrichten: Playlist per Link oder Verbindungscode hinzufügen, auf Samsung, LG und Android nutzen und Fehler beheben.',
    kicker: 'IPTV-Apps',
    h1: 'SS IPTV – Playlist hinzufügen und einrichten',
    lead: 'SS IPTV (Simple Smart IPTV) ist eine kostenlose IPTV-App für Smart-TVs von Samsung und LG sowie für Android. Ihre M3U-Playlist fügen Sie entweder als Link direkt in der App hinzu oder über einen Verbindungscode auf der Website des App-Anbieters.',
    facts: [['Geräte', 'LG (webOS), Samsung (Tizen), Android'], ['Anmeldung', 'M3U-Link (externe Playlist) oder Verbindungscode'], ['Kosten', 'Kostenlos'], ['Website des Anbieters', 'ss-iptv.com']],
    sections: [
      { id: 'link', h: 'Weg 1: Playlist als Link hinzufügen', html: ol([
        'Öffnen Sie SS IPTV und gehen Sie in die <strong>Einstellungen</strong> (Zahnrad).',
        'Wählen Sie <strong>„Inhalt“</strong> und dort <strong>„Externe Playlists“</strong>.',
        'Tippen Sie auf „Hinzufügen“, vergeben Sie einen Namen und tragen Sie Ihren <strong>M3U-Link</strong> ein.',
        'Speichern Sie. Die Playlist erscheint als Kachel auf dem Startbildschirm.',
      ]) },
      { id: 'code', h: 'Weg 2: Playlist per Verbindungscode', html: ol([
        'In SS IPTV: Einstellungen › Allgemein › <strong>„Code abrufen“</strong>. Der Code gilt nur kurze Zeit.',
        'Am Computer den Playlist-Editor auf ss-iptv.com öffnen und den Code eingeben.',
        'Playlist-Link oder Datei hochladen und speichern.',
        'App am Fernseher neu starten – die Playlist ist da.',
      ]) + '<p>Weg 2 ist praktisch, wenn Sie lange Links nicht mit der Fernbedienung tippen möchten.</p>' },
      { id: 'einordnung', h: 'SS IPTV oder Smart IPTV?', html: `
<p>SS IPTV ist kostenlos, ${L('/smart-iptv/', 'Smart IPTV')} kostet nach der Testphase eine einmalige Aktivierung. Dafür wirkt die Oberfläche von SS IPTV verspielter, und den Programmführer müssen Sie gegebenenfalls separat einrichten. Weitere TV-Apps im ${L('/iptv-apps/', 'IPTV-App-Vergleich')}.</p>
<p class="muted">${thirdParty}</p>` },
    ],
    faq: [
      ['Ist SS IPTV kostenlos?', 'Ja, die App ist kostenlos. Die Sender kommen von Ihrem IPTV-Anbieter.'],
      ['Wie füge ich in SS IPTV eine M3U-Liste hinzu?', 'Über Einstellungen › Inhalt › Externe Playlists › Hinzufügen, oder per Verbindungscode im Playlist-Editor auf der Website des App-Anbieters.'],
      ['Warum zeigt SS IPTV keine Sender?', 'Meist ist der Link unvollständig oder der Verbindungscode abgelaufen. Fügen Sie die Playlist erneut hinzu und starten Sie die App neu.'],
      ['Gibt es SS IPTV auf Android?', 'Ja, die App ist auch für Android verfügbar.'],
    ],
    related: ['/smart-iptv/', '/iptv-lg-tv/', '/iptv-samsung-tv/', '/m3u-playlist/', '/iptv-apps/', '/flix-iptv/'],
    keywords: ['ssiptv', 'ssiptv android', 'ssiptv com', 'ssiptv list', 'ssiptv m3u', 'simpleiptv'],
  },

  {
    path: '/flix-iptv/',
    hub: 'apps',
    name: 'Flix IPTV',
    teaser: 'Flix IPTV per MAC-Adresse einrichten, Testphase und Aktivierung.',
    icon: 'tv',
    title: `Flix IPTV: Einrichtung per MAC-Adresse | ${site.name}`,
    description: 'Flix IPTV einrichten: Playlist per MAC-Adresse hochladen, die App auf Samsung, LG, Android und Fire TV nutzen und nach der kostenlosen Testphase aktivieren.',
    kicker: 'IPTV-Apps',
    h1: 'Flix IPTV einrichten – Schritt für Schritt',
    lead: 'Flix IPTV ist ein IPTV-Player für Smart-TVs und Streaming-Geräte mit moderner Oberfläche. Wie bei vielen Fernseher-Apps verknüpfen Sie Ihre Playlist über die Website des App-Anbieters mit der MAC-Adresse des Geräts. Nach einer Testphase wird eine einmalige Aktivierung fällig.',
    facts: [['Geräte', 'Samsung, LG, Android, Fire TV, je nach Store auch Apple-Geräte'], ['Anmeldung', 'M3U-Link oder Xtream-Daten per MAC-Adresse'], ['Kosten', 'Testphase, danach Aktivierung beim App-Anbieter']],
    sections: [
      { id: 'einrichten', h: 'Flix IPTV einrichten', html: ol([
        'Installieren Sie „Flix IPTV“ aus dem App-Store Ihres Geräts und starten Sie die App.',
        'Notieren Sie <strong>MAC-Adresse</strong> und ggf. <strong>Geräteschlüssel</strong>, die auf dem Startbildschirm angezeigt werden.',
        'Öffnen Sie am Handy oder Computer die Upload-Seite des App-Anbieters (die Adresse zeigt die App an).',
        'Geben Sie MAC-Adresse und Ihren M3U-Link aus unserer E-Mail ein und speichern Sie.',
        'Starten Sie Flix IPTV neu oder laden Sie die Playlist in den App-Einstellungen neu.',
      ]) },
      { id: 'funktionen', h: 'Was Flix IPTV bietet', html: `
<ul>
  <li>Übersichtliche Oberfläche mit Live-TV, Favoriten und Programmführer.</li>
  <li>Mehrere Playlists pro Gerät möglich.</li>
  <li>Anpassbare Darstellung, Untertitel- und Audiospur-Auswahl.</li>
</ul>
<p>Die Aktivierungsgebühr geht an den App-Anbieter, nicht an uns. Kostenlose Alternativen sind ${L('/ss-iptv/', 'SS IPTV')} auf dem Fernseher oder ${L('/xciptv/', 'XCIPTV')} auf Android.</p>` },
      { id: 'mac', h: 'Warum eine MAC-Adresse?', html: `
<p>Fernseher-Apps nutzen die MAC-Adresse, damit Sie lange Links nicht mit der Fernbedienung eintippen müssen. Die Adresse, die die App anzeigt, ist eine App-Kennung – nicht zwingend die MAC-Adresse aus den Netzwerkeinstellungen. Dasselbe Prinzip nutzen ${L('/smart-iptv/', 'Smart IPTV')} und ${L('/set-iptv/', 'Set IPTV')}.</p>
<p class="muted">${thirdParty}</p>` },
    ],
    faq: [
      ['Ist Flix IPTV kostenlos?', 'Flix IPTV lässt sich zunächst testen. Danach verlangt der App-Anbieter eine Aktivierungsgebühr; den aktuellen Betrag nennt er auf seiner Website.'],
      ['Wie lade ich meine Playlist in Flix IPTV hoch?', 'Über die Upload-Seite des App-Anbieters: MAC-Adresse aus der App und M3U-Link eintragen, speichern und die App neu starten.'],
      ['Läuft Flix IPTV auf dem Fire TV Stick?', 'Ja, sofern die App im Store Ihres Geräts verfügbar ist. Auf Fire TV sind aber auch TiviMate oder IPTV Smarters Pro eine gute Wahl.'],
      ['Enthält Flix IPTV Sender?', 'Nein. Flix IPTV ist ein Player; die Sender kommen von Ihrem IPTV-Anbieter.'],
    ],
    related: ['/smart-iptv/', '/set-iptv/', '/ss-iptv/', '/iptv-samsung-tv/', '/iptv-lg-tv/', '/iptv-apps/'],
    keywords: ['flix iptv', 'flix ip tv', 'flixiptv'],
  },

  {
    path: '/set-iptv/',
    hub: 'apps',
    name: 'Set IPTV & Smart One',
    teaser: 'Set IPTV und Smart One IPTV per MAC-Adresse auf Samsung und LG einrichten.',
    icon: 'tv',
    title: `Set IPTV & Smart One IPTV einrichten | ${site.name}`,
    description: 'Set IPTV und Smart One IPTV einrichten: Playlist per MAC-Adresse hochladen, Testphase und Aktivierung, Unterschiede der beiden TV-Apps und Alternativen.',
    kicker: 'IPTV-Apps',
    h1: 'Set IPTV und Smart One IPTV einrichten',
    lead: 'Set IPTV und Smart One IPTV sind zwei IPTV-Apps für Smart-TVs von Samsung und LG sowie für Android. Beide arbeiten nach demselben Prinzip: Die App zeigt eine MAC-Adresse an, und Sie hinterlegen Ihre Playlist auf der Website des App-Anbieters. Nach einer Testphase wird jeweils eine Aktivierung fällig.',
    facts: [['Geräte', 'Samsung, LG, Android (je nach Store)'], ['Anmeldung', 'M3U-Link per MAC-Adresse'], ['Kosten', 'Testphase, danach Aktivierung beim App-Anbieter']],
    sections: [
      { id: 'set-iptv', h: 'Set IPTV einrichten', html: ol([
        'Installieren und starten Sie „Set IPTV“ auf dem Fernseher.',
        'Notieren Sie die angezeigte <strong>MAC-Adresse</strong>.',
        'Öffnen Sie die Website des App-Anbieters (Adresse steht in der App) und wählen Sie den Playlist-Upload.',
        'MAC-Adresse und M3U-Link eintragen, speichern, App neu starten.',
      ]) },
      { id: 'smart-one', h: 'Smart One IPTV einrichten', html: ol([
        'Installieren und starten Sie „Smart One IPTV“.',
        'Notieren Sie die <strong>MAC-Adresse</strong> auf dem Startbildschirm.',
        'Auf der Website des App-Anbieters die MAC-Adresse eingeben und Ihren M3U-Link hinzufügen.',
        'App neu starten – die Senderliste wird geladen.',
      ]) },
      { id: 'vergleich', h: 'Set IPTV, Smart One oder doch eine andere App?', html: `
<p>Beide Apps sind schlanke Player für Fernseher. Wenn Sie keine Aktivierungsgebühr zahlen möchten, testen Sie ${L('/ss-iptv/', 'SS IPTV')}. Wer mehr Komfort möchte, greift zu ${L('/flix-iptv/', 'Flix IPTV')} oder schließt einen ${L('/iptv-fire-tv-stick/', 'Fire TV Stick')} an und nutzt ${L('/tivimate/', 'TiviMate')}. Die Gebühren der App-Anbieter sind nicht Teil Ihres IPTV-Pakets.</p>
<p class="muted">${thirdParty}</p>` },
    ],
    faq: [
      ['Was kostet Set IPTV?', 'Nach der Testphase verlangt der App-Anbieter eine Aktivierung. Den aktuellen Betrag nennt er auf seiner Website.'],
      ['Ist Smart One IPTV dasselbe wie Smart IPTV?', 'Nein. Smart One IPTV und Smart IPTV (SIPTV) sind verschiedene Apps unterschiedlicher Anbieter, die ähnlich eingerichtet werden.'],
      ['Warum erscheint meine Playlist nicht?', 'Prüfen Sie die MAC-Adresse auf Tippfehler und starten Sie die App neu. Ist der M3U-Link unvollständig, laden Sie ihn erneut hoch.'],
      ['Welche App empfehlen Sie für Samsung und LG?', 'Für den Einstieg die kostenlose App SS IPTV. Auf unseren Seiten zu Samsung TV und LG TV finden Sie alle Optionen.'],
    ],
    related: ['/smart-iptv/', '/flix-iptv/', '/ss-iptv/', '/iptv-samsung-tv/', '/iptv-lg-tv/', '/iptv-apps/'],
    keywords: ['set iptv', 'set ip tv', 'smartone iptv', 'smart oneiptv', 'smarte one iptv'],
  },

  {
    path: '/xciptv/',
    hub: 'apps',
    name: 'XCIPTV',
    teaser: 'Kostenloser Xtream-Player für Android und Fire TV einrichten.',
    icon: 'play',
    title: `XCIPTV Player auf Fire TV & Android einrichten | ${site.name}`,
    description: 'XCIPTV Player einrichten: kostenloser IPTV-Player für Fire TV Stick und Android, Login per Xtream Codes, empfohlene Einstellungen und Hilfe bei Fehlern.',
    kicker: 'IPTV-Apps',
    h1: 'XCIPTV Player – kostenlos auf Fire TV und Android',
    lead: 'XCIPTV ist ein kostenloser IPTV-Player für Android-Geräte und Fire TV, der speziell für den Xtream-Codes-Login gebaut ist. Er bietet Live-TV mit Programmführer, Favoriten und einen einfachen Einstieg – eine gute kostenlose Alternative zu TiviMate Premium.',
    facts: [['Geräte', 'Android-Smartphone, Android TV, Fire TV'], ['Anmeldung', 'Xtream Codes, M3U'], ['Kosten', 'Kostenlos']],
    sections: [
      { id: 'einrichten', h: 'XCIPTV einrichten', html: ol([
        'Installieren Sie „XCIPTV Player“ (Google Play Store; auf Fire TV siehe unten).',
        'Starten Sie die App und wählen Sie die Anmeldung per <strong>Xtream Codes</strong>.',
        'Tragen Sie <strong>Benutzername</strong>, <strong>Passwort</strong> und <strong>Server-URL</strong> aus unserer E-Mail ein.',
        'Tippen Sie auf „Sign in“. Die App lädt Sender und Programmführer.',
      ]) },
      { id: 'fire-tv', h: 'XCIPTV auf dem Fire TV Stick', html: `
<p>Ist XCIPTV nicht im Amazon Appstore zu finden, lässt sich die App auf Fire-OS-Geräten über die Downloader-App von der Website des Entwicklers installieren. Wie das geht und welche Fire-TV-Geräte keine Android-Apps mehr unterstützen, lesen Sie unter ${L('/iptv-fire-tv-stick/', 'IPTV auf dem Fire TV Stick')}.</p>` },
      { id: 'tipps', h: 'Empfohlene Einstellungen', html: `
<ul>
  <li><strong>Player:</strong> Bei Rucklern zwischen internem Player und VLC-Player wechseln.</li>
  <li><strong>Programmführer:</strong> Beim Start automatisch laden lassen.</li>
  <li><strong>Puffer:</strong> Bei instabilem WLAN einen größeren Puffer wählen.</li>
</ul>
<p>Weitere kostenlose Player im ${L('/iptv-apps/', 'IPTV-App-Vergleich')}; die Anmeldeart erklärt ${L('/xtream-codes/', 'Xtream Codes')}.</p>
<p class="muted">${thirdParty}</p>` },
    ],
    faq: [
      ['Ist XCIPTV kostenlos?', 'Ja, die App ist kostenlos. Sender enthält sie nicht; die kommen von Ihrem IPTV-Anbieter.'],
      ['Gibt es XCIPTV für Samsung oder LG?', 'Nein, XCIPTV ist für Android und Fire TV gedacht. Für Samsung und LG eignen sich Smart IPTV, SS IPTV oder Flix IPTV.'],
      ['Ist XC IPTV dasselbe wie Xtream Codes?', 'Nein. XCIPTV ist eine App, Xtream Codes die Anmeldeart, die sie nutzt.'],
      ['Gibt es eine XCIPTV Pro-Version?', 'Es kursieren verschiedene Varianten. Nutzen Sie die offizielle App aus dem Store oder von der Website des Entwicklers, nicht von Download-Seiten Dritter.'],
    ],
    related: ['/tivimate/', '/iptv-smarters-pro/', '/iptv-fire-tv-stick/', '/iptv-android/', '/xtream-codes/', '/iptv-apps/'],
    keywords: ['xc iptv', 'xciptv fire tv', 'xciptv fire tv stick', 'xciptv firestick', 'xciptv free', 'xciptv lg', 'xciptv lg tv', 'xciptv pro', 'xciptv samsung'],
  },

  {
    path: '/stbemu/',
    hub: 'apps',
    name: 'STBEmu',
    teaser: 'Portal-Zugang wie bei der MAG-Box – auf jedem Android-Gerät.',
    icon: 'box',
    title: `STBEmu: Portal-IPTV auf Android einrichten | ${site.name}`,
    description: 'STBEmu einrichten: Die App emuliert eine MAG-Box auf Android und Android TV. So tragen Sie Portal-URL und MAC-Adresse ein und wann sich STBEmu Pro lohnt.',
    kicker: 'IPTV-Apps',
    h1: 'STBEmu – Portal-IPTV wie bei der MAG-Box',
    lead: 'STBEmu ist eine Android-App, die eine IPTV-Set-Top-Box wie die MAG-Box nachahmt. Statt Benutzername und Passwort nutzen Sie eine Portal-URL; freigeschaltet wird über die MAC-Adresse, die STBEmu anzeigt. Sinnvoll ist das, wenn Sie einen Portal-Zugang haben oder die MAG-Oberfläche gewohnt sind.',
    facts: [['Geräte', 'Android-Smartphone, Android TV, Google TV, Fire TV (Fire OS)'], ['Anmeldung', 'Portal-URL + MAC-Adresse'], ['Kosten', 'Basisversion kostenlos, STBEmu Pro kostenpflichtig']],
    sections: [
      { id: 'einrichten', h: 'STBEmu einrichten', html: ol([
        'Installieren Sie „STBEmu“ aus dem Google Play Store und starten Sie die App.',
        'Öffnen Sie <strong>Einstellungen › Profile</strong> und legen Sie ein neues Profil an.',
        'Unter <strong>Portal-Einstellungen</strong> tragen Sie die Portal-URL ein, die wir Ihnen senden.',
        'Unter <strong>STB-Konfiguration</strong> finden Sie die MAC-Adresse. Schicken Sie sie uns, damit wir den Zugang freischalten.',
        'App neu starten – das Portal lädt.',
      ]) },
      { id: 'pro', h: 'STBEmu oder STBEmu Pro?', html: `
<p>Die kostenlose Version zeigt Werbung und hat weniger Einstellungen. STBEmu Pro ist eine kostenpflichtige Variante des Entwicklers ohne Werbung. Funktional reicht für den Einstieg die Basisversion.</p>
<p>Fragen Sie vorab, ob für Ihr Paket ein Portal-Zugang möglich ist. Einfacher ist meist der Xtream-Login mit ${L('/tivimate/', 'TiviMate')} oder ${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')}.</p>` },
      { id: 'mag', h: 'STBEmu und die echte MAG-Box', html: `
<p>Wer eine echte Box bevorzugt, findet alles zu Modellen und Einrichtung unter ${L('/mag-box/', 'MAG-Box')}. Die Portal-Einrichtung ist dort nahezu identisch.</p>
<p class="muted">${thirdParty}</p>` },
    ],
    faq: [
      ['Was ist STBEmu?', 'Eine Android-App, die eine IPTV-Set-Top-Box wie die MAG-Box nachahmt und Portal-Zugänge abspielt.'],
      ['Brauche ich für STBEmu eine MAC-Adresse?', 'Ja. STBEmu zeigt in der STB-Konfiguration eine MAC-Adresse an, die der Anbieter für Ihren Portal-Zugang freischaltet.'],
      ['Ist STBEmu Pro nötig?', 'Nein. Die Pro-Version entfernt Werbung und bietet mehr Einstellungen, die Grundfunktion ist dieselbe.'],
      ['Läuft STBEmu auf Samsung- oder LG-Fernsehern?', 'Nein, nur auf Android-Geräten. Für Samsung und LG gibt es eigene Apps.'],
    ],
    related: ['/mag-box/', '/formuler/', '/iptv-android/', '/iptv-box/', '/iptv-apps/', '/tivimate/'],
    keywords: ['stb emu pro', 'stbemu pro', 'stbemu iptv'],
  },

  {
    path: '/kodi-iptv/',
    hub: 'apps',
    name: 'Kodi IPTV',
    teaser: 'Live-TV in Kodi mit dem PVR IPTV Simple Client – plus Jellyfin und Plex.',
    icon: 'laptop',
    title: `Kodi IPTV: Live-TV mit PVR IPTV Simple Client | ${site.name}`,
    description: 'IPTV in Kodi einrichten: Live-TV mit dem Add-on PVR IPTV Simple Client, M3U-Link und Programmführer eintragen – plus IPTV in Jellyfin und Plex kurz erklärt.',
    kicker: 'IPTV-Apps',
    h1: 'Kodi IPTV – Live-TV mit dem PVR IPTV Simple Client',
    lead: 'Kodi ist ein kostenloses Open-Source-Mediacenter für Windows, Mac, Linux, Android und Fire TV. IPTV nutzen Sie in Kodi über das offizielle Add-on „PVR IPTV Simple Client“: Sie tragen Ihren M3U-Link und die EPG-Adresse ein und erhalten Live-TV mit Programmführer.',
    facts: [['Geräte', 'Windows, Mac, Linux, Android, Android TV, Fire TV (Fire OS)'], ['Anmeldung', 'M3U-Link + EPG-Adresse (XMLTV)'], ['Kosten', 'Kostenlos (Open Source)'], ['Add-on', 'PVR IPTV Simple Client (offizielles Kodi-Repository)']],
    sections: [
      { id: 'einrichten', h: 'IPTV in Kodi einrichten', html: ol([
        'Installieren Sie Kodi von kodi.tv oder aus dem App-Store Ihres Geräts.',
        'Öffnen Sie <strong>Einstellungen › Add-ons › Aus Repository installieren › PVR-Clients</strong>.',
        'Wählen Sie <strong>„PVR IPTV Simple Client“</strong> und installieren Sie ihn.',
        'Öffnen Sie im Add-on „Konfigurieren“ und tragen Sie unter „Allgemein“ Ihren <strong>M3U-Link</strong> ein.',
        'Tragen Sie unter „EPG“ die <strong>XMLTV-Adresse</strong> für den Programmführer ein.',
        'Starten Sie Kodi neu. Unter „TV“ im Hauptmenü erscheinen Sender und Programmführer.',
      ]) },
      { id: 'sicherheit', h: 'Nur offizielle Add-ons verwenden', html: `
<p>Kodi selbst ist legal und enthält keine Inhalte. Vorsicht bei Add-ons aus inoffiziellen Quellen, die „kostenlose Sender“ versprechen: Sie verbreiten meist Inhalte ohne Rechte und können Schadsoftware enthalten. Der PVR IPTV Simple Client stammt aus dem offiziellen Repository.</p>` },
      { id: 'jellyfin-plex', h: 'IPTV in Jellyfin und Plex', html: `
<p><strong>Jellyfin</strong> unterstützt Live-TV mit M3U-Tuner und XMLTV-Programmführer direkt in den Server-Einstellungen. <strong>Plex</strong> setzt für Live-TV einen unterstützten TV-Tuner voraus; M3U-Listen lassen sich dort nur über Zusatzsoftware einbinden. Die Schritte zeigt ${L('/plex-jellyfin-iptv/', 'IPTV mit Plex und Jellyfin')}. Für die meisten Nutzer ist Kodi oder ein reiner ${L('/iptv-apps/', 'IPTV-Player')} der einfachere Weg.</p>` },
      { id: 'fehler', h: 'Kodi zeigt keine Sender?', html: `
<ul>
  <li>Prüfen Sie, ob der M3U-Link vollständig ist – Details unter ${L('/m3u-playlist/', 'M3U-Playlist')}.</li>
  <li>Aktivieren Sie das Add-on nach der Konfiguration erneut oder starten Sie Kodi neu.</li>
  <li>Bei langsamen Geräten: Unter „PVR & Live TV“ das Laden des Programmführers zeitlich begrenzen.</li>
</ul>
<p class="muted">${thirdParty}</p>` },
    ],
    faq: [
      ['Wie bekomme ich IPTV auf Kodi?', 'Mit dem offiziellen Add-on PVR IPTV Simple Client. Dort tragen Sie Ihren M3U-Link und die EPG-Adresse ein.'],
      ['Ist Kodi legal?', 'Ja. Kodi ist ein legales Open-Source-Mediacenter ohne eigene Inhalte. Problematisch sind nur inoffizielle Add-ons, die Inhalte ohne Rechte verbreiten.'],
      ['Funktioniert Kodi IPTV auf dem Fire TV Stick?', 'Ja, auf Fire-TV-Geräten mit Fire OS. Geräte mit Vega OS unterstützen keine Android-Apps.'],
      ['Kann ich IPTV in Plex schauen?', 'Plex benötigt für Live-TV einen unterstützten TV-Tuner. Jellyfin unterstützt M3U-Listen dagegen direkt.'],
    ],
    related: ['/vlc-iptv/', '/m3u-playlist/', '/plex-jellyfin-iptv/', '/iptv-pc/', '/iptv-fire-tv-stick/', '/iptv-apps/'],
    keywords: ['kodi iptv', 'kodi ip tv', 'kodi live tv', 'kodinerds iptv', 'kodi xbmc iptv', 'cody iptv', 'plex iptv', 'jellyfin iptv'],
  },

  {
    path: '/vlc-iptv/',
    hub: 'apps',
    name: 'IPTV mit VLC',
    teaser: 'M3U-Link im VLC media player öffnen – auf Windows, Mac und Handy.',
    icon: 'laptop',
    title: `IPTV mit VLC: M3U-Playlist öffnen | ${site.name}`,
    description: 'IPTV mit VLC schauen: So öffnen Sie Ihren M3U-Link im kostenlosen VLC media player unter Windows, Mac, Android und iOS – mit Tipps gegen Ruckeln.',
    kicker: 'IPTV-Apps',
    h1: 'IPTV mit VLC – M3U-Playlist öffnen',
    lead: 'Der kostenlose VLC media player spielt IPTV ohne Zusatzsoftware ab: Sie öffnen Ihren M3U-Link als Netzwerkstream, und VLC zeigt die Senderliste als Wiedergabeliste. Einen Programmführer bietet VLC nicht – dafür ist es auf fast jedem Gerät sofort startklar.',
    facts: [['Geräte', 'Windows, Mac, Linux, Android, iPhone, iPad'], ['Anmeldung', 'M3U-Link'], ['Kosten', 'Kostenlos (Open Source)'], ['Programmführer', 'Nein']],
    sections: [
      { id: 'windows-mac', h: 'IPTV mit VLC unter Windows und Mac', html: ol([
        'Installieren Sie VLC von <strong>videolan.org</strong>.',
        'Windows: <em>Medien › Netzwerkstream öffnen …</em> (Strg + N). Mac: <em>Ablage › Netzwerk öffnen …</em> (⌘ + N).',
        'Fügen Sie Ihren <strong>M3U-Link</strong> aus unserer E-Mail ein und klicken Sie auf „Wiedergabe“ bzw. „Öffnen“.',
        'Öffnen Sie die Wiedergabeliste (Strg + L bzw. ⌘ + L) und wählen Sie einen Sender per Doppelklick.',
      ]) },
      { id: 'mobil', h: 'VLC auf Android, iPhone und iPad', html: `
<p>In der VLC-App tippen Sie auf <em>Netzwerk › Netzwerkstream öffnen</em> (iOS) bzw. <em>Durchsuchen › Neuer Stream</em> (Android) und fügen den M3U-Link ein. Für den Fernseher sind spezialisierte Apps wie ${L('/tivimate/', 'TiviMate')} oder ${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')} komfortabler.</p>` },
      { id: 'tipps', h: 'Tipps für VLC', html: `
<ul>
  <li><strong>Ruckeln:</strong> Unter <em>Extras › Einstellungen › Alle › Eingang/Codecs</em> den Netzwerk-Cache erhöhen, z. B. auf 3000 ms.</li>
  <li><strong>Playlist speichern:</strong> <em>Medien › Wiedergabeliste speichern</em> – dann öffnen Sie die Sender künftig per Doppelklick.</li>
  <li><strong>Mit Programmführer:</strong> Wer EPG möchte, nutzt ${L('/kodi-iptv/', 'Kodi')} oder Smarters am ${L('/iptv-pc/', 'PC')}.</li>
</ul>
<p class="muted">${thirdParty}</p>` },
    ],
    faq: [
      ['Kann ich IPTV mit VLC schauen?', 'Ja. Öffnen Sie Ihren M3U-Link über „Netzwerkstream öffnen“. VLC zeigt die Sender als Wiedergabeliste.'],
      ['Zeigt VLC einen Programmführer?', 'Nein. Für einen Programmführer eignen sich Kodi, IPTV Smarters Pro oder TiviMate.'],
      ['Warum ruckelt IPTV in VLC?', 'Oft hilft ein höherer Netzwerk-Cache in den VLC-Einstellungen und eine Verbindung per LAN-Kabel.'],
      ['Funktioniert VLC mit Xtream-Codes-Daten?', 'Nicht direkt. VLC benötigt den M3U-Link, den Sie zusammen mit Ihren Zugangsdaten erhalten.'],
    ],
    related: ['/iptv-pc/', '/kodi-iptv/', '/m3u-playlist/', '/iptv-apps/', '/iptv-smarters-pro/', '/iptv-geraete/'],
    keywords: ['ip tv vlc', 'iptv vlc', 'vlc ip tv'],
  },
];
