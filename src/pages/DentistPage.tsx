import { useParams, Navigate, Link } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TEAM_MEMBERS, buildWhatsAppLink, WA_DENTIST_MESSAGES, MEMBER_THEMES } from '../utils/constants';
import type { MemberTheme } from '../utils/constants';
import { ArrowLeft, Sparkles, Award, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);
import SEO from '../components/shared/SEO';
import { buildDentistSchema } from '../utils/SEOData';

import Button from '../components/shared/Button';
import { OutlineToothIcon, InstagramIcon, WhatsAppIcon, ArrowRightIcon } from '../components/shared/Icons';

import brenoImg from '../assets/breno.webp';
import estefaniaImg from '../assets/estefania.webp';
import victorImg from '../assets/victor.webp';
import beatrizImg from '../assets/beatriz.webp';
import beatrizBento2 from '../assets/beatriz2.webp';
import beatrizBento3 from '../assets/beatriz3.webp';
import coroasAntesDepoisBeatriz from '../assets/Coroas-antes-e-depois_Beatriz.webp';
import coroaBeatrizImg from '../assets/coroa.webp';
import taynaFotoImg from '../assets/taynafoto.webp';
import taynaImg from '../assets/tayna.webp';
import escovasKidImg from '../assets/escovas-de-dente-kid.webp';
import odontopediatriaImg from '../assets/odontopediatria.webp';
import juniaImg from '../assets/dra.junia.webp';
import resultadosBigodeChines from '../assets/resultados-bigode-chines.webp';
import juniaAtendendo from '../assets/junia-atendendo.webp';
import resultadoMandibula from '../assets/resultado-mandibula.webp';
import mariaEduardaImg from '../assets/nutri_mariana.webp';
import nutriMariana2 from '../assets/nutrimariana2.webp';
import nutriMariana3 from '../assets/nutrimariana3.webp';
import nutriMariana4 from '../assets/nutrimariana4.webp';
import alimentosImg from '../assets/alimentos.webp';

// Imagem genérica de clínica para bento fallback
import clinicaInterna from '../assets/clinica-interna-1.webp';

// Breno Bento Images
import brenoBento1 from '../assets/DentistPage/Breno/bento1.webp';
import brenoBento2 from '../assets/DentistPage/Breno/Tecnologia.webp';
import brenoBento3 from '../assets/DentistPage/Breno/bento3.webp';
import brenoBento4 from '../assets/DentistPage/Breno/bento4.webp';

// Estefania Bento Images
import estefaniaBento1 from '../assets/DentistPage/Estefania/bento1-estefania.webp';
import invisalignEstefaniaImg from '../assets/invisalign-img.webp';
import aparelhoFixoEstefaniaImg from '../assets/Close-up de dentes com aparelho ortodôntico.webp';
import aparelhoOrtopedicoEstefaniaImg from '../assets/aparelho-ortopedico-Estefania.webp';

// Victor Bento Images
import victorBento1 from '../assets/DentistPage/Victor/bento 1.webp';
import victorBento3 from '../assets/DentistPage/Victor/bento 3.webp';
import victorBento4 from '../assets/DentistPage/Victor/bento 4.webp';
import victorResultado from '../assets/DentistPage/Victor/resultado.webp';

const teamImages: Record<string, string> = {
  'dr-breno': brenoImg,
  'dra-estefania': estefaniaImg,
  'dr-victor': victorImg,
  'dra-beatriz': beatrizImg,
  'dra-tayna': taynaFotoImg,
  'dra-junia': juniaImg,
  'nutri-maria-eduarda': mariaEduardaImg,
};

const bentoImagesMap: Record<string, { src: string; pos: string }[]> = {
  'dr-breno': [
    { src: brenoBento4, pos: 'object-bottom' },
    { src: brenoBento1, pos: 'object-center' },
    { src: brenoBento3, pos: 'object-center' },
    { src: brenoBento2, pos: 'object-center' },
  ],
  'dra-estefania': [
    { src: estefaniaBento1, pos: 'object-center' },
    { src: invisalignEstefaniaImg, pos: 'object-center' },
    { src: aparelhoFixoEstefaniaImg, pos: 'object-center' },
    { src: aparelhoOrtopedicoEstefaniaImg, pos: 'object-center' },
  ],
  'dr-victor': [
    { src: victorBento4, pos: 'object-center' },
    { src: victorBento1, pos: 'object-bottom' },
    { src: victorResultado, pos: 'object-center' },
    { src: victorBento3, pos: 'object-center' },
  ],
  'dra-beatriz': [
    { src: beatrizBento2, pos: 'object-[center_25%]' },
    { src: beatrizBento3, pos: 'object-[center_20%]' },
    { src: coroasAntesDepoisBeatriz, pos: 'object-center' },
    { src: coroaBeatrizImg, pos: 'object-center' },
  ],
  'dra-tayna': [
    { src: taynaImg, pos: 'object-[center_20%]' },
    { src: escovasKidImg, pos: 'object-center' },
    { src: odontopediatriaImg, pos: 'object-center' },
    { src: clinicaInterna, pos: 'object-center' },
  ],
  'dra-junia': [
    { src: juniaImg, pos: 'object-[center_20%]' },
    { src: juniaAtendendo, pos: 'object-center' },
    { src: resultadosBigodeChines, pos: 'object-center' },
    { src: resultadoMandibula, pos: 'object-center' },
  ],
  'nutri-maria-eduarda': [
    { src: nutriMariana2, pos: 'object-[center_15%]' },
    { src: alimentosImg, pos: 'object-center' },
    { src: nutriMariana3, pos: 'object-center' },
    { src: nutriMariana4, pos: 'object-center' },
  ],
};

const DEFAULT_THEME: MemberTheme = {
  accent: 'bg-teal-primary',
  accentSoft: 'bg-teal-primary/10',
  accentDeep: 'bg-teal-dark/70',
  overlayFrom: 'from-teal-dark/90',
  overlayVia: 'via-teal-dark/20',
  cardBg: 'bg-teal-dark/70',
  roleText: 'text-teal-primary',
  instagramBg: 'bg-white/20',
  instagramHover: 'hover:bg-teal-primary',
  tagBg: 'bg-white/10',
  tagBorder: 'border-white/5',
  btnHover: 'hover:bg-teal-primary',
  btnHoverBorder: 'hover:border-teal-primary/50',
  aboutSectionBg: 'bg-[#4c717a]',
  aboutAccent: 'text-cyan-light',
  highlightBg: 'bg-teal-primary/10',
  highlightIcon: 'text-teal-primary',
  highlightLabel: 'text-teal-primary/50',
  highlightValue: 'text-teal-dark',
  specialtyBorder: 'border-teal-primary/15 hover:border-teal-primary/40',
  specialtyIconBg: 'bg-teal-primary/5',
  specialtyIconBgHover: 'group-hover:bg-teal-primary group-hover:text-white',
  differentialBg: 'bg-teal-dark/50',
  blobLight: 'hsl(180 50% 85%)',
  blobDeep: 'hsl(195 60% 30%)',
  textAccent: 'text-teal-primary',
  sectionBadge: 'text-cyan-light',
  firstNameText: 'text-teal-dark',
  btnBg: 'bg-teal-primary',
  btnBgHover: 'hover:bg-navy-dark',
  btnText: 'text-white',
  btnCircleBg: 'bg-navy-dark',
  btnCircleBgHover: 'group-hover:bg-navy-dark',
  btnBorder: 'border-transparent',
  btnShadow: 'shadow-teal',
};

interface DentistDesignExtensions {
  subtitle: string;
  philosophy: string;
  instagramHandle: string;
  highlightStat: { value: string; label: string };
  bentoItems: { category: string; title: string }[];
  ctaHeadline: string;
  ctaSub: string;
}

const DENTIST_EXTENSIONS: Record<string, DentistDesignExtensions> = {
  'dr-victor': {
    subtitle: 'Cirurgia Bucal & Odontologia Estética',
    philosophy: 'Atuação pautada pela experiência, precisão técnica e cuidado individualizado. Com ampla experiência em extrações dentárias, especialmente de dentes sisos, restaurações estéticas em resina e odontologia clínica geral, meu compromisso é oferecer tratamentos seguros, resultados de qualidade e um atendimento acolhedor em cada etapa.',
    instagramHandle: '@victormelob',
    highlightStat: { value: 'Desde 2018', label: 'Dedicação clínica' },
    bentoItems: [
      { category: 'Sisos e Cirurgias', title: 'Remoção de terceiros molares com precisão técnica e cuidado' },
      { category: 'Atendimento Humanizado', title: 'Procedimentos planejados com cuidado, segurança e conforto' },
      { category: 'Restaurações Estéticas', title: 'Reconstruções em resina que imitam o esmalte natural' },
      { category: 'Ambiente Clínico', title: 'Consultório preparado com biossegurança rígida e conforto' }
    ],
    ctaHeadline: 'Agende sua avaliação cirúrgica ou clínica com o Dr. Victor',
    ctaSub: 'Viva uma experiência odontológica tranquila, humana e focada na sua segurança absoluta.'
  },
  'dra-estefania': {
    subtitle: 'Especialista em Ortodontia & Ortopedia Facial',
    philosophy: 'O sorriso perfeito é a união indivisível entre a harmonia estética e a saúde funcional. Cada tratamento ortodôntico que planejo é uma assinatura única, desenhada para elevar a autoconfiança de toda a família.',
    instagramHandle: '@estefaniaalvesm',
    highlightStat: { value: 'Desde 2017', label: 'Devolvendo sorrisos' },
    bentoItems: [
      { category: 'Atendimento Familiar', title: 'Espaço acolhedor desenhado para o bem-estar e saúde de todas as idades' },
      { category: 'Alinhadores Invisíveis', title: 'Tecnologia ortodôntica invisível para alinhar seu sorriso com discrição' },
      { category: 'Ortodontia Fixa', title: 'Tratamentos corretivos precisos e planejados digitalmente' },
      { category: 'Sorrisos Juvenis', title: 'Ortopedia preventiva para garantir o desenvolvimento saudável' }
    ],
    ctaHeadline: 'Inicie seu tratamento ortodôntico com a Dra. Estefânia',
    ctaSub: 'Desenhe o alinhamento ideal para o seu sorriso com quem é referência em estética e acolhimento.'
  },
  'dr-breno': {
    subtitle: 'Tratamento de Canal & Próteses Removíveis',
    philosophy: 'Reabilitar a saúde oral de alguém é devolver a liberdade de se expressar plenamente. A odontologia de alta performance alia alta tecnologia à sensibilidade humana para reconectar a pessoa com a sua melhor versão.',
    instagramHandle: '@breno.lage',
    highlightStat: { value: 'Alta Performance', label: 'Em Reabilitação Oral' },
    bentoItems: [
      { category: 'Próteses Removíveis', title: 'Reabilitação oral com conforto, função mastigatória e naturalidade' },
      { category: 'Tratamentos de Canal', title: 'Endodontia com alta tecnologia e máxima previsibilidade' },
      { category: 'Reabilitação Oral', title: 'Devolução integral da capacidade mastigatória e autoestima' },
      { category: 'Consultório Souriê', title: 'Tecnologia clínica de ponta integrada ao seu bem-estar diário' }
    ],
    ctaHeadline: 'Agende sua reabilitação ou avaliação com o Dr. Breno',
    ctaSub: 'Recupere a total segurança ao mastigar e a alegria de sorrir sem nenhuma restrição.'
  },
  'dra-beatriz': {
    subtitle: 'Próteses Fixas & Odontologia Estética',
    philosophy: 'Cada prótese é uma oportunidade de devolver não apenas a função mastigatória, mas a alegria de sorrir com confiança. Minha dedicação está em cada detalhe, para que o resultado seja tão único quanto o paciente.',
    instagramHandle: '@beatrizbiitt',
    highlightStat: { value: 'Arte e Precisão', label: 'Em Próteses e Estética' },
    bentoItems: [
      { category: 'Reabilitação e Estética', title: 'Cuidado dedicado para devolver função e harmonia ao sorriso' },
      { category: 'Facetas e Restaurações', title: 'Restaurações estéticas e facetas em resina com acabamento natural' },
      { category: 'Próteses Fixas e Coroas', title: 'Coroas e próteses fixas com estética natural e alta durabilidade' },
      { category: 'Coroa Protética', title: 'Adaptação milimétrica, resistência e fidelidade estética ao dente natural' }
    ],
    ctaHeadline: 'Recupere seu sorriso com a Dra. Beatriz',
    ctaSub: 'Devolva função e estética ao seu sorriso com próteses fixas e restaurações estéticas.'
  },
  'dra-tayna': {
    subtitle: 'Odontopediatria & Atendimento Infantil',
    philosophy: 'A primeira visita ao dentista marca a relação da criança com a saúde bucal para toda a vida. Meu propósito é transformar cada consulta em uma aventura leve, lúdica e cheia de carinho.',
    instagramHandle: '@dra.taynadelfim',
    highlightStat: { value: 'Atendimento Lúdico', label: 'Para os Pequenos' },
    bentoItems: [
      { category: 'Bebês e Crianças', title: 'Acompanhamento desde o nascimento do primeiro dente' },
      { category: 'Prevenção Infantil', title: 'Hábitos de higiene ensinados de forma divertida e educativa' },
      { category: 'Manejo Comportamental', title: 'Abordagem lúdica, gentil e acolhedora em cada consulta' },
      { category: 'Ambiente Acolhedor', title: 'Espaço pensado para fazer a criança se sentir em casa' }
    ],
    ctaHeadline: 'Agende a primeira consulta odontológica do seu filho(a)',
    ctaSub: 'Garanta um início de vida bucal saudável com atendimento especializado, gentil e divertido.'
  },
  'dra-junia': {
    subtitle: 'Biomedicina Estética & Harmonização Orofacial',
    philosophy: 'A estética não é sobre transformação, mas sobre realçar a essência de cada um. Meu trabalho combina rigor científico com visão artística para entregar resultados naturais, seguros e que elevam a autoestima.',
    instagramHandle: '@dra.juniamartins',
    highlightStat: { value: 'Resultados Naturais', label: 'Em Harmonia Facial' },
    bentoItems: [
      { category: 'Toxina Botulínica', title: 'Procedimento injetável usado para suavizar rugas e linhas de expressão.' },
      { category: 'Preenchimento Facial', title: 'Técnica que utiliza substâncias, como o ácido hialurônico, para restaurar volume e contorno ao rosto.' },
      { category: 'Tratamentos de Pele', title: 'O tratamento de pele inclui limpeza de pele, peelings químicos e microagulhamento para rejuvenescimento e tratamento de manchas.' },
      { category: 'Preenchimento Estratégico', title: 'Pontos estratégicos de preenchimento com ácido hialurônico.' }
    ],
    ctaHeadline: 'Realce sua beleza natural com a Dra. Júnia',
    ctaSub: 'Procedimentos estéticos seguros e personalizados para devolver sua autoestima e confiança.'
  },
  'nutri-maria-eduarda': {
    subtitle: 'Nutrição Clínica, Estética & Saúde Integrada',
    philosophy: 'A alimentação é a base de toda saúde — incluindo a saúde bucal. Meu método é livre de dietas restritivas, construindo hábitos alimentares prazerosos que o paciente consegue manter para a vida toda.',
    instagramHandle: '@nutri.mariaeduardalage',
    highlightStat: { value: 'Sem Restrições', label: 'Hábitos para Vida' },
    bentoItems: [
      { category: 'Nutrição Clínica', title: 'Planejamento alimentar personalizado às suas necessidades' },
      { category: 'Nutrição Estética', title: 'Alimentação que favorece pele, cabelos e corpo saudáveis' },
      { category: 'Saúde e Bem-Estar', title: 'Alimentação equilibrada como aliada da sua saúde e qualidade de vida' },
      { category: 'Reeducação Alimentar', title: 'Hábitos construídos com leveza e prazer em se alimentar' }
    ],
    ctaHeadline: 'Transforme sua saúde pela alimentação com Maria Eduarda',
    ctaSub: 'Descubra o prazer de se alimentar bem, com mais energia, imunidade e bem-estar para toda a vida.'
  }
};

interface ThemedButtonProps {
  text: string;
  href: string;
  theme: MemberTheme;
  size?: 'md' | 'lg';
  icon?: 'whatsapp' | 'arrow-circle' | 'none';
  className?: string;
}

function ThemedButton({ text, href, theme, size = 'md', icon = 'none', className = '' }: ThemedButtonProps) {
  const sizes = {
    md: 'px-8 py-3.5 text-lg rounded-pill',
    lg: 'pl-6 lg:pl-8 pr-1.5 lg:pr-2 py-1.5 lg:py-2 text-lg lg:text-[22px] rounded-pill',
  };
  const circleSize = size === 'md'
    ? 'w-11 h-11 ml-5'
    : 'w-11 h-11 lg:w-14 lg:h-14 ml-5 lg:ml-8';
  const iconSize = size === 'md' ? 20 : 20;

  const content = (
    <>
      <span className="relative z-10 leading-none">{text}</span>
      {(icon === 'whatsapp' || icon === 'arrow-circle') && (
        <div className={`flex items-center justify-center rounded-full ${theme.btnCircleBg} text-white shrink-0 ${circleSize} transition-transform duration-300 group-hover:scale-105 ${theme.btnCircleBgHover}`}>
          {icon === 'whatsapp' && <WhatsAppIcon size={iconSize} />}
          {icon === 'arrow-circle' && <ArrowRightIcon size={iconSize} />}
        </div>
      )}
    </>
  );

  const baseClass = `group inline-flex items-center justify-center font-bold tracking-[-0.05em] whitespace-nowrap transition-all duration-300 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-heading overflow-hidden ${theme.btnBg} ${theme.btnText} ${theme.btnBgHover} ${theme.btnShadow} ${sizes[size]} ${className}`;

  if (href.startsWith('/') || href.startsWith('#')) {
    return (
      <Link to={href} className={baseClass}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={baseClass}>
      {content}
    </a>
  );
}

export default function DentistPage() {
  const { slug } = useParams<{ slug: string }>();
  const member = TEAM_MEMBERS.find((m) => m.slug === slug);
  const pageRef = useRef<HTMLDivElement>(null);
  const bentoRef = useRef<HTMLDivElement>(null);
  const [isBentoVisible, setIsBentoVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsBentoVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (bentoRef.current) {
      observer.observe(bentoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const ctaRef = useRef<HTMLDivElement>(null);
  const [isCtaVisible, setIsCtaVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCtaVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
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
        );

      if (document.querySelector('.timeline-progress')) {
        gsap.fromTo(".timeline-progress",
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "top",
            ease: "none",
            scrollTrigger: {
              trigger: ".timeline-container",
              start: "top 70%",
              end: "bottom 80%",
              scrub: 1,
            }
          }
        );

        gsap.utils.toArray<HTMLElement>(".timeline-item").forEach((item) => {
          gsap.fromTo(item,
            { opacity: 0, x: -20 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
              }
            }
          );
        });

        gsap.fromTo(".differential-card",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: ".differential-card",
              start: "top 85%",
            }
          }
        );
      }
    });

    return () => mm.revert();
  }, { scope: pageRef });

  if (!member) {
    return <Navigate to="/" replace />;
  }

  const imageSrc = teamImages[member.slug];
  const bentoData = bentoImagesMap[member.slug] || [];
  const nameParts = member.name.split(' ');
  const firstName = nameParts[0]; // e.g. "Dr." / "Dra."
  const lastName = member.slug === 'dr-victor' ? 'Victor Borges' : nameParts[1];  // e.g. "Victor Borges" / "Estefânia" / "Breno"
  const theme: MemberTheme = { ...DEFAULT_THEME, ...(MEMBER_THEMES[member.slug] || {}) };
  const isThemed = !!MEMBER_THEMES[member.slug];

  // Pre-composed class strings to avoid template-literal JSX parsing issues with the OXC transformer
  const accentSpanClass = theme.textAccent + ' italic font-serif';
  const mobileNameHClass = 'text-3xl font-medium ' + theme.firstNameText + ' leading-tight -tracking-[0.02em]';
  const desktopNameHClass = 'text-5xl xl:text-6xl font-medium ' + theme.firstNameText + ' tracking-tighter leading-none flex flex-wrap items-baseline gap-x-3';
  const desktopRoleSepClass = isThemed ? '' : 'h-px w-12 bg-teal-primary/30';
  const desktopRoleClass = theme.textAccent + ' font-bold text-xs tracking-[0.4em] uppercase';
  const subHeaderClass = (isThemed ? '' : 'text-teal-medium/80 ') + 'text-sm font-medium tracking-wide';
  const desktopSubClass = (isThemed ? '' : 'text-teal-medium ') + 'text-lg xl:text-xl font-medium tracking-wide mt-1';
  const bentoOverlayBaseClass = isThemed ? 'absolute inset-0 opacity-100 md:group-hover:opacity-80 transition-opacity duration-500 z-10' : 'absolute inset-0 bg-gradient-to-t from-teal-dark/40 via-transparent to-transparent opacity-100 md:group-hover:opacity-80 transition-opacity duration-500 z-10';
  const bentoFloatingBaseClass = (isThemed ? '' : 'backdrop-blur-md bg-teal-dark/80 border-white/20 ') + 'absolute bottom-3 left-3 right-3 rounded-[20px] p-3.5 md:p-4 lg:p-4.5 z-20 shadow-lg border ' + (isThemed ? 'border-white/15 ' : '') + 'opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] transform md:translate-y-4 md:group-hover:translate-y-0 flex flex-col justify-end select-none pointer-events-none';
  const bentoCategoryClass = 'text-[9px] sm:text-[10px] font-bold ' + theme.aboutAccent + ' tracking-[0.18em] uppercase mb-1 md:mb-1.5 transition-transform duration-500 ease-out';
  const philosophyBorderClass = isThemed ? 'border-l-2 pl-5 italic text-text-primary/60 text-lg lg:text-xl leading-relaxed' : 'border-l-2 border-teal-primary/30 pl-5 italic text-text-primary/60 text-lg lg:text-xl leading-relaxed';
  const sectionSubheadClass = 'text-xs font-bold uppercase tracking-[0.3em] ' + (isThemed ? '' : 'text-teal-dark/30');
  const sectionHeadBentoClass = theme.textAccent + ' font-semibold text-[12px] tracking-[0.2em] uppercase';
  const mobileCargoBadgeClass = 'text-xs font-bold uppercase tracking-[0.2em] ' + theme.textAccent;
  const blobBgTopClass = 'absolute top-0 right-0 w-[45%] h-[480px] ' + (isThemed ? 'opacity-[0.08]' : 'bg-teal-primary/[0.03]') + ' blur-[140px] rounded-full -z-10 pointer-events-none';
  const instagramHeroBtnClass = 'w-full sm:w-auto bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] border ' + (isThemed ? '' : 'border-teal-primary/10 ') + 'flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-[transform,box-shadow] duration-200 group/insta cursor-pointer pointer-events-auto h-[48px]';
  const instagramIconHeroClass = (isThemed ? theme.highlightIcon : 'text-pink-600 ') + ' group-hover/insta:scale-[1.1] transition-transform duration-200';
  const linkBackNavWrapClass = 'inline-flex items-center gap-4 text-text-primary/40 hover:text-teal-primary transition-all duration-300 group';
  const circleBackBtnClass = 'w-12 h-12 rounded-full border border-teal-primary/10 flex items-center justify-center group-hover:bg-teal-primary group-hover:text-white group-hover:border-teal-primary transition-all duration-500 shadow-sm';
  const mobileImgFrameOuter = 'absolute -inset-3 ' + (isThemed ? '' : 'bg-teal-primary/5 ') + 'rounded-[48px] -z-20';
  const mobileImgFrameInner = 'absolute -inset-1.5 border ' + (isThemed ? '' : 'border-teal-primary/15 ') + 'rounded-[44px] -z-10';
  const desktopImgFrameOuterClass = 'absolute -inset-4 ' + (isThemed ? '' : 'bg-teal-primary/5 ') + 'rounded-[60px] -z-20';
  const desktopImgFrameInnerClass = 'absolute -inset-2 border ' + (isThemed ? '' : 'border-teal-primary/15 ') + 'rounded-[56px] -z-10';
  const desktopImgBlurClass = 'absolute top-1/2 -left-8 w-24 h-48 ' + (isThemed ? '' : 'bg-teal-primary opacity-15') + ' rounded-full blur-[60px]';
  const bentoSectionHeadClass = sectionHeadBentoClass;
  const aboutSectionBadgeClass = theme.aboutAccent + ' font-semibold text-[12px] tracking-[0.2em] uppercase';
  const differentialBadgeClass = theme.aboutAccent + ' font-semibold text-[12px] uppercase tracking-[0.12em]';
  const differentialLinkClass = 'inline-flex items-center gap-2 ' + theme.aboutAccent + ' hover:text-white font-semibold text-[13px] uppercase tracking-[0.12em] transition-[color,opacity] duration-200 cursor-pointer group/link';
  const themedBentoOverlayStyle = isThemed ? { backgroundImage: 'linear-gradient(to top, ' + theme.blobDeep + 'cc 0%, transparent 60%)' } : undefined;

  // Get clinical design extensions
  const ext = DENTIST_EXTENSIONS[member.slug] || {
    subtitle: member.role,
    philosophy: 'Oferecer um atendimento de excelência com foco no bem-estar integral.',
    instagramHandle: '@sourie.odonto',
    highlightStat: { value: 'Souriê', label: 'Padrão Ouro' },
    bentoItems: [
      { category: 'Atendimento', title: 'Cuidado diferenciado para você' },
      { category: 'Tecnologia', title: 'Infraestrutura odontológica moderna' },
      { category: 'Especialidade', title: 'Tratamentos integrados e completos' },
      { category: 'Conforto', title: 'Seu sorriso em mãos experientes' }
    ],
    ctaHeadline: `Inicie sua jornada com o(a) ${member.name}`,
    ctaSub: 'Planeje sua melhor versão clínica conosco com total previsibilidade.'
  };

  const DENTIST_SEO_DATA: Record<string, { title: string; description: string }> = {
    'dr-victor': {
      title: 'Dr. Victor Borges | Cirurgia e Sisos na Souriê Nova Era',
      description: 'Dr. Victor Borges atua com precisão técnica em extrações dentárias, sisos, restaurações estéticas em resina e clínica geral na Souriê Odontologia Nova Era.'
    },
    'dra-estefania': {
      title: 'Dra. Estefânia | Ortodontia e Invisalign na Souriê',
      description: 'Dra. Estefânia é especialista em ortodontia, Invisalign, ortodontia infantil e fixa na Souriê Odontologia Nova Era.'
    },
    'dr-breno': {
      title: 'Dr. Breno | Endodontia e Prótese Removível em Nova Era',
      description: 'Dr. Breno tem especialização em Endodontia e atua em tratamentos de canal, prótese removível e clínica geral na Souriê Odontologia Nova Era.'
    },
    'dra-beatriz': {
      title: 'Dra. Beatriz | Próteses Fixas e Estética na Souriê Nova Era',
      description: 'Beatriz atua em próteses fixas, restaurações estéticas, facetas em resina e clínica geral na Souriê Odontologia Nova Era.'
    },
    'dra-tayna': {
      title: 'Dra. Tayná | Odontopediatria na Souriê Nova Era MG',
      description: 'Dra. Tayná é odontopediatra com abordagem lúdica e acolhedora para cuidado com bebê, crianças e adolescentes na Souriê Odontologia Nova Era.'
    },
    'dra-junia': {
      title: 'Dra. Júnia | Harmonização Facial na Souriê Nova Era',
      description: 'Dra. Júnia é biomédica esteta especialista em harmonização orofacial. Preenchimento com ácido hialurônico, toxina botulínica e tratamentos de pele na Souriê.'
    },
    'nutri-maria-eduarda': {
      title: 'Maria Eduarda | Nutrição Clínica e Estética Souriê',
      description: 'Nutricionista Maria Eduarda atua em reeducação alimentar sem restrições, nutrição clínica e estética na Souriê Odontologia Nova Era.'
    }
  };

  const dentistSeo = DENTIST_SEO_DATA[member.slug] || {
    title: `Souriê | ${member.name} em Nova Era MG`,
    description: `${member.name} é ${member.role} na Souriê Odontologia. Especialista em ${member.specialties.slice(0, 2).join(', ')}. Conheça sua trajetória e agende uma consulta em Nova Era.`
  };

  return (
    <article ref={pageRef} className="flex flex-col relative overflow-hidden bg-bg-light">
      <SEO
        title={dentistSeo.title}
        description={dentistSeo.description}
        canonical={`https://sourie.com.br/equipe/${member.slug}`}
        schema={buildDentistSchema(member, imageSrc)}
      />

      {/* Decorative Background Element — single subtle blob */}
      <div aria-hidden="true" style={{ backgroundColor: isThemed ? theme.blobLight : undefined }} className={blobBgTopClass} />

      {/* Mobile Header - Rediseñado */}
      <header className="lg:hidden bg-bg-light pt-24 pb-10 px-6 animate-[fade-in-up_0.8s_ease-out_both]">
        {/* Profile section */}
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Profile image */}
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[4/5] mx-auto mt-2 mb-4">
            {/* Decorative frames */}
            <div style={isThemed ? { backgroundColor: theme.blobLight, opacity: 0.15 } : undefined} className={mobileImgFrameOuter} />
            <div style={isThemed ? { borderColor: theme.blobDeep + '59', opacity: 1 } : undefined} className={mobileImgFrameInner} />

            <div className="w-full h-full rounded-[40px] overflow-hidden border border-white/20 shadow-lg bg-bg-light">
              <img
                src={imageSrc}
                alt={`Foto de perfil profissional do especialista ${member.name}`}
                className="w-full h-full object-cover"
                decoding="async"
              />
            </div>

            {/* Floating Highlight Stat Badge (Mobile) */}
            <div className="absolute -bottom-5 -right-2 sm:-right-4 bg-white rounded-2xl p-3.5 shadow-xl border border-black/[0.04] z-20 flex items-center gap-2.5">
              <div className={`w-9 h-9 rounded-full ${theme.highlightBg} flex items-center justify-center ${theme.highlightIcon} shrink-0`}>
                <Award size={16} />
              </div>
              <div className="text-left">
                <p className={`text-[9px] font-semibold ${theme.highlightLabel} uppercase tracking-[0.15em]`}>{ext.highlightStat.label}</p>
                <p className={`text-[13px] font-bold ${theme.highlightValue} leading-none mt-0.5`}>{ext.highlightStat.value}</p>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-2">
            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-2">
              <span className={mobileCargoBadgeClass}>
                {member.role}
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-text-primary/40">
                {member.crm}
              </span>
            </div>

            {/* Name */}
            <h1 className={mobileNameHClass}>
              {firstName} <span className={accentSpanClass}>{lastName}</span>
            </h1>

            {/* Subtitle */}
            <p style={isThemed ? { color: theme.blobDeep, opacity: 0.85 } : undefined} className={subHeaderClass}>
              {ext.subtitle}
            </p>
          </div>

        </div>
      </header>

      {/* ── Main page content wrapper (same margins as SectionContainer/Footer) ── */}
      <div className="mx-auto max-w-page w-full px-6 md:px-10 lg:px-[63px]">

        {/* Desktop Header Navigation */}
        <nav className="hidden lg:block pt-32 mb-12 back-button" aria-label="Navegação secundária">
          <Link
            to="/#equipe"
            className={linkBackNavWrapClass}
          >
            <div
              style={isThemed ? { borderColor: theme.blobDeep + '33' } : undefined}
              className={circleBackBtnClass}
            >
              <ArrowLeft size={20} />
            </div>
            <span className="font-bold uppercase tracking-widest text-[11px]">Voltar para a Equipe</span>
          </Link>
        </nav>

        {/* Top spacing on mobile (after mobile hero) */}
        <div className="pt-10 lg:pt-0" />

        {/* Main Content Grid: Image on Left, Content on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left Column: Portrait & Stats (First in DOM so it goes left on desktop) */}
          <div className="hidden lg:block lg:col-span-5 relative profile-image-container h-full aspect-[3/4]">
            <div className="relative h-full select-none">
              {/* Solid Teal Accent Frames (Dual layer layout) */}
              <div style={isThemed ? { backgroundColor: theme.blobLight, opacity: 0.15 } : undefined} className={desktopImgFrameOuterClass} />
              <div style={isThemed ? { borderColor: theme.blobDeep + '33' } : undefined} className={desktopImgFrameInnerClass} />
              <div style={isThemed ? { backgroundColor: theme.blobDeep, opacity: 0.25 } : undefined} className={desktopImgBlurClass} />

              <div className="relative h-full rounded-[50px] overflow-hidden border border-white/20 shadow-[0_2px_4px_rgba(0,0,0,0.04),0_12px_32px_rgba(0,0,0,0.08)] group bg-bg-light">
                <img
                  src={imageSrc}
                  alt={`Retrato de estúdio do ${member.name}`}
                  className="w-full h-full object-cover grayscale-[0.05] group-hover:grayscale-0 transition-[transform,filter] duration-700 ease-out scale-[1.03] group-hover:scale-[1.05]"
                  decoding="async"
                />
              </div>

              {/* Floating Credentials Badge (Bottom Left) */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-3xl p-5 shadow-[0_2px_4px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] border border-black/[0.04] hover:-translate-y-1 hover:shadow-[0_4px_8px_rgba(0,0,0,0.04),0_16px_32px_rgba(0,0,0,0.08)] transition-[transform,box-shadow] duration-200 z-20">
                <p className={`text-[12px] font-semibold ${theme.highlightLabel} uppercase tracking-[0.2em] mb-1`}>Registro Profissional</p>
                <p className={`text-base font-bold ${theme.highlightValue} leading-none`}>{member.crm}</p>
              </div>

              {/* Floating Highlight Stat Badge (Top Right) */}
              <div className="absolute -top-6 -right-6 bg-white rounded-3xl p-5 shadow-[0_2px_4px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] border border-black/[0.04] z-20 flex items-center gap-3 hover:-translate-y-1 hover:shadow-[0_4px_8px_rgba(0,0,0,0.04),0_16px_32px_rgba(0,0,0,0.08)] transition-[transform,box-shadow] duration-200">
                <div className={`w-10 h-10 rounded-full ${theme.highlightBg} flex items-center justify-center ${theme.highlightIcon}`}>
                  <Award size={18} />
                </div>
                <div>
                  <p className={`text-[12px] font-semibold ${theme.highlightLabel} uppercase tracking-[0.15em]`}>{ext.highlightStat.label}</p>
                  <p className={`text-base font-bold ${theme.highlightValue} leading-none mt-0.5`}>{ext.highlightStat.value}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Specialties */}
          <div className="lg:col-span-7 profile-content-container flex flex-col justify-center animate-[fade-in-up_0.8s_ease-out_both] lg:animate-none" style={{ animationDelay: '200ms' }}>
            <div className="flex flex-col space-y-8 lg:space-y-10">
              {/* Desktop Name/Role */}
              <div className="hidden lg:block space-y-3">
                <div className="flex items-center gap-4">
                  <div style={isThemed ? { backgroundColor: theme.blobDeep, opacity: 0.3 } : undefined} className={desktopRoleSepClass} />
                  <span className={desktopRoleClass}>{member.role}</span>
                </div>
                <div aria-hidden="true" className={desktopNameHClass}>
                  {firstName} <span className={accentSpanClass}>{lastName}</span>
                </div>
                <p style={isThemed ? { color: theme.blobDeep, opacity: 0.85 } : undefined} className={desktopSubClass}>{ext.subtitle}</p>
              </div>

              {/* Philosophy Quote */}
              <blockquote style={isThemed ? { borderColor: theme.blobDeep + '55' } : undefined} className={philosophyBorderClass}>
                {ext.philosophy}
              </blockquote>

              {/* Specialties Section */}
              <section className="space-y-4" aria-label="Especialidades">
                <h3 style={isThemed ? { color: theme.blobDeep, opacity: 0.3 } : undefined} className={sectionSubheadClass}>Áreas de Especialização</h3>
                <div className="flex flex-wrap gap-3">
                  {member.specialties.map((specialty, idx) => (
                    <div key={idx} className={`flex items-center gap-3 bg-white/85 border ${theme.specialtyBorder} px-5 py-3 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-white hover:shadow-md transition-all duration-300 group`}>
                      <div className={`w-6 h-6 rounded-full ${theme.specialtyIconBg} flex items-center justify-center ${theme.highlightIcon} ${theme.specialtyIconBgHover} transition-colors duration-300`}>
                        <OutlineToothIcon size={14} />
                      </div>
                      <span className="text-sm font-bold text-teal-dark">{specialty}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Action Buttons: Instagram + CTA */}
              <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-4 pt-2 w-full">
                <ThemedButton
                  text="Agendar Consulta"
                  size="md"
                  theme={theme}
                  className="w-full sm:w-auto"
                  href={buildWhatsAppLink(
                    WA_DENTIST_MESSAGES[member.slug]?.hero ||
                    `Olá! Gostaria de agendar uma consulta com o(a) ${member.name}.`
                  )}
                />
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={isThemed ? { borderColor: theme.blobDeep + '22' } : undefined}
                  className={instagramHeroBtnClass}
                  aria-label={`Siga o profissional ${member.name} no Instagram em ${ext.instagramHandle}`}
                >
                  <InstagramIcon size={16} className={instagramIconHeroClass} />
                  <span className="text-[14px] font-semibold text-teal-dark group-hover/insta:text-teal-primary transition-colors duration-200">{ext.instagramHandle}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Sobre o Especialista */}
        <section
          id="sobre"
          className={`relative z-20 rounded-[40px] lg:rounded-[60px] overflow-hidden ${theme.aboutSectionBg} p-8 sm:p-12 lg:p-20 mt-16 lg:mt-24`}
          aria-label="Biografia do Especialista"
        >
          {/* Background SVG Blobs & curves matching PainSolutionSection */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full opacity-80"
            viewBox="0 0 1200 600"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <radialGradient id={`blob-light-${member.slug}`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={theme.blobLight} stopOpacity="0.25" />
                <stop offset="100%" stopColor={theme.blobLight} stopOpacity="0" />
              </radialGradient>
              <radialGradient id={`blob-deep-${member.slug}`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={theme.blobDeep} stopOpacity="0.3" />
                <stop offset="100%" stopColor={theme.blobDeep} stopOpacity="0" />
              </radialGradient>
              <linearGradient id={`curve-grad-${member.slug}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.4)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
            </defs>

            {/* Glowing Blobs */}
            <circle cx="15%" cy="20%" r="350" fill={`url(#blob-light-${member.slug})`} />
            <circle cx="85%" cy="60%" r="450" fill={`url(#blob-deep-${member.slug})`} />
            <circle cx="50%" cy="10%" r="300" fill={`url(#blob-light-${member.slug})`} opacity="0.6" />

            {/* Elegant Accent Curves */}
            <g fill="none">
              <path
                d="M 1100,-100 C 1300,200 600,450 900,600"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="1.5"
              />
              <path
                d="M 1200,-100 C 1400,200 700,450 1000,600"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
              />
              <path
                d="M 100,-50 C 400,100 250,450 0,600"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="1.5"
              />
              <path
                d="M 0,-50 C 300,100 150,450 -100,600"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
              />
            </g>
          </svg>

          <div className="relative z-10">
            {/* Bio */}
            <div className="max-w-4xl space-y-8">
              <div className="space-y-4">
                <span className={aboutSectionBadgeClass}>Sobre o Especialista</span>
                <h2 className="text-3xl lg:text-4xl font-medium text-white italic font-serif leading-tight">
                  Trajetória e <br className="hidden lg:block" /><span className={theme.aboutAccent}>Visão</span>
                </h2>
                <div className="h-px w-20 bg-white/20" />
              </div>
              <div className="space-y-5">
                {member.fullBio?.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-base lg:text-[17px] text-white/80 leading-[1.7] font-normal font-sans"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {member.differential && (
              <div className={`mt-16 ${theme.differentialBg} backdrop-blur-xl border border-white/10 shadow-[0_2px_4px_rgba(0,0,0,0.06),0_12px_32px_rgba(0,0,0,0.1)] rounded-[40px] p-8 lg:p-12 relative overflow-hidden hover:border-white/20 transition-[border-color,box-shadow] duration-300 group/differential`}>
                <div aria-hidden="true" className="absolute -right-20 -top-20 w-56 h-56 bg-white/[0.03] rounded-full blur-[40px] pointer-events-none" />
                <div className="relative z-10 space-y-4 max-w-3xl">
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                    <Sparkles size={13} className={theme.aboutAccent} />
                    <span className={differentialBadgeClass}>Meu Diferencial</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl text-white font-medium italic font-serif leading-snug">
                    {member.differential.title}
                  </h3>
                  <p className="text-[17px] text-white/75 leading-[1.7] font-normal max-w-2xl">
                    {member.differential.description}
                  </p>

                  {/* Differential WhatsApp Schedule link */}
                  <div className="pt-4">
                    <a
                      href={buildWhatsAppLink(
                        WA_DENTIST_MESSAGES[member.slug]?.differential ||
                        `Olá! Vi o perfil do(a) ${member.name} na Souriê e quero agendar uma consulta com foco na sua especialidade.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={differentialLinkClass}
                      aria-label="Agendar com foco nesta especialidade"
                    >
                      <span>Agendar com foco nesta especialidade</span>
                      <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform duration-200" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Bento Grid with Glassmorphic Interactive overlays */}
        <section ref={bentoRef} className="mt-16 lg:mt-24 pb-20" aria-label="Galeria profissional">
          <div className="flex flex-col items-center text-center space-y-3 mb-10">
            <span className={bentoSectionHeadClass}>O que você vai encontrar na Souriê</span>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-4 md:grid-rows-2 gap-4 lg:gap-4 md:h-[520px]">
            {/* Main large item */}
            <div className={`h-[340px] md:h-auto col-span-2 row-span-2 group relative overflow-hidden rounded-3xl md:rounded-[32px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] reveal-item ${isBentoVisible ? 'active' : ''}`} style={{ animationDelay: '100ms' }}>
              <img
                src={bentoData[0]?.src}
                alt={`${member.name} em atendimento de alta fidelidade`}
                className={`absolute inset-0 w-full h-full object-cover ${bentoData[0]?.pos} transition-transform duration-1000 group-hover:scale-105`}
                loading="lazy"
              />
              {/* Gentle overlay for base contrast */}
              <div
                style={themedBentoOverlayStyle}
                className={bentoOverlayBaseClass}
              />

              {/* Floating Content Container */}
              <div
                style={isThemed ? { backgroundColor: theme.blobDeep, backdropFilter: 'none' } : undefined}
                className={bentoFloatingBaseClass}>
                <span className={bentoCategoryClass}>
                  {ext.bentoItems[0]?.category}
                </span>
                <h4 className="text-sm md:text-base lg:text-lg font-medium text-white leading-snug transition-transform duration-500 ease-out delay-75">
                  {ext.bentoItems[0]?.title}
                </h4>
              </div>
            </div>

            {/* Top wide item (Middle on mobile) */}
            <div className={`h-[260px] md:h-auto col-span-2 row-span-1 group relative overflow-hidden rounded-3xl md:rounded-[32px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] reveal-item ${isBentoVisible ? 'active' : ''} order-last md:order-none`} style={{ animationDelay: '200ms' }}>
              <img
                src={bentoData[1]?.src}
                alt={`${member.name} operando tecnologias de ponta`}
                className={`absolute inset-0 w-full h-full object-cover ${bentoData[1]?.pos} transition-transform duration-1000 group-hover:scale-105`}
                loading="lazy"
              />
              {/* Gentle overlay for base contrast */}
              <div
                style={themedBentoOverlayStyle}
                className={bentoOverlayBaseClass}
              />

              {/* Floating Content Container */}
              <div
                style={isThemed ? { backgroundColor: theme.blobDeep, backdropFilter: 'none' } : undefined}
                className={bentoFloatingBaseClass}>
                <span className={bentoCategoryClass}>
                  {ext.bentoItems[1]?.category}
                </span>
                <h4 className="text-sm md:text-base lg:text-[17px] font-medium text-white leading-snug transition-transform duration-500 ease-out delay-75">
                  {ext.bentoItems[1]?.title}
                </h4>
              </div>
            </div>

            {/* Bottom smaller items */}
            <div className={`h-[260px] md:h-auto col-span-1 row-span-1 group relative overflow-hidden rounded-3xl md:rounded-[32px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] reveal-item ${isBentoVisible ? 'active' : ''}`} style={{ animationDelay: '300ms' }}>
              <img
                src={bentoData[2]?.src}
                alt={`${member.name} operando instrumentação com precisão`}
                className={`absolute inset-0 w-full h-full object-cover ${bentoData[2]?.pos} transition-transform duration-1000 group-hover:scale-105`}
                loading="lazy"
              />
              {/* Gentle overlay for base contrast */}
              <div
                style={themedBentoOverlayStyle}
                className={bentoOverlayBaseClass}
              />

              {/* Floating Content Container */}
              <div
                style={isThemed ? { backgroundColor: theme.blobDeep, backdropFilter: 'none' } : undefined}
                className={bentoFloatingBaseClass}>
                <span className={bentoCategoryClass}>
                  {ext.bentoItems[2]?.category}
                </span>
                <h4 className="text-xs sm:text-sm md:text-[13px] lg:text-sm font-medium text-white leading-snug transition-transform duration-500 ease-out delay-75">
                  {ext.bentoItems[2]?.title}
                </h4>
              </div>
            </div>

            <div className={`h-[260px] md:h-auto col-span-1 row-span-1 group relative overflow-hidden rounded-3xl md:rounded-[32px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] reveal-item ${isBentoVisible ? 'active' : ''}`} style={{ animationDelay: '400ms' }}>
              <img
                src={bentoData[3]?.src}
                alt={`Detalhe do consultório do especialista ${member.name}`}
                className={`absolute inset-0 w-full h-full object-cover ${bentoData[3]?.pos} transition-transform duration-1000 group-hover:scale-105`}
                loading="lazy"
              />
              {/* Gentle overlay for base contrast */}
              <div
                style={themedBentoOverlayStyle}
                className={bentoOverlayBaseClass}
              />

              {/* Floating Content Container */}
              <div
                style={isThemed ? { backgroundColor: theme.blobDeep, backdropFilter: 'none' } : undefined}
                className={bentoFloatingBaseClass}>
                <span className={bentoCategoryClass}>
                  {ext.bentoItems[3]?.category}
                </span>
                <h4 className="text-xs sm:text-sm md:text-[13px] lg:text-sm font-medium text-white leading-snug transition-transform duration-500 ease-out delay-75">
                  {ext.bentoItems[3]?.title}
                </h4>
              </div>
            </div>
          </div>
        </section>

      </div>{/* end max-w-page wrapper */}

      <section className="bg-bg-light/40 border-y border-teal-primary/[0.06] py-24 lg:py-32" aria-label="Especialistas da Equipe">
        <div className="mx-auto max-w-page w-full px-6 md:px-10 lg:px-[63px]">
          <div className="space-y-14">
            <div className="flex flex-col items-center text-center space-y-3">
              <span className="text-teal-primary font-semibold text-[12px] tracking-[0.2em] uppercase">Nosso Time</span>
              <h2 className="text-3xl lg:text-4xl font-medium text-teal-dark italic font-serif leading-tight">Outros especialistas que cuidam de você</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {TEAM_MEMBERS.filter(m => m.slug !== member.slug).map((other, idx) => {
                const otherTheme = { ...DEFAULT_THEME, ...(MEMBER_THEMES[other.slug] || {}) };
                const overlayViaStrong = otherTheme.overlayVia.replace('/20', '/65');
                const overlayClass = `absolute inset-0 bg-gradient-to-t ${otherTheme.overlayFrom} ${overlayViaStrong} to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500`;
                const badgeClass = `absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full ${otherTheme.firstNameText} text-[12px] font-bold uppercase tracking-[0.12em] shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-black/[0.04]`;
                const crmClass = `${otherTheme.roleText} text-[12px] font-semibold uppercase tracking-[0.1em]`;
                const arrowBtnClass = `w-10 h-10 rounded-full bg-white/15 border border-white/25 backdrop-blur-md flex items-center justify-center text-white opacity-90 group-hover:opacity-100 group-hover:scale-[1.08] transition-[opacity,transform,background-color] duration-300 group-hover:${otherTheme.btnBg}`;

                return (
                  <Link
                    key={idx}
                    to={`/equipe/${other.slug}`}
                    className="group relative overflow-hidden rounded-[40px] aspect-[4/5] bg-bg-light shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.04),0_16px_40px_rgba(0,0,0,0.08)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1"
                    aria-label={`Ver perfil detalhado do especialista ${other.name}`}
                  >
                    <img
                      src={teamImages[other.slug]}
                      alt={`Especialista ${other.name}`}
                      className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-[1.03] transition-[transform,filter] duration-700"
                      loading="lazy"
                    />
                    {/* Gradient overlay — themed */}
                    <div className={overlayClass} />

                    {/* Floating role badge — themed */}
                    <div className={badgeClass}>
                      {other.role}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-1 group-hover:translate-y-0 transition-transform duration-300 flex items-end justify-between gap-4">
                      <div className="space-y-1.5">
                        <span className={crmClass}>{other.crm}</span>
                        <h4 className="text-xl lg:text-2xl font-medium text-white tracking-tight leading-tight">{other.name}</h4>
                      </div>
                      <div className={arrowBtnClass}>
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* High-conversion personalized CTA */}
      <div className="mx-auto max-w-page w-full px-6 md:px-10 lg:px-[63px] pt-20 lg:pt-28 pb-20 lg:pb-32">
        {/* Full Width CTA: Premium High-Conversion Design */}
        <div
          ref={ctaRef}
          className={`cta-card-container transition-[opacity,transform] duration-700 ease-out reveal-item ${isCtaVisible ? 'active' : ''}`}
        >
          <div className="bg-navy-dark rounded-[48px] lg:rounded-[64px] p-10 lg:p-24 text-white relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">

            {/* Subtle background atmosphere — single blob each side */}
            <div aria-hidden="true" className="absolute -top-48 -right-48 w-[500px] h-[500px] bg-teal-primary/[0.15] blur-[100px] rounded-full pointer-events-none" />
            <div aria-hidden="true" className="absolute -bottom-48 -left-48 w-[400px] h-[400px] bg-cyan-light/[0.08] blur-[100px] rounded-full pointer-events-none" />

            {/* Subliminal Brand Icon */}
            <div aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.015] pointer-events-none scale-150">
              <OutlineToothIcon size={600} />
            </div>

            <div className="relative z-10 text-center lg:text-left space-y-6 max-w-3xl">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-light" />
                <span className="text-[12px] font-semibold uppercase tracking-[0.15em] text-white/60">Atendimento humanizado</span>
              </div>

              <div className="space-y-4">
                <h4 className="text-3xl lg:text-5xl font-medium leading-[1.1] tracking-tight max-w-2xl">
                  {ext.ctaHeadline}
                </h4>
                <p className="text-white/50 text-lg lg:text-xl font-normal leading-relaxed max-w-xl">
                  {ext.ctaSub}
                </p>
              </div>
            </div>

            <div className="relative z-10 w-full lg:w-auto flex flex-col items-center gap-4">
              <Button
                text="Agendar Consulta"
                icon="arrow-circle"
                variant="white"
                size="lg"
                href={buildWhatsAppLink(
                  WA_DENTIST_MESSAGES[member.slug]?.finalCta ||
                  `Olá! Quero agendar uma consulta com o(a) ${member.name} na Souriê. Estão disponíveis?`
                )}
                className="shadow-[0_4px_8px_rgba(0,0,0,0.06),0_12px_32px_rgba(0,0,0,0.1)] w-full sm:w-auto"
              />
            </div>
          </div>
        </div>
      </div>{/* end CTA wrapper */}

    </article>
  );
}
