export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Politique de Confidentialité
        </h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Dernière mise à jour : {new Date().getFullYear()}</p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            1. Responsable du Traitement
          </h2>
          <p>
            Formation AI est responsable du traitement des données personnelles
            collectées via ce site. Pour toute question, contactez-nous à:
            <br />
            Email: contact@formation.ai
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            2. Données Collectées
          </h2>
          <p>
            Nous collectons les données suivantes lorsque vous utilisez notre site:
          </p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Informations d'identification (nom, prénom, email)</li>
            <li>Données de contact (adresse, numéro de téléphone)</li>
            <li>Informations sur votre entreprise (nom, secteur d'activité)</li>
            <li>Données de navigation (pages visitées, durée de visite)</li>
            <li>Adresse IP et type de navigateur</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            3. Finalités du Traitement
          </h2>
          <p>
            Vos données sont traitées pour:
          </p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Répondre à vos demandes de contact</li>
            <li>Vous envoyer notre newsletter (avec consentement)</li>
            <li>Améliorer notre site et nos services</li>
            <li>Analyser l'utilisation de notre site</li>
            <li>Vous proposer des offres personnalisées</li>
            <li>Respecter nos obligations légales</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            4. Base Juridique
          </h2>
          <p>
            Le traitement de vos données repose sur:
          </p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Votre consentement explicite</li>
            <li>L'exécution d'un contrat</li>
            <li>Nos intérêts légitimes</li>
            <li>L'obligation légale</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            5. Durée de Conservation
          </h2>
          <p>
            Nous conservons vos données personnelles:
          </p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Pour les données de contact: 3 ans après dernier contact</li>
            <li>Pour les données de newsletter: jusqu'à votre désinscription</li>
            <li>Pour les données analytics: 13 mois</li>
            <li>Pour les données contractuelles: durée du contrat + 5 ans</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            6. Partage des Données
          </h2>
          <p>
            Nous ne partageons vos données que avec:
          </p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Nos prestataires de services (hébergement, email, CRM)</li>
            <li>Les autorités légales si requis par la loi</li>
            <li>Nos partenaires commerciaux (avec consentement)</li>
          </ul>
          <p>
            Tous nos partenaires s'engagent à respecter la confidentialité de vos données.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            7. Vos Droits
          </h2>
          <p>
            Conformément au RGPD, vous disposez des droits suivants:
          </p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li><strong>Droit d'accès:</strong> Accéder à vos données personnelles</li>
            <li><strong>Droit de rectification:</strong> Corriger vos données</li>
            <li><strong>Droit à l'oubli:</strong> Demander la suppression de vos données</li>
            <li><strong>Droit à la limitation:</strong> Limiter le traitement</li>
            <li><strong>Droit à la portabilité:</strong> Récupérer vos données</li>
            <li><strong>Droit d'opposition:</strong> Refuser certains traitements</li>
          </ul>
          <p>
            Pour exercer ces droits, écrivez-nous à contact@formation.ai
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            8. Cookies
          </h2>
          <p>
            Notre site utilise des cookies pour:
          </p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Mémoriser vos préférences</li>
            <li>Analyser le trafic du site</li>
            <li>Personnaliser votre expérience</li>
          </ul>
          <p>
            Vous pouvez désactiver les cookies via les paramètres de votre navigateur.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            9. Sécurité
          </h2>
          <p>
            Nous mettons en place des mesures de sécurité appropriées pour protéger
            vos données contre l'accès non autorisé, la modification ou la suppression.
            Cependant, aucune transmission sur Internet n'est 100% sécurisée.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            10. Modifications
          </h2>
          <p>
            Nous nous réservons le droit de modifier cette politique à tout moment.
            Les modifications seront publiées sur cette page avec une date de mise à jour.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            11. Réclamation
          </h2>
          <p>
            Si vous estimez que vos droits sont violés, vous pouvez adresser une
            réclamation à la Commission Nationale de l'Informatique et des Libertés
            (CNIL) à l'adresse: www.cnil.fr
          </p>
        </div>
      </div>
    </div>
  );
}
