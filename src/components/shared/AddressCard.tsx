import { MapPin } from 'lucide-react';

interface AddressCardProps {
  className?: string;
  isFullWidth?: boolean;
}

export default function AddressCard({ className = '', isFullWidth = false }: AddressCardProps) {
  return (
    <div className={`gallery-item ${isFullWidth ? 'w-full' : 'max-w-xl'} bg-teal-dark ${isFullWidth ? 'rounded-3xl md:rounded-full p-4 lg:py-4 lg:px-12' : 'rounded-[40px] p-8 lg:p-10'} text-white shadow-2xl border border-white/5 relative overflow-hidden group ${className}`}>
      <div className={`relative z-10 flex flex-col ${isFullWidth ? 'lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8' : 'space-y-6'}`}>

        {/* Left Side: Label + Address */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-8">
          <div className="flex items-center gap-3">
            <span className="text-cyan-light font-bold uppercase tracking-widest text-[10px] opacity-70 shrink-0">Localização</span>
            <div className="h-px w-6 bg-white/20 hidden lg:block" />
          </div>
          <p className="text-sm lg:text-base font-medium leading-tight text-white/90">
            Av. Dr José Moreira, 414, Bairro Castelo, Nova Era - MG
          </p>
        </div>

        {/* Right Side: Hours + CTA */}
        <div className={`${isFullWidth ? 'flex flex-col sm:flex-row items-center gap-6 lg:gap-12' : 'space-y-6 pt-6 border-t border-white/10'}`}>
          {/* Hours Group */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-[13px]">
            <div className="flex items-center gap-3">
              <span className="text-white/40 uppercase tracking-tighter text-[9px] font-bold">Seg—Sex</span>
              <span className="font-bold text-cyan-light">08:00 — 18:00</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-white/40 uppercase tracking-tighter text-[9px] font-bold">Sáb</span>
              <span className="font-bold text-cyan-light">08:00 — 12:00</span>
            </div>
          </div>

          {/* Button CTA */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Av.+Dr+José+Moreira%2C+414%2C+Bairro+Castelo%2C+Nova+Era+-+MG"
            target="_blank"
            rel="noopener noreferrer"
            className={`group/btn flex items-center justify-between ${isFullWidth ? 'py-2 pl-6 pr-2 lg:ml-4' : 'py-2 pl-6 pr-1.5'} rounded-full bg-white text-navy-dark font-bold text-[13px] hover:bg-teal-primary hover:text-white transition-all duration-300 shadow-xl ${isFullWidth ? 'w-full sm:w-auto min-w-[180px]' : 'w-full'}`}
          >
            <span className="px-2">Ver no Maps</span>
            <div className="flex items-center justify-center rounded-full bg-navy-dark text-white group-hover/btn:bg-white group-hover/btn:text-teal-primary transition-colors duration-300 w-8 h-8 shrink-0">
              <MapPin size={16} />
            </div>
          </a>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-teal-primary/10 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}
