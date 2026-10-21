// Pricing, setup guides, devices, the IPTV explainer and the FAQ.
import { site, plans, included, euro } from '../site.mjs';
import { icon } from '../icons.mjs';
import { devices, faqs, faqSchema } from '../content.mjs';
import { pageHero, sectionHead, planCards, deviceGrid, faqList, ctaBand } from '../blocks.mjs';

const pricing = () => {
  const faq = faqs().filter(([q]) => /mehreren Geräten|testen|Widerruf|Zugangsdaten/.test(q));
  const priced = plans.filter((p) => p.price != null);
  return {
    path: '/preise/',
    crumb: 'Preise',
    title: `IPTV Preise und Pakete | ${site.name}`,
    description: `Die Pakete von ${site.name} im Überblick: Laufzeiten, Leistungen und Preise für IPTV auf Smart-TV, Fire TV Stick, Smartphone und Computer.`,
    schema: [
      faqSchema(faq),
      ...priced.map((p) => ({
        '@type': 'Product',
        name: `${site.name} IPTV-Zugang ${p.label}`,
        brand: { '@type': 'Brand', name: site.name },
        offers: { '@type': 'Offer', price: p.price, priceCurrency: 'EUR', url: `${site.url}/preise/`, availability: 'https://schema.org/InStock' },
      })),
    ],
    body: `
${pageHero({ crumb: 'Preise', kicker: 'Preise', title: 'Pakete und Preise', lead: 'Alle Pakete enthalten dieselben Leistungen. Sie wählen nur, wie lange Sie schauen möchten.' })}
<section class="section section--flush" aria-labelledby="pakete">
  <div class="container"><h2 class="sr-only" id="pakete">Pakete</h2>${planCards()}</div>
</section>
<section class="section" aria-labelledby="inklusive">
  <div class="container narrow">
    ${sectionHead({ title: 'In jedem Paket enthalten', id: 'inklusive' })}
    <ul class="checks checks--lg">${included.map((f) => `<li>${icon.check}<span>${f}</span></li>`).join('')}</ul>
    <p class="muted">Vertragsbedingungen, Laufzeit und Zahlung regeln unsere <a href="/agb/">AGB</a>. Informationen zum Widerrufsrecht finden Sie in der <a href="/widerruf/">Widerrufsbelehrung</a>.</p>
  </div>
</section>
<section class="section section--alt" aria-labelledby="preis-faq">
  <div class="container narrow">
    ${sectionHead({ title: 'Fragen zu Paketen', id: 'preis-faq' })}
    ${faqList(faq)}
  </div>
</section>
${ctaBand({ title: 'Unsicher, welches Paket passt?', text: 'Schreiben Sie uns kurz, auf welchen Geräten Sie schauen möchten. Wir empfehlen Ihnen das passende Paket.', primary: ['/kontakt/', 'Beratung anfragen'] })}
`,
  };
};

const guides = () => ({
  path: '/anleitungen/',
  crumb: 'Anleitungen',
  title: `IPTV einrichten: Anleitungen für alle Geräte | ${site.name}`,
  description: 'IPTV einrichten Schritt für Schritt: Anleitungen für Fire TV Stick, Samsung und LG Smart TV, Android, iPhone, Apple TV, Windows, Mac und MAG-Box.',
  body: `
${pageHero({ crumb: 'Anleitungen', kicker: 'Anleitungen', title: 'IPTV einrichten – Schritt für Schritt', lead: 'Wählen Sie Ihr Gerät. Sie brauchen nur die Zugangsdaten aus unserer E-Mail und wenige Minuten Zeit.' })}
<section class="section section--flush">
  <div class="container">
    ${deviceGrid('')}
  </div>
</section>
<section class="section">
  <div class="container narrow guides">
    <div class="callout">${icon.key}<p><strong>Ihre Zugangsdaten:</strong> Nach der Bestellung erhalten Sie per E-Mail Benutzername, Passwort und Server-URL (für Xtream-Codes-Apps) sowie einen M3U-Link. Bewahren Sie die E-Mail gut auf.</p></div>
    ${devices.map((d) => `
    <article class="guide" id="${d.slug}" aria-labelledby="h-${d.slug}">
      <header class="guide-head"><span class="device-ico">${icon[d.icon]}</span><div><h2 class="h3" id="h-${d.slug}">${d.name}</h2><p class="guide-meta">App-Quelle: ${d.app} · Anmeldung: ${d.login}</p></div></header>
      <ol class="guide-steps">${d.steps.map((s) => `<li>${s}</li>`).join('')}</ol>
    </article>`).join('')}
    <div class="callout">${icon.info}<p>Die genannten Apps sind Angebote Dritter. Menüs und Bezeichnungen können sich mit App-Updates ändern. Kommen Sie nicht weiter? <a href="/kontakt/">Schreiben Sie uns</a> – wir helfen Ihnen persönlich.</p></div>
  </div>
</section>
${ctaBand()}
`,
});

const deviceList = () => ({
  path: '/iptv-geraete/',
  crumb: 'Unterstützte Geräte',
  title: `IPTV-Geräte: Welche Geräte eignen sich? | ${site.name}`,
  description: 'Welche Geräte eignen sich für IPTV? Fire TV Stick, Smart TV, Android, iPhone, Apple TV, Computer und MAG-Box im Vergleich – mit App-Quelle und Anmeldeart.',
  body: `
${pageHero({ crumb: 'Unterstützte Geräte', kicker: 'Geräte', title: 'Welche Geräte eignen sich für IPTV?', lead: 'IPTV läuft auf fast jedem Gerät, auf dem sich eine passende App installieren lässt. Hier sehen Sie, woher die App kommt und wie Sie sich anmelden.' })}
<section class="section section--flush">
  <div class="container">
    <div class="table-wrap" role="region" aria-labelledby="geraete-tabelle" tabindex="0">
      <table class="table">
        <caption id="geraete-tabelle">Unterstützte Geräte im Vergleich</caption>
        <thead><tr><th scope="col">Gerät</th><th scope="col">App-Quelle</th><th scope="col">Anmeldung</th><th scope="col"><span class="sr-only">Anleitung</span></th></tr></thead>
        <tbody>${devices.map((d) => `<tr><th scope="row"><span class="cell-dev">${icon[d.icon]} ${d.name}</span></th><td>${d.app}</td><td>${d.login}</td><td><a href="/anleitungen/#${d.slug}">Anleitung<span class="sr-only"> für ${d.name}</span></a></td></tr>`).join('')}</tbody>
      </table>
    </div>
  </div>
</section>
<section class="section">
  <div class="container narrow prose">
    <h2>Worauf es bei der Wahl des Geräts ankommt</h2>
    <p><strong>Streaming-Sticks und Android-Boxen</strong> bieten die größte App-Auswahl und lassen sich an jeden Fernseher mit HDMI-Anschluss stecken. Wer einen älteren Fernseher hat, ist damit meist am besten bedient.</p>
    <p><strong>Smart-TVs</strong> von Samsung und LG kommen ohne Zusatzgerät aus. Die App-Auswahl in deren Stores ist allerdings kleiner, und manche Apps werden über eine Geräte-ID auf der Website des App-Anbieters eingerichtet.</p>
    <p><strong>Smartphones, Tablets und Computer</strong> eignen sich gut für unterwegs oder als Zweitbildschirm. Achten Sie auf die Zahl der Geräte, die Ihr Paket gleichzeitig erlaubt.</p>
    <p>Für ein ruckelfreies Bild ist die <strong>Verbindung</strong> wichtiger als das Gerät: Ein LAN-Kabel oder ein Gerät nah am Router macht oft den größten Unterschied.</p>
  </div>
</section>
${ctaBand()}
`,
});

const explainer = () => ({
  path: '/was-ist-iptv/',
  crumb: 'Was ist IPTV?',
  title: `Was ist IPTV? Einfach erklärt | ${site.name}`,
  description: 'Was ist IPTV und wie funktioniert es? Unterschiede zu Kabel und Satellit, was Sie brauchen und worauf Sie bei der Wahl eines Anbieters achten sollten.',
  schema: [{
    '@type': 'Article',
    headline: 'Was ist IPTV? Einfach erklärt',
    inLanguage: site.lang,
    author: { '@id': `${site.url}/#organization` },
    publisher: { '@id': `${site.url}/#organization` },
    mainEntityOfPage: `${site.url}/was-ist-iptv/`,
  }],
  body: `
${pageHero({ crumb: 'Was ist IPTV?', kicker: 'Ratgeber', title: 'Was ist IPTV?', lead: 'Fernsehen über das Internet – was dahintersteckt, was Sie brauchen und worauf Sie achten sollten.' })}
<section class="section section--flush">
  <div class="container narrow prose">
    <nav class="toc" aria-label="Inhalt"><p class="toc-h">Inhalt</p><ol>
      <li><a href="#definition">IPTV kurz erklärt</a></li>
      <li><a href="#funktion">So funktioniert IPTV</a></li>
      <li><a href="#vergleich">IPTV, Kabel und Satellit im Vergleich</a></li>
      <li><a href="#voraussetzungen">Was Sie brauchen</a></li>
      <li><a href="#anbieter">Worauf Sie bei Anbietern achten sollten</a></li>
    </ol></nav>
    <h2 id="definition">IPTV kurz erklärt</h2>
    <p>IPTV steht für <em>Internet Protocol Television</em>. Gemeint ist Fernsehen, das nicht über Satellit, Kabel oder Antenne zu Ihnen kommt, sondern über Ihre Internetverbindung. Sie schauen über eine App – auf dem Smart-TV, einem Streaming-Stick, dem Smartphone, Tablet oder Computer.</p>
    <h2 id="funktion">So funktioniert IPTV</h2>
    <p>Der Anbieter überträgt das Programm als Datenstrom über das Internet. Ihre IPTV-App meldet sich mit Ihren Zugangsdaten an, lädt die Senderliste und – sofern verfügbar – den elektronischen Programmführer (EPG). Wählen Sie einen Sender, spielt die App den passenden Datenstrom ab.</p>
    <p>Zur Anmeldung gibt es zwei verbreitete Wege: das <strong>Xtream-Codes-Login</strong> mit Benutzername, Passwort und Server-URL sowie die <strong>M3U-Playlist</strong>, eine Adresse, die die Senderliste enthält. Viele Apps unterstützen beides.</p>
    <h2 id="vergleich">IPTV, Kabel und Satellit im Vergleich</h2>
    <div class="table-wrap" role="region" aria-labelledby="vergleich-tabelle" tabindex="0">
    <table class="table">
      <caption id="vergleich-tabelle">Empfangswege im Vergleich</caption>
      <thead><tr><th scope="col"><span class="sr-only">Merkmal</span></th><th scope="col">IPTV</th><th scope="col">Kabel</th><th scope="col">Satellit</th></tr></thead>
      <tbody>
        <tr><th scope="row">Empfang über</th><td>Internetanschluss</td><td>Kabelanschluss</td><td>Satellitenschüssel</td></tr>
        <tr><th scope="row">Zusätzliche Hardware</th><td>Keine, App genügt</td><td>Kabelbuchse, ggf. Receiver</td><td>Schüssel, LNB, Receiver</td></tr>
        <tr><th scope="row">Mehrere Räume</th><td>Jedes Gerät mit App</td><td>Je Raum ein Anschluss</td><td>Je Raum eine Leitung</td></tr>
        <tr><th scope="row">Mobil nutzbar</th><td>Ja, mit Internet</td><td>Nein</td><td>Nein</td></tr>
      </tbody>
    </table>
    </div>
    <h2 id="voraussetzungen">Was Sie brauchen</h2>
    <ul>
      <li><strong>Internet:</strong> Als Richtwert pro Stream rund 10 Mbit/s für HD und rund 25 Mbit/s für Ultra HD.</li>
      <li><strong>Ein Gerät:</strong> Smart-TV, Streaming-Stick, Android-Box, Smartphone, Tablet oder Computer. Siehe <a href="/iptv-geraete/">unterstützte Geräte</a>.</li>
      <li><strong>Eine App:</strong> Eine IPTV-App mit Xtream-Codes- oder M3U-Unterstützung. Siehe <a href="/anleitungen/">Anleitungen</a>.</li>
    </ul>
    <h2 id="anbieter">Worauf Sie bei Anbietern achten sollten</h2>
    <p>Ein seriöser Anbieter nennt im Impressum Namen und Anschrift, informiert transparent über Preise und Vertragsbedingungen und erklärt, wie Sie Ihr Widerrufsrecht ausüben. Achten Sie außerdem darauf, dass der Anbieter die Rechte an den angebotenen Programmen hat.</p>
  </div>
</section>
${ctaBand()}
`,
});

const faqPage = () => {
  const list = faqs();
  return {
    path: '/faq/',
    crumb: 'Häufige Fragen',
    title: `IPTV FAQ: Häufige Fragen und Antworten | ${site.name}`,
    description: `Antworten auf häufige Fragen zu ${site.name}: Geräte, Apps, Internetgeschwindigkeit, Zugangsdaten, mehrere Bildschirme und Hilfe bei Bildstörungen.`,
    schema: [faqSchema(list)],
    body: `
${pageHero({ crumb: 'Häufige Fragen', kicker: 'FAQ', title: 'Häufige Fragen', lead: 'Ihre Frage ist nicht dabei? <a href="/kontakt/">Schreiben Sie uns</a>.' })}
<section class="section section--flush">
  <div class="container narrow">${faqList(list)}</div>
</section>
${ctaBand()}
`,
  };
};

export default () => [pricing(), guides(), deviceList(), explainer(), faqPage()];
