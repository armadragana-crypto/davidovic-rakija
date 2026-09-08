import { useEffect, useRef, useState } from 'react';
import { ZDRAVICA_ZOV } from './Zdravica';

/* The last line of the site. It waits in the dark until someone actually
   reaches the bottom, then lights up, and answers a tap with the same toast
   the keyboard calls up. */
export default function Podnozje() {
  const okvir = useRef<HTMLElement>(null);
  const [vidljivo, setVidljivo] = useState(false);

  useEffect(() => {
    const cilj = okvir.current;
    if (!cilj) return undefined;

    const posmatrac = new IntersectionObserver(([zapis]) => setVidljivo(zapis.isIntersecting), {
      threshold: 0.85
    });
    posmatrac.observe(cilj);

    return () => posmatrac.disconnect();
  }, []);

  return (
    <footer ref={okvir} className={`podnozje ${vidljivo ? 'je-vidljivo' : ''}`}>
      <span className="podnozje-crta" aria-hidden="true" />
      <button
        type="button"
        className="podnozje-poruka"
        onClick={() => window.dispatchEvent(new Event(ZDRAVICA_ZOV))}
      >
        Hvala što ste dogurali do dna — živjeli!
      </button>
    </footer>
  );
}
