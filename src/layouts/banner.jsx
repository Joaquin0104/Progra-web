import React, { useEffect, useState } from 'react';
import Navigationbar from '../components/navigationbar';
import '../styles/Banner.css'; 


const Banner = () => {
    return (
        <div className="app">

      <Navigationbar className="content" />
      
        <div className="background-video-container">
            <video autoPlay loop muted playsInline className="background-video">
                <source
                    src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/clusters/frontpage/16c38a30145b5e64ec34fcad/mp4_page_bg_spanish.mp4?t=1731092184"
                    type="video/mp4"
                />
            </video>
        </div>
       </div>
  );
};
  
  export default Banner;