// Ratgeber cluster: buying, choosing a provider, IPTV in Germany, 4K,
// troubleshooting, M3U and Xtream Codes. Facts only, no channel or brand
// claims; prices come from site.mjs.
import { site, plans, devicePrices, included, homeContent, euro } from '../site.mjs';
import { L, ol } from './util.mjs';

const paid = plans.filter((p) => !p.trial);
const trialPlan = plans.find((p) => p.trial);
const bonusPlan = paid.find((p) => p.bonus);
const terms = paid.map((p) => p.label).join(' oder ');
const maxDevices = Math.max(...Object.keys(devicePrices).map(Number));
const priceTable = `
<div class="table-wrap" role="region" aria-labelledby="preis-tab" tabindex="0"><table class="table">
<caption id="preis-tab">Gesamtpreise nach Laufzeit und Zahl gleichzeitig genutzter Geräte</caption>
<thead><tr><th scope="col">Geräte gleichzeitig</th>${paid.map((p) => `<th scope="col">${p.label}</th>`).join('')}</tr></thead>
<tbody>${Object.entries(devicePrices).map(([n, row]) => `<tr><th scope="row">${n} ${n === '1' ? 'Gerät' : 'Geräte'}</th>${paid.map((p) => `<td>${euro(row[p.id])}</td>`).join('')}</tr>`).join('')}</tbody>
</table></div>`;
const priceText = `${trialPlan ? 'Sie können zuerst kostenlos testen (ein Gerät). ' : ''}Danach wählen Sie ${terms} und zwischen 1 und ${maxDevices} gleichzeitig genutzten Geräten. ${homeContent.billing}`;

export default [

  {
    path: '/was-ist-iptv/',
    hub: 'ratgeber',
    name: 'Was ist IPTV?',
    teaser: 'Internet Protocol Television einfach erklärt – mit Vergleich zu Kabel und Satellit.',
    icon: 'info',
    title: `Was ist IPTV? Internet Protocol Television erklärt | ${site.name}`,
    description: 'Was ist IPTV (Internet Protocol Television) und wie funktioniert es? Unterschiede zu Kabel und Satellit, was Sie brauchen und wie Sie starten.',
    kicker: 'Ratgeber',
    h1: 'Was ist IPTV? Internet Protocol Television einfach erklärt',
    lead: 'IPTV steht für <em>Internet Protocol Television</em>: Fernsehen, das über Ihre Internetverbindung kommt statt über Satellit, Kabel oder Antenne. Sie schauen über eine App – auf Smart-TV, Streaming-Stick, Smartphone, Tablet oder Computer.',
    sections: [
      { id: 'funktion', h: 'So funktioniert IPTV', html: `
<p>Der Anbieter überträgt das Programm als Datenstrom über das Internet. Ihre IPTV-App meldet sich mit Ihren Zugangsdaten an, lädt die Senderliste und – sofern verfügbar – den elektronischen Programmführer (EPG). Wählen Sie einen Sender, spielt die App den passenden Datenstrom ab.</p>
<p>Zur Anmeldung gibt es zwei verbreitete Wege: das ${L('/xtream-codes/', 'Xtream-Codes-Login')} mit Benutzername, Passwort und Server-URL sowie die ${L('/m3u-playlist/', 'M3U-Playlist')}. Viele ${L('/iptv-apps/', 'IPTV-Apps')} unterstützen beides.</p>` },
      { id: 'vergleich', h: 'IPTV, Kabel und Satellit im Vergleich', html: `
<div class="table-wrap" role="region" aria-labelledby="vergleich-tabelle" tabindex="0"><table class="table">
<caption id="vergleich-tabelle">Empfangswege im Vergleich</caption>
<thead><tr><th scope="col"><span class="sr-only">Merkmal</span></th><th scope="col">IPTV</th><th scope="col">Kabel</th><th scope="col">Satellit</th></tr></thead>
<tbody>
<tr><th scope="row">Empfang über</th><td>Internetanschluss</td><td>Kabelanschluss</td><td>Satellitenschüssel</td></tr>
<tr><th scope="row">Zusätzliche Hardware</th><td>Keine, App genügt</td><td>Kabelbuchse, ggf. Receiver</td><td>Schüssel, LNB, Receiver</td></tr>
<tr><th scope="row">Mehrere Räume</th><td>Jedes Gerät mit App</td><td>Je Raum ein Anschluss</td><td>Je Raum eine Leitung</td></tr>
<tr><th scope="row">Mobil nutzbar</th><td>Ja, mit Internet</td><td>Nein</td><td>Nein</td></tr>
</tbody></table></div>` },
      { id: 'voraussetzungen', h: 'Was Sie für IPTV brauchen', html: `
<ul>
  <li><strong>Internet:</strong> Als Richtwert pro Stream rund 10 Mbit/s für HD und rund 25 Mbit/s für 4K – mehr unter ${L('/iptv-4k/', 'IPTV in 4K')}.</li>
  <li><strong>Ein Gerät:</strong> Smart-TV, Stick, Box, Smartphone, Tablet oder Computer – siehe ${L('/iptv-geraete/', 'IPTV-Geräte')}.</li>
  <li><strong>Eine App:</strong> zum Beispiel ${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')} oder ${L('/tivimate/', 'TiviMate')}.</li>
  <li><strong>Zugangsdaten:</strong> von Ihrem IPTV-Anbieter – siehe ${L('/iptv-kaufen/', 'IPTV kaufen')}.</li>
</ul>` },
      { id: 'streaming', h: 'IPTV oder Streaming-Dienst?', html: `
<p>Beides nutzt das Internet. Mit IPTV meint man meist lineares Fernsehen mit Senderliste und Programmführer, oft ergänzt um Filme und Serien auf Abruf (VOD). Klassische Streaming-Dienste bieten dagegen vor allem Abrufinhalte. Wie IPTV in Deutschland angeboten wird, erklärt ${L('/iptv-deutschland/', 'IPTV in Deutschland')}.</p>` },
    ],
    faq: [
      ['Wofür steht IPTV?', 'IPTV steht für Internet Protocol Television, also Fernsehen über das Internetprotokoll. Das Programm kommt über Ihre Internetleitung statt über Kabel, Satellit oder Antenne.'],
      ['Brauche ich für IPTV einen neuen Fernseher?', 'Nein. Ein Smart-TV mit passender App oder ein <a href="/iptv-stick/">Streaming-Stick</a> am vorhandenen Fernseher genügt.'],
      ['Brauche ich eine Satellitenschüssel oder einen Kabelanschluss?', 'Nein. Sie benötigen nur einen Internetanschluss, ein geeignetes Gerät und eine IPTV-App.'],
      ['Ist IPTV legal?', 'Die Technik ist legal. Entscheidend ist, dass die Inhalte rechtmäßig verbreitet werden. Mehr unter <a href="/iptv-anbieter/">IPTV-Anbieter wählen</a>.'],
    ],
    related: ['/iptv-deutschland/', '/iptv-apps/', '/iptv-geraete/', '/xtream-codes/', '/iptv-kaufen/', '/#kontakt'],
    keywords: ['internet protocol television', 'ip television', 'what is internet protocol television', 'iptv television', 'television iptv', 'ip televizija'],
  },
  {
    path: '/iptv-kaufen/',
    hub: null,
    name: 'IPTV kaufen',
    teaser: 'Was ein IPTV-Abo enthält, was es kostet und wie die Bestellung abläuft.',
    icon: 'euro',
    title: `IPTV kaufen: Preise, Laufzeit und Ablauf | ${site.name}`,
    description: `IPTV kaufen ohne Abo-Falle: Preise ab ${euro(Math.min(...paid.map((p) => p.price)))}, 1 bis ${maxDevices} Geräte, keine automatische Verlängerung – plus Ablauf von Bestellung und Einrichtung.`,
    kicker: 'IPTV kaufen',
    h1: 'IPTV kaufen – so funktioniert das Abo',
    lead: `Wer IPTV kauft, kauft keinen Fernseher und keine Box, sondern einen <strong>Zugang</strong>: Benutzername, Passwort und Server-URL für eine IPTV-App. Hier lesen Sie, was ein IPTV-Abo enthält, was es kostet und worauf Sie vor dem Kauf achten sollten.`,
    sections: [
      { id: 'inhalt', h: 'Was Sie beim IPTV-Kauf bekommen', html: `
<p>Ein IPTV-Abo besteht aus Zugangsdaten. Mit ihnen meldet sich eine IPTV-App bei unserem Server an und lädt Senderliste und Programmführer. Die App selbst ist ein Angebot Dritter; viele sind kostenlos, einige verlangen eine einmalige Aktivierung oder ein eigenes Abo.</p>
<ul>
  <li><strong>Xtream-Codes-Zugang:</strong> Benutzername, Passwort und Server-URL – die bequemste Anmeldung. Mehr dazu unter ${L('/xtream-codes/', 'Xtream Codes erklärt')}.</li>
  <li><strong>M3U-Link:</strong> eine Adresse, hinter der die Senderliste steht. Praktisch für ${L('/vlc-iptv/', 'VLC')} und Fernseher-Apps. Siehe ${L('/m3u-playlist/', 'M3U-Playlist')}.</li>
  <li><strong>Hilfe bei der Einrichtung:</strong> Anleitungen für jedes Gerät und persönliche Unterstützung.</li>
</ul>
<p>In allen Paketen enthalten: ${included.join(' · ')}.</p>` },
      { id: 'kosten', h: 'Was kostet IPTV?', html: `
<p>${priceText}</p>
${priceTable}
<p>Alle Angebote enthalten dieselben Leistungen.${bonusPlan ? ` Nur beim Paket „${bonusPlan.label}“ ist zusätzlich das ${bonusPlan.bonus.replace(/ kostenlos inklusive$/, '')} kostenlos dabei.` : ''} Alle Beträge sind Gesamtpreise für die gewählte Laufzeit.</p>
<p>Rechnen Sie außerdem mit diesen möglichen Nebenkosten:</p>
<ul>
  <li><strong>App:</strong> Einige Apps wie ${L('/tivimate/', 'TiviMate Premium')} oder ${L('/smart-iptv/', 'Smart IPTV')} kosten eine Gebühr des App-Anbieters. Kostenlose Alternativen finden Sie unter ${L('/iptv-apps/', 'IPTV-Apps')}.</li>
  <li><strong>Gerät:</strong> Nur nötig, wenn Ihr Fernseher keine passende App bietet – dann genügt meist ein ${L('/iptv-stick/', 'Streaming-Stick')}.</li>
  <li><strong>Internet:</strong> Ihr bestehender Anschluss reicht, wenn er rund 10 Mbit/s pro HD-Stream schafft.</li>
</ul>` },
      { id: 'ablauf', h: 'So läuft die Bestellung ab', html: ol([
        `Wählen Sie bei den ${L('/#preise', 'Paketen')} Laufzeit und Geräteanzahl oder fordern Sie zuerst einen ${L('/#kontakt', 'kostenlosen Test')} an.`,
        `Senden Sie uns Ihre Anfrage per E-Mail an ${site.email} – mit Paket und Gerät. Wir stimmen die Bestellung mit Ihnen ab.`,
        'Sie erhalten Ihre Zugangsdaten zusammen mit der passenden Anleitung.',
        `Installieren Sie die App, melden Sie sich an und schauen Sie los. Hilfe gibt es in den ${L('/iptv-geraete/', 'Geräte-Anleitungen')} und persönlich.`,
      ]) },
      { id: 'checkliste', h: 'Vor dem IPTV-Kauf: fünf Punkte prüfen', html: `
<ul>
  <li><strong>Test vor dem Kauf:</strong> So sehen Sie, ob die App auf Ihrem Gerät gut läuft.</li>
  <li><strong>Keine Abo-Falle:</strong> Achten Sie darauf, ob sich ein Paket automatisch verlängert.</li>
  <li><strong>Geräteanzahl:</strong> Wählen Sie so viele gleichzeitige Geräte, wie in Ihrem Haushalt parallel geschaut wird.</li>
  <li><strong>Passende App:</strong> Prüfen Sie, welche ${L('/iptv-apps/', 'IPTV-App')} auf Ihrem Gerät läuft.</li>
  <li><strong>Erreichbarer Support:</strong> Hilfe bei der Einrichtung spart viel Zeit.</li>
</ul>
<p>Ausführlicher erklärt im Ratgeber ${L('/iptv-anbieter/', 'IPTV-Anbieter richtig auswählen')}.</p>` },
    ],
    faq: [
      ['Kann ich IPTV ohne Abo kaufen?', `Ja. Sie zahlen einmalig für ${terms}. ${homeContent.billing}`],
      ['Was kostet IPTV bei IPTV Genuss?', `${paid.map((p) => `${p.label}: ab ${euro(p.price)}`).join(', ')} für ein Gerät. Mit mehr gleichzeitigen Geräten steigt der Gesamtpreis, bis ${maxDevices} Geräte sind möglich.`],
      ['Brauche ich eine spezielle IPTV-Box?', 'Nein. Smart-TVs, Fire TV Stick, Android-Geräte, iPhone, iPad, Apple TV und Computer genügen. Eine Box lohnt sich nur, wenn Ihr Fernseher keine passende App bietet.'],
      ['Wie erhalte ich meine Zugangsdaten?', 'Nach Abstimmung Ihrer Bestellung erhalten Sie Ihre Zugangsdaten zusammen mit einer Anleitung für Ihr Gerät.'],
      ['Kann ich vor dem Kauf testen?', 'Ja. Fordern Sie einen <a href="/#kontakt">kostenlosen Test</a> an und probieren Sie die Einrichtung auf Ihrem eigenen Gerät aus.'],
      ['Auf wie vielen Geräten kann ich schauen?', `Bei den bezahlten Paketen wählen Sie zwischen 1 und ${maxDevices} gleichzeitig genutzten Geräten. Der kostenlose Test gilt für ein Gerät.`],
    ],
    related: ['/#preise', '/#kontakt', '/iptv-anbieter/', '/iptv-apps/', '/iptv-geraete/', '/iptv-deutschland/'],
    keywords: ['iptv kaufen', 'ip tv kaufen', 'iptv kaufe', 'buy iptv', 'iptv buy', 'iptv abo', 'iptv kosten', 'ip tv kosten', 'iptv subscription', 'ip tv subscription', 'iptv subscribe', 'iptv sub', 'iptv account', 'iptv line', 'iptv lines', 'iptv linie', 'iptv 12 monate', 'iptv 12 months', 'iptv angebote', 'iptv deals', 'iptv sale', 'iptv promotions', 'iptv shop', 'iptv packages', 'iptv plans', 'iptv premium subscription', 'iptv m3u kaufen', 'iptv m3u 1 jahr', 'iptv cena', 'iptv one', 'my iptv', 'iptv service', 'premium ip tv', 'ip tv premium', 'iptv live', 'iptv stream', 'stream iptv', 'ip tv streaming', 'iptv tv', 'iptv ip', 'iptv'],
  },

  {
    path: '/iptv-anbieter/',
    hub: 'ratgeber',
    name: 'IPTV-Anbieter wählen',
    teaser: 'Acht Kriterien, an denen Sie einen seriösen IPTV-Anbieter erkennen.',
    icon: 'shield',
    title: `IPTV-Anbieter: Worauf Sie bei der Wahl achten | ${site.name}`,
    description: 'IPTV-Anbieter im Vergleich: Acht Kriterien für einen seriösen Anbieter, typische Warnzeichen, die Rechtslage in Deutschland und was Bewertungen aussagen.',
    kicker: 'Ratgeber',
    h1: 'IPTV-Anbieter: So erkennen Sie ein seriöses Angebot',
    lead: 'Den „besten IPTV-Anbieter“ für alle gibt es nicht – wohl aber klare Kriterien. Ein guter IPTV-Anbieter lässt sich vorher testen, nennt klare Preise und Laufzeiten, nennt im Impressum, wer dahintersteht, und hilft bei der Einrichtung.',
    sections: [
      { id: 'kriterien', h: 'Acht Kriterien für den IPTV-Anbieter-Vergleich', html: `
<div class="table-wrap" role="region" aria-labelledby="kriterien-tab" tabindex="0"><table class="table">
<caption id="kriterien-tab">Woran Sie einen seriösen IPTV-Anbieter erkennen</caption>
<thead><tr><th scope="col">Kriterium</th><th scope="col">Gutes Zeichen</th><th scope="col">Warnzeichen</th></tr></thead>
<tbody>
<tr><th scope="row">Impressum</th><td>Name, Anschrift, Kontakt</td><td>Nur Messenger-Kontakt, keine Anschrift</td></tr>
<tr><th scope="row">Laufzeit</th><td>Feste Laufzeit, keine automatische Verlängerung</td><td>„Lebenszeit-Zugang“, versteckte Verlängerung</td></tr>
<tr><th scope="row">Geräte</th><td>Klare Angabe, wie viele Geräte gleichzeitig laufen</td><td>Keine Angabe, Sperre bei Zweitgerät</td></tr>
<tr><th scope="row">Zahlung</th><td>Nachvollziehbare Zahlung mit Rechnung</td><td>Nur Gutscheinkarten oder Kryptowährung</td></tr>
<tr><th scope="row">Test</th><td>Test auf dem eigenen Gerät möglich</td><td>Vorkasse ohne Ausprobieren</td></tr>
<tr><th scope="row">Hilfe</th><td>Anleitungen und erreichbarer Support</td><td>Keine Antwort nach dem Kauf</td></tr>
<tr><th scope="row">Datenschutz</th><td>Datenschutzerklärung nach DSGVO</td><td>Fehlt oder ist kopiert</td></tr>
<tr><th scope="row">Versprechen</th><td>Konkrete, prüfbare Angaben</td><td>Garantien ohne Beleg, 8K-Werbung</td></tr>
</tbody></table></div>` },
      { id: 'legal', h: 'Ist IPTV legal? Die Rechtslage in Deutschland', html: `
<p>IPTV als Technik ist legal – auch große Internetanbieter verbreiten ihr Fernsehangebot auf diesem Weg. Entscheidend ist, <strong>ob der Anbieter die Rechte an den Programmen hat</strong>. Der Europäische Gerichtshof hat 2017 entschieden (Rechtssache C-527/15), dass auch das Streamen aus offensichtlich rechtswidrigen Quellen gegen das Urheberrecht verstoßen kann. Wer bei einem Anbieter ohne Rechte schaut, geht also selbst ein Risiko ein.</p>
<p>Fragen Sie im Zweifel beim Anbieter nach, woher die Inhalte stammen.</p>` },
      { id: 'bewertungen', h: 'Foren, Reddit und Bewertungen: Was sie aussagen', html: `
<p>Viele suchen den besten IPTV-Anbieter in Foren, auf Reddit oder bei Bewertungsportalen. Das ist ein guter Anfang, doch Vorsicht: Bewertungen lassen sich kaufen, und Forenbeiträge sind oft Werbung. Achten Sie auf konkrete Erfahrungen zu Support, Einrichtung und Vertragsabwicklung statt auf pauschales Lob – und prüfen Sie die Fakten im Impressum selbst.</p>` },
      { id: 'test', h: 'Der beste Vergleich: selbst testen', html: `
<p>Ob ein Angebot zu Ihnen passt, hängt vor allem von Ihrem Gerät, Ihrer App und Ihrer Internetleitung ab. Testen Sie deshalb auf dem Gerät, auf dem Sie später schauen. Bei ${site.name} können Sie einen ${L('/#kontakt', 'kostenlosen Test')} für ein Gerät anfordern; alle Informationen zum Kauf finden Sie unter ${L('/iptv-kaufen/', 'IPTV kaufen')}.</p>` },
    ],
    faq: [
      ['Welcher IPTV-Anbieter ist der beste?', 'Das hängt von Ihren Geräten und Ansprüchen ab. Ein guter IPTV-Anbieter ist transparent bei Preisen und Laufzeit, lässt sich kostenlos testen, läuft stabil auf Ihrem Gerät und hilft bei der Einrichtung.'],
      ['Ist IPTV in Deutschland legal?', 'Die Technik ist legal. Illegal ist die Verbreitung von Programmen ohne Rechte. Nach einem Urteil des Europäischen Gerichtshofs von 2017 können auch Zuschauer haften, wenn sie wissentlich aus rechtswidrigen Quellen streamen.'],
      ['Woran erkenne ich ein unseriöses IPTV-Angebot?', 'Typische Warnzeichen sind fehlendes Impressum, „Lebenszeit-Zugänge“, versteckte automatische Verlängerungen und Zahlung nur per Gutscheinkarte oder Kryptowährung.'],
      ['Kann ich einen IPTV-Anbieter vor dem Kauf testen?', 'Bei seriösen Anbietern ja. Bei uns können Sie einen <a href="/#kontakt">kostenlosen Test</a> anfragen.'],
    ],
    related: ['/iptv-kaufen/', '/iptv-deutschland/', '/#kontakt', '/was-ist-iptv/', '/iptv-apps/', '/#preise'],
    keywords: ['iptv anbieter', 'ip tv anbieter', 'anbieter iptv', 'anbieteriptv', 'bester iptv anbieter', 'iptv anbieter vergleich', 'iptv-anbieter vergleich', 'iptv vergleich', 'iptv preisvergleich', 'iptv bestenliste', 'iptv stream anbieter', 'best iptv', 'best iptv provider', 'best iptv provider reddit', 'best iptv reddit', 'reddit best iptv', 'iptv reddit', 'iptv anbieter forum', 'iptv forum', 'iptvforum', 'iptv trustpilot', 'iptv best', 'ip tv best', 'beste iptv', 'bester iptv', 'bestes iptv', 'bes iptv', 'besser iptv', 'iptv provider', 'iptv providers', 'provider iptv', 'internet protocol tv providers', 'iptv site', 'iptv website', 'iptv com'],
  },

  {
    path: '/iptv-deutschland/',
    hub: 'ratgeber',
    name: 'IPTV in Deutschland',
    teaser: 'IPTV vom Internetanbieter oder per App? Leitung, Rundfunkbeitrag, SAT>IP.',
    icon: 'wifi',
    title: `IPTV in Deutschland: Was Sie wissen sollten | ${site.name}`,
    description: 'IPTV in Deutschland: Unterschied zwischen IPTV vom Internetanbieter und App-IPTV, welche Leitung Sie brauchen, Rundfunkbeitrag und SAT>IP einfach erklärt.',
    kicker: 'Ratgeber',
    h1: 'IPTV in Deutschland – einfach erklärt',
    lead: 'IPTV in Deutschland gibt es in zwei Formen: als TV-Produkt Ihres Internetanbieters, das an dessen Anschluss gebunden ist, und als App-basiertes IPTV, das über jede ausreichend schnelle Internetleitung funktioniert. Hier sehen Sie die Unterschiede und was Sie brauchen.',
    sections: [
      { id: 'zwei-arten', h: 'Zwei Arten von IPTV in Deutschland', html: `
<div class="table-wrap" role="region" aria-labelledby="arten-tab" tabindex="0"><table class="table">
<caption id="arten-tab">IPTV vom Internetanbieter und App-IPTV im Vergleich</caption>
<thead><tr><th scope="col"><span class="sr-only">Merkmal</span></th><th scope="col">IPTV vom Internetanbieter</th><th scope="col">App-basiertes IPTV</th></tr></thead>
<tbody>
<tr><th scope="row">Anschluss</th><td>Nur am Anschluss dieses Anbieters</td><td>Jeder Internetanschluss</td></tr>
<tr><th scope="row">Empfang</th><td>Meist mit Receiver des Anbieters</td><td>App auf Smart-TV, Stick, Handy, PC</td></tr>
<tr><th scope="row">Unterwegs</th><td>Je nach Tarif eingeschränkt</td><td>Überall mit Internet</td></tr>
<tr><th scope="row">Vertrag</th><td>Oft an den Internetvertrag gekoppelt</td><td>Unabhängig vom Internetvertrag</td></tr>
</tbody></table></div>
<p>Große Internetanbieter wie Telekom, Vodafone, 1&amp;1 oder O2 bieten eigene TV-Produkte an, die über ihren Anschluss laufen. ${site.name} ist dagegen ein App-basiertes Angebot: Sie behalten Ihren Internetvertrag und schauen mit einer ${L('/iptv-apps/', 'IPTV-App')} Ihrer Wahl.</p>` },
      { id: 'leitung', h: 'Welche Internetleitung brauche ich?', html: `
<p>Als Richtwert gelten rund <strong>10 Mbit/s pro HD-Stream</strong> und rund <strong>25 Mbit/s für Ultra HD</strong>. Schauen zwei Personen gleichzeitig, addieren sich die Werte. Ob DSL, VDSL, Kabel oder Glasfaser ist zweitrangig; wichtiger ist eine stabile Verbindung im Haus.</p>
<ul>
  <li><strong>LAN-Kabel schlägt WLAN:</strong> Ein Kabel zum Fernseher oder zur Box beseitigt die meisten Ruckler.</li>
  <li><strong>Mobilfunk:</strong> Mit LTE oder 5G klappt IPTV unterwegs, kostet aber Datenvolumen – grob 2 bis 4 GB pro Stunde in HD.</li>
  <li><strong>Mehr zu 4K:</strong> siehe ${L('/iptv-4k/', 'IPTV in 4K')}.</li>
</ul>` },
      { id: 'satip', h: 'IPTV, SAT>IP und Kabel – nicht verwechseln', html: `
<p><strong>SAT&gt;IP</strong> verteilt ein Satellitensignal über Ihr Heimnetz. Sie brauchen dafür weiterhin eine Satellitenschüssel. IPTV kommt dagegen vollständig über das Internet – ohne Schüssel und ohne Kabelanschluss. Den Vergleich der Empfangswege finden Sie unter ${L('/was-ist-iptv/', 'Was ist IPTV?')}.</p>` },
      { id: 'rundfunkbeitrag', h: 'Rundfunkbeitrag und IPTV', html: `
<p>Der Rundfunkbeitrag wird in Deutschland pro Wohnung erhoben – unabhängig davon, ob Sie über Satellit, Kabel, Antenne oder IPTV schauen. Ein IPTV-Abo ersetzt ihn nicht und ist auch nicht in ihm enthalten.</p>` },
    ],
    faq: [
      ['Kann ich IPTV mit jedem Internetanbieter nutzen?', 'App-basiertes IPTV wie bei uns funktioniert mit jedem Internetanbieter. Das TV-Produkt eines Internetanbieters läuft dagegen meist nur an dessen eigenem Anschluss.'],
      ['Brauche ich für IPTV einen Receiver?', 'Nein. Eine App auf Smart-TV, Streaming-Stick, Smartphone, Tablet oder Computer genügt.'],
      ['Ersetzt IPTV den Rundfunkbeitrag?', 'Nein. Der Rundfunkbeitrag wird pro Wohnung fällig, unabhängig vom Empfangsweg.'],
      ['Funktioniert IPTV auch in Österreich und der Schweiz?', 'Technisch funktioniert IPTV überall mit ausreichend schnellem Internet. Für Fragen zur Nutzung außerhalb Deutschlands <a href="/#kontakt">schreiben Sie uns</a>.'],
    ],
    related: ['/was-ist-iptv/', '/iptv-anbieter/', '/iptv-kaufen/', '/iptv-4k/', '/iptv-geraete/', '/iptv-probleme/'],
    keywords: ['german iptv', 'iptv german', 'iptv germany', 'germany iptv', 'deutschland iptv', 'deutsch iptv', 'fernsehen über telekom', 'telekom ip tv', 'magenta tv iptv', 'magenta iptv', 'vodafone iptv', 'vodafone ip tv', 'iptv vodafone', 'o2 iptv', '1&1 tv pakete', 'sat ip tv', 'television and internet', 'iptv fernseher', 'euro iptv'],
  },

  {
    path: '/iptv-4k/',
    hub: 'ratgeber',
    name: 'IPTV in 4K',
    teaser: 'Bandbreite, Codecs und Geräte für Ultra HD – und warum „8K“ ein Warnzeichen ist.',
    icon: 'tv',
    title: `IPTV in 4K: Was Sie für Ultra HD brauchen | ${site.name}`,
    description: 'IPTV in 4K: Welche Internetgeschwindigkeit, welche Geräte und welche Codecs Sie für Ultra HD brauchen – und warum Werbung mit 8K-IPTV ein Warnzeichen ist.',
    kicker: 'Ratgeber',
    h1: 'IPTV in 4K – das brauchen Sie für Ultra HD',
    lead: 'Für IPTV in 4K müssen drei Dinge zusammenpassen: ein Stream in 4K-Auflösung, eine Leitung mit rund 25 Mbit/s pro Stream und ein Gerät, das H.265/HEVC abspielen kann. Fehlt eines davon, sehen Sie bestenfalls Full HD.',
    sections: [
      { id: 'voraussetzungen', h: 'Voraussetzungen für IPTV in 4K', html: `
<div class="table-wrap" role="region" aria-labelledby="uhd-tab" tabindex="0"><table class="table">
<caption id="uhd-tab">HD und 4K im Vergleich (Richtwerte)</caption>
<thead><tr><th scope="col"><span class="sr-only">Merkmal</span></th><th scope="col">Full HD</th><th scope="col">4K / Ultra HD</th></tr></thead>
<tbody>
<tr><th scope="row">Auflösung</th><td>1920 × 1080</td><td>3840 × 2160</td></tr>
<tr><th scope="row">Bandbreite pro Stream</th><td>rund 10 Mbit/s</td><td>rund 25 Mbit/s</td></tr>
<tr><th scope="row">Codec</th><td>meist H.264</td><td>meist H.265/HEVC</td></tr>
<tr><th scope="row">Datenvolumen pro Stunde</th><td>ca. 2–4 GB</td><td>ca. 7–11 GB</td></tr>
</tbody></table></div>` },
      { id: 'geraete', h: 'Welche Geräte spielen 4K-IPTV ab?', html: `
<p>4K-fähig sind unter anderem der Fire TV Stick 4K, Apple TV 4K, aktuelle Google-TV-Geräte, die Nvidia Shield TV sowie die meisten Smart-TVs der letzten Jahre. Achten Sie auf HEVC-Unterstützung und einen HDMI-Anschluss mit HDCP 2.2 am Fernseher. Ein einfacher Full-HD-Stick zeigt 4K-Streams nur heruntergerechnet oder gar nicht.</p>
<p>Passende Geräte und Anleitungen: ${L('/iptv-fire-tv-stick/', 'Fire TV Stick')}, ${L('/iptv-box/', 'IPTV-Boxen')}, ${L('/iptv-apple-tv/', 'Apple TV')} und ${L('/iptv-smart-tv/', 'Smart-TVs')}.</p>` },
      { id: '8k', h: 'IPTV in 8K oder „12K“?', html: `
<p>Echte 8K-Inhalte gibt es im Fernsehen praktisch nicht, und kaum ein Haushalt hat einen 8K-Fernseher. Angebote mit „8K“ oder gar „12K“ im Namen sind Marketing. Nehmen Sie solche Versprechen als Hinweis, das Angebot genauer zu prüfen – mehr dazu unter ${L('/iptv-anbieter/', 'seriöse IPTV-Anbieter erkennen')}.</p>` },
      { id: 'tipps', h: 'Tipps für ein ruckelfreies 4K-Bild', html: `
<ul>
  <li>Verbinden Sie das Gerät per LAN-Kabel oder nutzen Sie WLAN im 5-GHz-Band nah am Router.</li>
  <li>Stellen Sie in der App den Hardware-Decoder ein, wenn das Bild stockt.</li>
  <li>Vermeiden Sie parallele Downloads im Heimnetz, während Sie in 4K schauen.</li>
</ul>
<p>Weitere Lösungen finden Sie unter ${L('/iptv-probleme/', 'IPTV-Probleme beheben')}.</p>` },
    ],
    faq: [
      ['Wie schnell muss mein Internet für IPTV in 4K sein?', 'Als Richtwert rund 25 Mbit/s pro 4K-Stream. Für einen zweiten gleichzeitigen Stream brauchen Sie entsprechend mehr.'],
      ['Spielt jeder Fire TV Stick 4K-IPTV ab?', 'Nein. Nur Modelle mit 4K im Namen geben Ultra HD aus. Ältere oder einfache Sticks zeigen höchstens Full HD.'],
      ['Gibt es IPTV in 8K?', 'Echte 8K-Inhalte gibt es im Fernsehen praktisch nicht. Werbung mit 8K-IPTV ist ein Warnzeichen.'],
      ['Warum ruckelt 4K, aber HD läuft?', 'Meist reicht die Bandbreite im Heimnetz nicht oder das Gerät dekodiert HEVC nicht flüssig. Ein LAN-Kabel und der Hardware-Decoder in der App helfen oft.'],
    ],
    related: ['/iptv-box/', '/iptv-fire-tv-stick/', '/iptv-probleme/', '/iptv-deutschland/', '/iptv-kaufen/', '/iptv-geraete/'],
    keywords: ['iptv 4k', 'iptv premium 4k', 'iptv 8k', 'iptv8k', 'iptv12k', 'dlta 4k', 'iptv box 4k', 'iptv receiver 4k'],
  },

  {
    path: '/iptv-probleme/',
    hub: 'ratgeber',
    name: 'IPTV-Probleme lösen',
    teaser: 'Ruckeln, keine Senderliste, Login-Fehler: die schnellsten Lösungen.',
    icon: 'info',
    title: `IPTV funktioniert nicht? Ruckeln & Fehler beheben | ${site.name}`,
    description: 'IPTV ruckelt, lädt keine Senderliste oder meldet einen Login-Fehler? Die schnellsten Lösungen Schritt für Schritt, plus Tipps zu WLAN, EPG und IPTV-Checkern.',
    kicker: 'Hilfe',
    h1: 'IPTV funktioniert nicht? So beheben Sie die häufigsten Fehler',
    lead: 'Die meisten IPTV-Probleme haben eine von drei Ursachen: die Verbindung im Heimnetz, falsch eingetragene Zugangsdaten oder einen vollen App-Cache. Arbeiten Sie die Liste unten von oben nach unten ab – die schnellsten Lösungen stehen zuerst.',
    sections: [
      { id: 'sofort', h: 'Sofort-Hilfe in fünf Schritten', html: ol([
        'Starten Sie Router und Gerät neu (Stecker ziehen, 30 Sekunden warten).',
        'Schließen Sie die App vollständig und öffnen Sie sie erneut.',
        'Leeren Sie den Cache der App (Android/Fire TV: Einstellungen › Apps › App wählen › Cache leeren).',
        'Prüfen Sie Benutzername, Passwort und Server-URL auf Tippfehler – inklusive Groß- und Kleinschreibung.',
        'Verbinden Sie das Gerät testweise per LAN-Kabel oder stellen Sie es näher an den Router.',
      ]) },
      { id: 'ruckeln', h: 'Bild ruckelt oder buffert', html: `
<p>Ruckeln liegt meist an der Verbindung im Haus. Messen Sie die Geschwindigkeit direkt auf dem Gerät, nicht am Handy. Liegt sie unter rund 10 Mbit/s für HD, hilft ein LAN-Kabel, ein WLAN-Repeater oder das 5-GHz-WLAN. In vielen Apps lässt sich außerdem der Puffer vergrößern und zwischen Hardware- und Software-Decoder wechseln.</p>` },
      { id: 'senderliste', h: 'Keine Senderliste oder „Login fehlgeschlagen“', html: `
<p>Prüfen Sie, ob die Server-URL vollständig ist – mit <code>http://</code> und, falls angegeben, mit Port (z. B. <code>:8080</code>). Ein Leerzeichen am Ende, ein vertauschtes „l“ und „I“ oder ein abgelaufenes Paket führen ebenfalls zu Fehlern. Wie die Angaben aussehen, zeigt ${L('/xtream-codes/', 'Xtream Codes erklärt')}; für Playlists siehe ${L('/m3u-playlist/', 'M3U-Playlist')}.</p>` },
      { id: 'epg', h: 'Programmführer (EPG) fehlt', html: `
<p>Der elektronische Programmführer wird oft erst einige Minuten nach dem ersten Login geladen. Aktualisieren Sie ihn in den App-Einstellungen manuell und prüfen Sie, ob Datum, Uhrzeit und Zeitzone des Geräts stimmen. Bei M3U-Apps muss die EPG-Adresse (XMLTV) separat eingetragen werden.</p>` },
      { id: 'checker', h: 'IPTV-Checker und Online-Tester: Vorsicht', html: `
<p>Websites, die versprechen, Ihre IPTV-Zugangsdaten online zu „checken“, erhalten dabei Ihren vollständigen Zugang. Geben Sie Ihre Daten dort nicht ein. Ob Ihr Zugang funktioniert, prüfen Sie sicherer direkt in der App – oder Sie fragen uns.</p>` },
      { id: 'support', h: 'Wann Sie uns schreiben sollten', html: `
<p>Hat nichts geholfen, ${L('/#kontakt', 'schreiben Sie uns')} mit Gerät, App, Fehlermeldung und – falls möglich – einem Foto des Bildschirms. Gerätespezifische Hilfe finden Sie auch unter ${L('/iptv-fire-tv-stick/', 'Fire TV Stick')}, ${L('/iptv-samsung-tv/', 'Samsung TV')} und ${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')}.</p>` },
    ],
    faq: [
      ['Warum ruckelt IPTV abends öfter?', 'Abends sind Heimnetz und Internetleitungen stärker ausgelastet. Ein LAN-Kabel und weniger parallele Downloads helfen meist.'],
      ['Warum zeigt meine App keine Sender an?', 'Häufig ist die Server-URL unvollständig oder die Zugangsdaten enthalten einen Tippfehler. Prüfen Sie auch, ob Ihr Paket noch aktiv ist.'],
      ['Sind IPTV-Checker im Internet sicher?', 'Wir raten davon ab. Wer Ihre Zugangsdaten auf fremden Websites eingibt, gibt sie aus der Hand.'],
      ['Hilft ein VPN gegen Ruckeln?', 'In der Regel nicht – ein VPN kann die Verbindung sogar verlangsamen. Schalten Sie es testweise aus.'],
      ['Wie erreiche ich den Kundenservice?', 'Über unser <a href="/#kontakt">Kontaktformular</a>. Nennen Sie Gerät, App und Fehlermeldung, dann können wir schneller helfen.'],
    ],
    related: ['/iptv-geraete/', '/iptv-4k/', '/xtream-codes/', '/m3u-playlist/', '/iptv-fire-tv-stick/', '/#kontakt'],
    keywords: ['iptv checker', 'iptv checker online', 'iptv tester', 'iptv customer service', 'iptv box wifi', 'iptv server', 'iptv servers', 'iptv smarters customer service'],
  },

  {
    path: '/m3u-playlist/',
    hub: 'ratgeber',
    name: 'M3U-Playlist',
    teaser: 'Was eine M3U-Liste ist, wie Sie sie in Apps nutzen und warum Gratis-Listen riskant sind.',
    icon: 'guide',
    title: `M3U-Playlist: IPTV-Liste einfach erklärt | ${site.name}`,
    description: 'Was ist eine M3U-Playlist? So ist eine IPTV-Liste aufgebaut, so nutzen Sie M3U und M3U8 in VLC, Kodi und TV-Apps – und darum sind kostenlose M3U-Listen riskant.',
    kicker: 'Ratgeber',
    h1: 'M3U-Playlist – die IPTV-Liste einfach erklärt',
    lead: 'Eine M3U-Playlist ist eine einfache Textdatei oder Adresse, die eine Liste von Streams enthält: Sendername, Gruppe und Link. IPTV-Apps lesen die M3U-Liste ein und zeigen daraus Ihre Senderliste. Viele Apps unterstützen M3U neben dem Xtream-Codes-Login.',
    sections: [
      { id: 'aufbau', h: 'So ist eine M3U-Liste aufgebaut', html: `
<p>Jede M3U-Playlist beginnt mit <code>#EXTM3U</code>. Danach folgt pro Sender eine Infozeile und eine Zeile mit der Stream-Adresse:</p>
<pre><code>#EXTM3U
#EXTINF:-1 tvg-id="sender1" group-title="Nachrichten",Beispielsender
http://server.example:8080/live/benutzer/passwort/1.ts</code></pre>
<p><code>tvg-id</code> verknüpft den Sender mit dem Programmführer, <code>group-title</code> sortiert ihn in eine Kategorie.</p>` },
      { id: 'm3u8', h: 'M3U, M3U8 und Xtream Codes im Vergleich', html: `
<div class="table-wrap" role="region" aria-labelledby="m3u-tab" tabindex="0"><table class="table">
<caption id="m3u-tab">Zugangsarten im Vergleich</caption>
<thead><tr><th scope="col"><span class="sr-only">Merkmal</span></th><th scope="col">M3U / M3U8</th><th scope="col">Xtream Codes</th></tr></thead>
<tbody>
<tr><th scope="row">Eingabe</th><td>Ein langer Link</td><td>Benutzername, Passwort, Server-URL</td></tr>
<tr><th scope="row">Programmführer</th><td>Separate EPG-Adresse (XMLTV)</td><td>Wird automatisch geladen</td></tr>
<tr><th scope="row">Geeignet für</th><td>VLC, Kodi, viele TV-Apps</td><td>Smarters, TiviMate, XCIPTV u. a.</td></tr>
</tbody></table></div>
<p><strong>M3U8</strong> ist dieselbe Liste in UTF-8-Kodierung, damit Umlaute korrekt angezeigt werden. Mehr zur Alternative unter ${L('/xtream-codes/', 'Xtream Codes')}.</p>` },
      { id: 'nutzen', h: 'M3U-Playlist in einer App nutzen', html: `
<p>So tragen Sie Ihren M3U-Link in den gängigen Apps ein:</p>
<ul>
  <li><strong>VLC:</strong> Netzwerkstream öffnen und den Link einfügen – siehe ${L('/vlc-iptv/', 'IPTV mit VLC')}.</li>
  <li><strong>Kodi:</strong> Im Add-on „PVR IPTV Simple Client“ – siehe ${L('/kodi-iptv/', 'Kodi IPTV')}.</li>
  <li><strong>Fernseher-Apps:</strong> Bei ${L('/smart-iptv/', 'Smart IPTV')}, ${L('/ss-iptv/', 'SS IPTV')} oder ${L('/flix-iptv/', 'Flix IPTV')} über die Website des App-Anbieters.</li>
  <li><strong>Smarters &amp; TiviMate:</strong> Option „M3U-URL“ oder „Playlist“ wählen – siehe ${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')}.</li>
</ul>` },
      { id: 'gratis', h: 'Kostenlose M3U-Listen „Deutsch“: Finger weg', html: `
<p>Im Netz kursieren Listen mit Titeln wie „IPTV M3U Playlist Deutsch“ oder „beste M3U-Liste“. Sie enthalten fast immer Streams ohne Rechte, sind oft nach Tagen offline und können auf manipulierte Server verweisen. Neben dem Urheberrechtsrisiko (siehe ${L('/iptv-anbieter/', 'Rechtslage')}) sind sie schlicht unzuverlässig. Eine M3U-Liste von einem Anbieter mit Impressum ist der sichere Weg.</p>` },
    ],
    faq: [
      ['Was ist eine M3U-Datei?', 'Eine Textdatei mit einer Liste von Stream-Adressen. IPTV-Apps lesen sie ein und zeigen daraus die Senderliste an.'],
      ['Was ist der Unterschied zwischen M3U und M3U8?', 'M3U8 ist eine M3U-Liste in UTF-8-Kodierung. Für Sie als Nutzer funktioniert beides gleich.'],
      ['Wo bekomme ich meinen M3U-Link?', 'Kunden von IPTV Genuss erhalten den M3U-Link zusammen mit den übrigen Zugangsdaten per E-Mail.'],
      ['Sind kostenlose M3U-Listen legal?', 'Meist nicht: Die enthaltenen Streams werden in der Regel ohne Rechte verbreitet. Außerdem sind sie oft schnell offline.'],
      ['Wie bekomme ich den Programmführer zu meiner M3U-Liste?', 'Tragen Sie in der App zusätzlich die EPG-Adresse (XMLTV) ein. Bei Xtream-Codes-Logins wird der Programmführer automatisch geladen.'],
    ],
    related: ['/xtream-codes/', '/vlc-iptv/', '/kodi-iptv/', '/iptv-apps/', '/iptv-smarters-pro/', '/iptv-probleme/'],
    keywords: ['m3u', 'm3u iptv', 'm3u ip tv', 'iptv m3u', 'iptv play list', 'iptv playlist deutsch', 'iptv m3u playlist deutsch', 'beste m3u liste', 'iptv m3u list', 'iptv m3u liste', 'iptv m3u8 list', 'iptv m3u8', 'm3u8 iptv', 'm3u8 list', 'm3u8 liste', 'm3u liste', 'm3u list', 'm3u lista', 'm3u online', 'm.m3u iptv', 'mu3 iptv', 'iptv list', 'iptv liste', 'iptv m3u test'],
  },

  {
    path: '/xtream-codes/',
    hub: 'ratgeber',
    name: 'Xtream Codes',
    teaser: 'Benutzername, Passwort, Server-URL: der bequemste IPTV-Login erklärt.',
    icon: 'key',
    title: `Xtream Codes: IPTV-Login mit Server-URL erklärt | ${site.name}`,
    description: 'Xtream Codes erklärt: Was Benutzername, Passwort und Server-URL bedeuten, welche Apps den Xtream-IPTV-Login unterstützen und wie Sie Fehler vermeiden.',
    kicker: 'Ratgeber',
    h1: 'Xtream Codes – der IPTV-Login einfach erklärt',
    lead: 'Xtream Codes (auch „Xtream Codes API“ oder „XC“) ist eine verbreitete Anmeldeart für IPTV-Apps. Statt eines langen M3U-Links geben Sie nur drei Angaben ein: Benutzername, Passwort und Server-URL. Senderliste, Programmführer und Kategorien lädt die App dann automatisch.',
    sections: [
      { id: 'angaben', h: 'Die drei Angaben beim Xtream-IPTV-Login', html: `
<div class="table-wrap" role="region" aria-labelledby="xc-tab" tabindex="0"><table class="table">
<caption id="xc-tab">Xtream-Codes-Zugangsdaten (Beispielwerte)</caption>
<thead><tr><th scope="col">Feld</th><th scope="col">Beispiel</th><th scope="col">Worauf achten</th></tr></thead>
<tbody>
<tr><th scope="row">Server-URL</th><td><code>http://server.example:8080</code></td><td>Mit <code>http://</code> und Port, ohne Schrägstrich am Ende</td></tr>
<tr><th scope="row">Benutzername</th><td><code>Max123</code></td><td>Groß- und Kleinschreibung beachten</td></tr>
<tr><th scope="row">Passwort</th><td><code>a1B2c3</code></td><td>Keine Leerzeichen mitkopieren</td></tr>
</tbody></table></div>
<p>Das Feld „Playlist-Name“ oder „Name“ ist frei wählbar, zum Beispiel „${site.name}“.</p>` },
      { id: 'apps', h: 'Welche Apps unterstützen Xtream Codes?', html: `
<p>Die meisten modernen IPTV-Apps: ${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')}, ${L('/tivimate/', 'TiviMate')}, ${L('/xciptv/', 'XCIPTV')} und viele weitere aus unserer ${L('/iptv-apps/', 'App-Übersicht')}. Fernseher-Apps wie ${L('/smart-iptv/', 'Smart IPTV')} arbeiten dagegen meist mit M3U-Links.</p>` },
      { id: 'vorteile', h: 'Vorteile gegenüber M3U', html: `
<ul>
  <li><strong>Weniger Tippen:</strong> drei kurze Angaben statt eines langen Links.</li>
  <li><strong>Programmführer inklusive:</strong> die EPG-Daten werden automatisch geladen.</li>
  <li><strong>Kategorien:</strong> Live-TV und weitere Bereiche werden sauber getrennt angezeigt.</li>
</ul>
<p>Wann M3U trotzdem sinnvoll ist, lesen Sie unter ${L('/m3u-playlist/', 'M3U-Playlist')}.</p>` },
      { id: 'fehler', h: 'Typische Fehler beim Xtream-Login', html: ol([
        'Server-URL ohne <code>http://</code> oder ohne Port eingetragen.',
        'Großbuchstaben im Benutzernamen kleingeschrieben – die Anmeldung unterscheidet das.',
        'Beim Kopieren ein Leerzeichen am Ende mitgenommen.',
        `Paket abgelaufen – dann meldet die App „Account expired“. Mehr unter ${L('/iptv-probleme/', 'IPTV-Probleme beheben')}.`,
      ]) },
    ],
    faq: [
      ['Was bedeutet Xtream Codes?', 'Eine Anmeldeart für IPTV-Apps mit Benutzername, Passwort und Server-URL. Die App lädt damit Senderliste und Programmführer automatisch.'],
      ['Was ist die Server-URL?', 'Die Adresse des IPTV-Servers, meist mit Port, zum Beispiel http://server.example:8080. Sie steht in Ihrer Zugangs-E-Mail.'],
      ['Kann ich Xtream-Zugangsdaten in eine M3U-Liste umwandeln?', 'Ja, aber das ist selten nötig: Kunden von IPTV Genuss erhalten beide Varianten per E-Mail.'],
      ['Ist XCIPTV dasselbe wie Xtream Codes?', 'Nein. XCIPTV ist eine App, Xtream Codes die Anmeldeart, die diese und viele andere Apps nutzen.'],
    ],
    related: ['/m3u-playlist/', '/iptv-smarters-pro/', '/tivimate/', '/xciptv/', '/iptv-apps/', '/iptv-probleme/'],
    keywords: ['xtream iptv', 'xtream iptv m3u', 'iptvportal', 'iptv smart net', 'setting iptv'],
  },
];
