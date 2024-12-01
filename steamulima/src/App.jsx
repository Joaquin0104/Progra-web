import React from 'react';
import Home from './pages/home/home';
import Login from './pages/login/Login';
import Product from './pages/product/product';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Página principal con la lista de juegos */}
        <Route path="/" element={<Home />} />

        {/* Ruta dinámica para los detalles del juego */}
        <Route path="/Product/:appId" element={<Product />} /> {/* Ruta para detalles */}
      </Routes>
    </Router>
  );
};

export default App;
