import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  const increaseHandler = () => {
    setCounter((currentCounter) => currentCounter + 1);
  };

  const decreaseHandler = () => {
    setCounter((currentCounter) => currentCounter - 1);
  };

  return (
    <View style={styles.view}>
      <Button title="Increase" onPress={increaseHandler} />
      <Button title="Decrease" onPress={decreaseHandler} />
      <Text>Current Count:</Text>
      <Text>{counter}</Text>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    padding: 20,
  },
  button: {
    width: 100,
  },
});
