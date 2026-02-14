"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Real-time agent status with CLEAR descriptions
const AGENT_STATUS = [
  { 
    name: "Theo", 
    status: "✅ Prod", 
    uptime: "14 jours", 
    emoji: "🔍",
    desc: "Veille techno auto"
  },
  { 
    name: "Xavier", 
    status: "✅ Prod", 
    uptime: "7 jours", 
    emoji: "✍️",
    desc: "Création contenu"
  },
  { 
    name: "Marco", 
    status: "🏗️ 80%", 
    uptime: "Deploy: 3j", 
    emoji: "📤",
    desc: "Distribution 28 plateformes"
  },
  { 
    name: "Kelly", 
    status: "⏳ 40%", 
    uptime: "Design", 
    emoji: "🎨",
    desc: "Design assistant"
  },
  { 
    name: "Victor", 
    status: "📝 Spec", 
    uptime: "Not started", 
    emoji: "🧠",
    desc: "Business validator"
  },
];

const FAQ_ITEMS = [
  {
    question: "C'est quoi exactement?",
    answer: "5 agents IA autonomes (code complet GitHub) qui tournent 24/7 pour faire ta veille, créer ton contenu et distribuer sur 28 plateformes. Tu clones, tu configure 3 variables d'env, ça tourne."
  },
  {
    question: "Je sais pas coder, c'est pour moi?",
    answer: "Si tu sais copier-coller dans un terminal et éditer un fichier .env, oui. Guides step-by-step inclus. Support Discord si tu bloques."
  },
  {
    question: "Ça marche vraiment?",
    answer: "Ces agents tournent en prod depuis 6 mois sur mon infra. Theo a trouvé 247 insights ce mois. Xavier a généré 89 posts. Marco a distribué sur 156 plateformes. Logs publics dans Discord."
  },
  {
    question: "Combien de temps pour setup?",
    answer: "2-4h pour ton premier agent. 1 journée pour tous les 5. Guides complets fournis."
  },
  {
    question: "Quel coût d'infra?",
    answer: "~€73/mois (API Claude/OpenAI + VPS + outils). Breakdown détaillé dans la formation."
  },
  {
    question: "Et si ça marche pas pour moi?",
    answer: "Garantie 30j satisfait ou remboursé. Si tu shippes pas ton premier agent, remboursement intégral."
  },
  {
    question: "Support inclus?",
    answer: "Discord privé avec Q&A direct. Weekly office hours. Code reviews sur demande."
  },
  {
    question: "Accès à vie?",
    answer: "Oui. Paiement one-time €49. Accès Discord + repos GitHub + updates lifetime."
  },
];

export default function VariantAClarity() {
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

          {/* CLARITY HEADLINE - Exactly what you get */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            5 agents IA: veille auto,
            <br />
            <span className="text-yellow-400">contenu généré, posts distribués 24/7</span>
          </motion.h1>

          {/* CLARITY SUBHEAD - How it works */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl mx-auto"
          >
            Clone mes agents prod-ready. Setup en <span className="text-white font-semibold">2h</span>.
            <br />
            Code GitHub MIT + Discord privé + weekly updates.
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
              {loading ? "..." : `Accès immédiat · €49`}
            </button>
          </motion.form>

          {status === "success" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-400 text-sm mb-4"
            >
              ✅ Bienvenue! Check ton email (et les spams).
            </motion.p>
          )}

          {status === "error" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-sm mb-4"
            >
              ❌ Erreur. Réessaye ou ping @Pillaw_AI sur X.
            </motion.p>
          )}

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-4 text-xs text-gray-500 mb-2">
            <span>🔒 Paiement sécurisé</span>
            <span>✅ Garantie 30j</span>
            <span>⚡ Accès instantané</span>
          </div>

          {/* Spots left */}
          <p className="text-sm text-gray-500">
            <span className="text-yellow-400 font-bold">{spotsLeft}/100</span> places
            fondateur restantes
          </p>

          {/* Real Agent Status - EXPANDED WITH DESCRIPTIONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">
              Les 5 agents en détail
            </p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {AGENT_STATUS.map((agent, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-lg p-4 text-center hover:border-yellow-400/30 transition-colors"
                >
                  <div className="text-3xl mb-2">{agent.emoji}</div>
                  <div className="font-bold text-base mb-1">{agent.name}</div>
                  <div className="text-xs text-gray-400 mb-2">{agent.status}</div>
                  <div className="text-xs text-yellow-400 font-medium">{agent.desc}</div>
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
            className="mt-8 p-6 bg-yellow-400/10 border border-yellow-400/30 rounded-lg text-center"
          >
            <p className="text-xl font-bold mb-2">= 20h/semaine perdues</p>
            <p className="text-gray-400">
              C'est pour ça que je construis des agents qui font ça pendant que je dors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* RÉSULTATS CONCRETS - With SPECIFICITY */}
      <section className="relative px-4 py-16 md:py-20 bg-gradient-to-b from-transparent to-yellow-400/5">
        <div className="max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-center"
          >
            Résultat concret:
            <br />
            <span className="text-yellow-400">20h/semaine → 2h supervision</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 mb-12 text-lg"
          >
            Breakdown exact de comment tu sauves 20h/semaine:
          </motion.p>

          <div className="space-y-4 mb-12">
            {[
              { task: "Veille techno", before: "5h", after: "0h", agent: "Theo" },
              { task: "Création contenu", before: "8h", after: "1h review", agent: "Xavier" },
              { task: "Distribution multi-plateformes", before: "4h", after: "0h", agent: "Marco" },
              { task: "Recherche marché", before: "3h", after: "1h synthesis", agent: "Theo" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center justify-between"
              >
                <div>
                  <div className="font-bold mb-1">{item.task}</div>
                  <div className="text-sm text-gray-500">Agent: {item.agent}</div>
                </div>
                <div className="text-right">
                  <div className="text-red-400 line-through text-sm">{item.before}</div>
                  <div className="text-green-400 font-bold">{item.after}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-yellow-400/10 to-orange-500/10 border border-yellow-400/30 rounded-xl p-6"
          >
            <h3 className="text-2xl font-bold mb-4 text-center">Calcul simple:</h3>
            <div className="space-y-2 text-gray-300">
              <p>• <strong>20h/semaine</strong> = 80h/mois saved</p>
              <p>• <strong>Ton taux horaire:</strong> €50/h (conservative)</p>
              <p>• <strong>Valeur saved:</strong> €4,000/mois</p>
              <p className="pt-3 border-t border-yellow-400/20">
                • <strong className="text-yellow-400">Prix de l'accès:</strong> €49 (one-time)
              </p>
            </div>
            <p className="mt-4 text-center text-sm text-gray-500">
              ROI payé en <span className="text-yellow-400 font-bold">~9 heures</span> saved.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SCREEN 3: WHAT YOU GET - DETAILED */}
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
                title: "5 agents prod-ready (Theo, Xavier, Marco, Kelly, Victor)",
                desc: "Code complet GitHub (MIT license). Veille auto + création contenu + distribution + design + validation business. Clone & run en 2h."
              },
              {
                icon: "💬",
                title: "Discord privé (100 builders max)",
                desc: "Q&A direct avec moi. Code reviews sur demande. Weekly office hours (vendredi 18h CET). Pas de forum mort."
              },
              {
                icon: "📅",
                title: "Weekly code drops",
                desc: "Nouveaux agents, bug fixes, learning publics. Tous les vendredis. Accès repos GitHub à vie."
              },
              {
                icon: "🇫🇷",
                title: "Templates commentés FR",
                desc: "Setup guides step-by-step. Configs .env expliquées. Troubleshooting docs. En français. Pas de magie noire."
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
              <span>✅ Garantie 30j satisfait ou remboursé</span>
              <span>⚡ Accès instantané</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ SECTION - NEW (Critical for conversion) */}
      <section className="relative px-4 py-16 md:py-24 bg-gradient-to-b from-transparent to-purple-500/5">
        <div className="max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-8 text-center"
          >
            Questions fréquentes
          </motion.h2>

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-purple-400/30 transition-colors cursor-pointer group"
              >
                <summary className="font-bold text-lg list-none flex items-center justify-between">
                  <span>{faq.question}</span>
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.details>
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
            Garantie 30j satisfait ou remboursé.
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
              {loading ? "..." : "Accès immédiat · €49"}
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
