import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Heart, Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '../../utils/constants';
import SectionContainer from '../shared/SectionContainer';
import fieldImage from '../../assets/que-somos.webp';
import testimonial1Img from '../../assets/testimonial2.webp';
import testimonial2Img from '../../assets/testimonial3.webp';
import testimonial3Img from '../../assets/testimonial1.webp';
import patientPortrait from '../../assets/Jennifer.webp';

const TESTIMONIAL_IMAGES = [testimonial1Img, testimonial2Img, testimonial3Img, patientPortrait];

export default function BentoTestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const testimonials = TESTIMONIALS.slice(0, 4).map((testimonial, index) => ({
    ...testimonial,
    image: TESTIMONIAL_IMAGES[index] ?? testimonial1Img,
  }));

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      '.bento-anim',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          once: true,
        },
        onStart: () => {
          gsap.set('.bento-anim', { willChange: 'opacity, transform' });
        },
        onComplete: () => {
          gsap.set('.bento-anim', { willChange: 'auto' });
        },
      },
    );
  }, { scope: containerRef });

  const nextTestimonial = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[activeIdx];

  return (
    <SectionContainer
      id="depoimentos"
      className="relative z-20 overflow-hidden rounded-t-[40px] lg:rounded-t-[60px] -mt-6 md:-mt-10 mt-8 md:mt-12 lg:mt-16"
      background="bg-[#325A65]"
    >
      <div ref={containerRef} className="relative z-10 mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <div className="bento-anim relative z-10 mb-10 text-center lg:mb-14">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/50">
            Experiência de quem confia
          </p>
          <h2 className="mt-6 text-4xl font-medium tracking-[-0.05em] text-white sm:text-[4rem] lg:text-[5.5rem] lg:leading-[0.9]">
            O cuidado que
            <span className="mt-2 block italic font-serif text-cyan-light/80">faz diferença no sorriso.</span>
          </h2>
        </div>

        <div className="relative z-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-6">
            <div className="bento-anim rounded-[32px] bg-white/10 p-7 shadow-[0_20px_50px_rgba(0,0,0,0.15)] ring-1 ring-white/15 sm:p-8">
              <div className="flex items-end gap-2 text-[4rem] font-black leading-none tracking-[-0.07em] text-white sm:text-[5rem]">
                99
                <span className="pb-2 text-[1.8rem] font-medium text-white/70">%</span>
              </div>
              <p className="mt-4 max-w-[220px] text-sm leading-relaxed text-white/65">
                Clientes que se sentem preparados para cuidar do sorriso com confiança e acolhimento.
              </p>
            </div>

            <div className="bento-anim overflow-hidden rounded-[32px] bg-white/8 shadow-[0_20px_50px_rgba(0,0,0,0.2)] ring-1 ring-white/10">
              <img
                src={fieldImage}
                alt=""
                className="h-[280px] w-full object-cover object-center sm:h-[320px] lg:h-[340px]"
              />
            </div>
          </div>

          <div className="bento-anim relative flex flex-col justify-end min-h-[480px] overflow-hidden rounded-[34px] bg-white/10 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)] ring-1 ring-white/15 sm:p-5 sm:min-h-[520px]">
            <div className="absolute inset-4 sm:inset-5 z-0 overflow-hidden rounded-[30px]">
              <img
                src={current.image}
                alt={current.name}
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c5b67]/90 via-[#3a707f]/40 to-transparent" />
            </div>

            <div className="absolute right-6 top-6 z-10 flex items-center gap-2 sm:right-8 sm:top-8">
              <button
                type="button"
                onClick={prevTestimonial}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-teal-dark shadow-md ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:bg-white"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={nextTestimonial}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-teal-dark shadow-md ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:bg-white"
                aria-label="Próximo depoimento"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="relative z-10 rounded-[30px] bg-[#3a707f]/85 p-6 shadow-[0_20px_40px_rgba(31,79,67,0.18)] ring-1 ring-white/20 backdrop-blur-md sm:p-7">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-white/80">
                  <Heart size={16} fill="currentColor" className="text-white" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white">Experiência real</span>
                </div>
                <Quote className="text-white/20" size={34} fill="currentColor" />
              </div>

              <p className="text-base leading-relaxed text-white sm:text-lg">
                “{current.quote}”
              </p>

              <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                <div>
                  <p className="text-sm font-semibold text-white">— {current.name}</p>
                  <div className="mt-1 flex items-center gap-0.5 text-amber-200">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>
                </div>

                <div className="hidden items-center gap-2 sm:flex">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveIdx(idx)}
                      className={`h-2 rounded-full transition-all duration-500 ${activeIdx === idx ? 'w-8 bg-white' : 'w-2 bg-white/25 hover:bg-white/40'
                        }`}
                      aria-label={`Ir para depoimento ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
