import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Linkedin, 
  MessageSquare, 
  Check, 
  Sparkles, 
  Copy,
  ArrowUpRight,
  PhoneCall
} from 'lucide-react';
import { ContactFormData, ServiceId } from '../types';

interface ContactProps {
  selectedService: ServiceId | 'general-inquiry';
  prefilledMessage?: string;
  onSelectService: (service: ServiceId | 'general-inquiry') => void;
}

export const Contact: React.FC<ContactProps> = ({
  selectedService,
  prefilledMessage = '',
  onSelectService
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    service: selectedService || 'meta-ads',
    message: prefilledMessage || ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  // Sync if prefilledMessage updates
  React.useEffect(() => {
    if (prefilledMessage) {
      setFormData(prev => ({ ...prev, message: prefilledMessage }));
    }
  }, [prefilledMessage]);

  React.useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate submission state and open direct mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Create mailto link for direct user reach
      const subject = encodeURIComponent(`Marketing Inquiry from ${formData.name} regarding ${formData.service}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nService Interested In: ${formData.service}\n\nProject Details:\n${formData.message}`
      );
      
      // Also save to localStorage in case user needs to reference their inquiry
      try {
        const existingInquiries = JSON.parse(localStorage.getItem('amina_inquiries') || '[]');
        existingInquiries.push({ ...formData, date: new Date().toISOString() });
        localStorage.setItem('amina_inquiries', JSON.stringify(existingInquiries));
      } catch (err) {
        console.error(err);
      }
    }, 900);
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C74B72]">
            <Sparkles className="w-3.5 h-3.5 text-[#E07A9B]" />
            <span>✦ Let's Collaborate</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#49334F] tracking-tight text-balance">
            Got a Brand? Let's Make It Grow!
          </h2>
          <p className="text-base text-[#49334F]/80 font-normal">
            Have a project in mind or need someone to manage your digital marketing? I'd love to hear about it!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-[#F8C8DC] shadow-sm space-y-6">
              <div>
                <h3 className="font-display font-bold text-xl text-[#49334F] mb-1">
                  Get in Touch Directly
                </h3>
                <p className="text-xs text-[#49334F]/70">
                  Ready to talk Meta Ads, Pinterest strategy, or AI workflows? Connect on your favorite platform.
                </p>
              </div>

              {/* Primary Email Card with 1-click Copy */}
              <div className="p-4.5 rounded-2xl bg-[#FFF9F2] border-2 border-[#F8C8DC] flex items-center justify-between gap-3 shadow-2xs">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-11 h-11 rounded-xl bg-[#F8C8DC] flex items-center justify-center text-[#49334F] shrink-0 shadow-xs">
                    <Mail className="w-5 h-5 text-[#C74B72]" />
                  </div>
                  <div className="truncate">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-[11px] font-bold text-[#49334F]/70 uppercase tracking-wider">Direct Email</span>
                      <span className="text-[10px] bg-[#F8C8DC] text-[#49334F] font-bold px-2 py-0.2 rounded-full">Primary</span>
                    </div>
                    <a 
                      href="mailto:meenoiftikhar@gmail.com" 
                      className="text-xs sm:text-sm font-extrabold text-[#49334F] hover:text-[#C74B72] truncate block"
                    >
                      meenoiftikhar@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy('meenoiftikhar@gmail.com', 'email')}
                  className="px-2.5 py-1.5 rounded-xl bg-white hover:bg-[#F8C8DC]/30 border border-[#F8C8DC] text-xs font-semibold text-[#49334F] transition-all flex items-center gap-1 shrink-0 cursor-pointer"
                  title="Copy meenoiftikhar@gmail.com"
                >
                  {copiedItem === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 text-[11px]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#49334F]/70" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* LinkedIn Profile */}
              <a
                href="https://www.linkedin.com/in/aminamarketer"
                target="_blank"
                rel="noreferrer noopener"
                className="group p-4 rounded-2xl bg-[#FFF9F2] border border-[#DCD0FF] flex items-center justify-between hover:bg-white transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#DCD0FF]/60 flex items-center justify-center text-[#49334F] shrink-0">
                    <Linkedin className="w-5 h-5 text-[#7C5CBF]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-[#49334F]/60">Professional Profile</div>
                    <div className="text-xs sm:text-sm font-bold text-[#49334F] group-hover:text-[#7C5CBF] transition-colors">
                      linkedin.com/in/aminamarketer
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#49334F]/40 group-hover:text-[#7C5CBF] transition-colors" />
              </a>


              {/* WhatsApp Contact */}
              <div className="p-4 rounded-2xl bg-[#FFF9F2] border border-[#FFD9C7] flex items-center justify-between hover:bg-white transition-colors">
                <a
                  href="https://wa.me/923714133367?text=Hi%20Amina,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20discuss%20marketing%20services!"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 flex-1 overflow-hidden group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FFD9C7]/80 flex items-center justify-center text-[#49334F] shrink-0">
                    <PhoneCall className="w-5 h-5 text-[#D96B43]" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] font-semibold text-[#49334F]/60">WhatsApp Direct Chat</div>
                    <div className="text-xs sm:text-sm font-bold text-[#49334F] group-hover:text-[#D96B43] transition-colors truncate">
                      +92 371 4133367
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => handleCopy('03714133367', 'whatsapp')}
                    className="px-2 py-1 rounded-lg bg-white hover:bg-[#FFD9C7]/40 border border-[#FFD9C7] text-[11px] font-semibold text-[#49334F] transition-all flex items-center gap-1 cursor-pointer"
                    title="Copy WhatsApp number"
                  >
                    {copiedItem === 'whatsapp' ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-[#49334F]/70" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href="https://wa.me/923714133367?text=Hi%20Amina,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20discuss%20marketing%20services!"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="p-1.5 rounded-lg text-[#49334F]/50 hover:text-[#D96B43] hover:bg-white transition-colors"
                    title="Open WhatsApp chat"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="text-center pt-2">
                <span className="text-[11px] text-[#49334F]/65 font-medium">
                  ✦ Fast response: Usually replies within 24 business hours.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#F8C8DC] shadow-lg relative">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#DCD0FF]/60 text-[#49334F] mx-auto flex items-center justify-center shadow-md">
                    <Check className="w-8 h-8 text-[#C74B72]" />
                  </div>
                  <h3 className="font-display font-black text-2xl text-[#49334F]">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="text-sm text-[#49334F]/80 max-w-md mx-auto leading-relaxed">
                    Your inquiry has been received! Amina will review your project details and reach out to <strong>{formData.email}</strong> shortly.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`mailto:meenoiftikhar@gmail.com?subject=Marketing Inquiry - ${formData.name}&body=${encodeURIComponent(formData.message)}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#49334F] text-white text-xs font-bold hover:bg-[#38263D] transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#F8C8DC]" />
                      <span>Send Direct Email Copy</span>
                    </a>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          service: 'meta-ads',
                          message: ''
                        });
                      }}
                      className="text-xs font-bold text-[#49334F]/70 hover:text-[#49334F] underline px-3 py-2"
                    >
                      Submit Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-[#49334F] uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#FFF9F2] border border-[#F8C8DC] focus:border-[#C74B72] rounded-2xl px-4 py-3 text-sm text-[#49334F] outline-none transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-[#49334F] uppercase tracking-wider mb-2">
                        Your Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. sarah@brand.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#FFF9F2] border border-[#F8C8DC] focus:border-[#C74B72] rounded-2xl px-4 py-3 text-sm text-[#49334F] outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-xs font-bold text-[#49334F] uppercase tracking-wider mb-2">
                      Service Needed *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => {
                        const val = e.target.value as ServiceId;
                        setFormData({ ...formData, service: val });
                        onSelectService(val);
                      }}
                      className="w-full bg-[#FFF9F2] border border-[#F8C8DC] focus:border-[#C74B72] rounded-2xl px-4 py-3 text-sm text-[#49334F] outline-none transition-colors font-medium cursor-pointer"
                    >
                      <option value="meta-ads">Meta Ads (Facebook & Instagram Advertising)</option>
                      <option value="google-ads">Google Ads & Search Keyword Strategy</option>
                      <option value="pinterest-management">Pinterest Account Management & SEO</option>
                      <option value="ai-marketing">AI-Powered Marketing & Workflow Setup</option>
                      <option value="affiliate-marketing">Affiliate Marketing (Amazon & SHEIN)</option>
                      <option value="marketing-strategy">Full Marketing Growth Strategy</option>
                      <option value="general-inquiry">General Inquiry / Custom Project</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-bold text-[#49334F] uppercase tracking-wider mb-2">
                      Project Details / Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me a bit about your brand, current challenges, and what goals you'd like to reach together..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#FFF9F2] border border-[#F8C8DC] focus:border-[#C74B72] rounded-2xl px-4 py-3 text-sm text-[#49334F] outline-none transition-colors resize-none leading-relaxed"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-2xl bg-[#49334F] hover:bg-[#38263D] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 text-[#F8C8DC]" />
                      </>
                    )}
                  </button>

                  <div className="text-center">
                    <span className="text-[11px] text-[#49334F]/60">
                      🔒 No spam guaranteed. Your contact information is never shared.
                    </span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
