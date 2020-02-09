import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import PokemonItem from '../PokemonItem';

const PokemonList = ({ pokemonsData }) => (
  <View style={styles.container}>
    <ScrollView>
      {pokemonsData.map(({ name, url }) => (
        <PokemonItem name={name} url={url} key={name} />
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default PokemonList;
