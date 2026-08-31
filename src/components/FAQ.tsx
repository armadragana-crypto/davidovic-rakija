import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'Koliko dugo traje proces destilacije?',
    answer: 'Naš proces destilacije prati tradicionalne metode koje su usavršavane decenijama. Sve rakije prolaze kroz pažljivu destilaciju i period odležavanja kako bi postigle savršen balans ukusa. Vreme zavisi od tipa rakije, ali kvalitet nikada nije kompromis.'
  },
  {
    id: 2,
    question: 'Da li koristite prirodne sastojke?',
    answer: 'Apsolutno! Koristimo isključivo prirodno voće odabrano sa pažnjom, bez ikakvih veštačkih dodataka, aroma ili konzervansa. Svaka kap naše rakije je čista priroda i tradicija.'
  },
  {
    id: 3,
    question: 'Mogu li posetiti vašu destileriju?',
    answer: 'Naravno! Pozivamo vas da nas posetite i upoznate se sa našim procesom proizvodnje. Za zakazivanje posete i degustacije, kontaktirajte nas na broj telefona ili email.'
  },
  {
    id: 4,
    question: 'Koje su najpopularnije rakije?',
    answer: 'Naša šljivovica i rakija od kajsije su među najtraženijim, ali svaka od naših rakija - dunja, kruška i jabuka - ima svoje cenjene ljubitelje. Preporučujemo da probate različite vrste kako biste pronašli svog favorita!'
  },
  {
    id: 5,
    question: 'Kako se pravilno čuva rakija?',
    answer: 'Rakiju treba čuvati na tamnom i hladnom mjestu, dalje od direktne sunčeve svjetlosti. Idealna temperatura je između 15-20°C. Dobro zatvorena boca može očuvati kvalitet rakije godinama.'
  },
  {
    id: 6,
    question: 'Kolika je jačina vaših rakija?',
    answer: 'Naše rakije imaju standardnu jačinu od 40% do 45% alkohola, što je idealan balans za punu aromu i glatko piće. Na zahtjev možemo pripremiti i jače varijante.'
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation();

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 px-4 relative bg-gradient-to-b from-black/80 to-black/60">
      <div className="container mx-auto max-w-4xl">
        <div
          ref={titleRef}
          className={`text-center mb-16 scroll-scale ${titleVisible ? 'visible' : ''}`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-medium tracking-wider mb-4">
            <HelpCircle className="w-4 h-4" />
            Često Postavljana Pitanja
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-cream mb-6">
            Imate Pitanja?
          </h2>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Odgovori na najčešća pitanja naših kupaca
          </p>
        </div>

        <div
          ref={faqRef}
          className={`space-y-4 scroll-fade-in ${faqVisible ? 'visible' : ''}`}
        >
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="group"
              style={{
                animation: faqVisible ? `fadeInUp 0.5s ease-out ${index * 0.1}s both` : 'none'
              }}
            >
              <div className="relative bg-gradient-to-br from-dark-lighter to-black border border-gold/20 rounded-xl overflow-hidden hover:border-gold/40 transition-all duration-300">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-8 py-6 flex items-center justify-between gap-4 text-left group-hover:bg-black/30 transition-colors"
                >
                  <span className="text-cream font-serif text-lg md:text-xl flex-1">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openId === faq.id ? 'bg-gold/20 border-gold/50 rotate-180' : 'group-hover:bg-gold/15'}`}>
                    {openId === faq.id ? (
                      <Minus className="w-5 h-5 text-gold" />
                    ) : (
                      <Plus className="w-5 h-5 text-gold" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-6">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-4"></div>
                    <p className="text-cream/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent transition-opacity duration-300 ${openId === faq.id ? 'opacity-100' : 'opacity-0'}`}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-cream/70 mb-6">
            Niste pronašli odgovor na vaše pitanje?
          </p>
          <a
            href="tel:066197539"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-gold to-gold/80 text-dark font-semibold hover:from-gold/90 hover:to-gold/70 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <HelpCircle className="w-5 h-5" />
            Kontaktirajte Nas Direktno
          </a>
        </div>
      </div>
    </section>
  );
}
