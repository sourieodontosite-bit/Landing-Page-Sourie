interface IllustrationProps {
  className?: string;
  size?: number;
}

export function AlinhadoresIllustration({ className = '', size = 120 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" className={className}>
      {/* Glow background */}
      <circle cx="80" cy="80" r="65" fill="#4ECDC4" opacity="0.15" />
      
      {/* Aligner Clear Shell */}
      <path d="M40 70C40 45 60 38 80 38C100 38 120 45 120 70C120 95 105 122 80 122C55 122 40 95 40 70Z" 
            fill="#A9F5E8" opacity="0.3" stroke="#4ECDC4" strokeWidth="3" strokeDasharray="6 4" />
      
      {/* Cute Tooth Character */}
      <path d="M52 65C52 50 64 44 80 44C96 44 108 50 108 65C108 78 104 95 96 110C92 118 87 116 84 108C82 103 78 103 76 108C73 116 68 118 64 110C56 95 52 78 52 65Z" 
            fill="white" stroke="#0B2545" strokeWidth="4" strokeLinejoin="round" />
      
      {/* Blush Cheeks */}
      <ellipse cx="64" cy="72" rx="5" ry="3" fill="#FF85A1" opacity="0.6" />
      <ellipse cx="96" cy="72" rx="5" ry="3" fill="#FF85A1" opacity="0.6" />
      
      {/* Eyes */}
      <circle cx="68" cy="65" r="4" fill="#0B2545" />
      <circle cx="92" cy="65" r="4" fill="#0B2545" />
      <circle cx="70" cy="63" r="1.5" fill="white" />
      <circle cx="94" cy="63" r="1.5" fill="white" />
      
      {/* Big Smile */}
      <path d="M72 75C75 80 85 80 88 75" stroke="#0B2545" strokeWidth="3" strokeLinecap="round" />
      
      {/* Shiny Aligners Overlay */}
      <path d="M48 60C60 52 100 52 112 60" stroke="#00A896" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
      <path d="M46 72C60 65 100 65 114 72" stroke="#00A896" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
      
      {/* Sparkles */}
      <path d="M125 45L128 53L136 56L128 59L125 67L122 59L114 56L122 53Z" fill="#FFD166" />
      <path d="M30 85L32 90L37 92L32 94L30 99L28 94L23 92L28 90Z" fill="#FFD166" opacity="0.8" />
    </svg>
  );
}

export function EscaneamentoIllustration({ className = '', size = 120 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" className={className}>
      <circle cx="80" cy="80" r="65" fill="#00A896" opacity="0.15" />
      
      {/* 3D Grid Waves */}
      <path d="M30 60 Q80 40 130 60" stroke="#4ECDC4" strokeWidth="2" opacity="0.5" strokeDasharray="4 4" />
      <path d="M30 80 Q80 60 130 80" stroke="#4ECDC4" strokeWidth="2" opacity="0.7" strokeDasharray="4 4" />
      <path d="M30 100 Q80 80 130 100" stroke="#4ECDC4" strokeWidth="2" opacity="0.5" strokeDasharray="4 4" />
      
      {/* Tooth Character */}
      <path d="M52 65C52 50 64 44 80 44C96 44 108 50 108 65C108 78 104 95 96 110C92 118 87 116 84 108C82 103 78 103 76 108C73 116 68 118 64 110C56 95 52 78 52 65Z" 
            fill="white" stroke="#0B2545" strokeWidth="4" />
      
      {/* Winking eye & Smile */}
      <circle cx="68" cy="65" r="4" fill="#0B2545" />
      <path d="M88 65 Q92 60 96 65" stroke="#0B2545" strokeWidth="3" strokeLinecap="round" />
      <path d="M72 75 Q80 82 88 75" stroke="#0B2545" strokeWidth="3" strokeLinecap="round" />
      
      {/* 3D Scanner Wand */}
      <rect x="95" y="25" width="22" height="45" rx="6" fill="#0B2545" transform="rotate(25 95 25)" />
      <rect x="100" y="22" width="12" height="15" rx="3" fill="#4ECDC4" transform="rotate(25 95 25)" />
      
      {/* Laser Scan Beam */}
      <polygon points="85,55 120,38 105,75" fill="#4ECDC4" opacity="0.4" />
      <line x1="60" y1="70" x2="110" y2="50" stroke="#FFD166" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function AparelhoInfantilIllustration({ className = '', size = 120 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" className={className}>
      <circle cx="80" cy="80" r="65" fill="#FF85A1" opacity="0.15" />
      
      {/* Superhero Cape */}
      <path d="M45 65C30 85 35 125 55 125C65 125 75 115 80 110C85 115 95 125 105 125C125 125 130 85 115 65Z" 
            fill="#FF85A1" stroke="#0B2545" strokeWidth="3" />
      
      {/* Cute Tooth Character */}
      <path d="M52 60C52 45 64 39 80 39C96 39 108 45 108 60C108 73 104 90 96 105C92 113 87 111 84 103C82 98 78 98 76 103C73 111 68 113 64 105C56 90 52 73 52 60Z" 
            fill="white" stroke="#0B2545" strokeWidth="4" />
      
      {/* Big Happy Eyes */}
      <circle cx="68" cy="58" r="5" fill="#0B2545" />
      <circle cx="92" cy="58" r="5" fill="#0B2545" />
      <circle cx="70" cy="56" r="2" fill="white" />
      <circle cx="94" cy="56" r="2" fill="white" />
      <ellipse cx="62" cy="65" rx="5" ry="3" fill="#FF85A1" opacity="0.7" />
      <ellipse cx="98" cy="65" rx="5" ry="3" fill="#FF85A1" opacity="0.7" />
      
      {/* Braces with Colorful Star Bracket */}
      <line x1="56" y1="72" x2="104" y2="72" stroke="#0B2545" strokeWidth="3" />
      <rect x="63" y="68" width="8" height="8" rx="2" fill="#4ECDC4" stroke="#0B2545" strokeWidth="2" />
      <rect x="76" y="68" width="8" height="8" rx="2" fill="#FFD166" stroke="#0B2545" strokeWidth="2" />
      <rect x="89" y="68" width="8" height="8" rx="2" fill="#FF85A1" stroke="#0B2545" strokeWidth="2" />
    </svg>
  );
}

export function SafiraIllustration({ className = '', size = 120 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" className={className}>
      <circle cx="80" cy="80" r="65" fill="#FFD166" opacity="0.15" />
      
      {/* Tooth Character */}
      <path d="M52 60C52 45 64 39 80 39C96 39 108 45 108 60C108 73 104 90 96 105C92 113 87 111 84 103C82 98 78 98 76 103C73 111 68 113 64 105C56 90 52 73 52 60Z" 
            fill="white" stroke="#0B2545" strokeWidth="4" />
      
      {/* Eyes & Smile */}
      <circle cx="68" cy="58" r="4.5" fill="#0B2545" />
      <circle cx="92" cy="58" r="4.5" fill="#0B2545" />
      <path d="M72 68C75 73 85 73 88 68" stroke="#0B2545" strokeWidth="3" strokeLinecap="round" />
      
      {/* Sapphire Crystal Gem Brackets */}
      <polygon points="80,72 88,78 80,84 72,78" fill="#A9F5E8" stroke="#00A896" strokeWidth="2" />
      <polygon points="58,72 64,77 58,82 52,77" fill="#A9F5E8" stroke="#00A896" strokeWidth="2" />
      <polygon points="102,72 108,77 102,82 96,77" fill="#A9F5E8" stroke="#00A896" strokeWidth="2" />
      <line x1="50" y1="77" x2="110" y2="77" stroke="#4ECDC4" strokeWidth="2.5" opacity="0.8" />
      
      {/* Diamond Sparkles */}
      <path d="M35 45L38 52L45 55L38 58L35 65L32 58L25 55L32 52Z" fill="#FFD166" />
      <path d="M125 75L127 80L132 82L127 84L125 89L123 84L118 82L123 80Z" fill="#FFD166" />
    </svg>
  );
}

export function CheckupIllustration({ className = '', size = 120 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" className={className}>
      <circle cx="80" cy="80" r="65" fill="#00A896" opacity="0.15" />
      
      {/* Tooth Character */}
      <path d="M52 65C52 50 64 44 80 44C96 44 108 50 108 65C108 78 104 95 96 110C92 118 87 116 84 108C82 103 78 103 76 108C73 116 68 118 64 110C56 95 52 78 52 65Z" 
            fill="white" stroke="#0B2545" strokeWidth="4" />
      
      {/* Happy Face */}
      <circle cx="68" cy="65" r="4" fill="#0B2545" />
      <circle cx="92" cy="65" r="4" fill="#0B2545" />
      <path d="M72 74 Q80 81 88 74" stroke="#0B2545" strokeWidth="3" strokeLinecap="round" />
      
      {/* HD Magnifying Glass / Camera Scanner */}
      <circle cx="105" cy="55" r="22" fill="#4ECDC4" opacity="0.2" stroke="#0B2545" strokeWidth="4" />
      <circle cx="105" cy="55" r="16" stroke="#00A896" strokeWidth="3" strokeDasharray="4 3" />
      <line x1="120" y1="70" x2="138" y2="88" stroke="#0B2545" strokeWidth="6" strokeLinecap="round" />
      
      {/* HD Badge */}
      <rect x="94" y="48" width="22" height="14" rx="3" fill="#0B2545" />
      <text x="97" y="59" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">HD</text>
    </svg>
  );
}

export function LimpezaIllustration({ className = '', size = 120 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" className={className}>
      <circle cx="80" cy="80" r="65" fill="#4ECDC4" opacity="0.15" />
      
      {/* Tooth Character in Water */}
      <path d="M52 65C52 50 64 44 80 44C96 44 108 50 108 65C108 78 104 95 96 110C92 118 87 116 84 108C82 103 78 103 76 108C73 116 68 118 64 110C56 95 52 78 52 65Z" 
            fill="white" stroke="#0B2545" strokeWidth="4" />
      
      {/* Relaxed Face */}
      <path d="M64 63 Q68 58 72 63" stroke="#0B2545" strokeWidth="3" strokeLinecap="round" />
      <path d="M88 63 Q92 58 96 63" stroke="#0B2545" strokeWidth="3" strokeLinecap="round" />
      <path d="M74 74 Q80 79 86 74" stroke="#0B2545" strokeWidth="3" strokeLinecap="round" />
      
      {/* Water Spray Shower */}
      <path d="M35 30 L55 50" stroke="#00A896" strokeWidth="4" strokeLinecap="round" />
      <circle cx="60" cy="53" r="4" fill="#4ECDC4" />
      <circle cx="50" cy="42" r="3" fill="#4ECDC4" />
      <circle cx="70" cy="45" r="5" fill="#A9F5E8" />
      
      {/* Soap Bubbles */}
      <circle cx="42" cy="75" r="6" fill="#A9F5E8" stroke="#00A896" strokeWidth="1.5" opacity="0.8" />
      <circle cx="112" cy="85" r="8" fill="#A9F5E8" stroke="#00A896" strokeWidth="1.5" opacity="0.8" />
      <circle cx="104" cy="45" r="5" fill="#A9F5E8" stroke="#00A896" strokeWidth="1.5" opacity="0.8" />
    </svg>
  );
}

export function RestauracaoIllustration({ className = '', size = 120 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" className={className}>
      <circle cx="80" cy="80" r="65" fill="#FFD166" opacity="0.15" />
      
      {/* Tooth Character */}
      <path d="M52 60C52 45 64 39 80 39C96 39 108 45 108 60C108 73 104 90 96 105C92 113 87 111 84 103C82 98 78 98 76 103C73 111 68 113 64 105C56 90 52 73 52 60Z" 
            fill="white" stroke="#0B2545" strokeWidth="4" />
      
      {/* Eyes & Smile */}
      <circle cx="68" cy="58" r="4" fill="#0B2545" />
      <circle cx="92" cy="58" r="4" fill="#0B2545" />
      <path d="M73 68 Q80 74 87 68" stroke="#0B2545" strokeWidth="3" strokeLinecap="round" />
      
      {/* Paint Brush Restoring Natural Tooth */}
      <path d="M125 30L95 60L85 50L115 20Z" fill="#0B2545" />
      <path d="M85 50L75 62C72 65 74 70 78 68L90 60Z" fill="#FFD166" />
      
      {/* Sparkle Glow on Restoration */}
      <path d="M60 48L62 53L67 55L62 57L60 62L58 57L53 55L58 53Z" fill="#FFD166" />
    </svg>
  );
}

export function GengivaIllustration({ className = '', size = 120 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" className={className}>
      <circle cx="80" cy="80" r="65" fill="#FF85A1" opacity="0.15" />
      
      {/* Soft Pink Heart Gum Cushion */}
      <path d="M80 135 C40 110 30 85 45 70 C58 58 75 70 80 78 C85 70 102 58 115 70 C130 85 120 110 80 135 Z" 
            fill="#FF85A1" opacity="0.7" stroke="#0B2545" strokeWidth="3" />
      
      {/* Tooth Sitting Comfortably */}
      <path d="M56 50C56 38 66 33 80 33C94 33 104 38 104 50C104 60 100 75 94 88C90 94 86 92 83 86C81 82 79 82 77 86C74 92 70 94 66 88C60 75 56 60 56 50Z" 
            fill="white" stroke="#0B2545" strokeWidth="4" />
      
      {/* Happy Face */}
      <circle cx="70" cy="48" r="3.5" fill="#0B2545" />
      <circle cx="90" cy="48" r="3.5" fill="#0B2545" />
      <path d="M74 56 Q80 61 86 56" stroke="#0B2545" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function FacetasIllustration({ className = '', size = 120 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" className={className}>
      <circle cx="80" cy="80" r="65" fill="#4ECDC4" opacity="0.15" />
      
      {/* Tooth Character with Shiny Porcelain Shield */}
      <path d="M52 60C52 45 64 39 80 39C96 39 108 45 108 60C108 73 104 90 96 105C92 113 87 111 84 103C82 98 78 98 76 103C73 111 68 113 64 105C56 90 52 73 52 60Z" 
            fill="white" stroke="#0B2545" strokeWidth="4" />
      
      {/* Porcelain Veneer Shell Fitting On Top */}
      <path d="M46 55C46 38 60 32 80 32C100 32 114 38 114 55C114 70 108 85 98 98C93 104 88 102 85 95" 
            fill="#A9F5E8" opacity="0.4" stroke="#00A896" strokeWidth="3" strokeDasharray="5 3" />
      
      {/* Face with Big Proud Smile */}
      <circle cx="68" cy="58" r="4.5" fill="#0B2545" />
      <circle cx="92" cy="58" r="4.5" fill="#0B2545" />
      <path d="M70 68 C75 76 85 76 90 68" stroke="#0B2545" strokeWidth="3" strokeLinecap="round" />
      
      {/* Golden Crown Sparkles */}
      <path d="M80 20L83 27L90 30L83 33L80 40L77 33L70 30L77 27Z" fill="#FFD166" />
      <path d="M125 50L127 55L132 57L127 59L125 64L123 59L118 57L123 55Z" fill="#FFD166" />
    </svg>
  );
}

export function ClareamentoIllustration({ className = '', size = 120 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" className={className}>
      <circle cx="80" cy="80" r="65" fill="#FFD166" opacity="0.15" />
      
      {/* Tooth Character wearing Sunglasses */}
      <path d="M52 60C52 45 64 39 80 39C96 39 108 45 108 60C108 73 104 90 96 105C92 113 87 111 84 103C82 98 78 98 76 103C73 111 68 113 64 105C56 90 52 73 52 60Z" 
            fill="white" stroke="#0B2545" strokeWidth="4" />
      
      {/* Cool Sunglasses */}
      <rect x="58" y="52" width="20" height="14" rx="4" fill="#0B2545" />
      <rect x="82" y="52" width="20" height="14" rx="4" fill="#0B2545" />
      <line x1="78" y1="58" x2="82" y2="58" stroke="#0B2545" strokeWidth="3" />
      <line x1="60" y1="55" x2="68" y2="63" stroke="white" strokeWidth="2" opacity="0.6" />
      <line x1="84" y1="55" x2="92" y2="63" stroke="white" strokeWidth="2" opacity="0.6" />
      
      {/* Smile */}
      <path d="M72 73 Q80 80 88 73" stroke="#0B2545" strokeWidth="3" strokeLinecap="round" />
      
      {/* Sun / Whitening Rays */}
      <path d="M80 15 L80 25 M35 30 L43 36 M125 30 L117 36" stroke="#FFD166" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function HarmonizacaoIllustration({ className = '', size = 120 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" className={className}>
      <circle cx="80" cy="80" r="65" fill="#FF85A1" opacity="0.15" />
      
      {/* Tooth Character */}
      <path d="M52 60C52 45 64 39 80 39C96 39 108 45 108 60C108 73 104 90 96 105C92 113 87 111 84 103C82 98 78 98 76 103C73 111 68 113 64 105C56 90 52 73 52 60Z" 
            fill="white" stroke="#0B2545" strokeWidth="4" />
      
      {/* Golden Ratio Facial Symmetry Guide */}
      <ellipse cx="80" cy="72" rx="42" ry="52" stroke="#FFD166" strokeWidth="2" strokeDasharray="5 3" />
      <line x1="80" y1="20" x2="80" y2="124" stroke="#FFD166" strokeWidth="1.5" strokeDasharray="3 3" />
      
      {/* Cute Wink & Smile */}
      <circle cx="68" cy="58" r="4" fill="#0B2545" />
      <path d="M88 58 Q92 53 96 58" stroke="#0B2545" strokeWidth="3" strokeLinecap="round" />
      <path d="M72 68 Q80 75 88 68" stroke="#0B2545" strokeWidth="3" strokeLinecap="round" />
      
      {/* Floating Sparkle Hearts */}
      <path d="M125 40C125 35 132 35 135 40C138 35 145 35 145 40C145 48 135 55 135 55C135 55 125 48 125 40Z" fill="#FF85A1" />
    </svg>
  );
}

export function ResinaDirectIllustration({ className = '', size = 120 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" className={className}>
      <circle cx="80" cy="80" r="65" fill="#00A896" opacity="0.15" />
      
      {/* Tooth Character */}
      <path d="M52 60C52 45 64 39 80 39C96 39 108 45 108 60C108 73 104 90 96 105C92 113 87 111 84 103C82 98 78 98 76 103C73 111 68 113 64 105C56 90 52 73 52 60Z" 
            fill="white" stroke="#0B2545" strokeWidth="4" />
      
      <circle cx="68" cy="58" r="4" fill="#0B2545" />
      <circle cx="92" cy="58" r="4" fill="#0B2545" />
      <path d="M72 68 Q80 74 88 68" stroke="#0B2545" strokeWidth="3" strokeLinecap="round" />
      
      {/* Precision Sculpting Wand */}
      <path d="M135 25 L90 70 L80 65 L125 20 Z" fill="#0B2545" />
      <circle cx="80" cy="65" r="5" fill="#4ECDC4" />
      <path d="M40 70 L75 65" stroke="#4ECDC4" strokeWidth="3" strokeDasharray="3 3" />
    </svg>
  );
}

export function CanalIllustration({ className = '', size = 120 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" className={className}>
      <circle cx="80" cy="80" r="65" fill="#00A896" opacity="0.15" />
      
      {/* Tooth Superhero with Shield */}
      <path d="M52 60C52 45 64 39 80 39C96 39 108 45 108 60C108 73 104 90 96 105C92 113 87 111 84 103C82 98 78 98 76 103C73 111 68 113 64 105C56 90 52 73 52 60Z" 
            fill="white" stroke="#0B2545" strokeWidth="4" />
      
      <circle cx="68" cy="58" r="4" fill="#0B2545" />
      <circle cx="92" cy="58" r="4" fill="#0B2545" />
      <path d="M72 68 Q80 74 88 68" stroke="#0B2545" strokeWidth="3" strokeLinecap="round" />
      
      {/* Golden Shield */}
      <path d="M80 75 C100 75 110 85 110 105 C110 120 80 135 80 135 C80 135 50 120 50 105 C50 85 60 75 80 75 Z" 
            fill="#FFD166" stroke="#0B2545" strokeWidth="3" />
      <path d="M75 100 L80 105 L90 95" stroke="#0B2545" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SisoIllustration({ className = '', size = 120 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" className={className}>
      <circle cx="80" cy="80" r="65" fill="#4ECDC4" opacity="0.15" />
      
      {/* Wise Siso Tooth with Graduation Cap */}
      <path d="M52 65C52 50 64 44 80 44C96 44 108 50 108 65C108 78 104 95 96 110C92 118 87 116 84 108C82 103 78 103 76 108C73 116 68 118 64 110C56 95 52 78 52 65Z" 
            fill="white" stroke="#0B2545" strokeWidth="4" />
      
      {/* Graduation Cap */}
      <polygon points="80,25 115,38 80,50 45,38" fill="#0B2545" />
      <rect x="72" y="44" width="16" height="10" fill="#0B2545" />
      <line x1="105" y1="42" x2="112" y2="58" stroke="#FFD166" strokeWidth="3" />
      
      {/* Smart Glasses & Smile */}
      <circle cx="68" cy="65" r="7" stroke="#0B2545" strokeWidth="2.5" fill="none" />
      <circle cx="92" cy="65" r="7" stroke="#0B2545" strokeWidth="2.5" fill="none" />
      <line x1="75" y1="65" x2="85" y2="65" stroke="#0B2545" strokeWidth="2" />
      <path d="M74 76 Q80 81 86 76" stroke="#0B2545" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function AnestesiaIllustration({ className = '', size = 120 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" className={className}>
      <circle cx="80" cy="80" r="65" fill="#4ECDC4" opacity="0.15" />
      
      {/* Sleeping Cloud Cushion */}
      <path d="M40 110 C25 110 20 95 32 85 C25 70 45 60 60 70 C70 55 95 55 105 70 C120 60 140 70 132 85 C145 95 135 110 120 110 Z" 
            fill="white" opacity="0.8" stroke="#4ECDC4" strokeWidth="3" />
      
      {/* Sleeping Tooth */}
      <path d="M60 55C60 42 70 38 80 38C90 38 100 42 100 55C100 65 97 80 92 90C88 95 85 93 83 88C81 84 79 84 77 88C75 93 72 95 68 90C63 80 60 65 60 55Z" 
            fill="white" stroke="#0B2545" strokeWidth="3.5" />
      
      {/* Sleeping Eyes (Closed Arcs) */}
      <path d="M68 56 Q72 61 76 56" stroke="#0B2545" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M84 56 Q88 61 92 56" stroke="#0B2545" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="80" cy="65" r="2.5" fill="#FF85A1" />
      
      {/* Sleep ZZZs */}
      <text x="110" y="45" fill="#FFD166" fontSize="20" fontWeight="bold" fontFamily="sans-serif">z</text>
      <text x="122" y="32" fill="#FFD166" fontSize="15" fontWeight="bold" fontFamily="sans-serif">Z</text>
    </svg>
  );
}

export function ImplantesIllustration({ className = '', size = 120 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" className={className}>
      <circle cx="80" cy="80" r="65" fill="#FFD166" opacity="0.15" />
      
      {/* Titanium Screw Base */}
      <rect x="70" y="85" width="20" height="40" rx="4" fill="#0B2545" />
      <line x1="66" y1="93" x2="94" y2="93" stroke="#FFD166" strokeWidth="3" />
      <line x1="66" y1="103" x2="94" y2="103" stroke="#FFD166" strokeWidth="3" />
      <line x1="66" y1="113" x2="94" y2="113" stroke="#FFD166" strokeWidth="3" />
      
      {/* Strong Tooth Crown Character */}
      <path d="M52 50C52 35 64 29 80 29C96 29 108 35 108 50C108 63 104 80 96 92C92 98 87 96 84 90C82 85 78 85 76 90C73 96 68 98 64 92C56 80 52 63 52 50Z" 
            fill="white" stroke="#0B2545" strokeWidth="4" />
      
      {/* Confident Smile */}
      <circle cx="68" cy="48" r="4" fill="#0B2545" />
      <circle cx="92" cy="48" r="4" fill="#0B2545" />
      <path d="M70 58 Q80 66 90 58" stroke="#0B2545" strokeWidth="3" strokeLinecap="round" />
      
      {/* Muscle Flex */}
      <path d="M42 60 C32 50 35 70 48 72" stroke="#0B2545" strokeWidth="3" fill="white" />
      <path d="M118 60 C128 50 125 70 112 72" stroke="#0B2545" strokeWidth="3" fill="white" />
    </svg>
  );
}

export function DentesFixosIllustration({ className = '', size = 120 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" className={className}>
      <circle cx="80" cy="80" r="65" fill="#00A896" opacity="0.15" />
      
      {/* 3 Teeth Holding Hands */}
      {/* Left Tooth */}
      <path d="M30 65C30 55 38 50 48 50C58 50 66 55 66 65C66 75 63 88 57 98C54 102 52 100 50 96C49 92 47 92 46 96C44 100 42 102 39 98C33 88 30 75 30 65Z" 
            fill="white" stroke="#0B2545" strokeWidth="3" />
      <circle cx="42" cy="62" r="3" fill="#0B2545" />
      <circle cx="54" cy="62" r="3" fill="#0B2545" />
      
      {/* Center Tooth */}
      <path d="M64 58C64 48 72 43 82 43C92 43 100 48 100 58C100 68 97 81 91 91C88 95 86 93 84 89C83 85 81 85 80 89C78 93 76 95 73 91C67 81 64 68 64 58Z" 
            fill="white" stroke="#0B2545" strokeWidth="3" />
      <circle cx="76" cy="55" r="3.5" fill="#0B2545" />
      <circle cx="88" cy="55" r="3.5" fill="#0B2545" />
      <path d="M78 64 Q82 68 86 64" stroke="#0B2545" strokeWidth="2.5" strokeLinecap="round" />

      {/* Right Tooth */}
      <path d="M98 65C98 55 106 50 116 50C126 50 134 55 134 65C134 75 131 88 125 98C122 102 120 100 118 96C117 92 115 92 114 96C112 100 110 102 107 98C101 88 98 75 98 65Z" 
            fill="white" stroke="#0B2545" strokeWidth="3" />
      <circle cx="110" cy="62" r="3" fill="#0B2545" />
      <circle cx="122" cy="62" r="3" fill="#0B2545" />
      
      {/* Golden Bridge Bar */}
      <rect x="40" y="105" width="84" height="10" rx="5" fill="#FFD166" stroke="#0B2545" strokeWidth="2.5" />
    </svg>
  );
}

export function ZirconiaIllustration({ className = '', size = 120 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" className={className}>
      <circle cx="80" cy="80" r="65" fill="#FFD166" opacity="0.15" />
      
      {/* Royal Crown on Tooth */}
      <path d="M52 60C52 45 64 39 80 39C96 39 108 45 108 60C108 73 104 90 96 105C92 113 87 111 84 103C82 98 78 98 76 103C73 111 68 113 64 105C56 90 52 73 52 60Z" 
            fill="white" stroke="#0B2545" strokeWidth="4" />
      
      {/* Royal Crown Headpiece */}
      <polygon points="56,38 65,22 80,32 95,22 104,38" fill="#FFD166" stroke="#0B2545" strokeWidth="3" />
      <circle cx="65" cy="22" r="3" fill="#4ECDC4" />
      <circle cx="80" cy="32" r="3" fill="#FF85A1" />
      <circle cx="95" cy="22" r="3" fill="#4ECDC4" />
      
      {/* Face */}
      <circle cx="68" cy="58" r="4" fill="#0B2545" />
      <circle cx="92" cy="58" r="4" fill="#0B2545" />
      <path d="M72 68 Q80 74 88 68" stroke="#0B2545" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function MesmoDiaIllustration({ className = '', size = 120 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" className={className}>
      <circle cx="80" cy="80" r="65" fill="#4ECDC4" opacity="0.15" />
      
      {/* Speeding Lightning Tooth */}
      <path d="M52 60C52 45 64 39 80 39C96 39 108 45 108 60C108 73 104 90 96 105C92 113 87 111 84 103C82 98 78 98 76 103C73 111 68 113 64 105C56 90 52 73 52 60Z" 
            fill="white" stroke="#0B2545" strokeWidth="4" />
      
      <circle cx="68" cy="58" r="4" fill="#0B2545" />
      <circle cx="92" cy="58" r="4" fill="#0B2545" />
      <path d="M72 68 Q80 74 88 68" stroke="#0B2545" strokeWidth="3" strokeLinecap="round" />
      
      {/* Lightning Bolt */}
      <polygon points="120,30 100,65 112,65 95 105 130 55 112 55" fill="#FFD166" stroke="#0B2545" strokeWidth="2.5" />
      
      {/* Speed Motion Lines */}
      <line x1="25" y1="50" x2="42" y2="50" stroke="#4ECDC4" strokeWidth="4" strokeLinecap="round" />
      <line x1="20" y1="70" x2="45" y2="70" stroke="#4ECDC4" strokeWidth="4" strokeLinecap="round" />
      <line x1="28" y1="90" x2="40" y2="90" stroke="#4ECDC4" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function LudicaIllustration({ className = '', size = 120 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" className={className}>
      <circle cx="80" cy="80" r="65" fill="#FF85A1" opacity="0.15" />
      
      {/* Tooth with Toy Bear */}
      <path d="M52 60C52 45 64 39 80 39C96 39 108 45 108 60C108 73 104 90 96 105C92 113 87 111 84 103C82 98 78 98 76 103C73 111 68 113 64 105C56 90 52 73 52 60Z" 
            fill="white" stroke="#0B2545" strokeWidth="4" />
      
      {/* Cute Cheeks & Eyes */}
      <circle cx="68" cy="58" r="4.5" fill="#0B2545" />
      <circle cx="92" cy="58" r="4.5" fill="#0B2545" />
      <ellipse cx="62" cy="65" rx="5" ry="3" fill="#FF85A1" opacity="0.7" />
      <ellipse cx="98" cy="65" rx="5" ry="3" fill="#FF85A1" opacity="0.7" />
      <path d="M72 68 Q80 75 88 68" stroke="#0B2545" strokeWidth="3" strokeLinecap="round" />
      
      {/* Cute Teddy Bear Companion */}
      <circle cx="118" cy="85" r="14" fill="#FFD166" stroke="#0B2545" strokeWidth="2.5" />
      <circle cx="110" cy="74" r="5" fill="#FFD166" stroke="#0B2545" strokeWidth="2" />
      <circle cx="126" cy="74" r="5" fill="#FFD166" stroke="#0B2545" strokeWidth="2" />
      <circle cx="114" cy="83" r="2" fill="#0B2545" />
      <circle cx="122" cy="83" r="2" fill="#0B2545" />
      <ellipse cx="118" cy="88" rx="3" ry="2" fill="#0B2545" />
    </svg>
  );
}

export function SelantesIllustration({ className = '', size = 120 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" className={className}>
      <circle cx="80" cy="80" r="65" fill="#00A896" opacity="0.15" />
      
      {/* Protective Shield Umbrella */}
      <path d="M40 50 C40 30 120 30 120 50 Z" fill="#4ECDC4" stroke="#0B2545" strokeWidth="3" />
      <path d="M80 50 L80 115 C80 122 72 122 72 115" stroke="#0B2545" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      
      {/* Safe Tooth under Umbrella */}
      <path d="M58 75C58 65 66 60 80 60C94 60 102 65 102 75C102 85 99 96 93 105C90 110 87 108 85 103C83 99 81 99 79 103C77 108 74 110 71 105C65 96 58 85 58 75Z" 
            fill="white" stroke="#0B2545" strokeWidth="3" />
      
      <circle cx="72" cy="73" r="3.5" fill="#0B2545" />
      <circle cx="88" cy="73" r="3.5" fill="#0B2545" />
      <path d="M75 80 Q80 84 85 80" stroke="#0B2545" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function OrtodontiaInfantilIllustration({ className = '', size = 120 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" className={className}>
      <circle cx="80" cy="80" r="65" fill="#FFD166" opacity="0.15" />
      
      {/* Height Chart Ruler */}
      <line x1="38" y1="30" x2="38" y2="130" stroke="#0B2545" strokeWidth="3" strokeLinecap="round" />
      <line x1="38" y1="40" x2="48" y2="40" stroke="#0B2545" strokeWidth="2" />
      <line x1="38" y1="60" x2="54" y2="60" stroke="#0B2545" strokeWidth="3" />
      <line x1="38" y1="80" x2="48" y2="80" stroke="#0B2545" strokeWidth="2" />
      <line x1="38" y1="100" x2="54" y2="100" stroke="#0B2545" strokeWidth="3" />
      
      {/* Growing Child Tooth */}
      <path d="M58 60C58 45 68 39 82 39C96 39 106 45 106 60C106 73 102 90 95 105C92 113 88 111 85 103C83 98 80 98 78 103C75 111 71 113 68 105C61 90 58 73 58 60Z" 
            fill="white" stroke="#0B2545" strokeWidth="4" />
      
      <circle cx="72" cy="58" r="4" fill="#0B2545" />
      <circle cx="92" cy="58" r="4" fill="#0B2545" />
      <path d="M76 68 Q82 74 88 68" stroke="#0B2545" strokeWidth="3" strokeLinecap="round" />
      
      {/* Star Badge */}
      <path d="M125 45L128 53L136 56L128 59L125 67L122 59L114 56L122 53Z" fill="#FFD166" />
    </svg>
  );
}

export function FluorIllustration({ className = '', size = 120 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" className={className}>
      <circle cx="80" cy="80" r="65" fill="#4ECDC4" opacity="0.15" />
      
      {/* Tooth Character */}
      <path d="M52 60C52 45 64 39 80 39C96 39 108 45 108 60C108 73 104 90 96 105C92 113 87 111 84 103C82 98 78 98 76 103C73 111 68 113 64 105C56 90 52 73 52 60Z" 
            fill="white" stroke="#0B2545" strokeWidth="4" />
      
      <circle cx="68" cy="58" r="4" fill="#0B2545" />
      <circle cx="92" cy="58" r="4" fill="#0B2545" />
      <path d="M72 68 Q80 74 88 68" stroke="#0B2545" strokeWidth="3" strokeLinecap="round" />
      
      {/* Fruity Fluoride Droplet Magic Wand */}
      <path d="M115 35 C115 35 130 50 130 62 C130 70 123 77 115 77 C107 77 100 70 100 62 C100 50 115 35 115 35 Z" 
            fill="#FF85A1" stroke="#0B2545" strokeWidth="2.5" />
      <circle cx="110" cy="58" r="2.5" fill="white" opacity="0.8" />
    </svg>
  );
}

export function EscaneamentoGenericIllustration({ className = '', size = 120 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" className={className}>
      <circle cx="80" cy="80" r="65" fill="#00A896" opacity="0.15" />
      
      {/* 3D Scanner Device */}
      <rect x="60" y="40" width="40" height="50" rx="8" fill="#0B2545" />
      <rect x="65" y="45" width="30" height="25" rx="4" fill="#4ECDC4" />
      
      {/* Screen with grid */}
      <line x1="70" y1="52" x2="90" y2="52" stroke="#0B2545" strokeWidth="1.5" opacity="0.5" />
      <line x1="70" y1="58" x2="90" y2="58" stroke="#0B2545" strokeWidth="1.5" opacity="0.5" />
      <line x1="70" y1="64" x2="90" y2="64" stroke="#0B2545" strokeWidth="1.5" opacity="0.5" />
      
      {/* Laser beams */}
      <line x1="80" y1="70" x2="45" y2="110" stroke="#FFD166" strokeWidth="3" strokeLinecap="round" />
      <line x1="80" y1="70" x2="115" y2="110" stroke="#FFD166" strokeWidth="3" strokeLinecap="round" />
      
      {/* Digital particles */}
      <circle cx="45" cy="110" r="3" fill="#4ECDC4" />
      <circle cx="115" cy="110" r="3" fill="#4ECDC4" />
      <circle cx="80" cy="120" r="4" fill="#4ECDC4" />
      
      {/* Scanner handle */}
      <rect x="72" y="90" width="16" height="25" rx="4" fill="#0B2545" />
    </svg>
  );
}

export function BotoxIllustration({ className = '', size = 120 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" className={className}>
      <circle cx="80" cy="80" r="65" fill="#FF85A1" opacity="0.15" />
      
      {/* Syringe */}
      <rect x="70" y="35" width="20" height="45" rx="4" fill="#0B2545" />
      <rect x="73" y="38" width="14" height="30" rx="2" fill="#4ECDC4" opacity="0.6" />
      
      {/* Needle */}
      <rect x="78" y="80" width="4" height="25" rx="1" fill="#0B2545" />
      
      {/* Plunger */}
      <rect x="72" y="25" width="16" height="10" rx="3" fill="#FFD166" />
      
      {/* Smooth skin waves */}
      <path d="M30 120 Q50 110 70 120 Q90 130 110 120 Q130 110 150 120" stroke="#4ECDC4" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M35 130 Q55 120 75 130 Q95 140 115 130 Q135 120 155 130" stroke="#4ECDC4" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
      
      {/* Sparkles for smoothing effect */}
      <path d="M120 45L122 50L127 52L122 54L120 59L118 54L113 52L118 50Z" fill="#FFD166" />
      <path d="M40 100L42 105L47 107L42 109L40 114L38 109L33 107L38 105Z" fill="#FFD166" opacity="0.7" />
    </svg>
  );
}

export function PreenchimentoFacialIllustration({ className = '', size = 120 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" className={className}>
      <circle cx="80" cy="80" r="65" fill="#FFD166" opacity="0.15" />
      
      {/* Face outline */}
      <ellipse cx="80" cy="75" rx="35" ry="45" fill="none" stroke="#0B2545" strokeWidth="3" />
      
      {/* Volume restoration areas */}
      <circle cx="65" cy="65" r="8" fill="#FF85A1" opacity="0.6" />
      <circle cx="95" cy="65" r="8" fill="#FF85A1" opacity="0.6" />
      <circle cx="80" cy="55" r="6" fill="#FF85A1" opacity="0.6" />
      
      {/* Syringe with filler */}
      <rect x="110" y="30" width="15" height="35" rx="3" fill="#0B2545" />
      <rect x="113" y="33" width="9" height="25" rx="2" fill="#FF85A1" opacity="0.7" />
      <rect x="112" y="65" width="3" height="15" rx="1" fill="#0B2545" />
      
      {/* Volume upward arrows */}
      <path d="M65 75 L65 60" stroke="#FFD166" strokeWidth="3" strokeLinecap="round" />
      <path d="M95 75 L95 60" stroke="#FFD166" strokeWidth="3" strokeLinecap="round" />
      <path d="M80 80 L80 58" stroke="#FFD166" strokeWidth="3" strokeLinecap="round" />
      
      {/* Plus indicators */}
      <text x="62" y="55" fill="#0B2545" fontSize="12" fontWeight="bold">+</text>
      <text x="92" y="55" fill="#0B2545" fontSize="12" fontWeight="bold">+</text>
    </svg>
  );
}

export function TratamentosPeleIllustration({ className = '', size = 120 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" className={className}>
      <circle cx="80" cy="80" r="65" fill="#4ECDC4" opacity="0.15" />
      
      {/* Skin surface */}
      <path d="M30 90 Q50 85 70 90 Q90 95 110 90 Q130 85 150 90" stroke="#0B2545" strokeWidth="3" fill="none" />
      
      {/* Glow/sparkle effects */}
      <circle cx="50" cy="70" r="8" fill="#FFD166" opacity="0.6" />
      <circle cx="80" cy="60" r="10" fill="#FFD166" opacity="0.7" />
      <circle cx="110" cy="70" r="8" fill="#FFD166" opacity="0.6" />
      
      {/* Micro-needling tool */}
      <rect x="72" y="35" width="16" height="30" rx="4" fill="#0B2545" />
      <line x1="76" y1="65" x2="76" y2="80" stroke="#0B2545" strokeWidth="2" />
      <line x1="80" y1="65" x2="80" y2="80" stroke="#0B2545" strokeWidth="2" />
      <line x1="84" y1="65" x2="84" y2="80" stroke="#0B2545" strokeWidth="2" />
      
      {/* Rejuvenation particles */}
      <circle cx="45" cy="80" r="3" fill="#4ECDC4" />
      <circle cx="70" cy="75" r="2" fill="#4ECDC4" />
      <circle cx="90" cy="75" r="2" fill="#4ECDC4" />
      <circle cx="115" cy="80" r="3" fill="#4ECDC4" />
      
      {/* Radiant lines */}
      <line x1="80" y1="45" x2="80" y2="25" stroke="#FFD166" strokeWidth="2" strokeLinecap="round" />
      <line x1="60" y1="55" x2="45" y2="40" stroke="#FFD166" strokeWidth="2" strokeLinecap="round" />
      <line x1="100" y1="55" x2="115" y2="40" stroke="#FFD166" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function TratamentosCorporaisIllustration({ className = '', size = 120 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" className={className}>
      <circle cx="80" cy="80" r="65" fill="#00A896" opacity="0.15" />
      
      {/* Body silhouette */}
      <ellipse cx="80" cy="70" rx="25" ry="30" fill="none" stroke="#0B2545" strokeWidth="3" />
      <rect x="60" y="95" width="15" height="35" rx="5" fill="none" stroke="#0B2545" strokeWidth="3" />
      <rect x="85" y="95" width="15" height="35" rx="5" fill="none" stroke="#0B2545" strokeWidth="3" />
      
      {/* Blood vessels */}
      <path d="M70 75 Q65 85 70 95" stroke="#FF85A1" strokeWidth="2" fill="none" />
      <path d="M90 75 Q95 85 90 95" stroke="#FF85A1" strokeWidth="2" fill="none" />
      
      {/* Treatment laser tool */}
      <rect x="115" y="40" width="18" height="40" rx="4" fill="#0B2545" />
      <circle cx="124" cy="55" r="6" fill="#4ECDC4" />
      <line x1="124" y1="80" x2="80" y2="100" stroke="#FFD166" strokeWidth="3" strokeLinecap="round" />
      
      {/* Reduction indicators */}
      <path d="M50 80 L55 75 M50 80 L55 85" stroke="#FFD166" strokeWidth="2" />
      <path d="M110 80 L105 75 M110 80 L105 85" stroke="#FFD166" strokeWidth="2" />
      
      {/* Healing particles */}
      <circle cx="60" cy="85" r="3" fill="#4ECDC4" opacity="0.7" />
      <circle cx="100" cy="85" r="3" fill="#4ECDC4" opacity="0.7" />
    </svg>
  );
}

export function AnestesiaGenericIllustration({ className = '', size = 120 }: IllustrationProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" className={className}>
      <circle cx="80" cy="80" r="65" fill="#4ECDC4" opacity="0.15" />
      
      {/* Sleeping cloud */}
      <path d="M40 100 C25 100 20 85 32 75 C25 60 45 50 60 60 C70 45 95 45 105 60 C120 50 140 60 132 75 C145 85 135 100 120 100 Z" 
            fill="white" stroke="#0B2545" strokeWidth="3" />
      
      {/* Sleeping face in cloud */}
      <circle cx="70" cy="80" r="4" fill="#0B2545" />
      <circle cx="90" cy="80" r="4" fill="#0B2545" />
      
      {/* Closed peaceful eyes */}
      <path d="M66 78 Q70 82 74 78" stroke="#0B2545" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M86 78 Q90 82 94 78" stroke="#0B2545" strokeWidth="2" fill="none" strokeLinecap="round" />
      
      {/* Gentle smile */}
      <path d="M75 88 Q80 92 85 88" stroke="#0B2545" strokeWidth="2" fill="none" strokeLinecap="round" />
      
      {/* Gentle anesthetic syringe */}
      <rect x="115" y="35" width="14" height="30" rx="3" fill="#0B2545" />
      <rect x="118" y="38" width="8" height="20" rx="2" fill="#4ECDC4" opacity="0.5" />
      <rect x="117" y="65" width="2" height="12" rx="1" fill="#0B2545" />
      
      {/* Sleep ZZZs */}
      <text x="125" y="30" fill="#FFD166" fontSize="16" fontWeight="bold" fontFamily="sans-serif">z</text>
      <text x="135" y="20" fill="#FFD166" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Z</text>
      
      {/* Comfort sparkles */}
      <path d="M35 70L37 75L42 77L37 79L35 84L33 79L28 77L33 75Z" fill="#FFD166" opacity="0.6" />
    </svg>
  );
}

// Master Component Resolver
export default function SpecialtyIllustration({ name, size = 120, className = '' }: { name: string; size?: number; className?: string }) {
  const norm = name.toLowerCase();

  // Services that are not specifically about teeth - use specific illustrations
  if (norm.includes('escaneamento')) return <EscaneamentoGenericIllustration size={size} className={className} />;
  if (norm.includes('toxina botulínica') || norm.includes('botox')) return <BotoxIllustration size={size} className={className} />;
  if (norm.includes('preenchimento facial')) return <PreenchimentoFacialIllustration size={size} className={className} />;
  if (norm.includes('tratamentos de pele')) return <TratamentosPeleIllustration size={size} className={className} />;
  if (norm.includes('tratamentos corporais') || norm.includes('vasculares')) return <TratamentosCorporaisIllustration size={size} className={className} />;
  if (norm.includes('anestesia')) return <AnestesiaGenericIllustration size={size} className={className} />;

  // Services specifically about teeth - use tooth-based illustrations
  if (norm.includes('alinhador')) return <AlinhadoresIllustration size={size} className={className} />;
  if (norm.includes('aparelho infantil')) return <AparelhoInfantilIllustration size={size} className={className} />;
  if (norm.includes('safira')) return <SafiraIllustration size={size} className={className} />;

  if (norm.includes('check-up') || norm.includes('câmera')) return <CheckupIllustration size={size} className={className} />;
  if (norm.includes('limpeza profunda') || norm.includes('delicada')) return <LimpezaIllustration size={size} className={className} />;
  if (norm.includes('restauração') || norm.includes('resina')) return <RestauracaoIllustration size={size} className={className} />;
  if (norm.includes('gengiva') || norm.includes('gengivas')) return <GengivaIllustration size={size} className={className} />;

  if (norm.includes('lentes') || norm.includes('facetas de porcelana')) return <FacetasIllustration size={size} className={className} />;
  if (norm.includes('clareamento')) return <ClareamentoIllustration size={size} className={className} />;
  if (norm.includes('harmonização')) return <HarmonizacaoIllustration size={size} className={className} />;
  if (norm.includes('direct') || norm.includes('resina direct')) return <ResinaDirectIllustration size={size} className={className} />;

  if (norm.includes('canal')) return <CanalIllustration size={size} className={className} />;
  if (norm.includes('siso')) return <SisoIllustration size={size} className={className} />;

  if (norm.includes('implantes') || norm.includes('implante')) return <ImplantesIllustration size={size} className={className} />;
  if (norm.includes('protocolo') || norm.includes('fixos')) return <DentesFixosIllustration size={size} className={className} />;
  if (norm.includes('zircônia')) return <ZirconiaIllustration size={size} className={className} />;
  if (norm.includes('mesmo dia')) return <MesmoDiaIllustration size={size} className={className} />;

  if (norm.includes('lúdica') || norm.includes('consulta lúdica')) return <LudicaIllustration size={size} className={className} />;
  if (norm.includes('selantes') || norm.includes('cáries')) return <SelantesIllustration size={size} className={className} />;
  if (norm.includes('acompanhamento ortodôntico')) return <OrtodontiaInfantilIllustration size={size} className={className} />;
  if (norm.includes('flúor')) return <FluorIllustration size={size} className={className} />;

  // Default Fallback
  return <EscaneamentoGenericIllustration size={size} className={className} />;
}
