import React from 'react'
import cardImg from '../media/logo4.png'

const CourseCard = (props) => {
  return (
    <div className="card">
      <img src={cardImg} className="card-img-top" alt="course preview" />
      <div className="card-body">
        <h5 className="card-title">{props.course.title}</h5>
        <p className="card-text">This online program aims to provide an overview of genomic medicine and pharmacogenetics and review specialties where advancements in pharmacogenetics can improve the quality of care.</p>
        <a href="#" className="btn btn-primary">Learn more</a>
      </div>
    </div>
  )
}

export default CourseCard