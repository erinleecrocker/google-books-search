import React from "react";
import "./SavedDisplay.css";
import SaveCard from "../SaveCard/SaveCard";

const SavedDisplay = () => {
  return (
    <div className="container" id="book-container">
        <div className="row">
        <h6 className="text-left">Saved Books</h6>
        </div>
        <SaveCard/>
    </div>
  );
};

export default SavedDisplay;
