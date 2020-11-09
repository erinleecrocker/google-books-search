import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import Search from "../pages/Search";
import Saved from "../pages/Saved";


class SearchContainer extends Component {
  state = {
    currentPage: "Search"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Search") {
      return <Search />;
    } else if (this.state.currentPage === "Saved") {
      return <Saved />;
    }
  };

  render() {
    return (
      <div>
        <Navbar
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default SearchContainer;