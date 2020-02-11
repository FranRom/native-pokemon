import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

import useRequestData from '../../utils/useRequestData';

import PokemonItem from './PokemonItem';

const ERROR_MESSAGE = 'Something was wrong...';
const LOADING_TEXT = 'Loading...';

const PokemonItemContainer = ({ name, url }) => {
  const [pokemonData, setPokemonData] = useState([]);
  const { isError, isLoading, data } = useRequestData(url, []);

  useEffect(() => {
    if (data && data.data) {
      setPokemonData(data.data);
    }
  }, [data]);

  return (
    <View>
      {isError && <Text>{ERROR_MESSAGE}</Text>}

      {isLoading ? (
        <Text>{LOADING_TEXT}</Text>
      ) : (
        <PokemonItem name={name} pokemonData={pokemonData} />
      )}
    </View>
  );
};

export default PokemonItemContainer;
