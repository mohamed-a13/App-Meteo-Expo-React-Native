import { View, ActivityIndicator, StyleSheet } from "react-native";

const Activity = () => {
  return (
    <View style={styles.containerActivity}>
      <ActivityIndicator size="large" color="#00bfff" />
    </View>
  );
};

const styles = StyleSheet.create({
  containerActivity: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1B1A1E",
  },
});

export default Activity;
