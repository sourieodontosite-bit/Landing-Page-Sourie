import { WHATSAPP_LINK } from '../../utils/constants';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, WhatsAppIcon } from './Icons';

interface ButtonProps {
  text: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'white' | 'teal' | 'outline' | 'ghost' | 'cta';
  size?: 'sm' | 'md' | 'lg';
  icon?: 'whatsapp' | 'arrow-circle' | 'none';
  className?: string;
  onClick?: () => void;
}

export default function Button({
  text,
  href = WHATSAPP_LINK,
  variant = 'primary',
  size = 'md',
  icon = 'none',
  className = '',
  onClick,
}: ButtonProps) {
  const variants = {
    primary: 'bg-teal-primary text-white hover:bg-navy-dark shadow-teal',
    secondary: 'bg-teal-light text-teal-dark hover:bg-teal-primary hover:text-white shadow-sm',
    white: 'bg-white text-navy-dark hover:bg-teal-primary hover:text-white shadow-lg border border-stone-100',
    teal: 'bg-teal-dark text-white hover:bg-navy-dark shadow-teal',
    outline: 'border-2 border-teal-primary text-teal-primary hover:bg-teal-primary hover:text-white',
    ghost: 'text-teal-primary hover:bg-teal-primary/5',
    cta: 'bg-[#B8E3EC] text-navy-dark hover:bg-teal-primary hover:text-white shadow-lg border border-stone-100',
  };

  const sizes = {
    sm: 'pl-7 pr-1.5 py-1.5 text-base rounded-pill',
    md: 'px-8 py-3.5 text-lg rounded-pill',
    lg: 'pl-6 lg:pl-8 pr-1.5 lg:pr-2 py-1.5 lg:py-2 text-lg lg:text-[22px] rounded-pill',
  };

  const baseStyles = 'group inline-flex items-center justify-center font-bold tracking-[-0.05em] whitespace-nowrap transition-all duration-300 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-heading overflow-hidden';

  const content = (
    <>
      <span className="relative z-10 leading-none">{text}</span>
      {(icon === 'whatsapp' || icon === 'arrow-circle') && (
        <div className={`
          flex items-center justify-center rounded-full bg-navy-dark text-white shrink-0
          ${size === 'sm' ? 'w-9 h-9 ml-4' : 'w-11 h-11 lg:w-14 lg:h-14 ml-5 lg:ml-8'}
          transition-transform duration-300 group-hover:scale-105
        `}>
          {icon === 'whatsapp' && <WhatsAppIcon size={size === 'sm' ? 14 : 20} />}
          {icon === 'arrow-circle' && <ArrowRightIcon size={size === 'sm' ? 14 : 20} />}
        </div>
      )}
    </>
  );

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      >
        {content}
      </button>
    );
  }

  const isInternal = href.startsWith('/') || href.startsWith('#');

  if (isInternal) {
    return (
      <Link
        to={href}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {content}
    </a>
  );
}
