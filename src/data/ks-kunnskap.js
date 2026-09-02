// Innholdet på KS Kunnskap-siden. Kildene er presentasjonen som ble laget for
// eksternt og internt bruk (18 slides), og tekst- og bildeseksjonene fra Figma.
// Formuleringene fra Figma er skrevet om fra notatform til brødtekst, men
// meningen er beholdt. Fargene under er hentet fra fargepaletten i profilen.

export const heroMeta = [
  { label: 'Rolle', value: 'Fagrådgiver' },
  { label: 'Organisasjon', value: 'KS Digital' },
  { label: 'Team', value: 'Team KS Kunnskap' },
  { label: 'Periode', value: 'Nov. 2025 – d.d.' },
];

// De tre løftene tjenesten selges på — går igjen i presentasjonen og på flyeren.
export const pillars = [
  {
    title: 'Delingsfellesskap',
    desc: 'Felles kurskatalog der hele sektoren kan dele innhold. Innhold utvikles én gang, sammen, og blir tilgjengelig for alle.',
  },
  {
    title: 'Kompetanseheving',
    desc: 'Innebygget forfatterverktøy, arrangementsmodul og kvalitetssikrede kurs fra nasjonale og kommunale samarbeidspartnere.',
  },
  {
    title: 'Helhetlig oppfølging',
    desc: 'Individuell startside, rapporter og teamoversikt gir både ansatte og ledere kontroll på egen og andres progresjon.',
  },
];

// Fargepaletten slik den er definert i profilen. HEX-verdiene er lest av
// fargekartet, og deles i en bærende del og en lys del brukt til flater.
export const palette = {
  core: [
    { hex: '#001A58', name: 'Marineblå', role: 'Grunnfarge — tekst og mørke flater' },
    { hex: '#714EEA', name: 'Lilla', role: 'Aksent — lenker, markeringer og logo' },
    { hex: '#07604F', name: 'Grønn', role: 'Kategorifarge' },
    { hex: '#F3DDA2', name: 'Gul', role: 'Kategorifarge' },
    { hex: '#F4ECDF', name: 'Sand', role: 'Bakgrunn' },
  ],
  soft: [
    { hex: '#D0AEF4', name: 'Lys lilla' },
    { hex: '#E8F7EA', name: 'Lys grønn' },
    { hex: '#F7E5E4', name: 'Lys rosa' },
    { hex: '#F1F0EE', name: 'Lys grå' },
  ],
};

// Hva jeg har hatt ansvar for. Brukes som kortrekke rett under konteksten,
// og hvert punkt får sin egen seksjon lenger ned på siden.
export const workAreas = [
  {
    icon: 'sitemap',
    title: 'Ressurssenter',
    desc: 'Konseptualiserte og funksjonsdefinerte en oversiktsside som samler all produktinformasjon på ett sted, og satte den opp teknisk i plattformen.',
  },
  {
    icon: 'puzzle',
    title: 'Miniatyrbilder og banner',
    desc: 'Utformet et visuelt system for kurskortene, slik at brukeren skiller kursene fra hverandre uten å måtte lese overskriftene.',
  },
  {
    icon: 'code',
    title: 'Koding i HTML og CSS',
    desc: 'Bygde om widgets og webinnhold fra minimale standardformater til noe som er ryddigere å lese og mer visuelt interessant.',
  },
  {
    icon: 'image',
    title: 'Bildebibliotek',
    desc: 'Laget 20 visuelt nøytrale illustrasjoner som kan brukes på tvers av kommuner, kontekster og kurs.',
  },
  {
    icon: 'flyer',
    title: 'Markedsmateriell',
    desc: 'Presentasjon og flyer som forklarer tjenesten for noen som aldri har hørt om den — med egne mockups av løsningen.',
  },
];

// Skjermbildet av ressurssenteret slik det ser ut i drift.
export const resourceCentre = {
  image: '/bilder/ks-kunnskap/ressurssenter.webp',
  alt: 'Ressurssenteret i KS Kunnskap: banner øverst, velkomsttekst, drop-in-møter, informasjon om markedsmateriell, og en spalte med nyheter og support til høyre',
  width: 1223,
  height: 1600,
};

export const thumbGrid = {
  image: '/bilder/ks-kunnskap/miniatyrbilder-grid.webp',
  alt: 'Rutenett med fjorten kurskort i KS Kunnskap, der hvert kort har eget ikon, egen kategoritekst og fargeflate',
  width: 2000,
  height: 1817,
};

// Legemiddelhåndtering fikk en egen visuell serie, med banner øverst på siden
// og miniatyrbilde i rutenettet — samme motiv i to formater.
export const medicationSet = [
  {
    role: 'Helsefagarbeider og assistenter',
    tint: '#D0AEF4',
    banner: {
      image: '/bilder/ks-kunnskap/banner-ass.webp',
      alt: 'Banner i lys lilla med tabletter og kapsler rundt tittelen «Helsefagarbeider og assistenter»',
      width: 2000,
      height: 647,
    },
    thumb: {
      image: '/bilder/ks-kunnskap/miniatyr-ass.webp',
      alt: 'Miniatyrbilde i lys lilla med tabletter og tittelen «Helsefagarbeider og assistenter»',
      width: 1280,
      height: 720,
    },
  },
  {
    role: 'Sykepleier og vernepleier',
    tint: '#AEC3E4',
    banner: {
      image: '/bilder/ks-kunnskap/banner-vpl.webp',
      alt: 'Banner i lys blå med tabletter og kapsler rundt tittelen «Sykepleier og vernepleier»',
      width: 2000,
      height: 647,
    },
    thumb: {
      image: '/bilder/ks-kunnskap/miniatyr-vpl.webp',
      alt: 'Miniatyrbilde i lys blå med tabletter og tittelen «Sykepleier og vernepleier»',
      width: 1280,
      height: 720,
    },
  },
];

// Prøvekortet som brukes til å forklare oppbyggingen. Innholdsprodusent er
// valgt fordi det er den eneste rollen med nummererte læringsløp, så alle seks
// elementene er synlige samtidig. Markørene plasseres i prosent av bildet, som
// har fast 16:9-format — da sitter de riktig i alle bredder.
export const anatomySample = {
  image: '/bilder/ks-kunnskap/miniatyr-innholdsprodusent.webp',
  alt: 'Miniatyrbilde for læringsløpet «Om rollen — Innholdsprodusent»: gråblå flate med marineblå bølgeformer, KS Digital-logo øverst til venstre, tallet 1 i en sirkel øverst til høyre, og et personikon over tittelen',
  width: 1280,
  height: 720,
};

// Oppbyggingen av et miniatyrbilde. Hvert element bærer én bestemt opplysning,
// og til sammen er det systemet som gjør at kortene kan skilles fra hverandre
// uten at overskriften leses. x/y er markørens plassering på prøvekortet.
export const thumbAnatomy = [
  {
    num: '01',
    part: 'Logo',
    place: 'Øverst til venstre',
    x: 14, y: 11.5,
    desc: 'KS Digital-logoen står i samme hjørne på alle miniatyrbildene, og knytter kurset til avsenderen.',
  },
  {
    num: '02',
    part: 'Ikon',
    place: 'Midt i flaten',
    x: 39, y: 34,
    desc: 'Ikonet sier noe om innholdet. Her et personikon for en rolleintroduksjon — andre kort har studenthatt for opplæring eller sprøyte og hetteglass for legemiddelopplæring.',
  },
  {
    num: '03',
    part: 'Tittel',
    place: 'Under ikonet',
    x: 70, y: 53,
    desc: 'Hovedteksten forteller hva læringsløpet handler om. Den er satt i versaler, så den leses raskt i et lite format.',
  },
  {
    num: '04',
    part: 'Undertittel',
    place: 'Under tittelen',
    x: 74.5, y: 69,
    desc: 'Undertittelen sier hvem læringsløpet er for — Ansatte, Leder, Fagansvarlig, Innholdsprodusent eller Områdeadministrator.',
  },
  {
    num: '05',
    part: 'Farge',
    place: 'Flaten og bølgene',
    x: 80, y: 89,
    desc: 'Fargen bærer den samme opplysningen som undertittelen: hvem det er for. Det er den du oppfatter først, før noe er lest.',
  },
  {
    num: '06',
    part: 'Nummer',
    place: 'Øverst til høyre',
    x: 79, y: 13,
    desc: 'Roller med flere læringsløp får dem nummerert i kronologisk rekkefølge, så det er tydelig hva man tar først. Innholdsprodusent har ni.',
  },
];

// Systemet brukt på hver rolle. Miniatyrbildet møter deg i kurskatalogen,
// banneret på toppen av rollens egen inngang — samme farge begge steder.
export const roleSets = [
  {
    role: 'Ansatte',
    tint: '#714EEA',
    thumb: {
      image: '/bilder/ks-kunnskap/miniatyr-ansatt.webp',
      alt: 'Miniatyrbilde i lilla med studenthatt-ikon, tittelen «Opplæring» og undertittelen «Ansatte»',
    },
    banner: {
      image: '/bilder/ks-kunnskap/banner-ansatt.webp',
      alt: 'Bredt banner med bølgeformer i to lilla toner',
    },
  },
  {
    role: 'Leder',
    tint: '#F3DDA2',
    thumb: {
      image: '/bilder/ks-kunnskap/miniatyr-leder.webp',
      alt: 'Miniatyrbilde i gult med personikon, tittelen «Opplæring» og undertittelen «Leder»',
    },
    banner: {
      image: '/bilder/ks-kunnskap/banner-leder.webp',
      alt: 'Bredt banner med bølgeformer i gult og off-white',
    },
  },
  {
    role: 'Fagansvarlig',
    tint: '#D0AEF4',
    thumb: {
      image: '/bilder/ks-kunnskap/miniatyr-fagansvarlig.webp',
      alt: 'Miniatyrbilde i lys lilla med personikon, tittelen «Opplæring» og undertittelen «Fagansvarlig»',
    },
    banner: {
      image: '/bilder/ks-kunnskap/banner-fagansvarlig.webp',
      alt: 'Bredt banner med bølgeformer i lys lilla og lavendel',
    },
  },
  {
    role: 'Innholdsprodusent',
    tint: '#001A58',
    thumb: {
      image: '/bilder/ks-kunnskap/miniatyr-innholdsprodusent.webp',
      alt: 'Miniatyrbilde i gråblå med personikon, tittelen «Om rollen», undertittelen «Innholdsprodusent» og tallet 1',
    },
    banner: {
      image: '/bilder/ks-kunnskap/banner-innholdsprodusent.webp',
      alt: 'Bredt banner med bølgeformer i marineblå og gråblå',
    },
  },
  {
    role: 'Områdeadministrator',
    tint: '#07604F',
    thumb: {
      image: '/bilder/ks-kunnskap/miniatyr-omradeadmin.webp',
      alt: 'Miniatyrbilde i grønt med personikon, tittelen «Opplæring» og undertittelen «Områdeadministrator»',
    },
    banner: {
      image: '/bilder/ks-kunnskap/banner-omradeadmin.webp',
      alt: 'Bredt banner med bølgeformer i to grønne toner',
    },
  },
  {
    role: 'Generell',
    tint: '#A8A499',
    thumb: {
      image: '/bilder/ks-kunnskap/miniatyr-generell.webp',
      alt: 'Miniatyrbilde i varmgrå med ikon av sprøyte og hetteglass, tittelen «Legemiddelopplæring» og undertittelen «Håndtering»',
    },
    banner: {
      image: '/bilder/ks-kunnskap/banner-generell.webp',
      alt: 'Bredt banner med bølgeformer i varmgrå og off-white',
    },
  },
];

// Illustrasjonene fra bildebiblioteket. Levert som SVG, så de holder seg
// skarpe uansett hvor de brukes.
export const illustrations = [
  {
    image: '/bilder/ks-kunnskap/avatarer.svg',
    alt: 'Fire tegnede avatarer med ulike ansiktsuttrykk: en som peker, en som tenker, en som gir tommel opp, og en som holder en mobil',
    caption: 'Mennesker med ulike ansiktsuttrykk, til bruk i kursdialoger og eksempler.',
  },
  {
    image: '/bilder/ks-kunnskap/illustrasjon-1.svg',
    alt: 'To illustrasjoner: en gruppe mennesker med rullestol, førerhund og et hjerte, og en husrekke med tre',
    caption: 'Situasjoner fra kommunale tjenesteområder — helse, omsorg og lokalsamfunn.',
  },
  {
    image: '/bilder/ks-kunnskap/illustrasjon-2.svg',
    alt: 'Tre illustrasjoner av gjenstander: en åpen bok, en bærbar datamaskin og en studenthatt',
    caption: 'Gjenstander og symboler til bruk i leksjoner laget i leksjonsstudio.',
  },
];

// Flyeren i to sider. Innholdet fra presentasjonen strukturert om til ett ark.
export const flyer = [
  {
    image: '/bilder/ks-kunnskap/flyer-side1.webp',
    alt: 'Flyer side 1: bilde av en person med mobil, mockup av plattformen, tittelen KS Kunnskap og en kort beskrivelse med QR-kode',
    label: 'Side 1',
    note: 'Forsiden svarer på det første spørsmålet: hva er dette, og hvem er det for?',
    width: 840,
    height: 1190,
  },
  {
    image: '/bilder/ks-kunnskap/flyer-side2.webp',
    alt: 'Flyer side 2: åtte punkter med ikoner, gruppert rundt to fargede sirkler med temaene helhetlig oppfølging og engasjerende læring',
    label: 'Side 2',
    note: 'Baksiden bryter funksjonaliteten ned i åtte korte punkter, gruppert i to temaer.',
    width: 840,
    height: 1190,
  },
];

// Mockupene som ble laget for presentasjonen for å vise løsningen i bruk.
export const mockups = [
  {
    image: '/bilder/ks-kunnskap/mockup-startside.webp',
    alt: 'Mockup på bærbar datamaskin av startsiden i KS Kunnskap med mine læringsløp, kommende arrangement og attester',
    title: 'Min startside',
    desc: 'Oversikt over påmeldte læringsløp, attester og kommende arrangementer.',
    width: 1800,
    height: 1157,
  },
  {
    image: '/bilder/ks-kunnskap/mockup-kurskatalog.webp',
    alt: 'Mockup på bærbar datamaskin av felles kurskatalog med kurskort i rutenett',
    title: 'Felles kurskatalog',
    desc: 'Kvalitetssikrede kurs fra hele sektoren, samlet ett sted.',
    width: 1800,
    height: 1225,
  },
  {
    image: '/bilder/ks-kunnskap/mockup-legemiddel.webp',
    alt: 'To mockups av legemiddelhåndteringskurset: modulliste på bærbar datamaskin og en åpen leksjon i nettleservindu',
    title: 'Legemiddelhåndtering',
    desc: 'Kurset med tilhørende passeringstest, vist som modulliste og åpen leksjon.',
    width: 1800,
    height: 1058,
  },
  {
    image: '/bilder/ks-kunnskap/mockup-leksjonsstudio.webp',
    alt: 'Mockup av leksjonsstudio med lysbildeliste til venstre og en åpen leksjon under redigering',
    title: 'Leksjonsstudio',
    desc: 'Forfatterverktøyet der kommunene bygger egne kurs av tekst, bilde, video og oppgaver.',
    width: 1800,
    height: 1290,
  },
  {
    image: '/bilder/ks-kunnskap/mockup-mobil.webp',
    alt: 'Mockup på mobil av mine læringsløp i KS Kunnskap',
    title: 'På mobil',
    desc: 'Plattformen fungerer på PC, nettbrett og mobil.',
    width: 444,
    height: 900,
    narrow: true,
  },
];
