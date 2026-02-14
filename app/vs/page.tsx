import Link from 'next/link';

export default function VsPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm border-b">
        <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">Formation</Link>
          <div className="flex gap-6 items-center">
            <Link href="/about" className="text-gray-600 hover:text-blue-600 text-sm">À propos</Link>
            <Link href="/faq" className="text-gray-600 hover:text-blue-600 text-sm">FAQ</Link>
            <Link href="/vs" className="text-blue-600 font-bold text-sm">Comparaison</Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600 text-sm">Blog</Link>
            <Link href="/#signup" className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-700">Essai Gratuit</Link>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Formation vs Concurrence</h1>
        <p className="text-xl text-gray-600 mb-12">Comparatif honnête. On est la meilleure pour les entrepreneurs français non-tech.</p>

        <div className="overflow-x-auto mb-12 border rounded-lg">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left font-bold">Feature</th>
                <th className="border p-3 text-left font-bold text-blue-600">Formation</th>
                <th className="border p-3 text-left">Zapier</th>
                <th className="border p-3 text-left">Make</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-semibold">Prix/mois</td>
                <td className="border p-3 text-blue-600 font-bold">€199</td>
                <td className="border p-3">€25-300</td>
                <td className="border p-3">€100+</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3 font-semibold">Facilité d'utilisation</td>
                <td className="border p-3 text-blue-600 font-bold">Très facile (15min)</td>
                <td className="border p-3">Moyenne</td>
                <td className="border p-3">Complexe</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">Support français</td>
                <td className="border p-3 text-blue-600 font-bold">✅ 24h</td>
                <td className="border p-3">❌</td>
                <td className="border p-3">❌</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3 font-semibold">Frais cachés</td>
                <td className="border p-3 text-blue-600 font-bold">❌ Zéro</td>
                <td className="border p-3">✅ Oui</td>
                <td className="border p-3">✅ Oui</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Formation vs Zapier</h2>
            <p className="text-gray-700"><strong>Zapier meilleur si:</strong> Tu as besoin de 500+ intégrations ou tu es developer.</p>
            <p className="text-gray-700 mt-2"><strong>Formation meilleure si:</strong> Tu es entrepreneur français non-tech qui veut simplicité + prix transparent + support français.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Formation vs Make</h2>
            <p className="text-gray-700"><strong>Make meilleur si:</strong> Tu aimes l'open-source et tu as une équipe tech.</p>
            <p className="text-gray-700 mt-2"><strong>Formation meilleure si:</strong> Tu veux du plug-and-play sans tech et du support français 24h.</p>
          </section>
        </div>

        <div className="mt-16 bg-blue-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Bottom Line</h2>
          <p className="text-gray-700 mb-6">Si tu es entrepreneur français non-tech: Formation est pour toi.</p>
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
