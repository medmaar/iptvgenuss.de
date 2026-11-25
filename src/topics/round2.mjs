// Keyword-gap pass 4 (25 November 2026). Hands keywords over to the new
// pages in guides-round2.mjs and to existing dedicated pages (one owner per
// cluster), links the new pages from their parents, and deepens pages where
// a keyword from the sheet was only weakly covered. Same rules as deepen.mjs:
// facts only, rights situations dated and hedged, no channel claims.
import { site } from '../site.mjs';
import { L, stand } from './util.mjs';

const updated = '2026-11-25';
const brandNote = `Genannte Marken gehören ihren jeweiligen Inhabern. Wir stehen in keiner Verbindung zu ihnen (Stand: ${stand}).`;

export default {
  // ── Hand-over to the new pages ─────────────────────────────────────────
  '/iptv-kaufen/': {
    updated,
    relatedFirst: ['/iptv-kosten/'],
    keywords: { remove: ['ip tv kosten', 'iptv kosten', 'iptv cena', 'iptv deals', 'iptv sale', 'iptv promotions', 'iptv plans', 'iptv packages'] },
  },
  '/iptv-anbieter/': {
    updated,
    relatedFirst: ['/iptv-kosten/', '/iptv-reseller/'],
    keywords: { remove: ['iptv preisvergleich'] },
  },
  '/iptv-apps/': {
    updated,
    relatedFirst: ['/beste-iptv-player/'],
    keywords: { remove: ['bester iptv player', 'best iptv player', 'best player iptv', 'beste iptv app', 'bester iptv player für fire tv stick kostenlos deutsch'] },
    faq: [
      ['Sind „iptvapp“ und „iptvpro“ eigene Apps?', 'Meist nicht. Hinter Suchbegriffen wie „iptvapp“, „IPTV Pro“ oder „iptv programa“ steckt in der Regel die Suche nach einem IPTV-Player allgemein oder nach IPTV Smarters Pro. Achten Sie auf den Entwicklernamen im offiziellen Store und laden Sie keine Nachbauten.'],
    ],
  },
  '/iptv-box/': {
    updated,
    relatedFirst: ['/beste-iptv-box/', '/android-tv-box-iptv/'],
    keywords: { remove: ['beste iptv box', 'iptv box kaufen', 'iptv box test', 'iptv receiver test', 'iptv box price', 'ugoos am7', 'homatics box q', 'iptv box android', 'box iptv android', 'box android iptv'] },
  },
  '/iptv-android/': {
    updated,
    relatedFirst: ['/android-tv-box-iptv/'],
    keywords: { remove: ['iptv tv box android'] },
  },
  '/m3u-playlist/': {
    updated,
    relatedFirst: ['/m3u8/'],
    keywords: { remove: ['iptv m3u8 list', 'm3u8 liste', 'm3u8 list', 'm3u8 iptv', 'iptv m3u8'] },
    faq: [
      ['Ist „mu3“ oder „m.m3u“ dasselbe wie M3U?', 'Ja, das sind Tippfehler für M3U. Gemeint ist immer die Playlist-Datei mit den Sendern Ihres IPTV-Anbieters.'],
    ],
  },
  '/xtream-codes/': { updated, relatedFirst: ['/m3u8/'] },
  '/iptv-12-monate/': { updated, relatedFirst: ['/iptv-kosten/'] },
  '/iptv-fire-tv-stick/': {
    updated,
    relatedFirst: ['/beste-iptv-player/'],
    sections: [
      { id: 'modellnummer', before: 'apps', h: 'Modellnummer wie „LY73PR“: welchen Fire TV Stick habe ich?', html: `
<p>Viele suchen nach Modellkennungen wie „Firestick LY73PR“, die auf Verpackung, Typenschild oder in Zulassungsunterlagen stehen. Für IPTV zählt aber nicht die Kennung, sondern das Betriebssystem. So finden Sie es heraus:</p>
<ol class="guide-steps">
  <li>Öffnen Sie <em>Einstellungen › Mein Fire TV › Info</em>. Dort stehen Gerätename und Softwareversion.</li>
  <li>Steht dort eine Fire-OS-Version, laufen Android-Apps wie ${L('/tivimate-fire-tv-stick/', 'TiviMate')}, ${L('/iptv-smarters-pro-fire-tv-stick/', 'IPTV Smarters Pro')} und ${L('/xciptv/', 'XCIPTV')}.</li>
  <li>Nutzt das Gerät Vega OS, laufen keine Android-Apps. Dann ist ein anderes Gerät die bessere Wahl – siehe ${L('/beste-iptv-box/', 'Beste IPTV-Box')}.</li>
</ol>` },
    ],
  },
  '/iptv-smarters-pro/': {
    updated,
    keywords: { remove: ['smarters lite', 'smarters iptv lite', 'iptv smarters lite'] },
    faq: [
      ['Ist „SmartersPro“ oder „IP TV Smarters Pro“ eine andere App?', 'Nein. „SmartersPro“, „IP TV Smarters Pro“, „Smarters IPTV Pro“ oder „IPTV Smarter Pro“ sind Schreibweisen derselben App. Achten Sie im Store auf den Entwickler und meiden Sie Nachbauten mit ähnlichem Namen.'],
    ],
  },
  '/smarters-player-lite/': {
    updated,
    keywords: { add: ['smarters lite', 'smarters iptv lite', 'iptv smarters lite'] },
  },

  // ── Smart-TV brands: keywords to the dedicated brand pages ─────────────
  '/iptv-smart-tv/': {
    updated,
    keywords: { remove: ['iptv sony', 'iptv sony bravia', 'iptv philips', 'iptv panasonic', 'iptv toshiba', 'iptv hisense', 'iptv hisense vidaa', 'iptv roku', 'iptv roku tv', 'iptv on roku tv'] },
  },
  '/iptv-sony-bravia/': { updated, keywords: { add: ['iptv sony', 'iptv sony bravia'] } },
  '/iptv-roku/': { updated, keywords: { add: ['iptv roku tv', 'iptv on roku tv'] } },

  // ── Spelling variants as honest FAQs ───────────────────────────────────
  '/ss-iptv/': {
    updated,
    faq: [['Ist „ssiptv“ dasselbe wie SS IPTV?', 'Ja. „ssiptv“, „SS IPTV“ und „Simple Smart IPTV“ meinen dieselbe App. Die offizielle Website des App-Anbieters ist ss-iptv.com; dort laden Sie auch Ihre M3U-Liste („ssiptv list“) hoch.']],
  },
  '/set-iptv/': {
    updated,
    faq: [['Sind „Smart OneIPTV“ und „Smarte One IPTV“ dieselbe App wie Smart One IPTV?', 'Ja, das sind Schreibweisen von Smart One IPTV. Mit Set IPTV („Set IP TV“) teilt die App das Prinzip der Aktivierung per MAC-Adresse, es sind aber zwei verschiedene Apps.']],
  },
  '/tivimate/': {
    updated,
    faq: [['Ist „Tivi Mate“ dieselbe App wie TiviMate?', 'Ja. „Tivi Mate“ und „TiviMate IPTV“ sind nur andere Schreibweisen. Die App gibt es offiziell für Android TV, Google TV und Fire TV.']],
  },
  '/smart-iptv/': {
    updated,
    faq: [['Was ist der Unterschied zwischen „Smart IP TV“, „SIP TV“ und Smart IPTV?', 'Keiner. „Smart IP TV“, „SIP TV“ und „SIPTV“ sind Schreibweisen bzw. die Kurzform von Smart IPTV, der App mit Playlist-Upload über siptv.app.']],
  },
  '/iptv-server/': {
    updated,
    faq: [['Was ist ein „iptvportal“?', 'Mit „IPTV-Portal“ ist meist eine Portal-Adresse gemeint, über die Boxen wie MAG oder Apps wie STBEmu per MAC-Adresse auf einen Server zugreifen. Es ist kein eigener Anbieter.']],
  },
  '/iptv-reddit-forum/': {
    updated,
    faq: [['Gibt es ein offizielles „iptvforum“?', 'Nein. Es gibt viele Foren mit IPTV-Bereichen, aber kein offizielles Forum. Achten Sie bei Empfehlungen auf versteckte Werbung und prüfen Sie jeden Anbieter selbst.']],
  },
  '/gse-smart-iptv/': {
    updated,
    faq: [['Ist „gseiptv“ eine andere App?', 'Nein, „gseiptv“ ist eine zusammengeschriebene Suche nach GSE Smart IPTV.']],
  },
  '/xciptv/': {
    updated,
    faq: [['Ist XCIPTV free, also kostenlos?', 'Ja, XCIPTV ist kostenlos. Laden Sie die App nur aus einer vertrauenswürdigen Quelle und meiden Sie angebliche „Pro“-Versionen von Download-Seiten.']],
  },
  '/iptv-anbieter-liste/': {
    updated,
    keywords: { remove: ['room iptv', 'flex iptv'] },
    relatedFirst: ['/iptv-reseller/'],
    faq: [['Warum werden Namen wie „hotiptv“ oder „megaiptv“ zusammengeschrieben gesucht?', 'Weil viele so tippen. „hotiptv“, „megaiptv“, „novaiptv“, „goldiptv“ oder „crystaliptv“ meinen dieselben Namen wie in unserer Liste. Für alle gilt: Prüfen Sie Impressum, Test und Laufzeit, bevor Sie zahlen.']],
  },

  // ── Deeper sections for weakly covered keywords ───────────────────────
  '/mag-box/': {
    updated,
    keywords: { add: ['mag iptv boxes'] },
    sections: [
      { id: 'mag-410', before: 'fehler', h: 'MAG 410 und Android-Modelle von Infomir', html: `
<p>Neben den klassischen Linux-Modellen bietet Infomir auch MAG-Boxen auf Android-Basis an, darunter die MAG 410. Auf diesen Geräten läuft die gewohnte Portal-Oberfläche als App, zusätzlich lassen sich Android-Apps wie ${L('/tivimate/', 'TiviMate')} oder ${L('/iptv-smarters-pro-android/', 'IPTV Smarters Pro')} nutzen. Damit können Sie sich per Portal und MAC-Adresse <em>oder</em> per ${L('/xtream-codes/', 'Xtream Codes')} anmelden.</p>
<p>Ob die MAG 410 oder ein Linux-Modell besser passt, hängt von Ihrem Zugang ab: Für reine Portal-Zugänge sind die Linux-Modelle schlanker, wer zusätzlich Apps möchte, ist mit einer Android-Box flexibler. Weitere Geräte vergleicht ${L('/beste-iptv-box/', 'Beste IPTV-Box')}.</p>` },
    ],
  },
  '/formuler/': {
    updated,
    sections: [
      { id: 'aeltere-modelle', before: 'mytvonline-3', h: 'Ältere Formuler-Modelle: Z+ Neo und Z Nano', html: `
<p>Viele Formuler-Boxen sind seit Jahren im Einsatz, etwa die Formuler Z+ Neo oder die Z Nano. Sie funktionieren mit IPTV grundsätzlich weiter, bekommen aber in der Regel keine neuen Android-Versionen mehr. Das kann sich auf neuere App-Versionen von MyTVOnline oder Drittanbieter-Apps auswirken.</p>
<p>Unser Rat: Läuft Ihre ältere Formuler stabil, nutzen Sie sie weiter. Ruckelt der Programmführer oder lassen sich Apps nicht mehr aktualisieren, lohnt sich ein aktuelles Modell wie die Z11 Pro – oder ein Blick auf ${L('/beste-iptv-box/', 'die besten IPTV-Boxen')}.</p>` },
    ],
  },
  '/iptv-4k/': {
    updated,
    faq: [['Was bedeuten „IPTV8K“ und „IPTV12K“?', 'Das sind Werbe- oder Markennamen, keine Bildqualität. Fernseher und Streams mit 12K gibt es nicht; 8K-Inhalte sind sehr selten. Für IPTV ist 4K das Maximum, das Sie im Alltag sinnvoll nutzen.']],
  },
  '/tivimate-premium/': {
    updated,
    faq: [['Ist TiviMate Premium ein Abo (Subscription)?', 'TiviMate Premium wird über den App-Anbieter freigeschaltet; je nach Angebot als Jahreslizenz oder als einmaliger Kauf. Preise und Modelle legt der Entwickler fest – maßgeblich ist die Angabe in der TiviMate-Companion-App.']],
  },
  '/iptv-streamingdienste/': {
    updated,
    keywords: { add: ['foxiptv'] },
    sections: [
      { id: 'fox', before: 'kosten', h: 'Fox und IPTV: was mit „Fox TV IPTV“ gemeint ist', html: `
<p>Mit „IPTV Fox“ oder „Fox TV IPTV“ sind meist die US-Sender der Fox-Gruppe gemeint, etwa für Nachrichten oder Sport. Diese Programme sind für den US-Markt lizenziert; die offiziellen Apps der Sender sind in der Regel nur in den USA nutzbar. Angebote, die solche Sender in Deutschland „inklusive“ versprechen, sollten Sie wie alle Inhalte auf Rechte und Seriosität prüfen – Kriterien unter ${L('/iptv-anbieter/', 'IPTV-Anbieter wählen')}.</p>
<p class="muted">${brandNote}</p>` },
    ],
  },
  '/iptv-sport/': {
    updated,
    sections: [
      { id: 'formel-1', before: 'ppv', h: 'Formel 1 per IPTV: was Sie wissen sollten', html: `
<p>Ein Formel-1-Wochenende umfasst Training, Qualifying und Rennen und dauert jeweils ein bis zwei Stunden. Für ruckelfreie Kamerafahrten ist die richtige Bildrate entscheidend: Aktivieren Sie die automatische Bildratenanpassung und nutzen Sie möglichst LAN. Die Formel 1 bietet mit F1 TV zusätzlich einen eigenen Streamingdienst an; welche Version in welchem Land verfügbar ist und wer die Live-Rechte im Fernsehen hält, legen die Formel 1 und die Rechteinhaber fest (Stand: ${stand}).</p>` },
      { id: 'england', before: 'technik', h: 'Englischer Fußball und BBC per IPTV: Geoblocking verstehen', html: `
<p>Wer „IPTV England“ oder „IPTV BBC“ sucht, möchte oft Premier League oder britische Programme sehen. Dabei gilt: Die BBC bietet ihren Streamingdienst BBC iPlayer nur im Vereinigten Königreich an, und dort nur mit gültiger TV-Lizenz. Ähnlich sind Sportrechte für die Premier League pro Land vergeben – welche Plattform in Deutschland die Spiele zeigt, ändert sich mit den Rechteperioden.</p>
<p>Technisch heißt das Geoblocking: Der Dienst prüft, aus welchem Land Sie zugreifen. IPTV-Angebote, die britische Sender ohne Einschränkung versprechen, sollten Sie deshalb besonders kritisch prüfen. Für Fußball in Deutschland lesen Sie ${L('/iptv-bundesliga/', 'Bundesliga per IPTV')}.</p>` },
    ],
  },
  '/iptv-bundesliga/': {
    updated,
    sections: [
      { id: 'turniere', before: 'anbieter', h: 'WM, EM und internationaler Fußball (Soccer) per IPTV', html: `
<p>Bei großen Turnieren wie der Fußball-Weltmeisterschaft (World Cup) oder der Europameisterschaft zeigen in Deutschland traditionell auch frei empfangbare Sender Spiele – über deren Mediatheken auch per Internet. Die WM 2026 in den USA, Kanada und Mexiko war die erste mit 48 Mannschaften und 104 Spielen; die nächste Europameisterschaft findet 2028 in Großbritannien und Irland statt. Wer welche Spiele zeigt, wird pro Turnier neu vergeben.</p>
<p>Wer international nach „IPTV Soccer“ sucht, meint dasselbe wie hierzulande Fußball. Für alle Turniere gilt: Prüfen Sie Ihre Technik vor dem ersten Spiel mit einem ${L('/iptv-testen/', 'kostenlosen Test')} zur Anstoßzeit.</p>` },
    ],
  },
};
