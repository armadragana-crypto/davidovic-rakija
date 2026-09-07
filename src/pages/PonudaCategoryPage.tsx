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

        {/* Uspravne fotografije idu po dvije i na telefonu, inace bi jedna
            kartica pojela citav ekran. */}
        <div
          ref={gridRef}
          className={`grid gap-4 sm:grid-cols-2 sm:gap-6 lg:gap-8 xl:grid-cols-4 scroll-fade-in ${
            category.ratio ? 'grid-cols-2' : 'grid-cols-1'
          } ${gridVisible ? 'visible' : ''}`}
        >
          {category.products.map((product, index) => (
            <article
              key={product.id}
              className="group surface-card overflow-hidden rounded-[1.6rem] p-3 transition-all duration-500 [@media(hover:hover)]:hover:-translate-y-1 [@media(hover:hover)]:hover:border-gold/45 md:p-3.5"
              style={{
                animation: gridVisible ? `fadeInUp 0.7s ease-out ${index * 0.1}s both` : 'none'
              }}
            >
              <div
                className="relative overflow-hidden rounded-[1.3rem] border border-gold/20 bg-[#120e0a]"
                style={{ aspectRatio: category.ratio ?? 4 / 5 }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className={product.fit === 'cover' ? 'h-full w-full object-cover' : 'h-full w-full object-contain p-3'}
                />
              </div>

              {/* Isti razmak i ista tipografija kao na pocetnoj strani, da
                  kartica ne mijenja karakter kad se otvori kategorija. */}
              <div className="px-3 pb-2 pt-5 md:px-3.5">
                <h2 className="ponuda-ime font-serif">{product.name}</h2>
                <span className="ponuda-crta" aria-hidden />
                {product.description && <p className="ponuda-opis">{product.description}</p>}
                {product.price && <p className="mt-2.5 text-gold">{product.price}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
