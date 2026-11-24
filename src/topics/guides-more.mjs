// Ratgeber pages added in the November 2026 keyword pass: free test,
// IPTV servers, channel lists/EPG and VOD. Offer facts and prices come from
// site.mjs only; no channel or brand claims.
import { site, plans, devicePrices, included, offer, homeContent, euro } from '../site.mjs';
import { L, ol } from './util.mjs';

const paid = plans.filter((p) => !p.trial);
const trialPlan = plans.find((p) => p.trial);
const maxDevices = Math.max(...Object.keys(devicePrices).map(Number));
const vod = included.find((i) => /VOD/.test(i)) || 'Filme & Serien auf Abruf';
const live = included.find((i) => /Live/.test(i)) || 'Live-TV';
const epg = included.find((i) => /EPG/.test(i)) || 'EPG & Catch-Up TV';

export const offerSchema = {
  '@type': 'Product',
  '@id': `${site.url}/#iptv-abo`,
  name: `${site.name} IPTV-Abo`,
  description: offer.summary,
  brand: { '@type': 'Brand', name: site.name },
  image: `${site.url}${site.ogImage}`,
  url: `${site.url}/#preise`,
  offers: plans.map((p) => ({
    '@type': 'Offer',
    name: p.label,
    price: p.price,
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    url: `${site.url}/#preise`,
    ...(p.months ? { eligibleDuration: { '@type': 'QuantitativeValue', value: p.months, unitCode: 'MON' } } : {}),
  })),
};

export default [

  {
    path: '/iptv-testen/',
    hub: 'ratgeber',
    name: 'IPTV kostenlos testen',
    teaser: 'Testline anfragen, auf dem eigenen Gerät prüfen, dann entscheiden.',
    icon: 'play',
    title: `IPTV kostenlos testen: Testline anfragen | ${site.name}`,
    description: 'IPTV kostenlos testen: So bekommen Sie eine Testline, was Sie im IPTV-Test prüfen sollten und warum ein Gratis-Test ohne Zahlungsdaten der sichere Weg ist.',
    kicker: 'Kostenlos testen',
    h1: 'IPTV kostenlos testen – so funktioniert die Testline',
    lead: `Bevor Sie ein IPTV-Paket kaufen, sollten Sie es auf Ihrem eigenen Gerät ausprobieren. Bei ${site.name} fragen Sie dafür einen kostenlosen Testzugang an – eine sogenannte <strong>IPTV-Testline</strong>. Sie zahlen nichts, geben keine Zahlungsdaten an und entscheiden danach in Ruhe.`,
    facts: [
      ['Kosten', trialPlan ? euro(trialPlan.price) : 'kostenlos'],
      ['Geräte', trialPlan ? `${trialPlan.devices} Gerät` : '1 Gerät'],
      ['Leistungen', 'Dieselben Inhalte wie in den Paketen'],
      ['Zahlungsdaten', 'Nicht nötig'],
      ['Danach', `${paid.map((p) => p.label).join(' oder ')}, keine automatische Verlängerung`],
    ],
    schema: [offerSchema],
    sections: [
      { id: 'testline', h: 'Was ist eine IPTV-Testline?', html: `
<p>Eine Testline ist ein zeitlich begrenzter Zugang mit eigenen Zugangsdaten: Benutzername, Passwort und Server-URL für den ${L('/xtream-codes/', 'Xtream-Codes-Login')} oder ein ${L('/m3u-playlist/', 'M3U-Link')}. Technisch ist sie dasselbe wie ein bezahlter Zugang – nur eben zum Ausprobieren. Auf Englisch heißt das „IPTV free trial“ oder kurz „IPTV trial“; viele suchen auch nach einem „24h-Test“, einem „Premium-Test“ oder einem „IPTV-Tester“ und meinen damit dasselbe. So sehen Sie, wie gut die App auf Ihrem Gerät läuft und wie stabil das Bild über Ihre Leitung ist.</p>
<p>Der kostenlose Test enthält dieselben Leistungen wie unsere Pakete: ${included.join(' · ')}. Er gilt für ein Gerät; wie lange der Testzugang aktiv ist, teilen wir Ihnen zusammen mit den Zugangsdaten mit.</p>` },
      { id: 'anfragen', h: 'So fordern Sie Ihren IPTV-Test an', html: ol([
        `Öffnen Sie das ${L('/#kontakt', 'Anfrageformular')} oder schreiben Sie eine E-Mail an ${site.email}.`,
        `Nennen Sie Ihr Gerät (zum Beispiel ${L('/iptv-fire-tv-stick/', 'Fire TV Stick')}, ${L('/iptv-samsung-tv/', 'Samsung TV')} oder ${L('/iptv-apple-tv/', 'iPhone')}) und, falls vorhanden, Ihre bevorzugte App.`,
        'Sie erhalten Ihre Test-Zugangsdaten und eine passende Anleitung.',
        `Installieren Sie die App, melden Sie sich an und schauen Sie los. Hilfe gibt es unter ${L('/iptv-apps/', 'IPTV-Apps')} und persönlich bei uns.`,
      ]) },
      { id: 'pruefen', h: 'Das sollten Sie während des Tests prüfen', html: `
<p>Ein IPTV-Test ist nur so gut wie das, was Sie dabei ausprobieren. Diese Punkte sagen am meisten über den späteren Alltag aus:</p>
<div class="table-wrap" role="region" aria-labelledby="test-tab" tabindex="0"><table class="table">
<caption id="test-tab">Checkliste für den IPTV-Test</caption>
<thead><tr><th scope="col">Prüfpunkt</th><th scope="col">So testen Sie</th></tr></thead>
<tbody>
<tr><th scope="row">Stabilität am Abend</th><td>Schauen Sie zur Hauptsendezeit, wenn Heimnetz und Leitungen am stärksten ausgelastet sind.</td></tr>
<tr><th scope="row">Umschaltzeit</th><td>Wechseln Sie mehrmals zwischen Sendern und achten Sie darauf, wie schnell das Bild steht.</td></tr>
<tr><th scope="row">Programmführer (EPG)</th><td>Prüfen Sie, ob Sendungen und Uhrzeiten stimmen – mehr unter ${L('/iptv-senderliste/', 'Senderliste und EPG')}.</td></tr>
<tr><th scope="row">Bildqualität</th><td>Testen Sie HD und, falls Ihr Gerät es kann, ${L('/iptv-4k/', '4K')}.</td></tr>
<tr><th scope="row">Filme &amp; Serien</th><td>Starten Sie einen Film aus dem ${L('/iptv-vod/', 'VOD-Bereich')} und spulen Sie vor und zurück.</td></tr>
<tr><th scope="row">Bedienung</th><td>Passt die App zur Fernbedienung? Falls nicht, probieren Sie eine andere aus dem ${L('/iptv-apps/', 'App-Vergleich')}.</td></tr>
</tbody></table></div>
<p>Ruckelt es? Dann liegt es oft am WLAN. Ein LAN-Kabel oder die Tipps unter ${L('/iptv-probleme/', 'IPTV-Probleme beheben')} schaffen meist schnell Abhilfe – genau dafür ist der Test da.</p>` },
      { id: 'danach', h: 'Nach dem Test: Paket wählen', html: `
<p>Hat Sie der Test überzeugt, wählen Sie ${paid.map((p) => `„${p.label}“ (ab ${euro(p.price)})`).join(' oder ')} und zwischen 1 und ${maxDevices} gleichzeitig genutzten Geräten. ${homeContent.billing} Alle Preise und Leistungen finden Sie bei den ${L('/#preise', 'Paketen')} und ausführlich unter ${L('/iptv-kaufen/', 'IPTV kaufen')}.</p>` },
      { id: 'vorsicht', h: '„IPTV gratis testen“: Darauf sollten Sie achten', html: `
<ul>
  <li><strong>Keine Zahlungsdaten für einen Gratis-Test:</strong> Wer für einen „kostenlosen“ Test Kreditkarte oder Gutscheincode verlangt, verkauft oft ein Abo mit automatischer Verlängerung.</li>
  <li><strong>Impressum prüfen:</strong> Ein seriöser Anbieter nennt, wer hinter dem Angebot steht – mehr unter ${L('/iptv-anbieter/', 'IPTV-Anbieter wählen')}.</li>
  <li><strong>Keine Zugangsdaten auf Fremdseiten:</strong> Geben Sie Ihre Testline nicht in Online-„Checker“ ein – siehe ${L('/iptv-server/', 'IPTV-Server und Checker')}.</li>
  <li><strong>Keine Gratis-Listen aus dem Netz:</strong> Öffentliche M3U-Listen sind kein Test, sondern ein Risiko – siehe ${L('/m3u-playlist/', 'M3U-Playlist')}.</li>
</ul>` },
    ],
    faq: [
      ['Kann ich IPTV kostenlos testen?', `Ja. Bei ${site.name} fragen Sie über das <a href="/#kontakt">Anfrageformular</a> einen kostenlosen Testzugang für ein Gerät an. Zahlungsdaten brauchen Sie dafür nicht.`],
      ['Was ist der Unterschied zwischen IPTV-Test und Testline?', 'Keiner. „Testline“ ist der in der IPTV-Welt übliche Begriff für einen zeitlich begrenzten Testzugang mit eigenen Zugangsdaten.'],
      ['Wie lange dauert der IPTV-Test?', 'Wie lange Ihr Testzugang aktiv ist, teilen wir Ihnen zusammen mit den Zugangsdaten mit. Planen Sie den Test so, dass Sie auch einmal am Abend schauen können.'],
      ['Ist im Test alles enthalten?', 'Ja. Der kostenlose Test enthält dieselben Leistungen wie unsere Pakete, gilt aber für ein Gerät. Der IBO-Player-Bonus ist dem Jahrespaket vorbehalten.'],
      ['Verlängert sich der Test automatisch in ein Abo?', 'Nein. Der Test endet von selbst. Ein Paket kaufen Sie nur, wenn Sie es ausdrücklich bestellen – und auch die Pakete verlängern sich nicht automatisch.'],
      ['Welche App brauche ich für den Test?', 'Das hängt vom Gerät ab. Nennen Sie uns Ihr Gerät, dann empfehlen wir eine passende App. Eine Übersicht finden Sie unter <a href="/iptv-apps/">IPTV-Apps</a>.'],
    ],
    related: ['/#kontakt', '/iptv-kaufen/', '/iptv-apps/', '/iptv-geraete/', '/iptv-probleme/', '/#preise'],
    keywords: ['iptv testline', 'iptv test', 'iptv tester', 'iptv free trial', 'iptv 24h test', 'iptv free test', 'iptv premium test', 'iptv test 24', 'iptv line test', 'testline iptv', 'iptv gratis testen', 'iptv test line', 'iptv trial', 'test ip tv'],
  },

  {
    path: '/iptv-server/',
    hub: 'ratgeber',
    name: 'IPTV-Server',
    teaser: 'Server-URL, Port, Portal und Server-Status verständlich erklärt.',
    icon: 'wifi',
    title: `IPTV-Server: Server-URL, Port & Status erklärt | ${site.name}`,
    description: 'Was ist ein IPTV-Server? Server-URL, Port und Portal-Adresse erklärt, wie Sie prüfen, ob der Server erreichbar ist, und warum Online-IPTV-Checker riskant sind.',
    kicker: 'Ratgeber',
    h1: 'IPTV-Server: Server-URL, Port und Status verständlich erklärt',
    lead: 'Der IPTV-Server ist die Gegenstelle Ihrer App: Er prüft Ihre Zugangsdaten und liefert Senderliste, Programmführer und Streams. Für Sie zählen vor allem drei Dinge – die richtige Server-URL, der passende Port und die Frage, ob ein Problem bei Ihnen oder beim Server liegt.',
    sections: [
      { id: 'funktion', h: 'Was ein IPTV-Server macht', html: `
<p>Melden Sie sich in einer ${L('/iptv-apps/', 'IPTV-App')} an, schickt die App Benutzername und Passwort an den Server. Der Server prüft, ob Ihr Paket aktiv ist und wie viele Geräte gleichzeitig schauen dürfen. Danach liefert er drei Arten von Daten:</p>
<ul>
  <li><strong>Senderliste und Kategorien</strong> – siehe ${L('/iptv-senderliste/', 'IPTV-Senderliste')}.</li>
  <li><strong>Programmführer (EPG)</strong> als XMLTV-Daten.</li>
  <li><strong>Streams</strong> für Live-TV sowie ${L('/iptv-vod/', 'Filme und Serien auf Abruf')}.</li>
</ul>` },
      { id: 'adresse', h: 'Server-URL, Port und Portal-Adresse', html: `
<div class="table-wrap" role="region" aria-labelledby="server-tab" tabindex="0"><table class="table">
<caption id="server-tab">Welche Server-Angabe welche App erwartet (Beispielwerte)</caption>
<thead><tr><th scope="col">Anmeldeart</th><th scope="col">Server-Angabe</th><th scope="col">Typische Apps und Geräte</th></tr></thead>
<tbody>
<tr><th scope="row">${L('/xtream-codes/', 'Xtream Codes')}</th><td><code>http://server.example:8080</code></td><td>Smarters, TiviMate, XCIPTV, IBO Player</td></tr>
<tr><th scope="row">${L('/m3u-playlist/', 'M3U-Link')}</th><td><code>http://server.example:8080/get.php?…</code></td><td>VLC, Kodi, Smart IPTV, SS IPTV</td></tr>
<tr><th scope="row">Portal (Stalker)</th><td><code>http://server.example:8080/c/</code></td><td>${L('/mag-box/', 'MAG-Box')}, ${L('/formuler/', 'Formuler')}, ${L('/stbemu/', 'STBEmu')}</td></tr>
</tbody></table></div>
<p>Der <strong>Port</strong> ist die Zahl nach dem Doppelpunkt, etwa <code>:8080</code> oder <code>:80</code>. Fehlt er, landet die App am falschen „Eingang“ des Servers und meldet einen Login-Fehler. Übernehmen Sie die Adresse deshalb genau so, wie sie in Ihrer Zugangs-E-Mail steht – mit <code>http://</code> und ohne Schrägstrich am Ende, sofern nicht anders angegeben.</p>` },
      { id: 'status', h: 'Server down oder Problem bei mir? So finden Sie es heraus', html: ol([
        'Öffnen Sie auf demselben Gerät eine Website oder ein Video. Lädt nichts, liegt es an Ihrer Internetverbindung.',
        'Probieren Sie Ihren Zugang auf einem zweiten Gerät oder in einer zweiten App. Läuft es dort, liegt es an der ersten App oder am Gerät.',
        'Prüfen Sie, ob die App eine Meldung wie „Account expired“ oder „Max connections“ zeigt – dann ist das Paket abgelaufen oder es schauen bereits zu viele Geräte gleichzeitig.',
        'Starten Sie Router und Gerät neu und leeren Sie den App-Cache.',
        `Hilft nichts, ${L('/#kontakt', 'schreiben Sie uns')} mit Gerät, App und Fehlermeldung. Wir sehen, ob Ihr Zugang den Server erreicht.`,
      ]) + `<p>Weitere Lösungen nach Fehlerbild finden Sie unter ${L('/iptv-probleme/', 'IPTV-Probleme beheben')}.</p>` },
      { id: 'checker', h: 'IPTV-Checker und Online-Tester: lieber nicht', html: `
<p>Im Netz gibt es Websites und Apps, die versprechen, IPTV-Zugänge oder M3U-Listen online zu „checken“. Dafür müssen Sie Ihre vollständigen Zugangsdaten eingeben – und geben sie damit aus der Hand. Solche Daten werden gesammelt und weitergegeben; Ihr Zugang kann dadurch von Fremden mitbenutzt und gesperrt werden. Ob Ihr Zugang funktioniert, prüfen Sie sicherer direkt in Ihrer App. Vor dem Kauf ist ein ${L('/iptv-testen/', 'kostenloser Test')} der bessere „IPTV-Tester“.</p>` },
      { id: 'eigener-server', h: 'Eigenen IPTV-Server betreiben?', html: `
<p>Für eigene, legale Inhalte ist das möglich: Wer zum Beispiel Fernsehen per Satellit oder DVB-C empfängt, kann es mit Software wie TVHeadend oder ${L('/plex-jellyfin-iptv/', 'Jellyfin')} im Heimnetz als IPTV verteilen. Das ist ein Bastelprojekt mit eigener Hardware und ersetzt kein IPTV-Abo. Als Kunde von ${site.name} brauchen Sie keinen eigenen Server – Sie tragen nur die Server-Angaben aus Ihrer E-Mail in die App ein.</p>` },
    ],
    faq: [
      ['Was ist ein IPTV-Server?', 'Der Rechner Ihres IPTV-Anbieters, der Ihre Zugangsdaten prüft und Senderliste, Programmführer und Streams an Ihre App liefert.'],
      ['Wo finde ich meine Server-URL?', 'In der E-Mail mit Ihren Zugangsdaten. Übernehmen Sie sie genau so, wie sie dort steht – inklusive http:// und Port.'],
      ['Was bedeutet „Max connections reached“?', 'Es schauen bereits so viele Geräte gleichzeitig, wie Ihr Paket erlaubt. Beenden Sie die Wiedergabe auf einem anderen Gerät oder wählen Sie ein Paket mit mehr Geräten.'],
      ['Wie erkenne ich, ob der IPTV-Server erreichbar ist?', 'Testen Sie Ihren Zugang auf einem zweiten Gerät. Läuft er dort, liegt es nicht am Server. Im Zweifel schreiben Sie uns – wir prüfen das für Sie.'],
      ['Ist ein IPTV-Checker sicher?', 'Wir raten davon ab. Wer Zugangsdaten auf fremden Websites eingibt, gibt sie aus der Hand.'],
    ],
    related: ['/xtream-codes/', '/m3u-playlist/', '/iptv-probleme/', '/mag-box/', '/iptv-testen/', '/iptv-apps/'],
    keywords: ['iptv server', 'iptv servers', 'iptvportal', 'iptv checker', 'iptv checker online'],
  },

  {
    path: '/iptv-senderliste/',
    hub: 'ratgeber',
    name: 'IPTV-Senderliste & EPG',
    teaser: 'Sender sortieren, Favoriten anlegen und den Programmführer richtig nutzen.',
    icon: 'tv',
    title: `IPTV-Senderliste & EPG: Sender sortieren | ${site.name}`,
    description: 'IPTV-Senderliste verstehen: Kategorien, Favoriten und Suche nutzen, den Programmführer (EPG) einrichten und Sender in TiviMate, Smarters & Co. sortieren.',
    kicker: 'Ratgeber',
    h1: 'IPTV-Senderliste und EPG: So behalten Sie den Überblick',
    lead: `Eine große IPTV-Senderliste ist nur dann ein Genuss, wenn Sie Ihre Sender schnell finden. Hier lesen Sie, wie die Liste aufgebaut ist, wie Sie Favoriten anlegen und wie der elektronische Programmführer (EPG) funktioniert. ${site.name} umfasst ${live} sowie ${epg}.`,
    sections: [
      { id: 'aufbau', h: 'So ist eine IPTV-Senderliste aufgebaut', html: `
<p>Der IPTV-Server liefert die Sender nicht als lange, ungeordnete Liste, sondern in <strong>Kategorien</strong> (auch „Gruppen“ genannt). In Ihrer App erscheinen sie als Ordner, etwa nach Ländern, Themen oder Qualität. Zu jedem Sender gehören ein Name, ein Logo und eine Kennung, über die die App ihn mit dem Programmführer verknüpft.</p>
<p>Bei einer ${L('/m3u-playlist/', 'M3U-Playlist')} stehen diese Angaben in der Datei (<code>group-title</code>, <code>tvg-logo</code>, <code>tvg-id</code>), beim ${L('/xtream-codes/', 'Xtream-Codes-Login')} lädt die App sie automatisch vom Server.</p>` },
      { id: 'favoriten', h: 'Favoriten, Suche und eigene Reihenfolge', html: `
<div class="table-wrap" role="region" aria-labelledby="fav-tab" tabindex="0"><table class="table">
<caption id="fav-tab">Senderliste ordnen – so geht es in gängigen Apps (Stand der Menüs kann abweichen)</caption>
<thead><tr><th scope="col">App</th><th scope="col">Favorit anlegen</th><th scope="col">Kategorien ausblenden</th></tr></thead>
<tbody>
<tr><th scope="row">${L('/tivimate/', 'TiviMate')}</th><td>OK-Taste lang drücken › „Zu Favoriten“</td><td>Einstellungen › Playlists › Gruppen verwalten (Premium)</td></tr>
<tr><th scope="row">${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')}</th><td>Sender lang drücken › „Add to favourite“</td><td>Kategorie lang drücken bzw. Einstellungen</td></tr>
<tr><th scope="row">${L('/ibo-player/', 'IBO Player')}</th><td>Sender markieren › Favoriten-Symbol</td><td>Kategorien sperren oder ausblenden in den Einstellungen</td></tr>
<tr><th scope="row">${L('/kodi-iptv/', 'Kodi')}</th><td>Kontextmenü › „Zu Favoriten hinzufügen“</td><td>Kanalgruppen im PVR-Bereich bearbeiten</td></tr>
</tbody></table></div>
<p>Unser Tipp: Legen Sie gleich zu Beginn eine Favoritenliste mit den 10 bis 20 Sendern an, die Sie wirklich schauen. Die meisten Apps können beim Start direkt mit den Favoriten öffnen.</p>` },
      { id: 'epg', h: 'Programmführer (EPG) einrichten', html: `
<p>Der <strong>EPG</strong> (Electronic Program Guide) zeigt, was gerade läuft und was als Nächstes kommt. Beim Xtream-Codes-Login lädt die App ihn automatisch. Bei M3U tragen Sie die EPG-Adresse (XMLTV) separat ein.</p>
${ol([
  'Nach dem ersten Login einige Minuten warten – der Programmführer wird im Hintergrund geladen.',
  'In den App-Einstellungen das automatische EPG-Update aktivieren (zum Beispiel täglich).',
  'Prüfen, ob Datum, Uhrzeit und Zeitzone des Geräts stimmen. Eine falsche Zeitzone verschiebt das ganze Programm.',
  'Fehlt bei einzelnen Sendern das Programm, die EPG-Daten manuell aktualisieren oder uns kurz Bescheid geben.',
])}` },
      { id: 'catchup', h: 'Catch-Up: Verpasstes nachholen', html: `
<p>Mit Catch-Up starten Sie bereits gelaufene Sendungen direkt aus dem Programmführer – bei Sendern, die dafür freigeschaltet sind. In vielen Apps erkennen Sie das an einem Uhr- oder Pfeilsymbol neben dem Sender. Mehr dazu und zu Filmen und Serien auf Abruf unter ${L('/iptv-vod/', 'IPTV-VOD und Catch-Up')}.</p>` },
      { id: 'alle-sender', h: '„IPTV mit allen Sendern“ – was steckt dahinter?', html: `
<p>Viele Anzeigen versprechen „alle Sender“. Lassen Sie sich davon nicht blenden: Entscheidend ist, dass das Angebot rechtmäßig ist, stabil läuft und Sie Ihre Sender schnell finden. Was im Angebot von ${site.name} enthalten ist, sehen Sie bei den ${L('/#preise', 'Paketen')}: ${offer.summary} Am besten überzeugen Sie sich selbst mit einem ${L('/iptv-testen/', 'kostenlosen Test')}.</p>` },
    ],
    faq: [
      ['Wie sortiere ich meine IPTV-Senderliste?', 'Am einfachsten über Favoriten: Markieren Sie die Sender, die Sie oft schauen. Apps wie TiviMate erlauben zusätzlich eine eigene Reihenfolge und das Ausblenden ganzer Kategorien.'],
      ['Warum fehlt bei manchen Sendern der Programmführer?', 'Meist ist der EPG noch nicht vollständig geladen oder die Zeitzone des Geräts stimmt nicht. Aktualisieren Sie den EPG in den App-Einstellungen manuell.'],
      ['Was bedeutet EPG?', 'Electronic Program Guide – der elektronische Programmführer, der zeigt, was gerade läuft und was als Nächstes kommt.'],
      ['Kann ich die Senderliste auf mehreren Geräten nutzen?', 'Ja. Sie melden sich auf jedem Gerät mit denselben Zugangsdaten an. Favoriten speichern die meisten Apps allerdings pro Gerät.'],
      ['Gibt es eine Senderliste zum Herunterladen?', 'Ihre Senderliste kommt direkt vom Server in Ihre App. Kunden erhalten zusätzlich einen M3U-Link für Apps, die mit Playlists arbeiten.'],
    ],
    related: ['/iptv-vod/', '/xtream-codes/', '/m3u-playlist/', '/tivimate/', '/iptv-testen/', '/#preise'],
    keywords: ['iptv sender', 'iptv alle sender'],
  },

  {
    path: '/iptv-vod/',
    hub: 'ratgeber',
    name: 'IPTV-VOD: Filme & Serien',
    teaser: 'Filme und Serien auf Abruf, Catch-Up und Aufnahmen erklärt.',
    icon: 'play',
    title: `IPTV-VOD: Filme & Serien auf Abruf | ${site.name}`,
    description: 'IPTV-VOD erklärt: Filme und Serien auf Abruf in der IPTV-App finden, Catch-Up nutzen, Sendungen aufnehmen (DVR) sowie Untertitel und Tonspuren einstellen.',
    kicker: 'Ratgeber',
    h1: 'IPTV-VOD: Filme und Serien auf Abruf',
    lead: `Neben Live-Fernsehen bieten viele IPTV-Zugänge Filme und Serien auf Abruf – kurz <strong>VOD</strong> (Video on Demand). Bei ${site.name} gehören ${vod} zu jedem Paket. Hier lesen Sie, wo Sie VOD in Ihrer App finden, wie Catch-Up funktioniert und wann sich Aufnahmen lohnen.`,
    sections: [
      { id: 'was', h: 'Was ist IPTV-VOD?', html: `
<p>VOD bedeutet, dass Sie einen Film oder eine Serienfolge dann starten, wann Sie möchten – mit Pause, Vor- und Zurückspulen. Anders als beim Live-TV läuft kein festes Programm. In IPTV-Apps steckt VOD meist in eigenen Bereichen wie „Filme“ / „Movies“ und „Serien“ / „Series“, getrennt von „Live TV“.</p>` },
      { id: 'apps', h: 'Wo Sie Filme und Serien in Ihrer App finden', html: `
<div class="table-wrap" role="region" aria-labelledby="vod-tab" tabindex="0"><table class="table">
<caption id="vod-tab">VOD-Bereiche in gängigen IPTV-Apps</caption>
<thead><tr><th scope="col">App</th><th scope="col">Filme</th><th scope="col">Serien</th></tr></thead>
<tbody>
<tr><th scope="row">${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')}</th><td>„Movies“ auf dem Startbildschirm</td><td>„Series“ – Staffeln und Folgen</td></tr>
<tr><th scope="row">${L('/tivimate/', 'TiviMate')}</th><td>Bereich „Filme“ (je nach Version)</td><td>Bereich „Serien“ (je nach Version)</td></tr>
<tr><th scope="row">${L('/ibo-player/', 'IBO Player')}</th><td>„Movies“</td><td>„Series“</td></tr>
<tr><th scope="row">${L('/xciptv/', 'XCIPTV')}</th><td>„Movies“ / „VOD“</td><td>„Series“</td></tr>
<tr><th scope="row">M3U-Apps wie ${L('/vlc-iptv/', 'VLC')}</th><td colspan="2">Oft nur als Teil der Gesamtliste, ohne Cover und Staffeln</td></tr>
</tbody></table></div>
<p>Für VOD ist der ${L('/xtream-codes/', 'Xtream-Codes-Login')} die bessere Wahl: Die App lädt dann Cover, Beschreibungen, Staffeln und Folgen sauber getrennt. Mit einem reinen M3U-Link sind Filme und Serien oft nur lange Listen.</p>` },
      { id: 'catchup', h: 'Catch-Up: Sendungen der letzten Tage nachholen', html: `
<p>Catch-Up liegt zwischen Live-TV und VOD: Sie öffnen den Programmführer, gehen in die Vergangenheit und starten eine bereits gelaufene Sendung – sofern der Sender dafür freigeschaltet ist. Wie gut das klappt, hängt auch von der App ab; ${L('/tivimate/', 'TiviMate')} (Premium) und ${L('/iptv-smarters-pro/', 'Smarters')} unterstützen Catch-Up. Wie Sie den Programmführer einrichten, steht unter ${L('/iptv-senderliste/', 'Senderliste und EPG')}.</p>` },
      { id: 'aufnahme', h: 'Aufnehmen mit IPTV (DVR)', html: `
<ul>
  <li><strong>In der App:</strong> TiviMate Premium nimmt auf den internen Speicher oder einen USB-Stick auf – sinnvoll auf ${L('/iptv-box/', 'Android-Boxen')} mit genug Speicher.</li>
  <li><strong>Auf dem Heimserver:</strong> Mit ${L('/plex-jellyfin-iptv/', 'Plex oder Jellyfin')} lassen sich Aufnahmen zentral speichern und auf allen Geräten abspielen.</li>
  <li><strong>Auf Smart-TVs:</strong> Die meisten TV-Apps (Tizen, webOS) können nicht aufnehmen. Hier ist Catch-Up die bequemere Lösung.</li>
</ul>
<p>Beachten Sie: Aufnahmen sind nur für den privaten Gebrauch bestimmt.</p>` },
      { id: 'ton', h: 'Untertitel, Tonspur und Qualität', html: `
<p>Ob ein Film mehrere Tonspuren oder Untertitel hat, hängt vom jeweiligen Titel ab. In den meisten Apps finden Sie die Auswahl während der Wiedergabe über das Menü- oder Sprechblasen-Symbol. Spielt ein Film nicht flüssig, wechseln Sie in den Player-Einstellungen zwischen Hardware- und Software-Decoder oder auf einen externen Player wie VLC. Für Filme in Ultra HD lesen Sie ${L('/iptv-4k/', 'IPTV in 4K')}.</p>` },
    ],
    faq: [
      ['Was bedeutet VOD bei IPTV?', 'Video on Demand: Filme und Serien, die Sie jederzeit starten, pausieren und spulen können – unabhängig vom laufenden Programm.'],
      ['Sind Filme und Serien bei IPTV Genuss enthalten?', `Ja. ${vod} sind in allen Paketen und im kostenlosen Test enthalten.`],
      ['Warum sehe ich keine Serien in meiner App?', 'Mit einem M3U-Link zeigen manche Apps Serien nicht getrennt an. Melden Sie sich per Xtream Codes an, dann erscheinen Filme und Serien in eigenen Bereichen.'],
      ['Kann ich mit IPTV aufnehmen?', 'Ja, mit Apps wie TiviMate Premium oder über einen Heimserver mit Plex oder Jellyfin. Viele Smart-TV-Apps können nicht aufnehmen; dort hilft Catch-Up.'],
      ['Verbraucht VOD mehr Datenvolumen als Live-TV?', 'Ungefähr gleich viel: rund 2 bis 4 GB pro Stunde in HD und deutlich mehr in 4K.'],
    ],
    related: ['/iptv-senderliste/', '/xtream-codes/', '/tivimate/', '/plex-jellyfin-iptv/', '/iptv-4k/', '/#preise'],
    keywords: ['iptv vod', 'iptv series', 'iptv dvr'],
  },
];
