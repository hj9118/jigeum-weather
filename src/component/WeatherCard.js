import { useEffect, useState } from 'react';
import { BsSunrise, BsSunset } from 'react-icons/bs';
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

  const dust10 = (pm) => {
    if(pm <= 20){
      return '아주 좋음'
    } else if (pm <= 50){
      return '좋음'
    } else if(pm <= 100){
      return '보통'
    } else if(pm <= 200){
      return '나쁨'
    } return '매우 나쁨'
  }

  const dust25 = (pm) => {
    if(pm <= 10){
      return '아주 좋음'
    } else if (pm <= 25){
      return '좋음'
    } else if(pm <= 50){
      return '보통'
    } else if(pm <= 75){
      return '나쁨'
    } return '매우 나쁨'
  }

  const weatherIcon = `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`;
  return (
    <div className='weather-card'>
      <div className='container'>
        <div className='oneline'>
          <h1>📍{weather?.name}</h1>
        </div>
        <div className='half-two'>
          <h2>
            <img src={weatherIcon} className='middle' alt='날씨 아이콘' />
            {parseInt(weather?.main.temp - 273.15, 10)}℃
          </h2>
        </div>
        <div className='half-one'>
          <h3>습도: {weather?.main.humidity}%</h3>
        </div>
        <div className='half-one'>
          <h3>체감온도: {parseInt(weather?.main.feels_like - 273.15, 10)}℃</h3>
        </div>
        <div className='oneline'>
          <h4>🌡</h4>
          <h4>최고 {parseInt(weather?.main.temp_max - 273.15, 10)}℃</h4>
          <h4>최저 {parseInt(weather?.main.temp_min - 273.15, 10)}℃</h4>
        </div>
        <div className='oneline'>
          <h4>🌫</h4>
          <h4>미세먼지 {dust10(air?.list[0].components.pm10)}</h4>
          <h4>초미세먼지 {dust25(air?.list[0].components.pm2_5)}</h4>
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
