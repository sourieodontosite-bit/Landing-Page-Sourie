import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    // Disable browser scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Scroll to top instantly on pathname change if no hash
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // If there is a hash, scroll to it with a small delay to allow content to render
      const timer = setTimeout(() => {
        const id = hash.replace('#', '');
        if (id === 'hero') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(id);
          if (element) {
            const offset = 80; // Navbar offset
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
              top: elementPosition - offset,
              behavior: 'smooth'
            });
          }
        }
        ScrollTrigger.refresh();
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [pathname, hash]);

  return null;
}
