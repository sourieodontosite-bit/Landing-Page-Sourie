import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Button from '../shared/Button';
import { WHATSAPP_LINK } from '../../utils/constants';
import heroImage from '../../assets/hero-image.png';


export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Entrance animation ONLY on Desktop for better LCP on mobile
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from([badgeRef.current, titleRef.current, textRef.current, buttonRef.current], {
        opacity: 0,
        y: 20,
        stagger: 0.15,
        duration: 0.8,
        delay: 0.2
      })
        .from(imageRef.current, {
          opacity: 0,
          scale: 1.05,
          duration: 2,
          ease: "power2.inOut"
        }, 0);

      // Parallax ONLY on desktop
      gsap.to(imageRef.current, {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    });

    // Mobile: Elements are already visible via HTML/CSS (optimized for LCP)

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative h-[100dvh] md:h-screen flex flex-col p-0 md:p-3 lg:p-4 lg:pt-2 overflow-hidden"
    >
      {/* Top Progressive Color Overlay */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#081d22]/95 via-navy-dark/40 to-transparent pointer-events-none z-10 md:hidden" />

      {/* Background Card */}
      <div className="absolute inset-0 md:inset-3 lg:inset-4 lg:top-2 z-0 rounded-none md:rounded-[32px] lg:rounded-[40px] overflow-hidden bg-navy-dark isolation-isolate transform-gpu">
        <img
          ref={imageRef}
          src={heroImage}
          alt="Paciente sorrindo na clínica odontológica Souriê"
          className="w-full h-full object-cover object-[75%_center] md:object-center scale-100"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/40 to-transparent md:bg-gradient-to-r md:from-navy-dark/80 md:via-navy-dark/40 md:to-transparent pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-end md:items-center pb-12 sm:pb-16 md:pb-0 pt-24 lg:pt-32">
        <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-[63px] w-full">
          <div className="max-w-2xl flex flex-col items-start text-left">
            {/* Badge */}
            <div
              ref={badgeRef}
              className="hero-mobile-anim hero-delay-1 inline-flex items-center gap-1.5 sm:gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-pill px-3 sm:px-5 py-1 sm:py-2 mb-4 sm:mb-8"
            >
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-light animate-pulse-subtle" />
              <span className="text-white text-[9px] sm:text-[11px] lg:text-xs xl:text-[11px] 2xl:text-[11px] tracking-widest font-bold uppercase">
                Atendimento especializado em Nova Era
              </span>
            </div>

            <h1
              ref={titleRef}
              className="hero-mobile-anim hero-delay-2 text-4xl sm:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-medium text-white leading-[1.05] mb-6 sm:mb-8"
            >
              Seu sorriso,<br />
              nossa prioridade
            </h1>

            <p
              ref={textRef}
              className="hero-mobile-anim hero-delay-3 text-white/85 text-lg xl:text-xl 2xl:text-2xl mb-8 sm:mb-12 max-w-xl mx-0 leading-relaxed font-light"
            >
              Tecnologia, atenção e qualidade para <br className="block sm:hidden" /> transformar sua autoestima e saúde.
            </p>

            <div ref={buttonRef} className="hero-mobile-anim hero-delay-4">
              <div className="lg:scale-[0.85] origin-left inline-block">
                <Button
                  text="Agende sua consulta"
                  icon="arrow-circle"
                  variant="cta"
                  size="lg"
                  href={WHATSAPP_LINK}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
