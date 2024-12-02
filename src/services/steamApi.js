import axios from 'axios';
const STORE_URL = 'https://store.steampowered.com/api';

const BASE_URL = '/store-api/api';
const BASE_URL1 = '/api';

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
    const response = await axios.get(`${BASE_URL1}/ISteamApps/GetAppList/v2/`);
    return response.data.applist.apps;
  } catch (error) {
    console.error('Error 404 app list:', error);
    throw error;
  }
};

export const getFeaturedGames = async () => {
  const featuredGameIds = [1091500, 2124490, 2933620, 990080, 2183900]; 
  const promises = featuredGameIds.map((id) => getAppDetails(id));
  return Promise.all(promises);
};

export const getSpecialOffers = async () => {
  const offersGameIds = [1659420,2669320, 2488620, 1040200]; 
  const promises = offersGameIds.map((id) => getAppDetails(id));
  return Promise.all(promises);
};

export const getGameList = async () => {
  try {
    const gameListIds = [12210, 548430,1145350,2050650,1790600,1248130,2369390,1172620,2878980,3035570,255710]; 
    const promises = gameListIds.map((id) => getAppDetails(id));
    return Promise.all(promises);
  } catch (error) {
    console.error("Error fetching game list:", error);
    throw error;
  }
};