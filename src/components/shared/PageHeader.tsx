import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PageHeaderProps {
  title: string;
  category?: string;
  icon?: React.ElementType;
}

export default function PageHeader({ title, category, icon: Icon }: PageHeaderProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!contentRef.current) return;
    
    gsap.fromTo(contentRef.current.children, 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2
      }
    );
  }, { scope: contentRef });

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-transparent" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#68888F]/10 via-[#68888F]/5 to-transparent" />
      
      {/* Decorative Premium Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-primary/5 blur-[160px] rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-light/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/4" />
      
      {/* Subtle Bottom Divider - Sophisticated Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] max-w-page h-px bg-gradient-to-r from-transparent via-black/[0.03] to-transparent" />

      <div className="max-w-page mx-auto px-6 sm:px-10 lg:px-container-x relative z-10">
        <div 
          ref={contentRef}
          className="flex flex-col items-start text-left"
        >
          {/* Breadcrumbs with refined glass effect */}
          <nav className="flex items-center gap-2 bg-white/40 backdrop-blur-md border border-white/40 px-5 py-2 rounded-full text-text-primary/50 text-[13px] mb-12 font-medium shadow-sm shadow-black/[0.02]">
            <Link to="/" className="hover:text-teal-primary transition-colors flex items-center gap-1.5">
              <Home size={13} className="mb-0.5" />
              Início
            </Link>
            <ChevronRight size={12} className="opacity-30" />
            {category && (
              <>
                <span className="hover:text-text-primary transition-colors">{category}</span>
                <ChevronRight size={12} className="opacity-30" />
              </>
            )}
            <span className="text-teal-primary font-semibold">{title}</span>
          </nav>

          <div className="space-y-6 lg:space-y-8">
            {Icon && (
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-3xl bg-white/40 backdrop-blur-md border border-white/40 flex items-center justify-center text-teal-primary shadow-sm shadow-black/[0.02] mb-2">
                <Icon size={32} className="lg:w-10 lg:h-10" />
              </div>
            )}
            <h1 className="text-5xl sm:text-6xl lg:text-[88px] font-medium text-text-heading leading-[0.95] tracking-tightest">
              {title}
            </h1>
            <div className="flex pt-4">
              <div className="w-12 h-1 rounded-full bg-teal-primary/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
