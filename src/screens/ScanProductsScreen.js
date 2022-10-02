import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import UserLogo from "../components/UserLogo";
const ScanProductsScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.viewStyle}>
        <UserLogo />
        <Text style={styles.loginTextStyle}>Tap to scan products</Text>
        <TouchableOpacity style={styles.TouchableStyle}>
          <Text> Press to scan </Text>
          <AntDesign
            name="scan1"
            style={styles.iconStyle}
            onPress={() => navigation.navigate("VGG Found Product")}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "white",
    flex: 1,
  },
  TouchableStyle: {
    marginTop: 150,
    height: 50,
    width: 500,
    backgroundColor: "limegreen",
    flexDirection: "row-reverse",
    alignSelf: "center",
    borderRadius: 5,
    alignItems: "center",
  },
  loginTextStyle: {
    textAlign: "center",
    fontSize: 42,
    marginTop: 200,
  },
  iconStyle: {
    marginLeft: 10,
    display: "flex",
    flexDirection: "row-reverse",
    fontSize: 42,
    color: "black",
    alignItems: "center",
  },
});

export default ScanProductsScreen;
