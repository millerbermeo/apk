import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './screens/StartScreen'; // Import your StartScreen component here
import LoginScreen from './screens/LoginScreen';
import RegistroScreen from './screens/RegistroScreen';
import HomeScreen from './screens/HomeScreen';
import LaborScreen from './screens/LaborScreen';
import AbonarScreen from './screens/AbonarScreen';
import InformacionScreen from './screens/InformacionScreen';
import ComoScreen from './screens/ComoScreent';
import AddScreen from './screens/AddScreen';
import CalenScreen from './screens/CalenScreen';
import FinanzasScreen from './screens/FinanzasScreen';
import NotiScreen from './screens/NotiScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Register"
          component={RegistroScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="HomeStack"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Labor"
          component={LaborScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Abonar"
          component={AbonarScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Info"
          component={InformacionScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Como"
          component={ComoScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Add"
          component={AddScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Calen"
          component={CalenScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Fin"
          component={FinanzasScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Noti"
          component={NotiScreen}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
