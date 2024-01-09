import React, { createContext, useState, ReactNode } from 'react';

interface CartItem {
  item: string;
  quantity: number;
  item_id: number;
}

interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (name: string, quantity: number, itemId: number) => void;
  removeFromCart: (item: string) => void;
  clearCart: () => void;
  setCartItems: (updatedItems: CartItem[]) => void;
}

export const CartContext = createContext<CartContextProps | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (name: string, quantity: number, itemId: number) => {
    const existingItem = cartItems.find((item) => item.item_id === itemId);
    if (existingItem) {
      const updatedItems = cartItems.map((item) =>
        item.item_id === itemId
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCartItems(updatedItems);
    } else {
      const newItem: CartItem = {
        item: name,
        quantity: quantity,
        item_id: itemId,
      };
      setCartItems([...cartItems, newItem]);
    }
  };

  const removeFromCart = (item: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.item !== item)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const updateCartItems = (updatedItems: CartItem[]) => {
    setCartItems(updatedItems);
  };

  const contextValue: CartContextProps = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    setCartItems: updateCartItems,
  };

  return (
    <CartContext.Provider
      value={
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        setCartItems: updateCartItems,
      }
    >
      {children}
    </CartContext.Provider>
  );
};