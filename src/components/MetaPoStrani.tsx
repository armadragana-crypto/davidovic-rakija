import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { nadjiStranu, OG_SLIKA, SAJT } from '../seo/stranice';

/* Kad React preuzme rutu, uskladi naslov i canonical. Izgled se ne dira. */
export default function MetaPoStrani() {
  const { pathname } = useLocation();
  const strana = nadjiStranu(pathname);

  useEffect(() => {
    document.title = strana.naslov;
    const url = `${SAJT}${strana.put === '/' ? '/' : strana.put}`;

    const canonical = document.head.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', url);

    const opis = document.head.querySelector('meta[name="description"]');
    if (opis) opis.setAttribute('content', strana.opis);

    const ogUrl = document.head.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', url);

    const ogNaslov = document.head.querySelector('meta[property="og:title"]');
    if (ogNaslov) ogNaslov.setAttribute('content', strana.naslov);

    const ogOpis = document.head.querySelector('meta[property="og:description"]');
    if (ogOpis) ogOpis.setAttribute('content', strana.opis);

    const ogSlika = document.head.querySelector('meta[property="og:image"]');
    if (ogSlika) ogSlika.setAttribute('content', OG_SLIKA);
  }, [strana]);

  return null;
}
