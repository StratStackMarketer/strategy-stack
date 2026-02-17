import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Home, Building2, Car, ShoppingBag, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

const industries = [
  { label: 'Home Services', href: '/home-services', icon: Home },
  { label: 'Property Management', href: '/property-management', icon: Building2 },
  { label: 'Automotive', href: '/automotive', icon: Car },
  { label: 'Retail', href: '/retail', icon: ShoppingBag },
  { label: 'SaaS Startups', href: '/saas-startups', icon: Rocket },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsIndustriesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsIndustriesOpen(false);
  }, [location.pathname]);

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
        <nav className="flex items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center -ml-22">
            {/* Mobile: Triangle logo only */}
            <img
              src="/images/logo-triangle.png"
              alt="Strategy Stack"
              className="h-12 w-auto md:hidden"
            />
            {/* Desktop/Tablet: Full logo */}
            <img
              src="/images/logo-full.png"
              alt="Strategy Stack"
              className="h-15 w-auto hidden md:block"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 ml-auto -mr-20">
            {/* Industries Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                className="flex items-center gap-1 font-bold text-sm uppercase tracking-wide hover:text-primary transition-colors"
              >
                Industries
                <ChevronDown 
                  className={cn(
                    "h-4 w-4 transition-transform",
                    isIndustriesOpen && "rotate-180"
                  )} 
                />
              </button>

              <AnimatePresence>
                {isIndustriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white border-3 border-black brutal-shadow-md"
                  >
                    {industries.map((industry) => {
                      const Icon = industry.icon;
                      const isActive = location.pathname === industry.href;
                      return (
                        <Link
                          key={industry.href}
                          to={industry.href}
                          className={cn(
                            "flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0",
                            isActive && "bg-primary/10 text-primary"
                          )}
                        >
                          <Icon className="h-5 w-5" />
                          <span className="font-medium">{industry.label}</span>
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/pricing"
              className="font-bold text-sm uppercase tracking-wide hover:text-primary transition-colors relative group"
            >
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>

            <a
              href="#contact"
              className="font-bold text-sm uppercase tracking-wide hover:text-primary transition-colors relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>

            <Link
              to="/pricing"
              className="btn-brutal btn-brutal-primary text-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden ml-auto p-2 brutal-border bg-white brutal-shadow-sm"
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
            className="md:hidden bg-white border-t-3 border-b-3 border-black"
          >
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col gap-2">
                {/* Industries Section */}
                <div className="border-b-2 border-gray-200 pb-4 mb-2">
                  <span className="text-xs uppercase tracking-wider text-gray-500 mb-2 block">Industries</span>
                  {industries.map((industry) => {
                    const Icon = industry.icon;
                    const isActive = location.pathname === industry.href;
                    return (
                      <Link
                        key={industry.href}
                        to={industry.href}
                        className={cn(
                          "flex items-center gap-3 py-2 font-medium",
                          isActive && "text-primary"
                        )}
                      >
                        <Icon className="h-5 w-5" />
                        {industry.label}
                      </Link>
                    );
                  })}
                </div>

                <Link
                  to="/pricing"
                  className="font-bold text-lg uppercase tracking-wide py-2 border-b-2 border-gray-200"
                >
                  Pricing
                </Link>

                <a
                  href="#contact"
                  className="font-bold text-lg uppercase tracking-wide py-2 border-b-2 border-gray-200"
                >
                  Contact
                </a>

                <Link
                  to="/pricing"
                  className="btn-brutal btn-brutal-primary text-center mt-4"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
