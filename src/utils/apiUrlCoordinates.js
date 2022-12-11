export const API_URL_WEATHER = (lat, lon, key) =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=fr&units=metric`;

export const API_URL_FORECASTS = (lat, lon, key) =>
  `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&lang=fr&units=metric`;
