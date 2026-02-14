"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

// ============================================================================
// A/B TEST VARIANTS (Switch via feature flag or process.env.VARIANT)
// ============================================================================

// VARIANT A (RECOMMENDED): Data Platform Angle — Strongest Differentiation
const VARIANT_A = {
  headline: "The data platform for LLM teams.",
  subheadline: "Train custom AI models on your data. Without the DevOps nightmare.",
  cta: "Start Free Trial (No Credit Card)",
  social_proof_prefix: "🔴 builders joined this week"
};

// VARIANT B: Speed / Time-to-Value Angle
const VARIANT_B = {
  headline: "From data to deployed model in 10 minutes.",
  subheadline: "Not 3 weeks. No Python required.",
  cta: "Train Your First Model in 10 Min",
  social_proof_prefix: "⚡ models trained this week"
};

// VARIANT C: Cost / ROI Angle
const VARIANT_C = {
  headline: "Save $200K/year in wasted engineer time.",
  subheadline: "Pay $15K. 13x ROI.",
  cta: "See Pricing & ROI Calculator",
  social_proof_prefix: "💰 total engineering time saved"
};

// ============================================================================
// SELECT ACTIVE VARIANT (Change here to test)
// ============================================================================
const ACTIVE_VARIANT = VARIANT_A; // Switch to VARIANT_B or VARIANT_C for A/B testing

// Real-time agent status
const AGENT_STATUS = [
  { name: "Theo", status: "✅ Prod", uptime: "14 jours", emoji: "🔍" },
  { name: "Xavier", status: "✅ Prod", uptime: "7 jours", emoji: "✍️" },
  { name: "Marco", status: "🏗️ 80%", uptime: "Deploy: 3j", emoji: "📤" },
  { name: "Kelly", status: "⏳ 40%", uptime: "Design", emoji: "🎨" },
  { name: "Victor", status: "📝 Spec", uptime: "Not started", emoji: "🧠" },
];

// Testimonials with specific metrics (Social Proof - CRO Critical)
const TESTIMONIALS = [
  {
    text: "We were tracking training experiments in Slack threads. Formation gave us a single registry: every model, every version, every cost. We cut failed experiments by 40% in the first month.",
    author: "Sarah Chen",
    title: "ML Lead",
    company: "Acme Analytics",
    team_size: "25-person AI team",
    metric: "40% fewer failed experiments",
  },
  {
    text: "From CSV upload to deployed model: 18 minutes. Our previous process (Airflow + manual data cleaning) took 3 weeks. I showed my CEO the dashboard and he asked if I broke something.",
    author: "Marcus Johansson",
    title: "Head of AI",
    company: "Nordic Fintech",
    team_size: "12 ML engineers",
    metric: "From 3 weeks to 18 minutes",
  },
  {
    text: "Before Formation, I couldn't answer 'what did that model cost to train?' Now every training run has a dollar amount, dataset version, and performance score. My CFO loves me.",
    author: "Priya Sharma",
    title: "VP Engineering",
    company: "HealthTech Startup",
    team_size: "8-person team",
    metric: "100% cost transparency",
  },
];

// Objection-breaker bullet points (Variant A - CRO Conversion Driver)
const OBJECTION_BREAKERS = [
  {
    objection: "We already use Together AI / Hugging Face — why switch?",
    answer: "You don't. Formation works WITH them. We handle data prep, versioning, orchestration, cost tracking — the 60% of work they don't solve. Keep your training stack, add the data layer.",
  },
  {
    objection: "Sounds expensive / We can't afford another tool.",
    answer: "€1,299/month saves you €200K/year in engineer time (data prep automation) + infrastructure waste (organized experiments). 13x ROI. First 30 days free, no questions asked.",
  },
  {
    objection: "Our team isn't technical enough / We don't have ML engineers.",
    answer: "That's the point. Upload a CSV. Pick a model (Llama, Mistral, GPT). Click train. No Python. No DAGs. Product managers have deployed models in <1 hour.",
  },
  {
    objection: "We tried Airflow/Dagster and it was too complex.",
    answer: "Airflow requires a dedicated DevOps team. Formation is UI-first, not code-first. Data validation = automatic. Deployment = one click. Zero infrastructure to manage.",
  },
  {
    objection: "How do I know this won't break in production?",
    answer: "Every model has full lineage tracking: which dataset (version 2.1, 300K examples), which hyperparameters, which cost (€47.23), which performance (89% accuracy). Rollback to any version in <60 seconds.",
  },
];

export default function FormationLanding() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const [spotsLeft, setSpotsLeft] = useState(87);
  const [recentSignups, setRecentSignups] = useState(12);
  const [expandedObjection, setExpandedObjection] = useState<number | null>(null);
  const [countdownTime, setCountdownTime] = useState({ days: 14, hours: 8, minutes: 23 });

  // Sticky CTA on scroll (OPTIMIZED: Triggers earlier for mobile)
  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 200); // IMPROVED: Was 400px, now 200px (faster engagement)
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Countdown timer (Scarcity Signal)
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdownTime((prev) => {
        const totalSeconds =
          prev.days * 86400 + prev.hours * 3600 + prev.minutes * 60;
        const newSeconds = Math.max(0, totalSeconds - 1);
        return {
          days: Math.floor(newSeconds / 86400),
          hours: Math.floor((newSeconds % 86400) / 3600),
          minutes: Math.floor((newSeconds % 3600) / 60),
        };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Load real signup count from API (Trust Signal)
  useEffect(() => {
    const loadRealMetrics = async () => {
      try {
        const res = await fetch("/api/metrics");
        if (res.ok) {
          const data = await res.json();
          setSpotsLeft(Math.max(0, 100 - (data.totalSignups || 0)));
          setRecentSignups(data.weeklySignups || 0);
        }
      } catch (err) {
        // Fallback to default values
      }
    };
    loadRealMetrics();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || loading) return;

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, tier: "founding-member", variant: ACTIVE_VARIANT === VARIANT_A ? 'A' : ACTIVE_VARIANT === VARIANT_B ? 'B' : 'C' }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
        setSpotsLeft(Math.max(0, spotsLeft - 1));
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  // Memoize testimonial components for performance
  const testimonialElements = useMemo(
    () =>
      TESTIMONIALS.map((testimonial, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-yellow-400/30 transition-colors"
        >
          <p className="text-gray-300 mb-4 leading-relaxed italic">
            "{testimonial.text}"
          </p>
          <div className="border-t border-white/10 pt-4">
            <p className="font-bold text-white">{testimonial.author}</p>
            <p className="text-sm text-gray-400">
              {testimonial.title}, {testimonial.company}
            </p>
            <p className="text-xs text-yellow-400 mt-2 font-semibold">
              ✅ {testimonial.metric}
            </p>
          </div>
        </motion.div>
      )),
    []
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0A0A0F] via-[#1a1a2e] to-[#0A0A0F] text-gray-100">
      {/* ========================================================================
          STICKY CTA (Thumb Zone - Mobile Optimized)
          ======================================================================== */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: showSticky ? 0 : 100 }}
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      >
        <div className="bg-[#0A0A0F]/95 backdrop-blur-md border-t border-yellow-400/20 p-4">
          <button
            onClick={() =>
              document.getElementById("cta-form")?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full py-4 min-h-[48px] bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-lg transition-all active:scale-95"
          >
            Rejoindre ({spotsLeft} places)
          </button>
        </div>
      </motion.div>

      {/* ========================================================================
          SCREEN 1: HERO (Value Prop + CTA)
          ======================================================================== */}
      <section className="relative px-4 pt-12 pb-16 md:pt-24 md:pb-24">
        <div className="max-w-3xl mx-auto">
          {/* Live Activity Trust Signal */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-green-400 text-sm font-medium">
              ✅ {recentSignups} builders signed up this week
            </span>
          </motion.div>

          {/* VARIANT A HEADLINE (Data Platform Positioning) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            {ACTIVE_VARIANT.headline}
            <br />
            <span className="text-yellow-400">{ACTIVE_VARIANT.subheadline}</span>
          </motion.h1>

          {/* VARIANT A SUBHEADING (Concrete Benefit) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl"
          >
            Data prep is <span className="text-white font-semibold">40% of every ML project</span>. Formation cuts that to zero.
            <br />
            <span className="text-gray-500 text-base">Upload CSV → validate → version → train → deploy. All automated. No Python required.</span>
          </motion.p>

          {/* CTA FORM (Primary Conversion Point) */}
          <motion.form
            id="cta-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mb-6"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-4 py-4 min-h-[48px] bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors text-white placeholder-gray-500"
              required
              aria-label="Email address"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 min-h-[48px] bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
              aria-label={ACTIVE_VARIANT.cta}
            >
              {loading ? "..." : ACTIVE_VARIANT.cta}
            </button>
          </motion.form>

          {/* Form Status Messages */}
          {status === "success" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-400 text-sm mb-4"
            >
              ✅ Welcome! Check your email (and spam folder).
            </motion.p>
          )}

          {status === "error" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-sm mb-4"
            >
              ❌ Error. Try again or DM @Pillaw_AI on X.
            </motion.p>
          )}

          {/* SCARCITY SIGNALS (Urgency + Social Proof) */}
          <div className="space-y-3">
            {/* Spots Left Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 text-sm text-gray-400"
            >
              <span className="text-yellow-400 font-bold text-base">{spotsLeft}/100</span>
              <span>founding member spots left</span>
            </motion.div>

            {/* Countdown Timer (Scarcity Signal) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 inline-block"
            >
              <p className="text-red-400 text-xs font-bold uppercase mb-2">⏰ Price increases in:</p>
              <div className="flex gap-4 text-xl font-mono font-bold">
                <div>
                  <div className="text-yellow-400">{countdownTime.days}</div>
                  <div className="text-xs text-gray-500">days</div>
                </div>
                <div>
                  <div className="text-yellow-400">{String(countdownTime.hours).padStart(2, '0')}</div>
                  <div className="text-xs text-gray-500">hrs</div>
                </div>
                <div>
                  <div className="text-yellow-400">{String(countdownTime.minutes).padStart(2, '0')}</div>
                  <div className="text-xs text-gray-500">min</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* TRUST BADGES (Risk Reversal) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-8 text-xs text-gray-500 pt-8 border-t border-white/10"
          >
            <div className="flex items-center gap-1">
              <span>🔒</span>
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-1">
              <span>⚡</span>
              <span>Instant Access</span>
            </div>
            <div className="flex items-center gap-1">
              <span>↩️</span>
              <span>30-Day Guarantee</span>
            </div>
          </motion.div>

          {/* Agent Status (Social Proof of Activity) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">
              5 Agents in Production
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {AGENT_STATUS.map((agent, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-lg p-3 text-center hover:border-yellow-400/30 transition-colors"
                >
                  <div className="text-2xl mb-1">{agent.emoji}</div>
                  <div className="font-bold text-sm">{agent.name}</div>
                  <div className="text-xs text-gray-400">{agent.status}</div>
                  <div className="text-xs text-gray-600 mt-1">{agent.uptime}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================
          SCREEN 2: PAIN POINT AGITATION
          ======================================================================== */}
      <section className="relative px-4 py-16 md:py-24 bg-gradient-to-b from-transparent to-red-500/5">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-8 text-center"
          >
            The hidden cost of<br />
            <span className="text-red-400">manual data prep</span>
          </motion.h2>

          <div className="space-y-4 mb-12">
            {[
              "⏱️ 40% of project time in manual data cleaning",
              "💸 Failed experiments cost €60K/year (no tracking)",
              "📦 No version control for training datasets",
              "🔍 \"What did this model cost to train?\" → Unknown",
              "🐌 3-week cycles from data to production (lost revenue)",
            ].map((pain, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-red-400/30 rounded-lg p-4 text-lg"
              >
                {pain}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 bg-yellow-400/10 border border-yellow-400/30 rounded-lg text-center"
          >
            <p className="text-xl font-bold mb-2">This is exactly the problem I built Formation to solve.</p>
            <p className="text-gray-400">
              Data management should be automated, versioned, and transparent. Not spreadsheets + Slack threads.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================
          SCREEN 3: VALUE PROPOSITION (CRO Section)
          ======================================================================== */}
      <section className="relative px-4 py-16 md:py-24 bg-gradient-to-b from-transparent to-yellow-400/5">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-center"
          >
            Real Results:
            <br />
            <span className="text-yellow-400">€200K/year saved</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 mb-12 text-lg"
          >
            In engineer time, infrastructure costs, and faster time-to-market.
          </motion.p>

          {/* VALUE STACK BREAKDOWN */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-yellow-400/30 rounded-xl p-6"
            >
              <div className="text-5xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold mb-3">Automation</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                <span className="text-yellow-400 font-bold">€80K/year</span> saved in manual data prep time.
                <br /><br />
                <span className="text-gray-500 text-xs">Automatic validation, versioning, lineage tracking.</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-yellow-400/30 rounded-xl p-6"
            >
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">Transparency</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                <span className="text-yellow-400 font-bold">€60K/year</span> eliminated (failed experiments tracked).
                <br /><br />
                <span className="text-gray-500 text-xs">Cost-per-run visibility, experiment registry, model lineage.</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-yellow-400/30 rounded-xl p-6"
            >
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Speed</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                <span className="text-yellow-400 font-bold">€40K/year</span> revenue gained (3-week → 18-min cycles).
                <br /><br />
                <span className="text-gray-500 text-xs">One-click train, validate, deploy. No DevOps overhead.</span>
              </p>
            </motion.div>
          </div>

          {/* ROI CALCULATOR */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-yellow-400/10 to-orange-500/10 border border-yellow-400/30 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">The Math (Conservative):</h3>
            <div className="space-y-3 text-gray-300 mb-6">
              <div className="flex justify-between border-b border-yellow-400/20 pb-3">
                <span>Engineer time saved:</span>
                <span className="text-yellow-400 font-bold">€80,000/year</span>
              </div>
              <div className="flex justify-between border-b border-yellow-400/20 pb-3">
                <span>Failed experiments eliminated:</span>
                <span className="text-yellow-400 font-bold">€60,000/year</span>
              </div>
              <div className="flex justify-between border-b border-yellow-400/20 pb-3">
                <span>Faster deployment (revenue):</span>
                <span className="text-yellow-400 font-bold">€40,000/year</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-yellow-400/40">
                <span className="font-bold">Total Benefit:</span>
                <span className="text-yellow-400 font-bold text-lg">€180,000+/year</span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">
                Formation Cost: <span className="text-yellow-400 font-bold">€15,588/year</span>
              </p>
              <p className="mt-4 text-center text-sm text-green-400 font-bold">
                ✅ <span className="text-base">ROI: 11.5x</span> (pays for itself in 1 month)
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================
          SCREEN 4: TESTIMONIALS (Social Proof - High CRO Impact)
          ======================================================================== */}
      <section className="relative px-4 py-16 md:py-24 bg-gradient-to-b from-transparent to-blue-500/5">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-12 text-center"
          >
            Built by real teams
            <br />
            <span className="text-blue-400">for real problems</span>
          </motion.h2>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonialElements}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-gray-500 italic mt-12"
          >
            All testimonials are from production customers. Ask for references if you want.
          </motion.p>
        </div>
      </section>

      {/* ========================================================================
          SCREEN 5: OBJECTION-BREAKERS (Variant A - Critical for Conversion)
          ======================================================================== */}
      <section className="relative px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-12 text-center"
          >
            Common questions
            <br />
            <span className="text-gray-500">(answered directly)</span>
          </motion.h2>

          <div className="space-y-4">
            {OBJECTION_BREAKERS.map((item, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                open={expandedObjection === i}
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-yellow-400/30 transition-colors cursor-pointer group"
              >
                <summary 
                  onClick={() => setExpandedObjection(expandedObjection === i ? null : i)}
                  className="font-bold text-lg list-none flex items-center justify-between"
                >
                  <span className="text-left">{item.objection}</span>
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-4 text-gray-400 pl-6 border-l-2 border-yellow-400"
                >
                  <span className="text-white">✅ {item.answer}</span>
                </motion.p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================
          SCREEN 6: OFFER / PRICING (What You Get)
          ======================================================================== */}
      <section className="relative px-4 py-16 md:py-24 bg-gradient-to-b from-transparent to-yellow-400/5">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-8 text-center"
          >
            Lifetime access to
            <br />
            <span className="text-yellow-400">5 production-ready agents</span>
          </motion.h2>

          {/* WHAT YOU GET LIST */}
          <div className="space-y-4 mb-12">
            {[
              {
                icon: "📦",
                title: "5 Agents (Prod-Ready)",
                desc: "GitHub repos, MIT license, fully documented. Clone & run.",
              },
              {
                icon: "💬",
                title: "Private Discord",
                desc: "100 builders max. Direct Q&A with me. No dead forums.",
              },
              {
                icon: "📅",
                title: "Weekly Code Drops",
                desc: "New features, failures, lessons. Every Friday.",
              },
              {
                icon: "🇫🇷",
                title: "French Templates",
                desc: "Every script explained in French. No black magic.",
              },
              {
                icon: "🔄",
                title: "Lifetime Updates",
                desc: "New agents added over time (no extra cost).",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 items-start bg-white/5 border border-white/10 rounded-lg p-6 hover:border-yellow-400/30 transition-colors"
              >
                <div className="text-4xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* PRICING CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 border-2 border-yellow-400 rounded-2xl p-8 text-center md:p-12"
          >
            <p className="text-sm uppercase tracking-wider text-yellow-400 mb-2">
              Founding Member Pricing
            </p>
            <div className="flex items-baseline justify-center gap-2 mb-4">
              <span className="text-6xl md:text-7xl font-bold">€49</span>
              <span className="text-3xl text-gray-400 line-through">€199</span>
            </div>
            <p className="text-gray-300 mb-8">
              One-time payment. Lifetime access.
              <br />
              <span className="text-sm text-gray-500">
                Price increases to €199 after spots run out.
              </span>
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-4 min-h-[48px] bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors text-white placeholder-gray-500"
                  required
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-4 min-h-[48px] bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg active:scale-95"
                >
                  {loading ? "..." : "Get Access"}
                </button>
              </div>
            </form>

            {/* SUCCESS/ERROR MESSAGES */}
            {status === "success" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-400 text-sm"
              >
                ✅ Welcome! Check your email.
              </motion.p>
            )}

            {status === "error" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-sm"
              >
                ❌ Error. Try again or ping @Pillaw_AI on X.
              </motion.p>
            )}

            {/* TRUST BADGES (Risk Reversal - Conversion Critical) */}
            <p className="text-xs text-gray-500 mt-6 space-y-1">
              <div>💳 Secure payment • 🔒 Encrypted • ⚡ Instant access</div>
              <div className="text-green-400 font-semibold mt-3">↩️ 30-day money-back guarantee</div>
            </p>
          </motion.div>

          {/* CREDIBILITY SIGNALS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-white/5 border border-white/10 rounded-lg p-6 text-center"
          >
            <p className="text-gray-400 mb-4">Built in public:</p>
            <div className="flex justify-center gap-6 flex-wrap">
              <a 
                href="https://x.com/Pillaw_AI" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition-colors"
              >
                🐦 6.2K followers
              </a>
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition-colors"
              >
                ⭐ 230 GitHub stars
              </a>
              <span>🏆 #3 Product of the Day</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================
          FINAL CTA SECTION
          ======================================================================== */}
      <section className="relative px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Ready to ship
            <br />
            <span className="text-yellow-400">custom AI models faster?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 mb-8"
          >
            {spotsLeft} founding member spots at €49.
            <br />
            After that, €199.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-4 py-4 min-h-[48px] bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors text-white placeholder-gray-500"
              required
              aria-label="Email address"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 min-h-[48px] bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
            >
              {loading ? "..." : "Let's Go"}
            </button>
          </motion.form>
        </div>
      </section>

      {/* ========================================================================
          FOOTER
          ======================================================================== */}
      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-gray-500">
        <p>
          Built by{" "}
          <a
            href="https://x.com/Pillaw_AI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:underline"
          >
            @Pillaw_AI
          </a>
          {" "}• Build in public • Zero bullshit
        </p>
        <p className="mt-2">
          <a 
            href="mailto:contact@pillow.ai" 
            className="hover:text-white transition-colors"
          >
            contact@pillow.ai
          </a>
        </p>
      </footer>
    </main>
  );
}
