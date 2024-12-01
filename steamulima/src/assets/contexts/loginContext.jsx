import React, { createContext, useContext, useState } from "react";

// Crear el contexto
const AuthContext = createContext();

// Hook personalizado para usar el contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
};

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado para el usuario logueado

  // Función para iniciar sesión
  const login = (username) => {
    setUser({ username }); // Guarda el usuario en el estado
    console.log(`Usuario logueado: ${username}`);
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null); // Limpia el estado del usuario
    console.log("Sesión cerrada");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children} {/* Renderiza los hijos del contexto */}
    </AuthContext.Provider>
  );
};
