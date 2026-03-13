import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Plant } from '../data/mockData';

interface WishlistContextType {
  items: Plant[];
  toggleWishlist: (plant: Plant) => void;
  isWishlisted: (id: string) => boolean;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (isOpen: boolean) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Plant[]>([]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const toggleWishlist = (plant: Plant) => {
    setItems(prev => {
      const exists = prev.some(item => item.id === plant.id);
      if (exists) {
        return prev.filter(item => item.id !== plant.id);
      }
      return [...prev, plant];
    });
  };

  const isWishlisted = (id: string) => items.some(item => item.id === id);

  return (
    <WishlistContext.Provider value={{
      items,
      toggleWishlist,
      isWishlisted,
      isWishlistOpen,
      setIsWishlistOpen
    }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) throw new Error('useWishlist must be used within a WishlistProvider');
  return context;
};
