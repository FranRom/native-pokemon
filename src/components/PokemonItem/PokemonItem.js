import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { pokemonItemStyles } from '../../utils/STYLES';

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
  const FRONT_IMAGE = sprites && sprites.front_default;
  const BACK_IMAGE = sprites && sprites.back_default;
  const getImageToShow = showInfo ? FRONT_IMAGE : BACK_IMAGE;

  return (
    <View style={pokemonItemStyles.container}>
      <TouchableOpacity onPress={toggleTrueFalse}>
        <View>
          <Image
            style={pokemonItemStyles.image}
            source={{ uri: getImageToShow }}
          />
          <Text style={pokemonItemStyles.name}>{name}</Text>
          {showInfo && (
            <AddtionalInfo height={height} weight={weight} order={order} />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

PokemonItem.propTypes = {
  name: PropTypes.string.isRequired,
  pokemonData: PropTypes.shape({
    sprites: PropTypes.shape({
      front_default: PropTypes.string.isRequired,
      back_default: PropTypes.string.isRequired
    }),
    height: PropTypes.number,
    weight: PropTypes.number,
    order: PropTypes.number
  })
};

export default PokemonItem;
