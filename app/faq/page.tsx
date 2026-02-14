"use client";

import Link from "next/link";

export default function FAQPage() {
  const faqs = [
    {
      q: "Comment ça marche ?",
      a: "Formation se connecte à vos outils (Shopify, Gmail, Stripe…) et automatise les tâches répétitives.",
    },
    {
      q: "Combien ça coûte ?",
      a: "À partir de €49/mois pour les fondateurs. Consultez notre page tarifs pour plus de détails.",
    },
    {
      q: "Y a-t-il une garantie ?",
      a: "Oui, 48 heures satisfait ou remboursé. Aucun risque.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Questions Fréquentes
        </h1>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-6 shadow-md border border-gray-200"
            >
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                {faq.q}
              </h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
