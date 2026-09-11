import React, { useState, useMemo } from 'react';
import { ShoppingBag, Eye, Star, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { PRODUCTS_CATALOG } from '../data/furnitureData';
import { Product, ColorSwatch } from '../types';

interface ProductCatalogProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, swatch?: ColorSwatch) => void;
  initialRoomFilter?: string | null;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onSelectProduct,
  onAddToCart,
  initialRoomFilter,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRoom, setSelectedRoom] = useState<string>(initialRoomFilter || 'all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  // React to initial room filter updates
  React.useEffect(() => {
    if (initialRoomFilter) {
      setSelectedRoom(initialRoomFilter);
      setSelectedCategory('all');
    }
  }, [initialRoomFilter]);

  const categories = [
    { id: 'all', label: 'All Pieces' },
    { id: 'seating', label: 'Lounge & Seating' },
    { id: 'tables', label: 'Tables & Desks' },
    { id: 'bedroom', label: 'Beds & Sleep' },
    { id: 'storage', label: 'Credenzas & Storage' },
    { id: 'lighting', label: 'Lighting & Decor' },
  ];

  const rooms = [
    { id: 'all', label: 'All Rooms' },
    { id: 'living', label: 'Living Room' },
    { id: 'bedroom', label: 'Bedroom' },
    { id: 'dining', label: 'Dining Room' },
    { id: 'office', label: 'Home Office' },
  ];

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS_CATALOG];

    if (selectedCategory !== 'all') {
      if (selectedCategory === 'lighting') {
        result = result.filter((p) => p.category === 'lighting' || p.category === 'decor');
      } else {
        result = result.filter((p) => p.category === selectedCategory);
      }
    }

    if (selectedRoom !== 'all') {
      result = result.filter((p) => p.room === selectedRoom);
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'featured':
      default:
        // Default sorting preserving catalog order
        break;
    }

    return result;
  }, [selectedCategory, selectedRoom, sortBy]);

  return (
    <section id="catalog" className="py-20 sm:py-28 bg-[#F6F3EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-[#3F4B35]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#3F4B35]">
                CURATED COLLECTION
              </span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-[#24231F]">
              Enduring pieces for daily rituals
            </h2>
          </div>
          <p className="text-sm text-[#6E6A61] max-w-md font-light leading-relaxed">
            Explored through tactile materials, authentic wood grain, and timeless silhouettes engineered to live with you across generations.
          </p>
        </div>

        {/* Filters and Controls Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#E6E1D8] mb-10">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs tracking-wider uppercase font-medium transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-[#3F4B35] text-[#F6F3EE] shadow-xs'
                    : 'bg-[#ECE7DE] text-[#6E6A61] hover:text-[#24231F] hover:bg-[#E2DCCE]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Secondary Controls: Room filter & Sort */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Room Filter Dropdown */}
            <div className="flex items-center gap-2 bg-[#ECE7DE] rounded-full px-3 py-1.5 border border-[#E6E1D8]">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#3F4B35]" />
              <select
                aria-label="Filter by Room"
                value={selectedRoom}
                onChange={(e) => setSelectedRoom(e.target.value)}
                className="bg-transparent text-xs font-medium text-[#24231F] focus:outline-none cursor-pointer pr-2"
              >
                {rooms.map((r) => (
                  <option key={r.id} value={r.id} className="bg-[#F6F3EE]">
                    {r.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 bg-[#ECE7DE] rounded-full px-3 py-1.5 border border-[#E6E1D8]">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#3F4B35]" />
              <select
                aria-label="Sort products by"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-xs font-medium text-[#24231F] focus:outline-none cursor-pointer pr-2"
              >
                <option value="featured" className="bg-[#F6F3EE]">Featured</option>
                <option value="price-asc" className="bg-[#F6F3EE]">Price: Low to High</option>
                <option value="price-desc" className="bg-[#F6F3EE]">Price: High to Low</option>
                <option value="rating" className="bg-[#F6F3EE]">Highest Rated</option>
              </select>
            </div>

            <span className="text-xs text-[#6E6A61] font-light hidden sm:inline-block pl-2">
              Showing {filteredProducts.length} pieces
            </span>
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-[#ECE7DE] rounded-2xl border border-[#E6E1D8]">
            <p className="text-base text-[#24231F] font-serif-luxury text-xl mb-2">
              No matching pieces found
            </p>
            <p className="text-xs text-[#6E6A61] mb-6">
              Try adjusting your category or room filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSelectedRoom('all');
              }}
              className="bg-[#3F4B35] text-[#F6F3EE] text-xs uppercase tracking-widest px-6 py-2.5 rounded-full"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col bg-[#F9F7F3] border border-[#E6E1D8] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#3F4B35]/50"
              >
                {/* Product Image Container */}
                <div className="relative aspect-4/3 sm:aspect-square overflow-hidden bg-[#ECE7DE]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-[#3F4B35] text-[#F6F3EE] text-[9px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full shadow-xs">
                      {product.badge}
                    </div>
                  )}

                  {/* Quick Action Overlay Buttons */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
                    <button
                      type="button"
                      onClick={() => onSelectProduct(product)}
                      title="Quick View"
                      aria-label={`Quick view ${product.name}`}
                      className="w-10 h-10 rounded-full bg-[#F6F3EE] text-[#24231F] hover:bg-[#3F4B35] hover:text-[#F6F3EE] flex items-center justify-center shadow-md transform translate-y-2 group-hover:translate-y-0 transition-all duration-200"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onAddToCart(product, product.colorSwatches[0])}
                      title="Add to Bag"
                      aria-label={`Add ${product.name} to shopping bag`}
                      className="w-10 h-10 rounded-full bg-[#3F4B35] text-[#F6F3EE] hover:bg-[#2F3928] flex items-center justify-center shadow-md transform translate-y-2 group-hover:translate-y-0 transition-all duration-200"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    {/* Collection & Rating */}
                    <div className="flex items-center justify-between text-xs text-[#6E6A61] mb-1.5">
                      <span className="text-[10px] uppercase tracking-wider font-medium text-[#6E6A61]">
                        {product.collection}
                      </span>
                      <div className="flex items-center gap-1 text-[#3F4B35]">
                        <Star className="w-3 h-3 fill-current" />
                        <span className="text-[11px] font-semibold text-[#24231F]">
                          {product.rating}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      onClick={() => onSelectProduct(product)}
                      className="font-serif-luxury text-lg text-[#24231F] hover:text-[#3F4B35] font-medium leading-snug cursor-pointer transition-colors mb-2"
                    >
                      {product.name}
                    </h3>

                    {/* Color Swatch Dots */}
                    {product.colorSwatches && product.colorSwatches.length > 1 && (
                      <div className="flex items-center gap-1.5 mb-3">
                        {product.colorSwatches.map((swatch) => (
                          <span
                            key={swatch.name}
                            className="w-2.5 h-2.5 rounded-full border border-black/20"
                            style={{ backgroundColor: swatch.hex }}
                            title={swatch.name}
                          />
                        ))}
                        <span className="text-[10px] text-[#6E6A61] pl-1 font-light">
                          {product.colorSwatches.length} finishes
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Price & Action */}
                  <div className="flex items-center justify-between pt-3 border-t border-[#E6E1D8] mt-2">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-base font-semibold text-[#24231F]">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-[#6E6A61] line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => onAddToCart(product, product.colorSwatches[0])}
                      className="text-xs font-semibold uppercase tracking-wider text-[#3F4B35] hover:text-[#2F3928] flex items-center gap-1 py-1"
                    >
                      <span>Add</span>
                      <ShoppingBag className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
