import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden bg-cream">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-sage/20 blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-terracotta/10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-sage/30 text-forest text-sm font-medium mb-6 tracking-wide uppercase">
              Spring Collection 2026
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-medium text-forest leading-[1.1] mb-6">
              Bring Nature <br/>
              <span className="italic text-terracotta">Indoors</span>
            </h1>
            <p className="text-lg text-forest/70 mb-8 max-w-lg leading-relaxed">
              Elevate your space with our curated collection of rare and beautiful houseplants. Sustainably sourced and delivered with care.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Link 
                to="/shop" 
                className="inline-flex items-center justify-center px-8 py-4 bg-forest text-cream font-medium rounded-full hover:bg-forest/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Shop Now
              </Link>
              <Link 
                to="/collections" 
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-forest/20 text-forest font-medium rounded-full hover:bg-forest/5 transition-all duration-300 group"
              >
                Explore Collections
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-3xl font-serif font-medium text-forest">500+</p>
                <p className="text-sm text-forest/60 uppercase tracking-wider mt-1">Plant Varieties</p>
              </div>
              <div className="w-px h-12 bg-forest/20"></div>
              <div>
                <p className="text-3xl font-serif font-medium text-forest">10k+</p>
                <p className="text-sm text-forest/60 uppercase tracking-wider mt-1">Happy Customers</p>
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative lg:h-[600px] flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-none lg:w-[90%] h-[500px] lg:h-full rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="../../public/assets/images/hero1.webp" 
                alt="Beautiful indoor plant" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating Badges */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute top-10 -left-6 lg:left-0 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center">
                <span className="text-xl"><img
                  src="https://img.freepik.com/free-vector/premium-certified-quality-stamp_78370-1800.jpg?semt=ais_rp_50_assets&w=740&q=80"
                  className="rounded-full"
                /></span>
              </div>
              <div>
                <p className="text-xs text-forest/60 font-medium uppercase tracking-wider">Quality</p>
                <p className="text-sm font-bold text-forest">100% Organic</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute bottom-10 -right-4 lg:-right-8 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-terracotta/20 flex items-center justify-center">
                <span className="text-xl">
                <img
                  src="https://www.citypng.com/public/uploads/preview/hd-green-truck-shipping-illustration-icon-sign-png-704081694709992gdn5ahaxbh.png"
                  className="rounded-full"
                />
                </span>
              </div>
              <div>
                <p className="text-xs text-forest/60 font-medium uppercase tracking-wider">Shipping</p>
                <p className="text-sm font-bold text-forest">Free over $50</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
