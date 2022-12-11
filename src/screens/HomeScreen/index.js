import React, { useState, useEffect } from "react";
import Constants from "expo-constants";
import { View, StyleSheet, Alert } from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import ForecastsWeather from "../../components/ForecastsWeather";
import Activity from "../../components/Activity";
import HeaderHome from "../../components/HeaderHome";
import CurrentTemp from "../../components/CurrentTemp";
import {
  API_URL_WEATHER,
  API_URL_FORECASTS,
} from "../../utils/apiUrlCoordinates";

const KEY = Constants.expoConfig.apiKey;

const HomeScreen = () => {
  const [dataCurrentWeather, setDataCurrentWeather] = useState(null);
  const [dataForecastsWeather, setDataForecastsWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  // Récupération de la position d'utilisateur
  const getPosition = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    setLoading(true);
    if (status !== "granted") {
      Alert.alert("Veuillez accepter la demande de position");
      await Location.requestForegroundPermissionsAsync();
    } else {
      const position = await Location.getCurrentPositionAsync();
      getCurrentWeather(position);
      getForecastsWeather(position);
    }
  };

  useEffect(() => {
    getPosition();
    // getCurrentDate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Récupération de la météo actuel
  const getCurrentWeather = async (location) => {
    await axios
      .get(
        API_URL_WEATHER(
          location.coords.latitude,
          location.coords.longitude,
          KEY
        )
      )
      .then((response) => {
        setDataCurrentWeather(response.data);
        setLoading(false);
      })
      .catch((error) => {
        Alert.alert("Une erreur est survenue.");
        setLoading(false);
      });
  };

  // Récupération des prévisions
  const getForecastsWeather = async (location) => {
    await axios
      .get(
        API_URL_FORECASTS(
          location.coords.latitude,
          location.coords.longitude,
          KEY
        )
      )
      .then((response) => {
        setDataForecastsWeather(response.data);
        setLoading(false);
      })
      .catch((error) => {
        Alert.alert("Une erreur est survenue.");
        setLoading(false);
      });
  };

  if (loading) {
    return <Activity />;
  } else {
    return (
      <View style={styles.container}>
        <HeaderHome name={dataCurrentWeather?.name} />
        <CurrentTemp
          temperature={dataCurrentWeather?.main.temp}
          icon={
            dataCurrentWeather?.weather[0] &&
            dataCurrentWeather?.weather[0]?.icon
              ? dataCurrentWeather?.weather[0]?.icon
              : null
          }
        />
        <ForecastsWeather dataForecastsWeather={dataForecastsWeather} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#1B1A1E",
    padding: 8,
  },
});

export default HomeScreen;
