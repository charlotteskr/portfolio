(function () {
  var path = location.pathname;
  var isPlain = /\/(index\.html)?$/i.test(path) || /\/kontakt\.html$/i.test(path);

  if (isPlain) {
    document.write(
      '<footer>' +
        '<span class="footer-copy">Charlotte Skråmestø | 2026</span>' +
      '</footer>'
    );
  } else {
    document.write(
      '<footer class="project-footer">' +
        '<a href="index.html" class="footer-back">← tilbake til alle prosjekter</a>' +
        '<span class="footer-copy">Charlotte Skråmestø | 2026</span>' +
      '</footer>'
    );
  }
})();
