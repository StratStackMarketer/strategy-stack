# SEO Baseline Audit: Strategy Stack Website

**Audit Date:** February 16, 2026  
**Live URL:** https://strategystackai.com  
**Tech Stack:** React 19.2 + Vite 7.2 + TypeScript + Tailwind CSS 4.x  
**Hosting:** Cloudflare Pages

---

## Executive Summary

The current Strategy Stack website is a modern React SPA with good foundational SEO elements (schema markup, meta tags, Open Graph). However, there are critical gaps that will hurt search visibility, particularly around **URL consistency, missing crawlability files, and SPA-specific SEO challenges**.

### Priority Fixes (Do First)
1. ❌ Fix domain mismatch (strategystack.com → strategystackai.com in all meta/schema)
2. ❌ Add robots.txt and sitemap.xml
3. ❌ Implement pre-rendering or SSR for SPA SEO
4. ⚠️ Optimize Core Web Vitals (LCP is likely slow due to large hero images)

---

## Current Site State Analysis

### ✅ What's Working Well

| Element | Status | Notes |
|---------|--------|-------|
| **Title Tag** | ✅ Good | "Strategy Stack \| AI Marketing for Indianapolis Home Services" |
| **Meta Description** | ✅ Good | Descriptive, includes keywords, proper length |
| **Open Graph Tags** | ✅ Present | Title, description, image, type, locale |
| **Twitter Cards** | ✅ Present | Large image card configured |
| **Schema.org JSON-LD** | ✅ Comprehensive | Organization, LocalBusiness, WebSite, Service with pricing |
| **Viewport Meta** | ✅ Correct | Mobile-friendly viewport configured |
| **Language Attribute** | ✅ Set | `<html lang="en">` |
| **Favicon** | ✅ Present | 32x32, 16x16, ICO formats |
| **Keywords Meta** | ✅ Present | Relevant keywords included |

### ❌ Critical Issues Found

#### 1. **URL/Domain Mismatch**
The site is deployed at `strategystackai.com` but all canonical URLs, Open Graph URLs, and Schema references point to `strategystack.com`:

```html
<!-- CURRENT (Wrong) -->
<link rel="canonical" href="https://strategystack.com/" />
<meta property="og:url" content="https://strategystack.com/" />

<!-- Schema references strategystack.com throughout -->
```

**Impact:** Search engines see conflicting signals, may not properly index the site.

**Fix:** Update all references to `strategystackai.com` or set up proper redirect from `strategystack.com` if you own both domains.

#### 2. **Missing robots.txt**
Currently returns the SPA HTML page instead of a proper robots.txt file.

**Impact:** Search engines can't find crawling instructions; may crawl inefficiently.

#### 3. **Missing sitemap.xml**
Currently returns the SPA HTML page instead of XML sitemap.

**Impact:** Search engines have no roadmap of your pages; slower/incomplete indexing.

#### 4. **SPA Without Server-Side Rendering**
React SPA relies entirely on client-side JavaScript rendering.

**Impact:** 
- Googlebot renders JS but may miss content or experience delays
- Other search engines (Bing, DuckDuckGo) may struggle more
- Initial page load sends minimal HTML content

#### 5. **Missing Images in Public Folder**
- `og-image.png` - Referenced but doesn't exist
- `apple-touch-icon.png` - Listed in manifest but not in public folder

---

## 2026 SEO Best Practices Checklist

### Core Web Vitals Targets (Google Ranking Factor)

| Metric | Target | Current Estimate | Priority |
|--------|--------|------------------|----------|
| **LCP** (Largest Contentful Paint) | ≤ 2.5s | ~3-4s (hero section) | 🔴 HIGH |
| **INP** (Interaction to Next Paint) | ≤ 200ms | ~150ms (Framer Motion) | 🟡 MEDIUM |
| **CLS** (Cumulative Layout Shift) | ≤ 0.1 | ~0.05 (stable layout) | 🟢 GOOD |

**LCP Issues:**
- Hero section has large images and animations that delay LCP
- Framer Motion animations block initial paint
- No image preloading or lazy loading strategy

### Mobile-First Requirements

| Requirement | Status | Action Needed |
|------------|--------|---------------|
| Responsive design | ✅ Yes | Using Tailwind breakpoints |
| Touch-friendly targets | ✅ Yes | Buttons are appropriately sized |
| Readable font sizes | ✅ Yes | Base font is legible |
| No horizontal scroll | ✅ Yes | Container constraints work |
| Fast mobile load | ⚠️ Check | Large SVG assets (400KB+) |
| Mobile-friendly nav | ✅ Yes | Hamburger menu implemented |

### Meta Tag Best Practices

```html
<!-- REQUIRED (Currently Have) -->
<title>60 chars max, keyword-rich</title>
<meta name="description" content="155-160 chars, compelling">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="canonical" href="https://strategystackai.com/">

<!-- RECOMMENDED (Add These) -->
<meta name="geo.region" content="US-IN">
<meta name="geo.placename" content="Indianapolis">
<meta name="robots" content="index, follow, max-image-preview:large">
<link rel="preconnect" href="https://fonts.googleapis.com">
```

---

## Schema Markup Recommendations

### Current Schema (Good Foundation)
You have Organization, LocalBusiness, WebSite, and Service schemas. **Improvements needed:**

### Enhanced LocalBusiness Schema

```json
{
  "@type": "LocalBusiness",
  "@id": "https://strategystackai.com/#localbusiness",
  "name": "Strategy Stack",
  "image": "https://strategystackai.com/images/logo-full.png",
  "url": "https://strategystackai.com",
  "telephone": "+1-317-273-3916",
  "email": "russchandler@strategystackmarketing.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "", 
    "addressLocality": "Indianapolis",
    "addressRegion": "IN",
    "postalCode": "",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 39.7684,
    "longitude": -86.1581
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "priceRange": "$$",
  "sameAs": [
    "https://www.facebook.com/strategystackmarketing",
    "https://www.linkedin.com/company/strategy-stack"
  ],
  "areaServed": {
    "@type": "City",
    "name": "Indianapolis",
    "containedInPlace": {
      "@type": "State",
      "name": "Indiana"
    }
  },
  "knowsAbout": [
    "Digital Marketing",
    "SEO",
    "Google Ads",
    "Social Media Marketing",
    "Home Services Marketing"
  ]
}
```

### Add ProfessionalService Schema (More Specific)

```json
{
  "@type": "ProfessionalService",
  "@id": "https://strategystackai.com/#service",
  "name": "Strategy Stack Marketing Agency",
  "serviceType": "Digital Marketing Agency",
  "provider": {"@id": "https://strategystackai.com/#organization"},
  "areaServed": {
    "@type": "State",
    "name": "Indiana"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Marketing Packages",
    "itemListElement": [...]
  }
}
```

### Add FAQ Schema (for Featured Snippets)

Create FAQ schema from the "Quick Answers" section in Contact:

```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you require contracts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No contracts—cancel anytime. We believe in earning your business every month."
      }
    },
    {
      "@type": "Question",
      "name": "How long does the free audit take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The free marketing audit takes about 48 hours to complete."
      }
    }
  ]
}
```

---

## Load Time Optimization for React/Vite SPA

### 1. Pre-rendering Strategy (CRITICAL)

**Option A: Vite Plugin Pre-render (Recommended)**
```bash
npm install vite-plugin-ssr-prerender
```

```ts
// vite.config.ts
import prerender from 'vite-plugin-ssr-prerender'

export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes: ['/', '/pricing', '/contact'] // Add all routes
    })
  ]
})
```

**Option B: Cloudflare Workers (Dynamic)**
Use Cloudflare Workers to pre-render for bots while serving SPA to users.

### 2. Image Optimization

**Current Issues:**
- `ProblemComputerCharacter.svg` - 414KB
- `SolutionComputerCharacter.svg` - 442KB
- `SolutionComputerCharacter.png` - 604KB

**Fixes:**
```tsx
// Add lazy loading to images
<img 
  src="/images/logo-full.png" 
  alt="Strategy Stack" 
  loading="lazy"
  decoding="async"
  width="240"
  height="60"
/>

// For hero images - use priority loading
<link rel="preload" as="image" href="/images/hero-bg.webp">
```

**Convert to Modern Formats:**
```bash
# Convert SVGs to optimized PNGs where appropriate
# Use WebP for all raster images
# Compress with tools like Squoosh or Sharp
```

### 3. Font Loading Optimization

```html
<!-- Add to <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Use font-display: swap -->
<style>
  @font-face {
    font-family: 'YourFont';
    font-display: swap;
  }
</style>
```

### 4. Code Splitting

```tsx
// Lazy load below-the-fold sections
import { lazy, Suspense } from 'react';

const Testimonials = lazy(() => import('./sections/Testimonials'));
const Projects = lazy(() => import('./sections/Projects'));

// In App.tsx
<Suspense fallback={<div>Loading...</div>}>
  <Testimonials />
</Suspense>
```

### 5. Bundle Analysis

```bash
# Add to package.json scripts
"analyze": "vite build && npx vite-bundle-visualizer"
```

Check for:
- Framer Motion tree-shaking (only import what you use)
- Lucide icons (import individually, not entire library)
- Duplicate dependencies

---

## Files to Create

### 1. robots.txt
Create `/public/robots.txt`:

```txt
User-agent: *
Allow: /

# Sitemaps
Sitemap: https://strategystackai.com/sitemap.xml

# Block development/staging if applicable
# Disallow: /staging/
# Disallow: /dev/

# Crawl-delay for politeness (optional)
Crawl-delay: 1
```

### 2. sitemap.xml
Create `/public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://strategystackai.com/</loc>
    <lastmod>2026-02-16</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://strategystackai.com/#pricing</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://strategystackai.com/#contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

### 3. og-image.png
Create a 1200x630px Open Graph image for social sharing.

### 4. apple-touch-icon.png
Create a 180x180px icon for iOS home screen.

---

## Implementation Priority List

### Phase 1: Critical (This Week)
1. [ ] Fix all URLs from `strategystack.com` → `strategystackai.com`
2. [ ] Add `robots.txt` to `/public/`
3. [ ] Add `sitemap.xml` to `/public/`
4. [ ] Create `og-image.png` (1200x630px)
5. [ ] Create `apple-touch-icon.png` (180x180px)

### Phase 2: Performance (Next 2 Weeks)
1. [ ] Implement pre-rendering or SSR
2. [ ] Optimize/compress SVG files (target <100KB each)
3. [ ] Add image lazy loading
4. [ ] Add preconnect hints for external resources
5. [ ] Implement code splitting for below-fold sections

### Phase 3: Enhancement (Next Month)
1. [ ] Add FAQ schema markup
2. [ ] Enhanced LocalBusiness schema with hours, geo
3. [ ] Add web-vitals monitoring
4. [ ] Submit sitemap to Google Search Console
5. [ ] Set up Cloudflare performance rules

---

## Monitoring & Tools

### Google Search Console Setup
1. Verify ownership of `strategystackai.com`
2. Submit sitemap
3. Monitor Core Web Vitals report
4. Check for indexing issues

### PageSpeed Insights
Run baseline test: https://pagespeed.web.dev/?url=https://strategystackai.com

### Lighthouse CI
```bash
npm install -g @lhci/cli
lhci autorun
```

### web-vitals Library
```tsx
// Add to main.tsx
import { onLCP, onINP, onCLS } from 'web-vitals';

onLCP(console.log);
onINP(console.log);
onCLS(console.log);
```

---

## Summary of Required Changes

| File | Change Type | Description |
|------|-------------|-------------|
| `index.html` | Edit | Fix all strategystack.com → strategystackai.com |
| `public/robots.txt` | Create | Crawl instructions |
| `public/sitemap.xml` | Create | Page listing for search engines |
| `public/og-image.png` | Create | Social share image |
| `public/apple-touch-icon.png` | Create | iOS icon |
| `vite.config.ts` | Edit | Add pre-render plugin |
| `src/App.tsx` | Edit | Add code splitting |
| `src/components/*` | Edit | Add lazy loading to images |

---

**Next Steps:** Start with Phase 1 fixes. Once complete, run PageSpeed Insights to establish a performance baseline before Phase 2 optimizations.
