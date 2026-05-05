import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Star, Quote, ArrowRight, ChevronLeft, ChevronRight, Heart, ExternalLink } from 'lucide-react';
import { TESTIMONIALS } from '../../utils/constants';
import SectionContainer from '../shared/SectionContainer';
import { OutlineToothIcon, GoogleIcon } from '../shared/Icons';

import testimonial1Img from '../../assets/testimonial-1.png';
import testimonial2Img from '../../assets/testimonial-2.png';
import testimonial3Img from '../../assets/testimonial-3.png';

// Mirrors the order/repetition of the original TESTIMONIALS data
const TESTIMONIAL_IMAGES = [testimonial1Img, testimonial2Img, testimonial3Img, testimonial1Img];


export default function BentoTestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const testimonials = TESTIMONIALS.slice(0, 5);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Entrance animation for ALL devices
    gsap.fromTo(".bento-anim",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        },
        onStart: () => {
          gsap.set(".bento-anim", { willChange: "opacity, transform" });
        },
        onComplete: () => {
          gsap.set(".bento-anim", { willChange: "auto" });
        }
      }
    );
  }, { scope: containerRef });

  const nextTestimonial = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <SectionContainer id="depoimentos" className="relative z-20 -mt-6 md:-mt-10 rounded-t-[40px] lg:rounded-t-[60px] overflow-hidden" background="bg-[rgb(36,77,87)]">
      {/* Background SVG Blobs & Minimalist Curves */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="blob-light-test" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(180 50% 85%)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="hsl(180 50% 85%)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="blob-deep-test" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(195 60% 30%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(195 60% 30%)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="curve-grad-test" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        {/* Glowing Blobs */}
        <circle cx="20%" cy="30%" r="400" fill="url(#blob-light-test)" />
        <circle cx="80%" cy="70%" r="500" fill="url(#blob-deep-test)" />
        <circle cx="50%" cy="50%" r="350" fill="url(#blob-light-test)" opacity="0.6" />

        {/* Elegant Accent Curves */}
        <g fill="none">
          <path d="M 1100,-100 C 1300,200 600,450 900,600" stroke="url(#curve-grad-test)" strokeWidth="1.5" />
          <path d="M 1200,-100 C 1400,200 700,450 1000,600" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <path d="M 100,-50 C 400,100 250,450 0,600" stroke="url(#curve-grad-test)" strokeWidth="1.5" />
          <path d="M 0,-50 C 300,100 150,450 -100,600" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        </g>
      </svg>

      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="bento-anim mb-16 md:mb-20 space-y-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-white/80 font-bold tracking-widest uppercase text-xs">
            <Heart size={16} fill="currentColor" />
            <span>Excelência Humana</span>
          </div>
          <h2 className="text-5xl lg:text-8xl font-medium text-white tracking-tighter leading-[0.9]">
            Histórias reais, <br />
            <span className="italic font-serif text-teal-light">sorrisos</span> únicos.
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-auto">
          
          {/* Card 1: Testimonials (2/3 Width on LG, Full Width on MD) */}
          <div className="bento-anim md:col-span-2 lg:col-span-2 bg-teal-dark rounded-[50px] p-10 lg:p-16 shadow-xl border border-white/10 flex flex-col relative overflow-hidden group min-h-[450px]">
            <div className="absolute -left-10 -top-10 text-white/5 pointer-events-none transition-colors duration-700">
              <Quote size={200} fill="currentColor" />
            </div>

            <div className="flex items-center justify-between mb-12 relative z-10">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {testimonials.map((t, i) => (
                    <div 
                      key={i} 
                      className={`w-10 h-10 rounded-full border-2 border-teal-dark overflow-hidden transition-all duration-300 cursor-pointer ${activeIdx === i ? 'scale-110 z-20 ring-2 ring-white' : 'opacity-50 hover:opacity-100'}`}
                      onClick={() => setActiveIdx(i)}
                    >
                      <img src={TESTIMONIAL_IMAGES[i]} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <span className="text-white/40 font-bold uppercase tracking-[0.2em] text-[10px] ml-2 hidden sm:block">Depoimentos</span>
              </div>
              
              <div className="flex gap-3">
                <button onClick={prevTestimonial} className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all shadow-sm"><ChevronLeft size={24} /></button>
                <button onClick={nextTestimonial} className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all shadow-sm"><ChevronRight size={24} /></button>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center relative z-10">
              <div key={activeIdx} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <p className="text-2xl lg:text-4xl font-medium text-white leading-tight mb-8 tracking-tight italic">
                  "{testimonials[activeIdx].quote}"
                </p>
                <div className="space-y-1">
                  <h4 className="font-bold text-white text-xl">{testimonials[activeIdx].name}</h4>
                  <div className="flex gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Google Business (1/3 Width) */}
          <div className="bento-anim bg-teal-dark rounded-[40px] md:rounded-[50px] p-8 md:p-10 flex flex-col justify-between shadow-xl border border-white/10 relative overflow-hidden group min-h-[220px] md:min-h-[450px]">
            <div className="flex items-center justify-between relative z-10">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <GoogleIcon size={22} />
              </div>
              <div className="flex items-center gap-1 text-white/80 text-[10px] font-black uppercase">
                Google Reviews <ExternalLink size={10} />
              </div>
            </div>
            
            <div className="relative z-10 flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start gap-4 md:gap-0 md:space-y-4">
              <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-2">
                <p className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">5.0</p>
                <div className="flex gap-0.5 text-amber-400 mb-1 md:mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                </div>
              </div>
              <p className="text-white/60 font-light text-[13px] md:text-base leading-snug md:leading-relaxed max-w-[160px] md:max-w-none text-right md:text-left">
                Nota máxima baseada na experiência real dos nossos pacientes.
              </p>
            </div>
          </div>

          {/* Card 3: Human Connection (1/3 Width) */}
          <div className="bento-anim relative overflow-hidden bg-teal-dark rounded-[50px] p-10 flex flex-col justify-between shadow-xl border border-white/10 min-h-[400px] group hover:border-white/30 transition-colors duration-500">
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500">
                <Heart size={32} fill="currentColor" />
              </div>
              <h4 className="text-white font-bold text-2xl tracking-tight leading-tight mb-4">
                Acolhimento <br />
                & Empatia
              </h4>
              <p className="text-white/60 font-light text-base leading-relaxed">
                Mais do que tratar dentes, cuidamos de pessoas. Nossa equipe é dedicada a entender suas necessidades e medos, garantindo um atendimento humano e sem pressa.
              </p>
            </div>
            
            <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Cuidado Genuíno</span>
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-white/10 border-2 border-teal-dark flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>
                ))}
              </div>
            </div>

            {/* Subtle background decoration */}
            <div className="absolute -right-8 -bottom-8 text-white/5 rotate-12 pointer-events-none transition-colors group-hover:text-white/10">
              <Heart size={200} fill="currentColor" />
            </div>
          </div>

          {/* Card 4: CTA (2/3 Width on LG, Full Width on MD) */}
          <div className="bento-anim md:col-span-2 lg:col-span-2 group relative overflow-hidden bg-teal-primary rounded-[40px] md:rounded-[50px] flex flex-col items-center justify-center text-center p-12 lg:p-16 shadow-2xl border border-white/10 min-h-[400px]">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent scale-150" />
            </div>
            
            {/* Background decorative icons adjusted for mobile */}
            <div className="absolute -left-20 -top-20 md:-left-32 md:-top-32 pointer-events-none opacity-[0.05] rotate-[10deg]">
              <div className="md:hidden">
                <OutlineToothIcon size={300} className="text-white" />
              </div>
              <div className="hidden md:block">
                <OutlineToothIcon size={500} className="text-white" />
              </div>
            </div>
            <div className="absolute -right-16 -bottom-20 md:-right-24 md:-bottom-32 pointer-events-none opacity-[0.05] rotate-[140deg]">
              <div className="md:hidden">
                <OutlineToothIcon size={250} className="text-white" />
              </div>
              <div className="hidden md:block">
                <OutlineToothIcon size={450} className="text-white" />
              </div>
            </div>

            <div className="space-y-10 relative z-10 max-w-2xl">
              <h3 className="text-4xl lg:text-6xl font-medium text-white tracking-tighter leading-[0.9]">
                Pronto para viver <br />
                essa experiência?
              </h3>
              <button className="inline-flex items-center gap-4 px-8 py-5 lg:px-12 lg:py-6 rounded-full bg-white text-teal-primary font-bold text-lg lg:text-xl hover:scale-105 transition-transform duration-500 shadow-2xl">
                Agendar Avaliação
                <ArrowRight size={24} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </SectionContainer>
  );
}
