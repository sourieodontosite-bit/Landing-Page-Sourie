import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, ShieldCheck, Cpu, HeartHandshake } from 'lucide-react';
import SectionContainer from '../shared/SectionContainer';
import queSomosImg from '../../assets/images/clinica/historia-fundacao.webp';
import tecnologiaImg from '../../assets/images/clinica/scanner-3d-tecnologia.webp';
import clinicaImg from '../../assets/images/clinica/consultorio-principal.webp';

const REASONS = [
  {
    index: '01',
    badge: 'Corpo Clínico Integrado',
    title: 'Equipe especializada com olhar humanizado.',
    description:
      'Reunimos profissionais altamente capacitados nas principais especialidades odontológicas, garantindo diagnósticos precisos e tratamentos integrados em um só lugar.',
    image: queSomosImg,
    icon: ShieldCheck,
  },
  {
    index: '02',
    badge: 'Inovação & Previsibilidade',
    title: 'Tecnologia digital e planejamento 3D.',
    description:
      'Você acompanha cada etapa e visualiza o resultado final do seu tratamento antes mesmo de iniciá-lo, sem moldagens desconfortáveis.',
    image: tecnologiaImg,
    icon: Cpu,
  },
  {
    index: '03',
    badge: 'Ambiente & Acessibilidade',
    title: 'Ambiente acessível e pensado no seu conforto.',
    description:
      'Criamos uma infraestrutura acolhedora, moderna e totalmente acessível para transformar sua experiência odontológica. Atendimento pontual, biossegurança rigorosa e cuidado completo para você e sua família.',
    image: clinicaImg,
    icon: HeartHandshake,
  },
];

export default function AboutTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      const cards = gsap.utils.toArray<HTMLElement>('.story-card');

      cards.forEach((card) => {
        const content = card.querySelector('.story-content');
        const image = card.querySelector('.story-image');
        const overline = card.querySelector('.story-overline');

        gsap.fromTo(
          overline,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              once: true,
            },
          }
        );

        gsap.fromTo(
          content,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            delay: 0.08,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              once: true,
            },
          }
        );

        gsap.fromTo(
          image,
          { opacity: 0, scale: 0.98 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              once: true,
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <SectionContainer id="por-que-escolher" className="py-16 lg:py-24 overflow-visible">
      <div ref={containerRef} className="space-y-10 lg:space-y-14">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto space-y-4 px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-primary/10 border border-teal-primary/20 text-teal-dark text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-teal-primary" />
            Por Que a Souriê
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-teal-dark leading-tight tracking-tight">
            Por que escolher a nossa clínica para{' '}
            <span className="font-serif italic text-teal-primary">cuidar de você?</span>
          </h2>
          <p className="text-text-primary/70 text-body-sm lg:text-body leading-relaxed max-w-2xl mx-auto">
            Unimos o mais alto padrão técnico, tecnologias odontológicas de última geração e um atendimento
            acolhedor para transformar o seu sorriso com segurança e previsibilidade.
          </p>
        </div>

        {/* Reasons Cards */}
        <div className="space-y-5 sm:space-y-6 lg:space-y-8">
          {REASONS.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.index}
                className="story-card group relative w-full rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] bg-white border border-black/[0.07] shadow-[0_4px_20px_rgba(0,0,0,0.06),0_12px_32px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1),0_16px_40px_rgba(0,0,0,0.08)] flex flex-col lg:grid lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_420px] lg:h-[280px] xl:h-[290px]"
              >
                {/* Text side */}
                <div className="story-content flex flex-col justify-center gap-2.5 sm:gap-3.5 lg:gap-4 p-5 sm:p-7 lg:px-10 lg:py-6 bg-white">
                  {/* Overline with Icon & Badge */}
                  <div className="story-overline flex items-center gap-2.5">
                    <span className="text-[10.5px] font-bold tracking-[0.08em] uppercase text-teal-primary/80 bg-teal-primary/10 px-2.5 py-0.5 rounded-full">
                      {item.index}
                    </span>
                    <span className="h-px w-4 bg-teal-primary/30" />
                    <div className="flex items-center gap-1.5 text-teal-primary font-medium text-xs sm:text-sm">
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span>{item.badge}</span>
                    </div>
                  </div>

                  {/* Heading */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-[1.65rem] font-medium text-teal-dark leading-snug tracking-[-0.01em] max-w-[500px]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-primary/70 text-xs sm:text-sm lg:text-[14.5px] leading-relaxed max-w-[480px]">
                    {item.description}
                  </p>
                </div>

                {/* Image side */}
                <div className="story-image relative w-full h-44 sm:h-52 lg:h-full overflow-hidden bg-teal-light/20">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
