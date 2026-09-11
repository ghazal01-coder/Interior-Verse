import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles, Shield, Compass } from 'lucide-react';
import { CRAFTSMANSHIP_FEATURE } from '../data/furnitureData';
import { Product, ColorSwatch } from '../types';

interface CraftsmanshipSectionProps {
  onViewProduct: (product: Product) => void;
  onAddToCart: (product: Product, swatch: ColorSwatch) => void;
  onLearnProcess: () => void;
}

export const CraftsmanshipSection: React.FC<CraftsmanshipSectionProps> = ({
  onViewProduct,
  onAddToCart,
  onLearnProcess,
}) => {
  const [selectedSwatch, setSelectedSwatch] = useState<ColorSwatch>(
    CRAFTSMANSHIP_FEATURE.colorSwatches[0]
  );
  const [currentImage, setCurrentImage] = useState<string>(
    CRAFTSMANSHIP_FEATURE.colorSwatches[0].image
  );

  const handleSwatchChange = (swatch: ColorSwatch) => {
    setSelectedSwatch(swatch);
    setCurrentImage(swatch.image);
  };

  return (
    <section id="craftsmanship" className="py-12 sm:py-20 bg-[#F6F3EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Rounded Rectangular Editorial Container with Soft Beige Background */}
        <div className="bg-[#ECE7DE] border border-[#E6E1D8] rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content Column (col-span-4) */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-px bg-[#3F4B35]" />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#3F4B35]">
                  CRAFTED TO INSPIRE
                </span>
              </div>

              {/* Serif Headline */}
              <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-[42px] font-normal leading-[1.12] text-[#24231F] mb-6">
                Quality furniture that transforms your space
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#6E6A61] font-light leading-relaxed mb-6">
                Every silhouette is sculpted from responsibly sourced European oak, joined by master woodworkers using traditional mortise-and-tenon joints, and upholstered in tactile Belgian textiles woven for timeless living.
              </p>

              {/* Craftsmanship Pillars */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-xs text-[#24231F]">
                  <Compass className="w-4 h-4 text-[#3F4B35]" />
                  <span>Precision Scandinavian ergonomic contours</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#24231F]">
                  <Sparkles className="w-4 h-4 text-[#3F4B35]" />
                  <span>Hand-finished with non-toxic organic beeswax</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#24231F]">
                  <Shield className="w-4 h-4 text-[#3F4B35]" />
                  <span>Lifetime structural warranty on solid hardwood frames</span>
                </div>
              </div>

              {/* Text Link CTA */}
              <button
                type="button"
                onClick={onLearnProcess}
                className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#3F4B35] hover:text-[#2F3928] transition-colors py-1"
              >
                <span className="border-b border-[#3F4B35]/40 group-hover:border-[#3F4B35] pb-0.5">
                  About Our Process
                </span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Center/Right Product Image Column (col-span-5) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden bg-[#F9F7F3] shadow-md border border-[#E6E1D8]">
                <img
                  src={currentImage}
                  alt={CRAFTSMANSHIP_FEATURE.name}
                  className="w-full h-full object-cover object-center transition-all duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-[#3F4B35] text-[#F6F3EE] text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full shadow-xs">
                  {CRAFTSMANSHIP_FEATURE.badge}
                </div>
              </div>
            </div>

            {/* Far Right Product Info Box (col-span-3) */}
            <div className="lg:col-span-3 bg-[#F9F7F3] border border-[#E6E1D8] p-6 sm:p-7 rounded-2xl shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#6E6A61] font-medium">
                  {CRAFTSMANSHIP_FEATURE.collection}
                </span>
                <h3 className="font-serif-luxury text-xl sm:text-2xl font-normal text-[#24231F] mt-1 mb-2">
                  {CRAFTSMANSHIP_FEATURE.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-xl font-semibold text-[#24231F]">
                    ${CRAFTSMANSHIP_FEATURE.price}
                  </span>
                  {CRAFTSMANSHIP_FEATURE.originalPrice && (
                    <span className="text-xs text-[#6E6A61] line-through">
                      ${CRAFTSMANSHIP_FEATURE.originalPrice}
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#6E6A61] leading-relaxed font-light mb-5">
                  {CRAFTSMANSHIP_FEATURE.description}
                </p>

                {/* Interactive Color Swatches */}
                <div className="mb-6">
                  <span className="text-[11px] uppercase tracking-wider text-[#24231F] font-semibold block mb-2">
                    Upholstery: <span className="font-normal text-[#6E6A61]">{selectedSwatch.name}</span>
                  </span>
                  <div className="flex items-center gap-3">
                    {CRAFTSMANSHIP_FEATURE.colorSwatches.map((swatch) => (
                      <button
                        key={swatch.name}
                        type="button"
                        onClick={() => handleSwatchChange(swatch)}
                        title={swatch.name}
                        className={`w-7 h-7 rounded-full transition-all duration-200 relative flex items-center justify-center border ${
                          selectedSwatch.name === swatch.name
                            ? 'ring-2 ring-offset-2 ring-[#3F4B35] scale-110'
                            : 'hover:scale-105 border-black/15'
                        }`}
                        style={{ backgroundColor: swatch.hex }}
                      >
                        {selectedSwatch.name === swatch.name && (
                          <Check
                            className={`w-3 h-3 ${
                              swatch.hex === '#E3DDD3' ? 'text-black' : 'text-white'
                            }`}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-4 border-t border-[#E6E1D8]">
                <button
                  type="button"
                  onClick={() => onAddToCart(CRAFTSMANSHIP_FEATURE, selectedSwatch)}
                  className="w-full bg-[#3F4B35] hover:bg-[#2F3928] text-[#F6F3EE] py-3 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-200 transform hover:-translate-y-0.5 shadow-xs flex items-center justify-center gap-2"
                >
                  <span>Add to Bag</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => onViewProduct(CRAFTSMANSHIP_FEATURE)}
                  className="w-full text-center text-xs font-medium text-[#6E6A61] hover:text-[#24231F] py-1.5 transition-colors"
                >
                  View Product Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
