import React from 'react';

function HourlyForecast({ forecast }) {
  return (
    <div className="hourly-forecast">
      {forecast.map((item) => (
        <div key={item.dt}>
          <p>{item.dt_txt}</p>
          <p>{item.main.temp} °C</p>
        </div>
      ))}
    </div>
  );
}

export default HourlyForecast;
