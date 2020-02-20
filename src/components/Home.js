import React from 'react'
import '../style/Home.css'
import Searchbar from './Searchbar'
import Filters from './Filters'
import CoursesContainer from './CoursesContainer'


const Home = () => {
  return (
    <div id="Home">
      <div id="homeText">
        <h3>Welcome to Medstar courses!</h3>
        <h4>Please search courses by the keyword or use filters to browse different categories.</h4>
      </div>
      
      <Searchbar />
      <Filters />
      <CoursesContainer />
    </div>
  )
}

export default Home