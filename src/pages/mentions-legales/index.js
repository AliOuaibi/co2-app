import Header from "../../components/Header";
import React from "react";
import footerLogo from "../../assets/images/logos/footer-logo.png";
import Footer from "../../components/Footer";

const MentionsLegales = () => {
  return (
    <div>
      <Header
        parentMenu='home'
        topbarEnable='enable'
      />
      <div className="p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Mentions Légales</h1>
        <p><strong>Dénomination :</strong> CO2 FORMATION</p>
        <p><strong>SIREN :</strong> 982 403 982</p>
        <p><strong>SIRET :</strong> 982 403 982 00019</p>
        <p><strong>TVA Intracommunautaire :</strong> FR42 982 403 982</p>
        <p><strong>Code NAF/APE :</strong> 85.59A (Formation continue d’adultes)</p>
        <p><strong>Adresse :</strong> 4 Allée des Pins, 77420 Champs-sur-Marne</p>
        <p><strong>Forme juridique :</strong> SAS (Société par Actions Simplifiée)</p>
        <p><strong>Date de création :</strong> 30/11/2023</p>
        <p><strong>Hébergement :</strong> Ce site est hébergé par Hostinger.</p>
        <p><strong>Responsable de publication :</strong> contact : contact@co2forma.com</p>
        <p className="mt-4 text-sm text-gray-600">En accédant à ce site, vous acceptez les présentes mentions légales et nos conditions d'utilisation.</p>
      </div>

      <Footer
        footerLogo={footerLogo}
      />
    </div>

  );
};

export default MentionsLegales;
