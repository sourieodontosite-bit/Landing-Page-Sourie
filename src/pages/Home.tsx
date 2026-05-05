import { lazy, Suspense } from 'react';
import HeroSection from '../components/sections/HeroSection';
import SectionSkeleton from '../components/shared/SectionSkeleton';
import SectionDivider from '../components/shared/SectionDivider';

import SEO from '../components/shared/SEO';
import { LOCAL_BUSINESS_SCHEMA } from '../utils/SEOData';

// Lazy load GSAP-heavy sections
const ServicesSection = lazy(() => import('../components/sections/ServicesSection'));
const PainSolutionSection = lazy(() => import('../components/sections/PainSolutionSection'));
const AboutGallery = lazy(() => import('../components/sections/AboutGallery'));
const ProceduresCTA = lazy(() => import('../components/sections/ProceduresCTA'));
const TeamSection = lazy(() => import('../components/sections/TeamSection'));
const BentoTestimonialsSection = lazy(() => import('../components/sections/BentoTestimonialsSection'));
const FAQSection = lazy(() => import('../components/sections/FAQSection'));
const ScrollProgressBar = lazy(() => import('../components/shared/ScrollProgressBar'));

export default function Home() {
  return (
    <>
      <Suspense fallback={null}>
        <ScrollProgressBar />
      </Suspense>

      <SEO
        title="Clínica Odontológica em Nova Era | Invisalign e Implantes"
        description="Souriê Odontologia Integrada: A clínica odontológica mais moderna de Nova Era, MG. Especialistas em Invisalign, Implantes, Estética e Odontopediatria. Agende agora!"
        schema={LOCAL_BUSINESS_SCHEMA}
      />
      <HeroSection />
      
      <SectionDivider />

      {/* GSAP Sections - Loaded Progressively */}
      <Suspense fallback={<SectionSkeleton />}>
        <ServicesSection />
        <PainSolutionSection />
        <TeamSection />
        <BentoTestimonialsSection />
        <SectionDivider />
        <AboutGallery />
        <FAQSection />
        <ProceduresCTA />
      </Suspense>
    </>
  );
}
