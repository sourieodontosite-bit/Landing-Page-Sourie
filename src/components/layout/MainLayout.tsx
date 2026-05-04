import { useEffect, Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import Footer from '../sections/Footer';
import ScrollToTop from '../shared/ScrollToTop';
import WhatsAppButton from '../shared/WhatsAppButton';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Refresh ScrollTrigger after a safe delay to ensure layout stability
    const timer = setTimeout(() => {
      ScrollTrigger.refresh(true);
    }, 250);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <main className="min-h-screen relative bg-slate-50/30">
      <ScrollToTop />
      <div className="relative z-10">
        <Navbar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <Footer />
        <WhatsAppButton />
      </div>
    </main>
  );
}
