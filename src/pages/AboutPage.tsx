import { lazy, Suspense } from 'react';
import SEO from '../components/shared/SEO';
import AboutVideo from '../components/sections/AboutVideo';
import AboutTimeline from '../components/sections/AboutTimeline';
import AboutTeam from '../components/sections/AboutTeam';

const FAQSection = lazy(() => import('../components/sections/FAQSection'));
const ProceduresCTA = lazy(() => import('../components/sections/ProceduresCTA'));

export default function AboutPage() {
  return (
    <>
      <SEO 
        title="Sobre a Clínica | Souriê Odontologia Integrada"
        description="Conheça a história, missão e os diferencais da Souriê Odontologia em Nova Era. Tecnologia, conforto e atendimento humanizado para o seu sorriso."
      />
      
      <main className="overflow-x-hidden">
        {/* Main Cinematic Hero (Image + Title + Breadcrumbs) */}
        <AboutVideo showAddress />

        <div className="space-y-12 lg:space-y-16 pb-32 pt-12">
          {/* Interactive History Timeline */}
          <AboutTimeline />

          {/* Custom Team Presentation */}
          <AboutTeam />
          
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
