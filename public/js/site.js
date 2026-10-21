(() => {
  const d = document;

  // Mobile menu
  const btn = d.querySelector('.menu-btn');
  const menu = d.getElementById('mobile-nav');
  if (btn && menu) {
    const label = btn.querySelector('.sr-only');
    const set = (open) => {
      menu.hidden = !open;
      btn.setAttribute('aria-expanded', String(open));
      label.textContent = open ? 'Menü schließen' : 'Menü öffnen';
    };
    btn.addEventListener('click', () => {
      const open = menu.hidden;
      set(open);
      if (open) menu.querySelector('a').focus();
    });
    d.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !menu.hidden) { set(false); btn.focus(); }
    });
    matchMedia('(min-width: 1001px)').addEventListener('change', (e) => e.matches && set(false));
  }

  // Request form: validates, then opens WhatsApp or the mail app with the
  // request filled in. Nothing is sent to a server.
  const form = d.querySelector('[data-request-form]');
  if (form) {
    const err = form.querySelector('[data-form-error]');
    const plan = form.elements.plan;
    const wanted = new URLSearchParams(location.search).get('paket');
    if (plan && wanted && [...plan.options].some((o) => o.value === wanted)) plan.value = wanted;

    const rules = {
      name: (v) => v.trim().length > 1 || 'Bitte geben Sie Ihren Namen ein.',
      email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
      ok: (_, el) => el.checked || 'Bitte bestätigen Sie den Hinweis zum Datenschutz.',
    };
    const check = () => {
      const problems = [];
      for (const [n, rule] of Object.entries(rules)) {
        const el = form.elements[n];
        const res = rule(el.value, el);
        el.setAttribute('aria-invalid', String(res !== true));
        if (res !== true) problems.push([el, res]);
      }
      return problems;
    };
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const problems = check();
      if (problems.length) {
        err.textContent = problems.map(([, m]) => m).join(' ');
        err.hidden = false;
        problems[0][0].focus();
        return;
      }
      err.hidden = true;
      const f = form.elements;
      const planText = plan && plan.value ? plan.options[plan.selectedIndex].text : '';
      const lines = [
        `${form.dataset.type} über iptvgenuss.de`,
        '',
        `Name: ${f.name.value.trim()}`,
        `E-Mail: ${f.email.value.trim()}`,
        f.device.value && `Gerät: ${f.device.value}`,
        planText && `Paket: ${planText}`,
        f.message.value.trim() && `\n${f.message.value.trim()}`,
      ].filter(Boolean).join('\n');
      const via = (e.submitter && e.submitter.value) || (form.dataset.whatsapp ? 'whatsapp' : 'email');
      if (via === 'whatsapp') {
        window.open(`https://wa.me/${form.dataset.whatsapp}?text=${encodeURIComponent(lines)}`, '_blank', 'noopener');
      } else {
        location.href = `mailto:${form.dataset.email}?subject=${encodeURIComponent(`${form.dataset.type}: ${f.name.value.trim()}`)}&body=${encodeURIComponent(lines)}`;
      }
    });
  }

  // Cookie consent: analytics load only after an explicit "accept".
  const box = d.querySelector('[data-consent]');
  const cfgEl = d.getElementById('tracking');
  if (box && cfgEl) {
    const cfg = JSON.parse(cfgEl.textContent);
    const KEY = 'consent-v1';
    const read = () => { try { return localStorage.getItem(KEY); } catch { return null; } };
    const save = (v) => { try { localStorage.setItem(KEY, v); } catch { /* private mode */ } };
    const load = () => {
      if (cfg.ga4) {
        const s = d.createElement('script');
        s.async = true;
        s.src = `https://www.googletagmanager.com/gtag/js?id=${cfg.ga4}`;
        d.head.append(s);
        window.dataLayer = window.dataLayer || [];
        window.gtag = function () { window.dataLayer.push(arguments); };
        window.gtag('js', new Date());
        window.gtag('config', cfg.ga4, { anonymize_ip: true });
      }
      if (cfg.metaPixel) {
        /* eslint-disable */
        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,d,'script','https://connect.facebook.net/en_US/fbevents.js');
        window.fbq('init', cfg.metaPixel); window.fbq('track', 'PageView');
      }
    };
    const choice = read();
    if (choice === 'all') load();
    else if (!choice) box.hidden = false;
    box.querySelector('[data-consent-allow]').addEventListener('click', () => { save('all'); box.hidden = true; load(); });
    box.querySelector('[data-consent-deny]').addEventListener('click', () => {
      const had = read() === 'all';
      save('none');
      box.hidden = true;
      if (had) location.reload(); // unload trackers that were already running
    });
    d.querySelectorAll('[data-consent-open]').forEach((b) => b.addEventListener('click', () => { box.hidden = false; box.querySelector('button').focus(); }));
  }
})();
