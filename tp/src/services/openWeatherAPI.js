import axios from 'axios';

// Reemplaza con tu API Key
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const fetchCurrentWeather = (city) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
};

const fetchHourlyForecast = (city) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );
};

const fetchDailyForecast = (city) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=5&appid=${API_KEY}&units=metric`
  );
};

export { fetchCurrentWeather, fetchHourlyForecast, fetchDailyForecast };
