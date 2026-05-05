import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const initGSAP = () => {
  if (typeof window === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  // Global ScrollTrigger configuration to minimize reflows
  ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load", 
    limitCallbacks: true,
    ignoreMobileResize: true, // Prevents expensive reflows on mobile when UI bars toggle
    // normalizeScroll: true // CAUTION: Test on iOS Safari before enabling
  });

  // Performance settings
  gsap.ticker.lagSmoothing(1000, 16);
  
  // Detect mobile to lower frame rate and save CPU/Battery
  const isMobile = window.innerWidth < 768;
  if (isMobile) {
    gsap.ticker.fps(30);
  }
};

export default gsap;
