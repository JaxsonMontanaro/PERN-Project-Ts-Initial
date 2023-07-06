import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

const supabase = createClient(
  "https://tvwekwohafzwojqwkuaw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2d2Vrd29oYWZ6d29qcXdrdWF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgwMDg4NDAsImV4cCI6MjAwMzU4NDg0MH0.hutfQaax4HpfhD-AiORLc4027L5xIK7E64YhGFtaeNE"
);

export default function Shirts({ updateCart }) {
  const [Shirts, setShirts] = useState({});
  const [isShirtsLoading, setIsShirtsLoading] = useState(true);
  const [count, setCount] = useState(0); // State for the variable

  const addToCart = () => {
    updateCart("1", count);
    // Optionally, you can reset the count to 0 after adding to the cart
    setCount(0);
  };

  async function getShirts() {
    const { data, error } = await supabase
      .from("Products")
      .select()
      .eq("item_id", "1");
    setShirts(data);
    setIsShirtsLoading(false);
  }

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
    updateCart("2", count + 1);
  };
  const decrementCount = () => {
    setCount(prevCount => prevCount - 1);
    updateCart("2", count - 1);
  };

  getShirts();

  return (
    <div>
      <h1>Type of Item: {isShirtsLoading ? "loading" : Shirts[0].item_name}</h1>
      <h1>Price: ${isShirtsLoading ? "loading" : Shirts[0].price}</h1>
      <button onClick={incrementCount}>Increment</button>{" "}
      <button onClick={decrementCount}>Decrement</button>{" "}
      <button onClick={addToCart}>Add to Cart</button>{" "}
      <p>Count: {count}</p>
    </div>
  );
}
