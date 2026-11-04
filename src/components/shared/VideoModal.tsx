import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface VideoModalProps {
  src: string;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function VideoModal({ src, isOpen, onClose, title = 'Video' }: VideoModalProps) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [frameKey, setFrameKey] = useState(0);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      const raf = requestAnimationFrame(() => {
        setMounted(true);
        requestAnimationFrame(() => setVisible(true));
      });
      return () => cancelAnimationFrame(raf);
    } else {
      const raf = requestAnimationFrame(() => {
        setVisible(false);
        setFrameKey(k => k + 1);
      });
      const t = setTimeout(() => setMounted(false), 450);
      return () => {
        cancelAnimationFrame(raf);
        clearTimeout(t);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  const isDirectVideo = /\.(mp4|webm|ogg)(\?.*)?$/.test(src);

  if (!mounted) return null;

  return createPortal(
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
      aria-modal="true"
      role="dialog"
      style={{
        backdropFilter: visible ? 'blur(16px)' : 'blur(0px)',
        backgroundColor: visible ? 'rgba(8, 40, 48, 0.72)' : 'rgba(8, 40, 48, 0)',
        transition: 'backdrop-filter 0.4s ease, background-color 0.4s ease',
      }}
    >
      <div
        style={{
          transform: visible ? 'scale(1) translateY(0)' : 'scale(0.92) translateY(24px)',
          opacity: visible ? 1 : 0,
          transition: 'transform 0.45s cubic-bezier(0.34, 1.4, 0.64, 1), opacity 0.35s ease',
          willChange: 'transform, opacity',
        }}
        className="relative w-full max-w-4xl"
      >
        <button
          onClick={onClose}
          aria-label="Fechar video"
          className="absolute -top-12 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/25 transition-all duration-200 hover:scale-110 focus:outline-none"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'scale(1)' : 'scale(0.8)',
            transition: 'opacity 0.35s ease 0.15s, transform 0.35s ease 0.15s, background-color 0.2s',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </button>

        <div
          className="relative overflow-hidden rounded-[20px] bg-black shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
          style={{ aspectRatio: '16/9' }}
        >
          <div className="pointer-events-none absolute inset-0 z-10 rounded-[20px] ring-1 ring-white/10" />

          {isDirectVideo ? (
            <video
              key={frameKey}
              src={src}
              controls
              autoPlay
              className="h-full w-full object-cover"
              title={title}
            />
          ) : (
            <iframe
              key={frameKey}
              src={visible ? src : ''}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full border-0"
              loading="lazy"
            />
          )}
        </div>

        {title && (
          <p
            className="mt-3 text-center text-sm font-medium text-white/60 tracking-wide"
            style={{
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.3s ease 0.25s',
            }}
          >
            {title}
          </p>
        )}
      </div>
    </div>,
    document.body
  );
}
