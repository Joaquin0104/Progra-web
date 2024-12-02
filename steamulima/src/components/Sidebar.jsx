import React from "react";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Sección de tarjetas regalo */}
      <div className="gift-cards">
        <img
          src="https://tiendasarcadia.com/wp-content/uploads/2023/03/tarjetas-Steam.png" 
          className="gift-image"
        />
        <h3>Tarjetas Regalo de Steam</h3>
        <p>Regala diversión</p>
      </div>

      {/* Sección de categorías */}
      <div className="categories">
        {/* Vistos recientemente */}
        <div className="category">
          <h4>VISTOS RECIENTEMENTE</h4>
          <ul>
            <li>Monster Hunter: World</li>
          </ul>
        </div>

        {/* Recomendados */}
        <div className="category">
          <h4>RECOMENDADOS</h4>
          <ul>
            <li>Amigos</li>
            <li>Mentores</li>
            <li>Etiquetas</li>
          </ul>
        </div>

        {/* Explorar categorías */}
        <div className="category">
          <h4>EXPLORAR CATEGORÍAS</h4>
          <ul>
            <li>Lo más vendido</li>
            <li>Novedades</li>
            <li>Próximamente</li>
            <li>Ofertas</li>
            <li>Títulos de RV</li>
            <li>Compatibles con mandos</li>
            <li>Perfecto para Deck</li>
          </ul>
        </div>

        {/* Explorar por género */}
        <div className="category">
          <h4>EXPLORAR POR GÉNERO</h4>
          <ul>
            <li>Free to Play</li>
            <li>Acceso anticipado</li>
            <li>Acción</li>
            <li>Aventura</li>
            <li>Carreras</li>
            <li>Casuales</li>
            <li>Deportes</li>
            <li>Estrategia</li>
            <li>Indie</li>
            <li>Multijugador masivo</li>
            <li>Rol</li>
            <li>Simulación</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
