import { StyleSheet, View, Text } from "react-native";
import { Background } from "../components/Background";
import { Button } from "../components/Button";

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Background>
        <View>
          <Text>Увійти</Text>
          <Button text="Увійти" />
        </View>
      </Background>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
