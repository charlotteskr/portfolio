import { useState } from 'react';
import {
  findings,
  heroMeta,
  insights,
  personas,
  processPhases,
  protoComponents,
} from '../data/mjospromenaden';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { usePageClass } from '../hooks/usePageClass';
import { useReveal } from '../hooks/useReveal';

// De originale kortene syklet gjennom reveal-delay-1..3 for å gi en trappevis
// innanimering; denne regner ut samme klasse ut fra posisjonen i lista.
function revealClass(index, cycle) {
  const step = index % cycle;
  return step === 0 ? 'reveal' : `reveal reveal-delay-${step}`;
}

export default function Mjospromenaden() {
  useDocumentTitle('Mjøspromenaden — Charlotte Skråmestø');
  usePageClass('case-mjos');
  useReveal();

  const [activePhase, setActivePhase] = useState(0);
  const [activeProto, setActiveProto] = useState(0);

  const phase = processPhases[activePhase];
  const proto = protoComponents[activeProto];

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <p className="hero-tag">Prosjekt — Tjenestedesign / UX</p>
          <h1 className="hero-title">
            Mjøspromenaden
            <em>en blågrønn byoase</em>
          </h1>
          <p className="hero-desc">
            Utredning av informasjon om Mjøspromenaden og forslag til hvordan informasjonen
            skal kommuniseres til studenttilflyttere i Gjøvik kommune.
          </p>
        </div>
        <div className="hero-meta">
          {heroMeta.map((item) => (
            <div className="meta-item" key={item.label}>
              <span className="meta-label">{item.label}</span>
              <span className="meta-value">{item.value}</span>
            </div>
          ))}
        </div>
        <a href="#prototype" className="scroll-hint-btn">
          Se løsning &amp; prototype
          <span className="scroll-hint-arrow">↓</span>
        </a>
      </section>

      {/* PROBLEM */}
      <section className="problem-section">
        <div className="section-eyebrow reveal">
          <div className="eyebrow-dot" style={{ background: 'var(--coral)' }}></div>
          <span className="eyebrow-text">Problemstilling</span>
        </div>
        <div className="problem-grid">
          <div>
            <h2 className="section-title reveal">Hvilke barrierer eksisterer?</h2>
          </div>
          <div>
            <p className="section-body reveal">
              Hvilke barrierer eksisterer for at studenttilflyttere skal få tilstrekkelig
              informasjon om Mjøspromenaden, og hvilke tiltak kan iverksettes for å gjøre det
              lettere å finne frem til og oppsøke Mjøspromenaden?
            </p>
            <p className="section-body reveal reveal-delay-1" style={{ marginTop: '1rem' }}>
              Mitt bidrag var gjennom ulike metoder for innsiktsinnsamling, analyse, idéutvikling,
              semi-prototyping og testing — presentert som en rekke anbefalinger og idéer med mål
              om å redusere forvirring, øke bevisstheten om området og fremme Mjøspromenaden som
              et mer attraktivt sted.
            </p>
          </div>
        </div>
      </section>

      {/* PROSESS */}
      <section className="process-section">
        <div className="section-eyebrow reveal">
          <div className="eyebrow-dot" style={{ background: 'var(--coral)' }}></div>
          <span className="eyebrow-text">Tjenesteløpet — Double Diamond</span>
        </div>
        <h2 className="section-title reveal">Prosessen</h2>
        <p className="section-body reveal">
          Klikk på et trinn for å se metodene som ble brukt i den fasen.
        </p>

        <div className="process-track reveal">
          {processPhases.map((item, index) => (
            <button
              key={item.title}
              type="button"
              className={`process-step${index === activePhase ? ' active' : ''}`}
              style={{ '--accent-color': item.accent }}
              onClick={() => setActivePhase(index)}
              aria-pressed={index === activePhase}
            >
              <div className="process-node">{String(index + 1).padStart(2, '0')}</div>
              <div className="process-label">{item.title}</div>
            </button>
          ))}
        </div>

        <div
          className="process-panel reveal"
          id="processPanel"
          style={{ '--accent-color': phase.accent }}
        >
          <div className="process-panel-content active">
            <div className="process-panel-tag">{phase.tag}</div>
            <div className="process-panel-title">{phase.title}</div>
            <div className="process-panel-items">
              {phase.methods.map((method) => (
                <span className="process-tag-pill" key={method}>
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INNSIKTSMETODER */}
      <section className="insights-section">
        <div className="section-eyebrow reveal">
          <div className="eyebrow-dot" style={{ background: 'var(--sky)' }}></div>
          <span className="eyebrow-text">Innsiktsmetoder</span>
        </div>
        <h2 className="section-title reveal">Slik samlet vi innsikt</h2>
        <p className="section-body reveal">
          Over 4 måneder ble det gjennomført en rekke metodiske tilnærminger for å forstå
          brukernes opplevelse av Mjøspromenaden.
        </p>
        <div className="insights-grid" style={{ marginTop: '3rem' }}>
          {insights.map((item, index) => (
            <div className={`insight-card ${revealClass(index, 4)}`} key={item.title}>
              <div
                className="insight-icon"
                style={{ background: `color-mix(in srgb, ${item.color} 22%, transparent)` }}
              >
                {item.icon}
              </div>
              <div className="insight-title">{item.title}</div>
              <p className="insight-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOVEDFUNN */}
      <section className="findings-section">
        <div className="section-eyebrow reveal">
          <div className="eyebrow-dot" style={{ background: 'var(--sky)' }}></div>
          <span className="eyebrow-text">Hovedfunn</span>
        </div>
        <h2 className="section-title reveal">Hva vi oppdaget</h2>
        <div className="findings-grid">
          {findings.map((item, index) => (
            <div className={`finding-item ${revealClass(index, 3)}`} key={item.label}>
              <span className="finding-label" style={{ background: 'var(--sky)' }}>
                {item.label}
              </span>
              <div className="finding-title">{item.title}</div>
              <p className="finding-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PERSONAS */}
      <section className="personas-section">
        <div className="section-eyebrow reveal">
          <div className="eyebrow-dot" style={{ background: 'var(--pink)' }}></div>
          <span className="eyebrow-text">Personas</span>
        </div>
        <h2 className="section-title reveal">Brukerne vi designet for</h2>
        <p className="section-body reveal">
          Med utgangspunkt i innsiktsmetoder og refleksjon ble to personas utformet — begge
          studenter i Gjøvik med behov og utfordringer knyttet til informasjon om Mjøspromenaden.
        </p>
        <div className="personas-grid" style={{ marginTop: '2.5rem' }}>
          {personas.map((persona, index) => (
            <div
              className={`persona-card ${persona.variant} ${revealClass(index, 2)}`}
              key={persona.name}
            >
              <div className="persona-header">
                <div className={`persona-avatar ${persona.variant}`}>{persona.avatar}</div>
                <div>
                  <div className="persona-name">{persona.name}</div>
                  <div className="persona-age">{persona.age}</div>
                </div>
              </div>
              <div className="persona-cols">
                <div>
                  <div className="persona-col-title">Behov</div>
                  <ul className="persona-list">
                    {persona.needs.map((need) => (
                      <li key={need}>{need}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="persona-col-title">Utfordringer</div>
                  <ul className="persona-list">
                    {persona.challenges.map((challenge) => (
                      <li key={challenge}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SITAT */}
      <div className="quote-section">
        <div className="quote-inner reveal">
          <div className="quote-mark">"</div>
          <p className="quote-text">
            Gjennom ulike metoder for innsiktsinnsamling, analyse, idéutvikling, semi-prototyping
            og testing presenterer vi anbefalinger med mål om å redusere forvirring og fremme
            Mjøspromenaden som et mer attraktivt sted.
          </p>
          <span className="quote-source">— Prosjektsammendrag</span>
        </div>
      </div>

      {/* LØSNING / PROTOTYPE */}
      <section className="solution-section" id="prototype">
        <div className="section-eyebrow reveal">
          <div className="eyebrow-dot" style={{ background: 'var(--yellow)' }}></div>
          <span className="eyebrow-text">Løsning og prototype</span>
        </div>
        <h2 className="section-title reveal">Kommunikasjonsstrategi</h2>
        <p className="section-body reveal" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Løsningen består av syv komponenter som tilsammen kommuniserer informasjon om
          Mjøspromenaden til studenter — med en klar logisk sammenheng som gir brukeren mulighet
          til å navigere i området og finne informasjon på en tydelig og tilgjengelig måte. Velg
          en komponent for å se mer.
        </p>

        <div className="proto-intro">
          <div className="proto-tabs reveal">
            {protoComponents.map((item, index) => (
              <button
                key={item.tab}
                type="button"
                className={`proto-tab${index === activeProto ? ' active' : ''}`}
                style={{ '--tab-color': item.color }}
                onClick={() => setActiveProto(index)}
                aria-pressed={index === activeProto}
              >
                {item.tab}
              </button>
            ))}
          </div>

          <div className="proto-display reveal">
            {/* --ratio gir rammen bildets eget format, så bildet fyller den
                helt. width/height reserverer plassen før bildet er lastet. */}
            <div
              className="proto-visual"
              id="protoVisual"
              style={{ '--ratio': proto.width / proto.height }}
            >
              <img
                className="proto-visual-img"
                src={proto.image}
                alt={proto.alt}
                width={proto.width}
                height={proto.height}
              />
            </div>

            <div>
              <div className="proto-content active">
                <div className="proto-content-title">{proto.title}</div>
                <p className="proto-content-desc">{proto.desc}</p>
                <div className="proto-content-tags">
                  {proto.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REFLEKSJON */}
      <section className="reflection-section">
        <div className="section-eyebrow reveal">
          <div className="eyebrow-dot" style={{ background: 'var(--yellow)' }}></div>
          <span className="eyebrow-text">Oppsummering</span>
        </div>
        <h2 className="section-title reveal">Refleksjon over prosessen</h2>
        <p className="section-body reveal">
          Prosjektet utfordret oss til å se helheten av brukeropplevelsen, og bryte det ned til
          konkrete deler og hente ut hva som var viktigst. Oppgaven utfordret meg som
          interaksjonsdesigner ved å se på hvordan flere deler av løsningen jobber sammen for å
          skape en helhetlig løsning.
        </p>
      </section>
    </>
  );
}
