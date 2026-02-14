"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ReviewsPage() {
  const caseStudies = [
    {
      name: "Sophie Leroux",
      role: "E-commerce · Paris",
      company: "Boutique Bohème",
      avatar: "👩‍💼",
      metric: "8 heures économisées/semaine",
      revenue: "+30% de CA",
      quote:
        "Je synchronisais mes stocks entre Shopify, WooCommerce et Amazon à la main. 7-8 heures par semaine perdues. Avec Formation, tout est automatique. J'ai pu me concentrer sur le développement de ma gamme et mon CA a augmenté de 30% en 3 mois.",
      details: [
        "Automatisation de la synchronisation des stocks (3 plateformes)",
        "Export automatique des commandes vers son logiciel de gestion",
        "Mise à jour des prix en temps réel",
        "Temps économisé réinvesti dans le marketing",
      ],
      rating: 5,
      videoPlaceholder: true,
    },
    {
      name: "Marc Dubois",
      role: "Consulting · Lyon",
      company: "MD Conseil",
      avatar: "👨‍💼",
      metric: "€2,400 récupérés le 1er mois",
      revenue: "+15% taux de conversion devis",
      quote:
        "Relancer mes devis, c'était 4 heures par semaine de copier-coller entre Gmail et mon CRM. Formation envoie tout automatiquement. Le premier mois, j'ai récupéré €2,400 de devis que j'aurais oubliés. Mon taux de conversion a explosé.",
      details: [
        "Relances automatiques de devis (J+3, J+7, J+14)",
        "Synchronisation Gmail ↔ CRM",
        "Création automatique de factures après signature",
        "Notifications Slack pour chaque conversion",
      ],
      rating: 5,
      videoPlaceholder: true,
    },
    {
      name: "Julie Martin",
      role: "SaaS · Bordeaux",
      company: "TaskFlow",
      avatar: "👩‍💻",
      metric: "5% de churn évité",
      revenue: "9 heures économisées/semaine",
      quote:
        "Entre mon CRM, Stripe, et mes tableaux de bord, je passais 9 heures par semaine à exporter et synchroniser des données. Maintenant tout est connecté en temps réel. J'ai réduit le churn de 5% grâce aux alertes automatiques sur les utilisateurs inactifs.",
      details: [
        "Dashboard temps réel (Stripe + CRM + Analytics)",
        "Alertes automatiques sur churn risk",
        "Onboarding automatisé (emails + in-app)",
        "Export hebdomadaire des métriques vers Notion",
      ],
      rating: 5,
      videoPlaceholder: true,
    },
  ];

  const testimonials = [
    {
      name: "Thomas R.",
      role: "Fondateur SaaS",
      avatar: "👨‍💻",
      rating: 5,
      text: "Formation a transformé ma façon de travailler. Je ne retournerai jamais en arrière.",
    },
    {
      name: "Émilie B.",
      role: "E-commerce",
      avatar: "👩‍🦰",
      rating: 5,
      text: "Setup en 10 minutes, résultats dès le premier jour. Impressionnant.",
    },
    {
      name: "Pierre L.",
      role: "Consultant",
      avatar: "👨‍🏫",
      rating: 5,
      text: "Le support français est réactif. J'ai eu une réponse en 2h un dimanche.",
    },
    {
      name: "Camille D.",
      role: "Marketing",
      avatar: "👩‍🎨",
      rating: 5,
      text: "Les templates sont parfaits. J'ai lancé 3 workflows en une après-midi.",
    },
    {
      name: "Alexandre M.",
      role: "CEO",
      avatar: "👨‍💼",
      rating: 5,
      text: "ROI en 2 semaines. Meilleur investissement de l'année.",
    },
    {
      name: "Laura P.",
      role: "Product Manager",
      avatar: "👩‍💼",
      rating: 4,
      text: "Interface intuitive, documentation claire. Parfait pour les non-tech.",
    },
    {
      name: "David S.",
      role: "Operations",
      avatar: "👨‍🔧",
      rating: 5,
      text: "Stabilité au top. Aucun downtime en 6 mois d'utilisation.",
    },
    {
      name: "Sarah T.",
      role: "Growth Lead",
      avatar: "👩‍🚀",
      rating: 5,
      text: "Les AI agents sont un game-changer. Automatisation niveau 2.0.",
    },
    {
      name: "Antoine F.",
      role: "CTO",
      avatar: "👨‍🔬",
      rating: 5,
      text: "Architecture solide, intégrations fiables. Testé en prod sans souci.",
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
            Témoignages & Résultats
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Des centaines de fondateurs ont récupéré leur temps avec Formation
          </p>

          {/* Overall Rating */}
          <div className="inline-block bg-white rounded-xl shadow-lg px-8 py-6">
            <div className="flex items-center justify-center gap-2 text-yellow-500 text-3xl mb-2">
              <span>★★★★★</span>
            </div>
            <p className="text-gray-900 font-bold text-2xl mb-1">4.9/5</p>
            <p className="text-gray-600 text-sm">Basé sur 47 avis vérifiés</p>
          </div>
        </motion.div>
      </div>

      {/* Case Studies */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          📊 Études de cas détaillées
        </h2>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Left: Video Placeholder */}
                <div>
                  {study.videoPlaceholder && (
                    <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center border-2 border-gray-700">
                      <div className="text-center text-white">
                        <div className="text-6xl mb-3">▶️</div>
                        <p className="text-gray-400 text-sm">
                          Vidéo témoignage à venir
                          <br />
                          (Loom embed)
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Metrics */}
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-green-600 mb-1">
                        {study.metric}
                      </p>
                      <p className="text-xs text-gray-600">Gain de temps</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-blue-600 mb-1">
                        {study.revenue}
                      </p>
                      <p className="text-xs text-gray-600">Impact business</p>
                    </div>
                  </div>
                </div>

                {/* Right: Content */}
                <div>
                  {/* Profile */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-3xl">
                      {study.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">
                        {study.name}
                      </p>
                      <p className="text-sm text-gray-600">{study.role}</p>
                      <p className="text-xs text-gray-500">{study.company}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 text-yellow-500 mb-4">
                    {[...Array(study.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-700 italic mb-6 border-l-4 border-orange-500 pl-4">
                    "{study.quote}"
                  </blockquote>

                  {/* Details */}
                  <div>
                    <p className="font-semibold text-gray-900 mb-3">
                      Ce qui a été automatisé :
                    </p>
                    <ul className="space-y-2">
                      {study.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <span className="text-green-500 font-bold">✓</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          💬 Ce que disent nos utilisateurs
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition"
            >
              {/* Avatar & Name */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 text-yellow-500 mb-3 text-sm">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-gray-300">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-sm italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trust Signals */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Ils nous font confiance
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">1,247</p>
              <p className="text-gray-600">Utilisateurs actifs</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-600 mb-2">12,500+</p>
              <p className="text-gray-600">Heures économisées</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-600 mb-2">99.9%</p>
              <p className="text-gray-600">Uptime garantie</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-8 md:p-12 text-center shadow-2xl"
        >
          <h2 className="text-3xl font-bold mb-4">
            Prêt à rejoindre nos utilisateurs ?
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
