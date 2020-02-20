import React from 'react'

const Filters = (props) => {
  console.log(props)
  return (
    <div id="filters">

      <div>
        <form className="form-inline">
          <div className="form-group">
            <label htmlFor="typeDropdown">Course Types</label>
            <select id="typeDropdown" className="form-control dropdowns" onChange={props.typeChange} value={props.type}>
              <option>All</option>
              <option>Online Class</option>
              <option>In-Class</option>
              <option>Private Class</option>
              <option>Live Webinar</option>
              <option>Game</option>
            </select>
          </div>
        </form>
      </div>

      <div>
        <form className="form-inline">
          <div className="form-group">
            <label htmlFor="subjectDropdown">Subject</label>
            <select id="subjectDropdown" className="form-control dropdowns" onChange={props.subjectChange} value={props.subject}>
              <option>All</option>
              <option>Subject option 1</option>
              <option>Subject option 2</option>
              <option>Subject option 3</option>
              <option>Subject option 4</option>
              <option>Subject option 5</option>
            </select>
          </div>
        </form>
      </div>

      <div id="radioButtons">
          <input type="radio" name="paidOption" name="paid" value="Paid" checked={props.paid} onChange={props.paidChanged}/>
          <label htmlFor="paid">
            Paid
          </label>

          <input type="radio" name="paidOption" name="unpaid" value="Unpaid" checked={!props.paid} onChange={props.paidChanged}/>
          <label htmlFor="unpaid">
            Unpaid
          </label>

      </div>

    </div>
  )
}

export default Filters