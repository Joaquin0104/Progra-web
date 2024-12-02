import React from "react";
import "../styles/BuyBox.css"; // Archivo CSS para estilos

const BuyBox = ({ game }) => {
  if (!game || !game.price_overview) {
    return <div className="buybox-empty">Información del precio no disponible</div>;
  }

  const { final_formatted, discount_percent, initial_formatted } = game.price_overview;

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
      <button className="buybox-button">Agregar al carrito</button>
    </div>
  );
};

export default BuyBox;
