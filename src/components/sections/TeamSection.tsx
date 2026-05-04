import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionContainer from '../shared/SectionContainer';
import { TEAM_MEMBERS } from '../../utils/constants';
import { ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from '../shared/Icons';
import Button from '../shared/Button';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function TeamSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      if (containerRef.current) {
        gsap.fromTo(".team-card-premium",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
              once: true,
            },
            onStart: () => {
              gsap.set(".team-card-premium", { willChange: "opacity, transform" });
            },
            onComplete: () => {
              gsap.set(".team-card-premium", { willChange: "auto" });
            }
          }
        );
      }
    });

    return () => mm.revert();
  }, []);

  return (
    <SectionContainer id="equipe" className="py-12 lg:py-16 overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-20 gap-8">
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16"
      >
        {TEAM_MEMBERS.map((member) => (
          <Link 
            key={member.slug}
            to={`/equipe/${member.slug}`}
            className="team-card-premium group relative block"
          >
            {/* Image Container with Refined Frame */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-[60px] mb-8 bg-stone-100 shadow-xl group-hover:shadow-2xl transition-all duration-700">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/40 via-transparent to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
              
              {/* Floating Action Button */}
              <div className="absolute top-8 right-8 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500">
                <ArrowUpRight size={24} />
              </div>
            </div>

            {/* Info with Refined Hierarchy */}
            <div className="space-y-4 px-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-px bg-teal-primary/30 group-hover:w-16 transition-all duration-500" />
                <span className="text-teal-primary font-bold uppercase tracking-widest text-[11px]">
                  {member.role}
                </span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-3xl lg:text-4xl font-medium text-teal-dark group-hover:text-teal-primary transition-colors duration-500">
                  {member.name}
                </h3>
                <a 
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-teal-primary/10 flex items-center justify-center text-teal-primary hover:bg-teal-primary hover:text-white transition-all duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <InstagramIcon size={20} />
                </a>
              </div>
              <p className="text-text-primary font-light opacity-80 line-clamp-2 leading-relaxed">
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
