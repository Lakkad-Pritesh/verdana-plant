import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const FeaturedCollection: React.FC = () => {
  return (
    <section className="py-4 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=1200" 
              alt="Tropical Collection" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-linear-to-r from-forest/90 via-forest/60 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 sm:p-16 md:p-24 max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium mb-6 tracking-wide uppercase">
              Curated Selection
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium text-white leading-tight mb-6">
              The Tropical <br />
              <span className="italic text-sage">Oasis</span> Collection
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-lg leading-relaxed">
              Transform your home into a lush paradise with our hand-picked selection of exotic, large-leafed beauties that thrive indoors.
            </p>
            
            <Link 
              to="/shop" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-forest font-medium rounded-full hover:bg-cream transition-all duration-300 hover:shadow-lg group/btn"
            >
              Shop the Collection
              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
