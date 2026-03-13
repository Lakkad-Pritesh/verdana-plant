import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Plant Enthusiast",
      text: "The Monstera I received was incredibly healthy and much larger than I expected. The packaging was entirely plastic-free, which I love. It's thriving in my living room!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
    },
    {
      id: 2,
      name: "David Chen",
      role: "Interior Designer",
      text: "I source plants for all my clients from Verdana. Their selection of rare varieties is unmatched, and the quality is consistently excellent. The customer service is also top-notch.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
    },
    {
      id: 3,
      name: "Emma Thompson",
      role: "New Plant Parent",
      text: "As someone who usually kills plants, the detailed care instructions that came with my Snake Plant were a lifesaver. It's been 3 months and it's actually growing new leaves!",
      rating: 4,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-serif font-medium text-forest mb-4">Loved by Plant Parents</h2>
          <p className="text-forest/70">Don't just take our word for it. Here's what our community has to say about their new green friends.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-cream/30 rounded-3xl p-8 border border-forest/5 relative">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < review.rating ? 'fill-terracotta text-terracotta' : 'fill-forest/10 text-forest/10'}`} 
                  />
                ))}
              </div>
              
              <p className="text-forest/80 leading-relaxed mb-8 italic">"{review.text}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-medium text-forest">{review.name}</h4>
                  <p className="text-xs text-forest/50 uppercase tracking-wider">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
