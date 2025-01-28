import React, {useState, useEffect} from "react";
import {Route, Routes} from 'react-router-dom';
import Preloader from "../components/Preloader";

import Home from '../pages/home';
import Course from '../pages/course';
import CourseDetails from '../pages/course/course-details';
import Contact from '../pages/contact';
import Error from '../pages/404';
import LoadTop from '../components/ScrollTop/LoadTop'


const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate data loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div className='App'>
      {isLoading ?
        <Preloader/> : ''
      }
      <>
        <LoadTop/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/nos-formations" exact element={<Course/>}/>
          <Route path="/course/:id" element={<CourseDetails/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </>
    </div>
  );
}

export default App;
