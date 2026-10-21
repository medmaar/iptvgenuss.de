// Legal pages and the 404 page.
// The texts are drafts built from src/site.mjs. Have them checked by a lawyer
// before launch; missing details show as a highlighted "[fehlt: …]" marker.
import { site } from '../site.mjs';
import { pageHero } from '../blocks.mjs';

const c = site.company;
const val = (v, label) => v || `<mark class="todo">[fehlt: ${label}]</mark>`;
const address = () => `${val(c.name, 'Name/Firma')}${c.legalForm ? ` (${c.legalForm})` : ''}<br>${val(c.street, 'Straße und Hausnummer')}<br>${val(c.postcode, 'PLZ')} ${val(c.city, 'Ort')}<br>${c.country}`;
const draft = site.live ? '' : '<p class="callout callout--warn">Entwurf: Dieser Text muss vor der Veröffentlichung rechtlich geprüft werden.</p>';

const legal = ({ path, title, description, html }) => ({
  path,
  crumb: title,
  title: `${title} | ${site.name}`,
  description,
  noindex: true,
  body: `
${pageHero({ crumb: title, title })}
<section class="section section--flush">
  <div class="container narrow"><div class="card prose">${draft}${html}</div></div>
</section>
`,
});

const impressum = () => legal({
  path: '/impressum/',
  title: 'Impressum',
  description: `Impressum und Anbieterkennzeichnung von ${site.name}.`,
  html: `
<h2>Angaben gemäß § 5 DDG</h2>
<p>${address()}</p>
${c.representative ? `<p><strong>Vertreten durch:</strong> ${c.representative}</p>` : ''}
<h2>Kontakt</h2>
<p>E-Mail: ${site.email ? `<a href="mailto:${site.email}">${site.email}</a>` : val('', 'E-Mail')}<br>Telefon: ${val(c.phone, 'Telefon')}</p>
${c.register ? `<h2>Registereintrag</h2><p>${c.register}</p>` : ''}
${c.vatId ? `<h2>Umsatzsteuer-ID</h2><p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: ${c.vatId}</p>` : ''}
<h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
<p>${val(c.representative || c.name, 'verantwortliche Person')}, Anschrift wie oben</p>
<h2>Verbraucherstreitbeilegung</h2>
<p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>`,
});

const privacy = () => legal({
  path: '/datenschutz/',
  title: 'Datenschutzerklärung',
  description: `Wie ${site.name} personenbezogene Daten verarbeitet und welche Rechte Sie haben.`,
  html: `
<h2>1. Verantwortlicher</h2>
<p>${address()}<br>E-Mail: ${site.email ? `<a href="mailto:${site.email}">${site.email}</a>` : val('', 'E-Mail')}</p>
<h2>2. Hosting und Server-Logfiles</h2>
<p>Diese Website wird über Cloudflare Pages bereitgestellt (Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, USA). Beim Aufruf verarbeitet Cloudflare technisch notwendige Daten wie IP-Adresse, Datum und Uhrzeit, aufgerufene Seite und Browser-Informationen, um die Website auszuliefern und vor Angriffen zu schützen. Rechtsgrundlage ist unser berechtigtes Interesse an einem sicheren und stabilen Betrieb (Art. 6 Abs. 1 lit. f DSGVO). Cloudflare ist nach dem EU-U.S. Data Privacy Framework zertifiziert.</p>
<h2>3. Schriftarten</h2>
<p>Die Schriftarten dieser Website werden von unserem eigenen Server geladen. Es findet keine Verbindung zu Servern von Google oder anderen Schriftarten-Anbietern statt.</p>
<h2>4. Anfrageformular, E-Mail und WhatsApp</h2>
<p>Das Anfrageformular speichert und überträgt keine Daten an unseren Server. Beim Absenden wird Ihre Anfrage in Ihrem E-Mail-Programm${site.whatsapp ? ' oder in WhatsApp' : ''} geöffnet, und Sie entscheiden selbst, ob Sie sie abschicken. Die Angaben, die Sie uns senden, verwenden wir zur Bearbeitung Ihrer Anfrage und gegebenenfalls zur Vertragsdurchführung (Art. 6 Abs. 1 lit. b DSGVO).${site.whatsapp ? ' Bei Nutzung von WhatsApp verarbeitet zusätzlich die WhatsApp Ireland Ltd. Ihre Daten nach deren eigenen Datenschutzbestimmungen.' : ''}</p>
${site.ga4 || site.metaPixel ? `<h2>5. Statistik und Marketing (nur mit Einwilligung)</h2>
<p>Nur wenn Sie im Cookie-Hinweis zustimmen, laden wir ${[site.ga4 && 'Google Analytics 4 (Google Ireland Ltd.)', site.metaPixel && 'das Meta-Pixel (Meta Platforms Ireland Ltd.)'].filter(Boolean).join(' und ')}. Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG). Sie können sie jederzeit über „Cookie-Einstellungen“ im Fußbereich widerrufen.</p>` : `<h2>5. Cookies und Analyse</h2>
<p>Diese Website setzt keine Cookies und verwendet keine Analyse- oder Marketing-Dienste.</p>`}
<h2>6. Speicherdauer</h2>
<p>Wir speichern personenbezogene Daten nur so lange, wie es für den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungsfristen es verlangen.</p>
<h2>7. Ihre Rechte</h2>
<p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung (Art. 15–21 DSGVO). Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Außerdem können Sie sich bei einer Datenschutz-Aufsichtsbehörde beschweren.</p>`,
});

const terms = () => legal({
  path: '/agb/',
  title: 'Allgemeine Geschäftsbedingungen',
  description: `Allgemeine Geschäftsbedingungen von ${site.name}.`,
  html: `<p><mark class="todo">[fehlt: AGB]</mark> Die Allgemeinen Geschäftsbedingungen werden vor dem Start ergänzt. Sie sollten mindestens Vertragsgegenstand, Vertragsschluss, Laufzeit und Kündigung, Preise und Zahlung, Nutzungsumfang (Anzahl gleichzeitiger Geräte) und Haftung regeln.</p>`,
});

const withdrawal = () => legal({
  path: '/widerruf/',
  title: 'Widerrufsbelehrung',
  description: `Widerrufsbelehrung und Muster-Widerrufsformular von ${site.name}.`,
  html: `
<h2>Widerrufsrecht</h2>
<p>Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.</p>
<p>Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.</p>
<p>Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (${address().replace(/<br>/g, ', ')}, E-Mail: ${val(site.email, 'E-Mail')}${c.phone ? `, Telefon: ${c.phone}` : ''}) mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder eine E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.</p>
<p>Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.</p>
<h2>Folgen des Widerrufs</h2>
<p>Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.</p>
<p>Haben Sie verlangt, dass die Dienstleistungen während der Widerrufsfrist beginnen sollen, so haben Sie uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie uns von der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichten, bereits erbrachten Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht.</p>
<h2>Muster-Widerrufsformular</h2>
<p>(Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück.)</p>
<p>– An ${address().replace(/<br>/g, ', ')}, E-Mail: ${val(site.email, 'E-Mail')}<br>
– Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über die Erbringung der folgenden Dienstleistung (*)<br>
– Bestellt am (*)/erhalten am (*)<br>
– Name des/der Verbraucher(s)<br>
– Anschrift des/der Verbraucher(s)<br>
– Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)<br>
– Datum</p>
<p>(*) Unzutreffendes streichen.</p>`,
});

const notFound = () => ({
  path: '/404.html',
  title: `Seite nicht gefunden | ${site.name}`,
  description: 'Diese Seite wurde nicht gefunden.',
  noindex: true,
  body: `
${pageHero({ kicker: 'Fehler 404', title: 'Diese Seite gibt es nicht', lead: 'Vielleicht hilft Ihnen einer dieser Links weiter.', actions: '<a class="btn btn--primary" href="/">Zur Startseite</a><a class="btn btn--ghost" href="/anleitungen/">Anleitungen</a><a class="btn btn--ghost" href="/kontakt/">Kontakt</a>' })}
`,
});

export default () => [impressum(), privacy(), terms(), withdrawal(), notFound()];
