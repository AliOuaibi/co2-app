import React from 'react';
import {Link} from 'react-router-dom'

import courseImg1 from '../../assets/images/course/1.png';

const SingleCourse = (props) => {
  const {itemClass, courseID, courseImg, courseTitle, courseName, courseLesson, courseEnrolled, coursePrice} = props;

  return (
    <div className={itemClass ? itemClass : 'course__item mb-30'}>
      <div className="course__thumb">
        <Link to={`/course/${courseID}`}>
          <img
            src={courseImg ? require(`../../assets/images/course/${courseImg}`) : require(`../../assets/images/course/${courseImg1}`)}
            alt="image"/>
        </Link>
      </div>
      <div className="course__inner">
        <h3 className="react-course-title">
          <Link to={`/course/${courseID}`}>
            {courseTitle ? courseTitle : 'Dave conservatoire is the Entirely free online.'}
          </Link>
        </h3>
        <div className="course__card-icon d-flex align-items-center">
          <div className="react__user">
            {coursePrice ? coursePrice : '$68.00'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleCourse