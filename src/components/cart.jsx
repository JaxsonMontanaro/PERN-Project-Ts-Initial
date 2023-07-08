import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { createClient } from '@supabase/supabase-js';
import './cart.css'
import sadCart from '../assets/sad-cart.png'
import {BsTrashFill} from 'react-icons/bs';

const supabase = createClient(
  'https://tvwekwohafzwojqwkuaw.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2d2Vrd29oYWZ6d29qcXdrdWF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgwMDg4NDAsImV4cCI6MjAwMzU4NDg0MH0.hutfQaax4HpfhD-AiORLc4027L5xIK7E64YhGFtaeNE'
);

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const [itemPrices, setItemPrices] = useState({});

  useEffect(() => {
    fetchItemPrices();
  }, []);

  const fetchItemPrices = async () => {
    try {
      const { data: products, error } = await supabase.from('Products').select('item_id, price, quantity_in_stock, quantity_sold');
      if (products) {
        const prices = {};
        products.forEach((product) => {
          prices[product.item_id.toString()] = {
            price: product.price,
            quantity_in_stock: product.quantity_in_stock,
            quantity_sold: product.quantity_sold,
          };
        });
        setItemPrices(prices);
      }
    } catch (error) {
      console.error('Failed to fetch item prices:', error);
    }
  };

  const handleRemove = (item) => {
    removeFromCart(item);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const updateCartItem = async (cartItem) => {
    try {
      const itemId = cartItem.item_id;
      const item = itemPrices[itemId];
      if (item) {
        const { quantity_in_stock, quantity_sold } = item;
        const updatedQuantityInStock = quantity_in_stock - cartItem.quantity;
        const updatedQuantitySold = quantity_sold + cartItem.quantity;

        await supabase
          .from('Products')
          .update({ quantity_in_stock: updatedQuantityInStock, quantity_sold: updatedQuantitySold })
          .eq('item_id', itemId);
      }
    } catch (error) {
      console.error('Failed to update cart item:', error);
    }
  };

  const updateCartItemsInDatabase = async () => {
    try {
      await Promise.all(cartItems.map(updateCartItem));
    } catch (error) {
      console.error('Failed to update cart items:', error);
    }
  };

  const calculateItemTotal = (item) => {
    const price = itemPrices[item.item_id?.toString()]?.price;
    return price ? price * item.quantity : 0;
  };

  const calculateCartTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      const price = itemPrices[item.item_id?.toString()]?.price;
      if (price) {
        total += price * item.quantity;
      }
    });
    return total;
  };

  const handleCheckout = async () => {
    await updateCartItemsInDatabase();
    clearCart();
    // Additional actions after updating the database
    // Redirect to success page or display a success message
  };

  return (
    <div id="cart">
      {cartItems.length === 0 ? (
        <div id="empty-cart">
          <h1>Your cart is empty.</h1>
          <img src={sadCart} alt="sad cart" />
        </div>
      ) : (
        <>
          <ul id="cart-items">
            {cartItems.map((cartItem, index) => (
              <li key={index}>
                <h2>{cartItem.item}</h2>
                <h3>{cartItem.quantity}</h3>
                <h3>${calculateItemTotal(cartItem)}</h3>
                <i className="delete-btn" onClick={() => handleRemove(cartItem.item)}>
                  <BsTrashFill />
                </i>
              </li>
            ))}
          </ul>
          <div id="cart-total">
            <h2>Total: ${calculateCartTotal()}</h2>
          </div>
          <button onClick={() => handleClearCart()}>Clear Cart</button>
          <button onClick={() => handleCheckout()}>Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;