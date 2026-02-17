# Strategy Stack Website Expansion — Project Spec

**Project:** Multi-Vertical Website Expansion  
**Date:** 2026-02-16  
**Status:** Planning

---

## Objective

Expand the Strategy Stack website from a Home Services-focused single page to a multi-vertical platform serving:

1. **Home Services** (existing, becomes template)
2. **Property Management / Multifamily**
3. **Automotive**
4. **Retail**
5. **Early Stage SaaS Startups**

Plus an **industry-agnostic homepage** that positions Strategy Stack as experts across these verticals while remaining open to adjacent markets.

---

## Site Architecture

```
/ (Homepage - Agnostic)
├── /home-services
├── /property-management
├── /automotive
├── /retail
├── /saas-startups
└── /pricing (Dedicated pricing page with industry tabs)
```

---

## Page Components

### All Vertical Pages (Shared Structure)
- Hero (industry-specific messaging)
- Problem (industry pain points)
- Solution (how we solve it)
- **Client Experience** (NEW - replacing Results/Pro Forma)
- Testimonials
- Projects/Case Studies
- Pricing Preview (links to /pricing)
- Contact

### Homepage (Agnostic)
- Hero (industry-neutral, design-forward)
- Vertical Showcase (light touch on all 5 markets)
- **Client Experience** (universal version)
- Trust Signals / Social Proof
- CTA to explore verticals or pricing
- **Design Priority:** Animation, interactivity, UI polish to compensate for less market-specific content

### Pricing Page (Dedicated)
- Industry selector tabs (dynamic content swap)
- 3-tier packages (Starter/Growth/Scale)
- Expandable detail view per package
- À la carte add-ons
- Future: ROI calculator, free audit tool, Stripe checkout

---

## New Section: Client Experience

**Replacing:** "Real Results" / Pro Forma section

**Structure:** 4-phase visual journey

| Phase | Title | Description |
|-------|-------|-------------|
| 1 | **Comprehensive Audit** | Deep dive into your market, competitors, digital presence, and quick wins before we spend a dime |
| 2 | **Strategy & Setup** | Custom game plan + AI/automation configured specifically for your business — no templates |
| 3 | **Launch & Optimize** | Go live fast, then iterate based on real performance data — not guesswork |
| 4 | **Measurable ROI** | Real-time dashboard access, transparent reporting, you see exactly what's working |

**Design:** Step-by-step visual flow (timeline, numbered cards, or interactive progression)

---

## Technical Requirements

### SEO
- [ ] Schema markup (LocalBusiness, Service, Organization, FAQ)
- [ ] Meta tags per page (title, description, OG, Twitter)
- [ ] Sitemap.xml generation
- [ ] robots.txt optimization
- [ ] Semantic HTML structure
- [ ] Alt text for all images

### Performance
- [ ] Target Lighthouse 90+ (Performance, Accessibility, Best Practices, SEO)
- [ ] Code splitting per route (React lazy loading)
- [ ] Image optimization (WebP, lazy loading)
- [ ] Font optimization (subset, preload)
- [ ] Minimize bundle size

### Responsive
- [ ] Mobile-first design
- [ ] Breakpoints: mobile (<640px), tablet (640-1024px), desktop (>1024px)
- [ ] Touch-friendly interactions
- [ ] Test on real devices

### Future (Phase 2+)
- [ ] Stripe integration for self-service purchase
- [ ] Client portal / dashboard
- [ ] ROI calculator
- [ ] Free audit tool (lead gen)
- [ ] Digital products / resources

---

## Design Principles

### Homepage
- Lead with design impact (animation, interactivity)
- Less text, more visual storytelling
- Clear pathways to verticals
- "Expertise across industries" positioning
- Modern, bold, memorable

### Vertical Pages
- Market-specific language and pain points
- Industry-relevant examples
- Consistent structure for easy maintenance
- SEO-optimized for vertical keywords

### Brand Consistency
- Neo-brutalist design language
- Bold typography
- Playful but professional
- "No BS" tone throughout

---

## Workflow

### Phase 1: Plan ✅ IN PROGRESS
- [x] Project spec (this document)
- [ ] Notion docs organized locally
- [ ] SEO baseline audit
- [ ] Homepage wireframe
- [ ] Content outline per page

### Phase 2: Review
- [ ] Homepage mockup approval
- [ ] Client Experience section design approval
- [ ] Navigation/IA approval
- [ ] SEO strategy approval

### Phase 3: Build
- [ ] React Router setup
- [ ] Homepage
- [ ] Home Services (template)
- [ ] Property Management
- [ ] Automotive
- [ ] Retail
- [ ] SaaS Startups
- [ ] Pricing page

### Phase 4: Validate
- [ ] Lighthouse audit (target 90+)
- [ ] Mobile/tablet/desktop QA
- [ ] Cross-browser testing
- [ ] SEO validation
- [ ] Load time check

### Phase 5: Deploy
- [ ] Push to GitHub
- [ ] Cloudflare sync
- [ ] Post-deploy verification

---

## Files & Resources

- **Local repo:** `/Users/russchandler/Agency Website Artwork/Agency Resources/Website/strategy-stack`
- **GitHub:** https://github.com/StratStackMarketer/strategy-stack
- **Live site:** https://strategystackai.com
- **Notion workspace:** Solopreneur (API connected)
- **Docs folder:** `./docs/` (this directory)

---

## Notes

- Russ has 10+ years experience in Automotive, Multifamily, SaaS; 5+ in Home Services, Retail
- Retail is "maybe" but included for cold outreach opportunity (low-hanging fruit)
- Homepage needs to impress through design since it lacks vertical-specific content leverage
- Long-term vision: SaaS-like self-service purchase experience
