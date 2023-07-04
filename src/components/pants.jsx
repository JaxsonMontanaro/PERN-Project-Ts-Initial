import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

const supabase = createClient(
  "https://tvwekwohafzwojqwkuaw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2d2Vrd29oYWZ6d29qcXdrdWF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgwMDg4NDAsImV4cCI6MjAwMzU4NDg0MH0.hutfQaax4HpfhD-AiORLc4027L5xIK7E64YhGFtaeNE"
);

export default function Pants() {
  const [Pants, setPants] = useState({});
  const [isPantsLoading, setIsPantsLoading] = useState(true);
  const [count, setCount] = useState(0); // State for the variable

  async function getPants() {
    const { data, error } = await supabase
      .from("Products")
      .select()
      .eq("item_id", "2");
    setPants(data);
    setIsPantsLoading(false);
  }

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };
  const decrementCount = () => {
    setCount(prevCount => prevCount - 1);
  };

  getPants();

  return (
    <div>
      <h1>Type of Item: {isPantsLoading ? "loading" : Pants[0].item_name}</h1>
      {/* <h1>Item ID: {isPantsLoading ? "loading" : Pants[0].item_id}</h1>
      <h1>
        Number available:{" "}
        {isPantsLoading ? "loading" : Pants[0].quantity_in_stock}
      </h1>
      <h1>
        Number previously sold:{" "}
        {isPantsLoading ? "loading" : Pants[0].quantity_sold}
      </h1> */}
      <h1>Price: ${isPantsLoading ? "loading" : Pants[0].price}</h1>
      <button onClick={incrementCount}>Increment</button>{" "}
      <button onClick={decrementCount}>Decrement</button>{" "}
      {/* Button to increment count */}
      <p>Count: {count}</p> {/* Display the count */}
    </div>
  );
}
