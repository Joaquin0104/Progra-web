import React from 'react';
import Carousel from './components/Carousel';
import Header from './layouts/header';

const App = () => {
  return (
    <div>
      <Header />
      <h1>Destacados y Recomendados</h1>
      <Carousel />
    </div>
  );
};

export default App;
