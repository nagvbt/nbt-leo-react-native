import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '_atoms/Button';

const Home = ({ navigation }) => {
  const onPressHandler = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <Button title='Home' onPress={onPressHandler} />
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

export default Home;
