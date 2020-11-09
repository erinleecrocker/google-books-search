import React from "react";
import axios from "axios";

const SaveCard = ({ title, authors, image, description, link, id, loadBooks }) => {
  
  const handleDelete = (e) => {
    console.log(e.target)
  axios.delete(`api/books/${e.target.id}`).then((res) => {
    console.log(res);
    loadBooks();
  }).catch((err) => console.log(err));
};
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-sm">
              <h5 className="card-title text-left">{title}</h5>
              <p className="text-left">{authors}</p>
            </div>
            <div className="col-sm d-flex justify-content-end align-self-center">
                <a href={link} target="_blank" rel="noreferrer">
                <button type="button" className="btn btn-info button-style">
                    View
                </button>
                </a>
                <button type="button" className="btn btn-danger button-style"id={id} onClick={handleDelete}>
                Delete
                </button>
            </div>
          </div>
        </div>
        <div className="card-body row">
          <div className="col-sm-2">
            <img src={image} alt={title} />
          </div>
          <div className="col-sm-10">
            <p className="card-text text-left">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveCard;
