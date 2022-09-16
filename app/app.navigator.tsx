import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Report from '../screens/Report';
// import Countries from '../screens/Countries';

const { Navigator, Screen } = createNativeStackNavigator();

const screenOptionObj:object = {
    headerStyle: {backgroundColor: 'cornflowerblue'},
    headerTitleStyle: { fontWeight: 'bold'},
    headerTintColor: '#313131ff',
    title: 'Weather App',
}

const AppNavigator = ()=>{
    return(
        <NavigationContainer>
            <Navigator screenOptions={screenOptionObj} initialRouteName='Home'>
                <Screen name='Home' component={Home}></Screen>
                <Screen name='Report' component={Report}></Screen>
            </Navigator>
        </NavigationContainer>
    )
}
export default AppNavigator;