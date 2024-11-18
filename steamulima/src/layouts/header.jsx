import React, { useEffect, useState } from 'react';
import '../styles/globals.css'; 
import logo from '../assets/images/steam.png';


const Header = () => {
    return (
      <>
        {/* Header principal */}
        <header className="header">
          <div className="logo">
            <img src={logo} alt="Logo Steam" />
          </div>
          <nav className="nav">
            <a href="#">TIENDA</a>
          </nav>
          <div className="actions">
            <button className="install-btn">Instalar Steam</button>
            <a href="#">Iniciar sesión</a>
          </div>
        </header>
  
        <nav className="sub-nav">
          <a href="#">Tu tienda</a>
          <a href="#">Nuevo y destacable</a>
  
          {/* Dropdown para Categorías */}
          <div className="dropdown">
            <a href="#" className="dropdown-btn">Categorías</a>
            <div className="dropdown-content">
              <div className="dropdown-column">
                <h4>Géneros</h4>
                <ul>
                  <li>Acción</li>
                  <li>Arcade y ritmo</li>
                  <li>Disparos en primera persona</li>
                  <li>Disparos en tercera persona</li>
                  <li>Hack and slash</li>
                </ul>
              </div>
              <div className="dropdown-column">
                <h4>Temáticas</h4>
                <ul>
                  <li>Anime</li>
                  <li>Ciencia ficción</li>
                  <li>Detectives y misterio</li>
                  <li>Espacio</li>
                  <li>Mundo abierto</li>
                </ul>
              </div>
            </div>
          </div>
  
          <a href="#">Tienda de puntos</a>
          <a href="#">Noticias</a>
          <a href="#">Laboratorios</a>
  
          {/* Barra de búsqueda */}
          <div className="search-bar">
            <input type="text" placeholder="Buscar" />
          </div>
        </nav>
      </>
    );
  };
  
  export default Header;
  