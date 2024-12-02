import React, { useEffect, useState } from 'react';
import '../styles/globals.css'; 
import { useNavigate } from "react-router-dom";
import { useAuth } from '../assets/contexts/loginContext';

const Header = () => {


  const navigate = useNavigate();
  const {user,logout} = useAuth();

  const handleClick  = () => {
    navigate(`/`);
  }

  const handleLogout = () => {
    logout();
    alert("Se cerro Sesion")
    navigate('/')
  }
    return (
        <header class="steam-header">
        <div class="logo">
          <img src="https://store.cloudflare.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016" alt=""  onClick={handleClick}/>
        </div>
        <nav class="nav-links">
          <a href="#" class="active">TIENDA</a>
          <a href="#">COMUNIDAD</a>
          <a href="#">ACERCA DE</a>
          <a href="#">SOPORTE</a>
        </nav>
        <div class="user-actions">
          {user ? (
            <div>
              <span>{user.username}</span> 
              <button className="logout-btn" onClick={handleLogout}>
              Cerrar Sesión
            </button>
            </div>
          ) :
          (
           <button className="install-btn" onClick={() => navigate(`/login`)}>
            Iniciar Sesión
          </button>
        )}
          <span>Registrarse</span>
        </div>
      </header>    

    );
  };
  
  export default Header;
  