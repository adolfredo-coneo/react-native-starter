import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.view}>
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter name here"
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={setName}
      />
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter password here"
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Text style={styles.nameLabel}>Your name is: {name}</Text>
      {password.length < 8 && (
        <Text style={styles.passwordLabel}>
          Password must be at least 8 characters long
        </Text>
      )}
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  view: {
    padding: 50,
  },
  input: {
    margin: 0,
    borderColor: 'black',
    borderWidth: 1,
    height: 40,
  },
  nameLabel: {
    fontSize: 20,
    marginTop: 10,
  },
  passwordLabel: {
    fontSize: 20,
    marginTop: 10,
    color: 'red',
  },
});
