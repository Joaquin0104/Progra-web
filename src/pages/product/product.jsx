import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAppDetails } from "../../services/steamApi";
import Header from "../../layouts/header";
import Footer from "../../layouts/footer";
import Navigationbar from "../../components/navigationbar";
import GameDetails from "../../components/GameDetails";
import BuyBox from "../../components/BuyBox";
import '../../styles/Product.css';
import SystemRequirements from "../../components/SysteRequirements";

const Product = () => {
  const { appId } = useParams(); 
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const gameDetails = await getAppDetails(appId); 
        setGame(gameDetails);
      } catch (error) {
        console.error("Error fetching game details:", error);
      }
    };
    fetchGameDetails();
  }, [appId]);

  if (!game) return <div>Cargando detalles...</div>;

  return (
    <>
        <Header />
      <main className="main-content">
        <aside className="left-sidebar"></aside>
        <section className="center-content">
            <Navigationbar/>
            <div className="product-page">
                {game ? <GameDetails game={game} />: <p>Cargando detalles del juego...</p>}
                <BuyBox game={game}/>
                <div className="game-about">
                  <h2>Acerca del juego</h2>
                  <div
                    className="about-the-game-content"
                    dangerouslySetInnerHTML={{ __html: game.about_the_game || "Información no disponible" }}
                  />
                </div>
            </div>
            <SystemRequirements requirements={game.pc_requirements}/>
        </section>
        <aside className="right-sidebar"></aside>
      </main>
      <Footer/>
    </>
  );
};

export default Product;
