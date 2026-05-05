import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function BackgroundWaves() {
  const containerRef = useRef<HTMLDivElement>(null);
  const path1Ref = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPathElement>(null);
  const path3Ref = useRef<SVGPathElement>(null);

  useGSAP(() => {
    // Initial setup for path drawing
    [path1Ref, path2Ref, path3Ref].forEach(ref => {
      if (ref.current) {
        const length = ref.current.getTotalLength();
        gsap.set(ref.current, { 
          strokeDasharray: length, 
          strokeDashoffset: length 
        });
      }
    });

    // Animate paths on scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1, // Smooth scrub
      }
    });

    if (path1Ref.current) tl.to(path1Ref.current, { strokeDashoffset: 0, ease: "none" }, 0);
    if (path2Ref.current) tl.to(path2Ref.current, { strokeDashoffset: 0, ease: "none" }, 0);
    if (path3Ref.current) tl.to(path3Ref.current, { strokeDashoffset: 0, ease: "none" }, 0);

    // Parallax effect for the entire SVG container
    gsap.to(containerRef.current, {
      y: -100, // Subtle vertical parallax
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true
      }
    });

  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <svg 
        className="w-full h-full" 
        viewBox="0 0 1440 5000" 
        preserveAspectRatio="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#578998" stopOpacity="0" />
            <stop offset="2%" stopColor="#578998" stopOpacity="0.06" />
            <stop offset="50%" stopColor="#3d7683" stopOpacity="0.1" />
            <stop offset="98%" stopColor="#578998" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#578998" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Line 1 - Thicker and more transparent */}
        <path
          ref={path1Ref}
          d="M 100,0 
             C 600,500 1300,1000 1300,1500 
             S 100,2000 100,2500 
             S 1300,3000 1300,3500 
             S 400,4000 400,4500
             S 1200,4800 1200,5000"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="6"
          opacity="0.8"
        />

        {/* Line 2 - Also thicker and more transparent */}
        <path
          ref={path2Ref}
          d="M 250,0 
             C 750,450 1200,1050 1200,1550 
             S 250,1950 250,2450 
             S 1150,3050 1150,3450 
             S 550,4050 550,4450
             S 1050,4850 1050,5000"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="4"
          opacity="0.5"
        />

        {/* Line 3 - Very subtle center guide */}
        <path
          ref={path3Ref}
          d="M 720,0 
             C 800,500 640,1000 720,1500 
             S 800,2000 720,2500 
             S 640,3000 720,3500 
             S 800,4000 720,4500
             S 720,4800 720,5000"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          opacity="0.2"
        />
      </svg>
      
      {/* Background Blobs */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="absolute top-[30%] left-[5%] w-[40vw] h-[40vw] bg-teal-primary/1 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[5%] w-[50vw] h-[50vw] bg-teal-medium/1 rounded-full blur-[120px]" />
      </div>
    </div>
  );
}
