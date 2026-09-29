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
import { OutlineToothIcon } from '../components/shared/Icons';
import ScrollReveal from '../components/shared/ScrollReveal';
import SpecialtyIllustration from '../components/shared/SpecialtyIllustrations';

// Map slugs to representative icons for the procedure page hero header
const PROCEDURE_ICONS: Record<string, React.ElementType> = {
  'ortodontia': Smile,
  'clinica-geral': Stethoscope,
  'odontologia-estetica': Sparkles,
  'cirurgias-e-canal': Syringe,
  'proteses-e-implantes': Layers,
  'odontopediatria': Baby,
};

// Import Procedure Images & Local Assets
import ortodontiaImg from '../assets/Procedimentos/Ortodontia.webp';
import clinicaGeralImg from '../assets/Procedimentos/Clinica-geral.webp';
import esteticaImg from '../assets/Procedimentos/Estetica.webp';
import canalImg from '../assets/Procedimentos/Canal.webp';
import proteseImg from '../assets/Procedimentos/Protese.webp';
import odontopediatriaImg from '../assets/Procedimentos/Odontopediatria.webp';
import tecnologiaImg from '../assets/Tecnologia.webp';
import victorTratamentoImg from '../assets/Victor-tratamento.webp';
import clinicaExternaImg from '../assets/clinica-externa.webp';
import clinicaInterna1Img from '../assets/clinica-interna-1.webp';
import clinicaInterna2Img from '../assets/clinica-interna-2.webp';
import clinicaInterna3Img from '../assets/clinica-interna-3.webp';
import fotoClinicaImg from '../assets/clinica-externa.webp';
import equipeTecnologiaImg from '../assets/equipe-tecnologia.webp';
import odontopediatriaHeaderImg from '../assets/odontopediatria-hero.webp';
import ortodontiaHeaderImg from '../assets/mulher-sorrindo-invisalign.webp';
import protesesHeaderImg from '../assets/proteses.webp';
import clinicaGeralHeaderImg from '../assets/Procedimentos/Clinica-geral-landscape.webp';

interface ServiceItem {
  name: string;
  desc: string;
  benefit: string;
  icon: React.ElementType;
  tag: string;
  image: string;
}

interface Testimonial {
  name: string;
  text: string;
  role: string;
}

interface MethodologyStep {
  step: string;
  title: string;
  desc: string;
  icon: React.ElementType;
  color: string;
}

interface StepItem {
  number: string;
  title: string;
  desc: string;
}

interface PageContent {
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
  heroOverlayOpacity?: number;
  heroOverlayIntensity?: number;
  heroOverlayColor?: string;
  mainImage: string;
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
        image: tecnologiaImg
      },
      {
        name: 'Aparelho Infantil e Guiado',
        desc: 'Cuidados preventivos que guiam o crescimento correto dos dentes das crianças.',
        benefit: 'Evita problemas graves de mastigação e tratamentos longos no futuro.',
        icon: BrainCircuit,
        tag: 'Para Crianças',
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
      { number: '01', title: 'Exame com Câmera HD', desc: 'Filmamos cada dente em alta definição para identificar detalhes na TV.' },
      { number: '02', title: 'Limpeza Suave', desc: 'Removemos manchas e tártaro de forma delicada sem agredir o esmalte.' },
      { number: '03', title: 'Proteção Preventiva', desc: 'Fortalecemos os dentes e orientamos os cuidados ideais no seu dia a dia.' }
    ],
    responsibility: 'Nosso foco é prevenir para que você não precise passar por procedimentos complicados no futuro.',
    heroCta: 'Agendar Check-up',
    ctaText: 'Garanta sua saúde bucal preventiva hoje',
    heroImage: clinicaGeralHeaderImg,
    mainImage: clinicaGeralImg,
    testimonial: {
      name: 'Wandersom Alves',
      text: 'Fui à clínica por indicação e o atendimento foi impecável em todos os momentos! Explicam tudo com muita clareza e paciência nos mínimos detalhes, mostrando cada procedimento e todos os cuidados pós-atendimento. Essa transparência deixa a gente muito seguro e tranquilo. Recomendo com toda certeza!',
      role: 'Paciente da Souriê'
    },
    services: [
      {
        name: 'Check-up com Câmera HD',
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
    bodyText: 'Criamos um projeto personalizado para o seu sorriso respeitando o formato do seu rosto e a sua personalidade. Seja com clareamentos eficientes ou facetas de resina, você conquista dentes mais brancos, bem alinhados e com um acabamento suave e natural.',
    whyDoIt: 'Recupere a vontade de sorrir nas fotos e em conversas de perto com dentes brancos, bem formatados e perfeitamente naturais.',
    targetAudience: [
      'Pessoas incomodadas com dentes amarelados, manchados ou desgastados',
      'Quem possui pequenos desníveis de tamanho ou espaços entre dentes',
      'Quem busca uma transformação estética sutil, elegante e harmonizada'
    ],
    threeSteps: [
      { number: '01', title: 'Projeto Facial 3D', desc: 'Desenhamos a proporção ideal do novo sorriso em sintonia com o seu rosto.' },
      { number: '02', title: 'Definição de Tom', desc: 'Escolhemos a cor exata e o material de alta tecnologia para máxima naturalidade.' },
      { number: '03', title: 'Aplicação Precisa', desc: 'Realizamos o clareamento ou facetas com acabamento impecável e sem dor.' }
    ],
    responsibility: 'Nosso objetivo é proporcionar um sorriso bonito, iluminado e extremamente natural.',
    heroCta: 'Transformar Meu Sorriso',
    ctaText: 'Planejamento personalizado do seu novo sorriso',
    mainImage: esteticaImg,
    testimonial: {
      name: 'Jennifer Fideles',
      text: 'Era exatamente isso que eu buscava: naturalidade! Amei o resultado final desse processo lindo, superou todas as minhas expectativas. Muito obrigada ao Dr. Victor por elevar a minha autoestima!',
      role: 'Paciente de Estética Dental'
    },
    services: [
      {
        name: 'Lentes e Facetas de Porcelana',
        desc: 'Capas ultra finas aplicadas para corrigir manchas, formatos e espaços.',
        benefit: 'Resistentes a manchas e com brilho e cor permanentes.',
        icon: Gem,
        tag: 'Resultado Premium',
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
        name: 'Facetas de Resina Direct',
        desc: 'Modelagem direta nos dentes para corrigir formato e cor em poucas horas.',
        benefit: 'Transformação rápida, acessível e com excelente resultado visual.',
        icon: Layers,
        tag: 'Rápido e Prático',
        image: fotoClinicaImg
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
        name: 'Tratamentos Corporais e Vasculares',
        desc: 'Serviços como secagem de microvasos e procedimentos lipoenzimáticos para gordura localizada.',
        benefit: 'Combina tratamentos estéticos para melhorar a aparência da pele e do corpo.',
        icon: Activity,
        tag: 'Corpo e Vasos',
        image: fotoClinicaImg
      }
    ],
    methodology: [
      { step: '01', title: 'Conversa e Desejo', desc: 'Entendemos exatamente o que você gostaria de mudar no seu sorriso.', icon: Smile, color: 'bg-teal-primary' },
      { step: '02', title: 'Projeto do Sorriso', desc: 'Desenhamos as proporções ideais para combinar com o seu rosto.', icon: Sparkles, color: 'bg-teal-medium' },
      { step: '03', title: 'Aplicação Suave', desc: 'Realizamos o clareamento ou a colocação das facetas sem dor.', icon: Zap, color: 'bg-teal-dark' },
      { step: '04', title: 'Novo Sorriso', desc: 'Você sai do consultório pronto para sorrir livremente para o mundo.', icon: CheckCircle2, color: 'bg-navy-dark' }
    ]
  },
  'cirurgias-e-canal': {
    title: 'Tratamento de Canal & Sisos',
    category: 'Tratamentos Sem Dor',
    sectionTitle: 'Alívio imediato e procedimentos tranquilos com anestesia indolor',
    description: 'Tratamentos rápidos e sem sofrimento para eliminar a dor de dente e resolver extrações com segurança.',
    headline: 'Elimine a dor de dente com total tranquilidade',
    subheadline: 'Atendimento rápido e humanizado para você voltar a ter paz',
    bodyText: 'Sabemos que dor de dente é um pesadelo. Por isso, utilizamos técnicas modernas de anestesia delicada e equipamentos de alta precisão que tornam o tratamento de canal e a remoção de siso extremamente ágeis e indolores. Cuidamos de você com todo o carinho e paciência que você merece.',
    whyDoIt: 'Elimine a dor de dente com urgência e viva uma experiência de tratamento tranquila, rápida e com anestesia suave.',
    targetAudience: [
      'Pessoas com dores intensas, pontadas ou sensibilidade extrema no dente',
      'Quem precisa remover o siso de forma ágil, prevenindo inchaço e complicações',
      'Pacientes com medo de cirurgias que procuram um atendimento acolhedor'
    ],
    threeSteps: [
      { number: '01', title: 'Diagnóstico Imediato', desc: 'Identificamos a causa exata da dor com exames radiográficos digitais.' },
      { number: '02', title: 'Anestesia Indolor', desc: 'Aplicação suave e gradual para você não sentir o desconforto da agulha.' },
      { number: '03', title: 'Alívio & Cura', desc: 'Executamos a limpeza do canal ou extração de forma rápida e precisa.' }
    ],
    responsibility: 'Oferecemos suporte e acompanhamento pós-procedimento para garantir sua recuperação sem preocupações.',
    heroCta: 'Aliviar Minha Dor Agora',
    ctaText: 'Atendimento rápido e totalmente sem dor',
    mainImage: canalImg,
    testimonial: {
      name: 'Carolina Castro Oliveira',
      text: 'O Dr. Victor extraiu meu siso e foi extremamente profissional, pontual e atencioso. Me senti muito bem atendida e totalmente confiante com o cuidado e a técnica dele durante todo o procedimento. Recomendo com certeza!',
      role: 'Paciente de Cirurgia e Siso'
    },
    services: [
      {
        name: 'Tratamento de Canal Rápido',
        desc: 'Tecnologia que limpa a infecção de forma automatizada e em poucas sessões.',
        benefit: 'Acaba com a dor de dente imediatamente e salva o seu dente original.',
        icon: Activity,
        tag: 'Alívio Rápido',
        image: canalImg
      },
      {
        name: 'Retirada de Siso Segura',
        desc: 'Extração planejada com exames digitais detalhados para máxima precisão.',
        benefit: 'Procedimento ágil, com menor inchaço e recuperação tranquila.',
        icon: Scissors,
        tag: 'Procedimento Suave',
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
        name: 'Anestesia Indolor & Suave',
        desc: 'Aplicação delicada e progressiva do anestésico para zero desconforto.',
        benefit: 'Procedimento confortável do início ao fim, perfeito para quem tem receio.',
        icon: Syringe,
        tag: 'Sem Constrangimento',
        image: equipeTecnologiaImg
      }
    ],
    methodology: [
      { step: '01', title: 'Exame Detalhado', desc: 'Identificamos a origem exata da dor com exames rápidos.', icon: ScanLine, color: 'bg-teal-primary' },
      { step: '02', title: 'Anestesia Suave', desc: 'Usamos anestesia confortável sem a sensação dolorosa da agulha.', icon: Syringe, color: 'bg-teal-medium' },
      { step: '03', title: 'Alívio da Dor', desc: 'Tratamos o dente ou fazemos a extração de forma delicada e rápida.', icon: Activity, color: 'bg-teal-dark' },
      { step: '04', title: 'Pós-atendimento', desc: 'Acompanhamos sua evolução pelo WhatsApp até você estar 100%.', icon: Clock, color: 'bg-navy-dark' }
    ]
  },
  'proteses-e-implantes': {
    title: 'Implantes & Próteses',
    category: 'Sorriso Novo & Fixo',
    sectionTitle: 'Recupere a segurança para mastigar e sorrir sem medo',
    description: 'Substitua dentes perdidos por implantes firmes e próteses fixas com aparência e conforto idênticos aos dentes naturais.',
    headline: 'Volte a comer tudo o que gosta e sorria sem preocupação',
    subheadline: 'Diga adeus às dentaduras soltas e à insegurança na hora de falar',
    bodyText: 'Perder um dente afeta a mastigação e a autoconfiança. Com nossos implantes de última geração e próteses fixas, você recupera dentes firmes e fixos que não saem do lugar, permitindo que você coma de tudo e sorria com tranquilidade.',
    whyDoIt: 'Volte a mastigar tudo o que gosta e conquiste a segurança de dentes firmes e fixos como os originais.',
    targetAudience: [
      'Pessoas que perderam dentes e desejam recuperar o sorriso e a mastigação',
      'Usuários de dentaduras móveis incomodados com machucados e insegurança',
      'Quem busca restabelecer a estética e a saúde óssea da boca com durabilidade'
    ],
    threeSteps: [
      { number: '01', title: 'Planejamento 3D', desc: 'Analisamos a estrutura óssea para o posicionamento milimétrico do pino.' },
      { number: '02', title: 'Instalação do Pino', desc: 'Colocação rápida do implante de titânio sob anestesia local confortável.' },
      { number: '03', title: 'Fixação do Dente', desc: 'Encaixamos a coroa idêntica ao dente natural para você comer livremente.' }
    ],
    responsibility: 'Garantimos materiais de altíssima qualidade e acompanhamento dedicado para o seu conforto diário.',
    heroCta: 'Recuperar Meu Sorriso',
    ctaText: 'Reabilitação total com dentes fixos e seguros',
    heroImage: protesesHeaderImg,
    mainImage: proteseImg,
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
        name: 'Coroas de Zircônia',
        desc: 'Dentes estéticos resistentes e sem marcas escuras na linha da gengiva.',
        benefit: 'Aparência linda, natural e extremamente resistente ao tempo.',
        icon: Gem,
        tag: 'Resistente e Bonito',
        image: tecnologiaImg
      },
      {
        name: 'Dentes no Mesmo Dia',
        desc: 'Instalação de dentes provisórios fixos logo após o implante em casos aptos.',
        benefit: 'Você entra no consultório e já sai com o sorriso preenchido.',
        icon: Zap,
        tag: 'Agilidade',
        image: fotoClinicaImg
      }
    ],
    methodology: [
      { step: '01', title: 'Avaliação dos Dentes', desc: 'Analisamos a estrutura da boca com exames de imagem simples.', icon: Bone, color: 'bg-teal-primary' },
      { step: '02', title: 'Instalação Suave', desc: 'Colocamos o implante com anestesia confortável e sem correria.', icon: Shield, color: 'bg-teal-medium' },
      { step: '03', title: 'Proteção Provisória', desc: 'Você nunca fica sem dentes durante a fase de cicatrização.', icon: Layers, color: 'bg-teal-dark' },
      { step: '04', title: 'Sorriso Fixo Pronto', desc: 'Instalamos seu dente final para você voltar a comer com alegria.', icon: CheckCircle2, color: 'bg-navy-dark' }
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
    mainImage: odontopediatriaImg,
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

  if (!slug || !PAGES_CONTENT[slug]) {
    return <Navigate to="/" replace />;
  }

  const page = PAGES_CONTENT[slug];
  const HeroIcon = PROCEDURE_ICONS[slug] || Sparkles;

  const heroContainerRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLImageElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
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
      title: 'Souriê | Estética Dental e Harmonização Facial',
      description: 'Clareamento, facetas e harmonização orofacial na Souriê Odontologia. Transforme seu sorriso com naturalidade e tecnologia. Projeto personalizado para seu rosto.'
    },
    'cirurgias-e-canal': {
      title: 'Souriê | Tratamento de Canal e Cirurgias em Nova Era',
      description: 'Tratamento de canal, extração de sisos e cirurgias sem dor na Souriê. Anestesia suave, diagnóstico digital e suporte pós-procedimento via WhatsApp.'
    },
    'proteses-e-implantes': {
      title: 'Souriê | Implantes e Próteses Dentárias em Nova Era',
      description: 'Implantes de titânio, próteses fixas e coroas de zircônia na Souriê. Recupere a mastigação e a autoconfiança com reabilitação oral segura e duradoura.'
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
          <img
            ref={heroImageRef}
            src={page.heroImage || page.mainImage}
            alt={page.title}
            className="w-full h-full object-cover transition-transform duration-1000 scale-105"
            style={{ objectPosition: page.heroImagePosition || 'center center' }}
          />

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
                  Como funciona em 3 passos
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
      {/* Structured Customer Testimonial + Nosso Compromisso Section */}
      <SectionContainer background="bg-bg-light/40" className="border-t border-black/[0.02]" innerClassName="!py-16 md:!py-24">
        <div className="max-w-6xl mx-auto space-y-10 md:space-y-12">
          {/* Testimonial Card (Full-width without image requirement) */}
          <ScrollReveal>
            <div className="relative w-full rounded-3xl md:rounded-[36px] overflow-hidden bg-white border border-black/[0.05] p-7 sm:p-10 lg:p-12 shadow-xl shadow-teal-950/[0.03]">
              {/* Subtle background watermark */}
              <div className="absolute top-2 right-6 sm:right-10 text-teal-primary/10 font-serif text-8xl sm:text-9xl select-none pointer-events-none leading-none">
                ”
              </div>

              <div className="relative z-10 space-y-6 max-w-4xl">
                {/* Header: Label + 5 Stars */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="inline-flex items-center gap-2 bg-teal-primary/5 border border-teal-primary/10 px-3.5 py-1.5 rounded-full">
                    <Sparkles size={13} className="text-teal-primary" />
                    <span className="text-teal-primary font-bold text-[10px] sm:text-xs tracking-[0.25em] uppercase">
                      Quem já sorriu conosco
                    </span>
                  </div>

                  {/* 5 Stars Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} className="text-amber-400 fill-amber-400" />
                    ))}
                    <span className="ml-1.5 text-xs font-bold text-teal-dark/70">5.0</span>
                  </div>
                </div>

                {/* Quote text */}
                <p className="text-teal-dark text-lg sm:text-2xl lg:text-[25px] leading-relaxed font-light font-serif italic">
                  "{page.testimonial.text}"
                </p>

                {/* Author & Verified Badge */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-black/[0.05]">
                  <div className="flex items-center gap-3.5">
                    {/* Avatar Initials Badge */}
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-teal-primary to-teal-dark text-white font-bold text-sm flex items-center justify-center shadow-md shadow-teal-900/10 shrink-0">
                      {page.testimonial.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                    </div>

                    <div>
                      <h4 className="text-teal-dark text-sm font-bold font-sans">
                        {page.testimonial.name}
                      </h4>
                      <p className="text-teal-primary/80 text-xs font-medium">
                        {page.testimonial.role}
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-primary bg-teal-primary/5 border border-teal-primary/10 px-3 py-1.5 rounded-full">
                    <CheckCircle2 size={14} className="text-teal-primary" />
                    <span>Paciente Verificado</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Nosso Compromisso Banner Section */}
          <ScrollReveal delay={0.1}>
            <div className="bg-gradient-to-r from-teal-dark/5 to-teal-primary/5 border border-teal-primary/10 rounded-3xl p-8 md:p-12 relative overflow-hidden group shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 w-full">
              <div className="absolute right-0 bottom-0 text-teal-primary/5 translate-x-6 translate-y-6 transition-transform duration-700 pointer-events-none">
                <Award size={180} strokeWidth={1} />
              </div>

              <div className="space-y-4 max-w-2xl text-center md:text-left relative z-10">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-teal-primary/10 flex items-center justify-center text-teal-medium">
                    <Award size={16} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-dark">Nosso Compromisso Souriê</span>
                </div>
                <p className="text-lg md:text-xl font-medium text-teal-dark font-sans leading-relaxed">
                  "{page.responsibility}"
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

                        {/* Top: Icon Badge & Tag */}
                        <div className="relative z-10 flex items-center justify-between">
                          <div className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-cyan-light shadow-sm shrink-0">
                            <Icon size={15} strokeWidth={1.5} />
                          </div>
                          <span className="text-[9px] font-bold uppercase tracking-wider text-white/70 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                            {service.tag}
                          </span>
                        </div>

                        {/* Center Cartoon SVG Illustration */}
                        <div className="relative z-10 my-2 flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110">
                          <SpecialtyIllustration name={service.name} size={110} />
                        </div>

                        {/* Bottom: Title */}
                        <div className="relative z-10 space-y-1 text-left">
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
