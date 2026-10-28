(function () {
  var t = document.getElementById('mob-toggle'), d = document.getElementById('mob-drawer'),
      o = document.getElementById('mob-overlay'), c = document.getElementById('drawer-close');
  if (t && d && o) {
    var open = function () {
      d.removeAttribute('hidden'); o.classList.add('visible');
      t.setAttribute('aria-expanded', 'true'); t.setAttribute('aria-label', 'Close navigation menu');
      document.documentElement.style.overflow = 'hidden';
    };
    var close = function () {
      d.setAttribute('hidden', ''); o.classList.remove('visible');
      t.setAttribute('aria-expanded', 'false'); t.setAttribute('aria-label', 'Open navigation menu');
      document.documentElement.style.overflow = '';
    };
    t.addEventListener('click', function () { t.getAttribute('aria-expanded') === 'true' ? close() : open(); });
    if (c) c.addEventListener('click', close);
    o.addEventListener('click', close);
    d.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
    window.addEventListener('resize', function () { if (window.innerWidth > 768) close(); });
  }
  document.querySelectorAll('.faq-q').forEach(function (b) {
    b.addEventListener('click', function () {
      var item = b.closest('.faq-item'), isOpen = item.classList.toggle('open');
      b.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });
  var fc = document.querySelector('.float-call'), ft = document.querySelector('.site-footer');
  if (fc && ft && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (es) {
      fc.classList.toggle('is-hidden', es[0].isIntersecting);
    }, { threshold: 0 }).observe(ft);
  }
})();
