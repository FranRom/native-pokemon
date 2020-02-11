import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, FlatList } from 'react-native';

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

PokemonList.propTypes = {
  pokemonsData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  )
};

export default PokemonList;
