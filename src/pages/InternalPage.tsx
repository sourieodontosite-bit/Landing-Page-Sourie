import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useParams, Link, Navigate } from 'react-router-dom';
import SectionContainer from '../components/shared/SectionContainer';
import SEO from '../components/shared/SEO';
import Button from '../components/shared/Button';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import { WHATSAPP_LINK } from '../utils/constants';
import { OutlineToothIcon } from '../components/shared/Icons';

// Import Procedure Images
import ortodontiaImg from '../assets/Procedimentos/Ortodontia.webp';
import clinicaGeralImg from '../assets/Procedimentos/Clinica-geral.webp';
import esteticaImg from '../assets/Procedimentos/Estetica.webp';
import canalImg from '../assets/Procedimentos/Canal.webp';
import proteseImg from '../assets/Procedimentos/Protese.webp';
import odontopediatriaImg from '../assets/Procedimentos/Odontopediatria.webp';

interface ServiceItem {
  name: string;
  desc: string;
}

interface PageContent {
  title: string;
  category: string;
  sectionTitle: string;
  description: string;
  mainImage: string;
  services: ServiceItem[];
}

const PAGES_CONTENT: Record<string, PageContent> = {
  'ortodontia': {
    title: 'Ortodontia Moderna',
    category: 'Serviços',
    sectionTitle: 'Seu sorriso alinhado, do jeito que você sempre quis',
    description: 'Alinhamento perfeito com o máximo de discrição e conforto, incluindo a tecnologia Invisalign™.',
    mainImage: ortodontiaImg,
    services: [
      { name: 'Invisalign™', desc: 'O sistema de alinhadores transparentes mais avançado do mundo.' },
      { name: 'Scanner iTero™ 5D', desc: 'Planejamento digital completo sem moldagens desconfortáveis.' },
      { name: 'Ortodontia Preventiva', desc: 'Guiando o crescimento correto dos ossos da face em crianças.' },
      { name: 'Aparelhos Estéticos', desc: 'Opções discretas para quem busca alinhar os dentes com elegância.' },
    ]
  },
  'clinica-geral': {
    title: 'Clínica Geral',
    category: 'Serviços',
    sectionTitle: 'Saúde bucal completa, de perto e com carinho',
    description: 'A base para uma saúde bucal perfeita e prevenção de problemas futuros através de diagnósticos precisos.',
    mainImage: clinicaGeralImg,
    services: [
      { name: 'Check-up Digital', desc: 'Diagnóstico em tempo real com câmera intraoral de alta definição.' },
      { name: 'Profilaxia (Limpeza)', desc: 'Remoção de tártaro e placa para manter dentes e gengivas saudáveis.' },
      { name: 'Restaurações Estéticas', desc: 'Substituição de amálgamas por resinas que mimetizam o dente natural.' },
      { name: 'Tratamento de Gengiva', desc: 'Cuidado especializado para prevenir e tratar a periodontite.' },
    ]
  },
  'odontologia-estetica': {
    title: 'Odontologia Estética',
    category: 'Serviços',
    sectionTitle: 'Um sorriso que transforma o seu rosto e a sua confiança',
    description: 'Transforme a harmonia do seu rosto através de um sorriso planejado digitalmente, incluindo clareamento e lentes.',
    mainImage: esteticaImg,
    services: [
      { name: 'Lentes de Contato', desc: 'Lâminas ultrafinas de porcelana para corrigir cor e formato.' },
      { name: 'Clareamento Premium', desc: 'Dentes brancos com baixa sensibilidade e resultados duradouros.' },
      { name: 'Toxina Botulínica', desc: 'Suavização de linhas de expressão e harmonização facial.' },
      { name: 'Preenchimento Facial', desc: 'Restauração de volume e contorno com ácido hialurônico.' },
      { name: 'Facetas de Resina', desc: 'Transformação rápida e estética para o seu sorriso.' },
    ]
  },
  'cirurgias-e-canal': {
    title: 'Cirurgias e Canal',
    category: 'Serviços',
    sectionTitle: 'Tratamentos precisos para resolver o que mais te preocupa',
    description: 'Tratamentos complexos realizados com precisão, tecnologia e total conforto.',
    mainImage: canalImg,
    services: [
      { name: 'Canal Mecanizado', desc: 'Tratamento rápido e preciso, muitas vezes em sessão única.' },
      { name: 'Extração de Siso', desc: 'Procedimento planejado digitalmente para máximo conforto.' },
      { name: 'Cirurgia Periodontal', desc: 'Correções funcionais e estéticas nas gengivas.' },
      { name: 'Frenectomia', desc: 'Pequena intervenção para melhorar a fonética e estética.' },
    ]
  },
  'proteses-e-implantes': {
    title: 'Próteses e Implantes',
    category: 'Serviços',
    sectionTitle: 'Recupere sua função, sua estética e o prazer de sorrir',
    description: 'Recupere a funcionalidade completa e a estética do seu sorriso com soluções de implantes e reabilitação.',
    mainImage: proteseImg,
    services: [
      { name: 'Implantes Dentários', desc: 'Substituição da raiz do dente perdido com segurança total.' },
      { name: 'Prótese Protocolo', desc: 'Dentes fixos para quem usa dentadura, devolvendo a confiança.' },
      { name: 'Coroas em Zircônia', desc: 'O máximo em resistência e estética para dentes isolados.' },
      { name: 'Carga Imediata', desc: 'Em casos selecionados, dentes novos no mesmo dia da cirurgia.' },
    ]
  },
  'odontopediatria': {
    title: 'Odontopediatria',
    category: 'Serviços',
    sectionTitle: 'Cuidando do sorriso de quem você mais ama',
    description: 'Cuidado especializado e lúdico para que as crianças cresçam com sorrisos saudáveis e sem traumas.',
    mainImage: odontopediatriaImg,
    services: [
      { name: 'Zero Cárie', desc: 'Programa de acompanhamento preventivo desde os primeiros meses.' },
      { name: 'Condicionamento Lúdico', desc: 'A consulta vira diversão para evitar o medo de dentista.' },
      { name: 'Ortodontia Infantil', desc: 'Acompanhamento do crescimento ósseo e troca dos dentes.' },
      { name: 'Selantes', desc: 'Proteção extra para os dentes permanentes que acabaram de nascer.' },
    ]
  }
};

export default function InternalPage() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !PAGES_CONTENT[slug]) {
    return <Navigate to="/" replace />;
  }

  const page = PAGES_CONTENT[slug];
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLImageElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 1.2 }
      });

      tl.fromTo(heroContentRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, delay: 0.3 }
      );

      gsap.fromTo(heroImageRef.current,
        { scale: 1.1 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: heroContainerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        }
      );
    });

    return () => mm.revert();
  }, { scope: heroContainerRef, dependencies: [slug] });

  return (
    <div className="flex flex-col bg-bg-light min-h-screen">
      <SEO
        title={`${page.title} | Souriê Odontologia Nova Era`}
        description={page.description}
      />

      {/* Dynamic Hero Section */}
      <section 
        ref={heroContainerRef}
        className="relative h-[50dvh] md:h-screen flex flex-col p-0 md:p-3 lg:p-4 overflow-hidden"
      >
        {/* Background Card */}
        <div className="absolute inset-0 md:inset-3 lg:inset-4 z-0 rounded-none md:rounded-[32px] lg:rounded-[40px] overflow-hidden bg-navy-dark isolation-isolate transform-gpu">
          <img
            ref={heroImageRef}
            src={page.mainImage}
            alt={page.title}
            className="w-full h-full object-cover opacity-80 md:opacity-80"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/40 to-transparent hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/70 via-transparent to-transparent hidden md:block" />
          
          {/* Mobile Specific Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-light via-transparent to-black/20 md:hidden" />
        </div>

        {/* Hero Content (Desktop) */}
        <div className="relative z-10 flex-1 hidden md:flex items-center py-20 lg:py-32">
          <div className="max-w-page mx-auto w-full px-6 sm:px-10 lg:px-container-x">
            <div ref={heroContentRef} className="max-w-2xl flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5 mb-6 sm:mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-light animate-pulse" />
                <span className="text-white text-[9px] sm:text-[11px] lg:text-xs xl:text-[11px] 2xl:text-[11px] tracking-widest font-bold uppercase">
                  {page.category}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-medium text-white leading-[1.05] tracking-tight mb-6 sm:mb-8">
                {page.title}
              </h1>

              <div className="lg:scale-[0.85] origin-left">
                <Button
                  text="Agende sua consulta"
                  icon="arrow-circle"
                  variant="cta"
                  size="lg"
                  href={WHATSAPP_LINK}
                  className="!bg-[rgb(206,235,255)] hover:!bg-teal-primary"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator (Desktop) */}
        <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-1 animate-bounce-slow">
          <ChevronDown size={24} className="text-white/40" strokeWidth={3} />
          <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">Explore</span>
        </div>
      </section>

      {/* Mobile Info Card (Overlapping) */}
      <div className="md:hidden relative z-20 px-6 -mt-20">
        <div className="bg-white/80 backdrop-blur-3xl rounded-[40px] p-8 shadow-[0_20px_50px_-15px_rgba(37,97,111,0.15)] border border-white/50 space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-teal-primary/10 rounded-full px-3 py-1">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-primary animate-pulse" />
              <span className="text-teal-primary text-[10px] tracking-widest font-bold uppercase">
                {page.category}
              </span>
            </div>
            <h1 className="text-4xl font-medium text-teal-dark leading-tight tracking-tight">
              {page.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <SectionContainer className="py-0" innerClassName="!pt-16 !pb-12 lg:!pt-24 lg:!pb-16">
        <div className="space-y-16 lg:space-y-24">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-3xl lg:text-5xl font-medium text-teal-dark leading-tight">
              {page.sectionTitle}
            </h2>
            <p className="text-xl text-text-primary/70 leading-relaxed">
              {page.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {page.services.map((service, idx) => {
              const bgColors = ['bg-teal-primary', 'bg-teal-dark', 'bg-teal-medium', 'bg-navy-dark'];
              const bgColor = bgColors[idx % bgColors.length];
              
              return (
                <div
                  key={idx}
                  className={`group p-8 lg:p-12 ${bgColor} rounded-[40px] border border-white/10 hover:border-white/30 hover:shadow-2xl hover:shadow-teal-dark/10 transition-all duration-500 flex flex-col`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500">
                    <OutlineToothIcon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-white/80 leading-relaxed text-lg font-light">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </SectionContainer>

      {/* Other Procedures Section */}
      <SectionContainer background="bg-bg-light/50" className="border-y border-black/[0.03]" innerClassName="!pt-12 !pb-16 lg:!pt-16 lg:!pb-24">
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <span className="text-teal-primary font-bold text-xs tracking-[0.3em] uppercase">Conheça também</span>
              <h2 className="text-3xl lg:text-4xl font-medium text-teal-dark">Outros procedimentos que cuidam do seu sorriso</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(PAGES_CONTENT)
              .filter(([key]) => key !== slug)
              .map(([key, item]) => (
                <Link
                  key={key}
                  to={`/p/${key}`}
                  className="group relative h-[400px] rounded-[48px] overflow-hidden bg-navy-dark"
                >
                  <img
                    src={item.mainImage}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-x-0 bottom-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2 block">{item.category}</span>
                    <h4 className="text-2xl font-bold text-white">{item.title}</h4>
                    <div className="mt-4 flex items-center gap-2 text-cyan-light opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm font-bold uppercase tracking-widest">Saiba mais</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </SectionContainer>

      {/* Final CTA - Immersive Design */}
      <SectionContainer className="py-20 lg:py-32">
        <div className="bg-teal-dark rounded-[48px] lg:rounded-[64px] p-10 lg:p-24 text-white relative overflow-hidden group shadow-2xl">
          <div className="absolute -right-20 -bottom-20 opacity-10 group-hover:scale-110 transition-transform duration-1000 pointer-events-none">
            <OutlineToothIcon size={400} />
          </div>
          <div className="absolute -left-20 -top-20 opacity-5 group-hover:scale-110 transition-transform duration-1000 pointer-events-none">
            <Sparkles size={300} />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
            <div className="max-w-2xl space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-cyan-light animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">Atendimento Humanizado</span>
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-7xl font-medium leading-[1.1] tracking-tight">
                  Pronto para <br /> <span className="text-cyan-light italic font-serif">começar?</span>
                </h2>
                <p className="text-white/60 text-xl lg:text-2xl font-light">
                  Fale com nossa equipe agora mesmo e tire suas dúvidas.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6">
              <Button
                text="Agendar via WhatsApp"
                icon="arrow-circle"
                variant="white"
                size="lg"
                href={WHATSAPP_LINK}
                className="shadow-2xl shadow-black/20"
              />
              <span className="text-white/40 text-xs font-bold uppercase tracking-widest">Resposta em poucos minutos</span>
            </div>
          </div>
        </div>
      </SectionContainer>

    </div>
  );
}
