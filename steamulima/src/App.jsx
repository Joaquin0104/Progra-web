import React, { useEffect, useState } from 'react';
import { getAppList, getAppDetails } from './api/SteamApi';

const App = () => {
  const [apps, setApps] = useState([]);
  const [appDetails, setAppDetails] = useState(null);

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const appList = await getAppList();
        setApps(appList.slice(0, 2000)); // Obtener las primeras 10 apps como ejemplo
      } catch (error) {
        console.error(error);
      }
    };

    fetchApps();
  }, []);

  const fetchAppDetails = async (appId) => {
    try {
      const details = await getAppDetails(appId);
      setAppDetails(details);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Steam App List</h1>
      <ul>
        {apps.map((app) => (
          <li key={app.appid} onClick={() => fetchAppDetails(app.appid)}>
            {app.name}
          </li>
        ))}
      </ul>
      {appDetails && (
        <div>
          <h2>{appDetails.name}</h2>
          <p>{appDetails.description || 'Descripción no disponible'}</p>
        </div>
      )}
    </div>
  );
};

export default App;
