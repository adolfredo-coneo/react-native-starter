import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ColorAdjuster = ({ color, setColorHandler, inc }) => {
  return (
    <View>
      <Text style={styles.text}>{color}</Text>
      <Button
        title={`More ${color}`}
        onPress={() => setColorHandler({ type: `change_${color}`, payload: inc })}
      />
      <Button
        title={`Less ${color}`}
        onPress={() => setColorHandler({ type: `change_${color}`, payload: inc * -1 })}
      />
    </View>
  );
};

export default ColorAdjuster;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginTop: 20,
  },
});
