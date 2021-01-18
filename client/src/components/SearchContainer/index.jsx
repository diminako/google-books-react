import React, { useState } from "react";
import Search from "../Search"

const SearchContainer = ({books}) => {
    return (
        <>
            <div className="searchContainer">
              <Search 
              books={books}/>
            </div>
        </>
    )
}

export default SearchContainer;