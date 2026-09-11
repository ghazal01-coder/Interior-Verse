import React, { useState } from 'react';
import { Star, ArrowRight, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/furnitureData';

interface TestimonialsProps {
  onViewAllReviews: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onViewAllReviews }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#F6F3EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Side (col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-[#3F4B35]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#3F4B35]">
                WHAT OUR CUSTOMERS SAY
              </span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-[#24231F] leading-tight mb-6">
              Loved by thousands of homes
            </h2>

            <p className="text-sm text-[#6E6A61] font-light leading-relaxed mb-8">
              Read how architects, interior designers, and discerning homeowners elevate their private sanctuaries with Arvena’s curated craft.
            </p>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={onViewAllReviews}
                className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#3F4B35] hover:text-[#2F3928] transition-colors py-1"
              >
                <span className="border-b border-[#3F4B35]/40 group-hover:border-[#3F4B35] pb-0.5">
                  View All Reviews
                </span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Slider Controls */}
              <div className="flex items-center gap-2 ml-auto lg:ml-4">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="w-9 h-9 rounded-full border border-[#E6E1D8] bg-[#F9F7F3] hover:bg-[#ECE7DE] flex items-center justify-center text-[#24231F] transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="w-9 h-9 rounded-full border border-[#E6E1D8] bg-[#F9F7F3] hover:bg-[#ECE7DE] flex items-center justify-center text-[#24231F] transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Three Testimonial Cards (col-span-8) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((testimonial, idx) => (
                <div
                  key={testimonial.id}
                  className={`flex flex-col justify-between bg-[#F9F7F3] border rounded-2xl p-6 sm:p-7 transition-all duration-300 ${
                    idx === activeIdx
                      ? 'border-[#3F4B35]/60 shadow-md ring-1 ring-[#3F4B35]/20'
                      : 'border-[#E6E1D8] hover:border-[#3F4B35]/30'
                  }`}
                >
                  <div>
                    {/* Stars & Quote Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1 text-[#3F4B35]">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <Quote className="w-5 h-5 text-[#E6E1D8]" />
                    </div>

                    {/* Customer Quote */}
                    <p className="text-xs sm:text-sm text-[#24231F] leading-relaxed font-light mb-6 italic">
                      “{testimonial.quote}”
                    </p>
                  </div>

                  {/* Customer Info */}
                  <div className="pt-4 border-t border-[#E6E1D8]/80 flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-10 h-10 rounded-full object-cover ring-1 ring-[#E6E1D8]"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="text-xs font-semibold text-[#24231F]">
                        {testimonial.author}
                      </h4>
                      <p className="text-[11px] text-[#6E6A61] font-light">
                        {testimonial.role} — {testimonial.city}
                      </p>
                      <span className="text-[9px] text-[#3F4B35] font-medium block mt-0.5">
                        Verified Owner: {testimonial.featuredProduct}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
