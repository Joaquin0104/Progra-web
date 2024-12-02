import React from "react";
import '../styles/UserBag.css'
import { useNavigate } from 'react-router-dom';

const UserBag = () => {
  const navigate = useNavigate();
  const handleClickCarrito  = () => {
    navigate(`/Cart`);
  }
  return (
    <div className="conatiner-botones"> 
        <button className="boton1">Lista de Desedos</button>
        <button className="boton2" onClick={handleClickCarrito}>Carrito</button>
    </div>
  )};

  export default UserBag;