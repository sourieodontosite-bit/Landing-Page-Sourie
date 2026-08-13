import { Scan, ShieldCheck, Smile, Star, Award, Heart, Sparkles } from 'lucide-react';

const ITEMS = [
  { icon: Scan, label: 'Scanner 3D iTero' },
  { icon: ShieldCheck, label: 'Invisalign Doctor' },
  { icon: Smile, label: '+1.000 Sorrisos' },
  { icon: Star, label: 'Avaliação 5 Estrelas' },
  { icon: Award, label: 'Tecnologia de Ponta' },
  { icon: Heart, label: 'Cuidado Humanizado' },
  { icon: Sparkles, label: 'Estética Dental Premium' },
];

export default function MarqueeCTA() {
  const items = [...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div className="w-full bg-navy-dark py-4 sm:py-5 overflow-hidden relative z-20 border-y border-white/10 shadow-lg">
      <div
        className="flex items-center w-max transition-all select-none"
        style={{
          animation: 'marquee-clean 35s linear infinite',
        }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 sm:gap-4 px-6 sm:px-10 text-white whitespace-nowrap shrink-0"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center text-cyan-light shrink-0">
              <item.icon size={14} strokeWidth={2} />
            </div>

            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-white/90">
              {item.label}
            </span>

            <div className="ml-6 sm:ml-10 w-1.5 h-1.5 rounded-full bg-cyan-light/40 shrink-0" />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-clean {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
