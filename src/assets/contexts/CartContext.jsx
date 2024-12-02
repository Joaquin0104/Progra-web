import React, { createContext, useContext, useState } from "react";

// Crear el contexto
const CartContext = createContext();

// Hook personalizado para usar el contexto del carrito
export const useCart = () => useContext(CartContext);

// Proveedor del carrito
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Estado inicial vacío

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Función para eliminar un producto por ID
  const removeFromCart = (name) => {
    setCart(cart.filter((product) => product.name !== name));
  };

  // Calcular el precio total
  const total = cart.reduce((acc, product) => acc + (product.price/100), 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
