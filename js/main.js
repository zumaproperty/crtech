(function () {
  'use strict';

  // Mobile nav toggle
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  if (nav && toggle) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Close mobile menu when a link is clicked
  document.querySelectorAll('.nav__menu a').forEach((a) => {
    a.addEventListener('click', () => {
      nav?.classList.remove('is-open');
      toggle?.setAttribute('aria-expanded', 'false');
    });
  });

  // Contact form: submit to Netlify Forms via fetch, keep inline success UI
  const form = document.querySelector('[data-form="contact"]');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      const errorEl = form.querySelector('.form__error');
      if (errorEl) errorEl.hidden = true;
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Sending…'; }
      try {
        const body = new URLSearchParams(new FormData(form)).toString();
        const res = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body,
        });
        if (!res.ok) throw new Error('Netlify Forms responded ' + res.status);
        form.classList.add('is-submitted');
      } catch (err) {
        if (errorEl) errorEl.hidden = false;
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Send Message'; }
      }
    });
  }

  // Year stamp
  const yr = document.querySelector('[data-year]');
  if (yr) yr.textContent = new Date().getFullYear();
})();
