import { useDocumentTitle } from '../hooks/useDocumentTitle';

// Felles mal for prosjektsidene som ennå ikke har eget innhold.
// Erstattet fire nesten identiske .html-filer.
export default function ProjectStub({ project }) {
  useDocumentTitle(`${project.title} — Charlotte Skråmestø`);

  return (
    <>
      <section className="project-hero">
        <h1 className="project-hero-title">{project.title}</h1>
        <p className="project-hero-note">Prosjektside under arbeid — innhold kommer.</p>
      </section>

      <section className="project-section">
        <h2 className="project-section-title">Om prosjektet</h2>
        <p className="project-section-body"></p>
      </section>

      <section className="project-section">
        <h2 className="project-section-title">Løsning</h2>
        <p className="project-section-body"></p>
      </section>
    </>
  );
}
