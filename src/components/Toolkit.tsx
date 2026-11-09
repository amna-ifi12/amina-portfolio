import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { TOOLKIT_ITEMS } from '../data/portfolioData';

export const Toolkit: React.FC = () => {
  const getToolLogo = (iconBadge: string) => {
    switch (iconBadge) {
      case 'Meta':
        return (
          <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0668E1]">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z"/>
            </svg>
          </div>
        );
      case 'Google':
        return (
          <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center font-black text-lg text-[#EA4335]">
            G
          </div>
        );
      case 'Pinterest':
        return (
          <div className="w-10 h-10 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center font-bold text-xl text-[#E60023]">
            P
          </div>
        );
      case 'Amazon':
        return (
          <div className="w-10 h-10 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center font-black text-sm text-[#FF9900]">
            a
          </div>
        );
      case 'SHEIN':
        return (
          <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-xs tracking-tighter">
            SHEIN
          </div>
        );
      default:
        return (
          <div className="w-10 h-10 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-[#7C5CBF]">
            <Sparkles className="w-5 h-5 text-[#C74B72]" />
          </div>
        );
    }
  };

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C74B72]">
            <Sparkles className="w-3.5 h-3.5 text-[#E07A9B]" />
            <span>✦ Platforms & Ecosystem</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#49334F] tracking-tight text-balance">
            My Digital Marketing Toolkit.
          </h2>
          <p className="text-sm sm:text-base text-[#49334F]/75 font-normal">
            Everyday software, advertising suites, and AI engines that power my performance workflows.
          </p>
        </div>

        {/* Toolkit Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOOLKIT_ITEMS.map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-3xl bg-white border border-[#F8C8DC] shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex items-start gap-4"
            >
              <div className="shrink-0 transition-transform duration-300 group-hover:scale-105">
                {getToolLogo(item.iconBadge)}
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-base text-[#49334F] group-hover:text-[#C74B72] transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-[10px] font-semibold text-[#49334F]/60 px-2 py-0.5 rounded-full bg-[#FFF9F2] border border-[#F8C8DC]">
                    {item.category}
                  </span>
                </div>

                <p className="text-xs text-[#49334F]/75 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* AI Stack Highlight Ribbon */}
        <div className="mt-10 p-6 rounded-3xl bg-gradient-to-r from-[#F8C8DC]/30 via-[#DCD0FF]/40 to-[#FFF0B3]/30 border border-[#F8C8DC] flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center shadow-xs text-amber-500 shrink-0">
              <Sparkles className="w-5 h-5 text-[#E07A9B]" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#49334F]">
                AI Stack In Action
              </div>
              <div className="text-xs text-[#49334F]/70">
                Leveraging Google Gemini, ChatGPT, Claude, and Midjourney to accelerate ad ideation, copy variants, and competitor research.
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-[#49334F]">
            <span className="px-3 py-1 bg-white rounded-full border border-[#F8C8DC] shadow-2xs">Ad Hook Writing</span>
            <span className="px-3 py-1 bg-white rounded-full border border-[#DCD0FF] shadow-2xs">Audience Persona Modeling</span>
            <span className="px-3 py-1 bg-white rounded-full border border-[#FFF0B3] shadow-2xs">Rapid Asset Variation</span>
          </div>
        </div>

      </div>
    </section>
  );
};
