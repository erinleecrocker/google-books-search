import React from "react";

const BookDisplay = () => {
  return (
    <div>
      <div className="card w-75">
        <div className="card-header row">
            <div className="col-sm">
                <h5 className="card-title text-left">Book Title</h5>
                <p className="text-left">Written by Example Author</p>
            </div>
            <div className="col-sm">
                <button type="button" class="btn btn-info">View</button>
                <button type="button" class="btn btn-danger">Delete</button>
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

export default BookDisplay;
