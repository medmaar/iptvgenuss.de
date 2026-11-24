// Shared builder for the device pages added in the city/device/app pass.
// Each device supplies its own facts, model notes, setup steps, fixes and
// FAQ; this file adds the app list, HowTo schema, keywords and the common
// closing notes. Third-party apps and devices are hedged.
import { site, devicePrices } from '../site.mjs';
import { L, ol, stand } from './util.mjs';

const maxDevices = Math.max(...Object.keys(devicePrices).map(Number));
export const note = `Apps und Geräte sind Angebote Dritter. Menüs, Verfügbarkeit und Preise können sich ändern (Stand: ${stand}).`;

// App catalogue: path and short note per app, reused by all device pages.
export const apps = {
  tivimate: ['/tivimate/', 'TiviMate', 'Programmführer wie beim klassischen Fernsehen, Premium kostenpflichtig'],
  smarters: ['/iptv-smarters-pro/', 'IPTV Smarters Pro', 'einfacher Einstieg, Xtream Codes und M3U'],
  xciptv: ['/xciptv/', 'XCIPTV', 'kostenlos und schlank'],
  televizo: ['/televizo/', 'Televizo', 'aufgeräumte Oberfläche, Premium optional'],
  sparkle: ['/sparkle-tv/', 'Sparkle TV', 'TV-Oberfläche mit EPG, für Android TV gebaut'],
  ott: ['/ott-navigator/', 'OTT Navigator', 'viele Einstellungen für Fortgeschrittene'],
  kodi: ['/kodi-iptv/', 'Kodi', 'Mediacenter mit PVR IPTV Simple Client'],
  ibo: ['/ibo-player/', 'IBO Player', 'Einrichtung per MAC-Adresse, im Jahrespaket inklusive'],
  smartiptv: ['/smart-iptv/', 'Smart IPTV', 'Playlist-Upload per MAC-Adresse'],
  flix: ['/flix-iptv/', 'Flix IPTV', 'moderne Oberfläche, Aktivierung nach Testphase'],
  set: ['/set-iptv/', 'Set IPTV / SmartOne', 'schlank, Einrichtung per MAC-Adresse'],
  ss: ['/ss-iptv/', 'SS IPTV', 'kostenlos, Playlist per Link oder Code'],
  netiptv: ['/net-iptv/', 'Net IPTV', 'Playlist über die Website des Anbieters'],
  vlc: ['/vlc-iptv/', 'VLC', 'kostenlos, spielt M3U-Links direkt ab'],
  iptvx: ['/iptvx/', 'IPTVX', 'elegante App für Apple-Geräte'],
  gse: ['/gse-smart-iptv/', 'GSE Smart IPTV', 'vielseitig, M3U und Xtream'],
  lite: ['/smarters-player-lite/', 'Smarters Player Lite', 'Smarters-Variante für Apple-Geräte'],
  iplaytv: ['/iplaytv/', 'iPlayTV', 'für Apple TV und iPhone, einmalig kostenpflichtig'],
  uhf: ['/uhf-iptv/', 'UHF', 'moderne App für iPhone, iPad, Apple TV und Mac'],
  snappier: ['/snappier-iptv/', 'Snappier', 'schnelle App für Apple-Geräte'],
  implayer: ['/implayer/', 'iMPlayer', 'für Android TV und Fire TV'],
  perfect: ['/perfect-player/', 'Perfect Player', 'schlicht und schnell'],
  extreme: ['/iptv-extreme/', 'IPTV Extreme', 'für Android, mit Aufnahmefunktion in der Pro-Version'],
  stbemu: ['/stbemu/', 'STBEmu', 'emuliert eine MAG-Box per Portal'],
  smartstb: ['/smart-stb/', 'Smart STB', 'MAG-Portal auf dem Smart-TV'],
  mx: ['/mx-player-iptv/', 'MX Player', 'Videoplayer, spielt einzelne Stream-Links'],
  myiptv: ['/myiptv-player/', 'MyIPTV Player', 'kostenlos für Windows'],
  progtv: ['/progtv/', 'ProgTV', 'Windows-Player mit vielen Profi-Funktionen'],
  iptvnator: ['/iptvnator/', 'IPTVnator', 'Open Source für Windows, macOS und Linux'],
  sofronov: ['/iptv-pro-sofronov/', 'IPTV / IPTV Pro (Alexander Sofronov)', 'einfacher M3U-Player für Android'],
  mytvonline: ['/formuler/', 'MYTVOnline', 'die IPTV-App der Formuler-Boxen'],
  duplex: ['/duplexplay/', 'DuplexPlay', 'Einrichtung per Geräte-ID'],
  maxplayer: ['/maxplayer/', 'MaxPlayer', 'für Smart-TV, Android, Apple und Windows'],
};

const appList = (keys) => `<ul>${keys.map((k) => {
  const [href, name, text] = apps[k];
  return `<li>${L(href, name)}: ${text}.</li>`;
}).join('')}</ul>`;

const howTo = (path, name, steps) => ({
  '@type': 'HowTo',
  '@id': `${site.url}${path}#anleitung`,
  name: `IPTV auf ${name} einrichten`,
  inLanguage: site.lang,
  step: steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, text: s.replace(/<[^>]+>/g, '') })),
});

// d: { slug, name, short?, kw, teaser, icon, facts, lead, model: {h, html}, apps: [keys], appsIntro?, steps, stepsNote?, fixes: [[problem, fix]], extra?: [{id,h,html}], faq, related, keywords? }
export const device = (d) => {
  const path = `/iptv-${d.slug}/`;
  const short = d.short || d.name;
  const kw = d.kw || short.toLowerCase();
  const titles = [`IPTV auf ${short}: Apps & Anleitung | ${site.name}`, `IPTV ${short}: Einrichten & Apps | ${site.name}`, `IPTV ${short} einrichten | ${site.name}`];
  return {
    path,
    hub: 'geraete',
    name: short,
    teaser: d.teaser,
    icon: d.icon || 'tv',
    title: d.title || titles.find((t) => t.length <= 60) || titles[titles.length - 1],
    description: d.description,
    kicker: 'Geräte',
    h1: d.h1 || `IPTV auf ${d.name} einrichten – Apps und Anleitung`,
    lead: d.lead,
    facts: d.facts,
    schema: [howTo(path, d.name, d.steps)],
    sections: [
      { id: 'geraet', h: d.model.h, html: d.model.html },
      { id: 'apps', h: `Die besten IPTV-Apps für ${short}`, html: `${d.appsIntro ? `<p>${d.appsIntro}</p>` : ''}${appList(d.apps)}<p>Alle Apps im Vergleich finden Sie unter ${L('/iptv-apps/', 'IPTV-Apps')}.</p>` },
      { id: 'einrichten', h: `IPTV auf ${short} einrichten: Schritt für Schritt`, html: `${ol(d.steps)}${d.stepsNote ? `<p>${d.stepsNote}</p>` : ''}` },
      ...(d.extra || []),
      { id: 'probleme', h: `IPTV auf ${short} funktioniert nicht? Häufige Fehler`, html: `<ul>${d.fixes.map(([p, f]) => `<li><strong>${p}:</strong> ${f}</li>`).join('')}</ul><p>Weitere Lösungen unter ${L('/iptv-probleme/', 'IPTV-Probleme beheben')}. Mit ${site.name} schauen Sie auf 1 bis ${maxDevices} Geräten gleichzeitig – ${L('/#preise', 'Pakete ansehen')}.</p><p class="muted">${note}</p>` },
    ],
    faq: d.faq,
    related: d.related,
    keywords: [`iptv ${kw}`, `iptv für ${kw}`, `iptv auf ${kw}`, `iptv ${kw} einrichten`, `iptv ${kw} installieren`, `iptv ${kw} anleitung`, `beste iptv app für ${kw}`, `iptv ${kw} funktioniert nicht`, ...(d.keywords || [])],
  };
};

// Reusable setup steps.
export const steps = {
  googleTv: (app = 'IPTV-App') => [
    'Öffnen Sie auf dem Startbildschirm den <strong>Google Play Store</strong> (bei Google TV über „Apps“ oder die Suche).',
    `Suchen Sie die gewünschte ${app} – etwa TiviMate, IPTV Smarters Pro oder XCIPTV – und installieren Sie sie.`,
    'Starten Sie die App und wählen Sie als Anmeldung <strong>Xtream Codes</strong> (oder M3U-Playlist).',
    `Tragen Sie Server-URL, Benutzername und Passwort aus unserer E-Mail ein und vergeben Sie einen Namen, zum Beispiel „${site.name}“.`,
    'Warten Sie, bis Senderliste und Programmführer geladen sind. Danach wählen Sie ein Programm mit der Fernbedienung.',
  ],
  fireOs: [
    'Drücken Sie die Home-Taste und öffnen Sie über die <strong>Lupe</strong> die Suche im Amazon Appstore.',
    'Suchen Sie eine IPTV-App wie IPTV Smarters Pro oder XCIPTV und installieren Sie sie. Steht die gewünschte App nicht im Appstore, installieren Sie sie mit der Downloader-App von der offiziellen Website des Entwicklers.',
    'Starten Sie die App und wählen Sie die Anmeldung per <strong>Xtream Codes</strong>.',
    `Geben Sie Server-URL, Benutzername und Passwort aus unserer E-Mail ein und speichern Sie das Profil als „${site.name}“.`,
    'Lassen Sie Senderliste und Programmführer vollständig laden und starten Sie das erste Programm.',
  ],
  apple: (device) => [
    `Öffnen Sie auf ${device} den <strong>App Store</strong> und suchen Sie eine IPTV-App, zum Beispiel IPTVX, Smarters Player Lite, UHF oder iPlayTV.`,
    'Installieren Sie die App und öffnen Sie sie.',
    'Wählen Sie „Playlist hinzufügen“ und als Typ <strong>Xtream Codes</strong> oder <strong>M3U-Link</strong>.',
    'Tragen Sie die Zugangsdaten aus unserer E-Mail ein und bestätigen Sie.',
    'Warten Sie, bis Sender, Programmführer und Mediathek geladen sind.',
  ],
};
