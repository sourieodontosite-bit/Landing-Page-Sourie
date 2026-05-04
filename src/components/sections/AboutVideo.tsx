import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Home, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AddressCard from '../shared/AddressCard';
const heroImage = '/HistoriaHero.webp';

interface AboutVideoProps {
  showAddress?: boolean;
}

export default function AboutVideo({ showAddress = false }: AboutVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const breadcrumbRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const addressRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    const mm = gsap.matchMedia();

    gsap.set([breadcrumbRef.current, titleRef.current, addressRef.current], {
      opacity: 0,
      y: 20,
      willChange: "opacity, transform"
    });

    tl.to(imageRef.current, { opacity: 1, scale: 1, duration: 2, ease: "power2.inOut" })
      .to(breadcrumbRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=1.4")
      .to(titleRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
      .to(addressRef.current, { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        onComplete: () => {
          gsap.set([breadcrumbRef.current, titleRef.current, addressRef.current], { willChange: "auto" });
        }
      }, "-=0.6");

    mm.add("(min-width: 1024px)", () => {
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

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative h-[100dvh] md:h-screen flex flex-col p-0 md:p-3 lg:p-4 lg:pt-2 overflow-hidden"
    >
      {/* Background Card - Matching HeroSection style */}
      <div className="absolute inset-0 md:inset-3 lg:inset-4 lg:top-2 z-0 rounded-none md:rounded-[32px] lg:rounded-[40px] overflow-hidden bg-navy-dark isolation-isolate transform-gpu">
        <img
          ref={imageRef}
          src={heroImage}
          alt="Clínica Souriê"
          className="w-full h-full object-cover opacity-0 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/80 via-navy-dark/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center pt-24 lg:pt-32">
        <div className="max-w-page mx-auto px-6 sm:px-10 lg:px-container-x w-full">
          <div className="max-w-2xl flex flex-col items-start text-left">
            {/* Breadcrumbs inside the Hero structure */}
            <nav
              ref={breadcrumbRef}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white/70 text-[10px] font-bold uppercase tracking-widest mb-8 shadow-sm"
            >
              <Link to="/" className="hover:text-white transition-colors flex items-center gap-1.5">
                <Home size={12} />
                Início
              </Link>
              <ChevronRight size={12} className="opacity-30" />
              <span className="text-cyan-light">Sobre a Clínica</span>
            </nav>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-light animate-pulse" />
                <span className="text-white/70 text-[10px] lg:text-xs font-bold uppercase tracking-[0.3em]">Conheça Nosso Espaço</span>
              </div>
              <h1
                ref={titleRef}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-medium text-white leading-[1.05] mb-8 sm:mb-12 will-change-transform"
              >
                Bem-vindo à Souriê <br />
                <span className="text-cyan-light italic font-serif">Odontologia Integrada</span>
              </h1>
            </div>
          </div>

          {showAddress && (
            <div ref={addressRef} className="w-full mt-8 lg:mt-10">
              <AddressCard isFullWidth className="bg-navy-dark/40 backdrop-blur-md border-white/10" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
