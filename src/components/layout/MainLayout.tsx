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
    // Refresh ScrollTrigger when page changes
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <main className="min-h-screen relative bg-slate-50/30">
      <ScrollToTop />
      <div className="relative z-10">
        <Navbar />
        <Suspense fallback={<div className="min-h-screen bg-bg-light" />}>
          <Outlet />
          <Footer />
        </Suspense>
        <WhatsAppButton />
      </div>
    </main>
  );
}
