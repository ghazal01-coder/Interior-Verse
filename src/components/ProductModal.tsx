import React, { useState } from 'react';
import { X, Star, ShoppingBag, Check, Shield, Truck, RotateCcw } from 'lucide-react';
import { Product, ColorSwatch } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, swatch: ColorSwatch, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const [selectedSwatch, setSelectedSwatch] = useState<ColorSwatch>(
    product.colorSwatches?.[0] || {
      name: 'Default',
      hex: '#D7C7B2',
      image: product.image,
    }
  );
  const [quantity, setQuantity] = useState(1);

  const activeImage = selectedSwatch.image || product.image;

  const handleAdd = () => {
    onAddToCart(product, selectedSwatch, quantity);
    onClose();
  };

  return (
    <div
      id="product-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="product-modal-card"
        className="w-full max-w-4xl bg-[#F6F3EE] rounded-3xl shadow-2xl border border-[#E6E1D8] overflow-hidden my-8 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close product preview"
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#F6F3EE] border border-[#E6E1D8] flex items-center justify-center text-[#24231F] hover:bg-[#ECE7DE] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left: Product Image (col-span-6) */}
          <div className="md:col-span-6 bg-[#ECE7DE] relative aspect-square md:aspect-auto min-h-[340px] md:min-h-[500px]">
            <img
              src={activeImage}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
            {product.badge && (
              <div className="absolute top-4 left-4 bg-[#3F4B35] text-[#F6F3EE] text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full">
                {product.badge}
              </div>
            )}
          </div>

          {/* Right: Product Details (col-span-6) */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Category & Collection */}
              <div className="flex items-center justify-between text-xs text-[#6E6A61] mb-2">
                <span className="uppercase tracking-widest font-medium">
                  {product.collection}
                </span>
                <div className="flex items-center gap-1 text-[#3F4B35]">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="font-semibold text-[#24231F]">{product.rating}</span>
                  <span className="text-[#6E6A61]">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              {/* Title & Price */}
              <h2 className="font-serif-luxury text-2xl sm:text-3xl text-[#24231F] font-normal leading-tight mb-3">
                {product.name}
              </h2>

              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-2xl font-semibold text-[#24231F]">
                  ${product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-[#6E6A61] line-through">
                    ${product.originalPrice.toLocaleString()}
                  </span>
                )}
                <span className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-medium">
                  In Stock & Ready to Ship
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#6E6A61] font-light leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Swatch Selection */}
              {product.colorSwatches && product.colorSwatches.length > 0 && (
                <div className="mb-6">
                  <span className="text-xs font-semibold text-[#24231F] uppercase tracking-wider block mb-2">
                    Selected Finish: <span className="font-normal text-[#6E6A61]">{selectedSwatch.name}</span>
                  </span>
                  <div className="flex items-center gap-3">
                    {product.colorSwatches.map((swatch) => (
                      <button
                        key={swatch.name}
                        type="button"
                        onClick={() => setSelectedSwatch(swatch)}
                        className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                          selectedSwatch.name === swatch.name
                            ? 'ring-2 ring-offset-2 ring-[#3F4B35] scale-105'
                            : 'hover:scale-105 border-black/20'
                        }`}
                        style={{ backgroundColor: swatch.hex }}
                        title={swatch.name}
                      >
                        {selectedSwatch.name === swatch.name && (
                          <Check
                            className={`w-3.5 h-3.5 ${
                              swatch.hex === '#E3DDD3' || swatch.hex === '#ECE7E1' ? 'text-black' : 'text-white'
                            }`}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Specifications Pills */}
              <div className="bg-[#ECE7DE]/70 p-4 rounded-xl space-y-2 mb-6 text-xs text-[#24231F]">
                <div>
                  <span className="font-semibold text-[#6E6A61]">Dimensions:</span> {product.dimensions}
                </div>
                <div>
                  <span className="font-semibold text-[#6E6A61]">Materials:</span> {product.materials}
                </div>
              </div>
            </div>

            {/* Quantity and Add to Bag */}
            <div className="pt-4 border-t border-[#E6E1D8] space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-[#E6E1D8] bg-[#F9F7F3] rounded-full px-3 py-1.5">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="text-[#6E6A61] hover:text-[#24231F] px-1 font-bold"
                  >
                    -
                  </button>
                  <span className="px-3 text-xs font-semibold text-[#24231F]">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="text-[#6E6A61] hover:text-[#24231F] px-1 font-bold"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAdd}
                  className="flex-1 bg-[#3F4B35] hover:bg-[#2F3928] text-[#F6F3EE] py-3 rounded-full text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-200 shadow-sm cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag — ${(product.price * quantity).toLocaleString()}</span>
                </button>
              </div>

              {/* Guarantees mini list */}
              <div className="grid grid-cols-3 gap-2 text-[10px] text-[#6E6A61] pt-2">
                <div className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-[#3F4B35]" />
                  <span>White-Glove</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <RotateCcw className="w-3.5 h-3.5 text-[#3F4B35]" />
                  <span>30-Day Return</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#3F4B35]" />
                  <span>Lifetime Frame</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
