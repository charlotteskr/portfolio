import { Link, useLocation } from 'react-router-dom';

// Kontaktinformasjonen lå tidligere på en egen side. Den står nå i footeren,
// så den er tilgjengelig fra hvilken som helst side — ikke bare hvis man
// finner fram til én bestemt.
const contactLinks = [
  {
    href: 'mailto:charlotteskramesto@gmail.com',
    label: 'charlotteskramesto@gmail.com',
  },
  {
    href: 'https://www.linkedin.com/in/charlotte-skr%C3%A5mest%C3%B8-290445144/',
    label: 'linkedin',
    external: true,
  },
];

// Forsiden og om-siden får bare kontaktinfo og signatur; prosjektsidene får
// i tillegg en tilbake-lenke.
const plainPaths = ['/', '/om'];

export default function Footer() {
  const { pathname } = useLocation();
  const isPlain = plainPaths.includes(pathname);

  return (
    <footer className="site-footer">
      <div className="footer-contact">
        {contactLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="footer-link"
            {...(link.external ? { target: '_blank', rel: 'noopener' } : {})}
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="footer-meta">
        {!isPlain && (
          <Link to="/" className="footer-back">
            ← tilbake til alle prosjekter
          </Link>
        )}
        <span className="footer-copy">Charlotte Skråmestø | 2026</span>
      </div>
    </footer>
  );
}
