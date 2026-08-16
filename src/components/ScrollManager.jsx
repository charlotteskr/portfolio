import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Nettleseren gjenoppretter ikke scrollposisjon selv i en SPA: ved sidebytte
// må vi til toppen, og ved #ankre må vi finne elementet etter at det er rendret.
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
