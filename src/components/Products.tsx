import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Sparkles, Star } from 'lucide-react';

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

export default function Products() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const productsPerView = 3;
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
    <section id="ponuda" className="py-24 px-4 relative bg-gradient-to-b from-black/80 to-black/60 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gold rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div
          ref={titleRef}
          className={`text-center mb-16 scroll-scale ${titleVisible ? 'visible' : ''}`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-medium tracking-wider mb-4">
            <Star className="w-4 h-4" />
            Premium Kolekcija
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-cream mb-6">
            Naša Ponuda
          </h2>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto leading-relaxed">
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
              <div key={slideIndex} className="min-w-full flex gap-4 px-2">
                {products
                  .slice(slideIndex * productsPerView, (slideIndex + 1) * productsPerView)
                  .map((product, index) => (
                    <div
                      key={product.id}
                      className="flex-1 min-w-0"
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
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-gold w-8 scale-110' : 'bg-cream/30 hover:bg-cream/50'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="grapes-decoration"></div>
      <div className="plums-decoration"></div>
    </section>
  );
}
