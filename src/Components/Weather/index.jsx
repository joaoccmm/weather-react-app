import React, { useEffect, useState } from 'react';
//assets
import humidityIcon from '../Assets/humidity.png';
import searchIcon from '../Assets/search.png';
import windIcon from '../Assets/wind.png';
//utils
import { weatherBackgroundMappingColor } from './utils.ts';
import { weatherBackgroundMapping } from './utils.ts';
import { weatherIconMapping } from './utils.ts';
//styless
import './styles.css';
//tosatify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Weather = () => {
  const [cityName, setCityName] = useState('Belo Horizonte');
  const [weatherData, setWeatherData] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState();
  const [bgColor, setBgColor] = useState();
  const [bgImg, setBgImg] = useState();

  const handleWeatherIconImage = () => {
    if (weatherData?.weather && weatherData.weather[0]?.icon) {
      const iconCode = weatherData.weather[0].icon;
      const icon = weatherIconMapping[iconCode];
      const bgImg = weatherBackgroundMapping[iconCode];
      const bgColorClass = weatherBackgroundMappingColor[iconCode];

      setWeatherIcon(icon);
      setBgColor(bgColorClass);
      setBgImg(bgImg);
    }
  };

  const searchLocation = async (city) => {
    if (city === "") {
      return;
    }

    const apiKey = "719dbf91b3fb39ce60ff81ba1e54c1c1";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data?.cod === "404") {
        toast.error('City not found! (Check spelling)', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          theme: "light",
        });
      } else {
        setWeatherData(data);
      }
      setCityName("");

    } catch (error) {
      console.error("Error fetching weather data:", error);

    }
  };

  const handleKeyPress = (event, cityName) => {
    if (event.key === 'Enter') {
      searchLocation(cityName);
    }
  };
  useEffect(() => {
    searchLocation(cityName);
  }, []);

  useEffect(() => {
    handleWeatherIconImage();
  }, [weatherData]);

  return (
    <div className={`body ${bgColor}`}>
      <div className="container">
        <div className="bg">
          <img src={bgImg} className='bgImg' />
        </div>
        <div className='content'>
          <div className="topBar">
            <input
              type="text"
              value={cityName}
              placeholder='Search'
              className="cityInput"
              onChange={(e) => setCityName(e.target.value)}
              onKeyPress={(e) => handleKeyPress(e, cityName)}
            />
            <div className="searchIcon" onClick={() => { searchLocation(cityName); }}>
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
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};
