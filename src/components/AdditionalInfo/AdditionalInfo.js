import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import { additionalInfoStyles } from '../../utils/STYLES';

const AdditionalInfo = ({ height, weight, order }) => (
  <View style={additionalInfoStyles.container}>
    <Text>Height: {height}</Text>
    <Text>Weight: {weight}</Text>
    <Text>Order: {order}</Text>
  </View>
);

AdditionalInfo.propTypes = {
  height: PropTypes.number,
  weight: PropTypes.number,
  order: PropTypes.number
};

export default AdditionalInfo;
