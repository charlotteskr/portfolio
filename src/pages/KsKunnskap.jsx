import { useEffect, useState } from 'react';
import {
  anatomySample,
  flyer,
  heroMeta,
  illustrations,
  mockups,
  palette,
  pillars,
  presentationCover,
  resourceCentre,
  roleSets,
  thumbAnatomy,
  thumbGrid,
  workAreas,
} from '../data/ks-kunnskap';
import { Icon } from '../components/Icon';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { usePageClass } from '../hooks/usePageClass';
import { useReveal } from '../hooks/useReveal';

// Samme trappevise innanimering som på de andre case-sidene: forsinkelsen
// følger posisjonen i lista, så kortene kommer inn etter hverandre.
function revealClass(index, cycle) {
  const step = index % cycle;
  return step === 0 ? 'reveal' : `reveal reveal-delay-${step}`;
}

export default function KsKunnskap() {
  useDocumentTitle('KS Kunnskap — Charlotte Skråmestø');
  usePageClass('case-ks');
  useReveal();

  const [zoomed, setZoomed] = useState(null);

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
    <div className="ks-page">
      {/* HERO */}
      <section className="ks-hero">
        <div className="ks-hero-inner">
          <p className="ks-hero-tag">Prosjekt — Grafisk design og innholdsstruktur</p>
          <h1 className="ks-hero-title">
            KS Kunnskap
            <em>å gjøre en læringsplattform lett å finne fram i</em>
          </h1>
          <p className="ks-hero-desc">
            KS Kunnskap er den felles læringsplattformen for norske kommuner og
            fylkeskommuner. Som fagrådgiver i produktteamet jobber jeg med det visuelle
            uttrykket og med hvordan innholdet er strukturert — fra ressurssenteret og
            kursbildene inne i løsningen, til materiellet som forklarer tjenesten utad.
          </p>
        </div>
        <div className="ks-hero-meta">
          {heroMeta.map((item) => (
            <div className="ks-meta-item" key={item.label}>
              <span className="ks-meta-label">{item.label}</span>
              <span className="ks-meta-value">{item.value}</span>
            </div>
          ))}
        </div>
        <a href="#ressurssenter" className="ks-hero-cta">
          Se arbeidet
          <span>↓</span>
        </a>
      </section>

      {/* KONTEKST */}
      <section className="ks-context">
        <div className="ks-eyebrow reveal">
          <div className="ks-eyebrow-dot" />
          <span className="ks-eyebrow-text">Konteksten</span>
        </div>
        <div className="ks-context-grid">
          <div>
            <h2 className="ks-title reveal">Ett kunnskapsløft for hele Kommune-Norge</h2>
          </div>
          <div>
            <p className="ks-body reveal">
              KS Kunnskap er en delings- og læringsplattform levert av det finske selskapet
              Valamis. Plattformen er en SaaS-løsning (Software as a Service), der strukturen
              bygges opp av moduler og widgets.
            </p>
            <p className="ks-body reveal reveal-delay-1" style={{ marginTop: '1rem' }}>
              Målgruppen er alle ansatte i kommuner og fylkeskommuner, fra ledere til
              assistenter, på tvers av sektorer. Brukergruppen varierer stort i alder og
              teknisk kompetanse, og bruksmønsteret varierer like mye: noen er innom
              plattformen daglig, andre en sjelden gang.
            </p>
            <p className="ks-body reveal reveal-delay-2" style={{ marginTop: '1rem' }}>
              Hovedoppgaven til plattformen er å fasilitere og drive fram kvalitetssikrede
              kurs til alle brukerne, bygget på tanken om deling av innhold — det utvikles
              én gang, sammen, og deles med hele sektoren.
            </p>
            <p className="ks-body reveal reveal-delay-3" style={{ marginTop: '1rem' }}>
              Utfordringene ligger i de samme forskjellene: ulike behov, ulik teknisk
              kompetanse og begrenset tid hos brukerne. Derfor er det særlig viktig at
              innhold, informasjon og kurs er lett tilgjengelig og strukturert på en måte
              som krever mindre kognitiv belastning av sluttbrukeren.
            </p>
          </div>
        </div>

        <h3 className="ks-sub reveal">Hovedfunksjoner</h3>
        <div className="ks-pillars">
          {pillars.map((item, index) => (
            <div className={`ks-pillar ${revealClass(index, 3)}`} key={item.title}>
              <div className="ks-pillar-title">{item.title}</div>
              <p className="ks-pillar-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <figure className="ks-figure reveal">
          <button
            type="button"
            className="ks-mockup-visual"
            onClick={() =>
              setZoomed({ image: mockups[0].image, alt: mockups[0].alt })
            }
            aria-label="Vis forsiden i større format"
          >
            <img
              src={mockups[0].image}
              alt={mockups[0].alt}
              width={mockups[0].width}
              height={mockups[0].height}
              loading="lazy"
            />
          </button>
          <figcaption>
            Slik møter brukeren KS Kunnskap: innlogging på maskinen, og startsiden foran,
            der hver ansatt får sin egen oversikt over pågående læringsløp, attester og
            arrangementer de er påmeldt.
          </figcaption>
        </figure>
      </section>

      {/* MIN ROLLE */}
      <section className="ks-role">
        <div className="ks-eyebrow reveal">
          <div className="ks-eyebrow-dot" />
          <span className="ks-eyebrow-text">Min rolle</span>
        </div>
        <h2 className="ks-title reveal">Fem områder</h2>
        <p className="ks-body reveal">
          Arbeidet spenner fra det visuelle uttrykket til den tekniske oppsettingen av
          sider i plattformen. Under er de fem områdene jeg har hatt ansvar for — hvert av
          dem er utdypet videre nedover på siden.
        </p>

        <div className="ks-work-grid">
          {workAreas.map((item, index) => (
            <div className={`ks-work ${revealClass(index, 3)}`} key={item.title}>
              <div className="ks-work-icon">
                <Icon name={item.icon} />
              </div>
              <div className="ks-work-title">{item.title}</div>
              <p className="ks-work-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GRAFISK PROFIL */}
      <section className="ks-profile">
        <div className="ks-eyebrow reveal">
          <div className="ks-eyebrow-dot" />
          <span className="ks-eyebrow-text">Grunnlaget</span>
        </div>
        <h2 className="ks-title reveal">Bygget på KS Digitals designmanual</h2>
        <p className="ks-body reveal">
          Tjenester og produkter levert av KS Digital følger samme designmanual for å skape
          et helhetlig uttrykk og koble dem sammen.
        </p>
        <div className="ks-swatches reveal">
          {palette.core.map((colour) => (
            <div className="ks-swatch" key={colour.hex}>
              <span className="ks-swatch-chip" style={{ background: colour.hex }} />
              <span className="ks-swatch-name">{colour.name}</span>
              <span className="ks-swatch-hex">{colour.hex}</span>
              <span className="ks-swatch-role">{colour.role}</span>
            </div>
          ))}
        </div>

        <div className="ks-swatches soft reveal">
          {palette.soft.map((colour) => (
            <div className="ks-swatch" key={colour.hex}>
              <span className="ks-swatch-chip" style={{ background: colour.hex }} />
              <span className="ks-swatch-name">{colour.name}</span>
              <span className="ks-swatch-hex">{colour.hex}</span>
            </div>
          ))}
        </div>

      </section>

      {/* RESSURSSENTER */}
      <section className="ks-resource" id="ressurssenter">
        <div className="ks-chapter reveal">
          <span className="ks-chapter-num">01</span>
          <span>
            <span className="ks-chapter-kicker">Område</span>
            <span className="ks-chapter-name">Ressurssenter</span>
          </span>
        </div>
        <h2 className="ks-title reveal">All produktinformasjon på ett sted</h2>
        <p className="ks-body reveal">
          Informasjonen om KS Kunnskap lå spredt: noe på selve plattformen, noe på
          ksdigital.no, og noe ble formidlet på e-post eller i drop-in-møter. Jeg
          konseptualiserte og funksjonsdefinerte en oversiktsside som samler alt på ett
          sted, og gir sluttbrukeren ett felles område å finne oppdateringer og
          informasjon.
        </p>
        <p className="ks-body reveal reveal-delay-1" style={{ marginTop: '1rem' }}>
          Struktureringen av sitemapet gikk gjennom flere iterasjoner. Det viktige var å
          konkretisere hvilke behov de ulike ansatte i kommunen faktisk har, og formidle
          svaret så enkelt som mulig.
        </p>
        <p className="ks-body reveal reveal-delay-2" style={{ marginTop: '1rem' }}>
          Jeg var også ansvarlig for å sette opp de tekniske elementene på siden, i form av
          sites og widgets i Valamis. LMS-et er en skybasert SaaS-løsning utviklet av
          Valamis, og teamet i KS Digital står nokså fritt til å sette sammen innhold og
          opprette sider innenfor rammene av det.
        </p>

        <figure className="ks-figure reveal">
          <button
            type="button"
            className="ks-shot tall"
            onClick={() =>
              setZoomed({ image: resourceCentre.image, alt: resourceCentre.alt })
            }
            aria-label="Vis hele ressurssenteret i større format"
          >
            <img
              src={resourceCentre.image}
              alt={resourceCentre.alt}
              width={resourceCentre.width}
              height={resourceCentre.height}
              loading="lazy"
            />
            <span className="ks-shot-hint">Klikk for hele siden</span>
          </button>
          <figcaption>
            Ressurssenteret i drift. Velkomsttekst og drop-in-møter i hovedspalten,
            nyheter og support i sidespalten — og en egen inngang til markedsmateriell.
          </figcaption>
        </figure>
      </section>

      {/* MINIATYRBILDER OG BANNER */}
      <section className="ks-thumbs">
        <div className="ks-chapter reveal">
          <span className="ks-chapter-num">02</span>
          <span>
            <span className="ks-chapter-kicker">Område</span>
            <span className="ks-chapter-name">Miniatyrbilder og banner</span>
          </span>
        </div>
        <h2 className="ks-title reveal">Visuelt skille kursene</h2>
        <p className="ks-body reveal">
          Kursene i KS Kunnskap vises som kort i et rutenett — både på startsiden og på
          undersider for ulike behov. Slike rutenett avhenger i stor grad av visuell
          forskjell: klarer ikke brukeren å skille kortene fra hverandre, må hver eneste
          overskrift leses. Og kurstitlene kan være lange, som krever enda mer kognitiv
          belastning.
        </p>

        <h3 className="ks-sub reveal">Oppbygging</h3>

        <div className="ks-anatomy reveal">
          {/* Markørene ligger som prosentkoordinater oppå bildet. Bildet har fast
              16:9-format, så de treffer riktig element i alle skjermbredder. */}
          <figure className="ks-anatomy-shot">
            <button
              type="button"
              className="ks-anatomy-visual"
              onClick={() =>
                setZoomed({ image: anatomySample.image, alt: anatomySample.alt })
              }
              aria-label="Vis miniatyrbildet i større format"
            >
              <img
                src={anatomySample.image}
                alt={anatomySample.alt}
                width={anatomySample.width}
                height={anatomySample.height}
                loading="lazy"
              />
              {thumbAnatomy.map((item) => (
                <span
                  className="ks-ac-pin"
                  key={item.num}
                  style={{ left: `${item.x}%`, top: `${item.y}%` }}
                  aria-hidden="true"
                >
                  {item.num}
                </span>
              ))}
            </button>
            <figcaption>
              Læringsløpet «Om rollen» for innholdsprodusenter. Det er den eneste rollen
              med nummererte løp, så alle seks elementene er synlige på ett kort.
            </figcaption>
          </figure>

          <ol className="ks-anatomy-list">
            {thumbAnatomy.map((item) => (
              <li key={item.num}>
                <span className="ks-an-num">{item.num}</span>
                <div>
                  <span className="ks-an-part">
                    {item.part}
                    <span className="ks-an-place">{item.place}</span>
                  </span>
                  <p className="ks-an-desc">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <h3 className="ks-sub reveal">Én farge per rolle</h3>
        <p className="ks-body reveal">
          Det ble viktig å skille rollene fra hverandre på en måte som gjør dem lett
          gjenkjennelige, og som gjør det enkelt å se hvilke kurs som hører til hvilken
          rolle. Samtidig skal alle bildene oppleves som en helhet, og som at de alle
          handler om opplæring i KS Kunnskap. Miniatyrbildet og banneret kobles sammen med
          samme primær- og sekundærfarge, samt gjenbruk av bølgen.
        </p>

        <div className="ks-roles">
          {roleSets.map((item, index) => (
            <div className={`ks-role-set ${revealClass(index, 2)}`} key={item.role}>
              <div className="ks-role-head">
                <span className="ks-role-chip" style={{ background: item.tint }} />
                {item.role}
              </div>
              <div className="ks-role-pair">
                <button
                  type="button"
                  className="ks-role-visual"
                  onClick={() =>
                    setZoomed({ image: item.thumb.image, alt: item.thumb.alt })
                  }
                  aria-label={`Vis miniatyrbildet for ${item.role} i større format`}
                >
                  <img
                    src={item.thumb.image}
                    alt={item.thumb.alt}
                    width={1280}
                    height={720}
                    loading="lazy"
                  />
                </button>
                <button
                  type="button"
                  className="ks-role-visual"
                  onClick={() =>
                    setZoomed({ image: item.banner.image, alt: item.banner.alt })
                  }
                  aria-label={`Vis banneret for ${item.role} i større format`}
                >
                  <img
                    src={item.banner.image}
                    alt={item.banner.alt}
                    width={2000}
                    height={489}
                    loading="lazy"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        <figure className="ks-figure reveal">
          <button
            type="button"
            className="ks-shot"
            onClick={() => setZoomed({ image: thumbGrid.image, alt: thumbGrid.alt })}
            aria-label="Vis kursrutenettet i større format"
          >
            <img
              src={thumbGrid.image}
              alt={thumbGrid.alt}
              width={thumbGrid.width}
              height={thumbGrid.height}
              loading="lazy"
            />
          </button>
          <figcaption>
            Opplæringssiden med kurskortene i bruk. Alle kortene deler oppbygging, men
            ikon, kategoritekst og farge gjør at de er mulige å skille fra hverandre i
            periferisynet.
          </figcaption>
        </figure>
      </section>

      {/* KODING */}
      <section className="ks-code">
        <div className="ks-chapter reveal">
          <span className="ks-chapter-num">03</span>
          <span>
            <span className="ks-chapter-kicker">Område</span>
            <span className="ks-chapter-name">Koding i HTML og CSS</span>
          </span>
        </div>
        <h2 className="ks-title reveal">Fra standardformat til noe som kan leses</h2>
        <p className="ks-body reveal">
          Widgets og webinnhold er kjernen i oppbyggingen av KS Kunnskap, og ble levert i
          standardformater som er nokså minimale. Jeg fikk i oppgave å bygge om innholdet
          med HTML og CSS, slik at det ble presentert ryddigere og mer visuelt
          interessant.
        </p>
        <p className="ks-body reveal reveal-delay-1" style={{ marginTop: '1rem' }}>
          Enkelte widgets, som accordion og nyheter, ble kodet ved hjelp av M365 Copilot og
          iterert på til de var brukervennlige og viste innholdet med hensikt. Resultatet
          ser du i ressurssenteret over — nyhetsspalten, seksjonskortene og
          innholdsblokkene er alle bygget på denne måten.
        </p>
      </section>

      {/* BILDEBIBLIOTEK */}
      <section className="ks-library">
        <div className="ks-chapter reveal">
          <span className="ks-chapter-num">04</span>
          <span>
            <span className="ks-chapter-kicker">Område</span>
            <span className="ks-chapter-name">Bildebibliotek</span>
          </span>
        </div>
        <h2 className="ks-title reveal">Tjue illustrasjoner som passer overalt</h2>
        <p className="ks-body reveal">
          Til bruk i kurs og som miniatyrbilder laget jeg et bildebibliotek på 20
          illustrasjoner, med Microsoft Copilot og Adobe Illustrator. Kravet var at de
          skulle være visuelt nøytrale: de må fungere for alle kommuner og alle
          kontekster, og representere ulike bruksbehov for et kurs.
        </p>
        <p className="ks-body reveal reveal-delay-1" style={{ marginTop: '1rem' }}>
          Flere av illustrasjonene er mennesker med ulike ansiktsuttrykk, i ulike
          situasjoner og jobber. Resten er gjenstander og symboler som er aktuelle å bruke
          i kurs laget i leksjonsstudio. Biblioteket ligger tilgjengelig som en zip-fil
          nederst i ressurssenteret, slik at kommunene kan bruke det selv.
        </p>

        <div className="ks-illus">
          {illustrations.map((item, index) => (
            <figure className={`ks-illu ${revealClass(index, 3)}`} key={item.image}>
              <img src={item.image} alt={item.alt} loading="lazy" />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* MARKEDSMATERIELL */}
      <section className="ks-market">
        <div className="ks-chapter reveal">
          <span className="ks-chapter-num">05</span>
          <span>
            <span className="ks-chapter-kicker">Område</span>
            <span className="ks-chapter-name">Markedsmateriell</span>
          </span>
        </div>
        <h2 className="ks-title reveal">Hva er KS Kunnskap?</h2>
        <p className="ks-body reveal">
          En presentasjon og en flyer ble utformet for å informere om kjernefunksjonene i
          KS Kunnskap, til eksternt og internt bruk. Forutsetningen var at leseren ikke har
          noe kjennskap til tjenesten fra før, og likevel skal sitte igjen med et overblikk
          over hva den tilbyr og hvilke problemer den løser for kommunene.
        </p>

        <h3 className="ks-sub reveal">Presentasjonen</h3>
        <p className="ks-body reveal">
          Presentasjonen forklarer hva KS Kunnskap er, gevinstene ved å ta løsningen i
          bruk, og hvordan tjenesten er bygget opp. Jeg laget mockups som visualiserer
          løsningen i bruk, og ikoner for å bryte opp innholdet og gi visuell interesse for
          seeren.
        </p>

        <p className="ks-body reveal" style={{ marginTop: '1rem' }}>
          Vil du se hele presentasjonen, ligger den offentlig tilgjengelig hos KS Digital.
        </p>
        <a
          className="ks-cta reveal"
          href="https://ksdigital.no/wp-content/uploads/2026/08/Markedsmateriell_innslag-til-beslutningstakere-i-kommuner-og-fylkeskommuner.pdf"
          target="_blank"
          rel="noopener"
        >
          Se hele presentasjonen (PDF)
          <span aria-hidden="true">↗</span>
        </a>

        <figure className="ks-figure reveal">
          <button
            type="button"
            className="ks-shot"
            onClick={() =>
              setZoomed({ image: presentationCover.image, alt: presentationCover.alt })
            }
            aria-label="Vis forsidelysbildet i større format"
          >
            <img
              src={presentationCover.image}
              alt={presentationCover.alt}
              width={presentationCover.width}
              height={presentationCover.height}
              loading="lazy"
            />
          </button>
          <figcaption>
            Forsidelysbildet setter tonen for resten av presentasjonen: navnet, hvem
            plattformen er for, og de tre gevinstene som går igjen videre.
          </figcaption>
        </figure>


        <div className="ks-mockups">
          {mockups.slice(1).map((item, index) => (
            <figure
              className={`ks-mockup${item.narrow ? ' narrow' : ''} ${revealClass(index, 2)}`}
              key={item.image}
            >
              <button
                type="button"
                className="ks-mockup-visual"
                onClick={() => setZoomed({ image: item.image, alt: item.alt })}
                aria-label={`Vis ${item.title} i større format`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                />
              </button>
              <figcaption>
                <span className="ks-mockup-title">{item.title}</span>
                {item.desc}
              </figcaption>
            </figure>
          ))}
        </div>

        <h3 className="ks-sub reveal">Flyeren</h3>
        <p className="ks-body reveal">
          Innholdet i presentasjonen ble omstrukturert til en flyer, som var etterspurt av
          kommunene. Her ble det viktig å bruke korte og konsise setninger som forklarte
          funksjonene. Klarspråk og visuell interesse var særlig aktuelt: en flyer leses
          stående, i forbifarten, av noen som ikke har bestemt seg for å sette seg inn i
          noe.
        </p>

        <div className="ks-flyer">
          {flyer.map((page, index) => (
            <figure className={`ks-flyer-page ${revealClass(index, 2)}`} key={page.image}>
              <span className="ks-tag">{page.label}</span>
              <button
                type="button"
                className="ks-flyer-visual"
                onClick={() => setZoomed({ image: page.image, alt: page.alt })}
                aria-label={`Vis ${page.label} av flyeren i større format`}
              >
                <img
                  src={page.image}
                  alt={page.alt}
                  width={page.width}
                  height={page.height}
                  loading="lazy"
                />
              </button>
              <figcaption>{page.note}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Felles lightbox for alle bildene som kan klikkes opp. */}
      {zoomed && (
        <div
          className="ks-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={zoomed.alt}
          onClick={() => setZoomed(null)}
        >
          <button
            type="button"
            className="ks-lightbox-close"
            aria-label="Lukk"
            onClick={() => setZoomed(null)}
          >
            ×
          </button>
          <img className="ks-lightbox-img" src={zoomed.image} alt={zoomed.alt} />
        </div>
      )}
    </div>
  );
}
