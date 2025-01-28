import React from 'react';
import {Link} from 'react-router-dom';

import SectionTitle from '../../components/SectionTitle'


import campusImg1 from '../../assets/images/campus/1.svg'
import campusImg2 from '../../assets/images/campus/2.svg'
import campusImg3 from '../../assets/images/campus/3.svg'
import campusImg4 from '../../assets/images/campus/4.png'
import campusShape from '../../assets/images/campus/shape.png'

const Campus = () => {

  return (
    <div className="campus_sec pt---100 pb---110">
      <div className="container">
        <SectionTitle Title="Pourquoi choisir CO2 FORMATION"/>
        <div className="row">
          <div className="col-lg-7">
            <div className="about__content">
              <ul>
                <li className="wow animate__fadeInUp" data-wow-duration="0.3s">
                  <div className="icon">
                    <img src={campusImg1} alt="image"/>
                  </div>
                  <div className="text">
                    <h4>Des formateurs certifiés</h4>
                    <p>Nos formateurs sont expérimentés et certifiés dans leur domaine, <br/>
                      vous garantissant une qualité d'enseignement optimale.</p>
                  </div>
                </li>
                <li className="wow animate__fadeInUp" data-wow-duration="0.3s">
                  <div className="icon">
                    <img src={campusImg2} alt="image"/>
                  </div>
                  <div className="text">
                    <h4>Des formations pratiques</h4>
                    <p>Vous offrir une expérience pratique, vous permettant de maîtriser <br/>
                      les compétences clés et de les appliquer directement.</p>
                  </div>
                </li>
                <li className="wow animate__fadeInUp" data-wow-duration="0.3s">
                  <div className="icon">
                    <img src={campusImg3} alt="image"/>
                  </div>
                  <div className="text">
                    <h4>Des résultats rapides</h4>
                    <p>Nos formations vous aident à atteindre vos objectifs rapidement, <br/>
                      vous permettant de gagner en efficacité et en compétence.</p>
                  </div>
                </li>
                <li className="wow animate__fadeInUp" data-wow-duration="0.3s">
                  <div className="icon">
                    <img src={campusImg1} alt="image"/>
                  </div>
                  <div className="text">
                    <h4>Des formations flexibles</h4>
                    <p>Nous proposons des formations adaptées à votre rythme, vous permettant de suivre <br/>
                      nos programmes de formation à votre convenance.</p>
                  </div>
                </li>
                <li className="wow animate__fadeInUp" data-wow-duration="0.3s">
                  <div className="icon">
                    <img src={campusImg2} alt="image"/>
                  </div>
                  <div className="text">
                    <h4>Des tarifs abordables</h4>
                    <p>Des tarifs compétitifs pour nos formations, afin que chacun puisse <br/>
                      avoir accès à des formations de qualité à un prix abordable.</p>
                  </div>
                </li>
                <li className="wow animate__fadeInUp" data-wow-duration="0.3s">
                  <div className="icon">
                    <img src={campusImg3} alt="image"/>
                  </div>
                  <div className="text">
                    <h4>Un suivi personnalisé</h4>
                    <p>Pour chaque apprenant, afin de garantir une expérience d'apprentissage optimale <br/>
                      et de répondre à toutes les questions.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about__image">
              <img src={campusImg4} alt="image"/>
              <img className="shape-1" src={campusShape} alt="image"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Campus;