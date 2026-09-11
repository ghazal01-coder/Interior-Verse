import React from 'react';
import { FOOTER_DATA } from '../data/furnitureData';
import { ArrowUp, Instagram, Share2, BookOpen, Linkedin, PhoneCall, Mail } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Instagram':
        return <Instagram className="w-4 h-4" />;
      case 'Share2':
        return <Share2 className="w-4 h-4" />;
      case 'BookOpen':
        return <BookOpen className="w-4 h-4" />;
      case 'Linkedin':
      default:
        return <Linkedin className="w-4 h-4" />;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#ECE7DE] border-t border-[#E6E1D8] pt-16 sm:pt-20 pb-12 text-[#24231F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#DCD6CA]">
          {/* Brand Col (col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex flex-col items-start mb-4">
                <span className="font-serif-luxury text-2xl sm:text-3xl font-normal tracking-[0.22em] text-[#24231F] uppercase">
                  Arvena
                </span>
                <span className="text-[9px] uppercase tracking-[0.35em] text-[#6E6A61] -mt-0.5">
                  Interiors & Objects
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#6E6A61] font-light leading-relaxed max-w-sm mb-6">
                {FOOTER_DATA.tagline}
              </p>

              {/* Consultation Callout */}
              <div className="bg-[#F6F3EE] p-4 rounded-xl border border-[#E6E1D8] max-w-sm">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#3F4B35] block mb-1">
                  Private Design Advisory
                </span>
                <p className="text-xs text-[#6E6A61] mb-3 font-light">
                  Work 1-on-1 with our architectural interior consultants to compose your bespoke room plan.
                </p>
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#3F4B35] hover:text-[#2F3928] uppercase tracking-wider"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Schedule Consultation</span>
                </button>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              {FOOTER_DATA.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  aria-label={social.name}
                  className="w-8 h-8 rounded-full bg-[#F6F3EE] border border-[#E6E1D8] flex items-center justify-center text-[#6E6A61] hover:text-[#3F4B35] hover:border-[#3F4B35] transition-colors"
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns (col-span-8: 4 sub-columns) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {FOOTER_DATA.columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#24231F] mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-xs text-[#6E6A61] hover:text-[#3F4B35] font-light transition-colors block py-0.5"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6E6A61] font-light">
          <div>{FOOTER_DATA.copyright}</div>

          <div className="flex flex-wrap items-center gap-6">
            {FOOTER_DATA.legal.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-[#24231F] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="flex items-center gap-1.5 text-xs text-[#3F4B35] hover:text-[#2F3928] font-medium"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
