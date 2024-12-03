import React, { createContext, useContext, useState } from "react";


const CartContext = createContext();


export const useCart = () => useContext(CartContext);


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); 

 
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  
  const removeFromCart = (name) => {
    setCart(cart.filter((product) => product.name !== name));
  };

 
  const total = cart.reduce((acc, product) => acc + (product.price/100), 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
