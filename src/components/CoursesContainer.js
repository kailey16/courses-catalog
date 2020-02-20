import React from 'react'
import CourseCard from './CourseCard'
import courseList from '../courseList'

const CoursesContainer = () => {
  return (
    <div id="CoursesContainer">
      {courseList.map(courseInfo => <CourseCard key={courseInfo.id} course={courseInfo}/>)}
    </div>
  )
}

export default CoursesContainer