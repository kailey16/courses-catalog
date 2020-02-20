import React from 'react'
import '../style/Home.css'
import Navbar from './Navbar'
import Searchbar from './Searchbar'
import Filters from './Filters'
import CoursesContainer from './CoursesContainer'


const Home = () => {
  return (
    <div id="Home">
      <Navbar />
      <Searchbar />
      <Filters />
      <CoursesContainer />
    </div>
  )
}

export default Home