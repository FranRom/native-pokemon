import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import { additionalInfoStyles } from '../../utils/STYLES';

const AdditionalInfo = ({ height, weight, order }) => (
  <View style={additionalInfoStyles.container}>
    <Text data-test='additional-info-height'>
      Height: <Text data-test='additional-info-height-value'>{height}</Text>
    </Text>
    <Text data-test='additional-info-weight'>
      Weight: <Text data-test='additional-info-weight-value'>{weight}</Text>
    </Text>
    <Text data-test='additional-info-order'>
      Order: <Text data-test='additional-info-order-value'>{order}</Text>
    </Text>
  </View>
);

AdditionalInfo.propTypes = {
  height: PropTypes.number,
  weight: PropTypes.number,
  order: PropTypes.number
};

export default AdditionalInfo;
