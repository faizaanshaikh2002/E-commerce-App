import React from "react";
import "../App.css";
import "./items.css";

const Item = ({ setcartItems, main, title, price, rating, imageUrl }) => {
  const handleOnClick = () => {
    setcartItems((prev) => [...prev, main]);
  };

  return (
    <div className="mt-5 col">
      <div className="card" style={{ height: "25rem" }}>
        <div
          className="align-self-center p-2 card-image"
          style={{ height: "10rem", width: "auto" }}
        >
          <img
            className="card-img-top"
            src={imageUrl}
            alt=""
            style={{ height: "10rem", width: "inherit" }}
          />
        </div>
        <div className="card-body">
          <h5
            className="card-title"
            style={{ fontWeight: "lighter", fontFamily: "sans-serif" }}
          >
            {title}
          </h5>
          <p className="card-text mt-4" style={{ color: "green" }}>
            <strong style={{ color: "green" }}>Price </strong>: ${price}
            <br />
            <strong style={{ color: "green" }}>Rating </strong>: {rating}/5
          </p>
          {/* <p className="card-text">price: ${price}</p>
          <p className="card-text">rating: {rating}/5</p> */}
        </div>
        <button
          type="button"
          className="btn-md mb-3 col-10 mx-auto btn btn-primary"
          style={{ width: "350px" }}
          onClick={handleOnClick}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Item;
