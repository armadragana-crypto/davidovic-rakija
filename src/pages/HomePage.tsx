import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Phone, Wine, Heart, Leaf, Users, Sparkles, ChevronRight, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import StoryBlocks from '../components/StoryBlocks';

const ponuda = [
  {
    id: 1,
    name: 'Tradicionalna Šljiva',
    description: 'Šljiva iz domaćih voćnjaka, odležala u hrastu. Topla, zaokružena i duboka - onakva kakvu su pravili naši djedovi.',
    image: '/rakija-sljiva.png',
    glow: 'rgba(168, 85, 40, 0.28)'
  },
  {
    id: 2,
    name: 'Viljamovka',
    description: 'Zrela viljamovka destilovana u malim serijama. Svilenkasta, cvjetna i iznenađujuće svježa, sa dugim mirisom voćnjaka u završnici.',
    image: '/rakija-kruska.png',
    glow: 'rgba(212, 160, 95, 0.32)'
  },
  {
    id: 3,
    name: 'Dunja',
    description: 'Rakija od ručno biranih dunja, mirisna i baršunasta. Blaga toplina i medeni ton koji se pamti dugo nakon posljednjeg gutljaja.',
    image: '/rakija-dunja.png',
    glow: 'rgba(224, 181, 112, 0.26)'
  }
];

const premiumRakije = [
  {
    id: 1,
    name: 'Šljiva Prestige',
    description: 'Ekskluzivna prirodna voćna rakija odležala punih 7 godina. Tamni ćilibar, raskošan miris i jedinstven, plemenit ukus za prave hedoniste.',
    image: '/rakija-sljiva-prestige.png',
    glow: 'rgba(150, 70, 45, 0.30)'
  },
  {
    id: 2,
    name: 'Dunja Barrique',
    description: 'Vrhunska prirodna voćna rakija pažljivo njegovana u hrastovim buradima. Savršen balans prepoznatljivog mirisa zrele dunje i toplih, plemenitih nota hrasta.',
    image: '/rakija-dunja-barrique.png',
    glow: 'rgba(196, 140, 70, 0.30)'
  }
];

const contactLinks = [
  {
    id: 'instagram',
    href: 'https://www.instagram.com/',
    label: 'Instagram',
    icon: Instagram,
    description: 'Pratite naš rad, nove proizvode i priče iz destilerije.',
    cta: 'Zaprati',
    external: true
  },
  {
    id: 'facebook',
    href: 'https://www.facebook.com/',
    label: 'Facebook',
    icon: Facebook,
    description: 'Pridružite se našoj zajednici ljubitelja dobre kapljice.',
    cta: 'Posjeti',
    external: true
  },
  {
    id: 'telefon',
    href: 'tel:065531545',
    label: 'Pozovi',
    icon: Phone,
    description: 'Pozovite nas direktno za sve informacije, dogovore i narudžbe.',
    cta: 'Pozovi',
    external: false
  }
];

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation(0.15, true);
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation(0.2, true);
  const { ref: ponudaRef, isVisible: ponudaVisible } = useScrollAnimation(0.15, true);
  const { ref: premiumRef, isVisible: premiumVisible } = useScrollAnimation(0.15, true);
  const { ref: navRef, isVisible: navVisible } = useScrollAnimation(0.2, true);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <section className="relative z-10 flex min-h-[100svh] items-stretch overflow-visible bg-transparent px-4 pb-8 pt-[clamp(5.75rem,17vw,6.75rem)] sm:min-h-screen sm:items-start sm:pb-10 sm:pt-28 md:pb-12 md:pt-36 lg:pt-40">
        <div className="container relative z-10 mx-auto flex max-w-[26rem] flex-col bg-transparent pt-0 sm:block sm:pt-8 md:max-w-5xl md:pt-10 lg:pt-12">
          <div className="mb-0 flex flex-1 flex-col items-center justify-evenly text-center sm:mb-8 sm:flex-none sm:justify-start md:mb-10">
            <h1
              className={`relative z-10 font-serif text-[clamp(1.9rem,8.2vw,2.45rem)] sm:text-[clamp(2.75rem,10vw,7.5rem)] md:text-[clamp(2.25rem,8.1vw,6.25rem)] text-[#d7c09a] sm:text-cream mb-0 sm:mb-6 md:mb-7 md:-mt-[5.5rem] leading-[1.08] sm:leading-[1.05] tracking-[-0.016em] sm:tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] scroll-scale whitespace-nowrap max-w-[92vw] mx-auto ${isLoaded ? 'visible' : ''}`}
            >
              Rakija Davidović
            </h1>

            <p
              className={`relative z-10 text-[clamp(0.82rem,2.95vw,0.95rem)] sm:text-lg md:text-[1.35rem] text-[#cfbe9c] sm:text-cream/88 mb-0 sm:mb-5 md:mb-6 lg:mb-7 leading-[1.42] sm:leading-relaxed max-w-[min(42ch,86vw)] md:max-w-2xl mx-auto px-[clamp(0.1rem,1vw,0.35rem)] font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] [text-wrap:balance] scroll-fade-in stagger-1 ${isLoaded ? 'visible' : ''}`}
            >
              Uživajte u bogatstvu tradicije i okusa rakije Davidović, još od 1984. godine sa vama.
            </p>

            <div className={`md:hidden w-full max-w-[23rem]`}>
              <div className={`relative z-10 flex flex-col justify-center items-center gap-[clamp(0.65rem,2.5vw,0.9rem)] mt-0 scroll-fade-in stagger-3 ${isLoaded ? 'visible' : ''}`}>
                <Link
                  to="/kontakt"
                  className="hero-frame-cta text-[clamp(0.74rem,2.6vw,0.82rem)] sm:text-[0.9rem] lg:text-[0.95rem] tracking-[0.08em] px-[clamp(1.05rem,4vw,1.3rem)] sm:px-6 lg:px-7 py-[clamp(0.6rem,2.2vw,0.72rem)] sm:py-2.5 lg:py-3 w-full sm:w-auto md:w-[12.75rem] max-w-[13.5rem] sm:max-w-none"
                >
                  <Phone className="w-4 h-4 shrink-0 text-gold/85" />
                  <span>Kontakt</span>
                </Link>
                <Link
                  to="/ponuda"
                  className="hero-frame-cta text-[clamp(0.74rem,2.6vw,0.82rem)] sm:text-[0.9rem] lg:text-[0.95rem] tracking-[0.08em] px-[clamp(1.05rem,4vw,1.3rem)] sm:px-6 lg:px-7 py-[clamp(0.6rem,2.2vw,0.72rem)] sm:py-2.5 lg:py-3 w-full sm:w-auto md:w-[12.75rem] max-w-[13.5rem] sm:max-w-none"
                >
                  <Wine className="w-4 h-4 shrink-0 text-gold/85" />
                  <span>Naša ponuda</span>
                </Link>
              </div>
            </div>

            <div className={`hidden md:flex relative z-10 flex-col sm:flex-row gap-[clamp(0.65rem,2.5vw,0.9rem)] sm:gap-5 justify-center items-center mt-[calc(clamp(1.4rem,5vw,2.2rem)-42px)] sm:mt-0 md:mt-12 lg:mt-14 scroll-fade-in stagger-3 ${isLoaded ? 'visible' : ''}`}>
              <Link
                to="/kontakt"
                className="hero-frame-cta text-[clamp(0.74rem,2.6vw,0.82rem)] sm:text-[0.9rem] lg:text-[0.95rem] tracking-[0.08em] px-[clamp(1.05rem,4vw,1.3rem)] sm:px-6 lg:px-7 py-[clamp(0.6rem,2.2vw,0.72rem)] sm:py-2.5 lg:py-3 w-full sm:w-auto md:w-[12.75rem] max-w-[13.5rem] sm:max-w-none"
              >
                <Phone className="w-4 h-4 shrink-0 text-gold/85" />
                <span>Kontakt</span>
              </Link>
              <Link
                to="/ponuda"
                className="hero-frame-cta text-[clamp(0.74rem,2.6vw,0.82rem)] sm:text-[0.9rem] lg:text-[0.95rem] tracking-[0.08em] px-[clamp(1.05rem,4vw,1.3rem)] sm:px-6 lg:px-7 py-[clamp(0.6rem,2.2vw,0.72rem)] sm:py-2.5 lg:py-3 w-full sm:w-auto md:w-[12.75rem] max-w-[13.5rem] sm:max-w-none"
              >
                <Wine className="w-4 h-4 shrink-0 text-gold/85" />
                <span>Naša ponuda</span>
              </Link>
            </div>

            <div className={`hero-rd-wrap scroll-fade-in stagger-2 ${isLoaded ? 'visible' : ''}`}>
              <div
                className="hero-rd-mark"
                role="img"
                aria-label="RD Davidović"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-gold/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-gold rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      <section className="story-section relative z-20 bg-transparent">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="story-stage">
            <div className="story-stage-scene">
              <div
                ref={storyRef}
                className={`section-intro story-stage-title scroll-fade-in ${storyVisible ? 'visible' : ''}`}
              >
                <span className="section-eyebrow">
                  <Sparkles className="w-4 h-4" />
                  Tradicija od 1984.
                </span>
                <h2 className="section-title text-4xl md:text-5xl lg:text-[3.5rem]">
                  Naša priča
                </h2>
              </div>

              <div className="story-stage-body">
                <StoryBlocks />
              </div>
            </div>
          </div>

          <div
            ref={valuesRef}
            className={`grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-5xl mx-auto mb-24 scroll-fade-in ${valuesVisible ? 'visible' : ''}`}
          >
            <div className={`value-card boxed-reveal-scale ${valuesVisible ? 'is-visible' : ''}`}>
              <div className="relative z-[1]">
                <div className="value-card-icon">
                  <Heart className="w-7 h-7 text-gold" />
                </div>
                <h4 className="text-cream font-serif text-lg mb-2">Strast</h4>
                <p className="text-cream/60 text-sm leading-relaxed">Ljubav prema zanatstvu u svakoj kapi</p>
              </div>
            </div>

            <div className={`value-card boxed-reveal-scale boxed-reveal-delay-1 ${valuesVisible ? 'is-visible' : ''}`}>
              <div className="relative z-[1]">
                <div className="value-card-icon">
                  <Award className="w-7 h-7 text-gold" />
                </div>
                <h4 className="text-cream font-serif text-lg mb-2">Kvalitet</h4>
                <p className="text-cream/60 text-sm leading-relaxed">Bez kompromisa u svakom koraku</p>
              </div>
            </div>

            <div className={`value-card boxed-reveal-scale boxed-reveal-delay-2 ${valuesVisible ? 'is-visible' : ''}`}>
              <div className="relative z-[1]">
                <div className="value-card-icon">
                  <Users className="w-7 h-7 text-gold" />
                </div>
                <h4 className="text-cream font-serif text-lg mb-2">Porodica</h4>
                <p className="text-cream/60 text-sm leading-relaxed">Tradicija preneta kroz generacije</p>
              </div>
            </div>

            <div className={`value-card boxed-reveal-scale boxed-reveal-delay-3 ${valuesVisible ? 'is-visible' : ''}`}>
              <div className="relative z-[1]">
                <div className="value-card-icon">
                  <Leaf className="w-7 h-7 text-gold" />
                </div>
                <h4 className="text-cream font-serif text-lg mb-2">Priroda</h4>
                <p className="text-cream/60 text-sm leading-relaxed">Cisto voce, autentican ukus</p>
              </div>
            </div>
          </div>

          <div ref={ponudaRef}>
            <div className={`section-intro scroll-fade-in ${ponudaVisible ? 'visible' : ''}`}>
              <span className="section-eyebrow">
                <Sparkles className="w-4 h-4" />
                Premium Kolekcija
              </span>
              <h2 className="section-title text-4xl md:text-5xl lg:text-[3.5rem]">
                Naša Ponuda
              </h2>
              <p className="section-subtitle">
                Tri flaše u kojima se ogleda četrdeset godina naše destilacije
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {ponuda.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative"
                  style={{
                    animation: ponudaVisible ? `fadeInUp 0.7s ease-out ${index * 0.15}s both` : 'none'
                  }}
                >
                  <div
                    className={`surface-card relative flex h-full flex-col overflow-hidden rounded-[1.6rem] p-6 md:p-7 transition-all duration-500 hover:-translate-y-2 hover:border-gold/55 hover:shadow-2xl hover:shadow-gold/15 boxed-reveal-scale ${
                      index === 1 ? 'boxed-reveal-delay-1' : index === 2 ? 'boxed-reveal-delay-2' : ''
                    } ${ponudaVisible ? 'is-visible' : ''}`}
                  >
                    <div
                      className="pointer-events-none absolute -top-16 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                      style={{ background: `radial-gradient(circle, ${item.glow} 0%, transparent 70%)` }}
                    />

                    <div className="relative mb-6 aspect-[4/5] overflow-hidden rounded-[1.25rem] border border-gold/20 bg-gradient-to-b from-black/20 to-black/70">
                      <img
                        src={item.image}
                        alt={`Rakija ${item.name}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    </div>

                    <h3 className="font-serif text-2xl text-cream transition-colors duration-300 group-hover:text-gold">
                      {item.name}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-cream/70">
                      {item.description}
                    </p>

                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </div>
              ))}
            </div>

            <div ref={premiumRef} className="mt-20 md:mt-24">
              <div className={`section-intro scroll-fade-in ${premiumVisible ? 'visible' : ''}`}>
                <h3 className="section-title text-3xl md:text-4xl lg:text-[2.75rem] mb-0">
                  Premium rakije
                </h3>
              </div>

              <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
                {premiumRakije.map((item, index) => (
                  <div
                    key={item.id}
                    className="group relative"
                    style={{
                      animation: premiumVisible ? `fadeInUp 0.7s ease-out ${index * 0.15}s both` : 'none'
                    }}
                  >
                    <div
                      className={`surface-card relative flex h-full flex-col overflow-hidden rounded-[1.6rem] p-6 md:p-7 transition-all duration-500 hover:-translate-y-2 hover:border-gold/55 hover:shadow-2xl hover:shadow-gold/15 boxed-reveal-scale ${
                        index === 1 ? 'boxed-reveal-delay-1' : ''
                      } ${premiumVisible ? 'is-visible' : ''}`}
                    >
                      <div
                        className="pointer-events-none absolute -top-16 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                        style={{ background: `radial-gradient(circle, ${item.glow} 0%, transparent 70%)` }}
                      />

                      <div className="relative mb-6 aspect-[4/5] overflow-hidden rounded-[1.25rem] border border-gold/20 bg-gradient-to-b from-black/20 to-black/70">
                        <img
                          src={item.image}
                          alt={`Rakija ${item.name}`}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                      </div>

                      <h4 className="font-serif text-2xl text-cream transition-colors duration-300 group-hover:text-gold">
                        {item.name}
                      </h4>

                      <p className="mt-3 text-sm leading-relaxed text-cream/70">
                        {item.description}
                      </p>

                      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`mt-12 text-center md:mt-14 scroll-fade-in stagger-4 ${ponudaVisible ? 'visible' : ''}`}>
              <Link
                to="/ponuda"
                className="group inline-flex items-center gap-2 text-gold/90 transition-colors hover:text-gold-light"
              >
                <span>Pogledajte cijelu kolekciju</span>
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={navRef}
        className={`section-shell relative z-20 bg-transparent scroll-fade-in ${navVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto max-w-5xl">
          <div className="section-intro">
            <span className="section-eyebrow">Povežimo se</span>
            <h2 className="section-title text-4xl md:text-5xl">
              Kontaktirajte nas
            </h2>
            <p className="section-subtitle">
              Tu smo za svako pitanje, dogovor i narudžbu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {contactLinks.map((link, index) => (
              <a
                key={link.id}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="group relative overflow-hidden"
                style={{
                  animation: navVisible ? `fadeInUp 0.6s ease-out ${index * 0.15}s both` : 'none'
                }}
              >
                <div className={`rounded-[1.5rem] p-8 md:p-9 border border-gold/35 bg-gradient-to-br from-gold/18 to-gold/5 hover:border-gold hover:from-gold/28 hover:to-gold/10 transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 hover:scale-[1.02] boxed-reveal-scale ${index === 1 ? 'boxed-reveal-delay-1' : index === 2 ? 'boxed-reveal-delay-2' : ''} ${navVisible ? 'is-visible' : ''}`}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gold/20 border-2 border-gold/50 flex items-center justify-center mb-5 group-hover:bg-gold/30 group-hover:border-gold group-hover:scale-110 transition-all duration-300">
                      <link.icon className="w-8 h-8 text-gold" />
                    </div>
                    <h3 className="text-cream font-serif text-2xl mb-3 group-hover:text-gold transition-colors">{link.label}</h3>
                    <p className="text-cream/70 text-sm mb-5">{link.description}</p>
                    <div className="flex items-center gap-2 text-gold font-medium">
                      <span>{link.cta}</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
