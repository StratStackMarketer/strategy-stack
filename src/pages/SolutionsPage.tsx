import { StubPage } from './StubPage';
export function SolutionsPage() {
  return <StubPage
    badge="What We Do"
    title="Our Solutions"
    subtitle="Pre-built packages designed around the most common problems we solve — Booster Packs, 30-Day Blitz, Full Service, and Custom bundling."
    badgeColor="bg-yellow-400"
    relatedLinks={[
      { to: '/booster-packs', label: 'Booster Packs' },
      { to: '/30-day-blitz', label: '30-Day Blitz' },
      { to: '/pricing-packaging', label: 'Full pricing' },
    ]}
  />;
}
export default SolutionsPage;
