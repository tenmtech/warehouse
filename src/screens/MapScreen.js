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
const MapScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.viewStyle}>
        <UserLogo />
        <Text style={styles.loginTextStyle}>Map Are</Text>
        <Text style={styles.productPlaceTextStyle}>
          You have reached your drop point. Would you like to place the product?
        </Text>
        <View style={styles.ButtonStyle}>
          <Button
            title="Yes"
            onPress={() => navigation.navigate("VGG Scan Product")}
          />
          <Text></Text>
          <Button
            title="Cancel"
            onPress={() => navigation.navigate("VGG Login")}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "white",
    flex: 1,
  },
  loginTextStyle: {
    textAlign: "center",
    fontSize: 42,
    marginTop: 25,
    flex: 20,
  },
  productPlaceTextStyle: {
    textAlign: "center",
    fontSize: 30,
    marginTop: 25,
    flex: 3,
  },
  ButtonStyle: {
    alignItems: "center",
    flex: 3,
    margin: 20,
  },
});

export default MapScreen;
