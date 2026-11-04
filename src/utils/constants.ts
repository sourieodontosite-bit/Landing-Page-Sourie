export const WHATSAPP_NUMBER = '553139614845';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

/**
 * Gera um link do WhatsApp com mensagem pré-preenchida.
 * @param message - Texto da mensagem (será codificado para URL)
 */
export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Mensagens contextuais por seção da landing page */
export const WA_MESSAGES = {
  /** Hero principal — primeiro contato genérico */
  hero: 'Olá! Gostaria de agendar minha avaliação na Souriê Odontologia. Podem me ajudar?',

  /** Navbar — botão flutuante (genérico) */
  navbar: 'Olá, vi o site da Souriê e gostaria de agendar uma avaliação. Podem me atender?',

  /** Menu mobile */
  navbarMobile: 'Olá! Quero agendar uma avaliação odontológica na Souriê. Estão disponíveis?',

  /** Seção de procedimentos — CTA da grade de serviços */
  proceduresCta: 'Olá! Quero saber mais sobre os procedimentos disponíveis e agendar uma avaliação na Souriê.',

  /** Seção de depoimentos — CTA de conversão */
  testimonials: 'Olá! Vi os depoimentos no site e fiquei interessado(a) em agendar uma avaliação na Souriê. Podem me ajudar?',

  /** Seção de ambiente / localização */
  clinicEnvironment: 'Olá! Vim pelo site da Souriê e gostaria de agendar uma avaliação. Estão com horário disponível?',

  /** Footer / links sociais */
  footer: 'Olá! Acessei o site da Souriê e gostaria de entrar em contato.',
};

/** Mensagens contextuais para as páginas de procedimentos (InternalPage) */
export const WA_PROCEDURE_MESSAGES: Record<string, {
  hero: string;
  commitment: string;
  serviceCard: string;
  finalCta: string;
}> = {
  ortodontia: {
    hero: 'Olá! Tenho interesse em tratamento de Ortodontia (Invisalign) na Souriê. Podem me enviar informações e agendar uma avaliação?',
    commitment: 'Olá! Quero falar com um especialista sobre Ortodontia Invisível na Souriê. Como funciona o acompanhamento?',
    serviceCard: 'Olá! Vi os serviços de Ortodontia no site e quero solicitar uma avaliação. Estão disponíveis?',
    finalCta: 'Olá! Quero alinhar meus dentes com Invisalign na Souriê. Podem agendar minha consulta?',
  },
  'clinica-geral': {
    hero: 'Olá! Quero agendar um Check-up Digital preventivo na Souriê. Têm horário disponível?',
    commitment: 'Olá! Gostaria de conversar com um especialista sobre Clínica Geral e prevenção na Souriê.',
    serviceCard: 'Olá! Vi os serviços de Clínica Geral e quero solicitar uma avaliação preventiva na Souriê.',
    finalCta: 'Olá! Quero garantir minha saúde bucal com um Check-up na Souriê. Podem me agendar?',
  },
  'odontologia-estetica': {
    hero: 'Olá! Tenho interesse em transformar meu sorriso com Estética Dental na Souriê. Podem me informar sobre facetas e clareamento?',
    commitment: 'Olá! Quero conversar com um especialista sobre Odontologia Estética na Souriê e entender as opções.',
    serviceCard: 'Olá! Vi os tratamentos estéticos no site da Souriê e quero solicitar uma avaliação do meu sorriso.',
    finalCta: 'Olá! Quero transformar meu sorriso com estética dental na Souriê. Podem agendar minha consulta?',
  },
  'tratamento-de-canal': {
    hero: 'Olá! Tenho interesse em Tratamento Endodôntico (Canal) na Souriê. Podem me ajudar a agendar uma avaliação?',
    commitment: 'Olá! Quero falar com um especialista sobre Tratamento de Canal na Souriê.',
    serviceCard: 'Olá! Vi as informações sobre Tratamento e Retratamento de Canal no site da Souriê e preciso de uma avaliação.',
    finalCta: 'Olá! Preciso agendar atendimento para tratamento de canal na Souriê. Estão disponíveis?',
  },
  cirurgias: {
    hero: 'Olá! Preciso de uma avaliação para Cirurgia / Extração de Siso na Souriê. Há disponibilidade?',
    commitment: 'Olá! Quero falar com um especialista sobre Cirurgia e Remoção de Siso na Souriê. Podem me ajudar?',
    serviceCard: 'Olá! Vi os serviços de Cirurgia e Siso no site da Souriê e gostaria de agendar uma avaliação.',
    finalCta: 'Olá! Preciso agendar uma avaliação para extração de siso na Souriê. Estão disponíveis?',
  },
  proteses: {
    hero: 'Olá! Tenho interesse em Próteses Removíveis e Fixas na Souriê. Podem me informar sobre o tratamento e agendar uma avaliação?',
    commitment: 'Olá! Quero conversar com um especialista sobre Próteses Dentárias na Souriê.',
    serviceCard: 'Olá! Vi os serviços de Próteses Fixas e Removíveis no site e quero solicitar uma avaliação.',
    finalCta: 'Olá! Quero recuperar meu sorriso com Próteses Dentárias na Souriê. Podem agendar minha consulta?',
  },
  implantes: {
    hero: 'Olá! Tenho interesse em Implantes Dentários na Souriê. Podem me informar sobre o tratamento e agendar uma avaliação?',
    commitment: 'Olá! Quero conversar com um especialista sobre reabilitação oral com Implantes na Souriê.',
    serviceCard: 'Olá! Vi os serviços de Implantes no site e quero solicitar uma avaliação.',
    finalCta: 'Olá! Quero recuperar meu sorriso com Implantes na Souriê. Podem agendar minha consulta?',
  },
  'cirurgias-e-canal': {
    hero: 'Olá! Preciso de atendimento — tenho interesse em Cirurgia/Tratamento de Canal na Souriê. Há disponibilidade?',
    commitment: 'Olá! Quero falar com um especialista sobre Cirurgias e Canal na Souriê. Podem me ajudar?',
    serviceCard: 'Olá! Vi os serviços de Cirurgia e Canal no site da Souriê e preciso de uma avaliação.',
    finalCta: 'Olá! Preciso agendar atendimento para tratamento de canal ou extração de siso na Souriê. Estão disponíveis?',
  },
  'proteses-e-implantes': {
    hero: 'Olá! Tenho interesse em Implantes e Próteses na Souriê. Podem me informar sobre o tratamento e agendar uma avaliação?',
    commitment: 'Olá! Quero conversar com um especialista sobre reabilitação oral com implantes na Souriê.',
    serviceCard: 'Olá! Vi os serviços de Próteses e Implantes no site e quero solicitar uma avaliação.',
    finalCta: 'Olá! Quero recuperar meu sorriso com Implantes na Souriê. Podem agendar minha consulta?',
  },
  odontopediatria: {
    hero: 'Olá! Quero agendar uma consulta de Odontopediatria para meu filho(a) na Souriê. Têm disponibilidade?',
    commitment: 'Olá! Quero falar com um especialista sobre o atendimento infantil da Souriê. Como funciona?',
    serviceCard: 'Olá! Vi os serviços de Odontopediatria no site e quero agendar uma consulta para meu filho(a).',
    finalCta: 'Olá! Quero agendar a primeira consulta odontológica do meu filho(a) na Souriê. Estão disponíveis?',
  },
};

/** Mensagens contextuais para páginas dos dentistas */
export const WA_DENTIST_MESSAGES: Record<string, {
  hero: string;
  differential: string;
  finalCta: string;
}> = {
  'dr-victor': {
    hero: 'Olá! Gostaria de agendar uma consulta com o Dr. Victor na Souriê.',
    differential: 'Olá! Vi o perfil do Dr. Victor na Souriê e quero agendar uma consulta com foco em Cirurgia de Siso. Podem me ajudar?',
    finalCta: 'Olá! Quero agendar uma avaliação cirúrgica ou clínica com o Dr. Victor na Souriê. Estão disponíveis?',
  },
  'dra-estefania': {
    hero: 'Olá! Gostaria de agendar uma consulta com a Dra. Estefânia na Souriê.',
    differential: 'Olá! Vi o perfil da Dra. Estefânia e quero iniciar meu tratamento ortodôntico na Souriê. Podem me informar?',
    finalCta: 'Olá! Quero agendar uma avaliação ortodôntica com a Dra. Estefânia na Souriê. Têm disponibilidade?',
  },
  'dr-breno': {
    hero: 'Olá! Gostaria de agendar uma consulta com o Dr. Breno na Souriê.',
    differential: 'Olá! Vi o perfil do Dr. Breno na Souriê e quero saber mais sobre reabilitação oral e implantes. Podem me ajudar?',
    finalCta: 'Olá! Quero agendar uma avaliação de reabilitação oral com o Dr. Breno na Souriê. Estão disponíveis?',
  },
  'dra-junia': {
    hero: 'Olá! Gostaria de agendar uma consulta com a Dra. Júnia na Souriê.',
    differential: 'Olá! Vi o perfil da Dra. Júnia e quero saber mais sobre harmonização facial na Souriê. Podem me ajudar?',
    finalCta: 'Olá! Quero agendar uma avaliação de biomedicina estética com a Dra. Júnia na Souriê. Estão disponíveis?',
  },
  'dra-tayna': {
    hero: 'Olá! Gostaria de agendar uma consulta com a Dra. Tayná na Souriê.',
    differential: 'Olá! Vi o perfil da Dra. Tayná e quero agendar uma consulta de odontopediatria para meu filho(a) na Souriê. Podem me ajudar?',
    finalCta: 'Olá! Quero agendar uma avaliação infantil com a Dra. Tayná na Souriê. Têm disponibilidade?',
  },
  'dra-beatriz': {
    hero: 'Olá! Gostaria de agendar uma consulta com a Dra. Beatriz na Souriê.',
    differential: 'Olá! Vi o perfil da Dra. Beatriz e quero saber mais sobre próteses dentárias na Souriê. Podem me ajudar?',
    finalCta: 'Olá! Quero agendar uma avaliação de prótese com a Dra. Beatriz na Souriê. Estão disponíveis?',
  },
  'nutri-maria-eduarda': {
    hero: 'Olá! Gostaria de agendar uma consulta com a Nutricionista Maria Eduarda na Souriê.',
    differential: 'Olá! Vi o perfil da Maria Eduarda e quero saber mais sobre nutrição clínica e estética na Souriê. Podem me ajudar?',
    finalCta: 'Olá! Quero agendar uma avaliação nutricional com a Maria Eduarda na Souriê. Têm disponibilidade?',
  },
};

export const NAV_LINKS = [
  { label: 'Procedimentos', href: '/#servicos' },
  { label: 'Quem somos', href: '/#equipe' },
  { label: 'Depoimentos', href: '/#depoimentos' },
  { label: 'Localização', href: '/#ambiente' },
];

export interface EducationItem {
  year: string;
  title: string;
}

export interface Differential {
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  slug: string;
  crm: string;
  bio: string;
  fullBio: string[];
  education: EducationItem[];
  differential?: Differential;
  specialties: string[];
  instagram: string;
}

export interface MemberTheme {
  accent: string;
  accentSoft: string;
  accentDeep: string;
  overlayFrom: string;
  overlayVia: string;
  cardBg: string;
  roleText: string;
  instagramBg: string;
  instagramHover: string;
  tagBg: string;
  tagBorder: string;
  btnHover: string;
  btnHoverBorder: string;
  aboutSectionBg: string;
  aboutAccent: string;
  highlightBg: string;
  highlightIcon: string;
  highlightLabel: string;
  highlightValue: string;
  specialtyBorder: string;
  specialtyIconBg: string;
  specialtyIconBgHover: string;
  differentialBg: string;
  blobLight: string;
  blobDeep: string;
  textAccent: string;
  sectionBadge: string;
  firstNameText: string;
  btnBg: string;
  btnBgHover: string;
  btnText: string;
  btnCircleBg: string;
  btnCircleBgHover: string;
  btnBorder: string;
  btnShadow: string;
}

export const MEMBER_THEMES: Record<string, MemberTheme> = {
  'dra-tayna': {
    accent: 'bg-[#5f97a7]',
    accentSoft: 'bg-[#5f97a7]/10',
    accentDeep: 'bg-[#5f97a7]/70',
    overlayFrom: 'from-[#2d5662]/90',
    overlayVia: 'via-[#5f97a7]/20',
    cardBg: 'bg-[#5f97a7]/90',
    roleText: 'text-cyan-light',
    instagramBg: 'bg-white/20',
    instagramHover: 'hover:bg-white hover:text-teal-dark',
    tagBg: 'bg-white/15',
    tagBorder: 'border-white/10',
    btnHover: 'hover:bg-white hover:text-teal-dark',
    btnHoverBorder: 'hover:border-white',
    aboutSectionBg: 'bg-[#5f97a7]',
    aboutAccent: 'text-cyan-light',
    highlightBg: 'bg-[#5f97a7]/10',
    highlightIcon: 'text-[#5f97a7]',
    highlightLabel: 'text-[#5f97a7]/60',
    highlightValue: 'text-[#5f97a7]',
    specialtyBorder: 'border-[#5f97a7]/15 hover:border-[#5f97a7]/40',
    specialtyIconBg: 'bg-[#5f97a7]/5 group-hover:bg-[#5f97a7]',
    specialtyIconBgHover: 'group-hover:bg-[#5f97a7] group-hover:text-white',
    differentialBg: 'bg-[#5f97a7]/50',
    blobLight: 'hsl(192 40% 85%)',
    blobDeep: 'hsl(192 40% 30%)',
    textAccent: 'text-[#5f97a7]',
    sectionBadge: 'text-[#5f97a7]',
    firstNameText: 'text-[#325A65]',
    btnBg: 'bg-[#5f97a7]',
    btnBgHover: 'hover:bg-[#4d8292]',
    btnText: 'text-white',
    btnCircleBg: 'bg-[#3c6d7c]',
    btnCircleBgHover: 'group-hover:bg-[#4d8292]',
    btnBorder: 'border-[#5f97a7]',
    btnShadow: 'shadow-[0_10px_30px_-12px_rgba(95,151,167,0.6)]',
  },
  'dra-beatriz': {
    accent: 'bg-[#588f9f]',
    accentSoft: 'bg-[#588f9f]/10',
    accentDeep: 'bg-[#588f9f]/70',
    overlayFrom: 'from-[#2a515c]/90',
    overlayVia: 'via-[#588f9f]/20',
    cardBg: 'bg-[#588f9f]/90',
    roleText: 'text-cyan-light',
    instagramBg: 'bg-white/20',
    instagramHover: 'hover:bg-white hover:text-teal-dark',
    tagBg: 'bg-white/15',
    tagBorder: 'border-white/10',
    btnHover: 'hover:bg-white hover:text-teal-dark',
    btnHoverBorder: 'hover:border-white',
    aboutSectionBg: 'bg-[#588f9f]',
    aboutAccent: 'text-cyan-light',
    highlightBg: 'bg-[#588f9f]/10',
    highlightIcon: 'text-[#588f9f]',
    highlightLabel: 'text-[#588f9f]/60',
    highlightValue: 'text-[#588f9f]',
    specialtyBorder: 'border-[#588f9f]/15 hover:border-[#588f9f]/40',
    specialtyIconBg: 'bg-[#588f9f]/5 group-hover:bg-[#588f9f]',
    specialtyIconBgHover: 'group-hover:bg-[#588f9f] group-hover:text-white',
    differentialBg: 'bg-[#588f9f]/50',
    blobLight: 'hsl(192 37% 85%)',
    blobDeep: 'hsl(192 37% 30%)',
    textAccent: 'text-[#588f9f]',
    sectionBadge: 'text-[#588f9f]',
    firstNameText: 'text-[#325A65]',
    btnBg: 'bg-[#588f9f]',
    btnBgHover: 'hover:bg-[#477a8a]',
    btnText: 'text-white',
    btnCircleBg: 'bg-[#366574]',
    btnCircleBgHover: 'group-hover:bg-[#477a8a]',
    btnBorder: 'border-[#588f9f]',
    btnShadow: 'shadow-[0_10px_30px_-12px_rgba(88,143,159,0.6)]',
  },
  'dr-victor': {
    accent: 'bg-[#528797]',
    accentSoft: 'bg-[#528797]/10',
    accentDeep: 'bg-[#528797]/70',
    overlayFrom: 'from-[#264b56]/90',
    overlayVia: 'via-[#528797]/20',
    cardBg: 'bg-[#528797]/90',
    roleText: 'text-cyan-light',
    instagramBg: 'bg-white/20',
    instagramHover: 'hover:bg-white hover:text-teal-dark',
    tagBg: 'bg-white/15',
    tagBorder: 'border-white/10',
    btnHover: 'hover:bg-white hover:text-teal-dark',
    btnHoverBorder: 'hover:border-white',
    aboutSectionBg: 'bg-[#528797]',
    aboutAccent: 'text-cyan-light',
    highlightBg: 'bg-[#528797]/10',
    highlightIcon: 'text-[#528797]',
    highlightLabel: 'text-[#528797]/60',
    highlightValue: 'text-[#528797]',
    specialtyBorder: 'border-[#528797]/15 hover:border-[#528797]/40',
    specialtyIconBg: 'bg-[#528797]/5 group-hover:bg-[#528797]',
    specialtyIconBgHover: 'group-hover:bg-[#528797] group-hover:text-white',
    differentialBg: 'bg-[#528797]/50',
    blobLight: 'hsl(192 35% 85%)',
    blobDeep: 'hsl(192 35% 30%)',
    textAccent: 'text-[#528797]',
    sectionBadge: 'text-[#528797]',
    firstNameText: 'text-[#325A65]',
    btnBg: 'bg-[#528797]',
    btnBgHover: 'hover:bg-[#417282]',
    btnText: 'text-white',
    btnCircleBg: 'bg-[#315e6c]',
    btnCircleBgHover: 'group-hover:bg-[#417282]',
    btnBorder: 'border-[#528797]',
    btnShadow: 'shadow-[0_10px_30px_-12px_rgba(82,135,151,0.6)]',
  },
  'dra-estefania': {
    accent: 'bg-[#4a7f8f]',
    accentSoft: 'bg-[#4a7f8f]/10',
    accentDeep: 'bg-[#4a7f8f]/70',
    overlayFrom: 'from-[#224450]/90',
    overlayVia: 'via-[#4a7f8f]/20',
    cardBg: 'bg-[#4a7f8f]/90',
    roleText: 'text-cyan-light',
    instagramBg: 'bg-white/20',
    instagramHover: 'hover:bg-white hover:text-teal-dark',
    tagBg: 'bg-white/15',
    tagBorder: 'border-white/10',
    btnHover: 'hover:bg-white hover:text-teal-dark',
    btnHoverBorder: 'hover:border-white',
    aboutSectionBg: 'bg-[#4a7f8f]',
    aboutAccent: 'text-cyan-light',
    highlightBg: 'bg-[#4a7f8f]/10',
    highlightIcon: 'text-[#4a7f8f]',
    highlightLabel: 'text-[#4a7f8f]/60',
    highlightValue: 'text-[#4a7f8f]',
    specialtyBorder: 'border-[#4a7f8f]/15 hover:border-[#4a7f8f]/40',
    specialtyIconBg: 'bg-[#4a7f8f]/5 group-hover:bg-[#4a7f8f]',
    specialtyIconBgHover: 'group-hover:bg-[#4a7f8f] group-hover:text-white',
    differentialBg: 'bg-[#4a7f8f]/50',
    blobLight: 'hsl(192 33% 85%)',
    blobDeep: 'hsl(192 33% 30%)',
    textAccent: 'text-[#4a7f8f]',
    sectionBadge: 'text-[#4a7f8f]',
    firstNameText: 'text-[#325A65]',
    btnBg: 'bg-[#4a7f8f]',
    btnBgHover: 'hover:bg-[#3a6b7a]',
    btnText: 'text-white',
    btnCircleBg: 'bg-[#2b5765]',
    btnCircleBgHover: 'group-hover:bg-[#3a6b7a]',
    btnBorder: 'border-[#4a7f8f]',
    btnShadow: 'shadow-[0_10px_30px_-12px_rgba(74,127,143,0.6)]',
  },
  'dr-breno': {
    accent: 'bg-[#427787]',
    accentSoft: 'bg-[#427787]/10',
    accentDeep: 'bg-[#427787]/70',
    overlayFrom: 'from-[#1f3e49]/90',
    overlayVia: 'via-[#427787]/20',
    cardBg: 'bg-[#427787]/90',
    roleText: 'text-cyan-light',
    instagramBg: 'bg-white/20',
    instagramHover: 'hover:bg-white hover:text-teal-dark',
    tagBg: 'bg-white/15',
    tagBorder: 'border-white/10',
    btnHover: 'hover:bg-white hover:text-teal-dark',
    btnHoverBorder: 'hover:border-white',
    aboutSectionBg: 'bg-[#427787]',
    aboutAccent: 'text-cyan-light',
    highlightBg: 'bg-[#427787]/10',
    highlightIcon: 'text-[#427787]',
    highlightLabel: 'text-[#427787]/60',
    highlightValue: 'text-[#427787]',
    specialtyBorder: 'border-[#427787]/15 hover:border-[#427787]/40',
    specialtyIconBg: 'bg-[#427787]/5 group-hover:bg-[#427787]',
    specialtyIconBgHover: 'group-hover:bg-[#427787] group-hover:text-white',
    differentialBg: 'bg-[#427787]/50',
    blobLight: 'hsl(192 31% 85%)',
    blobDeep: 'hsl(192 31% 30%)',
    textAccent: 'text-[#427787]',
    sectionBadge: 'text-[#427787]',
    firstNameText: 'text-[#325A65]',
    btnBg: 'bg-[#427787]',
    btnBgHover: 'hover:bg-[#336372]',
    btnText: 'text-white',
    btnCircleBg: 'bg-[#254f5d]',
    btnCircleBgHover: 'group-hover:bg-[#336372]',
    btnBorder: 'border-[#427787]',
    btnShadow: 'shadow-[0_10px_30px_-12px_rgba(66,119,135,0.6)]',
  },
  'dra-junia': {
    accent: 'bg-[#396e7e]',
    accentSoft: 'bg-[#396e7e]/10',
    accentDeep: 'bg-[#396e7e]/70',
    overlayFrom: 'from-[#1b3743]/90',
    overlayVia: 'via-[#396e7e]/20',
    cardBg: 'bg-[#396e7e]/90',
    roleText: 'text-cyan-light',
    instagramBg: 'bg-white/20',
    instagramHover: 'hover:bg-white hover:text-teal-dark',
    tagBg: 'bg-white/15',
    tagBorder: 'border-white/10',
    btnHover: 'hover:bg-white hover:text-teal-dark',
    btnHoverBorder: 'hover:border-white',
    aboutSectionBg: 'bg-[#396e7e]',
    aboutAccent: 'text-cyan-light',
    highlightBg: 'bg-[#396e7e]/10',
    highlightIcon: 'text-[#396e7e]',
    highlightLabel: 'text-[#396e7e]/60',
    highlightValue: 'text-[#396e7e]',
    specialtyBorder: 'border-[#396e7e]/15 hover:border-[#396e7e]/40',
    specialtyIconBg: 'bg-[#396e7e]/5 group-hover:bg-[#396e7e]',
    specialtyIconBgHover: 'group-hover:bg-[#396e7e] group-hover:text-white',
    differentialBg: 'bg-[#396e7e]/50',
    blobLight: 'hsl(192 29% 85%)',
    blobDeep: 'hsl(192 29% 30%)',
    textAccent: 'text-[#396e7e]',
    sectionBadge: 'text-[#396e7e]',
    firstNameText: 'text-[#325A65]',
    btnBg: 'bg-[#396e7e]',
    btnBgHover: 'hover:bg-[#2c5a69]',
    btnText: 'text-white',
    btnCircleBg: 'bg-[#1f4755]',
    btnCircleBgHover: 'group-hover:bg-[#2c5a69]',
    btnBorder: 'border-[#396e7e]',
    btnShadow: 'shadow-[0_10px_30px_-12px_rgba(57,110,126,0.6)]',
  },
  'nutri-maria-eduarda': {
    accent: 'bg-[#316676]',
    accentSoft: 'bg-[#316676]/10',
    accentDeep: 'bg-[#316676]/70',
    overlayFrom: 'from-[#17303b]/90',
    overlayVia: 'via-[#316676]/20',
    cardBg: 'bg-[#316676]/90',
    roleText: 'text-cyan-light',
    instagramBg: 'bg-white/20',
    instagramHover: 'hover:bg-white hover:text-teal-dark',
    tagBg: 'bg-white/15',
    tagBorder: 'border-white/10',
    btnHover: 'hover:bg-white hover:text-teal-dark',
    btnHoverBorder: 'hover:border-white',
    aboutSectionBg: 'bg-[#316676]',
    aboutAccent: 'text-cyan-light',
    highlightBg: 'bg-[#316676]/10',
    highlightIcon: 'text-[#316676]',
    highlightLabel: 'text-[#316676]/60',
    highlightValue: 'text-[#316676]',
    specialtyBorder: 'border-[#316676]/15 hover:border-[#316676]/40',
    specialtyIconBg: 'bg-[#316676]/5 group-hover:bg-[#316676]',
    specialtyIconBgHover: 'group-hover:bg-[#316676] group-hover:text-white',
    differentialBg: 'bg-[#316676]/50',
    blobLight: 'hsl(192 27% 85%)',
    blobDeep: 'hsl(192 27% 30%)',
    textAccent: 'text-[#316676]',
    sectionBadge: 'text-[#316676]',
    firstNameText: 'text-[#325A65]',
    btnBg: 'bg-[#316676]',
    btnBgHover: 'hover:bg-[#255261]',
    btnText: 'text-white',
    btnCircleBg: 'bg-[#19404e]',
    btnCircleBgHover: 'group-hover:bg-[#255261]',
    btnBorder: 'border-[#316676]',
    btnShadow: 'shadow-[0_10px_30px_-12px_rgba(49,102,118,0.6)]',
  },
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Dr. Victor Borges',
    role: 'Cirurgião Dentista',
    slug: 'dr-victor',
    crm: 'CRO-MG 50734',
    bio: 'Atuação pautada pela experiência, precisão técnica e cuidado individualizado em extrações dentárias, especialmente de dentes sisos, restaurações estéticas em resina e odontologia clínica geral.',
    fullBio: [
      'Nascido em Paracatu-MG, sempre sonhei em contribuir para a saúde e bem-estar das pessoas através da odontologia. Minha trajetória é marcada por dedicação, aprendizado contínuo e um compromisso inabalável com a excelência clínica.',
      'Desde 2018, encontrei em Nova Era-MG não apenas meu lar, mas também o lugar onde desenvolvo minha missão profissional. Casado, compartilho minha vida com uma parceira que me inspira e apoia em todos os momentos, equilibrando vida pessoal e dedicação profissional.'
    ],
    education: [
      { year: '2017', title: 'Graduação em Odontologia' },
      { year: '2018', title: 'Aperfeiçoamento em Cirurgia Bucal' },
      { year: '2024', title: 'Especialista em Restaurações Estéticas' }
    ],
    differential: {
      title: 'Exodontia de Sisos 🦷',
      description: 'Precisão técnica e atendimento humanizado para uma remoção de siso mais tranquila.'
    },
    specialties: ['Restaurações Estéticas', 'Exodontia de Sisos'],
    instagram: 'https://www.instagram.com/victormelob/'
  },
  {
    name: 'Dr. Breno Martins da Costa Lage',
    role: 'Cirurgião Dentista (RT)',
    slug: 'dr-breno',
    crm: 'CRO-MG 65391',
    bio: 'Responsável Técnico da Souriê Odontologia Integrada. Com especialização em Endodontia, atua em tratamentos de canal, prótese removível e clínica geral com alta tecnologia e cuidado humanizado.',
    fullBio: [
      'Sou Breno Martins da Costa Lage, cirurgião-dentista e Responsável Técnico da Souriê Odontologia Integrada. Nasci em Nova Era, Minas Gerais, e me formei em Odontologia pela Faculdade Anhanguera de Ipatinga em 2022.',
      'Tenho especialização em Endodontia. Trabalho nas áreas de Endodontia, Prótese e Clínica Geral, sempre buscando aliar funcionalidade e estética nos tratamentos.',
      'Na Endodontia, faço tratamentos de canal, ajudando a tratar infecções e lesões no interior do dente, aliviando dores e preservando os dentes naturais sempre que possível. Já na área de Prótese, minha atuação é focada em reabilitar sorrisos, confeccionando próteses removíveis, devolvendo aos pacientes a capacidade mastigatória, a saúde bucal e a confiança no sorriso.',
      'Aqui na Souriê, é muito mais que um sonho; é uma oportunidade de oferecer serviços de excelência e um atendimento diferenciado para nossos pacientes.'
    ],
    education: [
      { year: '2022', title: 'Graduação em Odontologia pela Faculdade Anhanguera' },
      { year: '', title: 'Especialização em Endodontia' }
    ],
    specialties: ['Endodontia', 'Prótese Removível', 'Clínica Geral'],
    instagram: 'https://www.instagram.com/breno.lage/'
  },
  {
    name: 'Dra. Estefânia Alves Martins',
    role: 'Cirurgiã Dentista',
    slug: 'dra-estefania',
    crm: 'CRO-MG 48255',
    bio: 'Dedicada à ortodontia e ortopedia funcional dos maxilares, a Dra. Estefânia utiliza as mais recentes tecnologias para criar sorrisos harmoniosos com conforto e precisão.',
    fullBio: [
      'Sou Estefânia Alves Martins, nascida em Nova Era, casada, cirurgiã-dentista formada pela Faculdade Newton em 2016, especialista em Ortodontia e Ortopedia Funcional dos Maxilares pelo CETRO-BH.',
      'Meu trabalho é dedicado a todas as idades: cuido de sorrisos de crianças e adolescentes com aparelhos ortopédicos, corrigindo alinhamentos e garantindo um desenvolvimento harmonioso. Para os adultos, desenvolvo tratamentos personalizados que devolvem a confiança através de um sorriso perfeito. 💫',
      'Acredito que cada sorriso conta uma história, e meu papel é fazer parte da vida dos meus pacientes de maneira acolhedora e especial 💖'
    ],
    education: [
      { year: '2016', title: 'Graduação em Odontologia pela Faculdade Newton' },
      { year: '', title: 'Especialista em Ortodontia e Ortopedia Funcional dos Maxilares pelo CETRO-BH' }
    ],
    specialties: ['Ortodontia', 'Ortopedia Funcional dos Maxilares', 'Invisalign', 'Ortodontia Infantil', 'Ortodontia Fixa'],
    instagram: 'https://www.instagram.com/estefaniaalvesm/'
  },
  {
    name: 'Beatriz Bittencourt Guimarães',
    role: 'Cirurgiã Dentista',
    slug: 'dra-beatriz',
    crm: 'CRO-MG 70129',
    bio: 'Dedicada às próteses fixas, restaurações estéticas, facetas em resina e clínica geral, Beatriz devolve função e estética aos sorrisos com precisão e atenção aos mínimos detalhes.',
    fullBio: [
      'Beatriz Bittencourt Guimarães é a profissional responsável pelo setor de próteses dentárias da Souriê Odontologia. Sua trajetória é marcada por dedicação e busca incessante pela excelência na reabilitação oral.',
      'Com olhar clínico apurado e habilidade técnica refinada, ela trabalha em estreita colaboração com os dentistas para garantir que cada prótese ofereça não apenas funcionalidade mastigatória, mas também harmonia estética perfeita ao sorriso do paciente.',
      'Sua paixão pelo trabalho transforma cada caso em uma verdadeira obra de arte, sempre priorizando o conforto e a satisfação de quem confia em seu trabalho.'
    ],
    education: [
      { year: '', title: 'Formação em Próteses Dentárias' },
      { year: '', title: 'Atualizações em Odontologia Estética e Reabilitação Oral' }
    ],
    specialties: ['Próteses Fixas', 'Restaurações Estéticas', 'Facetas em Resina', 'Clínica Geral'],
    instagram: 'https://www.instagram.com/beatrizbiitt/'
  },
  {
    name: 'Tayná Delfim',
    role: 'Odontopediatra',
    slug: 'dra-tayna',
    crm: 'CRO-MG 62200',
    bio: 'Dedicada ao cuidado odontológico infantil, a Dra. Tayná transforma a primeira consulta em uma experiência lúdica e acolhedora, plantando a semente da saúde bucal desde os primeiros anos de vida.',
    fullBio: [
      'A Dra. Tayná Delfim é nossa odontopediatra especializada, com um olhar especial para o atendimento de bebês, crianças e adolescentes. Seu trabalho vai muito além do tratamento: ela cria vínculos afetivos e transforma a ida ao dentista em um momento divertido.',
      'Com uma abordagem lúdica, cuidadosa e repleta de carinho, ela acompanha cada fase do desenvolvimento bucal infantil, desde a erupção dos primeiros dentes até a adolescência, sempre ensinando hábitos de higiene e prevenção de forma leve e educativa.',
      'Seu propósito é fazer com que cada criança saia do consultório com um sorriso no rosto e vontade de voltar, construindo uma relação de confiança que dura por toda a vida.'
    ],
    education: [
      { year: '', title: 'Graduação em Odontologia' },
      { year: '', title: 'Especialização em Odontopediatria' },
      { year: '', title: 'Formação em Manejo Comportamental Infantil' }
    ],
    specialties: ['Odontopediatria', 'Cuidado com Bebê', 'Cuidado com Crianças', 'Prevenção Bucal'],
    instagram: 'https://www.instagram.com/dra.taynadelfim/'
  },
  {
    name: 'Júnia Martins',
    role: 'Biomédica Esteta',
    slug: 'dra-junia',
    crm: 'CRBM-MG 17867',
    bio: 'Especialista em biomedicina estética, a Dra. Júnia harmoniza saúde e beleza através de tratamentos minimamente invasivos, sempre valorizando a naturalidade e a autoestima de cada paciente.',
    fullBio: [
      'A Dra. Júnia Martins é nossa biomédica esteta, responsável pelos tratamentos de harmonização orofacial e estética facial da Souriê. Sua abordagem une rigor científico à sensibilidade artística.',
      'Com foco em resultados naturais e seguros, ela realiza procedimentos como preenchimentos, bioestimuladores de colágeno, skinbooster e outros tratamentos que realçam a beleza única de cada paciente, sempre respeitando seus traços e individualidade.',
      'Para ela, a estética não é sobre transformação, e sim sobre realçar o que há de mais bonito em cada um, devolvendo autoestima e confiança através de cuidados personalizados.'
    ],
    education: [
      { year: '', title: 'Graduação em Biomedicina' },
      { year: '', title: 'Pós-Graduação em Biomedicina Estética' },
      { year: '', title: 'Especialização em Harmonização Orofacial' }
    ],
    specialties: ['Harmonização Facial', 'Tratamentos de Pele', 'Preenchimento Facial'],
    instagram: 'https://www.instagram.com/dra.juniamartins/'
  },
  {
    name: 'Maria Eduarda Lage',
    role: 'Nutricionista',
    slug: 'nutri-maria-eduarda',
    crm: 'CRN-9 37433',
    bio: 'Nutricionista especializada em nutrição clínica e estética, Maria Eduarda integra saúde bucal e nutricional, mostrando como a alimentação é pilar fundamental para sorrisos e corpo saudáveis.',
    fullBio: [
      'Maria Eduarda Lage é a nutricionista da equipe Souriê, trazendo uma visão integrada entre alimentação, saúde bucal e bem-estar geral. Sua atuação complementa os tratamentos odontológicos e estéticos da clínica.',
      'Acreditamos que uma nutrição equilibrada é a base para tudo: desde dentes e gengivas saudáveis até pele, cabelos e corpo em harmonia. Seu método é personalizado, sem dietas restritivas, focando em construir hábitos alimentares que o paciente consegue manter para a vida toda.',
      'Seu objetivo é ajudar cada paciente a descobrir o prazer de se alimentar bem, colhendo benefícios que vão muito além da estética — mais energia, imunidade fortalecida e saúde em primeiro lugar.'
    ],
    education: [
      { year: '', title: 'Graduação em Nutrição' },
      { year: '', title: 'Pós-Graduação em Nutrição Clínica e Estética' },
      { year: '', title: 'Formação em Nutrição e Saúde Bucal Integrada' }
    ],
    specialties: ['Nutrição Clínica', 'Nutrição Estética', 'Reeducação Alimentar'],
    instagram: 'https://www.instagram.com/nutri.mariaeduardalage/'
  },
];

export interface ProblemItem {
  title: string;
  description: string;
}

export const PROBLEMS: ProblemItem[] = [
  { title: 'Clínica acessível', description: 'Espaço pensado para que todos se sintam bem.' },
  { title: 'Feito sob medida', description: 'Cada paciente tem um planejamento personalizado.' },
  { title: 'Tempo é prioridade', description: 'Processos eficientes para tratamentos rápidos.' },
];

export const SOLUTIONS: ProblemItem[] = [
  { title: 'Especialistas em implante', description: 'Recupere a segurança de sorrir com confiança.' },
  { title: 'Resultados duradouros', description: 'Materiais e técnicas para uma estética impecável.' },
  { title: 'Seu bem-estar', description: 'Infraestrutura focada para o seu relaxamento e alívio.' },
];

export interface Testimonial {
  quote: string;
  name: string;
  videoUrl?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Além do ótimo atendimento, os profissionais são excelentes e super cuidadosos. Minha filha até pediu para voltar no outro dia!',
    name: 'Ingrid Dantas',
  },
  {
    quote: 'Atendimento excelente! Toda a equipe é muito atenciosa e cuidadosa, além de demonstrar muito profissionalismo. Me senti segura e bem acolhida durante todo o atendimento. Super recomendo a clínica!',
    name: 'Fabiana Seleguini',
  },
  {
    quote: 'Tive uma experiência excelente! A equipe é extremamente atenciosa, cuidadosa, com um atendimento humanizado. Profissionais incríveis, que transmitem segurança e acolhimento em cada detalhe. Recomendo com toda certeza!',
    name: 'Thais Roque',
  },
  {
    quote: 'Equipe super preparada, ambiente acolhedor. Resolvi meu problema do jeito que eu queria, sem sentir dor nenhuma, recomendo demais!',
    name: 'Jennifer Fidelis',
  },
];
export interface Service {
  title: string;
  description: string;
  slug: string;
}

export const SERVICES: Service[] = [
  {
    title: 'Clínica geral',
    description: 'Limpezas preventivas, restaurações e cuidados de rotina.',
    slug: 'clinica-geral'
  },
  {
    title: 'Odontologia Estética',
    description: 'Transformação do sorriso com clareamento, lentes e facetas em resina.',
    slug: 'odontologia-estetica'
  },
  {
    title: 'Ortodontia',
    description: 'Aparelhos e Invisalign para um alinhamento perfeito.',
    slug: 'ortodontia'
  },
  {
    title: 'Próteses Removíveis e Fixas',
    description: 'Próteses fixas, removíveis e coroas para devolver a mastigação e a estética do sorriso.',
    slug: 'proteses'
  },
  {
    title: 'Implantes',
    description: 'Substituição de dentes perdidos por implantes firmes e seguros.',
    slug: 'implantes'
  },
  {
    title: 'Tratamento Endodôntico (Canal)',
    description: 'Tratamento e retratamento de canal para tratar infecções e preservar seu dente natural.',
    slug: 'tratamento-de-canal'
  },
  {
    title: 'Cirurgias',
    description: 'Remoção de sisos e cirurgias orais com precisão técnica e cuidado humanizado.',
    slug: 'cirurgias'
  },
  {
    title: 'Odontopediatria',
    description: 'Cuidado gentil e acolhedor para crianças.',
    slug: 'odontopediatria'
  },
];

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Sobre',
    links: [
      { label: 'Quem somos', href: '/#equipe' },
      { label: 'Dúvidas Frequentes', href: '/#faq' },
      { label: 'Localização', href: '/#ambiente' },
      { label: 'Política de Privacidade', href: '/politica-de-privacidade' },
      { label: 'Termos de Uso', href: '/termos-de-uso' },
    ],
  },
  {
    title: 'Serviço',
    links: [
      { label: 'Clínica Geral', href: '/p/clinica-geral' },
      { label: 'Estética Dental', href: '/p/odontologia-estetica' },
      { label: 'Ortodontia', href: '/p/ortodontia' },
      { label: 'Próteses Removíveis e Fixas', href: '/p/proteses' },
      { label: 'Implantes', href: '/p/implantes' },
      { label: 'Tratamento de Canal', href: '/p/tratamento-de-canal' },
      { label: 'Cirurgias e Sisos', href: '/p/cirurgias' },
      { label: 'Odontopediatria', href: '/p/odontopediatria' },
    ],
  },
  {
    title: 'Atendimento',
    links: [
      { label: 'Dúvidas Frequentes', href: '/#faq' },
      { label: 'Formas de Pagamento', href: '/#faq' },
      { label: 'Agendar Consulta', href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Quero agendar uma consulta na Souriê Odontologia. Podem me ajudar?')}` },
    ],
  },
];

export const CONTACT_INFO = {
  phones: ['(31) 3961-4845'],
  email: 'sourie.odonto@gmail.com',
  address: 'Av. Dr José Moreira, 414 / Bairro Castelo / Nova Era - MG',
};

export const BUSINESS_HOURS = {
  weekdays: 'Segunda a Sexta: 08:00 às 11:00 e 13:00 às 18:00',
  saturday: 'Sábado: 08:00 às 12:00',
  /** Dados estruturados para uso programático (AddressCard, FAQ, etc.) */
  structured: {
    weekdays: [
      { open: '08:00', close: '11:00' },
      { open: '13:00', close: '18:00' },
    ],
    saturday: [{ open: '08:00', close: '12:00' }],
  },
};

export const SOCIAL_LINKS = [
  { platform: 'WhatsApp', href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Acessei o site da Souriê e gostaria de entrar em contato.')}` },
  { platform: 'Instagram', href: 'https://www.instagram.com/sourie.odonto/' },
];

export const GOOGLE_MAPS_LINK = 'https://maps.app.goo.gl/z5tUATq1ZL7tfem79';

export const LEGAL_INFO = {
  tradeName: 'Souriê Odontologia Integrada',
  corporateName: 'BORGES LAGE & MARTINS LTDA - ME',
  cnpj: '55.856.669/0001-71',
  technicalDirector: 'Dr. Breno Martins da Costa Lage',
  technicalDirectorCro: 'CRO-MG 65391',
  foundationDate: '2024-07-09',
  address: 'Av. Dr José Moreira, 414 / Bairro Castelo / Nova Era - MG',
  postalCode: '35940-000',
  city: 'Nova Era',
  state: 'MG',
  mapsUrl: GOOGLE_MAPS_LINK,
};

