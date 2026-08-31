import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="pocetna" className="pt-24 pb-24 px-4 relative min-h-screen flex items-start" style={{ overflow: 'clip' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black/90"></div>

      <div
        className="absolute inset-0 opacity-20"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        <div className="hero-decorative-bg"></div>
      </div>

      <div className="w-full relative z-10 pt-4">
        <div className="text-center">
          <h1
            className={`font-serif text-cream mb-3 leading-[1.1] tracking-tight scroll-scale ${isLoaded ? 'visible' : ''}`}
            style={{
              fontSize: 'clamp(2rem, 10vw, 6rem)',
              whiteSpace: 'nowrap',
            }}
          >
            Rakija Davidovic
          </h1>

          <div className="max-w-5xl mx-auto px-4">
            <p
              className={`text-lg md:text-xl text-cream/90 mb-8 leading-relaxed max-w-2xl mx-auto font-light scroll-fade-in stagger-1 ${isLoaded ? 'visible' : ''}`}
            >
              Uzivajte u bogatstvu tradicije i okusa rakije Davidovic, jos od 1984. godine sa vama.
            </p>

            <div className="mb-12" style={{ opacity: 1 }}>
              <img
                src="/logodavidovic.png"
                alt="Rakija Davidovic Logo"
                className="mx-auto h-auto"
                style={{ maxWidth: 'clamp(200px, 35vw, 400px)', display: 'block' }}
              />
            </div>

            <div
              className={`flex flex-row gap-4 justify-center items-center scroll-fade-in stagger-3 ${isLoaded ? 'visible' : ''}`}
            >
              <Link
                to="/kontakt"
                className="btn-primary text-base"
              >
                <span>Kontakt</span>
              </Link>
              <Link
                to="/ponuda"
                className="btn-secondary text-base"
              >
                <span>Nasa Ponuda</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gold/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gold rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
