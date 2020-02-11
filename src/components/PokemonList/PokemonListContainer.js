import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

import {
  PAGE_TITLE,
  INPUT_PLACEHOLDER,
  LOADING_TEXT,
  ERROR_MESSAGE
} from '../../utils/CONSTANTS';
import useRequestData from '../../utils/useRequestData';

import PokemonList from './PokemonList';

const RESULTS_NUMBER = 50;
const GET_POKEMONS_LIST_ENDPOINT = `https://pokeapi.co/api/v2/pokemon?limit=${RESULTS_NUMBER}`;

const PokemonListContainer = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredResults, setFilteredResults] = useState(null);
  const { isError, isLoading, data } = useRequestData(
    GET_POKEMONS_LIST_ENDPOINT,
    []
  );

  const { results } = data && data.data ? data.data : {};

  const filterData = inputText => {
    const filteredData = results.filter(item => item.name.includes(inputText));

    setSearchText(inputText);
    setFilteredResults(filteredData);
  };

  return (
    <View>
      {isError && <Text>{ERROR_MESSAGE}</Text>}

      {isLoading ? (
        <Text>{LOADING_TEXT}</Text>
      ) : (
        <View style={styles.container}>
          <Text style={styles.title}>{PAGE_TITLE}</Text>
          <TextInput
            style={styles.textInput}
            placeholder={INPUT_PLACEHOLDER}
            onChangeText={filterData}
            value={searchText}
          />
          <PokemonList pokemonsData={filteredResults || results} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 40,
    padding: 16
  },
  title: {
    fontSize: 30,
    textAlign: 'center'
  },
  textInput: {
    marginTop: 16,
    marginBottom: 8,
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF'
  }
});

export default PokemonListContainer;
