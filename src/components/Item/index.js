import { View, Text, Image, StyleSheet } from "react-native";
import Animation from "../Animation";
import moment from "moment";
import "moment/locale/fr";

moment.locale("fr");

const Item = ({ tempNow }) => {
  const getIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@4x.png`;
  return (
    <>
      {tempNow.list.map((el, index) => {
        return (
          <Animation key={index} delay={index * 100}>
            <View style={styles.containerForecast}>
              <View style={styles.containerIconDay}>
                <Image
                  style={styles.image}
                  source={{ uri: getIcon(el.weather[0].icon) }}
                />
                <Text style={styles.day}>
                  {moment(el.dt * 1000)
                    .format("ddd")
                    .toUpperCase()}{" "}
                  {moment(el.dt * 1000).format("DD/MM")}
                </Text>
                <Text style={styles.hours}>
                  {" "}
                  à {new Date(el.dt * 1000).getHours()}:00
                </Text>
              </View>
              <Text style={styles.temp}>{Math.round(el.main.temp)} °C</Text>
            </View>
          </Animation>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  containerForecast: {
    borderBottomWidth: 1,
    borderBottomColor: "#00bfff",
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerIconDay: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  temp: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    marginRight: 15,
  },
  day: {
    color: "white",
    fontSize: 18,
  },
  hours: {
    color: "white",
    fontSize: 18,
  },
  image: {
    height: 70,
    width: 70,
  },
});

export default Item;
