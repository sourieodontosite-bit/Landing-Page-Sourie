import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function BrandStatement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (textRef.current) {
      gsap.fromTo(textRef.current,
        { x: 150 },
        {
          x: -150,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          }
        }
      );
    }
  }, []);

  const items = [
    "Acolhimento",
    "Tecnologia",
    "Excelência Clínica",
    "Humanização",
    "Souriê"
  ];

  return (
    <div ref={containerRef} className="py-24 lg:py-32 overflow-hidden bg-transparent">
      <div
        ref={textRef}
        className="flex items-center justify-center gap-16 md:gap-32 whitespace-nowrap"
      >
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-16 md:gap-32">
            <span className="text-4xl lg:text-8xl font-serif italic text-teal-dark/10 tracking-tighter select-none">
              {item}
            </span>
            {i < items.length - 1 && (
              <div className="w-2 h-2 rounded-full bg-teal-primary/30" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
