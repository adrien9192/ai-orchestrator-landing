import Link from 'next/link';

export default function TrustPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm border-b">
        <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">Formation</Link>
          <div className="flex gap-6 items-center">
            <Link href="/about" className="text-gray-600 hover:text-blue-600 text-sm">À propos</Link>
            <Link href="/faq" className="text-gray-600 hover:text-blue-600 text-sm">FAQ</Link>
            <Link href="/vs" className="text-gray-600 hover:text-blue-600 text-sm">Comparaison</Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600 text-sm">Blog</Link>
            <Link href="/#signup" className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-700">Essai Gratuit</Link>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Sécurité & Confiance</h1>
        <p className="text-xl text-gray-600 mb-12">Tes données sont sacrées. Voilà comment on les protège.</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🔒 Tes données restent tiennes</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              On ne stocke que la <strong>description de tes workflows</strong> (par ex: "sync Shopify vers Excel").
            </p>
            <p className="text-gray-700 leading-relaxed">
              Tes données <strong>réelles</strong> (clients, commandes, revenue) restent sur <strong>tes comptes</strong> (Shopify, Gmail, etc.).
              On ne les voit jamais, jamais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🔐 Sécurité & Chiffrement</h2>
            <ul className="space-y-3 text-gray-700">
              <li>✅ <strong>HTTPS + SSL</strong> sur tout le site</li>
              <li>✅ <strong>OAuth 2.0</strong> pour toutes intégrations</li>
              <li>✅ <strong>Passwords chiffrés</strong> avec AES-256 si stockés</li>
              <li>✅ <strong>Backups quotidiens</strong> et redundancy en EU</li>
              <li>✅ <strong>Audit logs</strong> de chaque action</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">📋 RGPD Compliance</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              On respecte <strong>100% le RGPD</strong>. Voilà ce qu'on fait:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>✅ <strong>Données en EU</strong> (France, pas USA)</li>
              <li>✅ <strong>Droit à l'oubli</strong>: supprime tout quand tu demandes</li>
              <li>✅ <strong>Portabilité des données</strong>: tu peux exporter tout quand</li>
              <li>✅ <strong>Privacy Policy</strong> écrite clairement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">✋ Garantie 48h</h2>
            <div className="bg-green-50 p-6 rounded border-2 border-green-200">
              <p className="text-gray-900 font-semibold mb-3">Si tu es pas heureux après 48h:</p>
              <p className="text-gray-700 mb-3">
                Remboursement complet. Zéro questions. Un click et c'est fini.
              </p>
              <p className="text-gray-600 text-sm">
                Pourquoi 48h? Assez long pour tester vraiment. Assez court pour pas te sentir piégé.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">📞 Des Questions?</h2>
            <p className="text-gray-700 leading-relaxed">
              On est ouvert à toutes les questions. <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold">Contacte-nous</Link> — on répond en <24h.
            </p>
          </section>
        </div>

        <div className="mt-16 bg-blue-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Essaie avec confiance</h2>
          <p className="text-gray-700 mb-6">Garantie 48h. Pas de carte de crédit. Tes données restent tiennes.</p>
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
