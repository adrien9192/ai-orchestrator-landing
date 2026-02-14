export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Mentions Légales
        </h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Dernière mise à jour : {new Date().getFullYear()}</p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            1. Directeur de la Publication
          </h2>
          <p>
            Formation AI<br />
            Paris, France<br />
            Email: contact@formation.ai
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            2. Hébergement
          </h2>
          <p>
            Le site est hébergé par Vercel Inc.<br />
            Adresse: 340 S Lemon Ave, Walnut, CA 91789, USA
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            3. Propriété Intellectuelle
          </h2>
          <p>
            Le contenu du site (textes, images, vidéos, etc.) est protégé par les
            droits d'auteur et autres droits de propriété intellectuelle. Toute
            reproduction ou utilisation sans autorisation préalable est interdite.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            4. Données Personnelles
          </h2>
          <p>
            Les données personnelles collectées sur ce site sont traitées conformément
            à la Loi Informatique et Libertés et au Règlement Général sur la
            Protection des Données (RGPD). Veuillez consulter notre Politique de
            Confidentialité pour plus d'informations.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            5. Responsabilité
          </h2>
          <p>
            Formation AI décline toute responsabilité pour:
          </p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Les erreurs ou omissions dans le contenu du site</li>
            <li>L'indisponibilité temporaire du site</li>
            <li>Les dommages causés par l'utilisation du site</li>
            <li>Les contenus de sites externes vers lesquels le site pourrait rediriger</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            6. Liens Externes
          </h2>
          <p>
            Le site peut contenir des liens vers des sites externes. Formation AI
            n'est pas responsable du contenu de ces sites externes.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            7. Cookies
          </h2>
          <p>
            Le site utilise des cookies pour améliorer l'expérience utilisateur.
            En utilisant le site, vous acceptez l'utilisation de cookies conformément
            à notre Politique de Confidentialité.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            8. Limitation de Responsabilité
          </h2>
          <p>
            En aucun cas Formation AI ne sera responsable des dommages directs,
            indirects, accidentels, spéciaux ou consécutifs résultant de l'utilisation
            ou de l'incapacité à utiliser le site.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            9. Modification des Conditions
          </h2>
          <p>
            Formation AI se réserve le droit de modifier les présentes mentions
            légales à tout moment. Les modifications prendront effet dès leur
            publication sur le site.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            10. Droit Applicable et Juridiction
          </h2>
          <p>
            Les présentes mentions légales sont régies par la loi française. Tout
            litige sera soumis à la juridiction compétente de Paris.
          </p>
        </div>
      </div>
    </div>
  );
}
