import { Fragment, useEffect, useRef, useState } from 'react';
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

/* The still stands taller than the frame is deep, so cropping it to fill would
   cut off its head and its fire box. It is shown whole instead, over a blurred
   copy of itself, which fills the corners the photo cannot reach. */
const storyPhotos = [
  { src: '/vocnjak_nasa_prica.jpg', alt: 'Voćnjak u cvatu u selu Hrvaćani' },
  { src: '/punjenjerakije.jpg', alt: 'Napunjene flaše šljivovice pred kotlovima u destileriji' },
  { src: '/kazan.jpg', alt: 'Bakarni kazan u destileriji', whole: true },
  { src: '/prezentacija.jpg', alt: 'Prezentacija rakija Davidović na štandu' }
];

type StoryBlocksProps = {
  isVisible?: boolean;
  className?: string;
};

export default function StoryBlocks({ className = '' }: StoryBlocksProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const panelsRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLElement | null)[]>([]);
  const hasMeasured = useRef(false);

  // All panels share one grid cell so they can cross-fade, which would otherwise leave
  // the container as tall as the longest chapter. Driving its height from the active
  // panel lets the card shrink to the chapter on screen; taller inactive panels overflow
  // harmlessly because they are hidden.
  useEffect(() => {
    const panels = panelsRef.current;
    const active = panelRefs.current[activeIndex];
    if (!panels || !active) return undefined;

    const applyHeight = () => {
      const height = `${active.offsetHeight}px`;

      if (hasMeasured.current) {
        panels.style.height = height;
        return;
      }

      // Skip the animation for the very first measurement, otherwise the card
      // visibly collapses from the longest chapter's height on page load.
      panels.style.transition = 'none';
      panels.style.height = height;
      void panels.offsetHeight;
      panels.style.transition = '';
      hasMeasured.current = true;
    };

    applyHeight();
    document.fonts?.ready.then(applyHeight).catch(() => undefined);

    const observer = new ResizeObserver(applyHeight);
    observer.observe(active);

    return () => observer.disconnect();
  }, [activeIndex]);

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
                  ref={(node) => {
                    panelRefs.current[index] = node;
                  }}
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
              <Fragment key={photo.src}>
                {photo.whole && (
                  <img
                    src={photo.src}
                    alt=""
                    className={`story-visual-img story-visual-haze ${
                      activeIndex === index ? 'is-active' : ''
                    }`}
                  />
                )}
                <img
                  src={photo.src}
                  alt=""
                  className={`story-visual-img ${photo.whole ? 'is-whole' : ''} ${
                    activeIndex === index ? 'is-active' : ''
                  }`}
                />
              </Fragment>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
