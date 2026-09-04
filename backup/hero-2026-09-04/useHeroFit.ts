import { useEffect, useRef } from 'react';

/**
 * Keeps the hero copy inside its own column whatever size the browser decides
 * to render text at. A Samsung Internet text size, an Android font scale or a
 * web font that never loaded all widen the title beyond its track, and the only
 * thing CSS can do about it is break the word. Measure what the text actually
 * wants instead and hand the stylesheet a multiplier that makes it fit, so the
 * composition stays as designed and the bottle never has to move.
 */
export function useHeroFit<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const copy = ref.current;
    if (!copy) return;

    /** Width the element would take if it were free to run on one line. */
    const naturalWidth = (element: HTMLElement) => {
      const probe = element.cloneNode(true) as HTMLElement;
      probe.style.cssText +=
        ';position:absolute;top:0;left:-9999px;visibility:hidden;width:max-content;max-width:none;' +
        'margin:0;transform:none;transition:none;animation:none;--hero-fit:1';
      copy.appendChild(probe);
      const { width } = probe.getBoundingClientRect();
      probe.remove();
      return width;
    };

    let applied = 1;

    const fit = () => {
      const style = getComputedStyle(copy);
      const available =
        copy.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
      if (available <= 0) return;

      const parts = copy.querySelectorAll<HTMLElement>('.hero-shot-title, .hero-shot-cta');
      const widest = Math.max(0, ...Array.from(parts, naturalWidth));
      if (!widest) return;

      // Leave a sliver of slack: a rounding difference should not cost a line.
      const next = Math.min(1, Math.max(0.5, (available * 0.98) / widest));
      if (Math.abs(next - applied) < 0.005) return;

      applied = next;
      copy.style.setProperty('--hero-fit', String(next));
    };

    fit();
    // Web fonts land after the first paint and change every measurement.
    document.fonts?.ready.then(fit).catch(() => {});

    const observer = new ResizeObserver(fit);
    observer.observe(copy);
    window.addEventListener('orientationchange', fit);

    return () => {
      observer.disconnect();
      window.removeEventListener('orientationchange', fit);
    };
  }, []);

  return ref;
}
