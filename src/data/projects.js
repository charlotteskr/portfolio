// Én kilde til sannhet for prosjektene: styrer både lenkelista på forsiden
// og rutene. Nytt prosjekt = én linje her (+ en egen side hvis custom: true).
export const projects = [
  { slug: 'storebrand', label: 'storebrand', title: 'Storebrand', custom: true },
  { slug: 'ks-kunnskap', label: 'ks kunnskap', title: 'KS Kunnskap', custom: true },
  { slug: 'mjospromenaden', label: 'mjøspromenaden', title: 'Mjøspromenaden', custom: true },
  { slug: 'smart', label: 'smArt', title: 'smArt', custom: true },
];

// Prosjektene som fortsatt bruker den generiske «under arbeid»-malen.
export const stubProjects = projects.filter((p) => !p.custom);
