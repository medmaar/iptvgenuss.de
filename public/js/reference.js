// The design reference is static: no source-site analytics, sessions or authentication.
const notice = document.querySelector('.reference-cookies');
try { notice.hidden = localStorage.getItem('genuss-cookie-notice') === 'dismissed'; } catch {}
document.querySelector('[data-dismiss-cookies]')?.addEventListener('click', () => {
  notice.hidden = true;
  try { localStorage.setItem('genuss-cookie-notice', 'dismissed'); } catch {}
});
let opener;
function closeModal() {
  document.querySelectorAll('.modal.in').forEach(modal => { modal.classList.remove('in'); modal.setAttribute('aria-hidden', 'true'); });
  document.body.classList.remove('modal-open');
  opener?.focus();
}
document.addEventListener('click', event => {
  const toggle = event.target.closest('[data-toggle]');
  if (toggle) {
    const kind = toggle.dataset.toggle;
    if (kind === 'collapse') {
      const target = document.querySelector(toggle.dataset.target);
      if (target) { event.preventDefault(); toggle.setAttribute('aria-expanded', String(target.classList.toggle('in'))); }
    } else if (kind === 'dropdown') {
      event.preventDefault();
      toggle.setAttribute('aria-expanded', String(toggle.parentElement.classList.toggle('open')));
    } else if (kind === 'modal') {
      const modal = document.querySelector(toggle.dataset.target);
      if (modal) {
        event.preventDefault(); opener = toggle; modal.classList.add('in'); modal.setAttribute('aria-hidden', 'false');
        modal.setAttribute('aria-modal', 'true'); document.body.classList.add('modal-open'); modal.querySelector('button')?.focus();
      }
    }
  }
  if (event.target.closest('[data-dismiss="modal"]') || event.target.classList.contains('modal')) closeModal();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeModal();
  if (event.key === 'Tab') {
    const modal = document.querySelector('.modal.in');
    if (!modal) return;
    const items = [...modal.querySelectorAll('button, a[href]')];
    const first = items[0], last = items.at(-1);
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
  }
});
