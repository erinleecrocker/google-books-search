import React from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  return (
    <div className="container">
      <div className="row" id="search-field">
        <div className="col-sm-12">
          <form className="form-inline" onSubmit={props.handleOnSubmit}>
            <input
              className="form-control w-50"
              type="search"
              placeholder="Search for your book title"
              aria-label="Search"
              name="query"
              value={props.query}
              onChange={props.handleInputChange}
            />
            <button
              className="btn btn-outline-success button-style"
              type="submit"
              onClick={props.handleOnSubmit}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
