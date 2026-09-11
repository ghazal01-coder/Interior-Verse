import React from 'react';
import { Compass, ShieldCheck, Sprout, HeartHandshake } from 'lucide-react';
import { WHY_CHOOSE_US_ITEMS } from '../data/furnitureData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#3F4B35]" strokeWidth={1.5} />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#3F4B35]" strokeWidth={1.5} />;
      case 'Sprout':
        return <Sprout className="w-6 h-6 text-[#3F4B35]" strokeWidth={1.5} />;
      case 'HeartHandshake':
      default:
        return <HeartHandshake className="w-6 h-6 text-[#3F4B35]" strokeWidth={1.5} />;
    }
  };

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#ECE7DE]/50 border-y border-[#E6E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with generous whitespace */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-px bg-[#3F4B35]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#3F4B35]">
              OUR COMMITMENT
            </span>
            <span className="w-6 h-px bg-[#3F4B35]" />
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-[#24231F] mb-4">
            Furniture with purpose
          </h2>
          <p className="text-sm sm:text-base text-[#6E6A61] font-light leading-relaxed">
            We reject the transient cycles of disposable decor. Every piece leaving our European ateliers is sculpted with intention, integrity, and reverence for natural resources.
          </p>
        </div>

        {/* 4 Feature Columns with subtle visual separators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {WHY_CHOOSE_US_ITEMS.map((item, idx) => (
            <div
              key={item.title}
              className="flex flex-col bg-[#F9F7F3] border border-[#E6E1D8] p-8 rounded-2xl transition-all duration-300 hover:shadow-md hover:border-[#3F4B35]/40"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-full bg-[#ECE7DE] border border-[#E6E1D8] flex items-center justify-center mb-6">
                {getIcon(item.icon)}
              </div>

              {/* Heading */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-serif-luxury text-xl font-normal text-[#24231F]">
                  {item.title}
                </h3>
                <span className="text-xs text-[#6E6A61]/60 font-mono">0{idx + 1}</span>
              </div>

              {/* Two-line description */}
              <p className="text-xs sm:text-sm text-[#6E6A61] leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
