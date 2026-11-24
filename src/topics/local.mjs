// Local cluster: one page per city or region (keyword "IPTV [Ort]") plus the
// hub /iptv-regionen/. The entity data in local-cities.mjs and
// local-regions.mjs carries the unique part of every page (local internet
// situation, regional network operators, a local angle, own FAQ, nearby
// pages); this file adds the shared explanation, prices from site.mjs and the
// setup steps. Network operators are named only as examples of what is
// available locally; availability is always checked per address.
import { site, plans, devicePrices, euro, homeContent } from '../site.mjs';
import { L, ol, stand } from './util.mjs';
import cities from './local-cities.mjs';
import regions from './local-regions.mjs';

const paid = plans.filter((p) => !p.trial);
const month = paid.find((p) => p.months === 1);
const year = paid.find((p) => p.months === 12);
const trialPlan = plans.find((p) => p.trial);
const maxDevices = Math.max(...Object.keys(devicePrices).map(Number));
const from = Math.min(...paid.map((p) => p.price));

const all = [...cities, ...regions];
const bySlug = new Map(all.map((e) => [e.slug, e]));
const pathOf = (slug) => `/iptv-${slug}/`;
const inName = (e) => e.in || `in ${e.name}`;
// Stable variant choice per page, so shared sections do not read identically.
const pick = (e, list, salt = 0) => {
  let h = 2166136261 ^ salt;
  for (const c of e.slug) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return list[(h >>> 0) % list.length];
};

const sources = [
  ['Bundesnetzagentur: Breitbandmessung (Geschwindigkeit des eigenen Anschlusses prüfen)', 'https://www.breitbandmessung.de/'],
  ['Gigabit-Grundbuch des Bundes: Breitbandatlas (Verfügbarkeit nach Adresse)', 'https://gigabitgrundbuch.bund.de/'],
];

const connectionRows = {
  stadt: [['Glasfaser (FTTH)', 'Im Ausbau, je nach Straße bereits verfügbar', 'Sehr gut'], ['Kabel (DOCSIS)', 'In den meisten Mehrfamilienhäusern', 'Sehr gut'], ['DSL / VDSL', 'Nahezu flächendeckend', 'Gut ab rund 16 Mbit/s'], ['5G / LTE', 'Gute Netzabdeckung', 'Gut für Handy und Tablet']],
  land: [['Glasfaser (FTTH)', 'Ausbau in vielen Gemeinden, oft gefördert', 'Sehr gut'], ['DSL / VDSL', 'Verbreitet, Tempo je nach Entfernung zum Verteiler', 'Gut ab rund 16 Mbit/s'], ['Kabel (DOCSIS)', 'Vor allem in Städten und größeren Orten', 'Sehr gut'], ['LTE / 5G für zu Hause', 'Alternative, wo DSL langsam ist', 'Gut bei stabilem Empfang']],
};

const howItWorks = (e) => pick(e, [
  `<p>IPTV kommt nicht über die Antenne, die Satellitenschüssel oder die Kabelbuchse, sondern über Ihren Internetanschluss. Sie installieren eine ${L('/iptv-apps/', 'IPTV-App')} auf dem Gerät, das Sie ohnehin besitzen, und melden sich mit den Zugangsdaten an, die Sie von uns per E-Mail erhalten. ${e.short || e.name} ist dabei kein Sonderfall: Entscheidend ist allein, dass Ihre Leitung stabil genug ist.</p>
<p>Weil der Empfang über das Internet läuft, ist ${site.name} an keinen bestimmten Internetanbieter gebunden. Sie behalten Ihren Vertrag, egal ob Telekom, Vodafone, O2, 1&amp;1 oder ein regionaler Netzbetreiber. Mehr Hintergrund liefert ${L('/was-ist-iptv/', 'Was ist IPTV?')}.</p>`,
  `<p>Für IPTV brauchen Sie drei Dinge: einen Internetanschluss, ein Gerät mit passender App und Zugangsdaten. Die App lädt Senderliste und Programmführer, Sie wählen ein Programm und schauen – auf dem Fernseher, am Handy oder am Laptop. ${inName(e).replace(/^./, (c) => c.toUpperCase())} funktioniert das genauso wie überall in Deutschland.</p>
<p>Anders als beim TV-Paket eines Internetanbieters ist ${site.name} nicht an einen Anschluss gekoppelt. Sie können Ihren bestehenden Vertrag behalten und das Angebot auch unterwegs nutzen. Die Unterschiede erklärt ${L('/iptv-deutschland/', 'IPTV in Deutschland')}.</p>`,
  `<p>Beim IPTV von ${site.name} kommt das Programm als Datenstrom über Ihre Internetverbindung. Eine Satellitenschüssel, ein Kabelanschluss oder ein zusätzlicher Receiver sind nicht nötig: Eine App auf Smart-TV, Fire TV Stick, Smartphone oder Computer genügt. Sie melden sich per ${L('/xtream-codes/', 'Xtream Codes')} oder ${L('/m3u-playlist/', 'M3U-Link')} an.</p>
<p>Das Angebot ist unabhängig von Ihrem Internetanbieter ${inName(e)}. Ob Kabel, DSL, Glasfaser oder Mobilfunk: Wichtig ist eine stabile Verbindung. Einsteiger lesen am besten zuerst ${L('/was-ist-iptv/', 'Was ist IPTV?')}.</p>`,
  `<p>Fernsehen über das Internet bedeutet: Das Bild kommt als Datenstrom in Ihre Wohnung, nicht über Antennenkabel oder Satellit. ${e.short || e.name} braucht dafür keine eigene Technik vor Ort. Es genügt ein Gerät, auf dem eine ${L('/iptv-apps/', 'IPTV-App')} läuft, und die Zugangsdaten, die wir Ihnen nach der Anfrage zusenden.</p>
<p>Ihr Internetvertrag bleibt, wie er ist. Ob Sie über einen bundesweiten oder einen regionalen Anbieter surfen, spielt für ${site.name} keine Rolle, solange die Leitung stabil läuft. Wie sich IPTV von Kabel- und Satellitenfernsehen unterscheidet, erklärt ${L('/iptv-deutschland/', 'IPTV in Deutschland')}.</p>`,
], 1);

const speed = (e) => `
<div class="table-wrap" role="region" aria-labelledby="anschluss-${e.slug}" tabindex="0"><table class="table">
<caption id="anschluss-${e.slug}">Anschlussarten ${inName(e)} und ihre Eignung für IPTV</caption>
<thead><tr><th scope="col">Anschluss</th><th scope="col">Verbreitung (typisch)</th><th scope="col">Für IPTV</th></tr></thead>
<tbody>${connectionRows[e.area || 'stadt'].map(([a, b, c]) => `<tr><th scope="row">${a}</th><td>${b}</td><td>${c}</td></tr>`).join('')}</tbody></table></div>
<p>${pick(e, [
  `Als Richtwert gelten rund <strong>10 Mbit/s pro HD-Stream</strong> und rund <strong>25 Mbit/s für ${L('/iptv-4k/', '4K')}</strong>. Schauen mehrere Personen gleichzeitig, addieren sich die Werte. Wie schnell Ihr Anschluss tatsächlich ist, zeigt die kostenlose Breitbandmessung der Bundesnetzagentur; welche Anschlüsse an Ihrer Adresse möglich sind, verrät der Breitbandatlas im Gigabit-Grundbuch.`,
  `Planen Sie rund <strong>10 Mbit/s für jeden HD-Stream</strong> ein, für ${L('/iptv-4k/', '4K')} eher <strong>25 Mbit/s</strong>. Läuft parallel ein Download oder ein Videocall, sollte entsprechend Luft bleiben. Ihre reale Geschwindigkeit messen Sie am besten mit der Breitbandmessung der Bundesnetzagentur, die möglichen Anschlüsse an Ihrer Adresse zeigt der Breitbandatlas.`,
  `Für ein flüssiges HD-Bild reichen meist <strong>rund 10 Mbit/s</strong>, ${L('/iptv-4k/', '4K')} braucht <strong>etwa 25 Mbit/s</strong> pro Stream. Wichtiger als der Spitzenwert im Vertrag ist, dass die Leitung am Abend stabil bleibt. Prüfen Sie das zu Ihrer üblichen Fernsehzeit mit der Breitbandmessung der Bundesnetzagentur; was an Ihrer Adresse ausgebaut ist, sehen Sie im Breitbandatlas.`,
], 2)}</p>`;

const buy = (e) => `
<p>${pick(e, [
  `Wer IPTV ${inName(e)} kaufen möchte, braucht weder einen Laden vor Ort noch einen Techniker-Termin.`,
  `Ein IPTV-Abo ${inName(e)} schließen Sie komplett online ab – ohne Ladenbesuch und ohne Installationstermin.`,
  `Ob Sie IPTV ${inName(e)} testen oder direkt ein Abo abschließen: Alles läuft online und per E-Mail.`,
  `Für IPTV ${inName(e)} müssen Sie nirgends hinfahren: Anfrage, Zugangsdaten und Hilfe kommen online zu Ihnen.`,
], 3)} ${trialPlan ? 'Sie beginnen mit einem <strong>kostenlosen Test</strong> auf einem Gerät und prüfen, wie stabil das Bild über Ihre Leitung läuft. ' : ''}Danach wählen Sie ${month ? `<strong>${month.label}</strong> für ${euro(month.price)}` : ''}${month && year ? ' oder ' : ''}${year ? `<strong>${year.label}</strong> für ${euro(year.price)}` : ''} (jeweils für ein Gerät, Preise für bis zu ${maxDevices} Geräte bei den ${L('/#preise', 'Paketen')}). ${homeContent.billing}</p>
<p>${pick(e, [
  `Worauf Sie bei der Wahl eines IPTV-Anbieters achten sollten – klare Preise, kein Abo-Automatismus, erreichbarer Support und ein seriöses Angebot –, haben wir unter ${L('/iptv-anbieter/', 'IPTV-Anbieter wählen')} zusammengefasst. Den Ablauf der Bestellung beschreibt ${L('/iptv-kaufen/', 'IPTV kaufen')}.`,
  `Vergleichen Sie Anbieter nicht nur über den Preis: Achten Sie darauf, ob sich ein Abo automatisch verlängert, ob Sie vorab testen können und ob der Support erreichbar ist. Unsere Checkliste steht unter ${L('/iptv-anbieter/', 'IPTV-Anbieter wählen')}, die einzelnen Bestellschritte unter ${L('/iptv-kaufen/', 'IPTV kaufen')}.`,
  `Ein seriöses Angebot erkennen Sie an nachvollziehbaren Preisen, einem Test vor dem Kauf und einem Ansprechpartner, der auf Fragen antwortet. Mehr dazu lesen Sie unter ${L('/iptv-anbieter/', 'IPTV-Anbieter wählen')}; wie die Bestellung abläuft, zeigt ${L('/iptv-kaufen/', 'IPTV kaufen')}.`,
], 4)}</p>`;

const steps = (e) => ol([
  `Fordern Sie über das ${L('/#kontakt', 'Kontaktformular')} Ihren ${trialPlan ? 'kostenlosen Testzugang' : 'Zugang'} an und nennen Sie Ihr Gerät.`,
  `Installieren Sie die passende App – etwa ${L('/iptv-smarters-pro/', 'IPTV Smarters Pro')}, ${L('/tivimate/', 'TiviMate')} oder ${L('/ibo-player/', 'IBO Player')}. Welche App zu welchem Gerät passt, zeigt ${L('/iptv-geraete/', 'IPTV-Geräte')}.`,
  'Tragen Sie die Zugangsdaten aus unserer E-Mail ein (Xtream Codes, M3U-Link oder MAC-Adresse, je nach App).',
  `Warten Sie, bis Senderliste und Programmführer geladen sind, und schauen Sie los. Hakt etwas, hilft ${L('/iptv-probleme/', 'IPTV-Probleme beheben')} – oder schreiben Sie uns.`,
]);

const nearby = (e) => {
  const list = (e.near || []).map((s) => bySlug.get(s)).filter(Boolean);
  if (!list.length) return '';
  return `<p>${e.kind === 'stadt' ? 'Auch in der Umgebung' : 'Benachbart und verwandt'}: ${list.map((n) => L(pathOf(n.slug), `IPTV ${inName(n)}`)).join(', ')}. Alle Orte finden Sie unter ${L('/iptv-regionen/', 'IPTV in Ihrer Region')}.</p>`;
};

const genericFaq = (e) => [
  [`Wie schnell muss mein Internet für IPTV ${inName(e)} sein?`, `Als Richtwert rund 10 Mbit/s pro HD-Stream und rund 25 Mbit/s für 4K. Mit einem LAN-Kabel statt WLAN läuft das Bild meist am stabilsten.`],
  [`Was kostet ein IPTV-Abo ${inName(e)}?`, `${trialPlan ? 'Der Test ist kostenlos. ' : ''}${month ? `${month.label} kostet ${euro(month.price)}` : ''}${year ? `, ${year.label} ${euro(year.price)}` : ''} für ein Gerät, jeweils einmal bezahlt ohne automatische Verlängerung. Preise für mehr Geräte stehen bei den Paketen.`],
  [`Muss ich meinen Internetanbieter ${inName(e)} wechseln?`, `Nein. ${site.name} funktioniert mit jedem ausreichend schnellen Anschluss, unabhängig vom Anbieter.`],
];

const toPage = (e) => {
  const path = pathOf(e.slug);
  const titles = [`IPTV ${e.name}: Anbieter, Abo & kaufen | ${site.name}`, `IPTV ${e.name}: Abo & Anbieter | ${site.name}`, `IPTV ${e.name} kaufen | ${site.name}`, `IPTV ${e.name} | ${site.name}`];
  const title = titles.find((t) => t.length <= 60) || titles[titles.length - 1];
  const descs = [
    `IPTV ${inName(e)}: Abo ab ${euro(from)} kaufen, ${trialPlan ? 'kostenlos testen' : 'schnell starten'} und einfach einrichten. Mit Tipps zu Internet, Glasfaser und Anbietern ${inName(e)}.`,
    `IPTV ${inName(e)}: Abo ab ${euro(from)} kaufen, ${trialPlan ? 'kostenlos testen' : 'einfach starten'} und einrichten. Mit Tipps zu Internet und Anbietern ${inName(e)}.`,
    `IPTV ${inName(e)}: Abo ab ${euro(from)}, ${trialPlan ? 'kostenloser Test' : 'schneller Start'} und Einrichtung. Tipps zum Internet ${inName(e)}.`,
    `IPTV ${inName(e)} kaufen: Abo ab ${euro(from)}, ${trialPlan ? 'Test gratis' : 'schnell startklar'}.`,
  ];
  const description = descs.find((d) => d.length <= 160) || descs[descs.length - 1];
  const faq = [...(e.faq || []), ...genericFaq(e)];
  return {
    path,
    hub: 'regionen',
    name: `IPTV ${e.name}`,
    teaser: e.teaser || `IPTV-Abo, kostenloser Test und Internet-Tipps für ${e.name}.`,
    icon: 'wifi',
    title,
    description,
    kicker: e.kind === 'stadt' ? 'IPTV in Ihrer Stadt' : 'IPTV in Ihrer Region',
    h1: `IPTV ${inName(e)}: Abo, Anbieter und kostenloser Test`,
    lead: `${e.intro} ${site.name} funktioniert ${inName(e)} mit jedem ausreichend schnellen Internetanschluss – ${trialPlan ? 'erst kostenlos testen, dann' : 'einfach'} ein Paket ab ${euro(from)} wählen.`,
    facts: [
      ...(e.state ? [[e.kind === 'stadt' ? 'Bundesland' : 'Lage', e.state]] : []),
      ...(e.pop ? [['Einwohner', `rund ${e.pop}`]] : []),
      ...(e.isps?.length ? [['Regionale Netzbetreiber (Beispiele)', e.isps.join(', ')]] : []),
      ['Bundesweite Anbieter', 'u. a. Telekom, Vodafone, O2, 1&1'],
      ['IPTV Genuss', `${trialPlan ? 'Kostenlos testen, ' : ''}ab ${euro(from)}, 1 bis ${maxDevices} Geräte`],
    ],
    sections: [
      { id: 'so-funktionierts', h: `So funktioniert IPTV ${inName(e)}`, html: howItWorks(e) },
      { id: 'internet', h: `Internet ${inName(e)}: Reicht Ihr Anschluss für IPTV?`, html: `${e.net}${speed(e)}` },
      { id: 'lokal', h: e.local.h, html: e.local.html },
      { id: 'kaufen', h: `IPTV kaufen ${inName(e)}: Abo, Preise und Test`, html: buy(e) },
      { id: 'einrichten', h: `IPTV ${inName(e)} einrichten in vier Schritten`, html: `${steps(e)}${nearby(e)}<p class="muted">Angaben zu Netzbetreibern und Anschlussarten sind Beispiele ohne Gewähr; maßgeblich ist die Verfügbarkeit an Ihrer Adresse (Stand: ${stand}).</p>` },
    ],
    faq,
    sources,
    related: [...(e.near || []).slice(0, 3).map(pathOf), '/iptv-kaufen/', '/iptv-testen/', '/iptv-anbieter/'],
    keywords: [`iptv ${e.kw || e.name.toLowerCase()}`, `iptv kaufen ${e.kw || e.name.toLowerCase()}`, `iptv anbieter ${e.kw || e.name.toLowerCase()}`, `iptv abo ${e.kw || e.name.toLowerCase()}`, `iptv test ${e.kw || e.name.toLowerCase()}`, `iptv deutschland ${e.kw || e.name.toLowerCase()}`, ...(e.keywords || [])],
  };
};

const listLinks = (items) => `<ul class="link-columns">${items.map((e) => `<li>${L(pathOf(e.slug), `IPTV ${e.name}`)}</li>`).join('')}</ul>`;

const hub = {
  path: '/iptv-regionen/',
  hub: null,
  name: 'IPTV in Ihrer Region',
  teaser: 'IPTV in Ihrer Stadt, Ihrem Bundesland oder Ihrer Region – mit Internet-Tipps vor Ort.',
  icon: 'wifi',
  title: `IPTV in Ihrer Stadt und Region | ${site.name}`,
  description: 'IPTV in Deutschland nach Ort: Städte, Bundesländer und Regionen mit Tipps zu Internet, regionalen Netzbetreibern, Abo und kostenlosem Test.',
  kicker: 'Regionen',
  h1: 'IPTV in Ihrer Stadt und Region',
  lead: `${site.name} funktioniert überall in Deutschland, wo eine stabile Internetverbindung verfügbar ist. Auf den Seiten für Ihre Stadt oder Region finden Sie, welche Anschlussarten dort verbreitet sind, welche regionalen Netzbetreiber es gibt und worauf Sie vor Ort achten sollten.`,
  sections: [
    { id: 'staedte', h: 'IPTV in den 50 größten Städten', html: `<p>Von Berlin bis Osnabrück: In den Großstädten sind Kabel und Glasfaser weit verbreitet, die Leitung reicht fast immer für HD und häufig für 4K.</p>${listLinks(cities)}` },
    { id: 'bundeslaender', h: 'IPTV in den Bundesländern', html: `<p>Die Stadtstaaten Berlin, Hamburg und Bremen finden Sie bei den Städten.</p>${listLinks(regions.filter((r) => r.kind === 'land'))}` },
    { id: 'regionen', h: 'IPTV in Regionen und Landschaften', html: `<p>Ländliche Regionen haben oft andere Voraussetzungen als die Großstadt: Hier zählen DSL-Tempo, Glasfaser-Ausbau und Mobilfunk für zu Hause.</p>${listLinks(regions.filter((r) => r.kind === 'region'))}` },
    { id: 'ueberall', h: 'Gilt das Angebot überall gleich?', html: `<p>Ja. Pakete, Preise und Leistungen von ${site.name} sind in ganz Deutschland identisch. Unterschiede gibt es nur bei Ihrer Internetverbindung – deshalb lohnt sich der ${trialPlan ? L('/iptv-testen/', 'kostenlose Test') : L('/#preise', 'Blick auf die Pakete')} auf Ihrem eigenen Anschluss.</p>` },
  ],
  faq: [
    ['Funktioniert IPTV auch auf dem Land?', 'Ja, wenn die Leitung stabil rund 10 Mbit/s pro HD-Stream schafft. Wo DSL langsam ist, sind Glasfaser oder LTE/5G für zu Hause Alternativen.'],
    ['Brauche ich einen bestimmten Internetanbieter?', `Nein. ${site.name} funktioniert mit jedem Anbieter und jeder Anschlussart, solange die Verbindung stabil ist.`],
    ['Sind die Preise regional unterschiedlich?', 'Nein. Pakete und Preise gelten bundesweit gleich.'],
  ],
  sources,
  related: ['/iptv-deutschland/', '/iptv-kaufen/', '/iptv-testen/', '/iptv-anbieter/', '/#preise'],
  schema: [{ '@type': 'ItemList', name: 'IPTV in Ihrer Stadt und Region', itemListElement: all.map((e, i) => ({ '@type': 'ListItem', position: i + 1, url: `${site.url}${pathOf(e.slug)}`, name: `IPTV ${e.name}` })) }],
  keywords: ['iptv regional', 'iptv stadt'],
};

export default [hub, ...all.map(toPage)];
