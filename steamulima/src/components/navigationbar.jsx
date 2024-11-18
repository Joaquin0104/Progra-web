import React, { useEffect, useState } from 'react';
import '../styles/navigationbar.css'; 


const Navigationbar = () => {
    return (
        <nav class="navigation-bar">
            <ul class="nav-links">
                <li class="dropdown">
                <a href="#">Tu tienda</a>
                <ul class="dropdown-menu">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Recomendaciones de la comunidad</a></li>
                    <li><a href="#">Vistos recientemente</a></li>
                    <li><a href="#">Mentores de Steam</a></li>
                </ul>
                </li>
                <li class="dropdown">
                <a href="#">Nuevo y destacable</a>
                <ul class="dropdown-menu">
                    <li><a href="#">Populares</a></li>
                    <li><a href="#">Promociones y eventos</a></li>
                    <li><a href="#">Noticias y actualizaciones</a></li>
                </ul>
                </li>
                <li class="dropdown">
                <a href="#">Categorías</a>
                <ul class="dropdown-menu">
                    <li><strong>Miscelánea</strong></li>
                    <li><a href="#">Free to Play</a></li>
                    <li><a href="#">Demos</a></li>
                    <li><a href="#">Acceso anticipado</a></li>
                    <li><strong>Géneros</strong></li>
                    <li><a href="#">Acción</a></li>
                    <li><a href="#">Rol</a></li>
                    <li><a href="#">Estrategia</a></li>
                    <li><strong>Temáticas</strong></li>
                    <li><a href="#">Anime</a></li>
                    <li><a href="#">Mundo abierto</a></li>
                    <li><a href="#">Terror</a></li>
                </ul>
                </li>
                <li><a href="#">Tienda de puntos</a></li>
                <li><a href="#">Noticias</a></li>
                <li><a href="#">Laboratorios</a></li>
            </ul>
            <div class="search-bar">
                <input type="text" placeholder="buscar" />
                <button type="submit"><i class="search-icon">&#128269;</i></button>
            </div>
        </nav>

    );
  };
  
  export default Navigationbar;
  