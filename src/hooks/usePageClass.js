import { useEffect } from 'react';

// Setter en klasse på <body> så lenge siden er montert. Brukes til å scope
// sidespesifikk CSS (f.eks. case-palettet) uten at den lekker til andre ruter.
export function usePageClass(className) {
  useEffect(() => {
    if (!className) return undefined;
    document.body.classList.add(className);
    return () => document.body.classList.remove(className);
  }, [className]);
}
