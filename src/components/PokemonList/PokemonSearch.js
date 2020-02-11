import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { PAGE_TITLE, INPUT_PLACEHOLDER } from '../../utils/CONSTANTS';

import PokemonList from './PokemonList';

const PokemonSearch = ({ pokemonsOriginalList }) => {
  const [searchText, setSearchText] = useState('');
  const [pokemonsFilteredList, setPokemonsFilteredList] = useState(null);

  const filterData = inputText => {
    const filteredData = pokemonsData.filter(item =>
      item.name.includes(inputText)
    );

    setSearchText(inputText);
    setPokemonsFilteredList(filteredData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{PAGE_TITLE}</Text>
      <TextInput
        style={styles.textInput}
        placeholder={INPUT_PLACEHOLDER}
        onChangeText={filterData}
        value={searchText}
      />
      <PokemonList
        pokemonsData={pokemonsFilteredList || pokemonsOriginalList}
      />
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

export default PokemonSearch;
