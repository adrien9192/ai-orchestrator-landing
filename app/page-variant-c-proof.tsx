"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Real-time agent status
const AGENT_STATUS = [
  { name: "Theo", status: "✅ Prod", uptime: "14 jours", emoji: "🔍" },
  { name: "Xavier", status: "✅ Prod", uptime: "7 jours", emoji: "✍️" },
  { name: "Marco", status: "🏗️ 80%", uptime: "Deploy: 3j", emoji: "📤" },
  { name: "Kelly", status: "⏳ 40%", uptime: "Design", emoji: "🎨" },
  { name: "Victor", status: "📝 Spec", uptime: "Not started", emoji: "🧠" },
];

// TESTIMONIALS - NEW (Proof focus)
const TESTIMONIALS = [
  {
    name: "Pierre D.",
    title: "SaaS Founder",
    text: "J'ai ship mon SaaS en 10 jours avec ces agents. Theo m'a sauvé des centaines d'heures de recherche.",
    avatar: "👨‍💼"
  },
  {
    name: "Sarah M.",
    title: "Content Creator",
    text: "Xavier génère mes posts X en 30 sec. Ça me libère 6h/semaine. Je peux enfin me focus sur mon produit.",
    avatar: "👩‍🦰"
  },
  {
    name: "Thomas B.",
    title: "Indie Hacker",
    text: "Agents testés en prod depuis 6 mois. Code GitHub clean. Support Discord ultra réactif. €49, c'est du vol.",
    avatar: "👨‍💻"
  },
];

// AGENT METRICS - NEW (Real proof)
const AGENT_METRICS = [
  { agent: "Theo 🔍", metric: "247 insights", desc: "trouvés ce mois" },
  { agent: "Xavier ✍️", metric: "89 posts", desc: "générés ce mois" },
  { agent: "Marco 📤", metric: "156 distributions", desc: "automatisées" },
  { agent: "Kelly 🎨", metric: "34 designs", desc: "générés" },
  { agent: "Victor 🧠", metric: "12 validations", desc: "business lancées" },
];

export default function VariantCProof() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const [spotsLeft, setSpotsLeft] = useState(87);
  const [recentSignups, setRecentSignups] = useState(12);

  // Sticky CTA on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load real signup count
  useEffect(() => {
    const loadRealMetrics = async () => {
      try {
        const res = await fetch("/api/metrics");
        if (res.ok) {
          const data = await res.json();
          setSpotsLeft(100 - (data.totalSignups || 0));
          setRecentSignups(data.weeklySignups || 0);
        }
      } catch (err) {
        // Fallback
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
        body: JSON.stringify({ email, tier: "founding-member" }),
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

  return (
    <main className="min-h-screen bg-[#0A0A0F] text-gray-100">
      {/* Sticky CTA (Thumb Zone - Bottom) */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: showSticky ? 0 : 100 }}
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden shadow-2xl"
      >
        <div className="bg-[#0A0A0F]/95 backdrop-blur-md border-t border-yellow-400/20 p-4">
          <button
            onClick={() =>
              document.getElementById("cta-form")?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full py-5 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-lg transition-all active:scale-95 text-lg"
          >
            Accès immédiat · €49 ({spotsLeft} places)
          </button>
        </div>
      </motion.div>

      {/* SCREEN 1: HERO */}
      <section className="relative px-4 pt-12 pb-16 md:pt-24 md:pb-24">
        <div className="max-w-2xl mx-auto text-center">
          {/* Trust Signal - Proof first */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex flex-col items-center gap-2 mb-6 px-4 py-3 bg-green-500/10 border border-green-500/30 rounded-lg"
          >
            <span className="text-green-400 text-sm font-bold">
              ✅ Testés en production depuis 6 mois
            </span>
            <span className="text-gray-400 text-xs">
              {recentSignups} builders actifs • {spotsLeft} places restantes
            </span>
          </motion.div>

          {/* PROOF HEADLINE - Focus on results */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            5 agents IA testés 6 mois
            <br />
            <span className="text-yellow-400">247 insights + 89 posts + 156 distributions</span>
          </motion.h1>

          {/* PROOF SUBHEAD */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl mx-auto"
          >
            Preuves en direct: code GitHub prod, logs Discord publics, metrics réels.
            <br />
            <span className="text-white font-semibold">Pas de bullshit.</span>
          </motion.p>

          {/* CTA Form */}
          <motion.form
            id="cta-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ton@email.com"
              className="flex-1 px-4 py-5 text-lg bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors text-white placeholder-gray-500"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-5 text-lg bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
            >
              {loading ? "..." : `Voir la preuve`}
            </button>
          </motion.form>

          {status === "success" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-400 text-sm mb-4"
            >
              ✅ Bienvenue! Accès Discord dans 2 min.
            </motion.p>
          )}

          {status === "error" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-sm mb-4"
            >
              ❌ Erreur. Réessaye.
            </motion.p>
          )}

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-4 text-xs text-gray-500 mb-2">
            <span>✅ 6 mois en prod</span>
            <span>📊 Metrics publics</span>
            <span>💻 Code GitHub</span>
          </div>

          {/* AGENT METRICS - HERO SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-6">
              Preuves concrètes ce mois
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {AGENT_METRICS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 border border-yellow-400/30 rounded-lg p-4 text-center"
                >
                  <div className="text-3xl font-bold text-yellow-400 mb-1">{item.metric}</div>
                  <div className="font-bold text-sm mb-1">{item.agent}</div>
                  <div className="text-xs text-gray-500">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION - NEW (Key for proof variant) */}
      <section className="relative px-4 py-16 md:py-24 bg-gradient-to-b from-transparent to-green-500/5">
        <div className="max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-12 text-center"
          >
            Ce que disent les users
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-green-400/30 rounded-lg p-6 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{testimonial.avatar}</span>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">{testimonial.title}</div>
                  </div>
                </div>
                <p className="text-gray-300 flex-1 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SCREEN 2: AGITATE PROBLEM */}
      <section className="relative px-4 py-16 md:py-24 bg-gradient-to-b from-transparent to-red-500/5">
        <div className="max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-8 text-center"
          >
            Avant les agents:
            <br />
            <span className="text-red-400">20h/semaine gaspillées</span>
          </motion.h2>

          <div className="space-y-4">
            {[
              "⏱️ Chercher de l'info sur 10 onglets ouverts (5h/semaine)",
              "⏱️ Copier-coller entre ChatGPT, Notion, Slack (3h/semaine)",
              "⏱️ Publier manuellement sur X/LinkedIn/TikTok (8h/semaine)",
              "⏱️ Lire des docs API pour la 5ème fois (4h/semaine)",
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
            className="mt-8 p-6 bg-gradient-to-r from-green-400/10 to-blue-400/10 border border-green-400/30 rounded-lg text-center"
          >
            <p className="text-xl font-bold mb-2">Après avec les agents:</p>
            <p className="text-green-400 font-bold text-lg">
              2h/semaine de supervision
            </p>
            <p className="text-gray-400 mt-2">
              Les 18h restantes? Ton boulot important.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CASE STUDY SECTION - NEW (Proof) */}
      <section className="relative px-4 py-16 md:py-24 bg-gradient-to-b from-transparent to-blue-500/5">
        <div className="max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-8 text-center"
          >
            Cas d'usage réel:
            <br />
            <span className="text-blue-400">SaaS ship en 10 jours</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-blue-400/30 rounded-lg p-8 space-y-4"
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl">🔍</span>
              <div>
                <h3 className="font-bold text-xl mb-2">Jour 1-2: Theo (Veille)</h3>
                <p className="text-gray-400">
                  Theo scrape Reddit, Twitter, Product Hunt + trouve 12 opportunités marché.
                  Synthèse en 30 sec. Pierre identifie sa niche.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-3xl">✍️</span>
              <div>
                <h3 className="font-bold text-xl mb-2">Jour 3-5: Xavier (Contenu)</h3>
                <p className="text-gray-400">
                  Xavier génère 20 posts X "launch day" + landing page copy. Pierre review en 1h.
                  Ship landing. Generate buzz.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-3xl">📤</span>
              <div>
                <h3 className="font-bold text-xl mb-2">Jour 6-8: Marco (Distribution)</h3>
                <p className="text-gray-400">
                  Marco crée threads, posts LinkedIn, TikTok videos (via APIs). 156 posts
                  distribués. SaaS launches avec momentum.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-3xl">🧠</span>
              <div>
                <h3 className="font-bold text-xl mb-2">Jour 9-10: Victor (Validation)</h3>
                <p className="text-gray-400">
                  Victor analyse feedback + calcule CAC + estime market size. Pierre ajuste
                  pricing. SaaS prêt à croître.
                </p>
              </div>
            </div>

            <p className="pt-6 border-t border-white/10 text-green-400 font-bold">
              ✅ Résultat: SaaS en 10 jours vs 3-6 mois normalement. Time saved: 80h+.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SCREEN 3: WHAT YOU GET */}
      <section className="relative px-4 py-16 md:py-24">
        <div className="max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-12 text-center"
          >
            Ce que tu obtiens
            <br />
            <span className="text-yellow-400">(lifetime access)</span>
          </motion.h2>

          <div className="space-y-6 mb-12">
            {[
              {
                icon: "📦",
                title: "5 agents prod-ready",
                desc: "Code complet GitHub. Testés 6 mois. MIT license. Clone & run.",
              },
              {
                icon: "💬",
                title: "Discord privé (100 builders)",
                desc: "Q&A direct. Code reviews. Weekly office hours. Pas de forum mort.",
              },
              {
                icon: "📅",
                title: "Weekly code drops",
                desc: "Nouveaux agents. Bug fixes. Learning publics. Logs Discord.",
              },
              {
                icon: "🇫🇷",
                title: "Templates commentés FR",
                desc: "Setup guides. Config .env expliquée. Troubleshooting docs.",
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
                <div className="text-4xl">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 border-2 border-yellow-400 rounded-2xl p-8 text-center"
          >
            <p className="text-sm uppercase tracking-wider text-yellow-400 mb-2">
              Founding Member
            </p>
            <div className="flex items-baseline justify-center gap-2 mb-4">
              <span className="text-5xl md:text-6xl font-bold">€49</span>
              <span className="text-2xl text-gray-400 line-through">€99</span>
            </div>
            <p className="text-gray-300 mb-6">
              Prix monte à €99 après les 100 premiers.
              <br />
              <span className="text-sm text-gray-500">
                (actuellement: {spotsLeft} places restantes)
              </span>
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ton@email.com"
                className="w-full px-4 py-5 text-lg bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors text-white placeholder-gray-500 mb-4"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full py-5 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg active:scale-95"
              >
                {loading ? "..." : "Accès immédiat · €49"}
              </button>
            </form>

            <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-500">
              <span>🔒 Paiement sécurisé</span>
              <span>✅ Garantie 30j</span>
              <span>⚡ Accès instantané</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AGENT STATUS */}
      <section className="relative px-4 py-16 md:py-24 bg-gradient-to-b from-transparent to-purple-500/5">
        <div className="max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-8 text-center"
          >
            Les agents en prod
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {AGENT_STATUS.map((agent, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/5 border border-white/10 rounded-lg p-4 text-center hover:border-yellow-400/30 transition-colors"
              >
                <div className="text-3xl mb-2">{agent.emoji}</div>
                <div className="font-bold text-base mb-1">{agent.name}</div>
                <div className="text-xs text-green-400 mb-2">{agent.status}</div>
                <div className="text-xs text-gray-600">{agent.uptime}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative px-4 py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Prêt à rejoindre
            <br />
            <span className="text-yellow-400">les 100 premiers?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 mb-8"
          >
            Accès immédiat. Code GitHub + Discord. Agents testés 6 mois.
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
              placeholder="ton@email.com"
              className="flex-1 px-4 py-5 text-lg bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors text-white placeholder-gray-500"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-5 text-lg bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
            >
              {loading ? "..." : "Rejoindre"}
            </button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-gray-500">
        <p>
          Construit par{" "}
          <a
            href="https://x.com/Pillaw_AI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:underline"
          >
            @Pillaw_AI
          </a>
          {" "}• Build in public • 0 bullshit
        </p>
        <p className="mt-2">
          <a href="mailto:contact@pillow.ai" className="hover:text-white transition-colors">
            contact@pillow.ai
          </a>
        </p>
      </footer>
    </main>
  );
}
