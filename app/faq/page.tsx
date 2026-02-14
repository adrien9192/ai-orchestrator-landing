"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-b border-gray-200 py-6"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex justify-between items-start"
      >
        <h3 className="text-lg font-semibold text-gray-900 max-w-[90%]">{question}</h3>
        <span className={`text-orange-500 text-2xl transition ${open ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>

      {open && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0 }}
          className="text-gray-700 mt-4 leading-relaxed"
        >
          {answer}
        </motion.p>
      )}
    </motion.div>
  );
};

export default function FAQPage() {
  const faqs = [
    {
      category: 'Produit',
      items: [
        {
          q: "C'est quoi Formation AI exactement?",
          a: "Formation AI Orchestrator est une plateforme sans code qui te permet d'automatiser les tâches répétitives de ton business (data entry, synchronisation, emails, relances). Pas besoin de savoir coder.",
        },
        {
          q: 'Je dois coder ou utiliser du code?',
          a: 'Non, zéro ligne de code. Tout se fait en quelques clics. Si tu sais utiliser Zapier, tu sauras utiliser Formation.',
        },
        {
          q: 'Ça marche avec quels outils?',
          a: 'Shopify, Gmail, Slack, Stripe, Mailchimp, Airtable, Excel, API standards... On ajoute régulièrement des intégrations. Contacte-nous pour un outil spécifique.',
        },
        {
          q: 'C\'est un logiciel ou une formation?',
          a: 'C\'est un logiciel (plateforme SaaS). Pas de formation incluse, juste l\'outil pour automatiser.',
        },
        {
          q: 'Comment ça marche concrètement?',
          a: 'Tu définis un workflow: "Quand X se passe, faire Y". Par exemple: "Quand une commande arrive sur Shopify, sync l\'inventaire sur tes autres canaux et envoie un email client automatiquement". Pas de code, juste du visuel.',
        },
      ],
    },
    {
      category: 'Pour Moi?',
      items: [
        {
          q: 'Je suis freelance solo - ça marche pour moi?',
          a: 'Parfaitement. Les solo ont souvent le plus de tâches manuelles. 5h/semaine sur de l\'admin = 20h/mois que tu peux récupérer.',
        },
        {
          q: 'Je suis e-commerce - c\'est pour moi?',
          a: 'Oui. Sync d\'inventory multi-canal, automatisation de relances, import commandes dans ta compta... c\'est 80% de tes cas d\'usage.',
        },
        {
          q: 'Je suis prestataire de services - utile?',
          a: 'Très utile. Onboarding client, invoicing, relances paiement, gestion de calendrier... tout peut être automatisé.',
        },
        {
          q: 'Je suis SaaS - pertinent?',
          a: 'Oui. Customer health monitoring, automatic churn alerts, data sync entre outils, support automation.',
        },
        {
          q: 'C\'est adapté à ma taille d\'équipe?',
          a: 'Formation marche de 1 personne à 50+ dans l\'équipe. Aucun minimum.',
        },
      ],
    },
    {
      category: 'Coût & ROI',
      items: [
        {
          q: '€49 = combien de temps?',
          a: '€49 pour accès illimité pendant 1 mois (offre fondateur). Après, €199/mois.',
        },
        {
          q: 'Y a des frais cachés?',
          a: 'Zéro. €199/mois = tout inclus. Support aussi inclus. Pas de frais par automation ou par workflow.',
        },
        {
          q: 'Je paye pour le support?',
          a: 'Non, support inclus. Réponse en <24h à toute question.',
        },
        {
          q: 'J\'économise vraiment 8 heures?',
          a: 'Dépend de ton business, mais oui. Si tu perds 6-12h/semaine sur de la data entry, sync, ou relances manuelles → €199 de ROI positif dès le mois 1.',
        },
        {
          q: 'Si j\'aime pas après 48h?',
          a: 'Remboursement complet. Pas de questions. Annulation 1-click.',
        },
      ],
    },
    {
      category: 'Onboarding & Setup',
      items: [
        {
          q: '15 minutes pour mon premier workflow?',
          a: 'Oui. Vraiment. Ça dépend de la complexité, mais un workflow simple (sync data, envoyer email) = <15 min.',
        },
        {
          q: 'Je dois appeler quelqu\'un ou c\'est self-service?',
          a: 'Self-service. Mais tu peux nous contacter (contact@pillow.ai) si tu as besoin d\'aide, on fera un call.',
        },
        {
          q: 'Des tutos vidéo?',
          a: 'Oui, en français. Plus une doc écrite.',
        },
        {
          q: 'Support en direct?',
          a: 'Email et chat. Réponse garantie <24h.',
        },
      ],
    },
    {
      category: 'Trust & Sécurité',
      items: [
        {
          q: 'Mes données restent chez moi?',
          a: 'Oui. On ne stocke que les metadata (description du workflow). Tes données client/business restent dans TON compte Shopify/Gmail/etc.',
        },
        {
          q: 'Qui peut voir mes données?',
          a: 'Toi uniquement. On ne regarde jamais ton business data. RGPD-compliant.',
        },
        {
          q: 'Vous spammez mes clients?',
          a: 'Non. Tu contrôles chaque email/message. Si tu définis "envoyer X", on envoie X. Pas plus, pas moins.',
        },
        {
          q: 'Vous stockez mes passwords?',
          a: 'Non, on utilise OAuth standards (Shopify, Stripe, etc.). Pour certains outils, credentials sont chiffrés et jamais accessibles.',
        },
        {
          q: 'Qu\'est-ce si le service plante?',
          a: '99.9% uptime. Si un workflow échoue, tu reçois une alerte immédiate. Aucune donnée n\'est perdue.',
        },
        {
          q: 'Vous êtes où? EU? USA?',
          a: 'France (EU). RGPD full compliance. Données stockées en EU.',
        },
      ],
    },
    {
      category: 'Comparaison',
      items: [
        {
          q: 'Pourquoi pas Zapier?',
          a: 'Zapier est excellent mais: (1) cher (€25+/mois par automation), (2) UI complexe pour non-tech, (3) support moins réactif. Formation = plus simple + moins cher + français.',
        },
        {
          q: 'Formation vs Make?',
          a: 'Make est open-source, complexe pour solopreneurs. Formation = interface plus simple, pricing clair, support français 24h.',
        },
        {
          q: 'Vous êtes français?',
          a: 'Oui. Support et docs en français. C\'est notre priorité = entrepreneurs français.',
        },
      ],
    },
    {
      category: 'Engagement & Cancellation',
      items: [
        {
          q: 'Je dois signer un contrat?',
          a: 'Non. Juste acceptance des CGV. Pas d\'engagement long terme.',
        },
        {
          q: 'Je peux partir quand?',
          a: 'Quand tu veux. Fin du mois actuel, c\'est tout. Pas de pénalité.',
        },
        {
          q: 'Mes workflows après annulation?',
          a: 'Tu peux les exporter. Ou tu les importe chez Zapier/Make. Pas de lock-in.',
        },
      ],
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
            Questions Fréquentes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Toutes les réponses. Pas de bullshit.
          </motion.p>
        </section>

        {/* FAQs */}
        <section className="max-w-4xl mx-auto px-6 pb-20">
          {faqs.map((section) => (
            <div key={section.category} className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-orange-500">
                {section.category}
              </h2>
              {section.items.map((item, idx) => (
                <FAQItem key={idx} question={item.q} answer={item.a} />
              ))}
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="bg-orange-50 py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Encore des questions?</h2>
            <p className="text-gray-600 mb-6">
              On répond en <24h. Pas de délai.
            </p>
            <a
              href="/contact"
              className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Nous Contacter
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
