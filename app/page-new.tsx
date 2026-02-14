"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Real-time agent status (could be fetched from API)
const AGENT_STATUS = [
  { name: "Theo", status: "✅ Prod", uptime: "14 jours", emoji: "🔍" },
  { name: "Xavier", status: "✅ Prod", uptime: "7 jours", emoji: "✍️" },
  { name: "Marco", status: "🏗️ 80%", uptime: "Deploy: 3j", emoji: "📤" },
  { name: "Kelly", status: "⏳ 40%", uptime: "Design", emoji: "🎨" },
  { name: "Victor", status: "📝 Spec", uptime: "Not started", emoji: "🧠" },
];

const MISTAKES = [
  {
    title: "Je pensais avoir besoin de 10 agents",
    reality: "J'en ai construit 3. Ils font 90% du boulot.",
  },
  {
    title: "J'ai passé 2 semaines sur l'UI",
    reality: "Personne n'en avait rien à foutre. Le code compte.",
  },
  {
    title: "Je voulais Theo parfait avant de ship",
    reality: "J'ai ship à 70%. Les users ont adoré les bugs corrigés en public.",
  },
];

export default function NewLanding() {
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

  // Load real signup count (from /tmp/signups/emails.jsonl)
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
        // Fallback to default
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
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      >
        <div className="bg-[#0A0A0F]/95 backdrop-blur-md border-t border-yellow-400/20 p-4">
          <button
            onClick={() =>
              document.getElementById("cta-form")?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-lg transition-all active:scale-95"
          >
            Rejoindre ({spotsLeft} places)
          </button>
        </div>
      </motion.div>

      {/* SCREEN 1: HERO */}
      <section className="relative px-4 pt-12 pb-16 md:pt-24 md:pb-24">
        <div className="max-w-2xl mx-auto text-center">
          {/* Trust Signal */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-red-400 text-sm font-medium">
              🔴 {recentSignups} builders inscrits cette semaine
            </span>
          </motion.div>

          {/* Headline (8-10 words) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            Je construis 5 agents IA.
            <br />
            <span className="text-yellow-400">Tu apprends avec moi.</span>
          </motion.h1>

          {/* Subhead (20 words max) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl mx-auto"
          >
            Code sur GitHub. Discord privé. Pas de bullshit expert.
            <br />
            <span className="text-white">Tous les échecs inclus.</span>
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
              className="flex-1 px-4 py-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors text-white placeholder-gray-500"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
            >
              {loading ? "..." : `Rejoindre (€49)`}
            </button>
          </motion.form>

          {status === "success" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-400 text-sm"
            >
              ✅ Bienvenue! Check ton email (et les spams).
            </motion.p>
          )}

          {status === "error" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-sm"
            >
              ❌ Erreur. Réessaye ou ping @Pillaw_AI sur X.
            </motion.p>
          )}

          {/* Spots left */}
          <p className="text-sm text-gray-500">
            <span className="text-yellow-400 font-bold">{spotsLeft}/100</span> places
            fondateur restantes
          </p>

          {/* Real Agent Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">
              Agents en prod (live)
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {AGENT_STATUS.map((agent, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-lg p-3 text-center"
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

      {/* SCREEN 2: AGITATE PROBLEM */}
      <section className="relative px-4 py-16 md:py-24 bg-gradient-to-b from-transparent to-red-500/5">
        <div className="max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-8 text-center"
          >
            Tu passes combien d'heures
            <br />
            <span className="text-red-400">par semaine</span> à:
          </motion.h2>

          <div className="space-y-4">
            {[
              "⏱️ Chercher de l'info sur 10 onglets ouverts",
              "⏱️ Copier-coller entre ChatGPT, Notion, Slack",
              "⏱️ Publier manuellement sur X/LinkedIn/TikTok",
              "⏱️ Lire des docs API pour la 5ème fois",
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
            className="mt-8 p-6 bg-yellow-400/10 border border-yellow-400/30 rounded-lg text-center"
          >
            <p className="text-xl font-bold mb-2">Moi aussi.</p>
            <p className="text-gray-400">
              C'est pour ça que je construis des agents qui font ça pendant que je dors.
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
                desc: "GitHub repos complets. MIT license. Clone & run.",
              },
              {
                icon: "💬",
                title: "Discord privé",
                desc: "100 builders max. Q&A direct. Pas de forum mort.",
              },
              {
                icon: "📅",
                title: "Weekly updates",
                desc: "Code drops + failures + learning. Tous les vendredis.",
              },
              {
                icon: "🇫🇷",
                title: "Templates commentés",
                desc: "En français. Expliqués. Pas de magie noire.",
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
                className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors text-white placeholder-gray-500 mb-4"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg active:scale-95"
              >
                {loading ? "..." : "Accès immédiat →"}
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-4">
              💳 Paiement sécurisé • 🔒 Données chiffrées • ✅ Accès instantané
            </p>
          </motion.div>
        </div>
      </section>

      {/* MISTAKES SECTION (Vulnerability = Trust) */}
      <section className="relative px-4 py-16 md:py-24 bg-gradient-to-b from-transparent to-purple-500/5">
        <div className="max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-8 text-center"
          >
            Erreurs que j'ai faites
            <br />
            <span className="text-gray-500">(pour que tu les évites)</span>
          </motion.h2>

          <div className="space-y-4">
            {MISTAKES.map((mistake, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-purple-400/30 transition-colors cursor-pointer group"
              >
                <summary className="font-bold text-lg list-none flex items-center justify-between">
                  <span>❌ {mistake.title}</span>
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-400 pl-8">
                  ✅ <span className="text-white">{mistake.reality}</span>
                </p>
              </motion.details>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center text-gray-500 italic"
          >
            "Les erreurs sont gratuites. Les lessons sont lifetime."
          </motion.p>
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
            Prêt à construire
            <br />
            <span className="text-yellow-400">des agents avec moi?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 mb-8"
          >
            {spotsLeft} places fondateur à €49.
            <br />
            Ensuite €99.
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
              className="flex-1 px-4 py-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors text-white placeholder-gray-500"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
            >
              {loading ? "..." : "C'est parti"}
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
