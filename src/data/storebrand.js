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
    desc: 'Jeg skisset løsningsforslagene teamet presenterte: ekspertoversikt, ekspertprofil og artikkelside med forfatterkobling.',
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
    desc: 'Dagens sider er lange og tettpakkede, med informasjonen spredt utover. Vi samlet ni grep — fra spørsmål som overskrifter til tabeller og FAQ — som til sammen gjør innholdet lettere å lese, både for kunden og for modellen.',
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
    desc: 'Én inngang til alle ekspertene, filtrerbar på forretningsområde og rolle. I dag ligger den samlede oversikten under presserommet, et sted kunder aldri går.',
    before: {
      title: 'Presse › Kontakter',
      note: '18 kort i et rutenett, ni merket «Pressekontakt» — og ingen som lenker videre.',
      image: '/bilder/storebrand/ekspertkort-presse.webp',
      alt: 'Siden Presse › Kontakter på storebrand.no med et rutenett av pressekontaktkort',
      width: 2392,
      height: 1340,
    },
    image: '/bilder/storebrand/eksperter-oversikt.webp',
    alt: 'Skisse av oversiktsside med filtrerbare ekspertkort på storebrand.no',
    width: 1400,
    height: 1887,
    tags: ['Filtrering', 'Én inngang', 'Skisse'],
  },
  {
    tab: 'Profil',
    title: 'Ekspertprofil',
    desc: 'Full profil med bio, fagområder, kontaktinfo og alt eksperten har skrevet eller kommentert. Det er på denne siden AI kan koble en uttalelse til en faktisk person.',
    before: {
      title: 'Et kort med kontaktinfo',
      note: 'Portrett, navn, avkortet tittel, e-post og telefon. Ingen bio, ingen fagområder.',
      image: '/bilder/storebrand/ekspertkort-idag.webp',
      alt: 'Statisk ekspertkort på storebrand.no med portrett, navn, avkortet tittel, e-post og telefonnummer',
      width: 946,
      height: 1035,
    },
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
    before: {
      title: 'En «Kontakter»-bolk etter brødteksten',
      note: 'De samme kortene står som avsendere av artikkelen, uten vei videre.',
      image: '/bilder/storebrand/ekspertkort-artikkel.webp',
      alt: 'Bunnen av en pressemelding på storebrand.no med bolken «Kontakter» og to kontaktkort',
      width: 1577,
      height: 1454,
    },
    image: '/bilder/storebrand/ekspert-artikkel.webp',
    alt: 'Skisse av artikkelside med tydelig forfatterkort som lenker til ekspertprofilen',
    width: 1200,
    height: 1452,
    tags: ['Schema.org', 'sameAs', 'Forfatterkort'],
  },
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

// ── TILTAK 02: INFORMASJONSARKITEKTUR ────────────────────────────────────
// De ni grepene teamet landet på for en AI-vennlig informasjonsarkitektur
// (slide 20 i sluttpresentasjonen). Satt sammen utgjør de oppskriften på en
// side en modell kan lese, forstå og sitere fra.
export const iaPrinciples = [
  {
    num: '01',
    title: 'Spørsmål som overskrifter',
    lead: 'H1, H2 og H3 formulert som reelle kundespørsmål.',
    desc: 'AI-en matcher spørsmålet den får mot overskriftene på siden. «Hva gjør jeg ved skade på bil?» treffer der «Bilskade» ikke gjør det.',
  },
  {
    num: '02',
    title: 'Brutt opp og visuelt',
    lead: 'Mindre løpende tekst, mer som engasjerer.',
    desc: 'Faktabokser, ikoner og korte avsnitt gjør at hvert svar står for seg selv i stedet for å drukne i en vegg av tekst.',
  },
  {
    num: '03',
    title: 'Svar-klare datablokker',
    lead: 'Fem til åtte blokker med tall og kildehenvisning.',
    desc: 'Hver blokk svarer på ett spørsmål og oppgir hvor tallet kommer fra. Det er slike biter en modell kan løfte ut og gjengi.',
  },
  {
    num: '04',
    title: 'Punktlister',
    lead: 'Gjør dataene tilgjengelige.',
    desc: 'Strukturert innhold foretrekkes av AI. En punktliste gir én påstand per linje, uten at modellen må dele opp et avsnitt selv.',
  },
  {
    num: '05',
    title: 'Brukeren i sentrum',
    lead: 'Sider bygget rundt behov, ikke produktnivå.',
    desc: 'Formuleringene tar utgangspunkt i kunden — «jeg» og «du» framfor produktnavn. Da ligner teksten på måten spørsmålet faktisk stilles.',
  },
  {
    num: '06',
    title: 'Intern lenkestruktur',
    lead: 'Lenker til relatert og relevant innhold.',
    desc: 'Å peke videre til den URL-en som er aktuell for kunden akkurat der, viser modellen hvordan innholdet henger sammen.',
  },
  {
    num: '07',
    title: 'Tabeller',
    lead: 'Enkelt for AI å sitere.',
    desc: 'En tabell gjør sammenligninger — dekning, egenandel, pris — direkte siterbare uten at modellen må tolke løpende tekst.',
  },
  {
    num: '08',
    title: 'Ekspertprofiler',
    lead: 'Kvalitetssikret innhold med navngitte bidragsytere.',
    desc: 'Ekspertise og tydelig avsender er særlig viktig. Et navn med rolle og kobling videre gjør innholdet til noe AI kan vise til.',
  },
  {
    num: '09',
    title: 'Utfyllende FAQ',
    lead: 'Bygget på hva, hvem, hvordan og når.',
    desc: 'En FAQ som dekker oppfølgingsspørsmålene blir særlig premiert, fordi den svarer på delspørsmålene AI-en genererer i bakgrunnen.',
  },
];

// Grepene vist i praksis. Bildene er utsnitt fra det omstrukturerte forslaget,
// med grepet markert. Vises i en fanevisning der bildet kan klikkes opp.
export const iaExamples = [
  {
    tab: '01 Spørsmål',
    title: 'Overskriften er spørsmålet kunden stiller',
    desc: 'Tittelen er skrevet om fra «Bilskade» til «Hva gjør jeg ved skade på bil?». Ingressen svarer i én setning, og merkingen «Kvalitetssikret innhold» står synlig sammen med forfatter og oppdateringsdato.',
    image: '/bilder/storebrand/ia/ia-01-sporsmal.webp',
    alt: 'Artikkeltopp der overskriften er formulert som spørsmålet «Hva gjør jeg ved skade på bil?»',
    width: 1600,
    height: 667,
  },
  {
    tab: '02 Visuelt',
    title: 'Faktaboksen løfter det viktigste ut av teksten',
    desc: 'Huskeregelen «sikre – varsle – hjelpe» ligger i en egen boks med ikon, med Norsk Luftambulanse oppgitt som kilde. Den står for seg selv og kan gjengis uten resten av avsnittet.',
    image: '/bilder/storebrand/ia/ia-02-visuelt.webp',
    alt: 'Faktaboks med ikon som gjengir huskeregelen «sikre – varsle – hjelpe» fra Norsk Luftambulanse',
    width: 1200,
    height: 261,
  },
  {
    tab: '04–05 Punktliste',
    title: 'Punktliste — og kunden som subjekt',
    desc: 'Dokumentasjonskravene er delt opp i punkter framfor et avsnitt. Under står neste overskrift skrevet fra kundens side: «Hvordan får jeg veihjelp hvis bilen stopper?» — «jeg», ikke «veihjelpsdekning».',
    image: '/bilder/storebrand/ia/ia-04-punktliste.webp',
    alt: 'Avsnitt med punktliste over dokumentasjonskrav, og en overskrift formulert i jeg-form',
    width: 1600,
    height: 667,
  },
  {
    tab: '06 Lenker i teksten',
    title: 'Lenker rett til handlingen kunden er ute etter',
    desc: 'Der teksten nevner å melde skade, ligger knappen som faktisk gjør det. Lenkene peker til den URL-en som er relevant akkurat i det avsnittet, ikke til en generell forside.',
    image: '/bilder/storebrand/ia/ia-06-internlenker.webp',
    alt: 'Avsnitt om å melde bilskade med knappen «Få veiledning og meld skade» rett under',
    width: 1600,
    height: 667,
  },
  {
    tab: '06 Relatert innhold',
    title: 'En «Se også» som binder temaene sammen',
    desc: 'Nederst ligger inngangene til nærliggende forsikringer. Det gir kunden en vei videre — og viser modellen hvilke sider som hører til samme tema.',
    image: '/bilder/storebrand/ia/ia-06-se-ogsa.webp',
    alt: '«Se også»-seksjon med lenkeknapper til hus-, person-, ulykkes-, reise- og helseforsikring',
    width: 1600,
    height: 667,
  },
  {
    tab: '07 Tabell',
    title: 'Dekningen satt opp som tabell',
    desc: 'Delkasko, kasko og super sammenlignet rad for rad. En modell kan lese ut «dekker kasko kollisjon?» direkte fra tabellen i stedet for å tolke et avsnitt med forbehold.',
    image: '/bilder/storebrand/ia/ia-07-tabell.webp',
    alt: 'Tabell som sammenligner hva delkasko, kasko og super dekker',
    width: 1600,
    height: 667,
  },
  {
    tab: '08 Eksperter',
    title: 'Navngitte eksperter under artikkelen',
    desc: 'Innholdet er signert av skadesjef og fagspesialist med bilde, rolle og tilhørighet. Det er koblingen mellom en påstand og en faktisk person AI-en ser etter.',
    image: '/bilder/storebrand/ia/ia-08-eksperter.webp',
    alt: 'Seksjonen «Storebrand ekspertise» med to ekspertkort: skadesjef og fagspesialist',
    width: 1600,
    height: 667,
  },
  {
    tab: '09 FAQ',
    title: 'FAQ som fanger opp oppfølgingsspørsmålene',
    desc: 'Hvem takserer skaden, når får jeg leiebil, hvor lang tid tar saken, hva skjer med bonusen. Det er nettopp slike delspørsmål AI-en genererer i bakgrunnen når noen spør om bilskade.',
    image: '/bilder/storebrand/ia/ia-09-faq.webp',
    alt: 'FAQ-seksjon med fire sammenslåtte spørsmål om taksering, leiebil, saksbehandlingstid og bonus',
    width: 1600,
    height: 667,
  },
];

// Det omstrukturerte forslaget i full lengde — de ni grepene satt sammen på
// én side. Sammenlignes med `storebrand-idag.webp`, som er dagens artikkel.
export const iaAfter = {
  image: '/bilder/storebrand/ia/storebrand-etter.webp',
  alt: 'Omstrukturert artikkelside på storebrand.no i full lengde, med spørsmålsoverskrifter, faktaboks, punktlister, tabell, ekspertkort og FAQ',
  width: 1100,
  height: 2196,
};
