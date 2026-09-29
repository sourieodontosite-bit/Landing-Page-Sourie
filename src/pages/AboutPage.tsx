import { lazy, Suspense } from 'react';
import SEO from '../components/shared/SEO';
import AboutVideo from '../components/sections/AboutVideo';
import AboutTimeline from '../components/sections/AboutTimeline';

const FAQSection = lazy(() => import('../components/sections/FAQSection'));
const ProceduresCTA = lazy(() => import('../components/sections/ProceduresCTA'));

export default function AboutPage() {
  return (
    <>
      <SEO 
        title="Souriê Odontologia | Sobre Nossa Equipe e História"
        description="Conheça a história, missão e a equipe multiprofissional da Souriê Odontologia em Nova Era. Tecnologia, conforto e atendimento humanizado para o seu sorriso."
        canonical="https://sourie.com.br/sobre"
      />
      
      <main className="overflow-x-hidden">
        {/* Main Cinematic Hero (Image + Title + Breadcrumbs) */}
        <AboutVideo showAddress />

        <div className="space-y-12 lg:space-y-16 pb-32 pt-12">
          {/* Interactive History Timeline */}
          <AboutTimeline />

          <Suspense fallback={<div className="h-96" />}>
            {/* Final CTA */}
            <ProceduresCTA />
            
            {/* Authority & Trust */}
            <FAQSection />
          </Suspense>
        </div>
      </main>
    </>
  );
}
