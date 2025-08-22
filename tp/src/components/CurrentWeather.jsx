import React from 'react';

function CurrentWeather({ weather }) {
  return (
    <div className="current-weather">
      <h3>{weather.name}</h3>
      <p>{weather.weather[0].description}</p>
      <p>{weather.main.temp} °C</p>
      <p>Wind: {weather.wind.speed} m/s</p>
    </div>
  );
}

export default CurrentWeather;
