import React from 'react';
import { categories } from '../data/mockData';

interface CategoryFilterProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="w-full overflow-x-auto pb-4 hide-scrollbar">
      <div className="flex items-center gap-3 min-w-max px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
              activeCategory === category
                ? 'bg-terracotta text-white shadow-md'
                : 'bg-white text-forest/70 hover:bg-sage/10 hover:text-forest border border-forest/10'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};
