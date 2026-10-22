import { site, nav, missing, waHref } from './site.mjs';
import { icon } from './icons.mjs';

export const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const brand = `<a class="brand" href="/"><img src="/brand/mark.svg" width="32" height="32" alt=""><span class="brand-name">IPTV <b>Genuss</b></span><span class="sr-only"> – Startseite</span></a>`;

const navLinks = (path) =>
  nav.map(([href, label]) => `<a href="${href}"${href === path ? ' aria-current="page"' : ''}>${label}</a>`).join('');

const org = {
  '@type': 'Organization',
  '@id': `${site.url}/#organization`,
  name: site.company.name || site.name,
  ...(site.company.name && site.company.name !== site.name && { alternateName: site.name }),
  url: `${site.url}/`,
  logo: `${site.url}/brand/icon-512.png`,
  ...(site.email && { email: site.email }),
  ...(site.company.street && {
    address: { '@type': 'PostalAddress', streetAddress: site.company.street, postalCode: site.company.postcode, addressLocality: site.company.city, addressCountry: 'DE' },
  }),
};

const website = {
  '@type': 'WebSite',
  '@id': `${site.url}/#website`,
  url: `${site.url}/`,
  name: site.name,
  inLanguage: site.lang,
  publisher: { '@id': `${site.url}/#organization` },
};

// Home › [parents…] › this page. Parents are [label, path]; the page's own label is `crumb`.
const breadcrumb = (url, path, crumb, parents) => ({
  '@type': 'BreadcrumbList',
  '@id': `${url}#breadcrumb`,
  itemListElement: [['Start', '/'], ...parents, [crumb, path]].map(([name, href], i) => ({
    '@type': 'ListItem', position: i + 1, name, item: site.url + href,
  })),
});

// Visible breadcrumb trail for inner pages.
export const crumbsNav = (crumb, parents = []) => `
<nav class="crumbs" aria-label="Brotkrumen"><ol>
  <li><a href="/">Start</a></li>
  ${parents.map(([l, h]) => `<li><a href="${h}">${l}</a></li>`).join('')}
  <li aria-current="page">${crumb}</li>
</ol></nav>`;

const consent = () => {
  if (!site.ga4 && !site.metaPixel) return '';
  return `<div class="consent" data-consent hidden role="region" aria-label="Cookie-Einstellungen">
  <p>Wir möchten mit Ihrer Einwilligung Statistik- und Marketing-Cookies setzen, um unsere Website zu verbessern. Mehr dazu in der <a href="/datenschutz/">Datenschutzerklärung</a>.</p>
  <div class="consent-actions"><button class="btn btn--ghost btn--sm" type="button" data-consent-deny>Nur notwendige</button><button class="btn btn--primary btn--sm" type="button" data-consent-allow>Alle akzeptieren</button></div>
</div>
<script type="application/json" id="tracking">${JSON.stringify({ ga4: site.ga4, metaPixel: site.metaPixel })}</script>`;
};

const previewBanner = () =>
  site.live ? '' : `<aside class="preview-bar" aria-label="Vorschau-Hinweis"><div class="container"><strong>Vorschau</strong> – nicht öffentlich. Noch offen: ${missing().join(' · ')}</div></aside>`;

const footerContact = () => {
  const items = [];
  if (site.whatsapp) items.push(`<li><a href="${waHref()}" rel="noopener" target="_blank">WhatsApp</a></li>`);
  if (site.email) items.push(`<li><a href="mailto:${site.email}">${site.email}</a></li>`);
  items.push('<li><a href="/kontakt/">Kontaktformular</a></li>');
  return items.join('');
};

export function page({ document, path, title, description, body, schema = [], crumb, parents = [], noindex = false, preload = '' }) {
  if (document) return document;
  const url = site.url + path;
  const index = site.live && !noindex;
  const trail = crumb && path !== '/';
  const graph = [
    org,
    website,
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: title, description, inLanguage: site.lang, isPartOf: { '@id': `${site.url}/#website` }, ...(trail && { breadcrumb: { '@id': `${url}#breadcrumb` } }) },
    ...(trail ? [breadcrumb(url, path, crumb, parents)] : []),
    ...schema,
  ];
  return `<!doctype html>
<html lang="${site.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="robots" content="${index ? 'index, follow, max-image-preview:large' : 'noindex, nofollow'}">
<link rel="canonical" href="${url}">
<meta name="theme-color" content="${site.themeColor}">
<meta property="og:type" content="website">
<meta property="og:locale" content="${site.locale}">
<meta property="og:site_name" content="${site.name}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${site.url}${site.ogImage}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
${site.googleSiteVerification ? `<meta name="google-site-verification" content="${site.googleSiteVerification}">\n` : ''}<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/brand/icon-512.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="preload" href="/fonts/inter-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/jakarta-latin.woff2" as="font" type="font/woff2" crossorigin>
${preload}<link rel="stylesheet" href="/css/site.css?v=__V__">
<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}</script>
<script src="/js/site.js?v=__V__" defer></script>
</head>
<body>
<a class="skip" href="#main">Zum Inhalt springen</a>
${previewBanner()}
<header class="header">
  <div class="container header-row">
    ${brand}
    <nav class="nav" aria-label="Hauptnavigation">${navLinks(path)}</nav>
    <div class="header-cta">
      ${site.trial ? '<a class="btn btn--ghost btn--sm hide-md" href="/kostenlos-testen/">Kostenlos testen</a>' : ''}
      <a class="btn btn--primary btn--sm" href="/preise/">Pakete ansehen</a>
      <button class="menu-btn" type="button" aria-expanded="false" aria-controls="mobile-nav"><span class="sr-only">Menü öffnen</span>${icon.menu}</button>
    </div>
  </div>
  <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile Navigation" hidden>
    <div class="container">
      ${navLinks(path)}
      <div class="mobile-cta">
        <a class="btn btn--primary btn--block" href="/preise/">Pakete ansehen</a>
        ${site.trial ? '<a class="btn btn--ghost btn--block" href="/kostenlos-testen/">Kostenlos testen</a>' : ''}
      </div>
    </div>
  </nav>
</header>
<main id="main">
${body}
</main>
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-about">
        ${brand}
        <p>Fernsehen über das Internet auf Smart-TV, Streaming-Stick, Smartphone und Computer – mit verständlichen Anleitungen und persönlicher Hilfe.</p>
      </div>
      <div><h2 class="footer-h">Angebot</h2><ul><li><a href="/preise/">Preise</a></li>${site.trial ? '<li><a href="/kostenlos-testen/">Kostenlos testen</a></li>' : ''}<li><a href="/iptv-geraete/">Unterstützte Geräte</a></li></ul></div>
      <div><h2 class="footer-h">Hilfe</h2><ul><li><a href="/anleitungen/">Anleitungen</a></li><li><a href="/faq/">Häufige Fragen</a></li><li><a href="/was-ist-iptv/">Was ist IPTV?</a></li></ul></div>
      <div><h2 class="footer-h">Kontakt</h2><ul>${footerContact()}</ul></div>
      <div><h2 class="footer-h">Rechtliches</h2><ul><li><a href="/impressum/">Impressum</a></li><li><a href="/datenschutz/">Datenschutz</a></li><li><a href="/agb/">AGB</a></li><li><a href="/widerruf/">Widerrufsbelehrung</a></li>${site.ga4 || site.metaPixel ? '<li><button class="link-btn" type="button" data-consent-open>Cookie-Einstellungen</button></li>' : ''}</ul></div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} ${site.company.name || site.name}</span>
    </div>
  </div>
</footer>
${consent()}
</body>
</html>
`;
}
