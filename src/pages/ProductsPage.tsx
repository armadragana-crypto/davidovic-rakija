import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Sparkles, Star, ArrowLeft } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'KAJSIJA',
    title: 'Kajsija Premium',
    image: 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Premium rakija od kajsije'
  },
  {
    id: 2,
    name: 'ŠLJIVOVICA',
    title: 'Šljivovica Premium',
    image: 'https://images.pexels.com/photos/5638269/pexels-photo-5638269.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Premium rakija od šljive'
  },
  {
    id: 3,
    name: 'DUNJA',
    title: 'Dunja Premium',
    image: 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Premium rakija od dunje'
  },
  {
    id: 4,
    name: 'KRUŠKA',
    title: 'Kruška Premium',
    image: 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Premium rakija od kruške'
  },
  {
    id: 5,
    name: 'JABUKA',
    title: 'Jabuka Premium',
    image: 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Premium rakija od jabuke'
  }
];

export default function ProductsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const productsPerView = 1;
  const totalSlides = Math.ceil(products.length / productsPerView);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: productsRef, isVisible: productsVisible } = useScrollAnimation();

  const handleSlideChange = (index: number) => {
    if (index !== currentSlide && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 600);
    }
  };

  return (
    <section className="pt-32 md:pt-36 pb-24 px-4 relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gold rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gold/90 hover:text-gold-light transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Nazad na početnu</span>
        </Link>

        <div
          ref={titleRef}
          className={`section-intro scroll-scale ${titleVisible ? 'visible' : ''}`}
        >
          <span className="section-eyebrow">
            <Star className="w-4 h-4" />
            Premium Kolekcija
          </span>
          <h1 className="section-title">
            Naša Ponuda
          </h1>
          <p className="section-subtitle">
            Autentične rakije proizvedene po tradicionalnim receptima
          </p>
        </div>

        <div
          ref={productsRef}
          className={`relative overflow-hidden scroll-fade-in ${productsVisible ? 'visible' : ''}`}
        >
          <div
            className="flex transition-all duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              opacity: isTransitioning ? 0.5 : 1
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="min-w-full flex gap-4 px-1 sm:px-2">
                {products
                  .slice(slideIndex * productsPerView, (slideIndex + 1) * productsPerView)
                  .map((product, index) => (
                    <div
                      key={product.id}
                      className="w-full max-w-md mx-auto"
                      style={{
                        animation: currentSlide === slideIndex && !isTransitioning
                          ? `fadeInUp 0.6s ease-out ${index * 0.15}s both`
                          : 'none'
                      }}
                    >
                      <div className="product-card group cursor-pointer relative overflow-hidden">
                        <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-10 h-10 rounded-full bg-gold/20 backdrop-blur-sm border border-gold/40 flex items-center justify-center">
                            <Sparkles className="w-5 h-5 text-gold" />
                          </div>
                        </div>

                        <div className="product-image-container relative">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <img
                            src={product.image}
                            alt={product.title}
                            className="transform group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        <div className="product-label group-hover:bg-gradient-to-r group-hover:from-gold/90 group-hover:to-gold transition-all duration-300">
                          <span className="product-name">{product.title}</span>
                        </div>

                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/50 rounded-lg transition-all duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-dark ${
                currentSlide === index ? 'bg-gold w-10 scale-110' : 'bg-cream/30 hover:bg-cream/50 w-2.5'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-cream/70 mb-6 text-lg">
            Zainteresovani za neke od naših rakija?
          </p>
          <a
            href="tel:065531545"
            className="btn-primary px-8 py-4"
          >
            <Sparkles className="w-5 h-5" />
            Kontaktirajte Nas za Narudžbu
          </a>
        </div>
      </div>

      <div className="grapes-decoration"></div>
      <div className="plums-decoration"></div>
    </section>
  );
}
