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

      <div>
        <form className="form-inline">
          <div className="form-group">
            <label htmlFor="paidDropdown">Paid</label>
            <select id="paidDropdown" className="form-control dropdowns" onChange={props.paidChange} value={props.paid}>
              <option>All</option>
              <option>Paid</option>
              <option>Unpaid</option>
            </select>
          </div>
        </form>
      </div>

      <button type="button" class="btn btn-primary showallBtn" onClic={props.showAllClicked}>Show All</button>

    </div>
  )
}

export default Filters