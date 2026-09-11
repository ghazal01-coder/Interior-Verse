import React from 'react';
import { X, Play, Volume2, Sparkles, Hammer, Shield } from 'lucide-react';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      id="story-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="story-modal-card"
        className="w-full max-w-3xl bg-[#F6F3EE] rounded-3xl shadow-2xl border border-[#E6E1D8] overflow-hidden relative my-8 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close story modal"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video / Visual Hero Banner */}
        <div className="relative aspect-16/9 bg-[#24231F] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1200&q=85"
            alt="European woodworker hand-finishing solid white oak joinery"
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Center Play Simulation badge */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-xl animate-pulse">
              <Play className="w-7 h-7 fill-current ml-1" />
            </div>
          </div>

          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white text-xs">
            <div className="flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-emerald-400" />
              <span className="font-light tracking-wide">Chapter I: The Soul of European Timber (3:42)</span>
            </div>
            <span className="bg-white/20 px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-semibold">
              4K Studio Archive
            </span>
          </div>
        </div>

        {/* Story Text Content */}
        <div className="p-6 sm:p-8">
          <span className="text-xs uppercase tracking-[0.25em] text-[#3F4B35] font-semibold block mb-1">
            ORIGIN & ETHOS
          </span>
          <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#24231F] mb-3">
            Born from a desire for quiet permanence.
          </h3>
          <p className="text-xs sm:text-sm text-[#6E6A61] font-light leading-relaxed mb-6">
            Founded by a collective of Scandinavian architects and heritage cabinetmakers, Arvena was conceived as an antidote to fast interiors. We believe true luxury is quiet, tactile, and grounded in the natural world.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E6E1D8]">
            <div className="bg-[#ECE7DE] p-4 rounded-xl">
              <Sparkles className="w-4 h-4 text-[#3F4B35] mb-2" />
              <h4 className="text-xs font-semibold text-[#24231F] mb-1">Architectural Clarity</h4>
              <p className="text-[11px] text-[#6E6A61] font-light">Proportions tuned to natural room light and open space.</p>
            </div>
            <div className="bg-[#ECE7DE] p-4 rounded-xl">
              <Hammer className="w-4 h-4 text-[#3F4B35] mb-2" />
              <h4 className="text-xs font-semibold text-[#24231F] mb-1">Generational Joinery</h4>
              <p className="text-[11px] text-[#6E6A61] font-light">Mortise-and-tenon structural bonds that outlast generations.</p>
            </div>
            <div className="bg-[#ECE7DE] p-4 rounded-xl">
              <Shield className="w-4 h-4 text-[#3F4B35] mb-2" />
              <h4 className="text-xs font-semibold text-[#24231F] mb-1">Circularity</h4>
              <p className="text-[11px] text-[#6E6A61] font-light">100% natural fibers, zero synthetic toxic resins, regenerative forestry.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
