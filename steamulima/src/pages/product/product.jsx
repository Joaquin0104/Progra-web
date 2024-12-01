import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAppDetails } from "../../services/steamApi";
import Header from "../../layouts/header";
import Footer from "../../layouts/footer";
import Navigationbar from "../../components/navigationbar";
import GameDetails from "../../components/GameDetails";

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
    <>
        
        <Header />
      <main className="main-content">
        <aside className="left-sidebar"></aside>
        <section className="center-content">
            <Navigationbar/>
            <div className="product-page">
                {game ? <GameDetails game={game} /> : <p>Cargando detalles del juego...</p>}
            </div>
        </section>
        <aside className="right-sidebar"></aside>
      </main>
      <Footer/>
    </>
  );
};

export default Product;
