import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Instagram, Twitter, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-forest text-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Leaf className="w-8 h-8 text-sage" />
              <span className="font-serif text-2xl font-bold tracking-tight">Verdana</span>
            </Link>
            <p className="text-cream/70 leading-relaxed mb-8 max-w-sm">
              Bringing the beauty and calm of nature into your everyday spaces. Sustainably grown, carefully delivered.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-cream hover:bg-terracotta hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-cream hover:bg-terracotta hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-cream hover:bg-terracotta hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6">Shop</h4>
            <ul className="space-y-4">
              <li><Link to="/shop" className="text-cream/70 hover:text-sage transition-colors">All Plants</Link></li>
              <li><Link to="/shop" className="text-cream/70 hover:text-sage transition-colors">Indoor Plants</Link></li>
              <li><Link to="/shop" className="text-cream/70 hover:text-sage transition-colors">Outdoor Plants</Link></li>
              <li><Link to="/shop" className="text-cream/70 hover:text-sage transition-colors">Rare Finds</Link></li>
              <li><Link to="/collections" className="text-cream/70 hover:text-sage transition-colors">Collections</Link></li>
              <li><Link to="/shop" className="text-cream/70 hover:text-sage transition-colors">Gift Cards</Link></li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6">Help</h4>
            <ul className="space-y-4">
              <li><Link to="/blog" className="text-cream/70 hover:text-sage transition-colors">Plant Care Guide</Link></li>
              <li><Link to="/about" className="text-cream/70 hover:text-sage transition-colors">FAQ</Link></li>
              <li><Link to="/about" className="text-cream/70 hover:text-sage transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/about" className="text-cream/70 hover:text-sage transition-colors">Track Order</Link></li>
              <li><Link to="/about" className="text-cream/70 hover:text-sage transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6">Contact</h4>
            <ul className="space-y-4 text-cream/70">
              <li>123 Botanical Way, <br/> Gujarat , India</li>
              <li className="pt-4">
                <a href="mailto:hello@verdana.com" className="hover:text-sage transition-colors">hello@verdana.com</a>
              </li>
              <li>
                <a href="tel:+917676767676" className="hover:text-sage transition-colors">+91 7676767676</a>
              </li>
              <li className="pt-4 text-sm">
                Mon-Fri: 9am - 6pm PST
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/50 text-sm">
            &copy; {new Date().getFullYear()} Verdana Plant Shop. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-cream/50">
            <Link to="/about" className="hover:text-cream transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-cream transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
