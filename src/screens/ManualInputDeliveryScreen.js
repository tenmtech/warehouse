import React from "react";
import {
  View,
  TextInput,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import UserLogo from "../components/UserLogo";

const ManualInputDeliveryScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.viewStyle}>
        <UserLogo />
        <Text style={styles.loginTextStyle}>
          Please provide the dropoint specification dor delivery
        </Text>
        <Text style={styles.InputDeliveryText}>Deposit number: </Text>
        <TextInput style={styles.inputFiledsStyle} placeholder="Deposit No" />
        <Text style={styles.InputDeliveryText}>Coridor number: </Text>
        <TextInput style={styles.inputFiledsStyle} placeholder="Coridor No" />
        <Text style={styles.InputDeliveryText}>Deposit row: </Text>
        <TextInput style={styles.inputFiledsStyle} placeholder="Row " />
        <Text style={styles.InputDeliveryText}>Position: </Text>
        <TextInput style={styles.inputFiledsStyle} placeholder="Position" />
        <Text style={styles.InputDeliveryText}>Level: </Text>
        <TextInput style={styles.inputFiledsStyle} placeholder="Level" />
        <View style={styles.ButtonView}>
          <Button
            title="Confirm"
            onPress={() => navigation.navigate("VGG Map Screen")}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  ButtonView: {
    display: "flex",
    marginTop: 80,
    alignItems: "center",
  },
  viewStyle: {
    backgroundColor: "white",
    flex: 1,
  },
  loginTextStyle: {
    textAlign: "center",
    fontSize: 42,
    marginTop: 80,
    marginBottom: 100,
    marginHorizontal: 50,
  },
  inputFiledsStyle: {
    marginTop: 5,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 300,
    textAlign: "center",
    flexDirection: "row",
    marginBottom: 15,
  },
  InputDeliveryText: {
    textAlign: "center",
  },
});

export default ManualInputDeliveryScreen;
