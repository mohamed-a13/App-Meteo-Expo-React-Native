import { View, Text, Image, StyleSheet } from "react-native";

const CurrentTemp = ({ temperature, icon }) => {
  const getIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@4x.png`;
  return (
    <View style={styles.logoAndDegres}>
      <Text style={styles.degres}>{Math.round(temperature)}°C</Text>
      <Image
        source={{
          uri: getIcon(icon),
        }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logoAndDegres: {
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  degres: {
    color: "white",
    fontSize: 70,
  },
  image: {
    alignSelf: "center",
    height: 150,
    width: 150,
  },
});

export default CurrentTemp;
