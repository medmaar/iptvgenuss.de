import { site, plans, euro } from '../site.mjs';
import { icon } from '../icons.mjs';
import { faqs, faqSchema } from '../content.mjs';
import { sectionHead, planCards, deviceGrid, faqList, ctaBand, steps } from '../blocks.mjs';

// Neutral programme guide for the hero mock-up: genres only, no channel brands.
const guide = [
  ['Nachrichten', [['Aktuell', 2], ['Wetter', 1], ['Magazin', 3]]],
  ['Doku', [['Natur & Tiere', 3], ['Geschichte', 3]]],
  ['Spielfilm', [['Filmabend', 4], ['Kurzfilm', 2]]],
  ['Kinder', [['Zeichentrick', 2], ['Wissen', 2], ['Abenteuer', 2]]],
  ['Musik', [['Live-Konzert', 4], ['Charts', 2]]],
];

const tv = `
<div class="tv" aria-hidden="true">
  <div class="tv-screen">
    <div class="tv-top"><span class="tv-dot"></span><span>Programmführer</span><span class="tv-time">20:15</span></div>
    <div class="epg">
      ${guide.map(([row, shows], r) => `<div class="epg-row"><span class="epg-ch">${row}</span><div class="epg-shows">${shows.map(([s, w], i) => `<span class="epg-show${r === 2 && i === 0 ? ' is-now' : ''}" style="flex:${w}">${s}</span>`).join('')}</div></div>`).join('')}
    </div>
  </div>
  <div class="tv-stand"></div>
  <div class="float float--a">${icon.check}<span><b>Eingerichtet</b><small>Fire TV · Smart TV · Handy</small></span></div>
  <div class="float float--b">${icon.chat}<span><b>Persönliche Hilfe</b><small>bei jeder Frage</small></span></div>
</div>`;

const prices = plans.map((p) => p.price).filter((p) => p != null);

export default () => {
  const faq = faqs().slice(0, 6);
  return {
    path: '/',
    title: `IPTV in Deutschland – Fernsehen über das Internet | ${site.name}`,
    description: `${site.name}: Fernsehen über das Internet auf Smart-TV, Fire TV Stick, Smartphone und Computer – ohne Satellit und Kabel, mit Anleitungen und persönlicher Hilfe.`,
    schema: [
      faqSchema(faq),
      ...(prices.length === plans.length ? [{
        '@type': 'Product',
        name: `${site.name} IPTV-Zugang`,
        brand: { '@type': 'Brand', name: site.name },
        offers: { '@type': 'AggregateOffer', priceCurrency: 'EUR', lowPrice: Math.min(...prices), highPrice: Math.max(...prices), offerCount: prices.length },
      }] : []),
    ],
    body: `
<section class="hero">
  <div class="container hero-grid">
    <div class="hero-copy">
      <p class="eyebrow">${icon.wifi} Fernsehen über das Internet</p>
      <h1 class="h1 h1--xl">Fernsehen mit Genuss. <span class="accent">Auf jedem Bildschirm.</span></h1>
      <p class="lead">${site.name} bringt Fernsehen über Ihre Internetleitung auf Smart-TV, Fire TV Stick, Smartphone, Tablet und Computer – ohne Satellitenschüssel und ohne Kabelanschluss. Mit Schritt-für-Schritt-Anleitungen und persönlicher Hilfe bei der Einrichtung.</p>
      <div class="btn-row">
        <a class="btn btn--primary btn--lg" href="/preise/">Pakete ansehen ${icon.arrow}</a>
        ${site.trial ? `<a class="btn btn--ghost btn--lg" href="/kostenlos-testen/">${icon.play} Kostenlos testen</a>` : ''}
      </div>
      <ul class="hero-points">
        <li>${icon.check} Für alle gängigen Geräte</li>
        <li>${icon.check} Einrichtung mit Anleitung</li>
        <li>${icon.check} Hilfe per ${site.whatsapp ? 'WhatsApp &amp; ' : ''}E-Mail</li>
      </ul>
    </div>
    ${tv}
  </div>
</section>

<section class="section" aria-labelledby="so-gehts">
  <div class="container">
    ${sectionHead({ kicker: 'So einfach geht’s', title: 'In drei Schritten startklar', id: 'so-gehts' })}
    ${steps([
      ['Paket wählen', `Suchen Sie sich das passende Paket aus${site.trial ? ' oder testen Sie zuerst kostenlos' : ''}. Bei Fragen beraten wir Sie gern.`],
      ['Zugangsdaten erhalten', 'Sie bekommen Benutzername, Passwort und Server-URL per E-Mail – dazu eine Anleitung für Ihr Gerät.'],
      ['Anmelden und loslegen', 'Melden Sie sich in Ihrer IPTV-App an. Senderliste und Programmführer werden automatisch geladen.'],
    ])}
  </div>
</section>

<section class="section section--alt" aria-labelledby="geraete">
  <div class="container">
    ${sectionHead({ kicker: 'Geräte', title: 'Ein Zugang für Ihre Geräte', lead: 'Ob Wohnzimmer-Fernseher, Tablet auf dem Sofa oder Laptop unterwegs: Für jedes Gerät gibt es eine eigene Anleitung.', id: 'geraete' })}
    ${deviceGrid()}
    <p class="center-link"><a href="/iptv-geraete/">Alle unterstützten Geräte im Überblick ${icon.arrow}</a></p>
  </div>
</section>

<section class="section" aria-labelledby="vorteile">
  <div class="container">
    ${sectionHead({ kicker: 'Darum ' + site.name, title: 'Fernsehen ohne Technik-Stress', id: 'vorteile' })}
    <div class="features">
      <article class="feature"><span class="feature-ico">${icon.chat}</span><h3>Persönliche Hilfe</h3><p>Sie erreichen uns per ${site.whatsapp ? 'WhatsApp oder ' : ''}E-Mail. Wir helfen bei der Auswahl der App und bei der Einrichtung.</p></article>
      <article class="feature"><span class="feature-ico">${icon.book}</span><h3>Verständliche Anleitungen</h3><p>Schritt für Schritt erklärt – für Fire TV, Smart TV, Android, Apple-Geräte und Computer.</p></article>
      <article class="feature"><span class="feature-ico">${icon.guide}</span><h3>Programmführer</h3><p>In gängigen IPTV-Apps sehen Sie im elektronischen Programmführer (EPG), was gerade läuft und was als Nächstes kommt.</p></article>
      <article class="feature"><span class="feature-ico">${icon.remote}</span><h3>Kein Receiver nötig</h3><p>Keine Satellitenschüssel, kein Kabelanschluss, kein Techniker-Termin. Eine App auf Ihrem Gerät genügt.</p></article>
    </div>
  </div>
</section>

<section class="section section--alt" aria-labelledby="pakete">
  <div class="container">
    ${sectionHead({ kicker: 'Pakete', title: 'Das passende Paket für Sie', lead: prices.length ? `Ab ${euro(Math.min(...prices))}. Alle Pakete enthalten dieselben Leistungen – Sie wählen nur die Laufzeit.` : 'Alle Pakete enthalten dieselben Leistungen – Sie wählen nur die Laufzeit.', id: 'pakete' })}
    ${planCards()}
    <p class="center-link"><a href="/preise/">Alle Details zu Preisen und Leistungen ${icon.arrow}</a></p>
  </div>
</section>

<section class="section" aria-labelledby="voraussetzungen">
  <div class="container">
    ${sectionHead({ kicker: 'Voraussetzungen', title: 'Das brauchen Sie', id: 'voraussetzungen' })}
    <div class="needs">
      <div class="need">${icon.wifi}<div><h3>Internetanschluss</h3><p>Richtwert pro Stream: rund 10 Mbit/s für HD, rund 25 Mbit/s für Ultra HD.</p></div></div>
      <div class="need">${icon.tv}<div><h3>Ein geeignetes Gerät</h3><p>Smart-TV, Streaming-Stick, Smartphone, Tablet oder Computer.</p></div></div>
      <div class="need">${icon.play}<div><h3>Eine IPTV-App</h3><p>Zum Beispiel eine App mit Xtream-Codes-Login. Wir zeigen Ihnen, wie es geht.</p></div></div>
    </div>
  </div>
</section>

<section class="section section--alt" aria-labelledby="faq">
  <div class="container narrow">
    ${sectionHead({ kicker: 'FAQ', title: 'Häufige Fragen', id: 'faq' })}
    ${faqList(faq)}
    <p class="center-link"><a href="/faq/">Alle Fragen und Antworten ${icon.arrow}</a></p>
  </div>
</section>

${ctaBand()}
`,
  };
};
