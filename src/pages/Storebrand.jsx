import { useEffect, useState } from 'react';
import {
  citedDomains,
  contributions,
  expertPrototypes,
  heroMeta,
  iaAfter,
  iaPrinciples,
  measures,
  reflection,
  searchShift,
  team,
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
  const [activeIa, setActiveIa] = useState(0);
  const [zoomed, setZoomed] = useState(null);

  const proto = expertPrototypes[activeProto];
  const iaPrinciple = iaPrinciples[activeIa];

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
            <em>å bli synlig, nevnt og anbefalt i AI-svar</em>
          </h1>
          <p className="sb-hero-desc">
            På Sandbox 2026 undersøkte vi hva som skal til
            for at Storebrand havner i AI-svaret — og leverte sju konkrete tiltak og et verktøy
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
            <h2 className="sb-title reveal">Språkmodeller er kilden til kunders vurdering og valg</h2>
          </div>
          <div>
            <p className="sb-body reveal">
              En kunde som spør «Hvilken forsikring er best?» får ikke lenger ti lenker å
              velge mellom. Kunden får én grundig vurdert anbefaling.
            </p>
            <p className="sb-body reveal reveal-delay-1" style={{ marginTop: '1rem' }}>
              Det flytter konkurransen fra søkeresultatet til selve vurderingen bak søket.
            </p>
          </div>
        </div>
      </section>

      {/* SKIFTET: FØR OG NÅ */}
      <section className="sb-shift">
        <div className="sb-eyebrow reveal">
          <div className="sb-eyebrow-dot" />
          <span className="sb-eyebrow-text">Innsikt</span>
        </div>
        <h2 className="sb-title reveal">Ett spørsmål, mange søk</h2>
        <p className="sb-body reveal">
          Der du før måtte gjøre et titalls søk selv for å finne fram til beste forsikring,
          gjør AI-en jobben for deg i bakgrunnen. Ett spørsmål brytes opp i mange delspørsmål
          og settes sammen igjen til ett svar. Troverdighet, fakta og vurdering er noen av
          de tingene en språkmodell — eller AI, som det ofte kalles — ser på for å gi
          kunden best mulig svar.
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
                  <li key={step.label}>
                    <strong className="sb-step-label">{step.label}</strong>
                    <span className="sb-step-desc">{step.desc}</span>
                  </li>
                ))}
              </ol>
              <p className="sb-compare-note">{side.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MIN ROLLE */}
      <section className="sb-role">
        <div className="sb-eyebrow reveal">
          <div className="sb-eyebrow-dot" />
          <span className="sb-eyebrow-text">Min rolle</span>
        </div>
        <h2 className="sb-title reveal">Hva jeg gjorde</h2>

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
      <section className="sb-ia">
        <div className="sb-chapter reveal">
          <span className="sb-chapter-num">02</span>
          <span>
            <span className="sb-chapter-kicker">Tiltak</span>
            <span className="sb-chapter-name">Informasjonsarkitektur</span>
          </span>
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
                alt: 'Full skjermdump av en artikkelside på storebrand.no slik den ser ut i dag',
              })
            }
            aria-label="Vis hele dagens artikkelside i større format"
          >
            <img
              src="/bilder/storebrand/storebrand-idag.webp"
              alt="Artikkelside på storebrand.no i full lengde — lang og tettpakket"
              width={1100}
              height={7104}
              loading="lazy"
            />
            <span className="sb-shot-hint">Klikk for hele siden</span>
          </button>
          <figcaption>
            <span className="sb-ba-label">Slik er artikkelen i dag</span>
            En typisk artikkelside i full lengde. Alt innholdet finnes — men det er lite som
            skiller ett svar fra resten, og ingenting som forteller modellen hvilken bit som
            svarer på hva.
          </figcaption>
        </figure>

        <h3 className="sb-sub reveal">Åtte grep som gjør innholdet lesbart for AI</h3>
        <p className="sb-body reveal">
          Gjennomgangen av informasjonsarkitekturen resulterte i åtte grep som kan bidra
          positivt til at innholdet blir strukturert på en slik måte som er til fordel for
          AI-modeller. Det er derimot ingen fasit på om det ene grepet er bedre enn det andre,
          og det vil variere ut fra kontekst i innholdet. Under vises grepene tatt i bruk i
          praksis.
        </p>

        {/* Ett grep per fane: forklaringen og utsnittet står samlet i rammen,
            framfor å gjentas i et rutenett over. Grep 05 har to utsnitt. */}
        <div className="sb-ia-example reveal">
          <div className="sb-proto-tabs">
            {iaPrinciples.map((item, index) => (
              <button
                key={item.num}
                type="button"
                className={`sb-proto-tab${index === activeIa ? ' active' : ''}`}
                onClick={() => setActiveIa(index)}
                aria-pressed={index === activeIa}
              >
                {item.tab}
              </button>
            ))}
          </div>

          <div className="sb-ia-example-body">
            <div className="sb-ia-example-num">Grep {iaPrinciple.num}</div>
            <div className="sb-ia-example-title">{iaPrinciple.title}</div>
            <p className="sb-ia-example-lead">{iaPrinciple.lead}</p>
            <p className="sb-ia-example-desc">{iaPrinciple.desc}</p>
          </div>

          {iaPrinciple.examples.map((example) => (
            <figure className="sb-ia-shot" key={example.image + example.title}>
              <button
                type="button"
                className="sb-ia-example-visual"
                onClick={() => setZoomed({ image: example.image, alt: example.alt })}
                aria-label={`Vis ${example.title} i større format`}
              >
                <img
                  src={example.image}
                  alt={example.alt}
                  width={example.width}
                  height={example.height}
                  loading="lazy"
                />
              </button>
              <figcaption>
                <span className="sb-ia-shot-title">{example.title}</span>
                {example.desc}
              </figcaption>
            </figure>
          ))}
        </div>

        <h3 className="sb-sub reveal">De åtte grepene satt sammen</h3>
        <p className="sb-body reveal">
          Innholdet er det samme som i skjermdumpen øverst i seksjonen — men det er delt opp i
          nummererte spørsmål, med faktaboks, punktlister, interne lenker, dekningstabell, en
          FAQ og navngitte eksperter til slutt.
        </p>

        <figure className="sb-figure reveal">
          <button
            type="button"
            className="sb-shot tall"
            onClick={() => setZoomed({ image: iaAfter.image, alt: iaAfter.alt })}
            aria-label="Vis det omstrukturerte forslaget i større format"
          >
            <img
              src={iaAfter.image}
              alt={iaAfter.alt}
              width={iaAfter.width}
              height={iaAfter.height}
              loading="lazy"
            />
            <span className="sb-shot-hint">Klikk for hele siden</span>
          </button>
          <figcaption>
            <span className="sb-ba-label">Forslag</span>
            Kortere side, seks nummererte spørsmål og navngitte eksperter til slutt — hvert
            svar står for seg selv.
          </figcaption>
        </figure>
      </section>

      {/* EKSPERTPROFILER */}
      <section className="sb-experts">
        <div className="sb-chapter reveal">
          <span className="sb-chapter-num">05</span>
          <span>
            <span className="sb-chapter-kicker">Tiltak</span>
            <span className="sb-chapter-name">Ekspertprofiler</span>
          </span>
        </div>
        <h2 className="sb-title reveal">Fra spredte kontaktkort til et ekspertunivers</h2>
        <p className="sb-body reveal">
          Storebrand har ekspertene, men profilene finnes bare som spredte, statiske kort med
          lite innhold. AI-modeller vektlegger erfaring, ekspertise, autoritet og tillit, og
          ekspertprofilene gjøres lesbare for AI gjennom schema-markup og sameAs-koblinger i
          koden.
        </p>

        {/* Hvert forslag står ved siden av det det erstatter, i rammer av samme
            høyde. Skjermdumpene beskjæres nedover framfor å skaleres ned — se
            .sb-pair-visual. Plusset signaliserer at klikk åpner hele bildet. */}
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

          <div className="sb-pair reveal">
            <figure>
              <span className="sb-ba-label">I dag</span>
              <button
                type="button"
                className="sb-pair-visual"
                onClick={() =>
                  setZoomed({ image: proto.before.image, alt: proto.before.alt })
                }
                aria-label={`Vis ${proto.before.title} i større format`}
              >
                <img
                  src={proto.before.image}
                  alt={proto.before.alt}
                  width={proto.before.width}
                  height={proto.before.height}
                  loading="lazy"
                />
                <span className="sb-pair-zoom" aria-hidden="true" />
              </button>
              <figcaption>
                <span className="sb-pair-title">{proto.before.title}</span>
                {proto.before.note}
              </figcaption>
            </figure>

            <figure>
              <span className="sb-ba-label">Forslag</span>
              <button
                type="button"
                className="sb-pair-visual"
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
                <span className="sb-pair-zoom" aria-hidden="true" />
              </button>
              <figcaption>
                <span className="sb-pair-title">{proto.title}</span>
                {proto.desc}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* WIKIPEDIA */}
      <section className="sb-wikipedia">
        <div className="sb-chapter reveal">
          <span className="sb-chapter-num">07</span>
          <span>
            <span className="sb-chapter-kicker">Tiltak</span>
            <span className="sb-chapter-name">Wikipedia</span>
          </span>
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
            <button
              type="button"
              className="sb-ba-shot"
              onClick={() =>
                setZoomed({
                  image: '/bilder/storebrand/wikipedia-for.webp',
                  alt: 'Storebrands Wikipedia-infoboks før oppdatering, med nøkkeltall fra 2019',
                })
              }
              aria-label="Vis infoboksen før oppdatering i større format"
            >
              <img
                src="/bilder/storebrand/wikipedia-for.webp"
                alt="Storebrands Wikipedia-infoboks før oppdatering, med nøkkeltall fra 2019"
                width={519}
                height={1455}
                loading="lazy"
              />
            </button>
            <figcaption>
              <span className="sb-ba-label">Før</span>
              Forvaltningskapital fra 2019, resultat fra 2015 og fire datterselskaper.
            </figcaption>
          </figure>
          <figure>
            <button
              type="button"
              className="sb-ba-shot"
              onClick={() =>
                setZoomed({
                  image: '/bilder/storebrand/wikipedia-etter.webp',
                  alt: 'Storebrands Wikipedia-infoboks etter oppdatering, med nøkkeltall fra 2025',
                })
              }
              aria-label="Vis infoboksen etter oppdatering i større format"
            >
              <img
                src="/bilder/storebrand/wikipedia-etter.webp"
                alt="Storebrands Wikipedia-infoboks etter oppdatering, med nøkkeltall fra 2025"
                width={302}
                height={1101}
                loading="lazy"
              />
            </button>
            <figcaption>
              <span className="sb-ba-label">Etter</span>
              Tall fra 2025, riktig styreleder og alle åtte datterselskaper. Informasjonen er
              markert med kildehenvisninger til tredjepartskilder.
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

      {/* TEAM */}
      <section className="sb-team">
        <div className="sb-eyebrow reveal">
          <div className="sb-eyebrow-dot" />
          <span className="sb-eyebrow-text">Team</span>
        </div>
        <h2 className="sb-title reveal">Hvem gjorde hva</h2>
        <p className="sb-body reveal">
          Team AI-søk var et tverrfaglig team bestående av fem studenter.
        </p>
        <div className="sb-team-grid reveal">
          {team.map((member) => (
            <div className={`sb-team-member${member.me ? ' me' : ''}`} key={member.name}>
              <span className="sb-team-name">{member.name}</span>
              <span className="sb-team-role">{member.role}</span>
              {member.me && <span className="sb-team-flag">Meg</span>}
            </div>
          ))}
        </div>
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
