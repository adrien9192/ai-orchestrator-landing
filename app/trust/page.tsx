"use client";

import Link from "next/link";

export default function TrustPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Sécurité & Conformité
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Votre sécurité et vos données sont notre priorité absolue
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg p-8 shadow-md border border-gray-200">
            <h3 className="font-bold text-2xl text-gray-900 mb-4">✅ RGPD Compliant</h3>
            <p className="text-gray-600">
              Formation est 100% conforme au Règlement Général sur la Protection des Données (RGPD).
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md border border-gray-200">
            <h3 className="font-bold text-2xl text-gray-900 mb-4">🔒 Chiffrement SSL</h3>
            <p className="text-gray-600">
              Toutes les données en transit sont chiffrées avec SSL/TLS 256-bit.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md border border-gray-200">
            <h3 className="font-bold text-2xl text-gray-900 mb-4">🇪🇺 Stockage UE</h3>
            <p className="text-gray-600">
              Les données sont hébergées en Europe pour respecter les normes locales.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md border border-gray-200">
            <h3 className="font-bold text-2xl text-gray-900 mb-4">📊 99.9% Uptime</h3>
            <p className="text-gray-600">
              Infrastructure résiliente avec monitoring 24/7 et SLA garanti.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white px-4 py-2 rounded-lg text-sm font-semibold text-gray-700">
              ✓ RGPD
            </span>
            <span className="bg-white px-4 py-2 rounded-lg text-sm font-semibold text-gray-700">
              ✓ ISO 27001
            </span>
            <span className="bg-white px-4 py-2 rounded-lg text-sm font-semibold text-gray-700">
              ✓ SOC 2
            </span>
          </div>
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
