// Google Analytics 4 Helper Functions
// Formation AI Orchestrator Landing Page

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

// Initialize GA4
export const pageview = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Event tracking
export const event = (action: string, params?: Record<string, any>) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, params);
  }
};

// Priority Events for Formation Landing

export const trackEmailSignup = (tier: 'founding' | 'early-bird' | 'premium' | 'final', email: string) => {
  event('email_signup', {
    tier,
    email_domain: email.split('@')[1], // Don't track full email for privacy
    timestamp: new Date().toISOString(),
    scroll_depth: Math.round((window.scrollY / document.body.scrollHeight) * 100),
  });
};

export const trackScrollToPricing = () => {
  event('scroll_to_pricing', {
    timestamp: new Date().toISOString(),
  });
};

export const trackFAQExpand = (question: string) => {
  event('faq_expand', {
    question_text: question.substring(0, 100), // Truncate for cleaner data
  });
};

export const trackCTAClick = (location: 'hero' | 'sticky' | 'pricing' | 'final', tier?: string) => {
  event('cta_click', {
    location,
    tier: tier || 'unknown',
  });
};

export const trackExternalProofClick = (source: 'google' | 'reddit' | 'github' | 'discord') => {
  event('external_proof_click', {
    source,
  });
};

export const trackTestimonialView = (author: string) => {
  event('testimonial_view', {
    testimonial_author: author,
  });
};

export const trackPricingTierHover = (tier: 'founding' | 'early-bird' | 'premium') => {
  event('pricing_tier_hover', {
    tier,
  });
};

export const trackEmailFocusNoSubmit = (formLocation: string) => {
  event('email_focus_no_submit', {
    form_location: formLocation,
  });
};

export const trackGuaranteeView = () => {
  event('guarantee_view', {
    timestamp: new Date().toISOString(),
  });
};

export const trackPageExit = () => {
  const scrollDepth = Math.round((window.scrollY / document.body.scrollHeight) * 100);
  const timeOnPage = Math.round((Date.now() - (window as any).pageLoadTime) / 1000); // seconds
  
  event('page_exit', {
    time_on_page: timeOnPage,
    scroll_depth: scrollDepth,
  });
};

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    pageLoadTime: number;
  }
}
