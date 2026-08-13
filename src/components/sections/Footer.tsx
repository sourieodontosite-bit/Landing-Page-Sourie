import { FOOTER_COLUMNS, CONTACT_INFO, SOCIAL_LINKS } from '../../utils/constants';
import { Link } from 'react-router-dom';
import { InstagramIcon, FacebookIcon, WhatsAppIcon, ArrowRightIcon } from '../shared/Icons';
import FooterLogoImg from '../../assets/Logo.svg';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-item', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        }
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'Instagram': return <InstagramIcon size={20} />;
      case 'Facebook': return <FacebookIcon size={20} />;
      case 'WhatsApp': return <WhatsAppIcon size={20} />;
      default: return null;
    }
  };

  return (
    <footer ref={footerRef} className="w-full pt-20 sm:pt-32">
      <div 
        ref={containerRef}
        className="px-8 sm:px-12 lg:px-20 pt-24 lg:pt-36 pb-12 relative overflow-hidden flex flex-col items-center shadow-2xl bg-gradient-to-br from-navy-dark via-navy-dark to-[#091E2A]"
      >
        {/* Subtle Decorative Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-primary/10 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-light/5 blur-[120px] rounded-full translate-y-1/2 pointer-events-none" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-16 lg:gap-16 w-full max-w-page mx-auto mb-24 relative z-10">
          {/* Brand & Social Column */}
          <div className="footer-item lg:col-span-1">
            <p className="text-white/60 text-[15px] leading-relaxed mb-10 max-w-[260px]">
              Odontologia moderna em Nova Era, unindo tecnologia de ponta e cuidado humanizado.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-navy-dark transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
                  aria-label={social.platform}
                >
                  {getSocialIcon(social.platform)}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="footer-item">
              <h3 className="text-sm font-bold text-white/90 mb-10 tracking-[0.2em] uppercase">{column.title}</h3>
              <ul className="space-y-5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('http') ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[15px] text-white/60 hover:text-white transition-all duration-300 flex items-center group w-fit"
                      >
                        <span className="relative">
                          {link.label}
                          <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-teal-medium transition-all duration-300 group-hover:w-full" />
                        </span>
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-[15px] text-white/60 hover:text-white transition-all duration-300 flex items-center group w-fit"
                      >
                        <span className="relative">
                          {link.label}
                          <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-teal-medium transition-all duration-300 group-hover:w-full" />
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Hours & Contact Info */}
          <div className="footer-item sm:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-bold text-white/90 mb-10 tracking-[0.2em] uppercase">Contato</h3>
            <ul className="space-y-8">
              <li className="flex flex-col gap-2">
                <span className="text-[11px] text-white/30 uppercase font-black tracking-[0.25em]">Onde Estamos</span>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[15px] text-white/70 hover:text-white transition-colors leading-relaxed"
                >
                  {CONTACT_INFO.address.split('/').map((part, i) => (
                    <span key={i} className="block">{part.trim()}</span>
                  ))}
                </a>
              </li>
              <li className="flex flex-col gap-2">
                <span className="text-[11px] text-white/30 uppercase font-black tracking-[0.25em]">Atendimento</span>
                <div className="flex flex-col gap-3 mt-1">
                  {CONTACT_INFO.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\D/g, '')}`}
                      className="text-[15px] text-white/70 hover:text-white transition-colors font-medium"
                    >
                      {phone}
                    </a>
                  ))}
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-[15px] text-white/70 hover:text-white transition-colors underline decoration-teal-medium/30 underline-offset-4"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Back to Top */}
        <div className="w-full relative flex flex-col items-center mt-12">
          <button 
            onClick={scrollToTop}
            className="absolute -top-20 right-0 sm:right-4 w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-navy-dark transition-all duration-500 group z-20 shadow-xl overflow-hidden"
            aria-label="Voltar ao topo"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-medium to-cyan-light opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <ArrowRightIcon className="-rotate-90 relative z-10 group-hover:-translate-y-1 transition-transform duration-500" size={24} />
          </button>
        </div>

        <div className="w-full flex justify-center mt-0 sm:mt-0 relative z-10 -mx-0 sm:-mx-0 lg:-mx-0">
          <div className="w-full max-w-none">
            <div
              className="relative w-full h-[280px] sm:h-[400px] lg:h-[540px] transition-transform duration-500"
              style={{
                maskImage: `url('${FooterLogoImg}')`,
                WebkitMaskImage: `url('${FooterLogoImg}')`,
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskPosition: 'center',
                backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.92) 45%, rgba(255,255,255,1) 100%)',
                backgroundSize: '100% 200%',
                backgroundPosition: '0% 100%',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/80 to-cyan-light/40 opacity-90" />
              <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(221,248,255,0.3) 0%, transparent 70%)' }} />
            </div>
          </div>
        </div>

        <nav aria-label="Links legais" className="w-full relative z-10 mt-4">
          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
            <li>
              <Link to="/politica-de-privacidade" className="text-[13px] font-medium text-white/75 hover:text-white transition-colors underline-offset-4 hover:underline">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link to="/termos-de-uso" className="text-[13px] font-medium text-white/75 hover:text-white transition-colors underline-offset-4 hover:underline">
                Termos de Uso
              </Link>
            </li>
          </ul>
        </nav>

        {/* Bottom Bar */}
        <div className="w-full border-t border-white/5 pt-8 mt-6 sm:mt-10 flex flex-col md:flex-row items-center justify-center gap-8 relative z-10 text-[13px] text-white/30 font-medium tracking-wide">
          <p className="text-center">
            © {new Date().getFullYear()} Souriê Odontologia Integrada. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
