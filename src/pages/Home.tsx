import { useEffect, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/sections/HeroSection';
import SectionSkeleton from '../components/shared/SectionSkeleton';
import SectionDivider from '../components/shared/SectionDivider';

import SEO from '../components/shared/SEO';
import { HOME_GRAPH_SCHEMA } from '../utils/SEOData';

// Lazy load GSAP-heavy sections
const ServicesSection = lazy(() => import('../components/sections/ServicesSection'));
const AboutGallery = lazy(() => import('../components/sections/AboutGallery'));
const ProceduresCTA = lazy(() => import('../components/sections/ProceduresCTA'));
const TeamSection = lazy(() => import('../components/sections/TeamSection'));
const BentoTestimonialsSection = lazy(() => import('../components/sections/BentoTestimonialsSection'));
const AboutTimeline = lazy(() => import('../components/sections/AboutTimeline'));
const MarqueeCTA = lazy(() => import('../components/sections/MarqueeCTA'));
const FAQSection = lazy(() => import('../components/sections/FAQSection'));
const ScrollProgressBar = lazy(() => import('../components/shared/ScrollProgressBar'));


export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const sectionId = hash.replace('#', '');
      const timer = setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [hash]);
  return (
    <>
      <Suspense fallback={null}>
        <ScrollProgressBar />
      </Suspense>

      <SEO
        title="Souriê Odontologia | Invisalign e Implantes em Nova Era MG"
        description="Clínica odontológica acessível em Nova Era, MG. Especialistas em Invisalign, implantes, estética e odontopediatria com tecnologia e parcelamento conforme seu planejamento."
        canonical="https://sourie.com.br/"
        schema={HOME_GRAPH_SCHEMA}
      />
      <HeroSection />

      <SectionDivider />

      {/* GSAP Sections - Loaded Progressively */}
      <Suspense fallback={<SectionSkeleton />}>
        <ServicesSection />
        <TeamSection />
        <BentoTestimonialsSection />
        <AboutTimeline />
        <AboutGallery />
        <MarqueeCTA />
        <FAQSection />
        <ProceduresCTA />
      </Suspense>
    </>
  );
}
