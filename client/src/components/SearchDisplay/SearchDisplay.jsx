import React from "react";
import "./SearchDisplay.css";

const SearchDisplay = () => {
  return (
    <div className="container" id="book-container">
        <div className="row">
        <h6 className="text-left">Search Books</h6>
        </div>
      <div className="card">
        <div className="card-header">
            <div className="row">
                <div className="col-sm">
                    <h5 className="card-title text-left">Book Title</h5>
                    <p className="text-left">Written by Example Author</p>
                </div>
                <div className="col-sm d-flex justify-content-end">
                    <button type="button" className="btn btn-info button-style">View</button>
                    <button type="button" className="btn btn-success button-style">Save</button>
                </div>
                </div>
           
        </div>
        <div className="card-body row">
            <div className="col-sm-2">
                <img src="https://via.placeholder.com/150" alt="image"/>
            </div>
            <div className="col-sm-10">
                <p className="card-text text-left">
                    With supporting text below as a natural lead-in to additional
                    content.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDisplay;
