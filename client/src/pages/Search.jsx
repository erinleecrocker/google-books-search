import { React, useState } from "react";
import API from "../utils/API";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.css";
import SearchCard from "../components/SearchCard/SearchCard";
import '../components/SearchDisplay/SearchDisplay.css';

const Search = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const handleInputChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    API.getBooks(query)
      .then((response) => {
          console.log(response.data.items);
        setBooks(response.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="container">
      <div className="row" id="search-field">
        <div className="col-sm-12">
          <form className="form-inline">
            <input
              className="form-control w-50"
              type="search"
              placeholder="Search for your book title"
              aria-label="Search"
              name="query"
              id="inputSearch"
              value={query}
              onChange={handleInputChange}
            />
            <button
              className="btn btn-outline-success button-style"
              type="submit"
              onClick={handleSubmit}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
      <div>


        <div className="container" id="book-container">
          <div className="row">
            <h6 className="text-left">Search Books</h6>
          </div>
          {books === undefined || books.length === 0
            ? "There are no books by that title, try searching again!."
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
    </div>
  );
};

export default Search;
