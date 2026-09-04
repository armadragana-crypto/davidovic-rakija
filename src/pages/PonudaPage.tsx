import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ponudaCategories } from '../data/ponudaCategories';

export default function PonudaPage() {
  return (
    <section className="ponuda-hub relative">
      <div className="ponuda-hub-inner container relative z-10 mx-auto max-w-6xl">
        <div className="ponuda-hub-grid">
          {ponudaCategories.map((category) => (
            <Link key={category.slug} to={`/ponuda/${category.slug}`} className="ponuda-hub-card group">
              <div className="ponuda-hub-card-visual">
                <img
                  src={category.cover}
                  alt={category.name}
                  className="h-full w-full object-cover object-center transition-transform duration-700 [@media(hover:hover)]:group-hover:scale-[1.03]"
                />
              </div>
              <span className="ponuda-hub-card-cta">
                Pogledaj ponudu
                <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
