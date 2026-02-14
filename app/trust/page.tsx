"use client";

import { motion } from 'framer-motion';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function TrustPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-6 py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Sécurité & Confiance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Tes données sont sacrées. Voilà comment on les protège.
          </motion.p>
        </section>

        {/* Trust Sections */}
        <section className="max-w-4xl mx-auto px-6 py-16 space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🔒 Tes données restent tiennes</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              On ne stocke que la <strong>description de tes workflows</strong> (par ex: "sync Shopify vers Excel").
            </p>
            <p className="text-gray-700 leading-relaxed">
              Tes données <strong>réelles</strong> (clients, commandes, revenue) restent sur <strong>tes comptes</strong> (Shopify, Gmail, etc.).
              On ne les voit jamais, jamais.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🔐 Sécurité & Chiffrement</h2>
            <ul className="space-y-3 text-gray-700">
              <li>✅ <strong>HTTPS + SSL</strong> sur tout le site</li>
              <li>✅ <strong>OAuth 2.0</strong> pour toutes intégrations (Shopify, Stripe, etc.)</li>
              <li>✅ <strong>Passwords chiffrés</strong> avec AES-256 si stockés</li>
              <li>✅ <strong>Backups quotidiens</strong> et redundancy en EU</li>
              <li>✅ <strong>Audit logs</strong> de chaque action</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">📋 RGPD Compliance</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              On respecte <strong>100% le RGPD</strong>. C'est pas optionnel, c'est obligatoire. Voilà ce qu'on fait:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>✅ <strong>Données en EU</strong> (France, pas USA)</li>
              <li>✅ <strong>Droit à l'oubli</strong>: supprime tout quand tu demandes</li>
              <li>✅ <strong>Portabilité des données</strong>: tu peux exporter tout quand</li>
              <li>✅ <strong>Privacy Policy</strong> écrite clairement (pas du jargon legales)</li>
              <li>✅ <strong>Data Processing Agreement</strong> disponible sur demande</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🔔 Transparence</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Notre pricing est simple. Pas de frais cachés. Pas de "surprise!" en fin de mois.
            </p>
            <div className="bg-orange-50 p-6 rounded-lg">
              <p className="text-gray-900 font-semibold mb-3">€199/mois = Everything Included</p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✅ Workflows illimités</li>
                <li>✅ Support 24h en français</li>
                <li>✅ Mises à jour gratuites</li>
                <li>✅ Zéro frais par automation</li>
                <li>✅ Annulation 1-click</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🤝 Support & Engagement</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ton succès = notre succès. On s'engage à:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>✅ <strong>Répondre à chaque message</strong> en <24h (garanti)</li>
              <li>✅ <strong>Pas de bot</strong>. Tu parles avec une vraie personne</li>
              <li>✅ <strong>Pas d'upsell caché</strong> pendant le support</li>
              <li>✅ <strong>Transparence roadmap</strong>: tu sais ce qu'on build</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">✋ Garantie 48h</h2>
            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
              <p className="text-gray-900 font-semibold mb-3">Si tu es pas heureux après 48h:</p>
              <p className="text-gray-700 mb-3">
                Remboursement complet. Zéro questions. Un click et c'est fini.
              </p>
              <p className="text-gray-600 text-sm">
                Pourquoi 48h? Assez long pour tester vraiment. Assez court pour pas te sentir piégé.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">📞 Des Questions sur la Sécurité?</h2>
            <p className="text-gray-700 leading-relaxed">
              On est ouvert à toutes les questions. Security audit? Check. DPA? Check. Custom compliance? On discute.
            </p>
            <a
              href="/contact"
              className="inline-block mt-4 text-orange-600 font-semibold hover:text-orange-700"
            >
              → Contacte-nous
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16 mt-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Essaie avec confiance</h2>
            <p className="mb-6 text-orange-100">Garantie 48h. Pas de carte de crédit. Tes données restent tiennes.</p>
            <a
              href="#signup"
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
            >
              Commencer
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
