import axios from 'axios';

// Reemplaza con tu API Key
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const fetchCurrentWeather = (city) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  )
  .then(response => {
    console.log("Current Weather Data: ", response.data);
    return response;
  })
  .catch(error => {
    console.error("Error fetching current weather:", error);
    throw error;
  });
};

const fetchHourlyForecast = (city) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
  )
  .then(response => {
    console.log("Hourly Forecast Data: ", response.data);
    return response;
  })
  .catch(error => {
    console.error("Error fetching hourly forecast:", error);
    throw error;
  });
};

const fetchDailyForecast = (city) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=${API_KEY}&units=metric`
  )
  .then(response => {
    console.log("Daily Forecast Data: ", response.data);
    return response;
  })
  .catch(error => {
    console.error("Error fetching daily forecast:", error);
    throw error;
  });
};

export { fetchCurrentWeather, fetchHourlyForecast, fetchDailyForecast };
