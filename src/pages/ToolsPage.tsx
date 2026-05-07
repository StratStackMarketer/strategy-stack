import { StubPage } from './StubPage';
export function ToolsPage() {
  return <StubPage
    badge="Resources"
    title="Tools"
    subtitle="The tools we use, recommend, and have built — including our free Marketing Audit Tool and resources for high-consideration businesses."
    badgeColor="bg-yellow-400"
    relatedLinks={[
      { to: '/how-it-works/audits', label: 'Free Marketing Audit' },
      { to: '/resources', label: 'Resource center' },
      { to: '/how-it-works/ai-automation', label: 'Our AI stack' },
    ]}
  />;
}
export default ToolsPage;
