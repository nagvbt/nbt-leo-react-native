import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '_atoms/Button';
import Input from '_atoms/Input';

const Login = ({ navigation }) => {
  const onPressHandler = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View style={styles.container}>
      <Input
        placeholder='Enter Mobile Number k '
        errorStyle={styles.errorStyle}
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
  errorStyle: {
    color: 'red',
  },
});

export default Login;
