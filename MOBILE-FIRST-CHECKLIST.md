# MOBILE-FIRST CHECKLIST — Formation AI Orchestrator Landing
**Date:** 2026-02-14  
**Target:** Flawless 375px → 768px experience

---

## PRE-LAUNCH TESTING

### ✅ Device Testing Matrix

| Device | Screen Size | Status | Notes |
|--------|-------------|--------|-------|
| iPhone SE | 375×667 | ⏳ TODO | Minimum supported |
| iPhone 12/13 | 390×844 | ⏳ TODO | Most common |
| iPhone 14 Pro Max | 430×932 | ⏳ TODO | Largest iPhone |
| Android (Galaxy S21) | 360×800 | ⏳ TODO | Common Android |
| iPad Mini | 768×1024 | ⏳ TODO | Tablet min |

### ✅ Breakpoint Verification

```
Mobile: 375px - 639px (default)
Tablet: 640px - 1023px (sm: md:)
Desktop: 1024px+ (lg:)
```

**Test at each breakpoint:**
- [ ] 375px (iPhone SE)
- [ ] 390px (iPhone 12/13)
- [ ] 430px (iPhone 14 Pro Max)
- [ ] 640px (tablet start)
- [ ] 768px (iPad)
- [ ] 1024px (desktop start)

---

## MOBILE DESIGN PRINCIPLES

### 1. Thumb-Zone Optimization

**Primary CTA Placement:**
- [x] Sticky CTA at bottom (thumb zone)
- [x] Min height 48px (Apple HIG)
- [x] Min width 44×44px tap target
- [x] Positioned in bottom 1/3 of screen

**Test:**
```bash
# Open on iPhone
# Can you tap CTA with thumb without stretching?
# YES = ✅ | NO = ❌
```

### 2. Scroll Depth

**Target: Max 3 screens**

Screen 1: Hero + CTA + Trust Signal
- [ ] Loads <2s on 3G
- [ ] Headline visible without scroll
- [ ] CTA fully in view
- [ ] Trust signal (signup count) visible

Screen 2: Problem Agitation
- [ ] 4 pain points max
- [ ] Scannable (bullets, icons)
- [ ] No horizontal scroll
- [ ] Background gradient loads fast

Screen 3: What You Get + Pricing
- [ ] 4 benefits max
- [ ] Pricing card centered
- [ ] CTA fully visible
- [ ] No hidden content below fold

**Test:**
```bash
# Scroll depth counter
# Max scrolls to reach final CTA: 3
# Actual: ____
```

### 3. Load Performance

**Targets:**
- [ ] First Contentful Paint (FCP): <1.8s
- [ ] Largest Contentful Paint (LCP): <2.5s
- [ ] Total Blocking Time (TBT): <200ms
- [ ] Cumulative Layout Shift (CLS): <0.1

**Compression:**
- [ ] Images: WebP format, max 100KB each
- [ ] JavaScript: Code-split, lazy load below fold
- [ ] CSS: Inline critical, defer non-critical
- [ ] Fonts: Preload, subset to French chars

**Test:**
```bash
# Lighthouse mobile score
npm run build
npm run start
# Open Chrome DevTools
# Lighthouse > Mobile > Generate Report
# Target: 90+ Performance
```

### 4. Typography Readability

**Font Sizes (Mobile):**
- [ ] Headline: 36px (2.25rem) minimum
- [ ] Subhead: 18px (1.125rem)
- [ ] Body: 16px (1rem)
- [ ] Small text: 14px (0.875rem) minimum

**Line Height:**
- [ ] Headlines: 1.1 (tight)
- [ ] Body: 1.6 (comfortable)
- [ ] Buttons: 1.2 (compact)

**Spacing:**
- [ ] Generous padding: 16px (1rem) minimum
- [ ] Section gaps: 64px (4rem) mobile
- [ ] Paragraph spacing: 24px (1.5rem)

**Test:**
```bash
# Can you read headline from arm's length?
# YES = ✅ | NO = increase font-size
```

### 5. Touch Targets

**Minimum Sizes:**
- [ ] Buttons: 48×48px (3rem × 3rem)
- [ ] Links: 44×44px (2.75rem × 2.75rem)
- [ ] Form inputs: 48px height
- [ ] Spacing between targets: 8px minimum

**Test:**
```bash
# Tap each CTA with finger
# Accidental taps: 0
# Missed taps: 0
# Hard to tap: 0
```

---

## ACCESSIBILITY (A11Y)

### ✅ Color Contrast

**WCAG AA Standard:**
- [ ] Text: 4.5:1 minimum
- [ ] Large text (18px+): 3:1 minimum
- [ ] UI components: 3:1 minimum

**Test:**
```bash
# Use WebAIM Contrast Checker
# Yellow #FACC15 on Dark #0A0A0F = 10.4:1 ✅
# Gray #9CA3AF on Dark #0A0A0F = 6.2:1 ✅
# Red #EF4444 on Dark #0A0A0F = 5.1:1 ✅
```

### ✅ Keyboard Navigation

- [ ] Tab through all CTAs
- [ ] Focus visible (outline)
- [ ] Enter submits forms
- [ ] Escape closes modals
- [ ] No keyboard traps

### ✅ Screen Reader

- [ ] Alt text on images
- [ ] ARIA labels on icons
- [ ] Semantic HTML (h1, h2, section)
- [ ] Form labels associated
- [ ] Error messages announced

**Test:**
```bash
# iOS VoiceOver
# Settings > Accessibility > VoiceOver > On
# Navigate entire page
# All content readable: YES/NO
```

---

## CONTENT AUTHENTICITY

### ✅ Zero Fake Metrics

**Before:**
- ❌ "5 agents deployed in 6 months" (not true)
- ❌ "500+ students" (0 clients)
- ❌ Fake testimonials

**After:**
- ✅ "12 builders signed up this week" (real from /tmp/signups/emails.jsonl)
- ✅ "Agent uptime: 14 days" (real from mission-control/)
- ✅ "87/100 founding member spots" (real calculation)

**Test:**
```bash
# Check /tmp/signups/emails.jsonl
wc -l /tmp/signups/emails.jsonl
# Count = displayed signup count? YES/NO
```

### ✅ Zero Stock Photos

**Replace:**
- ❌ Generic "team working" photo
- ❌ Stock "laptop coding" image
- ❌ AI-generated faces

**With:**
- ✅ Screenshots of Theo running searches
- ✅ GitHub repo screenshot
- ✅ Discord channel preview
- ✅ Error logs + fixes (vulnerability)

### ✅ Zero Generic Copy

**Before:**
- ❌ "Transform your business"
- ❌ "Unlock your potential"
- ❌ "Join thousands"

**After:**
- ✅ "Tu passes 10h/semaine à copier-coller entre outils"
- ✅ "Je construis 5 agents IA. Tu apprends avec moi."
- ✅ "Code sur GitHub. Discord privé. Pas de bullshit expert."

---

## PERFORMANCE OPTIMIZATION

### ✅ Image Optimization

**Current images (if any):**
- [ ] Convert PNG → WebP
- [ ] Resize to max display size
- [ ] Compress to <100KB
- [ ] Lazy load below fold
- [ ] Add width/height (prevent CLS)

**Command:**
```bash
# Install sharp
npm install sharp

# Convert script
npx sharp -i input.png -o output.webp --webp-quality 80
```

### ✅ JavaScript Bundle

**Target: <100KB gzipped**

- [ ] Remove unused imports
- [ ] Code-split by route
- [ ] Lazy load Framer Motion
- [ ] Tree-shake dependencies
- [ ] Minify production build

**Check:**
```bash
npm run build
# Check .next/static/chunks/
du -sh .next/static/chunks/*.js
# Total < 100KB? YES/NO
```

### ✅ CSS Optimization

- [ ] PurgeCSS enabled (Tailwind)
- [ ] Inline critical CSS
- [ ] Defer non-critical CSS
- [ ] Remove unused utilities

**Check:**
```bash
# CSS bundle size
du -sh .next/static/css/*.css
# Total < 50KB? YES/NO
```

---

## MOBILE BROWSER TESTING

### ✅ iOS Safari

- [ ] 375px (iPhone SE)
- [ ] 390px (iPhone 12)
- [ ] 430px (iPhone 14 Pro Max)
- [ ] Sticky CTA works
- [ ] Form submission works
- [ ] Animations smooth (60fps)
- [ ] No horizontal scroll

### ✅ Chrome Mobile

- [ ] Same device sizes
- [ ] Same functionality checks

### ✅ Edge Cases

- [ ] Landscape mode
- [ ] Split-screen (iPad)
- [ ] Zoomed in (accessibility)
- [ ] Slow 3G connection
- [ ] Offline (service worker?)

---

## DEPLOYMENT CHECKLIST

### ✅ Pre-Deploy

- [ ] Run `npm run build` (no errors)
- [ ] Test production build locally
- [ ] Lighthouse score >90
- [ ] All forms work
- [ ] All links valid
- [ ] Analytics installed (Vercel, Plausible, etc.)

### ✅ Vercel Deploy

```bash
cd projects/ai-orchestrator-landing

# Deploy to preview
npx vercel

# Test preview URL on mobile
# All checks pass? YES

# Deploy to production
npx vercel --prod
```

### ✅ Post-Deploy

- [ ] Test production URL on mobile
- [ ] Check signup flow end-to-end
- [ ] Monitor /tmp/signups/emails.jsonl
- [ ] Check metrics API: /api/metrics
- [ ] Share on X/LinkedIn (Adrien)

---

## SURPRISE ELEMENTS VERIFICATION

### ✅ 1. Real Agent Status

- [ ] AGENT_STATUS array matches real agents
- [ ] Uptime accurate (from mission-control/)
- [ ] Emoji + status display correctly
- [ ] Grid responsive (2 cols mobile, 5 cols desktop)

### ✅ 2. Mistakes Section

- [ ] 3 mistakes minimum
- [ ] Expandable details work
- [ ] Vulnerability tone authentic
- [ ] Not defensive, transparent

### ✅ 3. Live Metrics

- [ ] Signup count updates in real-time
- [ ] Spots left calculation correct (100 - total)
- [ ] Weekly signups from last 7 days
- [ ] Fallback to defaults if file missing

### ✅ 4. Mobile Sticky CTA

- [ ] Appears after 400px scroll
- [ ] Thumb-zone positioned (bottom)
- [ ] Smooth animation (Framer Motion)
- [ ] Scrolls to form on tap
- [ ] Hidden on desktop (md:hidden)

---

## FINAL QUALITY GATES

### Must Pass Before Sharing

1. **Mobile Perfect (375px - 768px)**
   - [ ] No horizontal scroll
   - [ ] All text readable
   - [ ] All CTAs tappable
   - [ ] Load <2s on 3G

2. **Zero Fake Social Proof**
   - [ ] All metrics real (verifiable)
   - [ ] No stock photos
   - [ ] No generic copy
   - [ ] Code snippets visible (GitHub link)

3. **Unique Angle**
   - [ ] Not seen elsewhere
   - [ ] Build-in-public positioning clear
   - [ ] French market differentiation
   - [ ] Transparency = trust

4. **Ready to Share**
   - [ ] Adrien not ashamed
   - [ ] Can show to Indie Makers Discord
   - [ ] Can post on X/LinkedIn
   - [ ] Can send to friends

### Adrien's Reaction Target

- [ ] "Wow" ✅
- [ ] "Nice" ✅
- [ ] "Ça c'est cool" ✅
- [ ] Immediate share on social

---

## MONITORING POST-LAUNCH

### Week 1 Metrics

- [ ] Signups/day average
- [ ] Bounce rate (target <60%)
- [ ] Mobile traffic % (expect 70%+)
- [ ] Avg time on page (target >2min)
- [ ] CTA click-through rate (target >15%)

### Heatmap Analysis

```bash
# Install Hotjar or Microsoft Clarity
# Track:
# - Where do users scroll to?
# - Which CTAs get clicked?
# - Where do they drop off?
# - Mobile vs desktop behavior
```

### A/B Test Ideas (Post-MVP)

1. Headline variations
2. CTA copy ("Rejoindre" vs "Accès immédiat")
3. Pricing display (€49 vs €49/lifetime)
4. Spot scarcity (87 left vs 13% left)

---

**END OF CHECKLIST**

Next: Deploy + Monitor + Iterate
