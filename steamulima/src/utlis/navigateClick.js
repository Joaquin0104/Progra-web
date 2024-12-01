// src/utils/navigationUtils.js
import { useNavigate } from "react-router-dom";

export const useGameNavigation = () => {
  const navigate = useNavigate();

  // Función para manejar la navegación al detalle de un juego
  const handleGameClick = (game) => {
    if (!game || !game.steam_appid) {
      console.error("Game object is invalid or missing steam_appid.");
      return;
    }
    navigate(`/Product/${game.steam_appid}`);
  };

  return handleGameClick;
};
