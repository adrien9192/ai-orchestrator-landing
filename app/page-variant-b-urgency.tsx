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

const RECENT_SIGNUPS = [
  { name: "Jean", timeAgo: "il y a 4 min" },
  { name: "Sophie", timeAgo: "il y a 12 min" },
  { name: "Marc", timeAgo: "il y a 23 min" },
  { name: "Céline", timeAgo: "il y a 34 min" },
  { name: "Thomas", timeAgo: "il y a 51 min" },
];

export default function VariantBUrgency() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const [spotsLeft, setSpotsLeft] = useState(87);
  const [recentSignups, setRecentSignups] = useState(12);
  const [countdown, setCountdown] = useState({ hours: 23, minutes: 14, seconds: 52 });
  const [countdownWarning, setCountdownWarning] = useState(false);

  // Sticky CTA on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Countdown timer (decrement every second)
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        let { hours, minutes, seconds } = prev;
        
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
              hours = 23;
            }
          }
        }
        
        // Show warning when <4 hours left
        if (hours < 4) {
          setCountdownWarning(true);
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
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

  const padZero = (num: number) => String(num).padStart(2, "0");

  return (
    <main className="min-h-screen bg-[#0A0A0F] text-gray-100">
      {/* URGENCY BANNER - Top (sticky warning) */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 py-3 px-4 text-center text-sm font-bold transition-colors ${
          countdownWarning
            ? "bg-red-500/20 border-b border-red-500/50"
            : "bg-yellow-400/10 border-b border-yellow-400/30"
        }`}
      >
        <div className="max-w-2xl mx-auto">
          {countdownWarning ? (
            <span className="text-red-400">
              🚨 DERNIER APPEL! Prix €49 expire dans{" "}
              <span className="font-black text-red-300">
                {padZero(countdown.hours)}:{padZero(countdown.minutes)}:{padZero(countdown.seconds)}
              </span>
            </span>
          ) : (
            <span className="text-yellow-400">
              ⏰ Prix Early Bird €49 expire dans{" "}
              <span className="font-black text-yellow-300">
                {padZero(countdown.hours)}:{padZero(countdown.minutes)}:{padZero(countdown.seconds)}
              </span>
              {" "}• {spotsLeft} places restantes
            </span>
          )}
        </div>
      </motion.div>

      {/* Sticky CTA (Thumb Zone - Bottom) */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: showSticky ? 0 : 100 }}
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden shadow-2xl"
      >
        <div className="bg-[#0A0A0F]/95 backdrop-blur-md border-t border-yellow-400/20 p-4 space-y-2">
          <button
            onClick={() =>
              document.getElementById("cta-form")?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full py-5 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 font-bold rounded-lg transition-all active:scale-95 text-lg"
          >
            Rejoindre avant €99 ▶
          </button>
          <p className="text-xs text-gray-500 text-center">
            Expire dans {padZero(countdown.hours)}:{padZero(countdown.minutes)}:{padZero(countdown.seconds)}
          </p>
        </div>
      </motion.div>

      {/* SCREEN 1: HERO */}
      <section className="relative px-4 pt-16 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-2xl mx-auto text-center">
          {/* Trust Signal + Urgency */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 mb-6 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-full"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="text-red-400 text-sm font-bold">
              {recentSignups} builders inscrits cette semaine • {spotsLeft}/100 places restantes
            </span>
          </motion.div>

          {/* URGENCY HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            5 agents IA qui bossent 24/7
            <br />
            <span className="text-yellow-400">· Prix Early Bird</span> €49
          </motion.h1>

          {/* URGENCY SUBHEAD */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-6 max-w-xl mx-auto"
          >
            <span className="text-white font-bold">Passe à €99</span> après les 100 premiers.
            <br />
            <span className="text-red-400 font-bold">
              {spotsLeft} places restantes • Expire dans{" "}
              {padZero(countdown.hours)}:{padZero(countdown.minutes)}:{padZero(countdown.seconds)}
            </span>
          </motion.p>

          {/* CTA Form */}
          <motion.form
            id="cta-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6"
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
              className="px-8 py-5 text-lg bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 font-bold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
            >
              {loading ? "..." : `Rejoindre €49`}
            </button>
          </motion.form>

          {status === "success" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-400 text-sm mb-4"
            >
              ✅ Bienvenue! Check ton email.
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

          {/* LIVE SIGNUP FEED - NEW (Urgency) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 pt-8 border-t border-white/10"
          >
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">
              🟢 Dernières inscriptions
            </p>
            <div className="space-y-2 text-center">
              {RECENT_SIGNUPS.map((signup, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  className="text-sm text-gray-400"
                >
                  <span className="text-green-400 font-bold">{signup.name}</span> vient de rejoindre (
                  <span className="text-yellow-400">{signup.timeAgo}</span>)
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Agent Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">
              Agents en prod
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
            Tu passes combien d'heures par semaine à:
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
            <p className="text-xl font-bold mb-2">Moi aussi. Alors j'ai automatisé.</p>
            <p className="text-gray-400">
              5 agents qui font ça 24/7 pendant que tu dors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* RÉSULTATS CONCRETS */}
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
            <span className="text-yellow-400">20h/semaine saved</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 mb-12 text-lg"
          >
            Pendant que toi tu dors ou bosses sur ce qui compte vraiment.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-yellow-400/30 rounded-xl p-6"
            >
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Setup en 48h</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Clone mes repos. Configure 3 variables d'env. Run. Tes agents bossent.
                <br /><br />
                <span className="text-red-400 line-through">Pas 6 mois à trial-error.</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-yellow-400/30 rounded-xl p-6"
            >
              <div className="text-4xl mb-4">🌙</div>
              <h3 className="text-xl font-bold mb-3">Bossent 24/7</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Theo cherche des insights à 3h du mat'. Xavier génère du contenu pendant ton sommeil.
                <br /><br />
                <span className="text-green-400">Tu wake up avec 10 tasks done.</span>
              </p>
            </motion.div>
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
              <p>• <strong>Ton taux horaire:</strong> €50/h</p>
              <p>• <strong>Valeur saved:</strong> €4,000/mois</p>
              <p className="pt-3 border-t border-yellow-400/20">
                • <strong className="text-yellow-400">Prix Early Bird:</strong> €49 (one-time)
              </p>
              <p className="text-red-400 font-bold">
                • ROI payé en ~9 heures saved
              </p>
            </div>
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

          {/* Pricing - URGENCY FOCUSED */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 border-2 border-yellow-400 rounded-2xl p-8 text-center relative overflow-hidden"
          >
            {/* Blinking border effect on urgency */}
            <div className="absolute inset-0 border-2 border-yellow-400 rounded-2xl opacity-50 animate-pulse"></div>

            <div className="relative z-10">
              <p className="text-sm uppercase tracking-wider text-red-400 font-bold mb-2">
                ⏰ EARLY BIRD PRICING
              </p>
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-5xl md:text-6xl font-bold">€49</span>
                <span className="text-2xl text-gray-400 line-through">€99</span>
              </div>
              <p className="text-gray-300 mb-6 font-bold">
                Prix monte à €99 après les 100 premiers.
                <br />
                <span className="text-red-400 font-black">
                  {spotsLeft} places restantes • {padZero(countdown.hours)}:{padZero(countdown.minutes)}:{padZero(countdown.seconds)}
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
                  className="w-full py-5 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 font-bold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg active:scale-95"
                >
                  {loading ? "..." : "Accès immédiat €49"}
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-4">
                💳 Paiement sécurisé • 🔒 Données chiffrées • ✅ Accès instantané
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* URGENCY CTA - BEFORE FOOTER */}
      <section className="relative px-4 py-16 md:py-24 bg-gradient-to-b from-transparent to-orange-500/10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            {spotsLeft <= 20 && (
              <>
                🚨 Seulement{" "}
                <span className="text-red-400 animate-pulse">{spotsLeft} places</span>{" "}
                restantes
                <br />
              </>
            )}
            <span className="text-yellow-400">
              Prix €49 expire dans{" "}
              {padZero(countdown.hours)}:{padZero(countdown.minutes)}:{padZero(countdown.seconds)}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 mb-8"
          >
            Après, €99 à vie.
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
              className="px-8 py-5 text-lg bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
            >
              {loading ? "..." : "Rejoindre maintenant"}
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
