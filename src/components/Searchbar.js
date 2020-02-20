import React from 'react'

const SearchAndFilters = () => {
  return (
    <div>
      <form id="searchbar" className="form-inline">
        <div className="form-group">
          <input type="text" id="searchBox" className="form-control" />
        </div>
        <input type="submit" id="searchSubmitButton" className="btn btn-primary" value="Search" />
      </form>
    </div>
  )
}

export default SearchAndFilters