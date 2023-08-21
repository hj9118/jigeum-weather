import {
  WiDaySunny,
  WiDaySunnyOvercast,
  WiCloud,
  WiCloudy,
  WiHail,
  WiDayRain,
  WiNightClear,
  WiNightAltCloudy,
  WiNightAltRain,
  WiThunderstorm,
  WiSnow,
  WiDust,
  WiNa,
} from 'react-icons/wi';

const WeatherIcon = (weather) => {
  switch (weather) {
    case '01d':
      return <WiDaySunny />;
    case '01n':
      return <WiNightClear />;
    case '02d':
      return <WiDaySunnyOvercast />;
    case '02n':
      return <WiNightAltCloudy />;
    case '03d':
    case '03n':
      return <WiCloud />;
    case '04d':
    case '04n':
      return <WiCloudy />;
    case '09d':
    case '09n':
      return <WiHail />;
    case '10d':
      return <WiDayRain />;
    case '10n':
      return <WiNightAltRain />;
    case '11d':
    case '11n':
      return <WiThunderstorm />;
    case '13d':
    case '13n':
      return <WiSnow />;
    case '50d':
    case '50n':
      return <WiDust />;
    default:
      return <WiNa />;
  }
};

export default WeatherIcon;
