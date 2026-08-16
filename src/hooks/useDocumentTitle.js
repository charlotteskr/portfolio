import { useEffect } from 'react';

// Erstatter <title> per side, som tidligere lå i hver enkelt .html-fil.
export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
