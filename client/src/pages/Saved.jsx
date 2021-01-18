import React from "react";
import Header from "../components/Header";
import SearchContainer from "../components/SearchContainer";
import Description from "../components/Description";
import API from "../utils/API";

const Saved = () => {
    return(
    <div className="home">
        <Header />
        <Description />
        <h1>Saved Books</h1>
        <SearchContainer />
    </div>   

    )
};

export default Saved;