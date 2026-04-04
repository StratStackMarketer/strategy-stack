import { motion } from 'framer-motion';
import { Gavel } from 'lucide-react';
import { AnimatedGrid } from '../components/ui/AnimatedGrid';

export function TermsPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <AnimatedGrid gridSize={40} darkMode={false} />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-8 flex items-center gap-4">
            <div className="p-4 bg-primary text-white border-3 border-black brutal-shadow-sm">
              <Gavel className="h-8 w-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-heading uppercase tracking-tight">Terms of Service</h1>
          </div>

          <div className="card-brutal p-8 md:p-12 space-y-8 text-gray-800 leading-relaxed">
            <section>
              <p className="font-bold text-lg mb-4">Effective Date: March 31, 2026</p>
              <p>
                By using the Strategy Stack Marketing website (https://strategystackai.com) and services, you agree to these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight">1. Description of Services</h2>
              <p>
                Strategy Stack Marketing provides marketing audits, digital strategy, and AI-powered marketing automation services. All services are subject to change and may be modified or discontinued at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight">2. Marketing Audits</h2>
              <p>
                Free marketing audits are provided for educational purposes and do not constitute a guarantee of future results. Information provided in audits is based on current market data and tools available at the time of the audit.
              </p>
            </section>

            <section className="bg-yellow-50 p-6 border-2 border-black border-dashed">
              <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight">3. SMS Messaging Terms</h2>
              <p>
                If you opt-in to receive SMS messages from Strategy Stack Marketing (via website contact form or other opt-in method), you agree to these additional terms:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Message Frequency:</strong> The number of messages you receive will vary depending on your level of engagement and requests.</li>
                <li><strong>Costs:</strong> Standard message and data rates from your mobile carrier may apply.</li>
                <li><strong>Opt-out:</strong> You can cancel the SMS service at any time by replying "STOP" to any message. We will send you a confirmation SMS to verify you have been unsubscribed. After this, you will no longer receive SMS messages from us.</li>
                <li><strong>Help:</strong> If you are experiencing issues with the messaging program, you can reply "HELP" for more assistance, or get help directly at russ@strategystackmarketing.com.</li>
                <li><strong>Support Carriers:</strong> Carriers are not liable for delayed or undelivered messages.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight">4. Limitation of Liability</h2>
              <p>
                Strategy Stack Marketing shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight">5. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of Indiana.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight">6. Contact Us</h2>
              <p>
                For any questions regarding these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 space-y-1">
                <p><strong>Email:</strong> russ@strategystackmarketing.com</p>
                <p><strong>Phone:</strong> (317) 273-3916</p>
                <p><strong>Address:</strong> Indianapolis, IN</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default TermsPage;
