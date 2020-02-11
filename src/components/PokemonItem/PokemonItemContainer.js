import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import { LOADING_TEXT, ERROR_MESSAGE } from '../../utils/CONSTANTS';
import useRequestData from '../../utils/useRequestData';

import PokemonItem from './PokemonItem';

const PokemonItemContainer = ({ name, url }) => {
  const [pokemonData, setPokemonData] = useState({});
  const { isError, isLoading, data } = useRequestData(url, []);

  useEffect(() => {
    if (data && data.data) {
      setPokemonData(data.data);
    }
  }, [data]);

  return (
    <View>
      {isError && <Text>{ERROR_MESSAGE}</Text>}

      {isLoading && <Text>{LOADING_TEXT}</Text>}

      {pokemonData && <PokemonItem name={name} pokemonData={pokemonData} />}
    </View>
  );
};

PokemonItemContainer.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default PokemonItemContainer;
