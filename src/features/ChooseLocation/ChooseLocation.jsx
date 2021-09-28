import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../../ui-lib/components/atoms/Button';
import Input from '../../ui-lib/components/atoms/Input';

const ChooseLocation = ({ navigation }) => {
  const onPressHandler = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View style={styles.container}>
      <Input
        placeholder='INPUT WITH ERROR MESSAGE'
        errorStyle={{ color: 'red' }}
        errorMessage='ENTER A VALID ERROR HERE'
      />
      <Button title='ChooseLocation' onPress={onPressHandler} />
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

export default ChooseLocation;
