import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Sparkles, Clock } from 'lucide-react';
import fotoClinica from '../../assets/foto-clinica.png';
import Button from '../shared/Button';
import { WHATSAPP_LINK } from '../../utils/constants';

export default function ClinicEnvironment() {
  const heroCardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reveal mega hero card
    if (heroCardRef.current) {
      gsap.fromTo(heroCardRef.current, 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroCardRef.current,
            start: "top 95%",
          },
          onStart: () => {
            if (heroCardRef.current) heroCardRef.current.style.willChange = "opacity, transform";
          },
          onComplete: () => {
            if (heroCardRef.current) heroCardRef.current.style.willChange = "auto";
          }
        }
      );
    }
  }, []);

  return (
    <section id="ambiente" className="relative overflow-hidden pt-12 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

        {/* Mega Hero Card: Merged Text + Location */}
        <div
          ref={heroCardRef}
          className="lg:col-span-12 relative rounded-[40px] sm:rounded-[60px] lg:rounded-[80px] overflow-hidden group min-h-[600px] lg:min-h-[500px] shadow-xl shadow-teal-dark/5 px-8 sm:px-12 lg:px-20"
        >
          <img
            src={fotoClinica}
            alt="Fachada da clínica Souriê"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/60 to-navy-dark/30 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/30 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative z-10 h-full py-20 sm:py-24 lg:py-28 flex flex-col lg:flex-row justify-between items-center lg:items-center gap-12 lg:gap-20 max-w-page mx-auto w-full">
            
            {/* Left Side: Text Content */}
            <div className="max-w-2xl space-y-8 flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="w-14 h-14 rounded-2xl bg-cyan-light/10 backdrop-blur-md flex items-center justify-center text-cyan-light border border-white/10">
                <Sparkles size={28} />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight lg:leading-[1.1]">
                  A transformação do seu <br />
                  <span className="text-cyan-light italic font-serif">sorriso começa hoje.</span>
                </h2>
                <p className="text-lg lg:text-xl text-white/70 font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Agende agora sua avaliação e descubra como a tecnologia e o cuidado humano podem mudar sua vida.
                </p>
              </div>
            </div>

            {/* Right Side: Location & Hours */}
            <div className="w-full lg:w-auto bg-navy-dark/40 backdrop-blur-2xl rounded-[40px] p-8 sm:p-10 border border-white/10 space-y-8 shadow-2xl">
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
                    <span className="font-bold">08:00 — 19:00</span>
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
                  icon="none"
                  variant="white"
                  size="sm"
                  href="https://maps.app.goo.gl/..."
                  className="w-full shadow-xl justify-center !px-6 !py-4 !text-sm !font-bold"
                />
                <Button
                  text="Garantir minha avaliação"
                  icon="arrow-circle"
                  variant="white"
                  size="sm"
                  href={WHATSAPP_LINK}
                  className="w-full shadow-xl justify-center !px-6 !py-4 !text-sm !font-bold"
                />
                <span className="block text-center text-white/40 text-xs uppercase tracking-widest font-bold">
                  Resposta rápida via WhatsApp
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
