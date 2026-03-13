import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';
import { mockPlants, Plant } from '../data/mockData';
import { motion, AnimatePresence } from 'motion/react';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Plant[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setResults([]);
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (query.trim().length > 1) {
      const lowercaseQuery = query.toLowerCase();
      const filtered = mockPlants.filter(plant => 
        plant.name.toLowerCase().includes(lowercaseQuery) ||
        plant.latinName.toLowerCase().includes(lowercaseQuery) ||
        plant.category.toLowerCase().includes(lowercaseQuery)
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-cream/95 backdrop-blur-md flex flex-col"
        >
          {/* Header / Search Bar */}
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 border-b border-forest/10 flex items-center gap-4">
            <Search className="w-6 h-6 text-forest/40 shrink-0" />
            <input 
              ref={inputRef}
              type="text"
              placeholder="Search for plants, categories, or care needs..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-2xl sm:text-3xl font-serif text-forest placeholder:text-forest/30"
            />
            <button 
              onClick={onClose}
              className="p-2 text-forest/60 hover:text-forest bg-forest/5 hover:bg-forest/10 rounded-full transition-colors shrink-0"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Results Area */}
          <div className="flex-1 overflow-y-auto w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 hide-scrollbar">
            {query.trim().length > 1 ? (
              <>
                <p className="text-sm font-medium text-forest/60 uppercase tracking-wider mb-6">
                  Showing {results.length} results for "{query}"
                </p>
                
                {results.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {results.map(plant => (
                      <div 
                        key={plant.id} 
                        className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-forest/5 hover:border-forest/20 hover:shadow-md transition-all duration-300 cursor-pointer group"
                        onClick={() => {
                          navigate('/shop');
                          onClose();
                        }}
                      >
                        <div className="w-20 h-20 rounded-xl overflow-hidden bg-cream shrink-0">
                          <img 
                            src={plant.image} 
                            alt={plant.name} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-forest text-lg leading-tight">{plant.name}</h4>
                          <p className="text-sm text-forest/50 italic mb-1">{plant.latinName}</p>
                          <p className="font-bold text-forest">${plant.price}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-forest/20 group-hover:text-terracotta transition-colors shrink-0 mr-2" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20">
                    <Search className="w-12 h-12 text-forest/20 mx-auto mb-4" />
                    <h3 className="text-xl font-serif text-forest mb-2">No results found</h3>
                    <p className="text-forest/60">Try checking your spelling or using more general terms.</p>
                  </div>
                )}
              </>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 opacity-70">
                <div className="p-6 rounded-2xl bg-forest/5 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-forest/10 transition-colors" onClick={() => setQuery('Monstera')}>
                  <span className="text-2xl mb-2">🌿</span>
                  <span className="text-sm font-medium text-forest">Monstera</span>
                </div>
                <div className="p-6 rounded-2xl bg-forest/5 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-forest/10 transition-colors" onClick={() => setQuery('Pet Friendly')}>
                  <span className="text-2xl mb-2">🐾</span>
                  <span className="text-sm font-medium text-forest">Pet Friendly</span>
                </div>
                <div className="p-6 rounded-2xl bg-forest/5 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-forest/10 transition-colors" onClick={() => setQuery('Succulents')}>
                  <span className="text-2xl mb-2">🌵</span>
                  <span className="text-sm font-medium text-forest">Succulents</span>
                </div>
                <div className="p-6 rounded-2xl bg-forest/5 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-forest/10 transition-colors" onClick={() => setQuery('Easy')}>
                  <span className="text-2xl mb-2">✨</span>
                  <span className="text-sm font-medium text-forest">Easy Care</span>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
