import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import axios from 'axios';

import PokemonList from './PokemonList';

const RESULTS_NUMBER = 50;
const GET_POKEMONS_LIST_ENDPOINT = `https://pokeapi.co/api/v2/pokemon?limit=${RESULTS_NUMBER}`;
const PLACEHOLDER = 'Search here...';
const PAGE_TITLE = 'POKEMON LIST';

const PokemonListContainer = () => {
  const [originalData, setOriginalData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setHasError(false);
      setIsLoading(true);

      try {
        const response = await axios(GET_POKEMONS_LIST_ENDPOINT);

        setOriginalData(response.data.results);
      } catch (error) {
        setHasError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  const filterData = inputText => {
    const results = originalData.filter(
      item => item.name === inputText.toLowerCase()
    );

    setSearchText(inputText);
    setFilteredData(results);
  };

  return (
    <View>
      {hasError && <Text>Something was wrong...</Text>}

      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View style={styles.container}>
          <Text style={styles.title}>{PAGE_TITLE}</Text>
          <TextInput
            style={styles.textInput}
            placeholder={PLACEHOLDER}
            onChangeText={filterData}
            value={searchText}
          />
          <PokemonList pokemonsData={filteredData || originalData} />
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
