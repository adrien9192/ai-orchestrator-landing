export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-4xl mx-auto py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Articles & Ressources</h1>
        <p className="text-xl text-gray-600 mb-12">Comment automatiser ton business sans expertise tech.</p>

        <div className="space-y-6">
          <div className="border border-gray-200 p-6 rounded hover:border-orange-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Pourquoi 8 heures disparaissent chaque semaine</h2>
            <p className="text-gray-600 mb-4">La majorité des entrepreneurs français perdent 6-12h/semaine sur de la data entry, des relances manuelles, et de la synchronisation.</p>
            <div className="text-sm text-gray-500">14 Fév 2026 • 8 min de lecture</div>
          </div>

          <div className="border border-gray-200 p-6 rounded hover:border-orange-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Formation vs Zapier: comparatif honnête</h2>
            <p className="text-gray-600 mb-4">Zapier a 6000+ intégrations. Formation en a 30. Mais pour 80% des entrepreneurs, 30 suffisent. Et tu paies 3x moins cher.</p>
            <div className="text-sm text-gray-500">14 Fév 2026 • 6 min de lecture</div>
          </div>

          <div className="border border-gray-200 p-6 rounded hover:border-orange-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">RGPD, sécurité, données: pourquoi tu peux nous faire confiance</h2>
            <p className="text-gray-600 mb-4">Tes données sont sacrées. Voilà comment on les protège avec RGPD, encryption, et transparence 100%.</p>
            <div className="text-sm text-gray-500">14 Fév 2026 • 7 min de lecture</div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="#signup" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600">
            Commencer
          </a>
        </div>
      </div>
    </div>
  );
}
