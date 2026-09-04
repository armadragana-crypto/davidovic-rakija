import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, Wine } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { getPonudaCategory } from '../data/ponudaCategories';

export default function PonudaCategoryPage() {
  const { slug } = useParams();
  const category = slug ? getPonudaCategory(slug) : undefined;
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0, true);

  if (!category) {
    return <Navigate to="/ponuda" replace />;
  }

  return (
    <section className="relative min-h-screen px-3 pb-[calc(4.5rem+env(safe-area-inset-bottom,0px))] pt-28 sm:px-4 md:pb-24 md:pt-36">
      <div className="container relative z-10 mx-auto max-w-6xl">
        <Link
          to="/ponuda"
          className="group mb-5 inline-flex items-center gap-2 text-sm text-gold/90 transition-colors hover:text-gold-light md:mb-8 md:text-base"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 md:h-5 md:w-5" />
          <span>Nazad na ponudu</span>
        </Link>

        <div ref={titleRef} className={`section-intro ponuda-category-intro scroll-scale ${titleVisible ? 'visible' : ''}`}>
          <span className="section-eyebrow">
            <Wine className="h-4 w-4" />
            {category.eyebrow}
          </span>
          <h1 className="section-title">{category.name}</h1>
          <p className="section-subtitle">{category.description}</p>
        </div>

        <div
          ref={gridRef}
          className={`grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 fold:grid-cols-3 lg:gap-8 scroll-fade-in ${
            gridVisible ? 'visible' : ''
          }`}
        >
          {category.products.map((product, index) => (
            <article
              key={product.id}
              className="surface-card overflow-hidden rounded-[1.25rem] p-3.5 transition-all duration-500 [@media(hover:hover)]:hover:-translate-y-1 [@media(hover:hover)]:hover:border-gold/45 sm:rounded-[1.5rem] sm:p-5"
              style={{
                animation: gridVisible ? `fadeInUp 0.7s ease-out ${index * 0.1}s both` : 'none'
              }}
            >
              <div className="relative mb-3.5 aspect-[4/5] overflow-hidden rounded-[0.95rem] border border-gold/20 bg-[#120e0a] sm:mb-5 sm:rounded-[1.15rem]">
                <img
                  src={product.image}
                  alt={product.name}
                  className={product.fit === 'cover' ? 'h-full w-full object-cover' : 'h-full w-full object-contain p-3'}
                />
              </div>
              <h2 className="font-serif text-[1.35rem] leading-tight text-cream sm:text-2xl">{product.name}</h2>
              {product.description && (
                <p className="mt-1.5 text-sm leading-relaxed text-cream/70 sm:mt-2">{product.description}</p>
              )}
              {product.price && <p className="mt-2.5 text-gold sm:mt-3">{product.price}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
