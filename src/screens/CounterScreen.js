import React, { useReducer } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increaseHandler = () => {
    dispatch({ type: 'increment', payload: 1 });
  };

  const decreaseHandler = () => {
    dispatch({ type: 'decrement', payload: 1 });
  };

  return (
    <View style={styles.view}>
      <Button title="Increase" onPress={increaseHandler} />
      <Button title="Decrease" onPress={decreaseHandler} />
      <Text>Current Reducer Count:</Text>
      <Text>{state.count}</Text>
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
