import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ProductFound from "../components/ProductFound";

const FoundProductScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.viewStyle}>
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
