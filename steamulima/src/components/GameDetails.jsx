import React, { useState } from "react";
import "../styles/GameDetails.css"; 

const GameDetails = ({ game }) => {
  if (!game) {
    return <div className="game-details-empty">Selecciona un juego para ver los detalles</div>;
  }

  const [selectedIndex, setSelectedIndex] = useState(0);

 
  const mediaItems = [
    ...(game.movies?.map((movie) => ({ type: "movie", src: movie.mp4?.max })) || []),
    ...(game.screenshots?.map((screenshot) => ({ type: "screenshot", src: screenshot.path_thumbnail })) || []),
  ];

  if (mediaItems.length === 0) {
    return <p className="media-empty">No hay contenido multimedia disponible.</p>;
  }

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  return (
    <>
    {/* Encabezado del juego */}
    <div className="game-header">
        <h1>{game.name}</h1>
      </div>
    <div className="game-details-container">
      {/* Selección de Multimedia */}
      <div className="media-selector-container">
        {/* Visualización principal */}
        <div className="media-display">
          {mediaItems[selectedIndex].type === "movie" ? (
            <video controls className="media-video" key={selectedIndex}>
              <source src={mediaItems[selectedIndex].src} type="video/mp4" />
              Tu navegador no soporta videos.
            </video>
          ) : (
            <img
              src={mediaItems[selectedIndex].src}
              alt={`Media ${selectedIndex + 1}`}
              className="media-image"
            />
          )}
        </div>

        {/* Miniaturas */}
        <div className="media-thumbnails">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className={`thumbnail ${index === selectedIndex ? "active" : ""}`}
              onClick={() => handleSelect(index)}
            >
              {item.type === "movie" ? (
                <div className="thumbnail-video">
                  <span className="play-icon">▶</span>
                  <video muted>
                    <source src={item.src} type="video/mp4" />
                  </video>
                </div>
              ) : (
                <img
                  src={item.src}
                  alt={`Thumbnail ${index + 1}`}
                  className="thumbnail-image"
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="DescriptionContainer">
      {/* Descripción del juego */}
      <img src={game.header_image} alt="" className="header_image" />
      <div className="game-description">
        <p>{game.short_description || "No hay descripción disponible"}</p>
      </div>
      <div className="game-ratings">
          <p>Recomendado por: {game.recommendations?.total || "N/A"} usuarios</p>
          <p>Metacritic: {game.metacritic?.score || "N/A"}</p>
      </div>
      <p className="game-release-date">
          Fecha de lanzamiento: {game.release_date?.date || "Desconocida"}
      </p>
      <div className="game-pricing">
        <p>Desarrollador: {game.developers?.join(", ") || "No disponible"}</p>
        <p>Editor: {game.publishers?.join(", ") || "No disponible"}</p>
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
      </div>
    </div>
    </div>
    </>
  );
};

export default GameDetails;

