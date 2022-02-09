import React, { useEffect, useState } from "react";
import Item from "./Item";

const Store = ({ setcartItems }) => {
  const [products, setproducts] = useState([]);


  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    let url = "https://fakestoreapi.com/products";
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);a
    setproducts(parsedData);
  };

  return (
    <div className="mb-5 container">
      <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1">
        {products.map((element) => {
          // console.log(element)
          return (
            <div key={element.id}>
              <Item
                setcartItems={setcartItems}
                main={element}
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
