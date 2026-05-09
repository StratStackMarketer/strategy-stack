# QUEUE-WEBSITE.md — Strategy Stack Website Task Queue

*Tasks to execute autonomously during non-active sessions. Each task is self-contained with full specs.*

---

## ✅ COMPLETED TASKS

### W-001: Footer + Navigation Full Overhaul
**Completed:** 2026-05-09 | **Commit:** `c9bf4d0`

- **W-001A** ✅ Social icons updated (X logo, all 5 platforms linked)
- **W-001B** ✅ Footer link lists updated (Services + Company columns)
- **W-001C** ✅ Nav restructured → multi-dropdown (What We Do, How It Works, Industries, Pricing & Packaging, Resources) with Framer Motion, active states, mobile accordion
- **W-001D** ✅ All routes already in place in App.tsx
- **W-001E** ✅ Sitemap lastmod dates updated to 2026-05-09

### Agent Readiness + Cloudflare Config
**Completed:** 2026-05-09

- ✅ `_headers` — Link headers for RFC 8288 agent discovery
- ✅ `robots.txt` — Content-Signal directives (ai-train=no, search=yes, ai-input=yes)
- ✅ `/.well-known/mcp/server-card.json` — MCP Server Card (SEP-1649)
- ✅ `/.well-known/agent-skills/index.json` + `book-audit/SKILL.md`
- ✅ `/.well-known/api-catalog` — RFC 9727 linkset
- ✅ Cloudflare WAF: Pomelli bypass rule (user-agent + referer skip)
- ✅ Cloudflare: IP Access Allow rules for 3 Pomelli IPs
- ✅ Cloudflare: Browser Integrity Check OFF, Security Level → Low, Bot Fight Mode OFF
- ⬜ **Pending (manual):** Markdown for Agents toggle in Cloudflare dashboard (Speed → Optimization)

---

## ACTIVE QUEUE

---

## TASK W-002: Resources Hub + Library Full Builds

**Execute:** Next session
**Priority:** HIGH — stub pages are live but empty; all nav links point here
**Estimated effort:** L (2-3 days)
**Status:** 🟡 NEEDS SPEC — content and layout to be defined before execution

### Scope

Build out the following pages from stub → full content:

| Route | Page | Notes |
|---|---|---|
| `/resources` | Resources Hub | Landing page linking to all sub-sections |
| `/resources/success-stories` | Success Stories | Client results / case studies |
| `/resources/use-cases` | Use Cases | Industry-specific AI marketing use cases |
| `/resources/tools` | Tools | Free tools or resources for prospects |

### Design Notes
- Use existing card-brutal pattern with colored top bars
- Hub page (`/resources`) should have clear navigation to all 4 sub-sections
- Success Stories and Use Cases: grid of cards, no fabricated data — use placeholder/framework content until real data exists
- Tools page: can feature the AI Audit as the hero tool with CTA

### Content Notes
- No fabricated testimonials, case studies, or specific numbers
- Placeholder cards with "Coming Soon" or category descriptions are acceptable until real content exists
- Tools page should prominently feature the free marketing audit offer

---

## TASK W-003: Blog Template + Initial Posts

**Execute:** After W-002
**Priority:** MEDIUM — /blog stub is live but empty
**Estimated effort:** M (1-2 days)
**Status:** 🔴 BLOCKED — needs content brief from Russ before building

### Scope
- Blog index page (`/blog`) — grid layout, filterable by category
- Blog post template — single post layout with consistent structure
- 2-3 seed posts to populate the page (topics TBD with Russ)

### Blockers
- Topic selection and initial post content needed from Russ
- Category taxonomy to be defined

---

## TASK W-004: VWO Conversion Optimization Audit

**Execute:** When analytics data is sufficient
**Priority:** MEDIUM
**Estimated effort:** S (half day)
**Status:** 🔴 BLOCKED — need to review VWO data before removing script

### Scope
- Review VWO heatmaps + session recordings on key pages (homepage, pricing-packaging, products)
- Document findings and recommendations
- Remove VWO script if no active tests running and data has been reviewed
- Implement any high-confidence CRO fixes identified

---

## TASK W-005: Differentiation v2 + Brand/Sales Docs Update

**Execute:** After positioning review with Russ
**Priority:** LOW (internal — doesn't affect site directly)
**Estimated effort:** M
**Status:** 🔴 BLOCKED — strategic input required

### Scope
- Differentiation v2 doc
- Brand Guidelines v2
- Sales Playbook v2
- Update any website copy that reflects refined positioning

---

*Last updated: 2026-05-09*
