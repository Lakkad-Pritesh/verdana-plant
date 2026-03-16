import React from 'react';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  { id: 1, title: 'The Ultimate Guide to Monstera Care', category: 'Care Guides', date: 'Mar 15, 2026', image: '../../public/assets/images/blog0.webp', excerpt: 'Learn how to keep your Monstera Deliciosa thriving with these expert tips on watering, light, and propagation.' },
  { id: 2, title: 'Top 5 Air-Purifying Plants for Your Bedroom', category: 'Wellness', date: 'Mar 10, 2026', image: '../../public/assets/images/blog1.jpg', excerpt: 'Breathe easier and sleep better by adding these natural air purifiers to your nighttime sanctuary.' },
  { id: 3, title: 'Pet-Friendly Plants: A Safe Indoor Jungle', category: 'Guides', date: 'Mar 05, 2026', image: '../../public/assets/images/blog2.jpg', excerpt: 'Create a lush indoor garden without worrying about your furry friends. Here are our top non-toxic plant picks.' },
  { id: 4, title: 'Decorating with Large Statement Plants', category: 'Styling', date: 'Feb 28, 2026', image: '../../public/assets/images/blog3.jpg', excerpt: 'Make a bold impact in any room by incorporating large, architectural plants like the Bird of Paradise or Olive Tree.' },
  { id: 5, title: 'Winter Plant Care: What You Need to Know', category: 'Care Guides', date: 'Feb 15, 2026', image: '../../public/assets/images/blog4.jpg', excerpt: 'Adjust your watering schedule and protect your tropicals from drafts with our comprehensive winter survival guide.' },
  { id: 6, title: 'The Art of Propagation: Multiplying Your Collection', category: 'DIY', date: 'Feb 02, 2026', image: '../../public/images/blog5.jpg', excerpt: 'Step-by-step instructions on how to take cuttings and grow new plants from your existing favorites.' }
];

export const Blog: React.FC = () => {
  return (
    <div className="pt-15 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-5xl font-serif font-medium text-forest mb-6">The Botanical Blog</h1>
          <p className="text-forest/70 text-lg">Expert advice, styling inspiration, and stories from the greenhouse.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-forest/5 group cursor-pointer flex flex-col">
              <div className="aspect-4/3 overflow-hidden relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-forest uppercase tracking-wider">
                  {post.category}
                </div>
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <p className="text-sm text-forest/50 mb-3">{post.date}</p>
                <h2 className="text-xl font-serif font-medium text-forest mb-3 group-hover:text-terracotta transition-colors">{post.title}</h2>
                <p className="text-forest/70 text-sm leading-relaxed mb-6 flex-1">{post.excerpt}</p>
                <div className="flex items-center text-forest font-medium text-sm group-hover:text-terracotta transition-colors mt-auto">
                  Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
