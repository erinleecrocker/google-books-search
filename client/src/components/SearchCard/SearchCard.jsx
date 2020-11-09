import React from "react";

const SearchCard = (props) => {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-sm">
              <h5 className="card-title text-left">{props.title}</h5>
              <p className="text-left">{props.authors}</p>
            </div>
            <div className="col-sm d-flex justify-content-end">
                <form action={props.link}> 
                <button type="button" className="btn btn-info button-style" onClick={props.info}>
                    View
                </button>
                </form>
              <button type="button" className="btn btn-success button-style" onClick={props.save}>
                Save
              </button>
            </div>
          </div>
        </div>
        <div className="card-body row">
          <div className="col-sm-2">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="col-sm-10">
            <p className="card-text text-left">
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
