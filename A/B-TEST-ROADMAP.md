# A/B Test Roadmap
## Formation AI Orchestrator Landing Page

**Created:** 2026-02-14  
**Timeline:** 4-8 weeks post-launch  
**Framework:** Simple cookie-based variant assignment + GA4 tracking

---

## Testing Principles

### Statistical Rigor

- **Minimum sample size:** 1,200 visitors per variant (calculated for 15% baseline, 20% lift, 95% confidence)
- **Test duration:** Minimum 7 days (full week cycle to account for day-of-week variance)
- **Significance level:** 95% confidence before calling winner
- **One variable at a time:** Isolate changes to attribute impact correctly

### When to Stop a Test

✅ **Call it when:**
- Reached minimum sample size (1,200+ per variant)
- Variant has 95%+ confidence of being better
- Test ran at least 7 full days
- Result is practically significant (+15%+ improvement)

❌ **Don't stop if:**
- Sample size too small (<1,000 per variant)
- Confidence below 90%
- Test ran less than 5 days
- Result is statistically significant but tiny (+2% lift = noise)

---

## Priority 1: HIGH IMPACT TESTS (Run First 4 Weeks)

### Test #1: Headline — Pain-First vs Solution-First

**Hypothesis:** Sceptical ICP responds better to pain-first framing than solution-first.

**Variants:**

| Variant | Headline | Subheadline |
|---------|----------|-------------|
| **A (Control)** | "J'ai Automatisé 20h/Semaine Avec 5 Agents IA." | "€73/mois en API calls. Zero équipe. Zero bullshit. Du chat au système en prod 24/7 : je te montre comment." |
| **B (Test)** | "Tu Perds 20h/Semaine en Tâches Répétitives. Voilà Comment 5 Agents IA Les Font Pour Toi." | "Templates testés 6 mois en prod. €73/mois. Zero API explosion. De zéro à production en 7-10 jours." |

**What Changes:**
- Headline: Solution → Pain/solution combo
- Subheadline: Feature list → Benefit-first

**Implementation:**

```typescript
// app/page.tsx
const [headlineVariant, setHeadlineVariant] = useState<'A' | 'B'>('A');

useEffect(() => {
  const existingVariant = document.cookie.match(/headline_test=([AB])/)?.[1];
  
  if (existingVariant) {
    setHeadlineVariant(existingVariant as 'A' | 'B');
  } else {
    const newVariant = Math.random() < 0.5 ? 'A' : 'B';
    document.cookie = `headline_test=${newVariant}; max-age=2592000; path=/`;
    setHeadlineVariant(newVariant);
    
    gtag('event', 'ab_test_assigned', {
      test_name: 'headline_001',
      variant: newVariant
    });
  }
}, []);

// On conversion
gtag('event', 'email_signup', {
  tier,
  headline_variant: headlineVariant
});
```

**Success Metric:** Email signup conversion rate  
**Expected Impact:** +10-15% if pain-first resonates  
**Sample Size Needed:** 2,400 total visitors (1,200 per variant)  
**Estimated Runtime:** 7-10 days (at 250-300 visitors/day)

---

### Test #2: CTA Copy — Desire vs Action

**Hypothesis:** Action verb ("Copie") outperforms desire verb ("Je Veux") for builder ICP.

**Variants:**

| Variant | Hero CTA | Sticky CTA | Pricing CTA | Final CTA |
|---------|----------|------------|-------------|-----------|
| **A (Control)** | "Je Veux Les Templates" | "Rejoindre Waitlist" | "Prendre ma place Early Bird" | "Je prends ma place" |
| **B (Test)** | "Copie Les 5 Templates →" | "Prends Ta Place €299 →" | "Copie Les Templates Early Bird →" | "Copie Les Templates (12/90) →" |

**What Changes:**
- Verb: "Veux/Rejoindre/Prendre" → "Copie" (consistent action verb)
- Specificity: Generic → Specific (5 templates, €299, 12/90)

**Implementation:**

```typescript
const ctaVariant = document.cookie.match(/cta_test=([AB])/)?.[1] || 
  (Math.random() < 0.5 ? 'A' : 'B');

const ctaCopy = ctaVariant === 'A' 
  ? "Je Veux Les Templates"
  : "Copie Les 5 Templates →";
```

**Success Metric:** CTA click-through rate + email signup conversion rate  
**Expected Impact:** +5-8% if action clarity improves  
**Sample Size Needed:** 2,400 total visitors  
**Estimated Runtime:** 7-10 days

---

### Test #3: Urgency Mechanism — Scarcity vs Countdown

**Hypothesis:** Countdown timer (time scarcity) outperforms stock count (availability scarcity).

**Variants:**

| Variant | Urgency Badge |
|---------|---------------|
| **A (Control)** | "[12/90] places Early Bird à €299" |
| **B (Test)** | "Early Bird €299 → €999 dans 6 jours" (countdown) |

**What Changes:**
- Scarcity type: Stock availability → Time urgency
- Framing: Places left → Price increase deadline

**Implementation:**

```typescript
const daysRemaining = Math.ceil((new Date('2026-03-08') - new Date()) / (1000 * 60 * 60 * 24));

const urgencyBadge = urgencyVariant === 'A'
  ? `[${placesLeft}/90] places Early Bird à €299`
  : `Early Bird €299 → €999 dans ${daysRemaining} jours`;
```

**Success Metric:** Email signup conversion rate  
**Expected Impact:** +3-5% if time urgency stronger  
**Sample Size Needed:** 2,400 total visitors  
**Estimated Runtime:** 7-10 days

---

### Test #4: Guarantee Position — Pre-Price vs Post-Price

**Hypothesis:** Showing guarantee BEFORE pricing (risk reversal first) reduces price objection drop-off.

**Variants:**

| Variant | Guarantee Position |
|---------|-------------------|
| **A (Control)** | Guarantee shown AFTER pricing section |
| **B (Test)** | Guarantee shown ABOVE pricing section |

**What Changes:**
- Order only (guarantee content identical)
- Variant B: User sees "30 jours garantie" before seeing €299

**Success Metric:** Scroll-to-pricing → email signup conversion delta  
**Expected Impact:** +5-8% if pre-empts price shock  
**Sample Size Needed:** 2,400 total visitors  
**Estimated Runtime:** 7-10 days

---

## Priority 2: MEDIUM IMPACT TESTS (Weeks 5-8)

### Test #5: Social Proof Volume — 3 vs 5+ Testimonials

**Hypothesis:** More testimonials = more trust (diminishing returns after 5).

**Variants:**

| Variant | Testimonials Shown |
|---------|-------------------|
| **A (Control)** | 3 testimonials (current) |
| **B (Test)** | 5 testimonials + 1 video testimonial |

**Success Metric:** Testimonial section scroll depth + conversion rate  
**Expected Impact:** +2-4% if trust increases  
**Sample Size Needed:** 2,400 total visitors

---

### Test #6: Pricing Tier Order — Default Highlight

**Hypothesis:** Anchoring on "Premium" (€999) first makes Early Bird (€299) feel cheaper.

**Variants:**

| Variant | Pricing Card Order (Left → Right) |
|---------|----------------------------------|
| **A (Control)** | Founding (sold out) → Early Bird (highlighted) → Premium |
| **B (Test)** | Premium (€999) → Early Bird (highlighted, "MOST POPULAR") → Founding (sold out) |

**What Changes:**
- Order: Chronological → Price anchoring (high to recommended)
- Labeling: "EARLY BIRD" → "MOST POPULAR"

**Success Metric:** Early Bird signup rate (vs Premium consideration)  
**Expected Impact:** +3-5% if anchoring stronger  
**Sample Size Needed:** 2,400 total visitors

---

### Test #7: Hero CTA Color — Yellow vs Orange Reversion

**Hypothesis:** Yellow tested better in Phase 1, but validate against orange reversion.

**Variants:**

| Variant | Hero CTA Color |
|---------|---------------|
| **A (Control)** | Yellow (#FBBF24) |
| **B (Test)** | Orange (#FF6B35) |

**Success Metric:** CTA click-through rate  
**Expected Impact:** Validate yellow superiority (expect no change or slight yellow win)  
**Sample Size Needed:** 2,400 total visitors

---

### Test #8: Proof Section Visual — Text Cards vs Runtime Charts

**Hypothesis:** Visual charts (agent runtime graphs) outperform text-based proof cards.

**Variants:**

| Variant | Proof Format |
|---------|-------------|
| **A (Control)** | Text cards (emoji + name + stats) |
| **B (Test)** | Runtime charts (bar graph of 6-month uptime, cost trend line) |

**What Changes:**
- Format: Static text → Interactive charts
- Proof type: Stated metrics → Visualized data

**Success Metric:** Proof section engagement time + scroll depth  
**Expected Impact:** +3-5% if visual proof more credible  
**Sample Size Needed:** 2,400 total visitors

---

## Priority 3: POLISH TESTS (Post-Launch Optimization)

### Test #9: FAQ Expansion — Collapsed vs Pre-Expanded Top 3

**Hypothesis:** Pre-expanding top 3 FAQ reduces research friction.

**Variants:**

| Variant | FAQ State |
|---------|-----------|
| **A (Control)** | All FAQs collapsed (click to expand) |
| **B (Test)** | Top 3 FAQs pre-expanded (based on GA4 faq_expand data) |

**Success Metric:** FAQ engagement rate + conversion rate  
**Expected Impact:** +1-2% if reduces objection friction

---

### Test #10: Comparison Table Position — Pre-Pricing vs Post-Pricing

**Hypothesis:** Showing "why not YouTube/Udemy/freelancer" BEFORE pricing justifies cost better.

**Variants:**

| Variant | Comparison Table Position |
|---------|--------------------------|
| **A (Control)** | After proof, before use cases |
| **B (Test)** | Immediately before pricing section |

**Success Metric:** Pricing section scroll depth + conversion rate  
**Expected Impact:** +2-3% if justifies price better

---

## Testing Calendar (First 8 Weeks Post-Launch)

### Week 1-2: Test #1 (Headline)
- **Start:** March 17
- **End:** March 24
- **Sample goal:** 2,400 visitors
- **Decision:** March 25 (analyze, call winner)

### Week 3-4: Test #2 (CTA Copy) + Test #3 (Urgency) [CONCURRENT]
- **Start:** March 26
- **End:** April 2
- **Note:** Can run concurrent if testing different page elements
- **Decision:** April 3

### Week 5-6: Test #4 (Guarantee Position)
- **Start:** April 4
- **End:** April 11
- **Decision:** April 12

### Week 7-8: Test #5 (Social Proof) + Test #6 (Pricing Order)
- **Start:** April 13
- **End:** April 20
- **Decision:** April 21

### Ongoing: Test #7-10 (as traffic allows)

---

## Tracking Setup

### GA4 Custom Dimensions

Add these to track variants in GA4:

1. **Configure → Custom definitions → Create custom dimension**
2. Add dimension per test:

| Dimension Name | Event Parameter | Scope |
|----------------|----------------|-------|
| `headline_variant` | `headline_variant` | Event |
| `cta_variant` | `cta_variant` | Event |
| `urgency_variant` | `urgency_variant` | Event |
| `guarantee_position` | `guarantee_position` | Event |
| `testimonial_count` | `testimonial_count` | Event |

### Reporting

**Custom Exploration Template:**

1. **Dimensions:** 
   - Event name = `email_signup`
   - Custom dimension (e.g., `headline_variant`)
2. **Metrics:**
   - Event count
   - Conversion rate (calculated)
3. **Breakdown:** Variant A vs B

**Export to Google Sheets for statistical significance:**

Use [AB Test Calculator](https://abtestguide.com/calc/) to check p-value.

---

## Decision Framework

### How to Call a Winner

**Step 1: Check Sample Size**
```
Variant A visitors: 1,250 ✓
Variant B visitors: 1,200 ✓
Total: 2,450 ✓ (meets minimum 2,400)
```

**Step 2: Check Conversion Rates**
```
Variant A: 120 conversions / 1,250 visitors = 9.6%
Variant B: 156 conversions / 1,200 visitors = 13.0%
Lift: (13.0% - 9.6%) / 9.6% = +35.4% 🚀
```

**Step 3: Check Statistical Significance**

Use [Evan Miller's Calculator](https://www.evanmiller.org/ab-testing/chi-squared.html):

```
Control: 120 conversions, 1,250 visitors
Variant: 156 conversions, 1,200 visitors

Result: 
- Chi-squared: 6.82
- P-value: 0.009 (< 0.05 ✓)
- Confidence: 99.1% ✓
```

**Step 4: Decision**

✅ **Variant B wins:**
- Reached sample size ✓
- P-value < 0.05 ✓
- Lift is substantial (+35%) ✓
- Ran 7+ days ✓

**→ Deploy Variant B to 100% of traffic**

### What If Results Are Inconclusive?

**Scenario:** Variant B shows +2% lift, but p-value = 0.15 (not significant)

**Options:**

1. **Extend test** (if traffic allows) to reach significance
2. **Call it neutral** → keep control variant (no change cost)
3. **Move to next test** (opportunity cost of waiting)

**Recommended:** If lift <5% and p-value >0.10 → call it neutral, move on.

---

## Risk Management

### Avoid Common Pitfalls

**1. Peeking Too Early**
- ❌ Don't check results daily and stop when "winning"
- ✅ Set sample size goal, run full duration, analyze once

**2. Testing Too Many Variables**
- ❌ Change headline + CTA + urgency at once (can't attribute cause)
- ✅ One variable at a time (or independent elements)

**3. Ignoring External Factors**
- ❌ Run test during launch week (traffic spike = non-representative)
- ✅ Wait 1-2 weeks post-launch for traffic to stabilize

**4. Stopping on Statistical Significance Alone**
- ❌ "Variant B wins with p=0.04 and +1.2% lift" → noise
- ✅ Require practical significance (+10%+ for major changes, +5%+ for minor)

**5. Not Documenting Learnings**
- ❌ Call winner, deploy, forget why
- ✅ Document hypothesis, result, learnings in OPTIMIZATION-REPORT.md

---

## Success Criteria

### After 8 Weeks of Testing

**Target Outcomes:**

- ✅ Ran 4-6 A/B tests (minimum)
- ✅ Found 2-3 winning variants (+10%+ lift each)
- ✅ Cumulative conversion improvement: +25-40%
- ✅ Documented all learnings
- ✅ Built testing muscle (process repeatable)

**Conversion Rate Progression:**

| Milestone | Baseline | After Phase 1+2 | After A/B Testing | Target |
|-----------|----------|-----------------|-------------------|--------|
| **Conversion Rate** | 8-12% (typical waitlist) | 15-18% (optimized page) | **20-25%** | 25%+ |

---

## Tools & Resources

| Tool | Purpose | Link |
|------|---------|------|
| **GA4** | Event tracking, variant analysis | Built-in |
| **AB Test Calculator** | Sample size, significance | [abtestguide.com/calc](https://abtestguide.com/calc/) |
| **Chi-Squared Test** | Statistical significance | [evanmiller.org/ab-testing](https://www.evanmiller.org/ab-testing/chi-squared.html) |
| **Cookie Inspector** | Debug variant assignment | Browser DevTools → Application → Cookies |

---

## Next Steps

1. **Week 1 Post-Launch:** Set up GA4 custom dimensions
2. **Week 2:** Let traffic stabilize (no tests yet)
3. **Week 3:** Start Test #1 (Headline)
4. **Week 4:** Analyze results, deploy winner
5. **Week 5+:** Continue testing roadmap

---

**Last Updated:** 2026-02-14  
**Version:** 1.0  
**Status:** Ready for post-launch execution

**Questions?** Contact main agent or refer to ANALYTICS-SETUP.md for tracking details.
