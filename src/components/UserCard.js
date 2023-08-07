import { View, Image, Text, StyleSheet } from "react-native";

export const UserCard = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/photo/PhotoUser.png")} />
      <View style={styles.userData}>
        <Text style={styles.userName}>Natali Romanova</Text>
        <Text style={styles.userEmail}>email@example.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: "row",
    gap: 8,
    marginBottom: 566,
  },
  userData: {
    flexDirection: "colom",
  },
  userName: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    color: "rgba(33, 33, 33, 1)",
  },
  userEmail: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    color: "rgba(33, 33, 33, 0.8)",
  },
});
