import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionContainer from '../shared/SectionContainer';
import { SERVICES } from '../../utils/constants';
import { Stethoscope, Sparkles, Layers, Activity, Baby, ArrowUpRight } from 'lucide-react';
import { OrthoIcon } from '../shared/Icons';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

// Import Procedure Images for Hover
import ortodontiaImg from '../../assets/Procedimentos/Ortodontia.png';
import clinicaGeralImg from '../../assets/Procedimentos/Clinica-geral.jpg';
import esteticaImg from '../../assets/Procedimentos/Estetica.png';
import canalImg from '../../assets/Procedimentos/Canal.png';
import proteseImg from '../../assets/Procedimentos/Protese.png';
import odontopediatriaImg from '../../assets/Procedimentos/Odontopediatria.png';

const serviceIcons = [
  Stethoscope,
  Sparkles,
  OrthoIcon,
  Layers,
  Activity,
  Baby
];

const serviceImages = [
  clinicaGeralImg,
  esteticaImg,
  ortodontiaImg,
  proteseImg,
  canalImg,
  odontopediatriaImg
];

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      if (containerRef.current) {
        gsap.fromTo(".service-bento",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.05,
            duration: 0.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 90%",
              once: true,
            },
            onStart: () => {
              gsap.set(".service-bento", { willChange: "opacity, transform" });
            },
            onComplete: () => {
              gsap.set(".service-bento", { willChange: "auto" });
            }
          }
        );
      }
    });

    return () => mm.revert();
  }, []);

  return (
    <SectionContainer id="servicos" className="py-12 lg:py-12">
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left mb-12 space-y-6">
        <span className="text-teal-primary font-bold uppercase tracking-[0.3em] text-[10px]">Procedimentos</span>
        <h2 className="text-4xl lg:text-7xl font-medium text-teal-dark tracking-tight">
          Cuidado completo <br />
          <span className="italic font-serif">em um só lugar.</span>
        </h2>
      </div>

      <div 
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-12 gap-6"
      >
        {/* Main Service - Aesthetic */}
        <Link 
          to={`/p/${SERVICES[1].slug}`}
          className="service-bento md:col-span-6 lg:col-span-7 bg-teal-primary rounded-[40px] p-8 md:p-10 lg:p-14 border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-dark/10 flex flex-col justify-between min-h-[280px] md:min-h-[400px] group relative overflow-hidden"
        >
          {/* Hover Image */}
          <div className="absolute inset-0 opacity-0 lg:group-hover:opacity-100 transition-all duration-700 scale-110 lg:group-hover:scale-100">
            <img src={serviceImages[1]} alt={SERVICES[1].title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

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
        </Link>

        {/* Orthodontia */}
        <Link 
          to={`/p/${SERVICES[2].slug}`}
          className="service-bento md:col-span-6 lg:col-span-5 bg-teal-dark rounded-[40px] p-8 md:p-10 flex flex-col justify-between min-h-[280px] md:min-h-[400px] group relative overflow-hidden shadow-xl shadow-teal-dark/10 border border-white/10"
        >
          {/* Hover Image */}
          <div className="absolute inset-0 opacity-0 lg:group-hover:opacity-100 transition-all duration-700 scale-110 lg:group-hover:scale-100">
            <img src={serviceImages[2]} alt={SERVICES[2].title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

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
        </Link>

        {/* Grid for other services */}
        <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-2">
          {SERVICES.map((service, i) => {
            if (i === 1 || i === 2) return null;
            const Icon = serviceIcons[i];
            const hoverImg = serviceImages[i];
            
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
                {/* Hover Image */}
                <div className="absolute inset-0 opacity-0 lg:group-hover:opacity-100 transition-all duration-700 scale-110 lg:group-hover:scale-100">
                  <img src={hoverImg} alt={service.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                <div className="relative z-10 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white/20 transition-all duration-500">
                  <Icon size={24} />
                </div>
                <div className="relative z-10 space-y-2">
                  <h4 className="text-xl font-bold text-white">{service.title}</h4>
                  <p className="text-sm text-white/70 font-light leading-snug">
                    {service.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
