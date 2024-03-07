import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import BlankOne from "./BlankOne";
import BlankTwo from "./BlankTwo";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="BlankOne" component={BlankOne} />
            <Tab.Screen name="BlankTwo" component={BlankTwo} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTab;