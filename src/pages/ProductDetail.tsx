import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { mockPlants } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useToast } from '../context/ToastContext';
import { Heart, Star, ShoppingBag, ArrowLeft, Droplets, Sun, Thermometer, Sprout, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const { showToast } = useToast();
  
  const plant = mockPlants.find(p => p.id === id);

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<'Small' | 'Medium' | 'Large'>(plant?.size || 'Medium');
  const [activeTab, setActiveTab] = useState<'description' | 'care'>('description');

  const priceMultiplier = selectedSize === 'Small' ? 0.8 : selectedSize === 'Large' ? 1.3 : 1;
  const currentPrice = plant ? Math.round(plant.price * priceMultiplier) : 0;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (plant) {
      setSelectedSize(plant.size);
    }
  }, [id, plant]);

  if (!plant) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center bg-cream/30">
        <h2 className="text-3xl font-serif text-forest mb-4">Plant Not Found</h2>
        <p className="text-forest/70 mb-8">The plant you are looking for does not exist or has been removed.</p>
        <Link to="/shop" className="px-8 py-3 bg-forest text-white rounded-full hover:bg-forest/90 transition-colors">
          Return to Shop
        </Link>
      </div>
    );
  }

  const wishlisted = isWishlisted(plant.id);

  const handleAddToCart = () => {
    if (!plant.inStock) return;
    addToCart(plant, selectedSize, quantity);
    showToast(`Added ${quantity} ${plant.name} to cart`, 'success');
  };

  const handleWishlistClick = () => {
    toggleWishlist(plant);
    if (!wishlisted) {
      showToast('Added to wishlist!', 'success');
    }
  };

  const relatedPlants = mockPlants
    .filter(p => p.category === plant.category && p.id !== plant.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Back */}
        <div className="flex items-center gap-4 mb-8 text-sm text-forest/60">
          <button onClick={() => navigate(-1)} className="flex items-center gap-1 hover:text-forest transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <span>/</span>
          <Link to="/shop" className="hover:text-forest transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-forest font-medium">{plant.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative aspect-4/5 rounded-3xl overflow-hidden bg-white shadow-sm border border-forest/5"
            >
              <img 
                src={plant.image} 
                alt={plant.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {!plant.inStock && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/40 backdrop-blur-[2px]">
                  <span className="bg-forest text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider">
                    Out of Stock
                  </span>
                </div>
              )}
              {plant.badge && plant.inStock && (
                <div className="absolute top-6 left-6">
                  <span className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full text-white ${
                    plant.badge === 'Sale' ? 'bg-terracotta' :
                    plant.badge === 'New' ? 'bg-sage text-forest' :
                   'bg-forest'
                  }`}>
                    {plant.badge}
                  </span>
                </div>
              )}
            </motion.div>
          </div>

          {/* Product Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col"
          >
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-forest/50 italic">{plant.latinName}</p>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-terracotta text-terracotta" />
                  <span className="text-sm font-medium text-forest">{plant.rating}</span>
                  <span className="text-sm text-forest/40">({plant.reviewCount} reviews)</span>
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-serif font-medium text-forest mb-4 leading-tight">
                {plant.name}
              </h1>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-medium text-forest">${currentPrice}</span>
                {plant.originalPrice && selectedSize === plant.size && (
                  <span className="text-xl text-forest/40 line-through">${plant.originalPrice}</span>
                )}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-sm font-bold text-forest uppercase tracking-wider mb-4">Select Size</h4>
              <div className="flex gap-4">
                {['Small', 'Medium', 'Large'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size as any)}
                    className={`flex-1 py-4 rounded-xl border text-base font-medium transition-all duration-200 ${
                      selectedSize === size 
                        ? 'border-forest bg-forest text-white' 
                        : 'border-forest/20 text-forest hover:border-forest/50'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-6 py-6 border-y border-forest/10 mb-8">
              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-wider text-forest/50 font-medium">Size</span>
                <span className="text-forest font-medium">{selectedSize}</span>
              </div>
              <div className="w-px h-8 bg-forest/10"></div>
              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-wider text-forest/50 font-medium">Difficulty</span>
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${
                    plant.difficulty === 'Easy' ? 'bg-green-400' :
                    plant.difficulty === 'Medium' ? 'bg-yellow-400' :
                    'bg-red-400'
                  }`}></span>
                  <span className="text-forest font-medium">{plant.difficulty}</span>
                </div>
              </div>
              <div className="w-px h-8 bg-forest/10"></div>
              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-wider text-forest/50 font-medium">Category</span>
                <span className="text-forest font-medium">{plant.category}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-4 mb-10">
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-4">
                <div className="flex items-center border border-forest/20 rounded-xl h-14 flex-1 sm:flex-none sm:w-32 shrink-0">
                  <button 
                    className="flex-1 h-full flex items-center justify-center text-forest hover:bg-forest/5 transition-colors rounded-l-xl disabled:opacity-50"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={!plant.inStock}
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-medium text-forest">{quantity}</span>
                  <button 
                    className="flex-1 h-full flex items-center justify-center text-forest hover:bg-forest/5 transition-colors rounded-r-xl disabled:opacity-50"
                    onClick={() => setQuantity(quantity + 1)}
                    disabled={!plant.inStock}
                  >
                    +
                  </button>
                </div>
                
                <button 
                  onClick={handleWishlistClick}
                  className={`h-14 w-14 shrink-0 flex sm:order-3 items-center justify-center rounded-xl border transition-all ${
                    wishlisted 
                      ? 'border-terracotta bg-terracotta/5 text-terracotta' 
                      : 'border-forest/20 text-forest hover:border-forest'
                  }`}
                >
                  <Heart className={`w-6 h-6 ${wishlisted ? 'fill-terracotta' : ''}`} />
                </button>

                <button 
                  onClick={handleAddToCart}
                  disabled={!plant.inStock}
                  className="w-full sm:w-auto sm:flex-1 h-14 order-last sm:order-2 bg-forest text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-forest/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  <ShoppingBag className="w-5 h-5" />
                  {plant.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="mb-8">
              <div className="flex items-center gap-8 border-b border-forest/10 mb-6">
                <button 
                  className={`pb-4 text-sm font-medium uppercase tracking-wider transition-colors relative ${
                    activeTab === 'description' ? 'text-forest' : 'text-forest/50 hover:text-forest'
                  }`}
                  onClick={() => setActiveTab('description')}
                >
                  Description
                  {activeTab === 'description' && (
                    <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-forest" />
                  )}
                </button>
                <button 
                  className={`pb-4 text-sm font-medium uppercase tracking-wider transition-colors relative ${
                    activeTab === 'care' ? 'text-forest' : 'text-forest/50 hover:text-forest'
                  }`}
                  onClick={() => setActiveTab('care')}
                >
                  Care Guide
                  {activeTab === 'care' && (
                    <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-forest" />
                  )}
                </button>
              </div>

              <div className="min-h-50">
                {activeTab === 'description' ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-forest/80 leading-relaxed"
                  >
                    <p>{plant.description}</p>
                    <p className="mt-4">
                      All our plants are carefully selected and nurtured in our greenhouse before making their way to your home. We ensure each plant is healthy, pest-free, and ready to thrive in its new environment.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                  >
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                        <Droplets className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-medium text-forest mb-1">Water</h4>
                        <p className="text-sm text-forest/70 leading-relaxed">{plant.careTips.water}</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center shrink-0">
                        <Sun className="w-5 h-5 text-yellow-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-forest mb-1">Light</h4>
                        <p className="text-sm text-forest/70 leading-relaxed">{plant.careTips.light}</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                        <Thermometer className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <h4 className="font-medium text-forest mb-1">Temperature</h4>
                        <p className="text-sm text-forest/70 leading-relaxed">{plant.careTips.temperature}</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                        <Sprout className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-forest mb-1">Soil</h4>
                        <p className="text-sm text-forest/70 leading-relaxed">{plant.careTips.soil}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-forest/10">
              <div className="flex flex-col items-center text-center gap-2">
                <ShieldCheck className="w-6 h-6 text-forest/60" />
                <span className="text-xs text-forest/70 font-medium">30-Day Guarantee</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Truck className="w-6 h-6 text-forest/60" />
                <span className="text-xs text-forest/70 font-medium">Safe Delivery</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <RotateCcw className="w-6 h-6 text-forest/60" />
                <span className="text-xs text-forest/70 font-medium">Free Returns</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Plants */}
        {relatedPlants.length > 0 && (
          <div className="mt-24 pt-16 border-t border-forest/10">
            <h3 className="text-3xl font-serif font-medium text-forest mb-8 text-center">You Might Also Like</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedPlants.map((relatedPlant) => (
                <Link 
                  key={relatedPlant.id} 
                  to={`/product/${relatedPlant.id}`}
                  className="group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-forest/5"
                >
                  <div className="relative aspect-4/5 overflow-hidden bg-cream/50">
                    <img 
                      src={relatedPlant.image} 
                      alt={relatedPlant.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h4 className="font-serif text-lg font-medium text-forest leading-tight mb-1">{relatedPlant.name}</h4>
                    <p className="text-xs text-forest/50 italic mb-4">{relatedPlant.latinName}</p>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-lg font-bold text-forest">${relatedPlant.price}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-terracotta text-terracotta" />
                        <span className="text-xs font-medium text-forest">{relatedPlant.rating}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
