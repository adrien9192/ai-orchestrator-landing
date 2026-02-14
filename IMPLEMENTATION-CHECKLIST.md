# Implementation Checklist — AI Orchestrator Landing

**Based on:** DESIGN-AUDIT.md (2026-02-14)  
**Priority:** Quick Wins first → High Impact → Polish

---

## ✅ Phase 1: Quick Wins (<1 hour total)

### 🎨 Visual Hierarchy & Accessibility

- [ ] **#1 — CTA Color Change (5 min)**
  - File: Update all CTA buttons (hero, pricing cards)
  - Change: `bg-orange-500` → `bg-yellow-400 text-gray-900`
  - Add: `hover:bg-yellow-500`
  - Impact: +8-12% conversions

- [ ] **#2 — Add Focus States (5 min)**
  - File: Global CSS or Tailwind config
  - Add: `*:focus-visible { outline: 3px solid #FBBF24; outline-offset: 2px; }`
  - Impact: WCAG AA compliance

- [ ] **#3 — Heading Color Hierarchy (10 min)**
  - Update all `<h2>` tags: Add `text-orange-400`
  - Update all `<h3>` tags: Add `text-yellow-400`
  - Keep body text white/grey
  - Impact: Better scannability

- [ ] **#4 — Increase Mobile Font Size (2 min)**
  - File: Global CSS or Tailwind config
  - Add: `html { font-size: 16px; }`
  - Impact: Mobile readability + accessibility

- [ ] **#5 — Fix Touch Targets (5 min)**
  - Update all buttons: Add `min-h-[48px] py-4`
  - Impact: Mobile UX + iOS guidelines

- [ ] **#6 — Add Favicon (3 min)**
  - Create/add favicon.ico to `/public`
  - Add `<link rel="icon" href="/favicon.ico">` in `<head>`
  - Impact: Professionalism

### 📝 Content Restructuring

- [ ] **#7 — Move Proof Section (2 min)**
  - Reorder page: Hero → Problem → **Proof** → Content → About → Pricing
  - Impact: +5-10% conversions (trust earlier)

- [ ] **#8 — Break "Le Problème" Into Bullets (15 min)**
  - Replace paragraphs with scannable bullet list
  - Bold key phrases
  - Add visual separators (→, ✗, ✓)
  - Impact: Better scannability

### 🔍 Accessibility Fixes

- [ ] **#9 — Fix Orange Text Contrast (3 min)**
  - Audit: Find all orange text on navy background
  - Replace: Use `text-yellow-400` for small text
  - Keep orange only for large headings (text-3xl+)
  - Impact: WCAG AA compliance

- [ ] **#10 — Emoji Aria Labels (15 min)**
  - Add `aria-hidden="true"` to decorative emojis
  - Add `<span class="sr-only">` text alternatives
  - Example: `<span aria-hidden="true">🔍</span><span class="sr-only">Research Agent</span>`
  - Impact: Screen reader accessibility

---

## 🚀 Phase 2: High Impact (~3 hours total)

### 🎯 Conversion Optimization

- [ ] **#1 — Sticky CTA (Desktop) (20 min)**
  - Create sticky header component
  - Show after hero scroll (600px+)
  - Include urgency badge + CTA button
  - Code: See DESIGN-AUDIT.md Section 5
  - Impact: +15-20% conversions

- [ ] **#2 — Inline Waitlist Forms (25 min)**
  - Replace pricing card anchor links with actual forms
  - Add email input + submit button per card
  - Add success state / error handling
  - Code: See DESIGN-AUDIT.md Section 5
  - Impact: +10-15% conversions

- [ ] **#3 — Visual Urgency Component (30 min)**
  - Replace text "[10/10] places..." with animated badge
  - Add pulsing red dot animation
  - Use border + background for emphasis
  - Code: See DESIGN-AUDIT.md Section 1
  - Impact: +5-8% conversions

### 🏆 Trust & Social Proof

- [ ] **#4 — Upgrade External Validation (20 min)**
  - Replace plain links with visual badges
  - Add Google Cloud logo + Reddit icon
  - Create bordered card components
  - Code: See DESIGN-AUDIT.md Section 2
  - Impact: +3-5% conversions

- [ ] **#5 — Add Testimonial Placeholders (25 min)**
  - Create testimonial card component
  - Add 2-3 beta tester quotes (or placeholders)
  - Place after Proof section
  - Code: See DESIGN-AUDIT.md Section 2
  - Impact: +5-8% conversions

### 📱 Mobile UX

- [ ] **#6 — Responsive Pricing Layout (30 min)**
  - Mobile: Show Early Bird expanded by default
  - Collapse other tiers into accordion/details element
  - Desktop: Keep 3-column grid
  - Code: See DESIGN-AUDIT.md Section 4
  - Impact: Better mobile scroll experience

- [ ] **#7 — Add Validation Feedback (10 min)**
  - Email input: Add inline validation (onBlur)
  - Show error state (red border)
  - Add helper text below input
  - Code: See DESIGN-AUDIT.md Section 5
  - Impact: UX polish

### 🎨 Visual Polish

- [ ] **#8 — Add Section Dividers (10 min)**
  - Add horizontal rules between major sections
  - Use gradient dividers: `bg-gradient-to-r from-transparent via-orange-500/50 to-transparent`
  - Impact: Visual breathing room

- [ ] **#9 — Hero Section Refactor (30 min)**
  - Implement new hero layout from mockup
  - Reorder: Urgency badge → Headline → Value prop → CTA → Metrics
  - Use yellow accent for subheadline
  - Code: See DESIGN-AUDIT.md Section 10
  - Impact: +10-15% conversions

---

## 💎 Phase 3: Polish (Week 2, ~4 hours)

- [ ] **Agent Runtime Charts**
  - Visualize Theo/Kelly/Marco runtime data
  - Use simple bar/line charts (Chart.js or Recharts)
  - Place in Proof section

- [ ] **Comparison Table**
  - Create table: Formation vs Udemy vs YouTube
  - Highlight differentiators (templates, production-ready, FR)

- [ ] **Exit-Intent Popup**
  - Trigger on mouse leave (desktop) or back button (mobile)
  - Offer final CTA or lead magnet

- [ ] **Lighthouse Audit**
  - Run PageSpeed Insights
  - Fix performance issues (image optimization, lazy loading)
  - Target: 90+ score

- [ ] **Schema.org Markup**
  - Add Course schema
  - Add Review schema (when testimonials added)
  - Add Organization schema

- [ ] **A/B Test Setup**
  - Install analytics (Plausible/Fathom)
  - Set up conversion goals
  - Prepare headline variants for testing

---

## 📊 Metrics to Track

**Before implementation:**
- [ ] Baseline bounce rate
- [ ] Baseline scroll depth (% reaching each section)
- [ ] Baseline form submission rate
- [ ] Lighthouse scores (Performance, Accessibility, Best Practices, SEO)

**After Phase 1:**
- [ ] Compare bounce rate (target: -10%)
- [ ] Compare scroll depth (target: +15%)
- [ ] Compare form submissions (target: +15-25%)
- [ ] Lighthouse Accessibility score (target: 95+)

**After Phase 2:**
- [ ] Compare bounce rate (target: -20% total)
- [ ] Compare CTA click rate (sticky vs hero vs pricing)
- [ ] Compare form submissions (target: +30-40% total)
- [ ] Mobile vs desktop conversion delta

---

## 🛠 Tools Needed

- [ ] Tailwind CSS (already in stack)
- [ ] Next.js 14 (already in stack)
- [ ] WebAIM Contrast Checker (for final audit)
- [ ] Lighthouse / PageSpeed Insights
- [ ] Optional: Framer Motion (for animations)
- [ ] Optional: React Hook Form (for validation)

---

## 🚨 Testing Checklist

**Before deploy:**
- [ ] Test all CTAs (desktop + mobile)
- [ ] Test form submission (success + error states)
- [ ] Test keyboard navigation (Tab through entire page)
- [ ] Test screen reader (NVDA or macOS VoiceOver)
- [ ] Test on real mobile device (iOS + Android)
- [ ] Cross-browser check (Chrome, Firefox, Safari)
- [ ] Verify all links work
- [ ] Check console for errors

---

## 📈 Expected Results

### Phase 1 (Quick Wins)
- **Time:** <1 hour
- **Conversion lift:** +15-25%
- **Accessibility:** WCAG AA compliant
- **ROI:** €297-396 on first 10 Founding signups

### Phase 2 (High Impact)
- **Time:** ~3 hours
- **Conversion lift:** +20-35% (cumulative)
- **Mobile UX:** Significantly improved
- **Trust:** Higher perceived credibility

### Phase 3 (Polish)
- **Time:** ~4 hours
- **Conversion lift:** +5-10% (cumulative)
- **SEO:** Better rankings
- **Long-tail:** Improved organic traffic

---

**Last updated:** 2026-02-14  
**Status:** Ready for implementation  
**Next step:** Start Phase 1 (Quick Wins)
