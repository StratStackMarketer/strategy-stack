import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

type NavChild = {
  label: string;
  href: string;
};

type NavItem = {
  label: string;
  href?: string;
  children?: NavChild[];
};

const navItems: NavItem[] = [
  {
    label: 'What We Do',
    children: [
      { label: 'Products', href: '/products' },
      { label: 'Services', href: '/services' },
      { label: 'Solutions', href: '/solutions' },
    ],
  },
  {
    label: 'How It Works',
    children: [
      { label: 'Free Marketing Audits', href: '/how-it-works/audits' },
      { label: 'AI & Automation', href: '/how-it-works/ai-automation' },
      { label: 'What to Expect', href: '/how-it-works/what-to-expect' },
    ],
  },
  {
    label: 'Industries',
    children: [
      { label: 'Home Services', href: '/home-services' },
      { label: 'Property Management', href: '/property-management' },
      { label: 'Automotive', href: '/automotive' },
      { label: 'Retail', href: '/retail' },
      { label: 'SaaS Startups', href: '/saas-startups' },
    ],
  },
  {
    label: 'Pricing & Packaging',
    href: '/pricing-packaging',
    children: [
      { label: 'Solutions', href: '/solutions' },
      { label: 'Booster Packs', href: '/booster-packs' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Success Stories', href: '/resources/success-stories' },
      { label: 'Use Cases', href: '/resources/use-cases' },
      { label: 'Tools', href: '/resources/tools' },
      { label: 'Blog', href: '/blog' },
    ],
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [location.pathname]);

  const isGroupActive = (item: NavItem) =>
    (item.href && location.pathname === item.href) ||
    item.children?.some((c) => location.pathname === c.href);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white border-b-3 border-black shadow-[0_4px_0_0_black]'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-6">
        {/* Logo anchored left, nav items evenly spaced, Book a Call anchored right */}
        <nav className="flex items-center justify-between h-20" ref={navRef}>
          {/* Logo — anchored top-left, no artificial offsets */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/images/logo-triangle.png"
              alt="Strategy Stack"
              className="h-12 w-auto lg:hidden"
            />
            <img
              src="/images/logo-full.png"
              alt="Strategy Stack"
              className="h-15 w-auto hidden lg:block"
            />
          </Link>

          {/* Desktop Navigation — consistent gap between all items including logo buffer */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.href ? (
                  <Link
                    to={item.href}
                    className={cn(
                      'flex items-center gap-1 font-bold text-sm uppercase tracking-wide hover:text-primary transition-colors whitespace-nowrap',
                      isGroupActive(item) && 'text-primary'
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        className={cn(
                          'h-3.5 w-3.5 transition-transform shrink-0',
                          activeDropdown === item.label && 'rotate-180'
                        )}
                      />
                    )}
                  </Link>
                ) : (
                  <button
                    className={cn(
                      'flex items-center gap-1 font-bold text-sm uppercase tracking-wide hover:text-primary transition-colors whitespace-nowrap',
                      isGroupActive(item) && 'text-primary'
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        className={cn(
                          'h-3.5 w-3.5 transition-transform shrink-0',
                          activeDropdown === item.label && 'rotate-180'
                        )}
                      />
                    )}
                  </button>
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 min-w-[200px] bg-white border-3 border-black brutal-shadow-md z-50"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className={cn(
                            'block px-4 py-3 text-sm font-medium hover:bg-gray-50 hover:text-primary transition-colors border-b border-gray-100 last:border-b-0 whitespace-nowrap',
                            location.pathname === child.href && 'bg-primary/10 text-primary font-bold'
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Book a Call CTA */}
            <a
              href="#contact"
              className="btn-brutal btn-brutal-primary text-sm whitespace-nowrap shrink-0"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 brutal-border bg-white brutal-shadow-sm"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t-3 border-b-3 border-black overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col">
                {navItems.map((item) => (
                  <div key={item.label} className="border-b border-gray-100 last:border-b-0">
                    {item.children ? (
                      <>
                        <button
                          onClick={() =>
                            setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                          }
                          className={cn(
                            'w-full flex items-center justify-between py-3 font-bold text-sm uppercase tracking-wide',
                            isGroupActive(item) && 'text-primary'
                          )}
                        >
                          {item.href ? (
                            <Link
                              to={item.href}
                              onClick={(e) => e.stopPropagation()}
                              className="hover:text-primary transition-colors"
                            >
                              {item.label}
                            </Link>
                          ) : (
                            <span>{item.label}</span>
                          )}
                          <ChevronDown
                            className={cn(
                              'h-4 w-4 transition-transform',
                              mobileExpanded === item.label && 'rotate-180'
                            )}
                          />
                        </button>

                        <AnimatePresence>
                          {mobileExpanded === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.15 }}
                              className="overflow-hidden"
                            >
                              <div className="pb-3 pl-4 flex flex-col gap-1">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    to={child.href}
                                    className={cn(
                                      'py-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors',
                                      location.pathname === child.href && 'text-primary font-bold'
                                    )}
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.href!}
                        className={cn(
                          'block py-3 font-bold text-sm uppercase tracking-wide hover:text-primary transition-colors',
                          location.pathname === item.href && 'text-primary'
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}

                <a
                  href="#contact"
                  className="btn-brutal btn-brutal-primary text-center mt-4"
                >
                  Book a Call
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
