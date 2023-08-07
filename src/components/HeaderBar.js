import { StyleSheet, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

export const HeaderBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.publication}>Публікації</Text>

      <Feather
        name="log-out"
        size={24}
        color="rgba(189, 189, 189,1)"
        style={styles.logOut}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingTop: 55,
    paddingBottom: 11,
    borderBottomColor: "rgba(189, 189, 189, 1)",
    borderBottomWidth: 1,
    marginBottom: 32,
  },
  publication: {
    fontFamily: "Roboto-Medium",
    fontSize: 17,
    textAlign: "center",
  },
  logOut: {
    position: "absolute",
    right: 10,
    top: 55,
    color: "rgba(189, 189, 189,1)",
  },
});
