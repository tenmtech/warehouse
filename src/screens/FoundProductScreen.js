import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ProductFound from "../components/ProductFound";
import UserLogo from "../components/UserLogo";
const FoundProductScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.viewStyle}>
        <UserLogo />
        <ProductFound navigation={navigation} />
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

export default FoundProductScreen;
