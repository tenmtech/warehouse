import React from "react";
import { View, StyleSheet } from "react-native";
import Logo from "../components/Logo";
import LoginForm from "../components/LoginForm";
const LoginScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.viewStyle}>
        <Logo />
        <LoginForm navigation={navigation} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "white",
    flex: 1,
  },
});

export default LoginScreen;
