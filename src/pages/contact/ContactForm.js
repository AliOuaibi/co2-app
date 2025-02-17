import React from 'react';

import emailjs from 'emailjs-com';

const ContactForm = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      'service_vwhuvwj',  // Remplace avec ton Service ID
      'template_v6wa70g', // Remplace avec ton Template ID
      e.target,
      'NKpAI_F-BUz_0Ry7C'   // Remplace avec ton Public Key (anciennement User ID)
    )
      .then((result) => {
        console.log("Email envoyé avec succès:", result.text);
        alert("Votre message a bien été envoyé !");
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi de l'email:", error.text);
        alert("Une erreur est survenue, veuillez réessayer.");
      });

    e.target.reset();
  }

  return (
    <div className="react-blog-form">
      <h2 className="contact-title">Des questions? <br/> Contactez-nous</h2>
      <p>
        Nous sommes heureux de pouvoir répondre à toutes vos questions et de vous
        aider à trouver la formation qui correspond le mieux à vos besoins. N’hésitez
        pas à nous contacter via le formulaire de contact ci-dessous pour toute demande d’information sur nos
        formations, nos tarifs ou notre programme de suivi personnalisé.<br/>
        Vous pouvez également nous contacter par téléphone ou par email si vous avez des questions spécifiques
        ou si vous souhaitez prendre rendez-vous avec l’un de nos formateurs certifiés. Nous sommes disponibles
        du lundi au vendredi de 9h à 18h pour répondre à toutes vos questions et vous aider à atteindre vos objectifs
        professionnels.</p>
      <div id="blog-form" className="blog-form">
        <div id="form-messages"></div>
        <form id="contact-form" onSubmit={sendEmail}>
          <div className="row">
            <div className="col-lg-6">
              <div className="back-input">
                <input id="name" type="text" name="user_name" required placeholder="Prénom"/>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="back-input">
                <input id="surname" type="text" name="user_surname" required placeholder="Nom"/>
              </div>
            </div>

            <div className="col-lg-6 pdl-5">
              <div className="back-input">
                <input id="email" type="email" name="user_email" required placeholder="Email"/>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="back-input">
                <input id="subject" type="text" name="user_subject" required placeholder="Sujet"/>
              </div>
            </div>

            <div className="col-lg-6 pdl-5">
              <div className="back-input">
                <input id="phone" type="text" name="user_phone" required placeholder="Téléphone"/>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="back-textarea">
                <textarea id="message" name="user_message" required placeholder="Message"></textarea>
              </div>
            </div>

            <div className="col-lg-12">
              <button type="submit" className="back-btn">
                Envoyer votre message
                <svg
                  xmlns="http://www.w3.org/2000/svg" width="24"
                  height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-arrow-right"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );

}

export default ContactForm;