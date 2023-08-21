import { useEffect, useState } from 'react';
import { BsSunrise, BsSunset } from 'react-icons/bs';
import { WiDust } from 'react-icons/wi';
import WeatherIcon from './WeatherIcon';
import { dust10, dust25 } from './DustStep';
import { Unix_timestamp, kelToCel } from './Transform';

const WeatherCard = () => {
  const [weather, setWeather] = useState(null);
  const [air, setAir] = useState(null);

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`;
    let responseWeather = await fetch(urlWeather);
    let dataWeather = await responseWeather.json();
    setWeather(dataWeather);

    let urlAir = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`;
    let responseAir = await fetch(urlAir);
    let dataAir = await responseAir.json();
    setAir(dataAir);
  };

  useEffect(() => {
    const getCurrentLocation = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getWeatherByCurrentLocation(lat, lon);
      });
    };
    getCurrentLocation();
  }, []);
  

  return (
    <div className='weather-card'>
      <div className='container'>
        <div className='city'>
          <h1>{weather?.name}</h1>
        </div>
        <div className='half-two'>
          <h2 className='middle'>
            {WeatherIcon(weather?.weather[0].icon)}
            {kelToCel(weather?.main.temp)}℃
          </h2>
        </div>
        <div className='half-one'>
          <h3>습도: {weather?.main.humidity}%</h3>
        </div>
        <div className='half-one'>
          <h3>체감온도: {kelToCel(weather?.main.feels_like)}℃</h3>
        </div>
        <div className='quarter1'>
          <div>
            <WiDust size='40%' />
            <h4>미세먼지</h4>
            <h4>{dust10(air?.list[0].components.pm10)}</h4>
          </div>
          <div>
            <WiDust size='40%' />
            <h4>초미세먼지</h4>
            <h4>{dust25(air?.list[0].components.pm2_5)}</h4>
          </div>
        </div>
        <div className='quarter3'>
          <div>
            <BsSunrise size='40%' />
            <h4>일출</h4>
            <h4>{Unix_timestamp(weather?.sys.sunrise)}</h4>
          </div>
          <div>
            <BsSunset size='40%' />
            <h4>일몰</h4>
            <h4>{Unix_timestamp(weather?.sys.sunset)}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeatherCard;
