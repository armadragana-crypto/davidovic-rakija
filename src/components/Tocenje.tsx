import { useEffect, useRef } from 'react';

/* Snimak tocenja, ali razlozen na kadrove i crtan na platnu, jer pretrazivac
   video kroz skrol premota trzavo, a sliku nacrta odmah. Sekcija je visoka
   nekoliko ekrana i drzi se za vrh dok se skrola: prvo kadar naraste iz
   kartice preko cijelog ekrana, onda skrol vodi tocenje, pa se na kraju
   vrati u karticu i stranica ide dalje. */

const KADROVA = 80;
const SITAN_EKRAN = 900;

/* Dijelovi puta kroz sekciju: rast, tocenje, pa povratak. Izmedju njih su
   kratki predasi da se pokreti ne sudaraju. Samom tocenju pripada oko tri
   ekrana skrola, jer kroz kracu dionicu jedan zamah tockica preleti pola
   sipanja i od pokreta se ne vidi nista. */
const RAST_DO = 0.13;
const TOCENJE_OD = 0.17;
const TOCENJE_DO = 0.87;
const POVRATAK_OD = 0.91;

const NAJMANJI = 0.56;

/* Kadrovi ne skacu na ono sto skrol trazi nego mu prilaze, po desetinu
   razlike u svakoj slici i najvise dva kadra odjednom. Tako i nagli zamah
   tockica prodje kroz sipanje umjesto da ga preskoci. */
const PRILAZ = 0.1;
const NAJVECI_KORAK = 2;

function putanja(broj: number, sitan: boolean) {
  const ime = String(broj + 1).padStart(3, '0');
  return `/tocenje/${sitan ? 'mali' : 'veliki'}/${ime}.webp`;
}

function udio(vrijednost: number, od: number, dokle: number) {
  return Math.min(Math.max((vrijednost - od) / (dokle - od), 0), 1);
}

export default function Tocenje() {
  const sekcijaRef = useRef<HTMLElement>(null);
  const platnoRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const sekcija = sekcijaRef.current;
    const platno = platnoRef.current;
    if (!sekcija || !platno) return;

    const cetka = platno.getContext('2d', { alpha: false });
    if (!cetka) return;

    const mirno = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const uzak = window.matchMedia(`(max-width: ${SITAN_EKRAN}px)`);

    let sitan = uzak.matches;
    let slike: HTMLImageElement[] = [];
    let nacrtan = -1;
    let posao = 0;
    let sustizanje = 0;
    let ucitavanje = false;

    let glava = 0; // kadar koji se vidi
    let cilj = 0; // kadar koji skrol trazi
    let prvi = true;
    let sklonjen = false;

    /* Platno nosi tacno onoliko tacaka koliko ih ekran moze pokazati; preko
       dvostruke gustine se ionako ne vidi razlika, a crtanje poskupi. */
    const namjesti = () => {
      const gustina = Math.min(window.devicePixelRatio || 1, sitan ? 2 : 1.75);
      const sirina = Math.round(platno.clientWidth * gustina);
      const visina = Math.round(platno.clientHeight * gustina);
      if (platno.width === sirina && platno.height === visina) return;

      platno.width = sirina;
      platno.height = visina;
      nacrtan = -1;
    };

    /* Kadar se uklapa u platno cuvajuci svoj oblik. Uspravni i polozeni
       kadrovi se mijenjaju sa sirinom ekrana, pa u trenutku izmedju platno
       moze biti drugog oblika nego slika koja je jos u ruci. */
    const nacrtaj = (broj: number) => {
      const slika = slike[broj];
      if (!slika?.complete || slika.naturalWidth === 0 || broj === nacrtan) return;

      const mjera = Math.min(
        platno.width / slika.naturalWidth,
        platno.height / slika.naturalHeight
      );
      const s = slika.naturalWidth * mjera;
      const v = slika.naturalHeight * mjera;

      if (Math.abs(s - platno.width) > 1 || Math.abs(v - platno.height) > 1) {
        cetka.fillStyle = '#0b0806';
        cetka.fillRect(0, 0, platno.width, platno.height);
      }
      cetka.drawImage(slika, (platno.width - s) / 2, (platno.height - v) / 2, s, v);
      nacrtan = broj;
    };

    /* Kadrovi se skidaju tek kad se sekcija priblizi, i to redom, po nekoliko
       odjednom, da ne zaguse ostalo na stranici. Svaki se odmah i raspakuje,
       da to ne padne na trenutak crtanja. */
    const ucitaj = () => {
      if (ucitavanje) return;
      ucitavanje = true;

      let sljedeci = 0;
      const uzmi = () => {
        if (sljedeci >= KADROVA) return;

        const broj = sljedeci;
        sljedeci += 1;

        const slika = new Image();
        slika.decoding = 'async';
        slika.src = putanja(broj, sitan);
        slike[broj] = slika;

        const gotovo = () => {
          if (broj === Math.round(glava)) nacrtaj(broj);
          uzmi();
        };
        slika.decode().then(gotovo).catch(gotovo);
      };

      for (let i = 0; i < 4; i += 1) uzmi();
    };

    const osmotri = new IntersectionObserver(
      (upisi) => {
        if (upisi.some((upis) => upis.isIntersecting)) {
          ucitaj();
          osmotri.disconnect();
        }
      },
      { rootMargin: '150% 0px' }
    );
    osmotri.observe(sekcija);

    const sustigni = () => {
      const razlika = cilj - glava;

      if (Math.abs(razlika) < 0.06) {
        glava = cilj;
        sustizanje = 0;
      } else {
        glava += Math.max(-NAJVECI_KORAK, Math.min(NAJVECI_KORAK, razlika * PRILAZ));
        sustizanje = requestAnimationFrame(sustigni);
      }

      nacrtaj(Math.round(glava));
    };

    const osvjezi = () => {
      posao = 0;

      const vrh = sekcija.getBoundingClientRect().top;
      const hod = sekcija.offsetHeight - window.innerHeight;
      const put = hod > 0 ? Math.min(Math.max(-vrh / hod, 0), 1) : 0;

      const rast = mirno
        ? 1
        : NAJMANJI +
          (1 - NAJMANJI) * (udio(put, 0, RAST_DO) - udio(put, POVRATAK_OD, 1));
      sekcija.style.setProperty('--tocenje-rast', rast.toFixed(4));
      sekcija.style.setProperty(
        '--tocenje-rijec',
        (udio(put, 0.3, 0.4) - udio(put, 0.74, 0.84)).toFixed(3)
      );

      /* Dok kadar drzi cijeli ekran, traka menija stoji preko flase, pa se
         tiho povuce i vrati se cim se kadar krene smanjivati. */
      const sklanjaj = !mirno && put > 0.09 && put < POVRATAK_OD + 0.02;
      if (sklanjaj !== sklonjen) {
        sklonjen = sklanjaj;
        document.body.classList.toggle('je-tocenje', sklanjaj);
      }

      namjesti();
      cilj = udio(put, TOCENJE_OD, TOCENJE_DO) * (KADROVA - 1);

      // Pri dolasku na stranicu se ne sustize nista, nego se stane na svoje.
      if (prvi) {
        prvi = false;
        glava = cilj;
        nacrtaj(Math.round(glava));
        return;
      }

      if (!sustizanje && glava !== cilj) sustizanje = requestAnimationFrame(sustigni);
    };

    const naSkrol = () => {
      if (!posao) posao = requestAnimationFrame(osvjezi);
    };

    /* Sklopljen i rasklopljen telefon nisu isti ekran, pa se pri prelasku
       granice uzima drugi niz kadrova. */
    const naSirinu = () => {
      if (uzak.matches === sitan) return;

      sitan = uzak.matches;
      slike = [];
      nacrtan = -1;
      ucitavanje = false;
      ucitaj();
    };

    osvjezi();
    window.addEventListener('scroll', naSkrol, { passive: true });
    window.addEventListener('resize', naSkrol);
    uzak.addEventListener('change', naSirinu);

    return () => {
      if (posao) cancelAnimationFrame(posao);
      if (sustizanje) cancelAnimationFrame(sustizanje);
      document.body.classList.remove('je-tocenje');
      osmotri.disconnect();
      window.removeEventListener('scroll', naSkrol);
      window.removeEventListener('resize', naSkrol);
      uzak.removeEventListener('change', naSirinu);
    };
  }, []);

  return (
    <section className="tocenje" ref={sekcijaRef} aria-label="Točenje rakije">
      <div className="tocenje-drzac">
        <div className="tocenje-okvir">
          <canvas className="tocenje-platno" ref={platnoRef} />
          <span className="tocenje-rijec">Za trenutke koji se ne žure</span>
        </div>
      </div>
    </section>
  );
}
