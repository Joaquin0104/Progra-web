import React from "react";
import { useCart } from "../assets/contexts/CartContext";
import "../styles/Cart.css";

const CartD = () => {
  const { cart, removeFromCart, total } = useCart();

  return (
    <div className="cart-container">
      <h2>Tu carrito</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>Precio: S/.{(item.price/100).toFixed(2)}</p>
                </div>
                <button onClick={() => removeFromCart(item.name)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3>Total: S/.{total.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default CartD;
