import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', toggleVisible, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      id="back-to-top-btn"
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      className="fixed bottom-6 left-6 z-40 w-11 h-11 rounded-full bg-[#F9F7F3] border border-[#E6E1D8] text-[#24231F] hover:text-[#F6F3EE] hover:bg-[#3F4B35] shadow-lg flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#3F4B35]"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
