import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from '_features/Authentication/Login/Login';
import SignUp from '_features/Authentication/SignUp/SignUp';
import { ThemeProvider } from 'react-native-elements';
import Theme from './src/theme/Theme';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import ChooseLocation from '_features/ChooseLocation';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <NavigationContainer>
        <Stack.Navigator initialRoute='Login'>
          <Stack.Screen
            name='Login'
            component={Login}
            options={{ title: 'Choose Location' }}
          />
          <Stack.Screen
            name='SignUp'
            component={SignUp}
            options={{ title: 'Create Account' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
