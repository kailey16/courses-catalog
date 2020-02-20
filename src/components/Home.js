import React from 'react'
import '../style/Home.css'
import Searchbar from './Searchbar'
import Filters from './Filters'
import CoursesContainer from './CoursesContainer'
import courseList from '../courseList'


class Home extends React.Component {
  state = {
    searchTerm: "",
    type: "",
    subject: "",
    paid: true,
    allCourses: courseList,
    showingCourses: courseList.filter(c => c.paid),
    selectedCourse: {}
  }

  changeSearchTerm = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  searchTermSubmit = (e) => {
    e.preventDefault()
    const coursesWithSearchTerm = this.state.allCourses.filter(c => c.title.includes(this.state.searchTerm))
    this.setState({showingCourses: coursesWithSearchTerm, searchTerm: ""})
  }

  paidChange = (e) => {
    const paidornot = e.target.name === "paid" ? true : false
    this.setState({paid: paidornot})
  }

  typeChange = (e) => {
    let courses = e.target.value === "All" ? this.state.allCourses : this.state.allCourses.filter(c => c.coursetype.includes(e.target.value))
    this.setState({type: e.target.value, subject: "All", showingCourses: courses})
  }

  subjectChange = (e) => {
    let courses = e.target.value === "All" ? this.state.allCourses : this.state.allCourses.filter(c => c.subject.includes(e.target.value))
    this.setState({subject: e.target.value, type: "All", showingCourses: courses})
  }

  render() {
    return (
      <div id="Home">
        <div id="homeText">
          <h3>Welcome to Medstar courses!</h3>
          <h4>Please search courses by the keyword or use filters to browse different categories.</h4>
        </div>
      
        <Searchbar changeSearchTerm={this.changeSearchTerm} searchTerm={this.state.searchTerm} searchTermSubmit={this.searchTermSubmit}/>
        <Filters paid={this.state.paid} paidChange={this.paidChange} typeChange={this.typeChange} type={this.state.type} subjectChange={this.subjectChange} subject={this.state.subject}/>
        <CoursesContainer showingCourses={this.state.showingCourses}/>
      </div>
    )
  }
}

export default Home