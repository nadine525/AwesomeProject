import { StyleSheet, TouchableOpacity, Text } from "react-native";

export const Button = ({ text }) => {
  return (
    <>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textBtn}>{text}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: 16,
  },
  textBtn: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
  },
});
