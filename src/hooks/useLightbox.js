import { useEffect, useRef } from 'react';

// Alle fire case-sidene har den samme lightboxen: et overlegg med role="dialog"
// og aria-modal="true" som forstørrer ett bilde. Escape og scrollåsen lå fra før
// bare på Mjøspromenaden, og ingen av sidene gjorde noe med fokus — man kunne
// tabbe rett forbi overlegget og videre inn i siden bak, som skjermlesere får
// beskjed om å ignorere så lenge aria-modal står. Denne hooken samler det som
// skal til for at dialogen faktisk oppfører seg som en dialog:
//
//   · Escape lukker
//   · siden bak fryses, så man ikke scroller bort fra bildet
//   · fokus flyttes inn i overlegget når det åpnes
//   · Tab går i ring innenfor overlegget i stedet for ut av det
//   · fokus går tilbake til knappen man åpnet fra når det lukkes
//
// Returnerer en ref som skal settes på selve overleggselementet.
export function useLightbox(isOpen, onClose) {
  const dialogRef = useRef(null);
  // Knappen som hadde fokus da overlegget ble åpnet. Uten den lander fokus på
  // <body> etter lukking, og man må tabbe seg ned gjennom hele siden igjen.
  const openerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    openerRef.current = document.activeElement;
    const dialog = dialogRef.current;

    // Lukkeknappen er det eneste fokuserbare i overlegget, men vi slår opp
    // bredt så hooken holder om markupen får flere elementer senere.
    const focusable = () =>
      dialog
        ? [...dialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')]
            .filter((el) => !el.hasAttribute('disabled'))
        : [];

    focusable()[0]?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;

      const items = focusable();
      if (items.length === 0) {
        // Ingenting å flytte fokus til — hold det på overlegget framfor å
        // slippe det ut i siden bak.
        event.preventDefault();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      // Bare ta fokus tilbake hvis det fortsatt står i overlegget — ellers
      // ville vi stjålet det fra noe brukeren rakk å klikke på.
      if (!dialog || dialog.contains(document.activeElement) || document.activeElement === document.body) {
        openerRef.current?.focus?.();
      }
    };
  }, [isOpen, onClose]);

  return dialogRef;
}
