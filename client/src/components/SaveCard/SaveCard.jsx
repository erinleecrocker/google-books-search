import React from "react";

const SaveCard = ({ title, authors, image, description, link }) => {

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
              <form action={link}> 
                <button type="button" className="btn btn-info button-style">
                    View
                </button>
              </form>
              <button type="button" className="btn btn-danger button-style">
                Delete
              </button>
            </div>
          </div>
        </div>
        <div className="card-body row">
          <div className="col-sm-2">
            <img src={image} alt="image" />
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
