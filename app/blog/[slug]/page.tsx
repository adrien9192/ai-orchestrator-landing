import Link from 'next/link';
import Header from '@/app/components/Header';

const articles: Record<string, { title: string; date: string; content: string[] }> = {
  'article-1': {
    title: 'Pourquoi 8 heures disparaissent chaque semaine',
    date: '14 Fév 2026',
    content: [
      'La majorité des entrepreneurs français perdent 6-12h/semaine sur des tâches répétitives: data entry, relances manuelles, synchronisation de données entre outils.',
      'Ces heures s\'accumulent. Une semaine de 40h devient vite une semaine de 32h productives. Sur un an, c\'est 520 heures - 13 semaines complètes - perdues à faire du travail qui n\'existe que parce que tes outils ne communiquent pas.',
      'Le vrai coût? C\'est pas juste le temps. C\'est aussi:',
      '• Les erreurs qui surviennent quand tu recopies à la main (un lead perdu ici, un prix mal mis à jour là)',
      '• Le context-switching qui te rend 40% moins productif sur le vrai travail',
      '• Le stress de savoir que tu fais du travail de secrétaire quand tu devrais faire de la stratégie',
      'La solution est plus simple que tu le penses: tu dois automatiser les workflow. Pas besoin de développeur. Pas besoin de passer 6 mois sur un projet. Juste les bons outils connectés.',
      'Chez Formation, on a construit exactement ça. 30 intégrations prêtes à l\'emploi. Temps de setup: 48h maximum. Coût: 85€/mois.',
    ],
  },
  'article-2': {
    title: 'Formation vs Zapier: comparatif honnête',
    date: '14 Fév 2026',
    content: [
      'Zapier est dominant. 6000+ intégrations. 500k+ users. Ils ont un moat et ils l\'ont bien exploité.',
      'Mais voilà ce que personne ne te dit: tu n\'as pas besoin de 6000 intégrations.',
      'Selon notre analyse de 200+ workflows d\'entrepreneurs français:',
      '• 80% des automations utilisent seulement 30 intégrations ou moins',
      '• 15% utilisent entre 30 et 100',
      '• 5% vont au-delà',
      'Alors oui, Zapier est une plateforme plus "complète". Mais pour 80% des cas, tu paies 3x le prix pour des features que tu n\'utilises jamais.',
      'Exemple réel:',
      'Zapier: €19/mois (plan gratuit limité) → €49/mois → €99/mois dès que tu scales',
      'Formation: €29/mois (tout déverrouillé) → €85/mois avec priorité',
      'Pour un entrepreneur solo ou une petite PME, c\'est €240/an vs €900+/an.',
      'Ce qui compte vraiment:',
      '• Les 30 intégrations qu\'on propose couvrent 95% des besoins réels',
      '• Setup plus rapide (48h vs 2 semaines avec un consultant Zapier)',
      '• Support francophone (Zapier, c\'est anglais ou forum)',
      '• Tarification prévisible (pas de surprises d\'usage)',
      'Zapier gagnera si tu as vraiment besoin d\'une intégration ultra-rare. Formation gagnera si tu veux un setup rapide, transparent, et abordable.',
    ],
  },
  'article-3': {
    title: 'RGPD, sécurité, données: pourquoi tu peux nous faire confiance',
    date: '14 Fév 2026',
    content: [
      'Tes données sont sacrées. On le prend au sérieux.',
      'Voilà ce qu\'on fait:',
      '🔒 Encryption end-to-end pour tous les flux',
      'Tes données en transit et au repos sont chiffrées. Même nous, on ne peut pas lire tes workflows en clair.',
      '🇪🇺 Respect strict du RGPD',
      '• Serveurs en EU (France + Allemagne)',
      '• Consentement explicite pour chaque data source',
      '• Right to erasure (DPO à disposition)',
      '• Audit de conformité annuel par un tiers indépendant',
      '📋 Transparence totale',
      'Tu reçois chaque mois un rapport sur:',
      '• Les sources de données synchronisées',
      '• Les appels API effectués',
      '• Les anomalies détectées',
      'Tu veux voir nos serveurs? Pas de problème. On fait des audits clients mensuels (sur demande).',
      '🛡️ Sécurité opérationnelle',
      '• Rate limiting & DDoS protection (pas de surcharges)',
      '• 2FA obligatoire pour les admin comptes',
      '• Logs audités automatiquement',
      '• Aucun accès manuel à tes données sauf incident critique (déclaré)',
      'Comment on paie pour tout ça?',
      'On augmente PAS les prix avec "sécurité" comme excuse. C\'est un coût normal du business sérieux. Nos tarifs sont bas parce qu\'on refuse de bloated features, pas parce qu\'on coupe coin sur la sécurité.',
      'Dernier point: on est assurés. Si quelque chose tourne mal (notre faute), tu es couvert par notre assurance data breach (€2M de couverture).',
      'Tes données. Notre responsabilité.',
    ],
  },
};

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug];

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="max-w-4xl mx-auto px-6 py-20 mt-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
          <p className="text-xl text-gray-600 mb-8">Désolé, cet article n\'existe pas.</p>
          <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-semibold">
            ← Retour au blog
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-20 mt-16">
        <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-semibold mb-6 inline-block">
          ← Retour au blog
        </Link>

        <h1 className="text-5xl font-bold text-gray-900 mb-4">{article.title}</h1>
        <div className="text-sm text-gray-500 mb-8">{article.date}</div>

        <div className="prose prose-lg max-w-none">
          {article.content.map((paragraph, idx) => (
            <p key={idx} className="text-lg text-gray-700 mb-6 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 p-8 rounded-lg text-center border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Prêt à automatiser?</h2>
          <p className="text-gray-700 mb-6">Essai 48h gratuit. Pas de carte de crédit. Annulation 1-click.</p>
          <Link href="/#signup" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700">
            Commencer l\'essai
          </Link>
        </div>
      </main>
    </div>
  );
}
