import { MapPin } from 'lucide-react';

interface AddressCardProps {
  className?: string;
  isFullWidth?: boolean;
}

export default function AddressCard({ className = '', isFullWidth = false }: AddressCardProps) {
  return (
    <div className={`gallery-item ${isFullWidth ? 'w-full' : 'max-w-xl'} bg-teal-dark ${isFullWidth ? 'rounded-3xl md:rounded-full p-4 lg:py-4 lg:px-12' : 'rounded-[40px] p-8 lg:p-10'} text-white border border-white/5 relative overflow-hidden group ${className}`}>
      <div className={`relative z-10 flex flex-col ${isFullWidth ? 'lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8' : 'space-y-6'}`}>

        {/* Left Side: Label + Address */}
        <div className="flex flex-col space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-light animate-pulse shadow-[0_0_10px_rgba(221,248,255,0.8)]" />
            <span className="text-cyan-light font-bold uppercase tracking-widest text-[10px] opacity-80 shrink-0">Onde estamos</span>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-cyan-light shrink-0 mt-0.5 border border-white/10">
              <MapPin size={16} />
            </div>
            <div>
              <p className="text-base lg:text-lg font-bold leading-snug text-white">
                Av. Dr. José Moreira, N° 414
              </p>
              <p className="text-xs lg:text-sm font-light text-white/70">
                Bairro Castelo — Nova Era, MG
              </p>
            </div>
          </div>
        </div>

        {/* Right Side / Bottom: Hours + CTA */}
        <div className={`${isFullWidth ? 'flex flex-col sm:flex-row items-center gap-6 lg:gap-12' : 'space-y-5 pt-5 border-t border-white/10'}`}>
          {/* Hours Group */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-[13px]">
            <div className="flex items-center gap-3">
              <span className="text-white/40 uppercase tracking-tighter text-[9px] font-bold">Seg—Sex</span>
              <span className="font-bold text-cyan-light text-xs sm:text-[13px]">08:00–11:00 • 13:00–18:00</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-white/40 uppercase tracking-tighter text-[9px] font-bold">Sáb</span>
              <span className="font-bold text-cyan-light">08:00–12:00</span>
            </div>
          </div>

          {/* Button CTA */}
          <a
            href="https://maps.app.goo.gl/z5tUATq1ZL7tfem79"
            target="_blank"
            rel="noopener noreferrer"
            className={`group/btn flex items-center justify-between ${isFullWidth ? 'py-2 pl-6 pr-2 lg:ml-4' : 'py-2.5 pl-6 pr-2'} rounded-full bg-white text-navy-dark font-bold text-xs uppercase tracking-wider hover:bg-cyan-light transition-all duration-300 shadow-md ${isFullWidth ? 'w-full sm:w-auto min-w-[180px]' : 'w-full'}`}
          >
            <span>Ver rota no Google Maps</span>
            <div className="flex items-center justify-center rounded-full bg-navy-dark text-white group-hover/btn:scale-105 transition-transform duration-300 w-7 h-7 shrink-0">
              <MapPin size={14} />
            </div>
          </a>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-teal-primary/10 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}
