import React, { useEffect, useState } from "react";
import { getGameList } from "../services/steamApi"; // Importa la nueva función
import "../styles/GameList.css";

const GameList = () => {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const gameList = await getGameList(); // Llama a la nueva función
        setGames(gameList);
      } catch (error) {
        console.error("Error fetching game list:", error);
      }
    };
    fetchGames();
  }, []);

  return (
    <div className="game-list-container">
      {/* Lista de juegos */}
      <div className="game-list">
        <h2>Novedades y tendencias</h2>
        {games.map((game) => (
          <div
            key={game.id}
            className={`game-item ${
              selectedGame && selectedGame.id === game.id ? "selected" : ""
            }`}
            onClick={() => handleGameClick(game)}
          >
            <img src={game.header_image} alt={game.name} className="game-thumbnail" />
            <div className="game-info">
              <h3>{game.name}</h3>
              <p className="game-genres">
                {game.genres && game.genres.length > 0
                ? game.genres.map((genre) => genre.description).join(", ")
                : "Sin género disponible"}
              </p>
              <p className="game-price">
                {game.discount_percent > 0 && (
                  <span className="discount">-{game.price_overview.discount_percent}%</span>
                )}
                <span className="price">{game.final_price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Detalles del juego seleccionado */}
      {selectedGame && (
        <div className="game-details">
          <h2>{selectedGame.name}</h2>
          <p>Reseñas de los usuarios en conjunto: Muy positivas</p>
          <div className="game-tags">
            {selectedGame.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="game-screenshots">
            {selectedGame.screenshots.map((header_image, index) => (
              <img
                key={index}
                src={header_image}
                alt={`Screenshot ${index + 1}`}
                className="screenshot"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GameList;
