import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '_atoms/Button';
import Input from '_atoms/Input';

const ChooseLocation = ({ navigation }) => {
  const onPressHandler = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View>
      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <Input
            placeholder='Enter PIN Code'
            errorMessage='Enter a valid PIN code'
          />
        </View>
        <View style={styles.btnContainer}>
          <Button title='Check' onPress={onPressHandler} />
        </View>
      </View>

      <View style={styles.login}>
        <Button
          title='Login to View Addresses'
          type='outline'
          onPress={onPressHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    margin: '5%',
    marginTop: '10%',
  },
  inputContainer: {
    width: '80%',
  },
  login: {
    marginTop: '10%',
    margin: '5%',
    flexBasis: '',
  },
  btnContainer: {
    width: '20%',
  },
});

export default ChooseLocation;
