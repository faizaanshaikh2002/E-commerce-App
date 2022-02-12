import React, { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Store from "./components/Store";

function App() {
  const [cartItems, setcartItems] = useState([]);

  React.useEffect(() => {
    console.log("Updated: ", cartItems)
  }, [cartItems])

  return (
    <>
      <Navbar cartItems={cartItems} />
      <Modal cartItems={cartItems} setcartItems={setcartItems} />
      <Store setcartItems={setcartItems} />
    </>
  );
}

export default App;
