import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

const LoginForm = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  return (
    <View>
      <Text style={styles.descriptionTextStyle}>USERNAME</Text>
      <TextInput
        style={styles.inputFiledsStyle}
        placeholder="Username"
        autoCapitalize="none"
        autoCorrect={false}
        value={username}
        onChangeText={(newUsername) => setUsername(newUsername)}
      />
      <Text style={styles.descriptionTextStyle}>PASSWORD</Text>
      <TextInput
        style={styles.inputFiledsStyle}
        placeholder="Password"
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newPassword) => setPassword(newPassword)}
      />
      <Text style={styles.errorMessage} title={message}>
        {message}
      </Text>
      <View style={styles.ButtonStyle}>
        <Button
          style={styles.viewButton}
          title="Log In"
          onPress={() => {
            if (username === "admin" && password === "admin") {
              navigation.navigate("VGG Scan Product");
              setUsername("");
              setPassword("");
              setMessage("");
            } else {
              setMessage("Invalid username or password");
              setUsername("");
              setPassword("");
            }
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ButtonStyle: {
    flexDirection: "column",
    alignItems: "center",
    margin: 15,
  },

  descriptionTextStyle: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 25,
    color: "#737170",
  },
  inputFiledsStyle: {
    marginTop: 5,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 300,
    textAlign: "center",
    flexDirection: "row",
    marginBottom: 5,
  },
  errorMessage: {
    textAlign: "center",
    color: "red",
  },
  viewButton: {
    marginHorizontal: 200,
  },
});

export default LoginForm;
