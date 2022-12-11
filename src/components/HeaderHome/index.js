import { View, Text, StyleSheet } from "react-native";
import { days, months } from "../../data/datas";

const HeaderHome = ({ name }) => {
  const date = new Date();
  return (
    <View style={styles.container}>
      <Text style={styles.city}>{name}</Text>
      <Text style={styles.date}>{`${days[date.getDay()]} ${date.getDate()} ${
        months[date.getMonth()]
      }`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  city: {
    fontSize: 32,
    color: "white",
  },
  date: {
    fontSize: 20,
    color: "#666666",
  },
});

export default HeaderHome;
