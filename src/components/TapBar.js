import { StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
// import { Button } from "./Button";
import { View, Image } from "react-native";

export const TapBar = () => {
  return (
    <>
      <View style={styles.container}>
        <Feather name="grid" size={24} color="rgba(33, 33, 33, 0.8)" />
        {/* <Button text="+" width={70} height={40} style={styles.button} /> */}
        <Image source={require("../assets/photo/new.png")} />
        <Feather name="user" size={24} color="rgba(33, 33, 33, 0.8)" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 39,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 9,
    marginBottom: 34,
  },
  button: {
    width: 70,
    height: 40,
    backgroundColor: "rgba(255, 108, 0,1)",
    borderRadius: 100,
    paddingTop: 16,
    paddingBottom: 16,
  },
});
