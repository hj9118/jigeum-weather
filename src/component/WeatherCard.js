import React from 'react';

const WeatherCard = () => {
  return (
    <div className='weather-card'>
      <div class='container'>
        <div class='oneline'>
          <h2>📍지명</h2>
        </div>
        <div class='half-two'>
          <span>☀</span>32℃
        </div>
        <div class='half-one'>습도</div>
        <div class='half-one'>체감온도</div>
        <div class='oneline'>🌫미세먼지: 00 초미세먼지: 00</div>
        <div class='oneline'>🌡최고온도 00℃ 최저온도 00℃</div>
        <div class='card1'>풍향 및 풍속</div>
        <div class='card2'>최근 1시간 강우량</div>
      </div>
    </div>
  );
};

export default WeatherCard;
