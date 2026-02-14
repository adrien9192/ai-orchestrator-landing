export default function TrustPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-4xl mx-auto py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Sécurité & Confiance</h1>
        <p className="text-xl text-gray-600 mb-8">Tes données sont sacrées.</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tes données restent tiennes</h2>
            <p className="text-gray-700">On ne stocke que la description de tes workflows. Tes données réelles restent sur tes comptes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">RGPD Compliance</h2>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Données en EU (France)</li>
              <li>✅ Droit à l'oubli</li>
              <li>✅ Portabilité des données</li>
              <li>✅ HTTPS + OAuth 2.0</li>
              <li>✅ Chiffrement AES-256</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Garantie 48h</h2>
            <p className="text-gray-700">Pas happy? Remboursement complet. 1 click. Zéro questions.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
