import { Link } from 'react-router-dom';
import { MapPin, Phone, Instagram, Facebook, MessageCircle, ArrowLeft } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ContactPage() {
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation();
  const { ref: tilesRef, isVisible: tilesVisible } = useScrollAnimation();

  return (
    <section className="contact-hub relative">
      <div className="contact-hub-back relative z-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gold/90 hover:text-gold-light transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Nazad na početnu</span>
        </Link>
      </div>

      <div className="contact-hub-inner relative z-10">
        <div ref={introRef} className={`contact-intro scroll-scale ${introVisible ? 'visible' : ''}`}>
          <span className="section-eyebrow">
            <MessageCircle className="w-4 h-4" />
            Kontaktirajte nas
          </span>
          <h1 className="contact-title">Javite Nam Se</h1>
          <p className="contact-lead">Tu smo za sva vaša pitanja, porudžbine i sugestije.</p>
          <a href="tel:065531545" className="contact-call">
            <Phone className="h-4 w-4" strokeWidth={2.4} />
            065 531 545
          </a>
        </div>

        <div ref={tilesRef} className={`contact-grid scroll-fade-in ${tilesVisible ? 'visible' : ''}`}>
          <a href="tel:065531545" className="contact-tile">
            <span className="contact-tile-icon">
              <Phone className="h-5 w-5" />
            </span>
            <span className="contact-tile-label">Telefon</span>
            <span className="contact-tile-value">065 531 545</span>
            <span className="contact-tile-note">Svakim danom od 08 do 20h</span>
          </a>

          <div className="contact-tile">
            <span className="contact-tile-icon">
              <MapPin className="h-5 w-5" />
            </span>
            <span className="contact-tile-label">Adresa</span>
            <span className="contact-tile-value">
              Hrvaćani bb
              <br />
              78430 Prnjavor
            </span>
            <span className="contact-tile-note">Bosna i Hercegovina</span>
          </div>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-tile"
          >
            <span className="contact-tile-icon contact-tile-icon--social contact-tile-icon--ig">
              <Instagram className="h-6 w-6" strokeWidth={1.8} />
            </span>
            <span className="contact-tile-label">Instagram</span>
            <span className="contact-tile-value">Posjetite naš profil</span>
            <span className="contact-tile-note">Novosti i fotografije iz destilerije</span>
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-tile"
          >
            <span className="contact-tile-icon contact-tile-icon--social contact-tile-icon--fb">
              <Facebook className="h-6 w-6" strokeWidth={1.8} />
            </span>
            <span className="contact-tile-label">Facebook</span>
            <span className="contact-tile-value">Posjetite našu stranicu</span>
            <span className="contact-tile-note">Zajednica ljubitelja rakije</span>
          </a>
        </div>
      </div>
    </section>
  );
}
