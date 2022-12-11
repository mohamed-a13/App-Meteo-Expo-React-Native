import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const getIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@4x.png`;

const ForecastsWeather = ({ dataForecastsWeather }) => {
  const [forecasts, setForecasts] = useState([]);

  useEffect(() => {
    const forecastData = dataForecastsWeather?.list.map((forecast) => {
      const dateTime = new Date(forecast.dt * 1000);
      return {
        date: dateTime,
        hour: dateTime.getHours(),
        temperature: Math.round(forecast.main.temp),
        icon: forecast.weather[0].icon,
        name: format(dateTime, "EEEE", { locale: fr }),
      };
    });
    setForecasts(forecastData);
  }, [dataForecastsWeather]);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.containerForecastsWeather}
    >
      {forecasts?.map((forecast, index) => {
        return (
          <View key={index} style={styles.forecast}>
            <Text style={styles.name}>{forecast.name}</Text>
            <Text style={styles.hour}>{forecast.hour}h</Text>
            <Image
              source={{ uri: getIcon(forecast.icon) }}
              style={styles.image}
            />
            <Text style={styles.temperature}>{forecast.temperature}°C</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerForecastsWeather: {
    flex: 3,
    paddingTop: 100,
  },
  name: {
    fontSize: 16,
    color: "white",
  },
  hour: {
    fontSize: 16,
    color: "white",
  },
  forecast: {
    backgroundColor: "#333941",
    borderRadius: 15,
    marginRight: 8,
    height: 155,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  temperature: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  image: {
    marginVertical: 5,
    height: 60,
    width: 60,
  },
});

export default ForecastsWeather;
