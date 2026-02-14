import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm border-b">
        <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">Formation</Link>
          <div className="flex gap-6 items-center">
            <Link href="/about" className="text-blue-600 font-bold text-sm">À propos</Link>
            <Link href="/faq" className="text-gray-600 hover:text-blue-600 text-sm">FAQ</Link>
            <Link href="/vs" className="text-gray-600 hover:text-blue-600 text-sm">Comparaison</Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600 text-sm">Blog</Link>
            <Link href="/#signup" className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-700">Essai Gratuit</Link>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Qui Sommes-Nous</h1>
        <p className="text-xl text-gray-600 mb-12">Formation AI est née d'une frustration: les entrepreneurs perdent trop de temps sur des tâches qui n'ajoutent pas de valeur.</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">La Genèse</h2>
            <p className="text-gray-700 leading-relaxed">En 2024, j'ai observé un pattern universel chez les entrepreneurs français:</p>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>🔴 Sophie (e-commerce) passait 10h/semaine à syncer ses stocks manuellement</li>
              <li>🔴 Marc (freelance) perdait 5h/semaine sur de la facturation et des relances</li>
              <li>🔴 Julie (SaaS) était étouffée par le "glue work" entre ses outils</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">Chacun disait: "Je sais que je devrais automatiser, mais c'est trop compliqué ou trop cher."</p>
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
            <p className="text-lg text-gray-700 border-l-4 border-blue-600 pl-4">Redonner 8+ heures/semaine à chaque entrepreneur pour qu'il fasse ce qu'il aime: créer, vendre, grandir.</p>
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

        <div className="mt-16 bg-blue-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Prêt à commencer?</h2>
          <Link href="/#signup" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700">
            Essai 48h Gratuit
          </Link>
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-300 mt-20 py-12">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm">
          <p>© 2026 Formation AI. Tous droits réservés.</p>
          <div className="flex gap-6 justify-center mt-4 text-xs">
            <Link href="/cgv" className="hover:text-white">CGV</Link>
            <Link href="/mentions-legales" className="hover:text-white">Mentions légales</Link>
            <Link href="/politique-privacy" className="hover:text-white">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
