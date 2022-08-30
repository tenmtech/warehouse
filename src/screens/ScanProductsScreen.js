import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ScanProductsScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.viewStyle}>
        <Text style={styles.loginTextStyle}>Tap to scan products</Text>
        <Ionicons
          name="md-barcode-outline"
          style={styles.iconStyle}
          onPress={() => navigation.navigate("VGG Found Product")}
        />
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
    marginTop: 200,
  },
  iconStyle: {
    textAlign: "center",
    fontSize: 42,
    marginTop: 60,
  },
});

export default ScanProductsScreen;
