import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';

import { pokemonListStyles } from '../../utils/Styles';

import PokemonItem from '../PokemonItem';

const PokemonList = ({ pokemonsData }) => (
  <View style={pokemonListStyles.container}>
    <FlatList
      data={pokemonsData}
      renderItem={({ item }) => <PokemonItem name={item.name} url={item.url} />}
      keyExtractor={item => item.name}
    />
  </View>
);

PokemonList.propTypes = {
  pokemonsData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  )
};

export default PokemonList;
