import { StyleSheet, Text, View } from "react-native"
import React from "react";
import VectorIcon from "../utils/Vectoricons";
import Toptabbar from "../navigation/Toptabbar";
import { Colors } from '../theme/Colors';
import NewOrders from '../screens/NewOrders';
import ReturnInquiries from '../screens/ReturnInquiries';
import { NavigationContainer } from '@react-navigation/native';
import Drawerbar from "../navigation/Drawerbar";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            {/* <View style={styles.header}>
                <Text style={styles.order}>Orders</Text>
                <View style={styles.headerIcons}>
                    <VectorIcon type='Ionicons' name='search' color='#FF5C01' size={28} style={styles.iconStyle}/>
                </View>
            </View> */}

            {/* <NavigationContainer> */}
                <Tab.Navigator 
                    screenOptions={() => ({
                        tabBarActiveTintColor: Colors.primaryColor,
                        tabBarInactiveTintColor: Colors.secondaryColor,
                        tabBarStyle: {
                        }
                })}>
                    <Tab.Screen name="New Orders" component={NewOrders} />
                    <Tab.Screen name="Return Inquiries" component={ReturnInquiries} />
                </Tab.Navigator> 

            {/* </NavigationContainer> */}
            
            {/*<Drawerbar />*/}
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    header:{
        margin: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerIcons:{
        flexDirection:  'row',
        justifyContent: 'space-between'
    },
    order: {
        color: '#FF5C01',
        fontSize:28,
    },
    iconStyle: {
        marginTop: 9
    },
    content:{
        flex: 1
    },
    drawer:{
        flex: 1
    }
});

export default HomeScreen;