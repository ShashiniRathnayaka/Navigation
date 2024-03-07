import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import InquiriesScreen from '../screens/InquiriesScreen';
import PromotionScreen from '../screens/PromotionScreen';
import MainHomeScreen from '../screens/MainHomeScreen';
import Emergencytips from '../screens/Emergencytips';
import { NavigationContainer } from '@react-navigation/native';

const { View } = Animated;

const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

const Toptabbar = () => {
    return (
        <>
            <NavigationContainer>
                <Drawer.Navigator initialRouteName='Orders'>
                    <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
                    <Drawer.Screen name="Orders" component={HomeScreen} />
                    <Drawer.Screen name="InquiriesScreen" component={InquiriesScreen} />
                    <Drawer.Screen name="PromotionScreen" component={PromotionScreen} />
                    <Drawer.Screen name="MainHomeScreen" component={MainHomeScreen} />
                    <Drawer.Screen name="Emergencytips" component={Emergencytips} />
                </Drawer.Navigator>

            </NavigationContainer>

            
        </>
    )
}

export default Toptabbar
