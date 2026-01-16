import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'The Problem', href: '#problem' },
  { label: 'Our Solution', href: '#solution' },
  { label: 'Pricing', href: '#pricing' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <a href="/" className="flex items-center -ml-22">
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
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 ml-auto -mr-20">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-bold text-sm uppercase tracking-wide hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#pricing"
              className="btn-brutal btn-brutal-primary text-sm"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 brutal-border bg-white brutal-shadow-sm"
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
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-bold text-lg uppercase tracking-wide py-2 border-b-2 border-gray-200"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#pricing"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-brutal btn-brutal-primary text-center mt-4"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
