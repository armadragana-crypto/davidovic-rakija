import { useEffect, useRef } from 'react';

/**
 * Stands in for the stylesheet's scroll timeline where the browser has none,
 * publishing --hero-scroll from 0 to 1 as the hero is scrolled past so the
 * bottle, copy and strip shrink and fade.
 *
 * It deliberately does not reproduce the part where they hold their position:
 * scroll events arrive a frame behind the compositor, and moving things from
 * them judders badly on a phone, while a fade a frame late is invisible.
 */
export function useHeroScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const hero = ref.current;
    if (!hero) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // A scroll timeline in the stylesheet does this better; only stand in where
    // the browser has none.
    if (CSS.supports('animation-timeline: scroll()')) return;

    let frame = 0;
    let last = -1;

    const update = () => {
      frame = 0;
      // Matches the 45svh the stylesheet spreads the effect over.
      const span = Math.max(240, window.innerHeight * 0.45);
      const scrolled = Math.min(Math.max(window.scrollY, 0), span);
      if (scrolled === last) return;
      last = scrolled;

      hero.style.setProperty('--hero-scroll', (scrolled / span).toFixed(3));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return ref;
}
