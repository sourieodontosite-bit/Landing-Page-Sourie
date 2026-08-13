import { lazy, Suspense } from 'react';
import HeroSection from '../components/sections/HeroSection';
import SectionSkeleton from '../components/shared/SectionSkeleton';
import SectionDivider from '../components/shared/SectionDivider';

import SEO from '../components/shared/SEO';
import { LOCAL_BUSINESS_SCHEMA } from '../utils/SEOData';

// Lazy load GSAP-heavy sections
const ServicesSection = lazy(() => import('../components/sections/ServicesSection'));
const AboutGallery = lazy(() => import('../components/sections/AboutGallery'));
const ProceduresCTA = lazy(() => import('../components/sections/ProceduresCTA'));
const TeamSection = lazy(() => import('../components/sections/TeamSection'));
const BentoTestimonialsSection = lazy(() => import('../components/sections/BentoTestimonialsSection'));
const MarqueeCTA = lazy(() => import('../components/sections/MarqueeCTA'));
const FAQSection = lazy(() => import('../components/sections/FAQSection'));
const ScrollProgressBar = lazy(() => import('../components/shared/ScrollProgressBar'));


export default function Home() {
  return (
    <>
      <Suspense fallback={null}>
        <ScrollProgressBar />
      </Suspense>

      <SEO
        title="Souriê Odontologia | Invisalign e Implantes em Nova Era MG"
        description="Clínica odontológica em Nova Era, MG. Especialistas em Invisalign, implantes, estética e odontopediatria com tecnologia e atendimento humanizado. Agende sua consulta!"
        schema={LOCAL_BUSINESS_SCHEMA}
      />
      <HeroSection />

      <SectionDivider />

      {/* GSAP Sections - Loaded Progressively */}
      <Suspense fallback={<SectionSkeleton />}>
        <ServicesSection />
        <TeamSection />
        <BentoTestimonialsSection />
        <AboutGallery />
        <MarqueeCTA />
        <FAQSection />
        <ProceduresCTA />
      </Suspense>
    </>
  );
}
