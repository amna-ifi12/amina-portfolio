import React from 'react';
import { 
  Instagram, 
  Search, 
  Pin, 
  Sparkles, 
  ShoppingBag, 
  Compass, 
  ArrowUpRight,
  Check
} from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';
import { ServiceId } from '../types';

interface ServicesProps {
  onSelectService: (serviceId: ServiceId) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Instagram':
        return <Instagram className="w-6 h-6 text-[#E07A9B]" />;
      case 'Search':
        return <Search className="w-6 h-6 text-[#7C5CBF]" />;
      case 'Pin':
        return <Pin className="w-6 h-6 text-[#E60023]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-500" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-[#D96B43]" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#49334F]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#E07A9B]" />;
    }
  };

  const handleDiscuss = (serviceId: ServiceId) => {
    onSelectService(serviceId);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      const navOffset = 80;
      const pos = contactEl.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 relative bg-white/50 border-y border-[#F8C8DC]/40">
      {/* Decorative subtle ambient circles */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#F8C8DC]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#DCD0FF]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C74B72]">
            <span>✦ My Services & Capabilities</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#49334F] tracking-tight text-balance">
            What I Can Do For Your Brand.
          </h2>
          <p className="text-base text-[#49334F]/75 font-normal">
            Strategic digital marketing tailored for modern growth—combining data precision, creative storytelling, and AI agility.
          </p>
        </div>

        {/* 6 Attractive Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-[#FFF9F2] rounded-3xl p-7 border border-[#F8C8DC]/60 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Top Icon & Number */}
                <div className="flex items-center justify-between mb-5">
                  <div 
                    className="w-13 h-13 rounded-2xl flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${service.color}66` }}
                  >
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#49334F]/40">
                    0{index + 1}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="font-display font-bold text-xl text-[#49334F] mb-2.5 group-hover:text-[#C74B72] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#49334F]/80 leading-relaxed mb-5">
                  {service.shortDesc}
                </p>

                {/* Deliverables Bullet List */}
                <div className="space-y-2 mb-6 pt-3 border-t border-[#49334F]/10">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#49334F]/60">
                    Key Deliverables:
                  </div>
                  {service.deliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#49334F]/85">
                      <Check className="w-3.5 h-3.5 text-[#E07A9B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button: "Let's Discuss" */}
              <button
                onClick={() => handleDiscuss(service.id)}
                className="w-full mt-2 inline-flex items-center justify-between px-4 py-2.5 rounded-2xl bg-white hover:bg-[#49334F] text-[#49334F] hover:text-white border border-[#F8C8DC] text-xs font-bold transition-all duration-200 group-hover:border-transparent shadow-2xs cursor-pointer"
              >
                <span>Let's Discuss</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E07A9B] group-hover:text-[#F8C8DC] transition-colors" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
