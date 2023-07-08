import { useState, useEffect } from "react";
import Shoes from "./shoes.jsx";
import Pants from "./pants.jsx";
import Shirts from "./shirts.jsx";
import "./shop.css";

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4005/api/shop");
      const json = await response.json();
      setProducts(json);
    } catch (error) {
      console.error('Failed to fetch shop items:', error);
    }
  };

  return (
    <div id="product-list">
      <Shoes />
      <Pants />
      <Shirts />
    </div>
  );
}
