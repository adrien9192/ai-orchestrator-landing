export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-4xl mx-auto py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Qui Sommes-Nous</h1>
        <p className="text-xl text-gray-600 mb-12">Formation AI est née d'une frustration: les entrepreneurs perdent trop de temps sur des tâches qui n'ajoutent pas de valeur.</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">La Genèse</h2>
            <p className="text-gray-700 leading-relaxed">En 2024, j'ai observé un pattern universel: les entrepreneurs français passaient 6-12h/semaine sur de la data entry, facturation, et synchronisation manuelles.</p>
            <p className="text-gray-700 leading-relaxed mt-3">Chacun disait: "Je sais que je devrais automatiser, mais c'est trop compliqué ou trop cher."</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi Formation AI</h2>
            <div className="space-y-3 text-gray-700">
              <p>✅ <strong>Simple:</strong> Sans code. Pas de courbe d'apprentissage.</p>
              <p>✅ <strong>Transparent:</strong> Un prix. Zéro frais cachés.</p>
              <p>✅ <strong>Français:</strong> Support 24h en français.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre Mission</h2>
            <p className="text-lg text-gray-700 border-l-4 border-orange-500 pl-4">Redonner 8+ heures/semaine à chaque entrepreneur pour qu'il fasse ce qu'il aime: créer, vendre, grandir.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi Nous</h2>
            <div className="space-y-2 text-gray-700">
              <p>✅ Créé par des entrepreneurs pour des entrepreneurs</p>
              <p>✅ 100% transparent (pas de BS)</p>
              <p>✅ RGPD & Security First</p>
              <p>✅ Support français 24h</p>
              <p>✅ Garantie 48h remboursement</p>
            </div>
          </section>
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
