import React, { useRef, useEffect, useState } from 'react';
import SectionContainer from '../shared/SectionContainer';
import { TEAM_MEMBERS } from '../../utils/constants';
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

const TeamMemberCard = React.memo(({ member, index, isVisible }: { member: typeof TEAM_MEMBERS[0], index: number, isVisible: boolean }) => (
  <div 
    className={`team-card group relative w-full max-w-[340px] aspect-[4/7.2] rounded-[42px] bg-white/10 backdrop-blur-[2px] p-2 overflow-hidden shadow-card hover:shadow-2xl transition-all duration-500 border border-white/20 reveal-item ${isVisible ? 'active' : ''}`}
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="relative w-full h-full rounded-[32px] sm:rounded-[40px] overflow-hidden">
      <img
        src={memberImages[member.slug]}
        alt={`${member.name} - ${member.role}`}
        className={`w-full h-full object-cover object-top transition-transform duration-1000 ease-out ${
          member.slug === 'dr-breno' ? 'scale-100 group-hover:scale-105' : 'scale-110 group-hover:scale-115'
        }`}
        loading="lazy"
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/90 via-teal-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />

      {/* Glass Box Container */}
      <div className="absolute bottom-4 left-4 right-4 bg-teal-dark/70 backdrop-blur-xl border border-white/10 rounded-[28px] p-5 md:p-6 flex flex-col gap-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h3 className="text-white text-lg sm:text-xl font-bold leading-tight">{member.name}</h3>
            <p className="text-cyan-light text-[10px] font-bold uppercase tracking-[0.2em]">{member.role}</p>
          </div>
          <a 
            href={member.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-teal-primary hover:scale-110 transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
            aria-label={`Acessar Instagram de ${member.name}`}
          >
            <InstagramIcon size={18} />
          </a>
        </div>

        {/* Specialties Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10 min-h-[82px] items-start content-start">
          {member.specialties.map((spec) => (
            <span 
              key={spec}
              className="flex-grow px-2.5 py-1 bg-white/10 text-white/90 rounded-full text-[11px] font-medium tracking-wide border border-white/5 text-center leading-tight"
            >
              {spec}
            </span>
          ))}
        </div>

        {/* View Details Button */}
        <Link 
          to={`/equipe/${member.slug}`}
          className="mt-2 w-full py-3 bg-white/10 border border-white/10 rounded-2xl text-center text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-teal-primary hover:border-teal-primary/50 transition-all duration-300 block"
        >
          Ver Detalhes
        </Link>
      </div>
    </div>
  </div>
));

TeamMemberCard.displayName = 'TeamMemberCard';

export default function TeamSection() {
  const containerRef = useRef<HTMLDivElement>(null);
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

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <SectionContainer id="equipe" className="overflow-hidden">
      {/* Original Header */}
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
        className="flex flex-wrap items-center justify-center gap-8 lg:gap-12"
      >
        {TEAM_MEMBERS.map((member, index) => (
          <TeamMemberCard 
            key={member.slug} 
            member={member} 
            index={index} 
            isVisible={isVisible} 
          />
        ))}
      </div>

      {/* Original Footer Button */}
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
