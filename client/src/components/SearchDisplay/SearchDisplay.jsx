import React, { useState } from "react";
import "./SearchDisplay.css";
import API from "../../utils/API";
import SearchCard from "../SearchCard/SearchCard";
import SearchBar from "../SearchBar/SearchBar";

const SearchDisplay = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const handleInputChange = (event) => {
    event.preventDefault();
    let { value } = event.target;

    setQuery(value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (query === "") {
      console.log("You must enter a book title to search");
      return;
    }
    API.getBook(query)
      .then((result) => {
        // console.log(result.data);
        setBooks(result.data.items);
        console.log(result.data.items);
        setQuery("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
        <div className="row search-row">
            <SearchBar/>
        </div>
      
        <div className="container" id="book-container">
      <div className="row">
        <h6 className="text-left">Search Books</h6>
      </div>
      {books === undefined || books.length === 0
        ? "There are no books by that title in our collection."
        : books.map((book) => {
            return (
              <SearchCard
                key={book.id}
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors}
                image={book.volumeInfo.imageLinks.thumbnail}
                description={book.volumeInfo.description}
                link={book.volumeInfo.infoLink}
              />
            );
          })}
    </div>
    </div>  
    
  );
};

export default SearchDisplay;
