// Building blocks shared by several pages.
import { site, plans, included, euro } from './site.mjs';
import { icon } from './icons.mjs';
import { devices } from './content.mjs';
import { crumbsNav } from './layout.mjs';

export const pageHero = ({ kicker, title, lead, crumb, parents = [], actions = '' }) => `
<section class="page-hero">
  <div class="container narrow">
    ${crumb ? crumbsNav(crumb, parents) : ''}
    ${kicker ? `<p class="kicker">${kicker}</p>` : ''}
    <h1 class="h1">${title}</h1>
    ${lead ? `<p class="lead">${lead}</p>` : ''}
    ${actions ? `<div class="btn-row">${actions}</div>` : ''}
  </div>
</section>`;

export const sectionHead = ({ kicker, title, lead, id }) => `
<div class="section-head">
  ${kicker ? `<p class="kicker">${kicker}</p>` : ''}
  <h2 class="h2"${id ? ` id="${id}"` : ''}>${title}</h2>
  ${lead ? `<p class="lead">${lead}</p>` : ''}
</div>`;

const perMonth = (p) => (p.price == null || p.months === 1 ? '' : `<span class="plan-per">≈ ${euro(Math.round((p.price / p.months) * 100) / 100)} pro Monat</span>`);

export const planCards = () => `
<div class="plans">
  ${plans.map((p) => `
  <article class="plan${p.featured ? ' plan--featured' : ''}" aria-labelledby="plan-${p.id}">
    ${p.featured ? '<p class="plan-badge">Beliebt</p>' : ''}
    <h3 class="plan-name" id="plan-${p.id}">${p.label}</h3>
    <p class="plan-price">${p.price == null ? '<span class="plan-tbd">Preis folgt</span>' : `<span class="plan-amt">${euro(p.price)}</span>`}</p>
    ${perMonth(p)}
    <p class="plan-devices">${icon.tv} ${p.devices} ${p.devices === 1 ? 'Gerät' : 'Geräte'} gleichzeitig</p>
    <ul class="checks">${included.map((f) => `<li>${icon.check}<span>${f}</span></li>`).join('')}</ul>
    <a class="btn ${p.featured ? 'btn--primary' : 'btn--ghost'} btn--block" href="/kontakt/?paket=${p.id}#anfrage">${p.label} anfragen</a>
  </article>`).join('')}
</div>`;

export const deviceGrid = (hrefBase = '/anleitungen/') => `
<ul class="device-grid">
  ${devices.map((d) => `<li><a class="device" href="${hrefBase}#${d.slug}"><span class="device-ico">${icon[d.icon]}</span><span class="device-name">${d.short}</span><span class="device-more">Anleitung ${icon.arrow}</span></a></li>`).join('')}
</ul>`;

export const faqList = (list) => `
<div class="faq">
  ${list.map(([q, a]) => `<details class="faq-item"><summary><span>${q}</span>${icon.chevron}</summary><div class="faq-a"><p>${a}</p></div></details>`).join('')}
</div>`;

export const ctaBand = ({ title = 'Bereit für entspanntes Fernsehen?', text = 'Wählen Sie Ihr Paket oder fragen Sie uns einfach – wir helfen Ihnen bei der Auswahl und Einrichtung.', primary = ['/preise/', 'Pakete ansehen'] } = {}) => `
<section class="section">
  <div class="container">
    <div class="cta-band">
      <h2 class="h2">${title}</h2>
      <p>${text}</p>
      <div class="btn-row btn-row--center">
        <a class="btn btn--primary btn--lg" href="${primary[0]}">${primary[1]} ${icon.arrow}</a>
        ${site.trial ? `<a class="btn btn--ghost btn--lg" href="/kostenlos-testen/">Kostenlos testen</a>` : `<a class="btn btn--ghost btn--lg" href="/kontakt/">Kontakt aufnehmen</a>`}
      </div>
    </div>
  </div>
</section>`;

export const steps = (list) => `
<ol class="steps">
  ${list.map(([t, d], i) => `<li class="step"><span class="step-n" aria-hidden="true">${i + 1}</span><h3>${t}</h3><p>${d}</p></li>`).join('')}
</ol>`;

// Request form for orders, trials and questions. It does not send anything to
// a server: on submit it opens WhatsApp or the visitor's mail app with the
// request filled in, and the visitor sends it themselves.
export const requestForm = ({ type = 'Anfrage', button = 'Anfrage senden', showPlan = true } = {}) => {
  const channels = [site.whatsapp && 'whatsapp', site.email && 'email'].filter(Boolean);
  return `
<form class="form" id="anfrage" data-request-form data-type="${type}" data-whatsapp="${site.whatsapp}" data-email="${site.email}" novalidate>
  <div class="form-grid">
    <div class="field"><label for="f-name">Name</label><input id="f-name" name="name" autocomplete="name" required></div>
    <div class="field"><label for="f-email">E-Mail</label><input id="f-email" name="email" type="email" autocomplete="email" required></div>
    <div class="field"><label for="f-device">Gerät</label>
      <select id="f-device" name="device"><option value="">Bitte wählen</option>${devices.map((d) => `<option>${d.short}</option>`).join('')}<option>Anderes Gerät</option></select></div>
    ${showPlan ? `<div class="field"><label for="f-plan">Paket</label>
      <select id="f-plan" name="plan"><option value="">Noch offen</option>${plans.map((p) => `<option value="${p.id}">${p.label}${p.price != null ? ` – ${euro(p.price)}` : ''}</option>`).join('')}</select></div>` : ''}
    <div class="field field--full"><label for="f-msg">Nachricht <span class="opt">(optional)</span></label><textarea id="f-msg" name="message" rows="4"></textarea></div>
  </div>
  <div class="field field--check"><input id="f-ok" name="ok" type="checkbox" required><label for="f-ok">Ich habe die <a href="/datenschutz/">Datenschutzerklärung</a> gelesen. Meine Angaben werden nur zur Bearbeitung der Anfrage verwendet.</label></div>
  <p class="form-error" data-form-error role="alert" hidden></p>
  ${channels.length ? `<div class="btn-row">
    ${site.whatsapp ? `<button class="btn btn--primary btn--lg" type="submit" value="whatsapp">${icon.whatsapp} ${button} per WhatsApp</button>` : ''}
    ${site.email ? `<button class="btn ${site.whatsapp ? 'btn--ghost' : 'btn--primary'} btn--lg" type="submit" value="email">${icon.mail} ${site.whatsapp ? 'Per E-Mail senden' : `${button} per E-Mail`}</button>` : ''}
  </div>
  <p class="form-note">Ihre Anfrage öffnet sich ${channels.length > 1 ? 'in WhatsApp oder Ihrem E-Mail-Programm' : site.whatsapp ? 'in WhatsApp' : 'in Ihrem E-Mail-Programm'}. Sie senden sie dort selbst ab – auf dieser Website wird nichts gespeichert.</p>`
  : '<p class="form-note form-note--warn">Vorschau: Für dieses Formular ist noch keine E-Mail-Adresse oder WhatsApp-Nummer hinterlegt.</p>'}
</form>`;
};
