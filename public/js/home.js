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
    document.querySelector('[data-device-hint]').textContent = `Monats- und Jahrespreise für ${count} ${count === 1 ? 'Gerät' : 'Geräte'} gleichzeitig · Kostenloser Test für 1 Gerät`;
    document.querySelectorAll('[data-paid-plan]').forEach(card => {
      const price = formatPrice(priceData[count][card.dataset.planId]);
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
    const choice = `${link.dataset.plan} – ${link.dataset.price} · ${link.dataset.count} ${link.dataset.count === '1' ? 'Gerät' : 'Geräte'}${link.dataset.bonus ? ` · inkl. ${link.dataset.bonus}` : ''}`;
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

// Each platform loops independently; only the most visible row advances itself.
const reviewMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const reviewControllers = new Map();
const reviewVisibility = new Map();
const reviewObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => reviewVisibility.set(entry.target, entry.intersectionRatio));
  let chosen = null, bestRatio = 0.35;
  reviewControllers.forEach((controller, platform) => {
    const ratio = reviewVisibility.get(platform) || 0;
    if (ratio > bestRatio) { chosen = platform; bestRatio = ratio; }
  });
  reviewControllers.forEach((controller, platform) => controller.setActive(platform === chosen));
}, { threshold: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1] });

document.querySelectorAll('[data-review-platform]').forEach(platform => {
  const viewport = platform.querySelector('[data-review-viewport]');
  const cards = [...viewport.querySelectorAll('[data-review-card]')];
  const controls = platform.querySelector('[data-review-controls]');
  const dots = platform.querySelector('[data-review-dots]');
  const count = cards.length;
  if (!count) return;
  let current = 0, origin = 0, step = 0, lastWidth = 0;
  let active = false, hovering = false, rebuilding = false, rebuildFrame, timer, settling, scrollFrame;
  const normalize = index => (index % count + count) % count;
  function schedule(delay = 4200) {
    clearTimeout(timer);
    if (rebuilding || !active || hovering || document.hidden || reviewMotion.matches || platform.contains(document.activeElement) || count < 2) return;
    timer = setTimeout(() => goTo(current + 1), delay);
  }
  function renderDots() {
    viewport.dataset.reviewIndex = String(current);
    const middle = Math.floor(dots.children.length / 2);
    [...dots.children].forEach((dot, i) => {
      const target = normalize(current + i - middle);
      dot.dataset.reviewTarget = String(target);
      dot.setAttribute('aria-label', `Bewertung ${target + 1} von ${count}`);
      dot.setAttribute('aria-current', String(i === middle));
    });
  }
  function readPosition() {
    if (rebuilding || !step) return;
    current = normalize(Math.round((viewport.scrollLeft - origin) / step));
    renderDots();
  }
  function settle() {
    clearTimeout(settling);
    if (rebuilding || !step) return;
    const padding = parseFloat(getComputedStyle(viewport).paddingLeft) || 0;
    origin = cards[0].getBoundingClientRect().left - viewport.getBoundingClientRect().left + viewport.scrollLeft - padding;
    const index = Math.round((viewport.scrollLeft - origin) / step);
    current = normalize(index);
    const target = origin + current * step;
    if (Math.abs(viewport.scrollLeft - target) > 1) {
      viewport.scrollTo({ left: target, behavior: 'instant' });
    }
    renderDots(); schedule();
  }
  function goTo(index, instant = false) {
    clearTimeout(timer);
    const left = origin + index * step;
    if (Math.abs(viewport.scrollLeft - left) < 1) { settle(); return; }
    viewport.scrollTo({ left, behavior: reviewMotion.matches || instant ? 'instant' : 'smooth' });
  }
  function cloneCard(card) {
    const clone = card.cloneNode(true);
    clone.removeAttribute('data-review-card');
    clone.setAttribute('data-review-clone', '');
    clone.setAttribute('aria-hidden', 'true');
    clone.removeAttribute('aria-label');
    clone.inert = true;
    return clone;
  }
  function measure() {
    if (viewport.clientWidth === lastWidth) return;
    lastWidth = viewport.clientWidth;
    rebuilding = true;
    clearTimeout(timer); clearTimeout(settling);
    cancelAnimationFrame(scrollFrame); cancelAnimationFrame(rebuildFrame);
    viewport.style.scrollSnapType = 'none';
    viewport.style.scrollBehavior = 'auto';
    viewport.querySelectorAll('[data-review-clone]').forEach(clone => clone.remove());
    if (count > 1) {
      const gap = parseFloat(getComputedStyle(viewport).columnGap) || 0;
      const visible = Math.ceil(viewport.clientWidth / (cards[0].getBoundingClientRect().width + gap));
      const buffer = Math.min(count, Math.max(3, visible + 1));
      viewport.prepend(...cards.slice(-buffer).map(cloneCard));
      viewport.append(...cards.slice(0, buffer).map(cloneCard));
    }
    const padding = parseFloat(getComputedStyle(viewport).paddingLeft) || 0;
    origin = cards[0].getBoundingClientRect().left - viewport.getBoundingClientRect().left + viewport.scrollLeft - padding;
    step = count > 1 ? cards[1].getBoundingClientRect().left - cards[0].getBoundingClientRect().left : 0;
    viewport.scrollTo({ left: origin + current * step, behavior: 'instant' });
    controls.hidden = count < 2;
    renderDots();
    rebuildFrame = requestAnimationFrame(() => {
      viewport.style.scrollSnapType = '';
      viewport.style.scrollBehavior = '';
      viewport.scrollTo({ left: origin + current * step, behavior: 'instant' });
      rebuildFrame = requestAnimationFrame(() => { rebuilding = false; settle(); });
    });
  }
  dots.replaceChildren(...Array.from({ length: Math.min(7, count) }, () => {
    const dot = document.createElement('button');
    dot.type = 'button'; dot.className = 'review-dot';
    dot.setAttribute('aria-controls', viewport.id);
    dot.addEventListener('click', () => {
      const target = Number(dot.dataset.reviewTarget);
      let delta = normalize(target - current);
      if (delta > count / 2) delta -= count;
      goTo(current + delta);
    });
    return dot;
  }));
  viewport.addEventListener('scroll', () => {
    if (rebuilding) return;
    clearTimeout(timer); clearTimeout(settling);
    cancelAnimationFrame(scrollFrame);
    scrollFrame = requestAnimationFrame(readPosition);
    settling = setTimeout(settle, 160);
  }, { passive: true });
  viewport.addEventListener('keydown', event => {
    if (event.target !== viewport) return;
    const target = { ArrowRight: current + 1, ArrowLeft: current - 1, Home: 0, End: count - 1 }[event.key];
    if (target !== undefined) {
      event.preventDefault(); goTo(target, event.key === 'Home' || event.key === 'End');
    }
  });
  platform.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') { hovering = true; schedule(); } });
  platform.addEventListener('pointerleave', () => { hovering = false; schedule(); });
  platform.addEventListener('focusin', () => clearTimeout(timer));
  platform.addEventListener('focusout', () => requestAnimationFrame(() => schedule()));
  document.addEventListener('visibilitychange', () => schedule());
  reviewMotion.addEventListener('change', () => schedule());
  reviewControllers.set(platform, {
    setActive(value) {
      if (active === value) return;
      active = value;
      platform.dataset.reviewActive = String(value);
      schedule(1600);
    },
  });
  window.addEventListener('resize', measure);
  measure();
  new ResizeObserver(measure).observe(viewport);
  reviewObserver.observe(platform);
});
