// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/screens/LoginScreen";
import ScanProductsScreen from "./src/screens/ScanProductsScreen";
import FoundProductScreen from "./src/screens/FoundProductScreen";
import SelectDeliveryScreen from "./src/screens/SelectDeliveryScreen";
import MapScreen from "./src/screens/MapScreen";
import ManualInputDeliveryScreen from "./src/screens/ManualInputDeliveryScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="VGG Login" component={LoginScreen} />
        <Stack.Screen name="VGG Scan Product" component={ScanProductsScreen} />
        <Stack.Screen name="VGG Found Product" component={FoundProductScreen} />

        <Stack.Screen
          name="VGG Select Delivery"
          component={SelectDeliveryScreen}
        />
        <Stack.Screen name="VGG Map Screen" component={MapScreen} />
        <Stack.Screen
          name="VGG Manual Delivery"
          component={ManualInputDeliveryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
