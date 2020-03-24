import React from 'react';
import { Text, View } from 'react-native';

import { LOADING_TEXT, ERROR_MESSAGE } from '../../utils/constants';
import useRequestData from '../../utils/useRequestData';

import PokemonSearch from './PokemonSearch';

const RESULTS_NUMBER = 50;
const GET_POKEMONS_LIST_ENDPOINT = `https://pokeapi.co/api/v2/pokemon?limit=${RESULTS_NUMBER}`;

const PokemonsSearchContainer = () => {
  const { isError, isLoading, data } = useRequestData(
    GET_POKEMONS_LIST_ENDPOINT,
    []
  );

  const { results } = data && data.data ? data.data : {};

  return (
    <View>
      {isError && <Text>{ERROR_MESSAGE}</Text>}

      {isLoading ? (
        <Text>{LOADING_TEXT}</Text>
      ) : (
        <PokemonSearch pokemonsOriginalList={results} />
      )}
    </View>
  );
};

export default PokemonsSearchContainer;
