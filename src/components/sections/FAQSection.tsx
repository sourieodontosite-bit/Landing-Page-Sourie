import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, HelpCircle } from 'lucide-react';
import SectionContainer from '../shared/SectionContainer';

gsap.registerPlugin(ScrollTrigger);

const FAQS = [
  {
    q: 'Quanto tempo dura o tratamento?',
    a: 'Cada caso é único. Após o diagnóstico digital com nosso scanner 3D, conseguimos planejar cada etapa e prever com precisão o tempo total do seu tratamento.'
  },
  {
    q: 'A Souriê aceita convênios?',
    a: 'Sim! Trabalhamos com os principais planos para facilitar seu acesso: Unimed, Amil, Bradesco, Odontoprev, Porto Seguro, SulAmérica, Interodonto e MetLife. Auxiliamos também em processos de reembolso.'
  },
  {
    q: 'Quais tecnologias a clínica utiliza?',
    a: 'Utilizamos o Scanner iTero™ 5D (adeus moldagens!), Raio-X Digital (menor radiação), Câmeras Intraorais e Planejamento Digital do Sorriso (DSD) para resultados previsíveis.'
  },
  {
    q: 'Quais as formas de pagamento disponíveis?',
    a: 'Oferecemos total flexibilidade: parcelamento em até 12x no cartão de crédito, descontos exclusivos para pagamentos à vista (Pix/Dinheiro) e condições facilitadas para tratamentos ortodônticos.'
  },
  {
    q: 'O consultório tem acessibilidade?',
    a: 'Sim. Nossa clínica foi projetada com foco em acessibilidade universal, contando com rampas, portas largas e banheiros adaptados para garantir o conforto de todos os pacientes.'
  },
  {
    q: 'Como faço para agendar minha primeira consulta?',
    a: 'O agendamento é instantâneo via WhatsApp. Basta clicar nos botões espalhados pelo site ou nos chamar no (31) 3961-4845. Nossa equipe de recepção está pronta para te atender.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 1024px)",
      isMobile: "(max-width: 1023px)"
    }, (context) => {
      const { isMobile } = context.conditions as { isMobile: boolean };

      // Header reveal
      if (headerRef.current) {
        gsap.fromTo(headerRef.current.children, 
          { opacity: 0, y: isMobile ? 15 : 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power4.out",
            force3D: true,
            scrollTrigger: {
              trigger: headerRef.current,
              start: isMobile ? "top 100%" : "top 100%",
              once: true
            }
          }
        );
      }

      // Grid items reveal
      if (gridRef.current) {
        gsap.fromTo(gridRef.current.children, 
          { opacity: 0, y: isMobile ? 20 : 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.7,
            ease: "power3.out",
            force3D: true,
            scrollTrigger: {
              trigger: gridRef.current,
              start: isMobile ? "top 98%" : "top 95%",
              once: true
            }
          }
        );
      }
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  // Accordion animation logic
  useGSAP(() => {
    accordionRefs.current.forEach((el, index) => {
      if (el) {
        if (openIndex === index) {
          gsap.to(el, {
            height: "auto",
            opacity: 1,
            duration: 0.4,
            ease: "power2.inOut",
            overwrite: true
          });
        } else {
          gsap.to(el, {
            height: 0,
            opacity: 0,
            duration: 0.3,
            ease: "power2.inOut",
            overwrite: true
          });
        }
      }
    });
  }, { dependencies: [openIndex], scope: sectionRef });

  return (
    <SectionContainer id="faq" className="relative overflow-hidden bg-transparent">
      <div ref={sectionRef}>

        <div className="max-w-3xl mx-auto relative z-10">
          <div ref={headerRef} className="text-center mb-16 faq-header-content">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-primary/10 text-teal-primary text-sm font-bold mb-6">
              <HelpCircle size={16} />
              Dúvidas Comuns
            </div>
            <h2 className="text-4xl lg:text-5xl font-medium text-teal-dark mb-6">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-text-primary/70">
              Tudo o que você precisa saber para começar sua jornada rumo ao sorriso perfeito.
            </p>
          </div>

          <div ref={gridRef} className="space-y-4">
            {FAQS.map((faq, index) => (
              <div 
                key={index}
                className={`faq-item group border rounded-[32px] transition-all duration-300 ${
                  openIndex === index 
                  ? 'bg-white border-teal-primary/20 shadow-xl shadow-teal-dark/5' 
                  : 'bg-white/50 border-black/5 hover:border-teal-primary/20 hover:bg-white'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-teal-primary' : 'text-teal-dark'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index ? 'bg-teal-primary text-white rotate-180' : 'bg-teal-dark/5 text-teal-dark'
                  }`}>
                    <ChevronDown size={20} />
                  </div>
                </button>

                <div
                  ref={(el) => { accordionRefs.current[index] = el; }}
                  className="overflow-hidden h-0 opacity-0"
                >
                  <div className="px-8 pb-8 text-text-primary/70 leading-relaxed text-lg border-t border-black/5 pt-4 mx-8">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
