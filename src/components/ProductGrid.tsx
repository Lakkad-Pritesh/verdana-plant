import React, { useState, useMemo } from 'react';
import { PlantCard } from './PlantCard';
import { CategoryFilter } from './CategoryFilter';
import { mockPlants, categories } from '../data/mockData';
import { Plant } from '../data/mockData';
import { motion, AnimatePresence } from 'motion/react';
import { SlidersHorizontal } from 'lucide-react';

export const ProductGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const filteredPlants = useMemo(() => {
    let result = [...mockPlants];
    
    if (activeCategory !== 'All') {
      result = result.filter(plant => plant.category === activeCategory);
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        // Mocking newest by simply reversing the array for demonstration
        result.reverse();
        break;
      default:
        // featured (default order)
        break;
    }

    return result;
  }, [activeCategory, sortBy]);

  return (
    <section id="shop" className="pb-24 bg-cream/50">
      <div className="relative py-24 mb-16 overflow-hidden bg-forest/5">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80" 
            alt="Category Background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream/10 to-cream/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-forest mb-6">Shop by Category</h2>
            <p className="text-forest/80 text-lg">Find the perfect plant for your specific needs and environment.</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <CategoryFilter 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
          />
          
          <div className="flex items-center gap-3 shrink-0 bg-white px-4 py-2 rounded-full border border-forest/10 shadow-sm">
            <SlidersHorizontal className="w-4 h-4 text-forest/60" />
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-sm font-medium text-forest outline-none cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="newest">New Arrivals</option>
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence>
            {filteredPlants.map((plant) => (
              <motion.div
                key={plant.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <PlantCard plant={plant} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredPlants.length === 0 && (
          <div className="text-center py-20">
            <p className="text-forest/60 text-lg">No plants found matching your criteria.</p>
          </div>
        )}
      </div>

    </section>
  );
};
