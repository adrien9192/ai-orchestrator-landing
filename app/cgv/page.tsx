export default function CGVPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Conditions Générales de Vente
        </h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Dernière mise à jour : {new Date().getFullYear()}</p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            1. Objet
          </h2>
          <p>
            Les présentes Conditions Générales de Vente (CGV) régissent les relations
            commerciales entre Formation AI (ci-après "Prestataire") et ses clients
            (ci-après "Client") pour la fourniture de services d'automatisation basés
            sur l'intelligence artificielle.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            2. Services
          </h2>
          <p>
            Le Prestataire propose des services de consultation, de mise en œuvre et
            de support pour l'automatisation des processus métier. Les services exacts
            seront définis dans un devis ou une proposition commerciale spécifique.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            3. Tarification et Facturation
          </h2>
          <p>
            Les tarifs sont indiqués en euros TTC. Les conditions tarifaires sont
            précisées dans le devis accepté par le Client. Les factures sont émises
            à la date convenue et doivent être payées dans un délai de 30 jours à
            compter de la date d'émission.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            4. Conditions de Paiement
          </h2>
          <p>
            Le paiement peut s'effectuer par virement bancaire ou carte bancaire.
            Tout retard de paiement peut entraîner l'interruption des services. Les
            frais de relance seront à la charge du Client.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            5. Délais de Livraison
          </h2>
          <p>
            Les délais de livraison sont donnés à titre indicatif. Toute modification
            de spécifications peut affecter les délais convenus.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            6. Responsabilité
          </h2>
          <p>
            Le Prestataire s'engage à fournir les services selon les règles de l'art
            et avec diligence. Cependant, il ne peut être tenu responsable des
            dommages indirects ou des pertes de bénéfices résultant de l'utilisation
            des services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            7. Propriété Intellectuelle
          </h2>
          <p>
            Tous les outils, méthodes et documents créés dans le cadre de la
            prestation demeurent la propriété du Prestataire, sauf accord contraire
            explicite écrit.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            8. Confidentialité
          </h2>
          <p>
            Les deux parties s'engagent à maintenir la confidentialité des
            informations échangées dans le cadre de la prestation.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            9. Résiliation
          </h2>
          <p>
            Tout contrat peut être résilié avec un préavis de 30 jours. La
            résiliation n'exonère pas le Client de ses obligations financières.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            10. Droit Applicable
          </h2>
          <p>
            Les présentes CGV sont régies par la loi française et soumises à la
            juridiction des tribunaux compétents.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            11. Contact
          </h2>
          <p>
            Pour toute question concernant ces CGV, veuillez nous contacter à:
            <br />
            Email: contact@formation.ai
            <br />
            Adresse: Paris, France
          </p>
        </div>
      </div>
    </div>
  );
}
