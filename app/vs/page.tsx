"use client";

import { motion } from 'framer-motion';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function ComparisonPage() {
  const comparison = [
    { feature: 'Pricing mensuel', formation: '€199', zapier: '€25-300', make: '€100+' },
    { feature: 'Couche apprentissage', formation: 'Très basse (15min)', zapier: 'Moyenne', make: 'Haute' },
    { feature: 'Support français', formation: '✅ 24h', zapier: '❌ English only', make: '❌ English only' },
    { feature: 'Frais cachés?', formation: '❌ Aucun', zapier: '✅ Oui (par task)', make: '✅ Complexe' },
    { feature: 'RGPD expliqué', formation: '✅ Simple', zapier: '❌ Complexe', make: '❌ Pas clair' },
    { feature: 'Idéal pour solopreneurs', formation: '✅ Excellente', zapier: '⚠️ Coûteux', make: '⚠️ Complexe' },
    { feature: 'Intégrations clés', formation: '30+', zapier: '6000+', make: '1000+' },
    { feature: 'Workflows complexes', formation: '✅ Possible', zapier: '✅ Excellent', make: '✅ Excellent' },
    { feature: 'Annulation facile', formation: '✅ 1-click', zapier: '✅ 1-click', make: '✅ 1-click' },
    { feature: 'Garantie 48h', formation: '✅ Oui', zapier: '❌ Non', make: '❌ Non' },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Formation vs Concurrence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Comparatif honnête. On est pas la meilleure pour tous. On est la meilleure pour les entrepreneurs français non-tech.
          </motion.p>
        </section>

        {/* Table */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 border-b-2 border-orange-500">
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-left font-bold text-orange-600">Formation AI</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-600">Zapier</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-600">Make</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-gray-700">{row.formation}</td>
                    <td className="px-6 py-4 text-gray-700">{row.zapier}</td>
                    <td className="px-6 py-4 text-gray-700">{row.make}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed Comparisons */}
        <section className="max-w-6xl mx-auto px-6 py-20 space-y-16">
          {/* Formation vs Zapier */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Formation vs Zapier</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg text-orange-600 mb-4">✅ Zapier est meilleur si:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Tu as besoin de 500+ intégrations</li>
                  <li>• Tu fais des workflows ultra-complexes (conditionnels imbriqués)</li>
                  <li>• T'es developer/tech-savvy</li>
                  <li>• Tu veux le "leader du marché"</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-4">✅ Formation est meilleure si:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Tu es entrepreneur français non-tech</li>
                  <li>• Tu veux un prix prévisible (€199 = tout inclus)</li>
                  <li>• Tu préfères la simplicité à la puissance brute</li>
                  <li>• Tu veux du support en français 24h</li>
                  <li>• Tu veux comprendre ce que tu pais</li>
                  <li>• Tu aimes les garanties (48h remboursement)</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white rounded border-l-4 border-orange-500">
              <p className="text-gray-700">
                <strong>Verdict:</strong> Zapier a 6000+ intégrations. Formation a 30. Mais pour 80% des entrepreneurs français, 30 suffisent. Et tu paies 2-3x moins cher.
              </p>
            </div>
          </div>

          {/* Formation vs Make */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Formation vs Make</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-4">✅ Make est meilleur si:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Tu aimes open-source / self-hosted</li>
                  <li>• Tu as une équipe tech pour support</li>
                  <li>• Tu veux la granularité maximale</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-4">✅ Formation est meilleure si:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Tu veux "plug and play" (pas de tech)</li>
                  <li>• Tu veux du support en français</li>
                  <li>• Tu veux prix transparent et simple</li>
                  <li>• T'as pas d'équipe pour configurer/maintenir</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white rounded border-l-4 border-orange-500">
              <p className="text-gray-700">
                <strong>Verdict:</strong> Make = puissant mais nécessite une personne tech. Formation = simple et autonome.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Le Bottom Line</h2>
            <p className="text-lg mb-6 text-orange-100">
              Si tu es entrepreneur français non-tech qui veut automatiser sans se prendre la tête:
              <br /> <strong>Formation est pour toi.</strong>
            </p>
            <a
              href="#signup"
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
            >
              Essai 48h Gratuit
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
