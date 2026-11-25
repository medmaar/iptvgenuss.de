// Keyword-gap pass 4 (25 November 2026): sub-clusters that only had a short
// section on a broad page get their own page with information the broad page
// cannot hold: IPTV costs with household scenarios, the best IPTV player by
// device (criteria, no invented tests), a buying guide and a 15-minute test
// for IPTV boxes, Android TV boxes (certification, malware warnings), M3U8
// versus M3U and HLS, and IPTV resellers. Prices only from site.mjs; third-
// party facts limited to stable, published information and dated.
import { site, plans, devicePrices, euro } from '../site.mjs';
import { L, ol, stand } from './util.mjs';
import { offerSchema } from './guides-more.mjs';

const updated = '2026-11-25';
const paid = plans.filter((p) => !p.trial && p.price != null);
const month = paid.find((p) => p.months === 1);
const year = paid.find((p) => p.months === 12);
const bonus = plans.find((p) => p.bonus);
const deviceCounts = Object.keys(devicePrices).map(Number).sort((a, b) => a - b);
const maxDevices = Math.max(...deviceCounts);
const cents = (n) => Math.round(n * 100) / 100;
const mail = site.email ? ` an <a href="mailto:${site.email}">${site.email}</a>` : '';
const fixes = (list) => `<ul>${list.map(([p, f]) => `<li><strong>${p}:</strong> ${f}</li>`).join('')}</ul>`;
const table = (id, caption, head, rows) => `<div class="table-wrap" role="region" aria-labelledby="${id}" tabindex="0"><table class="table">
<caption id="${id}">${caption}</caption>
<thead><tr>${head.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
<tbody>${rows.map(([first, ...rest]) => `<tr><th scope="row">${first}</th>${rest.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
const thirdParty = `Apps und Geräte sind Angebote Dritter. Funktionen, Verfügbarkeit und Preise können sich ändern (Stand: ${stand}).`;
const wiki = (slug, label) => [label, `https://de.wikipedia.org/wiki/${slug}`];

// ── Cost scenarios from devicePrices ─────────────────────────────────────
const yearPrice = (n) => devicePrices[n]?.[year?.id];
const monthPrice = (n) => devicePrices[n]?.[month?.id];
const costRows = deviceCounts.map((n) => [
  `${n} ${n === 1 ? 'Gerät' : 'Geräte'}`,
  monthPrice(n) != null ? euro(monthPrice(n)) : '–',
  yearPrice(n) != null ? euro(yearPrice(n)) : '–',
  yearPrice(n) != null ? euro(cents(yearPrice(n) / 12)) : '–',
  yearPrice(n) != null ? euro(cents(yearPrice(n) / 12 / n)) : '–',
]);
const households = [
  ['Single-Haushalt', 1, 'ein Fernseher im Wohnzimmer'],
  ['Paar', 2, 'Wohnzimmer-TV und Tablet oder Schlafzimmer'],
  ['Familie', 4, 'zwei Fernseher, zwei Handys oder Tablets'],
].filter(([, n]) => yearPrice(n) != null && monthPrice(n) != null);
const householdRows = households.map(([label, n, use]) => [
  `${label} (${n} ${n === 1 ? 'Gerät' : 'Geräte'})`,
  use,
  euro(monthPrice(n) * 12),
  euro(yearPrice(n)),
  euro(monthPrice(n) * 12 - yearPrice(n)),
]);
const cheapest = year && yearPrice(maxDevices) != null ? euro(cents(yearPrice(maxDevices) / 12 / maxDevices)) : null;

export default [
  // ── Kosten ─────────────────────────────────────────────────────────────
  {
    path: '/iptv-kosten/',
    hub: 'ratgeber',
    published: updated,
    updated,
    name: 'IPTV Kosten',
    teaser: 'Was IPTV wirklich kostet: Abo, App, Gerät und Internet – mit Rechenbeispielen für 1 bis 5 Geräte.',
    icon: 'euro',
    title: `IPTV Kosten: Was kostet IPTV im Monat? | ${site.name}`,
    description: `IPTV Kosten im Überblick: Preise für 1 bis ${maxDevices} Geräte, Rechenbeispiele für Single, Paar und Familie, Nebenkosten für App und Gerät. Jetzt kostenlos testen.`,
    kicker: 'IPTV kaufen',
    h1: 'IPTV Kosten: Was kostet IPTV pro Monat und Jahr?',
    lead: `Die IPTV Kosten setzen sich aus vier Teilen zusammen: dem IPTV-Zugang selbst, eventuell einer App-Lizenz, einem Gerät, falls Ihr Fernseher keine passende App hat, und Ihrem Internetanschluss. Bei ${site.name} kostet der Zugang ${month ? `${euro(month.price)} für einen Monat` : 'einen festen Betrag pro Monat'}${year ? ` oder ${euro(year.price)} für zwölf Monate – rechnerisch ${euro(cents(year.price / 12))} pro Monat` : ''}, jeweils für ein Gerät und ohne automatische Verlängerung. Hier rechnen wir die Kosten für typische Haushalte durch und zeigen, welche Nebenkosten anfallen können.`,
    facts: [
      ['Zugang ab', month ? `${euro(month.price)} für 1 Monat (1 Gerät)` : 'siehe Preise'],
      ['Günstigster Monatspreis', year ? `${euro(cents(year.price / 12))} im Jahrespaket (1 Gerät)` : 'im Jahrespaket'],
      ['Pro Gerät und Monat', cheapest ? `ab ${cheapest} (Jahrespaket, ${maxDevices} Geräte)` : '–'],
      ['Verlängerung', 'keine automatische Verlängerung'],
      ['Test', 'kostenlos, ein Gerät'],
    ],
    schema: [offerSchema],
    sources: [['ARD ZDF Deutschlandradio Beitragsservice: Rundfunkbeitrag', 'https://www.rundfunkbeitrag.de/'], ['Bundesnetzagentur: Breitbandmessung', 'https://breitbandmessung.de/'], ['Verbraucherzentrale: Verträge und Abos', 'https://www.verbraucherzentrale.de/wissen/vertraege-reklamation']],
    sections: [
      { id: 'kurz', h: 'IPTV Kosten auf einen Blick', html: `
<p>Die kurze Antwort: Für ein Gerät zahlen Sie bei ${site.name} ${month ? euro(month.price) : 'einen festen Betrag'} im Monatspaket${year ? ` oder ${euro(year.price)} im Jahr` : ''}. Jedes weitere Gerät, auf dem gleichzeitig geschaut wird, erhöht den Preis. Die Leistungen sind in allen Paketen gleich${bonus ? `; nur im Jahrespaket ist zusätzlich ${bonus.bonusName} inklusive` : ''}.</p>
${table('kosten-tab', `IPTV Kosten bei ${site.name} nach Geräteanzahl (Gesamtpreise, einmalig)`, ['Geräte gleichzeitig', month?.label || '1 Monat', year?.label || '1 Jahr', 'Jahrespaket pro Monat', 'pro Gerät und Monat'], costRows)}
<p>Je mehr Geräte Sie wählen, desto günstiger wird jedes einzelne Gerät. Bestellen können Sie über ${L('/#preise', 'Preise ansehen')}; wie der Kauf abläuft, erklärt ${L('/iptv-kaufen/', 'IPTV kaufen')}.</p>` },
      { id: 'haushalte', h: 'Rechenbeispiele: Was kostet IPTV für Single, Paar und Familie?', html: `
<p>Wie viele Geräte brauchen Sie wirklich? Zählen Sie nur die Bildschirme, auf denen <em>gleichzeitig</em> geschaut wird. Wer abends im Wohnzimmer und tagsüber auf dem Tablet schaut, kommt mit einem Gerät aus.</p>
${householdRows.length ? table('haushalt-tab', 'IPTV Kosten im ersten Jahr nach Haushalt', ['Haushalt', 'Typische Nutzung', '12 × Monatspaket', 'Jahrespaket', 'Ersparnis Jahrespaket'], householdRows) : ''}
<p>Die Rechnung zeigt: Wer IPTV dauerhaft nutzen möchte, fährt mit dem ${L('/iptv-12-monate/', 'Jahrespaket für 12 Monate')} deutlich günstiger. Das Monatspaket lohnt sich für einen begrenzten Zeitraum, etwa im Urlaub oder bis zum Umzug.</p>` },
      { id: 'nebenkosten', h: 'Nebenkosten: App, Gerät und Internet', html: `
${table('neben-tab', 'Mögliche Nebenkosten bei IPTV', ['Posten', 'Wann fällt er an?', 'So sparen Sie'], [
  ['App-Lizenz', `Bei Apps mit Aktivierungsgebühr, etwa ${L('/smart-iptv/', 'Smart IPTV')}, ${L('/ibo-player/', 'IBO Player')} oder ${L('/tivimate-premium/', 'TiviMate Premium')}`, `Kostenlose Apps wie ${L('/xciptv/', 'XCIPTV')}, ${L('/vlc-iptv/', 'VLC')} oder ${L('/kodi-iptv/', 'Kodi')} nutzen${bonus ? `; im Jahrespaket ist ${bonus.bonusName} inklusive` : ''}`],
  ['Gerät', 'Nur wenn Ihr Fernseher keine passende App bietet', `Ein ${L('/iptv-stick/', 'Streaming-Stick')} genügt meist; Kaufberatung unter ${L('/beste-iptv-box/', 'Beste IPTV-Box')}`],
  ['Internet', 'Bestehender Anschluss reicht in der Regel', 'Rund 10 Mbit/s pro HD-Stream und 25 Mbit/s pro 4K-Stream einplanen; kein Tarifwechsel nötig, wenn das erreicht wird'],
  ['Rundfunkbeitrag', 'Pro Wohnung, unabhängig vom Empfangsweg', 'Fällt bei Kabel, Satellit und IPTV gleichermaßen an – IPTV ändert daran nichts'],
])}` },
      { id: 'vergleich', h: 'IPTV im Kostenvergleich mit Kabel, Satellit und Streaming', html: `
<p>Ein ehrlicher Vergleich betrachtet nicht nur den Monatspreis, sondern auch Vertragslaufzeit, Gerätekosten und Kündigung:</p>
<ul>
  <li><strong>Kabelfernsehen:</strong> Seit dem Ende des Nebenkostenprivilegs im Juli 2024 dürfen Vermieter Kabel-TV nicht mehr über die Nebenkosten abrechnen. Viele Mieter zahlen seitdem selbst – oft mit fester Laufzeit.</li>
  <li><strong>Satellit:</strong> Frei empfangbare Sender kosten nach der Anschaffung von Schüssel und Receiver nichts extra; private Sender in HD und Pay-TV kosten zusätzlich.</li>
  <li><strong>IPTV vom Internetanbieter:</strong> Telekom, Vodafone, 1&amp;1 oder o2 bieten TV-Pakete meist als Zubuchoption zum Internetvertrag an, häufig mit Mindestlaufzeit. Mehr unter ${L('/iptv-telekom-vodafone/', 'IPTV von Telekom, Vodafone & Co.')}.</li>
  <li><strong>Streamingdienste:</strong> Monatlich kündbar, verlängern sich aber automatisch. Wer mehrere Dienste kombiniert, zahlt schnell mehr als gedacht – siehe ${L('/iptv-streamingdienste/', 'IPTV und Streamingdienste')}.</li>
</ul>
<p>Bei ${site.name} zahlen Sie einmalig für die gewählte Laufzeit, und der Zugang endet danach automatisch. Es gibt keine Kündigungsfrist, die Sie verpassen können.</p>` },
      { id: 'billig', h: 'Warum manche IPTV-Angebote so billig sind', html: `
<p>Angebote für wenige Euro im Jahr oder „Lifetime-IPTV“ wirken verlockend. Ein Zugang verursacht aber laufende Kosten für Server, Bandbreite und Support. Sehr niedrige Preise sind deshalb oft ein Warnsignal: fehlendes Impressum, überlastete Server zur Hauptsendezeit, Zugänge, die nach wenigen Wochen verschwinden. Prüfen Sie jeden Anbieter mit unserer ${L('/iptv-anbieter-liste/', 'Checkliste in zehn Minuten')} und lesen Sie, ${L('/iptv-anbieter/', 'woran Sie seriöse IPTV-Anbieter erkennen')}.</p>
<p>Unser Tipp: Vergleichen Sie nicht nur Preise, sondern den Preis pro tatsächlich nutzbarem Monat. Ein günstiges Jahresabo, das nach drei Monaten nicht mehr funktioniert, ist teurer als ein faires Monatspaket.</p>` },
      { id: 'sparen', h: 'Fünf Wege, bei IPTV Kosten zu sparen', html: ol([
        `Erst ${L('/iptv-testen/', 'kostenlos testen')}, dann kaufen – so zahlen Sie nie für ein Gerät, auf dem es nicht läuft.`,
        'Nur so viele Geräte wählen, wie wirklich gleichzeitig laufen.',
        `Für Dauernutzung das ${L('/iptv-12-monate/', 'Jahrespaket')} wählen${year && month ? ` – für ein Gerät sparen Sie ${euro(month.price * 12 - year.price)} gegenüber zwölf Monatspaketen` : ''}.`,
        `Eine kostenlose App nutzen oder die im Jahrespaket enthaltene App-Lizenz; Übersicht unter ${L('/beste-iptv-player/', 'Beste IPTV-Player')}.`,
        'Vorhandene Geräte nutzen: Viele Smart-TVs, Handys und PCs brauchen keine Zusatzhardware.',
      ]) },
    ],
    faq: [
      ['Was kostet IPTV im Monat?', `Bei ${site.name} ${month ? `${euro(month.price)} im Monatspaket` : 'einen festen Monatspreis'}${year ? ` oder rechnerisch ${euro(cents(year.price / 12))} pro Monat im Jahrespaket` : ''}, jeweils für ein Gerät.`],
      ['Gibt es versteckte IPTV Kosten?', 'Nicht beim Zugang selbst: Sie zahlen einmalig, ohne automatische Verlängerung. Mögliche Nebenkosten sind eine App-Lizenz oder ein Streaming-Stick, falls Ihr Fernseher keine passende App hat.'],
      ['Kostet jedes zusätzliche Gerät extra?', `Ja, der Preis richtet sich nach der Zahl der gleichzeitig genutzten Geräte – von 1 bis ${maxDevices}. Pro Gerät wird es mit jedem weiteren Gerät günstiger.`],
      ['Muss ich bei IPTV weiter Rundfunkbeitrag zahlen?', 'Ja. Der Rundfunkbeitrag wird pro Wohnung erhoben, unabhängig davon, ob Sie per Kabel, Satellit oder IPTV fernsehen.'],
      ['Wie mache ich einen fairen IPTV-Preisvergleich?', 'Rechnen Sie jedes Angebot auf den Preis pro Monat und Gerät um und prüfen Sie Laufzeit, automatische Verlängerung, Testmöglichkeit und Impressum. Ein billiges Jahresabo, das nach wenigen Wochen ausfällt, ist am Ende teurer.'],
      ['Lohnen sich IPTV-Deals, Sale-Aktionen und Promotions?', 'Nur wenn der Anbieter seriös ist. Countdown-Rabatte und „Lifetime“-Deals sind oft ein Lockmittel. Vergleichen Sie die regulären Pakete (Plans/Packages) und testen Sie vorher kostenlos.'],
      ['Ist der kostenlose Test wirklich kostenlos?', 'Ja. Der Test kostet nichts und geht nicht automatisch in ein bezahltes Paket über.'],
    ],
    related: ['/iptv-kaufen/', '/iptv-12-monate/', '/iptv-testen/', '/iptv-anbieter/', '/beste-iptv-player/', '/iptv-telekom-vodafone/'],
    keywords: ['ip tv kosten', 'iptv kosten', 'was kostet iptv', 'iptv preise', 'iptv preisvergleich', 'iptv cena', 'iptv deals', 'iptv sale', 'iptv promotions', 'iptv plans', 'iptv packages'],
  },

  // ── Beste IPTV-Player ─────────────────────────────────────────────────
  {
    path: '/beste-iptv-player/',
    hub: 'apps',
    published: updated,
    updated,
    name: 'Beste IPTV-Player',
    teaser: 'Der beste IPTV-Player für jedes Gerät – kostenlos und kostenpflichtig, mit Entscheidungshilfe.',
    icon: 'play',
    title: `Bester IPTV-Player 2026: Apps für jedes Gerät | ${site.name}`,
    description: 'Der beste IPTV-Player für Fire TV Stick, Android TV, Samsung, LG, Apple und PC: kostenlose und kostenpflichtige Apps im Vergleich, mit Entscheidungshilfe.',
    kicker: 'Apps',
    h1: 'Bester IPTV-Player 2026: die passende App für jedes Gerät',
    lead: 'Den einen besten IPTV-Player gibt es nicht – es gibt den besten Player für Ihr Gerät. Auf dem Fire TV Stick und Android TV überzeugt TiviMate mit der komfortabelsten Oberfläche, kostenlos und auf Deutsch gelingt der Einstieg mit XCIPTV oder IPTV Smarters Pro. Auf Samsung- und LG-Fernsehern führen Apps mit MAC-Aktivierung wie IBO Player oder Smart IPTV, auf iPhone und Apple TV IPTV Smarters Pro oder IPTVX, am PC VLC und Kodi. Hier finden Sie unsere Kriterien, eine Vergleichstabelle und eine Entscheidungshilfe in drei Fragen.',
    facts: [
      ['Fire TV & Android TV', 'TiviMate, XCIPTV, IPTV Smarters Pro'],
      ['Samsung & LG', 'IBO Player, Smart IPTV, Flix IPTV, SS IPTV'],
      ['Apple', 'IPTV Smarters Pro, IPTVX, GSE Smart IPTV'],
      ['PC & Mac', 'VLC, Kodi, Smarters für Windows/Mac'],
      ['Kostenlos & deutsch', 'XCIPTV, IPTV Smarters Pro (Basis), VLC, Kodi'],
    ],
    sources: [wiki('Internet_Protocol_Television', 'Wikipedia: Internet Protocol Television'), ['VideoLAN: VLC media player', 'https://www.videolan.org/vlc/'], ['Kodi (offizielle Website)', 'https://kodi.tv/']],
    sections: [
      { id: 'kriterien', h: 'Woran wir den besten IPTV-Player messen', html: `
<p>Wir bewerten IPTV-Player nach Kriterien, die im Alltag zählen – nicht nach Download-Zahlen:</p>
<ol class="guide-steps">
  <li><strong>Anmeldung:</strong> Unterstützt die App ${L('/xtream-codes/', 'Xtream Codes')} und ${L('/m3u-playlist/', 'M3U')}? Xtream Codes lädt Sender, Programmführer und Mediathek in einem Schritt.</li>
  <li><strong>Programmführer (EPG):</strong> Gibt es eine Rasteransicht wie beim Kabelreceiver, und lädt sie zügig?</li>
  <li><strong>Bedienung mit der Fernbedienung:</strong> Kommt man ohne Maus oder Touch aus?</li>
  <li><strong>Pflege:</strong> Wird die App aus einem offiziellen Store verteilt und regelmäßig aktualisiert?</li>
  <li><strong>Kosten:</strong> Was ist kostenlos, was kostet eine Lizenz, und ist die Gebühr einmalig oder jährlich?</li>
</ol>
<p>Alle hier genannten Apps sind reine Player: Sie bringen keine Sender mit. Die Inhalte kommen von Ihrem IPTV-Anbieter, mit dessen Zugangsdaten Sie sich anmelden.</p>` },
      { id: 'tabelle', h: 'Die besten IPTV-Player im Vergleich', html: `
${table('player-tab', `IPTV-Player im Vergleich (Stand: ${stand}, ohne Gewähr)`, ['App', 'Am besten für', 'Stärke', 'Schwäche', 'Kosten der App'], [
  [L('/tivimate/', 'TiviMate'), 'Fire TV, Android TV, Google TV', 'Programmführer wie beim Kabelreceiver, mehrere Playlists', 'nicht für Samsung, LG und Apple', 'Basis kostenlos, Premium kostenpflichtig'],
  [L('/iptv-smarters-pro/', 'IPTV Smarters Pro'), 'Android, iPhone, Apple TV, Windows, Mac', 'auf fast allen Plattformen, einfache Anmeldung', 'Oberfläche je nach Plattform unterschiedlich', 'Grundversion kostenlos'],
  [L('/xciptv/', 'XCIPTV'), 'Fire TV, Android', 'kostenlos, schlank, für schwächere Sticks', 'weniger Komfortfunktionen', 'kostenlos'],
  [L('/ibo-player/', 'IBO Player'), 'Samsung, LG, Android', 'Einrichtung per MAC-Adresse, auf Fernsehern verbreitet', 'Aktivierungsgebühr nach Testphase', `Lizenz kostenpflichtig${bonus ? `; im Jahrespaket von ${site.name} inklusive` : ''}`],
  [L('/smart-iptv/', 'Smart IPTV'), 'Samsung, LG', 'seit Jahren etabliert', 'nur M3U, Upload über Website', 'einmalige Aktivierung nach Testphase'],
  [L('/ss-iptv/', 'SS IPTV'), 'Samsung, LG', 'kostenlos', 'nur M3U, einfacher Programmführer', 'kostenlos'],
  [L('/iptvx/', 'IPTVX'), 'iPhone, iPad, Apple TV, Mac', 'moderne Apple-Oberfläche', 'nur Apple-Geräte', 'kostenpflichtige Funktionen'],
  [L('/vlc-iptv/', 'VLC'), 'Windows, Mac, Linux', 'spielt fast jede M3U-Liste sofort', 'kein Programmführer-Raster', 'kostenlos (Open Source)'],
  [L('/kodi-iptv/', 'Kodi'), 'PC, Android, Fire TV', 'sehr anpassbar, Aufnahmen per Add-on', 'Einrichtung aufwendiger', 'kostenlos (Open Source)'],
])}
<p class="muted">${thirdParty}</p>
<p>Alle weiteren Apps – von ${L('/ott-navigator/', 'OTT Navigator')} bis ${L('/implayer/', 'iMPlayer')} – finden Sie in der Übersicht ${L('/iptv-apps/', 'IPTV-Apps')}.</p>` },
      { id: 'fire-tv-kostenlos', h: 'Bester IPTV-Player für den Fire TV Stick – kostenlos und auf Deutsch', html: `
<p>Viele suchen genau das: den besten IPTV-Player für den Fire TV Stick, kostenlos und mit deutscher Oberfläche. Unsere Empfehlung in dieser Reihenfolge:</p>
${ol([
  `<strong>${L('/xciptv/', 'XCIPTV')}:</strong> kostenlos, schlank und auch auf dem ${L('/iptv-fire-tv-stick-lite/', 'Fire TV Stick Lite')} flüssig. Anmeldung per Xtream Codes.`,
  `<strong>${L('/iptv-smarters-pro-fire-tv-stick/', 'IPTV Smarters Pro auf dem Fire TV Stick')}:</strong> Grundversion kostenlos, deutsche Oberfläche, bekannte Bedienung.`,
  `<strong>${L('/tivimate-fire-tv-stick/', 'TiviMate auf dem Fire TV Stick')}:</strong> Die Basisversion ist kostenlos nutzbar; den vollen Komfort mit mehreren Playlists und Aufnahmen bietet ${L('/tivimate-premium/', 'TiviMate Premium')}.`,
])}
<p>Apps, die nicht im Amazon Appstore stehen, installieren Sie mit der ${L('/iptv-downloader/', 'Downloader-App')}. Wichtig: Auf neueren Amazon-Geräten mit Vega OS laufen keine Android-Apps – Details unter ${L('/iptv-fire-tv-stick/', 'IPTV auf dem Fire TV Stick')}.</p>` },
      { id: 'entscheidung', h: 'Entscheidungshilfe: in drei Fragen zum passenden Player', html: `
<ol class="guide-steps">
  <li><strong>Welches Betriebssystem hat Ihr Gerät?</strong> Fire OS, Android TV oder Google TV: TiviMate oder XCIPTV. Samsung (Tizen) oder LG (webOS): IBO Player oder Smart IPTV. iPhone, iPad, Apple TV: IPTV Smarters Pro oder IPTVX. Windows oder Mac: VLC, Kodi oder ${L('/iptv-smarters-pro-pc/', 'Smarters am PC')}.</li>
  <li><strong>Möchten Sie einen Programmführer wie beim Kabelreceiver?</strong> Dann TiviMate, IBO Player oder IPTV Smarters Pro. Für gelegentliches Schauen genügt VLC.</li>
  <li><strong>Darf die App etwas kosten?</strong> Wenn nein: XCIPTV, SS IPTV, VLC oder Kodi. Wenn ja: TiviMate Premium oder eine Lizenz mit MAC-Aktivierung${bonus ? ` – das ${bonus.bonusName}-Abo ist im Jahrespaket von ${site.name} bereits enthalten` : ''}.</li>
</ol>
<p>Sie sind unsicher? Nennen Sie uns beim ${L('/iptv-testen/', 'kostenlosen Test')} Ihr Gerät – wir empfehlen eine passende App und schicken die Anleitung mit. Gerätespezifische Empfehlungen finden Sie auch unter ${L('/iptv-player-android/', 'IPTV-Player für Android')} und ${L('/iptv-smart-tv/', 'IPTV auf dem Smart-TV')}.</p>` },
      { id: 'vorsicht', h: 'Vorsicht bei „Premium“-Playern von Download-Seiten', html: `
<p>Modifizierte „Premium“- oder „Pro“-Versionen bekannter Apps von Download-Seiten sind ein Sicherheitsrisiko: Sie können Schadsoftware enthalten und erhalten keine Updates. Laden Sie Player nur aus Google Play, dem Amazon Appstore, dem App Store, dem Store Ihres Fernsehers oder von der Website des Entwicklers. Eine legale Lizenz kostet meist nur wenige Euro.</p>` },
    ],
    faq: [
      ['Welcher ist der beste IPTV-Player?', 'Das hängt vom Gerät ab: TiviMate auf Fire TV und Android TV, IBO Player oder Smart IPTV auf Samsung und LG, IPTV Smarters Pro oder IPTVX auf Apple-Geräten, VLC oder Kodi am PC.'],
      ['Welcher IPTV-Player für den Fire TV Stick ist kostenlos und auf Deutsch?', 'XCIPTV und IPTV Smarters Pro in der Grundversion. Beide sind kostenlos und bieten eine deutsche Oberfläche; TiviMate ist in der Basisversion ebenfalls kostenlos nutzbar.'],
      ['Was ist die beste IPTV-App für Samsung-Fernseher?', 'Häufig der IBO Player oder Smart IPTV. Beide werden per MAC-Adresse eingerichtet; kostenlos ist SS IPTV.'],
      ['Bringt ein IPTV-Player Sender mit?', 'Nein. Ein Player spielt nur ab. Die Sender kommen von Ihrem IPTV-Anbieter, mit dessen Zugangsdaten Sie sich anmelden.'],
      ['Funktioniert jeder IPTV-Player mit IPTV Genuss?', 'Jeder Player, der Xtream Codes oder M3U unterstützt. Das gilt für alle Apps in der Tabelle.'],
    ],
    related: ['/iptv-apps/', '/tivimate/', '/iptv-smarters-pro/', '/xciptv/', '/ibo-player/', '/iptv-fire-tv-stick/'],
    keywords: ['bester iptv player', 'best iptv player', 'best player iptv', 'beste iptv app', 'bester iptv player für fire tv stick kostenlos deutsch', 'beste iptv player', 'iptv player vergleich'],
  },

  // ── Beste IPTV-Box ────────────────────────────────────────────────────
  {
    path: '/beste-iptv-box/',
    hub: 'geraete',
    published: updated,
    updated,
    name: 'Beste IPTV-Box',
    teaser: 'Kaufberatung 2026: welche IPTV-Box zu Ihnen passt, Preisklassen und ein 15-Minuten-Test.',
    icon: 'box',
    title: `Beste IPTV-Box 2026: Kaufberatung & Test | ${site.name}`,
    description: 'Beste IPTV-Box 2026: Fire TV, Google TV Streamer, Nvidia Shield, Apple TV, Ugoos, Formuler und MAG im Vergleich, mit Preisklassen und Test-Checkliste.',
    kicker: 'Geräte',
    h1: 'Beste IPTV-Box 2026: Kaufberatung, Preisklassen und Test',
    lead: 'Die beste IPTV-Box ist für die meisten Haushalte ein Gerät mit Google TV oder Android TV und offiziellem Play Store, zum Beispiel der Google TV Streamer oder die Nvidia Shield TV. Wer es günstig mag, nimmt einen Fire TV Stick mit Fire OS, Apple-Nutzer das Apple TV 4K. Spezialisten wie Formuler, MAG oder Ugoos lohnen sich für Portal-Zugänge und Technik-Fans. Hier finden Sie die Geräte im Vergleich, Richtwerte für den Preis und eine Checkliste, mit der Sie jede IPTV-Box in 15 Minuten selbst testen.',
    facts: [
      ['Allrounder', 'Google TV Streamer, Nvidia Shield TV'],
      ['Günstig', 'Fire TV Stick 4K / 4K Max (mit Fire OS)'],
      ['Apple', 'Apple TV 4K'],
      ['Portal & Spezialisten', 'Formuler, MAG, Ugoos'],
      ['Wichtigstes Kriterium', 'offizieller App-Store und Updates'],
    ],
    sources: [wiki('Set-Top-Box', 'Wikipedia: Set-Top-Box'), wiki('Android_TV', 'Wikipedia: Android TV'), ['Bundesnetzagentur: Breitbandmessung', 'https://breitbandmessung.de/']],
    sections: [
      { id: 'vergleich', h: 'Die besten IPTV-Boxen im Vergleich', html: `
${table('boxen-tab', `IPTV-Boxen und Sticks im Vergleich (Stand: ${stand}, Herstellerangaben, ohne Gewähr)`, ['Gerät', 'System', 'LAN', 'Geeignet für'], [
  [L('/iptv-fire-tv-stick-4k-max/', 'Fire TV Stick 4K Max'), 'Fire OS', 'per Adapter', 'Preisbewusste, TiviMate per Downloader'],
  [L('/iptv-fire-tv-cube/', 'Fire TV Cube'), 'Fire OS', 'ja', 'Fire-TV-Nutzer, die LAN und mehr Leistung wollen'],
  ['Google TV Streamer', 'Google TV', 'ja', 'Allrounder mit Play Store'],
  [L('/iptv-nvidia-shield/', 'Nvidia Shield TV'), 'Android TV', 'ja', 'Vielnutzer, Sport, Plex-Server'],
  [L('/iptv-xiaomi-tv-box/', 'Xiaomi TV Box S'), 'Google TV', 'nein', 'günstiger Einstieg mit Play Store'],
  [L('/iptv-apple-tv-4k/', 'Apple TV 4K'), 'tvOS', 'je nach Modell', 'Apple-Haushalte, ruhiges Bild bei Sport'],
  ['Ugoos AM7', 'Android TV', 'ja', 'Technik-Fans, die viel einstellen möchten'],
  ['Homatics Box Q / Box R', 'Android TV', 'je nach Modell', 'zertifizierte Mittelklasse mit Play Store'],
  [L('/formuler/', 'Formuler Z11 Pro'), 'Android mit MyTVOnline', 'ja', 'Portal- und Xtream-Nutzer, Bedienung wie ein Receiver'],
  [L('/mag-box/', 'MAG 524'), 'Linux (Infomir)', 'ja', 'reine Portal-Zugänge per MAC-Adresse'],
  [L('/iptv-enigma2/', 'Enigma2-Receiver'), 'Linux (Enigma2)', 'ja', 'Satellit und IPTV in einem Gerät'],
])}
<p class="muted">${thirdParty}</p>
<p>Achtung bei Amazon: Neuere Modelle wie der Fire TV Stick 4K Select laufen mit Vega OS und unterstützen keine Android-Apps. Prüfen Sie vor dem Kauf, dass das Gerät Fire OS nutzt.</p>` },
      { id: 'preis', h: 'Was kostet eine gute IPTV-Box?', html: `
<p>Als grobe Richtwerte (Stand ${stand}, Preise schwanken stark nach Angebot):</p>
<ul>
  <li><strong>Streaming-Sticks:</strong> etwa 30 bis 80 Euro – für HD und 4K auf einem Fernseher ausreichend.</li>
  <li><strong>Gute Android- bzw. Google-TV-Boxen:</strong> etwa 60 bis 200 Euro – mit LAN, mehr Speicher und schnellerem Programmführer.</li>
  <li><strong>Oberklasse:</strong> Apple TV 4K und Nvidia Shield TV Pro liegen im oberen Bereich, bekommen dafür aber lange Updates.</li>
</ul>
<p>Sehr billige No-Name-Boxen von Marktplätzen sparen meist an Updates und Sicherheit. Warum das ein echtes Risiko ist, lesen Sie unter ${L('/android-tv-box-iptv/', 'Android-TV-Box für IPTV')}. Was IPTV insgesamt kostet, rechnet ${L('/iptv-kosten/', 'IPTV Kosten')} vor.</p>` },
      { id: 'test', h: 'IPTV-Box testen: die 15-Minuten-Checkliste', html: `
<p>Ob eine IPTV-Box oder ein IPTV-Receiver taugt, sehen Sie nicht im Datenblatt, sondern im Alltag. Mit dieser Checkliste prüfen Sie ein neues Gerät innerhalb der Rückgabefrist – am besten mit einem ${L('/iptv-testen/', 'kostenlosen IPTV-Test')}:</p>
${table('test-tab', 'IPTV-Box-Test in zehn Schritten', ['Test', 'So gehen Sie vor', 'Gutes Ergebnis'], [
  ['1. Umschalten', 'Zehnmal zwischen Sendern wechseln', 'Bild nach 1–2 Sekunden'],
  ['2. Programmführer', 'EPG öffnen und eine Woche vorblättern', 'flüssiges Scrollen ohne Hänger'],
  ['3. Schneller Sport', 'Ein Sportprogramm mit 50 Bildern pro Sekunde schauen', 'Ball und Laufschrift ohne Ruckeln'],
  ['4. Bildrate', 'Automatische Bildratenanpassung (AFR) aktivieren', 'kurzes Umschalten des Fernsehers beim Senderwechsel'],
  ['5. 4K/HEVC', 'Einen 4K-Inhalt starten', 'kein Stocken, keine Tonaussetzer'],
  ['6. Netzwerk', 'Speedtest per LAN und WLAN', 'mindestens 25 Mbit/s für 4K, stabil'],
  ['7. Fernbedienung', 'Lautstärke und Ein/Aus am Fernseher', 'funktioniert ohne zweite Fernbedienung'],
  ['8. Standby', 'Gerät ausschalten und nach 10 Minuten wieder an', 'App startet ohne Neuanmeldung'],
  ['9. Wärme', 'Eine Stunde laufen lassen', 'warm, aber nicht heiß; keine Neustarts'],
  ['10. Updates', 'Einstellungen › System › Update', 'Sicherheitsupdate aus diesem oder dem letzten Jahr'],
])}` },
      { id: 'kauf', h: 'IPTV-Box kaufen: fünf Fehler, die Sie vermeiden sollten', html: fixes([
        ['Box mit vorinstallierten Sendern', 'Geräte, die mit Pay-TV-Inhalten „inklusive“ werben, sind in der Regel rechtswidrig. Der Europäische Gerichtshof hat das 2017 bestätigt (Rechtssache C-527/15).'],
        ['Kein offizieller App-Store', 'Ohne Play Store oder Amazon Appstore bekommen Apps keine Updates – und Sie keine Sicherheitsupdates.'],
        ['Zu wenig Arbeitsspeicher', 'Unter 2 GB RAM wird der Programmführer großer Senderlisten zäh.'],
        ['Nur WLAN im Funkloch', 'Steht der Router weit weg, wählen Sie ein Gerät mit LAN-Anschluss oder einen Adapter.'],
        ['Falsches Betriebssystem', 'TiviMate läuft nur auf Android-Geräten, nicht auf Apple TV, Samsung oder LG. Wählen Sie die Box passend zur Wunsch-App – siehe ' + L('/beste-iptv-player/', 'Beste IPTV-Player') + '.'],
      ]) },
      { id: 'alternative', h: 'Brauchen Sie überhaupt eine IPTV-Box?', html: `
<p>Oft nicht. Aktuelle Samsung- und LG-Fernseher bringen Apps wie den ${L('/ibo-player/', 'IBO Player')} oder ${L('/smart-iptv/', 'Smart IPTV')} mit, Fernseher mit Google TV sogar TiviMate. Prüfen Sie zuerst unter ${L('/iptv-smart-tv/', 'IPTV auf dem Smart-TV')}, ob Ihr Gerät reicht. Eine Box lohnt sich vor allem, wenn Ihr Fernseher älter ist, keine passende App bietet oder bei Sport ruckelt. Einen Überblick über Box-Typen gibt ${L('/iptv-box/', 'IPTV-Box & Receiver')}.</p>` },
    ],
    faq: [
      ['Welche ist die beste IPTV-Box?', 'Für die meisten ein Gerät mit Google TV oder Android TV und Play Store, etwa Google TV Streamer oder Nvidia Shield TV. Günstig: Fire TV Stick 4K Max mit Fire OS. Für Apple-Haushalte: Apple TV 4K.'],
      ['Wie teste ich eine IPTV-Box?', 'Prüfen Sie Umschaltzeit, Programmführer, Sport mit 50 Bildern pro Sekunde, 4K-Wiedergabe, Netzwerk, Standby, Wärme und Updates – am besten mit einem kostenlosen IPTV-Test innerhalb der Rückgabefrist.'],
      ['Was kostet eine IPTV-Box?', 'Als Richtwert 30 bis 80 Euro für einen Stick und 60 bis 200 Euro für eine gute Box. Apple TV 4K und Nvidia Shield liegen im oberen Bereich.'],
      ['Ist die Ugoos AM7 gut für IPTV?', 'Sie richtet sich an Technik-Fans: Android TV, LAN und viele Einstellmöglichkeiten. Für Einsteiger sind Google TV Streamer oder Fire TV Stick einfacher.'],
      ['Ist eine Box mit vorinstallierten Sendern legal?', 'In der Regel nicht, wenn sie Zugriff auf Pay-TV ohne Lizenz verspricht. Kaufen Sie eine neutrale Box und einen Zugang von einem Anbieter mit Impressum.'],
    ],
    related: ['/iptv-box/', '/android-tv-box-iptv/', '/iptv-nvidia-shield/', '/iptv-fire-tv-stick-4k-max/', '/formuler/', '/iptv-4k/'],
    keywords: ['beste iptv box', 'iptv box kaufen', 'iptv box test', 'iptv receiver test', 'iptv box price', 'ugoos am7', 'homatics box q', 'beste iptv box 2026'],
  },

  // ── Android-TV-Box ────────────────────────────────────────────────────
  {
    path: '/android-tv-box-iptv/',
    hub: 'geraete',
    published: updated,
    updated,
    name: 'Android-TV-Box für IPTV',
    teaser: 'IPTV auf der Android-TV-Box: zertifiziert oder No-Name, Einrichtung und Sicherheit.',
    icon: 'box',
    title: `IPTV TV-Box Android: Einrichtung & Sicherheit | ${site.name}`,
    description: 'IPTV auf der Android-TV-Box einrichten: zertifizierte Box oder No-Name-Gerät, Play-Protect-Check, passende Apps, Schritt-für-Schritt-Anleitung und Fehlerhilfe.',
    kicker: 'Geräte',
    h1: 'IPTV auf der Android-TV-Box: Einrichtung, Apps und Sicherheit',
    lead: 'Eine IPTV TV-Box mit Android ist das flexibelste Gerät für IPTV: Fast jede IPTV-App läuft darauf, allen voran TiviMate. Entscheidend ist aber, ob die Box von Google zertifiziert ist. Zertifizierte Boxen mit Android TV oder Google TV bekommen Play Store, Sicherheitsupdates und Play Protect. Billige No-Name-Boxen mit „Android“ auf dem Karton dagegen fielen in den letzten Jahren immer wieder mit vorinstallierter Schadsoftware auf. So erkennen Sie den Unterschied und richten IPTV auf Ihrer Box richtig ein.',
    facts: [
      ['Beste Apps', 'TiviMate, IPTV Smarters Pro, XCIPTV, OTT Navigator'],
      ['Woran erkennbar', 'Play Store › Einstellungen › Info › Play Protect-Zertifizierung'],
      ['Empfohlen', 'Android TV oder Google TV, LAN, mind. 2 GB RAM'],
      ['Vorsicht', 'No-Name-Boxen ohne Zertifizierung und Updates'],
    ],
    sources: [wiki('Android_TV', 'Wikipedia: Android TV'), ['Bundesamt für Sicherheit in der Informationstechnik (BSI)', 'https://www.bsi.bund.de/'], ['Google Play-Hilfe: Play Protect', 'https://support.google.com/googleplay/answer/2812853?hl=de']],
    sections: [
      { id: 'zertifiziert', h: 'Zertifizierte Android-TV-Box oder No-Name-Box?', html: `
${table('android-box-tab', 'Android-TV-Boxen: zertifiziert oder nicht', ['Merkmal', 'Zertifiziert (Android TV / Google TV)', 'Nicht zertifiziert („Android-Box“)'], [
  ['Play Store', 'offiziell vorinstalliert', 'fehlt oder nachträglich installiert'],
  ['Sicherheitsupdates', 'regelmäßig, je nach Hersteller', 'selten oder nie'],
  ['Play Protect', 'aktiv', 'meldet „Gerät nicht zertifiziert“'],
  ['Netflix & Co. in HD/4K', 'ja', 'oft nur in niedriger Auflösung'],
  ['Oberfläche', 'für Fernbedienung gemacht', 'häufig Handy-Oberfläche, Maus nötig'],
  ['Beispiele', 'Nvidia Shield TV, Google TV Streamer, Xiaomi TV Box S, Homatics', 'Boxen mit Fantasienamen und Versprechen wie „8K“ oder „Android 14“ zum Kampfpreis'],
])}
<p><strong>So prüfen Sie Ihre Box:</strong> Öffnen Sie den Play Store, gehen Sie zu <em>Einstellungen › Info</em> und suchen Sie den Eintrag „Play Protect-Zertifizierung“. Steht dort „Gerät ist zertifiziert“, ist alles in Ordnung.</p>` },
      { id: 'sicherheit', h: 'Warum billige Android-Boxen ein Sicherheitsrisiko sind', html: `
<p>Das Bundesamt für Sicherheit in der Informationstechnik (BSI) hat im Dezember 2024 die Kommunikation der Schadsoftware „BadBox“ auf mehr als 30.000 Geräten in Deutschland unterbunden. Betroffen waren vor allem günstige Geräte mit veralteter Android-Version, darunter TV-Boxen, auf denen die Schadsoftware schon ab Werk vorinstalliert war. Solche Geräte können unbemerkt Konten anlegen, Werbebetrug betreiben oder als Einfallstor ins Heimnetz dienen.</p>
<p>Unsere Empfehlung: Kaufen Sie eine zertifizierte Box eines bekannten Herstellers. Haben Sie bereits eine No-Name-Box, betreiben Sie sie höchstens in einem Gäste-WLAN und melden Sie sich darauf nicht mit Ihrem Google-Konto oder Banking-Apps an. Eine Kaufberatung finden Sie unter ${L('/beste-iptv-box/', 'Beste IPTV-Box')}.</p>` },
      { id: 'einrichten', h: 'IPTV auf der Android-TV-Box einrichten', html: `${ol([
  'Box per HDMI mit dem Fernseher verbinden und – wenn möglich – per LAN-Kabel mit dem Router.',
  'Mit dem Google-Konto anmelden und unter <em>Einstellungen › System › Info › Systemupdate</em> alle Updates installieren.',
  `Im Play Store eine IPTV-App installieren, zum Beispiel ${L('/tivimate/', 'TiviMate')}, ${L('/iptv-smarters-pro-android/', 'IPTV Smarters Pro')} oder ${L('/ott-navigator/', 'OTT Navigator')}.`,
  `App öffnen, „Xtream Codes“ wählen und Server-URL, Benutzername und Passwort eintragen. Mehr dazu unter ${L('/xtream-codes/', 'Xtream Codes')}.`,
  'Programmführer laden lassen, Lieblingssender als Favoriten anlegen und die automatische Bildratenanpassung aktivieren.',
])}
<p>Sie haben noch keine Zugangsdaten? Fordern Sie einen ${L('/iptv-testen/', 'kostenlosen Test')} an – Jetzt kostenlos testen und die Box in Ruhe ausprobieren.</p>` },
      { id: 'apps', h: 'Die besten IPTV-Apps für die Android-TV-Box', html: `
<ul>
  <li><strong>${L('/tivimate/', 'TiviMate')}:</strong> der Klassiker für Android TV mit Programmführer wie beim Kabelreceiver.</li>
  <li><strong>${L('/iptv-smarters-pro-android/', 'IPTV Smarters Pro')}:</strong> einfache Anmeldung, auch auf Handy und Tablet bekannt.</li>
  <li><strong>${L('/xciptv/', 'XCIPTV')}:</strong> kostenlos und schlank, gut für ältere Boxen.</li>
  <li><strong>${L('/ott-navigator/', 'OTT Navigator')}:</strong> viele Einstellmöglichkeiten für Fortgeschrittene.</li>
  <li><strong>${L('/stbemu/', 'STBEmu')}:</strong> wenn Sie einen Portal-Zugang wie bei der MAG-Box nutzen.</li>
</ul>
<p>Die ausführliche Übersicht nach Gerät: ${L('/iptv-player-android/', 'IPTV-Player für Android')}.</p>` },
      { id: 'fehler', h: 'IPTV auf der Android-Box: häufige Fehler', html: fixes([
        ['Play Store fehlt', 'Die Box ist nicht zertifiziert. Apps per APK zu installieren ist möglich, aber unsicher – besser eine zertifizierte Box nutzen.'],
        ['Bild ruckelt bei Sport', 'Automatische Bildratenanpassung in der App aktivieren und LAN statt WLAN nutzen. Mehr unter ' + L('/iptv-probleme/', 'IPTV-Probleme beheben') + '.'],
        ['Fernbedienung reagiert träge', 'Speicher prüfen, ungenutzte Apps entfernen, Cache der IPTV-App leeren.'],
        ['Box zeigt Handy-Oberfläche', 'Viele No-Name-Boxen nutzen eine Smartphone-Version von Android. Eine Launcher-App hilft, besser ist eine Box mit Android TV oder Google TV.'],
      ]) },
    ],
    faq: [
      ['Welche Android-TV-Box ist gut für IPTV?', 'Eine von Google zertifizierte Box mit Android TV oder Google TV, LAN und mindestens 2 GB RAM – etwa Nvidia Shield TV, Google TV Streamer oder Xiaomi TV Box S.'],
      ['Wie erkenne ich, ob meine Android-Box zertifiziert ist?', 'Im Play Store unter Einstellungen › Info steht der Eintrag „Play Protect-Zertifizierung“. „Gerät ist zertifiziert“ bedeutet: alles in Ordnung.'],
      ['Sind billige Android-Boxen gefährlich?', 'Manche ja. Das BSI hat 2024 Schadsoftware auf zehntausenden günstigen Geräten in Deutschland gestoppt, die teils ab Werk vorinstalliert war. Kaufen Sie bekannte, zertifizierte Geräte.'],
      ['Welche IPTV-App ist die beste für die Android-Box?', 'TiviMate ist auf Android TV am komfortabelsten, kostenlos sind XCIPTV und IPTV Smarters Pro in der Grundversion.'],
    ],
    related: ['/iptv-android/', '/beste-iptv-box/', '/iptv-box/', '/tivimate/', '/iptv-nvidia-shield/', '/iptv-player-android/'],
    keywords: ['iptv tv box android', 'iptv box android', 'box iptv android', 'box android iptv', 'android tv box iptv', 'android box iptv'],
  },

  // ── M3U8 ──────────────────────────────────────────────────────────────
  {
    path: '/m3u8/',
    hub: 'ratgeber',
    published: updated,
    updated,
    name: 'M3U8 erklärt',
    teaser: 'M3U8-Liste oder HLS-Stream? Unterschied zu M3U, Aufbau, öffnen und Fehler beheben.',
    icon: 'guide',
    title: `M3U8 erklärt: IPTV M3U8-Liste & HLS-Stream | ${site.name}`,
    description: 'M3U8 einfach erklärt: Unterschied zwischen M3U8-Senderliste und HLS-Stream, Aufbau mit Beispielen, M3U8 öffnen in VLC und Apps und typische Fehler mit Umlauten.',
    kicker: 'Ratgeber',
    h1: 'M3U8 erklärt: IPTV M3U8-Liste, HLS-Stream und der Unterschied zu M3U',
    lead: 'Eine M3U8-Datei ist eine M3U-Playlist in UTF-8-Zeichenkodierung. Im IPTV-Alltag begegnet Ihnen „M3U8“ in zwei Rollen: als Senderliste (IPTV M3U8 List), die Sie in eine App laden, und als Steuerdatei eines HLS-Streams, aus der ein Player die einzelnen Videoschnipsel abruft. Beides sieht ähnlich aus, ist aber etwas anderes. Hier sehen Sie beide Varianten im Beispiel, wie Sie eine M3U8-Liste öffnen und warum Umlaute dabei so oft kaputtgehen.',
    facts: [
      ['M3U8', 'M3U-Playlist in UTF-8-Kodierung'],
      ['Zwei Rollen', 'Senderliste (IPTV) und Steuerdatei für HLS-Streams'],
      ['Standard für HLS', 'RFC 8216 (HTTP Live Streaming)'],
      ['Öffnen mit', 'VLC, Kodi, IPTV-Apps; Safari spielt HLS direkt'],
    ],
    sources: [wiki('M3U', 'Wikipedia: M3U-Dateiformat'), wiki('HTTP_Live_Streaming', 'Wikipedia: HTTP Live Streaming'), ['IETF RFC 8216: HTTP Live Streaming', 'https://datatracker.ietf.org/doc/html/rfc8216'], ['VideoLAN: VLC media player', 'https://www.videolan.org/vlc/']],
    sections: [
      { id: 'unterschied', h: 'M3U oder M3U8: Was ist der Unterschied?', html: `
<p>Inhaltlich sind M3U und M3U8 dasselbe Format: eine Textdatei, Zeile für Zeile. Der Unterschied liegt in der Zeichenkodierung. Eine <strong>.m3u8</strong>-Datei ist immer in UTF-8 gespeichert, eine <strong>.m3u</strong>-Datei kann auch eine ältere Kodierung nutzen. Für deutsche Senderlisten ist das wichtig: Nur mit UTF-8 erscheinen Gruppen wie „Österreich“ oder Sendungstitel mit „ß“ korrekt.</p>
<p>Die meisten IPTV-Apps behandeln beide Endungen gleich. Was in einer M3U-Liste steht und wie sie aufgebaut ist, erklärt ${L('/m3u-playlist/', 'M3U-Playlist')} ausführlich.</p>` },
      { id: 'rollen', h: 'Zwei Rollen: M3U8-Senderliste und HLS-Stream', html: `
<p><strong>1. M3U8 als Senderliste.</strong> Ihr IPTV-Anbieter schickt einen Link oder eine Datei mit allen Sendern. Jeder Eintrag besteht aus einer Infozeile und der Adresse des Streams:</p>
<pre><code>#EXTM3U
#EXTINF:-1 tvg-id="beispiel.de" group-title="Österreich",Beispielsender HD
http://server.example:8080/live/nutzer/passwort/1234.ts</code></pre>
<p><strong>2. M3U8 als HLS-Steuerdatei.</strong> Bei HTTP Live Streaming (HLS) wird ein Video in kurze Abschnitte zerlegt. Die M3U8-Datei listet diese Abschnitte – oder verweist auf mehrere Qualitätsstufen, zwischen denen der Player je nach Bandbreite wechselt:</p>
<pre><code>#EXTM3U
#EXT-X-STREAM-INF:BANDWIDTH=5000000,RESOLUTION=1920x1080
1080p/index.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=2500000,RESOLUTION=1280x720
720p/index.m3u8</code></pre>
<p>Erkennungszeichen: Eine Senderliste enthält viele <code>#EXTINF</code>-Zeilen mit Sendernamen, eine HLS-Datei Zeilen mit <code>#EXT-X-</code>. Eine HLS-Datei ist also ein einzelner Stream, keine Liste von Sendern.</p>` },
      { id: 'oeffnen', h: 'M3U8 öffnen: so geht es auf jedem Gerät', html: `
${table('m3u8-tab', 'M3U8-Liste öffnen nach Gerät', ['Gerät', 'App', 'So geht es'], [
  ['Windows, Mac, Linux', L('/vlc-iptv/', 'VLC'), 'Medien › Netzwerkstream öffnen › M3U8-Link einfügen'],
  ['Fire TV, Android TV', L('/tivimate/', 'TiviMate') + ', ' + L('/iptv-smarters-pro/', 'IPTV Smarters Pro'), 'Playlist hinzufügen › M3U-Playlist › Link eintragen'],
  ['Samsung, LG', L('/smart-iptv/', 'Smart IPTV') + ', ' + L('/ss-iptv/', 'SS IPTV'), 'Link über die Website des App-Anbieters oder per Code hochladen'],
  ['Kodi', L('/kodi-iptv/', 'PVR IPTV Simple Client'), 'Add-on-Einstellungen › M3U-Playlist-URL'],
  ['Browser', L('/iptv-im-browser/', 'Web-Player'), 'Safari spielt HLS-Streams direkt; andere Browser brauchen meist einen Web-Player'],
])}
<p>Sie haben die Wahl zwischen M3U8 und ${L('/xtream-codes/', 'Xtream Codes')}? Nehmen Sie Xtream Codes, wenn Ihre App es kann: Programmführer und Mediathek werden dann automatisch mitgeladen.</p>` },
      { id: 'fehler', h: 'M3U8 funktioniert nicht? Typische Fehler', html: fixes([
        ['Umlaute werden zu Zeichensalat', 'Die Datei ist nicht in UTF-8 gespeichert. In einem Texteditor als „UTF-8“ speichern und die Endung .m3u8 verwenden.'],
        ['Liste lädt nicht', 'Link vollständig kopieren – ein fehlendes Zeichen am Ende reicht. Prüfen Sie, ob der Link im Browser eine Textdatei herunterlädt.'],
        ['Nur ein einziger „Sender“ erscheint', 'Sie haben einen HLS-Stream statt einer Senderliste geladen. Fragen Sie Ihren Anbieter nach dem Playlist-Link.'],
        ['Sender bleiben schwarz', 'Manche Apps spielen bestimmte Stream-Formate nicht. Im Playlist-Link das Ausgabeformat von „ts“ auf „m3u8“ (HLS) umstellen oder umgekehrt – viele Anbieter bieten beides an.'],
        ['Programmführer fehlt', 'Eine M3U8-Liste enthält keinen Programmführer. Tragen Sie zusätzlich die EPG-Adresse (XMLTV) ein oder nutzen Sie Xtream Codes.'],
      ]) },
      { id: 'kostenlos', h: 'Kostenlose M3U8-Listen aus dem Netz?', html: `
<p>Im Netz kursieren M3U8-Listen mit Pay-TV-Sendern. Solche Listen verletzen in aller Regel Urheberrechte, funktionieren oft nur wenige Stunden und können auf Seiten mit Schadsoftware führen. Legal und frei zugänglich sind dagegen die Livestreams der öffentlich-rechtlichen Sender über deren Mediatheken. Eine verlässliche Liste mit Programmführer bekommen Sie mit einem Zugang Ihres IPTV-Anbieters – bei ${site.name} können Sie ${L('/iptv-testen/', 'kostenlos testen')}.</p>` },
    ],
    faq: [
      ['Was ist eine M3U8-Datei?', 'Eine M3U-Playlist in UTF-8-Kodierung. Sie dient als IPTV-Senderliste oder als Steuerdatei eines HLS-Streams.'],
      ['Was ist der Unterschied zwischen M3U und M3U8?', 'Nur die Zeichenkodierung: M3U8 ist immer UTF-8. Dadurch werden Umlaute und Sonderzeichen korrekt angezeigt.'],
      ['Womit öffne ich eine M3U8-Liste?', 'Am PC mit VLC, auf Fire TV und Android TV mit TiviMate oder IPTV Smarters Pro, auf Samsung und LG mit Smart IPTV oder SS IPTV.'],
      ['Kann ich eine M3U8-Datei in M3U umwandeln?', 'Ja. Ist die Datei UTF-8-kodiert, genügt meist das Umbenennen der Endung. Die meisten Apps lesen ohnehin beide.'],
    ],
    related: ['/m3u-playlist/', '/xtream-codes/', '/vlc-iptv/', '/iptv-im-browser/', '/iptv-server/', '/iptv-probleme/'],
    keywords: ['iptv m3u8 list', 'm3u8 liste', 'm3u8 list', 'm3u8 iptv', 'iptv m3u8', 'm3u8', 'm3u8 datei'],
  },

  // ── Reseller ──────────────────────────────────────────────────────────
  {
    path: '/iptv-reseller/',
    hub: 'ratgeber',
    published: updated,
    updated,
    name: 'IPTV-Reseller',
    teaser: 'Wie IPTV-Reseller, Panels und Credits funktionieren – und was rechtlich gilt.',
    icon: 'key',
    title: `IPTV-Reseller: Panel, Credits & Rechtslage | ${site.name}`,
    description: 'IPTV-Reseller erklärt: wie Reseller-Panels und Credits funktionieren, welche Pflichten in Deutschland gelten und woran Kunden einen Weiterverkäufer erkennen.',
    kicker: 'Ratgeber',
    h1: 'IPTV-Reseller: wie Weiterverkauf funktioniert und was rechtlich gilt',
    lead: 'Ein IPTV-Reseller verkauft Zugänge weiter, die er bei einem anderen Anbieter einkauft. Technisch geschieht das über ein Reseller-Panel, in dem der Reseller mit gekauften „Credits“ Zugänge für seine Kunden anlegt. Wer nach „Reseller for IPTV“ sucht, will meist selbst einsteigen oder wissen, ob sein Anbieter nur Zwischenhändler ist. Dieser Ratgeber erklärt beide Seiten: wie das Modell funktioniert, welche Pflichten in Deutschland gelten und worauf Kunden achten sollten.',
    facts: [
      ['Reseller', 'verkauft Zugänge eines anderen Anbieters weiter'],
      ['Panel', 'Weboberfläche zum Anlegen und Verlängern von Zugängen'],
      ['Credits', 'Guthaben, das pro angelegtem Zugang verbraucht wird'],
      ['Pflichten in DE', 'Gewerbe, Impressum, Verbraucherrecht, Rechte an Inhalten'],
    ],
    sources: [wiki('Urheberrecht_(Deutschland)', 'Wikipedia: Urheberrecht (Deutschland)'), ['IHK: Gewerbeanmeldung', 'https://www.ihk.de/'], ['Verbraucherzentrale: Widerrufsrecht', 'https://www.verbraucherzentrale.de/wissen/vertraege-reklamation/kundenrechte']],
    sections: [
      { id: 'modell', h: 'So funktioniert das Reseller-Modell', html: `${ol([
  'Ein Anbieter betreibt Server und stellt Resellern ein <strong>Panel</strong> bereit.',
  'Der Reseller kauft <strong>Credits</strong> – meist entspricht ein Credit einem Monat für ein Gerät.',
  'Im Panel legt er für jeden Kunden einen Zugang an, mit Benutzername, Passwort und Laufzeit.',
  `Der Kunde bekommt Zugangsdaten für ${L('/xtream-codes/', 'Xtream Codes')} oder einen ${L('/m3u-playlist/', 'M3U-Link')} und nutzt sie in seiner App.`,
  'Verlängerungen, Testzugänge und Support laufen über den Reseller.',
])}
<p>Oft gibt es mehrere Stufen: Ein „Super-Reseller“ verkauft Credits an Reseller, die wieder an Unter-Reseller verkaufen. Für den Endkunden heißt das: Wer ihm den Zugang verkauft, betreibt die Technik häufig nicht selbst.</p>` },
      { id: 'pflichten', h: 'IPTV-Reseller werden: Pflichten in Deutschland', html: `
<p>Wer in Deutschland gewerblich IPTV-Zugänge verkauft, hat dieselben Pflichten wie jeder Online-Händler. Die wichtigsten:</p>
<ul>
  <li><strong>Gewerbeanmeldung</strong> beim zuständigen Gewerbeamt und steuerliche Erfassung.</li>
  <li><strong>Impressum</strong> mit Name, Anschrift und Kontakt (§ 5 Digitale-Dienste-Gesetz).</li>
  <li><strong>Verbraucherrecht:</strong> Preisangaben, Widerrufsbelehrung, Datenschutzerklärung, klare Laufzeit und Kündigung.</li>
  <li><strong>Rechte an den Inhalten:</strong> Der Weiterverkauf ist nur zulässig, wenn die Inhalte rechtmäßig verbreitet werden. Wer Zugänge zu offensichtlich rechtswidrigen Streams verkauft, haftet selbst – unabhängig davon, wer die Server betreibt.</li>
</ul>
<p class="muted">Diese Übersicht ersetzt keine Rechtsberatung. Lassen Sie ein Geschäftsmodell vor dem Start von einer Fachanwältin oder einem Fachanwalt prüfen.</p>` },
      { id: 'kunden', h: 'Für Kunden: Ist mein IPTV-Anbieter nur ein Reseller?', html: `
<p>Das ist nicht automatisch schlecht, hat aber Folgen: Fällt der Anbieter dahinter aus, kann der Reseller oft nichts tun. Diese Fragen helfen bei der Einordnung:</p>
${fixes([
  ['Impressum', 'Gibt es eine vollständige Anschrift in Deutschland oder der EU – oder nur einen Messenger-Kontakt?'],
  ['Support', 'Antwortet jemand, der technische Fragen zu Ihrer App beantworten kann?'],
  ['Laufzeit', 'Ist klar geregelt, was passiert, wenn der Dienst ausfällt?'],
  ['Preis', 'Sehr lange Laufzeiten zum Kampfpreis oder „Lifetime“ sind bei Resellern ein typisches Warnsignal.'],
  ['Test', `Bietet der Anbieter einen ${L('/iptv-testen/', 'kostenlosen Test')} an, bevor Sie zahlen?`],
])}
<p>Mehr Kriterien finden Sie unter ${L('/iptv-anbieter/', 'IPTV-Anbieter wählen')} und in der ${L('/iptv-anbieter-liste/', 'Checkliste zu IPTV-Anbietern von A bis Z')}.</p>` },
      { id: 'kontakt', h: 'Fragen an IPTV Genuss', html: `
<p>Sie möchten wissen, wie ${site.name} arbeitet, oder haben eine geschäftliche Anfrage? Schreiben Sie uns${mail} – wir antworten persönlich und auf Deutsch. Als Kunde können Sie ${L('/iptv-testen/', 'jetzt kostenlos testen')} oder direkt ${L('/#preise', 'Preise ansehen')}.</p>` },
    ],
    faq: [
      ['Was ist ein IPTV-Reseller?', 'Ein Händler, der IPTV-Zugänge eines anderen Anbieters über ein Reseller-Panel anlegt und an Endkunden weiterverkauft.'],
      ['Was sind Credits bei IPTV?', 'Guthaben im Reseller-Panel. Meist wird pro Monat und Gerät ein Credit verbraucht, wenn ein Zugang angelegt oder verlängert wird.'],
      ['Ist IPTV-Reseller sein legal?', 'Der Weiterverkauf ist legal, wenn die Inhalte rechtmäßig verbreitet werden und die üblichen Pflichten wie Gewerbe, Impressum und Verbraucherrecht erfüllt sind.'],
      ['Woran erkenne ich, dass mein Anbieter ein Reseller ist?', 'Oft an fehlendem Impressum, Kontakt nur per Messenger und Support, der technische Fragen an „den Server“ weiterleitet.'],
    ],
    related: ['/iptv-anbieter/', '/iptv-anbieter-liste/', '/iptv-server/', '/xtream-codes/', '/iptv-kosten/', '/iptv-testen/'],
    keywords: ['reseller for iptv', 'iptv reseller', 'iptv reseller panel', 'iptv credits'],
  },
];
