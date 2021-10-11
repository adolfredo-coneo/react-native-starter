import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  const addRandomColor = () => {
    // generate random color
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${r}, ${g}, ${b})`;
    // add to array
    setColors((currentColors) => [...currentColors, randomColor]);
  };

  return (
    <View style={styles.view}>
      <Button title="Add Color" onPress={addRandomColor} />
      <FlatList
        data={colors}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return (
            <View
              style={{ height: 100, width: 100, backgroundColor: item }}
            />
          );
        }}
      />
    </View>
  );
};

export default ColorScreen;

const styles = StyleSheet.create({
  view: {
    padding: 50,
  },
});
