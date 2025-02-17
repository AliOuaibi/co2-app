import Header from "../../components/Header";
import React from "react";
import Footer from "../../components/Footer";
import footerLogo from "../../assets/images/logos/footer-logo.png";

const PolitiqueConfidentialite = () => {
  return (
    <div>
      <Header
        parentMenu='home'
        topbarEnable='enable'
      />
      <div className="p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Politique de Confidentialité</h1>
        <p>Chez <strong>CO2 FORMATION</strong>, nous accordons une grande importance à la protection de vos données
          personnelles. Cette politique explique comment nous collectons, utilisons et protégeons vos informations.</p>

        <h2 className="text-xl font-semibold mt-4">1. Données collectées</h2>
        <p>Nous collectons les informations suivantes :</p>
        <ul className="list-disc pl-5">
          <li>Nom, prénom</li>
          <li>Adresse e-mail</li>
          <li>Numéro de téléphone</li>
          <li>Informations de navigation sur notre site</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">2. Utilisation des données</h2>
        <p>Vos données sont utilisées pour :</p>
        <ul className="list-disc pl-5">
          <li>Gérer vos demandes de formation</li>
          <li>Améliorer nos services</li>
          <li>Envoyer des communications et offres commerciales</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">3. Partage des données</h2>
        <p>Vos informations ne sont pas vendues à des tiers. Elles peuvent être partagées avec nos partenaires
          uniquement pour assurer le bon fonctionnement de nos services.</p>

        <h2 className="text-xl font-semibold mt-4">4. Sécurité des données</h2>
        <p>Nous mettons en place des mesures de sécurité adaptées pour protéger vos données contre tout accès non
          autorisé.</p>

        <h2 className="text-xl font-semibold mt-4">5. Vos droits</h2>
        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul className="list-disc pl-5">
          <li>Accès à vos données</li>
          <li>Modification ou suppression de vos informations</li>
          <li>Opposition à l'utilisation de vos données</li>
        </ul>
        <p>Pour exercer vos droits, contactez-nous à : <strong>contact@co2forma.com</strong></p>

        <p className="mt-4 text-sm text-gray-600">Dernière mise à jour : 10/02/2025</p>
      </div>

      <Footer
        footerLogo={footerLogo}
      />
    </div>
  );
};

export default PolitiqueConfidentialite;
