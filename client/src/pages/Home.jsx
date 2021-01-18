import React, {useState, useEffect} from "react";
import Description from "../components/Description";
import Header from "../components/Header";
import SearchContainer from "../components/SearchContainer";
import API from "../utils/API";

const Home = () => {
    const [books, setBooks] = useState([]);
  
    useEffect(() => {
      loadBooks();
    }, []);

    const loadBooks = () => {
      // Add code here to get all books from the database and store them using setBooks
     const getBooksList = async () => {
          const results = await API.getBooks();
          setBooks( results.data.items )
      }
      getBooksList()
    }

    //   await API.getBooks()
    //   .then(res => {
        
    //   })
    //   .catch(err => console.log(err));
    
    const handleFormSubmit = event => {
      // When the form is submitted, prevent its default behavior, get recipes update the recipes state
      event.preventDefault();
      API.getBooks(loadBooks)
        .then(res => {
          console.log(res.data)
          setBooks(res.data)
        })
        .catch(err => console.log(err));
    };
    return(
    <div className="home">
        {console.log(books)}
        <Header />
        <Description />
        <SearchContainer 
        books={books}/>
    </div>   
    )
}

export default Home;