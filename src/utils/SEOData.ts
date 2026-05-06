import { CONTACT_INFO } from './constants';

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Souriê Odontologia Integrada",
  "image": "https://sourieclinica.com.br/logo.png",
  "@id": "https://sourieclinica.com.br",
  "url": "https://sourieclinica.com.br",
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
    "latitude": -19.754, // Exemplo, deve ser ajustado com a real
    "longitude": -42.946
  },
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
    "https://www.instagram.com/sourie.odontologia",
    "https://www.facebook.com/sourie.odontologia"
  ]
};

export const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quanto tempo dura o tratamento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cada caso é único. Após o diagnóstico digital com nosso scanner 3D, conseguimos planejar cada etapa e prever com precisão o tempo total do seu tratamento."
      }
    },
    {
      "@type": "Question",
      "name": "A Souriê aceita convênios?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim! Trabalhamos com os principais planos: Unimed, Amil, Bradesco, Odontoprev, Porto Seguro, SulAmérica, Interodonto e MetLife."
      }
    },
    {
      "@type": "Question",
      "name": "Quais tecnologias a clínica utiliza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Utilizamos o Scanner 3D iTero™ (adeus moldagens!) e Câmeras Intraorais de alta definição para um diagnóstico preciso e resultados previsíveis."
      }
    },
    {
      "@type": "Question",
      "name": "Quais as formas de pagamento disponíveis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oferecemos total flexibilidade: parcelamento em até 12x no cartão de crédito, descontos exclusivos para pagamentos à vista (Pix/Dinheiro) e condições facilitadas para tratamentos ortodônticos."
      }
    }
  ]
};
