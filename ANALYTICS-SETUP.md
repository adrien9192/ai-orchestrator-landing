# Analytics Setup Guide
## Formation AI Orchestrator Landing Page

**Last Updated:** 2026-02-14

---

## Overview

This document provides a complete guide for setting up Google Analytics 4 (GA4) tracking on the Formation AI Orchestrator landing page.

**Goals:**
- Track conversion funnel (landing → scroll → pricing → email signup)
- Measure micro-conversions (scroll depth, FAQ engagement, CTA clicks)
- Analyze traffic sources and campaign performance
- Enable A/B testing framework
- Monitor exit intent and recovery conversions

---

## Step 1: Create GA4 Property

### 1.1 Google Analytics Account Setup

1. Go to [analytics.google.com](https://analytics.google.com)
2. Click "Admin" (bottom left gear icon)
3. Click "Create Property"

**Property Settings:**
- **Property name:** Formation AI Orchestrator Landing
- **Reporting time zone:** (GMT+01:00) Paris
- **Currency:** EUR - Euro (€)

### 1.2 Create Data Stream

After creating property:

1. Click "Data Streams"
2. Click "Add stream" → "Web"
3. **Website URL:** `https://ai-orchestrator-landing.vercel.app`
4. **Stream name:** AI Orchestrator Landing Production
5. Click "Create stream"

**Save the Measurement ID:** `G-XXXXXXXXXX` (you'll need this)

---

## Step 2: Install Tracking Code

### 2.1 Environment Variable

Create `.env.local` in project root (if not exists):

```bash
# .env.local
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Replace `G-XXXXXXXXXX` with your actual Measurement ID.**

### 2.2 Verify Installation

The tracking code is already in `app/layout.tsx`. Verify it's using your Measurement ID:

```typescript
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';
```

### 2.3 Test Tracking

1. Deploy to Vercel with environment variable set
2. Visit your landing page
3. Open browser DevTools → Network tab
4. Look for requests to `www.google-analytics.com/g/collect`
5. In GA4: Realtime → Overview (you should see 1 active user)

---

## Step 3: Configure Events

### 3.1 Custom Events Overview

**Already Implemented Events:**

| Event Name | Trigger | Purpose |
|------------|---------|---------|
| `email_signup` | Form submit success | PRIMARY CONVERSION GOAL |
| `scroll_to_pricing` | Scroll past 80% | Engagement tracking |
| `faq_expand` | FAQ item opened | Objection research |
| `cta_click` | CTA button clicked | Funnel stage tracking |
| `external_proof_click` | Google/Reddit link | Trust validation |
| `testimonial_view` | Testimonial visible 3s+ | Social proof engagement |
| `pricing_tier_hover` | Hover on pricing card | Consideration tracking |
| `email_focus_no_submit` | Email focus, no submit 30s+ | Form abandonment |
| `guarantee_view` | Guarantee section visible | Risk reversal engagement |
| `page_exit` | User leaves page | Exit analysis |
| `exit_intent_triggered` | Exit-intent popup shown | Recovery opportunity |
| `exit_intent_converted` | Exit-intent form submit | Recovery conversion |
| `exit_intent_dismissed` | Exit-intent popup closed | Recovery failure |

### 3.2 Verify Events in GA4

**Realtime Check:**

1. Visit landing page
2. Trigger events (scroll, click CTAs, open FAQ)
3. In GA4: Realtime → Event count by Event name
4. You should see events appearing within 30 seconds

**Debug View (Recommended):**

1. Install [GA Debugger Chrome Extension](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna)
2. Enable debugger
3. Open DevTools → Console
4. Trigger events → see detailed logs

---

## Step 4: Create Conversions

### 4.1 Mark email_signup as Conversion

1. In GA4: Configure → Events
2. Find `email_signup` event
3. Toggle "Mark as conversion" to ON

**This is your PRIMARY conversion goal.**

### 4.2 Create Secondary Conversions (Optional)

Mark these as conversions for funnel analysis:
- `scroll_to_pricing` (engagement goal)
- `exit_intent_converted` (recovery goal)

---

## Step 5: Create Custom Reports

### 5.1 Conversion Funnel Report

**Create Exploration:**

1. GA4 → Explore → Create new exploration
2. Template: "Funnel exploration"
3. **Funnel steps:**
   - Step 1: `page_view` (baseline)
   - Step 2: `scroll_to_pricing` (engagement)
   - Step 3: `cta_click` (interest)
   - Step 4: `email_signup` (conversion)

**Breakdown dimensions:**
- Traffic source
- Device category
- Landing page
- Campaign

### 5.2 CTA Performance Report

**Create Exploration:**

1. Template: "Free form"
2. **Dimensions:** 
   - Event name = `cta_click`
   - Custom parameter: `location` (hero/sticky/pricing/final)
   - Custom parameter: `tier` (founding/early-bird/premium/final)
3. **Metrics:**
   - Event count
   - Conversions (email_signup)
4. **Visualization:** Bar chart

**Goal:** Identify which CTAs drive most conversions.

### 5.3 FAQ Engagement Report

**Create Exploration:**

1. Dimensions: 
   - Event name = `faq_expand`
   - Custom parameter: `question_text`
2. Metrics: Event count
3. Visualization: Table

**Goal:** Identify which objections users research most.

### 5.4 Exit Intent Recovery Report

**Create Exploration:**

1. Dimensions:
   - Event name (filter: `exit_intent_*`)
2. Metrics:
   - `exit_intent_triggered` (count)
   - `exit_intent_converted` (count)
   - `exit_intent_dismissed` (count)
3. Calculated metric: Conversion rate = `exit_intent_converted / exit_intent_triggered`

**Goal:** Measure exit-intent popup effectiveness.

---

## Step 6: UTM Campaign Tracking

### 6.1 UTM Structure

**Standard format:**

```
https://ai-orchestrator-landing.vercel.app?utm_source={source}&utm_medium={medium}&utm_campaign={campaign}&utm_content={content}
```

### 6.2 Campaign Examples

**Launch Email Campaign:**
```
?utm_source=email&utm_medium=launch&utm_campaign=early-bird-launch&utm_content=hero-cta
?utm_source=email&utm_medium=launch&utm_campaign=early-bird-launch&utm_content=testimonial-link
```

**Social Media:**
```
# X/Twitter thread
?utm_source=twitter&utm_medium=social&utm_campaign=agents-thread&utm_content=thread-001

# LinkedIn post
?utm_source=linkedin&utm_medium=social&utm_campaign=formation-announcement&utm_content=post-organic

# Reddit comment
?utm_source=reddit&utm_medium=social&utm_campaign=r-ai-agents&utm_content=comment-helpfull
```

**Discord Community:**
```
?utm_source=discord&utm_medium=community&utm_campaign=beta-testers&utm_content=announcement
```

**Paid Ads (future):**
```
?utm_source=google&utm_medium=cpc&utm_campaign=brand-search&utm_content=ad-variant-a
?utm_source=facebook&utm_medium=cpc&utm_campaign=lookalike-audience&utm_content=video-ad
```

### 6.3 UTM Tracking Report

**In GA4:**

1. Reports → Acquisition → Traffic acquisition
2. Dimensions: Session source/medium, Session campaign
3. Metrics: Sessions, Conversions, Conversion rate
4. Filter: Landing page = `/`

---

## Step 7: Monitor Key Metrics

### 7.1 Daily Metrics Dashboard

**Create Custom Dashboard:**

1. GA4 → Explore → Blank template
2. Add cards:

**Conversions Today:**
- Metric: email_signup (count)
- Comparison: Yesterday

**Conversion Rate:**
- Calculated: email_signup / page_view
- Target: 15-25%

**Traffic Sources:**
- Dimension: Source/medium
- Metric: Sessions, Conversions
- Visualization: Pie chart

**Scroll Depth:**
- Metric: scroll_to_pricing / page_view
- Target: 70%+

**Exit Intent Recovery:**
- Metric: exit_intent_converted / exit_intent_triggered
- Target: 5-8%

### 7.2 Weekly Review Checklist

Every Monday:

- [ ] Check total conversions (email_signup count)
- [ ] Review conversion rate trend (is it improving?)
- [ ] Identify top traffic sources (where are signups coming from?)
- [ ] Analyze FAQ engagement (which objections most common?)
- [ ] Review CTA performance (which CTAs convert best?)
- [ ] Check exit intent recovery rate
- [ ] Identify drop-off points in funnel

---

## Step 8: A/B Testing Framework

### 8.1 Simple Cookie-Based Testing

**For headline/CTA tests:**

```typescript
// app/page.tsx
useEffect(() => {
  // Assign variant based on random cookie
  const variant = document.cookie.includes('ab_variant=B') 
    ? 'B' 
    : Math.random() < 0.5 ? 'A' : 'B';
  
  if (!document.cookie.includes('ab_variant')) {
    document.cookie = `ab_variant=${variant}; max-age=2592000`; // 30 days
  }
  
  setHeadlineVariant(variant);
  
  // Track variant assignment
  gtag('event', 'ab_test_assigned', {
    test_name: 'headline_test_001',
    variant: variant
  });
}, []);
```

**Track conversions by variant:**

```typescript
// On email signup
gtag('event', 'email_signup', {
  tier: tier,
  ab_variant: document.cookie.match(/ab_variant=([AB])/)?.[1] || 'unknown'
});
```

**Analyze in GA4:**

1. Explore → Free form
2. Dimensions: 
   - Event name = `email_signup`
   - Custom parameter: `ab_variant`
3. Metrics: Event count
4. Calculate: Conversion rate per variant

### 8.2 Statistical Significance

**Sample Size Calculator:**

Use [Evan Miller's Calculator](https://www.evanmiller.org/ab-testing/sample-size.html)

**Example:**
- Baseline conversion: 15%
- Minimum detectable effect: 20% relative improvement (15% → 18%)
- Statistical power: 80%
- Significance level: 95%

**Result:** Need ~1,200 visitors per variant = 2,400 total

**When to call a winner:**
- ✅ Reached sample size
- ✅ Variant B has 95%+ confidence
- ✅ Test ran at least 7 days (full week cycle)

---

## Step 9: Heatmap Integration (Optional)

### 9.1 Microsoft Clarity (Free)

**Recommended:** Free, no credit card, unlimited sessions

1. Sign up at [clarity.microsoft.com](https://clarity.microsoft.com)
2. Create project: "AI Orchestrator Landing"
3. Copy tracking code
4. Add to `app/layout.tsx` (after GA4 script)

```typescript
<Script id="microsoft-clarity" strategy="afterInteractive">
  {`
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "YOUR_CLARITY_ID");
  `}
</Script>
```

**Features:**
- Session recordings (watch real user interactions)
- Heatmaps (click, scroll, area)
- Rage clicks (frustration detection)
- Dead clicks (non-interactive areas clicked)

### 9.2 Hotjar (Alternative, Paid)

**If budget allows:** More advanced features, user surveys

Same setup process, different tracking code.

---

## Step 10: Troubleshooting

### Common Issues

**Events not showing in GA4:**

1. Check `.env.local` has correct Measurement ID
2. Verify Vercel environment variables are set
3. Check browser DevTools Network tab for `collect` requests
4. Use GA Debugger extension to see event payloads
5. Wait 24-48 hours (sometimes events delayed in reporting)

**Conversions not tracking:**

1. Verify `email_signup` is marked as conversion in GA4 Configure
2. Check event parameters are correct (case-sensitive)
3. Test form submission in incognito mode
4. Check API route (`/api/subscribe`) returns 200 OK

**UTM parameters not showing:**

1. Verify URL has all 3 minimum params: `utm_source`, `utm_medium`, `utm_campaign`
2. Check Traffic acquisition report (not Realtime)
3. Wait 24 hours for data processing

---

## Recommended Tools

| Tool | Purpose | Cost | Link |
|------|---------|------|------|
| **GA4** | Core analytics | Free | [analytics.google.com](https://analytics.google.com) |
| **Google Search Console** | SEO performance | Free | [search.google.com/search-console](https://search.google.com/search-console) |
| **Microsoft Clarity** | Heatmaps, recordings | Free | [clarity.microsoft.com](https://clarity.microsoft.com) |
| **GA Debugger** | Event debugging | Free | [Chrome Extension](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna) |
| **UTM Builder** | Campaign URL builder | Free | [ga-dev-tools.google/campaign-url-builder](https://ga-dev-tools.google/campaign-url-builder/) |

---

## Next Steps

1. **Week 1:** Set up GA4 property, install tracking, verify events
2. **Week 2:** Create custom reports, set conversion goals
3. **Week 3:** Set up UTM structure for launch campaign
4. **Week 4:** Install heatmap tool (Clarity)
5. **Ongoing:** Weekly review dashboard, iterate based on data

---

## Support

**Issues or questions?**
- Check GA4 Help Center: [support.google.com/analytics](https://support.google.com/analytics)
- Contact main agent or Adrien directly

---

**Last Updated:** 2026-02-14  
**Version:** 1.0  
**Status:** Ready for implementation
