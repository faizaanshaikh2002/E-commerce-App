import React, { useEffect, useState } from "react";
import Item from "./Item";

const Store = (props) => {
  // constructor() {
  //     super()
  //     this.state = {
  //         products: []
  //     }
  // }
  const [products, setproducts] = useState([]);

  // async componentDidMount() {
  //     let url = "https://fakestoreapi.com/products"
  //     let data = await fetch(url)
  //     let parsedData = await data.json()
  //     console.log(parsedData)
  //     this.setState({ products: parsedData })
  // }

  const getProduct = async () => {
    let url = "https://fakestoreapi.com/products";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    // this.setState({ products: parsedData });
    setproducts(parsedData);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="container my-3">
      <div className="row">
        {products.map((element) => {
          // console.log(element)
          return (
            <div className="col-md-4" key={element.id}>
              <Item
                title={element.title}
                price={element.price}
                rating={element.rating.rate}
                imageUrl={element.image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Store;
