// Innholdet på Storebrand-siden. Kilden er sluttpresentasjonen fra Sandbox
// 2026 (53 slides, «Team AI-søk»). Tall, sitater og skjermbilder er hentet
// derfra; formuleringene er skrevet om fra stikkord til brødtekst.

export const heroMeta = [
  { label: 'Rolle', value: 'UX-design og research' },
  { label: 'Kontekst', value: 'Sandbox 2026' },
  { label: 'Team', value: 'Team AI-søk' },
  { label: 'Leveranse', value: '7 tiltak + analyseverktøy' },
];

// Det som skiller tradisjonelt søk fra AI-søk. Brukes i sammenligningen
// øverst — venstre kolonne er «før», høyre er «nå».
export const searchShift = {
  before: {
    kind: 'Tradisjonelt søk',
    query: '«Bilforsikring»',
    steps: ['Google', 'Ti blå lenker', 'Du klikker på én'],
    note: 'Kunden gjør jobben selv, og Storebrand konkurrerer om klikket.',
  },
  after: {
    kind: 'AI-søk',
    query: '«Hva er den beste bilforsikringen i Norge?»',
    steps: ['AI tolker og deler opp', 'Mange søk i bakgrunnen', 'Ett samlet svar'],
    note: 'AI gjør jobben, og Storebrand konkurrerer om å være i svaret.',
  },
};

// Delspørsmålene AI-en genererer av ett enkelt spørsmål — «query fan-out».
export const fanOutQueries = [
  'Pris hos ulike selskaper',
  'Kasko vs. delkasko',
  'Egenandel og bonustap',
  'Dekning for elbil',
  'Kundetilfredshet',
  'Erfaring med skadeoppgjør',
  'Unntak i vilkårene',
  'Nyeste tester og prisdata',
];

// Mitt bidrag i prosjektet. Teamet leverte sju tiltak samlet; dette er
// delene jeg selv sto for.
export const contributions = [
  {
    icon: 'interview',
    title: 'Fire brukerintervjuer',
    desc: 'Jeg gjennomførte fire intervjuer om hvordan folk faktisk bruker AI når de skal velge forsikring og pensjon — og hva de stoler på i svaret de får.',
  },
  {
    icon: 'compass',
    title: 'Research på informasjonsarkitektur',
    desc: 'Jeg kartla hvordan innholdet på storebrand.no henger sammen i dag, og hvor strukturen gjør det vanskelig for en modell å finne og forstå det som står der.',
  },
  {
    icon: 'phone',
    title: 'Skisser og prototyper',
    desc: 'Jeg skisset løsningsforslagene teamet presenterte: ekspertoversikt, ekspertprofil, artikkelside med forfatterkobling og synliggjøring av tredjepartsomtaler.',
  },
  {
    icon: 'book',
    title: 'Wikipedia-research',
    desc: 'Jeg gikk gjennom Storebrands Wikipedia-artikkel og fant utdaterte nøkkeltall — et lavthengende tiltak, siden Wikipedia er den nest mest siterte kilden i AI-svar.',
  },
  {
    icon: 'chart',
    title: 'Tilbakemeldinger på analyseverktøyet',
    desc: 'Verktøyet ble bygget med vibe-koding av teamet. Jeg kodet det ikke selv, men bidro sammen med de andre med tilbakemeldinger på hva det burde måle og hvordan tallene skulle presenteres.',
  },
  {
    icon: 'puzzle',
    title: 'Copilot Cowork i prosessen',
    desc: 'Jeg brukte Copilot Cowork aktivt gjennom hele prosjektet — til å strukturere research, teste formuleringer og komme raskere fra innsikt til skisse.',
  },
];

// De sju tiltakene teamet landet på. `mine` markerer dem jeg jobbet direkte
// med, og styrer hvilke kort som får uthevet ramme.
export const measures = [
  {
    num: '01',
    title: 'Topic clusters',
    lead: 'Når AI søker for oss, endres reglene for SEO.',
    desc: 'Én hovedside per tema, omkranset av artikler som dekker hvert delspørsmål og lenker tilbake. Da finner modellen et helt svar på ett sted i stedet for åtte halve.',
  },
  {
    num: '02',
    title: 'Informasjonsarkitektur',
    lead: 'AI foretrekker struktur og enkelhet.',
    desc: 'Dagens sider er lange og tettpakkede, med informasjonen spredt utover. En ryddigere struktur gjør innholdet lettere å lese — både for kunden og for modellen.',
    mine: true,
  },
  {
    num: '03',
    title: 'LLMS.txt',
    lead: 'AI foretrekker en ryddig vei inn.',
    desc: 'En innholdsfortegnelse skrevet for maskiner, på storebrand.no/llms.txt. Et enkelt grep som peker modellen rett til innholdet Storebrand vil bli sitert på.',
  },
  {
    num: '04',
    title: 'Tallkonsistens',
    lead: 'AI belønner konsistens og straffer feil.',
    desc: 'Samme tall skrevet inn manuelt på flere sider blir før eller siden ulikt. Ett tallregister som sidene henter verdien fra, fjerner motsigelsene.',
  },
  {
    num: '05',
    title: 'Ekspertprofiler',
    lead: 'AI foretrekker erfaring, ekspertise, autoritet og tillit.',
    desc: 'Storebrand har ekspertene, men de ligger som spredte, statiske kort. Samlet i et ekspertunivers med profiler, artikler og maskinlesbare koblinger blir de en kilde AI kan vise til.',
    mine: true,
  },
  {
    num: '06',
    title: 'Tredjepartsomtaler',
    lead: 'AI foretrekker eksterne omtaler og kundeerfaringer.',
    desc: 'Oppfordre til flere omtaler, svare på dem, og løfte vurderingene fram der AI faktisk kan lese dem.',
    mine: true,
  },
  {
    num: '07',
    title: 'Wikipedia',
    lead: 'AI foretrekker objektivitet og oppdatert innhold.',
    desc: 'Wikipedia er den nest mest siterte kilden i AI-svar. Storebrands artikkel oppga nøkkeltall fra 2019 — å oppdatere den er lite arbeid og stor effekt.',
    mine: true,
  },
];

// Prototypene jeg skisset for ekspertuniverset. Vises i en fanevisning der
// bildet kan klikkes opp i full størrelse.
export const expertPrototypes = [
  {
    tab: 'Oversikt',
    title: 'Oversiktsside for eksperter',
    desc: 'Én inngang til alle ekspertene, filtrerbar på forretningsområde og rolle. I dag finnes profilene bare som løsrevne kontaktkort under pressesider.',
    image: '/bilder/storebrand/eksperter-oversikt.webp',
    alt: 'Skisse av oversiktsside med filtrerbare ekspertkort på storebrand.no',
    width: 1400,
    height: 1887,
    tags: ['Filtrering', 'Én inngang', 'Skisse'],
  },
  {
    tab: 'Profil',
    title: 'Ekspertprofil',
    desc: 'Full profil med bio, fagområder, kontaktinfo og alt eksperten har skrevet eller kommentert. Det er denne siden AI kan koble en uttalelse til en faktisk person.',
    image: '/bilder/storebrand/ekspertprofil.webp',
    alt: 'Skisse av fullverdig ekspertprofil med bio, fagområder og artikkelliste',
    width: 1000,
    height: 2056,
    tags: ['Bio', 'Artikkelliste', 'Fagområder'],
  },
  {
    tab: 'Artikkel',
    title: 'Artikkel med forfatterkobling',
    desc: 'Artikkelen viser hvem som står bak, og lenker til profilen. Tre koblinger gjør den lesbar for AI: synlig lenke, schema-markup og sameAs mot LinkedIn og eksterne omtaler.',
    image: '/bilder/storebrand/ekspert-artikkel.webp',
    alt: 'Skisse av artikkelside med tydelig forfatterkort som lenker til ekspertprofilen',
    width: 1200,
    height: 1452,
    tags: ['Schema.org', 'sameAs', 'Forfatterkort'],
  },
];

// De tre grepene for tredjepartsomtaler.
export const reviewActions = [
  {
    num: '1',
    title: 'Oppfordre',
    desc: 'Systematiske invitasjoner høsten 2025 ga rask effekt: Storebrand gikk fra 1,7 til 4,1 på Trustpilot og klatret 13 plasser på Bytt.no.',
  },
  {
    num: '2',
    title: 'Svare',
    desc: 'Storebrand svarer allerede på omtaler, men svarene signeres med fornavn alene. Tydeligere avsender gjør dem mer troverdige — for kunden og for modellen.',
  },
  {
    num: '3',
    title: 'Synliggjøre',
    desc: 'Løfte vurderingene inn på produktsidene, slik at AI leser dem der den allerede henter informasjon om produktet.',
  },
];

// Nøkkeltall fra Trustpilot og Bytt.no etter at invitasjonene startet.
export const reviewStats = [
  { value: '1,7 → 4,1', label: 'Trustpilot', note: '1 108 omtaler' },
  { value: '2,6 → 3,3', label: 'Bytt.no', note: '+13 plasser' },
];

// Domenene AI-tjenester siterer oftest (Semrush, jan. 2026). Grunnlaget for
// Wikipedia-tiltaket.
export const citedDomains = [
  { name: 'Reddit', share: 40.1 },
  { name: 'Wikipedia', share: 26.3, highlight: true },
  { name: 'YouTube', share: 23.5 },
  { name: 'Google', share: 23.3 },
  { name: 'Yelp', share: 21.0 },
];

export const reflection = [
  'Prosjektet handlet like mye om innhold som om grensesnitt. Det meste av det som avgjør om Storebrand havner i et AI-svar, er strukturen bak sidene — ikke hvordan de ser ut.',
  'Det jeg tar med meg videre er hvor kort veien er fra research til noe konkret: fire intervjuer og en gjennomgang av informasjonsarkitekturen ga nok til å skissere en løsning teamet kunne bygge videre på.',
];
