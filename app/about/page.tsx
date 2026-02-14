"use client";

import { motion } from 'framer-motion';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-6 py-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Qui Sommes-Nous
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl"
          >
            Formation AI est née d'une frustration simple: les entrepreneurs perdent trop de temps sur des tâches qui n'ajoutent pas de valeur.
          </motion.p>
        </section>

        {/* Story */}
        <section className="max-w-4xl mx-auto px-6 py-16 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">La Genèse</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              En 2024, j'ai observé un pattern universel chez les entrepreneurs français que je côtoyais:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>🔴 Sophie (e-commerce) passait 10h/semaine à syncer ses stocks manuellement</li>
              <li>🔴 Marc (freelance) perdait 5h/semaine sur de la facturation et des relances</li>
              <li>🔴 Julie (SaaS) était étouffée par le "glue work" entre ses outils</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Chacun disait la même chose: "Je sais que je devrais automatiser, mais c'est trop compliqué ou trop cher."
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi Formation AI</h2>
            <p className="text-gray-700 leading-relaxed">
              Les solutions existantes (Zapier, Make) sont trop chères, trop complexes, ou mal adaptées aux entrepreneurs français. 
              J'ai construit Formation AI pour résoudre ce problème avec 3 principes simples:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Simple</h3>
                <p className="text-gray-700 text-sm">
                  Sans code. Pas de courbe d'apprentissage. Tu l'utilises le jour 1.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Transparent</h3>
                <p className="text-gray-700 text-sm">
                  Un prix. Zéro frais cachés. Tes données restent tiennes.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Français</h3>
                <p className="text-gray-700 text-sm">
                  Made by entrepreneurs for entrepreneurs. Support 24h en français.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre Mission</h2>
            <p className="text-gray-700 leading-relaxed text-lg border-l-4 border-orange-500 pl-4">
              "Redonner 8+ heures/semaine à chaque entrepreneur pour qu'il fasse ce qu'il aime: créer, vendre, grandir."
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi Nous</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                ✅ <strong>Créé par des entrepreneurs pour des entrepreneurs</strong> — Je comprends tes frustrations parce que je les ai vécues.
              </p>
              <p>
                ✅ <strong>100% transparent</strong> — Pas de pricing caché, pas d'AI hype, pas de BS. Juste un outil qui marche.
              </p>
              <p>
                ✅ <strong>RGPD & Security First</strong> — Tes données ne nous intéressent pas. On les protège.
              </p>
              <p>
                ✅ <strong>Support français 24h</strong> — T'as une question à 21h? On répond avant demain midi.
              </p>
              <p>
                ✅ <strong>Garantie 48h</strong> — Pas happy? Remboursement full. Pas de contrat piégeux.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Timeline</h2>
            <div className="space-y-6">
              {[
                { year: '2024', event: 'Formation AI créée pour résoudre mon problème personnel' },
                { year: '2025 Q1', event: 'Beta test avec 50 entrepreneurs français' },
                { year: '2025 Q2', event: 'Lancement officiel + fondateurs' },
                { year: '2026', event: 'Croissance organique via word-of-mouth' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="text-orange-500 font-bold min-w-24">{item.year}</div>
                  <p className="text-gray-700">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16 mt-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Prêt à récupérer ton temps?</h2>
            <p className="mb-6 text-orange-100">Essai 48h gratuit. Zéro engagement. Annulation 1-click.</p>
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
