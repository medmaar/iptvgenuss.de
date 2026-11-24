// Small helpers for topic page content.
export const L = (href, text) => `<a href="${href}">${text}</a>`;
export const ol = (list) => `<ol class="guide-steps">${list.map((s) => `<li>${s}</li>`).join('')}</ol>`;
// Month and year of the last content review, shown on app and device pages.
export const stand = 'November 2026';
