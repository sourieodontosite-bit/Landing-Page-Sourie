import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SectionContainer from '../shared/SectionContainer';
import { SERVICES } from '../../utils/constants';
import { 
  Stethoscope, 
  Sparkles, 
  Layers, 
  Activity, 
  Baby, 
  ArrowUpRight 
} from 'lucide-react';
import { OrthoIcon } from '../shared/Icons';
import { Link } from 'react-router-dom';

const serviceIcons = [
  Stethoscope,
  Sparkles,
  OrthoIcon,
  Layers,
  Activity,
  Baby
];

export default function AboutServices() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (containerRef.current) {
      const mm = gsap.matchMedia();

      mm.add({
        isDesktop: "(min-width: 1024px)",
        isMobile: "(max-width: 1023px)"
      }, (context) => {
        const { isMobile } = context.conditions as { isMobile: boolean };

        gsap.fromTo(".service-bento",
          { opacity: 0, y: isMobile ? 15 : 30 },
          {
            opacity: 1,
            y: 0,
            stagger: isMobile ? 0.05 : 0.1,
            duration: 0.8,
            ease: "power3.out",
            force3D: true,
            scrollTrigger: {
              trigger: containerRef.current,
              start: isMobile ? "top 95%" : "top 80%",
              once: true
            }
          }
        );
      });

      return () => mm.revert();
    }
  }, []);

  return (
    <SectionContainer id="especialidades" className="py-12 lg:py-12">
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left mb-12 space-y-6">
        <span className="text-teal-primary font-bold uppercase tracking-[0.3em] text-[10px]">Especialidades</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-teal-dark leading-tight tracking-tight">
          Cuidado completo <br />
          <span className="italic font-serif text-teal-primary">em um só lugar.</span>
        </h2>
      </div>

      <div 
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-12 gap-6"
      >
        {/* Main Service - Aesthetic (Subtle Cyan Tint) */}
        <Link 
          to={`/p/${SERVICES[1].slug}`}
          className="service-bento md:col-span-7 bg-teal-primary rounded-[40px] p-8 md:p-10 lg:p-14 border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-dark/10 flex flex-col justify-between min-h-[280px] md:min-h-[400px] group relative overflow-hidden"
        >
          <div className="relative z-10 flex justify-between items-start">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-inner">
              <Sparkles size={24} className="md:hidden" />
              <Sparkles size={32} className="hidden md:block" />
            </div>
            <ArrowUpRight size={32} className="text-white/20 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
          </div>
          <div className="relative z-10 space-y-2 md:space-y-4">
            <h3 className="text-xl md:text-3xl font-bold text-white">{SERVICES[1].title}</h3>
            <p className="text-sm md:text-xl text-white/80 font-light leading-relaxed max-w-md">
              Transformação completa da estética do seu sorriso com as técnicas mais modernas de clareamento e lentes.
            </p>
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
        </Link>

        {/* Orthodontia (Dark Teal - Main Contrast) */}
        <Link 
          to={`/p/${SERVICES[2].slug}`}
          className="service-bento md:col-span-5 bg-teal-dark rounded-[40px] p-8 md:p-10 flex flex-col justify-between min-h-[280px] md:min-h-[400px] group relative overflow-hidden shadow-xl shadow-teal-dark/10 border border-white/10"
        >
          <div className="relative z-10 flex justify-between items-start">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-inner">
              <OrthoIcon size={24} className="md:hidden" />
              <OrthoIcon size={32} className="hidden md:block" />
            </div>
            <ArrowUpRight size={32} className="text-white/20 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
          </div>
          <div className="relative z-10 space-y-2 md:space-y-4">
            <h3 className="text-xl md:text-3xl font-bold text-white">{SERVICES[2].title}</h3>
            <p className="text-sm md:text-lg text-white/80 font-light leading-relaxed">
              Aparelhos invisíveis e convencionais para um alinhamento perfeito.
            </p>
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
        </Link>

        {/* Grid for other services with varying teal tones */}
        <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-4 gap-6 mt-2">
          {SERVICES.map((service, i) => {
            if (i === 1 || i === 2) return null;
            const Icon = serviceIcons[i];
            
            // Dynamic styles based on index for solid teal variation
            const styles = [
              "bg-teal-medium border-white/10 hover:shadow-teal-medium/20", // Clínica Geral
              "", // Skipped
              "", // Skipped
              "bg-teal-dark border-white/10 hover:shadow-teal-dark/20",   // Próteses
              "bg-navy-dark border-white/10 hover:shadow-navy-dark/20",  // Cirurgias
              "bg-teal-primary border-white/10 hover:shadow-teal-primary/20" // Odontopediatria
            ];

            return (
              <Link 
                key={service.slug}
                to={`/p/${service.slug}`}
                className={`service-bento ${styles[i]} rounded-[32px] p-8 border hover:border-white/30 transition-all duration-500 hover:shadow-xl flex flex-col gap-6 group relative overflow-hidden`}
              >
                <div className="relative z-10 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white/20 transition-all duration-500">
                  <Icon size={24} />
                </div>
                <div className="relative z-10 space-y-2">
                  <h4 className="text-xl font-bold text-white">{service.title}</h4>
                  <p className="text-sm text-white/70 font-light leading-snug">
                    {service.description}
                  </p>
                </div>
                {/* Subtle background element */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/5 rounded-full blur-2xl" />
              </Link>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
