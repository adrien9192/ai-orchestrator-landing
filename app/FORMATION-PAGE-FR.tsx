"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// ============================================================================
// FORMATION AI ORCHESTRATOR — Landing Page Française
// ============================================================================
// Personas: Sophie (e-commerce), Marc (services), Julie (SaaS)
// Message: Récupérez 8+ heures/semaine sans code
// Prix: €49 fondateur (limité), puis €199
// ============================================================================

export default function FormationPageFR() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [spotsLeft, setSpotsLeft] = useState(12);
  const [showSticky, setShowSticky] = useState(false);

  // Sticky CTA on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle email signup
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || loading) return;

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "formation-fr" }),
      });

      if (res.ok) {
        setStatus("✅ Parfait ! Accès envoyé par email (vérifiez vos spams).");
        setEmail("");
        setSpotsLeft((prev) => Math.max(0, prev - 1));
      } else {
        setStatus("❌ Erreur. Réessayez ou contactez contact@pillow.ai");
      }
    } catch (err) {
      setStatus("❌ Problème réseau. Réessayez dans quelques secondes.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* ===== STICKY CTA BAR (Mobile-optimized) ===== */}
      {showSticky && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="fixed top-0 left-0 right-0 z-50 bg-orange-500 text-white py-3 px-4 shadow-lg"
        >
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <span className="font-semibold text-sm md:text-base">
              🔥 {spotsLeft}/90 places fondateurs restantes
            </span>
            <a
              href="#signup"
              className="bg-white text-orange-600 px-4 py-2 rounded-lg font-bold text-sm hover:bg-gray-100 transition"
            >
              Commencer
            </a>
          </div>
        </motion.div>
      )}

      {/* ===== HERO SECTION ===== */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Trust Badge */}
          <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🔥 {spotsLeft} places fondateurs restantes sur 90
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Récupérez 8+ heures par semaine.
            <br />
            <span className="text-orange-500">Sans coder.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Vous perdez 6 à 12 heures par semaine à copier-coller des données, synchroniser vos outils, relancer des clients ?
            <br />
            <strong className="text-gray-800">Formation AI Orchestrator automatise tout ça. En quelques clics.</strong>
          </p>

          {/* CTA */}
          <a
            href="#signup"
            className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition shadow-lg mb-4"
          >
            Essai gratuit 48h (sans CB)
          </a>
          <p className="text-sm text-gray-500">
            ✓ Aucun engagement · ✓ Configuration en 15 minutes · ✓ Support inclus
          </p>
        </motion.div>
      </section>

      {/* ===== PERSONA SECTIONS ===== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Sophie — E-commerce */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition"
          >
            <div className="text-5xl mb-4">📦</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              E-commerce multi-canal ?
            </h3>
            <p className="text-gray-600 mb-4">
              Vous vendez sur Shopify, Amazon, Etsy… et vous passez <strong>8 heures par semaine</strong> à synchroniser les stocks, exporter les commandes, mettre à jour les prix.
            </p>
            <p className="text-orange-600 font-bold text-lg">
              → Automatisez tout. Économisez 8h/semaine.
            </p>
          </motion.div>

          {/* Marc — Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition"
          >
            <div className="text-5xl mb-4">💼</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Activité de service ?
            </h3>
            <p className="text-gray-600 mb-4">
              Vous relancez des devis, copiez des données entre Gmail et votre CRM, créez des factures à la main. <strong>6 heures par semaine</strong> perdues.
            </p>
            <p className="text-orange-600 font-bold text-lg">
              → Automatisez vos relances. Récupérez 6h/semaine.
            </p>
          </motion.div>

          {/* Julie — SaaS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition"
          >
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Fondateur·ice SaaS ?
            </h3>
            <p className="text-gray-600 mb-4">
              Vous devez grandir, mais vous perdez <strong>10 heures par semaine</strong> à faire tourner votre CRM, exporter des stats, répondre aux mêmes emails.
            </p>
            <p className="text-orange-600 font-bold text-lg">
              → Concentrez-vous sur la croissance. Gagnez 10h/semaine.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== SOCIAL PROOF / TESTIMONIALS ===== */}
      <section className="max-w-6xl mx-auto px-6 py-16 bg-gray-50 rounded-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Ils ont récupéré leur temps
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 — Sophie type */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <p className="text-gray-700 mb-4 italic">
              "Je synchronisais mes stocks entre Shopify et WooCommerce à la main. 7 heures par semaine perdues. Maintenant c'est automatique. <strong>7 heures récupérées</strong> pour développer ma gamme."
            </p>
            <p className="font-semibold text-gray-900">Sophie · E-commerce</p>
          </motion.div>

          {/* Testimonial 2 — Marc type */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <p className="text-gray-700 mb-4 italic">
              "Relancer mes devis, c'était 4 heures par semaine de copier-coller. Formation envoie tout automatiquement. <strong>€2 400 de CA en plus</strong> le premier mois."
            </p>
            <p className="font-semibold text-gray-900">Marc · Consulting</p>
          </motion.div>

          {/* Testimonial 3 — Julie type */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <p className="text-gray-700 mb-4 italic">
              "Entre mon CRM, Stripe et mes stats, je passais <strong>9 heures/semaine</strong> à exporter et synchroniser. Maintenant tout est connecté. Je focus sur la product."
            </p>
            <p className="font-semibold text-gray-900">Julie · SaaS</p>
          </motion.div>
        </div>
      </section>

      {/* ===== OBJECTION BREAKER ===== */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Les 3 questions qu'on nous pose
        </h2>
        <div className="space-y-6">
          {/* Objection 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500"
          >
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              ❓ "C'est trop technique pour moi ?"
            </h3>
            <p className="text-gray-700">
              <strong>Non. Sans code.</strong> Vous connectez vos outils (Shopify, Gmail, Stripe…) en quelques clics. Pas de formation, pas de développeur.
            </p>
          </motion.div>

          {/* Objection 2 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500"
          >
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              ⏱️ "Combien de temps pour mettre en place ?"
            </h3>
            <p className="text-gray-700">
              <strong>15 minutes.</strong> Connectez vos comptes, activez vos automatisations. Ça tourne le lendemain.
            </p>
          </motion.div>

          {/* Objection 3 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500"
          >
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              🛠️ "Et si ça plante ?"
            </h3>
            <p className="text-gray-700">
              <strong>Nous gérons tout.</strong> Monitoring 24/7, support direct, rollback automatique. Vous dormez tranquille.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== PRICING & CTA SECTION ===== */}
      <section id="signup" className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-10 rounded-2xl shadow-2xl text-center"
        >
          {/* Scarcity Badge */}
          <div className="inline-block bg-white text-orange-600 px-4 py-2 rounded-full font-bold text-sm mb-6">
            🔥 Dernières {spotsLeft} places sur 90
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Tarif fondateur : €49
          </h2>
          <p className="text-xl mb-2 line-through opacity-75">
            Prix final : €199/mois
          </p>
          <p className="text-lg mb-8">
            Réservez maintenant. Accès à vie à €49/mois. Places limitées.
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                required
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 font-medium focus:outline-none focus:ring-4 focus:ring-orange-300"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-gray-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition disabled:opacity-50"
              >
                {loading ? "..." : "Commencer"}
              </button>
            </div>
            {status && (
              <p className={`text-sm ${status.includes("✅") ? "text-green-200" : "text-red-200"}`}>
                {status}
              </p>
            )}
          </form>

          {/* Trust Elements */}
          <div className="mt-6 space-y-2 text-sm opacity-90">
            <p>✓ Accès gratuit 48 heures</p>
            <p>✓ Aucune carte bancaire requise</p>
            <p>✓ Support direct inclus</p>
          </div>
        </motion.div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-200">
        <div className="text-center">
          <p className="text-gray-600 mb-2">
            Formation AI Orchestrator · Automatisez votre métier sans code
          </p>
          <p className="text-gray-500 text-sm">
            Contact :{" "}
            <a
              href="mailto:contact@pillow.ai"
              className="text-orange-500 hover:underline font-medium"
            >
              contact@pillow.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
