import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm border-b">
        <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">Formation</Link>
          <div className="flex gap-6 items-center">
            <Link href="/about" className="text-gray-600 hover:text-blue-600 text-sm">À propos</Link>
            <Link href="/faq" className="text-gray-600 hover:text-blue-600 text-sm">FAQ</Link>
            <Link href="/vs" className="text-gray-600 hover:text-blue-600 text-sm">Comparaison</Link>
            <Link href="/blog" className="text-blue-600 font-bold text-sm">Blog</Link>
            <Link href="/#signup" className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-700">Essai Gratuit</Link>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Articles & Ressources</h1>
        <p className="text-xl text-gray-600 mb-12">Comment automatiser ton business sans expertise tech.</p>

        <div className="space-y-6">
          <Link href="/blog/article-1">
            <article className="border border-gray-200 p-6 rounded hover:border-blue-300 hover:shadow-md cursor-pointer transition">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Pourquoi 8 heures disparaissent chaque semaine</h2>
              <p className="text-gray-600 mb-4">La majorité des entrepreneurs français perdent 6-12h/semaine sur de la data entry, des relances manuelles, et de la synchronisation.</p>
              <div className="text-sm text-gray-500">14 Fév 2026 • 8 min de lecture</div>
              <div className="text-blue-600 font-semibold mt-3">Lire l'article →</div>
            </article>
          </Link>

          <Link href="/blog/article-2">
            <article className="border border-gray-200 p-6 rounded hover:border-blue-300 hover:shadow-md cursor-pointer transition">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Formation vs Zapier: comparatif honnête</h2>
              <p className="text-gray-600 mb-4">Zapier a 6000+ intégrations. Formation en a 30. Mais pour 80% des entrepreneurs, 30 suffisent. Et tu paies 3x moins cher.</p>
              <div className="text-sm text-gray-500">14 Fév 2026 • 6 min de lecture</div>
              <div className="text-blue-600 font-semibold mt-3">Lire l'article →</div>
            </article>
          </Link>

          <Link href="/blog/article-3">
            <article className="border border-gray-200 p-6 rounded hover:border-blue-300 hover:shadow-md cursor-pointer transition">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">RGPD, sécurité, données: pourquoi tu peux nous faire confiance</h2>
              <p className="text-gray-600 mb-4">Tes données sont sacrées. Voilà comment on les protège avec RGPD, encryption, et transparence 100%.</p>
              <div className="text-sm text-gray-500">14 Fév 2026 • 7 min de lecture</div>
              <div className="text-blue-600 font-semibold mt-3">Lire l'article →</div>
            </article>
          </Link>
        </div>

        <div className="mt-16 bg-blue-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Prêt à commencer?</h2>
          <p className="text-gray-700 mb-6">Essai 48h gratuit. Pas de carte de crédit. Annulation 1-click.</p>
          <Link href="/#signup" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700">
            Commencer
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
