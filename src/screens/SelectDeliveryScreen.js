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

const SelectDeliveryScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.viewStyle}>
        <Text style={styles.loginTextStyle}>
          Would you like to calculate the closest availabale deposit drop point?
        </Text>
        <View style={styles.deliveryButtons}>
          <Button
            title="Calculate"
            onPress={() => navigation.navigate("VGG Map Screen")}
          />
          <Text></Text>
          <Button
            title="Insert Manual Drop Point"
            onPress={() => navigation.navigate("VGG Manual Delivery")}
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
    marginTop: 120,
    marginHorizontal: 50,
  },
  deliveryButtons: {
    marginTop: 260,
    flexDirection: "column",
    alignItems: "center",
  },

  ProductStyle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default SelectDeliveryScreen;
