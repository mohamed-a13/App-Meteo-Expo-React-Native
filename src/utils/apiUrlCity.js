export const API_URL_WEATHER = (city, key) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=fr&units=metric`;

export const API_URL_FORECASTS = (city, key) =>
  `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=fr&units=metric`;
