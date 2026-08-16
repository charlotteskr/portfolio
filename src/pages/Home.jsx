import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function Home() {
  useDocumentTitle('Charlotte Skråmestø');

  return (
    <main id="hjem">
      <h1 className="hero-name">charlotte skråmestø</h1>

      <div className="projects-list" id="prosjekter">
        {projects.map((project) => (
          <Link key={project.slug} className="project-item" to={`/${project.slug}`}>
            {project.label}
          </Link>
        ))}
      </div>
    </main>
  );
}
