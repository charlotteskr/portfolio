// Innholdet på smArt-siden. Kilden er de seks plakatene fra prosjektet, som
// er skrevet på engelsk — teksten her er oversatt til norsk for å være
// konsistent med resten av porteføljen. Sitatet og problemstillingen er
// beholdt tett opp mot originalformuleringen.

export const heroMeta = [
  { label: 'Rolle', value: 'UX-designer' },
  { label: 'Tidsbruk', value: '4 måneder' },
  { label: 'Kontekst', value: 'Skoleoppgave i IoT' },
  { label: 'Leveranse', value: 'Interaktiv utstilling' },
];

export const team = [
  { name: 'Charlotte Skråmestø', role: 'UX-design', me: true },
  { name: 'Jakob W. Putkowski', role: 'UX-design' },
  { name: 'Hedda S. Undseth', role: 'UX-design' },
  { name: 'Andreas Christiansen', role: 'Fullstack' },
  { name: 'Christopher Ngo', role: 'Frontend' },
  { name: 'Ola Nikolai Skjeret', role: 'Backend' },
];

export const processPhases = [
  {
    tag: 'Fase 01',
    title: 'Discover',
    accent: 'var(--phase-discover)',
    desc: 'Forstå brukerens perspektiv og behov gjennom research og innsiktsmetoder.',
    methods: ['Brukerintervju', 'Affinitetsdiagram', 'Ekspertintervju', 'Hypotesebygger'],
  },
  {
    tag: 'Fase 02',
    title: 'Define',
    accent: 'var(--phase-define)',
    desc: 'Ramme inn problemet på nytt og definere brukerflyten for løsningen.',
    methods: [
      'Hovedfunn',
      'Problemstilling',
      'Brukerflyt',
      'Konkurrentanalyse',
      'Brainstorming',
      'Kunstbefaring',
    ],
  },
  {
    tag: 'Fase 03',
    title: 'Develop',
    accent: 'var(--phase-develop)',
    desc: 'Prioritere krav, vurdere styringsalternativer og utvikle wireframes.',
    methods: ['MoSCoW', 'Kontrollervurdering', 'Wireframes', 'Visuell identitet'],
  },
  {
    tag: 'Fase 04',
    title: 'Deliver',
    accent: 'var(--phase-deliver)',
    desc: 'Bygge og sette sammen den ferdige utstillingen med AI og Web of Things.',
    methods: ['Ferdig grensesnitt', 'Fysiske elementer', 'WoT-oppsett', 'Plakater'],
  },
];

// Seks kort i tre spalter. Fargene sykler gjennom de fire fasefargene i
// rekkefølge, slik at ingen naboer i rutenettet får samme farge.
export const insights = [
  {
    icon: 'notes',
    color: 'var(--phase-discover)',
    title: 'Brainstorming og hypoteser',
    desc: 'Teamet satte seg sammen og skrev ned antakelsene våre om prosjektet på post-it-lapper. Det ga oss ett felles utgangspunkt og gjorde tydelig hva vi faktisk måtte finne ut.',
  },
  {
    icon: 'interview',
    color: 'var(--phase-define)',
    title: 'Brukerintervju',
    desc: 'Seks personer ble intervjuet om sitt forhold til smartspeil og kunst. Svarene ble sortert i et affinitetsdiagram.',
  },
  {
    icon: 'puzzle',
    color: 'var(--phase-develop)',
    title: 'Affinitetsdiagram',
    desc: 'Utsagnene fra intervjuene ble gruppert i ti temaer som viste hvor stor variasjon det var i kunstkunnskap og forventninger.',
  },
  {
    icon: 'hand',
    color: 'var(--phase-deliver)',
    title: 'Innlandet Vitensenter',
    desc: 'Vi fikk omvisning og prøvde de interaktive utstillingene selv. Å stå i rommet viste hva som faktisk holder på oppmerksomheten, og hva som bare ser bra ut på papiret.',
  },
  {
    icon: 'compass',
    color: 'var(--phase-discover)',
    title: 'Ekspertintervju',
    desc: 'Vi snakket med designlederen ved Innlandet Vitensenter om hva interaktive utstillinger krever, og hvilke fallgruver vi burde unngå.',
  },
  {
    icon: 'chart',
    color: 'var(--phase-define)',
    title: 'Konkurrentanalyse',
    desc: 'Tre eksisterende løsninger ble kartlagt for å forstå hva smArt måtte gjøre annerledes enn det som allerede fantes.',
  },
];

export const findings = [
  {
    label: 'Funn 01',
    title: 'Læring skal være gøy',
    desc: 'Folk vil ha en interaktiv og morsom måte å lære om kunst på, ikke en passiv formidling.',
  },
  {
    label: 'Funn 02',
    title: 'Enkel og tilgjengelig informasjon',
    desc: 'Informasjonen må være lett å ta inn. Terskelen mellom for lite og for mye tekst er lav.',
  },
  {
    label: 'Funn 03',
    title: 'Å se seg selv i kunsten',
    desc: 'Brukerne liker tanken på å gjenkjenne seg selv gjennom kunstverket — det skaper en personlig kobling.',
  },
  {
    label: 'Funn 04',
    title: 'Skepsis til AI og kunst',
    desc: 'Det er en generell bekymring for forholdet mellom kunstig intelligens og kunst som løsningen må ta på alvor.',
  },
];

export const competitors = [
  {
    name: 'Gallery One',
    kind: 'Interaktiv kunst',
    value:
      'Ansiktsgjenkjenning matcher den besøkendes uttrykk mot ett av 189 kunstverk i samlingen, og resultatet vises som fotostriper ved inngangen. Besøkende blir også bedt om å imitere positurer fra skulpturer og får tilbakemelding på hvor treffsikre de er.',
    pros: [
      'Stort utvalg kunstverk å imitere',
      'Personlig kobling gjennom likhet i ansiktstrekk',
      'Eierskap til resultatet — bildet kan sendes på e-post',
      'Umiddelbar belønning',
    ],
    cons: [
      'Kan gi overflatisk engasjement framfor dypere forståelse',
      'Lite kontekst om kunstverkene som etterlignes',
    ],
  },
  {
    name: 'Google Arts & Culture',
    kind: 'Kunstfilter i app',
    value:
      'Art Filter lar brukeren virtuelt «ha på seg» kjente kunstverk og historiske gjenstander med utvidet virkelighet (AR). I stedet for å se på kunsten kan man oppleve seg selv som ikoniske skikkelser, som Van Gogh eller Frida Kahlo.',
    pros: [
      'Tilgjengelig for alle med en smarttelefon',
      'Gir tilgang til museer man aldri ville besøkt fysisk',
      'Høy teknisk kvalitet på ansiktsgjenkjenning og AR',
      'Lett å dele — selfies og korte videoer',
    ],
    cons: [
      'Man lærer ikke nødvendigvis noe om originalverket',
      'Ansiktsgjenkjenning reiser personvernspørsmål',
      'Penselstrøk, tekstur og materialbruk går tapt',
      'Brukes ofte én gang og glemmes',
    ],
  },
  {
    name: 'Théâtre des Lumières',
    kind: 'Immersiv utstilling',
    value:
      'Kunstverk projiseres på vegger, gulv og tak i stor skala, med spesialkomponert musikk og lyd. Publikum beveger seg fritt i rommet og opplever verkene fra ulike vinkler.',
    pros: [
      'Teknologi og kunstnerskap smelter sammen til noe nytt',
      'Moderne, digitalt format som treffer et bredere publikum',
      'Innholdet kan enkelt byttes ut med nye temaer og kunstnere',
    ],
    cons: [
      'Originalens penselstrøk og materialitet forsvinner',
      'Vekten på sanseinntrykk kan gi en overflatisk forståelse',
      'Tekniske feil forringer hele opplevelsen',
    ],
  },
];

export const moscow = [
  {
    level: 'Må ha',
    variant: 'must',
    items: [
      'Skjerm',
      'Kamera for å ta bilde',
      'AI-generert bilde',
      'Informasjon om hvor lenge bildene lagres',
      'Personvern og samtykke',
      'Fjernkontroll',
      'Utvalg av kunststiler',
    ],
  },
  {
    level: 'Bør ha',
    variant: 'should',
    items: [
      'Forklaring av kunststilen',
      'Kjennetegn ved kunststilen',
      'Norsk og engelsk språk',
      'Bilder fra relevante kjente kunstnere',
      'GDPR-informasjon og mulighet for å ikke lagre bildet',
    ],
  },
  {
    level: 'Kan ha',
    variant: 'could',
    items: [
      'To skjermer',
      'Fun fact',
      'Bilderamme',
      'Historikk over genererte bilder',
      'Mulighet for å kjøpe bildet (magnet o.l.)',
      'Mulighet for å redigere prompten',
    ],
  },
  {
    level: 'Ikke nå',
    variant: 'wont',
    items: ['AR', 'Kontrollpanel med taktile knapper', 'Berøringsskjerm', 'Stemmestyring'],
  },
];

export const controllers = [
  {
    name: 'Fysiske knapper',
    pros: ['Taktil tilbakemelding gir bedre universell utforming', 'Mer robuste knapper', 'Kan plasseres bort fra skjermen, så brukeren stiller seg riktig for bildet'],
    cons: ['Begrenset funksjonalitet', 'Krevende å implementere'],
  },
  {
    name: 'Stemmestyring',
    pros: ['Bedre universell utforming', 'Berøringsfri og intuitiv'],
    cons: ['Krever et stille miljø', 'Kan oppleves ubehagelig å bruke offentlig'],
  },
  {
    name: 'Berøringsskjerm',
    pros: ['Intuitiv for brukeren', 'Støtter multitouch som sveip og zoom'],
    cons: ['Må rengjøres for fingeravtrykk', 'Krever berøringsskjerm', 'Krevende å implementere', 'Svakere universell utforming'],
  },
  {
    name: 'QR-kode til telefon',
    pros: ['Enkel å implementere', 'Støtter multitouch som sveip og zoom'],
    cons: ['Krever en telefon som kan skanne QR-kode', 'Ikke alle har eller vil bruke telefonen sin', 'Én bruker kan overstyre andres opplevelse', 'Svakere universell utforming'],
  },
  {
    name: 'Enkel fjernkontroll',
    pros: ['Krever minimal installasjon', 'Intuitiv', 'Taktil og bedre universelt utformet'],
    cons: ['Krevende å implementere', 'Kan bli borte'],
  },
];

// Logoene fra designmanualen. Begge er tegnet i samme mørke blekk uten egen
// bakgrunn, og står derfor på hvit flate i seksjonen.
export const brandLogos = [
  {
    image: '/bilder/smart/primaerlogo.svg',
    name: 'Primærlogo',
    desc: 'Navnet er et ordspill: «smart» peker på AI-funksjonene, «Art» på kunsten. Ordmerket er satt i en serif for et stilrent og klassisk uttrykk, og tverrstreken i A-en er byttet ut med et glimt — ikonet som har blitt synonymt med AI.',
    alt: 'Primærlogoen: ordmerket smArt mellom to streker, der tverrstreken i A-en er et firestrålet glimt, med underteksten «An interactive Ai art exibition»',
    width: 256,
    height: 87,
  },
  {
    image: '/bilder/smart/sekundaerlogo.svg',
    name: 'Sekundærlogo',
    desc: 'Logoen blir brukt for å skille galleriet, der de AI-genererte bildene blir delt og vist.',
    alt: 'Sekundærlogoen: ordmerket smArt på én linje, etterfulgt av et firestrålet glimt og ordet Gallery',
    width: 260,
    height: 65,
  },
];

// Merkevaren er definert i prosjektet selv — verdiene er hentet rett fra
// designmanualen på plakat 5 og gjenbrukes som sidens palett.
export const brandColorGroups = [
  {
    title: 'Primærfarge',
    colors: [
      // Den lyse beigen forsvinner mot papirflata, så prøven får grå ramme i
      // stedet for den tonede --line.
      { name: 'Bakgrunn', hex: '#F0E8D9', border: '#A8A8A8' },
      { name: 'Tekst', hex: '#2D2C29' },
      { name: 'Modal', hex: '#D4BD91' },
      { name: 'Knapp', hex: '#7A0B0B' },
      { name: 'Knapp', hex: '#3B6246' },
    ],
  },
  {
    // De seks tonene grensesnittet bruker på hover. Verdiene er de samme som
    // --phase-* og --tone-* i smart.css.
    title: 'Hover state',
    colors: [
      { name: 'Lilla', hex: '#D8A7E4' },
      { name: 'Blå', hex: '#9D9FC5' },
      { name: 'Rød', hex: '#E28585' },
      { name: 'Oransje', hex: '#DF8E53' },
      { name: 'Gul', hex: '#F2D759' },
      { name: 'Grønn', hex: '#7DBF68' },
    ],
  },
];

// De fire illustrasjonene fra designmanualen, tegnet i Illustrator. De går
// igjen på sidene for hver kunststil — tre av dem som kjennetegnene ved
// stilen, slik infosiden i flytkartet lenger ned viser.
//
// Filene er SVG-er som pakker inn et punktbilde, ikke ekte vektorstrek. De
// vises derfor i én fast høyde og skaleres ikke opp over den.
export const brandIllustrations = [
  {
    image: '/bilder/smart/fakta.svg',
    name: 'Fakta',
    desc: 'Lyspæra markerer det korte du bør vite om stilen.',
    alt: 'Håndtegnet lyspære med stråler ut til sidene, fylt i oransje',
  },
  {
    image: '/bilder/smart/farge.svg',
    name: 'Farge',
    desc: 'Paletten står for fargebruken stilen bygger på.',
    alt: 'Håndtegnet malerpalett med seks fargeklatter',
  },
  {
    image: '/bilder/smart/komposisjon.svg',
    name: 'Komposisjon',
    desc: 'Trekantene i vifte viser vinkler, linjer og hvordan flata deles.',
    alt: 'Håndtegnede trekanter lagt i vifte som en spiral',
  },
  {
    image: '/bilder/smart/foelelse.svg',
    name: 'Følelse',
    desc: 'To ansikter i samme strek, ett glad og ett trist, for stemningen.',
    alt: 'To håndtegnede ansikter som overlapper hverandre, det ene smiler og det andre er trist',
  },
];

// Fontene er lastet fra Google Fonts i index.html. `stack` brukes til å sette
// navnet på hver font i fonten den beskriver, slik at lista blir en prøve.
// Beskrivelsene er kortet ned fra fontenes egne tekster på Google Fonts.
export const brandType = [
  {
    role: 'Overskrift 1',
    font: 'Albert Sans',
    weight: 'Regular',
    stack: "'Albert Sans', sans-serif",
    desc: 'Geometrisk grotesk av Andreas Rasmussen, inspirert av skandinaviske arkitekter og formgivere fra tidlig 1900-tall. Ti vekter, fra Thin til Black.',
  },
  {
    role: 'Overskrift 2',
    font: 'Aboreto',
    weight: 'Regular',
    stack: "'Aboreto', serif",
    desc: 'Display-font bygget på renessansens majuskler, etter bokstavene til den florentinske billedhuggeren Luca della Robbia. Finnes i én vekt.',
  },
  {
    role: 'Brødtekst',
    font: 'Akatab',
    weight: 'Regular / Bold',
    stack: "'Akatab', sans-serif",
    desc: 'Laget av SIL for tifinagh-skrift, men dekker også det latinske alfabetet i seks vekter fra Regular til Black.',
  },
];

// De to fysiske delene av utstillingen: flata verket vises på, og tingen
// brukeren styrer den med.
export const physical = [
  {
    image: '/bilder/smart/ramme.webp',
    title: 'Rammen',
    desc: 'Skjermen står i en utskåret treramme. Det digitale verket møter besøkende som et maleri på veggen, ikke som en skjerm — utstillingen skulle kjennes som et museum.',
    alt: 'Svart skjerm montert i en utskåret treramme med ornamenter i hvert hjørne',
    width: 344,
    height: 240,
  },
  {
    image: '/bilder/smart/kontroller.webp',
    title: 'Kontrolleren',
    desc: 'Navigeringen skjer fra en mobil i en holder ved siden av rammen. Fire retningsknapper og én midtknapp — det er hele grensesnittet brukeren holder i.',
    alt: 'Mobil i en blå holder som viser kontrolleren: fire retningsknapper rundt en midtknapp',
    width: 115,
    height: 257,
  },
];

// Flytkartet over den ferdige prototypen. Rekkefølgen er den samme som i
// Figma-prototypen: startskjerm → stil → infoside → bilde → generering →
// resultat → galleri.
//
// trigger er teksten på pila ut av skjermen — altså hva klikket fører til.
export const walkthrough = [
  {
    title: 'Velg kunststil',
    desc:
      'Startskjermen viser seks kunststiler til venstre og et direktebilde fra webkameraet til høyre, så brukeren ser seg selv med en gang. Stilen som markeres, får sin egen farge — markeringen må leses på avstand.',
    image: '/bilder/smart/01-velg-stil.webp',
    alt: 'Startskjermen i smArt med seks kunststiler til venstre og direktebilde fra webkameraet til høyre',
    width: 1920,
    height: 1200,
    trigger: 'Velger en stil',
  },
  {
    title: 'Les om stilen',
    desc:
      'Infosiden forklarer stilen kort, viser tre kjennetegn som ikoner, og eksempler på hva andre besøkende har generert i samme stil.',
    image: '/bilder/smart/03-infoside.webp',
    alt: 'Infoside om ekspresjonisme med beskrivelse, tre kjennetegn og eksempelbilder fra andre besøkende',
    width: 1920,
    height: 1200,
    trigger: 'Gjør seg klar',
  },
  {
    title: 'Klar til å ta bildet',
    desc:
      'Brukeren kan gå tilbake eller ta bildet. Webkameraet står fortsatt på, så man rekker å stille seg riktig før utløseren.',
    image: '/bilder/smart/04-ta-bilde.webp',
    alt: 'Infosiden med knappene «go back» og «take picture» framhevet',
    width: 1920,
    height: 1200,
    trigger: 'Bildet sendes til AI-en',
  },
  {
    title: 'AI-en jobber',
    desc:
      'Lasteskjermen fyller ventetiden med en fun fact om stilen og kjente verk innenfor den. En varsling sier tydelig fra at bildet ikke lagres.',
    image: '/bilder/smart/05-genererer.webp',
    alt: 'Lasteskjerm med teksten «generating your art», en fun fact om ekspresjonisme og tre kjente verk',
    width: 1920,
    height: 1200,
    trigger: 'Ingen klikk — skjermen går videre selv',
  },
  {
    title: 'Kunsten er ferdig',
    desc:
      'Verket får tittel og stil. Brukeren velger selv om det skal deles, og en nedtelling sender skjermen tilbake til start når ingen svarer.',
    image: '/bilder/smart/06-ferdig.webp',
    alt: 'Resultatskjermen med det AI-genererte portrettet «The smiling man» i ekspresjonistisk stil',
    width: 1920,
    height: 1200,
    trigger: 'Deler verket',
  },
  {
    title: 'smArt Gallery',
    desc:
      'Delte verk vises på en egen skjerm i utstillingen i tolv timer, med tittel, stil og tidspunkt under.',
    image: '/bilder/smart/07-galleri.webp',
    alt: 'smArt Gallery — en skjerm som viser tre AI-genererte kunstverk fra besøkende',
    width: 1920,
    height: 1365,
    trigger: null,
  },
];
