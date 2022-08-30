import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const ProductFound = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.loginTextStyle}>Found product is </Text>
      <Text style={styles.ProductStyle}>Arctic Fridge 250BK</Text>
      <View style={styles.ButtonView}>
        <Button
          title="Pick Up"
          onPress={() => navigation.navigate("VGG Select Delivery")}
        />
        <Button
          title="Cancel"
          onPress={() => navigation.navigate("VGG Scan Product")}
        />
      </View>

      <Text style={styles.StorageStyle}>Current products in storage: </Text>
      <Text style={styles.ProductStyle}>21 </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ButtonView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 270,
    marginTop: 400,
  },
  loginTextStyle: {
    textAlign: "center",
    fontSize: 42,
    marginTop: 60,
    fontWeight: "bold",
  },
  ProductStyle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
    color: "#818181",
  },
  StorageStyle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 220,
  },
});

export default ProductFound;
