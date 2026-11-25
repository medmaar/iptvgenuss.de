// Pages for the brand keyword clusters added at the owner's request
// (25 November 2026): Sky via IPTV, football, sport, streaming services and
// the provider names people search for. The pages explain the technology and
// the generally known market situation; they make no statement about which
// channels any provider (including this one) carries. Rights situations are
// dated and hedged because they change every season.
import { site, devicePrices } from '../site.mjs';
import { L, ol, stand } from './util.mjs';

const updated = '2026-11-25';
const maxDevices = Math.max(...Object.keys(devicePrices).map(Number));
const fixes = (list) => `<ul>${list.map(([p, f]) => `<li><strong>${p}:</strong> ${f}</li>`).join('')}</ul>`;
const mail = site.email ? ` an <a href="mailto:${site.email}">${site.email}</a>` : '';
const brandNote = `Genannte Marken gehören ihren jeweiligen Inhabern. Wir stehen in keiner Verbindung zu ihnen. Angebote, Rechte und Preise Dritter ändern sich häufig (Stand: ${stand}).`;
const sportTips = fixes([
  ['Bildrate anpassen', `Am Fernseher bzw. Stick die automatische Anpassung der Bildwiederholrate aktivieren (Fire TV, Apple TV, TiviMate „AFR“). Fußball läuft meist mit 50 Bildern pro Sekunde – passt die Ausgabe nicht, wirkt der Ball ruckelig.`],
  ['Bewegungsglättung prüfen', 'Funktionen wie „Motion Plus“, „TruMotion“ oder „Auto Motion Plus“ können bei schnellen Szenen Artefakte erzeugen. Testweise abschalten oder auf eine niedrige Stufe stellen.'],
  ['LAN statt WLAN', 'Bei großen Spielen streamen viele Menschen gleichzeitig. Ein Kabel zum Router verhindert Aussetzer im entscheidenden Moment.'],
  ['Puffer erhöhen', 'In Apps wie TiviMate oder IPTV Smarters Pro einen etwas größeren Puffer wählen. Der Stream startet eine Sekunde später, läuft aber ruhiger.'],
  ['Rechtzeitig einschalten', 'Starten Sie den Stream einige Minuten vor Anpfiff und prüfen Sie Ton und Bild.'],
]);

// Provider and service names from the keyword list. Grouped by what we can
// verify: known apps, known device brands, and names we cannot verify.
const knownApps = [
  ['IPTV Extreme / Extreme IPTV', '/iptv-extreme/', 'ein IPTV-Player für Android, kein Anbieter'],
  ['Room IPTV', '/weitere-iptv-player/', 'ein Player für Android und Smart-TVs'],
  ['Flex IPTV', '/weitere-iptv-player/', 'ein Player für Apple-Geräte'],
  ['Simple IPTV', '/ss-iptv/', 'meist gemeint: SS IPTV (Simple Smart IPTV)'],
  ['Strong IPTV', '/iptv-strong-leap-s3/', 'Strong ist ein Hersteller von Receivern und Streaming-Boxen'],
];
const unverified = ['Hot IPTV', 'Mega IPTV', 'UP IPTV (upiptv)', 'Pandar TV', 'ForeverTV', 'CloudStream', '24IPTV', 'Ace IPTV', 'B1G IPTV', 'Big IPTV', 'Bobres IPTV', 'Crystal IPTV', 'Dino IPTV', 'Eagle IPTV', 'Fast IPTV', 'Golden IPTV / Gold IPTV', 'Hakuna IPTV', 'Helix IPTV', 'iGate IPTV', 'IPTV Rapid / Rapid Swiss TV', 'Lion IPTV', 'Mango IPTV', 'MaxHD IPTV', 'Nova IPTV', 'OTT IPTV', 'Ragnar IPTV', 'Sebastian IPTV', 'Sero IPTV', 'T-Rex IPTV', 'TV Team IPTV', 'World IPTV / Worldwide IPTV', 'Xtreme HD IPTV', 'Yu2Go', 'Besser IPTV', 'Dragon IPTV', 'IPTV Infinity', 'IPTV1', 'IPTV24', 'IPTV345', 'IPTV365', 'IPTV4less', 'Norago IPTV', 'Nord IPTV', 'Slynet TV', 'Szenebox IPTV'];

export default [
  // ── Sky ─────────────────────────────────────────────────────────────
  {
    path: '/sky-iptv/',
    hub: 'ratgeber',
    published: updated,
    updated,
    name: 'Sky über IPTV',
    teaser: 'Sky Q IPTV-Box, WOW und Sky über das Internet: Technik, Geräte und Voraussetzungen.',
    icon: 'tv',
    title: `Sky über IPTV: Sky Q IPTV-Box, WOW & Technik | ${site.name}`,
    description: 'Sky über IPTV: wie die Sky Q IPTV-Box funktioniert, was WOW ist, welche Internetleitung Sie brauchen und wie Sky über das Internet auf den Fernseher kommt.',
    kicker: 'Ratgeber',
    h1: 'Sky über IPTV: Sky Q IPTV-Box, WOW und was technisch dahintersteckt',
    lead: 'Sky über IPTV heißt: Die Programme kommen nicht per Satellit oder Kabel, sondern über Ihre Internetleitung. Sky selbst bietet dafür eigene Wege an, etwa die Sky Q IPTV-Box und die Streaming-App WOW. Wer nach „Sky IPTV“, „Sky IPTV Box“ oder „IPTV-Anbieter mit Sky“ sucht, findet hier, wie das technisch funktioniert, welche Geräte und Bandbreite nötig sind und worauf Sie bei Angeboten achten sollten.',
    facts: [
      ['Sky Q IPTV-Box', 'Sky-Receiver für den Empfang über das Internet statt Satellit oder Kabel'],
      ['WOW', 'Streaming-App von Sky für Serien, Filme und Live-Sport (je nach Paket)'],
      ['Bandbreite', 'als Richtwert 10 Mbit/s für HD, 25 Mbit/s für UHD'],
      ['Stand', stand],
    ],
    sources: [['Wikipedia: Sky Deutschland', 'https://de.wikipedia.org/wiki/Sky_Deutschland'], ['Wikipedia: Internet Protocol Television', 'https://de.wikipedia.org/wiki/Internet_Protocol_Television']],
    sections: [
      { id: 'was', h: 'Was bedeutet „Sky über IPTV“?', html: `
<p>Klassisch kam Sky per Satellit oder Kabel ins Haus. Inzwischen überträgt Sky seine Programme auch über das Internet. Für Sie als Zuschauer ändert sich vor allem die Technik im Hintergrund: Statt einer Schüssel oder einer Kabeldose brauchen Sie einen Internetanschluss und ein passendes Gerät. Was IPTV allgemein ist, erklärt ${L('/was-ist-iptv/', 'Was ist IPTV?')}.</p>
<p>Unter dem Suchbegriff „Sky IPTV“ werden im Netz zwei sehr unterschiedliche Dinge zusammengeworfen: die eigenen Internet-Produkte von Sky und Angebote anderer IPTV-Dienste, die mit Sky-Inhalten werben. Bei Letzteren sollten Sie genau prüfen, ob der Anbieter die Rechte an den Inhalten hat – mehr dazu unten.</p>` },
      { id: 'sky-q-iptv', h: 'Die Sky Q IPTV-Box: Sky ohne Satellit und Kabel', html: `
<p>Die Sky Q IPTV-Box ist ein Receiver von Sky, der das Programm über die Internetleitung empfängt. Sie wird wie ein normaler Receiver per HDMI an den Fernseher und per LAN oder WLAN an den Router angeschlossen. Typische Fragen:</p>
<ul>
  <li><strong>„Sky Q IPTV-Box kaufen“:</strong> Die Box ist Teil eines Sky-Abos; Konditionen, Preis und Mietmodell legt Sky fest. Aktuelle Angaben finden Sie direkt bei Sky.</li>
  <li><strong>„Sky Q IPTV-Box UHD“:</strong> Ob UHD-Inhalte laufen, hängt von Paket, Fernseher und Leitung ab. Für UHD sollten Sie deutlich mehr Bandbreite einplanen als für HD.</li>
  <li><strong>Aufnahmen und Mehrraum:</strong> Funktionen wie Aufnahmen oder ein Zweitgerät unterscheiden sich je nach Box-Generation und Paket.</li>
</ul>` },
      { id: 'wow', h: 'WOW: Sky als Streaming-App', html: `
<p>WOW ist der Streamingdienst von Sky. Er läuft als App auf Smart-TVs, Streaming-Sticks, Konsolen, Smartphones und im Browser und wird monatlich gebucht. Technisch ist WOW eine App wie Netflix – kein klassisches IPTV mit Senderliste und Programmführer. Welche Inhalte enthalten sind, legt Sky fest. Mehr zum Unterschied zwischen Streamingdiensten und IPTV: ${L('/iptv-streamingdienste/', 'IPTV und Streamingdienste')}.</p>` },
      { id: 'technik', h: 'Technische Voraussetzungen für Sky über das Internet', html: `
<ul>
  <li><strong>Leitung:</strong> Als Richtwert rund 10 Mbit/s für HD und 25 Mbit/s für UHD pro Gerät. Ihre echte Geschwindigkeit messen Sie mit der <a href="https://breitbandmessung.de/" rel="noopener" target="_blank">Breitbandmessung der Bundesnetzagentur</a>.</li>
  <li><strong>Heimnetz:</strong> Für Live-Fußball ein LAN-Kabel oder ein stabiles 5-GHz-WLAN nutzen. Tipps: ${L('/iptv-probleme/', 'IPTV-Probleme beheben')}.</li>
  <li><strong>Fernseher:</strong> HDMI-Anschluss; für UHD ein Fernseher mit 4K und HDCP 2.2 am genutzten HDMI-Eingang. Mehr zu 4K: ${L('/iptv-4k/', 'IPTV in 4K')}.</li>
  <li><strong>Internetanbieter:</strong> Sky über das Internet funktioniert grundsätzlich an jedem Anschluss – ob ${L('/iptv-telekom-vodafone/', 'Telekom, Vodafone, 1&amp;1 oder o2')}.</li>
</ul>` },
      { id: 'pruefen', h: 'IPTV-Anbieter mit Sky: worauf Sie achten sollten', html: `
<p>Viele IPTV-Angebote werben mit Sky-Inhalten. Prüfen Sie vor dem Kauf: Nennt die Website ein vollständiges Impressum? Gibt es einen ${L('/iptv-testen/', 'kostenlosen Test')}? Sind Laufzeit und Verlängerung klar geregelt? Und vor allem: Kann der Anbieter erklären, woher die Inhalte stammen? Der Europäische Gerichtshof hat 2017 entschieden, dass auch das Streamen aus offensichtlich rechtswidrigen Quellen gegen das Urheberrecht verstoßen kann. Die Kriterien im Detail: ${L('/iptv-anbieter/', 'IPTV-Anbieter vergleichen')}.</p>
<p>Was in den Paketen von ${site.name} enthalten ist, sehen Sie bei den ${L('/#preise', 'Paketen')}; Fragen beantworten wir persönlich${mail}.</p><p class="muted">${brandNote}</p>` },
    ],
    faq: [
      ['Was ist die Sky Q IPTV-Box?', 'Ein Receiver von Sky, der das Sky-Programm über die Internetleitung statt über Satellit oder Kabel empfängt.'],
      ['Wie viel Internet brauche ich für Sky über IPTV?', 'Als Richtwert rund 10 Mbit/s für HD und 25 Mbit/s für UHD pro gleichzeitig genutztem Gerät.'],
      ['Ist WOW dasselbe wie Sky?', 'WOW ist der Streamingdienst von Sky und wird als App genutzt. Welche Inhalte enthalten sind, legt Sky fest.'],
      ['Woran erkenne ich ein seriöses IPTV-Angebot mit Sky-Inhalten?', 'An Impressum, kostenlosem Test, klaren Laufzeiten und einer nachvollziehbaren Aussage zur Herkunft der Inhalte.'],
    ],
    related: ['/iptv-bundesliga/', '/iptv-sport/', '/iptv-anbieter/', '/iptv-4k/', '/iptv-telekom-vodafone/', '/iptv-box/'],
    keywords: ['sky iptv', 'sky ip tv', 'ip tv sky', 'iptv anbieter sky', 'iptv box sky', 'sky iptv box', 'sky q iptv box', 'sky q iptv box kaufen', 'sky q iptv box preis', 'sky q iptv box uhd', 'iptv sky deutschland', 'sky über iptv'],
  },

  // ── Football ────────────────────────────────────────────────────────
  {
    path: '/iptv-bundesliga/',
    hub: 'ratgeber',
    published: updated,
    updated,
    name: 'Bundesliga & Fußball per IPTV',
    teaser: 'Bundesliga und Champions League über das Internet: Rechte, Technik und ruckelfreies Bild.',
    icon: 'play',
    title: `IPTV Bundesliga: Fußball live per Internet | ${site.name}`,
    description: 'Bundesliga und Champions League per IPTV: wer die Rechte in Deutschland hat, welche Technik Sie brauchen und wie Fußball ohne Ruckler auf den Fernseher kommt.',
    kicker: 'Ratgeber',
    h1: 'IPTV Bundesliga: Fußball live über das Internet schauen',
    lead: 'Bundesliga, Champions League oder Premier League per IPTV: Fußball über das Internet ist längst Alltag. Damit das Spiel am Samstag nicht im entscheidenden Moment ruckelt, kommt es auf die richtige Technik an. Hier lesen Sie, wie die Übertragungsrechte in Deutschland grundsätzlich verteilt sind, welche Leitung und welches Gerät Sie brauchen und mit welchen Einstellungen Fußball flüssig läuft.',
    facts: [
      ['Bundesliga live', 'in Deutschland überwiegend bei Sky und DAZN (Stand Saison 2025/26)'],
      ['Champions League', 'überwiegend DAZN, ein Spiel pro Spieltag bei Amazon Prime Video (Stand 2025/26)'],
      ['Bildrate', 'meist 50 Bilder pro Sekunde – Ausgabe am Gerät anpassen'],
      ['Bandbreite', 'rund 10 Mbit/s HD, 25 Mbit/s 4K pro Gerät'],
    ],
    sections: [
      { id: 'rechte', h: 'Wer zeigt Bundesliga und Champions League in Deutschland?', html: `
<p>Die Live-Rechte an der Bundesliga werden in Paketen für mehrere Spielzeiten vergeben. In Deutschland liegen sie derzeit überwiegend bei <strong>Sky</strong> und <strong>DAZN</strong>; Zusammenfassungen zeigen frei empfangbare Sender. Die <strong>Champions League</strong> läuft überwiegend bei DAZN, ein Spiel pro Spieltag bei Amazon Prime Video. Welche Spiele genau wo laufen, ändert sich mit jeder Rechteperiode – prüfen Sie es vor der Saison bei den Rechteinhabern (Stand: ${stand}).</p>
<p>Sky und DAZN liefern ihre Programme selbst über das Internet: per App auf Smart-TV, Stick und Handy oder – bei Sky – auch über die ${L('/sky-iptv/', 'Sky Q IPTV-Box')}. Technisch ist das IPTV bzw. Streaming über Ihre Internetleitung.</p>` },
      { id: 'technik', h: 'Welche Technik brauche ich für Fußball per IPTV?', html: `
<ul>
  <li><strong>Leitung:</strong> Rund 10 Mbit/s für HD, 25 Mbit/s für ${L('/iptv-4k/', '4K')} – pro Gerät, das gleichzeitig läuft.</li>
  <li><strong>Gerät:</strong> Ein aktueller Stick wie der ${L('/iptv-fire-tv-stick-4k-max/', 'Fire TV Stick 4K Max')}, ein ${L('/iptv-apple-tv-4k/', 'Apple TV 4K')} oder ein Fernseher mit aktueller Software. Ältere Fernseher-Apps kommen bei 50-fps-Streams oft an ihre Grenzen.</li>
  <li><strong>App:</strong> Für Senderlisten mit Programmführer eignen sich ${L('/tivimate/', 'TiviMate')}, ${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')} oder der ${L('/ibo-player/', 'IBO Player')}.</li>
  <li><strong>Netzwerk:</strong> LAN-Kabel oder Powerline statt WLAN durch drei Wände.</li>
</ul>` },
      { id: 'tipps', h: 'Fünf Einstellungen für ruckelfreien Fußball', html: sportTips },
      { id: 'verzoegerung', h: 'Warum der Nachbar früher jubelt: Verzögerung bei IPTV', html: `
<p>Streams über das Internet sind meist einige Sekunden bis eine halbe Minute hinter dem Satellitensignal. Das liegt an Kodierung, Übertragung und Puffer der App. Ein kleiner Puffer verringert die Verzögerung, erhöht aber das Risiko von Aussetzern. Für entspanntes Schauen empfehlen wir Stabilität vor Geschwindigkeit – und Push-Nachrichten von Fußball-Apps während des Spiels auszuschalten.</p>` },
      { id: 'anbieter', h: 'Fußball-IPTV-Angebote richtig prüfen', html: `
<p>Viele Angebote werben mit „Bundesliga“ oder „Champions League“. Prüfen Sie Impressum, Laufzeit, Verlängerung und die Herkunft der Inhalte, und testen Sie vor dem Kauf zur Anstoßzeit, wenn die Last am höchsten ist. Wie Sie dabei vorgehen: ${L('/iptv-anbieter/', 'IPTV-Anbieter vergleichen')} und ${L('/iptv-testen/', 'IPTV kostenlos testen')}. Was ${site.name} enthält, sehen Sie bei den ${L('/#preise', 'Paketen')} – auf 1 bis ${maxDevices} Geräten gleichzeitig.</p><p class="muted">${brandNote}</p>` },
    ],
    faq: [
      ['Wer überträgt die Bundesliga in Deutschland live?', 'Derzeit überwiegend Sky und DAZN. Die genaue Aufteilung ändert sich mit jeder Rechteperiode.'],
      ['Wo läuft die Champions League?', 'In Deutschland überwiegend bei DAZN, ein Spiel pro Spieltag bei Amazon Prime Video (Stand Saison 2025/26).'],
      ['Warum ruckelt Fußball per IPTV?', 'Häufig wegen falscher Bildrate, Bewegungsglättung des Fernsehers oder WLAN. Bildrate anpassen und LAN nutzen hilft meist.'],
      ['Warum ist IPTV gegenüber Satellit verzögert?', 'Kodierung, Übertragung und Puffer der App kosten einige Sekunden. Ein kleinerer Puffer verringert die Verzögerung.'],
    ],
    related: ['/iptv-sport/', '/sky-iptv/', '/iptv-4k/', '/iptv-probleme/', '/iptv-fire-tv-stick-4k-max/', '/iptv-testen/'],
    keywords: ['iptv bundesliga', 'iptv champions league', 'iptv soccer', 'iptv premier league', 'iptv world cup', 'bundesliga iptv'],
  },

  // ── Sport ───────────────────────────────────────────────────────────
  {
    path: '/iptv-sport/',
    hub: 'ratgeber',
    published: updated,
    updated,
    name: 'Sport per IPTV',
    teaser: 'Formel 1, NBA, UFC, Tennis und mehr über das Internet: Technik, Zeitzonen, PPV.',
    icon: 'play',
    title: `IPTV Sport: Live-Sport über das Internet | ${site.name}`,
    description: 'Live-Sport per IPTV: Formel 1, NBA, UFC, Eurosport-Sportarten und mehr über das Internet. Technik, Zeitzonen, Pay-per-View und Tipps für flüssige Bilder.',
    kicker: 'Ratgeber',
    h1: 'IPTV Sport: Live-Sport über das Internet flüssig schauen',
    lead: 'Ob Formel 1 am Sonntagmittag, NBA in der Nacht oder ein UFC-Kampf am frühen Morgen: Live-Sport per IPTV läuft auf jedem Fernseher mit Internet. Sport stellt aber höhere Ansprüche an Leitung und Gerät als eine Talkshow. Hier erfahren Sie, worauf es bei IPTV Sport ankommt, wie internationale Sportsender und Pay-per-View grundsätzlich funktionieren und wie Sie schnelle Bilder ohne Ruckler auf den Bildschirm bringen.',
    facts: [
      ['Typische Bildrate', '50 oder 60 Bilder pro Sekunde'],
      ['Bandbreite', 'rund 10 Mbit/s HD, 25 Mbit/s 4K pro Gerät'],
      ['Wichtigste Einstellung', 'automatische Bildratenanpassung'],
      ['Nachts live', 'Catch-up und Aufnahmen nutzen'],
    ],
    sections: [
      { id: 'sportarten', h: 'Welche Sportarten Zuschauer per IPTV suchen', html: `
<ul>
  <li><strong>Motorsport:</strong> Formel 1, MotoGP – lange Übertragungen mit vielen Kameraschwenks, ideal mit hoher Bildrate.</li>
  <li><strong>US-Sport:</strong> NBA, NFL, NHL – meist nachts nach deutscher Zeit, deshalb sind ${L('/iptv-vod/', 'Catch-up und Aufnahmen')} besonders praktisch.</li>
  <li><strong>Kampfsport:</strong> UFC und Boxen laufen häufig als Pay-per-View (PPV): Ein einzelnes Event wird separat bezahlt.</li>
  <li><strong>Wintersport, Tennis, Radsport:</strong> Klassiker bei Eurosport und den öffentlich-rechtlichen Sendern.</li>
  <li><strong>Fußball:</strong> eigener Ratgeber unter ${L('/iptv-bundesliga/', 'Bundesliga per IPTV')}.</li>
</ul>
<p>Internationale Sportsender wie beIN Sports, ESPN oder Sky Sports sind in erster Linie für ihre Heimatmärkte lizenziert. Welche Rechte in Deutschland gelten, entscheidet der jeweilige Rechteinhaber pro Wettbewerb und Saison.</p>` },
      { id: 'ppv', h: 'Pay-per-View: was hinter „PPV“ steckt', html: `
<p>Pay-per-View bedeutet, dass ein einzelnes Ereignis – etwa ein großer Boxkampf – gesondert freigeschaltet wird. Rechteinhaber verkaufen PPV-Events über eigene Apps oder Partner. Bei IPTV-Angeboten, die „PPV inklusive“ versprechen, sollten Sie wie bei allen Inhalten prüfen, wie die Rechte geregelt sind (${L('/iptv-anbieter/', 'Kriterien')}).</p>` },
      { id: 'technik', h: 'Technik: So läuft schneller Sport flüssig', html: sportTips },
      { id: 'zeitzonen', h: 'Nachts live? Zeitzonen, Catch-up und Aufnahmen', html: `
<p>NBA-Spiele beginnen oft nach Mitternacht deutscher Zeit, UFC-Hauptkämpfe am frühen Morgen. Zwei Lösungen: <strong>Catch-up</strong> (die Sendung später aus dem Archiv abrufen, sofern der Sender es unterstützt) und <strong>Aufnahmen</strong> in Apps wie ${L('/tivimate-premium/', 'TiviMate Premium')} oder IPTV Extreme Pro. Achten Sie darauf, dass die Zeitzone des Geräts korrekt eingestellt ist, damit der Programmführer stimmt.</p>` },
      { id: 'geraete', h: 'Das richtige Gerät für Sport', html: `
<p>Für Sport lohnt sich ein leistungsfähiges Gerät: ${L('/iptv-apple-tv-4k/', 'Apple TV 4K')} (mit „Inhalt anpassen“), ${L('/iptv-nvidia-shield/', 'Nvidia Shield')} oder ${L('/iptv-fire-tv-stick-4k-max/', 'Fire TV Stick 4K Max')}. Viele Fernseher-Apps kommen mit 50/60-fps-Streams zurecht, ältere Modelle aber nicht immer. Sie schauen Sport auf mehreren Bildschirmen? Mit ${site.name} wählen Sie 1 bis ${maxDevices} Geräte gleichzeitig – ${L('/iptv-testen/', 'vorher kostenlos testen')}.</p><p class="muted">${brandNote}</p>` },
    ],
    faq: [
      ['Wie viel Internet brauche ich für Sport per IPTV?', 'Rund 10 Mbit/s für HD und 25 Mbit/s für 4K pro Gerät. Für Live-Sport ist eine stabile LAN-Verbindung wichtiger als die Maximalgeschwindigkeit.'],
      ['Was bedeutet PPV?', 'Pay-per-View: Ein einzelnes Event wird gesondert freigeschaltet, etwa ein großer Boxkampf.'],
      ['Wie schaue ich NBA oder UFC, wenn sie nachts laufen?', 'Mit Catch-up, sofern verfügbar, oder mit der Aufnahmefunktion einer App wie TiviMate Premium.'],
      ['Warum wirkt Formel 1 per IPTV ruckelig?', 'Meist passt die Bildrate des Geräts nicht zum Stream. Aktivieren Sie die automatische Bildratenanpassung.'],
    ],
    related: ['/iptv-bundesliga/', '/sky-iptv/', '/iptv-vod/', '/iptv-4k/', '/iptv-apple-tv-4k/', '/iptv-probleme/'],
    keywords: ['iptv sport', 'iptv bein sport', 'iptv espn', 'iptv eurosport', 'iptv f1', 'iptv nba', 'iptv ufc', 'iptv sky sport', 'sky sport iptv', 'iptv bbc', 'iptv england'],
  },

  // ── Streaming services ──────────────────────────────────────────────
  {
    path: '/iptv-streamingdienste/',
    hub: 'ratgeber',
    published: updated,
    updated,
    name: 'IPTV und Streamingdienste',
    teaser: 'Netflix, HBO Max, Discovery+, Pluto TV: was sie von IPTV unterscheidet und wie beides zusammenpasst.',
    icon: 'play',
    title: `IPTV und Netflix, HBO Max & Co.: Unterschied | ${site.name}`,
    description: 'IPTV oder Netflix, HBO Max, Discovery+ und Pluto TV? Was Streamingdienste von IPTV unterscheidet, wie Sie beides auf einem Gerät nutzen und was Pluto TV ist.',
    kicker: 'Ratgeber',
    h1: 'IPTV und Streamingdienste: Netflix, HBO Max, Discovery+ und Pluto TV',
    lead: 'Viele suchen nach „IPTV Netflix“ oder „IPTV HBO Max“ und meinen damit: Kann ich alles in einer App schauen? Die kurze Antwort: Streamingdienste wie Netflix, HBO Max oder Discovery+ funktionieren nur in ihren eigenen Apps. IPTV-Apps zeigen dagegen Senderlisten mit Programmführer. Beides läuft aber problemlos nebeneinander auf demselben Fernseher. Dieser Ratgeber erklärt die Unterschiede und zeigt, wie Sie beides bequem kombinieren.',
    facts: [
      ['Streamingdienst', 'eigene App, eigenes Abo, Inhalte auf Abruf'],
      ['IPTV', 'Senderliste mit Programmführer in einer IPTV-App, dazu oft VOD'],
      ['Pluto TV', 'kostenloses, werbefinanziertes Live-TV per App'],
      ['Gemeinsam nutzbar', 'ja, auf Smart-TV, Stick, Handy und PC'],
    ],
    sections: [
      { id: 'unterschied', h: 'Streamingdienst oder IPTV: der Unterschied', html: `
<div class="table-wrap" role="region" aria-labelledby="stream-tab" tabindex="0"><table class="table">
<caption id="stream-tab">Streamingdienste und IPTV im Vergleich</caption>
<thead><tr><th scope="col">Merkmal</th><th scope="col">Streamingdienst (Netflix, HBO Max, Discovery+)</th><th scope="col">IPTV</th></tr></thead>
<tbody>
<tr><th scope="row">Wiedergabe</th><td>nur in der App des Dienstes</td><td>in einer IPTV-App Ihrer Wahl</td></tr>
<tr><th scope="row">Live-TV</th><td>selten, meist Abruf</td><td>Schwerpunkt, mit Programmführer</td></tr>
<tr><th scope="row">Anmeldung</th><td>Konto beim Dienst</td><td>${L('/xtream-codes/', 'Xtream Codes')} oder ${L('/m3u-playlist/', 'M3U-Link')}</td></tr>
<tr><th scope="row">Kopierschutz</th><td>DRM, nur in zertifizierten Apps</td><td>abhängig vom Anbieter</td></tr>
</tbody></table></div>
<p>Weil Netflix, HBO Max und Discovery+ ihre Inhalte mit Kopierschutz (DRM) ausliefern, lassen sie sich nicht in IPTV-Apps wie TiviMate oder IPTV Smarters Pro einbinden. Angebote, die das versprechen, sollten Sie misstrauisch machen.</p>` },
      { id: 'pluto', h: 'Pluto TV: kostenloses IPTV mit Werbung', html: `
<p>Pluto TV ist ein kostenloser, werbefinanzierter Dienst mit linearen Themensendern und einer Mediathek. Fachleute nennen das FAST (Free Ad-supported Streaming TV). Technisch ist das IPTV, Sie nutzen es aber in der eigenen Pluto-TV-App. Ähnliche Angebote bauen inzwischen viele Fernseherhersteller direkt in ihre Geräte ein.</p>` },
      { id: 'kombinieren', h: 'Alles auf einem Gerät: so kombinieren Sie beides', html: `${ol([
  'Wählen Sie ein Gerät, auf dem alle gewünschten Apps laufen – zum Beispiel einen ' + L('/iptv-fire-tv-stick/', 'Fire TV Stick') + ', ein Gerät mit ' + L('/iptv-android/', 'Google TV') + ' oder ein ' + L('/iptv-apple-tv/', 'Apple TV') + '.',
  'Installieren Sie die Apps der Streamingdienste aus dem offiziellen Store.',
  'Installieren Sie eine IPTV-App wie ' + L('/tivimate/', 'TiviMate') + ' oder ' + L('/iptv-smarters-pro/', 'IPTV Smarters Pro') + ' und melden Sie sich mit Ihren IPTV-Zugangsdaten an.',
  'Legen Sie die meistgenutzten Apps auf dem Startbildschirm nach vorn. Bei Google TV und Fire TV geht das über die App-Leiste, beim Apple TV per langem Druck auf das Symbol.',
])}<p>Smart-TVs von Samsung und LG haben die großen Streaming-Apps meist vorinstalliert; für IPTV nutzen Sie dort Apps wie den ${L('/ibo-player/', 'IBO Player')}.</p>` },
      { id: 'kosten', h: 'Kosten im Blick behalten', html: `
<p>Streamingdienste werden meist monatlich abgerechnet und verlängern sich automatisch. Wer mehrere Dienste und IPTV kombiniert, sollte die Summe im Blick behalten und Dienste kündigen, die gerade nicht genutzt werden. Bei ${site.name} zahlen Sie einmalig für einen Monat oder ein Jahr, ohne automatische Verlängerung – ${L('/#preise', 'Preise ansehen')}.</p><p class="muted">${brandNote}</p>` },
    ],
    faq: [
      ['Kann ich Netflix in einer IPTV-App schauen?', 'Nein. Netflix, HBO Max und Discovery+ laufen wegen Kopierschutz nur in ihren eigenen Apps.'],
      ['Ist Pluto TV IPTV?', 'Technisch ja: kostenloses, werbefinanziertes Live-TV über das Internet, genutzt in der Pluto-TV-App.'],
      ['Kann ich IPTV und Netflix auf demselben Fernseher nutzen?', 'Ja. Installieren Sie beide Apps auf Smart-TV oder Stick und wechseln Sie über den Startbildschirm.'],
      ['Was ist der Unterschied zwischen VOD bei IPTV und Netflix?', 'Beides ist Abruf von Filmen und Serien. Netflix produziert und lizenziert eigene Inhalte in einer App; IPTV-VOD erscheint als Mediathek in Ihrer IPTV-App.'],
    ],
    related: ['/iptv-vod/', '/was-ist-iptv/', '/iptv-apps/', '/sky-iptv/', '/iptv-fire-tv-stick/', '/iptv-smart-tv/'],
    keywords: ['iptv netflix', 'iptv hbo', 'iptv hbo max', 'iptv discovery plus', 'iptv pluto tv', 'iptv fox', 'fox tv iptv'],
  },

  // ── Provider names ──────────────────────────────────────────────────
  {
    path: '/iptv-anbieter-liste/',
    hub: 'ratgeber',
    published: updated,
    updated,
    name: 'IPTV-Anbieter von A bis Z',
    teaser: 'Hot IPTV, Mega IPTV, UP IPTV & Co.: was hinter häufig gesuchten Namen steckt und wie Sie prüfen.',
    icon: 'book',
    title: `IPTV-Anbieter-Liste: Namen von A bis Z prüfen | ${site.name}`,
    description: 'Hot IPTV, Mega IPTV, UP IPTV, Crystal IPTV & Co.: häufig gesuchte IPTV-Namen von A bis Z, welche davon Apps sind und wie Sie jeden Anbieter selbst prüfen.',
    kicker: 'Ratgeber',
    h1: 'IPTV-Anbieter-Liste: häufig gesuchte Namen von A bis Z',
    lead: 'Hot IPTV, Mega IPTV, UP IPTV, Crystal IPTV, Nova IPTV: Wer IPTV sucht, stößt auf Dutzende Namen. Manche davon sind gar keine Anbieter, sondern Apps oder Gerätehersteller. Diese Liste ordnet die am häufigsten gesuchten Namen ein, sagt offen, wozu wir keine geprüften Informationen haben, und gibt Ihnen eine Checkliste, mit der Sie jeden Anbieter in wenigen Minuten selbst prüfen.',
    facts: [
      ['Namen in dieser Liste', `${knownApps.length + unverified.length}`],
      ['Davon Apps oder Gerätemarken', `${knownApps.length}`],
      ['Unsere Bewertung', 'keine – wir bewerten keine Anbieter, zu denen wir keine geprüften Angaben haben'],
    ],
    schema: [{ '@type': 'ItemList', name: 'Häufig gesuchte IPTV-Namen', itemListElement: [...knownApps.map(([n]) => n), ...unverified].map((n, i) => ({ '@type': 'ListItem', position: i + 1, name: n })) }],
    sections: [
      { id: 'apps', h: 'Keine Anbieter: Apps und Gerätemarken mit „IPTV“ im Namen', html: `
<p>Einige häufig gesuchte Namen bezeichnen keinen IPTV-Dienst, sondern Software oder Hardware. Sie enthalten selbst keine Sender:</p>
<ul>${knownApps.map(([n, href, t]) => `<li><strong>${n}:</strong> ${t} – ${L(href, 'zur Anleitung')}.</li>`).join('')}</ul>
<p>Ein Überblick über alle Player: ${L('/iptv-apps/', 'IPTV-Apps im Vergleich')}.</p>` },
      { id: 'namen', h: 'Häufig gesuchte IPTV-Namen von A bis Z', html: `
<p>Die folgenden Namen werden in Deutschland häufig in Verbindung mit IPTV gesucht. Zu Betreiber, Sitz, Rechten und Leistung dieser Angebote liegen uns <strong>keine geprüften Informationen</strong> vor. Wir bewerten sie deshalb nicht und raten weder zu noch ab. Die Liste dient der Orientierung; Namen werden oft von mehreren, nicht verbundenen Websites gleichzeitig verwendet.</p>
<ul class="name-list">${[...unverified].sort((a, b) => a.localeCompare(b, 'de')).map((n) => `<li>${n}</li>`).join('')}</ul>
<p>Mit der Checkliste unten prüfen Sie jedes dieser Angebote selbst.</p>` },
      { id: 'checkliste', h: 'Checkliste: jeden IPTV-Anbieter in zehn Minuten prüfen', html: `${ol([
  '<strong>Impressum:</strong> Gibt es ein vollständiges Impressum mit Name und ladungsfähiger Anschrift? In Deutschland ist es für geschäftsmäßige Websites Pflicht.',
  '<strong>Kontakt:</strong> Ist eine E-Mail-Adresse erreichbar, nicht nur ein Messenger-Kontakt?',
  '<strong>Test:</strong> Gibt es einen ' + L('/iptv-testen/', 'kostenlosen Test') + ' ohne Zahlungsdaten?',
  '<strong>Preis und Laufzeit:</strong> Sind Preis, Laufzeit und Verlängerung klar genannt? Vorsicht bei „Lifetime“ – siehe ' + L('/iptv-12-monate/', 'IPTV 12 Monate') + '.',
  '<strong>Zahlung:</strong> Gibt es nachvollziehbare Zahlungswege mit Rechnung statt nur Gutscheincodes oder Kryptowährung?',
  '<strong>Herkunft der Inhalte:</strong> Kann der Anbieter erklären, woher die Programme stammen?',
  '<strong>Geräte und Apps:</strong> Funktioniert der Zugang in Standard-Apps per Xtream Codes oder M3U – ohne Spezialbox?',
])}<p>Was Erfahrungsberichte im Netz aussagen, lesen Sie unter ${L('/iptv-reddit-forum/', 'IPTV auf Reddit und in Foren')}; die Rechtslage unter ${L('/iptv-anbieter/', 'IPTV-Anbieter vergleichen')}.</p>` },
      { id: 'genuss', h: `Und ${site.name}?`, html: `
<p>Wir legen unsere Konditionen offen: einmalige Zahlung, keine automatische Verlängerung, 1 bis ${maxDevices} Geräte, kostenloser Test und persönlicher Support auf Deutsch${mail}. Unser Zugang läuft in Standard-Apps wie ${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')}, ${L('/tivimate/', 'TiviMate')} und ${L('/ibo-player/', 'IBO Player')}. Wenden Sie die Checkliste gern auch auf uns an.</p><p class="muted">Genannte Namen und Marken gehören ihren jeweiligen Inhabern. Die Liste gibt Suchbegriffe wieder und ist keine Bewertung (Stand: ${stand}).</p>` },
    ],
    faq: [
      ['Ist Hot IPTV oder Mega IPTV seriös?', 'Dazu liegen uns keine geprüften Informationen vor. Prüfen Sie Impressum, Test, Laufzeit, Zahlung und Herkunft der Inhalte mit unserer Checkliste.'],
      ['Ist IPTV Extreme ein Anbieter?', 'Nein, IPTV Extreme ist ein Player für Android. Er enthält keine Sender; die Inhalte kommen von Ihrem IPTV-Zugang.'],
      ['Warum tauchen so viele ähnliche IPTV-Namen auf?', 'Namen werden oft von mehreren, nicht verbundenen Websites verwendet, und Angebote wechseln häufig ihren Namen.'],
      ['Wie finde ich heraus, wer hinter einem IPTV-Angebot steckt?', 'Über das Impressum. Fehlt es oder ist es unvollständig, ist das ein deutliches Warnzeichen.'],
    ],
    related: ['/iptv-anbieter/', '/iptv-reddit-forum/', '/iptv-testen/', '/iptv-12-monate/', '/iptv-apps/', '/weitere-iptv-player/'],
    keywords: ['hot iptv', 'hotiptv', 'mega iptv', 'megaiptv', 'mega ip tv', 'upiptv', 'extreme iptv', 'iptv extreme', 'pandar tv', 'forevertv', 'cloud stream', '24iptv', 'ace iptv', 'b1g iptv', 'big iptv', 'bobres iptv', 'crystal iptv', 'crystaliptv', 'dino iptv', 'eagle iptv', 'fast iptv', 'fastiptv', 'flex iptv', 'golden iptv', 'goldiptv', 'hakuna iptv', 'helix iptv', 'igate iptv', 'iptv rapid', 'lion iptv', 'mango iptv', 'mangoiptv', 'maxhd iptv', 'nova iptv', 'novaiptv', 'ottiptv', 'ragnar iptv', 'room iptv', 'room ip tv', 'sebastian iptv', 'sero iptv', 'trex iptv', 'tv team iptv', 'world iptv', 'worldwide iptv', 'xtreme hd iptv', 'yu2go', 'strong iptv', 'besseriptv', 'dragon iptv', 'dragoniptv', 'iptv infinity', 'iptv1', 'iptv24', 'iptv345', 'iptv365', 'iptv4less', 'norago iptv', 'nord iptv', 'rapid swiss iptv', 'rapid swiss tv', 'slynet tv', 'szenebox iptv'],
  },
];
