import { useEffect, useState, useRef } from 'react';

// GHL Group Booking Link - supports 30/60 min meeting options (updated 2026-03-22 14:43)
const GHL_BOOKING_URL = 'https://api.leadconnectorhq.com/widget/group/Lv7qShWMBSXKHjYDidtu';

export function FloatingBookingButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

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

  // Handle click outside modal to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen]);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Floating Button */}
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

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4">
          {/* Modal Container */}
          <div
            ref={modalRef}
            className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Schedule a Call</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                aria-label="Close modal"
                className="text-gray-500 hover:text-gray-700 transition-colors p-1"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Content - GHL Widget */}
            <div className="flex-1 overflow-auto">
              <iframe
                src={GHL_BOOKING_URL}
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  minHeight: '650px',
                }}
                scrolling="yes"
                title="Book a meeting"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FloatingBookingButton;
