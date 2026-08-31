import { Link } from 'react-router-dom';
import { ArrowLeft, Leaf, Landmark, Flame, Heart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { storyBlocks } from '../data/storyBlocks';

const chapterIcons: LucideIcon[] = [Leaf, Landmark, Flame, Heart];

type ChapterPhoto = { src: string; alt: string; portrait?: boolean };

const chapterPhotos: Record<number, ChapterPhoto> = {
  0: {
    src: '/vocnjak_nasa_prica.jpg',
    alt: 'Voćnjak sa traktorom u selu Hrvaćani'
  },
  1: {
    src: '/voce-u-gajbama.jpg',
    alt: 'Svježe ubrano voće u gajbama'
  },
  2: {
    src: '/punjenjerakije.jpg',
    alt: 'Punjenje rakije u destileriji'
  },
  3: {
    src: '/prezentacija.jpg',
    alt: 'Prezentacija rakija Davidović na štandu',
    portrait: true
  }
};

function toParagraphs(body: string): string[] {
  const sentences = body
    .trim()
    .split(/(?<=\.)\s+(?=[A-ZŠĐČĆŽ])/u)
    .map((sentence) => sentence.trim())
    .filter(Boolean);

  if (sentences.length <= 1) {
    return [body];
  }

  const paragraphs: string[] = [];
  for (let index = 0; index < sentences.length; index += 2) {
    paragraphs.push(sentences.slice(index, index + 2).join(' '));
  }
  return paragraphs;
}

type ChapterProps = {
  title: string;
  body: string;
  Icon: LucideIcon;
  photo?: ChapterPhoto;
};

function AboutChapter({ title, body, Icon, photo }: ChapterProps) {
  const { ref, isVisible } = useScrollAnimation(0.12);

  return (
    <section
      ref={ref}
      className={`about-chapter scroll-fade-in ${isVisible ? 'visible' : ''}`}
    >
      <h2 className="about-chapter-title">
        <Icon className="about-chapter-icon" aria-hidden="true" />
        <span>{title}</span>
      </h2>

      {photo && (
        <figure className={`about-chapter-photo ${photo.portrait ? 'is-portrait' : ''}`}>
          <img src={photo.src} alt={photo.alt} className="about-photo-img" />
        </figure>
      )}

      {toParagraphs(body).map((paragraph) => (
        <p key={paragraph.slice(0, 48)} className="about-copy">
          {paragraph}
        </p>
      ))}
    </section>
  );
}

export default function AboutPage() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section className="about-page relative z-20 bg-transparent px-4 pb-24 pt-32 md:pt-36">
      <div className="container mx-auto max-w-3xl md:max-w-4xl">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-gold/90 transition-colors hover:text-gold-light group"
        >
          <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          <span>Nazad na početnu</span>
        </Link>

        <div
          ref={titleRef}
          className={`section-intro about-page-intro scroll-fade-in ${titleVisible ? 'visible' : ''}`}
        >
          <span className="section-eyebrow">Naša priča</span>
          <h1 className="section-title about-page-title">O nama</h1>
        </div>

        <article className="about-prose">
          {storyBlocks.map((block, index) => (
            <AboutChapter
              key={block.title}
              title={block.title}
              body={block.body}
              Icon={chapterIcons[index] ?? Leaf}
              photo={chapterPhotos[index]}
            />
          ))}
        </article>
      </div>
    </section>
  );
}
