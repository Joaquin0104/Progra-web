import React from "react";
import "../styles/GameDetails.css"; // Estilo del componente

const GameDetails = ({ game }) => {
  if (!game) {
    return <div className="game-details-empty">Selecciona un juego para ver los detalles</div>;
  }

  return (
    <div className="game-details-container">
      {/* Encabezado del juego */}
      <div className="game-header">
        <h1>{game.name}</h1>
        <p className="game-release-date">Fecha de lanzamiento: {game.release_date?.date || "Desconocida"}</p>
      </div>

      {/* Video e imágenes */}
      <div className="game-media">
        {game.movies && game.movies.length > 0 && (
          <video controls className="game-video">
            <source src={game.movies[0].mp4?.max} type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
        )}
        <div className="game-screenshots">
          {game.screenshots?.map((screenshot, index) => (
            <img
              key={index}
              src={screenshot.path_thumbnail}
              alt={`Screenshot ${index + 1}`}
              className="game-screenshot"
            />
          ))}
        </div>
      </div>

      {/* Descripción del juego */}
      <div className="game-description">
        <p>{game.short_description || "No hay descripción disponible"}</p>
      </div>

      {/* Etiquetas y detalles adicionales */}
      <div className="game-details-info">
        <div className="game-tags">
          <h3>Etiquetas:</h3>
          {game.genres?.map((genre, index) => (
            <span key={index} className="game-tag">
              {genre.description}
            </span>
          ))}
        </div>
        <div className="game-ratings">
          <p>Reseñas recientes: {game.reviews?.recent || "N/A"}</p>
          <p>Reseñas generales: {game.reviews?.overall || "N/A"}</p>
        </div>
      </div>

      {/* Precio y desarrollador */}
      <div className="game-pricing">
        <p className="game-price">
          {game.price_overview?.discount_percent > 0 && (
            <span className="game-discount">-{game.price_overview.discount_percent}%</span>
          )}
          <span>{game.price_overview?.final_formatted || "Precio no disponible"}</span>
        </p>
        <p>Desarrollador: {game.developers?.join(", ") || "No disponible"}</p>
        <p>Editor: {game.publishers?.join(", ") || "No disponible"}</p>
      </div>
    </div>
  );
};

export default GameDetails;
