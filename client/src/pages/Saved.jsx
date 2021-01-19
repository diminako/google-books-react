import React from "react";
import Description from "../components/Description";
import Header from "../components/Header";
import SavedBooks from "../components/SavedBooks";

const Saved = () => {
    return(
    <div className="home">
        <Header />
        <Description />
        <h1>Saved Books</h1>
        <SavedBooks />
    </div>   

    )
};

export default Saved;