import React, { useState, useMemo } from 'react';
import { X, Search, ArrowRight, Star } from 'lucide-react';
import { PRODUCTS_CATALOG } from '../data/furnitureData';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  const suggestedTags = [
    'Bouclé Lounge',
    'Oak Dining',
    'Travertine',
    'Platform Bed',
    'Minimalist Desk',
    'Fluted Credenza',
    'Wool Rug',
  ];

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return PRODUCTS_CATALOG.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.collection.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.room.toLowerCase().includes(q) ||
        p.materials.toLowerCase().includes(q)
    );
  }, [query]);

  if (!isOpen) return null;

  return (
    <div
      id="search-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="search-modal-card"
        className="w-full max-w-2xl bg-[#F6F3EE] rounded-3xl shadow-2xl border border-[#E6E1D8] p-6 sm:p-8 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 border-b border-[#E6E1D8] pb-4 mb-6">
          <Search className="w-5 h-5 text-[#3F4B35] shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search chairs, dining tables, materials, rooms..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base text-[#24231F] placeholder-[#6E6A61] focus:outline-none"
            aria-label="Search furniture catalog"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-xs text-[#6E6A61] hover:text-[#24231F]"
            >
              Clear
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="p-1.5 rounded-full hover:bg-[#ECE7DE] text-[#6E6A61] hover:text-[#24231F]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Suggested Quick Tags */}
        <div className="mb-6">
          <span className="text-[10px] uppercase tracking-widest text-[#6E6A61] font-semibold block mb-2">
            Suggested Inquiries
          </span>
          <div className="flex flex-wrap gap-2">
            {suggestedTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setQuery(tag)}
                className="text-xs bg-[#ECE7DE] hover:bg-[#E0D9CC] text-[#24231F] px-3 py-1 rounded-full transition-colors cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Results List */}
        <div>
          {query.trim() === '' ? (
            <div className="text-center py-8 text-xs text-[#6E6A61] font-light">
              Start typing to search our curated architectural catalog...
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-sm font-medium text-[#24231F]">No matching pieces found</p>
              <p className="text-xs text-[#6E6A61] mt-1 font-light">
                Try searching for broader keywords like "oak", "chair", or "table".
              </p>
            </div>
          ) : (
            <div className="divide-y divide-[#E6E1D8] max-h-80 overflow-y-auto">
              {results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="py-3 flex items-center gap-4 hover:bg-[#ECE7DE]/50 p-2 rounded-xl cursor-pointer transition-colors"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 rounded-lg object-cover bg-[#ECE7DE] shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs sm:text-sm font-medium text-[#24231F] truncate">
                      {product.name}
                    </h4>
                    <div className="flex items-center gap-2 text-[11px] text-[#6E6A61]">
                      <span className="uppercase">{product.room}</span>
                      <span>•</span>
                      <span>${product.price.toLocaleString()}</span>
                      <span>•</span>
                      <span className="flex items-center gap-0.5 text-[#3F4B35]">
                        <Star className="w-3 h-3 fill-current" /> {product.rating}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#6E6A61] shrink-0" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
