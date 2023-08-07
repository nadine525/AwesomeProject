import { StyleSheet, View } from "react-native";

import { HeaderBar } from "../components/HeaderBar";
import { UserCard } from "../components/UserCard";
import { TapBar } from "../components/TapBar";

export const PostsScreen = () => {
  return (
    <View>
      <HeaderBar />
      <UserCard />
      <TapBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
});
