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
        <div className="conatiner-botones" style={{display: "flex", justifyContent: "flex-end", marginTop: "20px", padding: "0 20px"}}> 
          <button className="boton1" style={{
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            padding: "10px 20px",
            marginLeft: "10px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            transition: "background-color 0.3s ease"}}>Lista de Desedos</button>
          <button className="boton2" style={{
            backgroundColor: "green",
            color: "white ",
            border: "2px solid green",
            padding: "10px 20px",
            marginLeft: "10px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            transition: "background-color 0.3s ease"
          }}>Carrito</button>
        </div>
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
