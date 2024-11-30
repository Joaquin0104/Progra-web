import React from 'react';
import Carousel from '../../components/Carousel';
import Header from '../../layouts/header';
import Navigationbar from '../../components/navigationbar';
import SpecialOffers from '../../components/SpecialOffers';
import Footer from '../../layouts/footer';
import GameList from '../../components/GameList';

const Home = () => {
  return (
    <>
      <Header />
      <main className="main-content">
        <aside className="left-sidebar"></aside>
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
