import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAppDetails } from "../../services/steamApi";

const Product = () => {
  const { appId } = useParams(); // Obtiene el ID del juego desde la URL
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const gameDetails = await getAppDetails(appId); // Llama a la API para obtener detalles
        setGame(gameDetails);
      } catch (error) {
        console.error("Error fetching game details:", error);
      }
    };
    fetchGameDetails();
  }, [appId]);

  if (!game) return <div>Cargando detalles...</div>;

  return (
    <div className="product-page">
      <h1>{game.name}</h1>
      <img src={game.header_image} alt={game.name} />
      <p>{game.short_description}</p>
      <div className="game-tags">
        {game.genres?.map((genre, index) => (
          <span key={index} className="tag">
            {genre.description}
          </span>
        ))}
      </div>
      <div className="game-screenshots">
        {game.screenshots?.map((screenshot, index) => (
          <img
            key={index}
            src={screenshot.path_thumbnail}
            alt={`Screenshot ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
