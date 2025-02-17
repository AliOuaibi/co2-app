import React from 'react';


import infoImg1 from '../../assets/images/contact/2.png'
import infoImg2 from '../../assets/images/contact/3.png'
import infoImg3 from '../../assets/images/contact/4.png'

const ContactInfo = () => {
  return (
    <ul className="address-sec">
      <li>
        <em className="icon"><img src={infoImg1} alt=""/></em>
        <span className="text"><em>Adresse </em> 4 ALLEE DES PINS <br/> 77420 CHAMPS-SUR-MARNE</span>
      </li>
      <li>
        <em className="icon"><img src={infoImg2} alt=""/></em>
        <span className="text"><em>Contact</em> <a href="tel:+(33)625011250">Mobile: (+33)6 25 01 12 50</a> <a href="mailto:contact@co2forma.com">Email: contact@co2forma.com</a></span>
      </li>
      <li>
        <em className="icon"><img src={infoImg3} alt=""/></em>
        <span className="text"><em>Horaire</em> Lundi - Vendredi: 09:00 - 18:00 </span>
      </li>
    </ul>
  );

}

export default ContactInfo;