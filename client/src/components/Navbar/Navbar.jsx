import React from "react";

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">
          Google Books
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a  
              onClick={() => props.handlePageChange("Search")}
              className={props.currentPage === "Search" ? "nav-link active" : "nav-link"
              }>
                Search
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => props.handlePageChange("Saved")}
                className={props.currentPage === "Saved" ? "nav-link active" : "nav-link" 
              }>
                Saved
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
