import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Disable browser scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Scroll to top instantly on pathname change if no hash
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // If there is a hash, scroll to it, retrying to account for lazy-loaded sections
      const id = hash.replace('#', '');
      
      if (id === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      let attempts = 0;
      const maxAttempts = 50; // Check every 50ms for 2.5 seconds max

      const intervalId = setInterval(() => {
        const element = document.getElementById(id);
        
        if (element) {
          // Check if element has actually rendered with some height
          if (element.getBoundingClientRect().height > 0) {
            clearInterval(intervalId);
            
            // Adding a tiny extra delay so React can fully paint before scrolling
            setTimeout(() => {
              element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }
        }
        
        attempts++;
        if (attempts >= maxAttempts) {
          clearInterval(intervalId);
        }
      }, 50);

      return () => clearInterval(intervalId);
    }
  }, [pathname, hash]);

  return null;
}
