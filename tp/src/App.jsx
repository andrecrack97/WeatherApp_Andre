import React, { useState, useEffect } from 'react';
import { fetchCurrentWeather, fetchHourlyForecast, fetchDailyForecast } from './services/openWeatherAPI';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';

function App() {
  const [city, setCity] = useState('New York');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);

  useEffect(() => {
    fetchCurrentWeather(city).then((res) => setCurrentWeather(res.data));
    fetchHourlyForecast(city).then((res) => setHourlyForecast(res.data.list));
    fetchDailyForecast(city).then((res) => setDailyForecast(res.data.list));
  }, [city]);

  const handleSearch = (city) => {
    setCity(city);
  };

  return (
    <div className="weather-app">
      <SearchBar onSearch={handleSearch} />
      {currentWeather && <CurrentWeather weather={currentWeather} />}
      {hourlyForecast.length > 0 && <HourlyForecast forecast={hourlyForecast} />}
      {dailyForecast.length > 0 && <DailyForecast forecast={dailyForecast} />}
    </div>
  );
}

export default App;
