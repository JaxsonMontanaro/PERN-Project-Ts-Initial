import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

const supabase = createClient(
  "https://tvwekwohafzwojqwkuaw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2d2Vrd29oYWZ6d29qcXdrdWF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgwMDg4NDAsImV4cCI6MjAwMzU4NDg0MH0.hutfQaax4HpfhD-AiORLc4027L5xIK7E64YhGFtaeNE"
);

export default function Shoes() {
  const [Shoes, setShoes] = useState({});
  const [isShoesLoading, setIsShoesLoading] = useState(true);
  const [count, setCount] = useState(0); // State for the variable

  async function getShoes() {
    const { data, error } = await supabase
      .from("Products")
      .select()
      .eq("item_id", "3");
    setShoes(data);
    setIsShoesLoading(false);
  }

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };
  const decrementCount = () => {
    setCount(prevCount => prevCount - 1);
  };

  getShoes();

  return (
    <div>
      <h1>Type of Item: {isShoesLoading ? "loading" : Shoes[0].item_name}</h1>
      {/* <h1>Item ID: {isShoesLoading ? "loading" : Shoes[0].item_id}</h1>
      <h1>
        Number available:{" "}
        {isShoesLoading ? "loading" : Shoes[0].quantity_in_stock}
      </h1>
      <h1>
        Number previously sold:{" "}
        {isShoesLoading ? "loading" : Shoes[0].quantity_sold}
      </h1> */}
      <h1>Price: ${isShoesLoading ? "loading" : Shoes[0].price}</h1>
      <button onClick={incrementCount}>Increment</button>{" "}
      <button onClick={decrementCount}>Decrement</button>{" "}
      {/* Button to increment count */}
      <p>Count: {count}</p> {/* Display the count */}
    </div>
  );
}
