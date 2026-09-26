import { CONTACT_INFO } from './constants';

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Souriê Odontologia Integrada",
  "image": "https://sourie.com.br/logo.png",
  "@id": "https://sourie.com.br",
  "url": "https://sourie.com.br",
  "telephone": CONTACT_INFO.phones[0],
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
    "https://www.instagram.com/sourie.odonto/"
  ]
};

/** Schema sincronizado com as perguntas reais de FAQSection.tsx */
export const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
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
        "text": "Facilitamos seu investimento: parcelamento em até 8x no cartão ou boleto, além de condições especiais para pagamento à vista no PIX ou débito."
      }
    },
    {
      "@type": "Question",
      "name": "Como agendar uma consulta e qual o horário de funcionamento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O agendamento é rápido via WhatsApp ou pelo telefone (31) 3961-4845. Segunda a Sexta-feira: 08:00 às 11:00 e 13:00 às 18:00. Sábado: 08:00 às 12:00."
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
