import React from "react";

// This file exports the Input, TextArea, and FormBtn components

const Search = ({ books, onClick }) => {

  return (
    <>
      <div className="jumbotron">
        <h4 className="">Book Search</h4>
        <div className="searchBar">
          <form
          onSubmit={onClick}
          action="submit">
            <input type="text"
            name="searchedBook" 
            id="searchedBook" />
            <button
            type="submit"
            >Search
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
export default Search;
