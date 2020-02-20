import React from 'react'
import '../style/Home.css'
import Searchbar from './Searchbar'
import Filters from './Filters'
import CoursesContainer from './CoursesContainer'


const Home = () => {
  return (
    <div id="Home">
      <Searchbar />
      <Filters />
      <CoursesContainer />
    </div>
  )
}

export default Home