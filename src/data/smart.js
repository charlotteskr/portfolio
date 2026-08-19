// Innholdet på smArt-siden. Kilden er de seks plakatene fra prosjektet, som
// er skrevet på engelsk — teksten her er oversatt til norsk for å være
// konsistent med resten av porteføljen. Sitatet og problemstillingen er
// beholdt tett opp mot originalformuleringen.

export const heroMeta = [
  { label: 'Rolle', value: 'UX-designer' },
  { label: 'Team', value: '3 UX + 3 utviklere' },
  { label: 'Metode', value: 'Double Diamond' },
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
    methods: ['Hovedfunn', 'Problemstilling', 'Brukerflyt', 'Konkurrentanalyse'],
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

export const insights = [
  {
    icon: 'interview',
    color: 'var(--phase-discover)',
    title: 'Brukerintervju',
    desc: 'Seks personer ble intervjuet om sitt forhold til smartspeil og kunst. Svarene ble sortert i et affinitetsdiagram.',
  },
  {
    icon: 'puzzle',
    color: 'var(--phase-define)',
    title: 'Affinitetsdiagram',
    desc: 'Utsagnene fra intervjuene ble gruppert i ti temaer som viste hvor stor variasjon det var i kunstkunnskap og forventninger.',
  },
  {
    icon: 'compass',
    color: 'var(--phase-develop)',
    title: 'Ekspertintervju',
    desc: 'Vi snakket med designlederen ved Innlandet Vitensenter om hva interaktive utstillinger krever, og hvilke fallgruver vi burde unngå.',
  },
  {
    icon: 'chart',
    color: 'var(--phase-deliver)',
    title: 'Konkurrentanalyse',
    desc: 'Tre eksisterende løsninger ble kartlagt for å forstå hva smArt måtte gjøre annerledes enn det som allerede fantes.',
  },
];

// Klyngene fra affinitetsdiagrammet, oversatt. Rekkefølgen følger plakaten.
export const affinityClusters = [
  'Brukerne vet hva et smartspeil er, men har lite førstehåndserfaring',
  'Brukerne har ulike ønsker for hva et smartspeil skal kunne',
  'Skepsis og bekymring for at kunst blir for lett tilgjengelig',
  'Flere ønsket en måte å bli en del av kunsten på',
  'Smartspeil oppfattes som et tilgjengelig og hverdagslig objekt',
  'Folk foretrekker ulike måter å lære om kunst på',
  'Nøytralt eller positivt forhold til interaktiv læring',
  'Brukerne vil ha lettfattelig informasjon som unngår kognitiv overbelastning',
  'Noen ønsker en dypere og mer teknisk forståelse av kunst',
  'Kunnskapen om kunst varierer sterkt mellom brukerne',
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

// Merkevaren er definert i prosjektet selv — verdiene er hentet rett fra
// designmanualen på plakat 5 og gjenbrukes som sidens palett.
export const brandColors = [
  { name: 'Bakgrunn', hex: '#F0E8D9' },
  { name: 'Tekst', hex: '#2D2C29' },
  { name: 'Modal', hex: '#D4BD91' },
  { name: 'Knapp', hex: '#7A0B0B' },
  { name: 'Knapp', hex: '#3B6246' },
];

export const brandType = [
  { role: 'Overskrift 1', font: 'Albert Sans', weight: 'Regular' },
  { role: 'Overskrift 2', font: 'Aboreto', weight: 'Regular' },
  { role: 'Brødtekst', font: 'Akatab', weight: 'Regular / Bold' },
];

export const flowSteps = [
  { title: 'Velg kunststil', desc: 'Brukeren blar gjennom seks kunststiler med kontrolleren.' },
  { title: 'Infoside', desc: 'Stilen forklares kort, med kjennetegn og eksempler fra kjente kunstnere.' },
  { title: 'Ta bilde', desc: 'Et webkamera fanger ansiktet når brukeren er klar.' },
  { title: 'Genererer', desc: 'Lasteskjermen viser framdrift og en fun fact mens AI-en jobber.' },
  { title: 'Kunsten er ferdig', desc: 'Resultatet vises med tittel og stil — et unikt digitalt kunstverk.' },
  { title: 'Del til galleriet', desc: 'Brukeren velger selv om verket skal vises i smArt Gallery i 12 timer.' },
];
