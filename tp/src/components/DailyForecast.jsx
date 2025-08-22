import React from 'react';

function DailyForecast({ forecast }) {
  return (
    <div className="daily-forecast">
      {forecast.map((item) => (
        <div key={item.dt}>
          <p>{item.dt}</p>
          <p>{item.main.temp_min} °C / {item.main.temp_max} °C</p>
        </div>
      ))}
    </div>
  );
}

export default DailyForecast;
