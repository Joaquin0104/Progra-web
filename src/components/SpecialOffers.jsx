import React, { useEffect, useState } from "react";
import { getSpecialOffers } from "../services/steamApi"; 
import "../styles/SpecialOffers.css";
import { useGameNavigation } from "../utlis/navigateClick";

const SpecialOffers = () => {
  const [games, setGames] = useState([]);
  const handleGameClick = useGameNavigation();

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const specialOffers = await getSpecialOffers();
        setGames(specialOffers);
      } catch (error) {
        console.error("Error fetching special offers:", error);
      }
    };
    fetchOffers();
  }, []);

  return (
    <div className="special-offers">
      <div className="header">
        <h2>OFERTAS ESPECIALES</h2>
        <button className="view-more">VER MÁS</button>
      </div>
      <div className="carousel">
        {games.map((game) => (
          <div key={game.steam_appid} className="offer-card" data-badge={game.is_live ? "DIRECTO" : ""} onClick={() => handleGameClick(game)}>
            <img
              src={game.header_image} 
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
                <span className="discount">
                  -{game.price_overview.discount_percent}%
                </span>
                <span className="old-price">
                  {game.price_overview.initial_formatted}
                </span>
                <span className="new-price">
                  {game.price_overview.final_formatted}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-indicators">
        {games.map((_, index) => (
          <div key={index} className={index === 0 ? "active" : ""}></div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
