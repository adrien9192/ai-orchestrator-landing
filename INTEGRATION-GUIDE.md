# Quick Integration Guide
## Adding Analytics Tracking to page.tsx

**Status:** Analytics infrastructure is ready. Just needs to be called in page.tsx.

---

## Step 1: Import Analytics Functions

Add to top of `app/page.tsx`:

```typescript
import {
  trackEmailSignup,
  trackCTAClick,
  trackFAQExpand,
  trackExternalProofClick,
  trackScrollToPricing,
} from "@/lib/analytics";
```

---

## Step 2: Add Scroll Tracking

Replace existing scroll tracking `useEffect`:

```typescript
useEffect(() => {
  let pricingTracked = false;
  
  const handleScroll = () => {
    // Sticky CTA visibility
    setShowStickyCTA(window.scrollY > 600);
    
    // Track scroll to pricing (once)
    const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercent > 75 && !pricingTracked) {
      trackScrollToPricing();
      pricingTracked = true;
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

---

## Step 3: Update Form Submit Handler

Modify `handleSubmit` function:

```typescript
const handleSubmit = async (e: React.FormEvent, tier?: string) => {
  e.preventDefault();
  
  if (!validateEmail(email)) {
    setEmailError("Email invalide");
    return;
  }
  
  setLoading(true);
  setStatus("");
  setEmailError("");

  try {
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, tier }),
    });

    if (res.ok) {
      // TRACKING: Email signup conversion
      trackEmailSignup(
        tier as 'founding' | 'early-bird' | 'premium' | 'final' || 'final',
        email
      );
      
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
    }
  } catch (error) {
    setStatus("error");
  } finally {
    setLoading(false);
  }
};
```

---

## Step 4: Add CTA Click Tracking

Add to ALL CTA buttons (example for hero CTA):

```typescript
<a
  href="#waitlist"
  onClick={() => trackCTAClick('hero', 'early-bird')}
  className="group px-8 py-4 bg-yellow-400..."
>
  Je Veux Les Templates
  <span className="group-hover:translate-x-1 transition-transform">→</span>
</a>
```

**All CTA locations to track:**
- Hero CTA: `trackCTAClick('hero', 'early-bird')`
- Sticky CTA: `trackCTAClick('sticky', 'early-bird')`
- Pricing Early Bird CTA (inline form): Already tracked via `handleSubmit`
- Final CTA: `trackCTAClick('final', 'early-bird')`

---

## Step 5: Add FAQ Click Tracking

Add to each FAQ `<details>` element:

```typescript
<details
  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 group"
  onClick={(e) => {
    // Only track on expand (not collapse)
    if (!(e.currentTarget as HTMLDetailsElement).open) {
      trackFAQExpand("Je dois savoir coder ?");
    }
  }}
>
  <summary className="font-bold cursor-pointer...">
    Je dois savoir coder ?
    <span className="text-yellow-400...">▼</span>
  </summary>
  <div className="mt-4 text-gray-400">...</div>
</details>
```

**Repeat for all 8 FAQ items.**

---

## Step 6: Add External Link Tracking

Add to Google Cloud and Reddit proof links:

```typescript
// Google Cloud link
<a
  href="https://cloud.google.com/transform/101-real-world-generative-ai-use-cases-from-industry-leaders"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => trackExternalProofClick('google')}
  className="bg-white/5 border..."
>
  {/* ... */}
</a>

// Reddit link
<a
  href="https://www.reddit.com/r/OpenAI/comments/1hu7shl/what_are_the_biggest_challenges_in_building/"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => trackExternalProofClick('reddit')}
  className="bg-orange-500/10 border..."
>
  {/* ... */}
</a>
```

---

## Step 7: Add Exit-Intent Popup to Page

Import and add ExitIntentPopup component:

```typescript
import ExitIntentPopup from '@/components/ExitIntentPopup';

export default function Home() {
  // ... existing state and logic ...
  
  return (
    <main className="min-h-screen bg-dark text-gray-100">
      {/* Add popup at top level */}
      <ExitIntentPopup />
      
      {/* Rest of page content */}
      {/* ... */}
    </main>
  );
}
```

---

## Step 8: Verify Integration

After deploying:

1. **Open GA4 Realtime**
2. **Visit landing page in incognito**
3. **Trigger each event manually:**
   - ✅ Scroll past 75% → Check `scroll_to_pricing` event
   - ✅ Click hero CTA → Check `cta_click` event (location: hero)
   - ✅ Open any FAQ → Check `faq_expand` event
   - ✅ Click Google/Reddit link → Check `external_proof_click` event
   - ✅ Submit email form → Check `email_signup` event
   - ✅ Move mouse to top (desktop) → Check `exit_intent_triggered` event

4. **All 6 events should appear in Realtime within 30 seconds**

---

## Optional: Additional Tracking

### Testimonial View Tracking (Intersection Observer)

Add to testimonial section:

```typescript
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const author = entry.target.getAttribute('data-author');
          if (author) {
            trackTestimonialView(author);
            observer.unobserve(entry.target); // Track once per session
          }
        }
      });
    },
    { threshold: 0.5, rootMargin: '0px' } // 50% visible
  );

  document.querySelectorAll('[data-testimonial]').forEach((el) => {
    observer.observe(el);
  });

  return () => observer.disconnect();
}, []);
```

Add `data-author` attribute to each testimonial:

```typescript
<blockquote data-testimonial data-author="Thomas" className="bg-white/5...">
  <p className="text-white/90 italic mb-4">
    "Waiting for Module 2 but already saved €50..."
  </p>
  <footer className="text-white/60 text-sm">— Thomas, Indie Builder</footer>
</blockquote>
```

---

## Summary of Changes Needed

| File | Change | Lines Affected |
|------|--------|----------------|
| `app/page.tsx` | Import analytics functions | +6 lines (top) |
| `app/page.tsx` | Update scroll tracking useEffect | ~10 lines modified |
| `app/page.tsx` | Add tracking to handleSubmit | +5 lines |
| `app/page.tsx` | Add onClick to hero CTA | +1 line |
| `app/page.tsx` | Add onClick to sticky CTA | +1 line |
| `app/page.tsx` | Add onClick to final CTA | +1 line |
| `app/page.tsx` | Add onClick to 8 FAQ items | +8 lines |
| `app/page.tsx` | Add onClick to 2 external links | +2 lines |
| `app/page.tsx` | Import ExitIntentPopup | +1 line |
| `app/page.tsx` | Add <ExitIntentPopup /> component | +1 line |

**Total:** ~35-40 lines added/modified (10 minutes of work)

---

## Testing Checklist

After integration:

- [ ] Build succeeds: `npm run build`
- [ ] No TypeScript errors
- [ ] GA4 Realtime shows events (test in incognito)
- [ ] Exit-intent popup appears (move mouse to top)
- [ ] Email form submits successfully
- [ ] No console errors in browser DevTools

---

**Next Step:** Deploy to Vercel → Verify GA4 → Let data accumulate → Start A/B testing (Week 4).

Good luck! 🚀
