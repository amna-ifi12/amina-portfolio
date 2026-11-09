import React from 'react';
import { ArrowUp, Heart, Sparkles, Linkedin, Mail, PhoneCall } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-[#F8C8DC] py-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-gray-100">
          
          {/* Brand Wordmark & Tagline */}
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-display font-black text-2xl tracking-tight text-[#49334F]">
                AMINA IFTIKHAR
              </span>
              <Sparkles className="w-4 h-4 text-[#E07A9B] animate-twinkle" />
            </div>
            <p className="text-sm font-medium text-[#49334F]/75">
              "Creative Thinking. Smart Marketing. Digital Growth."
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:meenoiftikhar@gmail.com"
              aria-label="Email Amina at meenoiftikhar@gmail.com"
              title="Email meenoiftikhar@gmail.com"
              className="w-10 h-10 rounded-2xl bg-[#FFF9F2] hover:bg-[#F8C8DC]/50 border border-[#F8C8DC] flex items-center justify-center text-[#49334F] hover:text-[#C74B72] transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/aminamarketer"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
              className="w-10 h-10 rounded-2xl bg-[#FFF9F2] hover:bg-[#DCD0FF]/50 border border-[#DCD0FF] flex items-center justify-center text-[#49334F] hover:text-[#7C5CBF] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/923714133367?text=Hi%20Amina,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20discuss%20marketing%20services!"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="WhatsApp Chat (03714133367)"
              title="WhatsApp Chat (+92 371 4133367)"
              className="w-10 h-10 rounded-2xl bg-[#FFF9F2] hover:bg-[#FFD9C7]/50 border border-[#FFD9C7] flex items-center justify-center text-[#49334F] hover:text-[#D96B43] transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-2xl bg-[#49334F] hover:bg-[#38263D] text-white flex items-center justify-center shadow-xs transition-transform hover:-translate-y-0.5 cursor-pointer ml-3"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-[#F8C8DC]" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#49334F]/60 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Amina Iftikhar · AI Performance Marketer. All rights reserved.
          </div>

          <div className="flex items-center gap-1.5 font-medium text-[#49334F]/80">
            <span>Designed with</span>
            <Heart className="w-3.5 h-3.5 text-[#E07A9B] fill-[#E07A9B] animate-pulse" />
            <span>for digital growth</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
