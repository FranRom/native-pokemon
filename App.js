import React from 'react';
import { StyleSheet, View } from 'react-native';

import PokemonList from './src/components/PokemonList';

export default function App() {
  return (
    <View style={styles.container}>
      <PokemonList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
