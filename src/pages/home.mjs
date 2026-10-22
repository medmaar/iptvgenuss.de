import { readFileSync } from 'node:fs';
import { site, plans, included, nav, euro, waHref, devicePrices, homeContent as content } from '../site.mjs';
import { esc } from '../layout.mjs';

const icons = {
  tv: '<rect x="3" y="6" width="42" height="28" rx="3"/><path d="M16 42h16M24 34v8M17 1l7 5 7-5"/>',
  play: '<rect x="4" y="7" width="40" height="34" rx="4"/><path d="m20 16 12 8-12 8z"/>',
  screen: '<rect x="2" y="6" width="44" height="32" rx="3"/><path d="M10 14h7M10 14v7M38 14h-7M38 14v7M10 30h7M10 30v-7M38 30h-7M38 30v-7M17 44h14"/>',
  calendar: '<rect x="5" y="8" width="38" height="35" rx="3"/><path d="M5 18h38M15 3v10M33 3v10M17 29l5 5 10-11"/>',
  devices: '<rect x="2" y="5" width="34" height="25" rx="2"/><path d="M18 30v7M10 37h16"/><rect x="31" y="19" width="14" height="26" rx="2"/><path d="M36 40h4"/>',
  chat: '<path d="M43 22c0 10-8 17-19 17h-5L7 45l3-12c-4-3-6-7-6-12C4 11 12 4 24 4s19 7 19 18Z"/><path d="M14 21h20M14 28h12"/>',
};
const icon = name => `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;
const template = readFileSync(new URL('./home.html', import.meta.url), 'utf8');

export default () => {
  const contacts = [
    ...(site.whatsapp ? [`<a class="button button-yellow" href="${esc(waHref('Guten Tag, ich interessiere mich für IPTV Genuss.'))}" target="_blank" rel="noopener">Per WhatsApp anfragen ↗</a>`] : []),
    ...(site.email ? [`<a class="button button-outline" href="mailto:${esc(site.email)}?subject=IPTV%20Genuss%20%E2%80%93%20Anfrage">${esc(site.email)}</a>`] : []),
  ].join('');
  const values = {
    __TITLE__: esc(`${site.name} – Live-TV, Filme & Serien`),
    __DESCRIPTION__: esc('Fernsehen mit Genuss: Live-TV, Filme und Serien auf Smart-TV, Smartphone und Computer. Entdecken Sie unsere Pakete, Geräte und Hilfe zur Einrichtung.'),
    __ROBOTS__: site.live ? 'index, follow' : 'noindex, nofollow',
    __NAV__: nav.map(([href, text]) => `<a href="${href}">${esc(text)}</a>`).join(''),
    __HEADING__: esc(content.title),
    __LEAD__: esc(content.lead),
    __BILLING__: esc(content.billing),
    __FEATURES__: content.features.map(f => `<article class="feature-tile ${f.color}">${icon(f.icon)}<h3>${esc(f.title)}</h3><p>${esc(f.text)}</p></article>`).join(''),
    __PLANS__: plans.map((p, index) => `<article data-plan-index="${index}" class="plan${p.featured ? ' featured' : ''}">${p.featured ? '<p class="plan-badge">Unser Jahrespaket</p>' : ''}<h3>${esc(p.label)}</h3><p class="plan-device"><span data-device-label>${p.devices} Gerät gleichzeitig</span></p><p class="plan-price"><b data-plan-price>${euro(p.price)}</b><span>einmalig für ${p.months === 1 ? 'einen Monat' : `${p.months} Monate`}</span></p><ul>${included.map(i => `<li>${esc(i)}</li>`).join('')}</ul><a class="button ${p.featured ? 'button-yellow' : 'button-teal'}" href="#kontakt" data-plan="${esc(p.label)}" data-price="${euro(p.price)}" data-count="1">Paket anfragen <span aria-hidden="true">→</span></a><p class="plan-renewal">Keine automatische Verlängerung</p></article>`).join(''),
    __PRICE_DATA__: JSON.stringify(devicePrices),
    __DEVICE_SWITCH__: Object.keys(devicePrices).map((n, i) => `<button type="button" data-devices="${n}" aria-pressed="${i === 0}">${n} ${i === 0 ? 'Gerät' : 'Geräte'}</button>`).join(''),
    __STEPS__: content.steps.map(([title, text], i) => `<li><span class="step-number">0${i + 1}</span><h3>${esc(title)}</h3><p>${esc(text)}</p></li>`).join(''),
    __DEVICES__: content.devices.map((d, i) => `<li>${icon(i < 2 ? 'tv' : i < 4 ? 'devices' : 'screen')}<span>${esc(d)}</span></li>`).join(''),
    __APPS__: esc(content.apps),
    __FAQ__: content.faqs.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join(''),
    __CONTACT__: contacts || '<p class="contact-pending">Unsere Kontaktmöglichkeiten für Testanfragen und Bestellungen folgen in Kürze.</p>',
    __YEAR__: String(new Date().getFullYear()),
    __SCHEMA__: JSON.stringify({'@context':'https://schema.org','@type':'WebSite',name:site.name,url:site.url,inLanguage:site.lang}).replaceAll('<', '\\u003c'),
  };
  return {
    path: '/',
    title: `${site.name} – Live-TV, Filme & Serien`,
    description: 'Fernsehen mit Genuss: Live-TV, Filme und Serien auf Smart-TV, Smartphone und Computer. Entdecken Sie unsere Pakete, Geräte und Hilfe zur Einrichtung.',
    document: template.replace(/__[A-Z_]+__/g, token => values[token] ?? token),
  };
};
