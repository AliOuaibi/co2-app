import React from 'react';
import About from './AboutSection';
import HomeSlider from './SliderSection';
import Campus from './CampusSection';
import Course from './CourseSection';
import Counter from './CounterSection';
import ScrollToTop from '../../components/ScrollTop';

const HomeMain = () => {
  return (
    <>
      <div className="react-wrapper">
        <div className="react-wrapper-inner">
          {/* SliderSection-start */}
          <HomeSlider/>
          {/* SliderSection-start */}

          {/* About-area-start */}
          <About/>
          {/* About-area-end */}

          {/* Course-area-start */}
          <Course/>
          {/* Course-area-end */}

          {/* Campus-area-start */}
          <Campus/>
          {/* Campus-area-end */}

          {/* Counter-area-start */}
          <Counter/>
          {/* Counter-area-end */}

          {/* scrolltop-start */}
          <ScrollToTop
            scrollClassName="home react__up___scroll"
          />
          {/* scrolltop-end */}
        </div>
      </div>

    </>
  );
}

export default HomeMain;