import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { projects } from '../data/projects';

// Case-sidene er lange — dagens artikkelside på Storebrand alene er sju
// skjermhøyder. Knappen dukker opp når man har scrollet et stykke ned, og
// gjør én ting: tar deg til toppen.
const SHOW_AFTER = 800;

// Bare prosjektsidene. Forsiden og om-siden er korte nok til å ikke trenge den,
// og lista kommer fra projects.js, så et nytt prosjekt får knappen automatisk.
const projectPaths = projects.map((project) => `/${project.slug}`);

export default function BackToTop() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  const onProjectPage = projectPaths.includes(pathname);

  useEffect(() => {
    if (!onProjectPage) return undefined;

    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onProjectPage]);

  if (!onProjectPage) return null;

  return (
    <button
      type="button"
      className={`to-top${visible ? ' visible' : ''}`}
      // html har scroll-behavior: smooth, så selve rullingen animeres av CSS-en.
      onClick={() => window.scrollTo({ top: 0 })}
      aria-label="Til toppen av siden"
      // Utenfor tabrekkefølgen og skjult for skjermlesere så lenge den ikke er
      // framme — ellers kan man tabbe til en knapp som ikke er synlig.
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <span aria-hidden="true">↑</span>
    </button>
  );
}
