import React from 'react';
import Carousel from '../../components/Carousel';
import Header from '../../layouts/header';
import Navigationbar from '../../components/navigationbar';
import SpecialOffers from '../../components/SpecialOffers';
import Footer from '../../layouts/footer';
import GameList from '../../components/GameList';
import Sidebar from '../../components/Sidebar';

const Home = () => {
  return (
    <>
            <div className="conatiner-botones" style={{display: "flex", justifyContent: "flex-end", marginTop: "60px", padding: "0 20px"}}> 
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
        <aside className="left-sidebar">
          <Sidebar/>
        </aside>
        <section className="center-content">
          <Navigationbar/>
          <h1>Destacados y Recomendados</h1>
          <Carousel />
          <SpecialOffers/>
          <GameList/>
        </section>
        <aside className="right-sidebar"></aside>
      </main>
      <Footer/>
      
    </>
  );
};

export default Home;
