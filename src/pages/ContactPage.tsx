import { Link } from 'react-router-dom';
import { MapPin, Phone, Instagram, Facebook, MessageCircle, ArrowLeft } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ContactPage() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contactRef, isVisible: contactVisible } = useScrollAnimation();

  return (
    <section className="pt-32 md:pt-36 pb-24 px-4 relative min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gold/90 hover:text-gold-light transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Nazad na početnu</span>
        </Link>

        <div
          ref={titleRef}
          className={`section-intro scroll-scale ${titleVisible ? 'visible' : ''}`}
        >
          <span className="section-eyebrow">
            <MessageCircle className="w-4 h-4" />
            Kontaktirajte Nas
          </span>
          <h1 className="section-title">
            Javite Nam Se
          </h1>
          <p className="section-subtitle">
            Tu smo za sva vaša pitanja, porudžbine i sugestije
          </p>
        </div>

        <div
          ref={contactRef}
          className={`grid fold:grid-cols-2 gap-6 lg:gap-8 scroll-fade-in ${contactVisible ? 'visible' : ''}`}
        >
            <div className="group">
              <div className="surface-card flex items-start gap-5 p-6 rounded-[1.4rem] hover:border-gold/40 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5">
                <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 group-hover:scale-110 transition-all">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="text-cream font-serif text-xl mb-2">Telefon</h3>
                  <a
                    href="tel:065531545"
                    className="text-cream/80 text-lg hover:text-gold transition-colors block"
                  >
                    065 531 545
                  </a>
                  <p className="text-cream/60 text-sm mt-1">Pozovite nas za bilo kakva pitanja</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="surface-card flex items-start gap-5 p-6 rounded-[1.4rem] hover:border-gold/40 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5">
                <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 group-hover:scale-110 transition-all">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="text-cream font-serif text-xl mb-2">Adresa</h3>
                  <p className="text-cream/80 text-lg">Marka Lipovca 16</p>
                  <p className="text-cream/80 text-lg">78000 Banja Luka</p>
                  <p className="text-cream/60 text-sm mt-1">Bosna i Hercegovina</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="surface-card flex items-start gap-5 p-6 rounded-[1.4rem] hover:border-gold/40 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5">
                <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 group-hover:scale-110 transition-all">
                  <Instagram className="w-6 h-6 text-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="text-cream font-serif text-xl mb-2">Instagram</h3>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/80 text-lg hover:text-gold transition-colors block"
                  >
                    Posjetite naš profil
                  </a>
                  <p className="text-cream/60 text-sm mt-1">Novosti, fotografije i priče iz destilerije</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="surface-card flex items-start gap-5 p-6 rounded-[1.4rem] hover:border-gold/40 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5">
                <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 group-hover:scale-110 transition-all">
                  <Facebook className="w-6 h-6 text-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="text-cream font-serif text-xl mb-2">Facebook</h3>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/80 text-lg hover:text-gold transition-colors block"
                  >
                    Posjetite našu stranicu
                  </a>
                  <p className="text-cream/60 text-sm mt-1">Pridružite se zajednici ljubitelja rakije</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
