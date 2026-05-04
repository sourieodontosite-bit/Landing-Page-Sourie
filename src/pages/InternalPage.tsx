import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useParams, Link, Navigate } from 'react-router-dom';
import PageHeader from '../components/shared/PageHeader';
import SectionContainer from '../components/shared/SectionContainer';
import SEO from '../components/shared/SEO';
import Button from '../components/shared/Button';
import { CheckCircle2, ArrowRight, MessageCircle, Sparkles, ShieldCheck, Zap, Activity, Stethoscope, Layers, Baby } from 'lucide-react';
import { WHATSAPP_LINK, FOOTER_COLUMNS } from '../utils/constants';
import { 
  OutlineToothIcon, 
  OrthoIcon 
} from '../components/shared/Icons';

// Import Procedure Images
import ortodontiaImg from '../assets/Procedimentos/Ortodontia.png';
import clinicaGeralImg from '../assets/Procedimentos/Clinica-geral.jpg';
import esteticaImg from '../assets/Procedimentos/Estetica.png';
import canalImg from '../assets/Procedimentos/Canal.png';
import proteseImg from '../assets/Procedimentos/Protese.png';
import odontopediatriaImg from '../assets/Procedimentos/Odontopediatria.png';

interface PageContent {
  title: string;
  category: string;
  description: string;
  icon?: React.ElementType;
  benefits?: string[];
  features?: { title: string; desc: string }[];
  content: () => React.ReactNode;
  mainImage: string;
  relatedLinks?: { label: string; href: string }[];
}

const PAGES_CONTENT: Record<string, PageContent> = {
  'ortodontia': {
    title: 'Ortodontia Moderna',
    category: 'Serviços',
    icon: OrthoIcon,
    description: 'Alinhamento perfeito com o máximo de discrição e conforto, incluindo a tecnologia Invisalign™.',
    benefits: ['Aparelhos Invisíveis (Invisalign)', 'Tratamentos mais rápidos', 'Previsibilidade digital 3D', 'Estética preservada'],
    features: [
      { title: 'Invisalign™ First & Full', desc: 'Alinhadores transparentes sob medida para crianças, adolescentes e adultos.' },
      { title: 'Scanner iTero™ 5D', desc: 'Planejamento digital completo sem a necessidade de moldagens desconfortáveis.' }
    ],
    mainImage: ortodontiaImg,
    content: () => (
      <div className="space-y-12">
        <p className="text-xl leading-relaxed text-text-primary/80">
          Esqueça os tratamentos ortodônticos do passado. Hoje, utilizamos tecnologia de ponta para planejar cada movimento do seu dente digitalmente, garantindo resultados mais precisos em menos tempo.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group p-10 rounded-[40px] bg-white border border-black/5 hover:border-teal-primary/20 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-teal-primary/5 flex items-center justify-center text-teal-primary mb-8 group-hover:scale-110 transition-transform">
              <ShieldCheck size={28} />
            </div>
            <h4 className="text-2xl font-medium text-text-heading mb-4">Ortodontia Preventiva</h4>
            <p className="text-text-primary/70 leading-relaxed">Ideal para crianças, guiando o crescimento correto dos ossos da face e evitando problemas futuros.</p>
          </div>
          
          <div className="group p-10 rounded-[40px] bg-white border border-black/5 hover:border-teal-primary/20 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-teal-primary/5 flex items-center justify-center text-teal-primary mb-8 group-hover:scale-110 transition-transform">
              <Zap size={28} />
            </div>
            <h4 className="text-2xl font-medium text-text-heading mb-4">Tecnologia Invisalign™</h4>
            <p className="text-text-primary/70 leading-relaxed">O sistema de alinhadores mais avançado do mundo, permitindo dentes alinhados com discrição total e facilidade de higienização.</p>
          </div>
        </div>
      </div>
    ),
    relatedLinks: [
      { label: 'Odontologia Estética', href: '/odontologia-estetica' },
      { label: 'Odontopediatria', href: '/odontopediatria' },
      { label: 'Clínica Geral', href: '/clinica-geral' }
    ]
  },
  'clinica-geral': {
    title: 'Clínica Geral',
    category: 'Serviços',
    icon: Stethoscope,
    description: 'A base para uma saúde bucal perfeita e prevenção de problemas futuros através de diagnósticos precisos.',
    benefits: ['Limpeza profunda (Profilaxia)', 'Detecção precoce de cáries', 'Saúde gengival', 'Hálito fresco'],
    features: [
      { title: 'Check-up Digital', desc: 'Uso de câmera intraoral de alta definição para que você acompanhe o diagnóstico em tempo real.' },
      { title: 'Restaurações Estéticas', desc: 'Substituição de amálgamas antigas por resinas premium que mimetizam a cor natural do dente.' }
    ],
    mainImage: clinicaGeralImg,
    content: () => (
      <div className="space-y-12">
        <p className="text-xl leading-relaxed text-text-primary/80">
          A clínica geral é o coração da nossa prática. Recomendamos visitas semestrais para garantir que pequenos problemas não se tornem tratamentos complexos no futuro.
        </p>
        <div className="bg-white p-12 rounded-[48px] shadow-sm border border-black/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <OutlineToothIcon size={120} />
          </div>
          <h4 className="text-2xl font-bold text-text-heading mb-6">Prevenção é o melhor investimento</h4>
          <p className="text-text-primary/70 leading-relaxed text-lg max-w-2xl">
            Durante uma consulta de rotina, realizamos a remoção do tártaro, a aplicação de flúor e uma análise completa com câmeras, garantindo que seu sorriso permaneça saudável por muito mais tempo.
          </p>
        </div>
      </div>
    ),
    relatedLinks: [
      { label: 'Estética Dental', href: '/odontologia-estetica' },
      { label: 'Ortodontia', href: '/ortodontia' },
      { label: 'Cirurgias e Canal', href: '/cirurgias-e-canal' }
    ]
  },
  'odontologia-estetica': {
    title: 'Odontologia Estética',
    category: 'Serviços',
    icon: Sparkles,
    description: 'Transforme a harmonia do seu rosto através de um sorriso planejado digitalmente, incluindo clareamento e lentes.',
    benefits: ['Lentes de Contato Dental', 'Clareamento Premium', 'Facetas de Resina', 'Harmonização do Sorriso'],
    features: [
      { title: 'DSD (Digital Smile Design)', desc: 'Planejamos seu novo sorriso no computador, considerando as proporções do seu rosto.' },
      { title: 'Clareamento Misto', desc: 'Combinação de técnica de consultório e caseira para máxima durabilidade e brilho.' }
    ],
    mainImage: esteticaImg,
    content: () => (
      <div className="space-y-12">
        <p className="text-xl leading-relaxed text-text-primary/80">
          Mais do que dentes brancos, buscamos a proporção áurea do seu sorriso. Analisamos seu formato de rosto, lábios e personalidade para criar um sorriso que seja único e natural para você.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-[40px] shadow-sm border border-black/5 hover:border-teal-primary/20 transition-all duration-500">
            <h4 className="text-2xl font-medium text-text-heading mb-4">Lentes de Contato</h4>
            <p className="text-text-primary/70 leading-relaxed">Lâminas ultrafinas de porcelana que corrigem cor e formato com o mínimo desgaste dental.</p>
          </div>
          <div className="bg-white p-10 rounded-[40px] shadow-sm border border-black/5 hover:border-teal-primary/20 transition-all duration-500">
            <h4 className="text-2xl font-medium text-text-heading mb-4">Clareamento Profissional</h4>
            <p className="text-text-primary/70 leading-relaxed">Protocolos que garantem dentes brancos com baixa sensibilidade e resultados duradouros.</p>
          </div>
        </div>

        {/* Serviços de Estética */}
        <div className="space-y-8 pt-4">
          <div className="flex items-center gap-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-text-primary/30 whitespace-nowrap">Serviços oferecidos</h4>
            <div className="h-px w-full bg-black/[0.04]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { name: 'Toxina Botulínica', desc: 'Aplicação precisa para suavizar linhas de expressão e harmonizar o terço inferior do rosto.' },
              { name: 'Secagem de Microvasos', desc: 'Eliminação de vasinhos superficiais inestéticos com tecnologia de alta frequência.' },
              { name: 'Preenchimentos Faciais', desc: 'Restauração de volume e contorno facial com ácido hialurônico de alta qualidade.' },
              { name: 'Tratamento de Melasma', desc: 'Protocolo personalizado para clarear manchas e uniformizar o tom da pele de forma segura.' },
              { name: 'Limpeza de Pele', desc: 'Higienização profunda com extração de impurezas, hidratação e renovação celular.' },
              { name: 'Lipoenzimática', desc: 'Dissolução enzimática localizada de gordura para definição do contorno facial e corporal.' },
              { name: 'Tratamento Capilar', desc: 'Protocolos que fortalecem os fios, combatem a queda e estimulam a saúde do couro cabeludo.' },
              { name: 'Peeling Químico', desc: 'Renovação da camada superficial da pele para clarear manchas, tratar acne e restaurar a luminosidade.' },
              { name: 'Microagulhamento Facial', desc: 'Estimulação da produção de colágeno para reduzir cicatrizes, poros e sinais de envelhecimento.' },
            ].map((service) => (
              <div
                key={service.name}
                className="group p-6 rounded-[28px] bg-white border border-black/[0.04] hover:border-teal-primary/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-2 h-2 rounded-full bg-teal-primary mb-4 group-hover:scale-150 transition-transform" />
                <h5 className="text-base font-bold text-text-heading mb-2">{service.name}</h5>
                <p className="text-sm text-text-primary/60 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    relatedLinks: [
      { label: 'Ortodontia', href: '/ortodontia' },
      { label: 'Próteses e Implantes', href: '/proteses-e-implantes' },
      { label: 'Clínica Geral', href: '/clinica-geral' }
    ]
  },
  'cirurgias-e-canal': {
    title: 'Cirurgias e Canal',
    category: 'Serviços',
    icon: Activity,
    description: 'Tratamentos complexos realizados com precisão, tecnologia e total conforto.',
    benefits: ['Endodontia Mecanizada', 'Extração de Siso', 'Cirurgias Periodontais', 'Pós-operatório assistido'],
    features: [
      { title: 'Endodontia em Sessão Única', desc: 'Tecnologia mecanizada que permite finalizar a maioria dos canais em apenas uma visita.' },
      { title: 'Siso com Segurança', desc: 'Extrações planejadas via raio-x digital para o máximo de conforto e rapidez.' }
    ],
    mainImage: canalImg,
    content: () => (
      <div className="space-y-12">
        <p className="text-xl leading-relaxed text-text-primary/80">
          Sabemos que procedimentos de canal e cirurgias podem gerar ansiedade. Por isso, utilizamos técnicas de anestesia avançada e instrumentação mecanizada que tornam o processo rápido e indolor.
        </p>
        <div className="bg-teal-primary/5 p-12 rounded-[48px] border border-teal-primary/10 relative overflow-hidden group">
          <div className="absolute -right-10 -bottom-10 opacity-[0.03] group-hover:scale-110 transition-transform duration-1000">
            <OutlineToothIcon size={240} />
          </div>
          <h4 className="text-2xl font-bold text-text-heading mb-6">Precisão e Conforto</h4>
          <p className="text-text-primary/70 leading-relaxed text-lg max-w-2xl">
            Graças ao uso de motores modernos e localizadores apicais, os tratamentos de canal na Souriê são realizados com precisão milimétrica, eliminando a dor e garantindo a saúde do dente.
          </p>
        </div>
      </div>
    ),
    relatedLinks: [
      { label: 'Próteses e Implantes', href: '/proteses-e-implantes' },
      { label: 'Clínica Geral', href: '/clinica-geral' },
      { label: 'Odontologia Estética', href: '/odontologia-estetica' }
    ]
  },
  'proteses-e-implantes': {
    title: 'Próteses e Implantes',
    category: 'Serviços',
    icon: Layers,
    description: 'Recupere a funcionalidade completa e a estética do seu sorriso com soluções de implantes e reabilitação.',
    benefits: ['Estabilidade total', 'Estética idêntica ao natural', 'Prevenção de perda óssea', 'Conforto mastigatório'],
    features: [
      { title: 'Carga Imediata', desc: 'Em casos selecionados, saia com dentes fixos no mesmo dia da cirurgia.' },
      { title: 'Prótese Protocolo', desc: 'Reabilitação total para quem usa dentadura, devolvendo a segurança de dentes fixos.' }
    ],
    mainImage: proteseImg,
    content: () => (
      <div className="space-y-12">
        <p className="text-xl leading-relaxed text-text-primary/80">
          Substituímos a raiz do dente perdido por um pino de titânio de alta pureza. Este processo permite que você volte a sorrir e comer com a mesma segurança de quem tem dentes naturais.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group p-10 rounded-[40px] bg-white border border-black/5 hover:border-teal-primary/20 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-teal-primary/5 flex items-center justify-center text-teal-primary mb-8 group-hover:scale-110 transition-transform">
              <ShieldCheck size={28} />
            </div>
            <h4 className="text-2xl font-medium text-text-heading mb-4">Cirurgia Guiada</h4>
            <p className="text-text-primary/70 leading-relaxed">Cirurgias planejadas por computador para maior precisão e um pós-operatório muito mais tranquilo e rápido.</p>
          </div>
          <div className="group p-10 rounded-[40px] bg-white border border-black/5 hover:border-teal-primary/20 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-teal-primary/5 flex items-center justify-center text-teal-primary mb-8 group-hover:scale-110 transition-transform">
              <Zap size={28} />
            </div>
            <h4 className="text-2xl font-medium text-text-heading mb-4">Reabilitação Oral</h4>
            <p className="text-text-primary/70 leading-relaxed">Utilizamos coroas em zircônia e porcelana, materiais que oferecem o máximo de resistência e estética natural.</p>
          </div>
        </div>
      </div>
    ),
    relatedLinks: [
      { label: 'Odontologia Estética', href: '/odontologia-estetica' },
      { label: 'Cirurgias e Canal', href: '/cirurgias-e-canal' },
      { label: 'Clínica Geral', href: '/clinica-geral' }
    ]
  },
  'odontopediatria': {
    title: 'Odontopediatria',
    category: 'Serviços',
    icon: Baby,
    description: 'Cuidado especializado e lúdico para que as crianças cresçam com sorrisos saudáveis e sem traumas.',
    benefits: ['Atendimento lúdico', 'Prevenção precoce', 'Educação em saúde', 'Espaço acolhedor'],
    features: [
      { title: 'Geração Zero Cárie', desc: 'Programa focado em acompanhamento preventivo para que a criança nunca desenvolva cáries.' },
      { title: 'Condicionamento Positivo', desc: 'Transformamos a ida ao dentista em um momento de diversão e aprendizado.' }
    ],
    mainImage: odontopediatriaImg,
    content: () => (
      <div className="space-y-12">
        <p className="text-xl leading-relaxed text-text-primary/80">
          A primeira visita ao dentista define como a saúde bucal será encarada para o resto da vida. Na Souriê, focamos no carinho, na paciência e no condicionamento positivo.
        </p>
        <div className="bg-cyan-light/10 p-12 rounded-[48px] border border-cyan-light/20 relative group overflow-hidden">
          <div className="absolute -left-10 -top-10 opacity-10 group-hover:rotate-12 transition-transform duration-1000">
             <Sparkles size={180} />
          </div>
          <h4 className="text-2xl font-bold text-text-heading mb-6 relative z-10">Cuidado desde os primeiros passos</h4>
          <p className="text-text-primary/70 leading-relaxed text-lg max-w-2xl relative z-10">
            Acompanhamos o desenvolvimento da dentição infantil, prevenindo problemas de mordida e garantindo que o seu filho cresça com um sorriso forte e saudável.
          </p>
        </div>
      </div>
    ),
    relatedLinks: [
      { label: 'Ortodontia', href: '/ortodontia' },
      { label: 'Clínica Geral', href: '/clinica-geral' },
      { label: 'Estética Dental', href: '/odontologia-estetica' }
    ]
  }
};

export default function InternalPage() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !PAGES_CONTENT[slug]) {
    return <Navigate to="/" replace />;
  }

  const page = PAGES_CONTENT[slug];
  const contentRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      if (contentRef.current) {
        gsap.fromTo(contentRef.current.children, 
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 1,
            ease: "power4.out",
            delay: 0.2
          }
        );
      }

      if (sidebarRef.current) {
        gsap.fromTo(sidebarRef.current.children,
          { opacity: 0, x: 20 },
          {
            opacity: 1,
            x: 0,
            stagger: 0.1,
            duration: 1,
            ease: "power4.out",
            delay: 0.4
          }
        );
      }
    });

    if (ctaRef.current) {
      gsap.fromTo(ctaRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
            once: true
          }
        }
      );
    }

    return () => mm.revert();
  }, [slug]);

  if (!page) return null;

  return (
    <div className="flex flex-col relative bg-transparent pb-24">
      <SEO 
        title={page.title.includes('Souriê') ? page.title : `${page.title} em Nova Era`}
        description={page.description}
      />
      <PageHeader title={page.title} category={page.category} icon={page.icon} />

      {/* The Content Sheet - Creates the visual separation from the Header */}
      <div className="relative -mt-16 lg:-mt-24 z-20">
        <SectionContainer className="pt-0 pb-16 lg:pb-32" innerClassName="lg:!px-0">
          <div 
            ref={sheetRef}
            className="bg-white rounded-[48px] lg:rounded-[80px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.04)] border border-black/[0.02] p-8 sm:p-12 lg:p-20 xl:p-24"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
              
              {/* Main Content Column */}
              <div ref={contentRef} className="lg:col-span-8 space-y-16 lg:space-y-24">
                
                {/* Hero Procedure Image */}
                <div className="relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden rounded-[32px] lg:rounded-[48px] shadow-2xl group">
                  <img 
                    src={page.mainImage} 
                    alt={page.title}
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
                </div>

                {/* Lead Introduction */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-3 text-teal-primary font-bold text-[10px] tracking-[0.3em] uppercase opacity-40">
                      Visão Geral
                    </div>
                    <h2 className="text-2xl lg:text-3xl xl:text-4xl font-light text-text-primary/70 leading-relaxed max-w-3xl">
                      {page.description}
                    </h2>
                  </div>
                  <div className="h-px w-24 bg-gradient-to-r from-teal-primary/20 to-transparent" />
                  <div className="prose prose-xl lg:prose-2xl prose-stone max-w-none">
                    {page.content()}
                  </div>
                </div>
                {/* Features Spotlight */}
                {page.features && (
                  <div className="space-y-10 pt-8">
                    <div className="flex items-center gap-6">
                      <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-text-primary/30 whitespace-nowrap">Tecnologia & Diferenciais</h4>
                      <div className="h-px w-full bg-black/[0.03]" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      {page.features.map((f, i) => (
                        <div key={i} className="space-y-4 group">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-teal-primary/5 flex items-center justify-center text-teal-primary group-hover:bg-teal-primary group-hover:text-white transition-all duration-500">
                              <ArrowRight size={18} />
                            </div>
                            <h5 className="text-xl font-bold text-text-heading">{f.title}</h5>
                          </div>
                          <p className="text-text-primary/70 text-lg leading-relaxed pl-14">{f.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sticky Sidebar */}
              <aside className="lg:col-span-4">
                <div ref={sidebarRef} className="lg:sticky lg:top-32 space-y-12">
                  
                  {/* Trust Badge / Benefits */}
                  {page.benefits && (
                    <div className="bg-bg-light/40 backdrop-blur-sm border border-black/[0.02] p-10 rounded-[48px] space-y-8">
                      <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-text-primary/40">Por que escolher</h4>
                      <div className="space-y-6">
                        {page.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-4 group">
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-teal-primary shadow-sm group-hover:scale-110 transition-transform">
                              <CheckCircle2 size={16} />
                            </div>
                            <span className="font-medium text-text-primary/80 group-hover:text-teal-primary transition-colors">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Quick Contact Sidebar Card */}
                  <div className="bg-teal-dark rounded-[48px] p-10 text-white relative overflow-hidden group">
                    <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                       <OutlineToothIcon size={180} />
                    </div>
                    <div className="relative z-10 space-y-6">
                      <h4 className="text-2xl font-bold leading-tight">Pronto para começar?</h4>
                      <p className="text-white/60 leading-relaxed">Fale com nossa equipe agora mesmo e tire suas dúvidas.</p>
                      <a
                        href={WHATSAPP_LINK}
                        className="flex items-center justify-center gap-3 bg-white text-teal-dark font-bold py-5 px-8 rounded-full hover:bg-cyan-light transition-all shadow-xl group-hover:scale-[1.02]"
                      >
                        <MessageCircle size={20} />
                        WhatsApp
                      </a>
                    </div>
                  </div>

                  {/* Related Links */}
                  <div className="px-6 space-y-8">
                    <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-text-primary/40">Continue Explorando</h4>
                    <nav className="flex flex-col gap-4">
                      {(page.relatedLinks || FOOTER_COLUMNS.flatMap(c => c.links).slice(0, 4)).map((link, i) => (
                        <Link
                          key={i}
                          to={link.href}
                          className="group flex items-center justify-between text-text-primary/60 hover:text-teal-primary transition-all py-2 border-b border-black/[0.03]"
                        >
                          <span className="font-medium">{link.label}</span>
                          <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </SectionContainer>
      </div>

      {/* Big Conversion CTA */}
      <SectionContainer className="py-0">
        <div ref={ctaRef} className="mt-16 lg:mt-24">
          <div className="bg-navy-dark rounded-[64px] p-12 lg:p-24 text-white relative overflow-hidden group shadow-2xl">
            
            {/* Immersive Background */}
            <div className="absolute -top-64 -right-64 w-[600px] h-[600px] bg-teal-primary/20 blur-[140px] rounded-full group-hover:bg-teal-primary/30 transition-colors duration-1000" />
            <div className="absolute -bottom-64 -left-64 w-[600px] h-[600px] bg-cyan-light/10 blur-[120px] rounded-full group-hover:bg-cyan-light/20 transition-colors duration-1000" />
            
            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-12">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-cyan-light animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">Atendimento Humanizado</span>
              </div>

              <div className="space-y-6">
                <h4 className="text-4xl lg:text-7xl font-medium leading-[1.05] tracking-tight">
                  Vamos transformar seu sorriso em uma <span className="text-cyan-light italic font-serif">obra-prima</span>?
                </h4>
                <p className="text-white/50 text-xl lg:text-2xl font-light max-w-2xl mx-auto">
                  Agende sua avaliação e descubra como a odontologia moderna pode mudar sua percepção de cuidado.
                </p>
              </div>
              
              <div className="relative z-10 w-full lg:w-auto flex flex-col items-center gap-4">
                <Button 
                  text="Verificar Disponibilidade" 
                  icon="arrow-circle" 
                  variant="white" 
                  size="lg"
                  href={WHATSAPP_LINK} 
                  className="shadow-2xl shadow-black/20 w-full sm:w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
