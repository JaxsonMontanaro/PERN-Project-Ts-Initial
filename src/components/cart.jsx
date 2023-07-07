import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://tvwekwohafzwojqwkuaw.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2d2Vrd29oYWZ6d29qcXdrdWF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgwMDg4NDAsImV4cCI6MjAwMzU4NDg0MH0.hutfQaax4HpfhD-AiORLc4027L5xIK7E64YhGFtaeNE'
);

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const handleRemove = (item) => {
    removeFromCart(item);
  };

  const handleClearCart = () => {
    clearCart();
  };

  async function updateShirts() {
    const { data, error } = await supabase
      .from('Products')
      .update({ quantity_in_stock: '90', quantity_sold: '10' })
      .eq('item_id', '3');
  }

  async function updateShoes() {
    const { data, error } = await supabase
      .from('Products')
      .update({ quantity_in_stock: '60', quantity_sold: '40' })
      .eq('item_id', '1');
  }

  async function updatePants() {
    const { data, error } = await supabase
      .from('Products')
      .update({ quantity_in_stock: '35', quantity_sold: '65' })
      .eq('item_id', '2');
  }

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((cartItem, index) => (
              <li key={index}>
                {cartItem.item}: {cartItem.quantity}
                <button onClick={() => handleRemove(cartItem.item)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button onClick={() => handleClearCart()}>Clear Cart</button>
          <button onClick={(updateShirts, updateShoes, updatePants)}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;