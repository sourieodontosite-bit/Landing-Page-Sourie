import { ArrowUpRight, Star } from "lucide-react";
import heroImg from "../../assets/images/clinica/banner-historia.webp";
import { WHATSAPP_LINK } from "../../utils/constants";

const brands = ["Invisalign", "Straumann", "3Shape", "Colgate", "Nobel Biocare"];

export default function HeroSplit() {
  return (
    <section id="hero-split" className="relative h-[100svh] lg:h-screen flex flex-col p-2 lg:p-4 pt-20 lg:pt-24 font-sans overflow-hidden bg-bg-light">
      <div className="w-full h-full overflow-hidden rounded-[24px] lg:rounded-[40px] bg-white shadow-[0_40px_90px_-40px_rgba(50,90,101,0.25)]">
        <div className="grid grid-cols-1 md:grid-cols-12 items-stretch h-full">

          {/* Coluna Esquerda (50% no Desktop) */}
          <div className="md:col-span-6 relative flex flex-col justify-between p-8 sm:p-12 lg:p-14 overflow-hidden">
            {/* SVG Blobs de Luz e Curvas Minimalistas (Mesmo estilo de PainSolutionSection.tsx) */}
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full opacity-90 select-none z-0"
              viewBox="0 0 600 600"
              preserveAspectRatio="xMinYMin slice"
            >
              <defs>
                <radialGradient id="hero-blob-light" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="hsl(180 50% 85%)" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="hsl(180 50% 85%)" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="hero-blob-deep" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="hsl(195 60% 30%)" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="hsl(195 60% 30%)" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Glowing Ambient Blobs */}
              <circle cx="20%" cy="30%" r="280" fill="url(#hero-blob-light)" />
              <circle cx="80%" cy="70%" r="350" fill="url(#hero-blob-deep)" />

              {/* Elegant Accent Curves (Mesmas curvas fluidas de PainSolutionSection) */}
              <g fill="none">
                <path
                  d="M 100,-50 C 400,100 250,450 0,600"
                  stroke="rgba(87,137,152,0.35)"
                  strokeWidth="1.5"
                />
                <path
                  d="M 0,-50 C 300,100 150,450 -100,600"
                  stroke="rgba(87,137,152,0.22)"
                  strokeWidth="1"
                />
                <path
                  d="M 200,-100 C 500,150 350,500 100,650"
                  stroke="rgba(87,137,152,0.18)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              </g>
            </svg>

            {/* Conteúdo Principal (Centralizado Verticalmente) */}
            <div className="relative z-10 my-auto py-4 sm:py-6 flex flex-col items-start justify-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-badge-border bg-badge-bg/40 px-3.5 py-1.5">
                <span className="h-2 w-2 animate-pulse rounded-full bg-teal-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-teal-dark">
                  Odontologia Premium
                </span>
              </div>

              <h1 className="max-w-[18ch] text-[clamp(2.5rem,5vw,4.2rem)] font-normal leading-[1.02] tracking-[-0.03em] text-navy-dark">
                Seu sorriso
                <br />
                <span className="font-serif italic text-teal-primary">nossa prioridade</span>
              </h1>

              <p className="mt-6 max-w-[44ch] text-base leading-relaxed text-text-secondary">
                Na Sourie, seu sorriso é mais do que uma expressão: é o reflexo da sua confiança, saúde e bem-estar.
              </p>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-dark px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-teal-dark shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Agendar Consulta
                <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Marquee de Marcas */}
            <div className="relative z-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <div
                className="flex w-max items-center gap-x-10 opacity-30"
                style={{ animation: "heroMarquee 22s linear infinite" }}
              >
                {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
                  <span
                    key={`${brand}-${i}`}
                    className="shrink-0 text-base font-semibold tracking-tight text-navy-dark"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna Direita (50% no Desktop - Foto de Atendimento) */}
          <div className="md:col-span-6 relative m-2 lg:m-3 min-h-[420px] md:min-h-0 overflow-hidden rounded-[22px] bg-teal-primary/10 md:ml-0">
            <img
              src={heroImg}
              alt="Atendimento de excelência na Clínica Sourie"
              width={1024}
              height={1280}
              className="absolute inset-0 h-full w-full rounded-[22px] object-cover object-center"
              loading="eager"
            />

            {/* Gradient Overlay na base */}
            <div className="pointer-events-none absolute inset-0 rounded-[22px] bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent" />

            {/* Pill de Contato */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/95 px-4 py-2 text-xs font-medium text-navy-dark shadow-sm backdrop-blur transition-transform hover:scale-105"
            >
              Contato
              <ArrowUpRight size={12} />
            </a>

            {/* Floating Review Card */}
            <figure className="absolute left-4 top-1/2 w-56 -translate-y-1/2 overflow-hidden rounded-2xl border border-white/60 bg-white/80 p-4 shadow-[0_18px_40px_-24px_rgba(16,24,32,0.5)] backdrop-blur-md">
              <div className="flex items-center gap-0.5 text-teal-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={11} fill="currentColor" strokeWidth={0} />
                ))}
                <span className="ml-1.5 text-[9px] font-medium text-text-secondary">5,0</span>
              </div>

              <blockquote className="mt-2 text-[11px] leading-relaxed text-navy-dark">
                &ldquo;Atendimento impecável e muito acolhedor. Saí da Sourie com o sorriso que eu sempre quis.&rdquo;
              </blockquote>

              <figcaption className="mt-3 flex items-center justify-between border-t border-white/70 pt-3">
                <span className="text-[10px] font-medium text-navy-dark">Marina Alves</span>
                <span className="text-[9px] text-text-secondary">Paciente desde 2023</span>
              </figcaption>
            </figure>

            {/* Floating Review Card — Bottom Right (Desktop only) */}
            <figure className="absolute bottom-4 right-4 hidden md:block w-60 overflow-hidden rounded-2xl border border-white/60 bg-white/80 p-4 shadow-[0_18px_40px_-24px_rgba(16,24,32,0.5)] backdrop-blur-md">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-primary/20 text-xs font-bold text-teal-dark">
                  J
                </div>
                <div>
                  <span className="block text-[11px] font-semibold text-navy-dark">Julia Mendonça</span>
                  <span className="text-[9px] text-text-secondary">Paciente desde 2024</span>
                </div>
              </div>

              <div className="mt-2.5 flex items-center gap-0.5 text-teal-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={10} fill="currentColor" strokeWidth={0} />
                ))}
                <span className="ml-1.5 text-[9px] font-medium text-text-secondary">5,0</span>
              </div>

              <blockquote className="mt-2 text-[11px] leading-relaxed text-navy-dark">
                &ldquo;Resultados incríveis com o Invisalign. Profissionais atenciosos do início ao fim!&rdquo;
              </blockquote>
            </figure>

          </div>

        </div>
      </div>

      <style>{`
        @keyframes heroMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}






