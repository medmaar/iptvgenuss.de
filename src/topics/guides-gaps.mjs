// Guide and money pages added in the November 2026 keyword-gap pass:
// the 12-month package, IPTV on Reddit/forums, IPTV in the web browser,
// the best IPTV players for Android, and TV from the internet providers
// (Telekom, Vodafone, 1&1, o2). Prices only from site.mjs; no claims about
// third-party channels, ratings or provider products beyond what is
// generally known and stable.
import { site, plans, devicePrices, euro } from '../site.mjs';
import { L, ol, stand } from './util.mjs';
import { offerSchema } from './guides-more.mjs';

const updated = '2026-11-25';
const paid = plans.filter((p) => !p.trial && p.price != null);
const month = paid.find((p) => p.months === 1);
const year = paid.find((p) => p.months === 12);
const maxDevices = Math.max(...Object.keys(devicePrices).map(Number));
const bonus = plans.find((p) => p.bonus);
const perMonth = (price, months) => euro(Math.round((price / months) * 100) / 100);
const saving = month && year ? month.price * 12 - year.price : null;
const savingPct = saving != null ? Math.round((saving / (month.price * 12)) * 100) : null;
const fixes = (list) => `<ul>${list.map(([p, f]) => `<li><strong>${p}:</strong> ${f}</li>`).join('')}</ul>`;
const mail = site.email ? ` an <a href="mailto:${site.email}">${site.email}</a>` : '';

const yearTable = () => `<div class="table-wrap" role="region" aria-labelledby="jahr-tab" tabindex="0"><table class="table">
<caption id="jahr-tab">${site.name}: 12 Monate und 1 Monat nach Geräteanzahl</caption>
<thead><tr><th scope="col">Geräte gleichzeitig</th><th scope="col">${year.label}</th><th scope="col">pro Monat gerechnet</th><th scope="col">${month.label}</th></tr></thead>
<tbody>${Object.entries(devicePrices).map(([n, p]) => `<tr><th scope="row">${n} ${n === '1' ? 'Gerät' : 'Geräte'}</th><td>${euro(p[year.id])}</td><td>${perMonth(p[year.id], 12)}</td><td>${euro(p[month.id])}</td></tr>`).join('')}</tbody></table></div>`;

export default [
  // ── 12 months ───────────────────────────────────────────────────────
  {
    path: '/iptv-12-monate/',
    hub: 'ratgeber',
    published: updated,
    updated,
    name: 'IPTV 12 Monate',
    teaser: `Das Jahrespaket: ${year ? `${euro(year.price)} einmalig` : 'einmal zahlen'}, keine Verlängerung${bonus ? `, ${bonus.bonusName} inklusive` : ''}.`,
    icon: 'euro',
    title: `IPTV 12 Monate: Jahrespaket ohne Verlängerung | ${site.name}`,
    description: `IPTV für 12 Monate${year ? ` ab ${euro(year.price)}` : ''}: einmal zahlen, keine automatische Verlängerung, 1 bis ${maxDevices} Geräte${bonus ? `, ${bonus.bonusName} inklusive` : ''}. Jetzt kostenlos testen.`,
    kicker: 'IPTV kaufen',
    h1: 'IPTV 12 Monate: das Jahrespaket ohne automatische Verlängerung',
    lead: `IPTV für 12 Monate ist bei ${site.name} das Paket mit dem günstigsten Monatspreis: Sie zahlen ${year ? `<strong>${euro(year.price)}</strong>` : 'einmal'} für ein ganzes Jahr, rechnerisch ${year ? `rund ${perMonth(year.price, 12)}` : 'deutlich weniger'} pro Monat, und nichts verlängert sich automatisch.${bonus ? ` Als Bonus ist das <strong>${bonus.bonusName}</strong>-Abo inklusive.` : ''} Hier sehen Sie, was das Jahrespaket enthält, wann es sich lohnt und wie Sie es vorher kostenlos testen.`,
    facts: [
      ['Preis', year ? `${euro(year.price)} einmalig für 1 Gerät` : 'siehe Preise'],
      ['Laufzeit', '12 Monate ab Freischaltung'],
      ['Verlängerung', 'keine automatische Verlängerung'],
      ['Geräte', `1 bis ${maxDevices} gleichzeitig, wählbar`],
      ...(bonus ? [['Bonus', `${bonus.bonusName} inklusive`]] : []),
    ],
    schema: [offerSchema],
    sections: [
      { id: 'preise', h: 'Was kostet IPTV für 12 Monate?', html: `
<p>Der Preis richtet sich nur danach, auf wie vielen Geräten Sie gleichzeitig schauen möchten. Die Leistungen sind in allen Paketen gleich.</p>
${yearTable()}
${saving != null ? `<p>Im Vergleich zu zwölf einzelnen Monatspaketen (${euro(month.price * 12)}) sparen Sie mit dem Jahrespaket für ein Gerät <strong>${euro(saving)}</strong> – das sind rund ${savingPct} Prozent.</p>` : ''}
<p>Die aktuellen Pakete und den Bestellweg finden Sie unter ${L('/#preise', 'Preise ansehen')}. Alles Wichtige zum Kaufablauf erklärt ${L('/iptv-kaufen/', 'IPTV kaufen')}.</p>` },
      { id: 'inhalt', h: 'Was im Jahrespaket enthalten ist', html: `
<ul>
  <li><strong>Zugangsdaten per E-Mail</strong> für Xtream Codes und M3U – nutzbar in den gängigen IPTV-Apps.</li>
  <li><strong>Dieselben Leistungen wie im Monatspaket</strong>, inklusive Programmführer (EPG) und Catch-up.</li>
  <li><strong>Persönliche Hilfe bei der Einrichtung</strong> durch unseren deutschen Support.</li>
  ${bonus ? `<li><strong>${bonus.bonusName}</strong>: Das App-Abo für den ${L('/ibo-player/', 'IBO Player')} ist nur im Jahrespaket kostenlos dabei. Damit sparen Sie die Aktivierungsgebühr des App-Anbieters, besonders praktisch auf Samsung- und LG-Fernsehern.</li>` : ''}
</ul>` },
      { id: 'lohnt', h: 'Wann sich 12 Monate lohnen – und wann nicht', html: `
<p><strong>Das Jahrespaket lohnt sich</strong>, wenn Sie IPTV als festen Ersatz für Kabel oder Satellit nutzen, etwa nach dem Ende des Nebenkostenprivilegs für Kabel-TV in Mietwohnungen. Dann zahlen Sie einmal und haben ein Jahr Ruhe.</p>
<p><strong>Ein Monat ist sinnvoller</strong>, wenn Sie IPTV nur für einen begrenzten Zeitraum brauchen – Urlaub in der Ferienwohnung, ein Turnier, eine Übergangszeit nach dem Umzug. Auch das ${L('/#preise', 'Monatspaket')} verlängert sich nicht automatisch.</p>
<p><strong>Noch unsicher?</strong> Dann starten Sie mit dem ${L('/iptv-testen/', 'kostenlosen Test')} auf Ihrem eigenen Gerät und entscheiden danach.</p>` },
      { id: 'lifetime', h: 'IPTV Lifetime: Warum wir keine lebenslangen Abos anbieten', html: `
<p>Angebote für „Lifetime-IPTV“ oder „IPTV für immer“ klingen günstig. In der Praxis hängt ein IPTV-Zugang an laufenden Kosten für Server, Technik und Support. Ein einmaliger Preis für eine unbegrenzte Laufzeit lässt sich seriös kaum kalkulieren, und wenn der Anbieter verschwindet, ist das Geld weg. Wir bieten deshalb klare Laufzeiten von einem Monat oder einem Jahr an. Woran Sie unseriöse Angebote erkennen, lesen Sie unter ${L('/iptv-anbieter/', 'IPTV-Anbieter wählen')}.</p>` },
      { id: 'ablauf', h: 'So bestellen Sie IPTV für 12 Monate', html: `${ol([
  `Wählen Sie unter ${L('/#preise', 'Preise')} das Jahrespaket und die Anzahl der Geräte.`,
  'Senden Sie die Anfrage ab. Sie erhalten die Bestell- und Zahlungsinformationen per E-Mail.',
  'Nach der Zahlung bekommen Sie Ihre Zugangsdaten und eine Anleitung für Ihre App.',
  `Richten Sie die App ein – zum Beispiel ${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')}, ${L('/tivimate/', 'TiviMate')} oder ${L('/ibo-player/', 'IBO Player')}.`,
  'Nach 12 Monaten endet der Zugang automatisch. Möchten Sie weiterschauen, bestellen Sie einfach erneut.',
])}` },
    ],
    faq: [
      ['Was kostet IPTV für 12 Monate?', year ? `Bei ${site.name} ${euro(year.price)} einmalig für ein Gerät, mit mehreren Geräten bis ${euro(devicePrices[maxDevices][year.id])} für ${maxDevices} Geräte.` : 'Die aktuellen Preise finden Sie bei den Paketen.'],
      ['Verlängert sich das Jahrespaket automatisch?', 'Nein. Der Zugang endet nach 12 Monaten. Sie entscheiden selbst, ob Sie neu bestellen.'],
      ['Ist im 12-Monats-Paket mehr enthalten als im Monatspaket?', `Die Leistungen sind gleich.${bonus ? ` Zusätzlich gibt es nur im Jahrespaket ${bonus.bonusName} kostenlos dazu.` : ''}`],
      ['Gibt es bei IPTV Genuss ein Lifetime-Abo?', 'Nein. Wir bieten bewusst klare Laufzeiten von einem Monat und einem Jahr an.'],
      ['Kann ich vor dem Jahrespaket testen?', 'Ja, mit dem kostenlosen Test auf einem Gerät. Danach entscheiden Sie in Ruhe.'],
    ],
    related: ['/iptv-kaufen/', '/iptv-testen/', '/ibo-player/', '/iptv-anbieter/', '/iptv-4k/', '/iptv-geraete/'],
    keywords: ['iptv 12 monate', 'iptv 12 months', 'iptv m3u 1 jahr', 'iptv 1 jahr', 'iptv jahresabo', 'iptv lifetime', 'lifetime iptv'],
  },

  // ── Reddit & forums ─────────────────────────────────────────────────
  {
    path: '/iptv-reddit-forum/',
    hub: 'ratgeber',
    published: updated,
    updated,
    name: 'IPTV auf Reddit und in Foren',
    teaser: 'Was „best IPTV Reddit“-Threads, Foren und Bewertungsportale wirklich aussagen.',
    icon: 'chat',
    title: `IPTV Reddit & Forum: Erfahrungen richtig lesen | ${site.name}`,
    description: 'Best IPTV auf Reddit, IPTV-Foren und Trustpilot: was Erfahrungsberichte aussagen, welche Warnzeichen es gibt und wie Sie Anbieter selbst prüfen.',
    kicker: 'Ratgeber',
    h1: 'IPTV auf Reddit und in Foren: Erfahrungen richtig einordnen',
    lead: 'Wer einen IPTV-Anbieter sucht, landet schnell bei „best IPTV Reddit“, in IPTV-Foren oder auf Bewertungsportalen. Dort finden Sie wertvolle Hinweise zu Apps und Geräten – aber selten eine verlässliche Antwort auf die Frage nach dem besten Anbieter. Dieser Ratgeber zeigt, was Sie aus Reddit-Threads und Foren mitnehmen können, wo Vorsicht geboten ist und wie Sie einen Anbieter in einer Stunde selbst prüfen.',
    facts: [
      ['Gut für', 'App-Einstellungen, Geräteempfehlungen, Fehlerlösungen'],
      ['Weniger gut für', 'Anbieterempfehlungen – oft verboten, veraltet oder gekauft'],
      ['Besser als jede Bewertung', 'ein kostenloser Test auf dem eigenen Gerät'],
    ],
    sections: [
      { id: 'reddit', h: 'Best IPTV auf Reddit: Warum Sie dort selten Anbieternamen finden', html: `
<p>In vielen großen IPTV-Communitys auf Reddit ist es ausdrücklich verboten, Anbieter zu nennen oder nach ihnen zu fragen. Beiträge mit Namen werden gelöscht, und Empfehlungen werden in private Nachrichten verlagert. Genau dort ist Vorsicht geboten: Wer per Direktnachricht einen „Geheimtipp“ schickt, ist häufig selbst Verkäufer.</p>
<p>Nützlich sind Reddit-Threads trotzdem – für alles rund um <strong>Apps und Geräte</strong>: Welche ${L('/tivimate/', 'TiviMate')}-Einstellung gegen Ruckler hilft, welcher ${L('/iptv-fire-tv-stick/', 'Fire TV Stick')} genug Leistung hat, wie man den Programmführer korrekt zuordnet. Diese Erfahrungen sind meist unabhängig vom Anbieter und gut überprüfbar.</p>` },
      { id: 'foren', h: 'IPTV-Foren: Stärken und Grenzen', html: `
<p>Deutschsprachige Foren rund um Kodi, Receiver und Streaming-Geräte bieten oft sehr fundierte technische Hilfe – etwa zu ${L('/iptv-enigma2/', 'Enigma2-Receivern')}, ${L('/kodi-iptv/', 'Kodi')} oder ${L('/mag-box/', 'MAG-Boxen')}. Bei Anbieterempfehlungen gilt dagegen:</p>
<ul>
  <li><strong>Alter des Beitrags prüfen:</strong> Im IPTV-Markt ändern sich Angebote schnell. Ein Erfahrungsbericht von vor zwei Jahren sagt über heute wenig.</li>
  <li><strong>Neue Konten mit nur einem Thema</strong> sind ein typisches Zeichen für versteckte Werbung.</li>
  <li><strong>Einzelne Ausfälle</strong> sind kein Urteil über einen Anbieter, viele Beschwerden über Wochen hinweg schon.</li>
</ul>` },
      { id: 'bewertungen', h: 'Trustpilot und Bewertungsportale', html: `
<p>Bewertungsportale sammeln Erfahrungen vieler Kunden – das ist ihre Stärke. Achten Sie aber darauf, wie Bewertungen verteilt sind: Viele Fünf-Sterne-Bewertungen in kurzer Zeit, kurze gleichlautende Texte oder Bewertungen ohne konkreten Bezug zu Gerät, App oder Support sind Warnzeichen. Aussagekräftiger sind ausführliche Berichte über die Einrichtung, die Erreichbarkeit des Supports und den Umgang mit Problemen.</p>` },
      { id: 'warnzeichen', h: 'Sieben Warnzeichen, die in jedem Thread auftauchen', html: `
<ol class="guide-steps">
  <li><strong>„Lifetime“-Angebote</strong> für einen einmaligen Betrag ohne Laufzeitende.</li>
  <li><strong>Bezahlung nur anonym</strong>, etwa ausschließlich per Gutscheincode oder Kryptowährung, ohne Rechnung.</li>
  <li><strong>Kein Impressum</strong> und keine erreichbare Kontaktadresse auf der Website.</li>
  <li><strong>Automatische Verlängerung</strong>, die erst im Kleingedruckten steht.</li>
  <li><strong>Kein Test</strong> vor dem Kauf.</li>
  <li><strong>Vorinstallierte Apps oder Boxen</strong>, die nur mit einem bestimmten Anbieter funktionieren.</li>
  <li><strong>Kontakt nur über Messenger</strong>, ohne E-Mail-Support.</li>
</ol>
<p>Ausführlich: ${L('/iptv-anbieter/', 'IPTV-Anbieter vergleichen: acht Kriterien')}.</p>` },
      { id: 'selbst-pruefen', h: 'Besser als jeder Thread: in einer Stunde selbst prüfen', html: `${ol([
  `Fordern Sie einen ${L('/iptv-testen/', 'kostenlosen Test')} an und richten Sie ihn auf dem Gerät ein, das Sie wirklich nutzen.`,
  'Schauen Sie zur Hauptsendezeit, wenn die meisten Menschen streamen – dann zeigt sich die tatsächliche Stabilität.',
  'Prüfen Sie Programmführer, Umschaltzeiten und die Bildqualität auf Ihrem Fernseher.',
  `Stellen Sie dem Support eine konkrete Frage – zum Beispiel zur Einrichtung von ${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')} – und achten Sie darauf, wie schnell und verständlich die Antwort kommt.`,
  'Lesen Sie Preise, Laufzeit und Verlängerung, bevor Sie bezahlen.',
])}<p>Bei ${site.name} zahlen Sie einmalig, ohne automatische Verlängerung, und unser deutscher Support beantwortet Fragen persönlich${mail}.</p>` },
    ],
    faq: [
      ['Welcher IPTV-Anbieter ist laut Reddit der beste?', 'Eine verlässliche Antwort gibt es dort nicht: In vielen Communitys ist das Nennen von Anbietern verboten, und Empfehlungen per Direktnachricht stammen oft von Verkäufern. Testen Sie stattdessen selbst.'],
      ['Sind IPTV-Foren vertrauenswürdig?', 'Für technische Fragen zu Apps und Geräten oft sehr. Bei Anbieterempfehlungen auf das Datum des Beitrags und die Historie des Kontos achten.'],
      ['Woran erkenne ich gekaufte Bewertungen?', 'An vielen kurzen, ähnlichen Fünf-Sterne-Texten in kurzer Zeit, ohne Bezug zu Gerät, App oder Support.'],
      ['Wie prüfe ich einen IPTV-Anbieter am besten?', 'Mit einem kostenlosen Test zur Hauptsendezeit auf Ihrem eigenen Gerät, einer Frage an den Support und einem Blick auf Preise, Laufzeit und Impressum.'],
    ],
    related: ['/iptv-anbieter/', '/iptv-testen/', '/iptv-kaufen/', '/iptv-12-monate/', '/iptv-apps/', '/iptv-probleme/'],
    keywords: ['best iptv reddit', 'best iptv provider reddit', 'reddit best iptv', 'iptv reddit', 'iptv forum', 'iptvforum', 'iptv anbieter forum', 'iptv trustpilot', 'iptv smarters reddit', 'iptv erfahrungen'],
  },

  // ── Browser ─────────────────────────────────────────────────────────
  {
    path: '/iptv-im-browser/',
    hub: 'apps',
    published: updated,
    updated,
    name: 'IPTV im Browser',
    teaser: 'IPTV im Webbrowser schauen: was technisch geht, Web-Player und sichere Alternativen.',
    icon: 'laptop',
    title: `IPTV im Browser: Web-Player & Alternativen | ${site.name}`,
    description: 'IPTV im Webbrowser schauen: warum M3U-Links im Browser oft nicht laufen, was Web-Player können und welche kostenlosen Programme besser sind.',
    kicker: 'IPTV-Apps',
    h1: 'IPTV im Browser schauen: Web-Player, Grenzen und bessere Alternativen',
    lead: 'IPTV im Browser klingt bequem: Link öffnen, Fernsehen läuft – ganz ohne Installation. In der Praxis scheitert das oft an Streamformaten und Sicherheitsregeln der Browser. Hier lesen Sie, was im Webbrowser technisch möglich ist, was Web-Player wie die Online-Varianten mancher IPTV-Apps leisten, warum Sie Ihre Zugangsdaten nicht in jede Website tippen sollten und welche kostenlosen Programme am PC besser funktionieren.',
    facts: [
      ['Direkt im Browser', 'nur eingeschränkt – abhängig von Format und Verbindung'],
      ['Typische Hürden', 'MPEG-TS-Streams, HTTP statt HTTPS, fehlende Freigaben (CORS)'],
      ['Empfehlung am PC', 'VLC, IPTVnator, MyIPTV Player oder IPTV Smarters Pro'],
    ],
    sections: [
      { id: 'technik', h: 'Kann man IPTV im Webbrowser abspielen?', html: `
<p>Teilweise. Ob ein Stream im Browser läuft, hängt von drei Dingen ab:</p>
<ul>
  <li><strong>Format:</strong> Viele IPTV-Sender werden als MPEG-TS (<code>.ts</code>) ausgeliefert. Dieses Format spielen Browser nicht direkt ab. HLS-Streams (<code>.m3u8</code>) laufen in Safari von Haus aus und in Chrome, Edge und Firefox über einen eingebauten JavaScript-Player einer Website.</li>
  <li><strong>Verschlüsselung:</strong> Viele IPTV-Server liefern über <code>http://</code>. Eine Website mit <code>https://</code> darf solche Inhalte aus Sicherheitsgründen oft nicht laden („gemischte Inhalte“).</li>
  <li><strong>Freigaben:</strong> Browser erlauben einer Website nur dann, Videos von einem anderen Server zu laden, wenn dieser Server es ausdrücklich gestattet (CORS). Fehlt diese Freigabe, bleibt das Bild schwarz.</li>
</ul>
<p>Eine M3U-Playlist im Browser zu öffnen, startet deshalb meist nur einen Download der Textdatei – kein Fernsehen. Was in einer M3U-Datei steht, erklärt ${L('/m3u-playlist/', 'M3U-Playlist')}.</p>` },
      { id: 'web-player', h: 'Web-Player und Online-Versionen von IPTV-Apps', html: `
<p>Einige App-Entwickler bieten Web-Versionen an, und es gibt Open-Source-Projekte, die IPTV-Playlists im Browser anzeigen. Bei der Suche nach „IPTV Smarters online“ oder „IPTV Smarters Web“ stoßen Sie zum Beispiel auf Web-Player, die nach dem Smarters-Prinzip funktionieren. Solche Player funktionieren gut, wenn der IPTV-Server passende Formate und Freigaben liefert – und sonst eben nicht. Für den Alltag am Fernseher sind sie kein Ersatz für eine App.</p>` },
      { id: 'datenschutz', h: 'Vorsicht mit Zugangsdaten auf fremden Websites', html: `
<p>Ein Web-Player muss Ihre Zugangsdaten kennen. Tippen Sie Benutzername, Passwort und Server-URL deshalb nur in Web-Player ein, deren Betreiber Sie kennen – im Idealfall in eine Lösung, die lokal in Ihrem Browser läuft und Daten nicht an einen fremden Server schickt. Gelangen Ihre Daten an Dritte, können diese Ihren Zugang mitnutzen. Dann blockiert der Server Ihre eigenen Geräte, weil zu viele gleichzeitige Verbindungen bestehen.</p>` },
      { id: 'alternativen', h: 'Besser als der Browser: kostenlose Programme für PC und Mac', html: `
<div class="table-wrap" role="region" aria-labelledby="browser-alt" tabindex="0"><table class="table">
<caption id="browser-alt">Alternativen zum Browser (Stand: ${stand}, ohne Gewähr)</caption>
<thead><tr><th scope="col">Programm</th><th scope="col">System</th><th scope="col">Stärke</th></tr></thead>
<tbody>
<tr><th scope="row">${L('/vlc-iptv/', 'VLC')}</th><td>Windows, macOS, Linux</td><td>spielt M3U-Links sofort ab, kostenlos</td></tr>
<tr><th scope="row">${L('/iptvnator/', 'IPTVnator')}</th><td>Windows, macOS, Linux</td><td>Open Source, mit Programmführer</td></tr>
<tr><th scope="row">${L('/myiptv-player/', 'MyIPTV Player')}</th><td>Windows</td><td>aus dem Microsoft Store</td></tr>
<tr><th scope="row">${L('/iptv-smarters-pro-pc/', 'IPTV Smarters Pro')}</th><td>Windows, macOS</td><td>gleiche Oberfläche wie auf Handy und TV</td></tr>
<tr><th scope="row">${L('/kodi-iptv/', 'Kodi')}</th><td>alle</td><td>Mediacenter mit TV-Raster</td></tr>
</tbody></table></div>
<p>Wie Sie diese Programme einrichten, zeigt ${L('/iptv-pc/', 'IPTV am PC und Mac')}. Auf Chromebooks laufen viele Android-Apps aus Google Play, etwa ${L('/iptv-smarters-pro-android/', 'IPTV Smarters Pro für Android')}.</p>` },
      { id: 'probleme', h: 'Browser zeigt kein Bild? Die häufigsten Ursachen', html: `${fixes([
  ['Datei wird heruntergeladen statt abgespielt', 'Sie haben eine M3U-Datei geöffnet. Öffnen Sie sie mit VLC oder IPTVnator.'],
  ['Schwarzes Bild, keine Fehlermeldung', 'meist MPEG-TS-Format oder fehlende Freigabe des Servers. Im Browser nicht lösbar – ein Programm nutzen.'],
  ['„Unsichere Inhalte blockiert“', 'Der Stream kommt per HTTP, die Website per HTTPS. Auch das lässt sich nur mit einem Programm statt Browser umgehen.'],
])}<p>Bei Fragen helfen wir Ihnen persönlich${mail}.</p>` },
    ],
    faq: [
      ['Kann ich IPTV ohne App im Browser schauen?', 'Nur eingeschränkt. Viele IPTV-Streams nutzen Formate oder Verbindungen, die Browser nicht direkt abspielen. Ein kostenloses Programm wie VLC ist zuverlässiger.'],
      ['Gibt es IPTV Smarters als Web-Version?', 'Es gibt Web-Player nach dem Smarters-Prinzip. Ob sie mit Ihrem Zugang funktionieren, hängt vom Streamformat ab. Am PC empfehlen wir die Desktop-Version oder VLC.'],
      ['Ist es sicher, Zugangsdaten in einen Online-Player einzugeben?', 'Nur bei Playern, deren Betreiber Sie kennen. Sonst könnten Dritte Ihren Zugang mitnutzen.'],
      ['Welches Programm ist am PC am einfachsten?', 'VLC: M3U-Link unter „Medien › Netzwerkstream öffnen“ einfügen, fertig.'],
    ],
    related: ['/iptv-pc/', '/vlc-iptv/', '/iptvnator/', '/iptv-smarters-pro-pc/', '/m3u-playlist/', '/iptv-apps/'],
    keywords: ['iptv web', 'iptv browser', 'iptv web browser', 'iptv smarters web', 'iptv smarters online', 'm3u online', 'iptv web player', 'iptv online schauen'],
  },

  // ── Android players ─────────────────────────────────────────────────
  {
    path: '/iptv-player-android/',
    hub: 'apps',
    published: updated,
    updated,
    name: 'Beste IPTV-Player für Android',
    teaser: 'TiviMate, Smarters, XCIPTV, OTT Navigator & Co.: der Vergleich für Handy und Android TV.',
    icon: 'phone',
    title: `Beste IPTV-Player für Android im Vergleich | ${site.name}`,
    description: 'Der beste IPTV-Player für Android: TiviMate, IPTV Smarters Pro, XCIPTV, OTT Navigator und mehr im Vergleich – für Handy, Android TV und Fire TV.',
    kicker: 'IPTV-Apps',
    h1: 'Die besten IPTV-Player für Android: Vergleich für Handy und Fernseher',
    lead: 'Für Android gibt es mehr IPTV-Player als für jedes andere System – vom kostenlosen Einsteiger bis zum Receiver-Ersatz mit Aufnahmefunktion. Welcher IPTV-Player für Android am besten passt, hängt vor allem davon ab, ob Sie auf dem Smartphone oder auf dem Fernseher schauen. Dieser Vergleich ordnet die wichtigsten Apps ein und gibt eine klare Empfehlung für jeden Einsatzzweck.',
    facts: [
      ['Beste für den Fernseher', 'TiviMate (Premium optional)'],
      ['Bester kostenloser Player', 'XCIPTV'],
      ['Bester Allrounder Handy + TV', 'IPTV Smarters Pro'],
      ['Für Fortgeschrittene', 'OTT Navigator'],
    ],
    schema: [{ '@type': 'ItemList', name: 'IPTV-Player für Android', itemListElement: ['TiviMate', 'IPTV Smarters Pro', 'XCIPTV', 'OTT Navigator', 'Televizo', 'Sparkle TV', 'iMPlayer', 'IPTV Extreme', 'Perfect Player', 'Kodi', 'VLC'].map((n, i) => ({ '@type': 'ListItem', position: i + 1, item: { '@type': 'SoftwareApplication', name: n, applicationCategory: 'MultimediaApplication', operatingSystem: 'Android' } })) }],
    sections: [
      { id: 'vergleich', h: 'IPTV-Player für Android im Vergleich', html: `
<div class="table-wrap" role="region" aria-labelledby="android-player-tab" tabindex="0"><table class="table">
<caption id="android-player-tab">IPTV-Player für Android (Stand: ${stand}, ohne Gewähr)</caption>
<thead><tr><th scope="col">App</th><th scope="col">Smartphone</th><th scope="col">Android TV / Fire TV</th><th scope="col">Kosten</th><th scope="col">Besonders gut für</th></tr></thead>
<tbody>
<tr><th scope="row">${L('/tivimate/', 'TiviMate')}</th><td>nein, für TV gebaut</td><td>ja</td><td>Basis kostenlos, Premium</td><td>Programmführer wie beim Receiver</td></tr>
<tr><th scope="row">${L('/iptv-smarters-pro-android/', 'IPTV Smarters Pro')}</th><td>ja</td><td>ja</td><td>Grundversion kostenlos</td><td>Einstieg, Filme und Serien</td></tr>
<tr><th scope="row">${L('/xciptv/', 'XCIPTV')}</th><td>ja</td><td>ja</td><td>kostenlos</td><td>schnell und schlank</td></tr>
<tr><th scope="row">${L('/ott-navigator/', 'OTT Navigator')}</th><td>ja</td><td>ja</td><td>Basis kostenlos, Premium</td><td>viele Einstellungen, Portal-Zugänge</td></tr>
<tr><th scope="row">${L('/televizo/', 'Televizo')}</th><td>ja</td><td>ja</td><td>Basis kostenlos, Premium</td><td>aufgeräumte Oberfläche</td></tr>
<tr><th scope="row">${L('/sparkle-tv/', 'Sparkle TV')}</th><td>eingeschränkt</td><td>ja</td><td>Basis kostenlos, Premium</td><td>TV-Oberfläche mit EPG</td></tr>
<tr><th scope="row">${L('/implayer/', 'iMPlayer')}</th><td>eingeschränkt</td><td>ja</td><td>Testphase, dann kostenpflichtig</td><td>moderne Mediathek-Ansicht</td></tr>
<tr><th scope="row">${L('/iptv-extreme/', 'IPTV Extreme')}</th><td>ja</td><td>ja</td><td>Basis kostenlos, Pro</td><td>Aufnahmen in der Pro-Version</td></tr>
<tr><th scope="row">${L('/perfect-player/', 'Perfect Player')}</th><td>ja</td><td>ja</td><td>kostenlos</td><td>ältere, schwache Geräte</td></tr>
<tr><th scope="row">${L('/kodi-iptv/', 'Kodi')}</th><td>ja</td><td>ja</td><td>kostenlos, Open Source</td><td>Mediacenter mit eigenen Dateien</td></tr>
<tr><th scope="row">${L('/vlc-iptv/', 'VLC')}</th><td>ja</td><td>ja</td><td>kostenlos</td><td>einzelne Links schnell testen</td></tr>
</tbody></table></div>
<p>Alle genannten Apps sind Angebote Dritter und enthalten keine Sender. Die Inhalte kommen von Ihrem IPTV-Zugang, den Sie in der App per Xtream Codes oder M3U-Link eintragen.</p>` },
      { id: 'smartphone', h: 'Bester IPTV-Player für das Android-Smartphone', html: `
<p>Auf dem Handy zählen eine Oberfläche für Touch-Bedienung, eine schnelle Suche und eine gute Mediathek-Ansicht für Filme und Serien. Hier liegt <strong>IPTV Smarters Pro</strong> vorn: Live-TV, Filme, Serien und Catch-up sind klar getrennt, und die App läuft auch auf Tablets gut. Wer es schlanker mag, nimmt <strong>XCIPTV</strong>. Für einzelne Links zwischendurch reicht ${L('/mx-player-iptv/', 'MX Player')} oder VLC. Tipps zum Datenverbrauch unterwegs: ${L('/iptv-android-smartphone/', 'IPTV auf dem Android-Smartphone')}.</p>` },
      { id: 'fernseher', h: 'Bester IPTV-Player für Android TV und Fire TV', html: `
<p>Am Fernseher steht der Programmführer im Mittelpunkt. <strong>TiviMate</strong> hat hier den Ruf des komfortabelsten Players: Zeitraster, schnelles Umschalten, mit Premium auch Aufnahmen und Catch-up. Wer nichts bezahlen möchte, ist mit <strong>XCIPTV</strong> gut bedient. <strong>OTT Navigator</strong> lohnt sich für alle, die Darstellung und Verhalten bis ins Detail anpassen wollen. Anleitungen: ${L('/tivimate-fire-tv-stick/', 'TiviMate auf dem Fire TV Stick')}, ${L('/iptv-smarters-pro-fire-tv-stick/', 'IPTV Smarters Pro auf dem Fire TV Stick')} und ${L('/iptv-android/', 'IPTV auf Android TV')}.</p>` },
      { id: 'kriterien', h: 'So wählen Sie den richtigen Player', html: `${ol([
  '<strong>Gerät festlegen:</strong> Handy, Tablet oder Fernseher? TV-Apps sind für die Fernbedienung gebaut, Handy-Apps für Touch.',
  '<strong>Login-Art prüfen:</strong> Fast alle hier genannten Apps unterstützen Xtream Codes, was Programmführer und Mediathek automatisch mitbringt. Mehr unter ' + L('/xtream-codes/', 'Xtream Codes') + '.',
  '<strong>Kosten verstehen:</strong> Premium-Versionen bezahlen Sie an den App-Entwickler. Sie ersetzen kein IPTV-Paket.',
  '<strong>Zwei Apps testen:</strong> Installieren Sie zwei Favoriten und vergleichen Sie Umschaltzeit und Programmführer mit Ihrem Zugang.',
  '<strong>Nur offizielle Quellen:</strong> Apps aus Google Play oder von der Website des Entwicklers installieren, keine „modifizierten“ Versionen.',
])}` },
      { id: 'probleme', h: 'Wenn der Player nicht rund läuft', html: `${fixes([
  ['Bild ruckelt', 'In den App-Einstellungen zwischen Hardware- und Software-Decoder wechseln und das Gerät per LAN verbinden.'],
  ['App in Google Play „nicht kompatibel“', 'Manche Apps sind nur für TV oder nur für Handy freigegeben. Eine andere App aus der Tabelle wählen.'],
  ['Programmführer leer', 'Bei M3U die EPG-Adresse eintragen; bei Xtream Codes den Programmführer in der App neu laden.'],
])}<p>Mit ${site.name} funktionieren alle Player, die Xtream Codes oder M3U unterstützen – testen Sie Ihren Favoriten ${L('/iptv-testen/', 'kostenlos')}${bonus ? `, im Jahrespaket ist zusätzlich ${L('/ibo-player/', bonus.bonusName)} inklusive` : ''}.</p>` },
    ],
    faq: [
      ['Welcher IPTV-Player ist der beste für Android?', 'Für den Fernseher TiviMate, für das Smartphone IPTV Smarters Pro, kostenlos und schlank XCIPTV. Die beste Wahl hängt vom Gerät ab.'],
      ['Gibt es einen guten kostenlosen IPTV-Player für Android?', 'Ja, zum Beispiel XCIPTV, Perfect Player, VLC und die Grundversionen von IPTV Smarters Pro und TiviMate.'],
      ['Läuft TiviMate auf dem Android-Handy?', 'TiviMate ist für Fernseher und TV-Boxen gebaut. Auf dem Smartphone nutzen Sie besser IPTV Smarters Pro oder XCIPTV.'],
      ['Brauche ich für jeden Player ein eigenes IPTV-Abo?', 'Nein. Ihr IPTV-Zugang funktioniert in jeder kompatiblen App. Premium-Versionen einzelner Apps sind davon unabhängig.'],
    ],
    related: ['/iptv-apps/', '/iptv-android/', '/tivimate/', '/iptv-smarters-pro-android/', '/xciptv/', '/ott-navigator/'],
    keywords: ['iptv player android', 'application iptv android', 'beste iptv player android', 'bester iptv player android', 'iptv app android', 'iptv player für android'],
  },

  // ── Internet providers ──────────────────────────────────────────────
  {
    path: '/iptv-telekom-vodafone/',
    hub: 'ratgeber',
    published: updated,
    updated,
    name: 'Fernsehen über Telekom, Vodafone & Co.',
    teaser: 'IPTV vom Internetanbieter oder per App? Telekom, Vodafone, 1&1 und o2 im Überblick.',
    icon: 'wifi',
    title: `Fernsehen über Telekom & Vodafone: IPTV | ${site.name}`,
    description: 'Fernsehen über Telekom, Vodafone, 1&1 oder o2: So funktioniert IPTV vom Internetanbieter und so unterscheidet es sich von IPTV per App. Jetzt vergleichen.',
    kicker: 'Ratgeber',
    h1: 'Fernsehen über Telekom, Vodafone, 1&1 und o2: IPTV vom Internetanbieter',
    lead: 'Fernsehen über die Telekom, Vodafone, 1&1 oder o2 ist für viele Haushalte der erste Kontakt mit IPTV: Das TV-Paket kommt zusammen mit dem Internetanschluss. Daneben gibt es IPTV-Dienste, die unabhängig vom Anschluss per App laufen. Dieser Ratgeber erklärt beide Wege, vergleicht Vertrag, Technik und Flexibilität und zeigt, worauf Sie bei Ihrem Anschluss achten sollten.',
    facts: [
      ['Anbieter-IPTV', 'TV-Paket zum Internetvertrag, oft mit eigenem Receiver'],
      ['IPTV per App', 'unabhängig vom Internetanbieter, auf vorhandenen Geräten'],
      ['Bandbreite', 'rund 10 Mbit/s für HD, 25 Mbit/s für 4K pro Gerät'],
      ['Seit Juli 2024', 'Kabel-TV darf nicht mehr über die Nebenkosten abgerechnet werden'],
    ],
    sources: [['Bundesnetzagentur: Breitbandmessung', 'https://breitbandmessung.de/'], ['Wikipedia: Internet Protocol Television', 'https://de.wikipedia.org/wiki/Internet_Protocol_Television']],
    sections: [
      { id: 'zwei-wege', h: 'Zwei Arten von IPTV: vom Internetanbieter oder per App', html: `
<p><strong>IPTV vom Internetanbieter</strong> (auch „Managed IPTV“) wird im Netz des Anbieters verteilt. Der Anbieter reserviert dafür Bandbreite und liefert das Signal oft per Multicast an einen eigenen Receiver oder seine App. Bekanntestes Beispiel ist MagentaTV der Telekom; auch Vodafone, 1&1 und o2 bieten TV-Pakete zu ihren Anschlüssen an.</p>
<p><strong>IPTV per App</strong> (auch „OTT“, Over the Top) läuft über jede normale Internetverbindung. Sie installieren eine App auf Fernseher, Stick oder Handy und melden sich mit Zugangsdaten an – unabhängig davon, wer Ihr Internet liefert. So funktioniert zum Beispiel ${site.name}. Die Grundlagen erklärt ${L('/was-ist-iptv/', 'Was ist IPTV?')}.</p>` },
      { id: 'vergleich', h: 'Anbieter-TV und IPTV-App im Vergleich', html: `
<div class="table-wrap" role="region" aria-labelledby="isp-tab" tabindex="0"><table class="table">
<caption id="isp-tab">TV vom Internetanbieter und IPTV per App (allgemeiner Vergleich, Stand: ${stand})</caption>
<thead><tr><th scope="col">Merkmal</th><th scope="col">TV vom Internetanbieter</th><th scope="col">IPTV per App</th></tr></thead>
<tbody>
<tr><th scope="row">Vertrag</th><td>meist an den Internetvertrag gekoppelt, oft mit Mindestlaufzeit</td><td>unabhängig vom Anschluss${month ? `, bei ${site.name} ab einem Monat` : ''}</td></tr>
<tr><th scope="row">Anbieterwechsel beim Internet</th><td>TV-Paket endet in der Regel mit</td><td>läuft weiter</td></tr>
<tr><th scope="row">Hardware</th><td>häufig eigener Receiver, teils Router-Vorgaben</td><td>vorhandene Geräte: Smart-TV, Stick, Handy, PC</td></tr>
<tr><th scope="row">Unterwegs und im Urlaub</th><td>je nach Paket eingeschränkt</td><td>überall mit Internet, je nach App</td></tr>
<tr><th scope="row">Bildstabilität</th><td>reservierte Bandbreite im eigenen Netz</td><td>abhängig von Leitung und WLAN – LAN-Kabel empfohlen</td></tr>
<tr><th scope="row">Verlängerung</th><td>meist automatisch nach Mindestlaufzeit</td><td>${site.name}: keine automatische Verlängerung</td></tr>
</tbody></table></div>
<p>Konkrete Preise, Senderpakete und Laufzeiten der Internetanbieter ändern sich häufig. Prüfen Sie diese direkt beim jeweiligen Anbieter.</p>` },
      { id: 'anbieter', h: 'Telekom, Vodafone, 1&1 und o2: was Sie wissen sollten', html: `
<ul>
  <li><strong>Telekom:</strong> MagentaTV ist das TV-Angebot der Telekom. Es lässt sich nicht nur am Telekom-Anschluss, sondern als App auch über andere Internetverbindungen nutzen; die Bedingungen nennt die Telekom.</li>
  <li><strong>Vodafone:</strong> Vodafone ist in vielen Regionen zugleich Kabelnetzbetreiber. Wer bisher Kabel-TV über die Nebenkosten bezahlt hat, steht seit Juli 2024 vor der Wahl zwischen eigenem Kabelvertrag, Vodafone-TV-Paket oder einer Alternative wie IPTV per App.</li>
  <li><strong>1&1:</strong> 1&1 bietet TV-Pakete als Zusatz zum Internetvertrag an. Achten Sie bei der Buchung darauf, ob ein eigener Receiver nötig ist und wie lange das Paket läuft.</li>
  <li><strong>o2:</strong> o2 bietet ebenfalls ein TV-Angebot zu seinen Anschlüssen. Wie bei allen Anbietern gilt: Laufzeit und Kündigungsfristen vor dem Abschluss prüfen.</li>
</ul>
<p>Für IPTV per App spielt es keine Rolle, welchen dieser Anbieter Sie für Ihr Internet nutzen. Entscheidend ist die tatsächlich ankommende Bandbreite – und ein stabiles Heimnetz.</p>` },
      { id: 'leitung', h: 'Reicht mein Internetanschluss für IPTV?', html: `
<p>Als Richtwert empfehlen wir rund <strong>10 Mbit/s für HD</strong> und <strong>25 Mbit/s für ${L('/iptv-4k/', '4K')}</strong> pro gleichzeitig genutztem Gerät. Ein DSL-Anschluss mit 50 Mbit/s reicht damit für mehrere Fernseher, Kabel und Glasfaser ohnehin. Ihre tatsächliche Geschwindigkeit messen Sie neutral mit der ${'<a href="https://breitbandmessung.de/" rel="noopener" target="_blank">Breitbandmessung der Bundesnetzagentur</a>'}.</p>
<p>Häufiger als die Leitung bremst das WLAN: dicke Wände, ein Router im Flur, viele Nachbarnetze. Verbinden Sie den Fernseher per LAN-Kabel oder nutzen Sie ein Mesh-System oder Powerline-Adapter. Mehr Tipps: ${L('/iptv-probleme/', 'IPTV ruckelt – was tun?')}</p>` },
      { id: 'kombinieren', h: 'Anbieter-TV kündigen oder ergänzen?', html: `
<p>Viele Haushalte kombinieren: Das Internet bleibt beim gewohnten Anbieter, Fernsehen kommt per App. Andere nutzen das TV-Paket des Anbieters im Wohnzimmer und IPTV auf Zweitgeräten wie dem Fernseher im Schlafzimmer oder dem Tablet. Mit ${site.name} entscheiden Sie selbst, auf wie vielen Geräten Sie gleichzeitig schauen – 1 bis ${maxDevices}. Probieren Sie es ${L('/iptv-testen/', 'kostenlos aus')}, bevor Sie einen bestehenden TV-Vertrag kündigen. Allgemeines zur Lage in Deutschland: ${L('/iptv-deutschland/', 'IPTV in Deutschland')}.</p>` },
    ],
    faq: [
      ['Was bedeutet Fernsehen über die Telekom?', 'Die Telekom bietet mit MagentaTV ein eigenes TV-Angebot an, das über den Internetanschluss läuft. Das ist eine Form von IPTV.'],
      ['Brauche ich für IPTV per App einen bestimmten Internetanbieter?', 'Nein. IPTV per App funktioniert mit jedem Internetanschluss, ob Telekom, Vodafone, 1&1, o2 oder ein regionaler Anbieter.'],
      ['Wie viel Bandbreite brauche ich für IPTV?', 'Als Richtwert rund 10 Mbit/s für HD und 25 Mbit/s für 4K pro gleichzeitig genutztem Gerät.'],
      ['Kann ich IPTV nutzen, wenn ich Kabel-TV über Vodafone hatte?', 'Ja. Seit dem Ende des Nebenkostenprivilegs im Juli 2024 entscheiden Mieter selbst über ihren TV-Empfang; IPTV per App ist eine der Möglichkeiten.'],
      ['Verlängert sich IPTV Genuss wie ein Anbieter-Vertrag?', 'Nein. Sie zahlen einmalig für einen Monat oder ein Jahr, ohne automatische Verlängerung.'],
    ],
    related: ['/iptv-deutschland/', '/was-ist-iptv/', '/iptv-kaufen/', '/iptv-testen/', '/iptv-probleme/', '/iptv-regionen/'],
    keywords: ['fernsehen über telekom', 'television and internet', 'telekom ip tv', 'magenta tv iptv', 'magenta iptv', 'vodafone ip tv', 'vodafone iptv', 'iptv vodafone', '1&1 tv pakete', 'o2 iptv'],
  },
];
