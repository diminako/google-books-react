import React from "react";

// This file exports the Input, TextArea, and FormBtn components

const Search = ({books}) => {
  return (
    <>
      <div className="jumbotron">
        <h4 className="">Book Search</h4>
        {/* <h5>{books.books[0].id}</h5> */}
        {/* {console.log(books.books)} */}
        <div className="searchBar">
          <form action="submit">
            <input type="text" />
            <button>Search</button>
          </form>
        </div>
      </div>
    </>
  )
}
export default Search;