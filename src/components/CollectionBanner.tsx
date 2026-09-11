import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { COLLECTION_BANNER_DATA } from '../data/furnitureData';

interface CollectionBannerProps {
  onDiscover: () => void;
}

export const CollectionBanner: React.FC<CollectionBannerProps> = ({ onDiscover }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = COLLECTION_BANNER_DATA.slides;

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const currentSlide = slides[activeSlide];

  return (
    <section id="collection-banner" className="py-12 sm:py-16 bg-[#F6F3EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full-width Rounded Banner with Deep Muted Olive Green Background */}
        <div className="relative rounded-[28px] sm:rounded-[36px] bg-[#3F4B35] text-[#F6F3EE] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-xl">
          {/* Subtle architectural background texture accent */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_50%)] pointer-events-none" />

          {/* Upper Right Slider Controls */}
          <div className="flex items-center justify-between sm:justify-end gap-3 mb-8 sm:mb-6">
            <div className="flex items-center gap-1 sm:hidden text-xs text-[#F6F3EE]/70 font-light">
              Configuration {activeSlide + 1} of {slides.length}
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-block text-xs uppercase tracking-widest text-[#F6F3EE]/70 mr-2">
                Layout {activeSlide + 1} / {slides.length}
              </span>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous configuration slide"
                className="w-10 h-10 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 flex items-center justify-center text-[#F6F3EE] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next configuration slide"
                className="w-10 h-10 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 flex items-center justify-center text-[#F6F3EE] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Banner Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content (col-span-5) */}
            <div className="lg:col-span-5 z-10">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-px bg-[#ECE7DE]" />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ECE7DE]">
                  {COLLECTION_BANNER_DATA.eyebrow}
                </span>
              </div>

              <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.1] text-[#F6F3EE] mb-4">
                {COLLECTION_BANNER_DATA.title}
              </h2>

              <p className="text-sm sm:text-base text-[#F6F3EE]/80 font-light leading-relaxed mb-6">
                {COLLECTION_BANNER_DATA.description}
              </p>

              {/* Active Slide Specs */}
              <div className="bg-black/20 border border-white/10 p-4 rounded-xl mb-8 backdrop-blur-xs">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#ECE7DE] mb-1">
                  Active Layout:
                </div>
                <div className="text-sm font-medium text-white mb-1">
                  {currentSlide.title}
                </div>
                <div className="flex items-center justify-between text-xs text-[#F6F3EE]/70">
                  <span>{currentSlide.tagline}</span>
                  <span className="font-semibold text-white">{currentSlide.price}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={onDiscover}
                className="group inline-flex items-center gap-3 bg-[#F6F3EE] hover:bg-white text-[#24231F] px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-0.5 shadow-md"
              >
                <span>{COLLECTION_BANNER_DATA.ctaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Right Image Container (col-span-7) */}
            <div className="lg:col-span-7 relative">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl aspect-16/10 bg-[#2F3928] group">
                <img
                  key={currentSlide.image}
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  className="w-full h-full object-cover transform transition-all duration-700 ease-out group-hover:scale-103"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating pill badge on image */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-black/40 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-xs text-white flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Modular configurations in 14 Belgian linens</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
