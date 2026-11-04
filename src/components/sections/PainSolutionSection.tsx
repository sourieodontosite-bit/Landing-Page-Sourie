import { useRef, useEffect, useState } from 'react';
import { Scan, Users, Smile } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionContainer from '../shared/SectionContainer';
import img1 from "../../assets/Tecnologia.webp";
import img2 from "../../assets/clinica-interna-2.webp";
import img3 from "../../assets/clinica-interna-3.webp";


type Card = {
  image: string;
  title: string;
  description: string;
  badges: string[];
  footer: { label: string; Icon?: LucideIcon };
  alt: string;
};

const cards: Card[] = [
  {
    image: img1,
    title: "Equipamentos\nde Ponta",
    description: "Scanner iTero™ 3D e tecnologia avançada para previsibilidade.",
    badges: ["Tecnologia", "Alta Precisão"],
    footer: { label: "Diagnóstico Digital", Icon: Scan },
    alt: "Equipamentos de alta tecnologia da clínica",
  },
  {
    image: img2,
    title: "Cuidado\nHumanizado",
    description: "Experiência leve e atendimento focado em seu conforto.",
    badges: ["Conforto", "Sem Dor"],
    footer: { label: "Protocolo de Atendimento", Icon: Smile },
    alt: "Ambiente confortável e humanizado da clínica",
  },
  {
    image: img3,
    title: "Equipe\nEspecializada",
    description: "Especialistas integrados para casos de alta complexidade.",
    badges: ["Expertise", "Multidisciplinar"],
    footer: { label: "Corpo Clínico", Icon: Users },
    alt: "Equipe de especialistas trabalhando",
  },
];

export default function PainSolutionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <SectionContainer
      id="sobre"
      className="relative z-20 -mt-6 md:-mt-10 rounded-t-[40px] lg:rounded-t-[60px] overflow-hidden"
      background="bg-[#e9f1f2]"
    >
      {/* Background SVG Blobs & Minimalist Curves */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-80"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="blob-light" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(180 50% 85%)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="hsl(180 50% 85%)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="blob-deep" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(195 60% 30%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(195 60% 30%)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="blob-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(180 50% 90%)" stopOpacity="0.45" />
            <stop offset="100%" stopColor="hsl(180 50% 90%)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="curve-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        {/* Glowing Blobs */}
        <circle cx="15%" cy="20%" r="350" fill="url(#blob-light)" />
        <circle cx="85%" cy="60%" r="450" fill="url(#blob-deep)" />
        <circle cx="50%" cy="10%" r="300" fill="url(#blob-light)" opacity="0.6" />

        {/* Elegant Accent Curves (Positioned strictly on the margins to frame the content) */}
        <g fill="none">
          {/* Right Side Accent */}
          <path
            d="M 1100,-100 C 1300,200 600,450 900,600"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1.5"
          />
          <path
            d="M 1200,-100 C 1400,200 700,450 1000,600"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />

          {/* Left Side Accent */}
          <path
            d="M 100,-50 C 400,100 250,450 0,600"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1.5"
          />
          <path
            d="M 0,-50 C 300,100 150,450 -100,600"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
        </g>
      </svg>

      <div ref={containerRef} className="relative z-10 max-w-[1280px] mx-auto w-full">
        {/* Header text */}
        <div className={`pain-anim relative max-w-md reveal-item ${isVisible ? 'active' : ''}`}>
          <h2 className="text-3xl font-semibold tracking-tight text-teal-dark sm:text-4xl">
            A base para um novo sorriso
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-teal-dark/80">
            Inicie sua jornada com nossos protocolos de atendimento mais eficientes. Aliamos tecnologia de ponta com um ambiente acolhedor para entregar resultados precisos.
          </p>
        </div>

        {/* Team level indicator */}
        <div className={`pain-anim relative mt-12 flex flex-col items-center sm:mt-16 reveal-item ${isVisible ? 'active' : ''}`} style={{ animationDelay: '100ms' }}>
          <span className="text-[11px] font-medium uppercase tracking-wide text-teal-dark/70">
            Índice de Satisfação
          </span>
          <span className="text-base font-semibold text-teal-dark">99%</span>
        </div>

        {/* Giant Connection text with vertical line */}
        <div className={`pain-anim relative mt-2 reveal-item ${isVisible ? 'active' : ''}`} style={{ animationDelay: '200ms' }}>
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 h-[55%] w-px -translate-x-1/2 bg-white/70"
          />
          <h3
            className="select-none text-center font-semibold leading-none text-teal-dark/25"
            style={{
              fontSize: "clamp(3.5rem, 14vw, 12rem)",
              letterSpacing: "-0.045em",
            }}
          >
            Confiança
          </h3>
        </div>

        {/* Cards grid */}
        <div className="relative z-10 mx-auto w-full mt-12 lg:mt-16">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {cards.map((c) => (
              <article
                key={c.title}
                className={`pain-anim group relative aspect-[3/4] rounded-[32px] bg-white/65 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)] ring-1 ring-teal-primary/10 reveal-item ${isVisible ? 'active' : ''}`}
                style={{ animationDelay: `${300 + cards.indexOf(c) * 100}ms` }}
              >
                {/* Content Wrapper for perfect clipping */}
                <div
                  className="absolute inset-0 rounded-[32px] overflow-hidden isolate transform-gpu bg-[#0a192f]"
                  style={{ WebkitMaskImage: "-webkit-radial-gradient(white, black)" }}
                >
                  <img
                    src={c.image}
                    alt={c.alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover scale-[1.05] transition-transform duration-700 group-hover:scale-110 will-change-transform"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#194d59]/80 via-[#194d59]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />
                </div>

                {/* Top badges (Glassmorphism) */}
                <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                  {c.badges.map((b) => (
                    <span
                      key={b}
                      className="rounded-full border border-teal-primary/20 bg-white/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-teal-dark backdrop-blur-md"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                {/* Glass Box Container */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#194d59]/80 backdrop-blur-xl border border-white/10 rounded-[28px] p-5 md:p-6 flex flex-col gap-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 shadow-lg">
                  <div className="flex items-center justify-between">
                    <h4 className="whitespace-pre-line text-white text-lg sm:text-xl font-bold leading-tight">
                      {c.title}
                    </h4>
                    {c.footer.Icon && (
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0">
                        <c.footer.Icon size={18} />
                      </div>
                    )}
                  </div>
                  
                  <p className="text-[13px] leading-relaxed text-white/80 font-light">{c.description}</p>
                  
                  <div className="mt-1 flex items-center gap-2 border-t border-white/15 pt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-light">
                    <span>{c.footer.label}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
