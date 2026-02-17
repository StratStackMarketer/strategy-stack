# DESIGN-SYSTEM.md — Strategy Stack Visual Identity

*Last updated: 2026-02-16*

---

## Overview

Strategy Stack uses a **Neo-Brutalist** design language — bold, playful, and unapologetically direct. This mirrors our brand voice: no BS, transparent, and memorable.

The design system prioritizes:
- **Bold visual impact** over subtle refinement
- **Playful interactions** that delight without distracting
- **Clear hierarchy** that guides users to action
- **Accessibility** without sacrificing personality

---

## Color Palette

### Primary Colors

| Name | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| **Primary Purple** | `#7c3aed` | `--color-primary` | CTAs, links, accents |
| **Primary Dark** | `#6d28d9` | `--color-primary-dark` | Hover states |
| **Primary Light** | `#8b5cf6` | `--color-primary-light` | Subtle accents |
| **Secondary Yellow** | `#fbbf24` | `--color-secondary` | Badges, highlights |
| **Accent Green** | `#22c55e` | `--color-accent` | Success, positive indicators |

### Neo-Brutalist Accents

| Name | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| **Brutal Pink** | `#ec4899` | `--color-brutal-pink` | Decorative accents |
| **Brutal Cyan** | `#06b6d4` | `--color-brutal-cyan` | Info, cool accents |
| **Brutal Orange** | `#f97316` | `--color-brutal-orange` | Warnings, energy |
| **Brutal Red** | `#ef4444` | `--color-brutal-red` | Errors, problems |
| **Brutal Indigo** | `#6366f1` | `--color-brutal-indigo` | Variation accents |

### Neutrals

| Name | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| **Black** | `#000000` | `--color-black` | Borders, text, shadows |
| **White** | `#ffffff` | `--color-white` | Backgrounds, text on dark |
| **Gray 50-900** | Scale | `--color-gray-*` | UI elements, text hierarchy |

### Brand Colors (from Notion)

| Name | Usage |
|------|-------|
| Sage | Primary accent |
| Seasalt | Background/neutral |
| Beige | Warm accent |
| Anti-flash White | Light background |
| Pakistan Green | Primary brand color |

*Note: Reconcile Notion brand colors with implemented palette. Current site uses Purple as primary.*

---

## Typography

### Font Families

| Type | Font | CSS Variable | Usage |
|------|------|--------------|-------|
| **Headings** | Modak, Space Grotesk | `--font-heading` | All h1-h6 |
| **Body** | Inter, system-ui | `--font-body` | Paragraphs, UI text |

### Modak Font

Custom font loaded from `/fonts/Modak-Regular.ttf`. Bold, playful, neo-brutalist aesthetic.

**Usage:**
- Hero headlines
- Section titles
- Pricing tier names
- Any "big statement" text

### Type Scale

| Element | Size (Desktop) | Size (Mobile) | Weight |
|---------|----------------|---------------|--------|
| h1 | 5rem - 8rem | 2.5rem - 3rem | Normal (Modak) |
| h2 | 2.5rem - 4rem | 1.75rem - 2.5rem | Normal (Modak) |
| h3 | 1.5rem - 2rem | 1.25rem - 1.5rem | Normal (Modak) |
| Body | 1rem - 1.25rem | 1rem | 400 |
| Small | 0.875rem | 0.875rem | 400 |

### Line Heights

- Headings: 1.1
- Body: 1.6

---

## Shadows (Neo-Brutalism)

The signature neo-brutalist look: solid offset shadows in black.

| Size | CSS Variable | Offset | Usage |
|------|--------------|--------|-------|
| **Small** | `--shadow-brutal-sm` | 3px 3px | Badges, small elements |
| **Medium** | `--shadow-brutal-md` | 5px 5px | Cards (default) |
| **Large** | `--shadow-brutal-lg` | 8px 8px | Cards (hover) |
| **XL** | `--shadow-brutal-xl` | 12px 12px | Hero elements, modals |

### Shadow Behavior

- Default state: `-md` shadow
- Hover state: Element translates `-3px, -3px`, shadow increases to `-lg`
- Active state: Element returns to `0, 0`, shadow reduces to `-sm`

This creates a tactile "pressing" effect.

---

## Borders

| Style | Value | Usage |
|-------|-------|-------|
| **Standard** | 3px solid black | Cards, buttons, inputs |
| **Thick** | 4px solid black | Emphasized elements |
| **Accent** | 3px solid [color] | Colored borders |

### Border Radius

| Size | Value | CSS Variable | Usage |
|------|-------|--------------|-------|
| Small | 4px | `--radius-sm` | Badges, tags |
| Medium | 8px | `--radius-md` | Cards, inputs |
| Large | 12px | `--radius-lg` | Large cards |
| XL | 16px | `--radius-xl` | Hero elements |

---

## Components

### Buttons

```css
.btn-brutal           /* Base: inline-flex, bold, uppercase, 3px border */
.btn-brutal-primary   /* Purple bg, white text */
.btn-brutal-secondary /* Yellow bg, black text */
.btn-brutal-white     /* White bg, black text */
.btn-brutal-black     /* Black bg, white text, purple shadow */
```

**Interaction:**
- Hover: translate(-2px, -2px), shadow increases
- Active: translate(0, 0), shadow decreases

### Cards

```css
.card-brutal          /* White bg, 3px border, md shadow */
```

**Interaction:**
- Hover: translate(-3px, -3px), shadow to lg

### Badges

```html
<span class="inline-block px-4 py-2 bg-secondary border-3 border-black brutal-shadow-sm font-bold text-sm uppercase tracking-wider">
  Badge Text
</span>
```

---

## Layout

### Container

- Max width: 1280px
- Padding: 1.5rem (24px)
- Centered with auto margins

### Sections

| Type | Padding | Width |
|------|---------|-------|
| `.section-full` | 5rem top/bottom | 100% |
| `.section-half` | 5rem top/bottom | max 900px |

### Grid

Using Tailwind's grid system:
- 1 col mobile
- 2 col tablet (md:)
- 3 col desktop (lg:)

---

## Animations

### Keyframes Available

| Name | Description | Duration |
|------|-------------|----------|
| `marquee` | Horizontal scroll left | 30s |
| `marquee-reverse` | Horizontal scroll right | 30s |
| `float` | Subtle vertical bob | 6s |
| `pulse-glow` | Opacity pulse | 2s |
| `spin` | 360° rotation | - |
| `bounce-subtle` | Small vertical bounce | - |
| `slide-up` | Fade in from below | 0.6s |
| `fade-in` | Simple opacity fade | 0.4s |

### Animation Classes

```css
.animate-slide-up     /* Slide up and fade in */
.animate-fade-in      /* Simple fade in */
.animate-float        /* Floating effect */
.stagger-1 to .stagger-5  /* Animation delays */
```

### Framer Motion Patterns

Used for scroll-triggered animations:

```tsx
// Container with staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// Individual items
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
```

---

## Interactive Elements

### Custom Cursor

Custom hand cursor applied globally:
- Default: `/images/cursors/cursor-hand.png`
- Click: `/images/cursors/cursor-thumbsup.png` (applied via JS class)

### Hover Effects

Standard pattern for interactive elements:
1. Translate upward/left (-3px, -3px)
2. Increase shadow
3. Subtle background color shift (optional)

### Decorative Elements

Floating shapes used for visual interest:
- Rotating squares (20s spin, infinite)
- Floating rectangles (4s vertical bob)
- Colored accent blocks at corners

---

## Backgrounds

### Patterns

```css
.bg-grid-pattern    /* 40px grid lines */
.bg-dot-pattern     /* 20px dot pattern */
```

### Custom Components

- `<AnimatedGrid />` — Animated background grid
- `<CloudGraphics />` — Decorative floating cloud elements
- `<SparkLine />` — Animated line decoration

---

## Logo Guidelines

### Usage

| Context | Logo Type | Notes |
|---------|-----------|-------|
| Header (light bg) | Full wordmark | Primary usage |
| Header (dark bg) | Full wordmark (inverted) | Ensure contrast |
| Favicon | Icon only | 32x32, 16x16 |
| Social | Icon or wordmark | Platform dependent |

### Clear Space

Maintain minimum clear space equal to the height of the "S" in Stack around all sides.

### Don'ts

- Don't stretch or distort
- Don't apply effects (drop shadows, glows)
- Don't place on busy backgrounds without sufficient contrast
- Don't rotate

*Note: Add specific logo files and variations as they're created.*

---

## Voice & Tone Integration

From brand guidelines, our three tones:

### 1. Friendly
- Warm, approachable, conversational
- Use contractions, everyday words
- "Hey there! Let's walk through this together."

### 2. Humorous
- Playful, clever, memorable
- Puns, exaggerations, unexpected comparisons
- "Updating software might not sound thrilling — but hey, neither does flossing."

### 3. Encouraging
- Motivating, empowering, action-oriented
- "You've got this. Start where you are, keep moving."

**Apply to UI copy:**
- Error messages: Friendly + Encouraging
- Success states: Encouraging
- Feature descriptions: Friendly + light Humorous
- CTAs: Direct, action-oriented

---

## Responsive Breakpoints

Using Tailwind defaults:

| Breakpoint | Width | Usage |
|------------|-------|-------|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

### Mobile-First Principles

1. Stack everything vertically by default
2. Touch targets minimum 44px
3. Reduce animation complexity on mobile
4. Hamburger nav with accordion for Industries

---

## Accessibility

### Color Contrast

- Text on white: Use gray-700 minimum (#374151)
- Text on primary: Use white (#ffffff)
- Check all color combinations with WCAG 2.1 AA standard

### Focus States

Visible focus rings on all interactive elements:
```css
focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
```

### Motion Preferences

Respect `prefers-reduced-motion`:
```css
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; }
}
```

---

## Inspiration Sources

*To be expanded with specific references*

### Neo-Brutalist Web Design
- [ ] Awwwards neo-brutalism collection
- [ ] Dribbble brutalist UI shots
- [ ] Gumroad design
- [ ] Figma community brutalist kits

### Animation Inspiration
- [ ] Framer Motion examples
- [ ] GSAP showcases
- [ ] Lottie Files

### Agency Sites
- [ ] Similar agency sites in each vertical
- [ ] Premium marketing agency designs

---

## File Structure

```
/public/
├── fonts/
│   └── Modak-Regular.ttf
├── images/
│   ├── cursors/
│   │   ├── cursor-hand.png
│   │   └── cursor-thumbsup.png
│   └── logo-full.png
├── robots.txt
└── sitemap.xml

/src/
├── index.css           # Design system CSS
├── components/
│   ├── ui/             # Design system components
│   │   ├── AnimatedGrid.tsx
│   │   ├── CloudGraphics.tsx
│   │   ├── SparkLine.tsx
│   │   └── ...
│   ├── layout/         # Header, Footer
│   └── sections/       # Page sections
└── ...
```

---

## Changelog

| Date | Change |
|------|--------|
| 2026-02-16 | Initial documentation from existing CSS + Notion brand guidelines |

---

## Next Steps

- [ ] Reconcile Notion brand colors with implemented palette
- [ ] Add logo files and variations
- [ ] Add component screenshots/examples
- [ ] Document FAQ accordion component (new)
- [ ] Add inspiration board links
- [ ] Create higher-fidelity mockups before final build

