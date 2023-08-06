import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";

export const Avatar = () => {
  return (
    <View style={styles.container}>
      <Feather name="plus-circle" size={25} style={styles.plus} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    position: "absolute",
    top: -60,
    alignSelf: "center",
  },
  plus: {
    position: "absolute",
    bottom: 15,
    right: -15,
    color: "#FF6C00",
  },
});
