import React from 'react';

import SectionTitle from '../../components/SectionTitle'

import SingleService from '../../components/Service/SingleService';

import serviceImg1 from '../../assets/images/service/1.png'
import serviceImg2 from '../../assets/images/service/2.png'
import serviceImg3 from '../../assets/images/service/3.png'
import serviceImg4 from '../../assets/images/service/4.png'

const Service = () => {

  return (
    <div className="react_popular_topics pt---100 pb---70">
      <div className="container">
        <SectionTitle Title="Découvrez les formations que nous vous proposons"/>
        <div className="row">
          <div className="col-lg-4 wow animate__fadeInUp" data-wow-duration="0.3s">
            <SingleService
              itemImg={serviceImg1}
              title="Intégrer le management d’équipe dans son
activité professionnelle"
            />
          </div>
          <div className="col-lg-4 wow animate__fadeInUp" data-wow-duration="0.5s">
            <SingleService
              itemImg={serviceImg2}
              title="Formation Wordpress"
            />
          </div>
          <div className="col-lg-4 wow animate__fadeInUp" data-wow-duration="0.7s">
            <SingleService
              itemImg={serviceImg3}
              title="Formation PowerPoint"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;