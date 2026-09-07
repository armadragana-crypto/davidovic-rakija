import { useCallback, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { ArrowLeft, Camera, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  galerijaCjeline,
  galerijaSnimci,
  malaSlika,
  velikaSlika,
  type GalerijaCjelina
} from '../data/galerija';

export default function GalleryPage() {
  const [cjelina, setCjelina] = useState<GalerijaCjelina | 'sve'>('sve');
  const [otvoren, setOtvoren] = useState<number | null>(null);
  const { ref: uvodRef, isVisible: uvodVidljiv } = useScrollAnimation();

  const snimci = useMemo(
    () => (cjelina === 'sve' ? galerijaSnimci : galerijaSnimci.filter((s) => s.cjelina === cjelina)),
    [cjelina]
  );

  const pomjeri = useCallback(
    (korak: number) => {
      setOtvoren((trenutni) => {
        if (trenutni === null) return null;
        return (trenutni + korak + snimci.length) % snimci.length;
      });
    },
    [snimci.length]
  );

  // Dok je snimak otvoren preko cijelog ekrana, strelice i Esc rade bez misa,
  // a stranica ispod ne smije da klizi.
  useEffect(() => {
    if (otvoren === null) return undefined;

    const natipki = (dogadjaj: KeyboardEvent) => {
      if (dogadjaj.key === 'Escape') setOtvoren(null);
      if (dogadjaj.key === 'ArrowRight') pomjeri(1);
      if (dogadjaj.key === 'ArrowLeft') pomjeri(-1);
    };

    const prethodni = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', natipki);

    return () => {
      document.body.style.overflow = prethodni;
      window.removeEventListener('keydown', natipki);
    };
  }, [otvoren, pomjeri]);

  const trenutni = otvoren === null ? null : snimci[otvoren];

  return (
    <section className="galerija-strana relative min-h-screen px-3 pb-[calc(4.5rem+env(safe-area-inset-bottom,0px))] pt-28 sm:px-4 md:pb-24 md:pt-36">
      <div className="container relative z-10 mx-auto max-w-6xl">
        <Link
          to="/"
          className="group mb-5 inline-flex items-center gap-2 text-sm text-gold/90 transition-colors hover:text-gold-light md:mb-8 md:text-base"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 md:h-5 md:w-5" />
          <span>Nazad na početnu</span>
        </Link>

        <div ref={uvodRef} className={`section-intro scroll-scale ${uvodVidljiv ? 'visible' : ''}`}>
          <span className="section-eyebrow">
            <Camera className="h-4 w-4" />
            Galerija
          </span>
          <h1 className="section-title">Iz naših voćnjaka</h1>
          <p className="section-subtitle">
            Voćnjaci u Hrvaćanima, berba, destilerija i rakije koje iz svega toga nastanu.
          </p>
        </div>

        <div className="galerija-birac" role="tablist" aria-label="Cjeline galerije">
          {galerijaCjeline.map((stavka) => (
            <button
              key={stavka.kljuc}
              type="button"
              role="tab"
              aria-selected={cjelina === stavka.kljuc}
              className={`galerija-dugme ${cjelina === stavka.kljuc ? 'is-active' : ''}`}
              onClick={() => {
                setCjelina(stavka.kljuc);
                setOtvoren(null);
              }}
            >
              {stavka.naziv}
            </button>
          ))}
        </div>

        <div className="galerija-mreza">
          {snimci.map((snimak, redni) => (
            <button
              key={snimak.id}
              type="button"
              className={`galerija-plocica ${snimak.sirok ? 'je-siroka' : ''}`}
              onClick={() => setOtvoren(redni)}
              aria-label={`Otvori: ${snimak.opis}`}
            >
              <img src={malaSlika(snimak.id)} alt={snimak.opis} loading="lazy" />
              <span className="galerija-plocica-veo" aria-hidden />
            </button>
          ))}
        </div>
      </div>

      {/* Prikaz ide u telo dokumenta, jer <main> pravi svoj sloj u kojem bi
          ostao ispod zaglavlja bez obzira na z-index. */}
      {trenutni &&
        createPortal(
          <div
            className="galerija-prikaz"
            role="dialog"
            aria-modal="true"
            aria-label={trenutni.opis}
            onClick={() => setOtvoren(null)}
          >
            <button type="button" className="galerija-zatvori" aria-label="Zatvori">
              <X className="h-6 w-6" />
            </button>

            <button
              type="button"
              className="galerija-strelica je-lijeva"
              aria-label="Prethodna fotografija"
              onClick={(dogadjaj) => {
                dogadjaj.stopPropagation();
                pomjeri(-1);
              }}
            >
              <ChevronLeft className="h-7 w-7" />
            </button>

            {/* Klik po samoj slici ne zatvara prikaz, da se moze razgledati u miru. */}
            <figure className="galerija-okvir" onClick={(dogadjaj) => dogadjaj.stopPropagation()}>
              <img src={velikaSlika(trenutni.id)} alt={trenutni.opis} />
              <figcaption>
                {trenutni.opis}
                <span className="galerija-brojac">
                  {otvoren! + 1} / {snimci.length}
                </span>
              </figcaption>
            </figure>

            <button
              type="button"
              className="galerija-strelica je-desna"
              aria-label="Sljedeća fotografija"
              onClick={(dogadjaj) => {
                dogadjaj.stopPropagation();
                pomjeri(1);
              }}
            >
              <ChevronRight className="h-7 w-7" />
            </button>
          </div>,
          document.body
        )}
    </section>
  );
}
