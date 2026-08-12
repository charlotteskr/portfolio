(function () {
  var path = location.pathname;
  var isHome = path === '/' || /\/index\.html$/i.test(path) || path === '';
  var hjemHref = (isHome ? '#' : 'index.html#') + 'hjem';

  document.write(
    '<div id="navContainer">' +
    '<nav id="navbar">' +
      '<ul class="nav-links">' +
        '<li><a href="' + hjemHref + '">hjem</a></li>' +
        '<li><a href="kontakt.html">kontakt</a></li>' +
      '</ul>' +
      '<button class="hamburger" id="hamburger" aria-label="Meny">' +
        '<span></span><span></span><span></span>' +
      '</button>' +
    '</nav>' +
    '</div>' +
    '<div class="mobile-menu" id="mobileMenu">' +
      '<a href="' + hjemHref + '" class="mobile-link">hjem</a>' +
      '<a href="kontakt.html" class="mobile-link">kontakt</a>' +
    '</div>'
  );

  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });
  document.querySelectorAll('.mobile-link').forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
})();
