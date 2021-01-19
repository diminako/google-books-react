import React, {useState, useEffect} from "react";
import Description from "../components/Description";
import Header from "../components/Header";
import SearchContainer from "../components/SearchContainer";
import Discovered from "../components/Discovered";

import API from "../utils/API";

const Home = () => {
    const [books, setBooks] = useState([]);
  
    useEffect(() => {
      loadBooks();
    }, []);

    const loadBooks = () => {

     const getBooksList = async () => {
          const results = await API.getBooks();
          setBooks( results.data.items )
      }
      getBooksList()
    }

    const handleFormSubmit = event => {
      event.preventDefault();
      API.getBook(event.target.searchedBook.value.split(" ").join(""))
        .then(res => {
          console.log(res.data.items)
          setBooks(res.data.items)
        })
        .catch(err => console.log(err));
    };

    return(
        <div className="home">
        <Header />
        <Description />
        <SearchContainer 
        onClick={handleFormSubmit}
        books={books}/>
        <Discovered 
        books={books}/>
    </div>   
    )
}

export default Home;