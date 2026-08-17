// Innholdet på Mjøspromenaden-siden. Lå tidligere som gjentakende markup i
// mjospromenaden.html — her ligger det som data, slik at JSX-en bare beskriver
// oppsettet én gang per seksjon.

export const processPhases = [
  {
    tag: 'Fase 01',
    title: 'Forberede',
    accent: 'var(--coral)',
    methods: ['Gantt-diagram', 'Aktøranalyse', 'Kjernemodell', 'Intervjuguide'],
  },
  {
    tag: 'Fase 02',
    title: 'Forstå',
    accent: 'var(--sky)',
    methods: [
      'Brukerintervju',
      'Konkurranseanalyse',
      'Kognitiv kartlegging',
      'Tjenestesafari',
      'Litteratursøk',
    ],
  },
  {
    tag: 'Fase 03',
    title: 'Definere',
    accent: 'var(--orange)',
    methods: ['Hvordan kan vi …?', 'Personas', 'Tjenestekart'],
  },
  {
    tag: 'Fase 04',
    title: 'Ideere',
    accent: 'var(--pink)',
    methods: [
      'Workshop / brainwriting',
      'Effekt/innsats-matrise',
      'Prioriteringsskjema',
      'MoSCoW',
    ],
  },
  {
    tag: 'Fase 05',
    title: 'Prototype & Test',
    accent: 'var(--yellow)',
    methods: ['Konseptpresentasjon', 'Lavterskel prototyper', 'Brukervennlighetstest'],
  },
];

export const insights = [
  {
    icon: 'interview',
    color: 'var(--coral)',
    title: 'Brukerintervju',
    desc: 'Vi gjennomførte fire intervjuer for å forstå bruk og behov for informasjon og navigering relatert til Mjøspromenaden.',
  },
  {
    icon: 'puzzle',
    color: 'var(--sky)',
    title: 'Kognitiv kartlegging',
    desc: 'Intervjudeltakerne ble bedt om å tegne Mjøspromenaden som de definerte den — tegningene avdekket store variasjoner i oppfatning.',
  },
  {
    icon: 'chart',
    color: 'var(--orange)',
    title: 'Konkurranseanalyse',
    desc: 'Vi undersøkte nærliggende reisemål for å avdekke fordeler og ulemper med informasjonen som presenteres for besøkende.',
  },
  {
    icon: 'compass',
    color: 'var(--pink)',
    title: 'Tjenestesafari',
    desc: 'Vi undersøkte hvordan Mjøspromenaden opplevdes som besøkende, med utgangspunkt i navigering fra Gjøvik skysstasjon.',
  },
  {
    icon: 'phone',
    color: 'var(--yellow)',
    title: 'Digital befaring',
    desc: 'Kartlegging av informasjon tilgjengelig via Google Maps, samt gjennomgang av informasjon på Gjøvik kommunes nettsider.',
  },
  {
    icon: 'book',
    color: 'var(--sky)',
    title: 'Litteratursøk',
    desc: 'Gjennomgang av relevante forelesninger og litteratur for å få et dypere og mer nyansert bilde av temaet.',
  },
];

export const findings = [
  {
    label: 'Funn 01',
    title: 'Uklare grenser for området',
    desc: 'Det er stor variasjon i hva som oppfattes som Mjøspromenaden, og det er uklart hvor den egentlig starter og slutter.',
  },
  {
    label: 'Funn 02',
    title: 'Geografisk uoversiktlighet',
    desc: 'Mjøspromenaden er vanskelig å få oversikt over og mangler markører som gjør det enkelt å identifisere og finne korrekt informasjon.',
  },
  {
    label: 'Funn 03',
    title: 'Vanskelig å orientere seg',
    desc: 'Det finnes lite eller ingen selvorientering på området. Studenter har behov for bekreftelse av sine omgivelser og opplever usikkerhet.',
  },
  {
    label: 'Funn 04',
    title: 'Mangelfull informasjonsdeling',
    desc: 'Det er lite informasjon om hva Mjøspromenaden er som et område, og hva den byr på for dem som benytter den.',
  },
  {
    label: 'Funn 05',
    title: 'Digitale kart fungerer ikke godt nok',
    desc: 'Digitale kart er ofte lite hensiktsmessige for å navigere til og i området — informasjonen er mangelfull og funksjonelt begrenset.',
  },
  {
    label: 'Funn 06',
    title: 'Utydelig navnebruk',
    desc: 'Området omtales med ulike navn, både i Gjøvik kommune og i stedsnavn, noe som bidrar til en uklar identitet.',
  },
];

export const personas = [
  {
    variant: 'p1',
    avatar: '👩',
    name: 'Emilie Møller',
    age: '25 år — Student i Gjøvik',
    needs: [
      'Vite hva Mjøspromenaden tilbyr',
      'Å få Mjøspromenaden anbefalt',
      'Å vite om tilbud og fasiliteter',
      'Enkel tilgang til kart og info',
    ],
    challenges: [
      'Vet ikke hva Mjøspromenaden er',
      'Ingen anbefalte Gjøvik til henne',
      'Savner tydelig informasjon',
      'Vanskelig å finne frem',
    ],
  },
  {
    variant: 'p2',
    avatar: '👨',
    name: 'William Pham',
    age: '23 år — Student i Gjøvik',
    needs: [
      'Oversiktlig informasjon om området',
      'Å finne aktiviteter ved Mjøsa',
      'Tydelige kart og skilting',
      'Lokale anbefalinger',
    ],
    challenges: [
      'Vet ikke hva Mjøspromenaden er',
      'Ble ikke introdusert til stedet',
      'Digitale kart er utilstrekkelige',
      'Vanskelig å orientere seg',
    ],
  },
];

export const protoComponents = [
  {
    tab: 'Logo',
    color: 'var(--coral)',
    image: '/bilder/Logo.svg',
    width: 460,
    height: 142,
    alt: 'Logo',
    // Logoen og stedsnavnene er SVG-er uten egen luft rundt seg, så rammen
    // legger på litt padding for at de ikke skal gå kant i kant.
    padded: true,
    title: 'Logo',
    desc: 'En tydelig logo for Mjøspromenaden, med en visuell profil som matcher Gjøvik kommunes grafiske profil — bygger gjenkjennelse og styrker identiteten til området på tvers av alle flater.',
    tags: ['Visuell identitet', 'Merkevare', 'Gjenkjennelse'],
  },
  {
    tab: 'Stedsnavn og landemerke',
    color: 'var(--pink)',
    image: '/bilder/Stedsnavn.svg',
    width: 480,
    height: 280,
    alt: 'Stedsnavn og landemerke',
    padded: true,
    title: 'Stedsnavn & landemerke',
    desc: 'Enhetlig bruk av stedsnavn for landemerkene langs Mjøspromenaden — Skibladnerbrygga, Gjøvikstranda, Fredvika, Pulsodden og Rambekkvika — gir området en tydelig identitet og gjør det lettere å referere til og finne frem mellom de ulike stedene.',
    tags: ['Stedsidentitet', 'Navnebruk', 'Landemerker'],
  },
  {
    tab: 'Områdekart',
    color: 'var(--sky)',
    image: '/bilder/omradekart.webp',
    width: 1400,
    height: 989,
    alt: 'Områdekart',
    title: 'Områdekart',
    desc: 'Et tilgjengelig kart over Mjøspromenaden med tydelige stedsnavn og landemerker, designet for bruk i skiltstolper, brosjyrer og digitale flater.',
    tags: ['Kartdesign', 'Stedsnavn', 'Tilgjengelighet'],
  },
  {
    tab: 'Skiltstolpe',
    color: 'var(--orange)',
    image: '/bilder/skiltstolpe.webp',
    width: 1000,
    height: 985,
    alt: 'Skiltstolpe langs Mjøspromenaden med retning og avstand til Skibladnerbrygga, Rambekkvika, Pulsodden og Gjøvikstranda',
    title: 'Skiltstolpe',
    desc: 'Fysisk infoskilting plassert langs Mjøspromenaden viser avstand og retning til Skibladnerbrygga, Gjøvikstranda og Pulsodden — tilgjengelig informasjon uten avhengighet av internett eller strøm.',
    tags: ['Fysisk skilting', 'Wayfinding', 'Stedsidentitet'],
  },
  {
    tab: 'Gjøvikkommune.no',
    color: 'var(--yellow)',
    image: '/bilder/gjovikkommune.webp',
    width: 1400,
    height: 1400,
    alt: 'Gjøvikkommune.no',
    title: 'Gjøvikkommune.no',
    desc: 'Alt på ett sted — informasjon om Mjøspromenaden samles og oppdateres jevnlig på kommunens nettside, slik at studenter har én pålitelig kilde å gå til for å lære om området, aktiviteter og fasiliteter.',
    tags: ['Nettside', 'Informasjonsarkitektur', 'Oppdatert innhold'],
  },
  {
    tab: 'Google Maps',
    color: 'var(--pink)',
    image: '/bilder/googlemaps.webp',
    width: 678,
    height: 678,
    alt: 'Mobil som viser søk etter Mjøspromenaden i Google Maps',
    title: 'Google Maps',
    desc: 'Alle informasjonspunkter — Skibladnerbrygga, Gjøvikstranda, Fredvika, Pulsodden og Rambekkvika — merkes med navn, kategori og beskrivelse, slik at brukere kan navigere både digitalt og fysisk med trygghet.',
    tags: ['Digitalt kart', 'Stedsmerking', 'Navigasjon'],
  },
  {
    tab: 'Brosjyre',
    color: 'var(--coral)',
    image: '/bilder/brosjyre.webp',
    width: 1400,
    height: 1050,
    alt: 'Brosjyre',
    title: 'Brosjyre',
    desc: 'En kompakt og informativ brosjyre gir studenttilflyttere en rask oversikt over Mjøspromenaden, stedsnavn og hva de kan oppleve — distribueres via campus og kommunens informasjonskanaler.',
    tags: ['Print', 'Visuell identitet', 'Distribusjon'],
  },
];

export const heroMeta = [
  { label: 'Tidsbruk', value: '4 måneder' },
  { label: 'Type', value: 'Bacheloroppgave' },
  { label: 'Gruppe', value: 'Charlotte Skråmestø & Hedda S. Undseth' },
  { label: 'Oppdragsgiver', value: 'Gjøvik kommune' },
];
