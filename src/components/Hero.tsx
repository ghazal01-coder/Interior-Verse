import React from 'react';
import { ArrowRight, Play, Star } from 'lucide-react';
import { HERO_DATA } from '../data/furnitureData';
import { Product } from '../types';

interface HeroProps {
  onShopClick: () => void;
  onWatchStory: () => void;
  onSelectProduct: (product: Product | string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onShopClick,
  onWatchStory,
  onSelectProduct,
}) => {
  return (
    <section
      id="hero-section"
      className="relative pt-6 sm:pt-10 pb-16 sm:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: ~40% Content on Desktop (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
              <span className="w-6 h-px bg-[#3F4B35]" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#3F4B35]">
                {HERO_DATA.eyebrow}
              </span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-normal leading-[1.08] text-[#24231F] mb-6 tracking-tight">
              {HERO_DATA.headline}
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#6E6A61] leading-relaxed mb-8 max-w-xl font-light">
              {HERO_DATA.description}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-10 sm:mb-12">
              <button
                id="hero-shop-cta"
                type="button"
                onClick={onShopClick}
                className="group inline-flex items-center gap-3 bg-[#3F4B35] hover:bg-[#2F3928] text-[#F6F3EE] px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm"
              >
                <span>{HERO_DATA.primaryCta}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                id="hero-story-cta"
                type="button"
                onClick={onWatchStory}
                className="group inline-flex items-center gap-3 px-4 py-3 text-xs uppercase tracking-widest font-semibold text-[#24231F] hover:text-[#3F4B35] transition-colors"
              >
                <span className="w-10 h-10 rounded-full border border-[#24231F]/20 group-hover:border-[#3F4B35] group-hover:bg-[#3F4B35]/10 flex items-center justify-center transition-all duration-300">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5 text-[#24231F] group-hover:text-[#3F4B35]" />
                </span>
                <span>{HERO_DATA.secondaryCta}</span>
              </button>
            </div>

            {/* Social Proof */}
            <div className="pt-6 border-t border-[#E6E1D8] flex items-center gap-4">
              <div className="flex -space-x-2.5 overflow-hidden">
                {HERO_DATA.socialProof.avatars.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="Arvena collector"
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-[#F6F3EE] object-cover"
                    loading="lazy"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#3F4B35] text-xs font-semibold mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                  <span className="ml-1 text-[#24231F] text-xs">{HERO_DATA.socialProof.rating}</span>
                </div>
                <p className="text-xs text-[#6E6A61] font-light">
                  {HERO_DATA.socialProof.text}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: ~60% Visual Area (col-span-7) */}
          <div className="lg:col-span-7 relative">
            {/* Hero Main Image Container */}
            <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-lg aspect-4/3 sm:aspect-16/11 bg-[#ECE7DE] group">
              <img
                src={HERO_DATA.heroImage}
                alt={HERO_DATA.heroImageAlt}
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-103"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Product / New Collection Card */}
            <div
              id="hero-floating-card"
              onClick={() => onSelectProduct(HERO_DATA.featuredCard.productId)}
              className="mt-4 sm:mt-0 sm:absolute sm:bottom-6 sm:right-6 lg:-bottom-6 lg:right-6 bg-[#F9F7F3] border border-[#E6E1D8] p-4 rounded-2xl shadow-xl flex items-center gap-4 cursor-pointer hover:border-[#3F4B35] transition-all duration-300 transform hover:-translate-y-1 max-w-sm w-full z-10"
            >
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#ECE7DE] shrink-0">
                <img
                  src={HERO_DATA.featuredCard.image}
                  alt={HERO_DATA.featuredCard.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-[#3F4B35] bg-[#3F4B35]/10 px-2 py-0.5 rounded-sm">
                    {HERO_DATA.featuredCard.badge}
                  </span>
                  <span className="text-xs font-semibold text-[#24231F]">
                    ${HERO_DATA.featuredCard.price}
                  </span>
                </div>
                <h2 className="text-sm font-semibold text-[#24231F] truncate">
                  {HERO_DATA.featuredCard.title}
                </h2>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-[#6E6A61]">
                    {HERO_DATA.featuredCard.category}
                  </span>
                  <span className="text-xs font-medium text-[#3F4B35] flex items-center gap-1 group-hover:underline">
                    View Piece <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
