import { forwardRef } from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  innerClassName?: string;
  background?: string;
  fullWidth?: boolean;
}

/**
 * Wrapper for page sections — centers content, applies max-width and consistent padding.
 */
const SectionContainer = forwardRef<HTMLElement, SectionContainerProps>(({
  children,
  id,
  className = '',
  innerClassName = '',
  background,
  fullWidth = false,
}, ref) => {
  return (
    <section
      id={id}
      ref={ref}
      className={`relative ${background || ''} ${className}`}
    >
      <div
        className={`mx-auto ${
          fullWidth ? 'w-full' : 'max-w-page'
        } px-6 sm:px-10 lg:px-container-x py-8 lg:py-28 ${innerClassName}`}
      >
        {children}
      </div>
    </section>
  );
});

SectionContainer.displayName = 'SectionContainer';

export default SectionContainer;
