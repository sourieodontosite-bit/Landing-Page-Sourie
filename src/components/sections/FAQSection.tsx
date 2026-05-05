import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ChevronDown, HelpCircle } from 'lucide-react';
import SectionContainer from '../shared/SectionContainer';


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
    if (!sectionRef.current) return;

    // Header reveal
    if (headerRef.current) {
      gsap.fromTo(headerRef.current.children, 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power4.out",
          force3D: true,
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 100%",
            once: true
          }
        }
      );
    }

    // Entrance animation for FAQ items
    gsap.fromTo(".faq-item",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true
        }
      }
    );
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
    <SectionContainer 
      id="faq" 
      background="bg-gradient-to-b from-[#f1f5f6]/30 to-transparent"
      className="!py-8 md:!py-12 lg:!py-16"
      innerClassName="px-4 sm:px-6 lg:!px-6 xl:!px-0"
    >
      <div className="relative overflow-hidden bg-white rounded-[40px] md:rounded-[48px] lg:rounded-[80px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.04)] border border-black/[0.02] px-6 py-12 sm:p-12 lg:p-16 xl:p-20">
        {/* Background SVG Blobs & Minimalist Curves */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-80"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="blob-light-faq" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(180 50% 50%)" stopOpacity="0.15" />
              <stop offset="100%" stopColor="hsl(180 50% 50%)" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="blob-deep-faq" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(195 60% 40%)" stopOpacity="0.1" />
              <stop offset="100%" stopColor="hsl(195 60% 40%)" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="curve-grad-faq" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(37,97,111,0)" />
              <stop offset="50%" stopColor="rgba(37,97,111,0.25)" />
              <stop offset="100%" stopColor="rgba(37,97,111,0)" />
            </linearGradient>
          </defs>

          {/* Glowing Blobs */}
          <circle cx="15%" cy="20%" r="350" fill="url(#blob-light-faq)" />
          <circle cx="85%" cy="60%" r="450" fill="url(#blob-deep-faq)" />
          <circle cx="50%" cy="10%" r="300" fill="url(#blob-light-faq)" opacity="0.6" />

          {/* Elegant Accent Curves */}
          <g fill="none">
            <path d="M 1100,-100 C 1300,200 600,450 900,600" stroke="url(#curve-grad-faq)" strokeWidth="1.5" />
            <path d="M 1200,-100 C 1400,200 700,450 1000,600" stroke="rgba(37,97,111,0.15)" strokeWidth="1" />
            <path d="M 100,-50 C 400,100 250,450 0,600" stroke="url(#curve-grad-faq)" strokeWidth="1.5" />
            <path d="M 0,-50 C 300,100 150,450 -100,600" stroke="rgba(37,97,111,0.15)" strokeWidth="1" />
          </g>
        </svg>

        <div ref={sectionRef} className="relative z-10 mx-auto w-full max-w-[1280px]">
          <div ref={headerRef} className="text-center mb-10 md:mb-16 faq-header-content max-w-3xl mx-auto px-4 md:px-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-primary/10 text-teal-primary text-xs md:text-sm font-bold mb-4 md:mb-6">
              <HelpCircle size={16} className="w-4 h-4 md:w-5 md:h-5" />
              Dúvidas Comuns
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-teal-dark mb-4 md:mb-6">
              Perguntas Frequentes
            </h2>
            <p className="text-base md:text-lg text-text-primary/70">
              Tudo o que você precisa saber para começar sua jornada rumo ao sorriso perfeito.
            </p>
          </div>

          <div ref={gridRef} className="space-y-3 md:space-y-4 max-w-4xl mx-auto px-4 md:px-0">
            {FAQS.map((faq, index) => (
              <div 
                key={index}
                className={`faq-item group border rounded-2xl md:rounded-[32px] transition-all duration-300 ${
                  openIndex === index 
                  ? 'bg-white border-teal-primary/20 shadow-xl shadow-teal-dark/5' 
                  : 'bg-white/50 border-black/5 hover:border-teal-primary/20 hover:bg-white hover:shadow-md'
                }`}
              >
                <button
                  id={`faq-question-${index}`}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-5 py-5 md:px-8 md:py-6 flex items-center justify-between text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-primary focus-visible:ring-offset-2 rounded-2xl md:rounded-[32px]"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className={`text-base md:text-lg font-bold transition-colors ${openIndex === index ? 'text-teal-primary' : 'text-teal-dark group-hover:text-teal-primary/80'}`}>
                    {faq.q}
                  </span>
                  <div className={`shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index ? 'bg-teal-primary text-white rotate-180' : 'bg-teal-dark/5 text-teal-dark group-hover:bg-teal-primary/10 group-hover:text-teal-primary'
                  }`}>
                    <ChevronDown size={20} className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  ref={(el) => { accordionRefs.current[index] = el; }}
                  className="overflow-hidden h-0 opacity-0"
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  <div className="px-5 md:px-8 pb-5 md:pb-8 text-text-primary/70 leading-relaxed text-sm md:text-base border-t border-black/5 pt-4 md:pt-5 mx-5 md:mx-8">
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
