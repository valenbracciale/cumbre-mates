(function () {
  var WHATSAPP_NUMBER = '5492612064531';

  function buildWhatsAppLink(productName) {
    var message = 'Hola! Quiero consultar por el ' + productName;
    return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);
  }

  document.querySelectorAll('[data-whatsapp-product]').forEach(function (link) {
    link.href = buildWhatsAppLink(link.getAttribute('data-whatsapp-product'));
  });

  var navToggle = document.querySelector('.nav-toggle');
  var siteNav = document.querySelector('.site-nav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = siteNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  var siteHeader = document.querySelector('.site-header');
  var HEADER_SCROLL_THRESHOLD = 60;

  if (siteHeader) {
    var updateHeaderScrollState = function () {
      siteHeader.classList.toggle('header-scrolled', window.scrollY > HEADER_SCROLL_THRESHOLD);
    };
    updateHeaderScrollState();
    window.addEventListener('scroll', updateHeaderScrollState, { passive: true });
  }
})();
