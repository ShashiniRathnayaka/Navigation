import 'react-native-reanimated';
import React from 'react';
import 'react-native-gesture-handler';
import { Text, View } from 'react-native';
//import { enableScreens } from 'react-native-screens';

//enableScreens();

const BlankTwo = () => {
  return (
    
    <View style={styles.container}>
        <Text>Blank Page Two</Text>
    </View>
  )
};

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange'
    }
}

export default BlankTwo