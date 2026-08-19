import React, { useRef, useEffect, useState } from 'react';
import SectionContainer from '../shared/SectionContainer';
import { TEAM_MEMBERS } from '../../utils/constants';
import { Link } from 'react-router-dom';

import brenoImg from '../../assets/breno.webp';
import estefaniaImg from '../../assets/estefania.webp';
import victorImg from '../../assets/victor.webp';
import beatrizImg from '../../assets/beatriz.webp';
import taynaImg from '../../assets/tayna.webp';
import juniaImg from '../../assets/dra.junia.webp';
import mariaEduardaImg from '../../assets/nutri_mariana.webp';
import fallbackImg from '../../assets/equipe-sem-fundo.webp';
import sourieVideo from '../../assets/vídeo-sourie.mp4';

const memberImages: Record<string, string> = {
  'dr-breno': brenoImg,
  'dra-estefania': estefaniaImg,
  'dr-victor': victorImg,
  'dra-beatriz': beatrizImg,
  'dra-tayna': taynaImg,
  'dra-junia': juniaImg,
  'nutri-maria-eduarda': mariaEduardaImg,
};

const SHORT_NAMES: Record<string, string> = {
  'dr-victor': 'Dr. Victor Melo',
  'dr-breno': 'Dr. Breno Lage',
  'dra-estefania': 'Dra. Estefânia Alves',
  'dra-beatriz': 'Beatriz Guimarães',
  'dra-tayna': 'Tayná Delfim',
  'dra-junia': 'Dra. Junia Martins',
  'nutri-maria-eduarda': 'Maria Eduarda Lage',
};

const TeamMemberCard = React.memo(({ member }: { member: typeof TEAM_MEMBERS[0] }) => (
  <Link
    to={`/equipe/${member.slug}`}
    className="team-card group relative block h-full w-full outline-none focus:outline-none border-0"
  >
    {/* ===== MOBILE LAYOUT: card em tamanho normal, 1 por linha com design refinado ===== */}
    <div className="lg:hidden w-full">
      <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-[28px] sm:rounded-[32px] bg-teal-dark shadow-xl border-0 border-none outline-none group-active:scale-[0.99] transition-all duration-300">
        <img
          src={memberImages[member.slug] || fallbackImg}
          alt={`${member.name} - ${member.role}`}
          className={`w-full h-full object-cover transition-all duration-1000 ease-out ${
            member.slug === 'dr-breno'
              ? 'scale-105 group-hover:scale-100'
              : 'scale-110 group-hover:scale-105'
          }`}
          loading="lazy"
        />

        {/* Gradiente refinado na base para garantir legibilidade perfeita */}
        <div
          className="absolute inset-x-0 bottom-0 h-[75%] pointer-events-none"
          style={{ background: 'linear-gradient(180deg, rgba(18,53,59,0) 0%, rgba(18,53,59,0.2) 25%, rgba(18,53,59,0.75) 60%, rgba(18,53,59,0.96) 100%)' }}
          aria-hidden="true"
        />

        {/* Conteúdo com tipografia generosa e elegante */}
        <div className="absolute inset-x-5 bottom-5 z-10">
          <div className="space-y-2">
            <span className="inline-block text-white/90 font-bold uppercase tracking-[0.18em] text-[10.5px]">
              {member.role}
            </span>
            <div className="flex items-end justify-between gap-3">
              <h3 className="text-2xl sm:text-3xl font-medium text-white leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                {SHORT_NAMES[member.slug] || member.name}
              </h3>
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border-0 text-white shadow-md group-hover:bg-white group-hover:text-teal-dark transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {member.specialties.map((spec) => (
                <span
                  key={spec}
                  className="px-3 py-1 bg-white/20 backdrop-blur-md text-white rounded-full text-xs font-medium border-0 shadow-sm"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ===== DESKTOP LAYOUT: card com conteúdo DENTRO - UI minimalista moderna ===== */}
    <div className="hidden lg:block w-full">
      <div className="relative aspect-[3/4] overflow-hidden rounded-[32px] bg-stone-100 shadow-xl group-hover:shadow-2xl transition-all duration-700">
        <img
          src={memberImages[member.slug] || fallbackImg}
          alt={`${member.name} - ${member.role}`}
          className={`w-full h-full object-cover transition-all duration-1000 ease-out ${
            member.slug === 'dr-breno'
              ? 'scale-105 group-hover:scale-100'
              : 'scale-115 group-hover:scale-110'
          }`}
          loading="lazy"
        />

        {/* Gradiente um pouco mais alto e denso (70% do card) */}
        <div
          className="absolute inset-x-0 bottom-0 h-[78%] pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-95"
          style={{ background: 'linear-gradient(180deg, rgba(23,61,69,0) 0%, rgba(18,53,59,0.18) 25%, rgba(18,53,59,0.54) 58%, rgba(18,53,59,0.82) 100%)' }}
          aria-hidden="true"
        />

        {/* CONTEÚDO DENTRO do card - sem container escuro, só sobreposição de gradiente */}
        <div className="absolute inset-x-3 bottom-3 z-10">
          <div className="space-y-2.5 px-1.5 pb-1">
            <div className="flex items-center justify-between gap-3">
              <span className="inline-block text-white/95 font-bold uppercase tracking-[0.2em] text-[9.5px]">
                {member.role}
              </span>
            </div>

            <div className="flex items-end justify-between gap-2 pt-0.5">
              <h3 className="text-2xl font-medium text-white leading-tight line-clamp-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
                {SHORT_NAMES[member.slug] || member.name}
              </h3>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {member.specialties.slice(0, 2).map((spec) => (
                <span
                  key={spec}
                  className="px-2.5 py-1 bg-white/15 backdrop-blur-sm text-white/95 rounded-full text-[10.5px] font-medium tracking-wide border border-white/15"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </Link>
));

TeamMemberCard.displayName = 'TeamMemberCard';

export default function TeamSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [videoOpen, setVideoOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024;
    }
    return false;
  });

  const VIDEO_SRC = sourieVideo;

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)');
    const updateMatch = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsDesktop(e.matches);
    };
    updateMatch(media);
    media.addEventListener('change', updateMatch);
    return () => media.removeEventListener('change', updateMatch);
  }, []);

  return (
    <SectionContainer id="equipe" className="overflow-visible">
      <div className="mb-10 md:mb-16">
        <div className="max-w-3xl space-y-4 text-left">
          <span className="text-teal-primary font-bold uppercase tracking-[0.3em] text-[10px]">Corpo Clínico</span>
          <h2 className="text-3xl lg:text-7xl font-medium text-teal-dark tracking-tight leading-[0.9]">
            Excelência Clínica <br />
            <span className="italic font-serif text-teal-primary">& Especialização.</span>
          </h2>
        </div>
      </div>

      {/* Wrapper único com a ref do IntersectionObserver */}
      <div ref={containerRef}>
        {/* ==========================
             MOBILE VIDEO HIGHLIGHT (Topo no Mobile)
             ========================== */}
        <div className="lg:hidden mb-8">
          <div
            className="group relative w-full aspect-video overflow-hidden rounded-[24px] border border-[#447583]/20 bg-[#447583] shadow-xl text-left"
          >
            {videoOpen && !isDesktop ? (
              <div className="relative w-full h-full bg-black">
                <button
                  type="button"
                  onClick={() => setVideoOpen(false)}
                  className="absolute top-3 right-3 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                  aria-label="Fechar vídeo"
                >
                  ✕
                </button>
                <video
                  ref={(el) => {
                    if (el) el.volume = 0.2;
                  }}
                  src={VIDEO_SRC}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                className="relative flex h-full w-full flex-col justify-between p-5 hover:brightness-105 transition-all text-left cursor-pointer"
              >
                <div className="absolute inset-0 opacity-70" style={{ background: 'radial-gradient(circle at top right, rgba(255,255,255,0.18), transparent 42%)' }} />
                <div className="pointer-events-none absolute -right-16 top-[65%] z-0 -translate-y-1/2 overflow-hidden text-white/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="h-[16rem] w-[16rem]"
                    aria-hidden="true"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      fill="currentColor"
                      d="M5.706 5.89C6.429 5.022 7.507 4.5 9 4.5c.907 0 1.749.267 2.454.727a4.5 4.5 0 0 1 1.74 2.137a1 1 0 1 0 1.862-.728a6.5 6.5 0 0 0-1.224-1.983q.56-.151 1.168-.153c1.493 0 2.57.522 3.294 1.39c.744.893 1.206 2.264 1.206 4.11c0 2.903-.486 5.385-1.23 7.102c-.785 1.812-1.667 2.398-2.27 2.398c-.15 0-.275-.035-.461-.358c-.226-.392-.385-.96-.592-1.72c-.174-.639-.39-1.433-.752-2.062C13.787 14.652 13.1 14 12 14s-1.787.652-2.195 1.36c-.362.63-.578 1.423-.752 2.062c-.207.76-.366 1.328-.592 1.72c-.186.323-.311.358-.461.358c-.603 0-1.485-.586-2.27-2.398c-.744-1.717-1.23-4.2-1.23-7.102c0-1.846.462-3.217 1.206-4.11M12 3.232A6.5 6.5 0 0 0 9 2.5c-2.007 0-3.68.728-4.83 2.11C3.037 5.967 2.5 7.846 2.5 10c0 3.097.514 5.865 1.395 7.898C4.735 19.836 6.103 21.5 8 21.5c1.1 0 1.787-.652 2.195-1.36c.374-.65.593-1.477.77-2.127c.198-.726.354-1.274.574-1.655c.186-.323.311-.358.461-.358s.275.035.461.358c.22.381.376.93.574 1.655c.177.65.396 1.476.77 2.127c.408.708 1.095 1.36 2.195 1.36c1.897 0 3.265-1.664 4.105-3.602c.88-2.033 1.395-4.8 1.395-7.898c0-2.154-.538-4.033-1.67-5.39C18.68 3.228 17.008 2.5 15 2.5c-1.08 0-2.102.264-3 .732"
                    />
                  </svg>
                </div>
                
                <div className="relative z-10 flex h-full w-full flex-col justify-between text-left">
                  <div className="w-full space-y-1">
                    <span className="block text-[9px] font-bold uppercase tracking-[0.28em] text-white/80">
                      Vídeo Institucional
                    </span>
                    <h3 className="text-lg font-medium text-white leading-tight">
                      Conheça a Souriê
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="relative flex-shrink-0">
                      <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" style={{ animationDuration: '2s' }} />
                      <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md">
                        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 translate-x-0.5" aria-hidden="true">
                          <path d="M6 4l14 8-14 8V4z" fill="#0a4f5e" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/90">
                      Assistir vídeo
                    </span>
                  </div>
                </div>
              </button>
            )}
          </div>
        </div>

        {/* ==========================
             MOBILE STACKING CARDS (1 por linha, empilhando sobrepondo ao scroll)
             ========================== */}
        <div className="lg:hidden relative pb-12">
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={member.slug}
              className="sticky w-full mb-6 last:mb-0"
              style={{
                top: `calc(80px + ${index * 16}px)`,
                zIndex: index + 1,
              }}
            >
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>

        {/* ==========================
             DESKTOP GRID - 4 cols × 2 rows
             Layout referência "Our Team"
             [1,1] Card texto "Nossa Equipe" | [1,2] Victor   | [1,3] Estefânia | [1,4] Breno
             [2,1] Beatriz                 | [2,2] Tayná    | [2,3] Junia     | [2,4] Maria Eduarda (Join the Team)
             ========================== */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 xl:gap-8">
          {TEAM_MEMBERS.map((member) => (
            <TeamMemberCard
              key={member.slug}
              member={member}
            />
          ))}

          {/* CTA card — vídeo embutido */}
          <div
            className="group relative flex h-full min-h-[420px] w-full overflow-hidden rounded-[32px] border border-[#447583]/20 bg-[#447583] shadow-xl transition-all duration-300 lg:col-span-2 text-left"
          >
            {videoOpen && isDesktop ? (
              <div className="relative w-full h-full bg-black">
                <button
                  type="button"
                  onClick={() => setVideoOpen(false)}
                  className="absolute top-4 right-4 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                  aria-label="Fechar vídeo"
                >
                  ✕
                </button>
                <video
                  ref={(el) => {
                    if (el) el.volume = 0.2;
                  }}
                  src={VIDEO_SRC}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                className="relative flex h-full w-full flex-col justify-between p-6 hover:brightness-105 transition-all text-left cursor-pointer"
              >
                <div className="absolute inset-0 opacity-70" style={{ background: 'radial-gradient(circle at top right, rgba(255,255,255,0.18), transparent 42%)' }} />
                <div className="pointer-events-none absolute -right-24 top-[72%] z-0 -translate-y-1/2 overflow-hidden text-white/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="h-[20rem] w-[20rem] sm:h-[22rem] sm:w-[22rem] xl:h-[29rem] xl:w-[29rem]"
                    aria-hidden="true"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      fill="currentColor"
                      d="M5.706 5.89C6.429 5.022 7.507 4.5 9 4.5c.907 0 1.749.267 2.454.727a4.5 4.5 0 0 1 1.74 2.137a1 1 0 1 0 1.862-.728a6.5 6.5 0 0 0-1.224-1.983q.56-.151 1.168-.153c1.493 0 2.57.522 3.294 1.39c.744.893 1.206 2.264 1.206 4.11c0 2.903-.486 5.385-1.23 7.102c-.785 1.812-1.667 2.398-2.27 2.398c-.15 0-.275-.035-.461-.358c-.226-.392-.385-.96-.592-1.72c-.174-.639-.39-1.433-.752-2.062C13.787 14.652 13.1 14 12 14s-1.787.652-2.195 1.36c-.362.63-.578 1.423-.752 2.062c-.207.76-.366 1.328-.592 1.72c-.186.323-.311.358-.461.358c-.603 0-1.485-.586-2.27-2.398c-.744-1.717-1.23-4.2-1.23-7.102c0-1.846.462-3.217 1.206-4.11M12 3.232A6.5 6.5 0 0 0 9 2.5c-2.007 0-3.68.728-4.83 2.11C3.037 5.967 2.5 7.846 2.5 10c0 3.097.514 5.865 1.395 7.898C4.735 19.836 6.103 21.5 8 21.5c1.1 0 1.787-.652 2.195-1.36c.374-.65.593-1.477.77-2.127c.198-.726.354-1.274.574-1.655c.186-.323.311-.358.461-.358s.275.035.461.358c.22.381.376.93.574 1.655c.177.65.396 1.476.77 2.127c.408.708 1.095 1.36 2.195 1.36c1.897 0 3.265-1.664 4.105-3.602c.88-2.033 1.395-4.8 1.395-7.898c0-2.154-.538-4.033-1.67-5.39C18.68 3.228 17.008 2.5 15 2.5c-1.08 0-2.102.264-3 .732"
                    />
                  </svg>
                </div>

                <div className="relative z-10 flex h-full w-full flex-col justify-between text-left">
                  <div className="w-full space-y-4">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.28em] text-white/80">
                      Souriê
                    </span>
                    <h3 className="max-w-[12ch] text-[2.2rem] leading-[0.95] text-white font-medium tracking-[-0.02em] xl:text-[2.6rem] xl:tracking-[-0.03em]">
                      Saúde e atenção de alta qualidade.
                    </h3>
                  </div>

                  <div className="w-full space-y-5">
                    <p className="max-w-[26ch] text-sm leading-relaxed text-white/80 xl:text-[0.95rem]">
                      Conheça a clínica, a abordagem e o ambiente que cuidam de cada detalhe da sua experiência.
                    </p>

                    {/* Play button */}
                    <div className="flex items-center gap-4">
                      <div className="relative flex-shrink-0">
                        {/* Pulsing ring */}
                        <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" style={{ animationDuration: '2s' }} />
                        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 translate-x-0.5" aria-hidden="true">
                            <path d="M6 4l14 8-14 8V4z" fill="#0a4f5e" />
                          </svg>
                        </div>
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/90">
                        Assistir vídeo
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
