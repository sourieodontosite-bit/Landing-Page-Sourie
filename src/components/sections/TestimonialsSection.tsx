import { useRef, useState, useEffect } from 'react';
import { Play, Volume2, VolumeX, Star, Quote, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../../utils/constants';
import type { Testimonial } from '../../utils/constants';

import SectionContainer from '../shared/SectionContainer';
import { OutlineToothIcon } from '../shared/Icons';
import Badge from '../shared/Badge';

import testimonial1Img from '../../assets/images/depoimentos/paciente-ingrid.webp';
import testimonial2Img from '../../assets/images/depoimentos/paciente-fabiana.webp';
import testimonial3Img from '../../assets/images/depoimentos/paciente-jennifer.webp';

const TESTIMONIAL_IMAGES = [testimonial1Img, testimonial2Img, testimonial3Img];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = TESTIMONIALS.slice(0, 3);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Slide Change Animation
  useEffect(() => {
    if (sliderRef.current) {
      gsap.to(sliderRef.current, {
        xPercent: -(100 / slides.length) * currentIndex,
        duration: 0.8,
        ease: "power4.inOut"
      });
      // Reset playing video on slide change
      setPlayingId(null);
    }
  }, [currentIndex, slides.length]);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const togglePlay = (id: number) => {
    setPlayingId(playingId === id ? null : id);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  return (
    <SectionContainer id="depoimentos" className="py-24 lg:py-40 relative overflow-hidden">
      {/* Soft Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-teal-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-teal-primary/5 rounded-full blur-[100px]" />
      </div>

      <div ref={sectionRef} className="relative z-10 space-y-16 lg:space-y-24">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between items-center text-center lg:text-left gap-12">
          <div className="space-y-8 max-w-3xl flex flex-col items-center lg:items-start">
            <Badge
              text="Nota máxima no Google"
              className={`testimonial-header-item reveal-item ${isVisible ? 'active' : ''} !bg-teal-primary/10 !border-teal-primary/20 !text-teal-dark`}
              icon={
                <div className="flex gap-0.5 text-teal-primary">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                </div>
              }
            />
            <h2 className={`testimonial-header-item reveal-item ${isVisible ? 'active' : ''} text-3xl sm:text-4xl lg:text-5xl font-medium text-teal-dark tracking-tight leading-tight`} style={{ animationDelay: '100ms' }}>
              O que dizem <br />
              <span className="italic font-serif text-teal-primary">sobre nós?</span>
            </h2>
          </div>

          <div className={`testimonial-header-item reveal-item ${isVisible ? 'active' : ''} hidden lg:block text-right`} style={{ animationDelay: '200ms' }}>
            <p className="text-teal-dark/40 text-sm font-medium uppercase tracking-widest mb-2">Google Reviews</p>
            <p className="text-7xl font-bold text-teal-dark tracking-tighter">5.0</p>
          </div>
        </div>

        {/* Slider System */}
        <div className={`slider-container-reveal reveal-item ${isVisible ? 'active' : ''} relative group`} style={{ animationDelay: '300ms' }}>
          {/* Navigation Buttons - Lateral */}
          <div className="absolute top-1/2 -left-4 lg:-left-12 -translate-y-1/2 z-30 hidden md:block">
            <button
              onClick={prevSlide}
              className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-white text-teal-dark shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex items-center justify-center hover:bg-teal-primary hover:text-white transition-all duration-300 border border-teal-primary/5"
              aria-label="Previous slide"
            >
              <ChevronLeft size={32} />
            </button>
          </div>

          <div className="absolute top-1/2 -right-4 lg:-right-12 -translate-y-1/2 z-30 hidden md:block">
            <button
              onClick={nextSlide}
              className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-white text-teal-dark shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex items-center justify-center hover:bg-teal-primary hover:text-white transition-all duration-300 border border-teal-primary/5"
              aria-label="Next slide"
            >
              <ChevronRight size={32} />
            </button>
          </div>

          <div
            className="overflow-visible lg:overflow-hidden px-0 lg:px-4"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              ref={sliderRef}
              className="flex transition-none"
              style={{ width: `${slides.length * 100}%` }}
            >
              {slides.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="w-full px-2 lg:px-4"
                  style={{ flex: `0 0 ${100 / slides.length}%` }}
                >
                  <div
                    className="group relative min-h-[450px] lg:min-h-[600px] rounded-[40px] lg:rounded-[60px] overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer border border-teal-primary/5 flex flex-col justify-end"
                    onClick={() => togglePlay(idx)}
                  >
                    <TestimonialMedia
                      testimonial={testimonial as Testimonial}
                      isPlaying={playingId === idx}
                      isMuted={isMuted}
                      toggleMute={toggleMute}
                      index={idx}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-teal-dark/90 md:from-teal-dark/70 via-teal-dark/40 md:via-transparent to-transparent z-10 transition-opacity duration-1000 ${playingId === idx ? 'opacity-0' : 'opacity-100'}`} />

                    <div className={`relative z-20 w-full md:max-w-2xl p-8 lg:p-20 transition-all duration-1000 ${playingId === idx ? 'opacity-0 translate-y-10' : 'opacity-100'}`}>
                      <Quote className="text-teal-primary/40 mb-4 lg:mb-8 hidden md:block" size={48} />
                      <div className="space-y-4 lg:space-y-8">
                        <p className="text-white text-xl lg:text-4xl font-medium leading-[1.1] italic tracking-tight">
                          "{(testimonial as Testimonial).quote}"
                        </p>
                        <div className="flex items-center gap-4 lg:gap-6">
                          <div className="w-px h-10 lg:h-16 bg-white/20 hidden md:block" />
                          <div>
                            <p className="text-white font-bold text-lg lg:text-2xl">{(testimonial as Testimonial).name}</p>
                            <p className="text-white/40 text-[10px] lg:text-xs uppercase tracking-[0.3em] font-bold">Paciente Souriê</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`absolute right-8 bottom-8 lg:right-20 lg:bottom-20 z-20 flex items-center gap-4 transition-all duration-700 ${playingId === idx ? 'opacity-0' : 'opacity-100'}`}>
                      <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold hidden lg:block">Ver depoimento</span>
                      <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white group-hover:bg-teal-primary transition-all duration-500">
                        <Play size={24} fill="currentColor" className="ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Indicators - Dots */}
          <div className="flex items-center justify-center mt-12 gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 transition-all duration-500 rounded-full ${currentIndex === i ? 'w-12 bg-teal-primary' : 'w-2 bg-teal-primary/20'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Final CTA Card - Now outside and static */}
        <div className={`cta-card-reveal reveal-item ${isVisible ? 'active' : ''} group relative min-h-[350px] lg:min-h-[450px] rounded-[40px] lg:rounded-[60px] overflow-hidden bg-teal-primary flex flex-col items-center justify-center text-center p-8 lg:p-20 shadow-xl border border-white/10 transition-all duration-700`} style={{ animationDelay: '400ms' }}>
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent scale-150" />
          </div>
          <div className="absolute -left-32 -top-32 pointer-events-none opacity-[0.05] hidden lg:block rotate-[10deg]">
            <OutlineToothIcon size={550} className="text-white" />
          </div>
          <div className="absolute -right-24 -bottom-32 pointer-events-none opacity-[0.05] hidden lg:block rotate-[140deg]">
            <OutlineToothIcon size={500} className="text-white" />
          </div>

          <div className="space-y-8 relative z-10">
            <h3 className="text-4xl lg:text-7xl font-medium text-white tracking-tighter leading-none">
              Pronto para <br />
              ter essa experiência?
            </h3>
            <button className="inline-flex items-center gap-4 px-8 py-4 lg:px-12 lg:py-6 rounded-full bg-white text-teal-primary font-bold text-lg lg:text-xl hover:scale-105 transition-transform duration-500 shadow-2xl">
              Agendar Avaliação
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

function TestimonialMedia({ testimonial, isPlaying, isMuted, toggleMute, index }: {
  testimonial: Testimonial,
  isPlaying: boolean,
  isMuted: boolean,
  toggleMute: (e: React.MouseEvent) => void,
  index: number
}) {
  return (
    <>
      {isPlaying && testimonial.videoUrl ? (
        <div className="absolute inset-0 bg-black z-40">
          <iframe
            src={`${testimonial.videoUrl}${testimonial.videoUrl.includes('?') ? '&' : '?'}autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&controls=0&modestbranding=1&rel=0`}
            className="w-full h-full pointer-events-none"
            allow="autoplay; fullscreen"
            style={{ transform: 'scale(1.5)' }}
          />
          <div className="absolute inset-0 bg-transparent z-10" />
          <button
            onClick={toggleMute}
            className="absolute top-8 right-8 z-50 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center border border-white/20 transition-all hover:bg-black/60 active:scale-90"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>
      ) : (
        <div className="absolute inset-0 z-0">
          <img
            src={TESTIMONIAL_IMAGES[index % TESTIMONIAL_IMAGES.length]}
            alt={testimonial.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[5s] ease-out"
          />
        </div>
      )}
    </>
  );
}
