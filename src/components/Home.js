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
    paid: "",
    allCourses: courseList,
    showingCourses: courseList
  }

  changeSearchTerm = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  searchTermSubmit = (e) => {
    e.preventDefault()
    const coursesWithSearchTerm = this.state.allCourses.filter(c => c.title.includes(this.state.searchTerm))
    this.setState({showingCourses: coursesWithSearchTerm, searchTerm: "", type: "All", subject: "All"})
  }

  paidChange = (e) => {
    let courses;
    if (e.target.value === "All") {
      courses = this.state.allCourses
    } else if (e.target.value === "Paid") {
      courses = this.state.allCourses.filter(c => c.paid)
    } else {
      courses = this.state.allCourses.filter(c => c.paid === false)
    }

    this.setState({paid: e.target.value, type: "All", subject: "All", showingCourses: courses})
  }

  typeChange = (e) => {
    let courses = e.target.value === "All" ? this.state.allCourses : this.state.allCourses.filter(c => c.coursetype.includes(e.target.value))
    this.setState({type: e.target.value, subject: "All", showingCourses: courses})
  }

  subjectChange = (e) => {
    let courses = e.target.value === "All" ? this.state.allCourses : this.state.allCourses.filter(c => c.subject.includes(e.target.value))
    this.setState({subject: e.target.value, type: "All", showingCourses: courses})
  }

  showAllClicked = () => {
    this.setState({
    searchTerm: "",
    type: "",
    subject: "",
    paid: "",
    showingCourses: courseList
    })
  }

  render() {
    return (
      <div id="Home">
        <div id="homeText">
          <h3>Welcome to Medstar courses!</h3>
          <h4>Please search courses by the keyword or use filters to browse different categories.</h4>
        </div>
      
        <Searchbar changeSearchTerm={this.changeSearchTerm} searchTerm={this.state.searchTerm} searchTermSubmit={this.searchTermSubmit}/>
        <Filters paid={this.state.paid} paidChange={this.paidChange} typeChange={this.typeChange} type={this.state.type} subjectChange={this.subjectChange} subject={this.state.subject} showAllClicked={this.showAllClicked}/>
        <CoursesContainer showingCourses={this.state.showingCourses} courseSelected={this.props.courseSelected}/>
      </div>
    )
  }
}

export default Home