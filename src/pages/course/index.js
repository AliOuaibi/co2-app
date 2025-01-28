import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import CourseGridMain from './CourseGridMain';
import ScrollToTop from '../../components/ScrollTop';

import Logo from '../../assets/images/logos/logo2.png';

const Course = () => {
  return (
    <body className="courses-grid-page">
    <Header
      parentMenu='course'
      menuCategoryEnable='enable'
      headerNormalLogo={Logo}
      headerStickyLogo={Logo}
    />

    <div className="react-wrapper">
      <div className="react-wrapper-inner">
        <Breadcrumb
          pageTitle="Nos Formations"
        />
        <CourseGridMain/>
        <ScrollToTop/>
      </div>
    </div>

    <Footer/>

    </body>
  );
}


export default Course;

