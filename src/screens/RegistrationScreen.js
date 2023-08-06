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
    // width: "100%",
  },
  childrenBox: {
    position: "relative",
    backgroundColor: "white",
    width: "100%",
    paddingTop: 92,
    paddingBottom: 78,
    paddingLeft: 16,
    paddingRight: 16,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  registration: {
    color: "#212121",
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
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 5,
    width: "100%",
  },
  focusInput: {
    borderColor: "#FF6C00",
    backgroundColor: "#FFFFFF",
  },
  account: {
    color: "#1B4371",
    textAlign: "center",
  },
});
