import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

const AppStack = createNativeStackNavigator();

const Route = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
                <AppStack.Screen name='Home' component={Home}></AppStack.Screen>
                <AppStack.Screen name='Page2' component={Page2}></AppStack.Screen>
                <AppStack.Screen name='Page3' component={Page3}></AppStack.Screen>
            </AppStack.Navigator>
        </NavigationContainer>  
    )
}

export default Route
