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
    smsOptIn: false,
  });
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null);

  // Capture tracking data on mount (before user navigates around)
  useEffect(() => {
    setTrackingData(getTrackingData());
  }, []);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setFormData({ ...formData, [e.target.name]: value });
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
        smsOptIn: false,
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
                    placeholder="Your Company Name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-1">I'm interested in...</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-black focus:border-primary focus:outline-none transition-colors bg-white"
                >
                  <option value="">Select an option...</option>
                  <option value="free-audit">Free Marketing Audit Report</option>
                  <option value="free-consultation">Free Consultation</option>
                  <option value="30-day-blitz">30-Day Blitz</option>
                  <option value="booster-packs">Booster Packs</option>
                  <option value="project-quote">Project Quote</option>
                  <option value="partnership">Partnership</option>
                  <option value="learn-more">Learn More</option>
                  <option value="other">Other</option>
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

              <div className="flex items-start gap-3 p-4 bg-gray-50 border-2 border-black/10">
                <input
                  type="checkbox"
                  name="smsOptIn"
                  id="smsOptIn"
                  checked={formData.smsOptIn}
                  onChange={handleChange}
                  className="mt-1 h-5 w-5 accent-primary border-2 border-black"
                />
                <label htmlFor="smsOptIn" className="text-xs text-gray-600 leading-relaxed">
                  By checking this box, I consent to receive SMS text messages from Strategy Stack Marketing for marketing and operational purposes. Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe, HELP for help. View our <a href="/privacy" className="underline font-bold text-black">Privacy Policy</a> and <a href="/terms" className="underline font-bold text-black">Terms of Service</a>.
                </label>
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
                  <p className="font-bold text-lg">info@strategystackmarketing.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/10 border-2 border-white/20 rounded-lg">
                <div className="p-3 bg-[#25D366] rounded-lg flex-shrink-0">
                  <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white/60">WhatsApp</p>
                  <a
                    href="https://wa.me/15743920253"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-lg hover:text-secondary transition-colors"
                  >
                    +1 (574) 392-0253
                  </a>
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
                  <span>We work across Home Services, Property Management, Automotive, Retail & SaaS</span>
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
