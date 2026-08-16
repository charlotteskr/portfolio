import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function Kontakt() {
  useDocumentTitle('Kontakt — Charlotte Skråmestø');

  return (
    <>
      <main>
        <h1 className="hero-name">kontakt</h1>
      </main>

      <section className="contact">
        <a href="mailto:charlotteskramesto@gmail.com" className="contact-link">
          charlotteskramesto@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/charlotte-skr%C3%A5mest%C3%B8-290445144/"
          target="_blank"
          rel="noopener"
          className="contact-link"
        >
          linkedin
        </a>
      </section>
    </>
  );
}
