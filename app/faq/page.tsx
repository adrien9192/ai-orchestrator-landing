import Link from 'next/link';

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">Formation</Link>
          <div className="flex gap-6 items-center">
            <Link href="/about" className="text-gray-600 hover:text-blue-600 text-sm">À propos</Link>
            <Link href="/faq" className="text-blue-600 font-bold text-sm">FAQ</Link>
            <Link href="/vs" className="text-gray-600 hover:text-blue-600 text-sm">Comparaison</Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600 text-sm">Blog</Link>
            <Link href="/#signup" className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-700">Essai Gratuit</Link>
          </div>
        </nav>
      </header>

      {/* Main */}
      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Questions Fréquentes</h1>
        <p className="text-xl text-gray-600 mb-12">Toutes les réponses. Pas de bullshit.</p>

        <div className="space-y-6">
          <div className="border-b pb-4">
            <h3 className="text-lg font-bold text-gray-900 mb-2 cursor-pointer hover:text-blue-600">C'est quoi Formation AI exactement?</h3>
            <p className="text-gray-700">Une plateforme sans code pour automatiser les tâches répétitives de ton business en quelques clics.</p>
          </div>

          <div className="border-b pb-4">
            <h3 className="text-lg font-bold text-gray-900 mb-2 cursor-pointer hover:text-blue-600">Je dois coder?</h3>
            <p className="text-gray-700">Non. Zéro ligne de code. Tout se fait en clics. Si tu peux utiliser Zapier, tu peux utiliser Formation.</p>
          </div>

          <div className="border-b pb-4">
            <h3 className="text-lg font-bold text-gray-900 mb-2 cursor-pointer hover:text-blue-600">€49 = combien de temps d'accès?</h3>
            <p className="text-gray-700">€49 pour 1 mois d'accès complet. Après: €199/mois. Zéro engagement, annule quand tu veux.</p>
          </div>

          <div className="border-b pb-4">
            <h3 className="text-lg font-bold text-gray-900 mb-2 cursor-pointer hover:text-blue-600">Si j'aime pas après 48h?</h3>
            <p className="text-gray-700">Remboursement complet. Un click. Zéro questions. On le fait en <24h.</p>
          </div>

          <div className="border-b pb-4">
            <h3 className="text-lg font-bold text-gray-900 mb-2 cursor-pointer hover:text-blue-600">Mes données restent chez moi?</h3>
            <p className="text-gray-700">Oui. On stocke juste la description du workflow. Tes données réelles restent sur tes comptes Shopify/Gmail/etc.</p>
          </div>

          <div className="border-b pb-4">
            <h3 className="text-lg font-bold text-gray-900 mb-2 cursor-pointer hover:text-blue-600">Support en français?</h3>
            <p className="text-gray-700">Oui. Réponse en <24h. Support email ou direct. Pas de bot.</p>
          </div>

          <div className="pb-4">
            <h3 className="text-lg font-bold text-gray-900 mb-2 cursor-pointer hover:text-blue-600">Questions autres?</h3>
            <p className="text-gray-700">
              <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold">Contacte-nous</Link> — on répond en <24h.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-blue-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Prêt?</h2>
          <p className="text-gray-700 mb-6">Essai 48h gratuit. Pas de carte de crédit. Annulation 1-click.</p>
          <Link href="/#signup" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700">
            Commencer l'Essai
          </Link>
        </div>
      </main>

      {/* Footer */}
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
