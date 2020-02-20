import React from 'react'
import cardImg from '../media/logo4.png'

const CourseCard = (props) => {
  return (
    <div className="card">
      <img src={cardImg} className="card-img-top" alt="course preview" />
      <div className="card-body">
        <h5 className="card-title">
          {props.course.title}
          <a href="#" className="btn btn-link">Learn more</a>
          <button type="button" className="btn btn-link askBtn">Ask About</button>
        </h5>
        
        <div className="description card-text">
          <p>
            <span>Course Type</span> {props.course.coursetype.join(", ")}
          </p>
          <p>
            <span>Paid?</span> {props.course.paid ? "Yes" : "No"}
          </p>
          <p>
            <span>Course overview</span><br/>
            The program aims to provide an overview of genomic medicine and pharmacogenetics, review specialties where advancements in pharmacogenetics can improve the quality of care, and offer perspective from leading experts in how pharmacogenetics can transform clinical practice.
          </p>
        </div>

        <button type="button" className="btn btn-primary">Enroll</button>
        <button type="button" className="btn btn-primary btnGap">SaveForLater</button>
      </div>
    </div>
  )
}

export default CourseCard