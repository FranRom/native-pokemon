import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

import AddtionalInfo from '../AdditionalInfo';

const PlayCryAudio = sourceId => {
  const crySoundPath = `https://play.pokemonshowdown.com/audio/cries/${sourceId}.mp3`;
  const cryAudio = new Audio(crySoundPath);

  cryAudio.play();
};

const PokemonItem = ({ name, pokemonData }) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleTrueFalse = () => {
    setShowInfo(!showInfo);
    PlayCryAudio(name);
  };

  const { sprites, height, weight, order } = pokemonData;
  const DEFAULT_IMAGE = sprites && sprites.front_default;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleTrueFalse}>
        <View>
          <Image style={styles.image} source={{ uri: DEFAULT_IMAGE }} />
          <Text style={styles.name}>{name}</Text>
          {showInfo && (
            <AddtionalInfo height={height} weight={weight} order={order} />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 4,
    padding: 30,
    borderColor: '#2a4944',
    borderWidth: 1,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  name: {
    fontSize: 20,
    textAlign: 'center'
  },
  image: {
    height: 150,
    width: 150
  }
});

export default PokemonItem;
