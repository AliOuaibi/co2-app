import React from 'react';
import {Link} from 'react-router-dom';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import courses from '../../data/Courses.js';


const CourseDetailsMain = (props) => {
  let tab1 = "À propos",
    tab2 = "Le cursus"

  const tabStyle = 'nav nav-tabs';


  const {
    courseName,
    courseAuthor,
    courseDuration,
    coursePrice,
    courseID,
    courseLanguage
  } = props;

  return (
    <div className="back__course__page_grid react-courses__single-page pb---16 pt---110">
      <div className="container pb---70">
        <div className="row">
          <div className="col-lg-8">
            <Tabs>
              <div className="course-single-tab">
                <TabList className={tabStyle}>
                  <Tab>
                    <button>{tab1}</button>
                  </Tab>
                  <Tab>
                    <button>{tab2}</button>
                  </Tab>
                </TabList>

                {courses.filter((course) => courseID === course.id)
                  .map((courseData, index) => {
                    return <div className="tab-content" id="back-tab-content">
                      <TabPanel>
                        <div dangerouslySetInnerHTML={{__html: courseData.about}}/>
                      </TabPanel>
                      <TabPanel>
                        <div dangerouslySetInnerHTML={{__html: courseData.module}}/>
                      </TabPanel>
                    </div>
                  })
                }

                <div className="popular__course__area">
                  <Link to="/contact" className="view-courses">
                    Contactez-nous
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="24" height="24" viewBox="0 0 24 24"
                         fill="none" stroke="currentColor"
                         stroke-width="2" stroke-linecap="round"
                         stroke-linejoin="round"
                         className="feather feather-arrow-right">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>


            </Tabs>
            <div className="react-course-filter related__course">
              <div className="row react-grid">
                {courses.map((data, index) => {
                  return (
                    <div className="single-studies col-lg-6 grid-item">
                      <div className="inner-course">
                        <div className="case-img">
                          <Link to={`/course/${data.id}`} className="cate-w">{data.name}</Link>
                          <img src={require(`../../assets/images/course/${data.image}`)} alt={data.title}/>
                        </div>
                        <div className="case-content">
                          <ul className="meta-course">
                            <li>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                   fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                   stroke-linejoin="round" className="feather feather-star">
                                <polygon
                                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                              </svg>
                              {data.review} review
                            </li>
                            <li>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                   fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                   stroke-linejoin="round" className="feather feather-user">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                              </svg>
                              {data.enrolled} Students
                            </li>
                          </ul>
                          <h4 className="case-title"><Link to={`/course/${data.id}`}>{data.title}</Link></h4>
                          <div className="react__user">
                            <img src={require(`../../assets/images/course/${data.authorImg}`)}
                                 alt={data.author}/> {data.author}
                          </div>
                          <ul className="react-ratings">
                            <li className="react-book">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                   fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                   stroke-linejoin="round" className="feather feather-file-text">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                              </svg>
                              {data.lesson} Lessons
                            </li>
                            <li className="price">{data.price}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )
                }).slice(4, 6)}
              </div>
            </div>
          </div>
          <div className="col-lg-4 md-mt-60">
            <div className="react-sidebar react-back-course2 ml----30">
              <div className="widget get-back-course">
                <ul className="price">
                  <li>{coursePrice}</li>
                </ul>
                <ul className="price__course">
                  <li><i className="icon_building"></i> Centre de formation <b>{courseAuthor}</b></li>
                  <li><i className="icon_tag_alt"></i> Catégorie <b>{courseName}</b></li>
                  <li><i className="icon_map"></i> Lieu <b>100% E-learning</b></li>
                  <li><i className="icon_clock_alt"></i> Durée <b>{courseDuration}</b></li>
                  <li><i className="icon_globe"></i>Langue <b>{courseLanguage}</b></li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetailsMain;