import React from 'react';
import { 
  Pin, 
  TrendingUp, 
  Instagram, 
  Heart, 
  MessageCircle, 
  Send, 
  Bookmark, 
  Search, 
  ExternalLink,
  ShoppingBag,
  Sparkles,
  Tag,
  CheckCircle2,
  Sliders
} from 'lucide-react';

interface ProjectMockupVisualProps {
  mockupType: 'pinterest-analytics' | 'meta-ad-preview' | 'google-ads-builder' | 'amazon-affiliate' | 'shein-affiliate';
  compact?: boolean;
}

export const ProjectMockupVisual: React.FC<ProjectMockupVisualProps> = ({ mockupType, compact = false }) => {
  if (mockupType === 'pinterest-analytics') {
    return (
      <div className={`w-full bg-[#FFF9F2] rounded-2xl border border-[#F8C8DC] overflow-hidden ${compact ? 'p-3' : 'p-5'}`}>
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-2.5 border-b border-[#F8C8DC]/60 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#E60023] flex items-center justify-center text-white">
              <Pin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#49334F]">Pinterest Business Analytics · @minufits</div>
              <div className="text-[10px] text-[#49334F]/60">Verified Dashboard Proof (01/04/2026 - 01/05/2026)</div>
            </div>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
            Organic Active
          </span>
        </div>

        {/* Real Screenshot Embed Container */}
        <div className="relative rounded-xl overflow-hidden border border-[#DCD0FF] shadow-xs mb-3 group bg-white">
          <img 
            src="/assets/aistudio/Screenshot_2026-05-01_151916_291d9cc1.png"
            alt="Original Pinterest Analytics Growth Proof - 213.31k impressions"
            className="w-full h-auto object-cover max-h-48 group-hover:scale-[1.02] transition-transform duration-300"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-xs text-[10px] font-bold text-[#49334F] px-2 py-0.5 rounded-md border border-[#F8C8DC] shadow-xs">
            Authentic Screenshot Proof
          </div>
        </div>

        {/* Verified KPI Grid from Screenshot */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
          <div className="bg-white p-2 rounded-xl border border-[#F8C8DC] text-center">
            <div className="text-[10px] text-[#49334F]/60 font-medium">Impressions</div>
            <div className="font-display font-extrabold text-sm text-[#49334F] tabular-nums">
              213.31k <span className="text-emerald-700 text-[10px]">↑51%</span>
            </div>
          </div>
          <div className="bg-white p-2 rounded-xl border border-[#DCD0FF] text-center">
            <div className="text-[10px] text-[#49334F]/60 font-medium">Total Audience</div>
            <div className="font-display font-extrabold text-sm text-[#49334F] tabular-nums">
              176.44k <span className="text-emerald-700 text-[10px]">↑55%</span>
            </div>
          </div>
          <div className="bg-white p-2 rounded-xl border border-[#FFF0B3] text-center">
            <div className="text-[10px] text-[#49334F]/60 font-medium">Engagements</div>
            <div className="font-display font-extrabold text-sm text-[#49334F] tabular-nums">
              11.56k <span className="text-emerald-700 text-[10px]">↑60%</span>
            </div>
          </div>
          <div className="bg-white p-2 rounded-xl border border-[#FFD9C7] text-center">
            <div className="text-[10px] text-[#49334F]/60 font-medium">Saves</div>
            <div className="font-display font-extrabold text-sm text-[#49334F] tabular-nums">
              2.63k <span className="text-emerald-700 text-[10px]">↑101%</span>
            </div>
          </div>
        </div>

        {/* Viral Pin Callout */}
        <div className="p-2.5 rounded-xl bg-gradient-to-r from-[#F8C8DC]/30 to-[#DCD0FF]/30 border border-[#F8C8DC] flex items-center justify-between text-xs text-[#49334F]">
          <span className="font-medium truncate">
            🔥 Top Pin: <strong>"Trending Top Styles Guide"</strong>
          </span>
          <span className="font-bold font-mono text-[#C74B72] shrink-0 ml-2">
            127,071 Views
          </span>
        </div>
      </div>
    );
  }

  if (mockupType === 'meta-ad-preview') {
    return (
      <div className={`w-full bg-white rounded-2xl border border-[#F8C8DC] overflow-hidden ${compact ? 'p-3' : 'p-5'} shadow-xs`}>
        {/* Meta / Instagram Ad Header */}
        <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#F8C8DC] to-[#DCD0FF] p-0.5">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-[10px] font-bold text-[#49334F]">
                AI
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-gray-900">amina.marketing</span>
                <span className="text-[9px] bg-slate-100 px-1.5 py-0.2 rounded text-slate-600 font-medium">Sponsored</span>
              </div>
              <div className="text-[10px] text-gray-500">Creative Strategy & Ad Draft</div>
            </div>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-pink-100 text-[#C74B72]">
            FB & IG Ads
          </span>
        </div>

        {/* Ad Primary Copy */}
        <div className="text-xs text-gray-800 leading-snug mb-3 font-normal">
          Tired of generic marketing campaigns that burn your budget? Discover how smart AI-powered creative testing and audience stacking deliver genuine brand growth. ✦
        </div>

        {/* Creative Container */}
        <div className="w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-[#F8C8DC]/60 via-[#DCD0FF]/50 to-[#FFF0B3]/50 p-4 flex flex-col justify-between border border-[#F8C8DC]/60 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#49334F] px-2 py-0.5 rounded-md shadow-2xs">
              Angle 01: Problem Agitation
            </span>
            <span className="text-[10px] bg-[#49334F] text-white px-2 py-0.5 rounded-md font-semibold">
              Ad Creative Draft
            </span>
          </div>

          <div className="text-center py-2">
            <h4 className="font-display font-extrabold text-lg sm:text-xl text-[#49334F] leading-tight mb-1">
              "Stop Guessing. Start Growing."
            </h4>
            <p className="text-[11px] text-[#49334F]/80">
              Creative Strategy · Audience Stacking · Rapid A/B Testing
            </p>
          </div>

          <div className="flex items-center justify-between bg-white/95 backdrop-blur-xs p-2 rounded-lg text-xs font-bold text-[#49334F] shadow-2xs">
            <span>Performance Framework</span>
            <span className="text-[10px] bg-[#49334F] text-white px-2.5 py-1 rounded-md">
              Learn More
            </span>
          </div>
        </div>

        {/* Social Action Bar */}
        <div className="flex items-center justify-between pt-3 text-gray-600">
          <div className="flex items-center gap-3">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500 cursor-pointer" />
            <MessageCircle className="w-4 h-4" />
            <Send className="w-4 h-4" />
          </div>
          <Bookmark className="w-4 h-4" />
        </div>
      </div>
    );
  }

  if (mockupType === 'google-ads-builder') {
    return (
      <div className={`w-full bg-white rounded-2xl border border-[#DCD0FF] overflow-hidden ${compact ? 'p-3' : 'p-5'} shadow-xs`}>
        {/* Google Ads Header */}
        <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-blue-600" />
            <div>
              <span className="text-xs font-bold text-gray-800">Google Ads · beautyFlex.pk</span>
              <span className="text-[10px] text-gray-500 block">Anti-Acne Skincare Campaign Setup</span>
            </div>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
            Search + YouTube
          </span>
        </div>

        {/* Real Screenshot Embed Container */}
        <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-xs mb-3 group bg-slate-50">
          <img 
            src="/assets/aistudio/Screenshot_2026-11-07_013117_994c5a01.png"
            alt="Google Ads Responsive Search Ad Builder - beautyFlex.pk"
            className="w-full h-auto object-cover max-h-44 group-hover:scale-[1.02] transition-transform duration-300"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-xs text-[10px] font-bold text-[#49334F] px-2 py-0.5 rounded-md border border-gray-200 shadow-xs">
            RSA Builder Proof
          </div>
        </div>

        {/* Live Ad Copy Highlights from Screenshots */}
        <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200 mb-3 space-y-1.5 text-left">
          <div className="flex items-center gap-1.5 text-[11px] text-gray-600">
            <span className="font-bold text-black text-[9px] bg-gray-200 px-1 py-0.2 rounded">Ad</span>
            <span className="text-slate-700 text-xs font-medium">beautyFlex.pk</span>
          </div>
          <h4 className="text-xs sm:text-sm font-semibold text-[#1a0dab] leading-snug">
            Smooth & Clear Skin - Natural Acne Care
          </h4>
          <p className="text-[11px] text-gray-700 leading-relaxed">
            Deep cleansing formula removes dirt, oil, and fights acne effectively. Tired of pimples? Try our powerful acne soap for clear, glowing skin.
          </p>
        </div>

        {/* Multi-Format Highlights */}
        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div className="p-2 rounded-lg bg-blue-50/70 border border-blue-200 text-blue-900">
            <div className="font-bold">Search RSA Headlines</div>
            <div className="text-[9px] text-blue-700">"Stop Pimples Today" · "Natural Acne Care"</div>
          </div>
          <div className="p-2 rounded-lg bg-rose-50/70 border border-rose-200 text-rose-900">
            <div className="font-bold">YouTube Feed Offer</div>
            <div className="text-[9px] text-rose-700">"3 soaps for 999 PKR" Bundle Deal</div>
          </div>
        </div>
      </div>
    );
  }

  if (mockupType === 'amazon-affiliate') {
    return (
      <div className={`w-full bg-[#FFF9F2] rounded-2xl border border-[#FFF0B3] overflow-hidden ${compact ? 'p-3' : 'p-5'} shadow-xs`}>
        <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-amber-200/60">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-amber-600" />
            <span className="text-xs font-bold text-[#49334F]">Amazon Associates Curation</span>
          </div>
          <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
            FTC Disclosed
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5 mb-3">
          <div className="bg-white p-3 rounded-xl border border-amber-100 text-center">
            <div className="w-full h-16 bg-gradient-to-tr from-[#FFF0B3]/40 to-[#FFD9C7]/40 rounded-lg mb-2 flex items-center justify-center text-xl">
              💻
            </div>
            <div className="text-xs font-bold text-[#49334F] truncate">Desk Aesthetic Hub</div>
            <div className="text-[10px] text-amber-600 font-medium">4.8 ★ Prime Verified</div>
            <div className="mt-2 text-[10px] bg-[#49334F] text-white py-1 rounded-md font-semibold">
              View on Amazon
            </div>
          </div>

          <div className="bg-white p-3 rounded-xl border border-amber-100 text-center">
            <div className="w-full h-16 bg-gradient-to-tr from-[#F8C8DC]/40 to-[#DCD0FF]/40 rounded-lg mb-2 flex items-center justify-center text-xl">
              🎧
            </div>
            <div className="text-xs font-bold text-[#49334F] truncate">Minimalist Audio</div>
            <div className="text-[10px] text-amber-600 font-medium">4.7 ★ Prime Verified</div>
            <div className="mt-2 text-[10px] bg-[#49334F] text-white py-1 rounded-md font-semibold">
              View on Amazon
            </div>
          </div>
        </div>

        <div className="p-2.5 rounded-lg bg-amber-50/60 border border-amber-200 text-[10px] text-amber-900 leading-snug">
          ✦ Curated product selection strategy: rating filter ≥ 4.3★, verified reviews, and tracked affiliate links.
        </div>
      </div>
    );
  }

  // SHEIN Affiliate
  return (
    <div className={`w-full bg-[#FFF9F2] rounded-2xl border border-[#F8C8DC] overflow-hidden ${compact ? 'p-3' : 'p-5'} shadow-xs`}>
      <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#F8C8DC]/60">
        <div className="flex items-center gap-2">
          <Tag className="w-4 h-4 text-[#C74B72]" />
          <span className="text-xs font-bold text-[#49334F]">SHEIN Affiliate & Trend Promotion</span>
        </div>
        <span className="text-[10px] font-bold bg-[#F8C8DC] text-[#49334F] px-2 py-0.5 rounded-full">
          Lookbook Strategy
        </span>
      </div>

      <div className="p-3 bg-white rounded-xl border border-[#F8C8DC] mb-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-bold text-[#49334F]">Spring / Aesthetic Edit</span>
          <span className="text-[10px] font-mono bg-pink-50 text-pink-700 px-1.5 py-0.5 rounded font-bold">
            CODE: AMINA15
          </span>
        </div>
        <div className="grid grid-cols-3 gap-1.5 mb-2">
          <div className="h-16 bg-[#F8C8DC]/30 rounded-lg flex items-center justify-center text-lg">👗</div>
          <div className="h-16 bg-[#DCD0FF]/30 rounded-lg flex items-center justify-center text-lg">👜</div>
          <div className="h-16 bg-[#FFF0B3]/30 rounded-lg flex items-center justify-center text-lg">🕶️</div>
        </div>
        <div className="text-[10px] text-[#49334F]/70 text-center">
          Short-form promotional captions paired with high-converting micro-trend fashion picks.
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] font-semibold text-[#49334F] px-1">
        <span>Target: Gen Z Shoppers</span>
        <span className="text-[#C74B72]">UTM Tracked Clicks</span>
      </div>
    </div>
  );
};
