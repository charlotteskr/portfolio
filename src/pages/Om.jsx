import { useDocumentTitle } from '../hooks/useDocumentTitle';

// Erstatter den gamle kontaktsiden. E-post og LinkedIn ligger nå i footeren,
// så denne siden handler bare om hvem som står bak.
export default function Om() {
  useDocumentTitle('Om — Charlotte Skråmestø');

  return (
    <main>
      <h1 className="hero-name">om</h1>

      <section className="about">
        <div className="about-text">
          <h2 className="about-role">interaksjonsdesigner | kjønnsviter</h2>
          <p className="about-place">Oslo, Norge</p>

          <p className="about-line">
            Opptatt av helhetlige tjeneste- og systemperspektiv som utretter en forskjell!
          </p>
          <p className="about-line">Motiveres av nysgjerrighet og læringslyst.</p>
        </div>

        <div className="about-portrait">
          <img
            src="/bilder/charlotte.webp"
            alt="Charlotte Skråmestø"
            width={1400}
            height={933}
          />
        </div>
      </section>
    </main>
  );
}
