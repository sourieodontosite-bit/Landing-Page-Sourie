import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Button from '../shared/Button';
import { OutlineToothIcon } from '../shared/Icons';
import { WHATSAPP_LINK } from '../../utils/constants';
import SectionContainer from '../shared/SectionContainer';

export default function ProceduresCTA() {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (cardRef.current) {
      gsap.fromTo(cardRef.current, 
        { opacity: 0, scale: 0.98, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 95%",
          }
        }
      );
    }
  }, []);

  return (
    <SectionContainer className="relative z-10" innerClassName="!pt-0 lg:!pt-0">
      <div 
        ref={cardRef}
        className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-teal-dark via-[#0d343a] to-navy-dark px-8 py-16 lg:py-20 lg:px-20"
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-light/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4" />

        {/* Static decorative elements for performance */}
        <div className="absolute -left-32 -top-32 pointer-events-none opacity-[0.03] hidden lg:block rotate-[10deg]">
          <OutlineToothIcon size={550} className="text-white" />
        </div>
        
        <div className="absolute -right-24 -bottom-32 pointer-events-none opacity-[0.03] hidden lg:block rotate-[140deg]">
          <OutlineToothIcon size={500} className="text-white" />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-6 leading-tight lg:leading-[1.1]">
              A transformação do seu <br />
              <span className="text-cyan-light italic font-serif">sorriso começa hoje.</span>
            </h2>
            <p className="text-lg lg:text-xl text-white/70 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Agende agora sua avaliação e descubra como a tecnologia e o cuidado humano podem mudar sua vida.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Button 
              text="Garantir minha avaliação" 
              icon="arrow-circle" 
              variant="white" 
              size="lg"
              href={WHATSAPP_LINK} 
              className="shadow-2xl shadow-black/20"
            />
            <span className="text-white/40 text-xs uppercase tracking-widest font-bold">
              Resposta rápida via WhatsApp
            </span>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
