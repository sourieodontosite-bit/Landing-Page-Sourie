import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote, ArrowRight, ChevronLeft, ChevronRight, Heart, ExternalLink } from 'lucide-react';
import { TESTIMONIALS } from '../../utils/constants';
import SectionContainer from '../shared/SectionContainer';
import { OutlineToothIcon, GoogleIcon } from '../shared/Icons';

gsap.registerPlugin(ScrollTrigger);

export default function BentoTestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const testimonials = TESTIMONIALS.slice(0, 5);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      if (containerRef.current) {
        gsap.fromTo(".bento-anim",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
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
      }
    });

    return () => mm.revert();
  }, { scope: containerRef });

  const nextTestimonial = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <SectionContainer id="depoimentos" className="py-12 lg:py-16">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="bento-anim mb-20 space-y-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-teal-primary font-bold tracking-widest uppercase text-xs">
            <Heart size={16} fill="currentColor" />
            <span>Excelência Humana</span>
          </div>
          <h2 className="text-5xl lg:text-8xl font-medium text-teal-dark tracking-tighter leading-[0.9]">
            Histórias reais, <br />
            <span className="italic font-serif text-teal-primary">sorrisos</span> únicos.
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-auto">
          
          {/* Card 1: Testimonials (2/3 Width on LG, Full Width on MD) */}
          <div className="bento-anim md:col-span-2 lg:col-span-2 bg-white rounded-[50px] p-10 lg:p-16 shadow-xl border border-slate-100 flex flex-col relative overflow-hidden group min-h-[450px]">
            <div className="absolute -left-10 -top-10 text-slate-50 pointer-events-none group-hover:text-teal-primary/5 transition-colors duration-700">
              <Quote size={200} fill="currentColor" />
            </div>

            <div className="flex items-center justify-between mb-12 relative z-10">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {testimonials.map((t, i) => (
                    <div 
                      key={i} 
                      className={`w-10 h-10 rounded-full border-2 border-white overflow-hidden transition-all duration-300 cursor-pointer ${activeIdx === i ? 'scale-110 z-20 ring-2 ring-teal-primary' : 'opacity-40 hover:opacity-100'}`}
                      onClick={() => setActiveIdx(i)}
                    >
                      <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <span className="text-teal-dark/40 font-bold uppercase tracking-[0.2em] text-[10px] ml-2 hidden sm:block">Depoimentos</span>
              </div>
              
              <div className="flex gap-3">
                <button onClick={prevTestimonial} className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-teal-dark hover:bg-teal-dark hover:text-white transition-all shadow-sm"><ChevronLeft size={24} /></button>
                <button onClick={nextTestimonial} className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-teal-dark hover:bg-teal-dark hover:text-white transition-all shadow-sm"><ChevronRight size={24} /></button>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center relative z-10">
              <div key={activeIdx} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <p className="text-2xl lg:text-4xl font-medium text-teal-dark leading-tight mb-8 tracking-tight italic">
                  "{testimonials[activeIdx].quote}"
                </p>
                <div className="space-y-1">
                  <h4 className="font-bold text-teal-dark text-xl">{testimonials[activeIdx].name}</h4>
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
          <div className="bento-anim bg-white rounded-[50px] p-10 flex flex-col justify-between shadow-xl border border-slate-100 relative overflow-hidden group min-h-[450px]">
            <div className="flex items-center justify-between relative z-10">
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-white transition-colors">
                <GoogleIcon size={24} />
              </div>
              <div className="flex items-center gap-1 text-teal-primary text-[10px] font-black uppercase">
                Google Reviews <ExternalLink size={10} />
              </div>
            </div>
            
            <div className="relative z-10 space-y-4">
              <div className="flex items-baseline gap-2">
                <p className="text-7xl font-black text-teal-dark tracking-tighter leading-none">5.0</p>
                <div className="flex gap-0.5 text-amber-400 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
              </div>
              <p className="text-teal-dark/60 font-light text-base leading-relaxed">
                Nota máxima baseada na experiência real dos nossos pacientes.
              </p>
            </div>
          </div>

          {/* Card 3: Human Connection (1/3 Width) */}
          <div className="bento-anim relative overflow-hidden bg-white rounded-[50px] p-10 flex flex-col justify-between shadow-xl border border-slate-100 min-h-[400px] group hover:border-teal-primary/30 transition-colors duration-500">
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-teal-primary/10 flex items-center justify-center text-teal-primary mb-6 group-hover:scale-110 transition-transform duration-500">
                <Heart size={32} fill="currentColor" />
              </div>
              <h4 className="text-teal-dark font-bold text-2xl tracking-tight leading-tight mb-4">
                Acolhimento <br />
                & Empatia
              </h4>
              <p className="text-teal-dark/50 font-light text-base leading-relaxed">
                Mais do que tratar dentes, cuidamos de pessoas. Nossa equipe é dedicada a entender suas necessidades e medos, garantindo um atendimento humano e sem pressa.
              </p>
            </div>
            
            <div className="relative z-10 pt-6 border-t border-slate-50 flex items-center justify-between">
              <span className="text-[10px] font-black text-teal-dark/30 uppercase tracking-[0.2em]">Cuidado Genuíno</span>
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-teal-primary/5 border-2 border-white flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-primary" />
                  </div>
                ))}
              </div>
            </div>

            {/* Subtle background decoration */}
            <div className="absolute -right-8 -bottom-8 text-teal-primary/5 rotate-12 pointer-events-none transition-colors group-hover:text-teal-primary/10">
              <Heart size={200} fill="currentColor" />
            </div>
          </div>

          {/* Card 4: CTA (2/3 Width on LG, Full Width on MD) */}
          <div className="bento-anim md:col-span-2 lg:col-span-2 group relative overflow-hidden bg-teal-primary rounded-[50px] flex flex-col items-center justify-center text-center p-12 lg:p-16 shadow-2xl border border-white/10 min-h-[400px]">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent scale-150" />
            </div>
            <div className="absolute -left-32 -top-32 pointer-events-none opacity-[0.05] rotate-[10deg]">
              <OutlineToothIcon size={500} className="text-white" />
            </div>
            <div className="absolute -right-24 -bottom-32 pointer-events-none opacity-[0.05] rotate-[140deg]">
              <OutlineToothIcon size={450} className="text-white" />
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
