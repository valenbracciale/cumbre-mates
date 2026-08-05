(function () {
  var track1 = document.getElementById('marquee-track-1');
  var track2 = document.getElementById('marquee-track-2');

  if (!track1 || !track2) return;

  var SPEED = 0.65;

  function buildUpdater(track, direction) {
    var setWidth = track.scrollWidth / 2;

    return function (scrollY) {
      var raw = (scrollY * SPEED) % setWidth;
      var x = direction < 0 ? -raw : raw - setWidth;
      track.style.transform = 'translateX(' + x + 'px)';
    };
  }

  var updateRow1 = buildUpdater(track1, -1);
  var updateRow2 = buildUpdater(track2, 1);

  var ticking = false;

  function update() {
    var scrollY = window.scrollY;
    updateRow1(scrollY);
    updateRow2(scrollY);
    ticking = false;
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  update();
})();
