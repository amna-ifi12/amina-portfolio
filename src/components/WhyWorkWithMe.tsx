import React from 'react';
import { Sparkles, BrainCircuit, BarChart3, Palette, Rocket } from 'lucide-react';
import { WHY_WORK_WITH_ME } from '../data/portfolioData';

export const WhyWorkWithMe: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <BrainCircuit className="w-6 h-6 text-[#C74B72]" />;
      case 1:
        return <BarChart3 className="w-6 h-6 text-[#7C5CBF]" />;
      case 2:
        return <Palette className="w-6 h-6 text-amber-600" />;
      case 3:
        return <Rocket className="w-6 h-6 text-[#D96B43]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#C74B72]" />;
    }
  };

  return (
    <section className="py-20 md:py-28 relative bg-white/40 border-y border-[#F8C8DC]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C74B72]">
            <Sparkles className="w-3.5 h-3.5 text-[#E07A9B]" />
            <span>✦ The Strategic Advantage</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#49334F] tracking-tight text-balance">
            Why Brands Would Love Working With Me.
          </h2>
          <p className="text-sm sm:text-base text-[#49334F]/75 font-normal">
            A collaborative partnership built on creative ambition, technology, and genuine accountability.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_WORK_WITH_ME.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-[#FFF9F2] rounded-3xl p-7 border border-[#F8C8DC]/60 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Icon Container with gentle hover scale */}
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shadow-2xs group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${item.color}80` }}
                >
                  {getIcon(idx)}
                </div>

                {/* Subtitle tag */}
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#49334F]/60 mb-1">
                  {item.tagline}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl text-[#49334F] mb-3 group-hover:text-[#C74B72] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#49334F]/80 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Decorative Pill */}
              <div className="mt-6 pt-4 border-t border-[#49334F]/10 flex items-center justify-between text-xs font-semibold text-[#49334F]">
                <span>{item.badge}</span>
                <span className="text-[#C74B72] group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
