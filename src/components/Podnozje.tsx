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
        {/* Strelice sa obje strane pokazuju na natpis da se vidi da je ziv. */}
        <span className="podnozje-strelica" aria-hidden="true" />
        <span className="podnozje-poruka-tekst">Hvala što ste dogurali do dna — živjeli!</span>
        <span className="podnozje-strelica podnozje-strelica-desna" aria-hidden="true" />
      </button>
      {/* Potpis onih koji su sajt osmislili, tiho i posljednji. */}
      <span className="podnozje-potpis">
        <span className="podnozje-potpis-red">Concept &amp; Design by</span>
        <img
          className="podnozje-potpis-znak"
          src="/rcs-potpis.png"
          alt="Rustik Creative Studio"
          width={660}
          height={202}
          loading="lazy"
        />
      </span>
    </footer>
  );
}
