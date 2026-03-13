import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CartDrawer } from './CartDrawer';
import { WishlistModal } from './WishlistModal';
import { ToastContainer } from './Toast';
import { SearchOverlay } from './SearchOverlay';

export const Layout: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream font-sans text-forest selection:bg-terracotta/20 selection:text-forest flex flex-col">
      <Navbar onSearchClick={() => setIsSearchOpen(true)} />
      
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
      
      {/* Overlays & Modals */}
      <CartDrawer />
      <WishlistModal />
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <ToastContainer />
    </div>
  );
};
