import React from 'react'
import CourseCard from './CourseCard'

const CoursesContainer = (props) => {
  return (
    <div id="CoursesContainer">
      {props.showingCourses.map(courseInfo => <CourseCard key={courseInfo.id} course={courseInfo} courseSelected={props.courseSelected} />)}
    </div>
  )
}

export default CoursesContainer