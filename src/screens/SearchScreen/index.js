import {
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Search = () => {
  const [city, setCity] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigation = useNavigation();

  const searchCity = () => {
    if (city) {
      navigation.navigate("WeatherCity", { city });
      setCity("");
    } else {
      setErrorMessage("Veuillez rentrer le nom d'une ville");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setCity}
        value={city}
        placeholder="Marseille"
      />
      <TouchableOpacity onPress={searchCity} style={styles.btnSearch}>
        <Text style={styles.text}>Rechercher</Text>
      </TouchableOpacity>
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerActivity: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1B1A1E",
  },
  container: {
    flex: 1,
    backgroundColor: "#1B1A1E",
  },
  input: {
    height: 40,
    marginTop: 12,
    backgroundColor: "white",
    color: "black",
    marginHorizontal: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  btnSearch: {
    marginTop: 10,
    height: 40,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#00bfff",
    marginHorizontal: 12,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
  errorMessage: {
    color: "#dc143c",
    textAlign: "center",
    paddingVertical: 5,
  },
});

export default Search;
