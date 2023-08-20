import { useEffect, useState } from 'react';
import { BsSunrise, BsSunset } from 'react-icons/bs';
import { WiDust } from 'react-icons/wi';
import WeatherIcon from './WeatherIcon';
import { dust10, dust25 } from './DustStep';

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

  const Unix_timestamp = (t) => {
    let date = new Date(t * 1000);
    let hour = '0' + date.getHours();
    let minute = '0' + date.getMinutes();
    return hour.substr(-2) + ':' + minute.substr(-2);
  };

  return (
    <div className='weather-card'>
      <div className='container'>
        <div className='city'>
          <h1>{weather?.name}</h1>
        </div>
        <div className='half-two'>
          <h2 className='middle'>
            {WeatherIcon(weather?.weather[0].icon)}
            {parseInt(weather?.main.temp - 273.15, 10)}℃
          </h2>
        </div>
        <div className='half-one'>
          <h3>습도: {weather?.main.humidity}%</h3>
        </div>
        <div className='half-one'>
          <h3>체감온도: {parseInt(weather?.main.feels_like - 273.15, 10)}℃</h3>
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
