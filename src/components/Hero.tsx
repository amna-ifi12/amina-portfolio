import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { HeroPhotoFrame } from './HeroPhotoFrame';

import { ServiceId } from '../types';

interface HeroProps {
  onSelectService?: (serviceId: ServiceId | 'general-inquiry') => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F8C8DC]/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-[#DCD0FF]/25 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#FFF0B3]/25 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Narrative */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Introductory Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#F8C8DC] shadow-xs text-xs sm:text-sm font-semibold text-[#49334F]">
              <Sparkles className="w-3.5 h-3.5 text-[#E07A9B] animate-spin" style={{ animationDuration: '10s' }} />
              <span>✦ AI-Powered Digital Marketing</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#49334F] leading-[1.12] text-balance">
              Turning{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#C74B72]">Creative Ideas</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-[#F8C8DC]/60 -rotate-1 rounded-sm -z-0" />
              </span>{' '}
              Into{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#5B3E75]">Digital Growth.</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-[#DCD0FF]/70 rotate-1 rounded-sm -z-0" />
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#49334F]/85 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Hey, I'm Amina! An AI Performance Marketer passionate about helping brands grow through smart advertising, creative strategies, and data-driven marketing.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => scrollTo('work')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#49334F] hover:bg-[#38263D] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 text-[#F8C8DC]" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-[#FFF9F2] text-[#49334F] font-bold text-sm sm:text-base border-2 border-[#F8C8DC] shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Let's Collaborate</span>
                <ArrowUpRight className="w-4 h-4 text-[#E07A9B]" />
              </button>
            </div>

            {/* Small Trust Indicators */}
            <div className="pt-4 border-t border-[#F8C8DC]/40">
              <div className="text-xs font-semibold text-[#49334F]/60 uppercase tracking-wider mb-2.5">
                Core Marketing Specializations
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-4 text-xs sm:text-sm font-medium text-[#49334F]">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/60 border border-[#F8C8DC]/60">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E07A9B]" />
                  <span>Meta Ads</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/60 border border-[#DCD0FF]/60">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#7C5CBF]" />
                  <span>Google Ads</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/60 border border-[#FFF0B3]/80">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                  <span>Pinterest Marketing</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/60 border border-[#FFD9C7]/70">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D96B43]" />
                  <span>AI-Powered Strategies</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Profile Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroPhotoFrame />
          </div>
        </div>
      </div>
    </section>
  );
};
