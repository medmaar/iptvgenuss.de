const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#hauptnavigation');
const closeMenu = () => {
  toggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
};
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    toggle.focus();
  }
});
window.matchMedia('(min-width: 801px)').addEventListener('change', closeMenu);
const priceData = JSON.parse(document.querySelector('#price-data').textContent);
const formatPrice = value => new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);
const selectedPlan = document.querySelector('[data-selected-plan]');
document.querySelectorAll('[data-devices]').forEach(button => {
  button.addEventListener('click', () => {
    const count = Number(button.dataset.devices);
    document.querySelectorAll('[data-devices]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.querySelector('[data-device-hint]').textContent = `Preise für ${count} ${count === 1 ? 'Gerät' : 'Geräte'} gleichzeitig`;
    document.querySelectorAll('[data-plan-index]').forEach(card => {
      const price = formatPrice(priceData[count][Number(card.dataset.planIndex)]);
      card.querySelector('[data-plan-price]').textContent = price;
      card.querySelector('[data-device-label]').textContent = `${count} ${count === 1 ? 'Gerät' : 'Geräte'} gleichzeitig`;
      const link = card.querySelector('[data-plan]');
      link.dataset.price = price;
      link.dataset.count = String(count);
    });
    selectedPlan.hidden = true;
    document.querySelectorAll('.contact-actions a').forEach(contact => { contact.href = contact.dataset.originalHref; });
  });
});
document.querySelectorAll('.contact-actions a').forEach(contact => { contact.dataset.originalHref = contact.href; });
document.querySelectorAll('[data-plan]').forEach(link => {
  link.addEventListener('click', () => {
    const selected = document.querySelector('[data-selected-plan]');
    const choice = `${link.dataset.plan} – ${link.dataset.price} · ${link.dataset.count} ${link.dataset.count === '1' ? 'Gerät' : 'Geräte'}`;
    selected.textContent = `Ihr Wunschpaket: ${choice}`;
    selected.hidden = false;
    document.querySelectorAll('.contact-actions a').forEach(contact => {
      const url = new URL(contact.href);
      if (url.hostname === 'wa.me') url.searchParams.set('text', `Guten Tag, ich interessiere mich für IPTV Genuss: ${choice}.`);
      if (url.protocol === 'mailto:') url.searchParams.set('subject', `IPTV Genuss – Anfrage: ${choice}`);
      contact.href = url.href;
    });
  });
});

// Trial links reset any previously selected paid package.
document.querySelectorAll('[data-enquiry]').forEach(link => {
  link.addEventListener('click', () => {
    selectedPlan.textContent = `Ihre Anfrage: ${link.dataset.enquiry}`;
    selectedPlan.hidden = false;
    document.querySelectorAll('.contact-actions a').forEach(contact => {
      const url = new URL(contact.dataset.originalHref);
      if (url.hostname === 'wa.me') url.searchParams.set('text', `Guten Tag, ich interessiere mich für IPTV Genuss: ${link.dataset.enquiry}.`);
      if (url.protocol === 'mailto:') url.searchParams.set('subject', `IPTV Genuss – ${link.dataset.enquiry}`);
      contact.href = url.href;
    });
  });
});

// Native horizontal scrolling works without JavaScript; enhancement adds controls
// and visible-only autoplay, with motion, focus, hover and page visibility guards.
const reviewMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
document.querySelectorAll('[data-review-platform]').forEach(platform => {
  const viewport = platform.querySelector('[data-review-viewport]');
  const cards = [...viewport.querySelectorAll('[data-review-card]')];
  const controls = platform.querySelector('[data-review-controls]');
  const dots = platform.querySelector('[data-review-dots]');
  const position = platform.querySelector('[data-review-position]');
  const playback = platform.querySelector('[data-review-playback]');
  let stops = [], active = 0, visible = false, hovering = false;
  let userPaused = false, timer, scrollFrame;
  const isPaused = () => userPaused || reviewMotion.matches;
  function schedule() {
    clearTimeout(timer);
    if (!visible || hovering || document.hidden || isPaused() || platform.contains(document.activeElement) || stops.length < 2) return;
    timer = setTimeout(() => goTo(active + 1), 5000);
  }
  function renderPosition() {
    const current = Math.min(stops.length - 1, stops.reduce((best, stop, i) => Math.abs(stop - viewport.scrollLeft) < Math.abs(stops[best] - viewport.scrollLeft) ? i : best, 0));
    active = Math.max(0, current);
    [...dots.children].forEach((dot, i) => dot.setAttribute('aria-current', String(i === active)));
    position.textContent = `${active + 1} / ${stops.length}`;
    const dot = dots.children[active];
    if (dot) dots.scrollTo({ left: dot.offsetLeft - dots.offsetLeft - dots.clientWidth / 2 + dot.clientWidth / 2, behavior: reviewMotion.matches ? 'instant' : 'smooth' });
  }
  function goTo(index) {
    const wrapped = (index + stops.length) % stops.length;
    viewport.scrollTo({ left: stops[wrapped], behavior: reviewMotion.matches || index >= stops.length || index < 0 ? 'instant' : 'smooth' });
    schedule();
  }
  function measure() {
    const max = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
    const origin = cards[0].offsetLeft;
    stops = [...new Set(cards.map(card => Math.min(max, card.offsetLeft - origin)))];
    dots.replaceChildren(...stops.map((_, i) => {
      const dot = document.createElement('button');
      dot.type = 'button'; dot.className = 'review-dot';
      dot.setAttribute('aria-label', `Position ${i + 1} von ${stops.length}`);
      dot.setAttribute('aria-controls', viewport.id);
      dot.addEventListener('click', () => goTo(i));
      return dot;
    }));
    controls.hidden = stops.length < 2;
    renderPosition(); schedule();
  }
  function updatePlayback() {
    playback.textContent = isPaused() ? 'Abspielen' : 'Pause';
    playback.setAttribute('aria-label', `${isPaused() ? 'Automatisches Blättern starten' : 'Automatisches Blättern pausieren'}: ${platform.querySelector('h3').textContent}`);
    // Reduced-motion users retain manual navigation without automatic movement.
    playback.hidden = reviewMotion.matches;
    schedule();
  }
  platform.querySelector('[data-review-prev]').addEventListener('click', () => goTo(active - 1));
  platform.querySelector('[data-review-next]').addEventListener('click', () => goTo(active + 1));
  playback.addEventListener('click', () => { userPaused = !userPaused; updatePlayback(); });
  viewport.addEventListener('scroll', () => {
    cancelAnimationFrame(scrollFrame);
    scrollFrame = requestAnimationFrame(renderPosition);
    schedule();
  }, { passive: true });
  viewport.addEventListener('keydown', event => {
    if (event.target !== viewport) return;
    const target = { ArrowRight: active + 1, ArrowLeft: active - 1, Home: 0, End: stops.length - 1 }[event.key];
    if (target !== undefined) { event.preventDefault(); goTo(target); }
  });
  platform.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') { hovering = true; schedule(); } });
  platform.addEventListener('pointerleave', () => { hovering = false; schedule(); });
  platform.addEventListener('focusin', () => { clearTimeout(timer); });
  platform.addEventListener('focusout', () => { requestAnimationFrame(schedule); });
  document.addEventListener('visibilitychange', schedule);
  reviewMotion.addEventListener('change', updatePlayback);
  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; schedule(); }, { threshold: 0.15 }).observe(platform);
  new ResizeObserver(measure).observe(viewport);
  updatePlayback();
});
