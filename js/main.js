(function () {
  var hasGsapScrollTrigger = typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined';

  if (hasGsapScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

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

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion && typeof Lenis !== 'undefined') {
    var lenis = new Lenis({
      duration: 1.2,
      easing: function (t) {
        return Math.min(1, 1.001 - Math.pow(2, -10 * t));
      },
      smoothWheel: true,
    });

    if (hasGsapScrollTrigger) {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    } else {
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        lenis.scrollTo(link.getAttribute('href'));
      });
    });
  }

  if (!prefersReducedMotion && hasGsapScrollTrigger) {
    ScrollTrigger.matchMedia({
      '(min-width: 769px)': function () {
        var cards = document.querySelectorAll('.destacados-card');
        var totalCards = cards.length;

        if (!totalCards) {
          return;
        }

        const MAX_ROTATION = 28;
        const MAX_DEPTH = 140;
        const MIN_SCALE = 0.8;
        const SCALE_RANGE = 0.20;
        const CARD_SPACING = 340;
        const TRACK = totalCards * CARD_SPACING;
        const REAL_COUNT = totalCards / 3;

        function mod(n, m) {
          return ((n % m) + m) % m;
        }

        var lastActiveIndex = null;

        function updateDestacadosCarousel(progress) {
          var currentIndex = REAL_COUNT + progress * (REAL_COUNT - 1);
          const scrollPos = currentIndex * CARD_SPACING;
          const stageWidth = document.querySelector('.destacados-stage').offsetWidth;
          const VISIBLE_HALF = stageWidth / 2;
          const FADE_BUFFER = 80;

          cards.forEach(function (card, i) {
            const basePos = i * CARD_SPACING;
            let offset = mod(basePos - scrollPos + TRACK / 2, TRACK) - TRACK / 2;
            const norm = Math.max(-1, Math.min(1, offset / (CARD_SPACING * 2)));
            const invNorm = 1 - Math.abs(norm);
            const ry = -norm * MAX_ROTATION;
            const tz = invNorm * MAX_DEPTH;
            const scale = MIN_SCALE + invNorm * SCALE_RANGE;

            const absOffset = Math.abs(offset);
            let opacity;
            if (absOffset <= VISIBLE_HALF - FADE_BUFFER) {
              opacity = 1;
            } else if (absOffset >= VISIBLE_HALF) {
              opacity = 0;
            } else {
              opacity = 1 - (absOffset - (VISIBLE_HALF - FADE_BUFFER)) / FADE_BUFFER;
            }

            card.style.transform = `translate3d(calc(-50% + ${offset}px), -50%, ${tz}px) rotateY(${ry}deg) scale(${scale})`;
            card.style.opacity = opacity;
          });

          var activeIndex = Math.round(currentIndex);
          if (activeIndex !== lastActiveIndex) {
            lastActiveIndex = activeIndex;
            gsap.to('.destacados-bg', {
              backgroundColor: activeIndex % 2 === 0 ? 'var(--color-primary)' : 'var(--color-secondary)',
              duration: 0.6,
            });
          }
        }

        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.destacados-pin',
            start: 'top top',
            end: () => '+=' + ((REAL_COUNT - 1) * CARD_SPACING * 3),
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => updateDestacadosCarousel(self.progress),
          },
        });

        return function () {
          tl.scrollTrigger && tl.scrollTrigger.kill();
          tl.kill();
        };
      },
    });
  }
})();
