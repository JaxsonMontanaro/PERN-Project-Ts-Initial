import { useState, useEffect } from "react";
import Shoes from "./shoes.jsx";
import Pants from "./pants.jsx";
import Shirts from "./shirts.jsx";
import "./shop.css";

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/api/products/");
      const json = await response.json();
      setProducts(json);
    };
    fetchData();
  }, []);

  return (
    <div id="product-list">
      {products.map((product, index) => (
        <div key={index} style={{ paddingBottom: "25px" }}>
          <div>{product.item_id}</div>
          <div>{product.item_name}</div>
          <div>{product.quantity_in_stock}</div>
          <div>{product.quantity_sold}</div>
          <div>{product.price}</div>
        </div>
      ))}
      <Shoes />
      <Pants />
      <Shirts />
    </div>
  );
}
