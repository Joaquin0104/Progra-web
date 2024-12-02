import React, { useEffect, useState } from "react";
import { getGameList } from "../services/steamApi"; 
import { useGameNavigation } from "../utlis/navigateClick";
import "../styles/GameList.css";


const GameList = () => {
  const [games, setGames] = useState([]); 
  const [selectedGame, setSelectedGame] = useState(null); 
  const handleGameClick = useGameNavigation();

  // Fetch de la lista de juegos
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const gameList = await getGameList(); 
        setGames(gameList); 
      } catch (error) {
        console.error("Error fetching game list:", error);
      }
    };
    fetchGames();
  }, []);


  const handleGameClickOn = (game) => {
    setSelectedGame(game); 
  };
  


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
            onMouseEnter={() => handleGameClickOn(game)} 
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
                {/* Verifica si hay descuento */}
                {game.price_overview?.discount_percent > 0 && (
                  <span className="discount">
                    -{game.price_overview.discount_percent}%
                  </span>
                )}
                <span className="price">
                  {game.price_overview?.final_formatted || "Precio no disponible"}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Detalles del juego seleccionado */}
      {selectedGame && (
        <div className="game-details">
          {/* Nombre del juego */}
          <h2>{selectedGame.name}</h2>

          {/* Reseñas */}
          <p>Reseñas de los usuarios en conjunto: Muy positivas</p>

          {/* Tags del juego */}
          {selectedGame.genres && (
            <div className="game-tags">
              {selectedGame.genres.map((genre, index) => (
                <span key={index} className="tag">
                  {genre.description}
                </span>
              ))}
            </div>
          )}

          {/* Capturas de pantalla */}
          {selectedGame.screenshots && (
            <div className="game-screenshots">
              {selectedGame.screenshots.map((screenshot, index) => (
                <img
                  key={index}
                  src={screenshot.path_thumbnail}
                  alt={`Screenshot ${index + 1}`}
                  className="screenshot"
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GameList;
