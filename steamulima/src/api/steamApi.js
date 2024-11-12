import axios from 'axios';

const BASE_URL = '/api';
const STORE_URL = 'https://store.steampowered.com/api';

export const getAppList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/ISteamApps/GetAppList/v2/`);
    return response.data.applist.apps;
  } catch (error) {
    console.error('Error fetching app list:', error);
    throw error;
  }
};

export const getAppDetails = async (appId) => {
  try {
    const response = await axios.get(`${STORE_URL}/appdetails?appids=${appId}`);
    return response.data[appId].data;
  } catch (error) {
    console.error(`Error fetching details for appId ${appId}:`, error);
    throw error;
  }
};
