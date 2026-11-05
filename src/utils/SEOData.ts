import { CONTACT_INFO, LEGAL_INFO, GOOGLE_MAPS_LINK } from './constants';

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": "https://sourie.com.br/#organization",
  "name": LEGAL_INFO.tradeName,
  "legalName": LEGAL_INFO.corporateName,
  "taxID": LEGAL_INFO.cnpj,
  "image": [
    "https://sourie.com.br/og-image.png",
    "https://sourie.com.br/og-image.jpg",
    "https://sourie.com.br/og-image.webp",
    "https://sourie.com.br/hero-image.webp"
  ],
  "logo": "https://sourie.com.br/favicon.svg",
  "url": "https://sourie.com.br",
  "telephone": CONTACT_INFO.phones[0],
  "email": CONTACT_INFO.email,
  "priceRange": "$$",
  "paymentAccepted": "PIX, Cartão de Crédito, Cartão de Débito e Boleto Bancário (parcelamento em várias vezes conforme seu planejamento)",
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Clínica Acessível / Acessibilidade para pessoas com mobilidade reduzida",
      "value": true
    }
  ],
  "hasMap": GOOGLE_MAPS_LINK,
  "foundingDate": LEGAL_INFO.foundationDate,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Dr José Moreira, 414",
    "addressLocality": "Nova Era",
    "addressRegion": "MG",
    "postalCode": "35940-000",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -19.754,
    "longitude": -42.946
  },
  "areaServed": [
    { "@type": "City", "name": "Nova Era", "containedInPlace": { "@type": "State", "name": "Minas Gerais" } },
    { "@type": "City", "name": "Bela Vista de Minas" },
    { "@type": "City", "name": "São Domingos do Prata" },
    { "@type": "City", "name": "Rio Piracicaba" },
    { "@type": "City", "name": "João Monlevade" }
  ],
  "medicalSpecialty": [
    "Dentistry",
    "Orthodontics",
    "PediatricDentistry",
    "Periodontics",
    "Prosthodontics",
    "Endodontics",
    "OralSurgery"
  ],
  "employee": [
    {
      "@type": "Person",
      "name": "Dr. Breno Martins da Costa Lage",
      "jobTitle": "Cirurgião Dentista e Responsável Técnico (RT)",
      "identifier": "CRO-MG 65391"
    },
    {
      "@type": "Person",
      "name": "Dr. Victor Melo Borges",
      "jobTitle": "Cirurgião Dentista",
      "identifier": "CRO-MG 50734"
    },
    {
      "@type": "Person",
      "name": "Dra. Estefânia Alves Martins",
      "jobTitle": "Cirurgiã Dentista Especialista em Ortodontia",
      "identifier": "CRO-MG 48255"
    },
    {
      "@type": "Person",
      "name": "Beatriz Bittencourt Guimarães",
      "jobTitle": "Cirurgiã Dentista Especialista em Próteses",
      "identifier": "CRO-MG 70129"
    },
    {
      "@type": "Person",
      "name": "Tayná Delfim",
      "jobTitle": "Odontopediatra",
      "identifier": "CRO-MG 62200"
    },
    {
      "@type": "Person",
      "name": "Junia Martins",
      "jobTitle": "Biomédica Esteta",
      "identifier": "CRBM-MG 17867"
    },
    {
      "@type": "Person",
      "name": "Maria Eduarda Lage",
      "jobTitle": "Nutricionista Clínica e Estética",
      "identifier": "CRN-9 37433"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "4",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Júnia Pereira de Mattos"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Atendimento excelente do início ao fim! Profissionais atenciosos e cuidadosos."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Fabiana Seleguini"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Atendimento excelente! Toda a equipe é muito atenciosa e cuidadosa, além de demonstrar muito profissionalismo. Me senti segura e bem acolhida durante todo o atendimento. Super recomendo a clínica!"
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Wanderson Alves"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Fui nessa clínica por indicação e agora entendo perfeitamente o motivo da recomendação! O atendimento foi impecável."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Jennifer Fidelis"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Equipe super preparada, ambiente acolhedor. Resolvi meu problema do jeito que eu queria, sem sentir dor nenhuma, recomendo demais!"
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "11:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "13:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "12:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/sourie.odonto/",
    GOOGLE_MAPS_LINK
  ]
};

/** Schema sincronizado com as perguntas reais de FAQSection.tsx */
export const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Onde fica a clínica Souriê e quais cidades da região são atendidas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nossa clínica fica em Nova Era - MG (Av. Dr. José Moreira, 414, Bairro Castelo). Recebemos frequentemente pacientes de cidades vizinhas que vêm até aqui se consultar, como Bela Vista de Minas, São Domingos do Prata, Rio Piracicaba e João Monlevade."
      }
    },
    {
      "@type": "Question",
      "name": "A clínica possui estrutura acessível?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim! A Souriê é uma clínica acessível, planejada com infraestrutura moderna e adaptada para oferecer conforto, segurança e facilidade de locomoção a todos os pacientes, incluindo pessoas com mobilidade reduzida, idosos e gestantes."
      }
    },
    {
      "@type": "Question",
      "name": "O que é Odontologia Integrada e quais especialidades a Souriê reúne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Odontologia Integrada significa reunir em um único lugar especialistas de todas as áreas essenciais: Ortodontia (Invisalign), Próteses e Implantes, Endodontia (Canal), Cirurgias e Sisos, Odontopediatria, Odontologia Estética, Harmonização Facial e Nutrição. O paciente realiza todo o seu diagnóstico e tratamento com uma equipe multidisciplinar sem precisar se deslocar entre consultórios."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto tempo dura o tratamento e quais tecnologias são utilizadas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O tempo é personalizado para cada paciente. Na avaliação inicial com nosso Scanner 3D iTero™, apresentamos com precisão todas as etapas, resultados esperados e a duração estimada."
      }
    },
    {
      "@type": "Question",
      "name": "Quais são as formas de pagamento disponíveis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Facilitamos seu investimento: o pagamento pode ser dividido em várias vezes no cartão ou boleto, conforme o seu planejamento, além de condições especiais para pagamento à vista no PIX ou débito."
      }
    },
    {
      "@type": "Question",
      "name": "Como agendar uma consulta e qual o horário de funcionamento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O agendamento é rápido via WhatsApp ou pelo telefone (31) 3961-4845. Segunda a Sexta-feira: 08:00 às 11:00 e 13:00 às 18:00 (intervalo de almoço das 11h às 13h). Sábado: 08:00 às 12:00."
      }
    },
    {
      "@type": "Question",
      "name": "Como funciona o suporte pós-procedimento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Você conta com acompanhamento direto via WhatsApp para orientações pós-operatórias e suporte prioritário sempre que precisar, sem custo adicional."
      }
    }
  ]
};

/** Schema em Grafo para a Página Inicial */
export const HOME_GRAPH_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    LOCAL_BUSINESS_SCHEMA,
    FAQ_SCHEMA
  ]
};

/** Gerador de Schema para páginas de procedimentos médicos/odontológicos */
export function buildProcedureSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": name,
    "description": description,
    "url": url,
    "procedureType": "NonSurgicalProcedure",
    "provider": {
      "@type": "Dentist",
      "name": LEGAL_INFO.tradeName,
      "legalName": LEGAL_INFO.corporateName,
      "telephone": CONTACT_INFO.phones[0],
      "url": "https://sourie.com.br",
      "hasMap": GOOGLE_MAPS_LINK,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Dr José Moreira, 414",
        "addressLocality": "Nova Era",
        "addressRegion": "MG",
        "postalCode": "35940-000",
        "addressCountry": "BR"
      }
    }
  };
}

/** Gerador de Schema para páginas de dentistas e profissionais da saúde */
export function buildDentistSchema(member: {
  name: string;
  role: string;
  crm: string;
  bio: string;
  slug: string;
  specialties: string[];
}, imageSrc?: string) {
  const isDentist = member.role.toLowerCase().includes('dentista') || member.role.toLowerCase().includes('odontopediatra');
  
  return {
    "@context": "https://schema.org",
    "@type": isDentist ? "Dentist" : "Person",
    "name": member.name,
    "jobTitle": member.role,
    "description": member.bio,
    "identifier": member.crm,
    "url": `https://sourie.com.br/equipe/${member.slug}`,
    ...(imageSrc ? { "image": `https://sourie.com.br${imageSrc}` } : {}),
    "telephone": CONTACT_INFO.phones[0],
    "worksFor": {
      "@type": "Dentist",
      "name": LEGAL_INFO.tradeName,
      "legalName": LEGAL_INFO.corporateName,
      "url": "https://sourie.com.br",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Dr José Moreira, 414",
        "addressLocality": "Nova Era",
        "addressRegion": "MG",
        "postalCode": "35940-000",
        "addressCountry": "BR"
      }
    },
    "knowsAbout": member.specialties
  };
}
