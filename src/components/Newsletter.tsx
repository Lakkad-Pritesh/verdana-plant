import React, { useState } from 'react';
import { useToast } from '../context/ToastContext';
import { Send } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const { showToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      showToast('✅ Subscribed successfully!', 'success');
      setEmail('');
    }
  };

  return (
    <section className="py-24 bg-sage/10 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-sage/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-terracotta/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-white text-forest text-xs font-bold mb-6 tracking-wide uppercase shadow-sm">
          Join the Club
        </span>
        <h2 className="text-4xl sm:text-5xl font-serif font-medium text-forest mb-6">
          Get 15% Off Your First Order
        </h2>
        <p className="text-lg text-forest/70 mb-10 max-w-2xl mx-auto leading-relaxed">
          Subscribe to our newsletter for exclusive offers, plant care tips, and early access to rare restocks. We promise not to spam.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="flex-1 px-6 py-4 rounded-full border border-forest/20 bg-white/80 backdrop-blur-sm text-forest placeholder:text-forest/40 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-all"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-forest text-white font-medium rounded-full hover:bg-forest/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            Subscribe
            <Send className="w-4 h-4" />
          </button>
        </form>
        <p className="text-xs text-forest/50 mt-6">
          By subscribing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </section>
  );
};
