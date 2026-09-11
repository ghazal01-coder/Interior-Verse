import React from 'react';
import { Sparkles, Hammer, Leaf, RotateCcw } from 'lucide-react';
import { TRUST_BENEFITS } from '../data/furnitureData';

export const TrustBar: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#3F4B35]" strokeWidth={1.5} />;
      case 'Hammer':
        return <Hammer className="w-5 h-5 text-[#3F4B35]" strokeWidth={1.5} />;
      case 'Leaf':
        return <Leaf className="w-5 h-5 text-[#3F4B35]" strokeWidth={1.5} />;
      case 'RotateCcw':
      default:
        return <RotateCcw className="w-5 h-5 text-[#3F4B35]" strokeWidth={1.5} />;
    }
  };

  return (
    <section
      id="trust-bar"
      aria-label="Brand Benefits and Guarantees"
      className="border-y border-[#E6E1D8] bg-[#F9F7F3] py-8 sm:py-10 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#E6E1D8]">
          {TRUST_BENEFITS.map((item, index) => (
            <div
              key={item.title}
              className={`flex items-start gap-4 ${
                index !== 0 ? 'sm:pl-6 lg:pl-8 pt-4 sm:pt-0' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-[#ECE7DE] flex items-center justify-center shrink-0 border border-[#E6E1D8]">
                {getIcon(item.icon)}
              </div>
              <div>
                <h2 className="text-sm font-semibold tracking-wide text-[#24231F] mb-1">
                  {item.title}
                </h2>
                <p className="text-xs text-[#6E6A61] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
