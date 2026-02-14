export default function ComparisonPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-4xl mx-auto py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Formation vs Concurrence</h1>
        <p className="text-xl text-gray-600 mb-12">Comparatif honnête. On est pas la meilleure pour tous. On est la meilleure pour les entrepreneurs français non-tech.</p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">Feature</th>
                <th className="border p-3 text-left text-orange-600 font-bold">Formation</th>
                <th className="border p-3 text-left">Zapier</th>
                <th className="border p-3 text-left">Make</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">Prix/mois</td>
                <td className="border p-3 font-semibold">€199</td>
                <td className="border p-3">€25-300</td>
                <td className="border p-3">€100+</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3">Facilité d'utilisation</td>
                <td className="border p-3 font-semibold">Très facile (15min)</td>
                <td className="border p-3">Moyenne</td>
                <td className="border p-3">Complexe</td>
              </tr>
              <tr>
                <td className="border p-3">Support français</td>
                <td className="border p-3 font-semibold">✅ 24h</td>
                <td className="border p-3">❌ English only</td>
                <td className="border p-3">❌ English only</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3">Frais cachés</td>
                <td className="border p-3 font-semibold">❌ Zéro</td>
                <td className="border p-3">✅ Oui (par task)</td>
                <td className="border p-3">✅ Complexe</td>
              </tr>
              <tr>
                <td className="border p-3">RGPD expliqué</td>
                <td className="border p-3 font-semibold">✅ Clair</td>
                <td className="border p-3">⚠️ Pas clair</td>
                <td className="border p-3">⚠️ Pas clair</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Formation vs Zapier</h2>
            <p className="text-gray-700 mb-3">
              <strong>Zapier est meilleur si:</strong> Tu besoin de 500+ intégrations ou tu es developer.
            </p>
            <p className="text-gray-700">
              <strong>Formation est meilleure si:</strong> Tu es entrepreneur français, tu veux un prix clair, et du support en français 24h.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Formation vs Make</h2>
            <p className="text-gray-700 mb-3">
              <strong>Make est meilleur si:</strong> Tu aimes l'open-source et tu as une équipe tech.
            </p>
            <p className="text-gray-700">
              <strong>Formation est meilleure si:</strong> Tu veux du plug-and-play sans tech et du support français.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center bg-orange-50 p-6 rounded">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Le Bottom Line</h2>
          <p className="text-gray-700 mb-6">Si tu es entrepreneur français non-tech: Formation est pour toi.</p>
          <a href="#signup" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600">
            Essai 48h Gratuit
          </a>
        </div>
      </div>
    </div>
  );
}
