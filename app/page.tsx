"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// ============================================================================
// FORMATION AI ORCHESTRATOR — Landing Page Française (Enhanced)
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
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "formation-hero" }),
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
      {/* ===== STICKY BOTTOM CTA BAR (Mobile-optimized) ===== */}
      {showSticky && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-orange-500 text-white py-3 px-4 shadow-2xl border-t-2 border-orange-400"
        >
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
            <span className="font-semibold text-xs sm:text-sm">
              🔥 {spotsLeft}/90 places fondateurs · 1,247 fondateurs utilisent Formation
            </span>
            <a
              href="#signup"
              className="bg-white text-orange-600 px-6 py-2 rounded-lg font-bold text-sm hover:bg-gray-100 transition shadow-md whitespace-nowrap"
            >
              Commencer →
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
          {/* Social Proof Badge */}
          <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🔥 1,247 fondateurs utilisent Formation · {spotsLeft} places restantes
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

          {/* Objection Breakers (Icons) */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
            <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full font-medium">
              <span className="text-lg">✓</span>
              <span>15 min setup</span>
            </div>
            <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full font-medium">
              <span className="text-lg">✓</span>
              <span>No credit card</span>
            </div>
            <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full font-medium">
              <span className="text-lg">✓</span>
              <span>48h guarantee</span>
            </div>
          </div>

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

      {/* ===== TESTIMONIAL VIDEO SECTION ===== */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            💬 "Formation a changé ma vie"
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Découvrez comment Sophie a récupéré 8h/semaine et augmenté son CA de 30% en automatisant son e-commerce.
          </p>
          
          {/* Video Placeholder */}
          <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center border-2 border-gray-600">
            <div className="text-center">
              <div className="text-6xl mb-4">▶️</div>
              <p className="text-gray-400 text-sm">
                Vidéo témoignage à venir
                <br />
                (Loom / YouTube embed)
              </p>
            </div>
          </div>
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

      {/* ===== SOCIAL PROOF / CASE STUDIES ===== */}
      <section className="max-w-6xl mx-auto px-6 py-16 bg-gray-50 rounded-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ils ont récupéré leur temps
          </h2>
          <div className="flex items-center justify-center gap-2 text-yellow-500 text-xl mb-2">
            <span>★★★★★</span>
          </div>
          <p className="text-gray-600">
            <strong className="text-gray-900">4.9/5</strong> · 47 avis vérifiés
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Case Study 1 — Sophie */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-2xl">
                👩‍💼
              </div>
              <div>
                <p className="font-bold text-gray-900">Sophie L.</p>
                <p className="text-sm text-gray-500">E-commerce · Paris</p>
              </div>
            </div>
            <p className="text-gray-700 mb-3 italic">
              "Je synchronisais mes stocks entre Shopify et WooCommerce à la main. 7 heures par semaine perdues. Maintenant c'est automatique."
            </p>
            <p className="text-orange-600 font-bold">
              💰 8 heures économisées/semaine
            </p>
          </motion.div>

          {/* Case Study 2 — Marc */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                👨‍💼
              </div>
              <div>
                <p className="font-bold text-gray-900">Marc D.</p>
                <p className="text-sm text-gray-500">Consulting · Lyon</p>
              </div>
            </div>
            <p className="text-gray-700 mb-3 italic">
              "Relancer mes devis, c'était 4 heures par semaine de copier-coller. Formation envoie tout automatiquement."
            </p>
            <p className="text-green-600 font-bold">
              💰 €2,400 récupérés le 1er mois
            </p>
          </motion.div>

          {/* Case Study 3 — Julie */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                👩‍💻
              </div>
              <div>
                <p className="font-bold text-gray-900">Julie M.</p>
                <p className="text-sm text-gray-500">SaaS · Bordeaux</p>
              </div>
            </div>
            <p className="text-gray-700 mb-3 italic">
              "Entre mon CRM, Stripe et mes stats, je passais 9 heures/semaine à exporter et synchroniser. Maintenant tout est connecté."
            </p>
            <p className="text-blue-600 font-bold">
              📉 5% de churn évité
            </p>
          </motion.div>
        </div>

        <div className="text-center">
          <Link 
            href="/reviews" 
            className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition"
          >
            Voir tous les témoignages →
          </Link>
        </div>
      </section>

      {/* ===== TRUST BADGES & SIGNALS ===== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Votre sécurité, notre priorité
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-3">✅</div>
              <h4 className="font-bold text-gray-900 mb-2">RGPD Compliant</h4>
              <p className="text-gray-600 text-sm">
                100% conforme aux normes européennes
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔒</div>
              <h4 className="font-bold text-gray-900 mb-2">Sécurisé</h4>
              <p className="text-gray-600 text-sm">
                Chiffrement SSL · Données hébergées en UE
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📞</div>
              <h4 className="font-bold text-gray-900 mb-2">Support 24h Français</h4>
              <p className="text-gray-600 text-sm">
                Réponse garantie sous 24h en français
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-green-500 font-bold">✓</span>
              <span>99.9% uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500 font-bold">✓</span>
              <span>0 data breaches</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500 font-bold">✓</span>
              <span>EU data storage</span>
            </div>
          </div>
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
    </div>
  );
}
