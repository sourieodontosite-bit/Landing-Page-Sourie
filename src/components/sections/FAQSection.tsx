import { useState, useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ChevronDown, HelpCircle } from 'lucide-react';
import SectionContainer from '../shared/SectionContainer';
import { BUSINESS_HOURS } from '../../utils/constants';


const FAQS = [
  {
    q: 'Quanto tempo dura o tratamento e quais tecnologias são utilizadas?',
    a: 'O tempo é personalizado para cada paciente. Na avaliação inicial com nosso Scanner 3D iTero™, apresentamos com precisão todas as etapas, resultados esperados e a duração estimada.'
  },
  {
    q: 'Quais são as formas de pagamento disponíveis?',
    a: 'Facilitamos seu investimento: parcelamento em até 8x no cartão ou boleto, além de condições especiais para pagamento à vista no PIX ou débito.'
  },
  {
    q: 'Como agendar uma consulta e qual o horário de funcionamento?',
    a: `O agendamento é rápido via WhatsApp ou pelo telefone (31) 3961-4845.\n\n` +
      `• ${BUSINESS_HOURS.weekdays}\n` +
      `• ${BUSINESS_HOURS.saturday}`
  },
  {
    q: 'Como funciona o suporte pós-procedimento?',
    a: 'Você conta com acompanhamento direto via WhatsApp para orientações pós-operatórias e suporte prioritário sempre que precisar, sem custo adicional.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
    <SectionContainer
      id="faq"
      fullWidth={false}
      className="!py-12 sm:!py-16 lg:!py-20"
      background="bg-transparent"
    >
      <div ref={sectionRef} className="w-full">
        <div ref={headerRef} className="text-center mb-10 md:mb-16 faq-header-content w-full mx-auto">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-primary/8 border border-teal-primary/20 text-teal-primary text-xs md:text-sm font-bold mb-4 md:mb-6 reveal-item ${isVisible ? 'active' : ''}`}>
            <HelpCircle size={16} className="w-4 h-4 md:w-5 md:h-5" />
            Dúvidas Comuns
          </div>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-medium text-teal-dark mb-4 md:mb-6 reveal-item ${isVisible ? 'active' : ''}`} style={{ animationDelay: '100ms' }}>
            Perguntas Frequentes
          </h2>
          <p className={`text-base md:text-lg text-teal-dark/60 reveal-item ${isVisible ? 'active' : ''}`} style={{ animationDelay: '200ms' }}>
            Tudo o que você precisa saber para começar sua jornada rumo ao sorriso perfeito.
          </p>
        </div>

        <div ref={gridRef} className="space-y-3 md:space-y-4 w-full mx-auto" role="list" aria-label="Perguntas frequentes">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              role="listitem"
              className={`faq-item group border rounded-2xl md:rounded-[32px] transition-all duration-300 reveal-item ${isVisible ? 'active' : ''} ${openIndex === index
                ? 'bg-white border-teal-primary/30 shadow-lg shadow-teal-primary/5'
                : 'bg-white/80 border-teal-primary/10 hover:border-teal-primary/20 hover:bg-white'
                }`}
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <button
                id={`faq-question-${index}`}
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-5 py-5 md:px-8 md:py-6 flex items-center justify-between text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-primary/40 focus-visible:ring-offset-2 rounded-2xl md:rounded-[32px]"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                aria-label={`${openIndex === index ? 'Fechar' : 'Abrir'} resposta para: ${faq.q}`}
              >
                <span className={`text-base md:text-lg font-bold transition-colors ${openIndex === index ? 'text-teal-dark' : 'text-teal-dark/80 group-hover:text-teal-dark'}`}>
                  {faq.q}
                </span>
                <span
                  className={`shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-teal-primary text-white rotate-180' : 'bg-teal-primary/10 text-teal-primary group-hover:bg-teal-primary/20'
                    }`}
                  aria-hidden="true"
                >
                  <ChevronDown size={20} className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
                </span>
              </button>

              <div
                id={`faq-answer-${index}`}
                ref={(el) => { accordionRefs.current[index] = el; }}
                className="overflow-hidden h-0 opacity-0"
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <div className="px-5 md:px-8 pb-5 md:pb-8 text-teal-dark/80 leading-relaxed text-sm md:text-base border-t border-teal-primary/10 pt-4 md:pt-5 mx-5 md:mx-8 whitespace-pre-line font-medium">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
