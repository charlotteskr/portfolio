import { Link, useLocation } from 'react-router-dom';

// Forsiden og kontakt får en enkel footer; prosjektsidene får i tillegg
// en tilbake-lenke. Tidligere ble dette avgjort av path-sniffing i footer.js.
const plainPaths = ['/', '/kontakt'];

export default function Footer() {
  const { pathname } = useLocation();
  const isPlain = plainPaths.includes(pathname);

  if (isPlain) {
    return (
      <footer>
        <span className="footer-copy">Charlotte Skråmestø | 2026</span>
      </footer>
    );
  }

  return (
    <footer className="project-footer">
      <Link to="/" className="footer-back">
        ← tilbake til alle prosjekter
      </Link>
      <span className="footer-copy">Charlotte Skråmestø | 2026</span>
    </footer>
  );
}
