import React from "react";
import { useCart } from "../assets/contexts/CartContext";
import "../styles/BuyBox.css";

const BuyBox = ({ game }) => {
  const { cart, addToCart } = useCart();

  if (!game || !game.price_overview) {
    return <div className="buybox-empty">Información del precio no disponible</div>;
  }

  const { final_formatted, discount_percent, initial_formatted } = game.price_overview;

  const isInCart = cart.some((item) => item.name === game.name);

  const handleAddToCart = () => {
    const cleanPrice = final_formatted.replace(/[^0-9,]/g, ""); 
  
    let normalizedPrice;
  
    if (cleanPrice.includes(",") && cleanPrice.includes(".")) {
      normalizedPrice = parseFloat(cleanPrice.replace(".", "").replace(",", "."));
    } else if (cleanPrice.includes(",")) {
      normalizedPrice = parseFloat(cleanPrice.replace(",", "."));
    } else {
      normalizedPrice = parseFloat(cleanPrice);
    }

    if (isNaN(normalizedPrice)) {
      console.error("Error al procesar el precio:", cleanPrice);
      return;
    }
  
   
    addToCart({
      id: game.id,
      name: game.name,
      price: normalizedPrice,
      discount: discount_percent,
      image: game.header_image || "",
    });
  
    console.log(`Juego añadido al carrito: ${game.name}, Precio: ${normalizedPrice}`);
    console.log(`Juego añadido al carrito: ${game.name}, Precio: ${game.id}`);
  };
  
  

  return (
    <div className="buybox-container">
      <div className="buybox-details">
        <h3>Comprar {game.name}</h3>
        {discount_percent > 0 && (
          <p className="buybox-promotion">
            ¡PROMOCIÓN ESPECIAL! La oferta finaliza el {game.sale_end_date || "pronto"}.
          </p>
        )}
      </div>
      <div className="buybox-price-container">
        {discount_percent > 0 && (
          <span className="buybox-discount">-{discount_percent}%</span>
        )}
        <span className="buybox-initial-price">{initial_formatted}</span>
        <span className="buybox-final-price">{final_formatted}</span>
      </div>
      <button
        className={`buybox-button ${isInCart ? "in-cart" : ""}`}
        onClick={handleAddToCart}
        disabled={isInCart}
      >
        {isInCart ? "En el carrito" : "Agregar al carrito"}
      </button>
    </div>
  );
};


export default BuyBox;
