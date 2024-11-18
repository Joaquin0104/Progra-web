import React from 'react';
import Carousel from './components/Carousel';
import Header from './layouts/header';
import Banner from './layouts/banner';

const App = () => {
  return (
    <div>
      <Header />
      <Banner/>
      <h1>Destacados y Recomendados</h1>
      <Carousel />
    </div>
  );
};

export default App;
