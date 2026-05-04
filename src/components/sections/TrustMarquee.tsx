import { Scan, ShieldCheck, Smile, Star, Award, Heart } from 'lucide-react';

const ITEMS = [
  { icon: Scan, label: 'Scanner 3D iTero' },
  { icon: ShieldCheck, label: 'Invisalign Doctor' },
  { icon: Smile, label: '+10.000 Sorrisos' },
  { icon: Star, label: 'Avaliação 5 Estrelas' },
  { icon: Award, label: 'Tecnologia de Ponta' },
  { icon: Heart, label: 'Cuidado Humanizado' },
];

export default function TrustMarquee() {
  // Triple the items for a smooth loop
  const items = [...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div className="relative w-full overflow-hidden py-4 sm:py-6 bg-white/40 border-y border-slate-100/50">
      
      {/* Edge Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-slate-50/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-slate-50/80 to-transparent z-10 pointer-events-none" />

      <div
        className="flex items-center w-max hover:[animation-play-state:paused] transition-all cursor-default"
        style={{
          animation: 'marquee-fluid-compact 40s linear infinite',
        }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 sm:gap-4 px-8 sm:px-12 text-teal-dark/60 whitespace-nowrap select-none"
          >
            {/* Minimalist Icon */}
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-teal-primary/5 flex items-center justify-center text-teal-primary shrink-0">
              <item.icon size={14} strokeWidth={2.5} className="sm:hidden" />
              <item.icon size={16} strokeWidth={2.5} className="hidden sm:block" />
            </div>
            
            <span className="text-[11px] sm:text-[13px] font-bold tracking-[0.2em] uppercase">
              {item.label}
            </span>

            {/* Subtle Diamond Separator */}
            <div className="ml-8 sm:ml-12 w-1 h-1 rotate-45 bg-slate-300 shrink-0" />
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
