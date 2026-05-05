import { Scan, ShieldCheck, Smile, Star, Award, Heart } from 'lucide-react';

const ITEMS = [
  { icon: Scan, label: 'Scanner 3D iTero' },
  { icon: ShieldCheck, label: 'Invisalign Doctor' },
  { icon: Smile, label: '+1.000 Sorrisos' },
  { icon: Star, label: 'Avaliação 5 Estrelas' },
  { icon: Award, label: 'Tecnologia de Ponta' },
  { icon: Heart, label: 'Cuidado Humanizado' },
];

export default function TrustMarquee() {
  // Triple the items for a smooth loop
  const items = [...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div
      className="relative w-full overflow-hidden py-3 sm:py-4 bg-transparent border-t border-white/10 backdrop-blur-sm"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        WebkitMaskImage: '-webkit-linear-gradient(left, transparent, black 15%, black 85%, transparent)'
      }}
    >
      <div
        className="flex items-center w-max hover:[animation-play-state:paused] transition-all cursor-default"
        style={{
          animation: 'marquee-fluid-compact 40s linear infinite',
        }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 sm:gap-4 px-6 sm:px-10 text-white/80 whitespace-nowrap select-none"
          >
            {/* Minimalist Icon */}
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 shadow-inner">
              <item.icon size={12} strokeWidth={2.5} className="sm:hidden" />
              <item.icon size={14} strokeWidth={2.5} className="hidden sm:block" />
            </div>

            <span className="text-[10px] sm:text-[12px] font-bold tracking-[0.2em] uppercase">
              {item.label}
            </span>

            {/* Subtle Diamond Separator */}
            <div className="ml-6 sm:ml-10 w-1 h-1 rotate-45 bg-white/30 shrink-0" />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-fluid-compact {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
