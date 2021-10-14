import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.view}>
      <View style={styles.boxOne}></View>
      <View style={styles.boxTwo}></View>
      <View style={styles.boxThree}></View>
    </View>
  );
};

export default BoxScreen;

const styles = StyleSheet.create({
  view: {
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 200,
  },
  boxOne: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
  },
  boxTwo: {
    backgroundColor: 'green',
    height: 100,
    width: 100,
    alignSelf: 'flex-end',
  },
  boxThree: {
    backgroundColor: 'purple',
    height: 100,
    width: 100,
  },
});
