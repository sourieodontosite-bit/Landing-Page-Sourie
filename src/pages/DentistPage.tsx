import { useParams, Navigate, Link } from 'react-router-dom';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { TEAM_MEMBERS, WHATSAPP_LINK } from '../utils/constants';
import { MessageCircle, ArrowLeft } from 'lucide-react';
import SectionContainer from '../components/shared/SectionContainer';
import SEO from '../components/shared/SEO';
import Button from '../components/shared/Button';
import { OutlineToothIcon } from '../components/shared/Icons';

import brenoImg from '../assets/breno.png';
import estefaniaImg from '../assets/estefania.png';
import victorImg from '../assets/victor.png';

const teamImages: Record<string, string> = {
  'dr-breno': brenoImg,
  'dra-estefania': estefaniaImg,
  'dr-victor': victorImg,
};

export default function DentistPage() {
  const { slug } = useParams<{ slug: string }>();
  const member = TEAM_MEMBERS.find((m) => m.slug === slug);
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power4.out", duration: 1 }
    });

    tl.fromTo(".back-button",
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.8 }
    )
      .fromTo(".profile-image-container",
        { opacity: 0, scale: 0.95, filter: "blur(10px)" },
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.5 },
        "-=0.5"
      )
      .fromTo(".profile-content-container > *",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.12 },
        "-=1.2"
      )
      .fromTo(".cta-card-container",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: ".cta-card-container",
            start: "top 90%"
          }
        },
        "-=0.6"
      );
  }, { scope: pageRef });

  if (!member) {
    return <Navigate to="/" replace />;
  }

  const imageSrc = teamImages[member.slug];
  const [firstName, ...lastNameParts] = member.name.split(' ');
  const lastName = lastNameParts.join(' ');

  return (
    <div ref={pageRef} className="flex flex-col relative overflow-hidden">
      <SEO
        title={`${member.name} | ${member.role} em Nova Era`}
        description={`${member.name} é ${member.role} na Souriê Odontologia. Especialista em ${member.specialties.join(', ')}. Conheça sua trajetória e agende uma consulta.`}
      />

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[50%] h-[500px] bg-teal-primary/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute top-[20%] -left-[10%] w-[40%] h-[600px] bg-cyan-light/10 blur-[150px] rounded-full -z-10 pointer-events-none" />

      {/* Mobile Header (Immersive) */}
      <div className="lg:hidden relative h-[65vh] w-full overflow-hidden">
        <img
          src={imageSrc}
          alt={member.name}
          className="w-full h-full object-cover profile-image-container"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        <div className="absolute bottom-6 left-4 right-4 profile-content-container">
          <div className="bg-white/95 backdrop-blur-2xl rounded-[32px] p-6 shadow-2xl border border-white/50">
            <Link to="/#equipe" className="inline-flex items-center gap-2 text-teal-primary hover:text-teal-dark transition-colors font-bold text-[10px] tracking-widest uppercase mb-4 bg-teal-primary/5 px-3 py-1.5 rounded-full">
              <ArrowLeft size={14} /> Voltar para Equipe
            </Link>
            <div className="space-y-2">
              <span className="block text-teal-primary font-bold text-[10px] tracking-[0.3em] uppercase opacity-80">{member.crm}</span>
              <h1 className="text-4xl font-medium text-teal-dark leading-tight tracking-tight">{member.name}</h1>
              <p className="text-lg text-text-primary/70 font-medium">{member.role}</p>
            </div>
          </div>
        </div>
      </div>

      <SectionContainer className="pt-12 lg:pt-32 pb-20">
        {/* Desktop Header Navigation */}
        <div className="hidden lg:block mb-12 back-button">
          <Link to="/#equipe" className="inline-flex items-center gap-4 text-text-primary/40 hover:text-teal-primary transition-all duration-300 group">
            <div className="w-12 h-12 rounded-full border border-teal-primary/10 flex items-center justify-center group-hover:bg-teal-primary group-hover:text-white group-hover:border-teal-primary transition-all duration-500 shadow-sm">
              <ArrowLeft size={20} />
            </div>
            <span className="font-bold uppercase tracking-widest text-[11px]">Voltar para a Equipe</span>
          </Link>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left Column: Portrait & Stats (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-5 relative profile-image-container">
            <div className="relative">
              {/* Solid Teal Accent Frame */}
              <div className="absolute -inset-4 bg-teal-primary rounded-[60px] -z-10 opacity-5" />
              <div className="absolute top-1/2 -right-8 w-24 h-48 bg-teal-primary rounded-full blur-[60px] opacity-20" />

              <div className="relative aspect-[4/5] rounded-[50px] overflow-hidden border border-white/20 shadow-2xl shadow-teal-dark/10 group bg-bg-light">
                <img
                  src={imageSrc}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                />
                {/* Overlay with glass effect on bottom */}
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-teal-dark/80 via-teal-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="flex items-center gap-3 text-white">
                    <OutlineToothIcon size={32} className="opacity-50" />
                    <span className="text-sm font-medium tracking-wide">Excelência Clínica Souriê</span>
                  </div>
                </div>
              </div>

              {/* CRM Badge - Floating */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-3xl p-6 shadow-xl border border-teal-primary/5 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <p className="text-[10px] font-bold text-teal-primary/40 uppercase tracking-[0.3em] mb-1">Registro Profissional</p>
                <p className="text-lg font-bold text-teal-dark">{member.crm}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Specialties */}
          <div className="lg:col-span-7 profile-content-container space-y-12">
            {/* Desktop Name/Role */}
            <div className="hidden lg:block space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-teal-primary/30" />
                <span className="text-teal-primary font-bold text-xs tracking-[0.4em] uppercase">{member.role}</span>
              </div>
              <h1 className="text-6xl xl:text-8xl font-medium text-teal-dark tracking-tighter leading-[0.95]">
                {firstName} <br />
                <span className="text-teal-primary italic font-serif ml-4">{lastName}</span>
              </h1>
            </div>

            {/* Bio Section with better typography */}
            <div className="relative">
              <div className="absolute -left-8 lg:-left-12 -top-6 text-8xl text-teal-primary/5 font-serif pointer-events-none italic">“</div>
              <p className="text-xl lg:text-2xl text-text-primary/70 leading-relaxed font-light">
                {member.bio}
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-teal-primary/10 flex items-center justify-center text-teal-primary">
                  <OutlineToothIcon size={16} />
                </div>
                <span className="text-sm font-bold text-teal-dark/40 uppercase tracking-widest">Compromisso com o seu bem-estar</span>
              </div>
            </div>

            {/* Specialties Bento-style */}
            <div className="space-y-6 pt-4">
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-teal-dark/30">Áreas de Especialização</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {member.specialties.map((specialty, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white border border-teal-primary/5 p-5 rounded-[24px] shadow-sm hover:shadow-md hover:border-teal-primary/20 transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-xl bg-teal-primary/5 flex items-center justify-center text-teal-primary group-hover:bg-teal-primary group-hover:text-white transition-colors">
                      <OutlineToothIcon size={20} />
                    </div>
                    <span className="font-bold text-teal-dark">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Meet Others - Horizontal Gallery */}
      <SectionContainer className="bg-bg-light/30 border-y border-teal-primary/5 py-20">
        <div className="space-y-12">
          <div className="flex flex-col items-center text-center space-y-4">
            <span className="text-teal-primary font-bold text-[10px] tracking-[0.3em] uppercase">Nosso Time</span>
            <h2 className="text-3xl lg:text-4xl font-medium text-teal-dark italic font-serif">Outros especialistas que cuidam de você</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.filter(m => m.slug !== member.slug).map((other, idx) => (
              <Link
                key={idx}
                to={`/equipe/${other.slug}`}
                className="group relative overflow-hidden rounded-[40px] aspect-[4/5] bg-bg-light shadow-sm"
              >
                <img
                  src={teamImages[other.slug]}
                  alt={other.name}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/90 via-teal-dark/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">{other.role}</span>
                  <h4 className="text-2xl font-bold text-white mt-1">{other.name}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="pt-16 lg:pt-20 pb-16 lg:pb-24" innerClassName="!py-0">
        {/* Full Width CTA: Premium High-Conversion Design */}
        <div className="cta-card-container">
          <div className="bg-navy-dark rounded-[48px] lg:rounded-[64px] p-10 lg:p-24 text-white relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 group">

            {/* Dynamic Background Effects */}
            <div className="absolute -top-64 -right-64 w-[600px] h-[600px] bg-teal-primary/20 blur-[120px] rounded-full group-hover:bg-teal-primary/30 transition-colors duration-1000" />
            <div className="absolute -bottom-64 -left-64 w-[600px] h-[600px] bg-cyan-light/10 blur-[120px] rounded-full group-hover:bg-cyan-light/20 transition-colors duration-1000" />

            {/* Subliminal Brand Icons */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none scale-150">
              <OutlineToothIcon size={600} />
            </div>

            <div className="relative z-10 text-center lg:text-left space-y-8 max-w-3xl">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-cyan-light animate-pulse shadow-[0_0_10px_rgba(221,248,255,0.8)]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">Atendimento rápido</span>
              </div>

              <div className="space-y-4">
                <h4 className="text-4xl lg:text-6xl font-medium leading-[1.05] tracking-tight">
                  Inicie sua jornada para um <span className="text-cyan-light italic font-serif">novo patamar</span> de saúde bucal
                </h4>
                <p className="text-white/50 text-xl lg:text-2xl font-light max-w-2xl">
                  Estamos prontos para desenhar o plano ideal para você com o(a) {member.name}.
                </p>
              </div>
            </div>

            <div className="relative z-10 w-full lg:w-auto flex flex-col items-center gap-4">
              <Button 
                text="Agendar Consulta" 
                icon="arrow-circle" 
                variant="white" 
                size="lg"
                href={WHATSAPP_LINK} 
                className="shadow-2xl shadow-black/20"
              />
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
