import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const handleRemove = (item) => {
    removeFromCart(item);
  };

  const handleClearCart = () => {
    clearCart();
  };

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
          <button>Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
