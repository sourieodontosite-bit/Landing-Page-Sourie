import { Stethoscope, Sparkles, Smile, Layers, Syringe, Baby, Users, HelpCircle } from 'lucide-react';

export const WHATSAPP_NUMBER = '553199614845';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const NAV_LINKS = [
  {
    label: 'Procedimentos',
    href: '/#servicos',
    subLinks: [
      { label: 'Clínica Geral', href: '/clinica-geral', icon: Stethoscope },
      { label: 'Estética Dental', href: '/odontologia-estetica', icon: Sparkles },
      { label: 'Ortodontia', href: '/ortodontia', icon: Smile },
      { label: 'Próteses e Implantes', href: '/proteses-e-implantes', icon: Layers },
      { label: 'Cirurgias e Canal', href: '/cirurgias-e-canal', icon: Syringe },
      { label: 'Odontopediatria', href: '/odontopediatria', icon: Baby },
    ]
  },
  {
    label: 'Quem somos',
    href: '/#equipe',
    subLinks: [
      { label: 'Sobre nós', href: '/sobre', icon: Users },
      { label: 'Dúvidas Frequentes', href: '/#faq', icon: HelpCircle },
    ]
  },
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

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Dr. Victor Borges',
    role: 'Cirurgião Dentista',
    slug: 'dr-victor',
    crm: 'CRO-MG 98765',
    bio: 'Focado em clínica geral e endodontia, o Dr. Victor é reconhecido por seu atendimento humanizado e cuidadoso, garantindo que procedimentos complexos sejam realizados com o máximo de precisão e sem dor.',
    fullBio: [
      'Nascido em Paracatu-MG, sempre sonhei em contribuir para a saúde e bem-estar das pessoas através da odontologia. Minha trajetória é marcada por dedicação, aprendizado contínuo e um compromisso inabalável com a excelência clínica.',
      'Desde 2018, encontrei em Nova Era-MG não apenas meu lar, mas também o lugar onde desenvolvo minha missão profissional. Casado, compartilho minha vida com uma parceira que me inspira e apoia em todos os momentos, equilibrando vida pessoal e dedicação profissional.'
    ],
    education: [
      { year: '2017', title: 'Graduação em Odontologia' },
      { year: '2018', title: 'Pós-Graduação em Cirurgia e Traumatologia Bucomaxilofacial' },
      { year: '2024', title: 'Especialista em Restaurações' }
    ],
    differential: {
      title: 'Exodontia de Sisos 🦷',
      description: 'Referência em procedimentos de remoção de terceiros molares, transformo um momento complexo em uma experiência humanizada e precisa. Minha expertise representa mais do que uma habilidade técnica - é um compromisso genuíno com o conforto, a segurança e o bem-estar do paciente.'
    },
    specialties: ['Cirurgia Bucomaxilofacial', 'Restaurações', 'Exodontia de Sisos'],
    instagram: 'https://www.instagram.com/sourie.odontologia'
  },
  {
    name: 'Dra. Estefânia Alves Martins',
    role: 'Cirurgiã Dentista',
    slug: 'dra-estefania',
    crm: 'CRO-MG 54321',
    bio: 'Dedicada à ortodontia e odontologia estética, a Dra. Estefânia utiliza as mais recentes tecnologias para criar sorrisos harmoniosos. Seu atendimento é focado no conforto, precisão e detalhismo estético.',
    fullBio: [
      'Sou Estefânia Alves Martins, nascida em Nova Era, casada, cirurgiã-dentista formada pela Faculdade Newton em 2016, especialista em Ortodontia e Ortopedia Funcional dos Maxilares pelo CETRO-BH.',
      'Meu trabalho é dedicado a todas as idades: cuido de sorrisos de crianças e adolescentes com aparelhos ortopédicos, corrigindo alinhamentos e garantindo um desenvolvimento harmonioso. Para os adultos, desenvolvo tratamentos personalizados que devolvem a confiança através de um sorriso perfeito. 💫',
      'Acredito que cada sorriso conta uma história, e meu papel é fazer parte da vida dos meus pacientes de maneira acolhedora e especial 💖'
    ],
    education: [
      { year: '2016', title: 'Graduação em Odontologia pela Faculdade Newton' },
      { year: '', title: 'Especialista em Ortodontia e Ortopedia Funcional dos Maxilares pelo CETRO-BH' }
    ],
    specialties: ['Ortodontia', 'Ortopedia Funcional dos Maxilares'],
    instagram: 'https://www.instagram.com/sourie.odontologia'
  },
  {
    name: 'Dr. Breno Martins da Costa Lage',
    role: 'Cirurgião Dentista',
    slug: 'dr-breno',
    crm: 'CRO-MG 12345',
    bio: 'Especialista em reabilitação oral e implantes. Com extensa experiência, o Dr. Breno é apaixonado por transformar sorrisos e devolver a autoconfiança aos pacientes através de tratamentos modernos e minimamente invasivos.',
    fullBio: [
      'Sou Breno Martins da Costa Lage, nasci em Nova Era, Minas Gerais, e me formei em Odontologia pela Faculdade Anhanguera de Ipatinga em 2022.',
      'Tenho pós-graduação em Endodontia e capacitação em Odontologia Estética. Trabalho nas áreas de Endodontia, Prótese e Clínica Geral, sempre buscando aliar funcionalidade e estética nos tratamentos.',
      'Na Endodontia, faço tratamentos de canal, ajudando a tratar infecções e lesões no interior do dente, aliviando dores e preservando os dentes naturais sempre que possível. Já na área de Prótese, minha atuação é focada em reabilitar sorrisos, confeccionando próteses fixas ou removíveis e coroas, devolvendo aos pacientes a capacidade mastigatória, a saúde bucal e a confiança no sorriso.',
      'Aqui na Souriê,  é muito mais que um sonho; é uma oportunidade de oferecer serviços de excelência e um atendimento diferenciado para nossos pacientes.'
    ],
    education: [
      { year: '2022', title: 'Graduação em Odontologia pela Faculdade Anhanguera' },
      { year: '', title: 'Pós-graduação em Endodontia e capacitação em Odontologia Estética' }
    ],
    specialties: ['Endodontia', 'Odontologia Estética', 'Prótese', 'Clínica Geral'],
    instagram: 'https://www.instagram.com/sourie.odontologia'
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
    quote: 'Atendimento excelente do início ao fim! Profissionais atenciosos e cuidadosos.',
    name: 'Júnia Pereira de Mattos',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    quote: 'Gostei da preocupação deles em querer sabe se o paciente está bem após o procedimento.',
    name: 'Erica Mariana',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    quote: 'Fui nessa clínica por indicação e agora entendo perfeitamente o motivo da recomendação! O atendimento foi impecável.',
    name: 'Wanderson Alves',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    quote: 'Equipe super preparada, ambiente acolhedor. Resolvi meu problema sem sentir dor nenhuma, recomendo demais!',
    name: 'Fernanda Costa',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
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
    description: 'Transformação do sorriso com clareamento, lentes de contato e mais.',
    slug: 'odontologia-estetica'
  },
  {
    title: 'Ortodontia',
    description: 'Aparelhos e Invisalign para um alinhamento perfeito.',
    slug: 'ortodontia'
  },
  {
    title: 'Próteses e Implantes',
    description: 'Soluções sob medida para reabilitação e reposição de dentes.',
    slug: 'proteses-e-implantes'
  },
  {
    title: 'Cirurgias e Canal',
    description: 'Extrações, endodontia e tratamentos mais complexos com total segurança.',
    slug: 'cirurgias-e-canal'
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
      { label: 'Nossa História', href: '/sobre' },
      { label: 'Dúvidas Frequentes', href: '/#faq' },
      { label: 'Localização', href: '/#ambiente' },
    ],
  },
  {
    title: 'Serviço',
    links: [
      { label: 'Clínica Geral', href: '/clinica-geral' },
      { label: 'Estética Dental', href: '/odontologia-estetica' },
      { label: 'Ortodontia', href: '/ortodontia' },
      { label: 'Próteses e Implantes', href: '/proteses-e-implantes' },
      { label: 'Cirurgias e Canal', href: '/cirurgias-e-canal' },
      { label: 'Odontopediatria', href: '/odontopediatria' },
    ],
  },
  {
    title: 'Atendimento',
    links: [
      { label: 'Dúvidas Frequentes', href: '/#faq' },
      { label: 'Formas de Pagamento', href: '/#faq' },
      { label: 'Agendar Consulta', href: WHATSAPP_LINK },
    ],
  },
];

export const CONTACT_INFO = {
  phones: ['(31) 3961-4845', '(31) 9 9614-8451'],
  email: 'sourie@clinica.com.br',
  address: 'Av. Dr José Moreira, 414 / Bairro Castelo / Nova Era - MG',
};

export const BUSINESS_HOURS = {
  weekdays: 'Segunda a Sexta: 8h - 18h',
  saturday: 'Sábado: 8h - 12h',
};

export const SOCIAL_LINKS = [
  { platform: 'Facebook', href: '#' },
  { platform: 'WhatsApp', href: WHATSAPP_LINK },
  { platform: 'Instagram', href: '#' },
];
