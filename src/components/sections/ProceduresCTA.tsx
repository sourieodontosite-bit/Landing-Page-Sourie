import { useRef, useEffect, useState } from 'react';
import { Sparkles, Clock, ArrowRight } from 'lucide-react';
import Button from '../shared/Button';
import { OutlineToothIcon } from '../shared/Icons';
import { WHATSAPP_LINK } from '../../utils/constants';
import SectionContainer from '../shared/SectionContainer';
import fotoClinica from '../../assets/clinica-externa.webp';

export default function ProceduresCTA() {
  const cardRef = useRef<HTMLDivElement>(null);
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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <SectionContainer 
      className="relative z-10" 
      innerClassName="!px-0 !pt-0 lg:!pt-0"
    >
      <div 
        ref={cardRef}
        className={`bg-gradient-to-br from-navy-dark via-navy-dark to-[#091E2A] rounded-[32px] md:rounded-[48px] p-8 sm:p-12 lg:p-20 text-white relative overflow-hidden group shadow-2xl transition-all duration-1000 ease-out reveal-item ${isVisible ? 'active' : ''} w-full max-w-[1200px] mx-auto`}
      >
        {/* Visual accent backdrop */}
        <div className="absolute -right-20 -bottom-20 opacity-10 group-hover:scale-105 transition-transform duration-1000 pointer-events-none">
          <OutlineToothIcon size={400} />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
          <div className="max-w-2xl space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mx-auto lg:mx-0">
              <Sparkles size={14} className="text-cyan-light animate-pulse" />
              <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">Atendimento de Excelência</span>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-4xl lg:text-[48px] font-medium leading-[1.15] -tracking-[0.025em] font-sans">
                A transformação do seu <br className="hidden sm:inline" />
                <span className="text-cyan-light italic font-serif">sorriso começa hoje.</span>
              </h2>
              <p className="text-cyan-light font-medium text-lg leading-relaxed font-sans">
                Sua saúde e autoestima merecem este cuidado.
              </p>
              <p className="text-white/60 text-base md:text-lg font-light max-w-xl mx-auto lg:mx-0 font-sans">
                Agende agora sua avaliação e descubra como a tecnologia e o cuidado humano podem mudar sua vida.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-auto bg-white/10 backdrop-blur-2xl rounded-[40px] p-8 sm:p-10 border border-white/10 space-y-8 shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-light animate-pulse shadow-[0_0_10px_rgba(221,248,255,0.8)]" />
                <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Onde estamos</span>
              </div>
              <p className="text-white text-xl leading-snug font-medium">
                Avenida Dr José Moreira, N° 414<br />
                Bairro Castelo, Nova Era-MG
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest">
                <Clock size={14} className="text-cyan-light" />
                <span>Horário de Funcionamento</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-2">
                <div className="flex justify-between items-center text-white/90 text-sm gap-8">
                  <span className="font-light">Segunda a Sexta</span>
                  <span className="font-bold">08:00 — 18:00</span>
                </div>
                <div className="flex justify-between items-center text-white/90 text-sm gap-8">
                  <span className="font-light">Sábado</span>
                  <span className="font-bold">08:00 — 12:00</span>
                </div>
              </div>
            </div>

            <div className="pt-2 space-y-3">
              <Button
                text="Ver no Maps"
                icon="arrow-circle"
                variant="white"
                size="sm"
                href="https://maps.app.goo.gl/..."
                className="w-full shadow-lg justify-between !text-sm"
              />
              <Button
                text="Garantir minha avaliação"
                icon="arrow-circle"
                variant="white"
                size="sm"
                href={WHATSAPP_LINK}
                className="w-full shadow-lg justify-between !text-sm"
              />
              <span className="block text-center text-white/40 text-xs uppercase tracking-widest font-bold">
                Resposta rápida via WhatsApp
              </span>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
