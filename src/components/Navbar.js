import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"

const Navbar = ({ cartItems }) => {
  // setnumbers(cartItems.length)

  // React.useEffect(() => {
  // }, [cartItems.length, setnumbers])

  // const handleOnClick = () => {
  //   console.log("Updated: ", cartItems)
  //   (cartItems.length)
  // }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <span style={{ paddingLeft: "90px", fontSize: "30px" }}>
          SkipKart
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse  d-flex justify-content-end"
          id="navbarSupportedContent"
        >
          <div className="d-flex" style={{ paddingRight: "95px" }} >
            {/* <button style={{ outline: 'none', border: 'none', backgroundColor: "#212529", color: "white" }}><i className="bi bi-cart" style={{ fontSize: "25px", padding: '2px' }}></i>Cart</button> */}
            <button type="button" className="btn btn-primary shadow-none" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ outline: 'none', border: 'none', backgroundColor: "#212529", color: "white" }}><i className="bi bi-cart" style={{ fontSize: "25px", padding: '2px' }}></i>
              Cart
            </button>
          </div>
        </div>
      </div>
    </nav >
  );
};

export default Navbar;
