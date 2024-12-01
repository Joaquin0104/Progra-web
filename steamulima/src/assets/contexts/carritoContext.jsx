import { createContext, useContext, useState } from "react";

// Crear el contexto
const CartContext = createContext();

// Hook para usar el contexto
export const useCart = () => useContext(CartContext);

// Proveedor del contexto
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const total = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, total }}>
      {children}
    </CartContext.Provider>
  );
}
