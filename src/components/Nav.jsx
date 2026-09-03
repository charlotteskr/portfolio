import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/#hjem', label: 'hjem' },
  { to: '/om', label: 'om' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Lukk mobilmenyen når man navigerer.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  // Lås scroll i bakgrunnen mens menyen er åpen.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <div id="navContainer">
        <nav id="navbar">
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <button
            className={`hamburger${open ? ' open' : ''}`}
            id="hamburger"
            aria-label="Meny"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>

      <div className={`mobile-menu${open ? ' open' : ''}`} id="mobileMenu">
        {links.map((link) => (
          <Link key={link.to} to={link.to} className="mobile-link" onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
