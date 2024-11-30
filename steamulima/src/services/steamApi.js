import axios from 'axios';
const STORE_URL = 'https://store.steampowered.com/api';

const BASE_URL = '/store-api/api';

export const getAppDetails = async (appId) => {
  try {
    const response = await axios.get(`${BASE_URL}/appdetails?appids=${appId}&cc=pe&l=spanish&currency=pen`);
    return response.data[appId].data;
  } catch (error) {
    console.error(`Error fetching details for appId ${appId}:`, error);
    throw error;
  }
};
export const getAppList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/ISteamApps/GetAppList/v2/`);
    return response.data.applist.apps;
  } catch (error) {
    console.error('Error 404 app list:', error);
    throw error;
  }
};


// Lista simulada de juegos destacados
export const getFeaturedGames = async () => {
  const featuredGameIds = [1091500, 2124490, 2933620, 990080, 2183900]; // IDs de juegos populares
  const promises = featuredGameIds.map((id) => getAppDetails(id));
  return Promise.all(promises);
};

// Lista simulada de ofertas especiales
export const getSpecialOffers = async () => {
  const offersGameIds = [1659420,2669320, 2488620, 1040200]; 
  const promises = offersGameIds.map((id) => getAppDetails(id));
  return Promise.all(promises);
};

export const getGameList = async () => {
  try {
    // Puedes usar un conjunto de IDs representativos para simular los juegos de la lista
    const gameListIds = [12210, 548430, 271590, 570, 730]; // IDs de ejemplo para GameList
    const promises = gameListIds.map((id) => getAppDetails(id));
    return Promise.all(promises);
  } catch (error) {
    console.error("Error fetching game list:", error);
    throw error;
  }
};