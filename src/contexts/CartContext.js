import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item, quantity, item_id) => { // Add 'item_id' parameter
    setCartItems((prevItems) => [...prevItems, { item, quantity, item_id }]); // Include 'item_id'
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.item !== item)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const addItems = (item, price, quantity, item_id) => { // Add 'item_id' parameter
    setCartItems((prevItems) => [...prevItems, { item, price, quantity, item_id }]); // Include 'item_id'
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, addItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

