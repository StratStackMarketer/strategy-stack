import { StubPage } from './StubPage';
export function ResourcesPage() {
  return <StubPage
    badge="Resources"
    title="Resource Center"
    subtitle="Success stories, use cases, tools, and insights — everything we know about marketing for businesses where every buyer decision matters."
    badgeColor="bg-primary text-white"
    relatedLinks={[
      { to: '/resources/success-stories', label: 'Success stories' },
      { to: '/resources/use-cases', label: 'Use cases' },
      { to: '/blog', label: 'Blog' },
    ]}
  />;
}
export default ResourcesPage;
