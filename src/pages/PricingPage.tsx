import { Check, Zap, Shield, Users } from 'lucide-react';

export function PricingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-black px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Pricing That Makes Sense
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Premium results. Zero nonsense. Transparent pricing. All powered by AI.
          </p>
          <p className="text-gray-400 mb-12">
            Choose the package that fits your business. All plans include our AI tools, expert optimization, and real support.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Starter Package */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-gray-600 transition-colors relative">
              <div className="absolute -top-4 left-8 bg-black px-3 py-1 rounded-full">
                <span className="text-sm font-semibold text-blue-400">POPULAR</span>
              </div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-5xl font-bold">$495</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <p className="text-gray-400">Perfect for businesses just starting with AI marketing</p>
              </div>

              <div className="mb-8 pb-8 border-b border-gray-800">
                <p className="text-sm text-gray-400 mb-4">What you get:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Google Business Profile optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>SEO foundation setup & configuration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>AI content calendar (1 month)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Review management setup</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Monthly performance reporting</span>
                  </li>
                </ul>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Get Started
              </button>
            </div>

            {/* Growth Package */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-600 rounded-lg p-8 relative transform lg:scale-105 lg:shadow-2xl">
              <div className="absolute -top-4 left-8 bg-black px-3 py-1 rounded-full">
                <span className="text-sm font-semibold text-yellow-400 flex items-center">
                  <Zap className="w-4 h-4 mr-1" />
                  MOST POPULAR
                </span>
              </div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">Growth</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-5xl font-bold">$995</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <p className="text-gray-400">The sweet spot. Everything you need to dominate locally.</p>
              </div>

              <div className="mb-8 pb-8 border-b border-gray-700">
                <p className="text-sm text-gray-400 mb-4">Everything in Starter, plus:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Full SEO audit & ongoing optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Google Ads setup & management ($300/mo ad spend included)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Social media content (4 posts/week)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Reputation management & review responses</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Monthly strategy calls (2x)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Advanced analytics & ROI tracking</span>
                  </li>
                </ul>
              </div>

              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg transition-colors">
                Start Free Trial
              </button>
            </div>

            {/* Scale Package */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-gray-600 transition-colors relative">
              <div className="absolute -top-4 left-8 bg-black px-3 py-1 rounded-full">
                <span className="text-sm font-semibold text-purple-400">ENTERPRISE</span>
              </div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">Scale</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-5xl font-bold">$1,495</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <p className="text-gray-400">Full-service marketing. Automation. Custom solutions.</p>
              </div>

              <div className="mb-8 pb-8 border-b border-gray-800">
                <p className="text-sm text-gray-400 mb-4">Everything in Growth, plus:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Email marketing campaigns (automated)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Retargeting & conversion optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Custom website landing pages</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Lead scoring & nurturing automation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Weekly strategy calls + on-demand support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Custom reporting dashboard</span>
                  </li>
                </ul>
              </div>

              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Request Demo
              </button>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto mt-24">
            <h2 className="text-3xl font-bold mb-12 text-center">Common Questions</h2>
            
            <div className="space-y-8">
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Shield className="w-5 h-5 mr-3 text-blue-400" />
                  Do you have a minimum contract?
                </h3>
                <p className="text-gray-400">
                  No contracts. Month-to-month flexibility. We earn your business every month by delivering results, not by locking you in.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Users className="w-5 h-5 mr-3 text-blue-400" />
                  Can I upgrade or downgrade anytime?
                </h3>
                <p className="text-gray-400">
                  Absolutely. Change your plan at any time. We'll prorate the difference and adjust your next invoice accordingly.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Shield className="w-5 h-5 mr-3 text-blue-400" />
                  What if I don't see results?
                </h3>
                <p className="text-gray-400">
                  We guarantee results or your money back. If you don't see measurable improvement within your first 90 days, we'll refund your investment. No questions asked.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Zap className="w-5 h-5 mr-3 text-blue-400" />
                  Do you offer custom pricing?
                </h3>
                <p className="text-gray-400">
                  Yes. For agencies, multi-location businesses, or unique needs, we offer custom packages. Contact us to discuss your specific requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Scale?
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Let's discuss which package is right for your business. No pressure. Just honest conversation about growth.
          </p>
          <button className="bg-white hover:bg-gray-100 text-purple-900 font-semibold py-4 px-8 rounded-lg text-lg transition-colors">
            Book a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
