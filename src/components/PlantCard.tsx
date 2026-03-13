import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Star, ShoppingBag } from 'lucide-react';
import { Plant } from '../data/mockData';
import { useWishlist } from '../context/WishlistContext';
import { useToast } from '../context/ToastContext';
import { useCart } from '../context/CartContext';

interface PlantCardProps {
  plant: Plant;
  
}

export const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
  const navigate = useNavigate();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const { showToast } = useToast();
  const { addToCart, setIsCartOpen } = useCart();
  const wishlisted = isWishlisted(plant.id);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(plant);
    if (!wishlisted) {
      showToast('❤️ Added to wishlist!', 'success');
    }
  };

  const handleCardClick = () => {
    navigate(`/product/${plant.id}`);
  };

  return (
    <div 
      className="group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-forest/5"
      onClick={handleCardClick}
    >
      {/* Image Container */}
      <div className="relative aspect-4/5 overflow-hidden bg-cream/50">
        <img 
          src={plant.image} 
          alt={plant.name} 
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${!plant.inStock ? 'opacity-50 grayscale' : ''}`}
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        
        {/* Overlays */}
        {!plant.inStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/40 backdrop-blur-[2px]">
            <span className="bg-forest text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
              Out of Stock
            </span>
          </div>
        )}

        {/* Badges */}
        {plant.badge && plant.inStock && (
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full text-white ${
              plant.badge === 'Sale' ? 'bg-terracotta' :
              plant.badge === 'New' ? 'bg-sage text-forest' :
              'bg-forest' // Bestseller and Rare
            }`}>
              {plant.badge}
            </span>
          </div>
        )}

        {/* Wishlist Button */}
        <button 
          onClick={handleWishlistClick}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm text-forest hover:text-terracotta hover:bg-white transition-all duration-300 z-10"
        >
          <Heart className={`w-5 h-5 ${wishlisted ? 'fill-terracotta text-terracotta' : ''}`} />
        </button>

        {/* Quick Add Button (Hover) */}
        {plant.inStock && (
          <div className="absolute bottom-4 left-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
            <button 
              className="w-full py-3 bg-forest/90 backdrop-blur-md text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-forest"
              onClick={(e) => {
                e.stopPropagation();
                 addToCart(plant, plant.size, 1);
                setIsCartOpen(true);
                showToast('Added to cart', 'success');
              }}
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-serif text-lg font-medium text-forest leading-tight mb-1">{plant.name}</h3>
            <p className="text-xs text-forest/50 italic">{plant.latinName}</p>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-1 mb-1">
              <Star className="w-3.5 h-3.5 fill-terracotta text-terracotta" />
              <span className="text-xs font-medium text-forest">{plant.rating}</span>
              <span className="text-xs text-forest/40">({plant.reviewCount})</span>
            </div>
            <div className="flex items-center gap-1">
              <span className={`w-2 h-2 rounded-full ${
                plant.difficulty === 'Easy' ? 'bg-green-400' :
                plant.difficulty === 'Medium' ? 'bg-yellow-400' :
                'bg-red-400'
              }`}></span>
              <span className="text-[10px] uppercase tracking-wider text-forest/60 font-medium">{plant.difficulty}</span>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-4 flex items-center gap-2">
          <span className="text-lg font-bold text-forest">${plant.price}</span>
          {plant.originalPrice && (
            <span className="text-sm text-forest/40 line-through">${plant.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};
