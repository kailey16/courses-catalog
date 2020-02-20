import React from 'react'

const SearchBar = (props) => {
  return (
    <div>
      <form id="searchbar" className="form-inline" onSubmit={props.searchTermSubmit}>
        <div className="form-group">
          <input type="text" id="searchBox" className="form-control" onChange={props.changeSearchTerm} value={props.searchTerm}/>
        </div>
        <input type="submit" id="searchSubmitButton" className="btn btn-primary btnGap" value="Search" />
      </form>
    </div>
  )
}

export default SearchBar