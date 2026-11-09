import React from 'react';
import { Heart, Sparkles, Target, Zap, Lightbulb } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left / Decorative Narrative Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-white border border-[#F8C8DC] shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Corner Cute Badge */}
              <div className="absolute -top-3.5 left-6 bg-[#F8C8DC] text-[#49334F] text-xs font-bold px-3 py-1 rounded-full shadow-xs flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>A Little About Me</span>
              </div>

              <div className="space-y-5 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#DCD0FF]/50 flex items-center justify-center text-[#49334F]">
                    <Heart className="w-6 h-6 text-[#C74B72] fill-[#F8C8DC]" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg text-[#49334F]">
                      Amina's Creative Formula
                    </h4>
                    <p className="text-xs text-[#49334F]/70">
                      Strategy + AI Speed + Aesthetic Taste
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-[#49334F]/85 leading-relaxed">
                  <div className="p-3.5 rounded-2xl bg-[#FFF9F2] border border-[#F8C8DC]/50 flex items-start gap-3">
                    <Zap className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm">
                      <strong className="text-[#49334F]">Gen Z Digital Native:</strong> I live and breathe internet culture, emerging aesthetic trends, and how modern audiences interact with content on social feeds.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FFF9F2] border border-[#DCD0FF]/60 flex items-start gap-3">
                    <Target className="w-4 h-4 text-[#7C5CBF] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm">
                      <strong className="text-[#49334F]">AI-Enhanced Speed:</strong> Using AI to accelerate research, test dozens of creative angles, and build agile workflows without robotic fluff.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FFF9F2] border border-[#FFF0B3] flex items-start gap-3">
                    <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm">
                      <strong className="text-[#49334F]">Data-Backed Decisions:</strong> Grounding every creative idea in real search intent, keyword discovery, and verified analytics.
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="pt-2 flex flex-wrap gap-1.5 text-xs font-semibold text-[#49334F]/75">
                  <span className="px-2.5 py-1 rounded-lg bg-[#F8C8DC]/40">#PerformanceMarketing</span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#DCD0FF]/40">#MetaAds</span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#FFF0B3]/50">#PinterestGrowth</span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#FFD9C7]/50">#AIStrategy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right / Main Story Prose */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C74B72]">
              <span>✦ Who I Am & How I Work</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#49334F] tracking-tight leading-tight text-balance">
              More Than Marketing, It's About Making Ideas Work.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#49334F]/85 leading-relaxed font-normal">
              <p>
                In a digital landscape crowded with generic ads and disconnected strategies, I believe the real magic happens at the intersection of <strong className="text-[#49334F] font-semibold">human creative intuition</strong>, <strong className="text-[#49334F] font-semibold">emerging AI tools</strong>, and <strong className="text-[#49334F] font-semibold">data-driven advertising</strong>.
              </p>

              <p>
                My work spans across <strong className="text-[#49334F] font-semibold">Meta advertising</strong> (Facebook & Instagram campaigns), <strong className="text-[#49334F] font-semibold">Google search strategies</strong>, organic <strong className="text-[#49334F] font-semibold">Pinterest account management</strong> (where I generated over 218K impressions), as well as hands-on product promotion in both <strong className="text-[#49334F] font-semibold">Amazon</strong> and <strong className="text-[#49334F] font-semibold">SHEIN affiliate marketing</strong>.
              </p>

              <p>
                Whether I'm mapping keyword clusters for high-intent Google searchers, drafting thumb-stopping Instagram ad hooks, or curating trend-led affiliate lookbooks, my goal is always the same: creating meaningful digital experiences that actually connect with audiences and help businesses grow online.
              </p>
            </div>

            {/* Quick Experience Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3">
              <div className="p-3 rounded-2xl bg-white/70 border border-[#F8C8DC] text-center">
                <span className="block text-xs text-[#49334F]/60">Paid Social</span>
                <span className="font-display font-bold text-sm text-[#49334F]">Meta Ads</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/70 border border-[#DCD0FF] text-center">
                <span className="block text-xs text-[#49334F]/60">Search Intent</span>
                <span className="font-display font-bold text-sm text-[#49334F]">Google Ads</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/70 border border-[#FFF0B3] text-center">
                <span className="block text-xs text-[#49334F]/60">Visual Search</span>
                <span className="font-display font-bold text-sm text-[#49334F]">Pinterest SEO</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
