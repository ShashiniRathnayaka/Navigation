import 'react-native-reanimated';
import React from 'react';
//import { View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import Toptabbar from './src/navigation/Toptabbar';
import BottomTab from './src/screens/BottomTap';
import MainContainer from './src/screens/MainContainer';
// import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

enableScreens();


{/*const Drawer = createDrawerNavigator();*/}

const App = () => {
  return (
    
    // <Toptabbar />
    // <BottomTab />
    <MainContainer />

  )
};

export default App