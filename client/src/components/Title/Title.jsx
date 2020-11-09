import React from "react";
import './Title.css';

const Title = () => {
  return (
    <div id="books-title">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">(React) Google Books Search</h1>
          <p className="lead">
            Search for and Save Books of Interest
          </p>
        </div>
      </div>
    </div>
  );
};

export default Title;
