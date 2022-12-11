import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CityNotFound = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="map-marker-remove-outline"
        size={150}
        color="white"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1B1A1E",
  },
});

export default CityNotFound;
