import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WeelCome from './Screens/WeelCome';
import HomeScreen from './Screens/HomeScreen';
import DetailScreen from './Screens/DetailScreen';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WeelCome">
      <Stack.Screen name="WeelCome" component={WeelCome} options={{ headerShown: false }} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;