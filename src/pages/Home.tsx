import { lazy, Suspense, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import HeroSection from '../components/sections/HeroSection';

import SEO from '../components/shared/SEO';
import { LOCAL_BUSINESS_SCHEMA } from '../utils/SEOData';

// Lazy load below-the-fold sections
const PainSolutionSection = lazy(() => import('../components/sections/PainSolutionSection'));
const ServicesSection = lazy(() => import('../components/sections/ServicesSection'));
const TrustMarquee = lazy(() => import('../components/sections/TrustMarquee'));
const AboutGallery = lazy(() => import('../components/sections/AboutGallery'));
const ProceduresCTA = lazy(() => import('../components/sections/ProceduresCTA'));
const TeamSection = lazy(() => import('../components/sections/TeamSection'));
const BentoTestimonialsSection = lazy(() => import('../components/sections/BentoTestimonialsSection'));
const FAQSection = lazy(() => import('../components/sections/FAQSection'));

export default function Home() {
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(progressRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        start: 0,
        end: "max",
        scrub: 0.3
      }
    });
  }, []);

  return (
    <>
      <div
        ref={progressRef}
        className="fixed top-0 left-0 right-0 h-1 bg-teal-primary z-[100] origin-left scale-x-0"
      />
      <SEO
        title="Clínica Odontológica em Nova Era | Invisalign e Implantes"
        description="Souriê Odontologia Integrada: A clínica odontológica mais moderna de Nova Era, MG. Especialistas em Invisalign, Implantes, Estética e Odontopediatria. Agende agora!"
        schema={LOCAL_BUSINESS_SCHEMA}
      />
      <HeroSection />
      <Suspense fallback={<div className="h-96" />}>
        <ServicesSection />
        <PainSolutionSection />
        <BentoTestimonialsSection />
        <TrustMarquee />
        <TeamSection />
        <AboutGallery />
        <FAQSection />
        <ProceduresCTA />
      </Suspense>
    </>
  );
}
