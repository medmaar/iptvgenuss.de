// Deeper sections and FAQs added to existing pages in the November 2026
// keyword pass. Merged into the page data in index.mjs: `sections` are
// inserted before the section named in `before` (or appended), `faq` is
// appended, and `keywords.add` / `keywords.remove` adjust the cluster.
// Same rules as the pages themselves: facts only, prices from site.mjs,
// no channel or brand claims, hedge third-party apps.
import { site, plans, devicePrices, euro } from '../site.mjs';
import { L, ol, stand } from './util.mjs';
import { offerSchema } from './guides-more.mjs';

const paid = plans.filter((p) => !p.trial);
const month = paid.find((p) => p.months === 1);
const year = paid.find((p) => p.months === 12);
const perMonth = (p) => euro(Math.round((p.price / p.months) * 100) / 100);
const maxDevices = Math.max(...Object.keys(devicePrices).map(Number));
const yesNo = (ok) => (ok ? 'Ja' : 'Nein');

export default {

  '/was-ist-iptv/': {
    sections: [
      { id: 'begriffe', before: 'streaming', h: 'IP-TV, IP Television, IPTV-Fernsehen: ein Begriff, viele Schreibweisen', html: `
<p>Ob „IPTV“, „IP-TV“, „IP Television“ oder „IPTV Television“: Gemeint ist immer dasselbe – Fernsehen, das als Datenstrom über das Internetprotokoll (IP) kommt. Auf Englisch fragen viele „What is Internet Protocol Television?“, in anderen europäischen Sprachen heißt es etwa „IP televizija“. Technisch unterscheidet man zwei Varianten:</p>
<div class="table-wrap" role="region" aria-labelledby="varianten-tab" tabindex="0"><table class="table">
<caption id="varianten-tab">Zwei technische Varianten von IP-Fernsehen</caption>
<thead><tr><th scope="col"><span class="sr-only">Merkmal</span></th><th scope="col">IPTV im Netz des Internetanbieters</th><th scope="col">IPTV über das offene Internet (OTT)</th></tr></thead>
<tbody>
<tr><th scope="row">Übertragung</th><td>Im eigenen Netz des Anbieters, oft per Multicast</td><td>Über das öffentliche Internet, per Unicast</td></tr>
<tr><th scope="row">Empfang</th><td>Nur am Anschluss dieses Anbieters</td><td>An jedem Internetanschluss</td></tr>
<tr><th scope="row">Gerät</th><td>Meist Receiver des Anbieters</td><td>App auf Smart-TV, Stick, Handy, PC</td></tr>
<tr><th scope="row">Beispiel</th><td>TV-Produkte großer Internetanbieter</td><td>App-basiertes IPTV wie ${site.name}</td></tr>
</tbody></table></div>
<p>Mehr zu beiden Formen in Deutschland lesen Sie unter ${L('/iptv-deutschland/', 'IPTV in Deutschland')}.</p>` },
      { id: 'starten', h: 'So starten Sie mit IPTV in vier Schritten', html: ol([
        `Prüfen Sie Ihre Leitung: rund 10 Mbit/s pro HD-Stream genügen.`,
        `Wählen Sie Ihr Gerät – Übersicht unter ${L('/iptv-geraete/', 'IPTV-Geräte')}.`,
        `Installieren Sie eine passende App – Vergleich unter ${L('/iptv-apps/', 'IPTV-Apps')}.`,
        `Fordern Sie einen ${L('/iptv-testen/', 'kostenlosen Test')} an und melden Sie sich mit den Zugangsdaten an.`,
      ]) },
    ],
    faq: [
      ['Was ist der Unterschied zwischen IPTV und IP-TV?', 'Keiner. Beides ist eine Schreibweise für Internet Protocol Television, also Fernsehen über das Internetprotokoll.'],
      ['Was bedeutet OTT bei IPTV?', 'OTT steht für „Over the Top“: Das Programm kommt über das offene Internet und funktioniert an jedem Anschluss – im Gegensatz zum IPTV, das nur im Netz eines bestimmten Internetanbieters läuft.'],
    ],
  },

  '/iptv-kaufen/': {
    schema: [offerSchema],
    sections: [
      { id: 'begriffe', before: 'ablauf', h: 'IPTV-Line, Account, Abo: die Begriffe erklärt', html: `
<p>Beim IPTV-Kauf begegnen Ihnen viele, oft englische Begriffe. Gemeint ist fast immer dasselbe: Ihr persönlicher Zugang.</p>
<div class="table-wrap" role="region" aria-labelledby="begriffe-tab" tabindex="0"><table class="table">
<caption id="begriffe-tab">IPTV-Begriffe beim Kauf</caption>
<thead><tr><th scope="col">Begriff</th><th scope="col">Bedeutung</th></tr></thead>
<tbody>
<tr><th scope="row">IPTV-Line / IPTV-Linie</th><td>Ein einzelner Zugang mit Benutzername, Passwort und Server-URL. „Lines“ in der Mehrzahl meint mehrere Zugänge.</td></tr>
<tr><th scope="row">IPTV-Account</th><td>Ebenfalls Ihr Zugang – inklusive Laufzeit und Zahl der gleichzeitigen Geräte.</td></tr>
<tr><th scope="row">IPTV-Abo / Subscription</th><td>Der Kauf eines Zugangs für eine feste Laufzeit. Bei ${site.name} ohne automatische Verlängerung.</td></tr>
<tr><th scope="row">IPTV Premium</th><td>Werbebegriff ohne feste Bedeutung. Achten Sie auf Leistungen, Preis und Laufzeit statt auf das Etikett.</td></tr>
<tr><th scope="row">M3U kaufen</th><td>Den Zugang als ${L('/m3u-playlist/', 'M3U-Link')} nutzen. Bei uns erhalten Sie M3U und ${L('/xtream-codes/', 'Xtream Codes')} zusammen.</td></tr>
<tr><th scope="row">Buy IPTV, IPTV Shop, Plans, Packages</th><td>Englische Begriffe für IPTV kaufen, Online-Bestellung, Tarife und Pakete. „IPTV subscribe“ meint ein Abo abschließen, „IPTV service“ oder „My IPTV“ den Dienst bzw. das eigene Kundenkonto.</td></tr>
<tr><th scope="row">IPTV 12 Months</th><td>Englisch für das Jahrespaket – bei uns „1 Jahr“.</td></tr>
<tr><th scope="row">Testline</th><td>Ein kostenloser, zeitlich begrenzter Zugang zum Ausprobieren – siehe ${L('/iptv-testen/', 'IPTV kostenlos testen')}.</td></tr>
</tbody></table></div>` },
      { id: 'angebote', before: 'ablauf', h: 'IPTV-Angebote: 1 Monat oder 12 Monate?', html: `
<p>Das Jahrespaket ist die günstigste Art, IPTV zu kaufen: ${year ? `${euro(year.price)} für 12 Monate entsprechen rund ${perMonth(year)} pro Monat` : ''}${month ? ` – gegenüber ${euro(month.price)} beim Monatspaket` : ''}. ${year?.bonus ? `Zusätzlich ist beim Jahrespaket das ${L('/ibo-player/', year.bonusName)}-Abo kostenlos dabei.` : ''} Das Monatspaket lohnt sich, wenn Sie flexibel bleiben oder IPTV nur für eine bestimmte Zeit nutzen möchten. Preise nach Geräteanzahl und alle Details: ${L('/iptv-12-monate/', 'IPTV 12 Monate')}.</p>
<p>Seien Sie skeptisch bei IPTV-Deals, Sale- oder Promotion-Angeboten mit sehr langen Laufzeiten zum Spottpreis oder bei „Lifetime“-Zugängen: Dauerhafte Leistung zu einem Einmalpreis ist wirtschaftlich nicht darstellbar. Mehr Warnzeichen unter ${L('/iptv-anbieter/', 'IPTV-Anbieter wählen')}.</p>` },
    ],
    faq: [
      ['Was ist eine IPTV-Line?', 'Ein einzelner IPTV-Zugang mit Benutzername, Passwort und Server-URL. Bei IPTV Genuss bekommen Sie zusätzlich einen M3U-Link.'],
      ['Lohnt sich ein IPTV-Abo für 12 Monate?', year && month ? `Wenn Sie IPTV dauerhaft nutzen, ja: Das Jahrespaket kostet umgerechnet rund ${perMonth(year)} pro Monat statt ${euro(month.price)}${year.bonus ? ' und enthält zusätzlich das IBO-Player-Pro-Abo' : ''}.` : 'Wenn Sie IPTV dauerhaft nutzen, ist das Jahrespaket umgerechnet günstiger.'],
      ['Kann ich eine M3U-Liste für ein Jahr kaufen?', 'Ja. Mit dem Jahrespaket erhalten Sie Ihren Zugang für 12 Monate – als M3U-Link und als Xtream-Codes-Daten.'],
      ['Ist IPTV Premium besser als normales IPTV?', '„Premium“ ist ein Werbebegriff ohne feste Bedeutung. Vergleichen Sie Leistungen, Preis, Laufzeit und Support – und testen Sie vor dem Kauf.'],
    ],
  },

  '/iptv-anbieter/': {
    sections: [
      { id: 'beste', before: 'legal', h: 'Wer ist der beste IPTV-Anbieter?', html: `
<p>Ob „bester IPTV-Anbieter“, „bestes IPTV“ oder auf Englisch „best IPTV provider“: Listen mit dem „besten IPTV“ oder einer „IPTV-Bestenliste“ sagen wenig, wenn nicht klar ist, wie bewertet wurde. Für Sie zählt, ob das Angebot auf <strong>Ihrem</strong> Gerät, über <strong>Ihre</strong> Leitung und zu <strong>Ihren</strong> Sehgewohnheiten passt. Ein fairer IPTV-Vergleich prüft deshalb:</p>
${ol([
  'Ist das Angebot rechtmäßig und nennt die Website ein vollständiges Impressum?',
  'Gibt es einen kostenlosen Test ohne Zahlungsdaten?',
  'Sind Preis, Laufzeit und Geräteanzahl klar genannt – ohne automatische Verlängerung?',
  'Funktioniert eine passende App auf Ihrem Gerät?',
  'Ist der Support erreichbar und hilft bei der Einrichtung?',
])}
<p>Ein reiner IPTV-Preisvergleich greift zu kurz: Ein günstiger Zugang, der abends ruckelt, ist teurer als ein fairer, der stabil läuft.</p>` },
      { id: 'warnzeichen', before: 'test', h: 'Lifetime-IPTV, Paysafecard & Co.: typische Warnzeichen', html: `
<ul>
  <li><strong>„Lifetime IPTV“ / IPTV Lifetime-Zugang:</strong> Ein Zugang auf Lebenszeit für einen Einmalpreis kann nicht dauerhaft finanziert werden. Solche Angebote verschwinden oft samt Geld. Warum wir stattdessen feste Laufzeiten anbieten, steht unter ${L('/iptv-12-monate/', 'IPTV 12 Monate')}.</li>
  <li><strong>Zahlung nur per Paysafecard, Gutscheinkarte oder Kryptowährung:</strong> Diese Zahlungswege lassen sich kaum zurückholen. Seriöse Anbieter nennen nachvollziehbare Zahlungswege und ein Impressum.</li>
  <li><strong>IPTV-Websites ohne Impressum:</strong> Wer nicht sagt, wer er ist, ist bei Problemen nicht greifbar.</li>
  <li><strong>Versprechen wie „alle Sender der Welt“ oder „8K“:</strong> siehe ${L('/iptv-4k/', 'IPTV in 4K')} und ${L('/iptv-senderliste/', 'IPTV-Senderliste')}.</li>
</ul>` },
    ],
    faq: [
      ['Gibt es seriöses IPTV mit Lifetime-Zugang?', 'Wir halten Lifetime-Angebote für ein Warnzeichen: Dauerhafte Leistung zu einem Einmalpreis ist wirtschaftlich nicht möglich. Bei IPTV Genuss zahlen Sie einmalig für eine feste Laufzeit.'],
      ['Ist Zahlung per Paysafecard bei IPTV ein Warnzeichen?', 'Wenn sie der einzige Zahlungsweg ist, ja: Solche Zahlungen lassen sich kaum zurückholen. Achten Sie auf ein Impressum und nachvollziehbare Zahlungswege.'],
      ['Was taugen IPTV-Empfehlungen auf Reddit, im IPTV-Forum oder auf Trustpilot?', 'Sie zeigen Erfahrungen Einzelner, sind aber oft veraltet, gekauft oder beziehen sich auf andere Geräte. Verlassen Sie sich lieber auf einen eigenen kostenlosen Test.'],
      ['Was ist ein IPTV-Provider?', 'Provider ist das englische Wort für Anbieter. IPTV-Provider (Internet Protocol TV Providers) liefern die Zugangsdaten, mit denen Ihre App Senderliste und Streams lädt.'],
    ],
    keywords: { add: ['iptv lifetime', 'lifetime iptv', 'iptv paysafecard'] },
  },

  '/iptv-deutschland/': {
    sections: [
      { id: 'netzbetreiber', before: 'leitung', h: 'IPTV von Telekom, Vodafone, 1&amp;1 und O2', html: `
<p>Wer nach „Fernsehen über Telekom“, „Vodafone IPTV“ oder „1&amp;1 TV-Pakete“ sucht, meint das TV-Angebot seines Internetanbieters. Diese Produkte laufen über den eigenen Anschluss des Anbieters, meist mit dessen Receiver oder App, und sind häufig an den Internetvertrag gekoppelt. Inhalte, Preise und Bedingungen legt der jeweilige Anbieter fest. Den ausführlichen Vergleich finden Sie unter ${L('/iptv-telekom-vodafone/', 'Fernsehen über Telekom, Vodafone, 1&amp;1 und o2')}.</p>
<div class="table-wrap" role="region" aria-labelledby="netz-tab" tabindex="0"><table class="table">
<caption id="netz-tab">TV vom Internetanbieter oder App-IPTV – worauf es ankommt</caption>
<thead><tr><th scope="col">Frage</th><th scope="col">TV vom Internetanbieter</th><th scope="col">App-IPTV wie ${site.name}</th></tr></thead>
<tbody>
<tr><th scope="row">Anbieterwechsel beim Internet</th><td>TV-Paket muss meist mitwechseln</td><td>Bleibt unverändert</td></tr>
<tr><th scope="row">Television and Internet im Bündel</th><td>Ja, oft als Paket</td><td>Nein, unabhängig vom Internetvertrag</td></tr>
<tr><th scope="row">Laufzeit</th><td>Vertrag des Internetanbieters</td><td>${paid.map((p) => p.label).join(' oder ')}, keine automatische Verlängerung</td></tr>
<tr><th scope="row">Geräte</th><td>Receiver und Apps des Anbieters</td><td>Eigene Geräte mit ${L('/iptv-apps/', 'IPTV-App')}</td></tr>
</tbody></table></div>` },
      { id: 'german-iptv', before: 'rundfunkbeitrag', h: 'German IPTV: IPTV auf Deutsch – auch für Expats', html: `
<p>Viele suchen auf Englisch nach „German IPTV“ oder „IPTV Germany“ – etwa Expats und internationale Haushalte in Deutschland, Österreich und der Schweiz. ${site.name} ist ein deutschsprachiges Angebot: Website, Anleitungen und Support sind auf Deutsch, und die gängigen ${L('/iptv-apps/', 'IPTV-Apps')} lassen sich auf Deutsch oder Englisch bedienen. Was enthalten ist, sehen Sie bei den ${L('/#preise', 'Paketen')}.</p>` },
    ],
    faq: [
      ['Ist MagentaTV IPTV?', 'Ja, das TV-Angebot der Telekom wird als IPTV über deren Anschluss übertragen. Es ist an den Telekom-Anschluss gebunden, während App-IPTV wie bei uns an jedem Anschluss funktioniert.'],
      ['Kann ich IPTV Genuss mit einem Vodafone-, O2- oder 1&1-Anschluss nutzen?', 'Ja. App-basiertes IPTV funktioniert unabhängig vom Internetanbieter, solange die Leitung schnell und stabil genug ist.'],
    ],
    keywords: { remove: ['iptv fernseher'] },
  },

  '/iptv-4k/': {
    sections: [
      { id: 'hardware', before: '8k', h: 'IPTV-Box und Receiver für 4K', html: `
<p>Wer eine IPTV-Box oder einen IPTV-Receiver für 4K sucht, sollte auf drei Angaben im Datenblatt achten: <strong>HEVC/H.265-Decoder</strong>, <strong>HDMI 2.0 mit HDCP 2.2</strong> und einen <strong>LAN-Anschluss</strong>. Google-zertifizierte Android-TV-Boxen, die Nvidia Shield TV, Apple TV 4K und der Google TV Streamer erfüllen das. Vergleich und Kaufkriterien unter ${L('/iptv-box/', 'IPTV-Box und Receiver')}.</p>
<p>„IPTV Premium 4K“ ist dagegen nur ein Werbebegriff. Ob ein Programm in 4K läuft, hängt vom jeweiligen Inhalt ab – nicht vom Namen des Pakets. Ob 4K auf Ihrem Gerät flüssig läuft, zeigt am besten ein ${L('/iptv-testen/', 'kostenloser Test')}.</p>` },
    ],
    faq: [
      ['Welche IPTV-Box eignet sich für 4K?', 'Eine Box mit HEVC/H.265, HDMI 2.0 mit HDCP 2.2 und LAN-Anschluss, etwa eine Google-zertifizierte Android-TV-Box, die Nvidia Shield TV oder ein Apple TV 4K.'],
    ],
  },

  '/iptv-probleme/': {
    sections: [
      { id: 'wlan', before: 'senderliste', h: 'IPTV-Box im WLAN (WiFi): so wird die Verbindung stabil', html: `
<ul>
  <li><strong>5 GHz statt 2,4 GHz:</strong> schneller und weniger gestört, aber mit geringerer Reichweite.</li>
  <li><strong>Mesh oder Repeater:</strong> Liegt der Router weit entfernt, verbessert ein Mesh-Punkt in Fernsehnähe die Verbindung.</li>
  <li><strong>Powerline:</strong> Adapter für die Steckdose bringen das Netz per Stromleitung zur Box, wenn kein LAN-Kabel möglich ist.</li>
  <li><strong>Kanal wechseln:</strong> Viele Router wählen den WLAN-Kanal automatisch; ein Neustart des Routers hilft oft schon.</li>
</ul>` },
    ],
    faq: [
      ['Wie erreiche ich den IPTV-Kundenservice (Customer Service) von IPTV Genuss?', `Über das <a href="/#kontakt">Kontaktformular</a> oder per E-Mail an ${site.email}. Unser Support hilft Ihnen auf Deutsch.`],
      ['Hilft der IPTV Smarters Customer Service bei Senderproblemen?', 'Nein. IPTV Smarters ist nur der Player. Bei Problemen mit Sendern, Login oder Programmführer hilft Ihr IPTV-Anbieter – bei uns der deutsche Support.'],
    ],
    keywords: { remove: ['iptv checker', 'iptv checker online', 'iptv tester', 'iptv server', 'iptv servers'] },
  },

  '/m3u-playlist/': {
    sections: [
      { id: 'testen', before: 'gratis', h: 'M3U-Liste online öffnen und testen', html: `
<p>Ob Ihre M3U-Liste funktioniert, prüfen Sie am einfachsten mit ${L('/vlc-iptv/', 'VLC')}: <em>Medien › Netzwerkstream öffnen</em>, Link einfügen, abspielen. Erscheint die Liste in der Wiedergabeliste und startet ein Sender, ist der Link in Ordnung. Online-Dienste, die M3U-Listen im Browser „testen“, erhalten dabei Ihren kompletten Zugang – davon raten wir ab, siehe ${L('/iptv-server/', 'IPTV-Server und Checker')}.</p>
<p>Noch kein Zugang? Mit einem ${L('/iptv-testen/', 'kostenlosen Test')} erhalten Sie einen M3U-Link, den Sie in Ruhe in Ihrer App ausprobieren können.</p>` },
      { id: 'deutsch', before: 'gratis', h: 'IPTV-Playlist auf Deutsch: Sender gruppieren', html: `
<p>Eine IPTV-Playlist ist nach Gruppen sortiert (<code>group-title</code>). Viele Apps zeigen diese Gruppen als Ordner, die Sie ausblenden oder zu Favoriten zusammenfassen können. So bauen Sie sich eine übersichtliche Liste mit deutschsprachigen Sendern, ohne die Playlist selbst zu bearbeiten. Wie das in TiviMate, Smarters und Co. geht, zeigt ${L('/iptv-senderliste/', 'IPTV-Senderliste und EPG')}.</p>` },
    ],
    faq: [
      ['Wie teste ich eine M3U-Liste?', 'Öffnen Sie den Link in VLC über Medien › Netzwerkstream öffnen. Startet ein Sender, funktioniert die Liste. Online-Tester raten wir ab.'],
      ['Wie schreibt man M3U richtig – M3U, MU3 oder M.M3U?', 'Richtig ist M3U (bzw. M3U8 für UTF-8). Schreibweisen wie „MU3“ oder „m.m3u“ sind Tippfehler und meinen dasselbe Format.'],
    ],
  },

  '/xtream-codes/': {
    keywords: { remove: ['iptvportal'] },
    faq: [
      ['Was bedeutet „IPTV Settings“ in meiner App?', 'In den Einstellungen tragen Sie die Xtream-Codes-Daten ein oder ändern sie: Server-URL, Benutzername und Passwort. Dort legen Sie meist auch Player, Programmführer und Kindersicherung fest.'],
    ],
  },

  '/iptv-apps/': {
    sections: [
      { id: 'weitere-apps', before: 'ibo-player', h: 'Weitere IPTV-Player im Detail', html: `
<div class="table-wrap" role="region" aria-labelledby="mehr-apps-tab" tabindex="0"><table class="table">
<caption id="mehr-apps-tab">Weitere IPTV-Player (Stand: ${stand}, ohne Gewähr)</caption>
<thead><tr><th scope="col">App</th><th scope="col">Geräte</th><th scope="col">Anmeldung</th></tr></thead>
<tbody>
<tr><th scope="row">${L('/ibo-player/', 'IBO Player / Pro')}</th><td>Samsung, LG, Android, Fire TV, Apple</td><td>MAC-Adresse + M3U/Xtream</td></tr>
<tr><th scope="row">${L('/iptvx/', 'IPTVX')}</th><td>Apple TV, iPhone, iPad, Mac</td><td>Xtream Codes, M3U</td></tr>
<tr><th scope="row">${L('/implayer/', 'iMPlayer')}</th><td>Android TV, Fire TV, Android</td><td>Xtream Codes, M3U</td></tr>
<tr><th scope="row">${L('/gse-smart-iptv/', 'GSE Smart IPTV')}</th><td>iPhone, iPad, Apple TV, Android</td><td>Xtream Codes, M3U</td></tr>
<tr><th scope="row">${L('/duplecast/', 'Duplecast')}</th><td>Smart-TVs, Android TV, Fire TV</td><td>Geräte-ID + M3U/Xtream</td></tr>
<tr><th scope="row">${L('/ott-navigator/', 'OTT Navigator')}</th><td>Android, Android TV, Fire TV</td><td>Xtream Codes, M3U, Portal</td></tr>
<tr><th scope="row">${L('/perfect-player/', 'Perfect Player')}</th><td>Android, Windows</td><td>M3U + EPG</td></tr>
<tr><th scope="row">${L('/plex-jellyfin-iptv/', 'Plex &amp; Jellyfin')}</th><td>Heimserver + alle Geräte</td><td>M3U + EPG</td></tr>
</tbody></table></div>` },
      { id: 'begriffe', before: 'sicherheit', h: 'IPTV-App, IPTV-Player, Streamplayer: was ist was?', html: `
<p>„IPTV-App“, „IPTV-Player“, „IPTV Streamplayer“ oder „Smart Player TV“ – gemeint ist immer ein Programm, das Ihre Zugangsdaten entgegennimmt und die Streams abspielt. Apps mit „Pro“ im Namen (etwa „IPTV Pro“) sind meist kostenpflichtige Varianten ohne Werbung. Auch ein <strong>IPTV-Web-Player im Browser</strong> ist nur ein Player; er funktioniert lediglich, wenn der Anbieter ihn bereitstellt, und ist am Fernseher selten bequem – siehe ${L('/iptv-pc/', 'IPTV am PC')}.</p>
<p>Apps installieren Sie aus dem Store Ihres Geräts. Auf dem Fire TV Stick hilft notfalls die ${L('/iptv-downloader/', 'Downloader-App')}.</p>` },
    ],
    faq: [
      ['Welcher IPTV-Player ist der beste für den Fire TV Stick – kostenlos und auf Deutsch?', 'Kostenlos und mit deutscher Oberfläche nutzbar sind zum Beispiel XCIPTV und IPTV Smarters Pro. TiviMate bietet den komfortabelsten Programmführer, Premium kostet aber eine Gebühr.'],
      ['Kann ich IPTV im Webbrowser schauen?', 'Nur, wenn ein Web-Player bereitsteht. Bequemer und stabiler ist eine App auf Smart-TV, Stick, Handy oder PC.'],
    ],
    keywords: { remove: ['implayer', 'iptv ibo', 'gseiptv', 'ott navigator premium', 'iptvx', 'iptvx android', 'iptvx apple tv', 'perfect iptv', 'duplecast', 'duplecast iptv', 'iptv downloader', 'iptv dvr', 'iptv vod', 'iptv series'] },
  },

  '/iptv-smarters-pro/': {
    sections: [
      { id: 'plattformen', before: 'einrichten', h: 'IPTV Smarters Pro auf jedem Gerät', html: `
<div class="table-wrap" role="region" aria-labelledby="smarters-tab" tabindex="0"><table class="table">
<caption id="smarters-tab">IPTV Smarters Pro nach Gerät (Stand: ${stand}, ohne Gewähr)</caption>
<thead><tr><th scope="col">Gerät</th><th scope="col">Verfügbar?</th><th scope="col">So kommen Sie an die App</th></tr></thead>
<tbody>
<tr><th scope="row">Fire TV Stick (Firestick)</th><td>Ja, mit Fire OS</td><td>Amazon Appstore, sonst ${L('/iptv-downloader/', 'Downloader-App')}</td></tr>
<tr><th scope="row">Android-Handy, Android TV</th><td>Ja</td><td>Google Play Store</td></tr>
<tr><th scope="row">iPhone, iPad</th><td>Ja</td><td>App Store (teils als „Smarters Player Lite“)</td></tr>
<tr><th scope="row">Apple TV</th><td>Ja</td><td>App Store auf dem Apple TV</td></tr>
<tr><th scope="row">Windows-PC, Laptop</th><td>Ja</td><td>Download von der offiziellen Website</td></tr>
<tr><th scope="row">Mac, MacBook</th><td>Ja</td><td>Offizielle Website bzw. App Store</td></tr>
<tr><th scope="row">Samsung TV, LG TV</th><td>Wechselnd</td><td>TV-Store prüfen, sonst Stick am HDMI</td></tr>
<tr><th scope="row">Chromecast mit Google TV</th><td>Ja</td><td>Google Play Store, siehe ${L('/iptv-chromecast/', 'Chromecast')}</td></tr>
<tr><th scope="row">Roku</th><td>Nein</td><td>Alternative: ${L('/iptv-stick/', 'anderer Streaming-Stick')}</td></tr>
</tbody></table></div>` },
      { id: 'kosten', before: 'fehler', h: 'Smarters Lite, Premium und Abo: was kostet IPTV Smarters?', html: `
<p>Die App IPTV Smarters Pro ist in der Grundversion kostenlos. Je nach Plattform bietet der Entwickler kostenpflichtige Zusatzfunktionen an – etwa werbefreie Nutzung oder zusätzliche Bereiche. Wichtig ist die Unterscheidung:</p>
<ul>
  <li><strong>App-Abo (Smarters Premium / Subscription):</strong> bezahlen Sie, wenn überhaupt, an den App-Entwickler – es enthält keine Sender.</li>
  <li><strong>IPTV-Abo:</strong> Ihr Zugang mit Inhalten, den Sie bei einem IPTV-Anbieter kaufen – etwa unter ${L('/iptv-kaufen/', 'IPTV kaufen')}.</li>
  <li><strong>Smarters Lite:</strong> die schlankere Variante, unter der die App teils im App Store angeboten wird. Die Anmeldung funktioniert gleich.</li>
</ul>
<p>Erfahrungsberichte auf Reddit und in Foren drehen sich meist um die Inhalte des jeweiligen Anbieters, nicht um die App. Für Fragen zu Login und Sendern ist Ihr IPTV-Anbieter zuständig – bei uns der ${L('/#kontakt', 'deutsche Support')}.</p>` },
    ],
    faq: [
      ['Wie installiere ich IPTV Smarters Pro auf dem Firestick?', 'Suchen Sie im Amazon Appstore nach der App. Ist sie nicht gelistet, installieren Sie sie mit der Downloader-App von der offiziellen Website des Entwicklers – Schritt für Schritt unter „Downloader-App“.'],
      ['Gibt es IPTV Smarters Pro für Roku?', 'Nein, für Roku gibt es keine offizielle Version. Nutzen Sie einen Fire TV Stick oder ein Gerät mit Google TV.'],
      ['Kann ich IPTV Smarters online im Browser nutzen?', 'Nur, wenn Ihr IPTV-Anbieter einen Web-Player bereitstellt. Bequemer ist die App für Windows, Mac oder Ihr Fernsehgerät.'],
      ['Ist IPTV Smarters free, also kostenlos?', 'Die Grundversion der App ist kostenlos. Inhalte gibt es nur mit einem IPTV-Zugang – zum Ausprobieren mit unserem kostenlosen Test.'],
    ],
    keywords: { remove: ['iptv smarters downloader', 'iptv smarters chromecast'] },
  },

  '/tivimate/': {
    sections: [
      { id: 'plattformen', before: 'einrichten', h: 'TiviMate nach Gerät: wo es läuft und wo nicht', html: `
<div class="table-wrap" role="region" aria-labelledby="tivimate-tab" tabindex="0"><table class="table">
<caption id="tivimate-tab">TiviMate nach Gerät (Stand: ${stand}, ohne Gewähr)</caption>
<thead><tr><th scope="col">Gerät</th><th scope="col">TiviMate verfügbar?</th><th scope="col">Hinweis</th></tr></thead>
<tbody>
<tr><th scope="row">Fire TV Stick / Firestick (Fire OS)</th><td>${yesNo(true)}</td><td>TiviMate on Firestick: Appstore oder ${L('/iptv-downloader/', 'Downloader')}</td></tr>
<tr><th scope="row">Fire TV mit Vega OS</th><td>${yesNo(false)}</td><td>Keine Android-Apps</td></tr>
<tr><th scope="row">Android TV, Google TV, Nvidia Shield</th><td>${yesNo(true)}</td><td>Google Play Store</td></tr>
<tr><th scope="row">Chromecast mit Google TV</th><td>${yesNo(true)}</td><td>Siehe ${L('/iptv-chromecast/', 'Chromecast')}</td></tr>
<tr><th scope="row">Samsung TV, LG TV</th><td>${yesNo(false)}</td><td>Alternative: ${L('/ibo-player/', 'IBO Player')}</td></tr>
<tr><th scope="row">Apple TV, iPhone</th><td>${yesNo(false)}</td><td>Alternative: ${L('/iptvx/', 'IPTVX')}</td></tr>
<tr><th scope="row">Windows-PC, Mac</th><td>${yesNo(false)}</td><td>Alternative: ${L('/vlc-iptv/', 'VLC')}, ${L('/kodi-iptv/', 'Kodi')}</td></tr>
</tbody></table></div>` },
      { id: 'konto', before: 'geraete', h: 'TiviMate-Account, Preis und Companion-App', html: `
<ul>
  <li><strong>TiviMate-Account:</strong> Ihr Premium-Konto beim Entwickler. Es hat nichts mit Ihrem IPTV-Zugang zu tun.</li>
  <li><strong>TiviMate-Premium-Preis und Subscription:</strong> Premium gibt es als Abo (Subscription) oder Einmalkauf; die aktuellen Preise nennt der Entwickler in der Companion-App bzw. auf seiner Website.</li>
  <li><strong>Companion-App:</strong> gibt es für Android-Smartphones. Wer nur ein iPhone hat, findet in TiviMate unter „Premium“ die Kaufwege, die der Entwickler aktuell anbietet.</li>
  <li><strong>„TiviMate Pro“:</strong> umgangssprachlich für TiviMate Premium – eine eigene Pro-App gibt es nicht.</li>
</ul>
<p>Diskussionen auf Reddit drehen sich oft um Premium-Funktionen und Einstellungen. Bei Fragen zu Sendern, Login oder Programmführer hilft Ihr IPTV-Anbieter.</p>` },
    ],
    faq: [
      ['Was kostet TiviMate Premium?', 'Der Entwickler bietet Premium als Abo oder Einmalkauf an. Die aktuellen Preise sehen Sie in der Companion-App oder auf seiner Website.'],
      ['Gibt es TiviMate für PC oder Mac?', 'Nein. TiviMate gibt es nur für Android-basierte TV-Geräte. Am PC und Mac eignen sich VLC oder Kodi.'],
      ['Kann ich TiviMate Premium mit dem iPhone kaufen?', 'Die Companion-App ist für Android gedacht. Welche weiteren Kaufwege es gibt, zeigt TiviMate unter „Premium“ an.'],
      ['Läuft TiviMate auf dem Chromecast?', 'Auf Chromecast mit Google TV und dem Google TV Streamer ja, auf dem klassischen Chromecast ohne Fernbedienung nicht.'],
    ],
    keywords: { remove: ['tivimate chromecast'] },
  },

  '/smart-iptv/': {
    sections: [
      { id: 'plattformen', before: 'aktivierung', h: 'Smart IPTV herunterladen: welche Geräte?', html: `
<div class="table-wrap" role="region" aria-labelledby="siptv-tab" tabindex="0"><table class="table">
<caption id="siptv-tab">Smart IPTV nach Gerät (Stand: ${stand}, ohne Gewähr)</caption>
<thead><tr><th scope="col">Gerät</th><th scope="col">Hinweis</th></tr></thead>
<tbody>
<tr><th scope="row">LG (webOS)</th><td>Im LG Content Store, je nach Modell</td></tr>
<tr><th scope="row">Samsung (Tizen)</th><td>Auf vielen neueren Modellen nicht mehr im Store</td></tr>
<tr><th scope="row">Android TV, Sony, Philips</th><td>Android-Version des Anbieters</td></tr>
<tr><th scope="row">Fire TV Stick (Firestick)</th><td>Android-Version, Installation per ${L('/iptv-downloader/', 'Downloader-App')}</td></tr>
<tr><th scope="row">Hisense VIDAA</th><td>Verfügbarkeit modellabhängig, sonst Stick am HDMI</td></tr>
<tr><th scope="row">Mac, Windows</th><td>Keine eigene Version – nutzen Sie ${L('/vlc-iptv/', 'VLC')}</td></tr>
</tbody></table></div>
<p>Laden Sie Smart IPTV nur aus dem Store Ihres Fernsehers oder von der offiziellen Website des Anbieters (siptv.app) herunter.</p>` },
      { id: 'my-list', before: 'samsung', h: 'SIPTV „My List“: Playlist hochladen und verwalten', html: `
<p>Auf der Seite <strong>siptv.app/mylist</strong> verknüpfen Sie Ihren M3U-Link mit der MAC-Adresse der App. Sie können dort Playlists hinzufügen, ersetzen und – wichtig bei mehreren Listen – die alte Liste löschen, bevor Sie eine neue hochladen. Wählen Sie bei der Option zum Speichern der Liste die Variante, die den Link regelmäßig neu lädt; dann bleiben Senderänderungen automatisch aktuell. Die komplette Anleitung mit allen Optionen und Fehlermeldungen: ${L('/smart-iptv-playlist-hochladen/', 'My SIPTV: Playlist hochladen')}.</p>` },
    ],
    faq: [
      ['Kann ich Smart IPTV kaufen, ohne zu testen?', 'Der App-Anbieter gewährt zuerst eine Testphase. Nutzen Sie sie zusammen mit unserem kostenlosen IPTV-Test, bevor Sie die App aktivieren.'],
      ['Gibt es Smart IPTV Pro oder Premium?', 'Smart IPTV wird einmalig pro Gerät aktiviert; nach unserem Stand gibt es keine separate Pro- oder Premium-Version. Apps mit ähnlichem Namen stammen meist von anderen Entwicklern.'],
      ['Läuft Smart IPTV auf Hisense, Sony oder Philips?', 'Auf Sony und vielen Philips-Modellen mit Android TV ja, über die Android-Version. Auf Hisense VIDAA hängt es vom Modell ab.'],
    ],
    keywords: { remove: ['smart iptv downloader'] },
  },

  '/ss-iptv/': {
    faq: [
      ['Ist SimpleIPTV dasselbe wie SS IPTV?', 'Ja. SS IPTV steht für Simple Smart IPTV; Schreibweisen wie „SimpleIPTV“ meinen dieselbe App.'],
      ['Wo lade ich meine SS-IPTV-Liste hoch?', 'Auf der offiziellen Website von SS IPTV im Bereich für Playlists – entweder als externer M3U-Link oder per Verbindungscode aus der App.'],
    ],
  },

  '/flix-iptv/': {
    faq: [
      ['Wie schreibt man Flix IPTV richtig?', 'Die App heißt „Flix IPTV“. Schreibweisen wie „FlixIPTV“ oder „Flix IP TV“ meinen dieselbe App.'],
    ],
  },

  '/set-iptv/': {
    faq: [
      ['Wie schreibt man Smart One IPTV?', 'Die App heißt „Smart One IPTV“; Schreibweisen wie „SmartOne IPTV“ meinen dieselbe App. Sie wird wie Set IPTV per MAC-Adresse eingerichtet.'],
    ],
  },

  '/xciptv/': {
    faq: [
      ['Läuft XCIPTV auf dem Firestick?', 'Ja, auf Fire-TV-Geräten mit Fire OS. Ist die App nicht im Appstore, installieren Sie sie über die Downloader-App von der Website des Entwicklers.'],
    ],
  },

  '/kodi-iptv/': {
    faq: [
      ['Was ist der Unterschied zwischen Kodi und XBMC?', 'XBMC war der frühere Name von Kodi (oft auch „Cody“ geschrieben). Heute heißt die Software Kodi; die IPTV-Einrichtung läuft über das Add-on „PVR IPTV Simple Client“.'],
      ['Wo finde ich deutschsprachige Hilfe zu Kodi?', 'In der deutschsprachigen Kodi-Community, etwa im Forum Kodinerds, und im offiziellen Kodi-Wiki. Nutzen Sie dort nur offizielle Add-ons.'],
      ['Kann ich mit Kodi Live-TV schauen?', 'Ja. Mit dem PVR IPTV Simple Client erscheint Ihre Senderliste unter „TV“ mit Programmführer.'],
    ],
    keywords: { remove: ['plex iptv', 'jellyfin iptv'] },
  },

  '/vlc-iptv/': {
    faq: [
      ['Wie öffne ich IPTV in VLC?', 'Unter Medien › Netzwerkstream öffnen den M3U-Link einfügen und auf „Wiedergabe“ klicken. Die Senderliste erscheint in der Wiedergabeliste.'],
    ],
  },

  '/stbemu/': {
    faq: [
      ['Wie schreibt man STB Emu Pro?', 'Die App heißt „STBEmu“, die kostenpflichtige Variante „STBEmu (Pro)“. „STB Emu Pro“ meint dieselbe App.'],
    ],
  },

  '/iptv-fire-tv-stick/': {
    faq: [
      ['Wie installiere ich IPTV auf dem Firestick?', 'App aus dem Amazon Appstore installieren oder – wenn sie dort fehlt – über die Downloader-App von der Entwickler-Website laden. Danach mit Ihren Zugangsdaten anmelden.'],
      ['Gibt es eine IPTV-Box von Amazon?', 'Amazon verkauft keine IPTV-Box, aber Fire-TV-Geräte wie den Fire TV Stick und den Fire TV Cube, auf denen IPTV-Apps laufen.'],
    ],
  },

  '/iptv-samsung-tv/': {
    sections: [
      { id: 'tizen', before: 'tipps', h: 'IPTV auf Samsung Tizen: das sollten Sie wissen', html: `
<p>Wer IPTV für Samsung TV sucht, sollte wissen: Tizen erlaubt nur Apps aus dem Samsung-Store; anders als bei Android lassen sich keine Apps von Websites installieren. Deshalb arbeiten fast alle IPTV-Apps für Samsung Smart TVs per MAC-Adresse: Sie tragen die Playlist am Handy ein, nicht am Fernseher. Für Kunden des Jahrespakets ist der ${L('/ibo-player/', 'IBO Player Pro')} eine gute Wahl, weil das App-Abo dort inklusive ist.</p>` },
    ],
    faq: [
      ['Welche IPTV-App empfehlen Sie für Samsung-Fernseher?', 'Für Kunden des Jahrespakets den IBO Player Pro, weil das App-Abo inklusive ist. Kostenlos ist SS IPTV, sofern für Ihr Modell verfügbar.'],
    ],
  },

  '/iptv-lg-tv/': {
    faq: [
      ['Welche IPTV-App empfehlen Sie für LG webOS – also IPTV for LG webOS?', 'Für Kunden des Jahrespakets den IBO Player Pro, weil das App-Abo inklusive ist. Kostenlos ist SS IPTV; beliebt ist auch Smart IPTV.'],
      ['Funktioniert IPTV auf älteren LG Smart TVs?', 'Auf älteren webOS-Versionen fehlen manche Apps. Ein Streaming-Stick am HDMI-Anschluss ist dann die einfachste Lösung.'],
    ],
  },

  '/iptv-smart-tv/': {
    sections: [
      { id: 'roku', before: 'einrichten', h: 'IPTV auf Roku TV und Hisense: die Details', html: `
<p><strong>Roku:</strong> Roku-Geräte erlauben nur Apps aus dem Roku-Store, und dort gibt es kaum Player für Xtream Codes oder M3U. Bekannte Apps wie IPTV Smarters Pro oder TiviMate gibt es für Roku nicht. Casten vom Handy funktioniert nur eingeschränkt.</p>
<p><strong>Hisense VIDAA und Toshiba:</strong> VIDAA hat einen eigenen App-Store mit kleiner Auswahl. Ob dort eine IPTV-App mit MAC-Adresse wie der ${L('/ibo-player/', 'IBO Player')} verfügbar ist, hängt von Modell und Region ab.</p>
<p>In beiden Fällen ist ein ${L('/iptv-fire-tv-stick/', 'Fire TV Stick')} oder ${L('/iptv-chromecast/', 'Google TV Streamer')} am HDMI-Anschluss die einfachste Lösung.</p>` },
    ],
    faq: [
      ['Wie bekomme ich IPTV auf einen Hisense-Fernseher?', 'Prüfen Sie im VIDAA-Store, ob eine IPTV-App mit MAC-Adresse verfügbar ist. Sonst nutzen Sie einen Streaming-Stick am HDMI-Anschluss.'],
    ],
    keywords: { remove: ['iptv google tv'] },
  },

  '/iptv-android/': {
    faq: [
      ['Welche IPTV-App ist die beste für Android TV?', 'TiviMate für den komfortabelsten Programmführer, IPTV Smarters Pro und XCIPTV als kostenlose Alternativen. Alle laufen auch auf Google TV.'],
    ],
    keywords: { add: ['iptv google tv'], remove: ['iptv chromecast', 'iptv smarters pro android tv', 'tivimate android tv'] },
  },

  '/iptv-apple-tv/': {
    faq: [
      ['Welche IPTV-App empfehlen Sie für iPhone und iPad?', 'IPTV Smarters Pro (teils als Smarters Player Lite), IPTVX und GSE Smart IPTV unterstützen Xtream Codes und M3U.'],
    ],
  },

  '/iptv-pc/': {
    faq: [
      ['Welcher IPTV-Player eignet sich für Windows?', 'VLC und Kodi sind kostenlos, IPTV Smarters Pro gibt es als Windows-Version, Perfect Player ebenfalls. Alle funktionieren auch auf dem Laptop.'],
    ],
  },

  '/iptv-box/': {
    sections: [
      { id: 'marktplatz', before: 'empfehlung', h: 'IPTV-Box von AliExpress oder Alibaba?', html: `
<p>Auf internationalen Marktplätzen wie AliExpress oder Alibaba gibt es Android-Boxen zu sehr niedrigen Preisen. Bevor Sie zugreifen, sollten Sie Folgendes bedenken:</p>
<ul>
  <li><strong>Keine Google-Zertifizierung:</strong> oft kein offizieller Play Store, keine Sicherheitsupdates.</li>
  <li><strong>CE-Kennzeichnung und Gewährleistung:</strong> fehlen häufig; Reklamationen sind mühsam.</li>
  <li><strong>Zoll und Einfuhrumsatzsteuer:</strong> können den Preis deutlich erhöhen.</li>
  <li><strong>Vorinstallierte Inhalte:</strong> Boxen mit „Sendern inklusive“ sind in der Regel rechtswidrig.</li>
</ul>
<p>Eine zertifizierte Box aus dem deutschen Handel oder ein ${L('/iptv-stick/', 'Streaming-Stick')} ist meist die bessere Wahl. Set-Top-Boxen mit eigenem IPTV-System wie die TVIP S-Box (etwa TVIP 605) nutzen Portal- oder M3U-Zugänge ähnlich wie eine ${L('/mag-box/', 'MAG-Box')}.</p>` },
    ],
    faq: [
      ['Was ist eine IPTV-Set-Top-Box?', 'Ein Zusatzgerät am Fernseher, auf dem eine IPTV-App oder ein Portal läuft – etwa eine Android-TV-Box, MAG, Formuler oder TVIP S-Box.'],
      ['Was kostet eine gute IPTV-Box?', 'Der IPTV-Box-Preis hängt von Leistung und Ausstattung ab: Zertifizierte Android-TV-Boxen und Streaming-Geräte gibt es im Handel in verschiedenen Preisklassen. Achten Sie mehr auf Google-Zertifizierung, HEVC und LAN als auf den Preis.'],
    ],
    keywords: { add: ['alibaba iptv', 'iptv aliexpress'] },
  },

  '/iptv-enigma2/': {
    faq: [
      ['Welche Enigma2-Receiver eignen sich für IPTV?', 'Grundsätzlich alle aktuellen Enigma2-Receiver, etwa von Gigablue, VU+ oder Dreambox. Auch Geräte wie Dreamlink T2 und T3 oder Edision PING werden für IPTV genutzt; je nach Modell mit Enigma2 oder eigener Oberfläche. Entscheidend sind ein aktuelles Image und genug Arbeitsspeicher.'],
    ],
  },

  '/iptv-geraete/': {
    faq: [
      ['Welcher Fernseher eignet sich für IPTV?', 'Fernseher mit Google TV oder Android TV bieten die größte App-Auswahl. Samsung und LG funktionieren mit MAC-basierten Apps. Ältere Geräte rüsten Sie mit einem Streaming-Stick nach.'],
    ],
    keywords: { remove: ['iptv receiver test'] },
  },
};
