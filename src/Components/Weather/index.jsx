import React, { useEffect, useState } from 'react';
//assets
import humidityIcon from '../Assets/humidity.png';
import drizzleIcon from '../Assets/drizzle.png';
import searchIcon from '../Assets/search.png';
import clearicon from '../Assets/clear.png';
import cloudIcon from '../Assets/cloud.png';
import rainIcon from '../Assets/rain.png';
import snowIcon from '../Assets/snow.png';
import windIcon from '../Assets/wind.png';
//styles
import './styles.css';

export const Weather = () => {  
  const [cityName, setCityName] = useState('Belo Horizonte');
  const [weatherData, setWeatherData] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState();

  const weatherIconMapping = {
    '01d': clearicon,
    '02d': cloudIcon,
    '03d': drizzleIcon,
    '04d': drizzleIcon,
    '09d': rainIcon,
    '10d': rainIcon,
    '11d': snowIcon,
    '13d': snowIcon
  };

  const handleWeatherIcon = () => {
    if(weatherData?.weather && weatherData.weather[0]?.icon) {
      const iconCode = weatherData.weather[0].icon;
      const icon = weatherIconMapping[iconCode] || clearicon;
      setWeatherIcon(icon);
    }
  }

  const searchLocation = async (city) => {
    if (city === "") {
      return;
    }

    const apiKey = "719dbf91b3fb39ce60ff81ba1e54c1c1";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
      const response = await fetch(url);
      const data = await response.json();

      setWeatherData(data);
      setCityName("")
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  useEffect(() => {
    searchLocation(cityName)
  }, []);

  useEffect(() => {
    handleWeatherIcon();
  }, [weatherData]);

  return (
    <div className='container'>
      <div className="topBar">

        <input 
        type="text" 
        value={cityName} 
        placeholder='Search' 
        className="cityInput" 
        onChange={(e) => setCityName(e.target.value)}
        // onKeyPress={}
        />

        <div className="searchIcon" onClick={() => {searchLocation(cityName)}}>
          <img src={searchIcon} alt="search icon" />
        </div>

      </div>
      <div className="weatherIcon">
       <img src={weatherIcon} alt="Weather Icon" />
      </div>
      <div className="weatherTemp">{Math.floor(weatherData?.main?.temp)} °C</div>
      <div className="weatherLocation">{weatherData?.name}</div>
      <div className="dataContainer">
        <div className="element">
          <img src={humidityIcon} alt="" className="iconElement" />
          <div className="data">
            <div className="humidityPercent">{Math.floor(weatherData?.main?.humidity)} %</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={windIcon} alt="" className="iconElement" />
          <div className="data">
            <div className="humidityPercent">{Math.floor(weatherData?.wind?.speed)} Km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>  
      </div>
    </div>
  );
};
