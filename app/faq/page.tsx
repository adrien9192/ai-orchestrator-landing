export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-4xl mx-auto py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Questions Fréquentes</h1>
        <p className="text-xl text-gray-600 mb-8">Toutes les réponses. Pas de bullshit.</p>

        <div className="space-y-6">
          <div className="border-b py-4">
            <h3 className="font-bold text-gray-900 mb-2">C'est quoi Formation AI exactement?</h3>
            <p className="text-gray-700">Une plateforme sans code pour automatiser les tâches répétitives de ton business.</p>
          </div>

          <div className="border-b py-4">
            <h3 className="font-bold text-gray-900 mb-2">Je dois coder?</h3>
            <p className="text-gray-700">Non. Zéro ligne de code. Tout se fait en clics.</p>
          </div>

          <div className="border-b py-4">
            <h3 className="font-bold text-gray-900 mb-2">€49 = combien de temps?</h3>
            <p className="text-gray-700">€49 pour 1 mois. Après €199/mois sans engagement.</p>
          </div>

          <div className="border-b py-4">
            <h3 className="font-bold text-gray-900 mb-2">Si j'aime pas après 48h?</h3>
            <p className="text-gray-700">Remboursement complet. 1 click. Zéro questions.</p>
          </div>

          <div className="border-b py-4">
            <h3 className="font-bold text-gray-900 mb-2">Mes données restent chez moi?</h3>
            <p className="text-gray-700">Oui. On stocke que la description du workflow. Tes données restent sur tes comptes.</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="/contact" className="text-orange-600 font-semibold hover:text-orange-700">
            Encore des questions? Contact-nous →
          </a>
        </div>
      </div>
    </div>
  );
}
