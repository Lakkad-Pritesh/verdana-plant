import React, { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { motion, AnimatePresence } from 'motion/react';

export const CartDrawer: React.FC = () => {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();
  const { showToast } = useToast();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  const shipping = cartTotal > 50 ? 0 : 10;
  const total = cartTotal + (cartTotal > 0 ? shipping : 0);

  const handleCheckout = () => {
    setIsCartOpen(false);
    showToast('Proceeding to checkout...', 'info');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-forest/20 backdrop-blur-sm z-50"
            onClick={() => setIsCartOpen(false)}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-forest/10 bg-cream/30">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-forest" />
                <h2 className="text-2xl font-serif font-medium text-forest">Your Cart</h2>
                <span className="bg-forest text-white text-xs font-bold px-2 py-1 rounded-full">
                  {items.length}
                </span>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-forest/60 hover:text-forest hover:bg-forest/5 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 hide-scrollbar">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center opacity-70">
                  <div className="w-24 h-24 bg-sage/20 rounded-full flex items-center justify-center mb-6">
                    <ShoppingBag className="w-10 h-10 text-forest" />
                  </div>
                  <h3 className="text-xl font-serif font-medium text-forest mb-2">Your cart is empty</h3>
                  <p className="text-forest/60 mb-8">Looks like you haven't added any plants yet.</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="px-8 py-3 bg-forest text-white rounded-full font-medium hover:bg-forest/90 transition-colors"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.cartItemId} className="flex gap-4 bg-white border border-forest/10 rounded-2xl p-3 shadow-sm">
                    <div className="w-24 h-24 rounded-xl overflow-hidden bg-cream shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    
                    <div className="flex flex-col flex-1 justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-forest leading-tight mb-1">{item.name}</h4>
                          <p className="text-xs text-forest/60 mb-1">Size: {item.selectedSize}</p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="text-forest/40 hover:text-terracotta p-1"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-3 border border-forest/20 rounded-lg px-2 py-1">
                          <button 
                            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                            className="text-forest/60 hover:text-forest"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm font-medium text-forest w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                            className="text-forest/60 hover:text-forest"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-bold text-forest">${item.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-forest/10 p-6 bg-cream/30">
                <div className="flex flex-col gap-3 mb-6">
                  <div className="flex justify-between text-forest/70 text-sm">
                    <span>Subtotal</span>
                    <span>${cartTotal}</span>
                  </div>
                  <div className="flex justify-between text-forest/70 text-sm">
                    <span>Estimated Shipping</span>
                    <span>{shipping === 0 ? <span className="text-sage font-medium">Free</span> : `$${shipping}`}</span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-xs text-terracotta text-right">Add ${50 - cartTotal} more for free shipping!</p>
                  )}
                  <div className="h-px bg-forest/10 my-1"></div>
                  <div className="flex justify-between text-forest text-lg font-bold">
                    <span>Total</span>
                    <span>${total}</span>
                  </div>
                </div>
                
                <button 
                  onClick={handleCheckout}
                  className="w-full py-4 bg-forest text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-forest/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Proceed to Checkout
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
