import React, { createContext, useContext, useState } from "react";
const AuthContext = createContext();
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
};
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (username) => {
    setUser({ username}); 
    console.log(`Usuario logueado: ${username}`);
  };
  const logout = () => {
    setUser(null);
    console.log("Sesión cerrada");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children} 
    </AuthContext.Provider>
  );
};
