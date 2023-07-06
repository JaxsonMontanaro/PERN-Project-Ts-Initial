import { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Shoes from "./Shoes.jsx";
import Pants from "./Pants.jsx";
import Shirts from "./Shirts.jsx";
import Cart from "./Cart.jsx";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/api/products/");
      const json = await response.json();
      setProducts(json);
    };
    fetchData();
  }, []);

  const updateCart = (itemId, count) => {
    setCart(prevCart => ({
      ...prevCart,
      [itemId]: count,
    }));
  };

  return (
    <div>
      <h1>Shop</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index} style={{ paddingBottom: "25px" }}>
            <div>{product.item_id}</div>
            <div>{product.item_name}</div>
            <div>{product.quantity_in_stock}</div>
            <div>{product.quantity_sold}</div>
            <div>{product.price}</div>
          </li>
        ))}
      </ul>
      <Shoes updateCart={updateCart} />
      <Pants updateCart={updateCart} />
      <Shirts updateCart={updateCart} />
      {Object.keys(cart).length > 0 && <Cart cart={cart} />}
    </div>
  );
}
