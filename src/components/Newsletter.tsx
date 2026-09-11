import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Mail, Sparkles } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setErrorMessage('');
    }, 600);
  };

  return (
    <section id="newsletter" className="py-12 sm:py-20 bg-[#F6F3EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wide Rounded Newsletter Banner with soft styling */}
        <div className="relative rounded-[28px] sm:rounded-[36px] bg-[#ECE7DE] border border-[#E6E1D8] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column (col-span-7) */}
            <div className="lg:col-span-7 z-10">
              <div className="inline-flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-[#3F4B35]" />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#3F4B35]">
                  THE ARVENA ATELIER JOURNAL
                </span>
              </div>

              <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-[#24231F] leading-tight mb-4">
                Get 10% Off Your First Order
              </h2>

              <p className="text-sm sm:text-base text-[#6E6A61] font-light leading-relaxed mb-8 max-w-xl">
                Subscribe to receive private preview access to limited seasonal releases, bespoke interior styling editorials, and invitations to architect-led discussions.
              </p>

              {status === 'success' ? (
                <div className="bg-[#F9F7F3] border border-[#3F4B35]/30 p-5 rounded-2xl flex items-start gap-3 max-w-md animate-fade-in">
                  <CheckCircle2 className="w-6 h-6 text-[#3F4B35] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#24231F]">
                      Welcome to the Arvena Circle
                    </h4>
                    <p className="text-xs text-[#6E6A61] mt-1 font-light leading-relaxed">
                      Your 10% welcome invitation code is{' '}
                      <span className="font-mono font-bold text-[#3F4B35] bg-[#3F4B35]/10 px-2 py-0.5 rounded">
                        ARVENA10
                      </span>
                      . A copy has been dispatched to {email}.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="max-w-md">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 bg-[#F9F7F3] border border-[#E6E1D8] p-1.5 sm:p-2 rounded-2xl sm:rounded-full shadow-xs focus-within:border-[#3F4B35] transition-colors">
                    <div className="flex items-center gap-2 pl-3 flex-1">
                      <Mail className="w-4 h-4 text-[#6E6A61]" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (status === 'error') setStatus('idle');
                        }}
                        placeholder="Enter your email address"
                        className="w-full bg-transparent text-xs sm:text-sm text-[#24231F] placeholder-[#6E6A61]/70 focus:outline-none py-2"
                        aria-label="Email address for newsletter"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="bg-[#3F4B35] hover:bg-[#2F3928] text-[#F6F3EE] px-6 py-3 rounded-xl sm:rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 shrink-0 disabled:opacity-70 cursor-pointer"
                    >
                      <span>{status === 'loading' ? 'Joining...' : 'Subscribe'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  {status === 'error' && (
                    <p className="text-xs text-rose-600 mt-2 pl-3">{errorMessage}</p>
                  )}
                  <p className="text-[11px] text-[#6E6A61] mt-3 pl-3 font-light">
                    We respect your privacy. Unsubscribe at any time with a single click.
                  </p>
                </form>
              )}
            </div>

            {/* Right Decorative Interior Visual (col-span-5) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-4/3 sm:aspect-16/11 shadow-md bg-[#DFD9CE]">
                <img
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=85"
                  alt="Minimalist warm living corner with natural linen chair and ceramic vessels"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider text-[#24231F] font-medium">
                  Edition 24 — Studio Archive
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
