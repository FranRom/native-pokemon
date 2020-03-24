import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import { PAGE_TITLE, INPUT_PLACEHOLDER } from '../../utils/constants';
import { pokemonSearchStyles } from '../../utils/styles';

import PokemonList from './PokemonList';

const PokemonSearch = ({ pokemonsOriginalList }) => {
  const [searchText, setSearchText] = useState('');
  const [pokemonsFilteredList, setPokemonsFilteredList] = useState(null);

  const filterData = inputText => {
    const filteredData = pokemonsOriginalList.filter(item =>
      item.name.toUpperCase().includes(inputText.toUpperCase())
    );

    setSearchText(inputText);
    setPokemonsFilteredList(filteredData);
  };

  return (
    <View style={pokemonSearchStyles.container}>
      <Text style={pokemonSearchStyles.title}>{PAGE_TITLE}</Text>
      <TextInput
        style={pokemonSearchStyles.textInput}
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

export default PokemonSearch;
