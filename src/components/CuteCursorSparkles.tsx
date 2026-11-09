import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface SparkleParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

export const CuteCursorSparkles: React.FC = () => {
  const [sparkles, setSparkles] = useState<SparkleParticle[]>([]);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    // Check user preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setEnabled(false);
      return;
    }

    let nextId = 0;
    const colors = ['#F8C8DC', '#DCD0FF', '#FFF0B3', '#FFD9C7'];

    const handleMouseMove = (e: MouseEvent) => {
      if (!enabled) return;
      // Throttle generation
      if (Math.random() > 0.4) return;

      const newSparkle: SparkleParticle = {
        id: nextId++,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)]
      };

      setSparkles((prev) => [...prev.slice(-12), newSparkle]);

      // Remove after 700ms
      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
      }, 700);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [enabled]);

  return (
    <>
      {/* Floating Sparkle Particles */}
      {enabled && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {sparkles.map((s) => (
            <div
              key={s.id}
              className="absolute pointer-events-none animate-twinkle -translate-x-1/2 -translate-y-1/2"
              style={{
                left: s.x,
                top: s.y,
                width: s.size,
                height: s.size,
                color: s.color
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-xs">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>
          ))}
        </div>
      )}

      {/* Floating Toggle in corner */}
      <div className="fixed bottom-4 left-4 z-40 hidden sm:block">
        <button
          onClick={() => setEnabled(!enabled)}
          className="p-2 rounded-full bg-white/90 hover:bg-white text-[#49334F] border border-[#F8C8DC] shadow-sm text-xs font-semibold flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-xs"
          title={enabled ? 'Turn off sparkles' : 'Turn on sparkles'}
        >
          <Sparkles className={`w-3.5 h-3.5 ${enabled ? 'text-[#E07A9B]' : 'text-gray-400'}`} />
          <span className="text-[11px] font-medium hidden md:inline">
            Sparkles: {enabled ? 'On' : 'Off'}
          </span>
        </button>
      </div>
    </>
  );
};
