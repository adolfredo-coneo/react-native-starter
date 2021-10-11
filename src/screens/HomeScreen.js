import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation: { navigate } }) => {
  
  return (
    <View style={styles.view}>
      <Text style={styles.text}>HomeScreen Adol</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigate('Components')}
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigate('List')}
      />
      <Button
        title="Go to Image Demo"
        onPress={() => navigate('Image')}
      />
      <Button
        title="Go to Counter Demo"
        onPress={() => navigate('Counter')}
      />
      <Button
        title="Go to Color Demo"
        onPress={() => navigate('Color')}
      />
      <Button
        title="Go to Square Demo"
        onPress={() => navigate('Square')}
      />
      <TouchableOpacity onPress={() => navigate('List')}>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    padding: 10
  },
  text: {
    fontSize: 40,
    textAlign: 'center',
  },
});

export default HomeScreen;
