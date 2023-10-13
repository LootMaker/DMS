/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home'
import Login from './screens/auth/Login'
import Forgot from './screens/auth/Forgot'
import Register from './screens/auth/Register'
import Setting from './screens/setting'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login"   component={Login}    options={{ headerShown: false }} />
        <Stack.Screen name="Sign Up" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Forgot"  component={Forgot}   options={{ headerShown: false }} />
        <Stack.Screen name="Home"    component={Home}     options={{ headerShown: false }} />
        <Stack.Screen name="Setting" component={Setting}  options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
