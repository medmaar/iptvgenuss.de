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
