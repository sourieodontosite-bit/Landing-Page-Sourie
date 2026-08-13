import React, { useState, useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';

import { Menu, X, ArrowLeft, Stethoscope, Users, MessageSquareQuote, MapPin, ChevronRight, Home } from 'lucide-react';
import Button from './Button';
import { NAV_LINKS, buildWhatsAppLink, WA_MESSAGES } from '../../utils/constants';
import LogoImg from '../../assets/Logo.svg';

interface NavLinkProps {
  link: {
    label: string;
    href: string;
  };
  isDarkText: boolean;
  isActive: boolean;
  currentPath: string;
}

// Memoized sub-components for performance
const NavLink = React.memo(({ link, isDarkText, isActive, currentPath }: NavLinkProps) => {
  const handleAnchorClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith('/#') && currentPath === '/') {
      e.preventDefault();
      const sectionId = href.split('#')[1];
      if (sectionId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <div className="relative">
      <Link
        to={link.href}
        onClick={(e) => handleAnchorClick(e, link.href)}
        className={`flex items-center gap-1.5 px-5 py-1.5 rounded-full text-[14px] font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-primary ${isActive
          ? isDarkText
            ? 'bg-teal-primary/10 text-teal-primary shadow-none'
            : 'bg-white/90 text-navy-dark shadow-sm'
          : isDarkText
            ? 'text-text-primary hover:text-teal-primary hover:bg-teal-primary/5'
            : 'text-white hover:bg-white/10'
          }`}
      >
        <span>{link.label}</span>
      </Link>
    </div>
  );
});

NavLink.displayName = 'NavLink';

// ── Mobile menu rendered via Portal to avoid z-index/clipping issues ──────────
interface MobileMenuPortalProps {
  open: boolean;
  onClose: () => void;
  currentPath: string;
  isScrolled: boolean;
}

function MobileMenuPortal({ open, onClose, currentPath, isScrolled }: MobileMenuPortalProps) {
  const [visible, setVisible] = useState(open);

  useEffect(() => {
    if (open) setVisible(true);
  }, [open]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleTransitionEnd = () => {
    if (!open) setVisible(false);
  };

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith('/#') && currentPath === '/') {
      e.preventDefault();
      const sectionId = href.split('#')[1];
      if (sectionId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    onClose();
  };

  if (!visible && !open) return null;

  return createPortal(
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 lg:hidden transition-opacity duration-300"
        style={{
          zIndex: 9998,
          background: 'rgba(0,0,0,0.4)',
          backdropFilter: 'blur(8px)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none'
        }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Floating Menu Container */}
      <div
        className={`fixed inset-x-0 top-0 px-6 lg:hidden transition-all duration-500 ${isScrolled ? 'pt-[92px]' : 'pt-[112px]'}`}
        style={{ zIndex: 9999, pointerEvents: open ? 'auto' : 'none' }}
        onTransitionEnd={handleTransitionEnd}
      >
        <div
          className="bg-white rounded-[32px] shadow-2xl border border-stone-100 flex flex-col overflow-hidden origin-top"
          style={{
            maxHeight: 'calc(100dvh - 140px)',
            opacity: open ? 1 : 0,
            transform: open ? 'translateY(0) scale(1)' : 'translateY(-12px) scale(0.95)',
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* ── Header ── */}
          <div className="flex items-center justify-between px-6 pt-5 pb-2 shrink-0 border-b border-stone-100/80 mb-2">
            <span className="text-[12px] font-bold text-stone-400 uppercase tracking-[0.15em] select-none">Menu de Navegação</span>
            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-600 transition-colors pointer-events-auto"
              aria-label="Fechar menu"
            >
              <X size={18} />
            </button>
          </div>

          {/* ── Nav items ── */}
          <div className="overflow-y-auto px-4 pb-6 flex flex-col gap-2">
            {/* ── Item Início (Mobile-only) ── */}
            <div
              style={{
                opacity: open ? 1 : 0,
                transform: open ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 0.4s ease 0ms, transform 0.4s ease 0ms',
              }}
            >
              <Link
                to="/#hero"
                onClick={(e) => handleLinkClick(e, '/#hero')}
                className="flex items-center gap-3 px-4 py-4 rounded-3xl bg-stone-50/60 border border-stone-100 hover:border-teal-primary/30 hover:bg-teal-primary/[0.04] text-teal-dark transition-all duration-200 group"
              >
                <div className="w-9 h-9 rounded-2xl bg-white border border-stone-200 flex items-center justify-center text-teal-primary group-hover:bg-teal-primary group-hover:text-white group-hover:border-teal-primary transition-all duration-200">
                  <Home size={17} />
                </div>
                <span className="text-[16px] font-semibold group-hover:text-teal-primary transition-colors">Início</span>
                <ChevronRight size={16} className="ml-auto text-stone-300 group-hover:text-teal-primary transition-colors" />
              </Link>
            </div>

            {NAV_LINKS.map((link, idx) => {
              // Icon per link label
              const navIcon: Record<string, React.ElementType> = {
                'Procedimentos': Stethoscope,
                'Quem somos': Users,
                'Depoimentos': MessageSquareQuote,
                'Localização': MapPin,
              };
              const NavIcon = navIcon[link.label] ?? ChevronRight;

              return (
                <div
                  key={link.label}
                  style={{
                    opacity: open ? 1 : 0,
                    transform: open ? 'translateY(0)' : 'translateY(12px)',
                    transition: `opacity 0.4s ease ${(idx + 1) * 50}ms, transform 0.4s ease ${(idx + 1) * 50}ms`,
                  }}
                >
                  <Link
                    to={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="flex items-center gap-3 px-4 py-4 rounded-3xl bg-stone-50/60 border border-stone-100 hover:border-teal-primary/30 hover:bg-teal-primary/[0.04] text-teal-dark transition-all duration-200 group"
                  >
                    <div className="w-9 h-9 rounded-2xl bg-white border border-stone-200 flex items-center justify-center text-teal-primary group-hover:bg-teal-primary group-hover:text-white group-hover:border-teal-primary transition-all duration-200">
                      <NavIcon size={17} />
                    </div>
                    <span className="text-[16px] font-semibold group-hover:text-teal-primary transition-colors">{link.label}</span>
                    <ChevronRight size={16} className="ml-auto text-stone-300 group-hover:text-teal-primary transition-colors" />
                  </Link>
                </div>
              );
            })}

            {/* ── CTA ── */}
            <div
              className="mt-2"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? 'translateY(0)' : 'translateY(12px)',
                transition: `opacity 0.4s ease ${NAV_LINKS.length * 50}ms, transform 0.4s ease ${NAV_LINKS.length * 50}ms`,
              }}
            >
              <Button
                text="Agendar avaliação"
                variant="primary"
                size="md"
                href={buildWhatsAppLink(WA_MESSAGES.navbarMobile)}
                className="w-full"
                icon="whatsapp"
              />
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const location = useLocation();

  const navContainerRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const isDentistPage = location.pathname.startsWith('/equipe/');
  const isAboutPage = location.pathname === '/sobre';
  const isProcedurePage = location.pathname.startsWith('/p/');
  const isInternalPage = isProcedurePage || (location.pathname !== '/' && !isAboutPage && !isDentistPage);

  // These pages now have dark Hero backgrounds at the top
  const hasDarkHero = location.pathname === '/' || isAboutPage || isProcedurePage || isInternalPage;
  const isLightBg = !hasDarkHero;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isDarkText = isScrolled || isLightBg;

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setIsScrolled(currentScrollY > 50);
          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll spy logic
  useGSAP(() => {
    if (location.pathname !== '/') return;

    const initSpy = () => {
      const homeSections = ['hero', 'equipe', 'depoimentos', 'ambiente', 'servicos'];

      homeSections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (!element) return;

        // Prevent duplicates
        ScrollTrigger.getById(`spy-${sectionId}`)?.kill();

        ScrollTrigger.create({
          id: `spy-${sectionId}`,
          trigger: element,
          start: "top 50%",
          end: "bottom 50%",
          onToggle: (self) => {
            if (self.isActive) {
              setActiveSection(sectionId);
            }
          },
          onEnter: () => setActiveSection(sectionId),
          onEnterBack: () => setActiveSection(sectionId),
        });
      });
    };

    initSpy();

    // Re-run after a delay to ensure lazy-loaded sections are caught
    const timer = setTimeout(() => {
      initSpy();
      ScrollTrigger.refresh();
    }, 2000);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().filter(st => st.vars.id?.startsWith('spy-')).forEach(st => st.kill());
    };
  }, { dependencies: [location.pathname] });

  // Handle scroll gradient appearance
  useGSAP(() => {
    gsap.to(gradientRef.current, {
      opacity: isScrolled ? 1 : 0,
      duration: 0.5,
      ease: "power2.inOut"
    });
  }, { dependencies: [isScrolled] });

  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    // If there's history, go back; otherwise fall back to home
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <nav ref={navContainerRef} className={`fixed top-0 left-0 right-0 z-[10000] transition-all duration-700 pointer-events-none ${isScrolled || isLightBg ? 'py-4 lg:py-3' : 'py-6 lg:py-8'} translate-y-0`}>
        <div
          ref={gradientRef}
          className="absolute inset-x-0 top-0 h-24 lg:h-32 bg-gradient-to-b from-white/30 to-transparent pointer-events-none opacity-0"
        />

        <div className={`mx-auto px-6 sm:px-10 lg:px-[63px] pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isScrolled || isLightBg ? 'max-w-[1200px]' : 'max-w-[100%] w-full'}`}>
          <div className={`
            relative flex items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr]
            transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
            ${isScrolled || isLightBg
              ? 'bg-white/95 backdrop-blur-md shadow-lg rounded-full border border-stone-200 px-8 py-2.5 lg:py-1.5'
              : 'bg-transparent border-transparent px-0 py-3 lg:py-2'
            }
          `}>
            {(isProcedurePage || (isDentistPage && isMobile)) ? (
              <button
                onClick={handleBack}
                className="flex items-center gap-2 group justify-self-start lg:hidden"
                aria-label="Voltar para a página anterior"
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${isDarkText ? 'bg-teal-primary/10 group-hover:bg-teal-primary/20' : 'bg-white/20 group-hover:bg-white/30'}`}>
                  <ArrowLeft size={18} className={isDarkText ? 'text-teal-primary' : 'text-white'} />
                </div>
                <span className={`font-semibold text-[15px] tracking-tight transition-colors duration-300 ${isDarkText ? 'text-teal-primary' : 'text-white'}`}>
                  Voltar
                </span>
              </button>
            ) : null}

            <Link
              to="/"
              onClick={handleLogoClick}
              className={`flex items-center group justify-self-start ${(isProcedurePage || (isDentistPage && isMobile)) ? 'hidden lg:flex' : ''}`}
            >
              <div
                className={`transition-all duration-500 ${isDarkText ? 'bg-teal-primary' : 'bg-white'} logo-mask`}
                style={{
                  maskImage: `url(${LogoImg})`,
                  WebkitMaskImage: `url(${LogoImg})`,
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: 'left center',
                  WebkitMaskPosition: 'left center',
                  transform: `scale(${isScrolled || isLightBg ? 0.8 : 1})`,
                  transformOrigin: 'left center',
                }}
              />
            </Link>

            <div className={`hidden lg:flex items-center gap-0.5 justify-self-center p-1 rounded-full transition-all duration-500 ${!(isScrolled || isLightBg) ? 'bg-white/10 backdrop-blur-sm border border-white/20' : ''
              }`}>
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.split('#')[1];
                const isPathActive = location.pathname === link.href;
                const isSectionActive = location.pathname === '/' && activeSection === sectionId;
                const isActive = isPathActive || isSectionActive;

                return (
                  <NavLink
                    key={link.label}
                    link={link}
                    isDarkText={isDarkText}
                    isActive={isActive}
                    currentPath={location.pathname}
                  />
                );
              })}
            </div>

            <div className="hidden md:flex justify-self-end items-center gap-4">
              <Button
                text="Agende agora"
                icon="whatsapp"
                variant={isScrolled ? "teal" : isLightBg ? "primary" : "white"}
                size="sm"
                href={buildWhatsAppLink(WA_MESSAGES.navbar)}
                className="hidden md:flex"
              />

              <button
                className={`lg:hidden p-2 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-primary rounded-lg ${isDarkText ? 'text-teal-primary' : 'text-white'}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
              </button>
            </div>

            <button
              className={`md:hidden p-2 transition-colors duration-300 justify-self-end focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-primary rounded-lg ${isDarkText ? 'text-teal-primary' : 'text-white'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu via Portal — renders directly in document.body, no z-index conflicts */}
      <MobileMenuPortal
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        currentPath={location.pathname}
        isScrolled={isScrolled}
      />
    </>
  );
}
