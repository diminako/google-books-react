import React from "react";
import Search from "../Search"

const SearchContainer = ({books, onClick}) => {
    return (
        <>
            <div className="searchContainer">
              <Search 
              books={books}
              onClick={onClick}/>
            </div>
        </>
    )
}

export default SearchContainer;