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

  // Contact form: stub submission (concept site)
  const form = document.querySelector('[data-form="contact"]');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.classList.add('is-submitted');
    });
  }

  // Year stamp
  const yr = document.querySelector('[data-year]');
  if (yr) yr.textContent = new Date().getFullYear();
})();
