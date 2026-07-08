// Google Analytics 4
// TODO: replace G-XXXXXXXXXX below with the real Measurement ID from
// https://analytics.google.com → Admin → Data Streams → Web → Measurement ID.
// Until it's replaced, this file is a no-op and no data is sent.
(function () {
  var GA_ID = 'G-W497KT50X7';
  if (!GA_ID || GA_ID.indexOf('XXXXXXXXXX') !== -1) return;

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag(){ window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID, { anonymize_ip: true });
})();
