"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [revenue, setRevenue] = useState("");
  const [savings, setSavings] = useState(0);

  // ROI Calculator
  const calculateSavings = (monthlyRevenue: number) => {
    // Assumption: Formation saves 8h/week * 4 weeks = 32h/month
    // If hourly rate = revenue / 160h (standard work month)
    const hourlyValue = monthlyRevenue / 160;
    const hoursSaved = 32;
    const monthlySavings = hourlyValue * hoursSaved;
    const formationCost = billingCycle === "monthly" ? 199 : 166; // €1,999/year = €166/month
    return Math.max(0, monthlySavings - formationCost);
  };

  const handleRevenueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setRevenue(value);
    if (value) {
      setSavings(calculateSavings(parseInt(value)));
    } else {
      setSavings(0);
    }
  };

  const pricingTiers = [
    {
      name: "Starter",
      price: billingCycle === "monthly" ? 49 : 40,
      originalPrice: billingCycle === "monthly" ? 99 : 82,
      period: billingCycle === "monthly" ? "/mois" : "/mois (facturé annuellement)",
      description: "Pour les solopreneurs qui débutent l'automatisation",
      features: [
        "5 workflows actifs",
        "1,000 exécutions/mois",
        "Connecteurs de base (Gmail, Stripe, Shopify)",
        "Support email 48h",
        "Templates prêts à l'emploi",
      ],
      cta: "Commencer gratuitement",
      highlight: false,
    },
    {
      name: "Professional",
      price: billingCycle === "monthly" ? 199 : 166,
      originalPrice: billingCycle === "monthly" ? 399 : 332,
      period: billingCycle === "monthly" ? "/mois" : "/mois (facturé annuellement)",
      description: "Pour les entreprises qui veulent scaler leurs processus",
      features: [
        "Workflows illimités",
        "10,000 exécutions/mois",
        "Tous les connecteurs (100+ apps)",
        "Support prioritaire 24h",
        "Templates premium + personnalisés",
        "AI agents inclus",
        "Analytics avancés",
      ],
      cta: "Démarrer l'essai gratuit",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: null,
      period: "Sur devis",
      description: "Pour les grandes organisations avec des besoins spécifiques",
      features: [
        "Tout du Professional",
        "Exécutions illimitées",
        "Déploiement on-premise disponible",
        "Support dédié 24/7",
        "SLA 99.99%",
        "Formations personnalisées",
        "Intégrations custom",
      ],
      cta: "Contactez-nous",
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tarifs simples et transparents
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Pas de frais cachés. Annulez quand vous voulez.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-gray-200 rounded-lg p-1">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-md font-semibold transition ${
                billingCycle === "monthly"
                  ? "bg-white text-gray-900 shadow"
                  : "text-gray-600"
              }`}
            >
              Mensuel
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2 rounded-md font-semibold transition ${
                billingCycle === "yearly"
                  ? "bg-white text-gray-900 shadow"
                  : "text-gray-600"
              }`}
            >
              Annuel
              <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                -17%
              </span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-2xl p-8 ${
                tier.highlight
                  ? "bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-2xl scale-105 border-4 border-orange-400"
                  : "bg-white text-gray-900 shadow-lg border border-gray-200"
              }`}
            >
              {tier.highlight && (
                <div className="inline-block bg-white text-orange-600 px-3 py-1 rounded-full text-xs font-bold mb-4">
                  ⭐ PLUS POPULAIRE
                </div>
              )}

              <h3 className={`text-2xl font-bold mb-2 ${tier.highlight ? "text-white" : "text-gray-900"}`}>
                {tier.name}
              </h3>
              <p className={`text-sm mb-6 ${tier.highlight ? "text-orange-100" : "text-gray-600"}`}>
                {tier.description}
              </p>

              <div className="mb-6">
                {tier.price !== null ? (
                  <>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">€{tier.price}</span>
                      <span className={`text-sm ${tier.highlight ? "text-orange-100" : "text-gray-500"}`}>
                        {tier.period}
                      </span>
                    </div>
                    <p className={`text-sm line-through ${tier.highlight ? "text-orange-200" : "text-gray-400"}`}>
                      €{tier.originalPrice}{tier.period}
                    </p>
                  </>
                ) : (
                  <span className="text-3xl font-bold">{tier.period}</span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className={`text-lg ${tier.highlight ? "text-white" : "text-green-500"}`}>
                      ✓
                    </span>
                    <span className={`text-sm ${tier.highlight ? "text-white" : "text-gray-700"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.price !== null ? "#signup" : "/contact"}
                className={`block w-full py-3 rounded-lg font-bold text-center transition ${
                  tier.highlight
                    ? "bg-white text-orange-600 hover:bg-gray-100"
                    : "bg-orange-500 text-white hover:bg-orange-600"
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ROI Calculator */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl p-8 md:p-12 shadow-2xl"
        >
          <h2 className="text-3xl font-bold mb-4 text-center">
            💰 Calculez vos économies
          </h2>
          <p className="text-blue-100 text-center mb-8">
            Découvrez combien Formation peut vous faire économiser chaque mois
          </p>

          <div className="max-w-md mx-auto">
            <label className="block text-sm font-semibold mb-2">
              Votre chiffre d'affaires mensuel (€)
            </label>
            <input
              type="text"
              value={revenue}
              onChange={handleRevenueChange}
              placeholder="Ex: 10000"
              className="w-full px-4 py-3 rounded-lg text-gray-900 font-semibold text-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
            />

            {savings > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 bg-white text-gray-900 rounded-lg p-6 text-center"
              >
                <p className="text-sm text-gray-600 mb-2">
                  Vous économiserez environ
                </p>
                <p className="text-4xl font-bold text-green-600 mb-2">
                  €{Math.round(savings).toLocaleString()}
                  <span className="text-lg">/mois</span>
                </p>
                <p className="text-sm text-gray-500">
                  soit €{Math.round(savings * 12).toLocaleString()}/an de temps récupéré
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Comparison Table */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Formation vs Zapier vs Make
        </h2>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">
                    Fonctionnalité
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-orange-600">
                    Formation
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">
                    Zapier
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">
                    Make
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Prix démarrage</td>
                  <td className="px-6 py-4 text-center text-sm font-bold text-green-600">€49/mois</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">€29/mois</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">€9/mois</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Workflows inclus</td>
                  <td className="px-6 py-4 text-center text-sm font-bold text-green-600">5-Illimité</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">20</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">1,000 ops</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">AI Agents</td>
                  <td className="px-6 py-4 text-center text-sm">✅</td>
                  <td className="px-6 py-4 text-center text-sm">❌</td>
                  <td className="px-6 py-4 text-center text-sm">❌</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Support français 24h</td>
                  <td className="px-6 py-4 text-center text-sm">✅</td>
                  <td className="px-6 py-4 text-center text-sm">❌</td>
                  <td className="px-6 py-4 text-center text-sm">❌</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Templates production-ready</td>
                  <td className="px-6 py-4 text-center text-sm">✅</td>
                  <td className="px-6 py-4 text-center text-sm">⚠️ Limité</td>
                  <td className="px-6 py-4 text-center text-sm">⚠️ Limité</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Formation incluse</td>
                  <td className="px-6 py-4 text-center text-sm">✅</td>
                  <td className="px-6 py-4 text-center text-sm">❌</td>
                  <td className="px-6 py-4 text-center text-sm">❌</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">RGPD UE</td>
                  <td className="px-6 py-4 text-center text-sm">✅</td>
                  <td className="px-6 py-4 text-center text-sm">⚠️ US-based</td>
                  <td className="px-6 py-4 text-center text-sm">✅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-8 md:p-12 text-center shadow-2xl"
        >
          <h2 className="text-3xl font-bold mb-4">
            Prêt à automatiser votre métier ?
          </h2>
          <p className="text-orange-100 mb-8 text-lg">
            Essai gratuit 48h · Aucune carte bancaire requise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#signup"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
            >
              Commencer gratuitement
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-orange-600 transition"
            >
              Parler à un expert
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
