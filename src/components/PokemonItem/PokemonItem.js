import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const PokemonItem = ({ name, pokemonData }) => {
  const { sprites } = pokemonData;

  const DEFAULT_IMAGE = sprites && sprites.front_default;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={DEFAULT_IMAGE} />
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 4,
    padding: 30,
    borderColor: '#2a4944',
    borderWidth: 1,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  image: {
    height: 150,
    width: 150
  }
});

export default PokemonItem;
