import React from "react";
import { StyleSheet, Text } from "react-native";

const Logo = () => {
  return <Text style={styles.brandTextStyle}>VGG</Text>;
};

const styles = StyleSheet.create({
  brandTextStyle: {
    textAlign: "center",
    fontSize: 52,
    fontWeight: "bold",
    color: "#275F3D",
    margin: 120,
    textShadowColor: "black",
    textShadowRadius: 2,
  },
});

export default Logo;
