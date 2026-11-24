// Topic pages (one per keyword cluster), the Ratgeber hub and their shared
// shell. They use the homepage design system (public/css/home.css) and link
// back to the homepage sections for prices, trial and contact.
import { site, nav } from '../site.mjs';
import { icon } from '../icons.mjs';
import { esc } from '../layout.mjs';
import { topics, hubs, cardsFor, childrenOf } from '../topics/index.mjs';
import { stand } from '../topics/util.mjs';

const reviewed = '2026-11-24';
const text = (html) => html.replace(/<[^>]+>/g, '');
const home = (href) => (href.startsWith('#') ? `/${href}` : href);

const topicGrid = (items) => `<ul class="topic-grid">${items.map((t) => `<li><a class="topic" href="${t.path}"><span class="device-ico">${icon[t.icon] || icon.info}</span><span><span class="topic-name">${t.name}</span><span class="topic-text">${t.teaser}</span></span></a></li>`).join('')}</ul>`;

const faqBlock = (title, list) => `<section class="section faq-section" id="fragen" aria-labelledby="fragen-title"><div class="container faq-layout"><div class="faq-heading"><p class="eyebrow">Gut zu wissen</p><h2 id="fragen-title">${title}</h2><p>Weitere Antworten finden Sie in den <a class="text-link" href="/#faq">häufigen Fragen</a> und im <a class="text-link" href="/ratgeber/">IPTV-Ratgeber</a>.</p></div><div class="faq-list">${list.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div></div></section>`;

const orgRef = { '@id': `${site.url}/#organization` };
const organization = {
  '@type': 'Organization',
  '@id': `${site.url}/#organization`,
  name: site.company.name || site.name,
  ...(site.company.name && site.company.name !== site.name && { alternateName: site.name }),
  url: `${site.url}/`,
  logo: { '@type': 'ImageObject', url: `${site.url}/brand/icon-512.png`, width: 512, height: 512 },
  ...(site.email && {
    email: site.email,
    contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: site.email, availableLanguage: ['de'], areaServed: ['DE', 'AT', 'CH'] },
  }),
};

// Third-party apps get a SoftwareApplication node (no ratings or prices: those are the app makers').
const appSchema = (t) => ({
  '@type': 'SoftwareApplication',
  name: t.app.name,
  applicationCategory: 'MultimediaApplication',
  operatingSystem: t.app.os,
  url: `${site.url}${t.path}`,
});

const faqSchema = (list) => ({
  '@type': 'FAQPage',
  mainEntity: list.map(([q, a]) => ({ '@type': 'Question', name: text(q), acceptedAnswer: { '@type': 'Answer', text: text(a) } })),
});

const cta = `<section class="section contact-section" aria-labelledby="cta-title"><div class="container"><p class="eyebrow">Lust auf mehr?</p><h2 id="cta-title">Erst testen. Dann genießen.</h2><p>Probieren Sie ${site.name} kostenlos auf Ihrem Gerät aus oder wählen Sie Ihr Paket.<br>Wir helfen Ihnen bei der Auswahl und bei der Einrichtung.</p><div class="button-row contact-actions"><a class="button button-yellow" href="/#kontakt">Kostenlos testen <span aria-hidden="true">→</span></a><a class="button button-outline" href="/#preise">Pakete ansehen</a></div></div></section>`;

// Full HTML document in the homepage look: same header, footer and stylesheet.
function shell({ path, title, description, crumb, parents = [], schema = [], body }) {
  const url = site.url + path;
  const trail = [['Start', '/'], ...parents, [crumb, path]];
  const graph = [
    organization,
    { '@type': 'WebSite', '@id': `${site.url}/#website`, name: site.name, url: `${site.url}/`, inLanguage: site.lang, publisher: { '@id': `${site.url}/#organization` } },
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: title, description, inLanguage: site.lang, isPartOf: { '@id': `${site.url}/#website` }, breadcrumb: { '@id': `${url}#breadcrumb` } },
    { '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: trail.map(([name, href], i) => ({ '@type': 'ListItem', position: i + 1, name: text(name), item: site.url + href })) },
    ...schema,
  ];
  const navLinks = nav.map(([href, label]) => [home(href), label]);
  return `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="robots" content="${site.live ? 'index, follow, max-image-preview:large, max-snippet:-1' : 'noindex, nofollow'}">
<meta name="theme-color" content="${site.themeColor}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="article">
<meta property="og:site_name" content="${site.name}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<meta property="og:locale" content="${site.locale}">
<meta property="og:image" content="${site.url}${site.ogImage}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="${site.url}${site.ogImage}">
<link rel="icon" href="/favicon.svg?v=__V__" type="image/svg+xml" sizes="any">
<link rel="stylesheet" href="/css/home.css?v=__V__">
<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replaceAll('<', '\\u003c')}</script>
<script src="/js/menu.js?v=__V__" defer></script>
</head>
<body class="inner-page">
<a class="skip-link" href="#inhalt">Zum Inhalt springen</a>
<div class="hero-wrap">
  <header class="site-header container">
    <a class="brand" href="/" aria-label="${site.name} – Startseite"><img src="/brand/genuss-iptv.svg?v=__V__" width="262" height="95" alt="genuss iptv"></a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="hauptnavigation"><span class="menu-lines" aria-hidden="true"></span><span>Menü</span></button>
    <nav id="hauptnavigation" class="navigation" aria-label="Hauptnavigation">${navLinks.map(([href, label]) => `<a href="${href}"${href === path ? ' aria-current="page"' : ''}>${esc(label)}</a>`).join('')}<a class="button button-outline nav-cta" href="/#kontakt">Kostenlos testen</a></nav>
  </header>
</div>
<main id="inhalt">
${body}
${cta}
</main>
<footer class="site-footer">
  <div class="container footer-columns">
    <div class="footer-col footer-col--brand"><a class="brand footer-brand" href="/" aria-label="${site.name} – Startseite"><img src="/brand/genuss-iptv.svg?v=__V__" alt="genuss iptv" width="210" height="76" loading="lazy"></a><p>Live-TV, Filme und Serien.<br>Fernsehen mit Genuss.</p></div>
    <nav class="footer-col" aria-label="Angebot"><p class="footer-h">Angebot</p><a href="/#preise">Preise</a><a href="/iptv-testen/">Kostenlos testen</a><a href="/iptv-kaufen/">IPTV kaufen</a><a href="/iptv-anbieter/">IPTV-Anbieter wählen</a><a href="/#faq">Häufige Fragen</a></nav>
    <nav class="footer-col" aria-label="Apps"><p class="footer-h">Apps</p><a href="/iptv-apps/">IPTV-Apps</a><a href="/iptv-smarters-pro/">IPTV Smarters Pro</a><a href="/tivimate/">TiviMate</a><a href="/ibo-player/">IBO Player</a><a href="/smart-iptv/">Smart IPTV</a><a href="/m3u-playlist/">M3U-Playlist</a></nav>
    <nav class="footer-col" aria-label="Geräte"><p class="footer-h">Geräte</p><a href="/iptv-geraete/">IPTV-Geräte</a><a href="/iptv-fire-tv-stick/">Fire TV Stick</a><a href="/iptv-samsung-tv/">Samsung TV</a><a href="/iptv-smart-tv/">Smart-TV</a><a href="/iptv-box/">IPTV-Box</a></nav>
    <nav class="footer-col" aria-label="Ratgeber"><p class="footer-h">Ratgeber</p><a href="/ratgeber/">Alle Ratgeber</a><a href="/was-ist-iptv/">Was ist IPTV?</a><a href="/iptv-deutschland/">IPTV in Deutschland</a><a href="/iptv-senderliste/">Senderliste &amp; EPG</a><a href="/iptv-probleme/">Probleme lösen</a></nav>
  </div>
  <div class="container footer-bottom"><span>© ${new Date().getFullYear()} ${site.name}</span><span>Einmal zahlen. Keine automatische Verlängerung.</span><a href="#inhalt">Nach oben ↑</a></div>
</footer>
</body>
</html>
`;
}

const pageHero = ({ crumb, parents, kicker, h1, lead }) => `<section class="page-hero" aria-labelledby="page-title"><div class="container page-hero-inner">
<nav class="crumbs" aria-label="Brotkrumen"><ol><li><a href="/">Start</a></li>${parents.map(([l, h]) => `<li><a href="${h}">${l}</a></li>`).join('')}<li aria-current="page">${crumb}</li></ol></nav>
<p class="eyebrow">${kicker}</p>
<h1 id="page-title">${h1}</h1>
<p class="page-lead">${lead}</p>
<div class="button-row"><a class="button button-outline button-large" href="/#kontakt">Kostenlos testen <span aria-hidden="true">→</span></a><a class="hero-secondary" href="/#preise">Pakete ansehen <span aria-hidden="true">→</span></a></div>
</div></section>`;

const factsTable = (t) => !t.facts ? '' : `<div class="table-wrap" role="region" aria-labelledby="fakten" tabindex="0"><table class="table">
<caption id="fakten">${text(t.name)} auf einen Blick</caption>
<tbody>${t.facts.map(([k, v]) => `<tr><th scope="row">${k}</th><td>${v}</td></tr>`).join('')}</tbody></table></div>`;

const toc = (t) => t.sections.length < 3 ? '' : `<nav class="toc" aria-label="Inhalt"><p class="toc-h">Inhalt</p><ol>${t.sections.map((s) => `<li><a href="#${s.id}">${text(s.h)}</a></li>`).join('')}<li><a href="#fragen">Häufige Fragen</a></li></ol></nav>`;

const render = (t) => {
  const hub = hubs[t.hub];
  const parents = hub ? [[hub.label, hub.path]] : [];
  const kids = t.children ? childrenOf(t.children) : [];
  const related = cardsFor([...(hub ? [hub.path] : []), ...t.related].filter((p, i, a) => p !== t.path && a.indexOf(p) === i));
  const doc = {
    path: t.path,
    title: t.title,
    description: t.description,
    crumb: t.name,
    parents,
    schema: [
      faqSchema(t.faq),
      { '@type': 'Article', headline: text(t.h1), description: t.description, inLanguage: site.lang, dateModified: reviewed, image: `${site.url}${site.ogImage}`, author: orgRef, publisher: orgRef, mainEntityOfPage: { '@id': `${site.url}${t.path}#webpage` }, about: { '@type': 'Thing', name: text(t.name) } },
      ...(t.app ? [appSchema(t)] : []),
      ...(t.schema || []),
      ...(kids.length ? [{ '@type': 'ItemList', name: text(t.h1), itemListElement: kids.map((k, i) => ({ '@type': 'ListItem', position: i + 1, url: `${site.url}${k.path}`, name: text(k.name) })) }] : []),
    ],
    body: `${pageHero({ crumb: t.name, parents, kicker: t.kicker, h1: t.h1, lead: t.lead })}
<section class="section article-section"><div class="article">
${t.hub ? `<p class="stand">Zuletzt geprüft: ${stand}</p>` : ''}
${toc(t)}
${factsTable(t)}
${t.sections.map((s) => `<h2 id="${s.id}">${s.h}</h2>${s.html}`).join('\n')}
</div></section>
${kids.length ? `<section class="section related-section" aria-labelledby="alle-title"><div class="container"><div class="section-heading"><p class="eyebrow">${t.name}</p><h2 id="alle-title">Alle Anleitungen im Überblick</h2></div>${topicGrid(kids)}</div></section>` : ''}
<section class="section related-section${kids.length ? ' related-section--plain' : ''}" aria-labelledby="passend-title"><div class="container"><div class="section-heading"><p class="eyebrow">Weiterlesen</p><h2 id="passend-title">Passend zum Thema</h2></div>${topicGrid(related)}</div></section>
${faqBlock(`Häufige Fragen: ${t.name}`, t.faq)}`,
  };
  return { path: t.path, title: t.title, description: t.description, document: shell(doc) };
};

// Ratgeber hub: links every guide, app and device page.
const ratgeber = () => {
  const faq = [
    ['Wo fange ich als IPTV-Einsteiger an?', 'Lesen Sie zuerst <a href="/was-ist-iptv/">Was ist IPTV?</a>, wählen Sie dann Ihr Gerät unter <a href="/iptv-geraete/">IPTV-Geräte</a> und die passende App unter <a href="/iptv-apps/">IPTV-Apps</a>.'],
    ['Welche App passt zu meinem Fernseher?', 'Das hängt vom Betriebssystem ab. Eine Übersicht nach Marken finden Sie unter <a href="/iptv-smart-tv/">IPTV auf dem Smart-TV</a>.'],
    ['Worauf achte ich beim IPTV-Kauf?', 'Auf einen kostenlosen Test, klare Preise ohne automatische Verlängerung, die passende Geräteanzahl und erreichbaren Support. Mehr unter <a href="/iptv-kaufen/">IPTV kaufen</a>.'],
    ['Was tun, wenn IPTV ruckelt?', 'Router und Gerät neu starten, App-Cache leeren und möglichst ein LAN-Kabel nutzen. Alle Lösungen unter <a href="/iptv-probleme/">IPTV-Probleme beheben</a>.'],
  ];
  const group = (id, kicker, title, items, alt) => `<section class="section related-section${alt ? '' : ' related-section--plain'}" aria-labelledby="${id}-title"><div class="container"><div class="section-heading"><p class="eyebrow">${kicker}</p><h2 id="${id}-title">${title}</h2></div>${topicGrid(items)}</div></section>`;
  const title = `IPTV-Ratgeber: Apps, Geräte, Kauf und Hilfe | ${site.name}`;
  const description = 'Der IPTV-Ratgeber: Anleitungen für alle Apps und Geräte, Tipps zu IPTV-Kauf und Anbieterwahl, M3U und Xtream Codes sowie Hilfe bei Problemen.';
  return {
    path: '/ratgeber/', title, description,
    document: shell({
      path: '/ratgeber/', title, description, crumb: 'Ratgeber',
      schema: [faqSchema(faq), { '@type': 'ItemList', name: 'IPTV-Ratgeber', itemListElement: topics.map((k, i) => ({ '@type': 'ListItem', position: i + 1, url: `${site.url}${k.path}`, name: text(k.name) })) }],
      body: `${pageHero({ crumb: 'Ratgeber', parents: [], kicker: 'Ratgeber', h1: 'IPTV-Ratgeber: Wissen, Apps und Geräte', lead: 'Alles, was Sie über IPTV wissen müssen – vom Kauf über die passende App bis zur Lösung, wenn etwas hakt. Sachlich erklärt und regelmäßig geprüft.' })}
${group('wissen', 'Kauf und Wissen', 'IPTV verstehen und richtig kaufen', cardsFor(['/iptv-kaufen/', ...childrenOf('ratgeber').map((t) => t.path)]), false)}
${group('apps', 'Apps', 'IPTV-Apps einrichten', cardsFor(['/iptv-apps/', ...childrenOf('apps').map((t) => t.path)]), true)}
${group('geraete', 'Geräte', 'IPTV auf Ihrem Gerät', cardsFor(['/iptv-geraete/', ...childrenOf('geraete').map((t) => t.path)]), false)}
${faqBlock('Häufige Fragen zum Ratgeber', faq)}`,
    }),
  };
};

export default () => [ratgeber(), ...topics.map(render)];
