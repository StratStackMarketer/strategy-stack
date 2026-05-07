import { StubPage } from './StubPage';
export function SuccessStoriesPage() {
  return <StubPage
    badge="Resources"
    title="Success Stories"
    subtitle="Real results from real clients across Home Services, Property Management, Automotive, Retail, and SaaS."
    badgeColor="bg-green-400"
    relatedLinks={[
      { to: '/resources', label: 'Resource center' },
      { to: '/resources/use-cases', label: 'Use cases' },
      { to: '/how-it-works/audits', label: 'Free audit' },
    ]}
  />;
}
export default SuccessStoriesPage;
