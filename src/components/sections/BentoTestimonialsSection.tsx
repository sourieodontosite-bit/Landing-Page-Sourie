import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Star, Quote, ChevronLeft, ChevronRight, Heart, ExternalLink, User } from 'lucide-react';
import { TESTIMONIALS, WHATSAPP_LINK } from '../../utils/constants';
import SectionContainer from '../shared/SectionContainer';
import Button from '../shared/Button';
import { OutlineToothIcon, GoogleIcon } from '../shared/Icons';

// Avatar color palette — tonal variations aligned with the brand's teal palette
const AVATAR_COLORS = [
  { bg: 'bg-white/20', icon: 'text-white' },
  { bg: 'bg-white/10', icon: 'text-white/80' },
  { bg: 'bg-white/15', icon: 'text-white/90' },
  { bg: 'bg-white/20', icon: 'text-white' },
  { bg: 'bg-white/10', icon: 'text-white/70' },
];


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
            <span className="italic font-serif text-cyan-light">sorrisos</span> únicos.
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-auto">
          
          {/* Card 1: Testimonials (2/3 Width on LG, Full Width on MD) */}
          <div className="bento-anim md:col-span-2 lg:col-span-2 bg-[rgb(28,59,67)] rounded-[40px] lg:rounded-[50px] p-8 lg:p-14 shadow-2xl border border-white/5 flex flex-col relative overflow-hidden group min-h-[480px]">
            
            <div className="flex-1 flex flex-col justify-center relative z-10">
              <div key={activeIdx} className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <Quote className="text-cyan-light/20 mb-6" size={48} fill="currentColor" />
                <p className="text-xl lg:text-3xl font-medium text-white leading-[1.3] tracking-tight mb-12 max-w-2xl">
                  &ldquo;{testimonials[activeIdx].quote}&rdquo;
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-8 border-t border-white/5">
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-cyan-light border border-white/10">
                       <User size={24} />
                     </div>
                     <div className="space-y-0.5">
                       <h4 className="font-bold text-white text-lg tracking-tight leading-none">{testimonials[activeIdx].name}</h4>
                       <div className="flex gap-0.5 text-amber-400/90">
                         {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                       </div>
                     </div>
                   </div>

                   <div className="hidden sm:flex items-center gap-2">
                     {testimonials.map((_, i) => (
                       <button
                         key={i}
                         onClick={() => setActiveIdx(i)}
                         className={`h-1.5 rounded-full transition-all duration-500 ${activeIdx === i ? 'w-8 bg-teal-primary' : 'w-2 bg-white/10 hover:bg-white/20'}`}
                         aria-label={`Ir para depoimento ${i + 1}`}
                       />
                     ))}
                   </div>
                </div>
              </div>
            </div>

            {/* Mobile/Desktop Arrows */}
            <div className="absolute bottom-8 right-8 lg:bottom-14 lg:right-14 flex gap-2 z-20">
              <button 
                onClick={prevTestimonial} 
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-teal-primary hover:border-teal-primary transition-all active:scale-95"
                aria-label="Anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextTestimonial} 
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-teal-primary hover:border-teal-primary transition-all active:scale-95"
                aria-label="Próximo"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Card 2: Google Business (Full Width on MD, 1/3 on LG) */}
          <div className="bento-anim md:col-span-2 lg:col-span-1 bg-[rgb(28,59,67)] rounded-[40px] lg:rounded-[50px] p-8 lg:p-12 flex flex-col items-center justify-center text-center shadow-2xl border border-white/5 relative overflow-hidden group min-h-[480px]">
             <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-xl mx-auto mb-8 transition-transform group-hover:scale-110 duration-500">
                  <GoogleIcon size={32} />
                </div>
                
                <div className="space-y-1">
                  <p className="text-7xl lg:text-8xl font-black text-white tracking-tighter leading-none">5.0</p>
                  <div className="flex justify-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-white text-lg font-medium tracking-tight">Excelência no Google</p>
                  <p className="text-white/50 text-sm leading-relaxed max-w-[200px] mx-auto">
                    Baseado em centenas de avaliações reais de quem já sorriu com a gente.
                  </p>
                </div>

                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-teal-primary hover:text-cyan-light text-xs font-bold uppercase tracking-widest transition-colors pt-4 group/link"
                >
                  Ver todos os comentários 
                  <ExternalLink size={12} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>
             </div>
          </div>

          {/* Card 3: CTA (Full Width) */}
          <div className="bento-anim md:col-span-2 lg:col-span-3 group relative overflow-hidden bg-teal-primary rounded-[40px] md:rounded-[50px] flex flex-col items-center justify-center text-center p-12 lg:p-16 shadow-2xl border border-white/10 min-h-[400px]">
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
              <Button 
                text="Agendar Avaliação" 
                icon="arrow-circle" 
                variant="white" 
                size="lg"
                href={WHATSAPP_LINK} 
                className="shadow-2xl shadow-black/20 whitespace-nowrap"
              />
            </div>
          </div>

        </div>
      </div>
    </SectionContainer>
  );
}
