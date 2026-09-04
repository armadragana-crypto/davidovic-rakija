import { Link } from 'react-router-dom';
import { Phone, MessageCircle, ArrowLeft } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ContactTiles, { PHONE_NUMBER, PHONE_URL } from '../components/ContactTiles';

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
          <a href={PHONE_URL} className="contact-call">
            <Phone className="h-4 w-4" strokeWidth={2.4} />
            {PHONE_NUMBER}
          </a>
        </div>

        <ContactTiles ref={tilesRef} className={`scroll-fade-in ${tilesVisible ? 'visible' : ''}`} />
      </div>
    </section>
  );
}
