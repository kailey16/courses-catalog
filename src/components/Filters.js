import React from 'react'

const Filters = () => {
  return (
    <div id="filters">

      <div>
        <form className="form-inline">
          <div className="form-group">
            <label htmlFor="typeDropdown">Course Types</label>
            <select id="typeDropdown" className="form-control dropdowns">
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
            <label htmlFor="subjectDropdown">Course Types</label>
            <select id="subjectDropdown" className="form-control dropdowns">
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
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="paidOption" id="paid" value="Paid" checked />
          <label className="form-check-label" htmlFor="paid">
            Paid
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="paidOption" id="unpaid" value="Unpaid" />
          <label className="form-check-label" htmlFor="unpaid">
            Unpaid
          </label>
        </div>
      </div>

    </div>
  )
}

export default Filters