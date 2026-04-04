import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { AnimatedGrid } from '../components/ui/AnimatedGrid';

export function PrivacyPage() {
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
              <Shield className="h-8 w-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-heading">Privacy Policy</h1>
          </div>

          <div className="card-brutal p-8 md:p-12 space-y-8 text-gray-800 leading-relaxed">
            <section>
              <p className="font-bold text-lg mb-4">Effective Date: March 31, 2026</p>
              <p>
                At Strategy Stack Marketing, we take your privacy seriously. This Privacy Policy describes how we collect, use, and protect your information when you visit our website (https://strategystackai.com) and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us through our contact form, including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Name</li>
                <li>Business Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>Marketing Challenges and Business Details</li>
              </ul>
            </section>

            <section className="bg-yellow-50 p-6 border-2 border-black border-dashed">
              <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight">2. SMS Consent and Use</h2>
              <p>
                If you opt-in to receive SMS messages from Strategy Stack Marketing, we will use your phone number to send marketing and operational updates regarding your free marketing audit or other services you have requested.
              </p>
              <p className="mt-4 font-bold">
                IMPORTANT SMS PRIVACY DISCLOSURE:
              </p>
              <p className="italic">
                Strategy Stack Marketing does not sell or share your SMS opt-in data or consent with third parties for marketing purposes. Your SMS opt-in consent is used exclusively by Strategy Stack Marketing and will not be shared with affiliates or partners for their own marketing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight">3. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Provide and improve our services</li>
                <li>Conduct marketing audits and analysis</li>
                <li>Communicate with you regarding your business</li>
                <li>Send requested marketing or service updates</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight">4. Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Opt-out of any marketing communication (email or SMS)</li>
                <li>Request access to the data we hold about you</li>
                <li>Request correction or deletion of your personal data</li>
              </ul>
              <p className="mt-4">
                <strong>To Opt-out of SMS:</strong> Reply "STOP" to any message you receive from us.
              </p>
              <p>
                <strong>To Opt-out of Email:</strong> Click "Unsubscribe" in any email footer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight">5. Contact Us</h2>
              <p>
                For any questions regarding this Privacy Policy, please contact us at:
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

export default PrivacyPage;
