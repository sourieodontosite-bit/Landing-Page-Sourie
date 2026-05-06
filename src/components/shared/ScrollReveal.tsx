import { useRef, useEffect, useState } from 'react';
import { type ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  once?: boolean;
  // variants prop removed as we're moving to GSAP
}

/**
 * A wrapper component that animates its children when they enter the viewport using GSAP.
 */
export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  threshold = 0.1,
  once = true,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, once]);

  return (
    <div 
      ref={elementRef} 
      className={`${className} reveal-item ${isVisible ? 'active' : ''}`}
      style={{ animationDelay: `${delay * 1000}ms` }}
    >
      {children}
    </div>
  );
}
