import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Početna' },
  { to: '/o-nama', label: 'O nama' },
  { to: '/ponuda', label: 'Ponuda' },
  { to: '/galerija', label: 'Galerija' },
  { to: '/kontakt', label: 'Kontakt' },
];

function isActivePath(pathname: string, to: string) {
  if (to === '/') return pathname === '/';
  return pathname === to || pathname.startsWith(`${to}/`);
}

export default function Navigation() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return undefined;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 wood-texture-nav">
      <div className="container mx-auto px-3 sm:px-4 pt-3 md:pt-4">
        <div className="relative flex items-center justify-between gap-3 rounded-[1.75rem] border border-gold/15 bg-black/30 px-3 py-2 shadow-[0_14px_38px_rgba(0,0,0,0.22)] backdrop-blur-md md:px-5 md:py-3">
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src="/cropped-logo-no_bg-1-300x148.png"
              alt="Davidović 1984 Logo"
              className="h-11 sm:h-12 md:h-16 lg:h-20 w-auto drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]"
            />
          </Link>

          <nav className="hidden fold:flex items-center gap-0.5 sm:gap-1.5 md:gap-2 rounded-full border border-gold/10 bg-black/20 px-1.5 py-1 sm:px-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                aria-current={isActivePath(location.pathname, link.to) ? 'page' : undefined}
                className={`rounded-full px-2 py-2 text-[10px] sm:text-xs md:text-sm font-medium tracking-[0.08em] uppercase transition-all duration-300 whitespace-nowrap ${
                  isActivePath(location.pathname, link.to)
                    ? 'bg-gold/14 text-gold shadow-[inset_0_0_0_1px_rgba(212,160,95,0.35)]'
                    : 'text-cream/85 hover:bg-white/5 hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={isMobileMenuOpen ? 'Zatvori meni' : 'Otvori meni'}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="fold:hidden inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/20 bg-black/35 text-gold shadow-[0_10px_24px_rgba(0,0,0,0.28)] transition-all duration-300 hover:border-gold/40 hover:bg-black/50 hover:text-[#f0c98a] focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2 focus:ring-offset-black/70"
          >
            {isMobileMenuOpen ? <X size={22} strokeWidth={2.1} /> : <Menu size={22} strokeWidth={2.1} />}
          </button>

          {isMobileMenuOpen && (
            <>
              <button
                type="button"
                aria-label="Zatvori navigaciju"
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 z-40 bg-black/55 backdrop-blur-[2px] fold:hidden"
              />

              <div className="absolute left-0 right-0 top-[calc(100%+0.75rem)] z-50 fold:hidden animate-fadeIn">
                <div className="wood-texture-menu overflow-hidden rounded-[1.6rem] border border-gold/20 shadow-[0_20px_45px_rgba(0,0,0,0.42)]">
                  <nav
                    id="mobile-navigation-menu"
                    className="flex flex-col gap-2 p-3 sm:p-4"
                  >
                    {navLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        aria-current={isActivePath(location.pathname, link.to) ? 'page' : undefined}
                        className={`rounded-2xl border px-4 py-3.5 text-left text-sm font-medium tracking-[0.08em] uppercase transition-all duration-300 ${
                          isActivePath(location.pathname, link.to)
                            ? 'border-gold/35 bg-gold/12 text-gold shadow-[inset_0_0_0_1px_rgba(212,160,95,0.2)]'
                            : 'border-transparent bg-white/[0.03] text-cream/90 hover:border-gold/20 hover:bg-white/[0.06] hover:text-gold'
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
