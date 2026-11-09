import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useParams, Link, Navigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);
import SectionContainer from '../components/shared/SectionContainer';
import SEO from '../components/shared/SEO';
import { buildProcedureSchema } from '../utils/SEOData';
import Button from '../components/shared/Button';
import {
  ChevronRight,
  ArrowRight,
  Sparkles,
  Award,
  ShieldCheck,
  Activity,
  Clock,
  CheckCircle2,
  AlignCenter,
  ScanLine,
  Smile,
  Zap,
  Layers,
  HeartPulse,
  Syringe,
  Scissors,
  BrainCircuit,
  Gem,
  Sparkle,
  Bone,
  Baby,
  Shield,
  BarChart2,
  Stethoscope,
  Star
} from 'lucide-react';
import { buildWhatsAppLink, WA_PROCEDURE_MESSAGES } from '../utils/constants';
import { OutlineToothIcon, GoogleIcon, GoogleWatermarkIcon } from '../components/shared/Icons';
import ScrollReveal from '../components/shared/ScrollReveal';
import SpecialtyIllustration from '../components/shared/SpecialtyIllustrations';

// Map slugs to representative icons for the procedure page hero header
const PROCEDURE_ICONS: Record<string, React.ElementType> = {
  'ortodontia': Smile,
  'clinica-geral': Stethoscope,
  'odontologia-estetica': Sparkles,
  'tratamento-de-canal': Activity,
  'cirurgias': Scissors,
  'proteses': Layers,
  'implantes': Bone,
  'odontopediatria': Baby,
};

// Import Procedure Images & Local Assets
import ortodontiaImg from '../assets/images/procedimentos/ortodontia.webp';
import clinicaGeralImg from '../assets/images/procedimentos/clinica-geral.webp';
import esteticaImg from '../assets/images/procedimentos/estetica.webp';
import canalImg from '../assets/images/procedimentos/canal.webp';
import cirurgiasImg from '../assets/images/procedimentos/cirurgias.webp';
import proteseImg from '../assets/images/procedimentos/protese.webp';
import odontopediatriaImg from '../assets/images/procedimentos/odontopediatria.webp';
import tecnologiaImg from '../assets/images/clinica/scanner-3d-tecnologia.webp';
import victorTratamentoImg from '../assets/images/clinica/atendimento-dr-victor.webp';
import clinicaExternaImg from '../assets/images/clinica/fachada-clinica.webp';
import clinicaInterna1Img from '../assets/images/clinica/consultorio-principal.webp';
import clinicaInterna2Img from '../assets/images/clinica/consultorio-atendimento.webp';
import clinicaInterna3Img from '../assets/images/clinica/equipamentos-clinica.webp';
import fotoClinicaImg from '../assets/images/clinica/fachada-clinica.webp';
import equipeTecnologiaImg from '../assets/images/clinica/equipe-tecnologia.webp';
import odontopediatriaHeaderImg from '../assets/images/procedimentos/hero-odontopediatria.webp';
import ortodontiaHeaderImg from '../assets/images/procedimentos/hero-ortodontia.webp';
import protesesHeaderImg from '../assets/images/procedimentos/proteses-implantes.webp';
import clinicaGeralHeaderImg from '../assets/images/procedimentos/clinica-geral-landscape.webp';

// Real Clinical Cases & Specialist Procedure Photos
import invisalignEstefaniaImg from '../assets/images/dentistas/estefania/caso-invisalign.webp';
import aparelhoOrtopedicoEstefaniaImg from '../assets/images/dentistas/estefania/caso-aparelho-ortopedico.webp';
import victorResultado from '../assets/images/dentistas/victor/caso-resultado.webp';
import coroasAntesDepoisBeatriz from '../assets/images/dentistas/beatriz/caso-coroas-antes-depois.webp';
import coroaBeatrizImg from '../assets/images/dentistas/beatriz/caso-coroa.webp';
import resultadosBigodeChines from '../assets/images/dentistas/junia/caso-bigode-chines.webp';
import casoRestauracaoVictor from '../assets/images/dentistas/victor/caso-restauracao-antes-depois.webp';
import taynaImg from '../assets/images/dentistas/tayna/bento-atendimento.webp';
import escovasKidImg from '../assets/images/dentistas/tayna/caso-escovas-kids.webp';
import brenoAtendimentoEndoImg from '../assets/images/dentistas/breno/atendimento-dr-breno.webp';
import raioXEndodontiaImg from '../assets/images/dentistas/breno/caso-raio-x-endodontia.webp';
import casoProteseRemovivelBreno from '../assets/images/dentistas/breno/caso-protese-removivel-antes-depois.webp';

// Verified Patient Testimonial Avatar
import testimonialJennifer from '../assets/images/depoimentos/paciente-jennifer.webp';

export interface ServiceItem {
  name: string;
  desc: string;
  benefit: string;
  icon: React.ElementType;
  tag: string;
  image: string;
}

export interface ClinicalCase {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
  highlight?: string;
  imageClassName?: string;
}

export interface Testimonial {
  name: string;
  text: string;
  role: string;
  avatar?: string;
}

export interface MethodologyStep {
  step: string;
  title: string;
  desc: string;
  icon: React.ElementType;
  color: string;
}

export interface StepItem {
  number: string;
  title: string;
  desc: string;
}

export interface PageContent {
  title: string;
  category: string;
  sectionTitle: string;
  description: string;
  headline: string;
  subheadline: string;
  bodyText: string;
  whyDoIt: string;
  targetAudience: string[];
  threeSteps: StepItem[];
  responsibility: string;
  heroCta: string;
  ctaText: string;
  heroImage?: string;
  heroImagePosition?: string;
  heroDesktopShiftClass?: string;
  heroOverlayOpacity?: number;
  heroOverlayIntensity?: number;
  heroOverlayColor?: string;
  mainImage: string;
  clinicalCases: ClinicalCase[];
  services: ServiceItem[];
  methodology: MethodologyStep[];
  testimonial: Testimonial;
}

const PAGES_CONTENT: Record<string, PageContent> = {
  'ortodontia': {
    title: 'Ortodontia & Alinhadores',
    category: 'Alinhadores Invisíveis',
    sectionTitle: 'O jeito moderno e discreto de alinhar seu sorriso',
    description: 'Conquiste dentes alinhados e um sorriso bonito sem o incômodo dos aparelhos fixos tradicionais.',
    headline: 'Conquiste um sorriso alinhado com total conforto',
    subheadline: 'Alinhe seus dentes sem fios machucando ou mude sua rotina',
    bodyText: 'Diga adeus aos ferimentos e aos fios de metal. Com os alinhadores transparentes Invisalign® e nosso escaneamento 3D rápido, você visualiza em uma simulação digital como seu sorriso vai ficar antes mesmo de começar. É um tratamento discreto, confortável e que se encaixa no seu dia a dia.',
    whyDoIt: 'Conquiste um sorriso alinhado e harmônico sem sofrer com ferimentos, fios metálicos visíveis ou alterações na sua rotina diária.',
    targetAudience: [
      'Pessoas que buscam alinhar os dentes com total discrição e conforto',
      'Quem quer evitar o incômodo e ferimentos de aparelhos metálicos fixos',
      'Quem valoriza higiene bucal simplificada e praticidade para comer sem restrições'
    ],
    threeSteps: [
      { number: '01', title: 'Escaneamento 3D', desc: 'Mapeamos sua boca digitalmente sem o desconforto de massinhas tradicionais.' },
      { number: '02', title: 'Simulação 3D', desc: 'Visualizamos em tela o resultado do sorriso antes mesmo de iniciar o uso.' },
      { number: '03', title: 'Uso dos Alinhadores', desc: 'Você troca as placas transparentes no conforto de casa periodicamente.' }
    ],
    responsibility: 'Acompanhamos cada etapa de perto para garantir que você alcance o resultado desejado com total tranquilidade.',
    heroCta: 'Simular Meu Sorriso',
    ctaText: 'Sorriso alinhado de forma rápida e segura',
    heroImage: ortodontiaHeaderImg,
    mainImage: ortodontiaImg,
    clinicalCases: [
      {
        image: invisalignEstefaniaImg,
        tag: 'Alinhadores',
        title: 'Alinhamento Invisível sem Fios Metálicos',
        subtitle: 'Estética e discrição durante todo o tratamento',
        description: 'Alinhadores transparentes sob medida que movimentam os dentes com suavidade e previsibilidade, sem restrições alimentares e fáceis de higienizar.'
      },
      {
        image: clinicaInterna3Img,
        tag: 'Escaneamento 3D',
        title: 'Escaneamento Intraoral Digital sem Massinha',
        subtitle: 'Simulação 3D instantânea do seu novo sorriso',
        description: 'Adeus às moldagens antigas desconfortáveis. O scanner 3D captura sua arcada em segundos e simula digitalmente o resultado antes de começar.'
      },
      {
        image: aparelhoOrtopedicoEstefaniaImg,
        tag: 'Ortopedia Guiada',
        title: 'Aparelhos 100% Personalizados do Seu Jeito',
        subtitle: 'Aparelhos guiados para jovens e adultos',
        description: 'Totalmente personalizados para o jeito que quiser, com as cores, temas e detalhes favoritos que as crianças e jovens adoram escolher. Unem diversão e precisão ortopédica para guiar o crescimento correto dos dentes e das bases ósseas com conforto e motivação.'
      }
    ],
    testimonial: {
      name: 'Juscilene Martins Oliveira',
      text: 'Ambiente acolhedor e profissionais muito preparados. O atendimento é humanizado e o cuidado não se restringe ao consultório: entram em contato para saber se estamos nos adaptando bem ao aparelho e permanecem sempre disponíveis para eventuais dúvidas. Um ambiente seguro e completo.',
      role: 'Paciente de Ortodontia'
    },
    services: [
      {
        name: 'Alinhadores Transparentes',
        desc: 'Placas transparentes sob medida para você alinhar seus dentes suavemente.',
        benefit: 'Removíveis para comer e escovar os dentes, sem fios de metal.',
        icon: AlignCenter,
        tag: 'Prático e Discreto',
        image: ortodontiaImg
      },
      {
        name: 'Escaneamento 3D',
        desc: 'Cópia digital precisa da sua boca em minutos, sem massinhas incômodas.',
        benefit: 'Veja na tela a simulação exata de como seu sorriso vai ficar.',
        icon: ScanLine,
        tag: 'Sem Massinha',
        image: clinicaInterna3Img
      },
      {
        name: 'Aparelho Infantil e Guiado',
        desc: 'Aparelhos 100% personalizados com as cores e desenhos que as crianças amam escolher.',
        benefit: 'As crianças usam com alegria e orgulho, prevenindo problemas mastigatórios no futuro.',
        icon: BrainCircuit,
        tag: 'Personalizado',
        image: clinicaInterna1Img
      },
      {
        name: 'Aparelhos Discretos de Safira',
        desc: 'Peças fixas transparentes na cor exata dos dentes que quase não aparecem.',
        benefit: 'Super discretos, duráveis e resistentes a manchas de alimentos.',
        icon: Gem,
        tag: 'Estético e Fixo',
        image: victorTratamentoImg
      }
    ],
    methodology: [
      { step: '01', title: 'Cópia 3D Rápida', desc: 'Escaneamos sua boca sem massinha e sem desconforto.', icon: ScanLine, color: 'bg-teal-primary' },
      { step: '02', title: 'Simulação', desc: 'Mostramos no computador como seu sorriso vai ficar pronto.', icon: Sparkles, color: 'bg-teal-medium' },
      { step: '03', title: 'Uso Prático', desc: 'Você usa as plaquinhas no dia a dia e tira apenas para comer.', icon: Smile, color: 'bg-teal-dark' },
      { step: '04', title: 'Sorriso Alinhado', desc: 'Acompanhamos todo o processo até você conquistar o resultado final.', icon: CheckCircle2, color: 'bg-navy-dark' }
    ]
  },
  'clinica-geral': {
    title: 'Check-up & Limpeza',
    category: 'Cuidado & Prevenção',
    sectionTitle: 'Proteção preventiva para manter seus dentes sempre saudáveis',
    description: 'Evite dores e surpresas desagradáveis através de limpezas detalhadas e avaliação preventiva com câmera digital.',
    headline: 'Mantenha sua boca saudável e livre de dores',
    subheadline: 'Descubra pequenas alterações antes que se tornem problemas sérios',
    bodyText: 'Com nosso Check-up com Câmera Digital, mostramos em uma tela HD a saúde de cada dente com aumento de imagens, descobrindo pequenas cáries ou infiltrações logo no início. Realizamos limpezas delicadas e eficientes que removem tártaro e manchas, deixando seu hálito fresco e gengivas fortes.',
    whyDoIt: 'Proteja seus dentes contra dores súbitas e tratamentos caros, detectando pequenas cáries e lesões logo no início.',
    targetAudience: [
      'Quem está há mais de 6 meses sem passar por uma avaliação preventiva',
      'Pessoas com sensibilidade, sangramento gengival ou acúmulo de tártaro',
      'Quem deseja manter o hálito sempre fresco e os dentes fortalecidos'
    ],
    threeSteps: [
      { number: '01', title: 'Exame com Scanner 3D', desc: 'Filmamos cada dente em alta definição para identificar detalhes na TV.' },
      { number: '02', title: 'Limpeza Suave', desc: 'Removemos manchas e tártaro de forma delicada sem agredir o esmalte.' },
      { number: '03', title: 'Proteção Preventiva', desc: 'Fortalecemos os dentes e orientamos os cuidados ideais no seu dia a dia.' }
    ],
    responsibility: 'Nosso foco é prevenir para que você não precise passar por procedimentos complicados no futuro.',
    heroCta: 'Agendar Check-up',
    ctaText: 'Garanta sua saúde bucal preventiva hoje',
    heroImage: clinicaGeralHeaderImg,
    mainImage: clinicaGeralImg,
    clinicalCases: [
      {
        image: tecnologiaImg,
        tag: 'Diagnóstico Digital',
        title: 'Check-up Digital com Scanner HD',
        subtitle: 'Detecção de lesões invisíveis a olho nu',
        description: 'Filmagem intraoral em alta definição na tela de TV, detectando microfraturas, desgastes e cáries iniciais antes que causem dor ou necessidade de canal.'
      },
      {
        image: equipeTecnologiaImg,
        tag: 'Prevenção',
        title: 'Profilaxia e Limpeza Suave Ultrassônica',
        subtitle: 'Remoção de tártaro e manchas sem agredir o esmalte',
        description: 'Eliminação completa de placa bacteriana e manchas com jato delicado, deixando as gengivas fortes, hálito puro e dentes protegidos.'
      },
      {
        image: clinicaInterna1Img,
        tag: 'Consultório',
        title: 'Consultório Moderno com Biossegurança Hospitalar',
        subtitle: 'Infraestrutura acolhedora para atendimento sem dor',
        description: 'Ambiente planejado com climatização suave, cadeira ergonômica e atendimento individualizado para que sua rotina de cuidados seja relaxante e ágil.'
      }
    ],
    testimonial: {
      name: 'Wandersom Alves',
      text: 'Fui à clínica por indicação e o atendimento foi impecável em todos os momentos! Explicam tudo com muita clareza e paciência nos mínimos detalhes, mostrando cada procedimento e todos os cuidados pós-atendimento. Essa transparência deixa a gente muito seguro e tranquilo. Recomendo com toda certeza!',
      role: 'Paciente da Souriê'
    },
    services: [
      {
        name: 'Check-up com Scanner 3D',
        desc: 'Filmagem interna em alta definição para acompanhar a saúde dos dentes.',
        benefit: 'Detecta pequenos problemas no início, evitando tratamentos caros.',
        icon: ScanLine,
        tag: 'Diagnóstico Fácil',
        image: clinicaGeralImg
      },
      {
        name: 'Limpeza Profunda e Delicada',
        desc: 'Remoção de tártaro e manchas com tecnologia suave e confortável.',
        benefit: 'Gengivas limpas, sem sangramentos e sensação imediata de frescor.',
        icon: Sparkle,
        tag: 'Limpeza Suave',
        image: equipeTecnologiaImg
      },
      {
        name: 'Restaurações na Cor do Dente',
        desc: 'Troca de restaurações antigas por resinas modernas com tom idêntico.',
        benefit: 'Aparência 100% natural, resistente e sem marcas imperfeitas.',
        icon: Layers,
        tag: 'Natural e Bonito',
        image: fotoClinicaImg
      },
      {
        name: 'Cuidado das Gengivas',
        desc: 'Tratamentos especializados contra inflamações e sangramento gengival.',
        benefit: 'Elimina bactérias nocivas e preserva dentes bem firmes.',
        icon: HeartPulse,
        tag: 'Gengiva Saudável',
        image: clinicaInterna2Img
      }
    ],
    methodology: [
      { step: '01', title: 'Exame com Câmera', desc: 'Mostramos cada detalhe dos seus dentes na tela de TV.', icon: ScanLine, color: 'bg-teal-primary' },
      { step: '02', title: 'Limpeza e Brilho', desc: 'Removemos sujeiras e manchas que a escova comum não tira.', icon: Sparkle, color: 'bg-teal-medium' },
      { step: '03', title: 'Pequenos Reparos', desc: 'Se houver alguma cárie inicial, cuidamos de forma rápida.', icon: HeartPulse, color: 'bg-teal-dark' },
      { step: '04', title: 'Manutenção', desc: 'Orientamos como manter seu sorriso protegido e saudável no dia a dia.', icon: ShieldCheck, color: 'bg-navy-dark' }
    ]
  },
  'odontologia-estetica': {
    title: 'Transformação do Sorriso',
    category: 'Estética do Sorriso',
    sectionTitle: 'O sorriso que você sempre quis, planejado para seu rosto',
    description: 'Transforme a cor, o formato e o alinhamento dos seus dentes de forma harmônica e natural.',
    headline: 'Volte a sorrir com total orgulho e confiança',
    subheadline: 'Recupere a vontade de tirar fotos e conversar bem de perto',
    bodyText: 'Criamos um projeto personalizado para o seu sorriso respeitando o formato do seu rosto e a sua personalidade. Seja com clareamentos eficientes ou lentes e facetas em resina, você conquista dentes mais brancos, bem alinhados e com um acabamento suave e natural.',
    whyDoIt: 'Recupere a vontade de sorrir nas fotos e em conversas de perto com dentes brancos, bem formatados e perfeitamente naturais.',
    targetAudience: [
      'Pessoas incomodadas com dentes amarelados, manchados ou desgastados',
      'Quem possui pequenos desníveis de tamanho ou espaços entre dentes',
      'Quem busca uma transformação estética sutil, elegante e harmonizada'
    ],
    threeSteps: [
      { number: '01', title: 'Projeto Facial 3D', desc: 'Desenhamos a proporção ideal do novo sorriso em sintonia com o seu rosto.' },
      { number: '02', title: 'Definição de Tom', desc: 'Escolhemos a cor exata e a resina de alta tecnologia para máxima naturalidade.' },
      { number: '03', title: 'Aplicação Precisa', desc: 'Realizamos o clareamento ou facetas em resina com acabamento impecável.' }
    ],
    responsibility: 'Nosso objetivo é proporcionar um sorriso bonito, iluminado e extremamente natural.',
    heroCta: 'Transformar Meu Sorriso',
    ctaText: 'Planejamento personalizado do seu novo sorriso',
    heroDesktopShiftClass: 'lg:translate-x-[22%]',
    heroImagePosition: 'center center',
    mainImage: esteticaImg,
    clinicalCases: [
      {
        image: victorResultado,
        tag: 'Facetas em Resina',
        title: 'Facetas e Resina Estratificada',
        subtitle: 'Brilho, textura e formato em harmonia natural',
        description: 'Reconstrução estética em resina de alta performance para corrigir desníveis, espaçamentos e tonalidades com acabamento suave e natural.'
      },
      {
        image: resultadosBigodeChines,
        tag: 'Harmonização Facial',
        title: 'Suavização e Rejuvenescimento Facial',
        subtitle: 'Equilíbrio sutil entre sorriso e linhas do rosto',
        description: 'Aplicação estratégica de bioestimuladores e preenchedores para devolver sustentação dérmica e jovialidade sem perder a naturalidade da expressão.'
      },
      {
        image: casoRestauracaoVictor,
        tag: 'Antes & Depois',
        title: 'Restauração Estética & Reconstrução',
        subtitle: 'Reconstruindo os dentes com resina estética',
        description: 'Reconstrução estética de dentes desgastados e comprometidos com resina composta de alta performance, devolvendo formato anatômico, função mastigatória e harmonia ao sorriso.',
        imageClassName: 'object-contain p-2.5 sm:p-3'
      }
    ],
    testimonial: {
      name: 'Jennifer Fidelis',
      avatar: testimonialJennifer,
      text: 'Era exatamente isso que eu buscava: naturalidade! Amei o resultado final desse processo lindo, superou todas as minhas expectativas. Muito obrigada ao Dr. Victor por elevar a minha autoestima!',
      role: 'Paciente de Estética Dental'
    },
    services: [
      {
        name: 'Lentes e Facetas (Resina)',
        desc: 'Modelagem estética em resina de alta performance para corrigir manchas, formatos e espaços.',
        benefit: 'Transformação harmônica, natural e com excelente acabamento estético.',
        icon: Gem,
        tag: 'Estética em Resina',
        image: esteticaImg
      },
      {
        name: 'Clareamento Dental',
        desc: 'Tratamento seguro que remove o amarelado com proteção contra sensibilidade.',
        benefit: 'Dentes visivelmente mais brancos em poucas sessões.',
        icon: Zap,
        tag: 'Dentes Brancos',
        image: clinicaInterna3Img
      },
      {
        name: 'Harmonização e Suavização',
        desc: 'Procedimentos suaves para equilibrar o sorriso e o contorno gengival.',
        benefit: 'Um sorriso mais equilibrado e proporcional ao seu rosto.',
        icon: Sparkle,
        tag: 'Harmonia Facial',
        image: victorTratamentoImg
      },
      {
        name: 'Toxina Botulínica',
        desc: 'Procedimento injetável usado para suavizar rugas e linhas de expressão.',
        benefit: 'Resultados naturais que rejuvenescem a aparência sem alterar a expressão.',
        icon: Syringe,
        tag: 'Rugas e Linhas',
        image: esteticaImg
      },
      {
        name: 'Preenchimento Facial',
        desc: 'Técnica que utiliza substâncias, como o ácido hialurônico, para restaurar volume e contorno ao rosto.',
        benefit: 'Restaura o volume perdido e define contornos de forma suave e natural.',
        icon: Sparkles,
        tag: 'Volume e Contorno',
        image: victorTratamentoImg
      },
      {
        name: 'Tratamentos de Pele',
        desc: 'O tratamento de pele inclui limpeza de pele, peelings químicos e microagulhamento para rejuvenescimento e tratamento de manchas.',
        benefit: 'Pele mais limpa, uniforme e com aspecto jovem e saudável.',
        icon: HeartPulse,
        tag: 'Rejuvenescimento',
        image: clinicaInterna3Img
      },
      {
        name: 'Preenchimento Estratégico',
        desc: 'Pontos estratégicos de preenchimento com ácido hialurônico.',
        benefit: 'Realça traços naturais e devolve harmonia ao rosto.',
        icon: Activity,
        tag: 'Harmonia Facial',
        image: fotoClinicaImg
      }
    ],
    methodology: [
      { step: '01', title: 'Conversa e Desejo', desc: 'Entendemos exatamente o que você gostaria de mudar no seu sorriso.', icon: Smile, color: 'bg-teal-primary' },
      { step: '02', title: 'Projeto do Sorriso', desc: 'Desenhamos as proporções ideais para combinar com o seu rosto.', icon: Sparkles, color: 'bg-teal-medium' },
      { step: '03', title: 'Aplicação em Resina', desc: 'Realizamos o clareamento ou a escultura das facetas em resina com precisão.', icon: Zap, color: 'bg-teal-dark' },
      { step: '04', title: 'Novo Sorriso', desc: 'Você sai do consultório pronto para sorrir livremente para o mundo.', icon: CheckCircle2, color: 'bg-navy-dark' }
    ]
  },
  'tratamento-de-canal': {
    title: 'Tratamento Endodôntico (Canal)',
    category: 'Endodontia',
    sectionTitle: 'Tratamento de canal para manter seu dente',
    description: 'Ajuda a tratar infecções e lesões no interior do dente, aliviando dores e preservando os dentes naturais sempre que possível.',
    headline: 'Tratamento de canal para manter seu dente',
    subheadline: 'Ajuda a tratar infecções e lesões no interior do dente, aliviando dores e preservando os dentes naturais',
    bodyText: 'Na Endodontia, realizamos tratamentos de canal ajudando a tratar infecções e lesões no interior do dente, aliviando dores e preservando os dentes naturais sempre que possível.',
    whyDoIt: 'Tratar infecções e lesões no interior do dente, aliviando dores e preservando os dentes naturais sempre que possível.',
    targetAudience: [
      'Pessoas com infecções e lesões no interior do dente',
      'Pacientes com dores intensas ou sensibilidade no dente que precisam preservar o dente natural',
      'Quem precisa de retratamento em dentes que já passaram por tratamento de canal'
    ],
    threeSteps: [
      {
        number: '01',
        title: 'Planejamento e diagnóstico',
        desc: 'Avaliamos a estrutura do dente por meio de exames clínicos e radiográficos para identificar a necessidade do tratamento e definir a melhor abordagem.'
      },
      {
        number: '02',
        title: 'Tratamento de canal',
        desc: 'Removemos o tecido pulpar comprometido, realizamos a limpeza, desinfecção e modelagem dos canais radiculares.'
      },
      {
        number: '03',
        title: 'Restauração do dente',
        desc: 'Após o tratamento, realizamos a reconstrução da estrutura dentária, devolvendo ao dente sua função e resistência, preservando-o na arcada.'
      }
    ],
    responsibility: 'Oferecemos suporte e acompanhamento pós-procedimento para garantir sua recuperação sem preocupações.',
    heroCta: 'Agendar Avaliação',
    ctaText: 'Preservação dos dentes naturais e alívio da dor',
    mainImage: canalImg,
    clinicalCases: [
      {
        image: tecnologiaImg,
        tag: 'Diagnóstico',
        title: 'Diagnóstico por Imagem e Localização dos Canais',
        subtitle: 'Precisão anatômica milimétrica',
        description: 'Avaliação minuciosa da anatomia interna radicular para localizar todos os canais e garantir a eliminação completa das bactérias causadoras de dor.'
      },
      {
        image: brenoAtendimentoEndoImg,
        tag: 'Cuidado Humanizado',
        title: 'Cuidado Humanizado com o Dr. Breno',
        subtitle: 'Atendimento acolhedor e no seu ritmo',
        description: 'Sabemos que o canal gera receio. Por isso, cada etapa é explicada com calma e transparência, respeitando sua sensibilidade, com pausas sempre que necessário e anestesia cuidadosa para um atendimento seguro e previsível.'
      },
      {
        image: raioXEndodontiaImg,
        tag: 'Raio-X',
        title: 'Raiz Fechada e Dente Forte de Novo',
        subtitle: 'Dente protegido para não quebrar',
        description: 'Depois de tratar o canal, fechamos bem a raiz por dentro e restauramos o dente para ele ficar firme. Você volta a mastigar com segurança e evita perder o seu dente.'
      }
    ],
    testimonial: {
      name: 'Wandersom Alves',
      text: 'Fui à clínica por indicação e o atendimento foi impecável em todos os momentos! Explicam tudo com muita clareza e paciência nos mínimos detalhes, mostrando cada procedimento e todos os cuidados pós-atendimento. Essa transparência deixa a gente muito seguro e tranquilo. Recomendo com toda certeza!',
      role: 'Paciente da Souriê'
    },
    services: [
      {
        name: 'Tratamento de Canal para Manter seu Dente',
        desc: 'Ajuda a tratar infecções e lesões no interior do dente, preservando os dentes naturais.',
        benefit: 'Alivia dores e preserva o seu dente natural na arcada.',
        icon: Activity,
        tag: 'Preservação Dental',
        image: canalImg
      },
      {
        name: 'Retratamento',
        desc: 'Intervenção em canais já tratados para limpeza e desinfecção dos canais radiculares.',
        benefit: 'Auxilia na manutenção e preservação do dente na arcada.',
        icon: ShieldCheck,
        tag: 'Endodontia',
        image: equipeTecnologiaImg
      },
      {
        name: 'Planejamento e Diagnóstico',
        desc: 'Avaliação da estrutura do dente por meio de exames clínicos e radiográficos.',
        benefit: 'Identifica a necessidade do tratamento e define a melhor abordagem.',
        icon: ScanLine,
        tag: 'Diagnóstico',
        image: tecnologiaImg
      },
      {
        name: 'Restauração do Dente',
        desc: 'Reconstrução da estrutura dentária após o tratamento de canal.',
        benefit: 'Devolve ao dente sua função e resistência, preservando-o na arcada.',
        icon: Layers,
        tag: 'Reconstrução',
        image: clinicaInterna1Img
      }
    ],
    methodology: [
      { step: '01', title: 'Planejamento e diagnóstico', desc: 'Avaliamos a estrutura do dente por meio de exames clínicos e radiográficos.', icon: ScanLine, color: 'bg-teal-primary' },
      { step: '02', title: 'Tratamento de canal', desc: 'Removemos o tecido pulpar comprometido e realizamos a limpeza e modelagem dos canais.', icon: Activity, color: 'bg-teal-medium' },
      { step: '03', title: 'Restauração do dente', desc: 'Realizamos a reconstrução da estrutura dentária, preservando-o na arcada.', icon: ShieldCheck, color: 'bg-teal-dark' },
      { step: '04', title: 'Pós-atendimento', desc: 'Acompanhamos sua evolução pelo WhatsApp sempre que precisar.', icon: Clock, color: 'bg-navy-dark' }
    ]
  },
  'cirurgias': {
    title: 'Cirurgias',
    category: 'Cirurgias & Sisos',
    sectionTitle: 'Precisão técnica e atendimento humanizado para uma remoção de siso mais tranquila',
    description: 'Remoção de sisos e cirurgias orais planejadas com exames detalhados, segurança e acompanhamento pós-operatório.',
    headline: 'Remoção de siso mais tranquila e segura',
    subheadline: 'Precisão técnica e atendimento humanizado para o seu conforto',
    bodyText: 'Realizamos exodontia de sisos (terceiros molares) e cirurgias orais com precisão técnica e atendimento humanizado para uma remoção de siso mais tranquila, acompanhando você com suporte direto no pós-procedimento.',
    whyDoIt: 'Precisão técnica e atendimento humanizado para uma remoção de siso mais tranquila, prevenindo inchaço e complicações.',
    targetAudience: [
      'Quem precisa remover o siso de forma segura, prevenindo inchaço e complicações',
      'Pessoas com dores ou desconforto causados pelo nascimento dos sisos',
      'Pacientes com medo de cirurgias que procuram um atendimento acolhedor e humanizado'
    ],
    threeSteps: [
      {
        number: '01',
        title: 'Avaliação e planejamento',
        desc: 'Extração planejada com exames detalhados para avaliar a posição do siso com máxima precisão.'
      },
      {
        number: '02',
        title: 'Remoção de siso segura',
        desc: 'Realizamos o procedimento com precisão técnica e atendimento humanizado para uma remoção de siso mais tranquila.'
      },
      {
        number: '03',
        title: 'Suporte pós-procedimento',
        desc: 'Você conta com acompanhamento direto via WhatsApp para orientações pós-operatórias sempre que precisar.'
      }
    ],
    responsibility: 'Oferecemos suporte e acompanhamento pós-procedimento para garantir sua recuperação sem preocupações.',
    heroCta: 'Agendar Avaliação',
    ctaText: 'Precisão técnica e atendimento humanizado em cirurgias de siso',
    heroImage: cirurgiasImg,
    mainImage: cirurgiasImg,
    clinicalCases: [
      {
        image: victorTratamentoImg,
        tag: 'Cirurgia Oral',
        title: 'Extração de Sisos com o Dr. Victor',
        subtitle: 'Técnica cirúrgica delicada e acolhedora',
        description: 'Remoção planejada de terceiros molares com anestesia eficiente e instrumentos específicos para evitar traumas e dores pós-operatórias.'
      },
      {
        image: clinicaInterna3Img,
        tag: 'Biossegurança',
        title: 'Esterilização & Instrumentais Cirúrgicos',
        subtitle: 'Ambiente estéril com padrão hospitalar',
        description: 'Todos os materiais passam por rigoroso ciclo de esterilização e selagem térmica, eliminando qualquer risco de infecção cruzada.'
      },
      {
        image: equipeTecnologiaImg,
        tag: 'Pós-Operatório',
        title: 'Suporte Clínico Contínuo no WhatsApp',
        subtitle: 'Você nunca fica desassistido após o procedimento',
        description: 'Nossa equipe orienta repouso, medicação e alimentação, monitorando a evolução da cicatrização para garantir recuperação tranquila.'
      }
    ],
    testimonial: {
      name: 'Carolina Castro Oliveira',
      text: 'O Dr. Victor extraiu meu siso e foi extremamente profissional, pontual e atencioso. Me senti muito bem atendida e totalmente confiante com o cuidado e a técnica dele durante todo o procedimento. Recomendo com certeza!',
      role: 'Paciente de Cirurgia e Siso'
    },
    services: [
      {
        name: 'Exodontia de Sisos',
        desc: 'Precisão técnica e atendimento humanizado para uma remoção de siso mais tranquila.',
        benefit: 'Remoção de terceiros molares com técnica cuidadosa e segura.',
        icon: Scissors,
        tag: 'Sisos',
        image: cirurgiasImg
      },
      {
        name: 'Retirada de Siso Segura',
        desc: 'Extração planejada com exames digitais detalhados para máxima precisão.',
        benefit: 'Procedimento seguro, com menor inchaço e recuperação tranquila.',
        icon: ShieldCheck,
        tag: 'Planejamento',
        image: clinicaExternaImg
      },
      {
        name: 'Cuidados com a Gengiva',
        desc: 'Intervenções para tratar inflamações profundas e fortalecer os dentes.',
        benefit: 'Elimina focos de infecção e devolve o conforto ao mastigar.',
        icon: HeartPulse,
        tag: 'Saúde Bucal',
        image: clinicaInterna1Img
      },
      {
        name: 'Suporte Pós-Procedimento',
        desc: 'Acompanhamento direto via WhatsApp para orientações pós-operatórias.',
        benefit: 'Suporte prioritário para uma recuperação tranquila e acompanhada.',
        icon: Clock,
        tag: 'Pós-Operatório',
        image: equipeTecnologiaImg
      }
    ],
    methodology: [
      { step: '01', title: 'Exame Detalhado', desc: 'Planejamos a remoção do siso com avaliação clínica e exames de imagem.', icon: ScanLine, color: 'bg-teal-primary' },
      { step: '02', title: 'Procedimento Seguro', desc: 'Realizamos a extração com precisão técnica e cuidado humanizado.', icon: Scissors, color: 'bg-teal-medium' },
      { step: '03', title: 'Orientações de Cuidado', desc: 'Explicamos todos os cuidados necessários para uma boa recuperação.', icon: ShieldCheck, color: 'bg-teal-dark' },
      { step: '04', title: 'Pós-atendimento', desc: 'Acompanhamos sua evolução pelo WhatsApp até você estar 100%.', icon: Clock, color: 'bg-navy-dark' }
    ]
  },
  'proteses': {
    title: 'Próteses Removíveis e Fixas',
    category: 'Reabilitação Oral',
    sectionTitle: 'Devolvendo função mastigatória e harmonia estética ao seu sorriso',
    description: 'Confecção de próteses fixas, removíveis, sobre implantes e coroas para reabilitar sorrisos com conforto e naturalidade.',
    headline: 'Recupere a capacidade mastigatória e a confiança no sorriso',
    subheadline: 'Próteses fixas, removíveis e sobre implantes com precisão e atenção aos mínimos detalhes',
    bodyText: 'Nossa atuação na área de Prótese é focada em reabilitar sorrisos, confeccionando próteses fixas ou removíveis, próteses sobre implantes e coroas, devolvendo aos pacientes a capacidade mastigatória, a saúde bucal e a confiança no sorriso.',
    whyDoIt: 'Devolver a capacidade mastigatória, a saúde bucal, a harmonia estética e a confiança no sorriso.',
    targetAudience: [
      'Pessoas que perderam dentes e desejam reabilitar a capacidade mastigatória e o sorriso',
      'Pacientes que precisam de próteses fixas, próteses removíveis ou coroas',
      'Quem busca prótese sobre implantes com harmonia estética e conforto'
    ],
    threeSteps: [
      {
        number: '01',
        title: 'Avaliação e planejamento',
        desc: 'Avaliamos a estrutura bucal para indicar a solução ideal entre prótese fixa, removível ou sobre implantes.'
      },
      {
        number: '02',
        title: 'Confecção com precisão',
        desc: 'Trabalhamos com atenção aos mínimos detalhes para garantir funcionalidade mastigatória e harmonia estética.'
      },
      {
        number: '03',
        title: 'Adaptação e conforto',
        desc: 'Realizamos a instalação e o acompanhamento dedicado para garantir seu conforto e satisfação.'
      }
    ],
    responsibility: 'Garantimos materiais de altíssima qualidade e acompanhamento dedicado para o seu conforto diário.',
    heroCta: 'Recuperar Meu Sorriso',
    ctaText: 'Próteses fixas e removíveis com função e estética para o seu sorriso',
    heroImage: proteseImg,
    mainImage: proteseImg,
    clinicalCases: [
      {
        image: coroasAntesDepoisBeatriz,
        tag: 'Antes & Depois',
        title: 'Reabilitação Estética com Coroas Cerâmicas',
        subtitle: 'Devolução de função mastigatória e sorriso harmônico',
        description: 'Substituição de dentes desgastados por coroas protéticas em cerâmica pura com tom, brilho e anatomia que imitam a perfeição natural.'
      },
      {
        image: coroaBeatrizImg,
        tag: 'Prótese Cerâmica',
        title: 'Coroas de Cerâmica Pura e Zircônia',
        subtitle: 'Sem bordas escuras e com alta durabilidade',
        description: 'Materiais biocompatíveis que preservam a gengiva rosada e saudável, sem a linha acinzentada comum das próteses antigas com metal.'
      },
      {
        image: casoProteseRemovivelBreno,
        tag: 'Antes & Depois',
        title: 'Prótese Removível Feita para Você',
        subtitle: 'Prótese pensada em você',
        description: 'Feita sob medida para combinar com o formato do seu rosto, trazendo dentes bonitos e firmeza para mastigar. Conforto e naturalidade para você sorrir à vontade.',
        imageClassName: 'object-contain'
      }
    ],
    testimonial: {
      name: 'Isadora Isabelle',
      text: 'Equipe super atenciosa e sempre disposta a explicar cada detalhe de todos os procedimentos. Me senti totalmente segura durante o tratamento e saio muito satisfeita e feliz com a minha escolha!',
      role: 'Paciente da Souriê'
    },
    services: [
      {
        name: 'Próteses Fixas',
        desc: 'Coroas e pontes com estética natural e alta durabilidade.',
        benefit: 'Devolve a capacidade mastigatória e a harmonia estética do sorriso.',
        icon: Layers,
        tag: 'Prótese Fixa',
        image: proteseImg
      },
      {
        name: 'Próteses Removíveis',
        desc: 'Soluções confortáveis e adaptadas ao seu dia a dia.',
        benefit: 'Reabilitação funcional planejada com conforto e atenção aos detalhes.',
        icon: Smile,
        tag: 'Prótese Removível',
        image: victorTratamentoImg
      },
      {
        name: 'Prótese sobre Implantes',
        desc: 'Reabilitação segura com suporte de implantes integrados.',
        benefit: 'Firmeza e estabilidade para mastigar e sorrir com confiança.',
        icon: Shield,
        tag: 'Sobre Implantes',
        image: tecnologiaImg
      },
      {
        name: 'Coroas de Zircônia',
        desc: 'Dentes estéticos resistentes e sem marcas escuras na linha da gengiva.',
        benefit: 'Aparência natural e resistente ao tempo.',
        icon: Gem,
        tag: 'Resistente e Bonito',
        image: fotoClinicaImg
      }
    ],
    methodology: [
      { step: '01', title: 'Avaliação Clínica', desc: 'Analisamos as necessidades funcionais e estéticas do seu sorriso.', icon: ScanLine, color: 'bg-teal-primary' },
      { step: '02', title: 'Planejamento da Prótese', desc: 'Definimos a prótese fixa, removível ou coroa ideal para o seu caso.', icon: Layers, color: 'bg-teal-medium' },
      { step: '03', title: 'Provas e Ajustes', desc: 'Cuidamos de cada detalhe para garantir encaixe, conforto e estética.', icon: Shield, color: 'bg-teal-dark' },
      { step: '04', title: 'Sorriso Reabilitado', desc: 'Devolvemos sua capacidade mastigatória e a confiança ao sorrir.', icon: CheckCircle2, color: 'bg-navy-dark' }
    ]
  },
  'implantes': {
    title: 'Implantes',
    category: 'Implantes Dentários',
    sectionTitle: 'Recupere a segurança para mastigar e sorrir sem medo',
    description: 'Substitua dentes perdidos por implantes firmes com aparência e conforto idênticos aos dentes naturais.',
    headline: 'Volte a comer tudo o que gosta e sorria sem preocupação',
    subheadline: 'Substitua dentes perdidos por implantes seguros que devolvem a firmeza na mastigação',
    bodyText: 'Perder um dente afeta a mastigação e a autoconfiança. Com nossos implantes dentários, substituímos a raiz do dente perdido com firmeza, permitindo que você recupere a segurança de mastigar e sorrir com tranquilidade.',
    whyDoIt: 'Volte a mastigar tudo o que gosta e conquiste a segurança de dentes firmes e fixos como os originais.',
    targetAudience: [
      'Pessoas que perderam dentes e desejam recuperar o sorriso e a mastigação',
      'Usuários de dentaduras móveis incomodados com machucados e insegurança',
      'Quem busca restabelecer a estética e a saúde óssea da boca com durabilidade'
    ],
    threeSteps: [
      {
        number: '01',
        title: 'Planejamento 3D',
        desc: 'Analisamos a estrutura óssea e as condições da região por meio de exames e planejamento digital, definindo a posição ideal para o implante dentário.'
      },
      {
        number: '02',
        title: 'Instalação do implante',
        desc: 'Realizamos a instalação do implante de titânio no osso, sob anestesia local, com planejamento e precisão para proporcionar segurança e conforto durante o procedimento.'
      },
      {
        number: '03',
        title: 'Reabilitação com a prótese',
        desc: 'Após o período de integração do implante ao osso, instalamos a coroa protética, devolvendo a estética, a função mastigatória e a naturalidade do sorriso.'
      }
    ],
    responsibility: 'Garantimos materiais de altíssima qualidade e acompanhamento dedicado para o seu conforto diário.',
    heroCta: 'Recuperar Meu Sorriso',
    ctaText: 'Reabilitação com implantes firmes e seguros',
    heroImage: protesesHeaderImg,
    mainImage: protesesHeaderImg,
    clinicalCases: [
      {
        image: protesesHeaderImg,
        tag: 'Dentes Fixos',
        title: 'Dentes Fixos sobre Implantes',
        subtitle: 'Segurança definitiva para mastigar sem medo',
        description: 'Substituição de próteses móveis instáveis por coroas fixas em titânio e zircônia integradas ao osso, devolvendo força mastigatória de 100%.'
      },
      {
        image: coroasAntesDepoisBeatriz,
        tag: 'Reabilitação',
        title: 'Harmonia Estética e Mastigatória',
        subtitle: 'Naturalidade idêntica à dentição original',
        description: 'Reabilitação completa onde cada coroa é desenhada para harmonizar com a linha do sorriso e devolver a segurança de sorrir em público.'
      },
      {
        image: tecnologiaImg,
        tag: 'Cirurgia Guiada',
        title: 'Planejamento Ósseo Digital',
        subtitle: 'Instalação milimétrica do implante',
        description: 'Tomografia e escaneamento digital combinados para planejar a posição exata de cada implante antes da cirurgia, acelerando a cicatrização.'
      }
    ],
    testimonial: {
      name: 'Isadora Isabelle',
      text: 'Equipe super atenciosa e sempre disposta a explicar cada detalhe de todos os procedimentos. Me senti totalmente segura durante o tratamento e saio muito satisfeita e feliz com a minha escolha!',
      role: 'Paciente da Souriê'
    },
    services: [
      {
        name: 'Implantes Dentários',
        desc: 'Pinos de titânio seguros que substituem a raiz do dente perdido com firmeza.',
        benefit: 'Firmeza total para mastigar, exatamente como um dente natural.',
        icon: Bone,
        tag: 'Firme e Seguro',
        image: proteseImg
      },
      {
        name: 'Dentes Fixos (Prótese Protocolo)',
        desc: 'Dentição completa e fixa sobre implantes que não sai do lugar nem machuca.',
        benefit: 'Devolve a força na mastigação e a liberdade total de sorrir.',
        icon: Shield,
        tag: 'Dentes Fixos',
        image: victorTratamentoImg
      },
      {
        name: 'Coroas sobre Implantes',
        desc: 'Coroas estéticas e resistentes instaladas sobre os implantes dentários.',
        benefit: 'Aparência natural e devolução integral da mastigação.',
        icon: Gem,
        tag: 'Resistente e Natural',
        image: tecnologiaImg
      },
      {
        name: 'Planejamento 3D de Implantes',
        desc: 'Análise detalhada da estrutura óssea para o posicionamento preciso do implante.',
        benefit: 'Previsibilidade e segurança em todas as etapas da reabilitação.',
        icon: ScanLine,
        tag: 'Planejamento',
        image: fotoClinicaImg
      }
    ],
    methodology: [
      { step: '01', title: 'Planejamento 3D', desc: 'Analisamos a estrutura óssea e as condições da região por meio de exames e planejamento digital.', icon: Bone, color: 'bg-teal-primary' },
      { step: '02', title: 'Instalação do implante', desc: 'Realizamos a instalação do implante de titânio no osso com planejamento e precisão.', icon: Shield, color: 'bg-teal-medium' },
      { step: '03', title: 'Reabilitação com a prótese', desc: 'Após a integração do implante ao osso, instalamos a coroa protética.', icon: Layers, color: 'bg-teal-dark' },
      { step: '04', title: 'Pós-atendimento', desc: 'Acompanhamos sua evolução para devolver estética, função mastigatória e naturalidade.', icon: CheckCircle2, color: 'bg-navy-dark' }
    ]
  },
  'odontopediatria': {
    title: 'Dentista Infantil',
    category: 'Odontopediatria Acolhedora',
    sectionTitle: 'Cuidados carinhosos para seu filho crescer sem medo de dentista',
    description: 'Atendimento infantil leve, divertido e acolhedor para proteger os dentinhos das crianças desde cedo.',
    headline: 'Dentes saudáveis e consultas sem choro ou medo',
    subheadline: 'Ajude seu filho a construir uma amizade positiva com a saúde da boca',
    bodyText: 'Transformamos a ida ao dentista em um momento agradável e divertido! Nossos profissionais são treinados para acolher os pequenos com brincadeiras e paciência, aplicando tratamentos preventivos sem traumas e ensinando a cuidar dos dentes com alegria.',
    whyDoIt: 'Proporcione ao seu filho uma infância com dentes fortes e consultas alegres, livres de qualquer medo de dentista.',
    targetAudience: [
      'Crianças na fase de nascimento dos primeiros dentes ou em troca de dentição',
      'Pequenos que demonstram ansiedade ou receio de visitas ao consultório',
      'Pais que desejam prevenir cáries e acompanhar o desenvolvimento dos dentes'
    ],
    threeSteps: [
      { number: '01', title: 'Acolhimento Lúdico', desc: 'Apresentamos o ambiente com brincadeiras para a criança relaxar.' },
      { number: '02', title: 'Cuidado Preventivo', desc: 'Limpeza delicada com aplicação de selantes e flúor saboroso sem dor.' },
      { number: '03', title: 'Estímulo Positivo', desc: 'A criança recebe um prêmio de coragem e sai feliz para a próxima visita.' }
    ],
    responsibility: 'Ambiente preparado e atendimento focado no bem-estar emocional das crianças.',
    heroCta: 'Agendar Consulta Infantil',
    ctaText: 'Atendimento infantil leve e divertido',
    heroImage: odontopediatriaHeaderImg,
    heroImagePosition: 'right center',
    mainImage: odontopediatriaImg,
    clinicalCases: [
      {
        image: odontopediatriaImg,
        tag: 'Odontopediatria',
        title: 'Atendimento Sem Traumas e Sem Choro',
        subtitle: 'Adaptação lúdica que transforma o medo em curiosidade',
        description: 'Abordagem psicológica carinhosa onde a criança interage com os instrumentos de forma divertida, sentindo-se protegida e acolhida.'
      },
      {
        image: escovasKidImg,
        tag: 'Prevenção',
        title: 'Educação Bucal & Proteção com Selantes',
        subtitle: 'Barreira protetora contra cáries infantis',
        description: 'Aplicação indolor de resina fluida nos sulcos dos molares para impedir a proliferação bacteriana, somada à escovação guiada divertida.'
      },
      {
        image: taynaImg,
        tag: 'Atendimento Lúdico',
        title: 'Cuidado Humanizado da Dra. Tayná',
        subtitle: 'Amor, paciência e reforço positivo',
        description: 'Consultas no ritmo da criança com entrega de certificado de coragem, criando uma memória positiva e amizade duradoura com a saúde bucal.'
      }
    ],
    testimonial: {
      name: 'Tayra Leidamara',
      text: 'Foi a melhor experiência para o meu filho! Um atendimento personalizado, humano e com um carinho sem igual por parte de toda a equipe.',
      role: 'Mãe de Paciente Infantil'
    },
    services: [
      {
        name: 'Consulta Lúdica e Sem Traumas',
        desc: 'Atendimento infantil guiado por histórias e ambiente acolhedor.',
        benefit: 'Evita medos e cria hábitos saudáveis desde a infância.',
        icon: Baby,
        tag: 'Divertido e Calmo',
        image: odontopediatriaImg
      },
      {
        name: 'Proteção Contra Cáries (Selantes)',
        desc: 'Resina fina sobre as ranhuras dos dentes para evitar acúmulo de alimentos.',
        benefit: 'Protege os dentes e previne cáries em até 80%.',
        icon: Shield,
        tag: 'Proteção Preventiva',
        image: clinicaInterna2Img
      },
      {
        name: 'Acompanhamento Ortodôntico',
        desc: 'Aparelhos infantis que ajudam os dentes a crescerem na posição certa.',
        benefit: 'Corrige mordidas tortas antes que a criança cresça.',
        icon: BrainCircuit,
        tag: 'Crescimento Correto',
        image: clinicaInterna3Img
      },
      {
        name: 'Aplicação de Flúor e Limpeza',
        desc: 'Limpeza delicada com flúor saboroso para fortificar o esmalte dental.',
        benefit: 'Dentes fortes, limpos e protegidos contra cáries.',
        icon: BarChart2,
        tag: 'Dentes Fortes',
        image: clinicaExternaImg
      }
    ],
    methodology: [
      { step: '01', title: 'Boas-vindas Brincando', desc: 'A criança chega em um ambiente leve e sem cara de hospital.', icon: Smile, color: 'bg-teal-primary' },
      { step: '02', title: 'Explicação Simples', desc: 'Explicamos os barulhinhos e os aparelhos como se fossem brinquedos.', icon: Baby, color: 'bg-teal-medium' },
      { step: '03', title: 'Cuidado Rápido', desc: 'Fazemos a limpeza e a proteção dos dentes rapidinho e sem dor.', icon: ShieldCheck, color: 'bg-teal-dark' },
      { step: '04', title: 'Recompensa Feliz', desc: 'A criança ganha um brinde carinhoso e volta para casa bem animada.', icon: CheckCircle2, color: 'bg-navy-dark' }
    ]
  }
};

export default function InternalPage() {
  const { slug } = useParams<{ slug: string }>();

  const heroContainerRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLImageElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!slug || !PAGES_CONTENT[slug]) return;
    const mm = gsap.matchMedia();

    // Mobile scroll progress line animation
    mm.add("(max-width: 1023px)", () => {
      if (progressLineRef.current && stepsContainerRef.current) {
        gsap.fromTo(progressLineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: stepsContainerRef.current,
              start: "top center",
              end: "bottom center",
              scrub: true,
            }
          }
        );
      }
    });

    mm.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1.0 }
      });

      tl.fromTo(heroContentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, delay: 0.2 }
      );

      gsap.fromTo(heroImageRef.current,
        { scale: 1.08 },
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

  if (slug === 'cirurgias-e-canal') {
    return <Navigate to="/p/tratamento-de-canal" replace />;
  }
  if (slug === 'proteses-e-implantes') {
    return <Navigate to="/p/implantes" replace />;
  }

  if (!slug || !PAGES_CONTENT[slug]) {
    return <Navigate to="/" replace />;
  }

  const page = PAGES_CONTENT[slug];
  const HeroIcon = PROCEDURE_ICONS[slug] || Sparkles;

  const PROCEDURE_SEO_DATA: Record<string, { title: string; description: string }> = {
    'ortodontia': {
      title: 'Souriê | Ortodontia e Invisalign em Nova Era MG',
      description: 'Ortodontia e Invisalign na Souriê Odontologia. Alinhe seus dentes com conforto e discrição. Escaneamento 3D e simulação digital do resultado. Agende sua avaliação!'
    },
    'clinica-geral': {
      title: 'Souriê | Clínica Geral e Check-up em Nova Era MG',
      description: 'Check-up preventivo, limpezas e restaurações estéticas na Souriê. Câmera digital intraoral para diagnóstico preciso. Preserve sua saúde bucal sem surpresas.'
    },
    'odontologia-estetica': {
      title: 'Souriê | Estética Dental e Facetas em Resina',
      description: 'Clareamento, lentes e facetas em resina e harmonização orofacial na Souriê Odontologia. Transforme seu sorriso com naturalidade e tecnologia.'
    },
    'tratamento-de-canal': {
      title: 'Souriê | Tratamento Endodôntico (Canal) em Nova Era',
      description: 'Tratamento e retratamento de canal na Souriê Odontologia para tratar infecções, aliviar dores e preservar seu dente natural na arcada.'
    },
    'cirurgias': {
      title: 'Souriê | Cirurgias e Remoção de Sisos em Nova Era MG',
      description: 'Exodontia de sisos e cirurgias orais com precisão técnica, planejamento detalhado e atendimento humanizado na Souriê Odontologia.'
    },
    'proteses': {
      title: 'Souriê | Próteses Removíveis e Fixas em Nova Era MG',
      description: 'Próteses fixas, removíveis, sobre implantes e coroas na Souriê Odontologia. Recupere a capacidade mastigatória e a harmonia estética do seu sorriso.'
    },
    'implantes': {
      title: 'Souriê | Implantes Dentários em Nova Era MG',
      description: 'Implantes de titânio e prótese protocolo na Souriê Odontologia. Recupere a firmeza na mastigação e a autoconfiança ao sorrir.'
    },
    'odontopediatria': {
      title: 'Souriê | Odontopediatria para Crianças em Nova Era MG',
      description: 'Atendimento odontológico infantil lúdico e acolhedor na Souriê. Prevenção de cáries, selantes e acompanhamento do crescimento. Crianças sem medo de dentista.'
    }
  };

  const seoData = PROCEDURE_SEO_DATA[slug] || {
    title: `Souriê | ${page.title} em Nova Era MG`,
    description: page.description
  };

  return (
    <div key={slug} className="flex flex-col bg-transparent min-h-screen">
      <SEO
        title={seoData.title}
        description={seoData.description}
        canonical={`https://sourie.com.br/p/${slug}`}
        schema={buildProcedureSchema(page.title, seoData.description, `https://sourie.com.br/p/${slug}`)}
      />

      {/* ── Hero Full-Width Landscape Section (Espaço Negativo Teal + Foto Landscape) ── */}
      <header
        ref={heroContainerRef}
        className="relative overflow-hidden bg-navy-dark pt-28 pb-16 md:pt-36 md:pb-20 lg:pt-36 lg:pb-36 flex items-center min-h-[480px] lg:min-h-[540px]"
      >
        {/* 1. Full-Width Landscape Background Image */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <div className={`w-full h-full transition-transform duration-700 ease-out ${page.heroDesktopShiftClass || ''}`}>
            <img
              ref={heroImageRef}
              src={page.heroImage || page.mainImage}
              alt={page.title}
              className="w-full h-full object-cover transition-transform duration-1000 scale-105"
              style={{ objectPosition: page.heroImagePosition || 'center center' }}
            />
          </div>

          {/* Global Brand Tint Overlay across entire photo */}
          <div
            className="absolute inset-0 bg-navy-dark mix-blend-multiply pointer-events-none z-10"
            style={{ opacity: page.heroOverlayOpacity ?? 0.25 }}
          />

          {/* Horizontal Teal Negative Space Gradient (Desktop lg:block) */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-teal-dark via-teal-dark/95 via-50% to-transparent z-10 pointer-events-none" />

          {/* Vertical Teal Gradient Overlay (Mobile lg:hidden) */}
          <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-teal-dark/95 via-teal-dark/85 to-navy-dark/95 pointer-events-none z-10" />

          {/* Soft top & bottom edge blend gradients */}
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-navy-dark/70 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-navy-dark/70 to-transparent z-10 pointer-events-none" />
        </div>

        {/* Decorative blur lights */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-white/5 blur-3xl z-10" aria-hidden="true" />

        {/* 2. Text Content inside Negative Space */}
        <div className="mx-auto max-w-page px-6 md:px-10 lg:px-[63px] relative z-20 w-full">
          <div className="max-w-xl lg:max-w-2xl space-y-5">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-white/60 text-xs sm:text-sm mb-6">
              <Link to="/" className="hover:text-white transition-colors">Início</Link>
              <ChevronRight size={14} aria-hidden="true" />
              <span className="text-white font-medium">{page.title}</span>
            </nav>

            <div ref={heroContentRef} className="space-y-4">
              <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full">
                <HeroIcon size={16} className="text-cyan-light shrink-0" aria-hidden="true" />
                <span className="text-cyan-light text-xs font-semibold uppercase tracking-widest">
                  {page.category} • Nova Era MG
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium font-serif text-white leading-[1.12] -tracking-[0.02em]">
                <span className="sr-only">{page.title} em Nova Era MG: </span>
                {page.headline}
              </h1>

              <p className="text-white/85 text-base md:text-lg leading-relaxed max-w-xl font-sans font-light">
                {page.subheadline}
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  to={buildWhatsAppLink(
                    (WA_PROCEDURE_MESSAGES[slug]?.hero) ||
                    `Olá! Tenho interesse em ${page.title} na Souriê. Podem me agendar uma avaliação?`
                  )}
                  target="_blank"
                  className="inline-flex items-center gap-2.5 bg-white text-teal-dark hover:bg-cyan-light text-xs sm:text-sm font-bold uppercase tracking-widest px-7 py-3.5 rounded-full transition-all duration-300 shadow-xl shadow-black/10 hover:scale-[1.02]"
                >
                  <span>{page.heroCta}</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 1. Section: O que fazemos por você (Foco em Conversão) */}
      <SectionContainer className="bg-transparent border-y border-black/[0.02]" innerClassName="!pt-16 lg:!pt-24 !pb-20 lg:!pb-28">
        <div className="max-w-page mx-auto w-full space-y-16 lg:space-y-20">

          {/* Block 1: Header & Por que fazer o procedimento */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-teal-primary font-bold text-xs tracking-[0.25em] uppercase block">
                O que fazemos por você
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-teal-dark font-sans leading-tight -tracking-[0.02em]">
                {page.sectionTitle}
              </h2>
              <div className="p-5 sm:p-6 bg-teal-primary/5 border border-teal-primary/15 rounded-2xl space-y-1.5 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-primary block">
                  Por que fazer este procedimento?
                </span>
                <p className="text-base sm:text-lg text-teal-dark font-medium leading-relaxed font-sans">
                  {page.whyDoIt}
                </p>
              </div>
            </div>

            {/* Block 2: Para quem é indicado */}
            <div className="lg:col-span-5 bg-bg-light/80 border border-black/[0.05] rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-teal-primary/10 flex items-center justify-center text-teal-dark">
                  <ShieldCheck size={18} />
                </div>
                <h3 className="text-lg font-bold text-teal-dark font-sans">
                  Para quem é indicado
                </h3>
              </div>
              <ul className="space-y-3.5">
                {page.targetAudience.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-teal-dark/85 font-medium leading-snug">
                    <CheckCircle2 size={16} className="text-teal-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Block 3: Como funciona em 3 passos */}
          <div className="space-y-8 pt-4 border-t border-black/[0.04]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-teal-primary font-bold text-[10px] sm:text-xs tracking-[0.25em] uppercase block mb-1">
                  Transparência e Agilidade
                </span>
                <h3 className="text-2xl sm:text-3xl font-medium text-teal-dark font-sans">
                  Como funciona em 3 etapas
                </h3>
              </div>
              <p className="text-xs text-text-primary/60 max-w-xs">
                Processo simples, sem burocracia e focado no seu total conforto do início ao fim.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {page.threeSteps.map((step, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <div className="relative h-full bg-bg-light/60 border border-black/[0.04] rounded-2xl p-6 sm:p-7 hover:bg-white hover:shadow-lg hover:border-teal-primary/20 transition-all duration-300 flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold font-sans text-teal-primary/40 group-hover:text-teal-primary transition-colors">
                          {step.number}
                        </span>
                        <div className="w-2 h-2 rounded-full bg-teal-primary/20 group-hover:bg-teal-primary transition-colors" />
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-teal-dark font-sans mb-2">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-text-primary/70 font-light leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>


        </div>
      </SectionContainer>
      {/* 2. Section: Casos Clínicos & Evidências Reais (Fotos reais, procedimentos e tecnologia) */}
      <SectionContainer background="bg-[#FAFAFA]" className="border-t border-black/[0.04]" innerClassName="!pt-16 lg:!pt-24 !pb-20 lg:!pb-28">
        <div className="max-w-page mx-auto w-full space-y-12 lg:space-y-14">
          <ScrollReveal>
            <div className="max-w-3xl space-y-4 text-left">
              <span className="text-teal-primary font-bold text-xs tracking-[0.25em] uppercase block">
                Casos Clínicos & Evidências Reais
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-teal-dark font-sans leading-tight -tracking-[0.02em]">
                Resultados reais e precisão em cada detalhe.
              </h2>
              <p className="text-text-primary/75 text-sm sm:text-base font-light leading-relaxed">
                Conheça de perto casos clínicos reais, equipamentos odontológicos de alta tecnologia e o ambiente seguro onde o seu tratamento acontece na Souriê.
              </p>
            </div>
          </ScrollReveal>

          {/* Grid de 3 Cards de Casos Reais */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {page.clinicalCases?.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="group relative bg-white rounded-3xl overflow-hidden border border-black/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.03),0_6px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.05),0_16px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
                  {/* Photo with Single Subtle Badge */}
                  <div className={`relative aspect-[4/3] w-full overflow-hidden ${item.imageClassName?.includes('contain') ? 'bg-stone-900' : 'bg-stone-100'}`}>
                    {item.imageClassName?.includes('contain') && (
                      <div
                        className="absolute inset-0 bg-cover bg-center blur-md opacity-35 scale-110 pointer-events-none"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                    )}
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className={`relative z-10 w-full h-full ${item.imageClassName || 'object-cover'} transition-transform duration-700 ease-out group-hover:scale-[1.02]`}
                    />

                    {/* Single subtle badge without merchan */}
                    <div className="absolute top-3.5 left-3.5 z-20 pointer-events-none">
                      <span className="inline-flex items-center bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1 rounded-full shadow-xs">
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between gap-4">
                    <div className="space-y-2.5">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-teal-primary font-sans block">
                        {item.subtitle}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-teal-dark font-sans leading-snug group-hover:text-teal-primary transition-colors duration-200">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-text-primary/75 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* 3. Section: Depoimento de Paciente + Nosso Compromisso Souriê */}
      <SectionContainer background="bg-bg-light/60" className="border-t border-black/[0.03]" innerClassName="!py-16 md:!py-24">
        <div className="max-w-page mx-auto space-y-10 md:space-y-14">
          <ScrollReveal>
            <div className="max-w-2xl text-left space-y-2">
              <span className="text-teal-primary font-bold text-xs tracking-[0.25em] uppercase block">
                Experiência de quem confia
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium text-teal-dark font-sans leading-tight -tracking-[0.02em]">
                O cuidado que faz diferença no seu sorriso.
              </h2>
            </div>
          </ScrollReveal>

          {/* Elevated Testimonial Card */}
          <ScrollReveal>
            <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden bg-white border border-black/[0.06] p-7 sm:p-10 lg:p-12 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)]">
              {/* Subtle background Google watermark in bottom right corner */}
              <div className="absolute -bottom-6 -right-6 text-teal-primary/[0.03] select-none pointer-events-none leading-none">
                <GoogleWatermarkIcon size={240} />
              </div>

              <div className="relative z-10 space-y-6 max-w-4xl">
                {/* Top Google Lockup + Rating + Verification */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-black/[0.05]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center shadow-xs">
                      <GoogleIcon size={18} />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-slate-800">Avaliação no Google</span>
                        <span className="text-slate-300">·</span>
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
                          ))}
                        </div>
                        <span className="text-xs font-bold text-slate-900 ml-1">5,0</span>
                      </div>
                      <p className="text-[11px] text-slate-500 font-normal">
                        Experiência real compartilhada por paciente da clínica
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-primary bg-teal-primary/5 border border-teal-primary/10 px-3.5 py-1.5 rounded-full shadow-xs">
                    <CheckCircle2 size={14} className="text-teal-primary" />
                    <span>Paciente Verificado</span>
                  </div>
                </div>

                {/* Quote text */}
                <p className="text-teal-dark text-lg sm:text-2xl lg:text-[23px] leading-relaxed font-light font-serif italic">
                  "{page.testimonial.text}"
                </p>

                {/* Author Block */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-black/[0.05]">
                  <div className="flex items-center gap-4">
                    {page.testimonial.avatar ? (
                      <img
                        src={page.testimonial.avatar}
                        alt={page.testimonial.name}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-teal-primary/20 shadow-xs shrink-0"
                      />
                    ) : (
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-teal-primary to-teal-dark text-white font-bold text-sm sm:text-base flex items-center justify-center shadow-xs shrink-0">
                        {page.testimonial.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                      </div>
                    )}

                    <div className="space-y-0.5">
                      <h4 className="text-teal-dark text-base sm:text-lg font-bold font-sans">
                        {page.testimonial.name}
                      </h4>
                      <p className="text-teal-primary font-medium text-xs sm:text-sm">
                        {page.testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Nosso Compromisso Banner Section */}
          <ScrollReveal delay={0.1}>
            <div className="bg-gradient-to-r from-teal-dark/[0.06] to-teal-primary/[0.06] border border-teal-primary/15 rounded-3xl p-8 md:p-12 relative overflow-hidden group shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 w-full">
              <div className="absolute right-0 bottom-0 text-teal-primary/5 translate-x-6 translate-y-6 transition-transform duration-700 pointer-events-none">
                <Award size={180} strokeWidth={1} />
              </div>

              <div className="space-y-3 max-w-2xl text-center md:text-left relative z-10">
                <div className="flex items-center justify-center md:justify-start gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-teal-primary/10 flex items-center justify-center text-teal-medium">
                    <Award size={16} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-dark">Compromisso Souriê</span>
                </div>
                <p className="text-base sm:text-lg md:text-xl font-medium text-teal-dark font-sans leading-relaxed">
                  "{page.responsibility}"
                </p>
                <p className="text-xs text-text-primary/60 font-light">
                  Acompanhamento próximo antes, durante e após o procedimento.
                </p>
              </div>

              <div className="shrink-0 relative z-10">
                <Button
                  text="Falar com Especialista"
                  variant="teal"
                  size="md"
                  href={buildWhatsAppLink(
                    (WA_PROCEDURE_MESSAGES[slug]?.commitment) ||
                    `Olá! Quero falar com um especialista em ${page.title} na Souriê.`
                  )}
                  className="shadow-md"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </SectionContainer>

      {/* Lista de serviços relacionados ao procedimento (Especialidades Inclusas) */}
      <SectionContainer className="bg-transparent border-t border-black/[0.02]" innerClassName="!pt-12 lg:!pt-20 !pb-16 lg:!pb-24">
        <div className="max-w-page mx-auto w-full">
          <ScrollReveal>
            <div className="relative rounded-[32px] md:rounded-[44px] bg-gradient-to-br from-teal-dark via-teal-dark to-[#091E2A] p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl border border-white/10">
              {/* Subtle background ambient glow */}
              <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-teal-primary/15 blur-3xl z-0" aria-hidden="true" />
              <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-cyan-light/10 blur-3xl z-0" aria-hidden="true" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                {/* Left Side: Headline & Info */}
                <div className="lg:col-span-4 space-y-6 text-left">
                  <div className="space-y-3">
                    <span className="text-cyan-light font-bold text-[10px] sm:text-xs tracking-[0.25em] uppercase block">
                      Especialidades Inclusas
                    </span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium font-serif text-white leading-[1.2]">
                      Cuidados completos para o seu sorriso.
                    </h3>
                    <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed">
                      Procedimentos integrados para seu conforto e excelente resultado estético.
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      to={buildWhatsAppLink(
                        (WA_PROCEDURE_MESSAGES[slug]?.hero) ||
                        `Olá! Tenho interesse em ${page.title} na Souriê. Podem me agendar uma avaliação?`
                      )}
                      target="_blank"
                      className="inline-flex items-center gap-2.5 bg-cyan-light hover:bg-white text-teal-dark text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:scale-[1.02]"
                    >
                      <span>Agendar Avaliação</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>

                {/* Right Side: Clean Image Cards Grid */}
                <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
                  {page.services.map((service, idx) => {
                    const Icon = service.icon;

                    return (
                      <Link
                        key={idx}
                        to={buildWhatsAppLink(
                          (WA_PROCEDURE_MESSAGES[slug]?.serviceCard) ||
                          `Olá! Vi sobre ${service.name} no site da Souriê e gostaria de saber mais.`
                        )}
                        target="_blank"
                        className="group relative flex flex-col justify-between min-h-[260px] sm:min-h-[290px] lg:min-h-[315px] rounded-2xl sm:rounded-[28px] overflow-hidden p-4 sm:p-5 bg-gradient-to-b from-white/10 to-white/[0.03] backdrop-blur-md border border-white/15 shadow-lg hover:shadow-2xl hover:border-cyan-light/40 transition-all duration-500 hover:-translate-y-2"
                      >
                        {/* Ambient card background glow */}
                        <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-teal-primary/20 blur-2xl pointer-events-none group-hover:bg-cyan-light/30 transition-colors duration-500" />

                        {/* Top: Icon only */}
                        <div className="relative z-10">
                          <div className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-cyan-light shadow-sm shrink-0">
                            <Icon size={15} strokeWidth={1.5} />
                          </div>
                        </div>

                        {/* Center Cartoon SVG Illustration */}
                        <div className="relative z-10 my-2 flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110">
                          <SpecialtyIllustration name={service.name} size={110} />
                        </div>

                        {/* Bottom: Tag + Title */}
                        <div className="relative z-10 space-y-2 text-left">
                          <span className="inline-block text-[9px] font-bold uppercase tracking-wide text-cyan-light bg-white/15 px-2.5 py-1 rounded-full border border-cyan-light/30 backdrop-blur-sm leading-tight">
                            {service.tag}
                          </span>
                          <h4 className="text-sm sm:text-base font-semibold text-white font-sans leading-snug group-hover:text-cyan-light transition-colors duration-200">
                            {service.name}
                          </h4>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </SectionContainer>

      {/* Other Procedures Section */}
      <SectionContainer background="bg-bg-light/30" innerClassName="!pt-20 !pb-24 lg:!pt-28 lg:!pb-36 border-t border-black/[0.02]">
        <div className="space-y-12">
          <div className="max-w-4xl space-y-4 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 bg-teal-primary/5 border border-teal-primary/10 rounded-full px-4 py-1.5 shadow-sm mb-2 mx-auto sm:mx-0">
              <Sparkles size={12} className="text-teal-primary animate-pulse" />
              <span className="text-teal-primary text-[10px] md:text-xs tracking-[0.25em] font-bold uppercase">
                Conheça também
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-medium text-teal-dark leading-tight -tracking-[0.025em] font-sans">
              Outros tratamentos <br className="hidden sm:inline" />
              <span className="italic font-serif">projetados para você</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(PAGES_CONTENT)
              .filter(([key]) => key !== slug)
              .map(([key, item]) => (
                <ScrollReveal key={key}>
                  <Link
                    to={`/p/${key}`}
                    className="group bg-white rounded-3xl overflow-hidden border border-black/[0.04] shadow-sm hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-500 flex flex-col hover:-translate-y-1"
                  >
                    {/* Top Image */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-stone-100">
                      <img
                        src={item.mainImage}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-teal-dark bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="space-y-3 flex-1">
                        <h4 className="text-[19px] font-bold text-teal-dark group-hover:text-teal-primary transition-colors font-sans leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-[13px] text-text-primary/70 font-light leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-black/[0.04] flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-teal-primary transition-colors duration-300">
                        <span>Explorar tratamento</span>
                        <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
          </div>
        </div>
      </SectionContainer>

      {/* Elegant Immersive Conversion CTA Section */}
      <SectionContainer className="bg-bg-light !pb-24 lg:!pb-32">
        <ScrollReveal>
          <div className="bg-gradient-to-br from-navy-dark via-navy-dark to-[#091E2A] rounded-[32px] md:rounded-[48px] p-8 sm:p-12 lg:p-24 text-white relative overflow-hidden group shadow-2xl">
            {/* Visual accent backdrop */}
            <div className="absolute -right-20 -bottom-20 opacity-10 group-hover:scale-105 transition-transform duration-1000 pointer-events-none">
              <OutlineToothIcon size={400} />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
              <div className="max-w-2xl space-y-6 md:space-y-8">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mx-auto lg:mx-0">
                  <Award size={14} className="text-cyan-light animate-pulse" />
                  <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">Atendimento de Excelência</span>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-4xl lg:text-[48px] font-medium leading-[1.15] -tracking-[0.025em] font-sans">
                    {page.headline}
                  </h2>
                  <p className="text-cyan-light font-medium text-lg leading-relaxed font-sans">
                    {page.ctaText}
                  </p>
                  <p className="text-white/60 text-base md:text-lg font-light max-w-xl mx-auto lg:mx-0 font-sans">
                    Sua saúde e autoestima merecem este cuidado. Agende sua consulta ou tire suas dúvidas de forma rápida e segura no WhatsApp.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 shrink-0">
                <Button
                  text={page.heroCta}
                  icon="arrow-circle"
                  variant="white"
                  size="lg"
                  href={buildWhatsAppLink(
                    (WA_PROCEDURE_MESSAGES[slug]?.finalCta) ||
                    `Olá! Quero agendar minha consulta de ${page.title} na Souriê. Podem me ajudar?`
                  )}
                  className="shadow-2xl shadow-black/20"
                />
                <span className="text-white/40 text-xs font-bold uppercase tracking-widest">
                  Resposta rápida no WhatsApp
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </SectionContainer>
    </div>
  );
}
