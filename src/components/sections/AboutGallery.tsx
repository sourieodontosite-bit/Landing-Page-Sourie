import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SectionContainer from "../shared/SectionContainer";
import img1 from "../../assets/equipe-tecnologia.webp";
import img2 from "../../assets/Victor-tratamento.webp";
import img3 from "../../assets/clinica-internamente.webp";
import img4 from "../../assets/clinica-externa.webp";
import AddressCard from "../shared/AddressCard";

interface AboutGalleryProps {
  addressOnly?: boolean;
}

export default function AboutGallery({
  addressOnly = false,
}: AboutGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Entrance animation for ALL devices
      gsap.fromTo(
        ".gallery-item",
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
            once: true,
          },
        },
      );

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        // Subtle parallax on images ONLY for desktop
        const images = gsap.utils.toArray<HTMLElement>(".gallery-img");
        images.forEach((img) => {
          gsap.fromTo(
            img,
            { y: 30 },
            {
              y: -30,
              ease: "none",
              scrollTrigger: {
                trigger: img.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef },
  );

  return (
    <SectionContainer
      id="ambiente"
      background="bg-transparent"
    >
      <div className="overflow-hidden relative z-10">
        {/* Decorative background removed to keep the section clean on white background */}

        <div className="relative z-10 w-full py-6">
          {!addressOnly && (
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left mb-16 md:mb-20 space-y-6">
              <span className="text-teal-primary font-bold uppercase tracking-[0.3em] text-[10px]">
                Infraestrutura
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-teal-dark leading-tight tracking-tight">
                Ambiente planejado <br />
                <span className="italic font-serif text-teal-primary">para o seu bem-estar.</span>
              </h2>
            </div>
          )}

          <div
            ref={containerRef}
            className={
              addressOnly ? "flex justify-center w-full" : "flex flex-col gap-4"
            }
          >
            {/* Linha superior: imagem grande + AddressCard lado a lado */}
            {!addressOnly && (
              <div className="hidden md:flex gap-4 items-stretch">
                <div className="gallery-item flex-1 relative overflow-hidden rounded-[28px] min-h-[200px]">
                  <img
                    src={img4}
                    alt="Fachada da clínica"
                    className="gallery-img absolute inset-0 w-full h-full object-cover scale-125"
                    loading="lazy"
                    width={800}
                    height={400}
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
                <div className="gallery-item h-64 sm:h-80 relative overflow-hidden rounded-[28px]">
                  <img
                    src={img4}
                    alt="Fachada da clínica"
                    className="gallery-img absolute inset-0 w-full h-full object-cover scale-125"
                    loading="lazy"
                    width={800}
                    height={320}
                  />
                </div>
                <AddressCard isFullWidth={false} className="" />
              </div>
            )}

            {/* AddressCard standalone para modo addressOnly */}
            {addressOnly && <AddressCard isFullWidth={true} className="" />}

            {/* Linha inferior: 3 imagens iguais */}
            {!addressOnly && (
              <div className="hidden md:grid md:grid-cols-3 gap-4">
                <div className="gallery-item h-72 relative overflow-hidden rounded-[28px]">
                  <img
                    src={img1}
                    alt="Interior da clínica"
                    className="gallery-img absolute inset-0 w-full h-full object-cover scale-125"
                    loading="lazy"
                    width={400}
                    height={288}
                  />
                </div>
                <div className="gallery-item h-72 relative overflow-hidden rounded-[28px]">
                  <img
                    src={img2}
                    alt="Consultório moderno"
                    className="gallery-img absolute inset-0 w-full h-full object-cover scale-125"
                    loading="lazy"
                    width={400}
                    height={288}
                  />
                </div>
                <div className="gallery-item h-72 relative overflow-hidden rounded-[28px]">
                  <img
                    src={img3}
                    alt="Detalhe ambiente"
                    className="gallery-img absolute inset-0 w-full h-full object-cover scale-125"
                    loading="lazy"
                    width={400}
                    height={288}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
