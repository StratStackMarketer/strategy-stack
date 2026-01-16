import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Send, Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { NeoBrutalistDecor } from '../ui/NeoBrutalistDecor';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface TrackingData {
  referrer: string;
  landingPage: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm: string;
  utmContent: string;
}

function getTrackingData(): TrackingData {
  const params = new URLSearchParams(window.location.search);
  return {
    referrer: document.referrer || 'Direct',
    landingPage: window.location.href,
    utmSource: params.get('utm_source') || '',
    utmMedium: params.get('utm_medium') || '',
    utmCampaign: params.get('utm_campaign') || '',
    utmTerm: params.get('utm_term') || '',
    utmContent: params.get('utm_content') || '',
  };
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    service: '',
    message: '',
  });
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null);

  // Capture tracking data on mount (before user navigates around)
  useEffect(() => {
    setTrackingData(getTrackingData());
  }, []);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, tracking: trackingData }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        business: '',
        service: '',
        message: '',
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to submit form');
    }
  };

  return (
    <section id="contact" className="section-full bg-primary text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 right-20 w-32 h-32 border-4 border-white/20 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-40 left-10 w-24 h-24 border-4 border-white/20"
      />

      {/* Neo-Brutalist Decorative Elements */}
      <NeoBrutalistDecor variant="text-cutout" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Let's Talk Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center relative -translate-y-1/2"
        >
          <span className="inline-block px-6 py-3 bg-secondary text-black border-3 border-black brutal-shadow-sm font-bold text-lg uppercase tracking-wider">
            Let's Talk
          </span>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading mb-4">
            Ready to Stop Wasting Money on Marketing?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Get a free marketing audit and see exactly where you're leaving money on the table.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white text-black p-8 border-3 border-black brutal-shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6">Get Your Free Audit</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-1">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-black focus:border-primary focus:outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-black focus:border-primary focus:outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-black focus:border-primary focus:outline-none transition-colors"
                    placeholder="(317) 555-0123"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Business Name *</label>
                  <input
                    type="text"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-black focus:border-primary focus:outline-none transition-colors"
                    placeholder="ABC Roofing"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-1">What service are you in?</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-black focus:border-primary focus:outline-none transition-colors bg-white"
                >
                  <option value="">Select your industry...</option>
                  <option value="roofing">Roofing</option>
                  <option value="hvac">HVAC</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="electrical">Electrical</option>
                  <option value="landscaping">Landscaping</option>
                  <option value="painting">Painting</option>
                  <option value="cleaning">Cleaning Services</option>
                  <option value="pest">Pest Control</option>
                  <option value="garage">Garage Doors</option>
                  <option value="other">Other Home Service</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-1">Tell us about your marketing challenges</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-black focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="What's not working? What have you tried? What are your goals?"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 bg-primary text-white font-bold border-3 border-black brutal-shadow-sm hover:brutal-shadow transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    Sending...
                    <Loader2 className="h-5 w-5 animate-spin" />
                  </>
                ) : (
                  <>
                    Get My Free Audit
                    <Send className="h-5 w-5" />
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-2 p-4 bg-green-100 border-2 border-green-500 text-green-800">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <p className="font-medium">Thanks! We'll get back to you within 24 hours.</p>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 p-4 bg-red-100 border-2 border-red-500 text-red-800">
                  <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  <p className="font-medium">{errorMessage || 'Something went wrong. Please try again.'}</p>
                </div>
              )}

              <p className="text-xs text-gray-500 text-center">
                No spam, no sales pressure. Just a straightforward analysis of your marketing.
              </p>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Or Reach Out Directly</h3>
              <p className="text-white/80 mb-8">
                Prefer to talk first? We get it. Here's how to reach us.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white/10 border-2 border-white/20 rounded-lg">
                <div className="p-3 bg-secondary rounded-lg">
                  <Phone className="h-6 w-6 text-black" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Text or Call</p>
                  <p className="font-bold text-lg">(317) 273-3916</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/10 border-2 border-white/20 rounded-lg">
                <div className="p-3 bg-secondary rounded-lg">
                  <Mail className="h-6 w-6 text-black" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Email</p>
                  <p className="font-bold text-lg">russchandler@strategystackmarketing.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/10 border-2 border-white/20 rounded-lg">
                <div className="p-3 bg-secondary rounded-lg">
                  <MapPin className="h-6 w-6 text-black" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Location</p>
                  <p className="font-bold text-lg">Indianapolis, IN</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/10 border-2 border-white/20 rounded-lg">
                <div className="p-3 bg-secondary rounded-lg">
                  <Clock className="h-6 w-6 text-black" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Response Time</p>
                  <p className="font-bold text-lg">Within 24 hours (usually faster)</p>
                </div>
              </div>
            </div>

            {/* Quick FAQ */}
            <div className="p-6 bg-white/5 border-2 border-white/20 rounded-lg">
              <h4 className="font-bold mb-4">Quick Answers:</h4>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 mt-1 text-secondary flex-shrink-0" />
                  <span>No contracts—cancel anytime</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 mt-1 text-secondary flex-shrink-0" />
                  <span>Free audit takes about 48 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 mt-1 text-secondary flex-shrink-0" />
                  <span>We work exclusively with home services</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 mt-1 text-secondary flex-shrink-0" />
                  <span>Results guaranteed or we work free</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
