import { Rocket, Target, TrendingUp, Clock, CheckCircle, Users, Zap, Trophy } from 'lucide-react';

export function BoosterPackPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-black px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-4">
            <span className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold">
              LIMITED TIME OFFER
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            30-Day Marketing Blitz
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Jumpstart your marketing in one month. Intensive optimization, proven strategies, measurable results—or your money back.
          </p>

          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg p-8 mb-8">
            <div className="flex items-baseline mb-2">
              <span className="text-5xl font-bold text-black">$1,499</span>
              <span className="text-black ml-3 line-through text-lg">$2,000 value</span>
            </div>
            <p className="text-black font-semibold">One-time investment. 30 days. Real momentum.</p>
          </div>

          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-lg transition-colors">
            Start Your 30-Day Blitz
          </button>
        </div>
      </section>

      {/* What's Included */}
      <section className="px-4 py-16 lg:py-24 border-b border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Your 30-Day Blueprint
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Week 1 */}
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 rounded-full p-3 mr-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Week 1: Foundation</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Google Business Profile audit & complete optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Competitive analysis (top 3 local competitors)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Website SEO foundation & keyword strategy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Initial Google Ads campaign setup</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Call: Strategy alignment meeting with your team</span>
                </li>
              </ul>
            </div>

            {/* Week 2 */}
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              <div className="flex items-center mb-6">
                <div className="bg-green-600 rounded-full p-3 mr-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Week 2: Activation</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Google Ads live with $500 ad spend (full management)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Social media content calendar (2 weeks ahead)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Review generation campaign launch</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>AI-powered website content optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Midweek check-in: Performance review & optimization</span>
                </li>
              </ul>
            </div>

            {/* Week 3 */}
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              <div className="flex items-center mb-6">
                <div className="bg-purple-600 rounded-full p-3 mr-4">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Week 3: Acceleration</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Google Ads scaling: Expand to new keywords & audiences</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Retargeting campaigns (website visitor follow-up)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Email campaign setup (customer nurture sequence)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Social content fully automated (4 posts/week)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Data analysis: Early wins identification</span>
                </li>
              </ul>
            </div>

            {/* Week 4 */}
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              <div className="flex items-center mb-6">
                <div className="bg-yellow-600 rounded-full p-3 mr-4">
                  <Trophy className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Week 4: Optimization</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Full performance analysis & results presentation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>A/B testing results & winning strategies identified</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>90-day growth roadmap (what to scale next)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Handoff: All systems documented & automated</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Final call: Growth discussion & next steps</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="px-4 py-16 lg:py-24 border-b border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            What To Expect
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-500 mb-4">+40%</div>
              <p className="text-gray-300">Average increase in qualified leads (Month 1)</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-500 mb-4">2-3x</div>
              <p className="text-gray-300">Return on ad spend (typical for optimized campaigns)</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-500 mb-4">$3,000+</div>
              <p className="text-gray-300">Average attributed revenue from Blitz campaigns</p>
            </div>
          </div>

          <div className="mt-16 bg-gray-900 rounded-lg p-8 border border-gray-800">
            <h3 className="text-xl font-bold mb-6">Real Results From Past Blitz Clients</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-300">
                <Rocket className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>HVAC Company:</strong> 18 leads, 4 jobs closed ($12k revenue)</span>
              </li>
              <li className="flex items-start text-gray-300">
                <Rocket className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>Roofing Contractor:</strong> 31 qualified leads, 2 new regular clients</span>
              </li>
              <li className="flex items-start text-gray-300">
                <Rocket className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>Plumbing Service:</strong> 25 calls/week baseline to 42 calls/week</span>
              </li>
              <li className="flex items-start text-gray-300">
                <Rocket className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>Pest Control:</strong> $2,200 ad spend generated $18,400 in contracts</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="px-4 py-16 lg:py-24 border-b border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Why The 30-Day Blitz Works
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Zap className="w-6 h-6 text-yellow-500 mr-3" />
                Concentrated Effort
              </h3>
              <p className="text-gray-300">
                We don't build out a slow plan. We go all-in for 30 days, hitting every lever at once. This creates momentum that compounds.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Target className="w-6 h-6 text-blue-500 mr-3" />
                Proven Methodology
              </h3>
              <p className="text-gray-300">
                This is the same playbook we've used to help 100+ businesses. We know what works. We execute it fast.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <TrendingUp className="w-6 h-6 text-green-500 mr-3" />
                Fast Learning Loop
              </h3>
              <p className="text-gray-300">
                30 days gives us time to test, learn, and optimize. We see what resonates with your customers and double down on winners.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Users className="w-6 h-6 text-purple-500 mr-3" />
                Hands-On Support
              </h3>
              <p className="text-gray-300">
                We're in there with you, making adjustments daily. This isn't a set-and-forget program. It's an active partnership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="px-4 py-16 lg:py-24 border-b border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Perfect For...
          </h2>

          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span>Businesses that want to test our approach without long-term commitment</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span>Companies wanting a marketing jumpstart before scaling</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span>Seasonal businesses needing concentrated effort during peak season</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span>New service launches needing aggressive customer acquisition</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span>Teams who want to learn our process hands-on</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Money-Back Guarantee */}
      <section className="px-4 py-16 lg:py-24 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-900 to-green-800 rounded-lg p-12 text-center border border-green-600">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              100% Money-Back Guarantee
            </h3>
            <p className="text-lg text-gray-100 mb-6">
              We're confident in our results. If you don't see measurable improvement in leads, website traffic, or customer inquiries within your 30-Day Blitz, we'll refund your full $1,499 investment. No questions. No hassle.
            </p>
            <p className="text-gray-200">
              That's how confident we are in this program.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Accelerate?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            30 days. Intensive focus. Measurable momentum. Let's go.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-10 rounded-lg text-lg transition-colors">
            Start Your 30-Day Blitz Now
          </button>
          <p className="text-gray-400 mt-6">
            Limited spots available each month. Next Blitz starts in 7 days.
          </p>
        </div>
      </section>
    </div>
  );
}
