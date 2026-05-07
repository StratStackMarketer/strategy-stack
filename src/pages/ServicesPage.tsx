import { StubPage } from './StubPage';
export function ServicesPage() {
  return <StubPage
    badge="What We Do"
    title="Our Services"
    subtitle="SEO, Google Ads, Social Media, Web Design, and Google Business Profile management — built for businesses where every customer decision matters."
    badgeColor="bg-cyan-400"
    relatedLinks={[
      { to: '/products', label: 'AI Products' },
      { to: '/solutions', label: 'Bundled solutions' },
      { to: '/pricing-packaging', label: 'Pricing' },
    ]}
  />;
}
export default ServicesPage;
