import { useRef, useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { GoogleWatermarkIcon } from '../shared/Icons';
import { TESTIMONIALS } from '../../utils/constants';
import SectionContainer from '../shared/SectionContainer';
import testimonialIngrid from '../../assets/Ingrid.webp';
import testimonialFabiana from '../../assets/fabiana.webp';
import testimonialJennifer from '../../assets/Jennifer.webp';

const TESTIMONIAL_AVATARS = [
  testimonialIngrid,
  testimonialFabiana,
  testimonialJennifer,
];



export default function BentoTestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Ingrid(0), Fabiana(1), Jennifer(3) — Thais(2) removida
  const testimonials = [TESTIMONIALS[0], TESTIMONIALS[1], TESTIMONIALS[3]];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <SectionContainer
      id="depoimentos"
      className="relative z-20 overflow-hidden rounded-t-[40px] lg:rounded-t-[60px] -mt-6 md:-mt-10 mt-8 md:mt-12 lg:mt-16"
      background="bg-[#325A65]"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-cyan-400/8 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-teal-300/6 blur-[100px]" />
      </div>

      <div ref={sectionRef} className="relative z-10 mx-auto max-w-page px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`reveal-item ${isVisible ? 'active' : ''} mb-12 text-center lg:mb-16`} style={{ animationDelay: '0ms' }}>
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/50">
            Experiência de quem confia
          </p>
          <h2 className="mt-6 text-4xl font-medium tracking-[-0.05em] text-white sm:text-[4rem] lg:text-[5.5rem] lg:leading-[0.9]">
            O cuidado que
            <span className="mt-2 block italic font-serif text-cyan-light/80">faz diferença no sorriso.</span>
          </h2>
        </div>

        {/* Top row: Google rating + featured large quote */}
        <div className="mb-6 grid gap-6 lg:grid-cols-[1fr_2fr]">

          {/* Google Rating Card */}
          <div className={`reveal-item ${isVisible ? 'active' : ''} group relative overflow-hidden rounded-[32px] bg-gradient-to-br from-white/15 via-white/10 to-white/5 p-7 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.18)] ring-1 ring-white/20 backdrop-blur-md transition-all duration-300 hover:ring-white/30 hover:shadow-[0_25px_60px_rgba(0,0,0,0.25)]`} style={{ animationDelay: '80ms' }}>
            <div className="pointer-events-none absolute -top-16 -left-16 h-40 w-40 rounded-full bg-cyan-light/20 blur-2xl opacity-60" />
            <div className="pointer-events-none absolute -right-4 -bottom-4 text-white/10">
              <GoogleWatermarkIcon size={180} />
            </div>

            <div className="relative z-10 mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/90 ring-1 ring-white/15 backdrop-blur-sm">
              <GoogleWatermarkIcon size={14} className="text-white" />
              <span>Avaliações Google</span>
            </div>

            <div className="relative z-10 flex flex-wrap items-baseline gap-3">
              <span className="text-[4.5rem] font-extrabold leading-none tracking-[-0.05em] text-white">5,0</span>
              <div className="flex flex-col gap-1 pb-1">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#FBBF24" className="text-amber-400 drop-shadow-[0_2px_4px_rgba(251,191,36,0.3)]" />
                  ))}
                </div>
                <span className="text-[11px] font-medium text-white/60 tracking-wide uppercase">Nota Máxima</span>
              </div>
            </div>

            <p className="relative z-10 mt-5 max-w-[260px] text-sm leading-relaxed text-white/70">
              Reconhecida com nota máxima no Google por pacientes que vivem uma experiência acolhedora e transformadora.
            </p>
          </div>

          {/* Featured quote - first testimonial */}
          <div className={`reveal-item ${isVisible ? 'active' : ''} group relative flex flex-col justify-between overflow-hidden rounded-[32px] bg-gradient-to-br from-white/15 via-white/10 to-white/5 p-8 ring-1 ring-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur-md transition-all duration-300 hover:ring-white/30 hover:shadow-[0_25px_60px_rgba(0,0,0,0.25)] sm:p-10`} style={{ animationDelay: '160ms' }}>
            <div className="pointer-events-none absolute top-0 right-0 h-48 w-48 rounded-full bg-teal-300/10 blur-[60px]" />
            <Quote className="relative z-10 mb-4 text-white/15" size={52} fill="currentColor" />
            <p className="relative z-10 flex-1 text-xl font-medium leading-relaxed tracking-[-0.02em] text-white sm:text-2xl lg:text-[1.7rem] lg:leading-[1.35]">
              "{testimonials[0]?.quote}"
            </p>
            <div className="relative z-10 mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
              <div className="h-11 w-11 shrink-0 rounded-full overflow-hidden ring-2 ring-white/20">
                <img
                  src={TESTIMONIAL_AVATARS[0]}
                  alt={testimonials[0]?.name}
                  className="h-full w-full object-cover object-top scale-125"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{testimonials[0]?.name}</p>
                <p className="mt-0.5 text-[11px] font-medium uppercase tracking-widest text-white/50">Paciente Souriê</p>
              </div>
              <div className="ml-auto flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="#FDE68A" className="text-amber-200" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row: remaining 3 testimonials */}
        <div className="grid gap-4 sm:grid-cols-2">
          {testimonials.slice(1).map((testimonial, idx) => (
            <div
              key={idx + 1}
              className={`reveal-item ${isVisible ? 'active' : ''} group relative flex flex-col gap-5 overflow-hidden rounded-[28px] bg-gradient-to-br from-white/15 via-white/10 to-white/5 p-6 ring-1 ring-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:ring-white/30 hover:shadow-[0_25px_60px_rgba(0,0,0,0.25)]`}
              style={{ animationDelay: `${240 + idx * 80}ms` }}
            >
              <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-br from-cyan-400/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-cyan-400/5" />

              <Quote className="shrink-0 text-white/15" size={28} fill="currentColor" />

              <p className="relative z-10 flex-1 text-sm leading-relaxed text-white/80 sm:text-[15px]">
                "{testimonial.quote}"
              </p>

              <div className="relative z-10 flex items-center gap-3 border-t border-white/8 pt-4">
                <div className="h-9 w-9 shrink-0 rounded-full overflow-hidden ring-1 ring-white/20">
                  <img
                    src={TESTIMONIAL_AVATARS[idx + 1]}
                    alt={testimonial.name}
                    className="h-full w-full object-cover object-top scale-125"
                  />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-[13px] font-semibold text-white">{testimonial.name}</p>
                  <div className="mt-0.5 flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} fill="#FDE68A" className="text-amber-200" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </SectionContainer>
  );
}