import { StyleSheet, View, Text, TextInput } from "react-native";
import { useState } from "react";
import { Background } from "../components/Background";
import { Avatar } from "../components/Avatar";
import { Button } from "../components/Button";

export const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focus, setFocus] = useState(null);

  return (
    <View style={styles.container}>
      <Background>
        <View style={styles.childrenBox}>
          <Avatar />
          <Text style={styles.registration}>Реєстрація</Text>
          <View style={styles.inputs}>
            <TextInput
              style={[styles.input, focus === "login" && styles.focusInput]}
              placeholder="Логін"
              value={login}
              onChangeText={setLogin}
              onFocus={() => setFocus("login")}
            />
            <TextInput
              style={[styles.input, focus === "email" && styles.focusInput]}
              placeholder="Адреса електроної пошти"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={[styles.input, focus === "password" && styles.focusInput]}
              placeholder="Пароль"
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <Button text="Зареєструватися" />
          <Text style={styles.account}>Вже є акаунт? Увійти</Text>
        </View>
      </Background>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  childrenBox: {
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: "100%",
    paddingTop: 92,
    paddingBottom: 78,
    paddingLeft: 16,
    paddingRight: 16,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  registration: {
    color: "rgba(33, 33, 33, 1)",
    fontFamily: "Roboto-Medium",
    textAlign: "center",
    fontSize: 30,
    marginBottom: 33,
  },
  inputs: {
    flexDirection: "column",
    gap: 16,
    marginBottom: 43,
  },
  input: {
    padding: 16,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderColor: "rgba(232, 232, 232, 1)",
    borderWidth: 1,
    borderRadius: 5,
    width: "100%",
  },
  focusInput: {
    borderColor: "rgba(255, 108, 0,1)",
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  account: {
    color: "rgba(27, 67, 113, 1)",
    textAlign: "center",
  },
});
