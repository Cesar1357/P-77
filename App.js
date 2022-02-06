import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./Home";
import StartMapScreen from "./StarMap";
import DailyPicScreen from "./DailyPic";
import SpaceCraftScreen from "./SpaceCraft";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Principal" component={HomeScreen} />
        <Stack.Screen name="MapaEstelar" component={StartMapScreen} />
        <Stack.Screen name="FotoDiaria" component={DailyPicScreen} />
        <Stack.Screen name="NaveEspacial" component={SpaceCraftScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
