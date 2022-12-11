import { StyleSheet, Alert, FlatList, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import Constants from "expo-constants";
import axios from "axios";
import CityNotFound from "../../components/CityNotFound";
import Item from "../../components/Item";
import Activity from "../../components/Activity";
import { API_URL_FORECASTS } from "../../utils/apiUrlCity";

const WeatherCity = ({ route, navigation }) => {
  const [city, setCity] = useState(route.params.city);
  const [loading, setLoading] = useState(false);
  const [ForecastsDatas, setForecastsDatas] = useState(null);
  const [errorCity, setErrorCity] = useState(null);

  const key = Constants.expoConfig.apiKey;

  const callToApiOpenWeather = async (city) => {
    setLoading(true);
    await axios
      .get(API_URL_FORECASTS(city, key))
      .then((response) => {
        setForecastsDatas([response.data]);
        setLoading(false);
      })
      .catch((error) => {
        setErrorCity(city);
        Alert.alert(`${city} est inconnue`);
        setLoading(false);
      });
  };

  useEffect(() => {
    callToApiOpenWeather(city);
    navigation.setOptions({
      title: `Prévisions - ${city}`,
    });
  }, []);

  const renderItem = ({ item }) => <Item tempNow={item} />;

  if (errorCity) {
    return <CityNotFound />;
  } else {
    if (loading) {
      return <Activity />;
    } else {
      return (
        <SafeAreaView style={styles.container}>
          <FlatList
            keyExtractor={(item, index) => index}
            data={ForecastsDatas}
            extraData={ForecastsDatas}
            renderItem={renderItem}
          />
        </SafeAreaView>
      );
    }
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B1A1E",
  },
});

export default WeatherCity;
