import React, { useState } from "react";
import { useAuth } from "../../assets/contexts/loginContext"
import "../../styles/login.css"; 
import Header from "../../layouts/header";
import { useNavigate } from "react-router-dom";
import Footer  from "../../layouts/footer";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "") {
      setError("Por favor, ingresa un nombre de usuario.");
      return;
    }
    if (password.trim() === "") {
      setError("Por favor, ingresa tu contraseña.");
      return;
    }
    login(username); 
    alert(`¡Bienvenido, ${username}!`);
    navigate("/")
  };
  return (
    <div>
    <Header/>
    <div className="login-page">
      <div className="login-container">
        <h2>INICIO DE SESION </h2>
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="username">Usuario</label>
          <input
            id="username"
            type="text"
            placeholder="Ingresa tu Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Login;
