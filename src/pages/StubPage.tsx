import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { AnimatedGrid } from '../components/ui/AnimatedGrid';
import { Link } from 'react-router-dom';

interface StubPageProps {
  title: string;
  subtitle: string;
  badge: string;
  badgeColor?: string;
  relatedLinks?: { to: string; label: string }[];
  auditCta?: boolean;
}

export function StubPage({ title, subtitle, badge, badgeColor = 'bg-primary text-white', relatedLinks = [], auditCta = true }: StubPageProps) {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <AnimatedGrid gridSize={40} darkMode={false} />

      <div className="container mx-auto px-6 relative z-10 pt-40 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="mb-6">
            <span className={`inline-block px-4 py-2 ${badgeColor} border-3 border-black brutal-shadow-sm font-bold text-sm uppercase tracking-wider`}>
              {badge}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-heading mb-6 leading-none">
            {title}
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-xl mx-auto">{subtitle}</p>

          {/* Coming soon card */}
          <div className="card-brutal bg-white p-8 mb-10 text-left max-w-lg mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-yellow-400 border-3 border-black brutal-shadow-sm">
                <Clock className="h-5 w-5" />
              </div>
              <span className="font-bold text-lg">Full page coming soon</span>
            </div>
            <p className="text-gray-600 mb-6">
              This page is in active development. In the meantime, reach out and we'll give you the full rundown directly.
            </p>
            {auditCta && (
              <Link to="/how-it-works/audits" className="btn-brutal btn-brutal-primary w-full text-center block py-3">
                Start with a free audit <ArrowRight className="inline ml-2 h-4 w-4" />
              </Link>
            )}
          </div>

          {/* Related links */}
          {relatedLinks.length > 0 && (
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider font-bold mb-4">Explore in the meantime</p>
              <div className="flex flex-wrap justify-center gap-3">
                {relatedLinks.map((link) => (
                  <Link key={link.to} to={link.to} className="btn-brutal btn-brutal-white px-5 py-2 text-sm">
                    {link.label} →
                  </Link>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default StubPage;
