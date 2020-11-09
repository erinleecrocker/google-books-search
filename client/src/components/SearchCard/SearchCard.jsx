import React, { useState } from "react";
import axios from "axios";

const SearchCard = ({ title, authors, image, description, link }) => {
  
  const [newBook] = useState({
    title: title,
    authors: authors,
    image: image,
    description: description,
    link: link,
  });

  // save function
  const handleSave = (e) => {
    axios.post("api/books", newBook).then((res) => {
      console.log(res);
      window.location.reload(false);
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
            <div className="col-sm d-flex justify-content-end">
               
                <button type="button" href={link} className="btn btn-info button-style" target="_blank" rel="noreferrer">
                    View
                </button>
    
              <button type="button" className="btn btn-success button-style" onClick={handleSave}>
                Save
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

export default SearchCard;
