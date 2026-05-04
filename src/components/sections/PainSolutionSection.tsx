import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Scan, Users, Smile } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { OutlineToothIcon } from "../shared/Icons";
import img1 from "../../assets/clinica-interna-1.png";
import img2 from "../../assets/clinica-interna-2.jpg";
import img3 from "../../assets/clinica-interna-3.png";


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
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Entrance animation for ALL devices
    gsap.fromTo(".pain-anim",
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
          gsap.set(".pain-anim", { willChange: "opacity, transform" });
        },
        onComplete: () => {
          gsap.set(".pain-anim", { willChange: "auto" });
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="sobre" ref={containerRef} className="w-full p-2 sm:p-4 lg:p-4 mt-6 lg:mt-4">
      <div className="mx-auto w-full">
        {/* Banner */}
        <div
          className="relative overflow-hidden rounded-[32px] bg-[#4c717a] px-6 pt-10 pb-[34rem] sm:px-12 sm:pt-14 sm:pb-[38rem] lg:pb-[44rem]"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
          }}
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

          {/* Header text */}
          <div className="pain-anim relative max-w-[1280px] mx-auto w-full">
            <div className="max-w-md">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                A base para um novo sorriso
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                Inicie sua jornada com nossos protocolos de atendimento mais eficientes. Aliamos tecnologia de ponta com um ambiente acolhedor para entregar resultados precisos.
              </p>
            </div>
          </div>

          {/* Team level indicator */}
          <div className="pain-anim relative mt-12 flex flex-col items-center sm:mt-16">
            <span className="text-[11px] font-medium uppercase tracking-wide text-white/80">
              Índice de Satisfação
            </span>
            <span className="text-base font-semibold text-white">99%</span>
          </div>

          {/* Giant Connection text with vertical line */}
          <div className="pain-anim relative mt-2">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-0 h-[55%] w-px -translate-x-1/2 bg-white/70"
            />
            <h3
              className="select-none text-center font-semibold leading-none text-white/45"
              style={{
                fontSize: "clamp(3.5rem, 14vw, 12rem)",
                letterSpacing: "-0.045em",
              }}
            >
              Confiança
            </h3>
          </div>
        </div>

        {/* Cards grid — overlapping the banner */}
        <div className="mx-auto max-w-[1280px] w-full">
          <div className="-mt-[30rem] grid grid-cols-1 gap-5 px-2 sm:-mt-[32rem] sm:grid-cols-2 lg:-mt-[34rem] lg:grid-cols-3 lg:gap-6">
            {cards.map((c) => (
              <article
                key={c.title}
                className="pain-anim group relative aspect-[3/4] overflow-hidden rounded-[32px] bg-teal-dark shadow-problem"
              >
                <img
                  src={c.image}
                  alt={c.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Progressive Glass/Color Overlay */}
                <div
                  className="absolute inset-0 bg-navy-dark/90 backdrop-blur-md"
                  style={{
                    WebkitMaskImage: "linear-gradient(to top, black 0%, black 30%, transparent 100%)",
                    maskImage: "linear-gradient(to top, black 0%, black 30%, transparent 100%)",
                  }}
                />

                {/* Top badges (Glassmorphism) */}
                <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                  {c.badges.map((b) => (
                    <span
                      key={b}
                      className="rounded-full border border-white/20 bg-navy-dark/60 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                {/* Bottom content (Text only, background is handled by the progressive overlay) */}
                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 sm:p-8">
                  <h4 className="whitespace-pre-line text-xl font-bold leading-tight text-white sm:text-2xl">
                    {c.title}
                  </h4>
                  <p className="text-[13px] leading-relaxed text-white/80">{c.description}</p>
                  <div className="mt-2 flex items-center gap-2 border-t border-white/15 pt-3 text-[12px] font-medium tracking-wide text-white/90">
                    {c.footer.Icon && <c.footer.Icon className="h-4 w-4" />}
                    <span>{c.footer.label}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Recognition uplift CTA Card */}
          <div className="pain-anim mt-20 px-2">
            <div className="relative overflow-hidden bg-teal-primary rounded-[50px] p-12 lg:p-16 flex flex-col items-center text-center shadow-2xl border border-white/10 group">
              {/* Background Decorations */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent scale-150" />
              </div>
              <div className="absolute -left-20 -top-20 pointer-events-none opacity-[0.05] rotate-[10deg] group-hover:rotate-[20deg] transition-transform duration-1000">
                <OutlineToothIcon size={350} className="text-white" />
              </div>
              <div className="absolute -right-16 -bottom-20 pointer-events-none opacity-[0.05] rotate-[140deg] group-hover:rotate-[130deg] transition-transform duration-1000">
                <OutlineToothIcon size={300} className="text-white" />
              </div>

              <div className="relative z-10 space-y-6 max-w-2xl">
                <span className="text-white/70 text-[10px] font-bold uppercase tracking-[0.3em]">Experiência Souriê</span>
                <h3 className="text-3xl sm:text-5xl lg:text-6xl font-medium text-white tracking-tighter leading-[0.95]">
                  Seu <span className="italic font-serif">conforto</span> em cada <br />
                  detalhe do tratamento.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
