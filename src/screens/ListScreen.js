import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 20, gender: 'male' },
    { name: 'Friend #2', age: 21, gender: 'female' },
    { name: 'Friend #3', age: 22, gender: 'male' },
    { name: 'Friend #4', age: 23, gender: 'female' },
    { name: 'Friend #5', age: 24, gender: 'male' },
    { name: 'Friend #6', age: 25, gender: 'male' },
    { name: 'Friend #7', age: 26, gender: 'male' },
    { name: 'Friend #8', age: 27, gender: 'female' },
    { name: 'Friend #9', age: 28, gender: 'male' },
  ];
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => (
          <Text style={styles.textStyle}>
            {item.name} - Age: {item.age} - Gender: {item.gender}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 40,
  },
});

export default ListScreen;
