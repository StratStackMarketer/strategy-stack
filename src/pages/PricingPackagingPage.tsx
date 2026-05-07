import { StubPage } from './StubPage';
export function PricingPackagingPage() {
  return <StubPage
    badge="Pricing & Packaging"
    title="Transparent Pricing"
    subtitle="Monthly retainers, single-payment packages, project quotes, and custom solutions. No long-term contracts. No hidden fees."
    badgeColor="bg-green-400"
    relatedLinks={[
      { to: '/pricing', label: 'Monthly plans' },
      { to: '/solutions', label: 'Pre-packaged solutions' },
      { to: '/booster-packs', label: 'Booster Packs' },
    ]}
  />;
}
export default PricingPackagingPage;
