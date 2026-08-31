import { useEffect, useState } from 'react';
import {
  citedDomains,
  contributions,
  expertPrototypes,
  fanOutQueries,
  heroMeta,
  measures,
  reflection,
  reviewActions,
  reviewStats,
  searchShift,
} from '../data/storebrand';
import { Icon } from '../components/Icon';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { usePageClass } from '../hooks/usePageClass';
import { useReveal } from '../hooks/useReveal';

// Samme trappevise innanimering som på smArt og Mjøspromenaden: forsinkelsen
// følger posisjonen i lista, så kortene kommer inn etter hverandre.
function revealClass(index, cycle) {
  const step = index % cycle;
  return step === 0 ? 'reveal' : `reveal reveal-delay-${step}`;
}

export default function Storebrand() {
  useDocumentTitle('Storebrand — Charlotte Skråmestø');
  usePageClass('case-storebrand');
  useReveal();

  const [activeProto, setActiveProto] = useState(0);
  const [zoomed, setZoomed] = useState(null);

  const proto = expertPrototypes[activeProto];

  // Escape lukker lightboxen. Klikk i overlegget håndteres på elementet selv.
  useEffect(() => {
    if (!zoomed) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setZoomed(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [zoomed]);

  return (
    <div className="sb-page">
      {/* HERO */}
      <section className="sb-hero">
        {/* Merknaden ligger inne i heroen framfor øverst på siden, siden nav-en
            er position: fixed og ville dekket den. */}
        <p className="sb-wip">
          <span className="sb-wip-dot" aria-hidden="true" />
          Innholdet på denne siden er under arbeid
        </p>
        <div className="sb-hero-inner">
          <p className="sb-hero-tag">Prosjekt — UX-design og research</p>
          <h1 className="sb-hero-title">
            Storebrand
            <em>å bli en del av AI-ens svar</em>
          </h1>
          <p className="sb-hero-desc">
            Før konkurrerte selskaper om klikket. Nå konkurrerer de om å bli nevnt når en
            AI-tjeneste svarer kunden direkte. På Sandbox 2026 undersøkte vi hva som skal til
            for at Storebrand havner i det svaret — og leverte sju konkrete tiltak og et verktøy
            for å måle effekten.
          </p>
        </div>
        <div className="sb-hero-meta">
          {heroMeta.map((item) => (
            <div className="sb-meta-item" key={item.label}>
              <span className="sb-meta-label">{item.label}</span>
              <span className="sb-meta-value">{item.value}</span>
            </div>
          ))}
        </div>
        <a href="#tiltak" className="sb-hero-cta">
          Se tiltakene
          <span>↓</span>
        </a>
      </section>

      {/* PROBLEMSTILLING */}
      <section className="sb-problem">
        <div className="sb-eyebrow reveal">
          <div className="sb-eyebrow-dot" />
          <span className="sb-eyebrow-text">Problemstilling</span>
        </div>
        <div className="sb-problem-grid">
          <div>
            <h2 className="sb-title reveal">AI er en ny inngang til kundens valg</h2>
          </div>
          <div>
            <p className="sb-body reveal">
              En kunde som spør «jeg har pensjon flere steder, bør jeg samle den, og hvilken
              leverandør passer meg?» får ikke lenger ti lenker å velge mellom. Den får én
              anbefaling.
            </p>
            <p className="sb-body reveal reveal-delay-1" style={{ marginTop: '1rem' }}>
              Det flytter konkurransen fra søkeresultatet til selve svaret. Flere av
              konkurrentene har begynt å tilpasse seg i småbiter, men ingen hadde tatt et
              helhetlig grep om det ennå.
            </p>
          </div>
        </div>
        <p className="sb-statement reveal">Hvordan kan Storebrand bli en del av svaret?</p>
      </section>

      {/* SKIFTET: FØR OG NÅ */}
      <section className="sb-shift">
        <div className="sb-eyebrow reveal">
          <div className="sb-eyebrow-dot" />
          <span className="sb-eyebrow-text">Innsikt</span>
        </div>
        <h2 className="sb-title reveal">Ett spørsmål, mange søk</h2>
        <p className="sb-body reveal">
          Der du før måtte gjøre et titalls søk selv for å finne fram til en bilforsikring,
          gjør AI-en dem i bakgrunnen. Ett spørsmål brytes opp i mange delspørsmål — kalt
          query fan-out — og settes sammen igjen til ett svar.
        </p>

        <div className="sb-compare">
          {[searchShift.before, searchShift.after].map((side, index) => (
            <div
              className={`sb-compare-card${index === 1 ? ' now' : ''} ${revealClass(index, 2)}`}
              key={side.kind}
            >
              <div className="sb-compare-kind">{side.kind}</div>
              <div className="sb-compare-query">{side.query}</div>
              <ol className="sb-compare-steps">
                {side.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <p className="sb-compare-note">{side.note}</p>
            </div>
          ))}
        </div>

        {/* Fan-out-diagrammet: ett spørsmål ut i åtte delspørsmål og tilbake
            til ett svar. Tegnet i CSS framfor å hentes som bilde fra dekket,
            så det holder seg skarpt og lesbart på mobil. */}
        <div className="sb-fanout reveal">
          <div className="sb-fanout-node prompt">
            <span className="sb-fanout-step">1 · Prompt</span>
            «Hva er den beste bilforsikringen i Norge?»
          </div>
          <div className="sb-fanout-arrow" aria-hidden="true" />
          <div className="sb-fanout-queries">
            <span className="sb-fanout-step">2 · AI tolker og deler opp</span>
            <ul>
              {fanOutQueries.map((query) => (
                <li key={query}>{query}</li>
              ))}
            </ul>
          </div>
          <div className="sb-fanout-arrow" aria-hidden="true" />
          <div className="sb-fanout-node answer">
            <span className="sb-fanout-step">3 · Ett samlet svar</span>
            Anbefaling, sammenligning og kilder
          </div>
        </div>
      </section>

      {/* MIN ROLLE */}
      <section>
        <div className="sb-eyebrow reveal">
          <div className="sb-eyebrow-dot" />
          <span className="sb-eyebrow-text">Min rolle</span>
        </div>
        <h2 className="sb-title reveal">Hva jeg gjorde</h2>
        <p className="sb-body reveal">
          De sju tiltakene var en samlet leveranse fra teamet. Mitt bidrag lå på research- og
          designsiden — og på å gjøre funnene om til noe konkret å se på.
        </p>

        <div className="sb-contrib-grid">
          {contributions.map((item, index) => (
            <div className={`sb-contrib ${revealClass(index, 3)}`} key={item.title}>
              <div className="sb-contrib-icon">
                <Icon name={item.icon} />
              </div>
              <div className="sb-contrib-title">{item.title}</div>
              <p className="sb-contrib-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DE SJU TILTAKENE */}
      <section className="sb-measures" id="tiltak">
        <div className="sb-eyebrow reveal">
          <div className="sb-eyebrow-dot" />
          <span className="sb-eyebrow-text">Løsning</span>
        </div>
        <h2 className="sb-title reveal">Sju konkrete tiltak</h2>
        <p className="sb-body reveal">
          Hvert tiltak svarer på noe AI-en foretrekker: struktur, konsistens, tydelig
          avsender og kilder utenfor eget nettsted. De uthevede er dem jeg jobbet med.
        </p>

        <div className="sb-measure-grid">
          {measures.map((item, index) => (
            <div
              className={`sb-measure${item.mine ? ' mine' : ''} ${revealClass(index, 3)}`}
              key={item.num}
            >
              <div className="sb-measure-num">{item.num}</div>
              <div className="sb-measure-title">{item.title}</div>
              <div className="sb-measure-lead">{item.lead}</div>
              <p className="sb-measure-desc">{item.desc}</p>
              {item.mine && <span className="sb-measure-flag">Mitt bidrag</span>}
            </div>
          ))}
        </div>
      </section>

      {/* INFORMASJONSARKITEKTUR */}
      <section>
        <div className="sb-eyebrow reveal">
          <div className="sb-eyebrow-dot" />
          <span className="sb-eyebrow-text">Tiltak 02 — Informasjonsarkitektur</span>
        </div>
        <h2 className="sb-title reveal">Hvordan ser det ut i dag?</h2>
        <p className="sb-body reveal">
          Jeg gikk gjennom hvordan innholdet på storebrand.no er bygget opp. Artiklene er
          lange og tettpakkede, med informasjonen liggende spredt nedover siden. Det gjør det
          tungt å finne ett konkret svar — for kunden som skanner, og for modellen som skal
          hente ut en påstand den kan sitere.
        </p>

        <figure className="sb-figure reveal">
          <button
            type="button"
            className="sb-shot tall"
            onClick={() =>
              setZoomed({
                image: '/bilder/storebrand/storebrand-idag.webp',
                alt: 'Full skjermdump av en artikkelside på storebrand.no',
              })
            }
            aria-label="Vis hele artikkelsiden i større format"
          >
            <img
              src="/bilder/storebrand/storebrand-idag.webp"
              alt="Artikkelside på storebrand.no i full lengde — lang og tettpakket"
              width={1100}
              height={7699}
              loading="lazy"
            />
            <span className="sb-shot-hint">Klikk for hele siden</span>
          </button>
          <figcaption>
            En typisk artikkelside i full lengde. Alt innholdet finnes — men det er lite som
            skiller ett svar fra resten.
          </figcaption>
        </figure>
      </section>

      {/* EKSPERTPROFILER */}
      <section className="sb-experts">
        <div className="sb-eyebrow reveal">
          <div className="sb-eyebrow-dot" />
          <span className="sb-eyebrow-text">Tiltak 05 — Ekspertprofiler</span>
        </div>
        <h2 className="sb-title reveal">Fra spredte kontaktkort til et ekspertunivers</h2>
        <p className="sb-body reveal">
          Storebrand har ekspertene, men profilene finnes bare som statiske kort med et navn,
          en tittel og en e-postadresse. Gjensidige og DNB har kommet lenger med fullverdige
          forfatterprofiler — men ingen har bygget et helhetlig, AI-lesbart ekspertunivers.
          Det var åpningen.
        </p>

        <div className="sb-before-after reveal">
          <figure>
            <img
              src="/bilder/storebrand/ekspertkort-idag.webp"
              alt="Dagens ekspertkort på storebrand.no: portrett, navn, tittel og kontaktinfo"
              width={900}
              height={985}
              loading="lazy"
            />
            <figcaption>
              <span className="sb-ba-label">I dag</span>
              Et statisk kort nederst på en presseside — uten bio, uten artikler, uten kobling
              videre.
            </figcaption>
          </figure>
        </div>

        <p className="sb-body reveal" style={{ marginTop: '3rem' }}>
          Jeg skisset hvordan det kunne se ut i stedet. Velg en skisse for å se den — klikk på
          bildet for å åpne det i full størrelse.
        </p>

        <div className="sb-proto">
          <div className="sb-proto-tabs reveal">
            {expertPrototypes.map((item, index) => (
              <button
                key={item.tab}
                type="button"
                className={`sb-proto-tab${index === activeProto ? ' active' : ''}`}
                onClick={() => setActiveProto(index)}
                aria-pressed={index === activeProto}
              >
                {item.tab}
              </button>
            ))}
          </div>

          <div className="sb-proto-display reveal">
            <button
              type="button"
              className="sb-proto-visual"
              style={{ '--ratio': proto.width / proto.height }}
              onClick={() => setZoomed({ image: proto.image, alt: proto.alt })}
              aria-label={`Vis ${proto.title} i større format`}
            >
              <img
                src={proto.image}
                alt={proto.alt}
                width={proto.width}
                height={proto.height}
                loading="lazy"
              />
            </button>

            <div className="sb-proto-content">
              <div className="sb-proto-title">{proto.title}</div>
              <p className="sb-proto-desc">{proto.desc}</p>
              <div className="sb-proto-tags">
                {proto.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TREDJEPARTSOMTALER */}
      <section>
        <div className="sb-eyebrow reveal">
          <div className="sb-eyebrow-dot" />
          <span className="sb-eyebrow-text">Tiltak 06 — Tredjepartsomtaler</span>
        </div>
        <h2 className="sb-title reveal">Det andre sier om deg, teller mest</h2>
        <p className="sb-body reveal">
          AI-tjenestene henter like gjerne fra Trustpilot og Bytt.no som fra storebrand.no.
          Tre grep gjør at omtalene faktisk blir lest.
        </p>

        <div className="sb-actions">
          {reviewActions.map((item, index) => (
            <div className={`sb-action ${revealClass(index, 3)}`} key={item.num}>
              <div className="sb-action-num">{item.num}</div>
              <div className="sb-action-title">{item.title}</div>
              <p className="sb-action-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="sb-stats reveal">
          {reviewStats.map((stat) => (
            <div className="sb-stat" key={stat.label}>
              <div className="sb-stat-value">{stat.value}</div>
              <div className="sb-stat-label">{stat.label}</div>
              <div className="sb-stat-note">{stat.note}</div>
            </div>
          ))}
        </div>

        <figure className="sb-figure reveal">
          <img
            src="/bilder/storebrand/trustpilot-graf.webp"
            alt="Graf over Trustpilot-omtaler per måned. Omtaler «på oppfordring» skyter i været fra november 2025."
            width={1400}
            height={634}
            loading="lazy"
          />
          <figcaption>
            Omtaler «på oppfordring» skjøt i været da de systematiske invitasjonene startet i
            november 2025.
          </figcaption>
        </figure>

        <figure className="sb-figure reveal">
          <button
            type="button"
            className="sb-shot"
            onClick={() =>
              setZoomed({
                image: '/bilder/storebrand/trustpilot-widget.webp',
                alt: 'Skisse av Trustpilot-widget på produktsiden for bilforsikring',
              })
            }
            aria-label="Vis skissen av Trustpilot-widgeten i større format"
          >
            <img
              src="/bilder/storebrand/trustpilot-widget.webp"
              alt="Skisse: Trustpilot-vurdering plassert rett under kjøpsknappen på produktsiden for bilforsikring"
              width={1339}
              height={1211}
              loading="lazy"
            />
          </button>
          <figcaption>
            Skisse: vurderingen løftet opp på produktsiden, rett under kjøpsknappen.
          </figcaption>
        </figure>
      </section>

      {/* WIKIPEDIA */}
      <section className="sb-wikipedia">
        <div className="sb-eyebrow reveal">
          <div className="sb-eyebrow-dot" />
          <span className="sb-eyebrow-text">Tiltak 07 — Wikipedia</span>
        </div>
        <h2 className="sb-title reveal">Den nest mest siterte kilden</h2>
        <p className="sb-body reveal">
          Da jeg så på hvilke domener AI-tjenestene faktisk siterer, lå Wikipedia på
          andreplass — og Storebrands egen artikkel oppga forvaltningskapital fra 2019 og en
          styreleder som hadde gått av. Modellene hentet altså utdaterte tall om selskapet fra
          en side hvem som helst kan rette.
        </p>

        <div className="sb-domains reveal">
          {citedDomains.map((domain) => (
            <div
              className={`sb-domain${domain.highlight ? ' highlight' : ''}`}
              key={domain.name}
            >
              <span className="sb-domain-name">{domain.name}</span>
              <span className="sb-domain-bar">
                <span style={{ width: `${(domain.share / 40.1) * 100}%` }} />
              </span>
              <span className="sb-domain-share">{domain.share} %</span>
            </div>
          ))}
          <p className="sb-domains-source">
            Andel AI-svar som siterer domenet. Kilde: Semrush, januar 2026.
          </p>
        </div>

        <div className="sb-before-after two reveal">
          <figure>
            <img
              src="/bilder/storebrand/wikipedia-for.webp"
              alt="Storebrands Wikipedia-infoboks før oppdatering, med nøkkeltall fra 2019"
              width={519}
              height={1455}
              loading="lazy"
            />
            <figcaption>
              <span className="sb-ba-label">Før</span>
              Forvaltningskapital fra 2019, resultat fra 2015 og fire datterselskaper.
            </figcaption>
          </figure>
          <figure>
            <img
              src="/bilder/storebrand/wikipedia-etter.webp"
              alt="Storebrands Wikipedia-infoboks etter oppdatering, med nøkkeltall fra 2025"
              width={302}
              height={1101}
              loading="lazy"
            />
            <figcaption>
              <span className="sb-ba-label">Etter</span>
              Tall fra 2025, riktig styreleder og alle åtte datterselskaper.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ANALYSEVERKTØY */}
      <section className="sb-tool">
        <div className="sb-eyebrow reveal">
          <div className="sb-eyebrow-dot" />
          <span className="sb-eyebrow-text">Leveranse 2</span>
        </div>
        <h2 className="sb-title reveal">Et verktøy for å måle synlighet i AI-søk</h2>
        <p className="sb-body reveal">
          Tiltakene er lite verdt uten en måte å se om de virker. Teamet bygget derfor et
          analyseverktøy med vibe-koding: det stiller AI-tjenestene de samme spørsmålene som
          kundene stiller, og måler hvor ofte Storebrand nevnes, hvordan selskapet omtales, og
          hvem som vinner oppmerksomheten i stedet.
        </p>
        <p className="sb-body reveal reveal-delay-1" style={{ marginTop: '1rem' }}>
          Jeg kodet ikke verktøyet selv, men bidro sammen med resten av teamet med
          tilbakemeldinger på hva det burde måle og hvordan tallene skulle presenteres.
        </p>

        <figure className="sb-figure reveal">
          <video
            className="sb-video"
            src="/video/analyseverktoy.mp4"
            poster="/bilder/storebrand/analyseverktoy-poster.webp"
            controls
            playsInline
            preload="none"
            width={1280}
            height={720}
          />
          <figcaption>
            Gjennomgang av analyseverktøyet. Siste måling ga en synlighetsindeks på 39,4 av
            100 — en andreplass av seksten aktører.
          </figcaption>
        </figure>
      </section>

      {/* AVSLUTNING */}
      <section className="sb-outro">
        <div className="sb-eyebrow reveal">
          <div className="sb-eyebrow-dot" />
          <span className="sb-eyebrow-text">Veien videre</span>
        </div>
        <h2 className="sb-title reveal">I dag anbefaler AI. I morgen handler den.</h2>

        <div className="sb-timeline reveal">
          <div className="sb-timeline-step">
            <span>Før</span>
            Klikket
          </div>
          <div className="sb-timeline-step now">
            <span>I dag</span>
            Svaret
          </div>
          <div className="sb-timeline-step next">
            <span>I morgen</span>
            Kjøpet
          </div>
        </div>

        <figure className="sb-figure reveal">
          <img
            src="/bilder/storebrand/chatgpt-anbefaling.webp"
            alt="Skjermbilde fra ChatGPT der Storebrand står øverst på spørsmålet om hvilken forsikringsleverandør man bør velge"
            width={1400}
            height={1260}
            loading="lazy"
          />
          <figcaption>Målet, konkret: Storebrand først i svaret.</figcaption>
        </figure>

        {reflection.map((paragraph, index) => (
          <p
            className={`sb-body ${revealClass(index, 2)}`}
            key={paragraph.slice(0, 24)}
            style={{ marginTop: index === 0 ? '3rem' : '1rem' }}
          >
            {paragraph}
          </p>
        ))}
      </section>

      {/* Felles lightbox for alle skjermbildene som kan klikkes opp. */}
      {zoomed && (
        <div
          className="sb-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={zoomed.alt}
          onClick={() => setZoomed(null)}
        >
          <button
            type="button"
            className="sb-lightbox-close"
            aria-label="Lukk"
            onClick={() => setZoomed(null)}
          >
            ×
          </button>
          <img className="sb-lightbox-img" src={zoomed.image} alt={zoomed.alt} />
        </div>
      )}
    </div>
  );
}
