import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SectionContainer from '../shared/SectionContainer';
import { TEAM_MEMBERS } from '../../utils/constants';
import { ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from '../shared/Icons';
import Button from '../shared/Button';
import { Link } from 'react-router-dom';

import brenoImg from '../../assets/breno.webp';
import estefaniaImg from '../../assets/estefania.webp';
import victorImg from '../../assets/victor.webp';

const memberImages: Record<string, string> = {
  'dr-breno': brenoImg,
  'dra-estefania': estefaniaImg,
  'dr-victor': victorImg,
};


export default function TeamSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Entrance animation for ALL devices
    gsap.fromTo(".team-card",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true
        }
      }
    );
  }, { scope: containerRef });

  return (
    <SectionContainer id="equipe" className="overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-16 md:mb-20 gap-8">
        <div className="max-w-2xl space-y-6 flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="text-teal-primary font-bold uppercase tracking-[0.3em] text-[10px]">Corpo Clínico</span>
          <h2 className="text-4xl lg:text-7xl font-medium text-teal-dark tracking-tight leading-[0.9]">
            Excelência Clínica <br />
            <span className="italic font-serif text-teal-primary">& Especialização.</span>
          </h2>
        </div>
        <p className="text-xl text-text-primary/70 font-light max-w-sm text-center lg:text-right leading-relaxed">
          Nossa equipe é composta por especialistas dedicados a oferecer o mais alto padrão de cuidado odontológico.
        </p>
      </div>

      <div 
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-16"
      >
        {TEAM_MEMBERS.map((member) => (
          <Link 
            key={member.slug}
            to={`/equipe/${member.slug}`}
            className="team-card group relative flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0 bg-white md:bg-transparent p-3 md:p-0 rounded-[32px] md:rounded-none border border-black/5 md:border-transparent shadow-sm md:shadow-none"
          >
            {/* Image Container with Refined Frame */}
            <div className="relative shrink-0 w-[110px] h-[140px] sm:w-[140px] sm:h-[180px] md:w-full md:h-auto md:aspect-[3/4] overflow-hidden rounded-[24px] md:rounded-[60px] md:mb-8 bg-stone-100 shadow-md md:shadow-xl group-hover:shadow-2xl transition-all duration-700">
              <img 
                src={memberImages[member.slug]} 
                alt={member.name}
                className="w-full h-full object-cover scale-110 group-hover:scale-105 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/40 via-transparent to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
              
              {/* Floating Action Button */}
              <div className="absolute top-3 right-3 md:top-8 md:right-8 w-8 h-8 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500">
                <ArrowUpRight className="w-4 h-4 md:w-6 md:h-6" />
              </div>
            </div>

            {/* Info with Refined Hierarchy */}
            <div className="space-y-1.5 md:space-y-4 px-1 md:px-4 flex-1">
              <div className="flex items-center gap-2 md:gap-4">
                <div className="w-4 md:w-10 h-px bg-teal-primary/30 group-hover:w-8 md:group-hover:w-16 transition-all duration-500" />
                <span className="text-teal-primary font-bold uppercase tracking-widest text-[9px] md:text-[11px]">
                  {member.role}
                </span>
              </div>
              <div className="flex items-start md:items-center justify-between gap-2">
                <h3 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-medium text-teal-dark group-hover:text-teal-primary transition-colors duration-500 leading-tight">
                  {member.name}
                </h3>
                <a 
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-full bg-teal-primary/10 flex items-center justify-center text-teal-primary hover:bg-teal-primary hover:text-white transition-all duration-300 active:scale-90 before:content-[''] before:absolute before:-inset-2 md:before:inset-0"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`Acessar Instagram de ${member.name}`}
                >
                  <InstagramIcon size={18} className="md:w-[22px] md:h-[22px]" />
                </a>
              </div>
              <p className="text-text-primary text-[13px] md:text-base font-light opacity-80 line-clamp-3 md:line-clamp-2 leading-relaxed">
                {member.bio}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 flex justify-center w-full">
        <Button 
          text="Conheça nossa clínica e história" 
          href="/sobre" 
          variant="primary" 
          size="lg" 
          icon="arrow-circle" 
        />
      </div>
    </SectionContainer>
  );
}
