import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '_atoms/Button/Button';

const SignUp = ({ navigation }) => {
  const onPressHandler = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View style={styles.container}>
      <Button title='SignUp' onPress={onPressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SignUp;
