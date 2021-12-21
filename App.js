/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/pages/Home';
import CharacterDetailsScreen from './src/pages/CharacterDetails';

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Contacts"
          component={HomeScreen}
        />
        <Stack.Screen 
          name="Details" 
          component={CharacterDetailsScreen} 
          options={({ route }) => ({ title: route.params.character.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

const styles = StyleSheet.create({
  
});

export default App;
