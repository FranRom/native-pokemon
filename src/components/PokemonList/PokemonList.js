import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PokemonList = ({ pokemons }) => {
  console.log('POKEMONS:', pokemons);
  return (
    <View style={styles.container}>
      {pokemons.map(pokemon => (
        <Text>{pokemon.name}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default PokemonList;
