import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ROOM_CATEGORIES } from '../data/furnitureData';

interface ShopByRoomProps {
  onSelectRoom: (roomKey: 'living' | 'bedroom' | 'dining' | 'office') => void;
}

export const ShopByRoom: React.FC<ShopByRoomProps> = ({ onSelectRoom }) => {
  return (
    <section id="rooms" className="py-20 sm:py-28 bg-[#F6F3EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-[#3F4B35]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#3F4B35]">
                SHOP BY ROOM
              </span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-[#24231F] leading-tight">
              Find inspiration for every room
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#6E6A61] max-w-md font-light leading-relaxed">
            Curated interior environments designed with spatial harmony, honest tactile materials, and organic flow for peaceful dwelling.
          </p>
        </div>

        {/* 4 Image Cards Grid (Desktop 4 cols, Tablet 2x2, Mobile responsive carousel/grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROOM_CATEGORIES.map((room) => (
            <div
              key={room.id}
              onClick={() => onSelectRoom(room.roomKey)}
              className="group relative h-[380px] sm:h-[440px] rounded-[24px] overflow-hidden cursor-pointer bg-[#ECE7DE] border border-[#E6E1D8] transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1"
            >
              {/* Room Background Image with Subtle Zoom */}
              <img
                src={room.image}
                alt={room.title}
                className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-106"
                loading="lazy"
              />

              {/* Subtle darkened gradient overlay near bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#24231F]/80 via-[#24231F]/20 to-transparent transition-opacity duration-300 group-hover:from-[#24231F]/90" />

              {/* Card Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                {/* Top Badge */}
                <div className="flex justify-end">
                  <span className="text-[10px] uppercase tracking-widest text-[#F6F3EE] bg-black/30 backdrop-blur-xs px-3 py-1 rounded-full border border-white/10 font-medium">
                    {room.itemCount}
                  </span>
                </div>

                {/* Bottom Details */}
                <div>
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#F6F3EE] font-normal leading-tight group-hover:text-white transition-colors">
                        {room.title}
                      </h3>
                      <p className="text-xs text-[#F6F3EE]/80 mt-1.5 font-light line-clamp-2 max-w-[220px]">
                        {room.subtitle}
                      </p>
                    </div>

                    {/* Circular Arrow Button */}
                    <div className="w-10 h-10 rounded-full bg-[#F6F3EE] text-[#24231F] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#3F4B35] group-hover:text-[#F6F3EE] transform group-hover:rotate-45 shadow-sm">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
