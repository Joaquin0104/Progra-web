import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img
            src="https://store.fastly.steamstatic.com/public/images/footerLogo_valve_new.png" 
            alt="Valve"
          />
        </div>
        <p>
          © 2024 Valve Corporation. Todos los derechos reservados. Todas las
          marcas registradas pertenecen a sus respectivos dueños en EE. UU. y
          otros países. Todos los precios incluyen IVA (donde sea aplicable).{" "}
          <a href="#">Política de Privacidad</a> | <a href="#">Información legal</a> |{" "}
          <a href="#">Acuerdo de Suscriptor a Steam</a> | <a href="#">Reembolsos</a> |{" "}
          <a href="#">Cookies</a>
        </p>
      </div>
      <div className="footer-bottom">
        <ul className="footer-links">
          <li><a href="#">Acerca de Valve</a></li>
          <li><a href="#">Empleo</a></li>
          <li><a href="#">Steamworks</a></li>
          <li><a href="#">Distribución de Steam</a></li>
          <li><a href="#">Soporte</a></li>
          <li><a href="#">Tarjetas de regalo</a></li>
          <li><a href="#">Steam</a></li>
          <li><a href="#">@steam</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
