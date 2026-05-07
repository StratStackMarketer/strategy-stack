import { StubPage } from './StubPage';
export function BoosterPacksPage() {
  return <StubPage
    badge="Pricing & Packaging"
    title="Booster Packs"
    subtitle="One problem. 30 days. Fixed price. No ongoing commitment required. Website, GBP, and Social Media Blitz packs — plus à la carte add-ons."
    badgeColor="bg-orange-400"
    relatedLinks={[
      { to: '/30-day-blitz', label: '30-Day Blitz details' },
      { to: '/solutions', label: 'All solutions' },
      { to: '/pricing-packaging', label: 'Full pricing overview' },
    ]}
  />;
}
export default BoosterPacksPage;
