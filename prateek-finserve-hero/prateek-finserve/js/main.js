/* Prateek Finserve — hero interactions (minimal, no dependencies) */
(function () {
  'use strict';

  var announce = document.getElementById('selectionAnnouncer');

  /* ---------------- Category chips (single-select) ---------------- */
  var chips = Array.prototype.slice.call(document.querySelectorAll('.chip'));
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var wasActive = chip.classList.contains('is-active');
      chips.forEach(function (c) {
        c.classList.remove('is-active');
        c.setAttribute('aria-pressed', 'false');
      });
      if (!wasActive) {
        chip.classList.add('is-active');
        chip.setAttribute('aria-pressed', 'true');
        if (announce) announce.textContent = 'Selected: ' + chip.getAttribute('data-category');
      } else if (announce) {
        announce.textContent = 'No category selected';
      }
    });
  });

  /* ---------------- Hero photograph fallback ----------------
     While assets/images/hero-finance.jpg is missing, hide the broken
     <img> and reveal the styled gradient placeholder behind it. */
  var visual = document.getElementById('heroVisual');
  var heroImg = visual ? visual.querySelector('img') : null;
  if (heroImg) {
    heroImg.addEventListener('error', function () {
      visual.classList.add('media-missing');
    }, { once: true });
    // If the image is served from cache before the error handler binds:
    if (heroImg.complete && heroImg.naturalWidth === 0) {
      visual.classList.add('media-missing');
    }
  }

  /* ---------------- Mobile menu ---------------- */
  var toggle = document.getElementById('menuToggle');
  var menu = document.getElementById('mobileMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.hidden === true;
      menu.hidden = !open;
      toggle.setAttribute('aria-expanded', String(open));
      document.getElementById('iconOpen').hidden = open;
      document.getElementById('iconClose').hidden = !open;
    });
    // Close the menu after choosing an item
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.hidden = true;
        toggle.setAttribute('aria-expanded', 'false');
        document.getElementById('iconOpen').hidden = false;
        document.getElementById('iconClose').hidden = true;
      });
    });
  }
})();
