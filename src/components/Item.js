import React from "react";
import "../App.css";
import "./items.css";

// consthandleCart = () => {};
const Item = (props) => {
  let { title, price, rating, imageUrl } = props;
  return (
    <div className="my-3">
      <div className="card itemCont">
        <div className="image">
          <img
            src={imageUrl}
            alt=""
            style={{ width: "250px", height: "190px" }}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">price: ${price}</p>
          <p className="card-text">rating: {rating}/5</p>
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: "250px" }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
