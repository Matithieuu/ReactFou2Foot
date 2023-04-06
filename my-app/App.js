import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import SecondScreen from './SecondScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Resultat"
          component={SecondScreen}
          options={({ navigation }) => ({
            headerStyle: { backgroundColor: '#000000' },
            headerTintColor: '#FFFFFF',
            headerTitle: null, 
            headerTitleAlign: 'center' 
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}