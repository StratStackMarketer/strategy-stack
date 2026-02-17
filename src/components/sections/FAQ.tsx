import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { AnimatedGrid } from '../ui/AnimatedGrid';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  darkMode?: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function FAQAccordionItem({ item, isOpen, onClick, index }: { 
  item: FAQItem; 
  isOpen: boolean; 
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.div
      variants={itemVariants}
      className="border-3 border-black bg-white overflow-hidden"
      style={{ 
        boxShadow: isOpen ? '5px 5px 0 #000' : '3px 3px 0 #000',
        transform: isOpen ? 'translate(-2px, -2px)' : 'none',
        transition: 'all 0.2s ease'
      }}
    >
      <button
        onClick={onClick}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="font-bold text-lg pr-4">{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="flex-shrink-0"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-4 pt-0 border-t-2 border-gray-200">
              <p className="text-gray-700 leading-relaxed pt-4">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ({ 
  title = "Frequently Asked Questions",
  subtitle = "Got questions? We've got answers.",
  faqs,
  darkMode = false 
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className={`section-full relative overflow-hidden z-10 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50'
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <AnimatedGrid gridSize={60} darkMode={darkMode} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary border-3 border-black brutal-shadow-sm mb-6">
            <HelpCircle className="h-5 w-5 text-white" />
            <span className="font-bold text-white text-sm uppercase tracking-wider">FAQ</span>
          </div>
          
          <h2 className={`text-3xl md:text-5xl font-heading mb-4 ${
            darkMode ? 'text-white' : 'text-black'
          }`}>
            {title}
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {subtitle}
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <FAQAccordionItem
              key={index}
              item={faq}
              index={index}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </motion.div>

        {/* Still have questions? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Still have questions?
          </p>
          <a 
            href="#contact" 
            className="btn-brutal btn-brutal-primary"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default FAQ;
