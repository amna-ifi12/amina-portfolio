import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, Wand2 } from 'lucide-react';
import { ServiceId } from '../types';

interface StrategyMatcherProps {
  onApplyPlan: (serviceId: ServiceId, message: string) => void;
}

export const StrategyMatcher: React.FC<StrategyMatcherProps> = ({ onApplyPlan }) => {
  const [goal, setGoal] = useState<'meta' | 'pinterest' | 'google' | 'affiliate' | 'ai'>('meta');
  const [stage, setStage] = useState<'starter' | 'growth' | 'scaling'>('growth');

  const getRecommendations = () => {
    switch (goal) {
      case 'meta':
        return {
          serviceId: 'meta-ads' as ServiceId,
          title: 'Meta Ads Creative & Audience Sprint',
          turnaround: '1–2 Weeks Initial Setup',
          deliverables: [
            '3-tier funnel architecture (TOF / MOF / BOF)',
            '5+ thumb-stopping ad hook angles',
            'Lookalike & interest-stacked audience testing',
            'Daily budget monitoring & weekly creative refresh'
          ],
          recommendedNote: `Hi Amina! I ran your Strategy Matcher for our ${stage === 'starter' ? 'launch-stage' : stage === 'growth' ? 'growing' : 'scaling'} brand. We'd love your help setting up and testing Meta ad creatives and targeted audiences.`
        };
      case 'pinterest':
        return {
          serviceId: 'pinterest-management' as ServiceId,
          title: 'Pinterest SEO & Visual Growth Blueprint',
          turnaround: 'Monthly Organic Cadence',
          deliverables: [
            'SEO keyword research for high-intent searchers',
            'Aesthetic 2:3 ratio vertical pin templates',
            'Board restructure & automated scheduling',
            'Analytics tracking aiming for steady impression gains'
          ],
          recommendedNote: `Hi Amina! We saw your 218K+ Pinterest impressions achievement and want you to manage our Pinterest account to build organic visual traffic.`
        };
      case 'google':
        return {
          serviceId: 'google-ads' as ServiceId,
          title: 'High-Intent Google Search Architecture',
          turnaround: '1–2 Weeks Campaign Build',
          deliverables: [
            'Commercial buyer keyword clustering',
            'Extensive negative keyword shield to stop wasted spend',
            'Responsive search ad copywriting with high CTR angles',
            'Sitelink & structured snippet extensions setup'
          ],
          recommendedNote: `Hi Amina! I need help creating a structured Google Search campaign with high-intent keywords and negative match lists.`
        };
      case 'affiliate':
        return {
          serviceId: 'affiliate-marketing' as ServiceId,
          title: 'Shoppable Content & Affiliate Curation',
          turnaround: 'Ongoing Campaign Sprints',
          deliverables: [
            'Trend-matched product sourcing & curation',
            'Aesthetic lookbook / shoppable asset design',
            'UTM tracked link strategy & promo code rollouts',
            'Full FTC-compliant disclosure integration'
          ],
          recommendedNote: `Hi Amina! We'd love to collaborate on affiliate marketing, product curation, and trend-aligned shoppable campaigns.`
        };
      case 'ai':
      default:
        return {
          serviceId: 'ai-marketing' as ServiceId,
          title: 'AI-Powered Full-Funnel Marketing System',
          turnaround: 'Custom Growth Roadmap',
          deliverables: [
            'Competitor positioning & audience sentiment audit',
            'AI-accelerated creative brainstorming & copy variations',
            'Cross-channel advertising playbook (Meta + Pinterest)',
            'Performance tracking & iterative testing cycles'
          ],
          recommendedNote: `Hi Amina! We want an AI-powered marketing strategy that combines fast creative iterations with smart ad distribution.`
        };
    }
  };

  const rec = getRecommendations();

  const handleUsePlan = () => {
    onApplyPlan(rec.serviceId, rec.recommendedNote);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      const navOffset = 80;
      const pos = contactEl.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 relative bg-gradient-to-b from-[#FFF9F2] to-white/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Interactive Box Container */}
        <div className="bg-white rounded-[2.5rem] border-2 border-[#DCD0FF] p-6 sm:p-10 md:p-12 shadow-xl relative overflow-hidden">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#7C5CBF] mb-1">
                <Wand2 className="w-3.5 h-3.5" />
                <span>Interactive Strategy Matcher</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#49334F] tracking-tight">
                Find Your Brand's Best Marketing Angle.
              </h3>
            </div>
            <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#FFF0B3] text-[#49334F] border border-amber-200 self-start sm:self-auto">
              ✦ Instant Tailored Plan
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Controls */}
            <div className="lg:col-span-6 space-y-6">
              {/* Step 1: Goal */}
              <div>
                <label className="block text-xs font-bold text-[#49334F] uppercase tracking-wider mb-2.5">
                  1. What's your immediate marketing priority?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setGoal('meta')}
                    className={`p-3 rounded-2xl text-xs font-bold text-left transition-all cursor-pointer border ${
                      goal === 'meta'
                        ? 'bg-[#F8C8DC] text-[#49334F] border-[#E07A9B] shadow-xs'
                        : 'bg-[#FFF9F2] text-[#49334F]/80 border-gray-200 hover:border-[#F8C8DC]'
                    }`}
                  >
                    Meta Ads (FB/IG)
                  </button>
                  <button
                    onClick={() => setGoal('pinterest')}
                    className={`p-3 rounded-2xl text-xs font-bold text-left transition-all cursor-pointer border ${
                      goal === 'pinterest'
                        ? 'bg-[#FFF0B3] text-[#49334F] border-amber-300 shadow-xs'
                        : 'bg-[#FFF9F2] text-[#49334F]/80 border-gray-200 hover:border-[#FFF0B3]'
                    }`}
                  >
                    Pinterest Growth
                  </button>
                  <button
                    onClick={() => setGoal('google')}
                    className={`p-3 rounded-2xl text-xs font-bold text-left transition-all cursor-pointer border ${
                      goal === 'google'
                        ? 'bg-[#DCD0FF] text-[#49334F] border-[#B6A4EB] shadow-xs'
                        : 'bg-[#FFF9F2] text-[#49334F]/80 border-gray-200 hover:border-[#DCD0FF]'
                    }`}
                  >
                    Google Search Ads
                  </button>
                  <button
                    onClick={() => setGoal('affiliate')}
                    className={`p-3 rounded-2xl text-xs font-bold text-left transition-all cursor-pointer border ${
                      goal === 'affiliate'
                        ? 'bg-[#FFD9C7] text-[#49334F] border-[#F8A885] shadow-xs'
                        : 'bg-[#FFF9F2] text-[#49334F]/80 border-gray-200 hover:border-[#FFD9C7]'
                    }`}
                  >
                    Affiliate & Promotion
                  </button>
                </div>
              </div>

              {/* Step 2: Brand Stage */}
              <div>
                <label className="block text-xs font-bold text-[#49334F] uppercase tracking-wider mb-2.5">
                  2. What stage is your business right now?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setStage('starter')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold text-center transition-all cursor-pointer border ${
                      stage === 'starter'
                        ? 'bg-[#49334F] text-white border-[#49334F]'
                        : 'bg-[#FFF9F2] text-[#49334F]/75 border-gray-200 hover:border-[#49334F]'
                    }`}
                  >
                    New Launch
                  </button>
                  <button
                    onClick={() => setStage('growth')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold text-center transition-all cursor-pointer border ${
                      stage === 'growth'
                        ? 'bg-[#49334F] text-white border-[#49334F]'
                        : 'bg-[#FFF9F2] text-[#49334F]/75 border-gray-200 hover:border-[#49334F]'
                    }`}
                  >
                    Steady Growth
                  </button>
                  <button
                    onClick={() => setStage('scaling')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold text-center transition-all cursor-pointer border ${
                      stage === 'scaling'
                        ? 'bg-[#49334F] text-white border-[#49334F]'
                        : 'bg-[#FFF9F2] text-[#49334F]/75 border-gray-200 hover:border-[#49334F]'
                    }`}
                  >
                    Scaling Fast
                  </button>
                </div>
              </div>
            </div>

            {/* Right Output Card */}
            <div className="lg:col-span-6 bg-[#FFF9F2] rounded-3xl p-6 sm:p-7 border border-[#F8C8DC] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-bold mb-2">
                  <span className="text-[#C74B72] uppercase tracking-wider">Recommended Strategy</span>
                  <span className="text-[#49334F]/70">{rec.turnaround}</span>
                </div>

                <h4 className="font-display font-black text-xl text-[#49334F] mb-3">
                  {rec.title}
                </h4>

                <div className="space-y-2 mb-6">
                  {rec.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#49334F]/85">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E07A9B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={handleUsePlan}
                className="w-full py-3.5 px-5 rounded-2xl bg-[#49334F] hover:bg-[#38263D] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Select This Plan & Contact Amina</span>
                <ArrowRight className="w-4 h-4 text-[#F8C8DC]" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
