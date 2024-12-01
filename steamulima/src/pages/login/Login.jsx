import React, { useState } from "react";
import { useAuth } from "../../assets/contexts/loginContext"
import "../../styles/login.css"; // Asegúrate de que este archivo exista
import Header from "../../layouts/header";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();

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
    setError("");
    alert(`¡Bienvenido, ${username}!`);
  };

  return (
    <div>
    <Header/>
    <div className="login-page">
      <div className="login-container">
        <h2>Inicio de Sesión</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="username">Usuario</label>
          <input
            id="username"
            type="text"
            placeholder="Ingresa tu nombre de usuario"
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
    </div>
  );
};

export default Login;
