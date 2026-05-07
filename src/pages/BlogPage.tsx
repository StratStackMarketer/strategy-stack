import { StubPage } from './StubPage';
export function BlogPage() {
  return <StubPage
    badge="Resources"
    title="The Blog"
    subtitle="Insights, guides, and strategies for businesses with high-consideration buyers — from lead response to content to AI-powered marketing."
    badgeColor="bg-primary text-white"
    auditCta={false}
    relatedLinks={[
      { to: '/resources', label: 'Resource center' },
      { to: '/how-it-works/audits', label: 'Free audit' },
      { to: '/resources/success-stories', label: 'Success stories' },
    ]}
  />;
}
export default BlogPage;
