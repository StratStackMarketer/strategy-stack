import { motion } from 'framer-motion';
import { ArrowUp, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

// Custom X (formerly Twitter) icon matching lucide style
function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// Custom Threads icon
function ThreadsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.068c0-3.516.85-6.37 2.495-8.423C5.845 1.34 8.598.16 12.179.133h.014c3.581.027 6.335 1.208 8.184 3.513 1.644 2.053 2.494 4.908 2.494 8.422 0 3.518-.85 6.373-2.494 8.426-1.85 2.305-4.603 3.486-8.184 3.51h-.007zM12.179 2.08c-3.105.024-5.481 1.02-7.066 2.96-1.465 1.807-2.207 4.344-2.207 7.54 0 3.198.742 5.735 2.207 7.542 1.585 1.94 3.961 2.937 7.066 2.96 3.105-.023 5.48-1.02 7.066-2.96 1.464-1.807 2.207-4.344 2.207-7.542 0-3.196-.743-5.733-2.207-7.54-1.586-1.94-3.961-2.936-7.066-2.96zm.002 17.393c-2.01 0-3.626-.504-4.802-1.497-1.235-1.044-1.87-2.528-1.887-4.41 0-2.9 2.085-5.054 5.013-5.054.762 0 1.504.134 2.202.398.632.24 1.213.592 1.728 1.047.087-.346.13-.703.13-1.068 0-2.173-1.617-3.42-3.971-3.42-.918 0-1.891.22-2.893.654l-.87-1.665c1.258-.575 2.543-.867 3.82-.867 3.298 0 5.668 1.816 5.668 5.236 0 .695-.098 1.376-.291 2.027.284.665.428 1.372.428 2.11-.003 3.09-2.225 5.509-5.275 5.509zm.083-8.082c-1.645 0-3.085 1.26-3.085 3.175 0 1.8 1.127 2.91 3.002 2.91 1.723 0 3.27-1.35 3.27-3.025 0-1.817-1.283-3.06-3.187-3.06z"/>
    </svg>
  );
}

const footerLinks = {
  services: [
    { label: 'SEO', href: '/services' },
    { label: 'Google Ads', href: '/services' },
    { label: 'Social Media', href: '/services' },
    { label: 'Web Design', href: '/services' },
    { label: 'Google Business Profiles', href: '/services' },
  ],
  industries: [
    { label: 'Home Services', href: '/home-services' },
    { label: 'Property Management', href: '/property-management' },
    { label: 'Automotive', href: '/automotive' },
    { label: 'Retail', href: '/retail' },
    { label: 'SaaS Startups', href: '/saas-startups' },
  ],
  company: [
    { label: 'Products', href: '/products' },
    { label: 'Services', href: '/services' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Pricing & Packaging', href: '/pricing-packaging' },
    { label: 'Blog', href: '/blog' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/company/strategy-stack-ai', label: 'LinkedIn' },
  { icon: XIcon, href: 'https://x.com/StrategyStackAI', label: 'X' },
  { icon: Instagram, href: 'https://instagram.com/strategystackaimarketing', label: 'Instagram' },
  { icon: ThreadsIcon, href: 'https://threads.net/@strategystackaimarketing', label: 'Threads' },
  { icon: Facebook, href: 'https://www.facebook.com/share/1AzUQrDKsw/?mibextid=wwXIfr', label: 'Facebook' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/images/logo-full.png"
                alt="Strategy Stack"
                className="h-12 mb-6"
              />
              <p className="text-gray-400 text-[11px] mb-6 max-w-sm">
                AI-powered marketing for businesses with high-consideration buyers. Home Services, Property Management, Automotive, Retail & SaaS.
                Premium results at prices that make sense.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 bg-white/10 hover:bg-primary transition-colors rounded-lg"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-[11px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Industries Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-4">Industries</h3>
            <ul className="space-y-3">
              {footerLinks.industries.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-[11px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-[11px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-[10px]">
              © {new Date().getFullYear()} Strategy Stack. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="/privacy" className="text-gray-500 hover:text-white text-[10px] transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-500 hover:text-white text-[10px] transition-colors">
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="p-2 bg-primary hover:bg-primary/80 transition-colors rounded-lg"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
