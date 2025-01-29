// Image
import aboutImg from '../../assets/images/about/ab.png';
import aboutBadge from '../../assets/images/about/badge.png';

const About = () => {

  return (
    <div className="about__area about__area_one p-relative pt---10 pb---120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about__image">
              <img src={aboutImg} alt="About"/>
              <img className="react__shape__ab" src={aboutBadge} alt="Shape" width={130}/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__content">
              <h2 className="about__title wow animate__fadeInUp" data-wow-duration="0.3s">Bienvenue sur le site de <br/>
                <em>CO2 FORMATION</em></h2>
              <p className="about__paragraph wow animate__fadeInUp" data-wow-duration="0.5s">Transformez votre carrière
                en acquérant de nouvelles compétences.</p>

              <p className="wow animate__fadeInUp" data-wow-duration="0.6s">
                Votre partenaire pour développer vos compétences en bureautique et améliorer votre
                parcours professionnel. Nous sommes spécialisés dans la formation aux logiciels les plus populaires,
                tels que Word, Excel, Photoshop, LibreOffice, initiation à Windows 10, Office 365 et les réseaux
                sociaux..
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;