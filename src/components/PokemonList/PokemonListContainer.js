import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

import PokemonList from './PokemonList';

const RESULTS_NUMBER = 50;
const GET_POKEMONS_LIST_ENDPOINT = `https://pokeapi.co/api/v2/pokemon?limit=${RESULTS_NUMBER}`;

const PokemonListContainer = () => {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setHasError(false);

      try {
        const response = await axios(GET_POKEMONS_LIST_ENDPOINT);

        setData(response.data.results);
      } catch (error) {
        setHasError(true);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      {hasError && <Text>Something was wrong...</Text>}
      <PokemonList pokemons={data} />
    </View>
  );
};

export default PokemonListContainer;
