import { useRef, useState, useEffect } from 'react';
import SectionContainer from '../shared/SectionContainer';
import { SERVICES } from '../../utils/constants';
import { Stethoscope, Sparkles, Layers, Bone, Activity, Scissors, Baby, ArrowUpRight } from 'lucide-react';
import { OrthoIcon } from '../shared/Icons';
import { Link } from 'react-router-dom';


// Import Procedure Images for Hover
import ortodontiaImg from '../../assets/Procedimentos/Ortodontia.webp';
import clinicaGeralImg from '../../assets/Procedimentos/Clinica-geral.webp';
import esteticaImg from '../../assets/Procedimentos/Estetica.webp';
import canalImg from '../../assets/Procedimentos/Canal.webp';
import proteseImg from '../../assets/Procedimentos/Protese.webp';
import implantesImg from '../../assets/proteses.webp';
import cirurgiasImg from '../../assets/Procedimentos/Cirurgias.webp';
import odontopediatriaImg from '../../assets/Procedimentos/Odontopediatria.webp';

const serviceIcons = [
  Stethoscope, // Clínica geral
  Sparkles,    // Odontologia Estética
  OrthoIcon,   // Ortodontia
  Layers,      // Próteses Removíveis e Fixas
  Bone,        // Implantes
  Activity,    // Tratamento Endodôntico (Canal)
  Scissors,    // Cirurgias
  Baby         // Odontopediatria
];

const serviceImages = [
  clinicaGeralImg,
  esteticaImg,
  ortodontiaImg,
  proteseImg,
  implantesImg,
  canalImg,
  cirurgiasImg,
  odontopediatriaImg
];

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only render hover images on desktop where hover interaction exists.
    setIsDesktop(window.innerWidth >= 1024);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <SectionContainer id="servicos">
      <div ref={containerRef}>
        <div 
          className={`flex flex-col items-center text-center lg:items-start lg:text-left mb-16 md:mb-20 space-y-6 transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '0ms' }}
        >
        <span className="text-teal-primary font-bold uppercase tracking-[0.3em] text-[10px]">Procedimentos</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-teal-dark leading-tight tracking-tight">
          Cuidado completo <br />
          <span className="italic font-serif text-teal-primary">em um só lugar.</span>
        </h2>
      </div>

      <div 
        className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10"
      >
        {/* Main Service - Aesthetic */}
        <Link 
          to={`/p/${SERVICES[1].slug}`}
          className={`md:col-span-6 lg:col-span-7 bg-teal-primary rounded-[40px] p-8 md:p-10 lg:p-14 border border-white/10 hover:border-white/30 transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-teal-dark/10 flex flex-col justify-between min-h-[280px] md:min-h-[400px] group relative overflow-hidden transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          style={{ transitionDelay: '100ms' }}
        >
          {/* Hover Image — Desktop only */}
          {isDesktop && (
            <div className="absolute inset-0 opacity-0 lg:group-hover:opacity-100 transition-all duration-700 scale-110 lg:group-hover:scale-100">
              <img src={serviceImages[1]} alt={SERVICES[1].title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          )}

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
              Transformação completa da estética do seu sorriso com as técnicas mais modernas de clareamento e lentes e facetas em resina.
            </p>
          </div>
        </Link>

        {/* Orthodontia */}
        <Link 
          to={`/p/${SERVICES[2].slug}`}
          className={`md:col-span-6 lg:col-span-5 bg-teal-dark rounded-[40px] p-8 md:p-10 flex flex-col justify-between min-h-[280px] md:min-h-[400px] group relative overflow-hidden shadow-xl shadow-teal-dark/10 border border-white/10 transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          style={{ transitionDelay: '200ms' }}
        >
          {/* Hover Image — Desktop only */}
          {isDesktop && (
            <div className="absolute inset-0 opacity-0 lg:group-hover:opacity-100 transition-all duration-700 scale-110 lg:group-hover:scale-100">
              <img src={serviceImages[2]} alt={SERVICES[2].title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          )}

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

        {/* Grid for other 6 services */}
        <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
          {SERVICES.map((service, i) => {
            if (i === 1 || i === 2) return null;
            const Icon = serviceIcons[i] || Stethoscope;
            const hoverImg = serviceImages[i] || clinicaGeralImg;
            
            const styles = [
              "bg-teal-medium border-white/10 hover:shadow-teal-medium/20",  // Clínica Geral
              "", // Skipped (Estética)
              "", // Skipped (Ortodontia)
              "bg-teal-dark border-white/10 hover:shadow-teal-dark/20",      // Próteses Removíveis e Fixas
              "bg-navy-dark border-white/10 hover:shadow-navy-dark/20",      // Implantes
              "bg-teal-primary border-white/10 hover:shadow-teal-primary/20",// Tratamento Endodôntico (Canal)
              "bg-teal-dark border-white/10 hover:shadow-teal-dark/20",      // Cirurgias
              "bg-teal-medium border-white/10 hover:shadow-teal-medium/20"   // Odontopediatria
            ];

            return (
              <Link 
                key={service.slug}
                to={`/p/${service.slug}`}
                className={`${styles[i]} rounded-[32px] p-8 border hover:border-white/30 transition-all duration-700 ease-out hover:shadow-xl flex flex-col gap-6 group relative overflow-hidden transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${300 + (i * 80)}ms` }}
              >
                {/* Hover Image — Desktop only */}
                {isDesktop && (
                  <div className="absolute inset-0 opacity-0 lg:group-hover:opacity-100 transition-all duration-700 scale-110 lg:group-hover:scale-100">
                    <img src={hoverImg} alt={service.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                )}

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
    </div>
    </SectionContainer>
  );
}
