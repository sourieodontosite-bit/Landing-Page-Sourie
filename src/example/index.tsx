import { createFileRoute } from "@tanstack/react-router";
import { Search, Menu, ArrowUpRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-dentist.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clínica Sourie — Odontologia Premium e Sorrisos Naturais" },
      {
        name: "description",
        content:
          "A Clínica Sourie cuida do seu sorriso com odontologia premium, atendimento acolhedor e resultados naturais. Agende sua consulta.",
      },
      { property: "og:title", content: "Clínica Sourie — Odontologia Premium" },
      {
        property: "og:description",
        content:
          "Cuidando do seu sorriso, uma consulta por vez. Odontologia premium, tratamentos gentis e resultados naturais.",
      },
    ],
  }),
  component: Index,
});

const brands = ["Invisalign", "Straumann", "3Shape", "Colgate"];

function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-canvas p-6 font-sans">
      <div className="w-full max-w-6xl overflow-hidden rounded-[26px] bg-white shadow-[0_40px_90px_-40px_rgba(38,75,122,0.25)]">
        <div className="grid md:grid-cols-[48fr_52fr]">
          {/* Left */}
          <div className="flex flex-col justify-between p-8 sm:p-10">
            <div className="flex items-center justify-between">
              <span className="text-lg tracking-tight text-navy">
                <span className="font-semibold">Sou</span>
                <span className="font-serif italic">rie</span>
              </span>
              <div className="flex items-center gap-2">
                <button
                  aria-label="Search"
                  className="flex size-9 items-center justify-center rounded-full border border-border bg-white text-slate-soft transition-colors hover:bg-secondary"
                >
                  <Search size={15} />
                </button>
                <button
                  aria-label="Menu"
                  className="flex size-9 items-center justify-center rounded-full border border-border bg-white text-slate-soft transition-colors hover:bg-secondary"
                >
                  <Menu size={15} />
                </button>
              </div>
            </div>

            <div className="py-16 sm:py-20">
              <h1 className="max-w-[19ch] text-[clamp(2.2rem,4.6vw,3.6rem)] font-normal leading-[1] tracking-[-0.03em] text-navy">
                Seu sorriso
                <br />
                <span className="italic">nossa prioridade</span>
              </h1>
              <p className="mt-6 max-w-[42ch] text-sm leading-relaxed text-slate-soft">
                Na Sourie, seu sorriso é mais do que uma expressão: é o reflexo da sua confiança,
                saúde e bem-estar.
              </p>
              <a
                href="#appointment"
                className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-3 text-xs font-medium text-white transition-opacity hover:opacity-90"
              >
                Agendar Consulta
                <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <div className="flex w-max animate-marquee items-center gap-x-10 opacity-30">
                {[...brands, ...brands, ...brands, ...brands].map((b, i) => (
                  <span
                    key={`${b}-${i}`}
                    className="shrink-0 text-base font-semibold tracking-tight text-navy"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative m-4 min-h-[420px] overflow-hidden rounded-[22px] bg-secondary md:ml-0">
            <img
              src={heroImage}
              alt="Paciente sorrindo segurando uma escova de dentes azul na Clínica Sourie"
              width={1024}
              height={1280}
              className="absolute inset-0 size-full rounded-[22px] object-cover object-[65%_center]"
            />

            <a
              href="#contact"
              className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/95 px-4 py-2 text-xs font-medium text-navy shadow-sm backdrop-blur"
            >
              Contato
              <ArrowUpRight size={12} />
            </a>

            <figure className="absolute left-4 top-1/2 w-56 -translate-y-1/2 overflow-hidden rounded-2xl border border-white/60 bg-white/75 p-4 shadow-[0_18px_40px_-24px_rgba(16,24,32,0.5)] backdrop-blur-md">
              <div className="flex items-center gap-0.5 text-ink">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={11} fill="currentColor" strokeWidth={0} />
                ))}
                <span className="ml-1.5 text-[9px] font-medium text-slate-soft">5,0</span>
              </div>
              <blockquote className="mt-2 text-[11px] leading-relaxed text-navy">
                &ldquo;Atendimento impecável e muito acolhedor. Saí da Sourie com o sorriso que eu
                sempre quis.&rdquo;
              </blockquote>
              <figcaption className="mt-3 flex items-center justify-between border-t border-white/70 pt-3">
                <span className="text-[10px] font-medium text-navy">Marina Alves</span>
                <span className="text-[9px] text-slate-soft">Paciente desde 2023</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </main>
  );
}
