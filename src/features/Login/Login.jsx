import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button  from '../../ui-lib/components/atoms/Button/Button';

const Login = () => {
  return (
    <View style={styles.container}>
      <Button title='MyButton' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
  },
});

export default Login;
