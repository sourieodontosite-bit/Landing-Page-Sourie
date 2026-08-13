import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionContainer from '../shared/SectionContainer';
import clinica1 from '../../assets/clinica-interna-1.webp';
import clinica2 from '../../assets/Tecnologia.webp';
import clinica3 from '../../assets/foto-clinica.webp';

const MILESTONES = [
  {
    index: '01',
    year: 'A Origem',
    title: 'O sonho de transformar sorrisos.',
    description:
      'A Souriê nasceu em Nova Era com a missão clara de elevar o padrão da odontologia regional, unindo o que há de mais moderno no mundo à nossa paixão pelo cuidado humano.',
    image: clinica1,
  },
  {
    index: '02',
    year: 'Inovação',
    title: 'Tecnologia que aproxima.',
    description:
      'Fomos pioneiros na implementação de escaneamento digital e planejamentos 3D na região, permitindo que nossos pacientes visualizem o resultado final antes mesmo de começar.',
    image: clinica2,
  },
  {
    index: '03',
    year: 'Hoje',
    title: 'Referência em excelência.',
    description:
      'Consolidamos nossa posição como a clínica de escolha para quem busca não apenas tratamento, mas uma experiência de cuidado completa, confortável e segura.',
    image: clinica3,
  },
];

export default function AboutTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const cards = gsap.utils.toArray<HTMLElement>('.story-card');

      cards.forEach((card) => {
        const content = card.querySelector('.story-content');
        const image = card.querySelector('.story-image');
        const overline = card.querySelector('.story-overline');

        gsap.fromTo(
          overline,
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 82%',
              once: true,
            },
          }
        );

        gsap.fromTo(
          content,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power2.out',
            delay: 0.1,
            scrollTrigger: {
              trigger: card,
              start: 'top 82%',
              once: true,
            },
          }
        );

        gsap.fromTo(
          image,
          { opacity: 0, scale: 0.97, x: 20 },
          {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 1.0,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              once: true,
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <SectionContainer id="historia" className="py-16 lg:py-24 overflow-hidden">
      <div ref={containerRef} className="space-y-6 lg:space-y-8">
        {MILESTONES.map((item) => (
          <article
            key={item.index}
            className="story-card group relative w-full rounded-card bg-white border border-black/[0.05] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.05)] overflow-hidden transition-shadow duration-300 hover:shadow-[0_4px_8px_rgba(0,0,0,0.05),0_12px_32px_rgba(0,0,0,0.08)] h-[360px] lg:h-[420px]"
          >
            {/* Inner grid: text left, image right */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_500px] h-full">

              {/* Text side */}
              <div className="story-content flex flex-col justify-center gap-5 lg:gap-6 px-8 py-10 lg:px-14 lg:py-14">
                {/* Overline */}
                <div className="story-overline flex items-center gap-3">
                  <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-teal-primary/60">
                    {item.index}
                  </span>
                  <span className="h-px w-6 bg-teal-primary/30" />
                  <span className="font-serif italic text-teal-primary text-base lg:text-lg">
                    {item.year}
                  </span>
                </div>

                {/* Heading */}
                <h3 className="text-2xl lg:text-4xl xl:text-[2.6rem] font-medium text-teal-dark leading-[1.2] tracking-[-0.01em] max-w-[520px]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-text-primary/65 text-body-sm lg:text-body leading-relaxed max-w-[480px]">
                  {item.description}
                </p>
              </div>

              {/* Image side — always right */}
              <div className="story-image relative w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
