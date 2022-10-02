import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";

const UserLogo = () => {
  return (
    <>
      <TouchableOpacity style={styles.TouchableStyle}>
        <Image
          style={styles.imageStyle}
          source={require("../../assets/logo.png")}
        />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 50,
    height: 50,
    borderColor: "darkgray",
    borderWidth: 5,
    borderRadius: 100,
  },
  TouchableStyle: {
    marginTop: 5,
    marginLeft: 5,
    flexDirection: "row-reverse",
  },
});

export default UserLogo;
