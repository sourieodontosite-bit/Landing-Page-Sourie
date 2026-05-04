import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SectionContainer from '../shared/SectionContainer';
import clinica1 from '../../assets/clinica-interna-1.webp';
import clinica2 from '../../assets/Tecnologia.webp';
import clinica3 from '../../assets/clinica-interna-3.webp';

const MILESTONES = [
  {
    year: 'A Origem',
    title: 'O sonho de transformar sorrisos.',
    description: 'A Souriê nasceu em Nova Era com a missão clara de elevar o padrão da odontologia regional, unindo o que há de mais moderno no mundo à nossa paixão pelo cuidado humano.',
    image: clinica1
  },
  {
    year: 'Inovação',
    title: 'Tecnologia que aproxima.',
    description: 'Fomos pioneiros na implementação de escaneamento digital e planejamentos 3D na região, permitindo que nossos pacientes visualizem o resultado final antes mesmo de começar.',
    image: clinica2
  },
  {
    year: 'Hoje',
    title: 'Referência em excelência.',
    description: 'Consolidamos nossa posição como a clínica de escolha para quem busca não apenas tratamento, mas uma experiência de cuidado completa, confortável e segura.',
    image: clinica3
  }
];

export default function AboutTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 1024px)",
      isMobile: "(max-width: 1023px)"
    }, (context) => {
      const { isMobile } = context.conditions as { isMobile: boolean };
      const items = gsap.utils.toArray<HTMLElement>(".timeline-item");
      
      items.forEach((item, i) => {
        const isEven = i % 2 === 0;
        const content = item.querySelector(".timeline-content");
        const image = item.querySelector(".timeline-image");

        // Content Animation
        gsap.fromTo(content,
          { 
            opacity: 0, 
            x: isMobile ? 0 : (isEven ? -50 : 50),
            y: isMobile ? 20 : 0
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            force3D: true,
            scrollTrigger: {
              trigger: item,
              start: isMobile ? "top 85%" : "top 70%",
              once: true
            }
          }
        );

        // Image Animation
        gsap.fromTo(image,
          { 
            opacity: 0, 
            scale: 0.95, 
            x: isMobile ? 0 : (isEven ? 50 : -50),
            y: isMobile ? 30 : 0
          },
          {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            duration: 1.5,
            ease: "power2.out",
            force3D: true,
            scrollTrigger: {
              trigger: item,
              start: isMobile ? "top 80%" : "top 70%",
              once: true
            }
          }
        );
      });
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <SectionContainer id="historia" className="py-12 lg:py-12 overflow-hidden">
      <div ref={containerRef} className="space-y-24 lg:space-y-32">
        {MILESTONES.map((item, index) => (
          <div 
            key={index}
            className={`timeline-item grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center ${
              index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className={`timeline-content flex flex-col items-center text-center lg:items-start lg:text-left space-y-8 ${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
              <div className="inline-block text-teal-primary font-serif italic text-3xl lg:text-4xl">
                {item.year}
              </div>
              <h3 className="text-4xl lg:text-6xl font-medium text-teal-dark leading-tight">
                {item.title}
              </h3>
              <p className="text-xl text-text-primary/70 font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
                {item.description}
              </p>
            </div>

            <div className={`timeline-image relative ${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
              <div className="aspect-[16/10] lg:aspect-square rounded-[60px] overflow-hidden shadow-2xl shadow-teal-dark/10">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
                  loading="lazy"
                />
              </div>
              {/* Decorative Floating Element */}
              <div className={`absolute -bottom-10 ${index % 2 === 0 ? '-right-10' : '-left-10'} w-40 h-40 bg-white rounded-full blur-[80px] opacity-60`} />
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
