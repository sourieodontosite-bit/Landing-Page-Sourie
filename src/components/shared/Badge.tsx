import { GoogleIcon } from './Icons';

interface BadgeProps {
  text: string;
  variant?: 'light' | 'google';
  icon?: React.ReactNode;
  className?: string;
}

/**
 * Badge/pill label used above section titles.
 * Light variant = translucent teal; Google variant = light blue with Google icon.
 */
export default function Badge({ text, variant = 'light', icon, className = '' }: BadgeProps) {
  const base = 'inline-flex items-center gap-2.5 px-6 py-2 font-semibold text-badge tracking-wide';

  const variants = {
    light: 'bg-badge-bg/30 border-2 border-badge-border rounded-badge text-navy-dark',
    google: 'bg-badge-google-bg border-[1.84px] border-badge-border rounded-[64.29px] text-text-secondary',
  };

  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {variant === 'google' && <GoogleIcon size={22} />}
      {icon}
      {text}
    </span>
  );
}
