import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
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

  useGSAP(() => {
    if (!elementRef.current) return;

    gsap.fromTo(elementRef.current, 
      { 
        opacity: 0, 
        y: 20 
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elementRef.current,
          start: `top ${100 - (threshold * 50)}%`, // Trigger based on threshold
          toggleActions: "play none none none",
          once: once
        }
      }
    );
  }, { scope: elementRef, dependencies: [delay, threshold, once] });

  return (
    <div ref={elementRef} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
