import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Button from '../shared/Button';
import { buildWhatsAppLink, WA_MESSAGES } from '../../utils/constants';
import heroImageMobile from '../../assets/hero-mobile.webp';
import heroImage from '../../assets/hero-section.webp';


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
      className="relative h-[100svh] lg:h-screen flex flex-col p-2 lg:p-4 lg:pt-2 overflow-hidden"
    >
      {/* Background Card */}
      <div className="absolute inset-2 lg:inset-4 lg:top-2 z-0 rounded-[24px] lg:rounded-[40px] overflow-hidden bg-navy-dark isolation-isolate transform-gpu">
        <picture className="w-full h-full">
          <source srcSet={heroImageMobile} media="(max-width: 1023px)" />
          <img
            ref={imageRef}
            src={heroImage}
            alt="Paciente sorrindo na clínica odontológica Souriê"
            className="w-full h-full object-cover object-[center_bottom] lg:object-center scale-100"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-navy-dark/10 to-transparent lg:bg-gradient-to-r lg:from-navy-dark/80 lg:via-navy-dark/40 lg:to-transparent pointer-events-none" />
        {/* Camada #071E26: 15% no Mobile e 25% no Desktop */}
        <div className="absolute inset-0 bg-[#071E26]/15 lg:bg-[#071E26]/25 pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-end lg:items-center pb-10 lg:pb-10 pt-0 lg:pt-24">
        <div className="w-full px-4 sm:px-8 lg:px-[47px]">
          <div className="max-w-2xl flex flex-col items-center lg:items-start text-center lg:text-left mx-auto lg:mx-0">
            {/* Badge */}
            <div
              ref={badgeRef}
              className="hero-entrance lg:opacity-100 lg:animate-none hero-delay-1 inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/25 rounded-pill px-3 py-1 lg:px-5 lg:py-2 [@media(min-width:1024px)_and_(max-height:800px)]:px-4 [@media(min-width:1024px)_and_(max-height:800px)]:py-1.5 mb-4 lg:mb-8 [@media(min-width:1024px)_and_(max-height:800px)]:mb-5"
            >
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 [@media(min-width:1024px)_and_(max-height:800px)]:w-1.5 [@media(min-width:1024px)_and_(max-height:800px)]:h-1.5 rounded-full bg-cyan-light animate-pulse-subtle" />
              <span className="text-white text-[9px] sm:text-[11px] lg:text-xs xl:text-[11px] 2xl:text-[11px] [@media(min-width:1024px)_and_(max-height:800px)]:text-[9px] tracking-widest font-bold uppercase">
                Atendimento especializado em Nova Era
              </span>
            </div>

            <h1
              ref={titleRef}
              className="hero-entrance lg:opacity-100 lg:animate-none hero-delay-2 text-[42px] sm:text-6xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-medium text-white leading-[1.05] mb-6 lg:mb-8"
            >
              Seu sorriso,<br />
              nossa prioridade
            </h1>

            <p
              ref={textRef}
              className="hero-entrance lg:opacity-100 lg:animate-none hero-delay-3 text-white/85 text-base sm:text-lg xl:text-xl 2xl:text-2xl mb-5 lg:mb-6 max-w-[280px] sm:max-w-md lg:max-w-xl mx-0 leading-relaxed font-light"
            >
              Tecnologia, atenção e qualidade para <br className="block lg:hidden" /> transformar sua autoestima e saúde.
            </p>

            <div ref={buttonRef} className="hero-entrance lg:opacity-100 lg:animate-none hero-delay-4">
              <div className="lg:scale-[0.85] origin-center lg:origin-left inline-block">
                <Button
                  text="Agendar minha avaliação"
                  icon="arrow-circle"
                  variant="cta"
                  size="lg"
                  href={buildWhatsAppLink(WA_MESSAGES.hero)}
                  className="!bg-[rgb(206,235,255)] hover:!bg-teal-primary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
