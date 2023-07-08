import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (name, quantity, itemId) => {
    const existingItem = cartItems.find((item) => item.item_id === itemId);
    if (existingItem) {
      const updatedItems = cartItems.map((item) =>
        item.item_id === itemId
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCartItems(updatedItems);
    } else {
      const newItem = {
        item: name,
        quantity: quantity,
        item_id: itemId,
      };
      setCartItems([...cartItems, newItem]);
    }
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.item !== item)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const updateCartItems = (updatedItems) => {
    setCartItems(updatedItems);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        setCartItems: updateCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
