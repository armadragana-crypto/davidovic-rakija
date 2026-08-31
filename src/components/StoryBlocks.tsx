import { useEffect, useRef, useState } from 'react';
import { Leaf, Landmark, Flame, Heart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { storyBlocks } from '../data/storyBlocks';

const storyIcons: LucideIcon[] = [Leaf, Landmark, Flame, Heart];

const storyTabLabels = [
  'Selo moje',
  'Istorija destilerije',
  'Način proizvodnje',
  'Zadovoljstvo klijenata'
];

const storyPhotos = [
  { src: '/vocnjak_nasa_prica.jpg', alt: 'Voćnjak sa traktorom u selu Hrvaćani' },
  { src: '/voce-u-gajbama.jpg', alt: 'Svježe ubrano voće u gajbama' },
  { src: '/punjenjerakije.jpg', alt: 'Punjenje rakije u destileriji' },
  { src: '/prezentacija.jpg', alt: 'Prezentacija rakija Davidović na štandu' }
];

type StoryBlocksProps = {
  isVisible?: boolean;
  className?: string;
};

const MIN_PANEL_FONT = 9;
const MAX_PANEL_FONT = 17;

export default function StoryBlocks({ className = '' }: StoryBlocksProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const panelsRef = useRef<HTMLDivElement>(null);

  // The section is capped to one screen and never scrolls inside, so the longest
  // chapter decides the type size. The panel row is a fixed 1fr track, which keeps
  // clientHeight stable while only scrollHeight reacts to the font size.
  useEffect(() => {
    const panels = panelsRef.current;
    if (!panels) return undefined;

    const desktop = window.matchMedia('(min-width: 900px)');
    let frame = 0;

    const fitCopy = () => {
      panels.style.fontSize = '';

      if (!desktop.matches) return;

      const cards = Array.from(panels.children) as HTMLElement[];
      if (cards.length === 0 || cards[0].clientHeight === 0) return;

      const fitsAt = (size: number) => {
        panels.style.fontSize = `${size}px`;
        return cards.every((card) => card.scrollHeight <= card.clientHeight + 1);
      };

      let low = MIN_PANEL_FONT;
      let high = MAX_PANEL_FONT;
      let best = MIN_PANEL_FONT;

      while (high - low > 0.2) {
        const mid = (low + high) / 2;
        if (fitsAt(mid)) {
          best = mid;
          low = mid;
        } else {
          high = mid;
        }
      }

      panels.style.fontSize = `${best}px`;
    };

    const scheduleFit = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(fitCopy);
    };

    scheduleFit();
    document.fonts?.ready.then(scheduleFit).catch(() => undefined);

    const observer = new ResizeObserver(scheduleFit);
    observer.observe(panels);

    window.addEventListener('resize', scheduleFit);
    desktop.addEventListener('change', scheduleFit);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('resize', scheduleFit);
      desktop.removeEventListener('change', scheduleFit);
    };
  }, []);

  return (
    <div className={`story-blocks-root ${className}`.trim()}>
      <div className="story-split">
        <div className="story-tabs">
          <div className="story-tab-list" role="tablist" aria-label="Naša priča">
            {storyBlocks.map((block, index) => {
              const Icon = storyIcons[index] ?? Leaf;
              const isActive = activeIndex === index;

              return (
                <button
                  key={block.title}
                  type="button"
                  role="tab"
                  id={`story-tab-${index}`}
                  aria-selected={isActive}
                  aria-controls={`story-tab-panel-${index}`}
                  className={`story-tab ${isActive ? 'is-active' : ''}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                >
                  <span className="story-tab-index">{String(index + 1).padStart(2, '0')}</span>
                  <Icon className="story-tab-icon" aria-hidden="true" />
                  <span className="story-tab-label">{storyTabLabels[index] ?? block.title}</span>
                </button>
              );
            })}
          </div>

          <div ref={panelsRef} className="story-tab-panels">
            {storyBlocks.map((block, index) => {
              const isActive = activeIndex === index;

              return (
                <article
                  key={block.title}
                  id={`story-tab-panel-${index}`}
                  role="tabpanel"
                  aria-labelledby={`story-tab-${index}`}
                  aria-hidden={!isActive}
                  className={`story-tab-panel ${isActive ? 'is-active' : ''}`}
                >
                  <h3 className="story-tab-heading">{block.title}</h3>
                  <p className="story-tab-copy">{block.body}</p>
                </article>
              );
            })}
          </div>
        </div>

        <aside className="story-visual" aria-hidden="true">
          <div className="story-visual-frame">
            {storyPhotos.map((photo, index) => (
              <img
                key={photo.src}
                src={photo.src}
                alt=""
                className={`story-visual-img ${activeIndex === index ? 'is-active' : ''}`}
              />
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
