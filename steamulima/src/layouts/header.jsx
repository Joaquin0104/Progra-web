import React, { useEffect, useState } from 'react';
import '../styles/globals.css'; 


const Header = () => {
    return (
        <header class="steam-header">
        <div class="logo">
          <img src="https://store.cloudflare.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016" alt="" />
        </div>
        <nav class="nav-links">
          <a href="#" class="active">TIENDA</a>
          <a href="#">COMUNIDAD</a>
          <a href="#">ACERCA DE</a>
          <a href="#">SOPORTE</a>
        </nav>
        <div class="user-actions">
          <button class="install-btn">Instalar Steam</button>
          <span>iniciar sesión</span>
          <span>|</span>
          <span>idioma <i class="arrow-down"></i></span>
        </div>
      </header>
    );
  };
  
  export default Header;
  