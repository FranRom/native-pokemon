import React from 'react';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';

import PokemonItem from '../PokemonItem';

const PokemonList = ({ pokemonsData }) => (
  <View style={styles.container}>
    <FlatList
      data={pokemonsData}
      renderItem={({ item }) => <PokemonItem name={item.name} url={item.url} />}
      keyExtractor={item => item.name}
    />
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
