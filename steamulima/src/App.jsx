import React from 'react';
import Home from './pages/home/home';
import Login from './pages/login/Login';
import Product from './pages/product/product';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from './assets/contexts/loginContext';
import Carrito from './pages/carrito/carrito';

const App = () => {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        {/* Página principal con la lista de juegos */}
        <Route path="/" element={<Home />} />

        {/* Ruta dinámica para los detalles del juego */}
        <Route path="/Product/:appId" element={<Product />} /> {/* Ruta para detalles */}
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/carrito' element={<Carrito></Carrito>}></Route>
      </Routes>
    </Router>
    </AuthProvider>

  );
};

export default App;
