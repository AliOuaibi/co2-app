import React from 'react';
import {Link} from 'react-router-dom';

const Breadcrumb = (props) => {
  const {courseName, courseTitle, courseBannerImg, courseAuthor, courseAuthorImg} = props;

  return (
    <div className="react-breadcrumbs single-page-breadcrumbs">
      <div className="breadcrumbs-wrap">
        <img className="desktop" src={require(`../../assets/images/course/${courseBannerImg}`)} alt={courseTitle}/>
        <img className="mobile" src={require(`../../assets/images/course/${courseBannerImg}`)} alt={courseTitle}/>
        <div className="breadcrumbs-inner">
          <div className="container">
            <div className="breadcrumbs-text">
              <Link to="#" className="cate">{courseName}</Link>
              <h1 className="breadcrumbs-title">{courseTitle}</h1>
              <ul className="user-section">
                <li className="user">
                  <span><img src={require(`../../assets/images/course/${courseAuthorImg}`)} alt="user"/></span>
                  <span>{courseAuthor}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;




