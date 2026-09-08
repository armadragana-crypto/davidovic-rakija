import { useEffect, useState } from 'react';

/* Type the toast anywhere on the site and two glasses rise from the bottom
   edge, lean into each other, meet, and sink back. The typing is read without
   its accents, so it answers to zivjeli just as well, and the last line of the
   site can call the same toast for anyone on a phone, who has no keys to type
   with. */
const RIJEC = 'zivjeli';
export const ZDRAVICA_ZOV = 'rd-zdravica';

const TRAJANJE_MS = 2600;

function bezKvacica(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd');
}

export default function Zdravica() {
  const [nazdravlja, setNazdravlja] = useState(false);

  useEffect(() => {
    let otkucano = '';
    let sat: number | undefined;

    const nazdravi = () => {
      window.clearTimeout(sat);
      setNazdravlja(true);
      sat = window.setTimeout(() => setNazdravlja(false), TRAJANJE_MS);
    };

    const citaj = (event: KeyboardEvent) => {
      if (event.key.length !== 1 || event.ctrlKey || event.metaKey || event.altKey) return;

      // Nista od ovoga ne vazi dok neko popunjava polje.
      const gdje = event.target as HTMLElement | null;
      if (gdje?.isContentEditable || gdje?.tagName === 'INPUT' || gdje?.tagName === 'TEXTAREA') {
        return;
      }

      otkucano = (otkucano + bezKvacica(event.key)).slice(-RIJEC.length);
      if (otkucano === RIJEC) {
        otkucano = '';
        nazdravi();
      }
    };

    window.addEventListener('keydown', citaj);
    window.addEventListener(ZDRAVICA_ZOV, nazdravi);

    return () => {
      window.clearTimeout(sat);
      window.removeEventListener('keydown', citaj);
      window.removeEventListener(ZDRAVICA_ZOV, nazdravi);
    };
  }, []);

  if (!nazdravlja) return null;

  return (
    <div className="zdravica" aria-hidden="true">
      <div className="zdravica-par">
        <img src="/casica.png" alt="" className="zdravica-casa zdravica-casa--lijeva" />
        <img src="/casica.png" alt="" className="zdravica-casa zdravica-casa--desna" />
        <span className="zdravica-iskra" />
      </div>
      <span className="zdravica-rijec">Živjeli!</span>
    </div>
  );
}
