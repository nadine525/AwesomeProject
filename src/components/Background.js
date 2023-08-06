import { ImageBackground } from "react-native";
import { StyleSheet } from "react-native";

export const Background = ({ children }) => {
  return (
    <>
      <ImageBackground
        style={styles.background}
        source={require("../assets/photo/PhotoBG.png")}
        resizeMode="cover"
        // objectFit="cover"
      >
        {children}
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
