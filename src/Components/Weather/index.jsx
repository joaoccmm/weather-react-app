import React from 'react';
//assets
import drizzleIcon from '../Assets/drizzle.png';
import humidity from '../Assets/humidity.png';
import searchIcon from '../Assets/search.png';
import clearicon from '../Assets/clear.png';
import cloudIcon from '../Assets/cloud.png';
import rainIcon from '../Assets/rain.png';
import snowIcon from '../Assets/snow.png';
import windIcon from '../Assets/wind.png';
//styles
import './styles.css';

export const Weather = () => {
  return (
    <div className='container'>
      <div className="topBar">
        <input type="text" className="cityInput" placeholder='Search'/>
        <div className="searchIcon">
          <img src={searchIcon} alt="search icon" />
        </div>
      </div>
      <div className="weatherIcon">
        <img src={cloudIcon} alt="Weather Icon" />
      </div>
      <div className="weatherTemp">24ºC</div>
      <div className="weatherLocation">NY</div>
      <div className="dataCotainer">
        <div className="element">
          <img src="" alt="" className="iconElement" />
          <div className="data">
            <div className="humidityPercent">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
