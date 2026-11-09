import React, { useState, useEffect, useRef } from 'react';
import { Camera, Sparkles, Upload, X, Check, Heart } from 'lucide-react';
import regeneratedAminaPhoto from '../assets/images/regenerated_image_1794239501996.jpg';

const DEFAULT_AMINA_PHOTO = regeneratedAminaPhoto;

export const HeroPhotoFrame: React.FC = () => {
  const [photoUrl, setPhotoUrl] = useState<string>(DEFAULT_AMINA_PHOTO);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customInputUrl, setCustomInputUrl] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync photo permanently to server disk
  const syncToServer = async (base64Data: string) => {
    try {
      const res = await fetch('/api/save-photo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: base64Data })
      });
      const data = await res.json();
      if (data.url) {
        setPhotoUrl(data.url);
      }
    } catch (err) {
      console.warn('Server photo sync fallback:', err);
    }
  };

  // Check storage on mount
  useEffect(() => {
    fetch('/api/has-permanent-photo')
      .then((res) => res.json())
      .then((data) => {
        if (data.exists && data.url) {
          setPhotoUrl(data.url);
        } else {
          const savedPhoto = localStorage.getItem('amina_portfolio_photo');
          if (savedPhoto) {
            setPhotoUrl(savedPhoto);
          } else {
            setPhotoUrl(DEFAULT_AMINA_PHOTO);
          }
        }
      })
      .catch(() => {
        const savedPhoto = localStorage.getItem('amina_portfolio_photo');
        setPhotoUrl(savedPhoto || DEFAULT_AMINA_PHOTO);
      });
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setPhotoUrl(result);
        localStorage.setItem('amina_portfolio_photo', result);
        syncToServer(result);
        setIsModalOpen(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApplyUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (customInputUrl.trim()) {
      const url = customInputUrl.trim();
      setPhotoUrl(url);
      localStorage.setItem('amina_portfolio_photo', url);
      if (url.startsWith('data:image/')) {
        syncToServer(url);
      }
      setCustomInputUrl('');
      setIsModalOpen(false);
    }
  };

  const handleRemovePhoto = () => {
    setPhotoUrl(DEFAULT_AMINA_PHOTO);
    localStorage.removeItem('amina_portfolio_photo');
  };

  return (
    <div className="relative w-full max-w-[460px] mx-auto aspect-square flex items-center justify-center p-4">
      {/* Animated gentle glowing rings */}
      <div 
        className="absolute inset-2 rounded-full border-2 border-dashed border-[#F8C8DC] animate-spin" 
        style={{ animationDuration: '40s' }}
      />
      <div 
        className="absolute inset-5 rounded-full border border-[#DCD0FF]/80 animate-pulse-ring" 
      />

      {/* Soft background aura blobs */}
      <div className="absolute top-2 right-4 w-48 h-48 bg-[#F8C8DC]/40 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-2 left-4 w-52 h-52 bg-[#DCD0FF]/45 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#FFF0B3]/35 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Sparkles & Floating Shapes */}
      <div className="absolute top-4 left-6 text-[#49334F] opacity-70 animate-twinkle pointer-events-none">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>
      </div>
      <div className="absolute bottom-10 right-4 text-[#DCD0FF] animate-twinkle pointer-events-none" style={{ animationDelay: '1s' }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>
      </div>
      <div className="absolute top-1/3 right-1 text-[#F8C8DC] animate-twinkle pointer-events-none" style={{ animationDelay: '2s' }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>
      </div>

      {/* Floating Marketing Elements */}
      <div className="absolute -top-3 left-8 z-20 bg-white/90 backdrop-blur-md border border-[#F8C8DC] shadow-md px-3 py-1.5 rounded-2xl flex items-center gap-1.5 animate-float text-xs font-semibold text-[#49334F]">
        <span className="w-2 h-2 rounded-full bg-[#E07A9B]" />
        <span>Meta Ads Specialist</span>
      </div>

      <div className="absolute top-24 -left-4 z-20 bg-white/90 backdrop-blur-md border border-[#DCD0FF] shadow-md px-3 py-1.5 rounded-2xl flex items-center gap-1.5 animate-float-delayed text-xs font-semibold text-[#49334F]">
        <span className="text-[#E60023] font-bold">📌</span>
        <span>218K+ Pinterest</span>
      </div>

      <div className="absolute bottom-16 -right-3 z-20 bg-white/90 backdrop-blur-md border border-[#FFF0B3] shadow-md px-3 py-1.5 rounded-2xl flex items-center gap-1.5 animate-float text-xs font-semibold text-[#49334F]">
        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
        <span>AI Workflows</span>
      </div>

      {/* Main Organic Frame */}
      <div className="relative w-full h-full max-w-[360px] max-h-[360px] p-2 bg-gradient-to-tr from-[#F8C8DC] via-[#DCD0FF] to-[#FFF0B3] organic-shape-1 shadow-xl transition-all duration-500 hover:shadow-2xl">
        <div className="relative w-full h-full bg-[#FFF9F2] organic-shape-1 overflow-hidden flex items-center justify-center border-4 border-white/80">
          {photoUrl ? (
            <img 
              src={photoUrl} 
              alt="Amina Iftikhar — AI Performance Marketer" 
              className="w-full h-full object-cover object-[center_20%] scale-105 transition-transform duration-500 hover:scale-110"
              referrerPolicy="no-referrer"
            />
          ) : (
            // Elegant Default Portrait State honoring the instruction not to generate a fake replacement face
            <div className="w-full h-full bg-gradient-to-br from-[#FFF9F2] via-[#F8C8DC]/30 to-[#DCD0FF]/40 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#F8C8DC] to-[#DCD0FF] border-2 border-white shadow-md flex items-center justify-center mb-3 text-[#49334F]">
                <span className="font-display font-extrabold text-3xl tracking-wider">AI</span>
              </div>
              <h3 className="font-display font-bold text-lg text-[#49334F] leading-tight mb-1">
                Amina Iftikhar
              </h3>
              <p className="text-xs text-[#49334F]/70 font-medium max-w-[200px] mb-3">
                AI Performance Marketer
              </p>
              
              {/* Photo prompt affordance for Amina */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#49334F] bg-white/90 hover:bg-white px-3 py-1.5 rounded-full shadow-xs border border-[#F8C8DC] transition-all hover:scale-105 active:scale-95 cursor-pointer"
                title="Upload Amina's official photograph"
              >
                <Camera className="w-3.5 h-3.5 text-[#E07A9B]" />
                <span>Upload My Photo</span>
              </button>
            </div>
          )}

          {/* Edit photo button if photo already exists */}
          {photoUrl && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-[#49334F] p-2 rounded-full shadow-md border border-[#F8C8DC] transition-all hover:scale-110 active:scale-95 cursor-pointer z-10"
              title="Change photograph"
              aria-label="Change photograph"
            >
              <Camera className="w-4 h-4 text-[#49334F]" />
            </button>
          )}
        </div>
      </div>

      {/* Floating Badge: "Your Next Marketing Partner ♡" */}
      <div className="absolute -bottom-2 z-30 bg-white/95 backdrop-blur-md border border-[#F8C8DC] shadow-lg px-4 py-2 rounded-full flex items-center gap-2 text-xs md:text-sm font-bold text-[#49334F] hover:scale-105 transition-transform">
        <span>Your Next Marketing Partner</span>
        <Heart className="w-4 h-4 text-[#E07A9B] fill-[#E07A9B] animate-pulse" />
      </div>

      {/* Upload Modal Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#49334F]/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FFF9F2] rounded-3xl p-6 max-w-md w-full shadow-2xl border border-[#F8C8DC] relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#49334F]/60 hover:text-[#49334F] rounded-full hover:bg-black/5"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-2xl bg-[#F8C8DC]/60 text-[#49334F]">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-[#49334F]">
                  Upload Your Photograph
                </h4>
                <p className="text-xs text-[#49334F]/70">
                  Select your photograph — it will be permanently saved and displayed to all visitors.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Option 1: File Upload */}
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-[#DCD0FF] hover:border-[#E07A9B] bg-white/70 hover:bg-white rounded-2xl p-6 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-2 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#DCD0FF]/50 flex items-center justify-center text-[#49334F] group-hover:scale-110 transition-transform">
                  <Upload className="w-5 h-5" />
                </div>
                <div className="text-sm font-semibold text-[#49334F]">
                  Click to choose file
                </div>
                <div className="text-xs text-[#49334F]/60">
                  Supports JPG, PNG, WEBP from your computer or phone
                </div>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileUpload} 
                  accept="image/*" 
                  className="hidden" 
                />
              </div>

              {/* Option 2: Image URL */}
              <div>
                <label className="block text-xs font-semibold text-[#49334F] mb-1.5">
                  Or paste direct image URL:
                </label>
                <form onSubmit={handleApplyUrl} className="flex gap-2">
                  <input
                    type="url"
                    placeholder="https://example.com/amina.jpg"
                    value={customInputUrl}
                    onChange={(e) => setCustomInputUrl(e.target.value)}
                    className="flex-1 bg-white border border-[#DCD0FF] focus:border-[#E07A9B] rounded-xl px-3 py-2 text-xs text-[#49334F] outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#49334F] text-white hover:bg-[#38263D] px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1 shrink-0"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Apply</span>
                  </button>
                </form>
              </div>

              {photoUrl && (
                <div className="pt-2 border-t border-[#F8C8DC]/60 flex items-center justify-between">
                  <span className="text-xs text-emerald-700 font-medium flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Active photo applied
                  </span>
                  <button
                    onClick={handleRemovePhoto}
                    className="text-xs text-rose-600 hover:text-rose-800 font-medium underline"
                  >
                    Reset to default
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
