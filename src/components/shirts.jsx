import { createClient } from '@supabase/supabase-js';
import { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext'; // Import CartContext

const supabase = createClient(
  'https://tvwekwohafzwojqwkuaw.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2d2Vrd29oYWZ6d29qcXdrdWF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgwMDg4NDAsImV4cCI6MjAwMzU4NDg0MH0.hutfQaax4HpfhD-AiORLc4027L5xIK7E64YhGFtaeNE'
);

export default function Shirts({ updateCart }) {
  const [Shirts, setShirts] = useState({});
  const [isShirtsLoading, setIsShirtsLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [updatedCount, setUpdatedCount] = useState(0);

  const { addToCart } = useContext(CartContext); // Access addToCart function from CartContext

  async function getShirts() {
    const { data, error } = await supabase
      .from('Products')
      .select()
      .eq('item_id', '1');
    setShirts(data);
    setIsShirtsLoading(false);
  }

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setUpdatedCount(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCount(updatedCount);
    getShirts();
    addToCart(Shirts[0].item_name, updatedCount); // Add selected item and quantity to cart
  };

  getShirts();

  return (
    <div>
      <h1>Type of Item: {isShirtsLoading ? 'loading' : Shirts[0].item_name}</h1>
      <h1>Price: ${isShirtsLoading ? 'loading' : Shirts[0].price}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Quantity:
          <input
            type='number'
            value={updatedCount}
            onChange={handleInputChange}
          />
        </label>
        <button type='submit'>Update cart</button>
      </form>{' '}
      <p>Cart: {count}</p>
    </div>
  );
}
