import React, { useEffect, useReducer, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import ColorAdjuster from '../components/ColorAdjuster';

const COLOR_INC_DEC = 10;

const reducer = (state, action) => {
  switch (action.type) {
    case 'change_Red':
      if (state.red + action.payload > 255 || state.red + action.payload < 0)
        return state;
      return { ...state, red: state.red + action.payload };
    case 'change_Green':
      if (state.green + action.payload > 255 || state.green + action.payload < 0)
        return state;
      return { ...state, green: state.green + action.payload };
    case 'change_Blue':
      if (state.blue + action.payload > 255 || state.blue + action.payload < 0)
        return state;
      return { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [color, setColor] = useState('rgb(255, 200, 0)');
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  useEffect(() => {
    console.log(`rgb(${red}, ${green}, ${blue})`);
    setColor(`rgb(${red}, ${green}, ${blue})`);
  }, [red, green, blue]);

  return (
    <View style={styles.view}>
      <ColorAdjuster
        color="Red"
        inc={COLOR_INC_DEC}
        setColorHandler={dispatch}
      />
      <ColorAdjuster
        color="Green"
        inc={COLOR_INC_DEC}
        setColorHandler={dispatch}
      />
      <ColorAdjuster
        color="Blue"
        inc={COLOR_INC_DEC}
        setColorHandler={dispatch}
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
