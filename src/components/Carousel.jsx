import React, { useEffect, useState } from 'react';
import { getFeaturedGames } from '../services/steamApi';
import { useGameNavigation } from "../utlis/navigateClick";
import '../styles/Carousel.css'; 

const Carousel = () => {
    const [featuredGames, setFeaturedGames] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [screenshots, setScreenshots] = useState([]);
    const handleGameClick = useGameNavigation();
  
    useEffect(() => {
      const fetchFeaturedGames = async () => {
        const games = await getFeaturedGames();
        
        setFeaturedGames(games);
      };
  
      fetchFeaturedGames();
    }, []);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === featuredGames.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? featuredGames.length - 1 : prevIndex - 1
      );
    };
  
    if (featuredGames.length === 0) {
      return <div>Loading...</div>;
    }
  
    const currentGame = featuredGames[currentIndex];
  
    return (
      <div className="carousel">
        <div className="carousel-content">
          <div className="carousel-image">
            <img src={currentGame.header_image} alt={currentGame.name} onClick={() => handleGameClick(currentGame)} />
          </div>
          <div className="carousel-details">
            <h3 onClick={() => handleGameClick(currentGame)}>{currentGame.name}</h3>
            <div className="screenshots-gallery">
                {currentGame.screenshots && currentGame.screenshots.length > 0 ? (
                currentGame.screenshots.slice(0, 4).map((screenshot) => (
                    <div key={screenshot.id} className="screenshot-item">
                    <img
                        src={screenshot.path_thumbnail}
                        alt={`Screenshot ${screenshot.id}`}
                    />
                    </div>
                ))
                ) : (
                <p>No hay capturas de pantalla disponibles</p>
                )}
            </div>
            <p>Ya disponible</p>
            <span className="tag">Lo más vendido</span>
            <div className="game-price">
              <span> {currentGame.price_overview?.final_formatted}</span>
            </div>
          </div>
        </div>
        <button onClick={prevSlide} className="carousel-btn left">
          &#10094;
        </button>
        <button onClick={nextSlide} className="carousel-btn right">
          &#10095;
        </button>
      </div>
    );
  };
  
  export default Carousel;