import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../../../ui-lib/components/atoms/Button';
import Input from '../../../ui-lib/components/atoms/Input';

const Login = ({ navigation }) => {
  const onPressHandler = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View style={styles.container}>
      <Input
        placeholder='Enter Mobile Number'
        errorStyle={{ color: 'red' }}
        errorMessage='ENTER A VALID ERROR HERE'
      />
      <View style={styles.btnContainer}>
        <Button title='Login' onPress={onPressHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
