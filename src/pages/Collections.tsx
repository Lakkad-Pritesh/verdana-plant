import React from 'react';
import { FeaturedCollection } from '../components/FeaturedCollection';
import { PopularCategories } from '../components/PopularCategories';
import { PlantCareTips } from '../components/PlantCareTips';

export const Collections: React.FC = () => {
  return (
    <div className="pt-15 bg-cream">
      {/* Header Section with Background Image */}
      <div className="relative py-24 overflow-hidden bg-forest/5">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80" 
            alt="Category Background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-b from-cream/10 to-cream/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-forest mb-6">Our Collection</h1>
            <p className="text-forest/80 text-lg">Find the perfect plant for your specific needs and environment.</p>
          </div>
        </div>
      </div>
      <PopularCategories />
      <FeaturedCollection />
      <PlantCareTips />
    </div>
  );
};
