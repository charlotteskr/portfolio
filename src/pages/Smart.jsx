import { useState } from 'react';
import {
  affinityClusters,
  brandColors,
  brandType,
  competitors,
  controllers,
  findings,
  flowSteps,
  heroMeta,
  insights,
  moscow,
  processPhases,
  team,
} from '../data/smart';
import { Icon } from '../components/Icon';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { usePageClass } from '../hooks/usePageClass';
import { useReveal } from '../hooks/useReveal';

// Samme trappevise innanimering som på Mjøspromenaden: forsinkelsen følger
// posisjonen i lista, så kortene kommer inn etter hverandre.
function revealClass(index, cycle) {
  const step = index % cycle;
  return step === 0 ? 'reveal' : `reveal reveal-delay-${step}`;
}

export default function Smart() {
  useDocumentTitle('smArt — Charlotte Skråmestø');
  usePageClass('case-smart');
  useReveal();

  const [activePhase, setActivePhase] = useState(0);

  const phase = processPhases[activePhase];

  return (
    <div className="sm-page">
      {/* HERO */}
      <section className="sm-hero">
        <div className="sm-hero-inner">
          <p className="sm-hero-tag">Prosjekt — Interaksjonsdesign / UX</p>
          <h1 className="sm-hero-title">
            smArt
            <em>en interaktiv AI-kunstutstilling</em>
          </h1>
          <p className="sm-hero-desc">
            For noen kan et museumsbesøk oppleves som kjedelig. smArt lar publikum ta del i
            selve kunstproduksjonen: du velger en kunststil, utstillingen tar et bilde av deg,
            og AI-en gjør deg om til et unikt kunstverk.
          </p>
        </div>
        <div className="sm-hero-meta">
          {heroMeta.map((item) => (
            <div className="sm-meta-item" key={item.label}>
              <span className="sm-meta-label">{item.label}</span>
              <span className="sm-meta-value">{item.value}</span>
            </div>
          ))}
        </div>
        <a href="#losning" className="sm-hero-cta">
          Se løsningen
          <span>↓</span>
        </a>
      </section>

      {/* PROBLEMSTILLING */}
      <section className="sm-problem">
        <div className="sm-eyebrow reveal">
          <div className="sm-eyebrow-dot" style={{ background: 'var(--phase-define)' }} />
          <span className="sm-eyebrow-text">Problemstilling</span>
        </div>
        <div className="sm-problem-grid">
          <div>
            <h2 className="sm-title reveal">Hvordan gjøre kunst engasjerende?</h2>
          </div>
          <div>
            <p className="sm-body reveal">
              Innsikten fra research gjorde det nødvendig å ramme inn problemet på nytt. Vi
              landet på én problemstilling som styrte resten av prosjektet.
            </p>
            <p className="sm-body reveal reveal-delay-1" style={{ marginTop: '1rem' }}>
              smArt var et gruppeprosjekt med seks personer. Mitt bidrag lå på UX-siden —
              innsiktsarbeid, konkurrentanalyse, prioritering av krav, wireframes og den
              visuelle identiteten.
            </p>
          </div>
        </div>
        <p className="sm-statement reveal">
          «Hvordan kan vi gjøre kunstutstillinger interaktive og engasjerende, slik at de
          skaper et personlig og varig inntrykk hos unge voksne?»
        </p>
      </section>

      {/* PROSESS */}
      <section className="sm-process">
        <div className="sm-eyebrow reveal">
          <div className="sm-eyebrow-dot" style={{ background: 'var(--wine)' }} />
          <span className="sm-eyebrow-text">Double Diamond</span>
        </div>
        <h2 className="sm-title reveal">Prosessen</h2>
        <p className="sm-body reveal">
          Klikk på en fase for å se hva vi gjorde i den.
        </p>

        <div className="sm-process-track reveal">
          {processPhases.map((item, index) => (
            <button
              key={item.title}
              type="button"
              className={`sm-step${index === activePhase ? ' active' : ''}`}
              style={{ '--accent-color': item.accent }}
              onClick={() => setActivePhase(index)}
              aria-pressed={index === activePhase}
            >
              <div className="sm-step-node">{String(index + 1).padStart(2, '0')}</div>
              <div className="sm-step-label">{item.title}</div>
            </button>
          ))}
        </div>

        <div className="sm-process-panel reveal" style={{ '--accent-color': phase.accent }}>
          <div className="sm-panel-tag">{phase.tag}</div>
          <div className="sm-panel-title">{phase.title}</div>
          <p className="sm-panel-desc">{phase.desc}</p>
          <div className="sm-pills">
            {phase.methods.map((method) => (
              <span key={method}>{method}</span>
            ))}
          </div>
        </div>
      </section>

      {/* INNSIKT */}
      <section>
        <div className="sm-eyebrow reveal">
          <div className="sm-eyebrow-dot" style={{ background: 'var(--phase-discover)' }} />
          <span className="sm-eyebrow-text">Discover</span>
        </div>
        <h2 className="sm-title reveal">Slik samlet vi innsikt</h2>
        <p className="sm-body reveal">
          For å forstå brukerens perspektiv og behov var det avgjørende å gjøre grundig
          research og bygge empati med brukeren gjennom flere metoder.
        </p>

        <div className="sm-insights-grid">
          {insights.map((item, index) => (
            <div className={`sm-insight-card ${revealClass(index, 4)}`} key={item.title}>
              {/* color styrer streken i ikonet, som tegnes i currentColor. */}
              <div
                className="sm-insight-icon"
                style={{
                  background: `color-mix(in srgb, ${item.color} 22%, transparent)`,
                  color: item.color,
                }}
              >
                <Icon name={item.icon} />
              </div>
              <div className="sm-insight-title">{item.title}</div>
              <p className="sm-insight-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <ul className="sm-cluster-list reveal">
          {affinityClusters.map((cluster) => (
            <li key={cluster}>{cluster}</li>
          ))}
        </ul>
      </section>

      {/* HOVEDFUNN */}
      <section className="sm-findings">
        <div className="sm-eyebrow reveal">
          <div className="sm-eyebrow-dot" style={{ background: 'var(--wine)' }} />
          <span className="sm-eyebrow-text">Hovedfunn</span>
        </div>
        <h2 className="sm-title reveal">Hva vi oppdaget</h2>
        <div className="sm-findings-grid">
          {findings.map((item, index) => (
            <div className={`sm-finding ${revealClass(index, 4)}`} key={item.label}>
              <span className="sm-finding-label">{item.label}</span>
              <div className="sm-finding-title">{item.title}</div>
              <p className="sm-finding-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* KONKURRENTANALYSE */}
      <section>
        <div className="sm-eyebrow reveal">
          <div className="sm-eyebrow-dot" style={{ background: 'var(--phase-define)' }} />
          <span className="sm-eyebrow-text">Define</span>
        </div>
        <h2 className="sm-title reveal">Hva finnes fra før?</h2>
        <p className="sm-body reveal">
          Vi kartla tre eksisterende løsninger for å forstå hvor smArt skilte seg fra det som
          allerede var på markedet. Et gjennomgående mønster: løsningene er morsomme, men
          lærer deg lite om selve kunsten.
        </p>

        <div className="sm-competitors">
          {competitors.map((item, index) => (
            <div className={`sm-competitor ${revealClass(index, 3)}`} key={item.name}>
              <div className="sm-competitor-kind">{item.kind}</div>
              <div className="sm-competitor-name">{item.name}</div>
              <p className="sm-competitor-value">{item.value}</p>
              <div className="sm-proscons">
                <div>
                  <div className="sm-proscons-title pro">Fordeler</div>
                  <ul className="pro-list">
                    {item.pros.map((pro) => (
                      <li key={pro}>{pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="sm-proscons-title con">Ulemper</div>
                  <ul className="con-list">
                    {item.cons.map((con) => (
                      <li key={con}>{con}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRIORITERING */}
      <section>
        <div className="sm-eyebrow reveal">
          <div className="sm-eyebrow-dot" style={{ background: 'var(--phase-develop)' }} />
          <span className="sm-eyebrow-text">Develop</span>
        </div>
        <h2 className="sm-title reveal">Prioritering og valg</h2>
        <p className="sm-body reveal">
          Med MoSCoW-metoden sorterte vi kravene fra viktigst til minst viktig, slik at
          utviklingsteamet visste hva som måtte på plass først.
        </p>

        <div className="sm-moscow">
          {moscow.map((group, index) => (
            <div
              className={`sm-moscow-col ${group.variant} ${revealClass(index, 4)}`}
              key={group.level}
            >
              <div className="sm-moscow-level">{group.level}</div>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="sm-title reveal" style={{ fontSize: '1.6rem', marginTop: '4rem' }}>
          Hvordan skal brukeren styre utstillingen?
        </h3>
        <p className="sm-body reveal">
          Fem alternativer ble vurdert opp mot hverandre, med universell utforming og
          installasjonsbehov som de tyngste kriteriene. Løsningen som ble bygget, endte på en
          berøringsbasert kontroller: en telefon i et eget stativ, med enkle piltaster på
          skjermen.
        </p>

        <div className="sm-controllers">
          {controllers.map((item, index) => (
            <div
              className={`sm-controller${item.chosen ? ' chosen' : ''} ${revealClass(index, 3)}`}
              key={item.name}
            >
              <div className="sm-controller-name">
                {item.name}
                {item.chosen && <span className="sm-chosen-flag">Valgt</span>}
              </div>
              <div className="sm-proscons">
                <div>
                  <div className="sm-proscons-title pro">Fordeler</div>
                  <ul className="pro-list">
                    {item.pros.map((pro) => (
                      <li key={pro}>{pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="sm-proscons-title con">Ulemper</div>
                  <ul className="con-list">
                    {item.cons.map((con) => (
                      <li key={con}>{con}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VISUELL IDENTITET */}
      <section className="sm-identity">
        <div className="sm-eyebrow reveal">
          <div className="sm-eyebrow-dot" style={{ background: 'var(--wine)' }} />
          <span className="sm-eyebrow-text">Visuell identitet</span>
        </div>
        <h2 className="sm-title reveal">Nøytralt uttrykk, organiske former</h2>
        <p className="sm-body reveal">
          Den visuelle identiteten bygger på en nøytral palett og organiske former, inspirert
          av tradisjonelle museer. smArt skulle kunne tilpasse seg alt fra klassiske museer til
          mer ekspressive installasjoner.
        </p>

        <div className="sm-swatches reveal">
          {brandColors.map((color) => (
            <div className="sm-swatch" key={color.hex}>
              <div className="sm-swatch-chip" style={{ background: color.hex }} />
              <div className="sm-swatch-name">{color.name}</div>
              <div className="sm-swatch-hex">{color.hex}</div>
            </div>
          ))}
        </div>

        <ul className="sm-type-list reveal">
          {brandType.map((item) => (
            <li key={item.role}>
              <span className="sm-type-role">{item.role}</span>
              <span className="sm-type-font">{item.font}</span>
              <span className="sm-type-weight">{item.weight}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* LØSNING */}
      <section className="sm-solution" id="losning">
        <div className="sm-eyebrow reveal">
          <div className="sm-eyebrow-dot" style={{ background: 'var(--phase-deliver)' }} />
          <span className="sm-eyebrow-text">Deliver</span>
        </div>
        <h2 className="sm-title reveal">Den ferdige utstillingen</h2>
        <p className="sm-body reveal">
          smArt er en interaktiv kunstutstilling der du lager unike kunstverk ved hjelp av
          kunstig intelligens. Utstillingen genererer bilder ut fra utseendet ditt og
          kunststilen du velger — et digitalt verk som blander teknologiens skaperkraft med
          din egen identitet.
        </p>
        <p className="sm-body reveal reveal-delay-1" style={{ marginTop: '1rem' }}>
          Gjennom Web of Things (WoT) snakker enhetene sammen. Du navigerer med en
          kontroller, et webkamera fanger ansiktet ditt, og på skjermen ser du kunstverket
          bli til. Du er både kunstneren og motivet.
        </p>

        <div className="sm-flow">
          {flowSteps.map((step, index) => (
            <div className={`sm-flow-step ${revealClass(index, 3)}`} key={step.title}>
              <div className="sm-flow-num">{String(index + 1).padStart(2, '0')}</div>
              <div className="sm-flow-title">{step.title}</div>
              <p className="sm-flow-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section>
        <div className="sm-eyebrow reveal">
          <div className="sm-eyebrow-dot" style={{ background: 'var(--phase-discover)' }} />
          <span className="sm-eyebrow-text">Team</span>
        </div>
        <h2 className="sm-title reveal">Hvem gjorde hva</h2>
        <p className="sm-body reveal">
          smArt ble utviklet av seks studenter — tre fra interaksjonsdesign og tre fra
          programvareutvikling.
        </p>
        <div className="sm-team-grid reveal">
          {team.map((member) => (
            <div className={`sm-team-member${member.me ? ' me' : ''}`} key={member.name}>
              <span className="sm-team-name">{member.name}</span>
              <span className="sm-team-role">{member.role}</span>
              {member.me && <span className="sm-team-flag">Meg</span>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
