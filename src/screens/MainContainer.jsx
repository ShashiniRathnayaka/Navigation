import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScree from './HomeScree';
import DetailsScreen from './DetailsScreen';
import SettingsScreen from './SettingsScreen';

//Screen names
const homeName = "Home";
const detailsName = "Details";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
            tabBarStyle: {
                padding: 10,
                height: 70,
            },
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                let rn = route.name;

                if (rn === homeName) {
                iconName = focused ? 'home' : 'home-outline';

                } else if (rn === detailsName) {
                iconName = focused ? 'list' : 'list-outline';

                } else if (rn === settingsName) {
                iconName = focused ? 'settings' : 'settings-outline';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
        tabBarOptions={{
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'grey',
            tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
            // tabBarStyle: { padding: 10, height: 70},
            // activeTintColor: 'tomato',
            // inactiveTintColor: 'grey',
            // labelStyle: { paddingBottom: 10, fontSize: 10 },
            // style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={HomeScree} />
        <Tab.Screen name={detailsName} component={DetailsScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;