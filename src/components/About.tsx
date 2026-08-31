import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Award, Heart, Leaf, Users } from 'lucide-react';

export default function About() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();

  return (
    <section id="o-nama" className="py-24 px-4 relative bg-gradient-to-b from-black/90 to-black/60">
      <div className="container mx-auto max-w-6xl">
        <div
          ref={titleRef}
          className={`text-center mb-16 scroll-scale ${titleVisible ? 'visible' : ''}`}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-medium tracking-wider mb-4">
            Naša Priča
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-cream mb-6">
            Tradicija od <span className="text-gold">1984</span>
          </h2>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Četiri decenije strasti, posvećenosti i nepokolebljivog kvaliteta
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div
            ref={textRef}
            className={`space-y-6 scroll-slide-left ${textVisible ? 'visible' : ''}`}
          >
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-gold to-transparent opacity-50"></div>
              <p className="text-xl text-cream/95 leading-relaxed font-light pl-6">
                <span className="text-gold font-serif text-2xl">Davidović 1984</span> je porodična destilerija koja već četiri decenije neguje tradiciju proizvodnje premium rakije u srcu Banjaluke.
              </p>
            </div>

            <p className="text-lg text-cream/85 leading-relaxed">
              Naša priča počinje davne 1984. godine, kada je osnivač započeo sa strastvenom proizvodnjom rakije koristeći isključivo tradicionalne metode destilacije i pažljivo birano voće iz našeg kraja.
            </p>

            <p className="text-lg text-cream/85 leading-relaxed">
              Svaka boca naše rakije nosi u sebi bogatstvo tradicije, ljubav prema zanatstvu i predanost kvalitetu koji se prenosi iz generacije u generaciju. To nije samo piće - to je umetnost pretočena u flašu.
            </p>

            <div className="flex items-center gap-3 pt-4">
              <div className="w-12 h-px bg-gold"></div>
              <p className="text-gold/90 italic text-sm">
                "Svaki gutljaj priča priču o našoj zemlji i tradiciji"
              </p>
            </div>
          </div>

          <div
            ref={cardRef}
            className={`relative scroll-slide-right ${cardVisible ? 'visible' : ''}`}
          >
            <div className="relative bg-gradient-to-br from-dark-lighter to-black border border-gold/30 rounded-2xl p-10 shadow-2xl backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold/10 rounded-full blur-2xl"></div>

              <div className="space-y-8 relative z-10">
                <div className="group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center flex-shrink-0 group-hover:from-gold/40 group-hover:to-gold/20 transition-all">
                      <span className="text-gold text-2xl font-bold">40+</span>
                    </div>
                    <div>
                      <h3 className="text-cream font-serif text-xl mb-2">Godine Tradicije</h3>
                      <p className="text-cream/70 text-sm leading-relaxed">Četiri decenije neprekidne posvećenosti kvalitetu</p>
                    </div>
                  </div>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

                <div className="group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center flex-shrink-0 group-hover:from-gold/40 group-hover:to-gold/20 transition-all">
                      <Leaf className="w-7 h-7 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-cream font-serif text-xl mb-2">100% Prirodno</h3>
                      <p className="text-cream/70 text-sm leading-relaxed">Odabrano voće, bez aditiva i veštačkih aroma</p>
                    </div>
                  </div>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

                <div className="group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center flex-shrink-0 group-hover:from-gold/40 group-hover:to-gold/20 transition-all">
                      <Award className="w-7 h-7 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-cream font-serif text-xl mb-2">Premium Kvalitet</h3>
                      <p className="text-cream/70 text-sm leading-relaxed">Tradicionalna destilacija po starim receptima</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={valuesRef}
          className={`grid grid-cols-1 md:grid-cols-4 gap-6 scroll-fade-in ${valuesVisible ? 'visible' : ''}`}
        >
          <div className="text-center p-6 rounded-xl bg-black/40 border border-gold/20 hover:border-gold/40 hover:bg-black/60 transition-all duration-300 group">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 mb-4 group-hover:scale-110 transition-transform">
              <Heart className="w-7 h-7 text-gold" />
            </div>
            <h4 className="text-cream font-serif text-lg mb-2">Strast</h4>
            <p className="text-cream/60 text-sm">Ljubav prema zanatstvu u svakoj kapi</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-black/40 border border-gold/20 hover:border-gold/40 hover:bg-black/60 transition-all duration-300 group">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 mb-4 group-hover:scale-110 transition-transform">
              <Award className="w-7 h-7 text-gold" />
            </div>
            <h4 className="text-cream font-serif text-lg mb-2">Kvalitet</h4>
            <p className="text-cream/60 text-sm">Bez kompromisa u svakom koraku</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-black/40 border border-gold/20 hover:border-gold/40 hover:bg-black/60 transition-all duration-300 group">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 mb-4 group-hover:scale-110 transition-transform">
              <Users className="w-7 h-7 text-gold" />
            </div>
            <h4 className="text-cream font-serif text-lg mb-2">Porodica</h4>
            <p className="text-cream/60 text-sm">Tradicija preneta kroz generacije</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-black/40 border border-gold/20 hover:border-gold/40 hover:bg-black/60 transition-all duration-300 group">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 mb-4 group-hover:scale-110 transition-transform">
              <Leaf className="w-7 h-7 text-gold" />
            </div>
            <h4 className="text-cream font-serif text-lg mb-2">Priroda</h4>
            <p className="text-cream/60 text-sm">Čisto voće, autentičan ukus</p>
          </div>
        </div>
      </div>
    </section>
  );
}
