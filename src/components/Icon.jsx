// Strektegnede ikoner i én felles stil: 24×24-rutenett, avrundede ender og
// stroke i currentColor, slik at hvert ikon arver fargen fra elementet det
// står i. Erstatter emojiene som tidligere lå i innholdsdataene.

const paths = {
  // Samtale: snakkeboble med tre prikker.
  interview: (
    <>
      <rect x="3" y="4.5" width="18" height="13" rx="3" />
      <path d="M8 17.5v3.5l4.5-3.5" />
      <circle cx="8.5" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="11" r="1" fill="currentColor" stroke="none" />
    </>
  ),

  // Puslebrikke: tapp opp og til venstre, hakk til høyre.
  puzzle: (
    <path d="M7.75 5.25h2.65a2.6 2.6 0 0 1 5.2 0h2.65a2.5 2.5 0 0 1 2.5 2.5v2.65a2.6 2.6 0 0 0 0 5.2v2.65a2.5 2.5 0 0 1-2.5 2.5H7.75a2.5 2.5 0 0 1-2.5-2.5V15.6a2.6 2.6 0 0 1 0-5.2V7.75a2.5 2.5 0 0 1 2.5-2.5z" />
  ),

  // Analyse: akse med tre stolper i ulik høyde.
  chart: (
    <>
      <path d="M4 3.5v15.5a1.5 1.5 0 0 0 1.5 1.5H20.5" />
      <path d="M9 17.5V12" />
      <path d="M13.5 17.5V7.5" />
      <path d="M18 17.5v-3.5" />
    </>
  ),

  // Navigering: kompass med nål.
  compass: (
    <>
      <circle cx="12" cy="12" r="8.75" />
      <path d="M15.7 8.3 13.7 13.7 8.3 15.7 10.3 10.3z" />
    </>
  ),

  // Digital flate: mobilskjerm.
  phone: (
    <>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <path d="M10.5 5.75h3" />
      <circle cx="12" cy="18" r="1" fill="currentColor" stroke="none" />
    </>
  ),

  // Litteratur: oppslått bok.
  book: (
    <>
      <path d="M12 6.75v13" />
      <path d="M12 6.75C10.5 5.4 8.6 4.75 6.5 4.75H3v12.5h3.5c2.1 0 4 .65 5.5 2" />
      <path d="M12 6.75c1.5-1.35 3.4-2 5.5-2H21v12.5h-3.5c-2.1 0-4 .65-5.5 2" />
    </>
  ),
};

export function Icon({ name }) {
  const shape = paths[name];
  if (!shape) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {shape}
    </svg>
  );
}
