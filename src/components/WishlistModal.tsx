import React, { useEffect } from 'react';
import { X, Heart, ShoppingBag } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';
import { useToast } from '../context/ToastContext';

export const WishlistModal: React.FC = () => {
  const { items, isWishlistOpen, setIsWishlistOpen, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { showToast } = useToast();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsWishlistOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    
    if (isWishlistOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isWishlistOpen, setIsWishlistOpen]);

  return (
    <AnimatePresence>
      {isWishlistOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-forest/40 backdrop-blur-sm"
            onClick={() => setIsWishlistOpen(false)}
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 sm:p-8 border-b border-forest/10 bg-cream/30">
              <div className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-terracotta fill-terracotta" />
                <h2 className="text-2xl font-serif font-medium text-forest">Your Wishlist</h2>
                <span className="bg-terracotta text-white text-xs font-bold px-2 py-1 rounded-full">
                  {items.length}
                </span>
              </div>
              <button 
                onClick={() => setIsWishlistOpen(false)}
                className="p-2 text-forest/60 hover:text-forest hover:bg-forest/5 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 hide-scrollbar">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="w-24 h-24 bg-terracotta/10 rounded-full flex items-center justify-center mb-6">
                    <Heart className="w-10 h-10 text-terracotta" />
                  </div>
                  <h3 className="text-xl font-serif font-medium text-forest mb-2">Your wishlist is empty</h3>
                  <p className="text-forest/60 mb-8 max-w-md">Save your favorite plants here to find them easily later.</p>
                  <button 
                    onClick={() => setIsWishlistOpen(false)}
                    className="px-8 py-3 bg-forest text-white rounded-full font-medium hover:bg-forest/90 transition-colors"
                  >
                    Explore Plants
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((plant) => (
                    <div key={plant.id} className="group relative bg-cream/30 rounded-2xl overflow-hidden border border-forest/10 flex flex-col">
                      <div className="relative aspect-square overflow-hidden">
                        <img 
                          src={plant.image} 
                          alt={plant.name} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <button 
                          onClick={() => toggleWishlist(plant)}
                          className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-terracotta hover:bg-white transition-colors z-10"
                        >
                          <Heart className="w-4 h-4 fill-terracotta" />
                        </button>
                      </div>
                      <div className="p-4 flex flex-col flex-1">
                        <h4 className="font-medium text-forest mb-1">{plant.name}</h4>
                        <p className="text-sm text-forest/60 mb-4">${plant.price}</p>
                        
                        <button 
                          onClick={() => {
                            addToCart(plant, plant.size, 1);
                            showToast(`🌿 Added ${plant.name} to cart!`, 'success');
                          }}
                          disabled={!plant.inStock}
                          className={`mt-auto w-full py-2.5 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors ${
                            plant.inStock 
                              ? 'bg-forest text-white hover:bg-forest/90' 
                              : 'bg-forest/10 text-forest/40 cursor-not-allowed'
                          }`}
                        >
                          <ShoppingBag className="w-4 h-4" />
                          {plant.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
