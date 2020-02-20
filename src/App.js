import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import SearchAndFilters from './components/SearchAndFilters'
import CoursesContainer from './components/CoursesContainer'
import CourseDetail from './components/CourseDetail'


class App extends React.Component {
  state = {
    selectedCourse: {}
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <SearchAndFilters />
        <CoursesContainer />
        <Route exact path="/courseDetail" render={() => <CourseDetail course={this.state.selectedCourse} />} />
      </div>
    );
  }

}

export default App;
