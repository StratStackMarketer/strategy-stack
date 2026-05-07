import { StubPage } from './StubPage';
export function UseCasesPage() {
  return <StubPage
    badge="Resources"
    title="Use Cases"
    subtitle="See how Strategy Stack applies to specific problems across every vertical we serve — from lead response to vacancy reduction to CAC improvement."
    badgeColor="bg-cyan-400"
    relatedLinks={[
      { to: '/resources', label: 'Resource center' },
      { to: '/resources/success-stories', label: 'Success stories' },
      { to: '/solutions', label: 'Our solutions' },
    ]}
  />;
}
export default UseCasesPage;
