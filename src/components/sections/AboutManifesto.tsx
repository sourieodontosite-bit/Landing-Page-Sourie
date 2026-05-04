import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Target, Eye, Heart } from 'lucide-react';
import SectionContainer from '../shared/SectionContainer';

export default function AboutManifesto() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (containerRef.current) {
      gsap.fromTo(".bento-item",
        { opacity: 0, scale: 0.95, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );
    }
  }, []);

  return (
    <SectionContainer id="manifesto" className="bg-transparent">
      <div 
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]"
      >
        {/* Mission - Large Highlight Card */}
        <div className="bento-item md:col-span-8 md:row-span-2 group relative overflow-hidden bg-teal-dark rounded-[40px] p-10 lg:p-16 flex flex-col justify-end text-white border border-white/5 shadow-2xl shadow-teal-dark/20">
          <div className="absolute top-10 right-10 w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500">
            <Target size={40} />
          </div>
          <div className="relative z-10 max-w-xl space-y-6">
            <span className="text-cyan-light font-bold uppercase tracking-[0.2em] text-[13px]">Nosso Propósito</span>
            <h3 className="text-4xl lg:text-5xl font-medium leading-tight">
              Proporcionar saúde e bem-estar através da <span className="italic font-serif text-cyan-light">excelência.</span>
            </h3>
            <p className="text-xl text-white/90 font-light leading-relaxed">
              Unimos tecnologia de ponta a um atendimento verdadeiramente humanizado para transformar cada sorriso em uma obra de arte funcional.
            </p>
          </div>
          {/* Subtle decoration */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-teal-primary/10 rounded-full blur-[100px]" />
        </div>

        {/* Vision - Smaller Card */}
        <div className="bento-item md:col-span-4 group relative overflow-hidden bg-white rounded-[40px] p-10 flex flex-col justify-between border border-black/10 hover:border-teal-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-dark/5">
          <div className="w-12 h-12 rounded-xl bg-teal-primary/10 flex items-center justify-center text-teal-primary mb-8 group-hover:scale-110 transition-transform duration-500">
            <Eye size={24} />
          </div>
          <div className="space-y-4">
            <h4 className="text-2xl font-bold text-teal-dark">Visão</h4>
            <p className="text-text-primary font-light leading-relaxed text-lg">
              Ser a referência absoluta em odontologia moderna e estética em Nova Era.
            </p>
          </div>
        </div>

        {/* Values - Smaller Card */}
        <div className="bento-item md:col-span-4 group relative overflow-hidden bg-white rounded-[40px] p-10 flex flex-col justify-between border border-black/10 hover:border-teal-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-dark/5">
          <div className="w-12 h-12 rounded-xl bg-teal-primary/10 flex items-center justify-center text-teal-primary mb-8 group-hover:scale-110 transition-transform duration-500">
            <Heart size={24} />
          </div>
          <div className="space-y-4">
            <h4 className="text-2xl font-bold text-teal-dark">Valores</h4>
            <p className="text-text-primary font-light leading-relaxed text-lg">
              Ética, transparência, inovação constante e cuidado humanizado acima de tudo.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
