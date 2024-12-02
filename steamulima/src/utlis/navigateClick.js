import { useNavigate } from "react-router-dom";

export const useGameNavigation = () => {
  const navigate = useNavigate();

  const handleGameClick = (game) => {
    if (!game || !game.steam_appid) {
      console.error("Game object is invalid or missing steam_appid.");
      return;
    }
    navigate(`/Product/${game.steam_appid}`);
  };

  return handleGameClick;
};
