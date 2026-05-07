import { StubPage } from './StubPage';
export function ProductsPage() {
  return <StubPage
    badge="What We Do"
    title="Our AI Products"
    subtitle="AI Receptionist, Follow-Up Agent, Website Chatbot, and Database Reactivation — the tools that run your lead pipeline around the clock."
    badgeColor="bg-purple-400"
    relatedLinks={[
      { to: '/how-it-works/ai-automation', label: 'How AI works' },
      { to: '/solutions', label: 'See bundled solutions' },
      { to: '/pricing-packaging', label: 'Pricing' },
    ]}
  />;
}
export default ProductsPage;
