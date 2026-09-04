import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, ArrowLeft } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/* The official marks, drawn as solid glyphs. Lucide's outlines read as generic
   UI icons next to the real thing. */
function InstagramMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function PhoneMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

/* The Google marker teardrop, which is what people recognise as Maps. */
function MapsMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}

/* Maps in its own colours, which the gold marker above fades into on hover. */
function MapsBrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 92.3 132.3" aria-hidden="true" className={className}>
      <path fill="#1a73e8" d="M60.2 2.2C55.8.8 51 0 46.1 0 32 0 19.3 6.4 10.8 16.5l21.8 18.3L60.2 2.2z" />
      <path fill="#ea4335" d="M10.8 16.5C4.1 24.5 0 34.9 0 46.1c0 8.7 1.7 15.7 4.6 22l28-33.3-21.8-18.3z" />
      <path
        fill="#4285f4"
        d="M46.2 28.5c9.8 0 17.7 7.9 17.7 17.7 0 4.3-1.6 8.3-4.2 11.4 0 0 13.9-16.6 27.5-32.7-5.6-10.8-15.3-19-27-22.7L32.6 34.8c3.3-3.8 8.1-6.3 13.6-6.3"
      />
      <path
        fill="#fbbc04"
        d="M46.2 63.8c-9.8 0-17.7-7.9-17.7-17.7 0-4.3 1.5-8.3 4.1-11.3l-28 33.3c4.8 10.6 12.8 19.2 21 29.9l34.1-40.5c-3.3 3.9-8.1 6.3-13.5 6.3"
      />
      <path
        fill="#34a853"
        d="M59.1 109.2c15.4-24.1 33.3-35 33.3-63 0-7.7-1.9-14.9-5.2-21.3L25.6 98c2.6 3.4 5.3 7.3 7.9 11.3 9.4 14.5 6.8 23.1 12.8 23.1s3.4-8.7 12.8-23.2"
      />
    </svg>
  );
}

/* The bare f, not the badge: the plate behind it is the blue disc, exactly as
   the app icon has it. */
function FacebookMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 512" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
    </svg>
  );
}

/* The distillery's own pages. Both the link and the delayed opening read from
   here, so a new address is one line rather than four. Until the profiles are
   made, these point at the plain front doors of each network. */
const INSTAGRAM_URL = 'https://www.instagram.com/';
const FACEBOOK_URL = 'https://www.facebook.com/';

/* The mark's swell and colour take 0.4s, so this waits for that and no longer:
   any more and the finished mark just sits there before the app arrives. */
const PRESS_HOLD_MS = 430;

/* Past this, a press clock is stale rather than long. */
const STALE_PRESS_MS = 5000;

export default function ContactPage() {
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation();
  const { ref: tilesRef, isVisible: tilesVisible } = useScrollAnimation();
  const [pressed, setPressed] = useState<string | null>(null);
  const [hot, setHot] = useState<string | null>(null);
  const timer = useRef<number>();
  const cooldown = useRef<number>();
  const touchStartedAt = useRef(0);
  const byMouse = useRef(false);

  const cancelPress = useCallback(() => {
    window.clearTimeout(timer.current);
    window.clearTimeout(cooldown.current);
    touchStartedAt.current = 0;
    setPressed(null);
    setHot(null);
  }, []);

  /* A mouse lights the tile on its way over. This is read from the event rather
     than from a hover media query, which some phone browsers answer wrongly. */
  const enter = (key: string) => (event: React.PointerEvent) => {
    if (event.pointerType === 'mouse') setHot(key);
  };

  const leave = (event: React.PointerEvent) => {
    if (event.pointerType === 'mouse') setHot(null);
  };

  /* Once the link is handed over, the mark stays lit for as long as the page
     is still on screen. How long that is differs wildly: the map is taken up
     at once, Facebook takes its time, and cooling on a timer meant the slower
     ones were watched fading before they left, as if each tile had its own
     timing. The cooling belongs to the leaving itself, below, with a long stop
     for a tap that in the end opened nothing. */
  const holdWhileLeaving = useCallback(() => {
    cooldown.current = window.setTimeout(() => {
      touchStartedAt.current = 0;
      setPressed(null);
      setHot(null);
    }, 2500);
  }, []);

  /* Coming back from the app restores this page from the back forward cache,
     state and all, which left the tile still lit. The window's focus is no
     help here: coming back, the phone withholds it until the screen is
     touched, so it lands in the middle of the next tap and wipes the very
     press that tap just began. */
  useEffect(() => {
    // The mark is put out where nobody can see it go: with the page hidden
    // behind the app, or on the way back before it is drawn again.
    const clear = () => cancelPress();
    const clearWhenHidden = () => {
      if (document.visibilityState === 'hidden') cancelPress();
    };
    /* Read on the way down, before anything else runs, so the click that
       follows knows what moved it even if the press itself was lost. */
    const notePointer = (event: PointerEvent) => {
      byMouse.current = event.pointerType === 'mouse';
    };

    window.addEventListener('pageshow', clear);
    window.addEventListener('pagehide', clear);
    document.addEventListener('visibilitychange', clearWhenHidden);
    document.addEventListener('pointerdown', notePointer, true);

    return () => {
      window.clearTimeout(timer.current);
      window.clearTimeout(cooldown.current);
      window.removeEventListener('pageshow', clear);
      window.removeEventListener('pagehide', clear);
      document.removeEventListener('visibilitychange', clearWhenHidden);
      document.removeEventListener('pointerdown', notePointer, true);
    };
  }, [cancelPress]);

  /* A pointer shows the change on hover long before the click lands. A finger
     has no such moment, so the mark turns the instant it touches down. Touch
     events rather than pointer ones: a mouse never fires these, so there is no
     pointerType to read and get wrong. */
  const startPress = (key: string) => () => {
    window.clearTimeout(timer.current);
    touchStartedAt.current = Date.now();
    setPressed(key);
  };

  /* Release only opens once the turn has been seen; a finger held there longer
     than that goes straight through. */
  const openWhenSeen = (key: string, href: string) => (event: React.MouseEvent) => {
    // A mouse saw the turn on hover already, so it goes straight through. The
    // question is what moved the click, not whether a press survived: on the
    // way back from an app the press is easily lost, and reading it as a mouse
    // opened the next tile on the spot, with no turn at all.
    if (byMouse.current) return;

    const held = touchStartedAt.current ? Date.now() - touchStartedAt.current : 0;
    // Anything this old is a clock left over from a page the phone restored
    // rather than reloaded, so the turn starts from the beginning.
    const seen = held >= 0 && held < STALE_PRESS_MS ? held : 0;
    if (seen >= PRESS_HOLD_MS) {
      holdWhileLeaving();
      return;
    }

    event.preventDefault();
    touchStartedAt.current = Date.now() - seen;
    setPressed(key);
    timer.current = window.setTimeout(() => {
      holdWhileLeaving();
      window.location.href = href;
    }, PRESS_HOLD_MS - seen);
  };

  const tileClass = (key: string) =>
    `contact-tile${pressed === key ? ' is-pressed' : ''}${hot === key ? ' is-hot' : ''}`;

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
          <a
            href="tel:065531545"
            className={tileClass('tel')}
            onPointerEnter={enter('tel')}
            onPointerLeave={leave}
            onTouchStart={startPress('tel')}
            onTouchCancel={cancelPress}
            onClick={openWhenSeen('tel', 'tel:065531545')}
          >
            <span className="contact-tile-icon contact-tile-icon--tel">
              <PhoneMark className="h-6 w-6" />
            </span>
            <span className="contact-tile-label">Telefon</span>
            <span className="contact-tile-value">065 531 545</span>
            <span className="contact-tile-note">Svakim danom od 08 do 20h</span>
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Hrva%C4%87ani%2C%2078430%20Prnjavor"
            target="_blank"
            rel="noopener noreferrer"
            className={tileClass('map')}
            onPointerEnter={enter('map')}
            onPointerLeave={leave}
            onTouchStart={startPress('map')}
            onTouchCancel={cancelPress}
            onClick={openWhenSeen(
              'map',
              'https://www.google.com/maps/search/?api=1&query=Hrva%C4%87ani%2C%2078430%20Prnjavor'
            )}
          >
            <span className="contact-tile-icon contact-tile-icon--map">
              <MapsMark className="h-6 w-6 contact-tile-glyph" />
              <MapsBrandMark className="contact-tile-brand" />
            </span>
            <span className="contact-tile-label">Adresa</span>
            <span className="contact-tile-value">
              Hrvaćani bb
              <br />
              78430 Prnjavor
            </span>
            <span className="contact-tile-note">Bosna i Hercegovina</span>
          </a>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={tileClass('ig')}
            onPointerEnter={enter('ig')}
            onPointerLeave={leave}
            onTouchStart={startPress('ig')}
            onTouchCancel={cancelPress}
            onClick={openWhenSeen('ig', INSTAGRAM_URL)}
          >
            <span className="contact-tile-icon contact-tile-icon--ig">
              <InstagramMark className="h-6 w-6" />
            </span>
            <span className="contact-tile-label">Instagram</span>
            <span className="contact-tile-value">Posjetite naš profil</span>
            <span className="contact-tile-note">Novosti i fotografije iz destilerije</span>
          </a>

          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={tileClass('fb')}
            onPointerEnter={enter('fb')}
            onPointerLeave={leave}
            onTouchStart={startPress('fb')}
            onTouchCancel={cancelPress}
            onClick={openWhenSeen('fb', FACEBOOK_URL)}
          >
            <span className="contact-tile-icon contact-tile-icon--fb">
              <FacebookMark className="h-7 w-7" />
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
