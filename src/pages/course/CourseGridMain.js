import React from 'react';

import SingleCourseThree from '../../components/Course/SingleCourseThree';

import courses from '../../data/Courses.js';

const CourseGridMain = () => {
  return (
    <div className="react-course-filter back__course__page_grid pb---40 pt---110">
      <div className="container pb---70">
        <div className="row">
          {courses.map((data, index) => {
            return (
              <div key={index} className="col-lg-4">
                {
                  <SingleCourseThree
                    courseID={data.id}
                    courseImg={`${data.image}`}
                    courseTitle={data.title}
                    courseName={data.name}
                    courseAuthor={data.author}
                    courseType={data.type}
                    courseDuration={data.duration}
                    coursePrice={data.price}
                  />
                }
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default CourseGridMain;