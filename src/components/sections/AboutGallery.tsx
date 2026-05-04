import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SectionContainer from '../shared/SectionContainer';
import img1 from '../../assets/clinica-interna-1.png';
import img2 from '../../assets/clinica-interna-2.jpg';
import img3 from '../../assets/clinica-interna-3.png';
import img4 from '../../assets/foto-clinica.webp';
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
        gsap.to(img, {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <SectionContainer id="ambiente" className="py-12 lg:py-12">
      {!addressOnly && (
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left mb-12 space-y-6">
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
    </SectionContainer>
  );
}
