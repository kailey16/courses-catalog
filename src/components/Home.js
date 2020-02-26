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
    this.setState({showingCourses: coursesWithSearchTerm, searchTerm: "", type: "All", subject: "All", paid: "All"})
  }

  paidChange = (e) => {
    this.setState({paid: e.target.value})
  }

  typeChange = (e) => {
    this.setState({type: e.target.value})
  }

  subjectChange = (e) => {
    this.setState({subject: e.target.value})
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