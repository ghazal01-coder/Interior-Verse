import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X, ArrowRight, PhoneCall } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenConsultation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Collections', href: '#collection-banner' },
    { label: 'Rooms', href: '#rooms' },
    { label: 'Shop Essentials', href: '#catalog' },
    { label: 'Craft & Process', href: '#craftsmanship' },
    { label: 'Why Arvena', href: '#why-us' },
    { label: 'Journal', href: '#testimonials' },
  ];

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div
        id="announcement-bar"
        className="w-full bg-[#ECE7DE] border-b border-[#E6E1D8] py-2 px-4 text-center text-xs tracking-wider uppercase text-[#6E6A61] font-medium transition-all"
      >
        <span className="inline-flex items-center gap-2">
          <span>Complimentary White-Glove Home Placement on orders over $1,500</span>
          <span className="hidden sm:inline text-[#3F4B35] font-semibold">— Use code ARVENA10 for 10% off</span>
        </span>
      </div>

      {/* Main Header */}
      <header
        id="main-header"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F6F3EE]/95 backdrop-blur-md shadow-xs border-b border-[#E6E1D8]/80 py-3.5'
            : 'bg-[#F6F3EE] py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            id="brand-logo"
            href="#"
            className="group flex flex-col items-start focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3F4B35]"
          >
            <span className="font-serif-luxury text-2xl sm:text-3xl font-normal tracking-[0.22em] text-[#24231F] group-hover:text-[#3F4B35] transition-colors uppercase">
              Arvena
            </span>
            <span className="text-[9px] uppercase tracking-[0.35em] text-[#6E6A61] -mt-0.5">
              Interiors & Objects
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" aria-label="Main Navigation" className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#24231F]/80 hover:text-[#3F4B35] tracking-wide relative py-1 transition-colors group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#3F4B35]"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#3F4B35] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Header Right Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search Trigger */}
            <button
              id="search-btn"
              type="button"
              onClick={onOpenSearch}
              aria-label="Search catalog"
              className="p-2.5 rounded-full text-[#24231F] hover:bg-[#ECE7DE] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3F4B35]"
            >
              <Search className="w-5 h-5 stroke-[1.75]" />
            </button>

            {/* Cart Trigger with Count */}
            <button
              id="cart-btn"
              type="button"
              onClick={onOpenCart}
              aria-label={`Shopping bag with ${cartCount} items`}
              className="relative p-2.5 rounded-full text-[#24231F] hover:bg-[#ECE7DE] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3F4B35]"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
              {cartCount > 0 && (
                <span
                  id="cart-badge"
                  className="absolute top-1 right-1 bg-[#3F4B35] text-[#F6F3EE] text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center animate-scale-in"
                >
                  {cartCount}
                </span>
              )}
            </button>

            {/* Book Consultation CTA Button */}
            <button
              id="book-consultation-header-btn"
              type="button"
              onClick={onOpenConsultation}
              className="hidden md:inline-flex items-center gap-2 bg-[#3F4B35] hover:bg-[#2F3928] text-[#F6F3EE] text-xs uppercase tracking-widest px-5 py-2.5 rounded-full font-medium transition-all duration-200 transform hover:-translate-y-0.5 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3F4B35]"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              className="lg:hidden p-2.5 rounded-full text-[#24231F] hover:bg-[#ECE7DE] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3F4B35]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 stroke-[1.75]" /> : <Menu className="w-6 h-6 stroke-[1.75]" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-overlay"
          className="fixed inset-0 z-50 bg-[#24231F]/50 backdrop-blur-xs lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            id="mobile-drawer-content"
            className="absolute top-0 right-0 w-full max-w-sm h-full bg-[#F6F3EE] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-slide-in-right"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E6E1D8]">
                <span className="font-serif-luxury text-2xl tracking-[0.2em] text-[#24231F]">
                  ARVENA
                </span>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-2 text-[#24231F] hover:bg-[#ECE7DE] rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-8 flex flex-col gap-5">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif-luxury text-2xl text-[#24231F] hover:text-[#3F4B35] transition-colors flex items-center justify-between py-1"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#6E6A61]" />
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-[#E6E1D8] flex flex-col gap-4">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full bg-[#3F4B35] hover:bg-[#2F3928] text-[#F6F3EE] py-3 rounded-full text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Book a Consultation</span>
              </button>

              <div className="text-center text-xs text-[#6E6A61] pt-2">
                Questions? Inquiries: studio@arvena-interiors.com
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
