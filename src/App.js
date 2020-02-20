import React from 'react';
import { Route } from 'react-router-dom';
import './style/App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import CourseDetail from './components/CourseDetail'


class App extends React.Component {
  state = {
    selectedCourse: {}
  }

  courseSelected = (course) => {
    this.setState({selectedCourse: course})
  }

  render() { 
    return (
      <div className="App">
        <Navbar />
        <Route exact path="/" render={() => <Home courseSelected={this.courseSelected}/>} />
        <Route exact path="/courseDetail" render={() => <CourseDetail course={this.state.selectedCourse}/>} />
      </div>
    );
  }

}

export default App;
