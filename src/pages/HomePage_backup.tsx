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

  const { ref: storyTitleRef, isVisible: storyTitleVisible } = useScrollAnimation(0.25, true);
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation(0.12, true);
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation(0.2, true);
  const { ref: ponudaRef, isVisible: ponudaVisible } = useScrollAnimation(0.15, true);
  const { ref: premiumRef, isVisible: premiumVisible } = useScrollAnimation(0.15, true);
  const { ref: navRef, isVisible: navVisible } = useScrollAnimation(0.2, true);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <section className="pt-[clamp(5.75rem,17vw,6.75rem)] sm:pt-28 md:pt-36 lg:pt-40 pb-[clamp(8rem,24vw,10.5rem)] sm:pb-20 md:pb-28 px-4 relative z-10 overflow-hidden md:overflow-visible min-h-[100svh] sm:min-h-screen flex items-start">
        <div className="absolute inset-0 bg-gradient-to-b from-black/12 via-black/16 to-black/24 sm:from-black/16 sm:via-black/10 sm:to-black/18 md:from-black/8 md:via-black/4 md:to-black/12"></div>
        <div className="sm:hidden pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_18%,rgba(224,181,112,0.05)_0%,transparent_24%),radial-gradient(circle_at_18%_34%,rgba(255,248,230,0.025)_0%,transparent_18%)]" />
        <div className="hidden md:block pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_24%,rgba(224,181,112,0.007)_0%,transparent_14%),linear-gradient(180deg,rgba(9,7,6,0.18)_0%,rgba(9,7,6,0.31)_34%,rgba(9,7,6,0.52)_100%)]" />
        <div className="hidden md:block pointer-events-none absolute left-[18%] bottom-[10%] z-0 h-80 w-64 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.18)_0%,rgba(217,119,6,0.10)_38%,rgba(0,0,0,0)_80%)] opacity-80 blur-[72px]" />
        <div className="hidden md:block pointer-events-none absolute inset-x-0 bottom-0 z-0 overflow-hidden md:overflow-visible">
          <div className="relative mx-auto h-[22rem] lg:h-[25rem] xl:h-[27rem] max-w-6xl">
            <div className="absolute left-[42%] bottom-4 h-64 w-[24rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.27)_0%,rgba(217,119,6,0.16)_34%,rgba(120,53,15,0.07)_56%,rgba(0,0,0,0)_82%)] opacity-90 blur-[60px]" />
            <img
              src="/casarakije.png"
              alt=""
              aria-hidden="true"
              className="absolute left-1/2 -bottom-52 lg:-bottom-[15rem] xl:-bottom-[16rem] w-[22.5rem] lg:w-[27rem] xl:w-[29.75rem] -translate-x-1/2 h-auto object-contain opacity-[0.58] [filter:brightness(1.1)_contrast(1.28)_saturate(1.2)_drop-shadow(0_0_44px_rgba(224,181,112,0.42))_drop-shadow(0_28px_68px_rgba(0,0,0,0.32))]"
            />
          </div>
        </div>
        <div className="container mx-auto max-w-[26rem] md:max-w-5xl relative z-10 pt-[clamp(0.5rem,2.5vw,0.95rem)] sm:pt-8 md:pt-10 lg:pt-12">
          <div className="text-center mb-[clamp(2.75rem,9vw,3.75rem)] sm:mb-16 md:mb-20 flex min-h-[calc(100svh-clamp(14rem,24vw,17rem))] flex-col items-center md:block md:min-h-0">
            <h1
              className={`relative z-10 font-serif text-[clamp(1.9rem,8.2vw,2.45rem)] sm:text-[clamp(2.75rem,10vw,7.5rem)] md:text-[clamp(2.25rem,8.1vw,6.25rem)] text-[#d7c09a] sm:text-cream mb-[clamp(0.85rem,3.5vw,1.2rem)] sm:mb-6 md:mb-7 md:-mt-[5.5rem] leading-[1.08] sm:leading-[1.05] tracking-[-0.016em] sm:tracking-tight drop-shadow-[0_6px_24px_rgba(0,0,0,0.34)] scroll-scale whitespace-nowrap max-w-[92vw] mx-auto ${isLoaded ? 'visible' : ''}`}
            >
              Rakija Davidović
            </h1>

            <p
              className={`relative z-10 text-[clamp(0.82rem,2.95vw,0.95rem)] sm:text-lg md:text-[1.35rem] text-[#cfbe9c] sm:text-cream/88 mb-[clamp(1.1rem,4.5vw,1.5rem)] sm:mb-5 md:mb-6 lg:mb-7 leading-[1.42] sm:leading-relaxed max-w-[min(42ch,86vw)] md:max-w-2xl mx-auto px-[clamp(0.1rem,1vw,0.35rem)] font-light drop-shadow-[0_4px_18px_rgba(0,0,0,0.24)] [text-wrap:balance] scroll-fade-in stagger-1 ${isLoaded ? 'visible' : ''}`}
            >
              Uživajte u bogatstvu tradicije i okusa rakije Davidović, još od 1984. godine sa vama.
            </p>

            <div className={`md:hidden mt-auto w-full max-w-[23rem]`}>
              <div className={`flex justify-center scroll-fade-in stagger-2 ${isLoaded ? 'visible' : ''}`}>
                <img
                  src="/logodavidovic.png"
                  alt="Davidovic Logo"
                  className="w-[clamp(14.65rem,50.6vw,17.85rem)] h-auto opacity-[0.23] drop-shadow-[0_16px_40px_rgba(0,0,0,0.22)]"
                />
              </div>

              <div className={`relative z-10 flex flex-col justify-center items-center gap-[clamp(0.65rem,2.5vw,0.9rem)] mt-[calc(clamp(1.4rem,5vw,2.2rem)-42px)] scroll-fade-in stagger-3 ${isLoaded ? 'visible' : ''}`}>
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

              <div className="pointer-events-none relative z-0 mx-auto -mt-[clamp(3.6rem,9.5vw,4.4rem)] h-[clamp(24.5rem,56vh,28.5rem)] w-full max-w-[clamp(18rem,88vw,24rem)]">
                <div className="absolute left-[clamp(4%,6vw,8%)] bottom-[clamp(0.8rem,3.2vh,1.8rem)] z-0 h-[clamp(10rem,29vw,13rem)] w-[clamp(6.75rem,21vw,9.5rem)] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.24)_0%,rgba(217,119,6,0.14)_42%,rgba(0,0,0,0)_78%)] opacity-90 blur-[clamp(2.5rem,11vw,3.5rem)]" />
                <div className="absolute left-1/2 bottom-[clamp(0.15rem,1vh,0.6rem)] z-0 h-[clamp(10rem,30vw,13rem)] w-[clamp(14rem,56vw,18.5rem)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.34)_0%,rgba(217,119,6,0.24)_34%,rgba(120,53,15,0.10)_56%,rgba(0,0,0,0)_82%)] opacity-95 blur-[clamp(2rem,9vw,2.75rem)]" />
                <img
                  src="/casarakije.png"
                  alt=""
                  aria-hidden="true"
                  className="absolute left-1/2 -top-[27px] block w-[clamp(16.9rem,77vw,22.4rem)] max-w-[22.4rem] -translate-x-1/2 h-auto object-contain opacity-[0.78] [filter:brightness(1.1)_contrast(1.28)_saturate(1.2)_drop-shadow(0_0_36px_rgba(224,181,112,0.42))_drop-shadow(0_20px_42px_rgba(0,0,0,0.26))]"
                />
              </div>
            </div>

            <div className={`hidden md:flex justify-center mt-[calc(clamp(1.4rem,5vw,2.1rem)-14px)] sm:mt-0 mb-[clamp(1rem,4vw,1.4rem)] sm:mb-6 md:mb-0 md:absolute md:inset-x-0 md:top-[56%] lg:top-[58%] md:-translate-y-1/2 md:pointer-events-none md:z-0 scroll-fade-in stagger-2 ${isLoaded ? 'visible' : ''}`}>
              <img
                src="/logodavidovic.png"
                alt=""
                aria-hidden="true"
                className="hidden md:block absolute left-[12%] top-[calc(50%+56px)] w-[28.5rem] lg:w-[31.25rem] xl:w-[34.25rem] -translate-x-1/2 -translate-y-1/2 h-auto object-contain opacity-[0.19] [filter:brightness(1.08)_drop-shadow(0_0_32px_rgba(212,160,95,0.45))_drop-shadow(0_16px_40px_rgba(0,0,0,0.18))]"
              />
              <img
                src="/logodavidovic.png"
                alt="Davidovic Logo"
                className="hidden"
              />
              <img src="/logodavidovic.png" alt="" aria-hidden="true" className="hidden md:block absolute left-[88%] top-[calc(50%+56px)] w-[28.5rem] lg:w-[31.25rem] xl:w-[34.25rem] -translate-x-1/2 -translate-y-1/2 h-auto object-contain opacity-[0.19] [filter:brightness(1.08)_drop-shadow(0_0_32px_rgba(212,160,95,0.45))_drop-shadow(0_16px_40px_rgba(0,0,0,0.18))]" />
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
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-gold/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-gold rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      <section className="section-shell story-section relative z-20 mt-16 pt-28 md:mt-24 md:pt-40 lg:mt-28 lg:pt-48 bg-[linear-gradient(180deg,rgba(14,11,8,0.20)_0%,rgba(18,14,11,0.28)_14%,rgba(18,14,11,0.36)_100%)] backdrop-blur-[0.5px]">
        <div className="container mx-auto max-w-6xl">
          <div
            ref={storyTitleRef}
            className={`section-intro scroll-fade-in ${storyTitleVisible ? 'visible' : ''}`}
          >
            <h2 className="section-title">Naša priča</h2>
          </div>

          <div ref={storyRef}>
            <StoryBlocks
              isVisible={storyVisible}
              className="mb-12 md:mb-14"
            />
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
        className={`section-shell relative z-20 bg-[linear-gradient(180deg,rgba(18,14,11,0.28)_0%,rgba(14,11,8,0.40)_100%)] backdrop-blur-[0.5px] scroll-fade-in ${navVisible ? 'visible' : ''}`}
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
