import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const categories = [
  {
    id: 1,
    name: 'Pet Friendly',
    description: 'Safe for your furry friends',
    image: 'https://intuitiveplants.org/cdn/shop/articles/IMG_0582_27a8c732-8e0d-425e-82f3-4b9b1a31bc16_1024x1024.jpg?v=1740177241',
    link: '/shop?category=pet-friendly'
  },
  {
    id: 2,
    name: 'Low Light',
    description: 'Thrives in darker spaces',
    image: 'https://roomfortuesday.com/wp-content/uploads/2024/03/Best-Trees-and-House-Plants-for-Low-Light.jpg',
    link: '/shop?category=low-light'
  },
  {
    id: 3,
    name: 'Easy Care',
    description: 'Perfect for beginners',
    image: 'https://static.wixstatic.com/media/f19c51_cc1c8f1d647c4c81951770797066a296~mv2.webp/v1/fill/w_568,h_568,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f19c51_cc1c8f1d647c4c81951770797066a296~mv2.webp',
    link: '/shop?category=easy-care'
  },
  {
    id: 4,
    name: 'Large Plants',
    description: 'Make a statement',
    image: 'https://www.dahingplants.com/cdn/shop/collections/detailSSP_4632200_2400x.jpg?v=1649520796',
    link: '/shop?category=large'
  }
];

export const PopularCategories: React.FC = () => {
  return (
    <section className="py-24 relative bg-cream">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link to={category.link} className="group block">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                   <h3 className="text-xl font-serif font-medium text-[#ffffff] mb-1">{category.name}</h3>
                    <p className="text-sm text-[#ffffff]/80">{category.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
