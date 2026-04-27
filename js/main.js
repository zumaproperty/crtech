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

  // Dropdown: hover on desktop is CSS; click/tap toggle for mobile + keyboard
  document.querySelectorAll('.has-dropdown').forEach((item) => {
    const trigger = item.querySelector('.dropdown-toggle');
    if (!trigger) return;
    trigger.addEventListener('click', (e) => {
      // On small screens (mobile menu open) — prevent navigation, expand instead
      if (window.matchMedia('(max-width: 880px)').matches) {
        e.preventDefault();
        item.classList.toggle('is-open');
        const open = item.classList.contains('is-open');
        trigger.setAttribute('aria-expanded', String(open));
      }
    });
  });

  // Close dropdowns on outside click
  document.addEventListener('click', (e) => {
    document.querySelectorAll('.has-dropdown.is-open').forEach((item) => {
      if (!item.contains(e.target)) item.classList.remove('is-open');
    });
  });

  // Close mobile menu when a link is clicked
  document.querySelectorAll('.nav__menu a:not(.dropdown-toggle)').forEach((a) => {
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
