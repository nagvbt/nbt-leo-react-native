import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Login from './src/features/Login/Login';
import { ThemeProvider } from 'react-native-elements';
import Theme from './src/theme/Theme';

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Login />
        <StatusBar style='auto' />
      </View>
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
