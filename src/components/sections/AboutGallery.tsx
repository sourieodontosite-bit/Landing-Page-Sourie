import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SectionContainer from '../shared/SectionContainer';
import { OutlineToothIcon } from '../shared/Icons';
import img1 from '../../assets/clinica-interna-1.webp';
import img2 from '../../assets/Victor-tratamento.webp';
import img3 from '../../assets/clinica-internamente.webp';
import img4 from '../../assets/clinica-externa.webp';
import AddressCard from '../shared/AddressCard';

interface AboutGalleryProps {
  addressOnly?: boolean;
}

export default function AboutGallery({ addressOnly = false }: AboutGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Entrance animation for ALL devices
    gsap.fromTo(".gallery-item",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true
        }
      }
    );

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Subtle parallax on images ONLY for desktop
      const images = gsap.utils.toArray<HTMLElement>(".gallery-img");
      images.forEach((img) => {
        gsap.fromTo(img, 
          { y: 30 },
          {
            y: -30,
            ease: "none",
            scrollTrigger: {
              trigger: img.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          }
        );
      });
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <SectionContainer 
      id="ambiente" 
      background="bg-transparent"
      className="relative z-10"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        {!addressOnly && (
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left mb-16 md:mb-20 space-y-6">
            <span className="text-teal-primary font-bold uppercase tracking-[0.3em] text-[10px]">Infraestrutura</span>
            <h2 className="text-4xl lg:text-7xl font-medium text-teal-dark tracking-tight">
              Ambiente planejado <br />
              <span className="italic font-serif">para o seu bem-estar.</span>
            </h2>
          </div>
        )}

        <div ref={containerRef} className={addressOnly ? "flex justify-center w-full" : "flex flex-col gap-4"}>

          {/* Linha superior: imagem grande + AddressCard lado a lado */}
          {!addressOnly && (
            <div className="hidden md:flex gap-4 items-stretch">
              <div className="gallery-item flex-1 relative overflow-hidden rounded-[28px] shadow-2xl min-h-[200px]">
                <img
                  src={img4}
                  alt="Fachada da clínica"
                  className="gallery-img absolute inset-0 w-full h-full object-cover scale-125"
                />
              </div>
              <div className="w-[33%] shrink-0">
                <AddressCard isFullWidth={false} className="" />
              </div>
            </div>
          )}

          {/* Mobile: hero + AddressCard empilhados */}
          {!addressOnly && (
            <div className="md:hidden flex flex-col gap-4">
              <div className="gallery-item h-64 sm:h-80 relative overflow-hidden rounded-[28px] shadow-2xl">
                <img src={img4} alt="Fachada da clínica" className="gallery-img absolute inset-0 w-full h-full object-cover scale-125" />
              </div>
              <AddressCard isFullWidth={false} className="" />
            </div>
          )}

          {/* AddressCard standalone para modo addressOnly */}
          {addressOnly && (
            <AddressCard isFullWidth={true} className="" />
          )}

          {/* Linha inferior: 3 imagens iguais */}
          {!addressOnly && (
            <div className="hidden md:grid md:grid-cols-3 gap-4">
              <div className="gallery-item h-72 relative overflow-hidden rounded-[28px] shadow-2xl">
                <img src={img1} alt="Interior da clínica" className="gallery-img absolute inset-0 w-full h-full object-cover scale-125" />
              </div>
              <div className="gallery-item h-72 relative overflow-hidden rounded-[28px] shadow-2xl">
                <img src={img2} alt="Consultório moderno" className="gallery-img absolute inset-0 w-full h-full object-cover scale-125" />
              </div>
              <div className="gallery-item h-72 relative overflow-hidden rounded-[28px] shadow-2xl">
                <img src={img3} alt="Detalhe ambiente" className="gallery-img absolute inset-0 w-full h-full object-cover scale-125" />
              </div>
            </div>
          )}
        </div>

        {/* Recognition uplift CTA Card */}
        {!addressOnly && (
          <div className="gallery-item relative z-10 mt-12 md:mt-20">
            <div className="relative overflow-hidden bg-teal-primary rounded-[32px] md:rounded-[50px] p-10 md:p-12 lg:p-16 flex flex-col items-center text-center shadow-2xl border border-white/10 group">
              {/* Background Decorations */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent scale-150" />
              </div>
              <div className="absolute -left-20 -top-20 pointer-events-none opacity-[0.05] rotate-[10deg] group-hover:rotate-[20deg] transition-transform duration-1000">
                <OutlineToothIcon size={350} className="text-white" />
              </div>
              <div className="absolute -right-16 -bottom-20 pointer-events-none opacity-[0.05] rotate-[140deg] group-hover:rotate-[130deg] transition-transform duration-1000">
                <OutlineToothIcon size={300} className="text-white" />
              </div>

              <div className="relative z-10 space-y-4 md:space-y-6 max-w-2xl">
                <span className="text-white/70 text-[10px] font-bold uppercase tracking-[0.3em]">Experiência Souriê</span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tighter leading-[1.05] md:leading-[0.95]">
                  Seu <span className="italic font-serif">conforto</span> em cada <br />
                  detalhe do tratamento.
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </SectionContainer>
  );
}
