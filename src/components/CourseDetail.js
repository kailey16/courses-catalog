import React from 'react'
import cardImg from '../media/logo4.png'
import { Link } from 'react-router-dom'
import '../style/Detail.css'

const CourseDetail = (props) => {
  const {title, coursetype, subject, paid, overview} = props.course

  return (
    <div className="CourseDetail">
      <div className="CourseDetailTop">
        <img src={cardImg} alt="course detail preveiw" className="courseDetailImg" />
        <div className="detailText">
          <h2 className="courseTitle">{title}</h2>
          <h4>Course Type</h4>
          <h5>{coursetype.join(", ")}</h5>
          <h4>Subject</h4>
          <h5>{subject.join(", ")}</h5>
          <h4>Paid?</h4>
          <h5>{paid === "Paid" ? "Yes" : "No"}</h5><br/>
          <button type="button" className="btn btn-primary btnDetail">Ask About</button>   
          <button type="button" className="btn btn-primary btnDetail">SaveForLater</button>
          <button type="button" className="btn btn-primary btnDetail">Enroll</button>
        </div>
      </div>

      <div className="CourseDetailBottom">
        <h4>Course overview</h4>
        <h5>{overview}, The program aims to provide an overview of genomic medicine and pharmacogenetics, review specialties where advancements in pharmacogenetics can improve the quality of care, and offer perspective from leading experts in how pharmacogenetics can transform clinical practice.</h5>
      </div>

      <Link to="/">
        <button type="button" className="btn btn-primary backToCourses btnDetail">Back to Courses</button>
      </Link>
    </div>
  )
}

export default CourseDetail