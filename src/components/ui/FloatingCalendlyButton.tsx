import { useEffect, useState } from 'react';

// Declare Calendly on window for TypeScript
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const CALENDLY_URL = 'https://calendly.com/russ-strategystackmarketing';

export function FloatingCalendlyButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Show button after slight scroll (better UX than showing immediately)
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    // Show immediately on mobile or after scroll on desktop
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setIsVisible(true);
    } else {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial position
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      // Fallback: open in new tab if script failed to load
      window.open(CALENDLY_URL, '_blank');
    }
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Book a free consultation"
      className={`
        fixed bottom-6 right-6 z-50
        flex items-center gap-3
        px-5 py-4
        bg-primary text-white
        font-bold uppercase tracking-wide
        border-3 border-black
        transition-all duration-200 ease-out
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
        ${isHovered ? 'translate-x-[-2px] translate-y-[-2px] shadow-[6px_6px_0_#000]' : 'shadow-[4px_4px_0_#000]'}
      `}
      style={{
        // Ensure button stays above other elements
        zIndex: 9999,
      }}
    >
      {/* Calendar Icon */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-transform duration-200 ${isHovered ? 'scale-110' : ''}`}
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <circle cx="12" cy="15" r="2" />
      </svg>

      {/* Text - hide on mobile for cleaner look */}
      <span className="hidden sm:inline">Book a Call</span>

      {/* Pulse indicator */}
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-secondary border-2 border-black"></span>
      </span>
    </button>
  );
}

export default FloatingCalendlyButton;
