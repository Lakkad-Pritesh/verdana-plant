import React from 'react';
import { Leaf, Truck, ShieldCheck, Package } from 'lucide-react';

export const FeaturesStrip: React.FC = () => {
  const features = [
    {
      icon: <Leaf className="w-6 h-6 text-sage" />,
      title: "Sustainably Sourced",
      description: "From ethical growers"
    },
    {
      icon: <Truck className="w-6 h-6 text-terracotta" />,
      title: "Free Shipping $50+",
      description: "On all plant orders"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-forest" />,
      title: "Plant Guarantee",
      description: "30-day happy plant promise"
    },
    {
      icon: <Package className="w-6 h-6 text-blue-400" />,
      title: "Eco Packaging",
      description: "100% recyclable materials"
    }
  ];

  return (
    <section className="bg-white border-y border-forest/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-forest/10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center px-4">
              <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h4 className="font-serif font-medium text-forest text-lg mb-1">{feature.title}</h4>
              <p className="text-sm text-forest/60">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
