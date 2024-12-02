import React, { useEffect, useState } from 'react';
import '../styles/navigationbar.css'; 
import { useNavigate } from 'react-router-dom';
import { getAppList, getAppDetails } from "../services/steamApi";

const Navigationbar = () => {
    const [searchQuery, setSearchQuery] = useState(""); // Texto de búsqueda
    const [filteredGames, setFilteredGames] = useState([]); // Resultados de búsqueda
    const [allGames, setAllGames] = useState([]); // Lista completa de juegos
    const navigate = useNavigate();

    useEffect(() => {
        const fetchGames = async () => {
          try {
            const appList = await getAppList();
            setAllGames(appList); // Guarda la lista completa en el estado
          } catch (error) {
            console.error("Error fetching game list:", error);
          }
        };
    
        fetchGames();
      }, []);
    
      // Actualiza los resultados de búsqueda cuando el texto cambia
      const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
    
        if (query.length > 0) {
          const filtered = allGames.filter((game) =>
            game.name.toLowerCase().includes(query)
          );
          setFilteredGames(filtered);
        } else {
          setFilteredGames([]);
        }
      };
    
      // Navega a la página del producto al hacer clic en un juego
      const handleGameClick = async (game) => {
        try {
          navigate(`/Product/${game.appid}`); // Redirige a la página del producto
        } catch (error) {
          console.error("Error fetching game details:", error);
        }
      };
      
    return (

      <>
        
        <nav className="navigation-bar">
        <ul className="nav-links">
          <li className="dropdown">
            <a href="#">Tu tienda</a>
            <ul className="dropdown-menu">
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Recomendaciones de la comunidad</a></li>
              <li><a href="#">Vistos recientemente</a></li>
              <li><a href="#">Mentores de Steam</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">Nuevo y destacable</a>
            <ul className="dropdown-menu">
              <li><a href="#">Populares</a></li>
              <li><a href="#">Promociones y eventos</a></li>
              <li><a href="#">Noticias y actualizaciones</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">Categorías</a>
            <ul className="dropdown-menu">
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
  
        {/* Barra de búsqueda */}
        <div className="search-bar">
            <input
            type="text"
            placeholder="Buscar juegos..."
            value={searchQuery}
            onChange={handleSearch}
            />
            <button type="submit"><i className="search-icon">&#128269;</i></button>

            {/* Resultados de búsqueda */}
            {filteredGames.length > 0 && (
            <ul className="search-results">
                {filteredGames.map((game) => (
                <li
                    key={game.appid}
                    className="search-result-item"
                    onClick={() => handleGameClick(game)}
                >
                    <span className="game-name">{game.name}</span>
                </li>
                ))}
            </ul>
            )}
            </div>
        </nav>
        </>
    );
  };  
  
  export default Navigationbar;
  