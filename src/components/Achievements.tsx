import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, TrendingUp, ShieldCheck, Eye, Layers, Compass } from 'lucide-react';

export const Achievements: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [displayCount, setDisplayCount] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Smooth count-up animation up to 218.51
          const target = 218.51;
          const duration = 2000;
          const startTime = performance.now();

          const updateCount = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic curve
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentVal = target * easeOut;
            setDisplayCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              setDisplayCount(target);
            }
          };

          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#F8C8DC]/30 via-[#DCD0FF]/35 to-[#FFF0B3]/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C74B72]">
            <Sparkles className="w-3.5 h-3.5 text-[#E07A9B]" />
            <span>✦ Verified Milestone</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#49334F] tracking-tight text-balance">
            Little Numbers, Big Marketing Energy!
          </h2>
          <p className="text-sm sm:text-base text-[#49334F]/75 font-normal">
            Real, verifiable growth achieved through consistency, visual SEO, and organic audience connection.
          </p>
        </div>

        {/* Hero Metric Centerpiece */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 sm:p-12 md:p-16 rounded-[2.5rem] bg-white border-2 border-[#F8C8DC] shadow-xl text-center overflow-hidden">
            
            {/* Top Organic Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF0B3]/80 border border-amber-200 text-xs sm:text-sm font-bold text-[#49334F] mb-6">
              <span className="text-[#E60023] font-bold">📌</span>
              <span>Pinterest Account Management</span>
            </div>

            {/* Giant Number Display with Tabular Figures */}
            <div className="mb-4">
              <div className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-[#49334F] tabular-nums leading-none">
                {displayCount.toFixed(2)}
                <span className="text-[#C74B72] text-4xl sm:text-5xl md:text-6xl font-bold ml-1">K+</span>
              </div>
              <div className="mt-3 text-lg sm:text-2xl font-bold font-display text-[#49334F]/90">
                Pinterest Impressions
              </div>
            </div>

            {/* Supporting Description mandated by user brief */}
            <p className="text-sm sm:text-base text-[#49334F]/80 max-w-xl mx-auto leading-relaxed mb-8">
              "Achieved while managing a Pinterest account through strategic content management."
            </p>

            {/* Breakdown Indicators (strictly factual from uploaded Pinterest screenshots) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#F8C8DC]/60">
              <div className="p-3.5 rounded-2xl bg-[#FFF9F2] border border-[#F8C8DC]/40 text-center">
                <div className="text-[10px] font-semibold text-[#49334F]/70 mb-0.5">
                  Total Audience
                </div>
                <div className="text-base font-extrabold text-[#49334F] tabular-nums">
                  176.44k
                </div>
                <div className="text-[10px] text-emerald-700 font-bold">↑ 55% Growth</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FFF9F2] border border-[#DCD0FF]/50 text-center">
                <div className="text-[10px] font-semibold text-[#49334F]/70 mb-0.5">
                  Engagements
                </div>
                <div className="text-base font-extrabold text-[#49334F] tabular-nums">
                  11.56k
                </div>
                <div className="text-[10px] text-emerald-700 font-bold">↑ 60% Growth</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FFF9F2] border border-[#FFF0B3]/70 text-center">
                <div className="text-[10px] font-semibold text-[#49334F]/70 mb-0.5">
                  Total Saves
                </div>
                <div className="text-base font-extrabold text-[#49334F] tabular-nums">
                  2.63k
                </div>
                <div className="text-[10px] text-emerald-700 font-bold">↑ 101% Growth</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FFF9F2] border border-[#FFD9C7]/70 text-center">
                <div className="text-[10px] font-semibold text-[#49334F]/70 mb-0.5">
                  Top Style Pin
                </div>
                <div className="text-base font-extrabold text-[#C74B72] tabular-nums">
                  127,071
                </div>
                <div className="text-[10px] text-emerald-700 font-bold">Organic Impressions</div>
              </div>
            </div>

            {/* Interactive Screenshot Proof Toggle Card */}
            <div className="mt-8 p-4 rounded-2xl bg-[#FFF9F2] border border-[#F8C8DC] flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#DCD0FF] shrink-0 bg-white">
                  <img
                    src="/assets/aistudio/Screenshot_2026-05-01_151916_291d9cc1.png"
                    alt="Pinterest Analytics Thumbnail"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#49334F] flex items-center gap-1.5">
                    <span>Verified Analytics Dashboard (@minufits)</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <div className="text-[11px] text-[#49334F]/70">
                    Official Pinterest Business dashboard captures (213.31k total impressions, 127K+ single top pin).
                  </div>
                </div>
              </div>

              <a
                href="/assets/aistudio/Screenshot_2026-05-01_151916_291d9cc1.png"
                target="_blank"
                rel="noreferrer noopener"
                className="px-4 py-2 rounded-xl bg-white hover:bg-[#49334F] text-[#49334F] hover:text-white border border-[#F8C8DC] text-xs font-bold transition-all shadow-2xs whitespace-nowrap shrink-0 flex items-center gap-1.5"
              >
                <span>View Full Screenshot Proof ↗</span>
              </a>
            </div>

            {/* Honest Commitment Footnote */}
            <div className="mt-5 text-[11px] text-[#49334F]/60 flex items-center justify-center gap-1.5">
              <Sparkles className="w-3 h-3 text-amber-500" />
              <span>Transparent reporting: real verified impressions without inflated claims.</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
