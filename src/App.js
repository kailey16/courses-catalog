import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './style/App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import CourseDetail from './components/CourseDetail'


const App = () => {

  const [selectedCourse, courseSelected] = useState({})

  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" render={() => <Home courseSelected={courseSelected}/>} />
      <Route exact path="/courseDetail" render={() => <CourseDetail course={selectedCourse}/>} />
    </div>
  );

}

export default App;
