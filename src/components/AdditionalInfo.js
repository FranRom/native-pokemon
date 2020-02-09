import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const PokemonItem = ({ height, weight, order }) => {
  return (
    <View style={styles.container}>
      <Text>Height: {height}</Text>
      <Text>Weight: {weight}</Text>
      <Text>Order: {order}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    padding: 16,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default PokemonItem;
