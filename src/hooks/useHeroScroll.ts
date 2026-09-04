import { useEffect, useRef } from 'react';

/**
 * Drives the hero's scroll effect through two custom properties.
 *
 * --hero-hold is the distance the page has scrolled, so the bottle, copy and
 * strip can translate down by exactly that much and stay put on screen instead
 * of riding up with the page. --hero-scroll runs 0 to 1 over the same distance
 * and shrinks and fades them where they stand. Both stop once the effect has
 * played out, leaving the hero to scroll away normally.
 *
 * Done in JS rather than a scroll timeline because Safari still has none.
 */
export function useHeroScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const hero = ref.current;
    if (!hero) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;
    let last = -1;

    const update = () => {
      frame = 0;
      // Held content sinks toward the section below as the page moves, so the
      // effect has to be spent before the two meet: a little under half a
      // screen of scrolling.
      const span = Math.max(240, window.innerHeight * 0.45);
      const scrolled = Math.min(Math.max(window.scrollY, 0), span);
      if (scrolled === last) return;
      last = scrolled;

      hero.style.setProperty('--hero-hold', `${Math.round(scrolled)}px`);
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
