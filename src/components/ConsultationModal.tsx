import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, User, Mail, Phone, Home, DollarSign } from 'lucide-react';
import { ConsultationFormData } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: (data: ConsultationFormData) => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  onSubmitSuccess,
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    roomType: 'Living Room',
    preferredDate: '',
    projectBudget: '$5,000 - $15,000',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onSubmitSuccess(formData);
    }, 600);
  };

  return (
    <div
      id="consultation-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="consultation-modal-card"
        className="w-full max-w-xl bg-[#F6F3EE] rounded-3xl shadow-2xl border border-[#E6E1D8] p-6 sm:p-10 relative my-8 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close consultation modal"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#ECE7DE] flex items-center justify-center text-[#24231F] hover:bg-[#DFD9CE] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#3F4B35]/15 text-[#3F4B35] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif-luxury text-3xl text-[#24231F] mb-2">
              Consultation Reserved
            </h3>
            <p className="text-sm text-[#6E6A61] font-light max-w-md mx-auto leading-relaxed mb-6">
              Thank you, {formData.fullName}. A senior architectural designer from our European atelier will contact you at {formData.email} within 24 business hours to finalize your design session.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="bg-[#3F4B35] text-[#F6F3EE] text-xs font-semibold uppercase tracking-widest px-8 py-3.5 rounded-full hover:bg-[#2F3928] transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#3F4B35] font-semibold block mb-1">
                PRIVATE DESIGN ADVISORY
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-normal text-[#24231F]">
                Book an Interior Consultation
              </h3>
              <p className="text-xs sm:text-sm text-[#6E6A61] font-light mt-1">
                Complimentary 45-minute spatial planning session with fabric sampling and 3D architectural elevations.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#24231F] uppercase tracking-wider mb-1">
                    Your Full Name *
                  </label>
                  <div className="flex items-center bg-[#F9F7F3] border border-[#E6E1D8] rounded-xl px-3 py-2 focus-within:border-[#3F4B35]">
                    <User className="w-4 h-4 text-[#6E6A61] mr-2 shrink-0" />
                    <input
                      required
                      type="text"
                      placeholder="Eleanor Vance"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-transparent text-xs text-[#24231F] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#24231F] uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <div className="flex items-center bg-[#F9F7F3] border border-[#E6E1D8] rounded-xl px-3 py-2 focus-within:border-[#3F4B35]">
                    <Mail className="w-4 h-4 text-[#6E6A61] mr-2 shrink-0" />
                    <input
                      required
                      type="email"
                      placeholder="eleanor@studio.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent text-xs text-[#24231F] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Phone & Room */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#24231F] uppercase tracking-wider mb-1">
                    Phone Number
                  </label>
                  <div className="flex items-center bg-[#F9F7F3] border border-[#E6E1D8] rounded-xl px-3 py-2 focus-within:border-[#3F4B35]">
                    <Phone className="w-4 h-4 text-[#6E6A61] mr-2 shrink-0" />
                    <input
                      type="tel"
                      placeholder="+1 (555) 234-5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-transparent text-xs text-[#24231F] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#24231F] uppercase tracking-wider mb-1">
                    Primary Room Focus
                  </label>
                  <div className="flex items-center bg-[#F9F7F3] border border-[#E6E1D8] rounded-xl px-3 py-2 focus-within:border-[#3F4B35]">
                    <Home className="w-4 h-4 text-[#6E6A61] mr-2 shrink-0" />
                    <select
                      value={formData.roomType}
                      onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                      className="w-full bg-transparent text-xs text-[#24231F] focus:outline-none cursor-pointer"
                    >
                      <option value="Living Room">Living Room</option>
                      <option value="Dining Room">Dining Room</option>
                      <option value="Primary Bedroom">Primary Bedroom</option>
                      <option value="Home Office">Home Office</option>
                      <option value="Full Residence">Full Residence</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Preferred Date & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#24231F] uppercase tracking-wider mb-1">
                    Target Consultation Date
                  </label>
                  <div className="flex items-center bg-[#F9F7F3] border border-[#E6E1D8] rounded-xl px-3 py-2 focus-within:border-[#3F4B35]">
                    <Calendar className="w-4 h-4 text-[#6E6A61] mr-2 shrink-0" />
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-transparent text-xs text-[#24231F] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#24231F] uppercase tracking-wider mb-1">
                    Anticipated Furniture Budget
                  </label>
                  <div className="flex items-center bg-[#F9F7F3] border border-[#E6E1D8] rounded-xl px-3 py-2 focus-within:border-[#3F4B35]">
                    <DollarSign className="w-4 h-4 text-[#6E6A61] mr-2 shrink-0" />
                    <select
                      value={formData.projectBudget}
                      onChange={(e) => setFormData({ ...formData, projectBudget: e.target.value })}
                      className="w-full bg-transparent text-xs text-[#24231F] focus:outline-none cursor-pointer"
                    >
                      <option value="Under $5,000">Under $5,000</option>
                      <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                      <option value="$15,000 - $35,000">$15,000 - $35,000</option>
                      <option value="$35,000+">$35,000+</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-[11px] font-semibold text-[#24231F] uppercase tracking-wider mb-1">
                  Project Vision & Specific Requests
                </label>
                <textarea
                  rows={3}
                  placeholder="Share details about your space dimensions, preferred timbers, color palette, or specific Arvena pieces you are drawn to..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#F9F7F3] border border-[#E6E1D8] rounded-xl p-3 text-xs text-[#24231F] focus:outline-none focus:border-[#3F4B35]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#3F4B35] hover:bg-[#2F3928] text-[#F6F3EE] py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-200 shadow-md cursor-pointer disabled:opacity-70"
              >
                {isSubmitting ? 'Reserving...' : 'Confirm Consultation Booking'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
