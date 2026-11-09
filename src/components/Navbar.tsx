import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContactModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FFF9F2]/90 backdrop-blur-md shadow-xs py-3.5 border-b border-[#F8C8DC]/50' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar 3-Zone Contract */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a 
            href="#hero" 
            onClick={(e) => scrollToSection(e, 'hero')}
            className="flex items-center gap-2 group whitespace-nowrap shrink-0"
          >
            <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-[#49334F]">
              AMINA IFTIKHAR
            </span>
            <span className="text-[#E07A9B] text-sm group-hover:rotate-45 transition-transform duration-300">
              ✦
            </span>
          </a>

          {/* Zone 2: 4-5 Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-[#49334F]/80">
            <a 
              href="#hero" 
              onClick={(e) => scrollToSection(e, 'hero')}
              className="hover:text-[#49334F] hover:underline decoration-[#F8C8DC] decoration-2 underline-offset-8 transition-colors whitespace-nowrap shrink-0"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => scrollToSection(e, 'about')}
              className="hover:text-[#49334F] hover:underline decoration-[#F8C8DC] decoration-2 underline-offset-8 transition-colors whitespace-nowrap shrink-0"
            >
              About
            </a>
            <a 
              href="#services" 
              onClick={(e) => scrollToSection(e, 'services')}
              className="hover:text-[#49334F] hover:underline decoration-[#DCD0FF] decoration-2 underline-offset-8 transition-colors whitespace-nowrap shrink-0"
            >
              Services
            </a>
            <a 
              href="#work" 
              onClick={(e) => scrollToSection(e, 'work')}
              className="hover:text-[#49334F] hover:underline decoration-[#FFF0B3] decoration-2 underline-offset-8 transition-colors whitespace-nowrap shrink-0"
            >
              My Work
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="hover:text-[#49334F] hover:underline decoration-[#FFD9C7] decoration-2 underline-offset-8 transition-colors whitespace-nowrap shrink-0"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: Primary Action CTA */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="inline-flex items-center gap-1.5 px-4.5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#49334F] hover:bg-[#38263D] rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-4 h-4 text-[#F8C8DC]" />
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#49334F] hover:bg-[#F8C8DC]/30 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFF9F2] border-b border-[#F8C8DC] px-5 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2.5 text-base font-semibold text-[#49334F]">
            <a
              href="#hero"
              onClick={(e) => scrollToSection(e, 'hero')}
              className="px-3 py-2 rounded-xl hover:bg-[#F8C8DC]/30 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className="px-3 py-2 rounded-xl hover:bg-[#F8C8DC]/30 transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              onClick={(e) => scrollToSection(e, 'services')}
              className="px-3 py-2 rounded-xl hover:bg-[#DCD0FF]/30 transition-colors"
            >
              Services
            </a>
            <a
              href="#work"
              onClick={(e) => scrollToSection(e, 'work')}
              className="px-3 py-2 rounded-xl hover:bg-[#FFF0B3]/30 transition-colors"
            >
              My Work
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="px-3 py-2 rounded-xl hover:bg-[#FFD9C7]/30 transition-colors"
            >
              Contact
            </a>
          </nav>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#49334F] text-white font-bold text-sm shadow-md"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-4 h-4 text-[#F8C8DC]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
