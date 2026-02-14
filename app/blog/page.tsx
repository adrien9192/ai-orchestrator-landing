"use client";

import { motion } from 'framer-motion';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function BlogPage() {
  const articles = [
    {
      title: "Pourquoi 8 heures disparaissent chaque semaine (et comment les récupérer)",
      excerpt: "La majorité des entrepreneurs français perdent 6-12h/semaine sur de la data entry, des relances manuelles, et de la synchronisation. Voilà pourquoi.",
      slug: "8-heures-disparaissent",
      date: "14 Fév 2026",
      readTime: "8 min",
    },
    {
      title: "Formation vs Zapier: comparatif honnête pour entrepreneurs français",
      excerpt: "Zapier a 6000+ intégrations. Formation en a 30. Mais pour 80% des entrepreneurs, 30 suffisent. Et tu paies 3x moins cher.",
      slug: "formation-vs-zapier",
      date: "14 Fév 2026",
      readTime: "6 min",
    },
    {
      title: "RGPD, sécurité, données: pourquoi tu peux nous faire confiance",
      excerpt: "Tes données sont sacrées. Voilà comment on les protège avec RGPD, encryption, et transparence 100%.",
      slug: "rgpd-securite",
      date: "14 Fév 2026",
      readTime: "7 min",
    },
  ];

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
            Articles & Ressources
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Comment automatiser ton business sans expertise tech.
          </motion.p>
        </section>

        {/* Articles Grid */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <div className="space-y-6">
            {articles.map((article) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-lg p-8 hover:border-orange-300 transition cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 max-w-2xl">{article.title}</h2>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>

                <div className="flex gap-4 text-sm text-gray-500 mb-4">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime} de lecture</span>
                </div>

                <button className="text-orange-600 font-semibold hover:text-orange-700">
                  Lire l'article →
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-orange-50 py-16 mt-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Prêt à commencer?</h2>
            <p className="text-gray-600 mb-6">
              Essai 48h gratuit. Zéro engagement. On répond à toutes tes questions.
            </p>
            <a
              href="#signup"
              className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
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
