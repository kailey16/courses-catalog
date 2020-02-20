import React from 'react';
import { Route } from 'react-router-dom';
import './style/App.css';
import Home from './components/Home'
import CourseDetail from './components/CourseDetail'


class App extends React.Component {
  state = {
    selectedCourse: {}
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />} />
        <Route exact path="/courseDetail" render={() => <CourseDetail course={this.state.selectedCourse}/>} />
      </div>
    );
  }

}

export default App;
