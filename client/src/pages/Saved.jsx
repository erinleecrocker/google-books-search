import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "../components/SavedDisplay/SavedDisplay.css";
import SaveCard from "../components/SaveCard/SaveCard";

const Saved = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = () => {
    axios.get("/api/books").then((response) => {
      setAllBooks(response.data);
    });
  };

  return (
    <div>
      <div className="container" id="book-container">
        <div className="row">
          <h6 className="text-left">Saved Books</h6>
        </div>
        {allBooks ? (
          allBooks.map((book) => (
            <SaveCard
              title={book.title}
              authors={book.authors}
              description={book.description}
              image={book.image}
              googleLink={book.link}
              key={book._id}
              id={book._id}
              loadBooks={loadBooks}
            />
          ))
        ) : (
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3>
                  You currently have no saved books in your collection. Search
                  and save more!
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Saved;
