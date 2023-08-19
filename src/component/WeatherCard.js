import { useEffect, useState } from 'react';
import { BsSunrise, BsSunset } from 'react-icons/bs';
const WeatherCard = () => {
  const [weather, setWeather] = useState(null);
  const [air, setAir] = useState(null);
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

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
    getCurrentLocation();
  }, []);

  const Unix_timestamp = (t) => {
    var date = new Date(t * 1000);
    var hour = '0' + date.getHours();
    var minute = '0' + date.getMinutes();
    return hour.substr(-2) + ':' + minute.substr(-2);
  };

  const weatherIcon = `https://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`;
  return (
    <div className='weather-card'>
      <div className='container'>
        <div className='oneline'>
          <h1>📍{weather?.name}</h1>
        </div>
        <div className='half-two'>
          <h2>
            <img src={weatherIcon} className='middle' />
            {parseInt(weather?.main.temp - 273.15, 10)}℃
          </h2>
        </div>
        <div className='half-one'>
          <span>습도: </span>
          {weather?.main.humidity}%
        </div>
        <div className='half-one'>
          <span>체감온도: </span>
          {parseInt(weather?.main.feels_like - 273.15, 10)}℃
        </div>
        <div className='oneline'>
          <div>🌫</div>
          <div>미세먼지: {air?.list[0].components.pm10}</div>
          <div>초미세먼지: {air?.list[0].components.pm2_5}</div>
        </div>
        <div className='oneline'>
          <div>🌡</div>
          <div>
            <span>최고온도: </span>
            {parseInt(weather?.main.temp_max - 273.15, 10)}℃
          </div>
          <div>
            <span>최저온도: </span>
            {parseInt(weather?.main.temp_min - 273.15, 10)}℃
          </div>
        </div>
        <div className='quarter1'>
          <p>풍향 및 풍속</p>
          <p>
            {weather?.wind.deg} / {weather?.wind.speed}
          </p>
        </div>
        <div className='quarter3'>
          <div>
            <BsSunrise size='40%' />
            <p>일출</p>
            <p>{Unix_timestamp(weather?.sys.sunrise)}</p>
          </div>
          <div>
            <BsSunset size='40%' />
            <p>일몰</p>
            <p>{Unix_timestamp(weather?.sys.sunset)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeatherCard;
