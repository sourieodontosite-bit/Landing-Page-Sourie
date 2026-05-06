import React, { useState, useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, useLocation } from 'react-router-dom';

import { Menu, X, ChevronDown, ArrowLeft } from 'lucide-react';
import Button from './Button';
import { NAV_LINKS, WHATSAPP_LINK } from '../../utils/constants';
import LogoImg from '../../assets/Logo.svg';

interface NavLinkProps {
  link: {
    label: string;
    href: string;
    subLinks?: { label: string; href: string; icon?: React.ElementType }[];
  };
  isDarkText: boolean;
  activeDropdown: string | null;
  setActiveDropdown: (label: string | null) => void;
  isActive: boolean;
  currentPath: string;
}

// Memoized sub-components for performance
const NavLink = React.memo(({ link, isDarkText, activeDropdown, setActiveDropdown, isActive, currentPath }: NavLinkProps) => {
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
      setActiveDropdown(null);
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setActiveDropdown(link.label)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <Link
        to={link.href}
        onClick={(e) => handleAnchorClick(e, link.href)}
        className={`flex items-center gap-1.5 px-5 py-1.5 rounded-full text-[14px] font-semibold tracking-tight transition-all duration-300 ${isActive
          ? isDarkText
            ? 'bg-teal-primary/10 text-teal-primary shadow-none'
            : 'bg-white/90 text-navy-dark shadow-sm'
          : isDarkText
            ? 'text-text-primary hover:text-teal-primary hover:bg-teal-primary/5'
            : 'text-white hover:bg-white/10'
          }`}
      >
        {link.label}
      </Link>

      {/* Desktop Dropdown */}
      {link.subLinks && activeDropdown === link.label && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 z-50">
          <div className="bg-white rounded-3xl shadow-xl border border-stone-100 p-3 overflow-hidden flex flex-col gap-1">
            {link.subLinks.map((sub) => {
              const Icon = sub.icon;
              return (
              <Link
                key={sub.href}
                to={sub.href}
                onClick={(e) => handleAnchorClick(e, sub.href)}
                className="px-4 py-3 rounded-2xl text-[14px] font-medium text-text-primary hover:text-teal-primary hover:bg-teal-primary/5 transition-all duration-300 flex items-center justify-between group/item hover:pl-5"
              >
                <div className="flex items-center gap-3">
                  {Icon && <Icon size={16} className="text-teal-primary/60 group-hover/item:text-teal-primary transition-colors" />}
                  {sub.label}
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-teal-primary scale-0 group-hover/item:scale-100 transition-transform duration-300" />
              </Link>
            )})}
          </div>
        </div>
      )}
    </div>
  );
});

NavLink.displayName = 'NavLink';

interface MobileMenuOverlayProps {
  mobileMenuOpen: boolean;
  mobileMenuRef: React.RefObject<HTMLDivElement | null>;
  expandedMobile: string | null;
  setExpandedMobile: (label: string | null) => void;
  setMobileMenuOpen: (open: boolean) => void;
  currentPath: string;
}

const MobileMenuOverlay = React.memo(({ mobileMenuOpen, mobileMenuRef, expandedMobile, setExpandedMobile, setMobileMenuOpen, currentPath }: MobileMenuOverlayProps) => {
  const [shouldRender, setShouldRender] = useState(mobileMenuOpen);

  useEffect(() => {
    if (mobileMenuOpen) setShouldRender(true);
  }, [mobileMenuOpen]);

  const handleAnimationEnd = () => {
    if (!mobileMenuOpen) setShouldRender(false);
  };

  if (!shouldRender) return null;

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
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
    setMobileMenuOpen(false);
  };

  return (
    <div
      ref={mobileMenuRef}
      className={`absolute top-full left-4 right-4 mt-3 lg:hidden z-50 transition-all duration-300 ease-out transform ${mobileMenuOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'}`}
      onTransitionEnd={handleAnimationEnd}
    >
      <div className="bg-white/80 backdrop-blur-md rounded-[32px] shadow-xl border border-white/50 p-6 flex flex-col gap-2 relative overflow-hidden max-h-[80vh] overflow-y-auto">
        {NAV_LINKS.map((link, idx) => (
            <div 
              key={link.label} 
              className={`mobile-nav-item transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
            {link.subLinks ? (
              <div className="space-y-1">
                <div
                  className="w-full flex items-center justify-between text-lg font-medium text-teal-dark px-3 py-2 rounded-2xl hover:bg-stone-50 transition-colors cursor-pointer"
                  onClick={() => setExpandedMobile(expandedMobile === link.label ? null : link.label)}
                >
                  <Link
                    to={link.href}
                    className="flex-grow"
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    {link.label}
                  </Link>
                  <div
                    className="p-2 -mr-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedMobile(expandedMobile === link.label ? null : link.label);
                    }}
                  >
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${expandedMobile === link.label ? 'rotate-180' : ''}`}
                    />
                  </div>
                </div>
                {expandedMobile === link.label && (
                  <div className="overflow-hidden pl-4">
                    {link.subLinks.map((sub) => {
                      const Icon = sub.icon;
                      return (
                      <Link
                        key={sub.href}
                        to={sub.href}
                        onClick={(e) => handleLinkClick(e, sub.href)}
                        className="flex items-center gap-3 py-2.5 px-3 text-[16px] text-text-primary hover:text-teal-primary transition-colors border-l border-stone-100 ml-2"
                      >
                        {Icon && <Icon size={16} className="text-teal-primary/60" />}
                        {sub.label}
                      </Link>
                    )})}
                  </div>
                )}
              </div>
            ) : (
              <Link
                to={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-lg font-medium text-teal-dark hover:text-teal-primary transition-colors px-3 py-2 block"
              >
                {link.label}
              </Link>
            )}
          </div>
        ))}
        <div 
          className={`my-2 border-t border-stone-100 pt-4 mobile-nav-item transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: `${NAV_LINKS.length * 50}ms` }}
        >
          <Button
            text="Agendar avaliação"
            variant="primary"
            size="md"
            href={WHATSAPP_LINK}
            className="w-full"
            icon="whatsapp"
          />
        </div>
      </div>
    </div>
  );
});

MobileMenuOverlay.displayName = 'MobileMenuOverlay';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const location = useLocation();

  const navContainerRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const isDentistPage = location.pathname.startsWith('/equipe/');
  const isAboutPage = location.pathname === '/sobre';
  const isProcedurePage = location.pathname.startsWith('/p/');
  const isInternalPage = isProcedurePage || (location.pathname !== '/' && !isAboutPage && !isDentistPage);
  
  // These pages now have dark Hero backgrounds at the top
  const hasDarkHero = location.pathname === '/' || isInternalPage || (isDentistPage && isMobile);
  const isLightBg = !hasDarkHero && !isAboutPage;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const isDarkText = isScrolled || (isLightBg && !(isDentistPage && !isScrolled && isMobile));

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

  // Removed GSAP mobile menu animation in favor of pure CSS transitions

  // Scroll spy logic
  useGSAP(() => {
    if (location.pathname !== '/') return;

    const initSpy = () => {
      const homeSections = ['hero', 'equipe', 'sobre', 'servicos', 'depoimentos', 'ambiente'];

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

  return (
    <nav ref={navContainerRef} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 pointer-events-none ${isScrolled ? 'py-4 lg:py-3' : 'py-6 lg:py-8'} translate-y-0`}>
      <div
        ref={gradientRef}
        className="absolute inset-x-0 top-0 h-24 lg:h-32 bg-gradient-to-b from-white/30 to-transparent pointer-events-none opacity-0"
      />

      {/* Mobile-only teal gradient for DentistPage when not scrolled */}
      {isDentistPage && !isScrolled && (
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-teal-dark/60 to-transparent lg:hidden pointer-events-none" />
      )}

      <div className={`mx-auto px-6 sm:px-10 lg:px-container-x pointer-events-auto transition-[max-width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isScrolled ? 'max-w-[1200px]' : 'max-w-page'}`}>
        <div className={`
          relative flex items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr]
          transition-[background-color,box-shadow,border-radius,border-color,padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg rounded-full border border-stone-200 px-8 py-2.5 lg:py-1.5'
            : 'bg-transparent border-transparent px-0 py-3 lg:py-2'
          }
        `}>
          {(isProcedurePage || (isDentistPage && isMobile)) ? (
            <Link to={isProcedurePage ? "/#servicos" : "/#equipe"} className="flex items-center gap-2 group justify-self-start md:hidden">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-500 ${isScrolled ? 'bg-teal-primary/10' : 'bg-white/20'}`}>
                <ArrowLeft size={18} className={isScrolled ? 'text-teal-primary' : 'text-white'} />
              </div>
              <span className={`font-semibold text-lg tracking-tight transition-colors duration-500 ${isScrolled ? 'text-teal-primary' : 'text-white'}`}>
                Voltar
              </span>
            </Link>
          ) : null}

          <Link to="/" className={`flex items-center group justify-self-start ${(isProcedurePage || (isDentistPage && isMobile)) ? 'hidden md:flex' : ''}`}>
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
                transform: `scale(${isScrolled ? 0.8 : 1})`,
                transformOrigin: 'left center',
              }}
            />
          </Link>

          <div className={`hidden lg:flex items-center gap-0.5 justify-self-center p-1 rounded-full transition-all duration-500 ${!isScrolled ? 'bg-white/10 backdrop-blur-sm border border-white/20' : ''
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
                  activeDropdown={activeDropdown}
                  setActiveDropdown={setActiveDropdown}
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
              href={WHATSAPP_LINK}
              className="hidden md:flex"
            />

            <button
              className={`lg:hidden p-2 transition-colors duration-300 ${isDarkText ? 'text-teal-primary' : 'text-white'
                }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
            </button>
          </div>

          <button
            className={`md:hidden p-2 transition-colors duration-300 justify-self-end ${isScrolled ? 'text-teal-primary' : 'text-white'
              }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
          </button>
        </div>

        <MobileMenuOverlay
          mobileMenuOpen={mobileMenuOpen}
          mobileMenuRef={mobileMenuRef}
          expandedMobile={expandedMobile}
          setExpandedMobile={setExpandedMobile}
          setMobileMenuOpen={setMobileMenuOpen}
          currentPath={location.pathname}
        />
      </div>
    </nav>
  );
}
