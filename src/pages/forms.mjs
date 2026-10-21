// Contact and free-trial pages. Both use the request form (blocks.mjs).
import { site, waHref } from '../site.mjs';
import { icon } from '../icons.mjs';
import { pageHero, requestForm, steps } from '../blocks.mjs';

const contact = () => ({
  path: '/kontakt/',
  crumb: 'Kontakt',
  title: `Kontakt und Bestellung | ${site.name}`,
  description: `Schreiben Sie ${site.name}: Fragen zu Paketen, Bestellung oder persönliche Hilfe bei der Einrichtung Ihres IPTV-Zugangs auf Smart-TV, Fire TV Stick und Co.`,
  body: `
${pageHero({ crumb: 'Kontakt', kicker: 'Kontakt', title: 'Wie können wir helfen?', lead: 'Fragen zu den Paketen, eine Bestellung oder Hilfe bei der Einrichtung: Schreiben Sie uns.' })}
<section class="section section--flush">
  <div class="container contact-grid">
    <div class="card form-card">
      <h2 class="h3">Anfrage oder Bestellung</h2>
      ${requestForm({ type: 'Anfrage', button: 'Senden' })}
    </div>
    <aside class="contact-side" aria-label="Direkter Kontakt">
      ${site.whatsapp ? `<a class="contact-tile" href="${waHref()}" target="_blank" rel="noopener">${icon.whatsapp}<span><b>WhatsApp</b><small>Chat öffnen</small></span></a>` : ''}
      ${site.email ? `<a class="contact-tile" href="mailto:${site.email}">${icon.mail}<span><b>E-Mail</b><small>${site.email}</small></span></a>` : ''}
      <a class="contact-tile" href="/anleitungen/">${icon.book}<span><b>Anleitungen</b><small>Einrichtung Schritt für Schritt</small></span></a>
      <a class="contact-tile" href="/faq/">${icon.info}<span><b>Häufige Fragen</b><small>Schnelle Antworten</small></span></a>
    </aside>
  </div>
</section>
`,
});

const trial = () => ({
  path: '/kostenlos-testen/',
  crumb: 'Kostenlos testen',
  title: `IPTV kostenlos testen | ${site.name}`,
  description: `Testen Sie ${site.name} kostenlos auf Ihrem eigenen Gerät, bevor Sie sich entscheiden. Kurze Anfrage senden, Zugangsdaten erhalten, ausprobieren.`,
  body: `
${pageHero({ crumb: 'Kostenlos testen', kicker: 'Kostenloser Test', title: 'Erst testen, dann entscheiden', lead: 'Probieren Sie die Einrichtung auf Ihrem eigenen Gerät aus. Senden Sie uns dazu eine kurze Anfrage.' })}
<section class="section section--flush">
  <div class="container contact-grid">
    <div class="card form-card">
      <h2 class="h3">Testzugang anfragen</h2>
      ${requestForm({ type: 'Testzugang', button: 'Test anfragen', showPlan: false })}
    </div>
    <aside class="contact-side" aria-labelledby="test-ablauf">
      <h2 class="h3" id="test-ablauf">So läuft der Test ab</h2>
      ${steps([
        ['Anfrage senden', 'Name, E-Mail und Ihr Gerät genügen.'],
        ['Zugangsdaten erhalten', 'Wir schicken Ihnen die Testzugangsdaten per E-Mail.'],
        ['Ausprobieren', 'Mit unserer <a href="/anleitungen/">Anleitung</a> ist alles schnell eingerichtet.'],
      ])}
    </aside>
  </div>
</section>
`,
});

export default () => [contact(), ...(site.trial ? [trial()] : [])];
