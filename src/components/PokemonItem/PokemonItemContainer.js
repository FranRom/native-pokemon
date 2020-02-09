import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

import PokemonItem from './PokemonItem';

const PokemonItemContainer = ({ name, url }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setHasError(false);
      setIsLoading(true);

      try {
        const response = await axios(url);

        setData(response.data);
      } catch (error) {
        setHasError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <View>
      {hasError && <Text>Something was wrong...</Text>}

      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <PokemonItem name={name} pokemonData={data} />
      )}
    </View>
  );
};

export default PokemonItemContainer;
