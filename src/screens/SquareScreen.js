import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import ColorAdjuster from '../components/ColorAdjuster';

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [color, setColor] = useState('rgb(255, 200, 0)');
  const COLOR_INC_DEC = 10;

  const getColor = () => {
    return `rgb(${red}, ${green}, ${blue})`;
  };

  const setColorHandler = (color, change) => {
    switch (color) {
      case 'Red':
        if (red + change > 255 || red + change < 0) return;
        setRed((current) => current + change);
        break;
      case 'Green':
        if (green + change > 255 || green + change < 0) return;
        setGreen((current) => current + change);
        break;
      case 'Blue':
        if (blue + change > 255 || blue + change < 0) return;
        setBlue((current) => current + change);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setColor(`rgb(${red}, ${green}, ${blue})`);
    console.log(`rgb(${red}, ${green}, ${blue})`);
  }, [red, green, blue]);

  return (
    <View style={styles.view}>
      <ColorAdjuster
        color="Red"
        inc={COLOR_INC_DEC}
        setColorHandler={setColorHandler}
      />
      <ColorAdjuster
        color="Green"
        inc={COLOR_INC_DEC}
        setColorHandler={setColorHandler}
      />
      <ColorAdjuster
        color="Blue"
        inc={COLOR_INC_DEC}
        setColorHandler={setColorHandler}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: color,
          marginTop: 50,
          alignSelf: 'center',
        }}
      />
    </View>
  );
};

export default SquareScreen;

const styles = StyleSheet.create({
  view: {
    padding: 50,
  },
  text: {
    fontSize: 30,
    marginTop: 20,
  },
});
