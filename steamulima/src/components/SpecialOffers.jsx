import React, { useEffect, useState } from "react";
import { getFeaturedGames, getSpecialOffers } from "../services/steamApi"; // Importa la función de tu API
import "../styles/SpecialOffers.css";

const SpecialOffers = () => {
  const [games, setGames] = useState([]);
  getSpecialOffers();
  useEffect(() => {
    // Cargar juegos destacados al montar el componente
    const offerGames = async () => {
      try {
        const featuredGames = await getSpecialOffers();
        setGames(featuredGames);
      } catch (error) {
        console.error("Error fetching featured games:", error);
      }
    };
    offerGames();
  }, []);

  return (
    <div className="special-offers">
      <div className="header">
        <h2>OFERTAS ESPECIALES</h2>
        <button className="view-more">VER MÁS</button>
      </div>
      <div className="carousel">
        {games.map((game) => (
          <div key={game.steam_appid} className="offer-card">
            <img
              src={game.header_image} // La API proporciona `header_image`
              alt={game.name}
              className="offer-image"
            />
            <div className="offer-details">
              <h3>{game.name}</h3>
              <p>
                {game.short_description
                  ? game.short_description
                  : "Oferta por tiempo limitado"}
              </p>
              <div className="pricing">
                <span className="discount">-{game.price_overview.discount_percent}%</span>
                <span className="old-price">{game.price_overview.initial_formatted}</span>
                <span className="new-price">{game.price_overview.final_formatted}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
